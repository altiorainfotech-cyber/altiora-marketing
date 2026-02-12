import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import AIMLServicePage from '@/models/AIMLServicePage';

// Force dynamic rendering - disable caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    await dbConnect();
    
    const pageData = await AIMLServicePage.findOne({ 
      pageSlug: 'ai-ml-main',
      isActive: true 
    }).lean();

    if (!pageData) {
      return NextResponse.json(
        { error: 'AI/ML service page not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(pageData, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  } catch (error) {
    console.error('Error fetching AI/ML service page:', error);
    return NextResponse.json(
      { error: 'Failed to fetch AI/ML service page data' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    
    const data = await request.json();
    
    // Check if page already exists
    const existingPage = await AIMLServicePage.findOne({ pageSlug: 'ai-ml-main' });
    
    if (existingPage) {
      // Update existing page
      const updatedPage = await AIMLServicePage.findOneAndUpdate(
        { pageSlug: 'ai-ml-main' },
        data,
        { new: true, runValidators: true }
      );
      
      return NextResponse.json({
        message: 'AI/ML service page updated successfully',
        data: updatedPage
      });
    } else {
      // Create new page
      const newPage = await AIMLServicePage.create({
        ...data,
        pageSlug: 'ai-ml-main'
      });
      
      return NextResponse.json({
        message: 'AI/ML service page created successfully',
        data: newPage
      }, { status: 201 });
    }
  } catch (error) {
    console.error('Error saving AI/ML service page:', error);
    return NextResponse.json(
      { error: 'Failed to save AI/ML service page data' },
      { status: 500 }
    );
  }
}
