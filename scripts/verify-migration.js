#!/usr/bin/env node

/**
 * Verify Migration Script
 * 
 * This script verifies that all images are accessible from R2
 * 
 * Usage:
 * node scripts/verify-migration.js
 */

require('dotenv').config({ path: '.env.local' });
const axios = require('axios');

const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL;

// Image mappings
const IMAGE_MAPPINGS = {
  '/icons/logo.png': 'altiora/logo.png',
  '/icons/logo.svg': 'altiora/logo-svg.svg',
  '/images/quicklinks/staff.png': 'altiora/quicklinks/staff.png',
  '/images/quicklinks/projects.png': 'altiora/quicklinks/projects.png',
  '/icons/industries/supply-chain.svg': 'altiora/industries/supply-chain.svg',
  '/icons/industries/healthcare.svg': 'altiora/industries/healthcare.svg',
  '/icons/industries/education.svg': 'altiora/industries/education.svg',
  '/icons/industries/real-estate.svg': 'altiora/industries/real-estate.svg',
  '/icons/industries/ecommerce.svg': 'altiora/industries/ecommerce.svg',
  '/icons/industries/finance.svg': 'altiora/industries/finance.svg',
  '/icons/industries/entertainment.svg': 'altiora/industries/entertainment.svg',
  '/icons/industries/legal.svg': 'altiora/industries/legal.svg',
  '/icons/industries/government.svg': 'altiora/industries/government.svg',
  '/icons/industries/oil-gas.svg': 'altiora/industries/oil-gas.svg',
  '/icons/tools/react.svg': 'altiora/tools/react.svg',
  '/icons/tools/nextjs.svg': 'altiora/tools/nextjs.svg',
  '/icons/tools/typescript.svg': 'altiora/tools/typescript.svg',
  '/icons/tools/tailwind.svg': 'altiora/tools/tailwind.svg',
  '/icons/tools/css3.svg': 'altiora/tools/css3.svg',
  '/icons/tools/html5.svg': 'altiora/tools/html5.svg',
  '/icons/tools/nodejs.svg': 'altiora/tools/nodejs.svg',
  '/icons/tools/nestjs.svg': 'altiora/tools/nestjs.svg',
  '/icons/tools/express.svg': 'altiora/tools/express.svg',
  '/icons/tools/python.svg': 'altiora/tools/python.svg',
  '/icons/tools/go.svg': 'altiora/tools/go.svg',
  '/icons/tools/java.svg': 'altiora/tools/java.svg',
  '/icons/tools/postgres.svg': 'altiora/tools/postgres.svg',
  '/icons/tools/mysql.svg': 'altiora/tools/mysql.svg',
  '/icons/tools/mongodb.svg': 'altiora/tools/mongodb.svg',
  '/icons/tools/redis.svg': 'altiora/tools/redis.svg',
  '/icons/tools/sqlite.svg': 'altiora/tools/sqlite.svg',
  '/icons/tools/elastic.svg': 'altiora/tools/elastic.svg',
  '/icons/tools/reactnative.svg': 'altiora/tools/reactnative.svg',
  '/icons/tools/flutter.svg': 'altiora/tools/flutter.svg',
  '/icons/tools/swift.svg': 'altiora/tools/swift.svg',
  '/icons/tools/kotlin.svg': 'altiora/tools/kotlin.svg',
  '/icons/tools/ionic.svg': 'altiora/tools/ionic.svg',
  '/icons/tools/xamarin.svg': 'altiora/tools/xamarin.svg',
  '/icons/tools/solidity.svg': 'altiora/tools/solidity.svg',
  '/icons/tools/hardhat.svg': 'altiora/tools/hardhat.svg',
  '/icons/tools/foundry.svg': 'altiora/tools/foundry.svg',
  '/icons/tools/ethereum.svg': 'altiora/tools/ethereum.svg',
  '/icons/tools/linea.svg': 'altiora/tools/linea.svg',
  '/icons/tools/ipfs.svg': 'altiora/tools/ipfs.svg',
  '/icons/tools/ai-python.svg': 'altiora/tools/ai-python.svg',
  '/icons/tools/openai.svg': 'altiora/tools/openai.svg',
  '/icons/tools/langchain.svg': 'altiora/tools/langchain.svg',
  '/icons/tools/vercelai.svg': 'altiora/tools/vercelai.svg',
  '/icons/tools/supabase.svg': 'altiora/tools/supabase.svg',
  '/icons/tools/trpc.svg': 'altiora/tools/trpc.svg',
  '/icons/tools/placeholder.svg': 'altiora/tools/placeholder.svg',
  '/images/testimonials/priya.png': 'altiora/testimonials/priya.png',
  '/images/testimonials/rohit.png': 'altiora/testimonials/rohit.png',
  '/images/testimonials/ananya.png': 'altiora/testimonials/ananya.png',
};

