/**
 * Script to replace Cloudinary URLs with R2 URLs in source files
 * This uses the mapping file created by migrate-all-cloudinary-to-r2.js
 * 
 * Run: node scripts/replace-cloudinary-urls.js
 */

const fs = require('fs');
const path = require('path');

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

async function replaceUrls() {
  // Load the mapping file
  const mappingPath = path.join(process.cwd(), 'cloudinary-to-r2-mapping.json');
  
  if (!fs.existsSync(mappingPath)) {
    console.error('❌ Mapping file not found: cloudinary-to-r2-mapping.json');
    console.error('   Please run: node scripts/migrate-all-cloudinary-to-r2.js first');
    process.exit(1);
  }

  const urlMapping = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'));
  const cloudinaryUrls = Object.keys(urlMapping);
  
  console.log(`📄 Loaded ${cloudinaryUrls.length} URL mappings\n`);
  console.log('🔍 Scanning source files...\n');

  // Find all source files
  const srcDir = path.join(process.cwd(), 'src');
  const files = findFiles(srcDir, ['.ts', '.tsx', '.js', '.jsx']);
  
  let totalReplacements = 0;
  const modifiedFiles = [];

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');
    let fileReplacements = 0;
    let modified = false;

    // Replace each Cloudinary URL with its R2 equivalent
    for (const [cloudinaryUrl, r2Url] of Object.entries(urlMapping)) {
      const escapedUrl = cloudinaryUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedUrl, 'g');
      const matches = content.match(regex);
      
      if (matches) {
        content = content.replace(regex, r2Url);
        fileReplacements += matches.length;
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(file, content, 'utf-8');
      modifiedFiles.push({ file, replacements: fileReplacements });
      totalReplacements += fileReplacements;
      console.log(`✅ ${file}: ${fileReplacements} replacement(s)`);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('✨ Replacement Summary');
  console.log('='.repeat(60));
  console.log(`📝 Files modified: ${modifiedFiles.length}`);
  console.log(`🔄 Total replacements: ${totalReplacements}\n`);

  if (modifiedFiles.length > 0) {
    console.log('Modified files:');
    modifiedFiles.forEach(({ file, replacements }) => {
      console.log(`  - ${file} (${replacements} replacement(s))`);
    });
    console.log('');
  }

  console.log('✅ All Cloudinary URLs have been replaced with R2 URLs!');
  console.log('\n📝 Next steps:');
  console.log('1. Test your application: npm run dev');
  console.log('2. Verify all images load correctly');
  console.log('3. Commit the changes: git add . && git commit -m "Migrate from Cloudinary to R2"');
}

replaceUrls().catch(console.error);
