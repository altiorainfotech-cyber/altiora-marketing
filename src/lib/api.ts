// API utility functions for fetching blog data from admin panel
// This file is safe to import in both client and server components

export type {
  ImageItem,
  ContentSection,
  BlogPost,
  PaginationInfo,
  BlogListResponse,
  BlogPostResponse,
  APIError,
  BlogCategory,
  LegacyBlogPost,
} from './api-types';

export { convertToLegacyFormat } from './api-types';

import type { BlogPost, PaginationInfo, BlogListResponse, BlogPostResponse, APIError, BlogCategory } from './api-types';

// Configuration
const API_BASE_URL = typeof window === 'undefined'
  ? (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000')
  : '';

// Utility function to handle API responses
async function handleApiResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorData: APIError = await response.json().catch(() => ({
      success: false,
      error: {
        code: 'NETWORK_ERROR',
        message: `HTTP ${response.status}: ${response.statusText}`,
      },
      timestamp: new Date().toISOString(),
    }));
    
    throw new Error(errorData.error.message || 'API request failed');
  }

  const data = await response.json();
  if (!data.success) {
    throw new Error(data.error?.message || 'API request failed');
  }

  return data;
}



// Fetch blog posts with optional filtering and pagination
export async function fetchBlogPosts(options: {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
} = {}): Promise<BlogListResponse> {
  // For client-side, use API calls
  const { page = 1, limit = 10, category, search } = options;
  
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });
  
  if (category) params.append('category', category);
  if (search) params.append('search', search);

  try {
    const response = await fetch(`/api/blogs?${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const apiResponse = await handleApiResponse<{ data: { posts: BlogPost[], pagination: PaginationInfo } }>(response);
    
    return {
      success: true,
      data: {
        posts: apiResponse.data.posts.map((post: BlogPost) => ({
          id: post.id,
          title: post.title,
          content: post.content,
          excerpt: post.excerpt,
          href: post.href,
          image: post.image,
          category: post.category,
          date: post.date,
          author: post.author || 'Altiora Team',
          seo: post.seo,
        })),
        pagination: apiResponse.data.pagination,
      },
      cached: false,
    };
  } catch (error) {
    console.error('Error fetching blog posts from API:', error);
    throw new Error(`Failed to fetch blog posts: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}



// Fetch individual blog post by slug
export async function fetchBlogPost(slug: string): Promise<BlogPostResponse> {
  // Use API calls for both client and server
  try {
    const response = await fetch(`/api/blogs/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`Post not found: ${slug}`);
      }
      throw new Error('Failed to fetch post');
    }

    const apiResponse = await response.json();
    if (!apiResponse.success) {
      throw new Error(apiResponse.error?.message || 'Failed to fetch post');
    }

    const post = apiResponse.data;

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
    console.error(`Error fetching blog post ${slug} from API:`, error);
    throw new Error(`Failed to fetch blog post: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// Fetch all categories
export async function fetchBlogCategories(): Promise<BlogCategory[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/blogs/categories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 600 }, // Revalidate every 10 minutes
    });

    const data = await handleApiResponse<{ success: boolean; data: BlogCategory[] }>(response);
    return data.data;
  } catch (error) {
    console.error('Error fetching blog categories:', error);
    // Return empty array as fallback
    return [];
  }
}