const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

async function find() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI is not set');
    process.exit(1);
  }
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const admin = client.db().admin();
    const { databases } = await admin.listDatabases();
    for (const dbInfo of databases) {
      const dbName = dbInfo.name;
      try {
        const db = client.db(dbName);
        const collections = await db.listCollections({ name: 'ai-ml-services' }).toArray();
        if (collections.length === 0) continue;
        const col = db.collection('ai-ml-services');
        const doc = await col.findOne({ pageId: 'data-strategy-and-engineering' });
        if (doc) {
          console.log('Found in DB:', dbName);
          console.log('  _id:', doc._id.toString());
          console.log('  status:', doc.status);
          await client.close();
          process.exit(0);
        }
      } catch (err) {
        // ignore DB errors for some system DBs
      }
    }
    console.log('Document not found in any DB with collection ai-ml-services');
    await client.close();
    process.exit(1);
  } catch (err) {
    console.error('Error scanning DBs:', err);
    process.exit(1);
  }
}

find();
