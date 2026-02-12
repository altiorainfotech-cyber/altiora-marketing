#!/usr/bin/env node

/**
 * Blog Migration Script
 * 
 * This script migrates blog data from static files to MongoDB and uploads images to Cloudinary
 * 
 * Features:
 * - Uploads all blog images from public/images/blog/ to Cloudinary
 * - Updates blog posts with Cloudinary URLs
 * - Pushes all blog data to MongoDB
 * - Handles duplicates and errors gracefully
 */

const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

// Configuration
const MONGODB_URI = process.env.MONGODB_URI;
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || 'dkisnzuvo';
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || '152971432156514';
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || 'PPB1inBbUyE2CzsM-9IpfsOxly0';

// Blog images directory
const BLOG_IMAGES_DIR = path.join(__dirname, '../public/images/blog');

// Blog data from static file
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
  'gemini-nano-banana': `
    <div class="blog-content">
      <p class="lead">Every so often, a playful idea breaks through the noise and reveals what a new technology can do. "Nano Banana" is that moment for Gemini's image model—a quirky name paired with a genuinely powerful update to visual generation and editing using natural language.</p>
      
      <h2>What Makes Nano Banana Special?</h2>
      <p>Gemini's latest update introduces unprecedented control over image generation through natural language prompts. This isn't just about creating images—it's about understanding context, style, and intent in ways that feel almost conversational.</p>
      
      <h2>Real-World Applications</h2>
      <ul>
        <li>Creative content generation for marketing teams</li>
        <li>Rapid prototyping for design workflows</li>
        <li>Educational content creation</li>
        <li>Personalized visual storytelling</li>
      </ul>
      
      <h2>The Future of Creative AI</h2>
      <p>As AI becomes more intuitive and accessible, tools like Nano Banana represent a shift toward democratizing creativity. The barrier between imagination and execution continues to shrink.</p>
    </div>
  `,
  'mobile-app-trends-2025': `
    <div class="blog-content">
      <h1>Top Mobile App Development Trends to Watch in 2025</h1>
      <p>Mobile development is evolving rapidly, driven by AI integration, enhanced privacy features, and new user expectations. Here are the key trends shaping 2025.</p>
      
      <h2>1. AI-First Mobile Experiences</h2>
      <p>Apps are becoming smarter with on-device AI processing, enabling personalized experiences without compromising privacy.</p>
      
      <h2>2. Cross-Platform Excellence</h2>
      <p>Flutter and React Native continue to mature, offering near-native performance with shared codebases.</p>
      
      <h2>3. Privacy-Centric Design</h2>
      <p>With increasing privacy regulations, apps are built with privacy-by-design principles from the ground up.</p>
      
      <h2>4. Instant Apps & Progressive Web Apps</h2>
      <p>Lightweight, instant-loading experiences that blur the line between web and native apps.</p>
      
      <h2>5. Voice and Gesture Interfaces</h2>
      <p>Beyond touch: voice commands and gesture recognition are becoming mainstream interaction methods.</p>
    </div>
  `,
  'ai-ml-2030-everyday-things': `
    <div class="blog-content">
      <h1>5 Everyday Things AI Will Do Better by 2030</h1>
      
      <h2>1. Your Morning Briefing</h2>
      <p>Personalized AI assistants will synthesize news, calendar events, and priorities, then suggest actionable next steps rather than just providing information.</p>
      
      <h2>2. Shopping and Recommendations</h2>
      <p>AI will understand your preferences, budget, and needs to make purchasing decisions or provide highly accurate recommendations across all categories.</p>
      
      <h2>3. Health Monitoring and Prevention</h2>
      <p>Continuous health monitoring through wearables and environmental sensors will enable predictive healthcare and early intervention.</p>
      
      <h2>4. Learning and Skill Development</h2>
      <p>Personalized AI tutors will adapt to your learning style, pace, and goals, making education more effective and accessible.</p>
      
      <h2>5. Home and Energy Management</h2>
      <p>Smart homes will optimize energy usage, security, and comfort automatically, learning from your patterns and preferences.</p>
    </div>
  `,
  'future-of-digital-success-website-that-works': `
    <div class="blog-content">
      <h1>The Future of Digital Success: Build a Website That Works for You</h1>
      
      <h2>Start with Strategy, Not Design</h2>
      <p>Define your ideal customer profile, their jobs-to-be-done, your unique value proposition, and conversion model before touching any design elements.</p>
      
      <h2>Performance is Non-Negotiable</h2>
      <p>In 2025, users expect sub-3-second load times. Optimize for Core Web Vitals and mobile-first experiences.</p>
      
      <h2>AI-Enhanced User Experience</h2>
      <p>Implement chatbots, personalized content recommendations, and intelligent search to create more engaging experiences.</p>
      
      <h2>Accessibility and Inclusion</h2>
      <p>Design for everyone from the start. Accessibility isn't just compliance—it's good business and expands your reach.</p>
      
      <h2>Data-Driven Optimization</h2>
      <p>Use analytics, heatmaps, and user feedback to continuously improve your website's performance and user experience.</p>
    </div>
  `,
  'hyperautomation-ai-ml': `
    <div class="blog-content">
      <h1>Hyperautomation with AI & ML: The Future of Business Efficiency</h1>
      
      <h2>What Is Hyperautomation?</h2>
      <p>Hyperautomation combines RPA (Robotic Process Automation), AI/ML, process mining, and low-code platforms to automate complex business processes end-to-end.</p>
      
      <h2>Key Components</h2>
      <ul>
        <li><strong>Process Discovery:</strong> AI identifies automation opportunities</li>
        <li><strong>Intelligent Automation:</strong> ML handles complex decision-making</li>
        <li><strong>Continuous Optimization:</strong> Systems learn and improve over time</li>
        <li><strong>Human-AI Collaboration:</strong> Seamless handoffs between automated and human tasks</li>
      </ul>
      
      <h2>Business Impact</h2>
      <p>Organizations implementing hyperautomation report 30-50% reduction in processing time and significant improvements in accuracy and compliance.</p>
      
      <h2>Getting Started</h2>
      <p>Begin with process mapping, identify high-volume, rule-based tasks, and gradually expand to more complex workflows.</p>
    </div>
  `,
  'ai-workflows-small-enterprises': `
    <div class="blog-content">
      <h1>AI-Powered Workflow Automation for Small Enterprises</h1>
      
      <h2>The Challenge for Small Businesses</h2>
      <p>Small enterprises often struggle with manual processes that consume valuable time and resources. AI-powered automation can level the playing field.</p>
      
      <h2>Key Areas for Automation</h2>
      <ul>
        <li><strong>Customer Service:</strong> AI chatbots and automated response systems</li>
        <li><strong>Inventory Management:</strong> Predictive ordering and stock optimization</li>
        <li><strong>Financial Processes:</strong> Automated invoicing and expense tracking</li>
        <li><strong>Marketing:</strong> Personalized campaigns and lead scoring</li>
      </ul>
      
      <h2>Implementation Strategy</h2>
      <p>Start small with one process, measure results, and gradually expand. Focus on high-impact, low-complexity tasks first.</p>
      
      <h2>ROI and Benefits</h2>
      <p>Small businesses typically see 20-40% time savings and improved accuracy within the first six months of implementation.</p>
    </div>
  `,
  'ux-ui-for-ai-apps': `
    <div class="blog-content">
      <h1>Designing UX/UI for AI-Centric Applications</h1>
      
      <h2>Why AI Apps Are Different</h2>
      <p>AI applications are probabilistic, adaptive, and context-aware. Your UI must communicate uncertainty, provide control, and build trust.</p>
      
      <h2>Key Design Principles</h2>
      <ul>
        <li><strong>Transparency:</strong> Show how AI makes decisions</li>
        <li><strong>Control:</strong> Allow users to override AI suggestions</li>
        <li><strong>Feedback Loops:</strong> Enable users to train the AI</li>
        <li><strong>Progressive Disclosure:</strong> Reveal complexity gradually</li>
      </ul>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Use confidence indicators for AI predictions</li>
        <li>Provide clear fallback options</li>
        <li>Design for both novice and expert users</li>
        <li>Implement graceful error handling</li>
      </ul>
      
      <h2>Case Studies</h2>
      <p>Successful AI applications like Grammarly and Spotify demonstrate how thoughtful UX design can make complex AI feel intuitive and trustworthy.</p>
    </div>
  `,
  'best-ai-ml-agency-chandigarh': `
    <div class="blog-content">
      <h1>Why Altiora Infotech Is the Best AI/ML Agency in Chandigarh</h1>
      
      <h2>Deep Technical Expertise</h2>
      <p>Our team combines years of experience in machine learning, deep learning, and AI implementation across various industries.</p>
      
      <h2>Proven Track Record</h2>
      <p>We've successfully delivered AI/ML solutions for startups to enterprise clients, focusing on measurable business outcomes.</p>
      
      <h2>End-to-End Services</h2>
      <ul>
        <li>AI Strategy and Consulting</li>
        <li>Custom ML Model Development</li>
        <li>Data Engineering and Pipeline Setup</li>
        <li>AI Application Development</li>
        <li>Deployment and Maintenance</li>
      </ul>
      
      <h2>Industry Focus</h2>
      <p>We specialize in healthcare, fintech, e-commerce, and manufacturing, bringing domain expertise to every project.</p>
      
      <h2>Client-Centric Approach</h2>
      <p>We believe in collaborative development, transparent communication, and delivering solutions that drive real business value.</p>
    </div>
  `
};

