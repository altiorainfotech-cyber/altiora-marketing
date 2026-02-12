import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const path = searchParams.get('path');
    const tag = searchParams.get('tag');

    if (path) {
      // Revalidate specific path
      revalidatePath(path);
      
      return NextResponse.json({ 
        success: true, 
        message: `Revalidated path: ${path}`,
        timestamp: new Date().toISOString()
      });
    }

    if (tag) {
      // Tag revalidation not supported in this Next.js version
      
      return NextResponse.json({ 
        success: false, 
        message: `Tag revalidation not supported`,
        timestamp: new Date().toISOString()
      }, { status: 400 });
    }

    // Default: revalidate blog pages
    revalidatePath('/blog');
    revalidatePath('/api/blogs');

    return NextResponse.json({ 
      success: true, 
      message: 'Revalidated blog paths',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to revalidate',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}