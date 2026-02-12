#!/usr/bin/env node

/**
 * Test R2 Connection
 * 
 * This script tests your R2 configuration and connection
 * 
 * Usage:
 * node scripts/test-r2-connection.js
 */

require('dotenv').config({ path: '.env.local' });
const { S3Client, ListBucketsCommand, HeadBucketCommand } = require('@aws-sdk/client-s3');

const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME;
const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL;

console.log('🔍 Testing R2 Configuration\n');

// Check environment variables
console.log('📋 Configuration Check:');
console.log(`   R2_ACCOUNT_ID: ${R2_ACCOUNT_ID ? '✅ Set' : '❌ Missing'}`);
console.log(`   R2_ACCESS_KEY_ID: ${R2_ACCESS_KEY_ID ? '✅ Set' : '❌ Missing'}`);
console.log(`   R2_SECRET_ACCESS_KEY: ${R2_SECRET_ACCESS_KEY ? '✅ Set' : '❌ Missing'}`);
console.log(`   R2_BUCKET_NAME: ${R2_BUCKET_NAME ? '✅ Set' : '❌ Missing'}`);
console.log(`   R2_PUBLIC_URL: ${R2_PUBLIC_URL ? '✅ Set' : '❌ Missing'}`);
console.log('');

if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_BUCKET_NAME) {
  console.error('❌ Missing required environment variables!');
  console.error('\nPlease add the following to your .env.local file:');
  console.error('R2_ACCOUNT_ID=your_cloudflare_account_id');
  console.error('R2_ACCESS_KEY_ID=your_r2_access_key_id');
  console.error('R2_SECRET_ACCESS_KEY=your_r2_secret_access_key');
  console.error('R2_BUCKET_NAME=altiora-images');
  console.error('R2_PUBLIC_URL=https://images.yourdomain.com');
  process.exit(1);
}

// Initialize R2 client
const r2Client = new S3Client({
  region: 'auto',
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
});

async function testConnection() {
  try {
    console.log('🔌 Testing R2 Connection...\n');

    // Test 1: List buckets
    console.log('Test 1: Listing buckets...');
    const listCommand = new ListBucketsCommand({});
    const listResponse = await r2Client.send(listCommand);
    console.log(`✅ Successfully connected to R2`);
    console.log(`   Found ${listResponse.Buckets?.length || 0} bucket(s)`);
    
    if (listResponse.Buckets && listResponse.Buckets.length > 0) {
      console.log('   Buckets:');
      listResponse.Buckets.forEach(bucket => {
        const isCurrent = bucket.Name === R2_BUCKET_NAME;
        console.log(`   ${isCurrent ? '→' : ' '} ${bucket.Name}${isCurrent ? ' (current)' : ''}`);
      });
    }
    console.log('');

    // Test 2: Check if specified bucket exists
    console.log('Test 2: Checking bucket access...');
    const headCommand = new HeadBucketCommand({ Bucket: R2_BUCKET_NAME });
    await r2Client.send(headCommand);
    console.log(`✅ Successfully accessed bucket: ${R2_BUCKET_NAME}`);
    console.log('');

    // Test 3: Check public URL
    console.log('Test 3: Checking public URL...');
    if (R2_PUBLIC_URL) {
      console.log(`✅ Public URL configured: ${R2_PUBLIC_URL}`);
      
      if (R2_PUBLIC_URL.includes('r2.dev')) {
        console.log('   ℹ️  Using R2.dev subdomain (good for testing)');
      } else {
        console.log('   ℹ️  Using custom domain (recommended for production)');
      }
    } else {
      console.log('⚠️  R2_PUBLIC_URL not set');
      console.log('   Images will not be publicly accessible');
    }
    console.log('');

    // Summary
    console.log('='.repeat(60));
    console.log('✅ All tests passed!');
    console.log('='.repeat(60));
    console.log('\n📝 Next steps:');
    console.log('1. Run the migration script: npm run r2:migrate');
    console.log('2. Update your code URLs: npm run r2:update-urls');
    console.log('3. Test your application: npm run dev');

  } catch (error) {
    console.error('\n❌ Connection test failed!');
    console.error(`Error: ${error.message}`);
    
    if (error.name === 'InvalidAccessKeyId') {
      console.error('\n💡 Tip: Check your R2_ACCESS_KEY_ID');
    } else if (error.name === 'SignatureDoesNotMatch') {
      console.error('\n💡 Tip: Check your R2_SECRET_ACCESS_KEY');
    } else if (error.name === 'NoSuchBucket') {
      console.error(`\n💡 Tip: Bucket "${R2_BUCKET_NAME}" does not exist`);
      console.error('   Create it in the Cloudflare dashboard first');
    } else {
      console.error('\n💡 Tip: Verify your R2 credentials and bucket name');
    }
    
    process.exit(1);
  }
}

testConnection();
