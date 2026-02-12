const { MongoClient } = require('mongodb');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DB_NAME = process.env.MONGODB_DB || 'test';

const generativeAiPageData = {
  pageId: 'generative-ai',
  sections: {
    hero: {
      badge: "ALTIORA INFOTECH",
      heading: "Generative AI Services – LLM Application Development Experts",
      subheading: "From ideas to intelligent outcomes—create, retrieve, and automate with confidence.",
      backgroundImage: "/images/agentic-ai/Generative AI-1.png",
      cta: {
        text: "Get Started",
        link: "/contact"
      }
    },
    intro: {
      title: "Create & Scale",
      subtitle: "Intelligent content and workflows for modern teams",
      heading: "Clarity, Consistency, and Speed",
      description: "Generative AI is no longer a novelty; it's an operating advantage. We design, implement, and productionize GenAI systems that write, summarize, code, search, and automate. Our approach adds governance, human review, and measurement so results stay accurate, safe, and on-brand across your business."
    },
    whyChoose: {
      title: "Why Choose Our Generative AI?",
      items: [
        { title: "Deep practical expertise in LLMs, RAG, evaluation, and safety", icon: "FaBrain" },
        { title: "Business-first approach: measurable KPIs, guardrails, and governance", icon: "FaBullseye" },
        { title: "Multi-model orchestration with clear ownership and documentation", icon: "FaCog" },
        { title: "Transparent reporting with quality scores, red-teaming, and remediation", icon: "FaEye" },
        { title: "Ongoing support: tuning, drift checks, cost and latency optimization", icon: "FaSync" },
        { title: "Metrics & ROI Accountability: KPI dashboards, A/B tests, and cost controls so impact is measurable.", icon: "FaRocket" }
      ]
    },
    serviceOfferings: {
      title: "Our Generative AI Services",
      subtitle: "Comprehensive solutions to deploy GenAI that works at scale.",
      services: [
        { title: "Assistants & Copilots", desc: "Task-focused agents for support, sales, ops, and internal knowledge.", icon: "FaUsers" },
        { title: "RAG Knowledge Systems", desc: "Ground answers in your data with vector search, policies, and citations.", icon: "FaSearch" },
        { title: "Prompt & Fine-tune Programs", desc: "Structured prompt design, adapters, and continual improvement loops.", icon: "FaCog" },
        { title: "Evaluation & Safety", desc: "Automated tests, red-teaming, bias and toxicity checks, quality scoring.", icon: "FaShieldAlt" },
        { title: "Content Pipelines", desc: "Generate copy, images, and code with approvals, versioning, and audit.", icon: "FaRocket" },
        { title: "Multi-Agent Automation", desc: "Plan, research, and execute workflows across tools and APIs.", icon: "FaBrain" },
        { title: "Synthetic Data Generation", desc: "Create privacy-safe datasets for training and QA.", icon: "FaBullseye" },
        { title: "Enterprise Integrations", desc: "Connect GenAI to CRM, CMS, data warehouses, ticketing, and analytics.", icon: "FaPlug" },
        { title: "Governance & FinOps", desc: "Policies, access controls, monitoring, and cost management.", icon: "FaEye" }
      ]
    },
    process: {
      title: "Our Generative AI Process",
      subtitle: "A systematic path from idea to reliable production.",
      steps: [
        { step: 1, title: "Scoping & Kickoff", description: "Align goals, users, data sources, risks, and success metrics.", iconPath: "/images/icon/process-section/Scoping.svg" },
        { step: 2, title: "Architecture & Design", description: "Select models, retrieval strategy, security, and evaluation plan.", iconPath: "/images/icon/process-section/Architecture.svg" },
        { step: 3, title: "Build & Testing", description: "Implement orchestration, datasets, and guardrails; validate quality.", iconPath: "/images/icon/process-section/Build.svg" },
        { step: 4, title: "Pilot & Feedback", description: "Run controlled trials, collect user signals, refine prompts and policies.", iconPath: "/images/icon/process-section/Pilot.svg" },
        { step: 5, title: "Hardening & Launch", description: "Add monitoring, RBAC, CI/CD, incident playbooks; go live with confidence.", iconPath: "/images/icon/process-section/Hardening.svg" },
        { step: 6, title: "Operate & Improve", description: "Track accuracy, cost, latency; iterate on prompts, data, and UX.", iconPath: "/images/icon/process-section/Operate.svg" }
      ]
    }
  },
  seo: {
    title: "Generative AI Services - Altiora Infotech",
    description: "Operationalize innovation in generative ai services at Altiora Infotech. We specialize in generative ai development and llm application development to scale"
  },
  createdAt: new Date(),
  updatedAt: new Date()
};

async function seedGenerativeAiPage() {
  const client = new MongoClient(MONGODB_URI);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db(DB_NAME);
    const collection = db.collection('ai-ml-services');
    
    const result = await collection.replaceOne(
      { pageId: 'generative-ai' },
      generativeAiPageData,
      { upsert: true }
    );
    
    if (result.upsertedId) {
      console.log('✅ Generative AI page created successfully with ID:', result.upsertedId);
    } else {
      console.log('✅ Generative AI page updated successfully');
    }
    
  } catch (error) {
    console.error('❌ Error seeding Generative AI page:', error);
  } finally {
    await client.close();
  }
}

seedGenerativeAiPage();