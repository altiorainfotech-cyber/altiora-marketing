import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

// Define the schema inline for seeding
const HeroStatSchema = new mongoose.Schema({
  value: { type: String, required: true },
  label: { type: String, required: true }
});

const HeroSignalSchema = new mongoose.Schema({
  text: { type: String, required: true }
});

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

const OverviewSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
});

const ExperienceHighlightSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  metric: { type: String, required: true },
  metricLabel: { type: String, required: true }
});

const ServiceCardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  icon: { type: String, required: true },
  color: { type: String, required: true },
  gradient: { type: String, required: true }
});

const ServicesSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  highlightText: { type: String, required: true },
  description: { type: String, required: true },
  services: [ServiceCardSchema]
});

const WorkflowStepSchema = new mongoose.Schema({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  color: { type: String, required: true },
  emoji: { type: String, required: true }
});

const HowWeWorkSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  highlightText: { type: String, required: true },
  description: { type: String, required: true },
  steps: [WorkflowStepSchema]
});

const OutcomeItemSchema = new mongoose.Schema({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  metric: { type: String, required: true },
  color: { type: String, required: true },
  emoji: { type: String, required: true }
});

const OutcomesSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  highlightText: { type: String, required: true },
  description: { type: String, required: true },
  outcomes: [OutcomeItemSchema]
});

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

const TrendsSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  highlightText: { type: String, required: true },
  description: { type: String, required: true },
  portals: [TrendPortalSchema]
});

const WhyAltioraFeatureSchema = new mongoose.Schema({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  color: { type: String, required: true },
  emoji: { type: String, required: true },
  metric: { type: String, required: true },
  metricLabel: { type: String, required: true }
});

const WhyAltioraSectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  highlightText: { type: String, required: true },
  description: { type: String, required: true },
  features: [WhyAltioraFeatureSchema]
});

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

const DigitalMarketingCTASchema = new mongoose.Schema({
  description: { type: String, required: true },
  buttonText: { type: String, required: true },
  buttonLink: { type: String, required: true }
});

const EndToEndCTASchema = new mongoose.Schema({
  description: { type: String, required: true },
  buttonText: { type: String, required: true },
  buttonLink: { type: String, required: true }
});

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

const Web2ServicePage = mongoose.models.Web2ServicePage || mongoose.model('Web2ServicePage', Web2ServicePageSchema);

