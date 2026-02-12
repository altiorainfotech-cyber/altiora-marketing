const { MongoClient } = require('mongodb');
require('dotenv').config();

const portfolioProjects = [
  // Web3 & Blockchain Projects
  {
    title: "Altiora Wallet",
    category: "Web3 & Blockchain",
    description: "Non-custodial cryptocurrency wallet supporting 25+ networks with AI-powered features and cross-chain swaps",
    image: "/images/about/wallet pics.png",
    tags: ["React Native", "Blockchain", "Web3", "DeFi"],
    link: "/altiora-wallet",
    status: "Live",
    year: "2024",
    order: 1,
    isActive: true
  },
  {
    title: "DeFi Yield Aggregator",
    category: "Web3 & Blockchain",
    description: "Advanced yield farming platform with automated strategy optimization across multiple DeFi protocols",
    image: "/images/projects/1.webp",
    tags: ["Solidity", "DeFi", "Yield Farming", "Smart Contracts"],
    link: "/projects/defi-yield-aggregator",
    status: "Live",
    year: "2024",
    order: 2,
    isActive: true
  },
  {
    title: "NFT Marketplace",
    category: "Web3 & Blockchain",
    description: "Full-featured NFT marketplace with lazy minting, royalties, and multi-chain support",
    image: "/images/projects/2.png",
    tags: ["Next.js", "NFT", "IPFS", "Ethereum"],
    link: "/projects/nft-marketplace",
    status: "Live",
    year: "2023",
    order: 3,
    isActive: true
  },
  {
    title: "DAO Governance Platform",
    category: "Web3 & Blockchain",
    description: "Decentralized governance platform with proposal creation, voting mechanisms, and treasury management",
    image: "/images/projects/3.avif",
    tags: ["DAO", "Governance", "Smart Contracts", "React"],
    link: "/projects/dao-governance",
    status: "Live",
    year: "2023",
    order: 4,
    isActive: true
  },

  // AI/ML Projects
  {
    title: "AI-Powered Trading Bot",
    category: "AI/ML",
    description: "Intelligent trading bot using machine learning for market analysis and automated trading strategies",
    image: "/images/projects/4.jpeg",
    tags: ["Python", "TensorFlow", "Trading", "ML"],
    link: "/projects/ai-trading-bot",
    status: "Live",
    year: "2024",
    order: 5,
    isActive: true
  },
  {
    title: "Computer Vision Analytics",
    category: "AI/ML",
    description: "Real-time object detection and analytics system for retail and security applications",
    image: "/images/projects/5.png",
    tags: ["OpenCV", "YOLO", "Python", "Analytics"],
    link: "/projects/computer-vision",
    status: "Live",
    year: "2024",
    order: 6,
    isActive: true
  },
  {
    title: "NLP Sentiment Analyzer",
    category: "AI/ML",
    description: "Advanced sentiment analysis tool for social media monitoring and brand reputation management",
    image: "/images/projects/6.png",
    tags: ["NLP", "BERT", "Sentiment Analysis", "API"],
    link: "/projects/sentiment-analyzer",
    status: "Live",
    year: "2023",
    order: 7,
    isActive: true
  },
  {
    title: "Predictive Analytics Dashboard",
    category: "AI/ML",
    description: "Business intelligence dashboard with predictive modeling for sales forecasting and trend analysis",
    image: "/images/web3/web3-hero.png",
    tags: ["Machine Learning", "Dashboard", "Analytics", "Python"],
    link: "/projects/predictive-analytics",
    status: "Live",
    year: "2023",
    order: 8,
    isActive: true
  },

  // Web Development Projects
  {
    title: "Enterprise SaaS Platform",
    category: "Web Development",
    description: "Scalable multi-tenant SaaS platform with advanced user management and analytics",
    image: "/images/ai/ai-hero.png",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    link: "/projects/enterprise-saas",
    status: "Live",
    year: "2024",
    order: 9,
    isActive: true
  },
  {
    title: "Real Estate Platform",
    category: "Web Development",
    description: "Comprehensive real estate platform with property listings, virtual tours, and CRM integration",
    image: "/images/services/web-development.png",
    tags: ["React", "Node.js", "MongoDB", "Maps API"],
    link: "/projects/real-estate",
    status: "Live",
    year: "2024",
    order: 10,
    isActive: true
  },
  {
    title: "Healthcare Management System",
    category: "Web Development",
    description: "HIPAA-compliant healthcare management system with patient records and appointment scheduling",
    image: "/images/Hero/hero-bg.png",
    tags: ["Vue.js", "Laravel", "MySQL", "HIPAA"],
    link: "/projects/healthcare-system",
    status: "Live",
    year: "2023",
    order: 11,
    isActive: true
  },

  // Mobile Apps
  {
    title: "Fitness Tracking App",
    category: "Mobile Apps",
    description: "Comprehensive fitness app with workout tracking, nutrition planning, and social features",
    image: "/images/gamify/gamify-hero.png",
    tags: ["React Native", "Firebase", "Health Kit", "Social"],
    link: "/projects/fitness-app",
    status: "Live",
    year: "2024",
    order: 12,
    isActive: true
  },
  {
    title: "Food Delivery App",
    category: "Mobile Apps",
    description: "Multi-vendor food delivery platform with real-time tracking and payment integration",
    image: "/images/rwa/rwa-hero.png",
    tags: ["Flutter", "Firebase", "Maps", "Payments"],
    link: "/projects/food-delivery",
    status: "Live",
    year: "2023",
    order: 13,
    isActive: true
  },
  {
    title: "Language Learning App",
    category: "Mobile Apps",
    description: "Interactive language learning app with AI-powered conversation practice and progress tracking",
    image: "/images/depin/depin-hero.png",
    tags: ["React Native", "AI", "Speech Recognition", "Gamification"],
    link: "/projects/language-app",
    status: "Live",
    year: "2023",
    order: 14,
    isActive: true
  },

  // E-commerce Projects
  {
    title: "Multi-Vendor Marketplace",
    category: "E-commerce",
    description: "Scalable multi-vendor e-commerce platform with advanced seller tools and analytics",
    image: "/images/services/e-commerce.png",
    tags: ["Shopify Plus", "React", "Node.js", "Stripe"],
    link: "/projects/marketplace",
    status: "Live",
    year: "2024",
    order: 15,
    isActive: true
  },
  {
    title: "Fashion E-commerce Store",
    category: "E-commerce",
    description: "High-performance fashion e-commerce with AR try-on features and personalized recommendations",
    image: "/images/services/mobile-app.png",
    tags: ["Next.js", "AR", "Recommendations", "Payments"],
    link: "/projects/fashion-store",
    status: "Live",
    year: "2024",
    order: 16,
    isActive: true
  },
  {
    title: "B2B Wholesale Platform",
    category: "E-commerce",
    description: "Enterprise B2B platform with bulk ordering, custom pricing, and inventory management",
    image: "/images/services/blockchain.png",
    tags: ["Laravel", "Vue.js", "ERP Integration", "B2B"],
    link: "/projects/b2b-platform",
    status: "Live",
    year: "2023",
    order: 17,
    isActive: true
  },

  // SaaS Projects
  {
    title: "Project Management Tool",
    category: "SaaS",
    description: "Comprehensive project management SaaS with team collaboration, time tracking, and reporting",
    image: "/images/services/ai-ml.png",
    tags: ["React", "Node.js", "WebSocket", "Analytics"],
    link: "/projects/project-management",
    status: "Live",
    year: "2024",
    order: 18,
    isActive: true
  },
  {
    title: "CRM & Sales Platform",
    category: "SaaS",
    description: "All-in-one CRM solution with lead management, sales pipeline, and automation tools",
    image: "/images/services/ui-ux.png",
    tags: ["Vue.js", "Laravel", "CRM", "Automation"],
    link: "/projects/crm-platform",
    status: "Live",
    year: "2023",
    order: 19,
    isActive: true
  },
  {
    title: "Marketing Automation Suite",
    category: "SaaS",
    description: "Advanced marketing automation platform with email campaigns, lead scoring, and analytics",
    image: "/images/services/digital-marketing.png",
    tags: ["React", "Python", "Email Marketing", "Analytics"],
    link: "/projects/marketing-automation",
    status: "Live",
    year: "2023",
    order: 20,
    isActive: true
  }
];

async function seedPortfolioProjects() {
  const client = new MongoClient(process.env.MONGODB_URI);
  
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');
    
    const db = client.db();
    const collection = db.collection('projects');
    
    // Clear existing projects
    await collection.deleteMany({});
    console.log('🗑️ Cleared existing projects');
    
    // Insert new projects
    const result = await collection.insertMany(portfolioProjects);
    console.log(`✅ Inserted ${result.insertedCount} portfolio projects`);
    
    // Verify insertion
    const count = await collection.countDocuments();
    console.log(`📊 Total projects in database: ${count}`);
    
    // Show sample projects by category
    const categories = [...new Set(portfolioProjects.map(p => p.category))];
    for (const category of categories) {
      const categoryCount = await collection.countDocuments({ category });
      console.log(`   ${category}: ${categoryCount} projects`);
    }
    
  } catch (error) {
    console.error('❌ Error seeding portfolio projects:', error);
  } finally {
    await client.close();
    console.log('🔌 Disconnected from MongoDB');
  }
}

// Run the seeding function
seedPortfolioProjects();