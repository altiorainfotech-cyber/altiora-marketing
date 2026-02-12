import { NextRequest, NextResponse } from 'next/server'

interface SEOData {
  path: string
  slug: string
  metaTitle: string
  metaDescription: string
  robots?: string
  openGraph?: {
    title?: string
    description?: string
    image?: string
  }
  updatedAt?: string
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string }> }
) {
  try {
    const { path: pathParam } = await params
    const path = decodeURIComponent(pathParam)
    
    // Fetching SEO data
    
    // Fetch from admin public API
    const adminApiUrl = process.env.ADMIN_API_URL || 'http://localhost:3000'
    const apiUrl = `${adminApiUrl}/api/public/seo/${encodeURIComponent(path)}?siteId=altiorainfotech`
    
    // Fetching from admin API
    
    const response = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { 
        revalidate: 300, // Cache for 5 minutes
        tags: [`admin-seo-${path}`] // Tag for targeted revalidation
      }
    })

    // Admin API response received

    if (!response.ok) {
      return NextResponse.json({ error: 'SEO data not found' }, { status: 404 })
    }

    const seoData: SEOData = await response.json()
    
    return NextResponse.json(seoData, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch SEO data' },
      { status: 500 }
    )
  }
}