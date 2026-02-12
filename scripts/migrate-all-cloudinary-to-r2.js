/**
 * Comprehensive script to migrate ALL Cloudinary images to R2
 * This script:
 * 1. Scans all source files for Cloudinary URLs
 * 2. Downloads each unique image from Cloudinary
 * 3. Uploads to R2 with the same path structure
 * 4. Creates a mapping file for URL replacement
 * 
 * Run: node scripts/migrate-all-cloudinary-to-r2.js
 */

require('dotenv').config({ path: '.env.local' });
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const https = require('https');
const fs = require('fs');
const path = require('path');

// R2 Configuration
const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME || 'altiora-infotech';
const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL;

if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_PUBLIC_URL) {
  console.error('❌ Missing R2 configuration in .env.local');
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

// Recursively find all files with given extensions
function findFiles(dir, extensions, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findFiles(filePath, extensions, fileList);
    } else if (extensions.some(ext => file.endsWith(ext))) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Extract Cloudinary URLs from source files
function findCloudinaryUrls() {
  const srcDir = path.join(process.cwd(), 'src');
  const files = findFiles(srcDir, ['.ts', '.tsx', '.js', '.jsx']);
  const cloudinaryUrls = new Set();
  const cloudinaryRegex = /https:\/\/res\.cloudinary\.com\/[^"'\s)]+/g;

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    const matches = content.match(cloudinaryRegex);
    if (matches) {
      matches.forEach(url => cloudinaryUrls.add(url));
    }
  }

  return Array.from(cloudinaryUrls);
}

// Parse Cloudinary URL to extract path info
function parseCloudinaryUrl(url) {
  // Example: https://res.cloudinary.com/dkisnzuvo/image/upload/v1761630233/web2/headless-cms-hero.jpg
  const match = url.match(/\/upload\/(?:v\d+\/)?(.+)$/);
  if (!match) return null;
  
  const fullPath = match[1];
  const ext = path.extname(fullPath);
  const contentTypeMap = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.mp4': 'video/mp4',
  };
  
  return {
    r2Key: fullPath,
    contentType: contentTypeMap[ext.toLowerCase()] || 'application/octet-stream',
  };
}

// Download image from URL
function downloadImage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadImage(response.headers.location).then(resolve).catch(reject);
      }

      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }

      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => resolve(Buffer.concat(chunks)));
      response.on('error', reject);
    }).on('error', reject);
  });
}

// Upload to R2
async function uploadToR2(buffer, key, contentType) {
  const command = new PutObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: key,
    Body: buffer,
    ContentType: contentType,
    Metadata: {
      uploadedAt: new Date().toISOString(),
      migratedFrom: 'cloudinary',
    },
  });

  await r2Client.send(command);
}

// Main migration function
async function migrateAllImages() {
  console.log('🔍 Scanning source files for Cloudinary URLs...\n');
  
  const cloudinaryUrls = findCloudinaryUrls();
  console.log(`📊 Found ${cloudinaryUrls.length} unique Cloudinary URLs\n`);

  const urlMapping = {};
  const failed = [];
  let successCount = 0;

  for (let i = 0; i < cloudinaryUrls.length; i++) {
    const url = cloudinaryUrls[i];
    const parsed = parseCloudinaryUrl(url);
    
    if (!parsed) {
      console.log(`⚠️  Skipping invalid URL: ${url}`);
      continue;
    }

    try {
      console.log(`[${i + 1}/${cloudinaryUrls.length}] 📥 Downloading: ${url}`);
      const buffer = await downloadImage(url);
      
      console.log(`   📤 Uploading to R2: ${parsed.r2Key}`);
      await uploadToR2(buffer, parsed.r2Key, parsed.contentType);
      
      const newUrl = `${R2_PUBLIC_URL}/${parsed.r2Key}`;
      urlMapping[url] = newUrl;
      successCount++;
      console.log(`   ✅ Success! New URL: ${newUrl}\n`);
      
      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      console.error(`   ❌ Failed: ${error.message}\n`);
      failed.push({ url, error: error.message });
    }
  }

  // Save mapping to file
  const mappingPath = path.join(process.cwd(), 'cloudinary-to-r2-mapping.json');
  fs.writeFileSync(mappingPath, JSON.stringify(urlMapping, null, 2));
  
  console.log('\n' + '='.repeat(60));
  console.log('✨ Migration Summary');
  console.log('='.repeat(60));
  console.log(`✅ Successfully migrated: ${successCount}/${cloudinaryUrls.length}`);
  console.log(`❌ Failed: ${failed.length}`);
  console.log(`📄 URL mapping saved to: ${mappingPath}\n`);

  if (failed.length > 0) {
    console.log('Failed URLs:');
    failed.forEach(({ url, error }) => {
      console.log(`  - ${url}`);
      console.log(`    Error: ${error}`);
    });
    console.log('');
  }

  console.log('📝 Next steps:');
  console.log('1. Run the replacement script to update all URLs in your code:');
  console.log('   node scripts/replace-cloudinary-urls.js');
  console.log('2. Test your application to ensure all images load correctly');
  console.log('3. Commit the changes to your repository\n');
}

// Run migration
migrateAllImages().catch(console.error);
