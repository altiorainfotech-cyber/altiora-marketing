const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const ServicePageSchema = new mongoose.Schema({}, { strict: false });
const ServicePage = mongoose.models.ServicePage || mongoose.model('ServicePage', ServicePageSchema);

async function testAPI() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB\n');

    const page = await ServicePage.findOne({ slug: 'web3' });
    
    if (page) {
      console.log('✅ Web3 service page found!');
      console.log('\nPage Details:');
      console.log('- Page Type:', page.pageType);
      console.log('- Slug:', page.slug);
      console.log('- Active:', page.isActive);
      console.log('- Hero Title:', page.heroSection?.title);
      console.log('- Number of Stats:', page.stats?.length || 0);
      console.log('- Number of Service Cards:', page.servicesSection?.cards?.length || 0);
      console.log('- SEO Title:', page.seoMetadata?.title);
      console.log('\n✅ All data is properly stored in MongoDB!');
    } else {
      console.log('❌ Web3 service page not found');
    }

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

testAPI();
