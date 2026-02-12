/**
 * Verify MongoDB connection works (useful for debugging deployment issues)
 * Run with: node verify-mongodb-connection.js
 */

const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

async function verifyConnection() {
  console.log('🔍 Verifying MongoDB Connection...\n');
  
  try {
    // Check if MONGODB_URI is set
    if (!process.env.MONGODB_URI) {
      console.error('❌ MONGODB_URI environment variable is not set!');
      process.exit(1);
    }

    console.log('📝 Connection String:', process.env.MONGODB_URI.replace(/:[^:@]+@/, ':****@'));
    console.log('📝 Database Name:', process.env.MONGODB_DB_NAME || 'Not set (will use default)');
    console.log('');

    // Attempt connection
    console.log('⏳ Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // 5 second timeout
    });
    
    console.log('✅ Successfully connected to MongoDB!\n');

    // Test query
    console.log('⏳ Testing database query...');
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('✅ Found', collections.length, 'collections\n');

    // Check for servicepages collection
    const hasServicePages = collections.some(c => c.name === 'servicepages');
    if (hasServicePages) {
      console.log('✅ "servicepages" collection exists');
      
      // Count documents
      const count = await mongoose.connection.db.collection('servicepages').countDocuments();
      console.log('📊 Documents in servicepages:', count);

      // Check for ai-ml-main
      const aimlPage = await mongoose.connection.db.collection('servicepages').findOne({ 
        pageSlug: 'ai-ml-main' 
      });
      
      if (aimlPage) {
        console.log('✅ AI/ML page found');
        console.log('📊 Why Altiora items:', aimlPage.whyAltioraSection?.items?.length || 0);
        console.log('📊 Is Active:', aimlPage.isActive);
      } else {
        console.log('❌ AI/ML page NOT found (pageSlug: "ai-ml-main")');
      }
    } else {
      console.log('❌ "servicepages" collection NOT found');
      console.log('📋 Available collections:', collections.map(c => c.name).join(', '));
    }

    console.log('\n✅ All checks passed! MongoDB connection is working correctly.');
    console.log('\n💡 If deployment still fails, check:');
    console.log('   1. MongoDB Atlas Network Access (whitelist deployment IPs)');
    console.log('   2. Environment variables are set in deployment platform');
    console.log('   3. Deployment logs for connection errors');

  } catch (error) {
    console.error('\n❌ Connection failed!');
    console.error('Error:', error.message);
    
    if (error.message.includes('ENOTFOUND')) {
      console.error('\n💡 DNS resolution failed. Check:');
      console.error('   - Internet connection');
      console.error('   - MongoDB cluster is running');
      console.error('   - Connection string is correct');
    } else if (error.message.includes('Authentication failed')) {
      console.error('\n💡 Authentication failed. Check:');
      console.error('   - Username and password are correct');
      console.error('   - User has proper permissions');
      console.error('   - Password is URL-encoded (@ = %40, etc.)');
    } else if (error.message.includes('timed out')) {
      console.error('\n💡 Connection timed out. Check:');
      console.error('   - MongoDB Atlas Network Access settings');
      console.error('   - Firewall/network restrictions');
      console.error('   - IP address is whitelisted');
    }
    
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('\n👋 Connection closed');
  }
}

verifyConnection();
