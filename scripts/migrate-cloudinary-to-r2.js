#!/usr/bin/env node

/**
 * Migration Script: Cloudinary to Cloudflare R2
 * 
 * This script:
 * 1. Fetches all images from Cloudinary
 * 2. Uploads them to Cloudflare R2
 * 3. Updates the database with new R2 URLs
 * 
 * Prerequisites:
 * - npm install @aws-sdk/client-s3 dotenv axios
 * - Set up R2 credentials in .env.local
 * 
 * Usage:
 * node scripts/migrate-cloudinary-to-r2.js
 */

require('dotenv').config({ path: '.env.local' });
const { S3Client, PutObjectCommand, HeadObjectCommand } = require('@aws-sdk/client-s3');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Configuration
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME;

// Validate configuration
if (!CLOUDINARY_CLOUD_NAME || !R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_BUCKET_NAME) {
  console.error('❌ Missing required environment variables!');
  console.error('Please set: R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET_NAME');
  process.exit(1);
}

// Initialize R2 client (S3-compatible)
const r2Client = new S3Client({
  region: 'auto',
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
});

// Image mappings from your project
const IMAGE_MAPPINGS = {
  // Logo
  '/icons/logo.png': 'altiora/logo',
  '/icons/logo.svg': 'altiora/logo-svg',

  // QuickLinks
  '/images/quicklinks/staff.png': 'altiora/quicklinks/staff',
  '/images/quicklinks/projects.png': 'altiora/quicklinks/projects',
  
  // Industries
  '/icons/industries/supply-chain.svg': 'altiora/industries/supply-chain',
  '/icons/industries/healthcare.svg': 'altiora/industries/healthcare',
  '/icons/industries/education.svg': 'altiora/industries/education',
  '/icons/industries/real-estate.svg': 'altiora/industries/real-estate',
  '/icons/industries/ecommerce.svg': 'altiora/industries/ecommerce',
  '/icons/industries/finance.svg': 'altiora/industries/finance',
  '/icons/industries/entertainment.svg': 'altiora/industries/entertainment',
  '/icons/industries/legal.svg': 'altiora/industries/legal',
  '/icons/industries/government.svg': 'altiora/industries/government',
  '/icons/industries/oil-gas.svg': 'altiora/industries/oil-gas',

  // Tools - Frontend
  '/icons/tools/react.svg': 'altiora/tools/react',
  '/icons/tools/nextjs.svg': 'altiora/tools/nextjs',
  '/icons/tools/typescript.svg': 'altiora/tools/typescript',
  '/icons/tools/tailwind.svg': 'altiora/tools/tailwind',
  '/icons/tools/css3.svg': 'altiora/tools/css3',
  '/icons/tools/html5.svg': 'altiora/tools/html5',

  // Tools - Backend
  '/icons/tools/nodejs.svg': 'altiora/tools/nodejs',
  '/icons/tools/nestjs.svg': 'altiora/tools/nestjs',
  '/icons/tools/express.svg': 'altiora/tools/express',
  '/icons/tools/python.svg': 'altiora/tools/python',
  '/icons/tools/go.svg': 'altiora/tools/go',
  '/icons/tools/java.svg': 'altiora/tools/java',

  // Tools - Databases
  '/icons/tools/postgres.svg': 'altiora/tools/postgres',
  '/icons/tools/mysql.svg': 'altiora/tools/mysql',
  '/icons/tools/mongodb.svg': 'altiora/tools/mongodb',
  '/icons/tools/redis.svg': 'altiora/tools/redis',
  '/icons/tools/sqlite.svg': 'altiora/tools/sqlite',
  '/icons/tools/elastic.svg': 'altiora/tools/elastic',

  // Tools - Mobile
  '/icons/tools/reactnative.svg': 'altiora/tools/reactnative',
  '/icons/tools/flutter.svg': 'altiora/tools/flutter',
  '/icons/tools/swift.svg': 'altiora/tools/swift',
  '/icons/tools/kotlin.svg': 'altiora/tools/kotlin',
  '/icons/tools/ionic.svg': 'altiora/tools/ionic',
  '/icons/tools/xamarin.svg': 'altiora/tools/xamarin',

  // Tools - Blockchain
  '/icons/tools/solidity.svg': 'altiora/tools/solidity',
  '/icons/tools/hardhat.svg': 'altiora/tools/hardhat',
  '/icons/tools/foundry.svg': 'altiora/tools/foundry',
  '/icons/tools/ethereum.svg': 'altiora/tools/ethereum',
  '/icons/tools/linea.svg': 'altiora/tools/linea',
  '/icons/tools/ipfs.svg': 'altiora/tools/ipfs',

  // Tools - Emerging Tech
  '/icons/tools/ai-python.svg': 'altiora/tools/ai-python',
  '/icons/tools/openai.svg': 'altiora/tools/openai',
  '/icons/tools/langchain.svg': 'altiora/tools/langchain',
  '/icons/tools/vercelai.svg': 'altiora/tools/vercelai',
  '/icons/tools/supabase.svg': 'altiora/tools/supabase',
  '/icons/tools/trpc.svg': 'altiora/tools/trpc',

  // Placeholder
  '/icons/tools/placeholder.svg': 'altiora/tools/placeholder',

  // Testimonials
  '/images/testimonials/priya.png': 'altiora/testimonials/priya',
  '/images/testimonials/rohit.png': 'altiora/testimonials/rohit',
  '/images/testimonials/ananya.png': 'altiora/testimonials/ananya',
};

