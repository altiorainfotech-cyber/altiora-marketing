import mongoose, { Schema, Document, Model } from 'mongoose';

// Interface for button items
export interface IButton {
  text: string;
  link: string;
  primary?: boolean;
  icon?: string;
  external?: boolean;
}

// Interface for list items (used in various sections)
export interface IListItem {
  text: string;
}

// Interface for service offering items
export interface IServiceOffering {
  name: string;
  icon: string;
}

// Interface for process steps
export interface IProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

// Interface for benefit items
export interface IBenefit {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  gradient: [string, string];
}

// Interface for feature cards
export interface IFeatureCard {
  title: string;
  description: string;
  icon: string;
}

// Interface for content cards (Why DAOs Matter section)
export interface IContentCard {
  title: string;
  icon: string;
  iconGradient?: [string, string];
  items: IListItem[] | string[];
}

// Interface for advantage items (Security Audit specific)
export interface IAdvantage {
  title: string;
  icon: string;
  items: string[];
}

// Interface for benefit items (Why Work section)
export interface IWorkBenefit {
  text: string;
  icon: string;
}

// Interface for service items (Security Audit specific)
export interface ISecurityService {
  title: string;
  description: string;
  image: string;
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
  headingHighlight: string;
  highlightColor: string;
  subheading: string;
  cta: IButton;
}

// What is section (generic content section)
export interface IWhatIsSection {
  title: string;
  subtitle: string;
  icon: string;
  paragraphs?: string[];
  description?: string;
  additionalText?: string;
}

// Why Matter section
export interface IWhyMatterSection {
  title: string;
  subtitle: string;
  cards?: IContentCard[];
  advantages?: IAdvantage[];
}

// Why Choose Us section
export interface IWhyChooseSection {
  title: string;
  subtitle: string;
  featureCards: IFeatureCard[];
  commitmentCard: {
    icon: string;
    title: string;
    description: string;
  };
}

// Service Offerings section
export interface IServiceOfferingsSection {
  title: string;
  subtitle: string;
  services: IServiceOffering[] | ISecurityService[];
}

// Process section
export interface IProcessSection {
  title: string;
  subtitle: string;
  steps: IProcessStep[];
  gradientColors: [string, string, string];
}

// Why Work With Us section
export interface IWhyWorkSection {
  title: string;
  subtitle: string;
  benefits: IBenefit[] | IWorkBenefit[];
}

// CTA section
export interface ICTASection {
  backgroundImage: string;
  icon: string;
  heading?: string;
  title?: string;
  paragraphs?: string[];
  description?: string;
  additionalText?: string;
  buttons?: IButton[];
  primaryButton?: IButton;
  secondaryButton?: IButton;
}

// Main Web3Service document interface
export interface IWeb3Service extends Document {
  pageId: string; // Unique identifier: 'dao', 'nft', 'defi', etc.
  pageName: string; // Display name: 'DAO Development', 'NFT Solutions', etc.
  route: string; // URL route: '/services/web3/dao'
  status: 'draft' | 'published' | 'archived';
  seo: ISEO;
  sections: {
    hero: IHeroSection;
    whatIs: IWhatIsSection;
    whyMatter: IWhyMatterSection;
    whyChoose: IWhyChooseSection;
    serviceOfferings: IServiceOfferingsSection;
    process: IProcessSection;
    whyWork: IWhyWorkSection;
    cta: ICTASection;
  };
  createdAt: Date;
  updatedAt: Date;
}

// Schema definition
const Web3ServiceSchema: Schema<IWeb3Service> = new Schema({
  pageId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  pageName: {
    type: String,
    required: true,
    trim: true
  },
  route: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function(v: string) {
        return v.startsWith('/services/');
      },
      message: 'route must start with /services/'
    }
  },
  status: {
    type: String,
    required: true,
    enum: ['draft', 'published', 'archived'],
    default: 'published'
  },
  seo: {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    ogImage: {
      type: String,
      trim: true
    }
  },
  sections: {
    hero: {
      backgroundImage: { type: String, required: true },
      badge: { type: String, required: true },
      badgeIcon: { type: String, required: true },
      heading: { type: String, required: true },
      headingHighlight: { type: String, required: true },
      highlightColor: { type: String, default: '#f4cc6f' },
      subheading: { type: String, required: true },
      cta: {
        text: { type: String, required: true },
        link: { type: String, required: true },
        primary: { type: Boolean, default: true },
        icon: { type: String, default: 'FaRocket' }
      }
    },
    whatIs: {
      title: { type: String, required: true },
      subtitle: { type: String, required: true },
      icon: { type: String, required: true },
      paragraphs: [{ type: String, required: true }]
    },
    whyMatter: {
      title: { type: String, required: true },
      subtitle: { type: String, required: true },
      cards: [{
        title: { type: String, required: true },
        icon: { type: String, required: true },
        iconGradient: [{ type: String, required: true }],
        items: [{
          text: { type: String, required: true }
        }]
      }]
    },
    whyChoose: {
      title: { type: String, required: true },
      subtitle: { type: String, required: true },
      featureCards: [{
        title: { type: String, required: true },
        description: { type: String, required: true },
        icon: { type: String, required: true }
      }],
      commitmentCard: {
        icon: { type: String, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true }
      }
    },
    serviceOfferings: {
      title: { type: String, required: true },
      subtitle: { type: String, required: true },
      services: [{
        name: { type: String, required: true },
        icon: { type: String, required: true }
      }]
    },
    process: {
      title: { type: String, required: true },
      subtitle: { type: String, required: true },
      steps: [{
        step: { type: Number, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        icon: { type: String, required: true }
      }],
      gradientColors: [{ type: String, required: true }]
    },
    whyWork: {
      title: { type: String, required: true },
      subtitle: { type: String, required: true },
      benefits: [{
        title: { type: String, required: true },
        subtitle: { type: String, required: true },
        description: { type: String, required: true },
        icon: { type: String, required: true },
        gradient: [{ type: String, required: true }]
      }]
    },
    cta: {
      backgroundImage: { type: String, required: true },
      icon: { type: String, required: true },
      heading: { type: String, required: true },
      paragraphs: [{ type: String, required: true }],
      buttons: [{
        text: { type: String, required: true },
        link: { type: String, required: true },
        primary: { type: Boolean, default: false },
        icon: { type: String },
        external: { type: Boolean, default: false }
      }]
    }
  }
}, {
  timestamps: true,
  collection: 'web3Services'
});

// Indexes for performance
Web3ServiceSchema.index({ pageId: 1, status: 1 });
Web3ServiceSchema.index({ route: 1 });
Web3ServiceSchema.index({ status: 1 });

// Static method to find published page by pageId
Web3ServiceSchema.statics.findByPageId = function(pageId: string) {
  return this.findOne({ pageId, status: 'published' });
};

// Static method to find published page by route
Web3ServiceSchema.statics.findByRoute = function(route: string) {
  return this.findOne({ route, status: 'published' });
};

// Create and export the model
const Web3Service: Model<IWeb3Service> = mongoose.models.Web3Service || mongoose.model<IWeb3Service>('Web3Service', Web3ServiceSchema);

export default Web3Service;