// Validate environment variables
if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI not found in environment variables');
  process.exit(1);
}

if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
  console.error('❌ Cloudinary credentials not found in environment variables');
  console.log('Required: CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET');
  process.exit(1);
}

// Configure Cloudinary
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

// MongoDB Schema
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

// Add pre-save middleware to generate excerpt
BlogPostSchema.pre('save', function(next) {
  if (this.content && !this.excerpt) {
    const plainText = this.content.replace(/<[^>]*>/g, '');
    this.excerpt = plainText.substring(0, 150).trim() + (plainText.length > 150 ? '...' : '');
  }
  next();
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

/**
 * Upload image to Cloudinary
 */
async function uploadImageToCloudinary(imagePath, publicId) {
  try {
    console.log(`📤 Uploading ${path.basename(imagePath)} to Cloudinary...`);
    
    const result = await cloudinary.uploader.upload(imagePath, {
      public_id: publicId,
      folder: 'blog',
      resource_type: 'image',
      overwrite: true,
      transformation: [
        { width: 1200, height: 630, crop: 'fill', quality: 'auto' },
        { format: 'webp' }
      ]
    });
    
    console.log(`✅ Uploaded: ${result.secure_url}`);
    return result.secure_url;
  } catch (error) {
    console.error(`❌ Failed to upload ${imagePath}:`, error.message);
    return null;
  }
}

/**
 * Upload all blog images to Cloudinary
 */
async function uploadBlogImages() {
  console.log('🖼️  Starting image upload to Cloudinary...');
  
  if (!fs.existsSync(BLOG_IMAGES_DIR)) {
    console.error(`❌ Blog images directory not found: ${BLOG_IMAGES_DIR}`);
    return {};
  }
  
  const imageFiles = fs.readdirSync(BLOG_IMAGES_DIR)
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file));
  
  console.log(`📁 Found ${imageFiles.length} images to upload`);
  
  const imageUrlMap = {};
  
  for (const imageFile of imageFiles) {
    const imagePath = path.join(BLOG_IMAGES_DIR, imageFile);
    const publicId = path.parse(imageFile).name; // Remove extension for public_id
    
    const cloudinaryUrl = await uploadImageToCloudinary(imagePath, publicId);
    if (cloudinaryUrl) {
      // Map both with and without /images/blog/ prefix
      imageUrlMap[`/images/blog/${imageFile}`] = cloudinaryUrl;
      imageUrlMap[imageFile] = cloudinaryUrl;
    }
  }
  
  console.log(`✅ Successfully uploaded ${Object.keys(imageUrlMap).length / 2} images`);
  return imageUrlMap;
}

