const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

// Define the schema
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
    enum: [
      'api-development-integration',
      'cloud-migration-managed-hosting',
      'custom-web-application-development',
      'devops-consulting',
      'e-commerce-development',
      'headless-cms-content-ops',
      'mobile-application-development',
      'qa-automation',
      'saas-application-development',
      'ui-ux-design'
    ],
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

// Common Why Work With Us data
const commonWhyWorkWithUs = [
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
];
