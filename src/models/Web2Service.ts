import mongoose from 'mongoose';

// Hero Section Schema
const HeroSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  backgroundImage: { type: String, required: true },
  ctaText: { type: String, required: true },
  ctaLink: { type: String, required: true }
});

// Service Item Schema
const ServiceItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true }, // Icon name/class
  link: { type: String, default: '/contact' }
});

// Why Choose Point Schema
const WhyChoosePointSchema = new mongoose.Schema({
  text: { type: String, required: true }
});

// DNA Animation Data Schema
const DNAAnimationDataSchema = new mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true }
});

// DNA Animation Schema
const DNAAnimationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  data: [DNAAnimationDataSchema]
});

// Why Work With Us Schema
const WhyWorkWithUsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true }
});

// CTA Section Schema
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

// Main Web2 Service Schema
const Web2ServiceSchema = new mongoose.Schema({
  serviceType: {
    type: String,
    required: true,
    enum: [
      'api-development-integration',
      'cloud-migration-managed-hosting',
      'custom-web-application-development',
      'devops-consulting',
      'digital-marketing-services',
      'e-commerce-development',
      'from-code-to-cloud-end-to-end',
      'headless-cms-content-ops',
      'mobile-application-development',
      'qa-automation',
      'saas-application-development',
      'ui-ux-design',
      'website-development-services'
    ],
    unique: true
  },
  // Standard layout fields (used by UniversalServicePage)
  heroSection: { type: HeroSectionSchema, required: false },
  whyChoosePoints: [WhyChoosePointSchema],
  services: [ServiceItemSchema],
  mobileServices: [ServiceItemSchema],
  dnaAnimation: { type: DNAAnimationSchema, required: false },
  whyWorkWithUs: [WhyWorkWithUsSchema],
  ctaSection: { type: CTASectionSchema, required: false },
  seoMetadata: {
    title: { type: String, required: true },
    description: { type: String, required: true }
  },
  // Custom layout support
  hasCustomLayout: { type: Boolean, default: false },
  customData: { type: mongoose.Schema.Types.Mixed }
}, {
  timestamps: true
});

export default mongoose.models.Web2Service || mongoose.model('Web2Service', Web2ServiceSchema);