const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

// Define schemas inline
const HeroSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  backgroundImage: { type: String, required: true },
  ctaText: { type: String, required: true },
  ctaLink: { type: String, required: true }
});

const ServiceItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  link: { type: String, default: '/contact' }
});

const WhyChoosePointSchema = new mongoose.Schema({
  text: { type: String, required: true }
});

const DNAAnimationDataSchema = new mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true }
});

const DNAAnimationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  data: [DNAAnimationDataSchema]
});

const WhyWorkWithUsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true }
});

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

const Web2ServiceSchema = new mongoose.Schema({
  serviceType: { 
    type: String, 
    required: true,
    unique: true
  },
  heroSection: { type: HeroSectionSchema, required: true },
  whyChoosePoints: [WhyChoosePointSchema],
  services: [ServiceItemSchema],
  mobileServices: [ServiceItemSchema],
  dnaAnimation: { type: DNAAnimationSchema, required: true },
  whyWorkWithUs: [WhyWorkWithUsSchema],
  ctaSection: { type: CTASectionSchema, required: true },
  seoMetadata: {
    title: { type: String, required: true },
    description: { type: String, required: true }
  }
}, {
  timestamps: true
});

const Web2Service = mongoose.models.Web2Service || mongoose.model('Web2Service', Web2ServiceSchema);

// Common Why Work With Us data
const commonWhyWorkWithUs = [
  { title: 'Domain Expertise', description: 'Deep knowledge in modern technologies, architecture, and best practices.', icon: 'FaNetworkWired' },
  { title: 'Custom Solutions', description: 'Tailored solutions, not templates; each project fits your specific business logic.', icon: 'FaTools' },
  { title: 'End-to-End Capability', description: 'Complete service from ideation to maintenance.', icon: 'FaCode' },
  { title: 'Security-First Approach', description: 'Rigorous audits and security embedded in every layer.', icon: 'FaShieldAlt' },
  { title: 'Scalable & Future-ready', description: 'Modular design for evolving protocols and upgrades.', icon: 'FaRocket' },
  { title: 'Client-Centric Philosophy', description: 'Your success is our success; expect partnership and guidance.', icon: 'FaHandshake' }
];

