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
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String, required: true },
  link: { type: String, default: '/contact' }
});

// Why Choose Point Schema
const WhyChoosePointSchema = new mongoose.Schema({
  text: { type: String, required: true },
  icon: { type: String, required: true }
});

// Process Step Schema
const ProcessStepSchema = new mongoose.Schema({
  step: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true }
});

// Why Work With Us Schema
const WhyWorkWithUsSchema = new mongoose.Schema({
  text: { type: String, required: true },
  icon: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true }
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

// What Is Section Schema
const WhatIsSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  additionalDescription: { type: String },
  icon: { type: String, required: true }
});

// Why Matters Section Schema
const WhyMattersSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  technicalAdvantages: [{ type: String, required: true }],
  businessBenefits: [{ type: String, required: true }]
});

// Main Web3 Service Schema
const Web3ServiceSchema = new mongoose.Schema({
  serviceType: { 
    type: String, 
    required: true,
    enum: [
      'blockchain',
      'blockchain-development-services-building-the-future-of-web3-with-altiora-infotech',
      'dao',
      'dapp',
      'defi',
      'nft',
      'security-audit',
      'smart-contract',
      'tokenization',
      'wallet',
      'web3-marketing',
      'zk-privacy'
    ],
    unique: true
  },
  heroSection: { type: HeroSectionSchema, required: true },
  whatIsSection: { type: WhatIsSectionSchema, required: true },
  whyMattersSection: { type: WhyMattersSectionSchema },
  whyChoosePoints: [WhyChoosePointSchema],
  services: [ServiceItemSchema],
  processSteps: [ProcessStepSchema],
  whyWorkWithUs: [WhyWorkWithUsSchema],
  ctaSection: { type: CTASectionSchema, required: true },
  seoMetadata: {
    title: { type: String, required: true },
    description: { type: String, required: true }
  }
}, {
  timestamps: true
});

export default mongoose.models.Web3Service || mongoose.model('Web3Service', Web3ServiceSchema, 'web3');