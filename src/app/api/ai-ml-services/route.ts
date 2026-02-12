import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import AiMlService from '@/models/AiMlService';

// GET all AI-ML services
export async function GET() {
  try {
    await connectDB();
    const services = await AiMlService.find({});
    return NextResponse.json({ success: true, data: services });
  } catch (error) {
    console.error('Error fetching AI-ML services:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
}

// POST create new AI-ML service
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const service = await AiMlService.create(body);
    return NextResponse.json({ success: true, data: service }, { status: 201 });
  } catch (error) {
    console.error('Error creating AI-ML service:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create service' },
      { status: 500 }
    );
  }
}
