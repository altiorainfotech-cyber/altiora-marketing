const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

async function check() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI is not set in environment');
    process.exit(1);
  }
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  try {
    await client.connect();
    const dbName = process.env.MONGODB_DB || process.env.MONGODB_DB_NAME || 'test';
    const db = client.db(dbName);
    const col = db.collection('ai-ml-services');
    const doc = await col.findOne({ pageId: 'data-strategy-and-engineering' });
    if (!doc) {
      console.log('Document not found in', `${dbName}.ai-ml-services`);
      process.exit(1);
    }
    console.log('Found document:');
    console.log('  _id:', doc._id.toString());
    console.log('  pageId:', doc.pageId);
    console.log('  status:', doc.status);
    if (doc.sections) {
      const s = doc.sections;
      console.log('  sections present:');
      Object.keys(s).forEach((k) => {
        if (Array.isArray(s[k])) {
          console.log(`    ${k}: array length ${s[k].length}`);
        } else if (s[k] && typeof s[k] === 'object') {
          const keys = Object.keys(s[k]);
          if (keys.length > 0) console.log(`    ${k}: object keys (${keys.join(', ')})`);
          else console.log(`    ${k}: object`);
        } else {
          console.log(`    ${k}: ${typeof s[k]}`);
        }
      });
    } else {
      console.log('  No sections field present');
    }

    // print counts for specific arrays if available
    if (doc.sections && doc.sections.whyChoose && Array.isArray(doc.sections.whyChoose.items)) {
      console.log('    whyChoose.items length:', doc.sections.whyChoose.items.length);
    }
    if (doc.sections && doc.sections.serviceOfferings && Array.isArray(doc.sections.serviceOfferings.services)) {
      console.log('    serviceOfferings.services length:', doc.sections.serviceOfferings.services.length);
    }
    if (doc.sections && doc.sections.process && Array.isArray(doc.sections.process.steps)) {
      console.log('    process.steps length:', doc.sections.process.steps.length);
    }
    if (doc.sections && doc.sections.whyWorkWithUs && Array.isArray(doc.sections.whyWorkWithUs.benefits)) {
      console.log('    whyWorkWithUs.benefits length:', doc.sections.whyWorkWithUs.benefits.length);
    }

    // optionally print a truncated version of hero and cta
    if (doc.sections && doc.sections.hero) {
      console.log('  hero.heading:', doc.sections.hero.heading);
    }
    if (doc.sections && doc.sections.cta) {
      console.log('  cta.title:', doc.sections.cta.title);
    }

    // Print specific titles the user reported missing
    if (doc.sections && doc.sections.whyChoose) {
      console.log('  whyChoose.title:', doc.sections.whyChoose.title);
      console.log('  whyChoose.subtitle:', doc.sections.whyChoose.subtitle);
    }
    if (doc.sections && doc.sections.serviceOfferings) {
      console.log('  serviceOfferings.title:', doc.sections.serviceOfferings.title);
      console.log('  serviceOfferings.subtitle:', doc.sections.serviceOfferings.subtitle);
      if (Array.isArray(doc.sections.serviceOfferings.services)) {
        console.log('  first services titles:');
        doc.sections.serviceOfferings.services.slice(0,4).forEach((s,i)=>{
          console.log(`    [${i}] ${s.title} - ${s.desc}`);
        });
      }
    }

    process.exit(0);
  } catch (err) {
    console.error('Error checking seed:', err);
    process.exit(1);
  } finally {
    try { await client.close(); } catch(_) {}
  }
}

check();
