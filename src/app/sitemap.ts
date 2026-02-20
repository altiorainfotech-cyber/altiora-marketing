import { MetadataRoute } from 'next'
import connectDB from '@/lib/mongodb'
import BlogPost from '@/lib/models/BlogPost'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://altiorainfotech.com'

  // Static pages with updated priorities and change frequencies
  const staticPages: MetadataRoute.Sitemap = [
    // Main pages
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Web2 Services
    {
      url: `${baseUrl}/services/web2`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/web2/api-development-integration`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/web2/cloud-migration-managed-hosting`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/web2/custom-web-application-development`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/web2/devops-consulting`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/web2/e-commerce-development`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/web2/headless-cms-content-ops`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/web2/mobile-application-development`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/web2/qa-automation`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/web2/saas-application-development`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/website-development-services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    // Digital Marketing Services
    {
      url: `${baseUrl}/services/digital-marketing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/digital-marketing-strategy`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/ppc`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/search-engine-marketing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/seo`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/paid-advertisement-services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/social-media-management`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/digital-marketing-company-in-vancouver`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/digital-marketing-company-in-burnaby`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/digital-marketing-company-in-richmond`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },

    // Legal Pages
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-conditions`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]

  try {
    // Connect to MongoDB and fetch published blog posts
    await connectDB()

    const blogPosts = await BlogPost.find({ status: 'published' })
      .select('href date updatedAt')
      .sort({ date: -1 })
      .lean()

    // Add blog post URLs with appropriate priority based on recency
    const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post, index) => {
      // Recent posts get higher priority
      let priority = 0.6
      if (index < 5) priority = 0.75
      if (index < 10) priority = 0.7

      return {
        url: `${baseUrl}${post.href}`,
        lastModified: new Date(post.updatedAt || post.date),
        changeFrequency: 'monthly' as const,
        priority,
      }
    })

    // Combine and return
    return [...staticPages, ...blogUrls]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    // Return static pages only if database connection fails
    return staticPages
  }
}