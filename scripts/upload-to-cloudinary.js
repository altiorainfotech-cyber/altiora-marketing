// Script to upload images to Cloudinary
// Run: node scripts/upload-to-cloudinary.js

const fs = require('fs');
const path = require('path');

// Image mappings from our TypeScript file
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

const publicDir = path.join(__dirname, '..', 'public');

console.log('📋 Cloudinary Upload Checklist\n');
console.log('Please upload these files to Cloudinary with the specified public IDs:\n');

let foundCount = 0;
let missingCount = 0;

Object.entries(IMAGE_MAPPINGS).forEach(([localPath, publicId]) => {
  const fullPath = path.join(publicDir, localPath.replace(/^\//, ''));
  const exists = fs.existsSync(fullPath);
  
  if (exists) {
    foundCount++;
    console.log(`✅ ${localPath} → ${publicId}`);
    console.log(`   File: ${fullPath}`);
  } else {
    missingCount++;
    console.log(`❌ ${localPath} → ${publicId} (FILE NOT FOUND)`);
  }
  console.log('');
});

console.log(`\n📊 Summary:`);
console.log(`   Found: ${foundCount} files`);
console.log(`   Missing: ${missingCount} files`);
console.log(`   Total: ${Object.keys(IMAGE_MAPPINGS).length} mappings`);

console.log(`\n🚀 Next Steps:`);
console.log(`1. Upload each found file to Cloudinary using the specified public ID`);
console.log(`2. Ensure your Cloudinary cloud name is 'dkisnzuvo'`);
console.log(`3. Test the website to verify all images load correctly`);
console.log(`4. Consider creating missing files or removing their mappings`);