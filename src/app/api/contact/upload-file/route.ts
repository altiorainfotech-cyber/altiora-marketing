import { NextRequest, NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

// Security headers
const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  'Access-Control-Allow-Methods': 'POST',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// Initialize R2 client
const r2Client = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

export async function POST(request: NextRequest) {
  try {
    
    // Get form data
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const uploadToken = formData.get('uploadToken') as string;
    
    if (!file || !uploadToken) {
      return NextResponse.json(
        { error: 'Missing file or upload token' },
        { status: 400, headers: SECURITY_HEADERS }
      );
    }
    
    // Decode and validate upload token
    let tokenData;
    try {
      tokenData = JSON.parse(Buffer.from(uploadToken, 'base64').toString());
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid upload token' },
        { status: 400, headers: SECURITY_HEADERS }
      );
    }
    
    // Validate token timestamp (5 minutes expiry)
    const tokenAge = Date.now() - tokenData.timestamp;
    if (tokenAge > 5 * 60 * 1000) {
      return NextResponse.json(
        { error: 'Upload token expired' },
        { status: 400, headers: SECURITY_HEADERS }
      );
    }
    
    // Validate file matches token
    if (file.name !== tokenData.originalName || file.type !== tokenData.mimeType) {
      return NextResponse.json(
        { error: 'File does not match upload token' },
        { status: 400, headers: SECURITY_HEADERS }
      );
    }
    
    // Uploading file to R2
    
    // Convert file to buffer
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    
    // Upload to R2
    const command = new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME!,
      Key: tokenData.fileName,
      Body: fileBuffer,
      ContentType: tokenData.mimeType,
      ContentLength: file.size,
      Metadata: {
        'original-name': Buffer.from(tokenData.originalName, 'utf8').toString('base64'),
        'sender-name': Buffer.from(tokenData.senderName, 'utf8').toString('base64'),
        'upload-timestamp': new Date().toISOString()
      }
    });
    
    await r2Client.send(command);
    
    const publicUrl = `${process.env.R2_PUBLIC_URL}/${tokenData.fileName}`;
    
    return NextResponse.json(
      {
        success: true,
        fileName: tokenData.fileName,
        publicUrl: publicUrl
      },
      { 
        status: 200,
        headers: SECURITY_HEADERS
      }
    );
    
  } catch (error) {
    console.error('❌ Server-side upload error:', error);
    
    return NextResponse.json(
      { error: 'Failed to upload file' },
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
    headers: SECURITY_HEADERS
  });
}