const web2MainPageData = {
  pageSlug: 'web2-main',
  isActive: true,
  heroSection: {
    badge: 'Web2 Development & Modern Engineering',
    title: 'Web2 Development Services that',
    highlightText: 'Ship and Scale',
    description: 'From planning to production, we design and deliver resilient Web2 architectures that power real businesses.',
    primaryCTA: {
      text: 'Start a project',
      link: '/contact'
    },
    secondaryCTA: {
      text: 'Explore capabilities',
      link: '/services'
    },
    stats: [
      { value: '4–8 weeks', label: 'Launch windows' },
      { value: '98%', label: 'Core Web Vitals performance' },
      { value: '88%', label: 'Journeys instrumented' }
    ],
    signals: [
      { text: 'Composable frontends crafted for growth and marketing squads.' },
      { text: 'Design systems and motion patterns that feel native on every surface.' },
      { text: 'Instrumentation, analytics and QA automation wired in from sprint one.' }
    ]
  },
  overviewSection: {
    title: 'Overview',
    description: 'From planning to production, we design and deliver resilient Web2 architectures that power real businesses. Our teams combine product strategy, engineering discipline, and data-driven optimization to modernize legacy systems, launch new products, and ensure consistent uptime with measurable impact.'
  },
  experienceHighlights: [
    {
      title: 'Conversion-led Commerce',
      description: 'Headless storefronts, immersive merchandising and omnichannel journeys that keep customers coming back.',
      link: '/services/web2/e-commerce-development',
      metric: '↑31% CVR',
      metricLabel: 'Average uplift within 90 days'
    },
    {
      title: 'Enterprise Platforms',
      description: 'Modular platforms that streamline operations, connect teams and deliver real-time intelligence for leadership.',
      link: '/services/web2/custom-web-application-development',
      metric: '2.4×',
      metricLabel: 'Faster decision cycles post-launch'
    },
    {
      title: 'Mobile & Super Apps',
      description: 'Multi-experience mobile applications engineered for performance, accessibility and offline reliability.',
      link: '/services/web2/mobile-application-development',
      metric: '40%',
      metricLabel: 'Increase in retention with unified journeys'
    },
    {
      title: 'SaaS Products',
      description: 'Secure, multi-tenant SaaS engineered for growth with billing, onboarding and analytics baked in.',
      link: '/services/web2/saas-application-development',
      metric: 'NPS 72',
      metricLabel: 'SaaS launches with premium user sentiment'
    },
    {
      title: 'DevOps & SRE',
      description: 'Release pipelines, observability stacks and SRE practices that keep velocity high without trading reliability.',
      link: '/services/web2/devops-consulting',
      metric: '<15 min',
      metricLabel: 'MTTR across production incidents'
    },
    {
      title: 'API Ecosystems',
      description: 'GraphQL and REST APIs, partner integrations and data meshes that unlock new products and revenue streams.',
      link: '/services/web2/api-development-integration',
      metric: '+48%',
      metricLabel: 'Faster partner onboarding'
    }
  ],
  servicesSection: {
    title: 'Explore Our Web2',
    highlightText: 'Services',
    description: 'From full-stack development to cloud infrastructure, we deliver scalable, secure, and high-performance web solutions',
    services: [
      {
        title: 'API Development & Integration',
        description: 'REST/GraphQL APIs, OAuth 2.0, webhooks...',
        link: '/services/web2/api-development-integration',
        icon: 'Server',
        color: '#F59E0B',
        gradient: 'from-orange-500 to-orange-600'
      },
      {
        title: 'Cloud Migration & Managed Hosting',
        description: 'Legacy refactors, lift-and-shift, cost optimization...',
        link: '/services/web2/cloud-migration-managed-hosting',
        icon: 'Layers',
        color: '#8B5CF6',
        gradient: 'from-purple-500 to-purple-600'
      },
      {
        title: 'Custom Web Application Development',
        description: 'Bespoke web apps built for scale, security, and CX...',
        link: '/services/web2/custom-web-application-development',
        icon: 'Code',
        color: '#3B82F6',
        gradient: 'from-blue-500 to-blue-600'
      },
      {
        title: 'DevOps Consulting',
        description: 'CI/CD, IaC, observability, SRE practices, release automation...',
        link: '/services/web2/devops-consulting',
        icon: 'Cloud',
        color: '#06B6D4',
        gradient: 'from-cyan-500 to-cyan-600'
      },
      {
        title: 'E-Commerce Development',
        description: 'Headless storefronts, payments, search, and inventory...',
        link: '/services/web2/e-commerce-development',
        icon: 'ShoppingCart',
        color: '#DC2626',
        gradient: 'from-red-500 to-red-600'
      },
      {
        title: 'UI/UX Design',
        description: 'Research, wireframes, design systems, motion...',
        link: '/services/web2/ui-ux-design',
        icon: 'Globe',
        color: '#10B981',
        gradient: 'from-green-500 to-green-600'
      },
      {
        title: 'Mobile Application Development',
        description: 'Cross-platform apps, PWAs, offline-first, secure sync...',
        link: '/services/web2/mobile-application-development',
        icon: 'Smartphone',
        color: '#7C3AED',
        gradient: 'from-violet-500 to-violet-600'
      },
      {
        title: 'SaaS Application Development',
        description: 'Multi-tenant, billing, auth, metering, and analytics...',
        link: '/services/web2/saas-application-development',
        icon: 'Code',
        color: '#6366F1',
        gradient: 'from-indigo-500 to-indigo-600'
      },
      {
        title: 'Headless CMS & Content Ops',
        description: 'Composable schemas, content workflows, and editorial tools...',
        link: '/services/web2/headless-cms-content-ops',
        icon: 'BarChart3',
        color: '#EC4899',
        gradient: 'from-pink-500 to-pink-600'
      }
    ]
  },
  digitalMarketingCTA: {
    description: 'Level up growth with full-funnel digital marketing built for Web2, SaaS, and emerging tech. We blend brand, content, and performance to move the metrics that matter—qualified traffic, MQL→SQL conversion, CAC and LTV. From audit and strategy to SEO, paid media, and analytics, we build compounding growth engines with clean attribution, A/B testing, and transparent reporting.',
    buttonText: 'Digital Marketing Services',
    buttonLink: 'https://altiorainfotech.com/services/web2/digital-marketing-services'
  },
  howWeWorkSection: {
    title: 'How We',
    highlightText: 'Work',
    description: 'We align on goals and tech, share a blueprint, deliver in sprints with demos and costs, then monitor uptime, optimize performance, and plan enhancements.',
    steps: [
      {
        icon: 'Search',
        title: 'Discovery & Alignment',
        description: 'We start with a brief discovery to align goals, scope, and technology stack. You receive a blueprint defining architecture, milestones, and metrics.',
        color: '#3B82F6',
        emoji: '🔍'
      },
      {
        icon: 'Workflow',
        title: 'Sprint Delivery',
        description: 'Delivery proceeds in sprint cycles with demos, documentation, and transparent cost tracking.',
        color: '#10B981',
        emoji: '⚡'
      },
      {
        icon: 'TrendingUp',
        title: 'Launch & Optimization',
        description: 'After launch, we monitor uptime, optimize performance, and plan the next feature waves.',
        color: '#F59E0B',
        emoji: '🚀'
      }
    ]
  },
  endToEndCTA: {
    description: 'Explore our end-to-end delivery model to see how we design, build, ship, and operate resilient Web2 systems with observability, SLOs, and cost control baked in.',
    buttonText: 'How We Ship & Scale',
    buttonLink: 'https://altiorainfotech.com/services/web2/from-code-to-cloud-end-to-end'
  },
  outcomesSection: {
    title: 'Outcomes You Can',
    highlightText: 'Prove',
    description: 'Faster load times, stronger reliability, lower infrastructure cost, smoother user journeys, cleaner codebases, measurable SEO gains, and consistent performance across devices and browsers.',
    outcomes: [
      {
        icon: 'Zap',
        title: 'Faster Load Times',
        description: 'Lightning-fast performance with optimized assets, caching, and modern web standards.',
        metric: '⚡ 2.1s',
        color: '#3B82F6',
        emoji: '⚡'
      },
      {
        icon: 'Shield',
        title: 'Stronger Reliability',
        description: '99.9% uptime with automated monitoring, error tracking, and instant recovery systems.',
        metric: '🛡️ 99.9%',
        color: '#10B981',
        emoji: '🛡️'
      },
      {
        icon: 'BarChart',
        title: 'Lower Infrastructure Cost',
        description: 'Optimized cloud usage and efficient scaling reduce operational expenses by up to 40%.',
        metric: '💰 -40%',
        color: '#F59E0B',
        emoji: '💰'
      },
      {
        icon: 'Users',
        title: 'Smoother User Journeys',
        description: 'Intuitive interfaces and seamless interactions that keep users engaged and satisfied.',
        metric: '👥 +65%',
        color: '#8B5CF6',
        emoji: '👥'
      },
      {
        icon: 'Code',
        title: 'Cleaner Codebases',
        description: 'Maintainable, scalable code with comprehensive testing and documentation.',
        metric: '📝 95%',
        color: '#EF4444',
        emoji: '📝'
      },
      {
        icon: 'TrendingUp',
        title: 'Measurable SEO Gains',
        description: 'Improved search rankings through technical optimization and content strategy.',
        metric: '📈 +150%',
        color: '#06B6D4',
        emoji: '📈'
      },
      {
        icon: 'Globe',
        title: 'Cross-Device Performance',
        description: 'Consistent experience across all devices with responsive design and progressive enhancement.',
        metric: '📱 100%',
        color: '#EC4899',
        emoji: '📱'
      },
      {
        icon: 'Award',
        title: 'Performance Excellence',
        description: 'Core Web Vitals optimization ensuring top-tier user experience scores.',
        metric: '🏆 98%',
        color: '#14B8A6',
        emoji: '🏆'
      }
    ]
  },
  trendsSection: {
    title: 'New Trends That',
    highlightText: 'Matter',
    description: 'Cutting-edge technologies shaping the future of Web2',
    portals: [
      {
        id: 0,
        x: 50,
        y: 15,
        color: '#3B82F6',
        label: 'Edge Computing',
        emoji: '⚡',
        funFact: 'Lightning-fast performance!',
        logo: '⚡',
        description: 'Edge & Serverless Computing: Architectures leveraging Vercel, Cloudflare, and AWS Lambda for latency under 100 ms.'
      },
      {
        id: 1,
        x: 80,
        y: 35,
        color: '#8B5CF6',
        label: 'Composable Arch',
        emoji: '🧩',
        funFact: 'Building blocks of the future!',
        logo: '🧩',
        description: 'Composable Architectures: Micro-frontends and headless CMS adoption accelerating speed and flexibility.'
      },
      {
        id: 2,
        x: 80,
        y: 65,
        color: '#10B981',
        label: 'Observability',
        emoji: '👁️',
        funFact: 'Seeing everything!',
        logo: '👁️',
        description: 'Observability by Design: Full telemetry pipelines—logs, metrics, traces—for proactive issue detection.'
      },
      {
        id: 3,
        x: 50,
        y: 85,
        color: '#F59E0B',
        label: 'Performance SEO',
        emoji: '⚡',
        funFact: 'Speed drives rankings!',
        logo: '📈',
        description: 'Performance & Accessibility as Ranking Factors: Core Web Vitals and WCAG compliance now directly drive SEO and conversions.'
      },
      {
        id: 4,
        x: 20,
        y: 65,
        color: '#EF4444',
        label: 'Privacy Analytics',
        emoji: '🛡️',
        funFact: 'Data protection first!',
        logo: '🛡️',
        description: 'Privacy-Focused Analytics: Server-side GA4 and open-source tools ensuring compliance and insight accuracy.'
      },
      {
        id: 5,
        x: 20,
        y: 35,
        color: '#06B6D4',
        label: 'Modern Web',
        emoji: '💫',
        funFact: 'Future-proof standards!',
        logo: '🌐',
        description: 'Modern Web Standards: Progressive enhancement, modern CSS, and semantic HTML for future-proof applications.'
      }
    ]
  },
  whyAltioraSection: {
    title: 'Why',
    highlightText: 'Altiora',
    description: 'Deep DevOps maturity and long-term reliability. We own outcomes—not just deliverables, aligning technology, teams, and timelines to measurable results.',
    features: [
      {
        icon: 'Code',
        title: 'Full-Stack Expertise',
        description: 'End-to-end development from frontend to backend, databases to DevOps',
        color: '#3B82F6',
        emoji: '🛠️',
        metric: '100%',
        metricLabel: 'Coverage'
      },
      {
        icon: 'Users',
        title: 'Transparent Communication',
        description: 'Daily updates, weekly demos, and direct access to your development team',
        color: '#10B981',
        emoji: '💬',
        metric: '24/7',
        metricLabel: 'Availability'
      },
      {
        icon: 'Target',
        title: 'KPI-Driven Execution',
        description: 'Every decision backed by data, every milestone tied to measurable outcomes',
        color: '#F59E0B',
        emoji: '🎯',
        metric: 'ROI',
        metricLabel: 'Focused'
      },
      {
        icon: 'Settings',
        title: 'Deep DevOps Maturity',
        description: 'CI/CD pipelines, infrastructure as code, and automated everything',
        color: '#8B5CF6',
        emoji: '⚙️',
        metric: '2×',
        metricLabel: 'Faster Deployments'
      },
      {
        icon: 'Shield',
        title: 'Long-Term Reliability',
        description: 'Built to last with comprehensive testing, monitoring, and maintenance',
        color: '#EF4444',
        emoji: '🛡️',
        metric: '99.9%',
        metricLabel: 'Uptime'
      },
      {
        icon: 'Award',
        title: 'Outcome Ownership',
        description: 'We don\'t just deliver code—we guarantee results and business impact',
        color: '#06B6D4',
        emoji: '🏆',
        metric: '100%',
        metricLabel: 'Success Rate'
      }
    ]
  },
  ctaSection: {
    icon: 'Code',
    title: 'Ready to architect your next release?',
    description: 'Let\'s align on outcomes, stack and velocity. Our embedded squads plug into your workflow within days.',
    backgroundImage: '/images/CTA-images/Web2.png',
    primaryCTA: {
      text: 'Book Web2 Consultation',
      link: '/contact',
      icon: 'Code'
    },
    secondaryCTA: {
      text: 'View recent launches',
      link: '/contact',
      icon: 'Eye'
    }
  },
  seoMetadata: {
    title: 'Web2 Development Services | Full-Stack Web Development | Altiora',
    description: 'Professional Web2 development services including custom web applications, e-commerce, SaaS, mobile apps, DevOps, and cloud solutions. Ship and scale with confidence.',
    keywords: [
      'web2 development',
      'full-stack development',
      'custom web applications',
      'e-commerce development',
      'saas development',
      'mobile app development',
      'devops consulting',
      'cloud migration',
      'api development',
      'ui ux design'
    ]
  }
};

async function seedWeb2MainPage() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Delete existing data
    await Web2ServicePage.deleteMany({ pageSlug: 'web2-main' });
    console.log('Cleared existing Web2 main page data');

    // Insert new data
    const result = await Web2ServicePage.create(web2MainPageData);
    console.log('✅ Web2 main page seeded successfully!');
    console.log('Page ID:', result._id);

  } catch (error) {
    console.error('Error seeding Web2 main page:', error);
    throw error;
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed');
  }
}

// Run the seed function
seedWeb2MainPage()
  .then(() => {
    console.log('Seeding completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Seeding failed:', error);
    process.exit(1);
  });
