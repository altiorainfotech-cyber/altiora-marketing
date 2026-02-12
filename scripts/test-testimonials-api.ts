/**
 * Simple script to test the testimonials API
 * Run with: tsx scripts/test-testimonials-api.ts
 */

const API_BASE = 'http://localhost:3000/api/testimonials';

async function testAPI() {
  console.log('🧪 Testing Testimonials API\n');

  try {
    // Test 1: Fetch all testimonials
    console.log('1️⃣  Testing GET /api/testimonials');
    const response = await fetch(API_BASE);
    const data = await response.json();
    
    if (data.success && Array.isArray(data.data)) {
      console.log(`✅ Success! Found ${data.data.length} testimonials`);
      data.data.forEach((t: any, i: number) => {
        console.log(`   ${i + 1}. ${t.name} - ${t.role}`);
      });
    } else {
      console.log('❌ Failed to fetch testimonials');
    }

    console.log('\n2️⃣  Testing POST /api/testimonials');
    const newTestimonial = {
      name: 'Test User',
      role: 'QA Engineer',
      company: 'Test Corp',
      quote: 'This is a test testimonial',
      rating: 5,
      avatar: 'https://via.placeholder.com/150',
      isActive: false, // Set to false so it doesn't show on public page
      order: 999
    };

    const createResponse = await fetch(API_BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTestimonial)
    });

    const createData = await createResponse.json();
    
    if (createData.success) {
      console.log('✅ Successfully created test testimonial');
      console.log(`   ID: ${createData.data._id}`);
      
      const testId = createData.data._id;

      // Test 3: Get single testimonial
      console.log('\n3️⃣  Testing GET /api/testimonials/[id]');
      const getResponse = await fetch(`${API_BASE}/${testId}`);
      const getData = await getResponse.json();
      
      if (getData.success) {
        console.log('✅ Successfully fetched single testimonial');
        console.log(`   Name: ${getData.data.name}`);
      } else {
        console.log('❌ Failed to fetch single testimonial');
      }

      // Test 4: Update testimonial
      console.log('\n4️⃣  Testing PUT /api/testimonials/[id]');
      const updateResponse = await fetch(`${API_BASE}/${testId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quote: 'Updated test quote' })
      });

      const updateData = await updateResponse.json();
      
      if (updateData.success) {
        console.log('✅ Successfully updated testimonial');
        console.log(`   New quote: ${updateData.data.quote}`);
      } else {
        console.log('❌ Failed to update testimonial');
      }

      // Test 5: Delete testimonial
      console.log('\n5️⃣  Testing DELETE /api/testimonials/[id]');
      const deleteResponse = await fetch(`${API_BASE}/${testId}`, {
        method: 'DELETE'
      });

      const deleteData = await deleteResponse.json();
      
      if (deleteData.success) {
        console.log('✅ Successfully deleted test testimonial');
      } else {
        console.log('❌ Failed to delete testimonial');
      }

    } else {
      console.log('❌ Failed to create test testimonial');
    }

    console.log('\n✨ All tests completed!\n');

  } catch (error) {
    console.error('❌ Error testing API:', error);
    console.log('\n⚠️  Make sure the development server is running:');
    console.log('   npm run dev\n');
  }
}

testAPI();
