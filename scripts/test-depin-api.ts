import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const MONGODB_URI = process.env.MONGODB_URI!;

async function testDePINAPI() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    const MainPage = mongoose.model('MainPage', new mongoose.Schema({}, { strict: false }));
    
    const page = await MainPage.findOne({ slug: 'depin' }).lean();
    
    if (!page) {
      console.log('❌ No DePIN page found in database');
      return;
    }

    console.log('✅ DePIN page found!');
    console.log('\n📊 Page Summary:');
    console.log('─'.repeat(50));
    console.log(`Page Type: ${page.pageType}`);
    console.log(`Slug: ${page.slug}`);
    console.log(`Active: ${page.isActive}`);
    console.log(`\n📝 Hero Section:`);
    console.log(`  Title: ${page.heroSection?.title}`);
    console.log(`  Highlighted: ${page.heroSection?.highlightedTitle}`);
    console.log(`  Buttons: ${page.heroSection?.buttons?.length || 0}`);
    console.log(`  Tags: ${page.heroSection?.tags?.length || 0}`);
    
    console.log(`\n💡 Value Snapshots: ${page.valueSnapshots?.length || 0}`);
    page.valueSnapshots?.forEach((snapshot: any, idx: number) => {
      console.log(`  ${idx + 1}. ${snapshot.icon} ${snapshot.title}`);
    });
    
    console.log(`\n📦 Deliver Cards: ${page.deliverSection?.cards?.length || 0}`);
    page.deliverSection?.cards?.forEach((card: any, idx: number) => {
      console.log(`  ${idx + 1}. ${card.title} (${card.items?.length || 0} items)`);
    });
    
    console.log(`\n🔧 Tech Stack Tabs: ${page.techStackSection?.tabs?.length || 0}`);
    page.techStackSection?.tabs?.forEach((tab: any, idx: number) => {
      console.log(`  ${idx + 1}. ${tab.label} (${tab.items?.length || 0} technologies)`);
    });
    
    console.log(`\n🎯 CTA Section:`);
    console.log(`  Title: ${page.ctaSection?.title}`);
    console.log(`  Buttons: ${page.ctaSection?.buttons?.length || 0}`);
    
    console.log(`\n🔍 SEO Metadata:`);
    console.log(`  Title: ${page.seoMetadata?.title}`);
    console.log(`  Keywords: ${page.seoMetadata?.keywords?.length || 0}`);
    
    console.log('\n' + '─'.repeat(50));
    console.log('✅ All data loaded successfully!');
    console.log('\n💡 Next steps:');
    console.log('  1. Start your dev server: npm run dev');
    console.log('  2. Visit: http://localhost:3000/depin');
    console.log('  3. Or test API: http://localhost:3000/api/mainpages/depin');

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await mongoose.connection.close();
  }
}

testDePINAPI();
