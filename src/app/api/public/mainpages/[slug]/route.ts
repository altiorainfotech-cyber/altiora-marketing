import { NextRequest, NextResponse } from 'next/server'
import { getDatabase } from '@/lib/mongodb'

// Force dynamic rendering - disable caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    const db = await getDatabase()
    const collection = db.collection('mainpages')

    const page = await collection.findOne({ slug, isActive: true })

    if (!page) {
      return NextResponse.json({ error: 'Page not found' }, { status: 404 })
    }

    return NextResponse.json({ 
      success: true, 
      page 
    }, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
    })

  } catch (error) {
    console.error('Error fetching main page:', error)
    return NextResponse.json(
      { error: 'Failed to fetch page' },
      { status: 500 }
    )
  }
}
