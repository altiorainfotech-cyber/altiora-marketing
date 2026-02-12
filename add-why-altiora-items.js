/**
 * Script to add more items to the Why Altiora section
 * Run with: node add-why-altiora-items.js
 */

const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

// Connect to MongoDB
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
}

// Define the schema (same as in your model)
const WhyAltioraItemSchema = new mongoose.Schema({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  stat: { type: String, required: true },
  statLabel: { type: String, required: true },
  description: { type: String, required: true },
  color: { type: String, required: true }
});

const WhyAltioraSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  highlightText: { type: String, required: true },
  description: { type: String, required: true },
  items: [WhyAltioraItemSchema]
});

const AIMLServicePageSchema = new mongoose.Schema({
  pageSlug: { type: String, required: true, unique: true },
  isActive: { type: Boolean, default: true },
  heroSection: mongoose.Schema.Types.Mixed,
  overviewSection: mongoose.Schema.Types.Mixed,
  servicesSection: mongoose.Schema.Types.Mixed,
  howWeWorkSection: mongoose.Schema.Types.Mixed,
  outcomesSection: mongoose.Schema.Types.Mixed,
  trendsSection: mongoose.Schema.Types.Mixed,
  whyAltioraSection: { type: WhyAltioraSectionSchema, required: true },
  ctaSection: mongoose.Schema.Types.Mixed,
  seoMetadata: mongoose.Schema.Types.Mixed
}, {
  timestamps: true,
  collection: 'servicepages'
});

const AIMLServicePage = mongoose.models.AIMLServicePage || mongoose.model('AIMLServicePage', AIMLServicePageSchema);

// Additional Why Altiora items to add
const additionalItems = [
  {
    icon: 'Brain',
    title: 'Research-Grade AI Models',
    stat: '99.2%',
    statLabel: 'Accuracy',
    description: 'State-of-the-art machine learning models built with cutting-edge research techniques, delivering production-ready solutions that exceed industry benchmarks.',
    color: '#10B981'
  },
  {
    icon: 'Shield',
    title: 'Enterprise-Grade Security',
    stat: '100%',
    statLabel: 'Compliance',
    description: 'Built-in security, privacy, and compliance frameworks ensuring your AI systems meet the highest standards for data protection and regulatory requirements.',
    color: '#8B5CF6'
  },
  {
    icon: 'Zap',
    title: 'Rapid Deployment',
    stat: '2×',
    statLabel: 'Faster',
    description: 'Streamlined MLOps pipelines and automated workflows that accelerate time-to-production, getting your AI solutions live in half the time.',
    color: '#F59E0B'
  },
  {
    icon: 'TrendingUp',
    title: 'Measurable ROI',
    stat: '3×',
    statLabel: 'Returns',
    description: 'Data-driven approach with clear KPIs and success metrics, ensuring every AI initiative delivers tangible business value and measurable impact.',
    color: '#EF4444'
  },
  {
    icon: 'Activity',
    title: 'Real-Time Monitoring',
    stat: '24/7',
    statLabel: 'Uptime',
    description: 'Comprehensive observability and monitoring systems that track model performance, detect drift, and ensure continuous optimization of your AI systems.',
    color: '#06B6D4'
  },
  {
    icon: 'CheckCircle',
    title: 'Proven Track Record',
    stat: '50+',
    statLabel: 'Projects',
    description: 'Extensive experience across industries with successful AI implementations, from startups to Fortune 500 companies, delivering consistent results.',
    color: '#14B8A6'
  }
];

async function updateWhyAltioraSection() {
  try {
    await connectDB();

    // Find the AI/ML service page
    const page = await AIMLServicePage.findOne({ pageSlug: 'ai-ml-main' });

    if (!page) {
      console.log('❌ AI/ML service page not found. Creating a new one...');
      // You might want to create a complete page here
      return;
    }

    console.log('📄 Found AI/ML service page');
    console.log(`📊 Current items count: ${page.whyAltioraSection?.items?.length || 0}`);

    // Get existing items
    const existingItems = page.whyAltioraSection?.items || [];
    
    // Combine existing with new items (avoiding duplicates by title)
    const existingTitles = new Set(existingItems.map(item => item.title));
    const newItems = additionalItems.filter(item => !existingTitles.has(item.title));

    if (newItems.length === 0) {
      console.log('✅ All items already exist. No updates needed.');
      return;
    }

    // Update the page with all items
    const allItems = [...existingItems, ...newItems];
    
    page.whyAltioraSection.items = allItems;
    await page.save();

    console.log(`✅ Successfully added ${newItems.length} new items`);
    console.log(`📊 Total items now: ${allItems.length}`);
    console.log('\n📋 All items:');
    allItems.forEach((item, index) => {
      console.log(`  ${index + 1}. ${item.title} (${item.stat} ${item.statLabel})`);
    });

  } catch (error) {
    console.error('❌ Error updating Why Altiora section:', error);
  } finally {
    await mongoose.connection.close();
    console.log('\n👋 Database connection closed');
  }
}

// Run the update
updateWhyAltioraSection();
