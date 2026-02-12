const http = require('http');

const serviceTypes = [
  'blockchain',
  'blockchain-development-services-building-the-future-of-web3-with-altiora-infotech',
  'dao',
  'dapp',
  'defi',
  'nft',
  'security-audit',
  'smart-contract',
  'tokenization',
  'wallet',
  'web3-marketing',
  'zk-privacy'
];

const baseUrl = 'http://localhost:3002';

async function testPage(serviceType) {
  return new Promise((resolve) => {
    const url = `${baseUrl}/services/web3/${serviceType}`;
    
    http.get(url, (res) => {
      resolve({
        serviceType,
        status: res.statusCode,
        success: res.statusCode === 200
      });
    }).on('error', (err) => {
      resolve({
        serviceType,
        status: 'ERROR',
        success: false,
        error: err.message
      });
    });
  });
}

async function testAllPages() {
  console.log('Testing all Web3 service pages...\n');
  
  const results = await Promise.all(
    serviceTypes.map(serviceType => testPage(serviceType))
  );
  
  console.log('Results:');
  console.log('========');
  
  let successCount = 0;
  
  results.forEach(result => {
    const status = result.success ? '✅ PASS' : '❌ FAIL';
    console.log(`${status} ${result.serviceType} (${result.status})`);
    if (result.success) successCount++;
    if (result.error) console.log(`    Error: ${result.error}`);
  });
  
  console.log('\n' + '='.repeat(50));
  console.log(`Summary: ${successCount}/${results.length} pages working correctly`);
  
  if (successCount === results.length) {
    console.log('🎉 All Web3 service pages are working!');
  } else {
    console.log('⚠️  Some pages have issues. Check the results above.');
  }
}

testAllPages().catch(console.error);