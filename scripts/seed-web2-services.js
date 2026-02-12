const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

// Define the schema (same as in the model)
const HeroSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  backgroundImage: { type: String, required: true },
  ctaText: { type: String, required: true },
  ctaLink: { type: String, required: true }
});

const ServiceItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  link: { type: String, default: '/contact' }
});

const WhyChoosePointSchema = new mongoose.Schema({
  text: { type: String, required: true }
});

const DNAAnimationDataSchema = new mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true }
});

const DNAAnimationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  data: [DNAAnimationDataSchema]
});

const WhyWorkWithUsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true }
});

const CTASectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  additionalDescription: { type: String },
  backgroundImage: { type: String, required: true },
  primaryCTA: {
    text: { type: String, required: true },
    link: { type: String, required: true }
  },
  secondaryCTA: {
    text: { type: String, required: true },
    link: { type: String, required: true }
  }
});

const Web2ServiceSchema = new mongoose.Schema({
  serviceType: { 
    type: String, 
    required: true,
    enum: ['api-development-integration', 'cloud-migration-managed-hosting'],
    unique: true
  },
  heroSection: { type: HeroSectionSchema, required: true },
  whyChoosePoints: [WhyChoosePointSchema],
  services: [ServiceItemSchema],
  mobileServices: [ServiceItemSchema],
  dnaAnimation: { type: DNAAnimationSchema, required: true },
  whyWorkWithUs: [WhyWorkWithUsSchema],
  ctaSection: { type: CTASectionSchema, required: true },
  seoMetadata: {
    title: { type: String, required: true },
    description: { type: String, required: true }
  }
}, {
  timestamps: true
});

const Web2Service = mongoose.models.Web2Service || mongoose.model('Web2Service', Web2ServiceSchema);

