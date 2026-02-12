import mongoose from 'mongoose';

// Step schema for "How RWA Tokenization Works"
const StepSchema = new mongoose.Schema({
  h: { type: String, required: true },
  d: { type: String, required: true },
  iconName: { type: String, required: true } // Icon component name from lucide-react
});

// Steps section schema (with title and items)
const StepsSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  items: [StepSchema]
});

// Technology schema
const TechnologySchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true }, // Icon component name from react-icons/si
  color: { type: String, required: true },
  category: { type: String, required: true }
});

// Technologies section schema (with title, description and items)
const TechnologiesSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  items: [TechnologySchema]
});

// Hero section schema
const HeroSchema = new mongoose.Schema({
  badgeText: { type: String, required: true },
  mainHeadline: { type: String, required: true },
  highlightText: { type: String, required: true },
  description: { type: String, required: true },
  ctaText: { type: String, required: true },
  ctaLink: { type: String, required: true },
  backgroundImage: { type: String, required: true }
});

// Compliance section schema
const ComplianceSectionSchema = new mongoose.Schema({
  badge1: { type: String, required: true },
  badge2: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  ctaText: { type: String, required: true },
  ctaLink: { type: String, required: true }
});

// What We Deliver section schema
const WhatWeDeliverSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
});

// Outcomes section schema
const OutcomesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
});

// CTA section schema
const CTASchema = new mongoose.Schema({
  heading: { type: String, required: true },
  description: { type: String, required: true },
  buttonText: { type: String, required: true },
  buttonLink: { type: String, required: true }
});

// Main RWA Page schema
const RWAPageSchema = new mongoose.Schema({
  pageId: { type: String, required: true, unique: true },
  hero: { type: HeroSchema, required: true },
  complianceSection: { type: ComplianceSectionSchema, required: true },
  whatWeDeliver: { type: WhatWeDeliverSchema, required: true },
  steps: { type: StepsSectionSchema, required: true },
  technologies: { type: TechnologiesSectionSchema, required: true },
  outcomes: { type: OutcomesSchema, required: true },
  cta: { type: CTASchema, required: true },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.RWAPage || mongoose.model('RWAPage', RWAPageSchema, 'mainpages');
