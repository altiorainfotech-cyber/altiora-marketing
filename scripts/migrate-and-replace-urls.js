#!/usr/bin/env node

/**
 * Complete Migration Script: Cloudinary to Cloudflare R2
 * 
 * This script:
 * 1. Extracts all Cloudinary URLs from the codebase
 * 2. Downloads images from Cloudinary
 * 3. Uploads them to Cloudflare R2
 * 4. Replaces all Cloudinary URLs with R2 URLs in files
 * 
 * Prerequisites:
 * - npm install @aws-sdk/client-s3 dotenv axios glob
 * - Set up R2 credentials in .env.local
 * 
 * Usage:
 * node scripts/migrate-and-replace-urls.js [--dry-run]
 */

require('dotenv').config({ path: '.env.local' });
const { S3Client, PutObjectCommand, HeadObjectCommand } = require('@aws-sdk/client-s3');
const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');
const { glob } = require('glob');

// Configuration
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || 'dkisnzuvo';
const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME;
const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL || `https://pub-${R2_ACCOUNT_ID}.r2.dev`;

// Command line arguments
const DRY_RUN = process.argv.includes('--dry-run');

// Validate configuration
if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_BUCKET_NAME) {
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

// Helper function to extract public ID and extension from Cloudinary URL
function parseCloudinaryUrl(url) {
  // Match pattern: https://res.cloudinary.com/{cloud_name}/{resource_type}/upload/v{version}/{public_id}.{ext}
  const match = url.match(/\/upload\/v\d+\/(.+?)(\.\w+)$/);
  if (match) {
    return {
      publicId: match[1],
      extension: match[2],
      r2Key: `${match[1]}${match[2]}`
    };
  }
  
  // Fallback: use the filename
  const filename = path.basename(url);
  const ext = path.extname(filename);
  const name = path.basename(filename, ext);
  
  return {
    publicId: name,
    extension: ext,
    r2Key: filename
  };
}

// Extract all Cloudinary URLs from files
async function extractCloudinaryUrls() {
  console.log('🔍 Scanning codebase for Cloudinary URLs...\n');
  
  const patterns = [
    'src/**/*.{js,jsx,ts,tsx,css}',
    'scripts/**/*.{js,ts}',
    'app/**/*.{js,jsx,ts,tsx}',
    '*.{js,ts,tsx}'
  ];
  
  const files = await glob(patterns, {
    ignore: ['node_modules/**', '.next/**', 'dist/**', 'build/**'],
    cwd: process.cwd()
  });
  
  const urlMap = new Map(); // Map<cloudinaryUrl, Set<filePaths>>
  const cloudinaryRegex = /https:\/\/res\.cloudinary\.com\/[^\/]+\/(?:image|video)\/upload\/[^\s"'`)]+/g;
  
  for (const file of files) {
    try {
      const content = await fs.readFile(file, 'utf-8');
      const matches = content.match(cloudinaryRegex);
      
      if (matches) {
        for (const url of matches) {
          if (!urlMap.has(url)) {
            urlMap.set(url, new Set());
          }
          urlMap.get(url).add(file);
        }
      }
    } catch (error) {
      console.error(`   ⚠️  Error reading ${file}: ${error.message}`);
    }
  }
  
  console.log(`   Found ${urlMap.size} unique Cloudinary URLs in ${files.length} files\n`);
  return urlMap;
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
      maxContentLength: 100 * 1024 * 1024, // 100MB
    });
    return Buffer.from(response.data);
  } catch (error) {
    throw new Error(`Download failed: ${error.message}`);
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
      CacheControl: 'public, max-age=31536000, immutable',
    }));
    return true;
  } catch (error) {
    throw new Error(`Upload failed: ${error.message}`);
  }
}

// Migrate single image
async function migrateImage(cloudinaryUrl) {
  const parsed = parseCloudinaryUrl(cloudinaryUrl);
  const r2Key = parsed.r2Key;
  
  // Check if already exists in R2
  const exists = await fileExistsInR2(r2Key);
  if (exists) {
    return { success: true, skipped: true, r2Key, r2Url: `${R2_PUBLIC_URL}/${r2Key}` };
  }
  
  if (DRY_RUN) {
    return { success: true, skipped: false, dryRun: true, r2Key, r2Url: `${R2_PUBLIC_URL}/${r2Key}` };
  }
  
  // Download from Cloudinary
  const buffer = await downloadFromCloudinary(cloudinaryUrl);
  
  // Upload to R2
  const contentType = getContentType(cloudinaryUrl);
  await uploadToR2(buffer, r2Key, contentType);
  
  return { success: true, skipped: false, r2Key, r2Url: `${R2_PUBLIC_URL}/${r2Key}` };
}