// Seed data for API Development & Integration
const apiDevIntegrationData = {
  serviceType: 'api-development-integration',
  heroSection: {
    title: 'API Development & Integration Services',
    subtitle: 'ALTIORA INFOTECH',
    description: 'Connect systems, unlock data, and enable seamless integrations that scale.',
    backgroundImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/web2/api-development-integration-hero.jpg',
    ctaText: 'Get Started',
    ctaLink: '/contact'
  },
  whyChoosePoints: [
    { text: 'Product-minded API design that is easy to adopt and hard to misuse' },
    { text: 'Proven patterns for scale, caching, idempotency, and backward compatibility' },
    { text: 'Security by default with auth, rate limits, schema validation, and audit trails' },
    { text: 'Deep integration experience across payments, CRM, ERP, CDP, and analytics' },
    { text: 'Ongoing support for performance tuning, monitoring, and lifecycle management' },
    { text: '24/7 technical support with rapid response times and dedicated account management' }
  ],
  services: [
    {
      title: 'API Product Design',
      description: 'Resource modeling, standards, naming, pagination, errors, and documentation.',
      icon: 'Code2',
      link: '/contact'
    },
    {
      title: 'REST & GraphQL Services',
      description: 'Well-structured endpoints, schema stitching, resolvers, and caching.',
      icon: 'Database',
      link: '/contact'
    },
    {
      title: 'Eventing & Webhooks',
      description: 'Async flows with queues, topics, retries, signing, and replay safety.',
      icon: 'Zap',
      link: '/contact'
    },
    {
      title: 'Integration Engineering',
      description: 'Reliable connectors to SaaS, legacy systems, and data platforms.',
      icon: 'Globe',
      link: '/contact'
    },
    {
      title: 'Authentication & Authorization',
      description: 'OAuth2, OIDC, keys, roles, scopes, and least-privilege policies.',
      icon: 'Lock',
      link: '/contact'
    },
    {
      title: 'Performance & Caching',
      description: 'CDN, edge caching, ETags, conditional requests, and rate coordination.',
      icon: 'Server',
      link: '/contact'
    },
    {
      title: 'Quality & Contract Testing',
      description: 'Consumer-driven contracts, schema validation, and non-breaking releases.',
      icon: 'CheckCircle',
      link: '/contact'
    },
    {
      title: 'Observability & SLOs',
      description: 'Logs, metrics, traces, dashboards, error budgets, and alerting.',
      icon: 'BarChart3',
      link: '/contact'
    },
    {
      title: 'Lifecycle & Governance',
      description: 'Versioning, deprecation, changelogs, and developer portals.',
      icon: 'GitBranch',
      link: '/contact'
    }
  ],
  mobileServices: [
    { title: 'API Product Design', description: 'Resource modeling, standards, naming, pagination, errors, and documentation.', icon: 'Code2', link: '/contact' },
    { title: 'REST & GraphQL Services', description: 'Well-structured endpoints, schema stitching, resolvers, and caching.', icon: 'Database', link: '/contact' },
    { title: 'Eventing & Webhooks', description: 'Async flows with queues, topics, retries, signing, and replay safety.', icon: 'Zap', link: '/contact' },
    { title: 'Integration Engineering', description: 'Reliable connectors to SaaS, legacy systems, and data platforms.', icon: 'Globe', link: '/contact' },
    { title: 'Authentication & Authorization', description: 'OAuth2, OIDC, keys, roles, scopes, and least-privilege policies.', icon: 'Lock', link: '/contact' },
    { title: 'Performance & Caching', description: 'CDN, edge caching, ETags, conditional requests, and rate coordination.', icon: 'Server', link: '/contact' },
    { title: 'Quality & Contract Testing', description: 'Consumer-driven contracts, schema validation, and non-breaking releases.', icon: 'CheckCircle', link: '/contact' },
    { title: 'Observability & SLOs', description: 'Logs, metrics, traces, dashboards, error budgets, and alerting.', icon: 'BarChart3', link: '/contact' }
  ],
  dnaAnimation: {
    title: 'Our API & Integration Process',
    description: 'Six meticulously crafted phases that transform complex integrations into seamless digital ecosystems. Our proven methodology ensures reliable, secure, and scalable API solutions.',
    data: [
      { title: 'Scoping', text: 'Align stakeholders, consumers, use cases, and success metrics.' },
      { title: 'Architecture', text: 'Define resources, events, auth model, and non-functional requirements.' },
      { title: 'Build', text: 'Implement services, connectors, tests, and CI/CD with gates.' },
      { title: 'Quality', text: 'Load tests, security reviews, contract checks, and documentation.' },
      { title: 'Launch', text: 'Publish portal, SDKs/examples, changelogs, and support processes.' },
      { title: 'Operate', text: 'Monitor SLOs, optimize latency and cost, evolve versions safely.' }
    ]
  },
  whyWorkWithUs: [
    {
      title: 'Domain Expertise',
      description: 'Deep knowledge in modern technologies, architecture, and best practices.',
      icon: 'FaNetworkWired'
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored solutions, not templates; each project fits your specific business logic.',
      icon: 'FaTools'
    },
    {
      title: 'End-to-End Capability',
      description: 'Complete service from ideation to maintenance.',
      icon: 'FaCode'
    },
    {
      title: 'Security-First Approach',
      description: 'Rigorous audits and security embedded in every layer.',
      icon: 'FaShieldAlt'
    },
    {
      title: 'Scalable & Future-ready',
      description: 'Modular design for evolving protocols and upgrades.',
      icon: 'FaRocket'
    },
    {
      title: 'Client-Centric Philosophy',
      description: 'Your success is our success; expect partnership and guidance.',
      icon: 'FaHandshake'
    }
  ],
  ctaSection: {
    title: 'Ready to Build Your Solution?',
    description: 'Connect systems, unlock data, and enable seamless integrations that scale. At Altiora Infotech, we pair deep technical engineering with clear commercial thinking to deliver solutions that are secure, scalable, and aligned to your KPIs.',
    additionalDescription: 'Ready to turn a concept into a roadmap? Share your goals and constraints, and we\'ll come back with a crisp blueprint: architecture options, timeline and milestones, security and compliance approach, and an investment estimate you can act on.',
    backgroundImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/web2/api-development-integration-cta.jpg',
    primaryCTA: {
      text: 'Book Discovery Call',
      link: 'https://calendly.com/altiorainfotech/30min'
    },
    secondaryCTA: {
      text: 'Send Your Brief',
      link: '/contact'
    }
  },
  seoMetadata: {
    title: 'API Development & Integration - Altiora Infotech',
    description: 'Streamline delivery through api development & integration at Altiora Infotech. We specialize in api development services and third party api integration.'
  }
};