/**
 * Migrate blog posts to MongoDB
 */
async function migrateBlogPosts(imageUrlMap) {
  console.log('📝 Starting blog post migration to MongoDB...');
  
  let imported = 0;
  let updated = 0;
  let skipped = 0;
  
  for (const post of blogPosts) {
    try {
      // Get Cloudinary URL for the image
      let imageUrl = post.image;
      if (imageUrlMap[post.image]) {
        imageUrl = imageUrlMap[post.image];
        console.log(`🔄 Updated image URL for ${post.title}`);
      }
      
      // Extract slug from href for content lookup
      const slug = post.href.replace('/blog/', '');
      const content = POST_CONTENT[slug] || `
        <div class="blog-content">
          <h1>${post.title}</h1>
          <p>This is a comprehensive article about ${post.category.toLowerCase()} and its impact on modern business.</p>
          <p>At Altiora Infotech, we specialize in delivering cutting-edge solutions that help businesses leverage the latest technologies.</p>
        </div>
      `;
      
      // Generate excerpt from content
      const plainText = content.replace(/<[^>]*>/g, '');
      const excerpt = plainText.substring(0, 150).trim() + (plainText.length > 150 ? '...' : '');
      
      const blogPostData = {
        id: post.id,
        title: post.title,
        href: post.href,
        image: imageUrl, // Use Cloudinary URL
        category: post.category,
        date: post.date,
        content: content,
        excerpt: excerpt,
        status: 'published',
        author: 'Altiora Team',
        seo: {
          metaTitle: post.title,
          metaDescription: excerpt,
          keywords: [post.category.toLowerCase(), 'technology', 'business', 'altiora', 'infotech']
        }
      };
      
      // Check if post exists
      const existingPost = await BlogPost.findOne({ id: post.id });
      
      if (existingPost) {
        // Update existing post
        await BlogPost.findOneAndUpdate(
          { id: post.id },
          blogPostData,
          { new: true }
        );
        updated++;
        console.log(`🔄 Updated: ${post.title}`);
      } else {
        // Create new post
        await BlogPost.create(blogPostData);
        imported++;
        console.log(`✅ Imported: ${post.title}`);
      }
      
    } catch (error) {
      if (error.code === 11000) {
        skipped++;
        console.log(`⏭️  Skipped (duplicate): ${post.title}`);
      } else {
        console.error(`❌ Error processing ${post.title}:`, error.message);
      }
    }
  }
  
  return { imported, updated, skipped };
}

