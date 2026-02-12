import { Metadata } from 'next'

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

export async function fetchSEOData(path: string): Promise<SEOData | null> {
  try {
    // During build time, skip API calls to avoid connection errors
    // Check if we're in a build context (no runtime environment)
    const isBuildTime = typeof window === 'undefined' && process.env.NEXT_PHASE === 'phase-production-build'

    if (isBuildTime) {
      return null
    }

    const adminApiUrl = process.env.ADMIN_API_URL

    // Skip if no admin API URL is configured or in development
    if (!adminApiUrl || process.env.NODE_ENV !== 'production') {
      return null
    }

    const apiUrl = `${adminApiUrl}/api/public/seo/${encodeURIComponent(path)}?siteId=altiorainfotech`

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 3000) // 3 second timeout

    const response = await fetch(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      next: {
        revalidate: process.env.NODE_ENV === 'production' ? 60 : 0,
        tags: [`admin-seo-${path}`]
      }
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      return null
    }

    return await response.json()
  } catch (error) {
    // Silently fail during build, log in runtime
    if (typeof window !== 'undefined' || process.env.NODE_ENV !== 'production') {
      console.error(`Error fetching SEO data for ${path}:`, error)
    }
    return null
  }
}

export async function generateSEOMetadata(
  path: string,
  fallback: {
    title: string
    description: string
  }
): Promise<Metadata> {
  const seoData = await fetchSEOData(path)
  
  if (seoData) {
    return {
      title: seoData.metaTitle,
      description: seoData.metaDescription,
      robots: seoData.robots || 'index,follow',
      openGraph: seoData.openGraph ? {
        title: seoData.openGraph.title || seoData.metaTitle,
        description: seoData.openGraph.description || seoData.metaDescription,
        ...(seoData.openGraph.image && { images: [{ url: seoData.openGraph.image }] })
      } : {
        title: seoData.metaTitle,
        description: seoData.metaDescription
      }
    }
  }

  // Fallback to static metadata if no SEO data found
  return {
    title: fallback.title,
    description: fallback.description,
    robots: 'index,follow'
  }
}