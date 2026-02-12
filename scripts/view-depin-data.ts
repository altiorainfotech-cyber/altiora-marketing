import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const MONGODB_URI = process.env.MONGODB_URI!;

async function viewData() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    const MainPage = mongoose.model('MainPage', new mongoose.Schema({}, { strict: false }));
    
    const page = await MainPage.findOne({ slug: 'depin' }).lean();
    
    if (!page) {
      console.log('❌ No DePIN page found');
      return;
    }

    console.log('📄 DePIN Page Data:\n');
    console.log('═'.repeat(80));
    console.log(JSON.stringify(page, null, 2));
    console.log('═'.repeat(80));
    
    console.log('\n✅ Data retrieved successfully!');
    console.log('\n📍 To view in MongoDB Compass:');
    console.log('   1. Open MongoDB Compass');
    console.log('   2. Connect to your database');
    console.log('   3. Navigate to the "mainpages" collection');
    console.log('   4. You should see 1 document with slug: "depin"');
    console.log('\n🔗 Database Info:');
    console.log(`   URI: ${MONGODB_URI.replace(/\/\/.*@/, '//***:***@')}`);
    console.log(`   Collection: mainpages`);
    console.log(`   Document ID: ${page._id}`);

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await mongoose.connection.close();
  }
}

viewData();
