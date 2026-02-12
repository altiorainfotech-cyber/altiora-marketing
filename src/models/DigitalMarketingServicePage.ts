import mongoose from 'mongoose';

// Hero Section Schema
const HeroSectionSchema = new mongoose.Schema({
  badge: { type: String, required: true },
  title: { type: String, required: true },
  highlightText: { type: String, required: true },
  description: { type: String, required: true },
  primaryCTA: {
    text: { type: String, required: true },
    link: { type: String, required: true }
  },
  secondaryCTA: {
    text: { type: String, required: true },
    link: { type: String, required: true }
  }
});

// Digital Marketing Service Card Schema
const DigitalMarketingServiceCardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  metric: { type: String, required: true },
  metricLabel: { type: String, required: true },
  icon: { type: String, required: true },
  iconName: { type: String, required: true },
  color: { type: String, required: true },
  gradient: { type: String, required: true },
  animatedMetric: {
    start: { type: Number, required: true },
    end: { type: Number, required: true },
    prefix: { type: String, default: '' },
    suffix: { type: String, default: '' }
  }
});

// Overview Section Schema
const OverviewSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
});

// Featured Service Schema
const FeaturedServiceSchema = new mongoose.Schema({
  badge: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  metric: { type: String, required: true },
  metricLabel: { type: String, required: true },
  link: { type: String, required: true }
});

// Services Section Schema
const ServicesSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  highlightText: { type: String, required: true },
  description: { type: String, required: true },
  featuredService: { type: FeaturedServiceSchema, required: false },
  services: [DigitalMarketingServiceCardSchema]
});

// Workflow Step Schema
const WorkflowStepSchema = new mongoose.Schema({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  details: [{ type: String }]
});

// How We Work Section Schema
const HowWeWorkSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  highlightText: { type: String, required: true },
  description: { type: String, required: true },
  steps: [WorkflowStepSchema]
});

// Outcome Item Schema
const OutcomeItemSchema = new mongoose.Schema({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  emoji: { type: String, required: true }
});

// Outcomes Section Schema
const OutcomesSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  highlightText: { type: String, required: true },
  description: { type: String, required: true },
  outcomes: [OutcomeItemSchema]
});

// Why Altiora Item Schema
const WhyAltioraItemSchema = new mongoose.Schema({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  stat: { type: String, required: true },
  statLabel: { type: String, required: true },
  description: { type: String, required: true },
  color: { type: String, required: true }
});

// Why Altiora Section Schema
const WhyAltioraSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  highlightText: { type: String, required: true },
  description: { type: String, required: true },
  items: [WhyAltioraItemSchema]
});

// CTA Section Schema
const CTASectionSchema = new mongoose.Schema({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  backgroundImage: { type: String, required: false },
  primaryCTA: {
    text: { type: String, required: true },
    link: { type: String, required: true },
    icon: { type: String, required: true }
  },
  secondaryCTA: {
    text: { type: String, required: true },
    link: { type: String, required: true },
    icon: { type: String, required: true }
  }
});

// Main Digital Marketing Service Page Schema
const DigitalMarketingServicePageSchema = new mongoose.Schema({
  pageSlug: {
    type: String,
    required: true,
    unique: true,
    default: 'digital-marketing-main'
  },
  isActive: { type: Boolean, default: true },
  heroSection: { type: HeroSectionSchema, required: true },
  overviewSection: { type: OverviewSectionSchema, required: false },
  servicesSection: { type: ServicesSectionSchema, required: true },
  howWeWorkSection: { type: HowWeWorkSectionSchema, required: true },
  outcomesSection: { type: OutcomesSectionSchema, required: true },
  whyAltioraSection: { type: WhyAltioraSectionSchema, required: true },
  ctaSection: { type: CTASectionSchema, required: true },
  seoMetadata: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    keywords: [String]
  }
}, {
  timestamps: true,
  collection: 'servicepages'
});

// Create indexes
DigitalMarketingServicePageSchema.index({ isActive: 1 });

export default mongoose.models.DigitalMarketingServicePage || mongoose.model('DigitalMarketingServicePage', DigitalMarketingServicePageSchema);
