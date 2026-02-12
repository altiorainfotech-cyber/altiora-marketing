#!/usr/bin/env node

/**
 * Script to update Cloudinary URLs to R2 URLs in the codebase
 * 
 * This script will:
 * 1. Find all Cloudinary URLs in your code
 * 2. Replace them with R2 URLs
 * 3. Create a backup before making changes
 * 
 * Usage:
 * node scripts/update-urls-in-code.js [--dry-run]
 */

require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const path = require('path');

const DRY_RUN = process.argv.includes('--dry-run');
const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL || 'https://images.yourdomain.com';
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || 'dkisnzuvo';

// Files to process
const FILES_TO_UPDATE = [
  'src/assets/Header.tsx',
  'src/assets/Footer.tsx',
  'src/data/testimonials.ts',
  'src/components/sections/ClientTestimonials.tsx',
  'src/app/services/page.tsx',
  'src/app/services/ai-ml/_components/techstackaiml.tsx',
];

// Regex patterns to find Cloudinary URLs
const CLOUDINARY_URL_PATTERN = new RegExp(
  `https://res\\.cloudinary\\.com/${CLOUDINARY_CLOUD_NAME}/(image|video)/upload/v\\d+/([^"'\\s]+)`,
  'g'
);

function extractPublicIdFromUrl(url) {
  const match = url.match(/\/v\d+\/(.+)$/);
  if (match) {
    return match[1];
  }
  return null;
}

function replaceCloudinaryUrl(url) {
  const publicId = extractPublicIdFromUrl(url);
  if (!publicId) {
    console.warn(`   ⚠️  Could not extract public ID from: ${url}`);
    return url;
  }
  return `${R2_PUBLIC_URL}/${publicId}`;
}

function processFile(filePath) {
  const fullPath = path.join(__dirname, '..', filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⏭️  Skipping ${filePath} (file not found)`);
    return { updated: false, changes: 0 };
  }

  console.log(`\n📄 Processing: ${filePath}`);
  
  let content = fs.readFileSync(fullPath, 'utf8');
  let changes = 0;
  
  const matches = content.match(CLOUDINARY_URL_PATTERN);
  
  if (!matches || matches.length === 0) {
    console.log(`   ℹ️  No Cloudinary URLs found`);
    return { updated: false, changes: 0 };
  }

  console.log(`   Found ${matches.length} Cloudinary URL(s)`);
  
  // Replace each URL
  const newContent = content.replace(CLOUDINARY_URL_PATTERN, (match) => {
    const newUrl = replaceCloudinaryUrl(match);
    console.log(`   🔄 ${match}`);
    console.log(`      → ${newUrl}`);
    changes++;
    return newUrl;
  });

  if (!DRY_RUN) {
    // Create backup
    const backupPath = `${fullPath}.backup`;
    fs.copyFileSync(fullPath, backupPath);
    console.log(`   💾 Backup created: ${backupPath}`);
    
    // Write updated content
    fs.writeFileSync(fullPath, newContent, 'utf8');
    console.log(`   ✅ File updated`);
  } else {
    console.log(`   🔍 DRY RUN - No changes made`);
  }

  return { updated: true, changes };
}

function main() {
  console.log('🚀 Updating Cloudinary URLs to R2 URLs\n');
  console.log(`📊 Configuration:`);
  console.log(`   Cloudinary: ${CLOUDINARY_CLOUD_NAME}`);
  console.log(`   R2 URL: ${R2_PUBLIC_URL}`);
  console.log(`   Mode: ${DRY_RUN ? 'DRY RUN' : 'LIVE'}\n`);

  if (DRY_RUN) {
    console.log('⚠️  Running in DRY RUN mode - no files will be modified\n');
  }

  const results = {
    total: 0,
    updated: 0,
    totalChanges: 0,
  };

  for (const file of FILES_TO_UPDATE) {
    results.total++;
    const result = processFile(file);
    if (result.updated) {
      results.updated++;
      results.totalChanges += result.changes;
    }
  }

  // Summary
  console.log('\n\n' + '='.repeat(60));
  console.log('📊 Update Summary');
  console.log('='.repeat(60));
  console.log(`Files processed: ${results.total}`);
  console.log(`Files updated: ${results.updated}`);
  console.log(`Total URL changes: ${results.totalChanges}`);
  console.log('='.repeat(60));

  if (DRY_RUN) {
    console.log('\n💡 This was a dry run. Run without --dry-run to apply changes.');
  } else {
    console.log('\n✅ Update completed!');
    console.log('\n📝 Next steps:');
    console.log('1. Test your application thoroughly');
    console.log('2. Check that all images load correctly');
    console.log('3. If everything works, you can delete the .backup files');
    console.log('4. Update imports from cloudinary to r2 in your code');
  }
}

main();