const remaining6Services = [
  // 5. E-Commerce Development
  {
    serviceType: 'e-commerce-development',
    heroSection: {
      title: 'E-Commerce Development Services',
      subtitle: 'ALTIORA INFOTECH',
      description: 'Build powerful online stores that convert visitors into customers.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1761630203/web2/e-commerce-hero.jpg',
      ctaText: 'Get Started',
      ctaLink: '/contact'
    },
    whyChoosePoints: [
      { text: 'Custom e-commerce solutions tailored to your business model' },
      { text: 'Seamless payment gateway integration with multiple providers' },
      { text: 'Mobile-first responsive design for optimal shopping experience' },
      { text: 'Advanced inventory and order management systems' },
      { text: 'SEO optimization for better search engine visibility' },
      { text: 'Scalable architecture to handle high traffic and sales volumes' }
    ],
    services: [
      { title: 'Custom Store Development', description: 'Tailored e-commerce platforms built with modern frameworks and best practices.', icon: 'ShoppingCart', link: '/contact' },
      { title: 'Payment Integration', description: 'Secure payment gateways, multiple payment methods, and fraud prevention.', icon: 'CreditCard', link: '/contact' },
      { title: 'Product Management', description: 'Advanced catalog systems, inventory tracking, and variant management.', icon: 'Package', link: '/contact' },
      { title: 'Shopping Cart & Checkout', description: 'Optimized cart experience, one-click checkout, and abandoned cart recovery.', icon: 'ShoppingBag', link: '/contact' },
      { title: 'Order Management', description: 'Complete order lifecycle, fulfillment tracking, and customer notifications.', icon: 'Truck', link: '/contact' },
      { title: 'Customer Accounts', description: 'User profiles, order history, wishlists, and personalized recommendations.', icon: 'Users', link: '/contact' },
      { title: 'Analytics & Reporting', description: 'Sales analytics, customer insights, and conversion optimization.', icon: 'BarChart3', link: '/contact' },
      { title: 'Marketing Tools', description: 'Email campaigns, discount codes, loyalty programs, and promotions.', icon: 'Megaphone', link: '/contact' },
      { title: 'Multi-channel Integration', description: 'Connect with marketplaces, social commerce, and POS systems.', icon: 'Globe', link: '/contact' }
    ],
    mobileServices: [
      { title: 'Custom Store Development', description: 'Tailored e-commerce platforms built with modern frameworks.', icon: 'ShoppingCart', link: '/contact' },
      { title: 'Payment Integration', description: 'Secure payment gateways and fraud prevention.', icon: 'CreditCard', link: '/contact' },
      { title: 'Product Management', description: 'Advanced catalog and inventory systems.', icon: 'Package', link: '/contact' },
      { title: 'Shopping Cart', description: 'Optimized cart and checkout experience.', icon: 'ShoppingBag', link: '/contact' },
      { title: 'Order Management', description: 'Complete order lifecycle tracking.', icon: 'Truck', link: '/contact' },
      { title: 'Customer Accounts', description: 'User profiles and order history.', icon: 'Users', link: '/contact' },
      { title: 'Analytics', description: 'Sales analytics and insights.', icon: 'BarChart3', link: '/contact' },
      { title: 'Marketing Tools', description: 'Campaigns and promotions.', icon: 'Megaphone', link: '/contact' }
    ],
    dnaAnimation: {
      title: 'Our E-Commerce Development Process',
      description: 'Six strategic phases that create high-converting online stores. Our methodology ensures seamless shopping experiences and business growth.',
      data: [
        { title: 'Discovery & Strategy', text: 'Business model analysis, target audience research, and feature planning.' },
        { title: 'UX Design', text: 'User journey mapping, wireframes, and conversion-optimized interfaces.' },
        { title: 'Development', text: 'Platform build, payment integration, and third-party service connections.' },
        { title: 'Testing & QA', text: 'Comprehensive testing, security audits, and performance optimization.' },
        { title: 'Launch & Migration', text: 'Data migration, go-live support, and post-launch monitoring.' },
        { title: 'Growth & Optimization', text: 'A/B testing, conversion optimization, and feature enhancements.' }
      ]
    },
    whyWorkWithUs: commonWhyWorkWithUs,
    ctaSection: {
      title: 'Ready to Launch Your Online Store?',
      description: 'Build a powerful e-commerce platform that drives sales and delights customers. Our expert team delivers custom solutions that scale with your business.',
      additionalDescription: 'Let\'s discuss your e-commerce vision and create a roadmap for success. From concept to launch and beyond, we\'re your partner in online retail.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1761630267/web2/e-commerce-cta.jpg',
      primaryCTA: { text: 'Book Discovery Call', link: 'https://calendly.com/altiorainfotech/30min' },
      secondaryCTA: { text: 'Send Your Brief', link: '/contact' }
    },
    seoMetadata: {
      title: 'E-Commerce Development - Altiora Infotech',
      description: 'Build powerful online stores with e-commerce development at Altiora Infotech. We specialize in custom e-commerce solutions and online store development.'
    }
  },

  // 6. Headless CMS & Content Ops
  {
    serviceType: 'headless-cms-content-ops',
    heroSection: {
      title: 'Headless CMS & Content Operations Services',
      subtitle: 'ALTIORA INFOTECH',
      description: 'Deliver content anywhere with flexible, API-first CMS solutions.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1761630208/web2/headless-cms-hero.jpg',
      ctaText: 'Get Started',
      ctaLink: '/contact'
    },
    whyChoosePoints: [
      { text: 'Platform-agnostic content delivery to web, mobile, and IoT devices' },
      { text: 'Flexible content modeling for any business requirement' },
      { text: 'Streamlined workflows for content teams and developers' },
      { text: 'Multi-language and localization support out of the box' },
      { text: 'Scalable infrastructure for high-traffic content delivery' },
      { text: 'Integration with modern frontend frameworks and tools' }
    ],
    services: [
      { title: 'CMS Strategy & Selection', description: 'Platform evaluation, architecture design, and implementation planning.', icon: 'Target', link: '/contact' },
      { title: 'Content Modeling', description: 'Flexible schemas, relationships, and structured content design.', icon: 'Database', link: '/contact' },
      { title: 'API Development', description: 'RESTful and GraphQL APIs for content delivery and management.', icon: 'Code2', link: '/contact' },
      { title: 'Frontend Integration', description: 'Connect CMS with React, Next.js, Vue, or any frontend framework.', icon: 'Monitor', link: '/contact' },
      { title: 'Workflow Automation', description: 'Publishing workflows, approval processes, and content scheduling.', icon: 'GitBranch', link: '/contact' },
      { title: 'Asset Management', description: 'Digital asset library, image optimization, and media delivery.', icon: 'Image', link: '/contact' },
      { title: 'Localization', description: 'Multi-language content, translation workflows, and regional targeting.', icon: 'Globe', link: '/contact' },
      { title: 'Search & Discovery', description: 'Full-text search, filtering, and content recommendations.', icon: 'Search', link: '/contact' },
      { title: 'Analytics & Insights', description: 'Content performance tracking, user engagement, and optimization.', icon: 'BarChart3', link: '/contact' }
    ],
    mobileServices: [
      { title: 'CMS Strategy', description: 'Platform evaluation and planning.', icon: 'Target', link: '/contact' },
      { title: 'Content Modeling', description: 'Flexible schemas and design.', icon: 'Database', link: '/contact' },
      { title: 'API Development', description: 'Content delivery APIs.', icon: 'Code2', link: '/contact' },
      { title: 'Frontend Integration', description: 'Framework connections.', icon: 'Monitor', link: '/contact' },
      { title: 'Workflow Automation', description: 'Publishing workflows.', icon: 'GitBranch', link: '/contact' },
      { title: 'Asset Management', description: 'Media library and delivery.', icon: 'Image', link: '/contact' },
      { title: 'Localization', description: 'Multi-language support.', icon: 'Globe', link: '/contact' },
      { title: 'Search', description: 'Content discovery.', icon: 'Search', link: '/contact' }
    ],
    dnaAnimation: {
      title: 'Our Headless CMS Implementation Process',
      description: 'Six phases that transform content management into a strategic advantage. Our approach ensures flexibility, scalability, and editorial efficiency.',
      data: [
        { title: 'Discovery', text: 'Content audit, stakeholder needs, and platform requirements.' },
        { title: 'Architecture', text: 'Content model design, API structure, and integration planning.' },
        { title: 'Implementation', text: 'CMS setup, custom development, and frontend integration.' },
        { title: 'Migration', text: 'Content migration, validation, and quality assurance.' },
        { title: 'Training', text: 'Team onboarding, documentation, and workflow setup.' },
        { title: 'Optimization', text: 'Performance tuning, analytics, and continuous improvement.' }
      ]
    },
    whyWorkWithUs: commonWhyWorkWithUs,
    ctaSection: {
      title: 'Ready to Modernize Your Content Strategy?',
      description: 'Unlock the power of headless CMS and deliver content everywhere. Our team helps you build flexible, scalable content operations that drive engagement.',
      additionalDescription: 'Let\'s discuss your content challenges and design a solution that empowers your team and delights your audience.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1761630275/web2/headless-cms-cta.jpg',
      primaryCTA: { text: 'Book Discovery Call', link: 'https://calendly.com/altiorainfotech/30min' },
      secondaryCTA: { text: 'Send Your Brief', link: '/contact' }
    },
    seoMetadata: {
      title: 'Headless CMS & Content Operations - Altiora Infotech',
      description: 'Deliver content anywhere with headless CMS at Altiora Infotech. We specialize in API-first content management and content operations.'
    }
  },
];

async function seedRemainingServices() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    for (const serviceData of remaining6Services) {
      await Web2Service.findOneAndUpdate(
        { serviceType: serviceData.serviceType },
        serviceData,
        { upsert: true, new: true }
      );
      console.log(`✓ Seeded ${serviceData.serviceType}`);
    }

    console.log(`\nSuccessfully seeded ${remaining6Services.length} services`);
    await mongoose.connection.close();
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

seedRemainingServices();
