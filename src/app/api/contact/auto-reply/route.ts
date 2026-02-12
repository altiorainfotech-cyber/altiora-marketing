import { NextRequest, NextResponse } from 'next/server';
import { sendAutoReply } from '@/lib/emailService';

// Security headers
const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
};

export async function POST(request: NextRequest) {
  try {
    // Validate content type
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
    const { firstName, lastName, email } = body;

    // Validate required fields
    if (!firstName || !email) {
      return NextResponse.json(
        { error: 'First name and email are required' },
        { 
          status: 400,
          headers: SECURITY_HEADERS
        }
      );
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { 
          status: 400,
          headers: SECURITY_HEADERS
        }
      );
    }

    // Send auto-reply email
    const success = await sendAutoReply({
      firstName: firstName.trim(),
      lastName: lastName?.trim(),
      email: email.trim().toLowerCase(),
    });

    if (success) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Auto-reply sent successfully' 
        },
        { 
          status: 200,
          headers: SECURITY_HEADERS
        }
      );
    } else {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to send auto-reply' 
        },
        { 
          status: 500,
          headers: SECURITY_HEADERS
        }
      );
    }

  } catch (error) {
    console.error('Auto-reply API error:', error);
    
    return NextResponse.json(
      { error: 'Internal server error' },
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
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    }
  });
}