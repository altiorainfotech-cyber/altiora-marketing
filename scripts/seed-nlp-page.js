const { MongoClient } = require('mongodb');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DB_NAME = process.env.MONGODB_DB || 'test';

const nlpPageData = {
  pageId: 'natural-language-processing',
  sections: {
    hero: {
      badge: "ALTIORA INFOTECH",
      heading: "Transforming Text & Voice with Advanced NLP Solutions",
      subheading: "Understand, summarize, and converse with precision at scale.",
      backgroundImage: "/images/agentic-ai/Natural Language Processing AI-1.png",
      cta: {
        text: "Get Started",
        link: "/contact"
      }
    },
    intro: {
      title: "Understand & Communicate",
      description: "Language intelligence for search, support, and knowledge workflows"
    },
    whyChoose: {
      title: "Why Choose Our NLP Solutions?",
      subtitle: "Delivery focused on value, quality, and maintainability.",
      items: [
        { title: "Hands-on expertise across classical ML and deep learning", icon: "FaBrain" },
        { title: "Business-aligned modeling with clear success metrics", icon: "FaBullseye" },
        { title: "Strong MLOps: experiment tracking, registries, CI/CD, monitoring", icon: "FaCog" },
        { title: "Transparent reports with feature importance and explainability", icon: "FaEye" },
        { title: "Ongoing support for drift, retraining, and model improvements", icon: "FaSync" },
        { title: "Scalable deployment solutions ensuring seamless integration across environments", icon: "FaRocket" }
      ]
    },
    serviceOfferings: {
      title: "Our NLP Services",
      subtitle: "Solutions that make language your advantage.",
      services: [
        { title: "Search and Question Answering", desc: "Retrieve the right answer with citations from your knowledge base.", icon: "FaSearch" },
        { title: "Summarization and Briefing", desc: "Turn long documents and threads into concise, trustworthy briefs.", icon: "FaBook" },
        { title: "Classification and Routing", desc: "Tag intents, topics, and urgency to route work to the right queue.", icon: "FaFolderOpen" },
        { title: "Entity and Key Phrase Extraction", desc: "Capture names, amounts, dates, products, and obligations with accuracy.", icon: "FaEye" },
        { title: "Conversational Assistants", desc: "Chat and voice experiences with guardrails, analytics, and handoff.", icon: "FaComments" },
        { title: "Document Processing and OCR", desc: "Ingest PDFs and scans, validate fields, and automate workflows.", icon: "FaFileAlt" },
        { title: "Translation and Localization", desc: "Consistent terminology and tone across regions and channels.", icon: "FaLanguage" },
        { title: "Safety, Redaction, and Compliance", desc: "Remove PII, apply policies, and keep a complete audit trail.", icon: "FaShieldAlt" },
        { title: "Integrations and Analytics", desc: "Connect to CRM, service desk, CMS, data warehouse, and BI.", icon: "FaNetworkWired" }
      ]
    },
    process: {
      title: "Our NLP Process",
      subtitle: "A clear path from idea to dependable production.",
      steps: [
        { step: 1, title: "Scoping and Kickoff", description: "Define goals, users, languages, data sources, and success metrics.", iconPath: "/images/icon/process-section/Scoping.svg" },
        { step: 2, title: "Data and Evaluation Design", description: "Build datasets, ground-truth labels, and quality measures.", iconPath: "/images/icon/process-section/Data.svg" },
        { step: 3, title: "Model Development", description: "Configure retrieval, prompts, or fine-tuning and validate results.", iconPath: "/images/icon/process-section/Model.svg" },
        { step: 4, title: "Pilot and Feedback", description: "Trial with real users, collect feedback, refine prompts and policies.", iconPath: "/images/icon/process-section/Pilot.svg" },
        { step: 5, title: "Hardening and Launch", description: "Add monitoring, RBAC, CI and CD, and incident playbooks.", iconPath: "/images/icon/process-section/Hardening.svg" },
        { step: 6, title: "Operate and Improve", description: "Track accuracy and cost, manage drift, and expand use cases.", iconPath: "/images/icon/process-section/Operate.svg" }
      ]
    }
  },
  seo: {
    title: "Natural Language Processing - Altiora Infotech",
    description: "Achieve faster outcomes through natural language processing at Altiora Infotech. We specialize in natural language processing services and nlp consulting."
  },
  createdAt: new Date(),
  updatedAt: new Date()
};

async function seedNLPPage() {
  const client = new MongoClient(MONGODB_URI);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db(DB_NAME);
    const collection = db.collection('ai-ml-services');
    
    const result = await collection.replaceOne(
      { pageId: 'natural-language-processing' },
      nlpPageData,
      { upsert: true }
    );
    
    if (result.upsertedId) {
      console.log('✅ NLP page created successfully with ID:', result.upsertedId);
    } else {
      console.log('✅ NLP page updated successfully');
    }
    
  } catch (error) {
    console.error('❌ Error seeding NLP page:', error);
  } finally {
    await client.close();
  }
}

seedNLPPage();