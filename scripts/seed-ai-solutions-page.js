const { MongoClient } = require('mongodb');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DB_NAME = process.env.MONGODB_DB || 'test';

const aiSolutionsPageData = {
  pageId: 'artificial-intelligence-solutions-advanced-ai-services',
  sections: {
    hero: {
      badge: "From Prototype to Planet Scale Advance AI Services",
      heading: "Designed For Growth From Day One.",
      subheading: "AI that Ships, Scales, and Proves ROI",
      backgroundImage: "/images/agentic-ai/pillar/Artificial Intelligence Solutions _ Advanced AI Services 1.png",
      cta: {
        primary: {
          text: "Schedule an AI Strategy Call →",
          link: "https://calendly.com/altiorainfotech/30min"
        },
        secondary: {
          text: "Learn More",
          link: "/contact"
        }
      }
    },
    intro: {
      paragraph1: "Artificial Intelligence (AI) is no longer just a buzzword—it is the backbone of modern technology, transforming industries, enhancing human capabilities, and redefining the way we interact with the world. At its core, AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human cognition, such as learning, reasoning, problem-solving, and decision-making.",
      paragraph2: "With the exponential growth of data, computing power, and advanced algorithms, AI has evolved from rule-based automation to intelligent systems capable of autonomous learning and adaptation. At Altiora Infotech, we provide cutting-edge AI solutions that help organizations leverage the power of intelligence to innovate, optimize, and excel."
    },
    importance: {
      title: "Importance of Artificial Intelligence",
      subtitle: "AI is a transformative technology with far-reaching impacts across industries and society. Its importance can be summarized as follows:",
      items: [
        { title: "Enhanced Decision-Making", desc: "AI systems process large datasets, uncover hidden insights, and support data-driven decisions.", icon: "FaChartLine" },
        { title: "Operational Efficiency", desc: "Automation of repetitive tasks saves time, reduces errors, and increases productivity.", icon: "FaCog" },
        { title: "Innovation Acceleration", desc: "AI drives innovation by enabling predictive analysis, advanced modeling, and intelligent problem-solving.", icon: "FaLightbulb" },
        { title: "Personalized Experiences", desc: "AI tailors experiences for users by analyzing behavior, preferences, and trends.", icon: "FaEye" },
        { title: "Competitive Advantage", desc: "Organizations adopting AI gain a strategic edge in efficiency, agility, and market responsiveness.", icon: "FaBolt" },
        { title: "Ethical AI Development", desc: "AI systems are built with fairness, transparency, and accountability to ensure responsible and trustworthy outcomes.", icon: "FaBalanceScale" }
      ]
    }
  },
  seo: {
    title: "Artificial Intelligence Solutions — Advanced AI Services",
    description: "End-to-end AI services—from strategy and data readiness to production deployments, MLOps, and measurable business outcomes."
  },
  createdAt: new Date(),
  updatedAt: new Date()
};

async function seedAISolutionsPage() {
  const client = new MongoClient(MONGODB_URI);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db(DB_NAME);
    const collection = db.collection('ai-ml-services');
    
    const result = await collection.replaceOne(
      { pageId: 'artificial-intelligence-solutions-advanced-ai-services' },
      aiSolutionsPageData,
      { upsert: true }
    );
    
    if (result.upsertedId) {
      console.log('✅ AI Solutions page created successfully with ID:', result.upsertedId);
    } else {
      console.log('✅ AI Solutions page updated successfully');
    }
    
  } catch (error) {
    console.error('❌ Error seeding AI Solutions page:', error);
  } finally {
    await client.close();
  }
}

seedAISolutionsPage();