import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const MONGODB_URI = process.env.MONGODB_URI!;

async function checkStatus() {
  try {
    console.log('🔍 Checking DePIN Dynamic Page Status...\n');
    
    // Check MongoDB connection
    await mongoose.connect(MONGODB_URI);
    console.log('✅ MongoDB connection: OK');
    
    // Check if MainPage model exists
    const MainPage = mongoose.model('MainPage', new mongoose.Schema({}, { strict: false }));
    console.log('✅ MainPage model: OK');
    
    // Check if DePIN page exists
    const page = await MainPage.findOne({ slug: 'depin' }).lean();
    
    if (!page) {
      console.log('❌ DePIN page: NOT FOUND');
      console.log('\n💡 Run this to create it:');
      console.log('   npx tsx scripts/seed-depin-page.ts\n');
      return;
    }
    
    console.log('✅ DePIN page: FOUND');
    console.log(`✅ Page status: ${page.isActive ? 'ACTIVE' : 'INACTIVE'}`);
    
    // Check sections
    const sections = [
      { name: 'Hero Section', key: 'heroSection' },
      { name: 'Value Snapshots', key: 'valueSnapshots' },
      { name: 'Deliver Section', key: 'deliverSection' },
      { name: 'Tech Stack Section', key: 'techStackSection' },
      { name: 'CTA Section', key: 'ctaSection' },
      { name: 'SEO Metadata', key: 'seoMetadata' }
    ];
    
    console.log('\n📋 Content Sections:');
    sections.forEach(section => {
      const exists = page[section.key] !== undefined;
      console.log(`${exists ? '✅' : '❌'} ${section.name}`);
    });
    
    // Count items
    console.log('\n📊 Content Statistics:');
    console.log(`   Hero Buttons: ${page.heroSection?.buttons?.length || 0}`);
    console.log(`   Hero Tags: ${page.heroSection?.tags?.length || 0}`);
    console.log(`   Value Snapshots: ${page.valueSnapshots?.length || 0}`);
    console.log(`   Deliver Cards: ${page.deliverSection?.cards?.length || 0}`);
    console.log(`   Tech Tabs: ${page.techStackSection?.tabs?.length || 0}`);
    
    let totalTechs = 0;
    page.techStackSection?.tabs?.forEach((tab: any) => {
      totalTechs += tab.items?.length || 0;
    });
    console.log(`   Total Technologies: ${totalTechs}`);
    console.log(`   CTA Buttons: ${page.ctaSection?.buttons?.length || 0}`);
    console.log(`   SEO Keywords: ${page.seoMetadata?.keywords?.length || 0}`);
    
    // Check last update
    console.log('\n⏰ Last Updated:');
    console.log(`   ${new Date(page.updatedAt).toLocaleString()}`);
    
    // URLs
    console.log('\n🔗 Quick Links:');
    console.log('   Live Page: http://localhost:3000/depin');
    console.log('   Admin Panel: http://localhost:3000/admin/mainpages');
    console.log('   Edit Page: http://localhost:3000/admin/mainpages/depin');
    console.log('   API Endpoint: http://localhost:3000/api/mainpages/depin');
    
    // Health check
    console.log('\n🏥 Health Check:');
    const issues = [];
    
    if (!page.heroSection?.title) issues.push('Missing hero title');
    if (!page.heroSection?.description) issues.push('Missing hero description');
    if (!page.heroSection?.buttons?.length) issues.push('No hero buttons');
    if (!page.valueSnapshots?.length) issues.push('No value snapshots');
    if (!page.deliverSection?.cards?.length) issues.push('No deliver cards');
    if (!page.techStackSection?.tabs?.length) issues.push('No tech tabs');
    if (!page.ctaSection?.title) issues.push('Missing CTA title');
    if (!page.seoMetadata?.title) issues.push('Missing SEO title');
    
    if (issues.length === 0) {
      console.log('   ✅ All checks passed! Page is ready.');
    } else {
      console.log('   ⚠️  Issues found:');
      issues.forEach(issue => console.log(`      - ${issue}`));
    }
    
    console.log('\n✨ Status check complete!\n');
    
  } catch (error) {
    console.error('\n❌ Error:', error);
    console.log('\n💡 Troubleshooting:');
    console.log('   1. Check if MongoDB is running');
    console.log('   2. Verify MONGODB_URI in .env.local');
    console.log('   3. Run: npx tsx scripts/seed-depin-page.ts');
  } finally {
    await mongoose.connection.close();
  }
}

checkStatus();
