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

// AI Service Card Schema
const AIServiceCardSchema = new mongoose.Schema({
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
  featuredService: { type: FeaturedServiceSchema, required: true },
  services: [AIServiceCardSchema]
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

// Trend Portal Schema
const TrendPortalSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  color: { type: String, required: true },
  label: { type: String, required: true },
  emoji: { type: String, required: true },
  funFact: { type: String, required: true },
  logo: { type: String, required: true },
  description: { type: String, required: true }
});

// Trends Section Schema
const TrendsSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  highlightText: { type: String, required: true },
  description: { type: String, required: true },
  hoverText: { type: String, required: true },
  tapText: { type: String, required: true },
  portals: [TrendPortalSchema]
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
  backgroundImage: { type: String, required: true },
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

// Main AI/ML Service Page Schema
const AIMLServicePageSchema = new mongoose.Schema({
  pageSlug: { 
    type: String, 
    required: true,
    unique: true,
    default: 'ai-ml-main'
  },
  isActive: { type: Boolean, default: true },
  heroSection: { type: HeroSectionSchema, required: true },
  overviewSection: { type: OverviewSectionSchema, required: true },
  servicesSection: { type: ServicesSectionSchema, required: true },
  howWeWorkSection: { type: HowWeWorkSectionSchema, required: true },
  outcomesSection: { type: OutcomesSectionSchema, required: true },
  trendsSection: { type: TrendsSectionSchema, required: true },
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
// `pageSlug` has `unique: true` above which creates an index already.
// Avoid defining the same index again via schema.index() to prevent
// duplicate index warnings from Mongoose.
AIMLServicePageSchema.index({ isActive: 1 });

export default mongoose.models.AIMLServicePage || mongoose.model('AIMLServicePage', AIMLServicePageSchema);
