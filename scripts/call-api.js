const http = require('http');

function getJson(path) {
  return new Promise((resolve, reject) => {
    const opts = {
      hostname: 'localhost',
      port: 3000,
      path,
      method: 'GET',
      headers: { 'Accept': 'application/json' },
    };

    const req = http.request(opts, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve({ status: res.statusCode, json });
        } catch (err) {
          resolve({ status: res.statusCode, body: data });
        }
      });
    });

    req.on('error', (err) => reject(err));
    req.end();
  });
}

(async () => {
  const urls = [
    '/api/ai-ml-services',
    '/api/ai-ml-services/data-strategy-and-engineering',
  ];

  for (const u of urls) {
    console.log('\n---- GET', u);
    try {
      const res = await getJson(u);
      console.log('Status:', res.status);
      if (res.json) {
        console.log('JSON keys:', Object.keys(res.json).slice(0,20));
        console.log('Sample:', JSON.stringify(res.json, null, 2).slice(0, 1000));
      } else {
        console.log('Body:', res.body);
      }
    } catch (err) {
      console.error('Error fetching', u, err.message);
    }
  }
})();
