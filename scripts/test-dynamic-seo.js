/**
 * Test script to verify dynamic SEO metadata is working correctly
 * This script tests the SEO API endpoints and metadata generation
 */

const testPaths = [
  '/about',
  '/contact',
  '/services/web3/blockchain',
  '/services/web2/api-development-integration',
  '/services/ai-ml',
  '/faq',
  '/staff'
];

/**
 * Test the SEO API endpoint
 */
async function testSEOAPI() {
  console.log('🧪 Testing SEO API endpoints...\n');
  
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://altiorainfotech.com'
    : 'http://localhost:3000';
  
  for (const path of testPaths) {
    try {
      console.log(`Testing: ${path}`);
      
      const apiUrl = `${baseUrl}/api/seo/${encodeURIComponent(path)}`;
      console.log(`  API URL: ${apiUrl}`);
      
      const response = await fetch(apiUrl, {
        cache: 'no-store'
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log(`  ✅ Success - Title: "${data.metaTitle}"`);
        console.log(`  📝 Description: "${data.metaDescription.substring(0, 80)}..."`);
        
        // Validate required fields
        if (!data.metaTitle || !data.metaDescription) {
          console.log(`  ⚠️  Warning: Missing required fields`);
        }
      } else {
        console.log(`  ❌ Failed - Status: ${response.status}`);
        if (response.status === 404) {
          console.log(`  💡 This means no SEO data exists in the database for this path`);
        }
      }
    } catch (error) {
      console.log(`  ❌ Error: ${error.message}`);
    }
    
    console.log(''); // Empty line for readability
  }
}

/**
 * Test metadata generation function directly
 */
async function testMetadataGeneration() {
  console.log('🧪 Testing metadata generation functions...\n');
  
  try {
    // This would need to be run in a Next.js environment
    // const { generatePageMetadata } = require('../src/lib/seo');
    
    console.log('Note: Direct metadata generation testing requires Next.js runtime');
    console.log('Run this test within your Next.js application for full testing');
  } catch (error) {
    console.log('Cannot test metadata generation outside Next.js environment');
  }
}

/**
 * Test admin API connectivity
 */
async function testAdminAPI() {
  console.log('🧪 Testing admin API connectivity...\n');
  
  const adminApiUrl = process.env.ADMIN_API_URL || 'https://testing-a-p.vercel.app';
  
  for (const path of testPaths.slice(0, 3)) { // Test first 3 paths
    try {
      console.log(`Testing admin API for: ${path}`);
      
      const apiUrl = `${adminApiUrl}/api/public/seo/${encodeURIComponent(path)}?siteId=altiorainfotech`;
      console.log(`  Admin API URL: ${apiUrl}`);
      
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store'
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log(`  ✅ Admin API Success - Title: "${data.metaTitle}"`);
      } else {
        console.log(`  ❌ Admin API Failed - Status: ${response.status}`);
      }
    } catch (error) {
      console.log(`  ❌ Admin API Error: ${error.message}`);
    }
    
    console.log('');
  }
}

/**
 * Generate a summary report
 */
function generateReport() {
  console.log('📊 Dynamic SEO Implementation Summary\n');
  console.log('✅ Converted pages to use generateMetadata():');
  
  const convertedPages = [
    '• /about/layout.tsx',
    '• /contact/layout.tsx', 
    '• /depin/layout.tsx',
    '• /rwa/layout.tsx',
    '• /web3-deck/layout.tsx',
    '• /services/layout.tsx',
    '• /services/web3/*/layout.tsx (all Web3 service pages)',
    '• /services/web2/*.tsx (all Web2 service pages)',
    '• /services/ai-ml/layout.tsx and related pages',
    '• /faq/page.tsx',
    '• /gamify/page.tsx', 
    '• /staff/page.tsx'
  ];
  
  convertedPages.forEach(page => console.log(page));
  
  console.log('\n🔧 System Components:');
  console.log('• SEO API endpoint: /api/seo/[path]/route.ts');
  console.log('• SEO utility functions: /lib/seo.ts');
  console.log('• Admin system integration: MongoDB via testing-A.P');
  console.log('• Population script: /scripts/populate-seo-metadata.js');
  
  console.log('\n📝 Next Steps:');
  console.log('1. Run the population script to add SEO data to MongoDB');
  console.log('2. Test the admin panel meta-management interface');
  console.log('3. Verify metadata updates reflect on the website');
  console.log('4. Monitor SEO API performance and caching');
}

/**
 * Main test function
 */
async function runTests() {
  console.log('🚀 Starting Dynamic SEO System Tests\n');
  console.log('='.repeat(50));
  
  await testAdminAPI();
  console.log('='.repeat(50));
  
  await testSEOAPI();
  console.log('='.repeat(50));
  
  await testMetadataGeneration();
  console.log('='.repeat(50));
  
  generateReport();
  
  console.log('\n✨ Testing completed!');
}

// Export for use in other scripts
module.exports = { 
  testSEOAPI, 
  testAdminAPI, 
  testMetadataGeneration, 
  runTests 
};

// Run if called directly
if (require.main === module) {
  runTests().catch(console.error);
}