// Seed data for Cloud Migration & Managed Hosting
const cloudMigrationData = {
  serviceType: 'cloud-migration-managed-hosting',
  heroSection: {
    title: 'Cloud Migration & Managed Hosting Services',
    subtitle: 'ALTIORA INFOTECH',
    description: 'Move to the cloud with confidence and maintain peak performance.',
    backgroundImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/web2/cloud-migration-managed-hosting-hero.jpg',
    ctaText: 'Get Started',
    ctaLink: '/contact'
  },
  whyChoosePoints: [
    { text: 'Proven migrations with zero- or low-downtime cutovers' },
    { text: 'Clear SLOs for availability, latency, RTO/RPO, and security posture' },
    { text: 'Strong platform engineering: IaC, CI/CD, observability, incident readiness' },
    { text: 'Cost governance and rightsizing with ongoing optimization' },
    { text: 'Transparent documentation and enablement so teams can self-serve' },
    { text: 'Multi-cloud expertise with vendor-agnostic solutions' }
  ],
  services: [
    {
      title: 'Assessment & Strategy',
      description: 'Discovery, TCO/ROI modeling, landing-zone design, and migration plan.',
      icon: 'BarChart3',
      link: '/contact'
    },
    {
      title: 'Landing Zone & Foundations',
      description: 'Identity, network, security baselines, logging, and guardrails.',
      icon: 'Layers',
      link: '/contact'
    },
    {
      title: 'Workload Migration',
      description: 'Rehost, replatform, or refactor with data sync and phased cutovers.',
      icon: 'Cloud',
      link: '/contact'
    },
    {
      title: 'Database & Data Moves',
      description: 'Dumps, replication, CDC, and verification with rollback strategies.',
      icon: 'Database',
      link: '/contact'
    },
    {
      title: 'App Modernization',
      description: 'Containers, serverless, managed services, and caching layers.',
      icon: 'Settings',
      link: '/contact'
    },
    {
      title: 'Observability & SRE',
      description: 'Logs, metrics, traces, SLOs, on-call, and incident runbooks.',
      icon: 'Eye',
      link: '/contact'
    },
    {
      title: 'Security & Compliance',
      description: 'KMS, secrets, policy as code, vulnerability scans, and audits.',
      icon: 'Shield',
      link: '/contact'
    },
    {
      title: 'FinOps & Cost Optimization',
      description: 'Budgets, alerts, commitments, rightsizing, and usage analytics.',
      icon: 'Zap',
      link: '/contact'
    },
    {
      title: 'Managed Hosting & Ops',
      description: 'Patching, backups, DR drills, performance tuning, and change management.',
      icon: 'Server',
      link: '/contact'
    }
  ],
  mobileServices: [
    { title: 'Assessment & Strategy', description: 'Discovery, TCO/ROI modeling, landing-zone design, and migration plan.', icon: 'BarChart3', link: '/contact' },
    { title: 'Landing Zone & Foundations', description: 'Identity, network, security baselines, logging, and guardrails.', icon: 'Layers', link: '/contact' },
    { title: 'Workload Migration', description: 'Rehost, replatform, or refactor with data sync and phased cutovers.', icon: 'Cloud', link: '/contact' },
    { title: 'Database & Data Moves', description: 'Dumps, replication, CDC, and verification with rollback strategies.', icon: 'Database', link: '/contact' },
    { title: 'App Modernization', description: 'Containers, serverless, managed services, and caching layers.', icon: 'Settings', link: '/contact' },
    { title: 'Observability & SRE', description: 'Logs, metrics, traces, SLOs, on-call, and incident runbooks.', icon: 'Eye', link: '/contact' },
    { title: 'Security & Compliance', description: 'KMS, secrets, policy as code, vulnerability scans, and audits.', icon: 'Shield', link: '/contact' },
    { title: 'FinOps & Cost Optimization', description: 'Budgets, alerts, commitments, rightsizing, and usage analytics.', icon: 'Zap', link: '/contact' }
  ],
  dnaAnimation: {
    title: 'Our Migration & Hosting Process',
    description: 'Six strategic phases that ensure seamless cloud migration and reliable operations. Our proven methodology minimizes risk while maximizing performance and cost efficiency.',
    data: [
      { title: 'Scoping & Discovery', text: 'Inventory, dependencies, risks, and success in metrics.' },
      { title: 'Architecture & Plan', text: 'Target design, wave plan, cutover approach, and validation criteria.' },
      { title: 'Foundations Build', text: 'Set up landing zone, access, networking, security, and observability.' },
      { title: 'Migrate & Validate', text: 'Move workloads, verify functionality/perf, and execute fallback if needed.' },
      { title: 'Hardening & Go-Live', text: 'Load tests, backups, DR, SLOs, runbooks, and handover.' },
      { title: 'Operate & Improve', text: 'Monitor reliability and cost; optimize and evolve the platform.' }
    ]
  },
  whyWorkWithUs: [
    {
      title: 'Domain Expertise',
      description: 'Deep knowledge in modern technologies, architecture, and best practices.',
      icon: 'FaNetworkWired'
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored solutions, not templates; each project fits your specific business logic.',
      icon: 'FaTools'
    },
    {
      title: 'End-to-End Capability',
      description: 'Complete service from ideation to maintenance.',
      icon: 'FaCode'
    },
    {
      title: 'Security-First Approach',
      description: 'Rigorous audits and security embedded in every layer.',
      icon: 'FaShieldAlt'
    },
    {
      title: 'Scalable & Future-ready',
      description: 'Modular design for evolving protocols and upgrades.',
      icon: 'FaRocket'
    },
    {
      title: 'Client-Centric Philosophy',
      description: 'Your success is our success; expect partnership and guidance.',
      icon: 'FaHandshake'
    }
  ],
  ctaSection: {
    title: 'Ready to Build Your Solution?',
    description: 'Move to the cloud with confidence and maintain peak performance. At Altiora Infotech, we pair deep technical engineering with clear commercial thinking to deliver solutions that are secure, scalable, and aligned to your KPIs.',
    additionalDescription: 'Ready to turn a concept into a roadmap? Share your goals and constraints, and we\'ll come back with a crisp blueprint: architecture options, timeline and milestones, security and compliance approach, and an investment estimate you can act on.',
    backgroundImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/web2/cloud-migration-managed-hosting-cta.jpg',
    primaryCTA: {
      text: 'Book Discovery Call',
      link: 'https://calendly.com/altiorainfotech/30min'
    },
    secondaryCTA: {
      text: 'Send Your Brief',
      link: '/contact'
    }
  },
  seoMetadata: {
    title: 'Cloud Migration & Managed Hosting - Altiora Infotech',
    description: 'Improve reliability with cloud migration & managed hosting at Altiora Infotech. We specialize in cloud migration services and managed cloud hosting.'
  }
};

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Web2Service.deleteMany({});
    console.log('Cleared existing web2 services');

    // Insert seed data
    await Web2Service.create([apiDevIntegrationData, cloudMigrationData]);
    console.log('Seeded web2 services successfully');

    // Close connection
    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();