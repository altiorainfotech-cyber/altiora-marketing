#!/usr/bin/env node

/**
 * R2 Configuration Checker
 * 
 * This script checks your Cloudflare R2 bucket configuration
 * and helps you set up public access.
 */

require('dotenv').config({ path: '.env.local' });
const { S3Client, HeadBucketCommand, PutObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3');

const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME;
const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL;

console.log('🔍 Checking R2 Configuration...\n');
console.log('='.repeat(80));
console.log('Current Configuration:');
console.log('='.repeat(80));
console.log(`Account ID: ${R2_ACCOUNT_ID}`);
console.log(`Bucket Name: ${R2_BUCKET_NAME}`);
console.log(`Public URL: ${R2_PUBLIC_URL}`);
console.log('='.repeat(80) + '\n');

// Validate configuration
if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_BUCKET_NAME) {
  console.error('❌ Missing required environment variables!');
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

async function checkBucketAccess() {
  try {
    console.log('📦 Testing bucket access...');
    await r2Client.send(new HeadBucketCommand({
      Bucket: R2_BUCKET_NAME,
    }));
    console.log('✅ Successfully connected to R2 bucket!\n');
    return true;
  } catch (error) {
    console.error('❌ Failed to access bucket:', error.message);
    return false;
  }
}

async function testUploadAndPublicAccess() {
  const testKey = 'test-public-access.txt';
  const testContent = 'This is a test file to verify public access.';
  
  try {
    console.log('📤 Uploading test file...');
    await r2Client.send(new PutObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: testKey,
      Body: testContent,
      ContentType: 'text/plain',
    }));
    console.log('✅ Test file uploaded successfully!\n');
    
    // Try to access via public URL
    console.log('🌐 Testing public access...');
    const testUrl = `${R2_PUBLIC_URL}/${testKey}`;
    console.log(`Test URL: ${testUrl}\n`);
    
    const axios = require('axios');
    try {
      const response = await axios.get(testUrl, { timeout: 5000 });
      if (response.data === testContent) {
        console.log('✅ Public access is working correctly!\n');
        return true;
      } else {
        console.log('⚠️  File is accessible but content doesn\'t match.\n');
        return false;
      }
    } catch (error) {
      if (error.response?.status === 404) {
        console.log('❌ Public access is NOT enabled (404 Not Found)\n');
      } else if (error.response?.status === 403) {
        console.log('❌ Public access is FORBIDDEN (403 Forbidden)\n');
      } else {
        console.log(`❌ Failed to access public URL: ${error.message}\n`);
      }
      return false;
    }
  } catch (error) {
    console.error('❌ Failed to upload test file:', error.message);
    return false;
  }
}

async function main() {
  const bucketAccessible = await checkBucketAccess();
  
  if (!bucketAccessible) {
    console.log('\n❌ Cannot proceed. Please check your R2 credentials.\n');
    process.exit(1);
  }
  
  const publicAccessWorks = await testUploadAndPublicAccess();
  
  console.log('='.repeat(80));
  console.log('📋 Summary & Next Steps');
  console.log('='.repeat(80));
  
  if (publicAccessWorks) {
    console.log('✅ Your R2 bucket is properly configured!');
    console.log('✅ Public access is enabled and working.');
    console.log('\n🚀 You can now run the migration:');
    console.log('   node scripts/migrate-and-replace-urls.js\n');
  } else {
    console.log('⚠️  Public access is NOT properly configured.\n');
    console.log('📝 To enable public access:');
    console.log('   1. Go to Cloudflare Dashboard: https://dash.cloudflare.com/');
    console.log(`   2. Navigate to: R2 > ${R2_BUCKET_NAME}`);
    console.log('   3. Go to Settings > Public Access');
    console.log('   4. Click "Allow Access" or "Connect Domain"');
    console.log('   5. You will get a public URL like:');
    console.log('      - https://pub-xxxxxxxxxxxxx.r2.dev (R2.dev subdomain)');
    console.log('      - https://your-domain.com (custom domain)');
    console.log('   6. Update R2_PUBLIC_URL in .env.local with that URL');
    console.log('   7. Run this script again to verify\n');
    
    console.log('📖 Documentation:');
    console.log('   https://developers.cloudflare.com/r2/buckets/public-buckets/\n');
  }
  
  console.log('='.repeat(80));
}

main().catch(error => {
  console.error('\n❌ Error:', error);
  process.exit(1);
});
