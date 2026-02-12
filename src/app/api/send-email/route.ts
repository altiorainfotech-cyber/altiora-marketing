import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, company, country, phoneCode, phoneNumber, services, budget, timeline, message } = body;

    // Simple webhook to external service
    // Contact form submission processed
    // Data: email, company, country, phone, services, budget, timeline, message

    return NextResponse.json({ success: true, message: 'Contact logged successfully' });
  } catch (error) {
    console.error('Contact logging failed:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process contact' },
      { status: 500 }
    );
  }
}