/**
 * Main migration function
 */
async function runMigration() {
  console.log('🚀 Starting Blog Migration to Cloud...\n');
  
  try {
    // Connect to MongoDB
    console.log('🔗 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');
    
    // Test Cloudinary connection
    console.log('☁️  Testing Cloudinary connection...');
    await cloudinary.api.ping();
    console.log('✅ Cloudinary connection successful\n');
    
    // Upload images to Cloudinary
    const imageUrlMap = await uploadBlogImages();
    console.log('');
    
    // Migrate blog posts to MongoDB
    const results = await migrateBlogPosts(imageUrlMap);
    
    // Final summary
    console.log('\n📊 Migration Summary:');
    console.log(`✅ New posts imported: ${results.imported}`);
    console.log(`🔄 Existing posts updated: ${results.updated}`);
    console.log(`⏭️  Posts skipped: ${results.skipped}`);
    console.log(`🖼️  Images uploaded: ${Object.keys(imageUrlMap).length / 2}`);
    
    // Verify the migration
    console.log('\n🔍 Verifying migration...');
    const totalPosts = await BlogPost.countDocuments();
    const publishedPosts = await BlogPost.countDocuments({ status: 'published' });
    
    console.log(`📝 Total posts in database: ${totalPosts}`);
    console.log(`📰 Published posts: ${publishedPosts}`);
    
    // Show sample posts
    const samplePosts = await BlogPost.find({ status: 'published' })
      .select('id title category date image')
      .sort({ date: -1 })
      .limit(3);
    
    console.log('\n📋 Sample posts:');
    samplePosts.forEach(post => {
      const isCloudinary = post.image.includes('cloudinary.com');
      console.log(`  - ${post.title} (${post.category}) - ${post.date}`);
      console.log(`    Image: ${isCloudinary ? '☁️  Cloudinary' : '📁 Local'} - ${post.image}`);
    });
    
    console.log('\n🎉 Migration completed successfully!');
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
  }
}

// Run the migration
if (require.main === module) {
  runMigration();
}

module.exports = { runMigration };