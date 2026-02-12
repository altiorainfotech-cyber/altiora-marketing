const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

async function checkDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB\n');

    const db = mongoose.connection.db;
    const services = await db.collection('web2services').find({ 
      serviceType: { $in: ['digital-marketing-services', 'from-code-to-cloud-end-to-end'] } 
    }).toArray();

    services.forEach(service => {
      console.log('='.repeat(80));
      console.log(`Service Type: ${service.serviceType}`);
      console.log('='.repeat(80));
      console.log('Has Custom Layout:', service.hasCustomLayout);
      console.log('\nCustom Data Keys:', Object.keys(service.customData || {}));
      console.log('\nSEO Metadata:', service.seoMetadata);
      console.log('\n');
    });

    await mongoose.connection.close();
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

checkDatabase();
