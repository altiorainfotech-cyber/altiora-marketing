#!/usr/bin/env node

// Script to populate the MongoDB database with blog posts from local data
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

// Blog data (copied from src/data/blog.ts)
const blogPosts = [
  {
    id: "nano-banana-2025-001",
    title: "Gemini's 'Nano Banana': When Fun Meets the Future of Creative AI",
    href: "/blog/gemini-nano-banana",
    image: "/images/blog/nano-banana.jpg.png",
    category: "AI",
    date: "2025-09-12",
  },
  {
    id: "mobile-trends-2025-002",
    title: "Top Mobile App Development Trends to Watch in 2025",
    href: "/blog/mobile-app-trends-2025",
    image: "/images/blog/2.png",
    category: "Mobile",
    date: "2025-09-05",
  },
  {
    id: "ai-ml-2030-003",
    title: "5 Everyday Things You're Doing Now That AI & Machine Learning Will Do Better by 2030",
    href: "/blog/ai-ml-2030-everyday-things",
    image: "/images/blog/3.png",
    category: "AI",
    date: "2025-08-14",
  },
  {
    id: "digital-success-004",
    title: "The Future of Digital Success: How to Build a Website That Works for You",
    href: "/blog/future-of-digital-success-website-that-works",
    image: "/images/blog/4.png",
    category: "Digital",
    date: "2025-08-14",
  },
  {
    id: "hyperautomation-005",
    title: "Hyperautomation with AI & ML: The Future of Business Efficiency",
    href: "/blog/hyperautomation-ai-ml",
    image: "/images/blog/5.png",
    category: "Automation",
    date: "2025-07-20",
  },
  {
    id: "ai-workflows-smb-006",
    title: "How AI-Powered Workflows Automation Can Automate Business Processes for Small Enterprises",
    href: "/blog/ai-workflows-small-enterprises",
    image: "/images/blog/6.png",
    category: "AI",
    date: "2025-06-28",
  },
  {
    id: "ai-ux-ui-007",
    title: "Designing UX/UI for AI-Centric Applications: Best Practices & Case Studies",
    href: "/blog/ux-ui-for-ai-apps",
    image: "/images/blog/7.png",
    category: "Design",
    date: "2025-06-18",
  },
  {
    id: "ai-ml-agency-chd-008",
    title: "Why Altiora Infotech Is the Best AI/ML Agency in Chandigarh",
    href: "/blog/best-ai-ml-agency-chandigarh",
    image: "/images/blog/8.png",
    category: "Company",
    date: "2024-05-10",
  },
];

// Sample content for posts
const POST_CONTENT = {
  'gemini-nano-banana': '<p class="lead">Every so often, a playful idea breaks through the noise and reveals what a new technology can do. "Nano Banana" is that moment for Gemini\'s image model—a quirky name paired with a genuinely powerful update to visual generation and editing using natural language.</p>',
  'mobile-app-trends-2025': '<h1>Top Mobile App Development Trends to Watch in 2025</h1><p>Mobile is maturing fast, powered by AI, private on-device compute, and instant, lightweight experiences. Here are the trends shaping 2025 roadmaps.</p>',
  'ai-ml-2030-everyday-things': '<h1>5 Everyday Things You\'re Doing Now That AI Will Do Better by 2030</h1><h2>1) Your Morning Briefing</h2><p>Personalized digests synthesize news, calendar, and priorities—then suggest actions, not just info.</p>',
  'future-of-digital-success-website-that-works': '<h1>The Future of Digital Success: Build a Website That Works for You</h1><h2>Start with Strategy</h2><p>Define ICP, jobs-to-be-done, offers, and the conversion model before pixels.</p>',
  'hyperautomation-ai-ml': '<h1>Hyperautomation with AI & ML: The Future of Business Efficiency</h1><h2>What Is Hyperautomation?</h2><p>An end-to-end approach that combines RPA, AI/ML, process mining, and low-code to automate across systems and teams.</p>',
  'ux-ui-for-ai-apps': '<h1>Designing UX/UI for AI-Centric Applications</h1><h2>Why It\'s Different</h2><p>AI is probabilistic, adaptive, and context-aware—your UI must communicate uncertainty and offer control.</p>',
  'ai-workflows-small-enterprises': '<h1>How AI-Powered Workflows Automation Can Automate Business Processes for Small Enterprises</h1><p><em>28 Jun 2025</em></p><h2>Introduction</h2><p>The day-to-day running of business affairs may often be overwhelming for small enterprises.</p>',
  'best-ai-ml-agency-chandigarh': '<h1>Why Altiora Infotech Is the Best AI/ML Agency in Chandigarh</h1><p><em>10 May 2024</em></p><p>There is much more to digital growth than ads or social pushes—it\'s about forging connections, amplifying visibility, and compounding measurable results.</p>'
};

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI not found in environment variables');
  process.exit(1);
}

