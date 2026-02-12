import mongoose from 'mongoose';

// Hero Section Schema
const HeroSectionSchema = new mongoose.Schema({
  backgroundImage: { type: String, required: true },
  badge: { type: String, required: true },
  badgeIcon: { type: String, required: true },
  heading: { type: String, required: true },
  headingHighlight: { type: String, default: '' },
  highlightColor: { type: String, default: '#f4cc6f' },
  subheading: { type: String, required: true },
  cta: {
    text: { type: String, required: true },
    link: { type: String, required: true },
    icon: { type: String, default: 'FaRocket' },
    primary: { type: Boolean, default: true },
    external: { type: Boolean, default: false }
  }
});

// Intro Section Schema
const IntroSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  linkText: { type: String, default: '' },
  linkHref: { type: String, default: '' }
});

// Why Choose Section Schema
const WhyChooseSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  items: [{
    title: { type: String, required: true },
    text: { type: String, required: true },
    icon: { type: String, required: true }
  }]
});

// Service Item Schema
const ServiceItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  icon: { type: String, required: true }
});

// Service Offerings Schema
const ServiceOfferingsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  services: [ServiceItemSchema]
});

// Process Step Schema
const ProcessStepSchema = new mongoose.Schema({
  step: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  details: { type: String, default: '' },
  icon: { type: String, required: true }
});

// Process Section Schema
const ProcessSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  steps: [ProcessStepSchema]
});

// Benefit Schema
const BenefitSchema = new mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  icon: { type: String, required: true }
});

// Why Work With Us Schema
const WhyWorkWithUsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  benefits: [BenefitSchema]
});

// CTA Section Schema
const CTASectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  additionalDescription: { type: String, default: '' },
  backgroundImage: { type: String, required: true },
  icon: { type: String, default: 'FaEye' },
  primaryCTA: {
    text: { type: String, required: true },
    link: { type: String, required: true },
    icon: { type: String, default: 'FaRocket' },
    external: { type: Boolean, default: false }
  },
  secondaryCTA: {
    text: { type: String, required: true },
    link: { type: String, required: true },
    icon: { type: String, default: 'FaEye' }
  }
});

// Main AI-ML Service Schema
const AiMlServiceSchema = new mongoose.Schema({
  pageId: {
    type: String,
    required: true,
    unique: true
  },
  pageName: { type: String, required: true },
  route: { type: String, required: true },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'published'
  },
  seo: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    ogImage: { type: String, default: '' }
  },
  sections: {
    hero: { type: HeroSectionSchema, required: true },
    intro: { type: IntroSectionSchema, required: true },
    whyChoose: { type: WhyChooseSectionSchema, required: true },
    serviceOfferings: { type: ServiceOfferingsSchema, required: true },
    process: { type: ProcessSectionSchema, required: true },
    whyWorkWithUs: { type: WhyWorkWithUsSchema, required: true },
    cta: { type: CTASectionSchema, required: true }
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, {
  timestamps: true
});

export default mongoose.models.AiMlService || mongoose.model('AiMlService', AiMlServiceSchema, 'ai-ml-services');
