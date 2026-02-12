import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { resolve } from 'path';

// Load environment variables from .env.local
dotenv.config({ path: resolve(__dirname, '../.env.local') });

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

// Define Project Schema inline for seeding
const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);

const projectsData = [
  {
    title: "Conversion-Optimized B2B SaaS",
    category: "Web 2.0 · SaaS",
    description: "Rebuilt funnel, launched experiment framework, and improved signup-to-activation by 31%.",
    image: "/images/projects/1.webp",
    order: 1,
    isActive: true
  },
  {
    title: "RAG Assistant for Support Ops",
    category: "AI/ML · GenAI",
    description: "Built guardrailed RAG with analytics and HITL review; reduced avg response time by 42%.",
    image: "/images/projects/2.png",
    order: 2,
    isActive: true
  },
  {
    title: "Tokenized Rewards & Smart Wallets",
    category: "Web3 · DeFi",
    description: "Implemented non-custodial flows, AA wallets, and fraud controls; raised weekly active usage.",
    image: "/images/projects/3.avif",
    order: 3,
    isActive: true
  },
  {
    title: "Mobile App with Real-Time Inventory",
    category: "Mobile · Commerce",
    description: "Native app + edge sync; improved first contentful interaction and reduced cart abandonment.",
    image: "/images/projects/4.jpeg",
    order: 4,
    isActive: true
  },
  {
    title: "Lakehouse & Feature Store",
    category: "Data Platform",
    description: "Streaming + batch pipelines with governance; unlocked faster ML iteration cycles.",
    image: "/images/projects/5.png",
    order: 5,
    isActive: true
  },
  {
    title: "Zero-Downtime Deploy & Observability",
    category: "Cloud & DevOps",
    description: "Blue/green deploys, tracing, SLOs; cut rollbacks and sped up incident response.",
    image: "/images/projects/6.png",
    order: 6,
    isActive: true
  }
];

async function seedProjects() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    console.log('Clearing existing projects...');
    await Project.deleteMany({});
    console.log('Existing projects cleared');

    console.log('Seeding projects...');
    const result = await Project.insertMany(projectsData);
    console.log(`Successfully seeded ${result.length} projects`);

    console.log('\nSeeded Projects:');
    result.forEach((project, index) => {
      console.log(`${index + 1}. ${project.title} (${project.category})`);
    });

  } catch (error) {
    console.error('Error seeding projects:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('\nDatabase connection closed');
  }
}

seedProjects();
