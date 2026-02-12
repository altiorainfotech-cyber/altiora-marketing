// Script to check all projects in MongoDB
import { config } from 'dotenv';
import { resolve } from 'path';

// Load environment variables
config({ path: resolve(__dirname, '../.env.local') });

import connectDB from '../src/lib/mongodb';
import Project from '../src/models/Project';

async function checkProjects() {
  try {
    console.log('🔍 Connecting to MongoDB...');
    await connectDB();
    console.log('✅ Connected!\n');

    // Get ALL projects (including inactive)
    const allProjects = await Project.find({}).sort({ order: 1, createdAt: -1 }).lean();
    console.log(`📊 Total projects in database: ${allProjects.length}\n`);

    // Get only active projects
    const activeProjects = await Project.find({ isActive: true }).sort({ order: 1 }).lean();
    console.log(`✅ Active projects: ${activeProjects.length}`);
    console.log(`❌ Inactive projects: ${allProjects.length - activeProjects.length}\n`);

    // Display all projects with details
    console.log('📋 All Projects:\n');
    allProjects.forEach((project, index) => {
      console.log(`${index + 1}. ${project.title}`);
      console.log(`   ID: ${project._id}`);
      console.log(`   Category: ${project.category}`);
      console.log(`   Active: ${project.isActive ? '✅ YES' : '❌ NO'}`);
      console.log(`   Order: ${project.order}`);
      console.log(`   Created: ${project.createdAt}`);
      console.log('');
    });

    // Show what would appear on the page
    console.log('\n🌐 Projects that WILL appear on /projects page:');
    if (activeProjects.length === 0) {
      console.log('   ⚠️  NONE - No active projects found!');
      console.log('   💡 Make sure projects have isActive: true');
    } else {
      activeProjects.forEach((project, index) => {
        console.log(`   ${index + 1}. ${project.title} (order: ${project.order})`);
      });
    }

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

checkProjects();
