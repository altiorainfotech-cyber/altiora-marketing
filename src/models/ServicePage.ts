import mongoose from 'mongoose';

// Hero Section Schema
const HeroSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  backgroundImage: { type: String },
  ctaButtons: [{
    text: { type: String, required: true },
    link: { type: String, required: true },
    variant: { type: String, enum: ['primary', 'secondary'], default: 'primary' }
  }]
});

// Stats Schema
const StatSchema = new mongoose.Schema({
  value: { type: Number, required: true },
  prefix: { type: String, default: '' },
  suffix: { type: String, default: '' },
  label: { type: String, required: true },
  icon: { type: String, required: true }
});

// Overview Section Schema
const OverviewSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
});

// Service Card Schema
const ServiceCardSchema = new mongoose.Schema({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  cta: { type: String, required: true },
  link: { type: String, required: true },
  comingSoon: { type: Boolean, default: false }
});

// Services Section Schema
const ServicesSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  cards: [ServiceCardSchema]
});

// CTA Section Schema
const CTASectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  buttonText: { type: String, required: true },
  buttonLink: { type: String, required: true }
});

// Outcome Item Schema
const OutcomeItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  icon: { type: String, required: true },
  summary: { type: String, required: true },
  details: { type: String, required: true },
  metric: { type: String, required: true },
  impact: { type: String, required: true }
});

// Outcomes Section Schema
const OutcomesSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  items: [OutcomeItemSchema]
});

// Trend Item Schema
const TrendItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
});

// Trends Section Schema
const TrendsSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  trends: [TrendItemSchema]
});

// Tech Stack Item Schema
const TechStackItemSchema = new mongoose.Schema({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true }
});

// Tech Stack Section Schema
const TechStackSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  items: [TechStackItemSchema]
});

// Security Item Schema
const SecurityItemSchema = new mongoose.Schema({
  icon: { type: String, required: true },
  text: { type: String, required: true }
});

// Security Section Schema
const SecuritySectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  items: [SecurityItemSchema]
});

// Why Choose Item Schema
const WhyChooseItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  trustMetric: { type: String, required: true }
});

// Why Choose Section Schema
const WhyChooseSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  items: [WhyChooseItemSchema]
});

// Process Step Schema
const ProcessStepSchema = new mongoose.Schema({
  step: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true }
});

// How We Work Section Schema
const HowWeWorkSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  steps: [ProcessStepSchema],
  readyToBuild: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    buttonText: { type: String, required: true },
    buttonLink: { type: String, required: true },
    image: { type: String, required: true }
  }
});

// Final CTA Section Schema
const FinalCTASectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  buttons: [{
    text: { type: String, required: true },
    link: { type: String, required: true },
    variant: { type: String, enum: ['primary', 'secondary'], default: 'primary' }
  }]
});

// Main Service Page Schema
const ServicePageSchema = new mongoose.Schema({
  pageType: { 
    type: String, 
    required: true,
    enum: ['web3', 'web2', 'custom'],
    index: true
  },
  slug: { 
    type: String, 
    required: true,
    unique: true,
    index: true
  },
  isActive: { type: Boolean, default: true },
  heroSection: { type: HeroSectionSchema, required: true },
  stats: [StatSchema],
  overviewSection: { type: OverviewSectionSchema },
  servicesSection: { type: ServicesSectionSchema, required: true },
  blockchainCTA: { type: CTASectionSchema },
  outcomesSection: { type: OutcomesSectionSchema },
  trendsSection: { type: TrendsSectionSchema },
  techStackSection: { type: TechStackSectionSchema },
  securitySection: { type: SecuritySectionSchema },
  whyChooseSection: { type: WhyChooseSectionSchema },
  howWeWorkSection: { type: HowWeWorkSectionSchema },
  finalCTASection: { type: FinalCTASectionSchema },
  seoMetadata: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    keywords: [String]
  }
}, {
  timestamps: true
});

export default mongoose.models.ServicePage || mongoose.model('ServicePage', ServicePageSchema);
