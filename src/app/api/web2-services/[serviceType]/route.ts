import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Web2Service from '@/models/Web2Service';

// GET specific web2 service by type
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ serviceType: string }> }
) {
  try {
    await connectDB();
    const { serviceType } = await params;
    const service = await Web2Service.findOne({ serviceType });
    
    if (!service) {
      return NextResponse.json(
        { success: false, error: 'Service not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: service });
  } catch (error) {
    console.error('Error fetching web2 service:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch service' },
      { status: 500 }
    );
  }
}

// PUT update specific web2 service
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ serviceType: string }> }
) {
  try {
    await connectDB();
    const body = await request.json();
    const { serviceType } = await params;
    
    const service = await Web2Service.findOneAndUpdate(
      { serviceType },
      body,
      { new: true, upsert: true }
    );
    
    return NextResponse.json({ success: true, data: service });
  } catch (error) {
    console.error('Error updating web2 service:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update service' },
      { status: 500 }
    );
  }
}

// DELETE specific web2 service
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ serviceType: string }> }
) {
  try {
    await connectDB();
    const { serviceType } = await params;
    const service = await Web2Service.findOneAndDelete({ serviceType });
    
    if (!service) {
      return NextResponse.json(
        { success: false, error: 'Service not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Error deleting web2 service:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete service' },
      { status: 500 }
    );
  }
}