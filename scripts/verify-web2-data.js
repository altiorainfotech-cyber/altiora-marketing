const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });

async function verifyData() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✓ Connected to MongoDB\n');

    const db = mongoose.connection.db;
    const collection = db.collection('web2services');

    const services = await collection.find({}).toArray();
    
    console.log(`📊 Total services in database: ${services.length}\n`);

    services.forEach(service => {
      console.log(`\n🔍 Service: ${service.serviceType}`);
      console.log(`   Has Custom Layout: ${service.hasCustomLayout || false}`);
      
      // Check for required sections
      const sections = {
        'heroSection': !!service.heroSection,
        'whyChoosePoints': !!(service.whyChoosePoints && service.whyChoosePoints.length > 0),
        'services': !!(service.services && service.services.length > 0),
        'mobileServices': !!(service.mobileServices && service.mobileServices.length > 0),
        'dnaAnimation': !!service.dnaAnimation,
        'whyWorkWithUs': !!(service.whyWorkWithUs && service.whyWorkWithUs.length > 0),
        'ctaSection': !!service.ctaSection,
        'seoMetadata': !!service.seoMetadata,
        'customData': !!service.customData
      };

      console.log('   Sections present:');
      Object.entries(sections).forEach(([key, value]) => {
        const icon = value ? '✓' : '✗';
        console.log(`     ${icon} ${key}`);
      });

      // Count items in arrays
      if (service.services) {
        console.log(`   Services count: ${service.services.length}`);
      }
      if (service.whyChoosePoints) {
        console.log(`   Why Choose Points: ${service.whyChoosePoints.length}`);
      }
    });

    await mongoose.connection.close();
    console.log('\n✓ Verification complete');
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

verifyData();