// Additional Cloudinary URLs found in the codebase
const ADDITIONAL_CLOUDINARY_URLS = [
  'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_l6diqm.png',
  'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/1_sfyyyf.webp',
  'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/4_zrqouc.webp',
  'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/2_wo0iif.webp',
  'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/3_jo3x43.webp',
  'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/priya_fxjhiq.png',
  'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/rohit_wog8m7.png',
  'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/ananya_cjctp5.png',
  'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/blockchain-technology_esgq4m.mp4',
  'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/AI-futuristic_l6g2e4.mp4',
  'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/cyber-code-world_wwwlaz.mp4',
  'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/1-Core_Libraries_-_XGboost_apwoxz.svg',
];

// Helper function to get content type from URL
function getContentType(url) {
  const ext = path.extname(url).toLowerCase();
  const contentTypes = {
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.gif': 'image/gif',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
  };
  return contentTypes[ext] || 'application/octet-stream';
}

// Helper function to extract public ID from Cloudinary URL
function extractPublicIdFromUrl(url) {
  const match = url.match(/\/v\d+\/(.+)\.\w+$/);
  if (match) {
    return match[1];
  }
  // Fallback: use the filename
  return path.basename(url, path.extname(url));
}

// Check if file exists in R2
async function fileExistsInR2(key) {
  try {
    await r2Client.send(new HeadObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: key,
    }));
    return true;
  } catch (error) {
    return false;
  }
}

// Download image from Cloudinary
async function downloadFromCloudinary(url) {
  try {
    const response = await axios.get(url, {
      responseType: 'arraybuffer',
      timeout: 30000,
    });
    return Buffer.from(response.data);
  } catch (error) {
    console.error(`   ❌ Failed to download: ${error.message}`);
    return null;
  }
}

// Upload to R2
async function uploadToR2(buffer, key, contentType) {
  try {
    await r2Client.send(new PutObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: key,
      Body: buffer,
      ContentType: contentType,
    }));
    return true;
  } catch (error) {
    console.error(`   ❌ Failed to upload to R2: ${error.message}`);
    return false;
  }
}

// Main migration function
async function migrateImage(cloudinaryUrl, r2Key) {
  console.log(`\n📦 Processing: ${r2Key}`);
  console.log(`   Source: ${cloudinaryUrl}`);

  // Check if already exists in R2
  const exists = await fileExistsInR2(r2Key);
  if (exists) {
    console.log(`   ⏭️  Already exists in R2, skipping...`);
    return { success: true, skipped: true };
  }

  // Download from Cloudinary
  console.log(`   ⬇️  Downloading from Cloudinary...`);
  const buffer = await downloadFromCloudinary(cloudinaryUrl);
  if (!buffer) {
    return { success: false, error: 'Download failed' };
  }

  // Upload to R2
  console.log(`   ⬆️  Uploading to R2...`);
  const contentType = getContentType(cloudinaryUrl);
  const uploaded = await uploadToR2(buffer, r2Key, contentType);
  
  if (uploaded) {
    console.log(`   ✅ Successfully migrated!`);
    return { success: true, skipped: false };
  } else {
    return { success: false, error: 'Upload failed' };
  }
}

// Main execution
async function main() {
  console.log('🚀 Starting Cloudinary to R2 Migration\n');
  console.log(`📊 Configuration:`);
  console.log(`   Cloudinary: ${CLOUDINARY_CLOUD_NAME}`);
  console.log(`   R2 Bucket: ${R2_BUCKET_NAME}`);
  console.log(`   R2 Account: ${R2_ACCOUNT_ID}\n`);

  const results = {
    total: 0,
    success: 0,
    skipped: 0,
    failed: 0,
  };

  // Migrate images from IMAGE_MAPPINGS
  console.log('📋 Migrating images from IMAGE_MAPPINGS...\n');
  for (const [localPath, publicId] of Object.entries(IMAGE_MAPPINGS)) {
    results.total++;
    
    // Construct Cloudinary URL
    const cloudinaryUrl = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${publicId}`;
    
    // Use the same public ID structure for R2
    const r2Key = `${publicId}${path.extname(localPath)}`;
    
    const result = await migrateImage(cloudinaryUrl, r2Key);
    
    if (result.success) {
      if (result.skipped) {
        results.skipped++;
      } else {
        results.success++;
      }
    } else {
      results.failed++;
    }
  }

  // Migrate additional URLs found in codebase
  console.log('\n\n📋 Migrating additional Cloudinary URLs...\n');
  for (const url of ADDITIONAL_CLOUDINARY_URLS) {
    results.total++;
    
    // Extract public ID from URL
    const publicId = extractPublicIdFromUrl(url);
    const ext = path.extname(url);
    const r2Key = `${publicId}${ext}`;
    
    const result = await migrateImage(url, r2Key);
    
    if (result.success) {
      if (result.skipped) {
        results.skipped++;
      } else {
        results.success++;
      }
    } else {
      results.failed++;
    }
  }

  // Print summary
  console.log('\n\n' + '='.repeat(60));
  console.log('📊 Migration Summary');
  console.log('='.repeat(60));
  console.log(`Total files processed: ${results.total}`);
  console.log(`✅ Successfully migrated: ${results.success}`);
  console.log(`⏭️  Skipped (already exists): ${results.skipped}`);
  console.log(`❌ Failed: ${results.failed}`);
  console.log('='.repeat(60));

  if (results.failed > 0) {
    console.log('\n⚠️  Some files failed to migrate. Please check the logs above.');
    process.exit(1);
  } else {
    console.log('\n✅ Migration completed successfully!');
    console.log('\n📝 Next steps:');
    console.log('1. Update your code to use the R2 URLs');
    console.log('2. Test all images load correctly');
    console.log('3. Update environment variables for production');
    console.log('4. Consider setting up Cloudflare Images for transformations');
  }
}

// Run the migration
main().catch(error => {
  console.error('\n❌ Migration failed:', error);
  process.exit(1);
});
