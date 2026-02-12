// Force revalidate the projects page cache
const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/revalidate?path=/projects&secret=' + (process.env.REVALIDATION_SECRET || 'seo-revalidation-secret-key-2024'),
  method: 'GET'
};

console.log('🔄 Forcing cache revalidation for /projects...\n');

const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Response:', data);
    if (res.statusCode === 200) {
      console.log('\n✅ Cache revalidated successfully!');
      console.log('🌐 Visit http://localhost:3000/projects to see the changes');
    } else {
      console.log('\n⚠️  Revalidation response status:', res.statusCode);
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Error:', error.message);
  console.log('\n💡 Alternative: Restart your dev server to clear the cache');
  console.log('   1. Stop the dev server (Ctrl+C)');
  console.log('   2. Run: npm run dev');
});

req.end();
