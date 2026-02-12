/**
 * Test script to verify Why Altiora items are being fetched correctly
 * Run with: node test-why-altiora-rendering.js
 */

const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

async function testWhyAltioraData() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    const AIMLServicePage = mongoose.model('AIMLServicePage', new mongoose.Schema({}, { 
      strict: false,
      collection: 'servicepages' 
    }));

    const pageData = await AIMLServicePage.findOne({ 
      pageSlug: 'ai-ml-main',
      isActive: true 
    }).lean();

    if (!pageData) {
      console.log('❌ Page not found');
      return;
    }

    console.log('📊 Why Altiora Section Data:');
    console.log('━'.repeat(60));
    console.log(`Title: ${pageData.whyAltioraSection?.title || 'N/A'}`);
    console.log(`Highlight: ${pageData.whyAltioraSection?.highlightText || 'N/A'}`);
    console.log(`Items Count: ${pageData.whyAltioraSection?.items?.length || 0}`);
    console.log('━'.repeat(60));
    
    if (pageData.whyAltioraSection?.items) {
      console.log('\n📋 All Items:\n');
      pageData.whyAltioraSection.items.forEach((item, index) => {
        console.log(`${index + 1}. ${item.title}`);
        console.log(`   Icon: ${item.icon}`);
        console.log(`   Stat: ${item.stat} ${item.statLabel}`);
        console.log(`   Color: ${item.color}`);
        console.log(`   Description: ${item.description.substring(0, 60)}...`);
        console.log('');
      });
    }

    // Simulate what the component receives
    const whyAltioraData = pageData.whyAltioraSection || {
      title: 'Why',
      highlightText: 'Altiora',
      description: 'Default description',
      items: [
        {
          icon: 'Target',
          title: 'Full AI Lifecycle Ownership',
          stat: '100%',
          statLabel: 'Coverage',
          description: 'Default item',
          color: '#3B82F6'
        }
      ]
    };

    console.log('━'.repeat(60));
    console.log('🎯 Component will render:', whyAltioraData.items.length, 'cards');
    console.log('━'.repeat(60));

    if (whyAltioraData.items.length === 1) {
      console.log('\n⚠️  WARNING: Only 1 item will be rendered!');
      console.log('This means the database query is not returning data correctly.');
    } else if (whyAltioraData.items.length < 6) {
      console.log('\n⚠️  WARNING: Less than 6 items will be rendered!');
      console.log('Expected at least 6 items for a proper grid layout.');
    } else {
      console.log('\n✅ SUCCESS: Multiple items will be rendered correctly!');
    }

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await mongoose.connection.close();
    console.log('\n👋 Database connection closed');
  }
}

testWhyAltioraData();
