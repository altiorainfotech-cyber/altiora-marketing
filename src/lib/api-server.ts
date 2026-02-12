// Server-only API functions that directly access the database
import 'server-only';
import type { BlogListResponse, BlogPostResponse } from './api-types';

// Direct database access for server-side calls
export async function fetchBlogPostsFromDB(options: {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
} = {}): Promise<BlogListResponse> {
  try {
    // Import here to avoid issues with client-side rendering
    const connectDB = (await import('@/lib/mongodb')).default;
    const BlogPost = (await import('@/lib/models/BlogPost')).default;
    
    await connectDB();

    const { page = 1, limit = 10, category, search } = options;

    // Build query - only fetch published posts
    const query: Record<string, unknown> = { status: 'published' };
    
    if (category) {
      query.category = category;
    }
    
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } },
        { author: { $regex: search, $options: 'i' } }
      ];
    }

    // Calculate pagination
    const skip = (page - 1) * limit;

    // Execute queries
    const [posts, total] = await Promise.all([
      BlogPost.find(query)
        .select('id title excerpt image category date author href')
        .sort({ date: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      BlogPost.countDocuments(query)
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      success: true,
      data: {
        posts: posts.map((post: Record<string, unknown>) => ({
          id: post.id as string,
          title: post.title as string,
          content: post.content as string,
          excerpt: post.excerpt as string,
          href: post.href as string,
          image: post.image as string,
          category: post.category as string,
          date: post.date as string,
          author: (post.author as string) || 'Altiora Team',
          seo: post.seo as { metaTitle?: string; metaDescription?: string; keywords?: string[] },
        })),
        pagination: {
          page,
          limit,
          total,
          totalPages,
          hasNext: page < totalPages,
          hasPrev: page > 1,
        },
      },
      cached: false,
    };
  } catch (error) {
    console.error('Error fetching from database:', error);
    throw error;
  }
}

// Direct database access for individual blog post
export async function fetchBlogPostFromDB(slug: string): Promise<BlogPostResponse> {
  try {
    const connectDB = (await import('@/lib/mongodb')).default;
    const BlogPost = (await import('@/lib/models/BlogPost')).default;
    
    await connectDB();

    // Find post by href or id - only published posts
    const post = await BlogPost.findOne({
      $and: [
        { status: 'published' },
        {
          $or: [
            { href: `/blog/${slug}` },
            { id: slug }
          ]
        }
      ]
    }).lean();

    if (!post) {
      throw new Error(`Blog post not found: ${slug}`);
    }

    return {
      success: true,
      data: {
        id: post.id,
        title: post.title,
        content: post.content,
        excerpt: post.excerpt,
        href: post.href,
        image: post.image,
        images: post.images || [],
        contentSections: post.contentSections || [],
        category: post.category,
        date: post.date,
        author: post.author || 'Altiora Team',
        seo: post.seo,
      },
      cached: false,
    };
  } catch (error) {
    console.error('Error fetching from database:', error);
    throw error;
  }
}
