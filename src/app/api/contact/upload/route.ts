import { NextRequest, NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import crypto from 'crypto';

// Security headers
const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
};

// Rate limiting store
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Clean up expired entries
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitStore.entries()) {
    if (value.resetTime < now) {
      rateLimitStore.delete(key);
    }
  }
}, 5 * 60 * 1000);

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  return forwarded ? forwarded.split(',')[0].trim() : realIp || 'unknown';
}

function isRateLimited(ip: string): boolean {
  const key = `upload:${ip}`;
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 10; // 10 upload requests per 15 minutes

  const record = rateLimitStore.get(key);
  
  if (!record || record.resetTime < now) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs });
    return false;
  }

  if (record.count >= maxRequests) {
    return true;
  }

  record.count++;
  return false;
}

function validateCSRF(request: NextRequest): boolean {
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');
  
  // In development, be more lenient
  if (process.env.NODE_ENV === 'development') {
    const localhostOrigins = ['http://localhost:3000', 'http://localhost:3001', 'http://127.0.0.1:3000'];
    if (localhostOrigins.some(allowed => origin === allowed || referer?.startsWith(allowed + '/'))) {
      return true;
    }
  }
  
  const allowedOrigins = [
    process.env.NEXT_PUBLIC_SITE_URL,
    'https://altiora.com',
    'https://www.altiora.com'
  ].filter(Boolean);

  return allowedOrigins.some(allowed => 
    origin === allowed || referer?.startsWith(allowed + '/')
  );
}

// Initialize R2 client
const r2Client = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

// Allowed file types and their MIME types
const ALLOWED_FILE_TYPES = {
  // Documents
  'application/pdf': '.pdf',
  'application/msword': '.doc',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '.docx',
  'text/plain': '.txt',
  'text/markdown': '.md',
  
  // Spreadsheets
  'application/vnd.ms-excel': '.xls',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': '.xlsx',
  'text/csv': '.csv',
  
  // Presentations
  'application/vnd.ms-powerpoint': '.ppt',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation': '.pptx',
  
  // Images
  'image/jpeg': '.jpg',
  'image/png': '.png',
  'image/gif': '.gif',
  'image/webp': '.webp',
  
  // Archives
  'application/zip': '.zip',
  'application/x-rar-compressed': '.rar',
  'application/x-7z-compressed': '.7z',
};

function sanitizeFileName(fileName: string): string {
  // Remove path traversal attempts and dangerous characters
  return fileName
    .replace(/[^a-zA-Z0-9._-]/g, '_')
    .replace(/\.+/g, '.')
    .substring(0, 100); // Limit length
}

function generateUniqueFileName(originalName: string, senderName: string): string {
  const timestamp = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  const randomId = crypto.randomBytes(8).toString('hex');
  const sanitizedOriginalName = sanitizeFileName(originalName);
  const sanitizedSenderName = sanitizeFileName(senderName.replace(/\s+/g, '_'));
  
  // Generate a unique ID for this submission (shorter ID for folder structure)
  const submissionId = crypto.randomBytes(4).toString('hex').toUpperCase(); // 8-character ID
  
  // Create folder structure: contact_us/ID_John_Doe/2025-12-16/abc123_document.pdf
  return `contact_us/${submissionId}_${sanitizedSenderName}/${timestamp}/${randomId}_${sanitizedOriginalName}`;
}

export async function POST(request: NextRequest) {
  try {
    // Security checks
    const clientIP = getClientIP(request);
    const origin = request.headers.get('origin');
    const referer = request.headers.get('referer');
    
    // Upload API security check
    
    // Rate limiting
    if (isRateLimited(clientIP)) {
      return NextResponse.json(
        { error: 'Too many upload requests. Please try again later.' },
        { 
          status: 429,
          headers: {
            ...SECURITY_HEADERS,
            'Retry-After': '900'
          }
        }
      );
    }

    // CSRF protection
    const csrfValid = validateCSRF(request);
    
    if (!csrfValid) {
      return NextResponse.json(
        { error: 'Invalid request origin' },
        { 
          status: 403,
          headers: SECURITY_HEADERS
        }
      );
    }

    const body = await request.json();
    const { fileName, fileSize, mimeType, senderName } = body;

    // Validate required fields
    if (!fileName || !fileSize || !mimeType || !senderName) {
      return NextResponse.json(
        { error: 'Missing required fields: fileName, fileSize, mimeType, senderName' },
        { 
          status: 400,
          headers: SECURITY_HEADERS
        }
      );
    }

    // Validate file size (50MB max)
    const maxSize = 50 * 1024 * 1024; // 50MB in bytes
    if (fileSize > maxSize) {
      return NextResponse.json(
        { error: 'File size exceeds 50MB limit' },
        { 
          status: 400,
          headers: SECURITY_HEADERS
        }
      );
    }

    // Validate file type
    if (!ALLOWED_FILE_TYPES[mimeType as keyof typeof ALLOWED_FILE_TYPES]) {
      return NextResponse.json(
        { error: 'File type not allowed. Supported formats: PDF, Word, Excel, PowerPoint, Text, Markdown, Images, Archives' },
        { 
          status: 400,
          headers: SECURITY_HEADERS
        }
      );
    }

    // Generate unique file name with sender folder structure
    const uniqueFileName = generateUniqueFileName(fileName, senderName);

    // Create presigned URL for upload (expires in 10 minutes)
    const command = new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME!,
      Key: uniqueFileName,
      ContentType: mimeType,
      ContentLength: fileSize,
      Metadata: {
        'original-name': Buffer.from(fileName, 'utf8').toString('base64'),
        'sender-name': Buffer.from(senderName, 'utf8').toString('base64'),
        'upload-ip': clientIP,
        'upload-timestamp': new Date().toISOString()
      }
    });

    // Instead of presigned URL, return upload endpoint for server-side upload
    const uploadEndpoint = `/api/contact/upload-file`;
    const publicUrl = `${process.env.R2_PUBLIC_URL}/${uniqueFileName}`;

    return NextResponse.json(
      {
        success: true,
        uploadEndpoint: uploadEndpoint,
        fileName: uniqueFileName,
        publicUrl: publicUrl,
        uploadToken: Buffer.from(JSON.stringify({
          fileName: uniqueFileName,
          originalName: fileName,
          senderName: senderName,
          mimeType: mimeType,
          timestamp: Date.now()
        })).toString('base64')
      },
      { 
        status: 200,
        headers: {
          ...SECURITY_HEADERS,
          'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      }
    );

  } catch (error) {
    console.error('Upload URL generation error:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      ip: getClientIP(request),
      timestamp: new Date().toISOString()
    });
    
    return NextResponse.json(
      { error: 'Unable to generate upload URL. Please try again later.' },
      { 
        status: 500,
        headers: SECURITY_HEADERS
      }
    );
  }
}

// OPTIONS handler for CORS preflight
export async function OPTIONS(request: NextRequest) {
  return NextResponse.json({}, {
    status: 200,
    headers: {
      ...SECURITY_HEADERS,
      'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_SITE_URL || 'https://altiora.com',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type, Origin, Referer',
      'Access-Control-Max-Age': '86400',
    }
  });
}