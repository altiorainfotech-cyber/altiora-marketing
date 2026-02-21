import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/lib/models/Contact';
import { sendAutoReply, sendAdminNotification } from '@/lib/emailService';

// Security headers
const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
};

// Rate limiting store (use Redis in production)
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
  const key = `contact:${ip}`;
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 3; // Only 3 contact submissions per 15 minutes

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

function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential XSS characters
    .substring(0, 1000); // Limit length
}

function validateCSRF(request: NextRequest): boolean {
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');

  // Allow requests from your domain only
  const allowedOrigins = [
    process.env.NEXT_PUBLIC_SITE_URL,
    'https://altiora.com',
    'https://www.altiora.com'
  ].filter(Boolean);

  return allowedOrigins.some(allowed =>
    origin === allowed || referer?.startsWith(allowed + '/')
  );
}

export async function POST(request: NextRequest) {
  try {
    // Security checks
    const clientIP = getClientIP(request);

    // Rate limiting
    if (isRateLimited(clientIP)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: {
            ...SECURITY_HEADERS,
            'Retry-After': '900' // 15 minutes
          }
        }
      );
    }

    // CSRF protection
    if (!validateCSRF(request)) {
      return NextResponse.json(
        { error: 'Invalid request origin' },
        {
          status: 403,
          headers: SECURITY_HEADERS
        }
      );
    }

    // Content-Type validation
    const contentType = request.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      return NextResponse.json(
        { error: 'Invalid content type' },
        {
          status: 400,
          headers: SECURITY_HEADERS
        }
      );
    }

    const body = await request.json();

    const {
      firstName,
      lastName,
      email,
      company,
      country,
      phoneCode,
      phoneNumber,
      message,
      attachments
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phoneNumber) {
      return NextResponse.json(
        { error: 'All required fields must be provided, including phone number' },
        {
          status: 400,
          headers: SECURITY_HEADERS
        }
      );
    }

    // Validate attachments if provided
    if (attachments && Array.isArray(attachments)) {
      if (attachments.length > 5) {
        return NextResponse.json(
          { error: 'Maximum 5 files allowed' },
          {
            status: 400,
            headers: SECURITY_HEADERS
          }
        );
      }

      // Validate each attachment
      for (const attachment of attachments) {
        if (!attachment.originalName || !attachment.fileName || !attachment.fileSize || !attachment.mimeType || !attachment.r2Url) {
          return NextResponse.json(
            { error: 'Invalid attachment data' },
            {
              status: 400,
              headers: SECURITY_HEADERS
            }
          );
        }

        // Validate file size (50MB max)
        if (attachment.fileSize > 50 * 1024 * 1024) {
          return NextResponse.json(
            { error: 'File size exceeds 50MB limit' },
            {
              status: 400,
              headers: SECURITY_HEADERS
            }
          );
        }
      }
    }

    // Sanitize inputs
    const sanitizedData = {
      firstName: sanitizeInput(firstName),
      lastName: sanitizeInput(lastName),
      email: sanitizeInput(email),
      company: company ? sanitizeInput(company) : undefined,
      country: country ? sanitizeInput(country) : undefined,
      phoneCode: phoneCode ? sanitizeInput(phoneCode) : undefined,
      phoneNumber: phoneNumber ? sanitizeInput(phoneNumber) : undefined,
      message: message && message.trim() && message.trim().length > 0 ? sanitizeInput(message) : undefined,
      attachments: attachments && Array.isArray(attachments) ? attachments.map((att: any) => ({
        originalName: sanitizeInput(att.originalName),
        fileName: sanitizeInput(att.fileName),
        fileSize: att.fileSize,
        mimeType: sanitizeInput(att.mimeType),
        r2Url: sanitizeInput(att.r2Url),
        uploadedAt: new Date()
      })) : undefined
    };

    // Enhanced validation
    const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(sanitizedData.email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        {
          status: 400,
          headers: SECURITY_HEADERS
        }
      );
    }

    // Phone number validation (required field)
    if (!sanitizedData.phoneNumber || !sanitizedData.phoneNumber.trim()) {
      return NextResponse.json(
        { error: 'Phone number is required' },
        {
          status: 400,
          headers: SECURITY_HEADERS
        }
      );
    }

    const phoneRegex = /^\d{10,15}$/;
    if (!phoneRegex.test(sanitizedData.phoneNumber)) {
      return NextResponse.json(
        { error: 'Phone number must contain only digits and be 10-15 characters long' },
        {
          status: 400,
          headers: SECURITY_HEADERS
        }
      );
    }

    // Message length validation (optional field)
    // Only validate maximum length if message exists
    if (sanitizedData.message && sanitizedData.message.length > 2000) {
      return NextResponse.json(
        { error: 'Message cannot exceed 2000 characters' },
        {
          status: 400,
          headers: SECURITY_HEADERS
        }
      );
    }

    // Create new contact document with additional security fields
    const contactData = {
      firstName: sanitizedData.firstName,
      lastName: sanitizedData.lastName,
      email: sanitizedData.email.toLowerCase(),
      company: sanitizedData.company,
      country: sanitizedData.country,
      phoneCode: sanitizedData.phoneCode,
      phoneNumber: sanitizedData.phoneNumber,
      message: sanitizedData.message,
      attachments: sanitizedData.attachments,
      submittedAt: new Date(),
      clientIP: clientIP,
      userAgent: request.headers.get('user-agent')?.substring(0, 200) || 'unknown'
    };

    // Save to database (non-blocking — email notification still sends even if DB fails)
    let savedContact: any = null;
    try {
      await connectDB();
      const contact = new Contact(contactData);
      savedContact = await contact.save();
    } catch (dbError) {
      console.error('Database save failed:', dbError instanceof Error ? dbError.message : 'DB error');
    }

    // Always send admin notification regardless of DB status
    let adminNotificationSuccess = false;
    try {
      adminNotificationSuccess = await sendAdminNotification(contactData);
    } catch (adminEmailError) {
      // Email failed silently
    }

    // Update DB record with email status if it was saved
    if (savedContact) {
      try {
        await Contact.findByIdAndUpdate(savedContact._id, {
          adminNotificationSent: adminNotificationSuccess,
          adminNotificationSentAt: adminNotificationSuccess ? new Date() : undefined,
        });
      } catch (updateError) {
        console.error('Failed to update email status:', updateError);
      }
    }

    // Return minimal response (don't expose database ID)
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message. We will get back to you soon.'
      },
      {
        status: 201,
        headers: SECURITY_HEADERS
      }
    );

  } catch (error) {
    console.error('Contact form error:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      ip: getClientIP(request),
      timestamp: new Date().toISOString()
    });

    // Generic error response (don't expose internal details)
    return NextResponse.json(
      { error: 'Unable to process your request. Please try again later.' },
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
      'Access-Control-Max-Age': '86400', // 24 hours
    }
  });
}

// GET endpoint removed for security - contact data should not be publicly accessible
// Admin access should be through a separate authenticated admin API