import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Web2Service from '@/models/Web2Service';

// GET code to cloud service
export async function GET() {
  try {
    await connectDB();
    const service = await Web2Service.findOne({ serviceType: 'from-code-to-cloud-end-to-end' });
    
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
    console.error('Error fetching code to cloud service:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch service' },
      { status: 500 }
    );
  }
}

// PUT update code to cloud service
export async function PUT(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    
    const service = await Web2Service.findOneAndUpdate(
      { serviceType: 'from-code-to-cloud-end-to-end' },
      { 
        serviceType: 'from-code-to-cloud-end-to-end',
        hasCustomLayout: true,
        customData: body,
        seoMetadata: body.seoMetadata || { title: '', description: '' }
      },
      { new: true, upsert: true }
    );
    
    return NextResponse.json({ success: true, data: service.customData });
  } catch (error) {
    console.error('Error updating code to cloud service:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update service' },
      { status: 500 }
    );
  }
}

// DELETE code to cloud service
export async function DELETE() {
  try {
    await connectDB();
    const service = await Web2Service.findOneAndDelete({ serviceType: 'from-code-to-cloud-end-to-end' });
    
    if (!service) {
      return NextResponse.json(
        { success: false, error: 'Service not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Error deleting code to cloud service:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete service' },
      { status: 500 }
    );
  }
}
