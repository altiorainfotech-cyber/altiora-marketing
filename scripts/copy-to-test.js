const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

async function copyToTest() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI is not set');
    process.exit(1);
  }

  const sourceDbName = process.env.MONGODB_DB || process.env.MONGODB_DB_NAME || 'blog-admin-panel';
  const targetDbName = 'test';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const srcDb = client.db(sourceDbName);
    const srcCol = srcDb.collection('ai-ml-services');

    const doc = await srcCol.findOne({ pageId: 'data-strategy-and-engineering' });
    if (!doc) {
      console.error(`Document with pageId 'data-strategy-and-engineering' not found in ${sourceDbName}.ai-ml-services`);
      process.exit(1);
    }

    const tgtDb = client.db(targetDbName);
    const tgtCol = tgtDb.collection('ai-ml-services');

    // remove _id so Mongo will create a new one, or use upsert to replace
    const filter = { pageId: doc.pageId };
    const updateDoc = { $set: doc };
    // Ensure we don't try to set the original _id in update
    if (updateDoc.$set && updateDoc.$set._id) delete updateDoc.$set._id;

    const result = await tgtCol.updateOne(filter, updateDoc, { upsert: true });
    if (result.upsertedId) {
      console.log('Inserted into test.ai-ml-services with _id:', result.upsertedId._id.toString());
    } else if (result.matchedCount && result.modifiedCount >= 0) {
      console.log('Updated existing document in test.ai-ml-services (matched:', result.matchedCount, 'modified:', result.modifiedCount, ')');
    } else {
      console.log('Operation completed:', result);
    }

  } catch (err) {
    console.error('Error copying document:', err);
    process.exit(1);
  } finally {
    await client.close();
    console.log('Disconnected');
  }
}

copyToTest();