// Replace URLs in file
async function replaceUrlsInFile(filePath, urlReplacements) {
  try {
    let content = await fs.readFile(filePath, 'utf-8');
    let modified = false;
    
    for (const [oldUrl, newUrl] of urlReplacements) {
      if (content.includes(oldUrl)) {
        content = content.replace(new RegExp(oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newUrl);
        modified = true;
      }
    }
    
    if (modified && !DRY_RUN) {
      await fs.writeFile(filePath, content, 'utf-8');
      return true;
    }
    
    return modified;
  } catch (error) {
    console.error(`   ❌ Error updating ${filePath}: ${error.message}`);
    return false;
  }
}

// Main execution
async function main() {
  console.log('🚀 Starting Complete Cloudinary to R2 Migration\n');
  console.log(`📊 Configuration:`);
  console.log(`   Cloudinary: ${CLOUDINARY_CLOUD_NAME}`);
  console.log(`   R2 Bucket: ${R2_BUCKET_NAME}`);
  console.log(`   R2 Public URL: ${R2_PUBLIC_URL}`);
  console.log(`   Mode: ${DRY_RUN ? '🔍 DRY RUN (no changes will be made)' : '✍️  LIVE (files will be modified)'}\n`);
  console.log('='.repeat(80) + '\n');
  
  // Step 1: Extract all Cloudinary URLs
  const urlMap = await extractCloudinaryUrls();
  
  if (urlMap.size === 0) {
    console.log('✅ No Cloudinary URLs found in the codebase!');
    return;
  }
  
  // Step 2: Migrate images to R2
  console.log('📦 Migrating images to R2...\n');
  
  const results = {
    total: urlMap.size,
    success: 0,
    skipped: 0,
    failed: 0,
  };
  
  const urlReplacements = new Map(); // Map<oldUrl, newUrl>
  
  for (const [cloudinaryUrl, files] of urlMap) {
    console.log(`\n📦 Processing: ${cloudinaryUrl}`);
    console.log(`   Used in ${files.size} file(s): ${Array.from(files).slice(0, 3).join(', ')}${files.size > 3 ? '...' : ''}`);
    
    try {
      const result = await migrateImage(cloudinaryUrl);
      
      if (result.success) {
        urlReplacements.set(cloudinaryUrl, result.r2Url);
        
        if (result.skipped) {
          console.log(`   ⏭️  Already exists in R2`);
          results.skipped++;
        } else if (result.dryRun) {
          console.log(`   🔍 Would migrate to: ${result.r2Url}`);
          results.success++;
        } else {
          console.log(`   ✅ Migrated to: ${result.r2Url}`);
          results.success++;
        }
      }
    } catch (error) {
      console.log(`   ❌ Failed: ${error.message}`);
      results.failed++;
    }
  }
  
  // Step 3: Replace URLs in files
  console.log('\n\n' + '='.repeat(80));
  console.log('📝 Replacing URLs in files...\n');
  
  const filesToUpdate = new Set();
  for (const files of urlMap.values()) {
    for (const file of files) {
      filesToUpdate.add(file);
    }
  }
  
  let filesUpdated = 0;
  for (const file of filesToUpdate) {
    const updated = await replaceUrlsInFile(file, urlReplacements);
    if (updated) {
      console.log(`   ✅ Updated: ${file}`);
      filesUpdated++;
    }
  }
  
  // Print summary
  console.log('\n\n' + '='.repeat(80));
  console.log('📊 Migration Summary');
  console.log('='.repeat(80));
  console.log(`Total URLs processed: ${results.total}`);
  console.log(`✅ Successfully migrated: ${results.success}`);
  console.log(`⏭️  Skipped (already exists): ${results.skipped}`);
  console.log(`❌ Failed: ${results.failed}`);
  console.log(`📝 Files updated: ${filesUpdated}`);
  console.log('='.repeat(80));
  
  if (DRY_RUN) {
    console.log('\n🔍 This was a DRY RUN. No changes were made.');
    console.log('   Run without --dry-run to perform the actual migration.');
  } else if (results.failed > 0) {
    console.log('\n⚠️  Some files failed to migrate. Please check the logs above.');
    process.exit(1);
  } else {
    console.log('\n✅ Migration completed successfully!');
    console.log('\n📝 Next steps:');
    console.log('1. Test all images load correctly from R2');
    console.log('2. Update R2_PUBLIC_URL in production environment');
    console.log('3. Set up custom domain for R2 bucket (optional)');
    console.log('4. Consider enabling Cloudflare Images for transformations');
  }
}

// Run the migration
main().catch(error => {
  console.error('\n❌ Migration failed:', error);
  process.exit(1);
});