// Additional URLs to check
const ADDITIONAL_URLS = [
  'logo_l6diqm.png',
  '1_sfyyyf.webp',
  '4_zrqouc.webp',
  '2_wo0iif.webp',
  '3_jo3x43.webp',
  'priya_fxjhiq.png',
  'rohit_wog8m7.png',
  'ananya_cjctp5.png',
  'blockchain-technology_esgq4m.mp4',
  'AI-futuristic_l6g2e4.mp4',
  'cyber-code-world_wwwlaz.mp4',
  '1-Core_Libraries_-_XGboost_apwoxz.svg',
];

async function checkUrl(url) {
  try {
    const response = await axios.head(url, { timeout: 10000 });
    return {
      success: true,
      status: response.status,
      contentType: response.headers['content-type'],
      size: response.headers['content-length'],
    };
  } catch (error) {
    return {
      success: false,
      status: error.response?.status || 'TIMEOUT',
      error: error.message,
    };
  }
}

async function main() {
  console.log('🔍 Verifying R2 Migration\n');
  
  if (!R2_PUBLIC_URL) {
    console.error('❌ R2_PUBLIC_URL not set in .env.local');
    process.exit(1);
  }

  console.log(`📊 Configuration:`);
  console.log(`   R2 Public URL: ${R2_PUBLIC_URL}\n`);

  const results = {
    total: 0,
    success: 0,
    failed: 0,
    failedUrls: [],
  };

  // Check mapped images
  console.log('📋 Checking mapped images...\n');
  for (const [localPath, r2Path] of Object.entries(IMAGE_MAPPINGS)) {
    results.total++;
    const url = `${R2_PUBLIC_URL}/${r2Path}`;
    
    process.stdout.write(`   Checking: ${r2Path}... `);
    const result = await checkUrl(url);
    
    if (result.success) {
      results.success++;
      const size = result.size ? `(${(result.size / 1024).toFixed(1)} KB)` : '';
      console.log(`✅ ${size}`);
    } else {
      results.failed++;
      results.failedUrls.push({ url, error: result.error });
      console.log(`❌ ${result.status}`);
    }
  }

  // Check additional URLs
  console.log('\n📋 Checking additional URLs...\n');
  for (const path of ADDITIONAL_URLS) {
    results.total++;
    const url = `${R2_PUBLIC_URL}/${path}`;
    
    process.stdout.write(`   Checking: ${path}... `);
    const result = await checkUrl(url);
    
    if (result.success) {
      results.success++;
      const size = result.size ? `(${(result.size / 1024).toFixed(1)} KB)` : '';
      console.log(`✅ ${size}`);
    } else {
      results.failed++;
      results.failedUrls.push({ url, error: result.error });
      console.log(`❌ ${result.status}`);
    }
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 Verification Summary');
  console.log('='.repeat(60));
  console.log(`Total URLs checked: ${results.total}`);
  console.log(`✅ Accessible: ${results.success}`);
  console.log(`❌ Failed: ${results.failed}`);
  console.log('='.repeat(60));

  if (results.failed > 0) {
    console.log('\n❌ Failed URLs:\n');
    results.failedUrls.forEach(({ url, error }) => {
      console.log(`   ${url}`);
      console.log(`   Error: ${error}\n`);
    });
    
    console.log('💡 Troubleshooting tips:');
    console.log('1. Verify R2_PUBLIC_URL is correct');
    console.log('2. Check that public access is enabled on your bucket');
    console.log('3. Ensure DNS has propagated (for custom domains)');
    console.log('4. Run the migration script again: npm run r2:migrate');
    
    process.exit(1);
  } else {
    console.log('\n✅ All images are accessible!');
    console.log('\n📝 Next steps:');
    console.log('1. Test your application: npm run dev');
    console.log('2. Check all pages load correctly');
    console.log('3. Deploy to production');
  }
}

main().catch(error => {
  console.error('\n❌ Verification failed:', error);
  process.exit(1);
});
