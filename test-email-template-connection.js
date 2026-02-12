/**
 * Test email template connection from altiora-official to admin panel
 */

// Load environment variables
require('dotenv').config();

async function testEmailTemplateConnection() {
  console.log('🧪 Testing Email Template Connection\n');

  try {
    // Test the exact same logic as the email service
    const adminPanelUrl = process.env.ADMIN_API_URL || process.env.NEXT_PUBLIC_ADMIN_API_URL || 'http://localhost:3000';
    
    console.log('📋 Configuration:');
    console.log('   ADMIN_API_URL:', process.env.ADMIN_API_URL || 'Not set');
    console.log('   NEXT_PUBLIC_ADMIN_API_URL:', process.env.NEXT_PUBLIC_ADMIN_API_URL || 'Not set');
    console.log('   Final URL:', adminPanelUrl);

    console.log('\n🔗 Testing connection...');
    const response = await fetch(`${adminPanelUrl}/api/email-templates/active?type=auto-reply`);
    
    console.log('   Status:', response.status);
    console.log('   Status Text:', response.statusText);

    if (response.ok) {
      const data = await response.json();
      console.log('✅ Connection successful!');
      console.log('   Template found:', data.success);
      console.log('   Template name:', data.template?.name || 'Unknown');
      console.log('   Has logo:', data.template?.htmlContent?.includes('logo_l6diqm.png') ? '✅ YES' : '❌ NO');
      console.log('   BCC enabled:', data.template?.bccEnabled ? '✅ YES' : '❌ NO');
      console.log('   BCC emails:', data.template?.bccEmails?.length || 0);

      // Test BCC functionality
      if (data.template?.bccEnabled && data.template?.bccEmails?.length > 0) {
        console.log('\n📮 BCC Configuration:');
        data.template.bccEmails.forEach((email, i) => {
          console.log(`   ${i + 1}. ${email}`);
        });
      }

    } else {
      console.log('❌ Connection failed');
      const errorText = await response.text();
      console.log('   Error:', errorText);
    }

    // Test admin endpoints (these require authentication)
    console.log('\n🔐 Testing admin endpoints (should require auth)...');
    const adminResponse = await fetch(`${adminPanelUrl}/api/admin/email-templates`);
    console.log('   Admin API Status:', adminResponse.status);
    
    if (adminResponse.status === 401) {
      console.log('✅ Admin endpoints properly protected (401 Unauthorized)');
    } else {
      console.log('⚠️  Admin endpoints may have authentication issues');
    }

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }

  console.log('\n🎯 Test Complete!');
}

testEmailTemplateConnection();