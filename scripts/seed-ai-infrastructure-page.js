const { MongoClient } = require('mongodb');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DB_NAME = process.env.MONGODB_DB || 'test';

const aiInfrastructurePageData = {
  pageId: 'ai-infrastructure-and-cloud-development',
  sections: {
    hero: {
      badge: "ALTIORA INFOTECH",
      heading: "AI Infrastructure & Cloud Development Services",
      subheading: "Design, deploy, and run AI with reliability, speed, and control.",
      backgroundImage: "/images/agentic-ai/AI Infrastructure and Cloud Development-2.png",
      cta: {
        text: "Get Started",
        link: "/contact"
      }
    },
    intro: {
      title: "Reliable, Efficient, and Secure",
      description: "AI needs the right foundation. We plan the compute, storage, networking, and tooling that keep models fast, stable, and cost-aware across cloud, hybrid, or on-prem environments. From accelerators to observability, we engineer an environment your teams can ship on confidently, with clear guardrails and predictable spend."
    },
    whyChoose: {
      title: "Why Choose Our AI Infrastructure Services?",
      subtitle: "Delivery that balances performance, security, and cost.",
      items: [
        { title: "Practical experience with GPUs and accelerators at scale", icon: "FaMicrochip" },
        { title: "Clear SLOs for latency, throughput, and uptime", icon: "FaBullseye" },
        { title: "Strong platform engineering: IaC, CI/CD, observability, incident playbooks", icon: "FaCodeBranch" },
        { title: "Security built in: secrets, private networking, access controls, auditability", icon: "FaShieldAlt" },
        { title: "Ongoing optimization for usage, reliability, and spend", icon: "Settings" },
        { title: "Compliance & data residency: SOC2/ISO 27001 alignment and regional controls", icon: "FaCheck" }
      ]
    },
    serviceOfferings: {
      title: "Our AI Infrastructure Services",
      subtitle: "End-to-end capabilities to run AI in production.",
      services: [
        { title: "Model Serving Platforms", desc: "Stateless and stateful serving with autoscaling and canary releases.", icon: "FaServer" },
        { title: "GPU and Accelerator Planning", desc: "Capacity sizing, placement, caching layers, and performance tuning.", icon: "FaMicrochip" },
        { title: "Infrastructure as Code", desc: "Repeatable environments, blue–green and rollback strategies.", icon: "FaCodeBranch" },
        { title: "MLOps Tooling", desc: "Registries, pipelines, experiment tracking, and artifact stores.", icon: "FaCloud" },
        { title: "Observability", desc: "Logs, metrics, traces, and real-time health dashboards.", icon: "FaChartLine" },
        { title: "Security and Compliance", desc: "KMS, vaults, private endpoints, policy enforcement, and audits.", icon: "FaShieldAlt" },
        { title: "Data and Networking Fabric", desc: "High-throughput storage, vector stores, and secure service meshes.", icon: "FaNetworkWired" },
        { title: "FinOps and Cost Controls", desc: "Budgets, alerts, rightsizing, and workload scheduling.", icon: "FaDollarSign" },
        { title: "Resilience and DR", desc: "Backups, multi-zone architecture, and failover drills.", icon: "FaBoxes" }
      ]
    },
    process: {
      title: "Our AI Infrastructure Process",
      subtitle: "A clear path from planning to dependable operations.",
      steps: [
        { step: 1, title: "Scoping and Assessment", description: "Goals, requirements, constraints, and success measures.", iconPath: "/images/icon/process-section/Scoping.svg" },
        { step: 2, title: "Architecture and Capacity Plan", description: "Compute, storage, network, and security design with growth forecast.", iconPath: "/images/icon/process-section/Architecture.svg" },
        { step: 3, title: "Environment Build", description: "Provision cloud or hybrid, implement IaC, identity, and baseline controls.", iconPath: "/images/icon/process-section/Environment.svg" },
        { step: 4, title: "Platform Enablement", description: "Model serving, pipelines, registries, and observability wiring.", iconPath: "/images/icon/process-section/Platform.svg" },
        { step: 5, title: "Hardening and Launch", description: "Load tests, chaos checks, runbooks, SLOs, and access policies.", iconPath: "/images/icon/process-section/Hardening.svg" },
        { step: 6, title: "Operate and Improve", description: "Monitor reliability and cost, optimize performance, and scale safely.", iconPath: "/images/icon/process-section/Operate.svg" }
      ]
    }
  },
  seo: {
    title: "AI Infrastructure & Cloud Development - Altiora Infotech",
    description: "Design, deploy, and run AI with reliability, speed, and control. Expert AI infrastructure and cloud development services."
  },
  createdAt: new Date(),
  updatedAt: new Date()
};

async function seedAIInfrastructurePage() {
  const client = new MongoClient(MONGODB_URI);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db(DB_NAME);
    const collection = db.collection('ai-ml-services');
    
    const result = await collection.replaceOne(
      { pageId: 'ai-infrastructure-and-cloud-development' },
      aiInfrastructurePageData,
      { upsert: true }
    );
    
    if (result.upsertedId) {
      console.log('✅ AI Infrastructure page created successfully with ID:', result.upsertedId);
    } else {
      console.log('✅ AI Infrastructure page updated successfully');
    }
    
  } catch (error) {
    console.error('❌ Error seeding AI Infrastructure page:', error);
  } finally {
    await client.close();
  }
}

seedAIInfrastructurePage();