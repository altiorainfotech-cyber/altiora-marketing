import { Document } from 'mongoose';

// Interface for button items
export interface IButton {
  text: string;
  link: string;
  primary?: boolean;
  icon?: string;
  external?: boolean;
}

// Interface for list items
export interface IListItem {
  text: string;
}

// Interface for service offering items
export interface IServiceOffering {
  title: string;
  desc: string;
  icon: string;
}

// Interface for process steps
export interface IProcessStep {
  step: number;
  title: string;
  description: string;
  details?: string;
  icon: string;
}

// Interface for benefit items
export interface IBenefit {
  title: string;
  text: string;
  icon: string;
}

// SEO metadata
export interface ISEO {
  title: string;
  description: string;
  ogImage?: string;
}

// Hero section
export interface IHeroSection {
  backgroundImage: string;
  badge: string;
  badgeIcon: string;
  heading: string;
  headingHighlight?: string;
  highlightColor?: string;
  subheading: string;
  cta: IButton;
}

// Intro section
export interface IIntroSection {
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

// Why Choose section
export interface IWhyChooseItem {
  title: string;
  text: string;
  icon: string;
}

export interface IWhyChooseSection {
  title: string;
  subtitle: string;
  items: IWhyChooseItem[];
}

// Service Offerings section
export interface IServiceOfferingsSection {
  title: string;
  subtitle: string;
  services: IServiceOffering[];
}

// Process section
export interface IProcessSection {
  title: string;
  subtitle: string;
  steps: IProcessStep[];
}

// Why Work With Us section
export interface IWhyWorkWithUsSection {
  title: string;
  subtitle: string;
  benefits: IBenefit[];
}

// CTA section
export interface ICTASection {
  title: string;
  description: string;
  additionalDescription?: string;
  backgroundImage: string;
  icon?: string;
  primaryCTA: IButton;
  secondaryCTA: IButton;
}

// Sections container
export interface ISections {
  hero: IHeroSection;
  intro: IIntroSection;
  whyChoose: IWhyChooseSection;
  serviceOfferings: IServiceOfferingsSection;
  process: IProcessSection;
  whyWorkWithUs: IWhyWorkWithUsSection;
  cta: ICTASection;
}

// Main AI-ML Service interface
export interface IAiMlService extends Document {
  pageId: string;
  pageName: string;
  route: string;
  status: 'draft' | 'published' | 'archived';
  seo: ISEO;
  sections: ISections;
  createdAt: Date;
  updatedAt: Date;
}
