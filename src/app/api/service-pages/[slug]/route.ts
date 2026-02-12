import { NextRequest, NextResponse } from 'next/server';
import { getServicePageData } from '@/lib/servicePages';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const pageData = await getServicePageData(slug);

    if (!pageData) {
      return NextResponse.json(
        { error: 'Service page not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(pageData);
  } catch (error) {
    console.error('Error in service page API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
