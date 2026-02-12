const { MongoClient } = require('mongodb');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DB_NAME = process.env.MONGODB_DB || 'test';

const predictiveAnalyticsPageData = {
  pageId: 'predictive-analytics-and-automation',
  sections: {
    hero: {
      badge: "ALTIORA INFOTECH",
      heading: "Future-Ready Business with AI-Driven Predictive Analytics & Automation",
      subheading: "Forecast, decide, and execute with measurable precision.",
      backgroundImage: "/images/agentic-ai/Predictive Analytics and Automation-1.png",
      cta: {
        text: "Get Started",
        link: "/contact"
      }
    },
    intro: {
      title: "Decide & Automate",
      subtitle: "Operational intelligence that turns signals into action",
      description: "Predictive Analytics estimates outcomes such as demand, risk, churn, and revenue. Automation applies those insights in the flow of work so your teams respond faster with fewer errors. We design and ship production systems that forecast, score, recommend next best actions, and then trigger the right workflow across your stack. The result is higher conversion, lower cost, and consistent decisions at scale."
    },
    whyChoose: {
      title: "Why Choose Our Machine Learning Services?",
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
      title: "Our Predictive & Automation Services",
      subtitle: "End-to-end capabilities to run AI in production.",
      services: [
        { title: "Forecasting & Planning", desc: "Revenue, demand, inventory, and capacity plans that align teams and budgets.", icon: "Database" },
        { title: "Risk & Fraud Scoring", desc: "Real-time scores for credit, fraud, collections, and compliance operations.", icon: "FaShieldAlt" },
        { title: "Churn & Lifetime Value", desc: "Retention models with actionable segments and uplift-focused interventions.", icon: "FaUsers" },
        { title: "Next Best Action Engines", desc: "Contextual recommendations for sales, service, and marketing journeys.", icon: "FaRocket" },
        { title: "Pricing & Optimization", desc: "Dynamic pricing, allocation, and routing subject to policy and fairness rules.", icon: "FaDollarSign" },
        { title: "Anomaly Detection", desc: "Early warning for outages, ops incidents, and financial irregularities.", icon: "FaBell" },
        { title: "Process Automation", desc: "Human-in-the-loop workflows that create tickets, update records, and notify owners.", icon: "FaCog" },
        { title: "Experimentation & Measurement", desc: "A/B setups, attribution, and lift dashboards to prove business impact.", icon: "FaFlask" },
        { title: "Integrations & Analytics", desc: "Connectors to CRM, ERP, CDP, data warehouse, BI, and notification tools.", icon: "FaPlug" }
      ]
    },
    process: {
      title: "Our Predictive & Automation Process",
      subtitle: "A systematic approach from data to decisions.",
      steps: [
        { step: 1, title: "Scoping & Kickoff", description: "Align objectives, metrics, data sources, and stakeholders.", iconPath: "/images/icon/process-section/Scoping.svg" },
        { step: 2, title: "Data & Feature Design", description: "Profile quality, engineer signals, and define contracts with SLAs.", iconPath: "/images/icon/process-section/Data.svg" },
        { step: 3, title: "Model Development", description: "Train, tune, and validate with holdouts; document assumptions and limits.", iconPath: "/images/icon/process-section/Model.svg" },
        { step: 4, title: "Decision Design & Pilot", description: "Map scores to actions, approvals, and thresholds; run controlled trials.", iconPath: "/images/icon/process-section/Decision.svg" },
        { step: 5, title: "Hardening & Launch", description: "Serve via APIs and workflows; enable CI/CD, monitoring, alerts, and runbooks.", iconPath: "/images/icon/process-section/Hardening.svg" },
        { step: 6, title: "Operate & Improve", description: "Track drift and performance; retrain and optimize accuracy, latency, and cost.", iconPath: "/images/icon/process-section/Operate.svg" }
      ]
    }
  },
  seo: {
    title: "Predictive Analytics & Automation Services | predictive analytics",
    description: "Power your roadmap with predictive analytics & automation services at Altiora Infotech. We specialize in predictive analytics services and business process automation."
  },
  createdAt: new Date(),
  updatedAt: new Date()
};

async function seedPredictiveAnalyticsPage() {
  const client = new MongoClient(MONGODB_URI);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db(DB_NAME);
    const collection = db.collection('ai-ml-services');
    
    const result = await collection.replaceOne(
      { pageId: 'predictive-analytics-and-automation' },
      predictiveAnalyticsPageData,
      { upsert: true }
    );
    
    if (result.upsertedId) {
      console.log('✅ Predictive Analytics page created successfully with ID:', result.upsertedId);
    } else {
      console.log('✅ Predictive Analytics page updated successfully');
    }
    
  } catch (error) {
    console.error('❌ Error seeding Predictive Analytics page:', error);
  } finally {
    await client.close();
  }
}

seedPredictiveAnalyticsPage();