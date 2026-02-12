// Script to delete local assets that have been migrated to Cloudinary
const fs = require('fs');
const path = require('path');

// Assets that have been migrated to Cloudinary
const MIGRATED_ASSETS = [
  // Logos
  'public/icons/logo.png',
  'public/icons/logo.svg',

  // QuickLinks
  'public/images/quicklinks/staff.png',
  'public/images/quicklinks/projects.png',

  // Industries
  'public/icons/industries/supply-chain.svg',
  'public/icons/industries/healthcare.svg',
  'public/icons/industries/education.svg',
  'public/icons/industries/real-estate.svg',
  'public/icons/industries/ecommerce.svg',
  'public/icons/industries/finance.svg',
  'public/icons/industries/entertainment.svg',
  'public/icons/industries/legal.svg',
  'public/icons/industries/government.svg',
  'public/icons/industries/oil-gas.svg',

  // Tools
  'public/icons/tools/react.svg',
  'public/icons/tools/nextjs.svg',
  'public/icons/tools/typescript.svg',
  'public/icons/tools/tailwind.svg',
  'public/icons/tools/css3.svg',
  'public/icons/tools/html5.svg',
  'public/icons/tools/nodejs.svg',
  'public/icons/tools/nestjs.svg',
  'public/icons/tools/express.svg',
  'public/icons/tools/python.svg',
  'public/icons/tools/go.svg',
  'public/icons/tools/java.svg',
  'public/icons/tools/postgres.svg',
  'public/icons/tools/mysql.svg',
  'public/icons/tools/mongodb.svg',
  'public/icons/tools/redis.svg',
  'public/icons/tools/sqlite.svg',
  'public/icons/tools/elastic.svg',
  'public/icons/tools/reactnative.svg',
  'public/icons/tools/flutter.svg',
  'public/icons/tools/swift.svg',
  'public/icons/tools/kotlin.svg',
  'public/icons/tools/ionic.svg',
  'public/icons/tools/xamarin.svg',
  'public/icons/tools/solidity.svg',
  'public/icons/tools/hardhat.svg',
  'public/icons/tools/foundry.svg',
  'public/icons/tools/ethereum.svg',
  'public/icons/tools/linea.svg',
  'public/icons/tools/ipfs.svg',
  'public/icons/tools/ai-python.svg',
  'public/icons/tools/openai.svg',
  'public/icons/tools/langchain.svg',
  'public/icons/tools/vercelai.svg',
  'public/icons/tools/supabase.svg',
  'public/icons/tools/trpc.svg',

  // Videos
  'public/images/blockchain-technology.mp4',
  'public/images/AI-futuristic.mp4',
  'public/images/cyber-code-world.mp4',

  // Testimonials
  'public/images/testimonials/priya.png',
  'public/images/testimonials/rohit.png',
  'public/images/testimonials/ananya.png',
  'public/images/testimonials/1.webp',
  'public/images/testimonials/2.webp',
  'public/images/testimonials/3.webp',
  'public/images/testimonials/4.webp',
];

const projectRoot = path.join(__dirname, '..');

console.log('🧹 Cleaning up migrated assets...\n');

let deletedCount = 0;
let notFoundCount = 0;
let errorCount = 0;

MIGRATED_ASSETS.forEach(assetPath => {
  const fullPath = path.join(projectRoot, assetPath);
  
  try {
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
      console.log(`✅ Deleted: ${assetPath}`);
      deletedCount++;
    } else {
      console.log(`⚠️  Not found: ${assetPath}`);
      notFoundCount++;
    }
  } catch (error) {
    console.log(`❌ Error deleting ${assetPath}: ${error.message}`);
    errorCount++;
  }
});

// Clean up empty directories
const emptyDirs = [
  'public/icons/industries',
  'public/icons/tools',
  'public/images/quicklinks',
  'public/images/testimonials'
];

emptyDirs.forEach(dirPath => {
  const fullPath = path.join(projectRoot, dirPath);
  try {
    if (fs.existsSync(fullPath)) {
      const files = fs.readdirSync(fullPath);
      if (files.length === 0) {
        fs.rmdirSync(fullPath);
        console.log(`🗂️  Removed empty directory: ${dirPath}`);
      }
    }
  } catch (error) {
    console.log(`⚠️  Could not remove directory ${dirPath}: ${error.message}`);
  }
});

console.log(`\n📊 Summary:`);
console.log(`   Deleted: ${deletedCount} files`);
console.log(`   Not found: ${notFoundCount} files`);
console.log(`   Errors: ${errorCount} files`);
console.log(`\n✨ Cleanup complete! Your project is now ${deletedCount > 0 ? 'lighter' : 'already clean'}.`);