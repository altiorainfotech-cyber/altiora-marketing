import mongoose from 'mongoose';

// Hero Stats Schema
const HeroStatSchema = new mongoose.Schema({
  value: { type: String, required: true },
  label: { type: String, required: true }
});

// Hero Signals Schema
const HeroSignalSchema = new mongoose.Schema({
  text: { type: String, required: true }
});

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
  },
  stats: [HeroStatSchema],
  signals: [HeroSignalSchema]
});

// Overview Section Schema
const OverviewSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
});

// Experience Highlight Schema
const ExperienceHighlightSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  metric: { type: String, required: true },
  metricLabel: { type: String, required: true }
});

// Service Card Schema
const ServiceCardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  icon: { type: String, required: true },
  color: { type: String, required: true },
  gradient: { type: String, required: true }
});

// Services Section Schema
const ServicesSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  highlightText: { type: String, required: true },
  description: { type: String, required: true },
  services: [ServiceCardSchema]
});

// Workflow Step Schema
const WorkflowStepSchema = new mongoose.Schema({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  color: { type: String, required: true },
  emoji: { type: String, required: true }
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
  metric: { type: String, required: true },
  color: { type: String, required: true },
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
  portals: [TrendPortalSchema]
});

// Why Altiora Feature Schema
const WhyAltioraFeatureSchema = new mongoose.Schema({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  color: { type: String, required: true },
  emoji: { type: String, required: true },
  metric: { type: String, required: true },
  metricLabel: { type: String, required: true }
});

// Why Altiora Section Schema
const WhyAltioraSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  highlightText: { type: String, required: true },
  description: { type: String, required: true },
  features: [WhyAltioraFeatureSchema]
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

// Digital Marketing CTA Schema
const DigitalMarketingCTASchema = new mongoose.Schema({
  description: { type: String, required: true },
  buttonText: { type: String, required: true },
  buttonLink: { type: String, required: true }
});

// End to End CTA Schema
const EndToEndCTASchema = new mongoose.Schema({
  description: { type: String, required: true },
  buttonText: { type: String, required: true },
  buttonLink: { type: String, required: true }
});

// Main Web2 Service Page Schema
const Web2ServicePageSchema = new mongoose.Schema({
  pageSlug: { 
    type: String, 
    required: true,
    unique: true,
    default: 'web2-main'
  },
  isActive: { type: Boolean, default: true },
  heroSection: { type: HeroSectionSchema, required: true },
  overviewSection: { type: OverviewSectionSchema, required: true },
  experienceHighlights: [ExperienceHighlightSchema],
  servicesSection: { type: ServicesSectionSchema, required: true },
  digitalMarketingCTA: { type: DigitalMarketingCTASchema },
  howWeWorkSection: { type: HowWeWorkSectionSchema, required: true },
  endToEndCTA: { type: EndToEndCTASchema },
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
// Note: `pageSlug` already has `unique: true` on its path which creates
// an index. Defining an additional index for the same field causes a
// duplicate schema index warning from Mongoose. Remove the explicit
// index for `pageSlug` to avoid the warning and keep the unique index.
Web2ServicePageSchema.index({ isActive: 1 });

export default mongoose.models.Web2ServicePage || mongoose.model('Web2ServicePage', Web2ServicePageSchema);
