const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME || 'test';

async function checkRWAData() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('mainpages');
    
    const count = await collection.countDocuments();
    console.log('Total documents in mainpages:', count);
    
    const rwaPage = await collection.findOne({ pageType: 'rwa' });
    console.log('RWA page found:', rwaPage ? 'Yes' : 'No');
    
    if (rwaPage) {
      console.log('RWA page data:', {
        pageType: rwaPage.pageType,
        slug: rwaPage.slug,
        isActive: rwaPage.isActive,
        hasHeroSection: !!rwaPage.heroSection
      });
    }
    
    const allPages = await collection.find({}).toArray();
    console.log('All pages:', allPages.map(p => ({ 
      pageType: p.pageType, 
      slug: p.slug, 
      isActive: p.isActive 
    })));
    
  } catch (error) {
    console.error('Error checking data:', error);
  } finally {
    await client.close();
  }
}

checkRWAData();