// Blog Post Schema (simplified version)
const BlogPostSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  href: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  date: { type: String, required: true },
  content: { type: String, default: '' },
  excerpt: { type: String },
  status: { type: String, default: 'published' },
  author: { type: String, default: 'Altiora Team' },
  seo: {
    metaTitle: String,
    metaDescription: String,
    keywords: [String]
  }
}, {
  timestamps: true,
  collection: 'blogposts'
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

async function populateDatabase() {
  try {
    console.log('🔗 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Check if posts already exist
    const existingCount = await BlogPost.countDocuments();
    console.log(`📊 Found ${existingCount} existing blog posts`);

    if (existingCount > 0) {
      console.log('⚠️  Database already contains blog posts. Do you want to continue? (This will skip duplicates)');
    }

    console.log(`📝 Processing ${blogPosts.length} blog posts from local data...`);

    let imported = 0;
    let skipped = 0;

    for (const post of blogPosts) {
      try {
        // Extract slug from href for content lookup
        const slug = post.href.replace('/blog/', '');
        const content = POST_CONTENT[slug] || `<h1>${post.title}</h1><p>This is a sample blog post about ${post.category.toLowerCase()}. The full content will be available when the admin panel API is connected.</p>`;
        
        // Generate excerpt from content
        const plainText = content.replace(/<[^>]*>/g, '');
        const excerpt = plainText.substring(0, 150).trim() + (plainText.length > 150 ? '...' : '');

        const blogPostData = {
          id: post.id,
          title: post.title,
          href: post.href,
          image: post.image,
          category: post.category,
          date: post.date,
          content: content,
          excerpt: excerpt,
          status: 'published',
          author: 'Altiora Team',
          seo: {
            metaTitle: post.title,
            metaDescription: `Learn about ${post.category.toLowerCase()} with Altiora Infotech`,
            keywords: [post.category.toLowerCase(), 'technology', 'business', 'altiora']
          }
        };

        // Use upsert to avoid duplicates
        const result = await BlogPost.findOneAndUpdate(
          { id: post.id },
          blogPostData,
          { upsert: true, new: true, setDefaultsOnInsert: true }
        );

        if (result) {
          imported++;
          console.log(`✅ Imported: ${post.title}`);
        }
      } catch (error) {
        if (error.code === 11000) {
          skipped++;
          console.log(`⏭️  Skipped (already exists): ${post.title}`);
        } else {
          console.error(`❌ Error importing ${post.title}:`, error.message);
        }
      }
    }

    console.log('\n📊 Import Summary:');
    console.log(`✅ Imported: ${imported} posts`);
    console.log(`⏭️  Skipped: ${skipped} posts`);
    console.log(`📝 Total in database: ${await BlogPost.countDocuments()} posts`);

    // Verify the import
    console.log('\n🔍 Verifying import...');
    const samplePosts = await BlogPost.find({ status: 'published' })
      .select('id title category date')
      .sort({ date: -1 })
      .limit(3);

    console.log('📋 Sample posts:');
    samplePosts.forEach(post => {
      console.log(`  - ${post.title} (${post.category}) - ${post.date}`);
    });

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
  }
}

// Run the script
populateDatabase();