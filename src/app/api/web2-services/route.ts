import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Web2Service from '@/models/Web2Service';

// GET all web2 services
export async function GET() {
  try {
    await connectDB();
    const services = await Web2Service.find({});
    return NextResponse.json({ success: true, data: services });
  } catch (error) {
    console.error('Error fetching web2 services:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
}

// POST create new web2 service
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    
    const service = new Web2Service(body);
    await service.save();
    
    return NextResponse.json({ success: true, data: service }, { status: 201 });
  } catch (error) {
    console.error('Error creating web2 service:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create service' },
      { status: 500 }
    );
  }
}