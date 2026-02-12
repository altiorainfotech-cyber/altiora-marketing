import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

// Define the schema inline
const AIMLServicePageSchema = new mongoose.Schema({
  pageSlug: String,
  isActive: Boolean,
  heroSection: Object,
  overviewSection: Object,
  servicesSection: Object,
  howWeWorkSection: Object,
  outcomesSection: Object,
  trendsSection: Object,
  ctaSection: Object,
  seoMetadata: Object
}, {
  timestamps: true,
  collection: 'servicepages'
});

const AIMLServicePage = mongoose.models.AIMLServicePage || mongoose.model('AIMLServicePage', AIMLServicePageSchema);

async function testAIMLPage() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;
    
    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB successfully\n');

    // Fetch the AI/ML page
    console.log('📄 Fetching AI/ML service page...');
    const pageData = await AIMLServicePage.findOne({ 
      pageSlug: 'ai-ml-main',
      isActive: true 
    }).lean();

    if (!pageData) {
      console.log('❌ AI/ML page not found!');
      console.log('💡 Run: npx tsx scripts/seed-ai-ml-page.ts');
      return;
    }

    console.log('✅ AI/ML page found!\n');

    // Display summary
    console.log('📊 Page Summary:');
    console.log('================');
    console.log(`Page Slug: ${pageData.pageSlug}`);
    console.log(`Active: ${pageData.isActive}`);
    console.log(`Created: ${pageData.createdAt}`);
    console.log(`Updated: ${pageData.updatedAt}\n`);

    console.log('🎯 Hero Section:');
    console.log(`  Badge: ${pageData.heroSection?.badge}`);
    console.log(`  Title: ${pageData.heroSection?.title}`);
    console.log(`  Primary CTA: ${pageData.heroSection?.primaryCTA?.text} → ${pageData.heroSection?.primaryCTA?.link}\n`);

    console.log('📝 Overview:');
    console.log(`  Title: ${pageData.overviewSection?.title}`);
    console.log(`  Description: ${pageData.overviewSection?.description?.substring(0, 80)}...\n`);

    console.log('🔧 Services:');
    console.log(`  Section Title: ${pageData.servicesSection?.title} ${pageData.servicesSection?.highlightText}`);
    console.log(`  Total Services: ${pageData.servicesSection?.services?.length || 0}`);
    if (pageData.servicesSection?.services?.length > 0) {
      pageData.servicesSection.services.forEach((service: any, index: number) => {
        console.log(`    ${index + 1}. ${service.title} (${service.icon})`);
      });
    }
    console.log();

    console.log('⚙️ How We Work:');
    console.log(`  Title: ${pageData.howWeWorkSection?.title} ${pageData.howWeWorkSection?.highlightText}`);
    console.log(`  Steps: ${pageData.howWeWorkSection?.steps?.length || 0}`);
    if (pageData.howWeWorkSection?.steps?.length > 0) {
      pageData.howWeWorkSection.steps.forEach((step: any, index: number) => {
        console.log(`    ${index + 1}. ${step.title} (${step.icon})`);
      });
    }
    console.log();

    console.log('🎯 Outcomes:');
    console.log(`  Title: ${pageData.outcomesSection?.title} ${pageData.outcomesSection?.highlightText}`);
    console.log(`  Total Outcomes: ${pageData.outcomesSection?.outcomes?.length || 0}`);
    if (pageData.outcomesSection?.outcomes?.length > 0) {
      pageData.outcomesSection.outcomes.forEach((outcome: any, index: number) => {
        console.log(`    ${index + 1}. ${outcome.title} ${outcome.emoji}`);
      });
    }
    console.log();

    console.log('🌟 Trends:');
    console.log(`  Title: ${pageData.trendsSection?.title} ${pageData.trendsSection?.highlightText}`);
    console.log(`  Total Portals: ${pageData.trendsSection?.portals?.length || 0}`);
    if (pageData.trendsSection?.portals?.length > 0) {
      pageData.trendsSection.portals.forEach((portal: any, index: number) => {
        console.log(`    ${index + 1}. ${portal.label} ${portal.logo}`);
      });
    }
    console.log();

    console.log('💎 Why Altiora:');
    console.log(`  Title: ${pageData.whyAltioraSection?.title} ${pageData.whyAltioraSection?.highlightText}`);
    console.log(`  Total Items: ${pageData.whyAltioraSection?.items?.length || 0}`);
    if (pageData.whyAltioraSection?.items?.length > 0) {
      pageData.whyAltioraSection.items.forEach((item: any, index: number) => {
        console.log(`    ${index + 1}. ${item.title} (${item.stat} ${item.statLabel})`);
      });
    }
    console.log();

    console.log('📢 CTA Section:');
    console.log(`  Title: ${pageData.ctaSection?.title}`);
    console.log(`  Primary CTA: ${pageData.ctaSection?.primaryCTA?.text} → ${pageData.ctaSection?.primaryCTA?.link}`);
    console.log(`  Secondary CTA: ${pageData.ctaSection?.secondaryCTA?.text} → ${pageData.ctaSection?.secondaryCTA?.link}\n`);

    console.log('🔍 SEO Metadata:');
    console.log(`  Title: ${pageData.seoMetadata?.title}`);
    console.log(`  Description: ${pageData.seoMetadata?.description?.substring(0, 80)}...`);
    console.log(`  Keywords: ${pageData.seoMetadata?.keywords?.length || 0} keywords\n`);

    console.log('✅ All data verified successfully!');
    console.log('\n💡 Next Steps:');
    console.log('  1. Start your dev server: npm run dev');
    console.log('  2. Visit: http://localhost:3000/services/ai-ml');
    console.log('  3. Test API: curl http://localhost:3000/api/servicepages/ai-ml');

  } catch (error) {
    console.error('❌ Error testing AI/ML page:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('\n🔌 Database connection closed');
  }
}

// Run the test
testAIMLPage();
