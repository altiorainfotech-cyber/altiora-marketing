import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = 'blog-admin-panel';

async function checkDatabase() {
  const client = new MongoClient(MONGODB_URI!);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(DB_NAME);
    const collection = db.collection('web3Services');

    // Check all documents
    const allDocs = await collection.find({}).toArray();
    console.log('Total documents:', allDocs.length);
    
    // Check specific pages
    const pages = ['security-audit', 'smart-contract', 'tokenization'];
    for (const pageId of pages) {
      const doc = await collection.findOne({ pageId });
      console.log(`${pageId}:`, doc ? 'EXISTS' : 'NOT FOUND');
      if (doc) {
        console.log(`  - status: ${doc.status}`);
        console.log(`  - title: ${doc.title}`);
      }
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
  }
}

checkDatabase();