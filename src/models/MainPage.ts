import mongoose from 'mongoose';

// Button Schema
const ButtonSchema = new mongoose.Schema({
  text: { type: String, required: true },
  link: { type: String, required: true },
  variant: { type: String, enum: ['primary', 'secondary'], default: 'primary' },
  target: { type: String, default: '_self' }
});

// Hero Section Schema
const HeroSectionSchema = new mongoose.Schema({
  badge: { type: String },
  title: { type: String, required: true },
  highlightedTitle: { type: String },
  description: { type: String, required: true },
  backgroundImage: { type: String },
  tags: [{ type: String }],
  buttons: [ButtonSchema]
});

// Value Snapshot Schema
const ValueSnapshotSchema = new mongoose.Schema({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  delay: { type: Number, default: 0 }
});

// Deliver Card Item Schema
const DeliverCardItemSchema = new mongoose.Schema({
  text: { type: String, required: true }
});

// Deliver Card Schema
const DeliverCardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  icon: { type: String, required: true },
  items: [DeliverCardItemSchema]
});

// Tech Item Schema
const TechItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true },
  color: { type: String }
});

// Tech Tab Schema
const TechTabSchema = new mongoose.Schema({
  key: { type: String, required: true },
  label: { type: String, required: true },
  items: [TechItemSchema]
});

// Tech Stack Section Schema
const TechStackSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  tabs: [TechTabSchema]
});

// CTA Section Schema
const CTASectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  buttons: [ButtonSchema]
});

// Sub Section Schema (for gamify page)
const SubSectionSchema = new mongoose.Schema({
  badge: { type: String },
  title: { type: String },
  description: { type: String },
  buttonText: { type: String },
  buttonLink: { type: String }
});

// About Section Schema (for gamify page)
const AboutSectionSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String }
});

// Deliverable Item Schema (for gamify page)
const DeliverableItemSchema = new mongoose.Schema({
  text: { type: String, required: true },
  icon: { type: String, required: true }
});

// Deliverables Section Schema (for gamify page)
const DeliverablesSectionSchema = new mongoose.Schema({
  title: { type: String },
  items: [DeliverableItemSchema]
});

// Process Step Schema (for gamify page)
const ProcessStepSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
});

// Process Section Schema (for gamify page)
const ProcessSectionSchema = new mongoose.Schema({
  title: { type: String },
  steps: [ProcessStepSchema]
});

// Brand Logo Schema (for gamify page)
const BrandLogoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  src: { type: String, required: true }
});

// Logo Section Schema (for gamify page)
const LogoSectionSchema = new mongoose.Schema({
  title: { type: String },
  logos: [BrandLogoSchema]
});

// Main Page Schema
const MainPageSchema = new mongoose.Schema({
  pageType: { 
    type: String, 
    required: true,
    unique: true,
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
  valueSnapshots: [ValueSnapshotSchema],
  deliverSection: {
    title: { type: String },
    cards: [DeliverCardSchema]
  },
  techStackSection: { type: TechStackSectionSchema },
  ctaSection: { type: CTASectionSchema },
  // Gamify page specific sections
  subSection: { type: SubSectionSchema },
  aboutSection: { type: AboutSectionSchema },
  deliverablesSection: { type: DeliverablesSectionSchema },
  processSection: { type: ProcessSectionSchema },
  logoSection: { type: LogoSectionSchema },
  seoMetadata: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    keywords: [String],
    ogImage: { type: String }
  }
}, {
  timestamps: true
});

export default mongoose.models.MainPage || mongoose.model('MainPage', MainPageSchema);
