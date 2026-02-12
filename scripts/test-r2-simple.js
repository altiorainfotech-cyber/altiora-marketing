#!/usr/bin/env node

require('dotenv').config({ path: '.env.local' });
const { S3Client, ListBucketsCommand, ListObjectsV2Command } = require('@aws-sdk/client-s3');

const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME;

console.log('Testing R2 Connection...\n');

const r2Client = new S3Client({
  region: 'auto',
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
});

async function test() {
  try {
    console.log('1. Listing buckets...');
    const bucketsResponse = await r2Client.send(new ListBucketsCommand({}));
    console.log('✅ Available buckets:', bucketsResponse.Buckets?.map(b => b.Name).join(', ') || 'none');
    
    console.log(`\n2. Listing objects in ${R2_BUCKET_NAME}...`);
    const objectsResponse = await r2Client.send(new ListObjectsV2Command({
      Bucket: R2_BUCKET_NAME,
      MaxKeys: 5,
    }));
    
    console.log(`✅ Found ${objectsResponse.KeyCount || 0} objects (showing first 5):`);
    if (objectsResponse.Contents) {
      objectsResponse.Contents.forEach(obj => {
        console.log(`   - ${obj.Key} (${(obj.Size / 1024).toFixed(2)} KB)`);
      });
    }
    
    console.log('\n✅ R2 connection is working!\n');
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('\nFull error:', error);
  }
}

test();
