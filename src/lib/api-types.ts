// Shared types for API functions

export interface ImageItem {
  id: string;
  url: string;
  alt: string;
  caption?: string;
}

export interface ContentSection {
  id: string;
  type: 'title' | 'content';
  value: string;
  fontSize?: string;
  fontWeight?: 'normal' | 'bold';
  textAlign?: 'left' | 'center' | 'right';
  color?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content?: string; // Full content for individual posts
  excerpt?: string;
  href: string;
  image: string;
  images?: ImageItem[]; // Additional images
  contentSections?: ContentSection[]; // Dynamic content sections
  category: string;
  date: string;
  author: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}

export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface BlogListResponse {
  success: boolean;
  data: {
    posts: BlogPost[];
    pagination: PaginationInfo;
  };
  cached?: boolean;
}

export interface BlogPostResponse {
  success: boolean;
  data: BlogPost;
  cached?: boolean;
}

export interface APIError {
  success: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
  timestamp: string;
}

export interface BlogCategory {
  name: string;
  slug: string;
  description?: string;
  color?: string;
  postCount: number;
}

// Utility function to convert API blog post to legacy format for compatibility
export interface LegacyBlogPost {
  id: string;
  title: string;
  href: string;
  image: string;
  category: string;
  date: string;
}

export function convertToLegacyFormat(post: BlogPost): LegacyBlogPost {
  return {
    id: post.id,
    title: post.title,
    href: post.href,
    image: post.image,
    category: post.category,
    date: post.date,
  };
}
