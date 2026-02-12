import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Web2Service from '@/models/Web2Service';

// GET digital marketing service
export async function GET() {
  try {
    await connectDB();
    const service = await Web2Service.findOne({ serviceType: 'digital-marketing-services' });
    
    if (!service) {
      return NextResponse.json(
        { success: false, error: 'Service not found' },
        { status: 404 }
      );
    }
    
    // Return customData if it exists, otherwise return the whole service
    const data = service.hasCustomLayout && service.customData ? service.customData : service;
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error fetching digital marketing service:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch service' },
      { status: 500 }
    );
  }
}

// PUT update digital marketing service
export async function PUT(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    
    const service = await Web2Service.findOneAndUpdate(
      { serviceType: 'digital-marketing-services' },
      { 
        serviceType: 'digital-marketing-services',
        hasCustomLayout: true,
        customData: body,
        seoMetadata: body.seoMetadata || { title: '', description: '' }
      },
      { new: true, upsert: true }
    );
    
    return NextResponse.json({ success: true, data: service.customData });
  } catch (error) {
    console.error('Error updating digital marketing service:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update service' },
      { status: 500 }
    );
  }
}

// DELETE digital marketing service
export async function DELETE() {
  try {
    await connectDB();
    const service = await Web2Service.findOneAndDelete({ serviceType: 'digital-marketing-services' });
    
    if (!service) {
      return NextResponse.json(
        { success: false, error: 'Service not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Error deleting digital marketing service:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete service' },
      { status: 500 }
    );
  }
}
