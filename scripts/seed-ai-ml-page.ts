import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

// Define the schema inline to avoid import issues
const AIMLServicePageSchema = new mongoose.Schema({
  pageSlug: { 
    type: String, 
    required: true,
    unique: true,
    default: 'ai-ml-main'
  },
  isActive: { type: Boolean, default: true },
  heroSection: { type: Object, required: true },
  overviewSection: { type: Object, required: true },
  servicesSection: { type: Object, required: true },
  howWeWorkSection: { type: Object, required: true },
  outcomesSection: { type: Object, required: true },
  trendsSection: { type: Object, required: true },
  whyAltioraSection: { type: Object, required: true },
  ctaSection: { type: Object, required: true },
  seoMetadata: { type: Object, required: true }
}, {
  timestamps: true,
  collection: 'servicepages'
});

const AIMLServicePage = mongoose.models.AIMLServicePage || mongoose.model('AIMLServicePage', AIMLServicePageSchema);

const aimlPageData = {
  pageSlug: 'ai-ml-main',
  isActive: true,
  heroSection: {
    badge: 'AI & Machine Learning Services',
    title: 'AI & ML Services',
    highlightText: 'by a Top AI Consulting Company',
    description: 'From generative AI to predictive analytics, we transform data into actionable intelligence that drives real business impact.',
    primaryCTA: {
      text: 'Start AI project',
      link: '/contact'
    },
    secondaryCTA: {
      text: 'Explore capabilities',
      link: '/services'
    }
  },
  overviewSection: {
    title: 'Overview',
    description: 'From problem framing and data strategy to model deployment and monitoring, our teams combine research-grade modelling, MLOps, and product-first thinking to deliver trustworthy, scalable AI that impacts KPIs.'
  },
  servicesSection: {
    title: 'Explore Our AI',
    highlightText: 'Services',
    description: 'Comprehensive AI solutions tailored to transform your business operations',
    featuredService: {
      badge: 'Featured service',
      title: 'Large Language Models & Retrieval',
      description: 'RAG, vector search, embedding pipelines, prompt engineering',
      metric: '<100ms',
      metricLabel: 'Response time for LLM queries',
      link: '/services/ai-ml/natural-language-processing-ai'
    },
    services: [
      {
        title: 'Data Strategy & Engineering',
        description: 'Data pipelines, ETL/ELT, feature stores, and labeling workflows',
        link: '/services/ai-ml/data-strategy-and-engineering-page',
        metric: '10TB+',
        metricLabel: 'Data processed daily across clients',
        icon: 'Database',
        iconName: 'DSE',
        color: '#3B82F6',
        gradient: 'from-blue-500 to-blue-600',
        animatedMetric: { start: 0, end: 10, suffix: 'TB+' }
      },
      {
        title: 'ML & Deep Learning',
        description: 'Custom supervised, unsupervised, and transfer-learning models',
        link: '/services/ai-ml/machine-learning',
        metric: '99.2%',
        metricLabel: 'Average model accuracy in production',
        icon: 'Brain',
        iconName: 'ML',
        color: '#10B981',
        gradient: 'from-green-500 to-green-600',
        animatedMetric: { start: 0, end: 99.2, suffix: '%' }
      },
      {
        title: 'Computer Vision',
        description: 'Object detection, segmentation, and edge deployment',
        link: '/services/ai-ml/computer-vision',
        metric: '95%',
        metricLabel: 'Detection accuracy',
        icon: 'Eye',
        iconName: 'CV',
        color: '#F59E0B',
        gradient: 'from-orange-500 to-orange-600',
        animatedMetric: { start: 0, end: 95, suffix: '%' }
      },
      {
        title: 'Large Language Models & Retrieval',
        description: 'RAG, vector search, embedding pipelines, prompt engineering',
        link: '/services/ai-ml/natural-language-processing-ai',
        metric: '<100ms',
        metricLabel: 'Response time for LLM queries',
        icon: 'Sparkles',
        iconName: 'LLM',
        color: '#8B5CF6',
        gradient: 'from-purple-500 to-purple-600',
        animatedMetric: { start: 0, end: 100, prefix: '<', suffix: 'ms' }
      },
      {
        title: 'Agentic AI & Automation',
        description: 'Goal-driven agents, tool integrations, and safety guardrails',
        link: '/services/ai-ml/agentic-ai',
        metric: '24/7',
        metricLabel: 'Autonomous operation capability',
        icon: 'Zap',
        iconName: 'AAA',
        color: '#EF4444',
        gradient: 'from-red-500 to-red-600',
        animatedMetric: { start: 0, end: 24, suffix: '/7' }
      },
      {
        title: 'MLOps & Model Ops',
        description: 'CI/CD for models, drift detection, canary deploys, and model registry',
        link: '/services/ai-ml/ai-infrastructure-and-cloud-development',
        metric: '2×',
        metricLabel: 'Faster model deployment cycles',
        icon: 'Cloud',
        iconName: 'MLOps',
        color: '#06B6D4',
        gradient: 'from-cyan-500 to-cyan-600',
        animatedMetric: { start: 0, end: 2, suffix: '×' }
      },
      {
        title: 'Generative AI',
        description: 'Diffusion models, GANs, and creative AI applications',
        link: '/services/ai-ml/generative-ai',
        metric: '85%',
        metricLabel: 'Content generation quality',
        icon: 'Sparkles',
        iconName: 'GenAI',
        color: '#EC4899',
        gradient: 'from-pink-500 to-pink-600',
        animatedMetric: { start: 0, end: 85, suffix: '%' }
      },
      {
        title: 'Predictive Analytics & Automation',
        description: 'Time series forecasting, anomaly detection, and automated insights',
        link: '/services/ai-ml/predictive-analytics-and-automation',
        metric: '92%',
        metricLabel: 'Prediction accuracy',
        icon: 'TrendingUp',
        iconName: 'PAA',
        color: '#14B8A6',
        gradient: 'from-teal-500 to-teal-600',
        animatedMetric: { start: 0, end: 92, suffix: '%' }
      },
      {
        title: 'AI Solutions & Services',
        description: 'Strategic AI roadmap development, technology evaluation, and implementation planning',
        link: '/services/ai-ml/artificial-intelligence-solutions-advanced-ai-services',
        metric: '50+',
        metricLabel: 'Successful AI transformations',
        icon: 'Target',
        iconName: 'ACS',
        color: '#6366F1',
        gradient: 'from-indigo-500 to-indigo-600',
        animatedMetric: { start: 0, end: 50, suffix: '+' }
      }
    ]
  },
  howWeWorkSection: {
    title: 'How We',
    highlightText: 'Work',
    description: 'Our proven methodology combines rigorous validation with rapid iteration to deliver production-ready AI that drives real business outcomes.',
    steps: [
      {
        icon: 'Search',
        title: 'Discovery & Validation',
        description: 'Focused discovery to validate assumptions and instrument data collection',
        details: [
          'Business case validation',
          'Data landscape assessment',
          'Technical feasibility analysis'
        ]
      },
      {
        icon: 'Zap',
        title: 'Iterative Experiments',
        description: 'Work proceeds with clear metrics, fast validation loops, and rapid prototyping',
        details: [
          'Clear success metrics',
          'Fast validation cycles',
          'Rapid experimentation'
        ]
      },
      {
        icon: 'Target',
        title: 'Production Hardening',
        description: 'Production hardening once signals are reliable with robust deployment',
        details: [
          'Reproducible pipelines',
          'Robust serving infrastructure',
          'Transparent monitoring'
        ]
      }
    ]
  },
  outcomesSection: {
    title: 'Outcomes You Can',
    highlightText: 'Prove',
    description: 'Click the data streams to see real AI impact! From accuracy boosts to cost savings, watch the numbers tell the story!',
    outcomes: [
      {
        icon: 'TrendingUp',
        title: 'Improved Accuracy',
        description: 'Enhanced prediction accuracy with measurable performance gains. See how our deployed AI systems don\'t just work in theory—they ship, scale, and prove ROI across industries with measurable impact.',
        emoji: '📈'
      },
      {
        icon: 'Zap',
        title: 'Automation Benefits',
        description: 'Reduced manual effort through intelligent automation workflows',
        emoji: '🤖'
      },
      {
        icon: 'BarChart3',
        title: 'Faster Insights',
        description: 'Accelerated time-to-insight with real-time analytics',
        emoji: '⚡'
      },
      {
        icon: 'CheckCircle',
        title: 'Cost Efficiency',
        description: 'Lower inference costs and measurable ROI improvements',
        emoji: '💰'
      }
    ]
  },
  trendsSection: {
    title: 'New Trends That',
    highlightText: 'Matter',
    description: 'Cutting-edge technologies shaping the future of AI & ML',
    hoverText: 'Discover the magic of AI! Hover over the glowing portals to unlock amazing technological wonders that are changing our world!',
    tapText: 'Tap the cards to explore cutting-edge AI & ML technologies!',
    portals: [
      {
        id: 0,
        x: 50,
        y: 15,
        color: '#3B82F6',
        label: 'Edge AI',
        emoji: '🚀',
        funFact: 'Like AI on your phone!',
        logo: '📱',
        description: 'Foundation models at the edge: Efficient quantization and distillation enabling LLM-powered features on-device.'
      },
      {
        id: 1,
        x: 80,
        y: 35,
        color: '#8B5CF6',
        label: 'RAG Systems',
        emoji: '🔍',
        funFact: 'Smart search superpowers!',
        logo: '🔗',
        description: 'Retrieval-augmented systems: Hybrid RAG architectures with private vector stores and context-aware retrieval.'
      },
      {
        id: 2,
        x: 80,
        y: 65,
        color: '#10B981',
        label: 'Agentic AI',
        emoji: '🤖',
        funFact: 'AI that thinks for itself!',
        logo: '🎯',
        description: 'Agentic orchestration: Multi-agent workflows and toolkits for complex automation across APIs and systems.'
      },
      {
        id: 3,
        x: 50,
        y: 85,
        color: '#F59E0B',
        label: 'Responsible AI',
        emoji: '🛡️',
        funFact: 'AI with a good heart!',
        logo: '⚖️',
        description: 'Responsible AI: Continuous bias monitoring, explainability tooling, and privacy-preserving training (federated/DP).'
      },
      {
        id: 4,
        x: 20,
        y: 65,
        color: '#EF4444',
        label: 'ML Infra',
        emoji: '🏗️',
        funFact: 'Building AI cities!',
        logo: '🏗️',
        description: 'ML Infrastructure standardization: Feature stores, lineage, and standardized CI/CD for models to reduce drift and technical debt.'
      },
      {
        id: 5,
        x: 20,
        y: 35,
        color: '#06B6D4',
        label: 'Neural Networks',
        emoji: '🧠',
        funFact: 'Deep learning magic!',
        logo: '🔮',
        description: 'Neural Networks evolution: Advanced architectures with attention mechanisms and transformer models for complex pattern recognition.'
      }
    ]
  },
  whyAltioraSection: {
    title: 'Why',
    highlightText: 'Altiora',
    description: 'Research-grade modelling combined with engineering rigor and product focus. We move quickly from hypothesis to production while keeping governance, observability, and cost-efficiency central, aligning every release with your KPIs, stakeholders, and long-term product roadmap.',
    items: [
      {
        icon: 'Target',
        title: 'Full AI Lifecycle Ownership',
        stat: '100%',
        statLabel: 'Coverage',
        description: 'From use-case discovery and data audits to deployment, monitoring, and retraining, we manage the entire AI/ML journey end-to-end.',
        color: '#3B82F6'
      },
      {
        icon: 'Activity',
        title: 'Transparent MLOps',
        stat: '24/7',
        statLabel: 'Monitoring',
        description: 'Live dashboards, proactive alerts, and clear communication so you always know how your models are performing in production.',
        color: '#10B981'
      },
      {
        icon: 'TrendingUp',
        title: 'KPI-Driven AI Roadmaps',
        stat: 'ROI',
        statLabel: 'First',
        description: 'Every experiment is tied to hard metrics—revenue, efficiency, or risk reduction—and we shut down anything that doesn\'t move the needle.',
        color: '#F59E0B'
      },
      {
        icon: 'Zap',
        title: 'Production-Ready Experiments',
        stat: '2×',
        statLabel: 'Faster Releases',
        description: 'Reusable pipelines, feature stores, and model templates help you ship AI features in weeks instead of quarters.',
        color: '#8B5CF6'
      },
      {
        icon: 'Shield',
        title: 'Robust & Safe Models',
        stat: '99.9%',
        statLabel: 'Reliability',
        description: 'Rigorous evaluation, guardrails, and drift monitoring keep your AI accurate, compliant, and on-brand as data and behavior evolve.',
        color: '#EF4444'
      },
      {
        icon: 'Unlock',
        title: 'Outcome Ownership',
        stat: '100%',
        statLabel: 'Vendor-Neutral',
        description: 'We work across clouds, LLMs, and tools—no lock-in, just solutions—and stay accountable for outcomes, not just model handovers.',
        color: '#06B6D4'
      }
    ]
  },
  ctaSection: {
    icon: 'Brain',
    title: 'Ready to deploy production AI?',
    description: 'Let\'s align on business objectives, technical requirements, and success metrics. Our AI teams integrate with your workflow within days.',
    backgroundImage: '/images/CTA-images/AI.png',
    primaryCTA: {
      text: 'Start AI discovery',
      link: '/contact',
      icon: 'Brain'
    },
    secondaryCTA: {
      text: 'View AI case studies',
      link: '/contact',
      icon: 'Eye'
    }
  },
  seoMetadata: {
    title: 'AI & ML Services by Top AI Consulting Company | Altiora',
    description: 'Transform your business with cutting-edge AI & Machine Learning services. From generative AI to predictive analytics, we deliver production-ready solutions that drive real ROI.',
    keywords: [
      'AI services',
      'machine learning',
      'artificial intelligence',
      'AI consulting',
      'deep learning',
      'computer vision',
      'natural language processing',
      'MLOps',
      'generative AI',
      'predictive analytics',
      'AI solutions',
      'LLM',
      'RAG systems',
      'agentic AI'
    ]
  }
};

async function seedAIMLPage() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;
    
    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB successfully');

    // Check if page already exists
    const existingPage = await AIMLServicePage.findOne({ pageSlug: 'ai-ml-main' });

    if (existingPage) {
      console.log('AI/ML page already exists. Updating...');
      await AIMLServicePage.findOneAndUpdate(
        { pageSlug: 'ai-ml-main' },
        aimlPageData,
        { new: true, runValidators: true }
      );
      console.log('✅ AI/ML service page updated successfully!');
    } else {
      console.log('Creating new AI/ML service page...');
      await AIMLServicePage.create(aimlPageData);
      console.log('✅ AI/ML service page created successfully!');
    }

    console.log('\n📊 Page Details:');
    console.log('- Page Slug: ai-ml-main');
    console.log('- Services Count:', aimlPageData.servicesSection.services.length);
    console.log('- Workflow Steps:', aimlPageData.howWeWorkSection.steps.length);
    console.log('- Outcomes:', aimlPageData.outcomesSection.outcomes.length);
    console.log('- Trend Portals:', aimlPageData.trendsSection.portals.length);

  } catch (error) {
    console.error('❌ Error seeding AI/ML page:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('\n✅ Database connection closed');
  }
}

// Run the seed function
seedAIMLPage();
