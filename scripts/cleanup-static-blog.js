#!/usr/bin/env node

/**
 * Static Blog Data Cleanup Script
 */

const fs = require('fs');
const path = require('path');

const BLOG_DATA_FILE = path.join(__dirname, '../src/data/blog.ts');

const newBlogContent = `// /src/data/blog.ts
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
`;

function cleanupStaticBlogData() {
  try {
    console.log('🧹 Cleaning up static blog data...');
    
    // Backup the original file
    const backupFile = BLOG_DATA_FILE + '.backup';
    if (fs.existsSync(BLOG_DATA_FILE)) {
      fs.copyFileSync(BLOG_DATA_FILE, backupFile);
      console.log(`📋 Created backup: ${backupFile}`);
    }
    
    // Write the new content
    fs.writeFileSync(BLOG_DATA_FILE, newBlogContent);
    console.log(`✅ Updated: ${BLOG_DATA_FILE}`);
    
    console.log('\n📝 Summary:');
    console.log('- Static blog data has been removed');
    console.log('- All blog posts are now served from MongoDB');
    console.log('- Images are hosted on Cloudinary');
    
    console.log('\n🎉 Cleanup completed successfully!');
    
  } catch (error) {
    console.error('❌ Cleanup failed:', error);
    process.exit(1);
  }
}

cleanupStaticBlogData();