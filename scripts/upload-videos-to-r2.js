const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

// Configure R2 Client
const r2Client = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

const BUCKET_NAME = process.env.R2_BUCKET_NAME || 'altiora-infotech';
const PUBLIC_URL = process.env.R2_PUBLIC_URL;

async function uploadVideo(filePath, folder, fileName) {
  try {
    console.log(`\nUploading ${fileName}...`);
    
    // Read the video file
    const fileBuffer = fs.readFileSync(filePath);
    
    // Sanitize filename
    const sanitizedFileName = fileName.replace(/[^a-zA-Z0-9.-]/g, '_');
    const key = `${folder}/${sanitizedFileName}`;
    
    // Upload to R2
    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
      Body: fileBuffer,
      ContentType: 'video/mp4',
      Metadata: {
        uploadedAt: new Date().toISOString(),
        originalName: fileName,
      },
    });

    await r2Client.send(command);
    
    const publicUrl = `${PUBLIC_URL}/${key}`;
    console.log(`✅ Uploaded successfully!`);
    console.log(`   URL: ${publicUrl}`);
    
    return {
      fileName,
      key,
      url: publicUrl,
    };
  } catch (error) {
    console.error(`❌ Error uploading ${fileName}:`, error.message);
    throw error;
  }
}

async function main() {
  console.log('🚀 Starting video upload to Cloudflare R2...\n');
  console.log(`Bucket: ${BUCKET_NAME}`);
  console.log(`Public URL: ${PUBLIC_URL}\n`);

  const videosDir = path.join(__dirname, '../public/videos');
  const folder = 'services-videos';

  const videos = [
    {
      path: path.join(videosDir, 'AI-futuristic (1).mp4'),
      name: 'AI-futuristic.mp4',
    },
    {
      path: path.join(videosDir, 'blockchain technology (1).mp4'),
      name: 'blockchain-technology.mp4',
    },
    {
      path: path.join(videosDir, 'cyber-code-world.mp4'),
      name: 'cyber-code-world.mp4',
    },
  ];

  const results = [];

  for (const video of videos) {
    try {
      const result = await uploadVideo(video.path, folder, video.name);
      results.push(result);
    } catch (error) {
      console.error(`Failed to upload ${video.name}`);
    }
  }

  console.log('\n📊 Upload Summary:');
  console.log('==================');
  results.forEach((result, index) => {
    console.log(`\n${index + 1}. ${result.fileName}`);
    console.log(`   Key: ${result.key}`);
    console.log(`   URL: ${result.url}`);
  });

  console.log('\n✨ All videos uploaded successfully!');
  console.log('\n📝 Next steps:');
  console.log('   1. Update src/app/services/page.tsx with the new URLs');
  console.log('   2. Test the videos on your services page');
}

main().catch(console.error);
