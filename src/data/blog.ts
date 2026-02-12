// /src/data/blog.ts
// 
// NOTE: This file previously contained static blog data.
// All blog data is now managed through the admin panel and stored in MongoDB.

export type BlogPost = {
  id: string;
  title: string;
  href: string;
  image: string;     // Cloudinary URL
  category: string;
  date: string;      // ISO date
  content?: string;  // Full blog content (HTML)
  excerpt?: string;  // Auto-generated excerpt
  author?: string;   // Author name
  status?: string;   // published, draft, etc.
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
};

// Empty array - all blog posts are now fetched from the database
export const blogPosts: BlogPost[] = [];
