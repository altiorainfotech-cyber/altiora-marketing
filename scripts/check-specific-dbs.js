const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const candidates = ['blog-admin-panel','test','altiora','local','admin','blogadmin','blog-admin','prod','production'];

async function check() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI not set');
    process.exit(1);
  }
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log('Connected');
    for (const dbName of candidates) {
      try {
        const col = client.db(dbName).collection('ai-ml-services');
        const doc = await col.findOne({ pageId: 'data-strategy-and-engineering' });
        if (doc) {
          console.log('Found in', dbName);
          console.log('  _id:', doc._id.toString());
          process.exit(0);
        } else {
          console.log('Not in', dbName);
        }
      } catch (err) {
        console.log('Error checking', dbName, err.message);
      }
    }
    console.log('Not found in candidate DBs');
    process.exit(1);
  } catch (err) {
    console.error('Err', err);
    process.exit(1);
  } finally {
    try { await client.close(); } catch(_) {}
  }
}

check();
