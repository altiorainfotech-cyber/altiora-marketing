const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const doc = {
  pageId: 'machine-learning',
  pageName: 'Machine Learning - Altiora Infotech',
  route: '/services/ai-ml/machine-learning',
  status: 'published',
  seo: {
    title: 'Machine Learning - Altiora Infotech',
    description: 'Production-ready machine learning development, MLOps, and model governance from Altiora Infotech.',
    ogImage: '/images/agentic-ai/Machine Learning AI Model-1 (2).png'
  },
  sections: {
    hero: {
      backgroundImage: '/images/agentic-ai/Machine Learning AI Model-1 (2).png',
      badge: 'ALTIORA INFOTECH',
      badgeIcon: 'FaRocket',
      heading: 'Machine Learning Development',
      headingHighlight: '',
      highlightColor: '#f1c86b',
      subheading: 'Predict, personalize, and optimize with models built for outcomes.',
      cta: { text: 'Get Started', link: '/contact', icon: 'FaRocket', primary: true, external: false }
    },
    intro: {
      title: 'Learn & Decide',
      description: 'Production ML that turns data into measurable business impact. We scope the right signals, design robust features, train and evaluate models, and deploy them with monitoring and governance.',
      linkText: 'AI & ML Services',
      linkHref: '/services/ai-ml/'
    },
    whyChoose: {
      title: 'Why Choose Our Machine Learning Services?',
      subtitle: 'Delivery focused on value, quality, and maintainability.',
      items: [
        { title: 'Hands-on expertise across classical ML and deep learning', text: '', icon: 'FaBrain' },
        { title: 'Business-aligned modeling with clear success metrics', text: '', icon: 'FaBullseye' },
        { title: 'Strong MLOps: experiment tracking, registries, CI/CD, monitoring', text: '', icon: 'FaCog' },
        { title: 'Transparent reports with feature importance and explainability', text: '', icon: 'FaEye' },
        { title: 'Ongoing support for drift, retraining, and model improvements', text: '', icon: 'FaSync' },
        { title: 'Scalable deployment solutions', text: '', icon: 'FaRocket' }
      ]
    },
    serviceOfferings: {
      title: 'Our Machine Learning Services',
      subtitle: 'Targeted offerings to operationalize ML at scale.',
      services: [
        { title: 'Predictive Modeling', desc: 'Classification and regression for risk, demand, conversion, and pricing.', icon: 'FaChartLine' },
        { title: 'Forecasting & Anomaly Detection', desc: 'Time-series models for revenue, inventory, and incident prevention.', icon: 'FaEye' },
        { title: 'Recommenders & Personalization', desc: 'Ranking, next-best-action, and dynamic content strategies.', icon: 'FaUsers' },
        { title: 'Optimization Engines', desc: 'Budget, routing, and allocation with constraints and fairness checks.', icon: 'FaCog' },
        { title: 'Feature Engineering & Stores', desc: 'Reusable features, data quality, and lineage for faster iteration.', icon: 'FaSync' },
        { title: 'Model Explainability & Governance', desc: 'SHAP, bias tests, policy controls, and audit trails.', icon: 'FaShieldAlt' },
        { title: 'Real-time & Batch Inference', desc: 'Low-latency APIs and scheduled scoring with autoscaling.', icon: 'FaRocket' },
        { title: 'Experimentation & Uplift', desc: 'A/B frameworks, attribution, and lift measurement.', icon: 'FaCheck' },
        { title: 'Enterprise Integrations', desc: 'Connect ML to CRM, DWH, ticketing, and analytics.', icon: 'FaHandshake' }
      ]
    },
    process: {
      title: 'Our Machine Learning Process',
      subtitle: 'A clear path from idea to dependable production.',
      steps: [
        { step: 1, title: 'Scoping & Kickoff', description: 'Define goals, users, data sources, and success metrics.', details: 'We clarify objectives and lock metrics.', icon: 'Target' },
        { step: 2, title: 'Data & Feature Design', description: 'Profile quality, engineer signals, and set contracts and SLAs.', details: 'Design features and contracts.', icon: 'Database' },
        { step: 3, title: 'Model Development', description: 'Train, tune, and validate with cross-validation and holdouts.', details: 'Modeling and evaluation.', icon: 'Cpu' },
        { step: 4, title: 'Evaluation & Explainability', description: 'Calibrate metrics, fairness checks, and business impact mapping.', details: 'Explainability and fairness checks.', icon: 'CheckCircle' },
        { step: 5, title: 'Deployment & Hardening', description: 'Serve via APIs or jobs; enable CI/CD, monitoring, and alerts.', details: 'Deployment and monitoring.', icon: 'Shield' },
        { step: 6, title: 'Operate & Improve', description: 'Track drift and decay; retrain, refine features, and optimize cost/latency.', details: 'Ongoing operations and optimization.', icon: 'RotateCcw' }
      ]
    },
    whyWorkWithUs: {
      title: 'Why Work With Altiora Infotech?',
      subtitle: 'A partner invested in your long-term ML success.',
      benefits: [
        { title: 'Security First Approach', text: 'Privacy, policy, and compliance embedded from day one.', icon: 'FaShieldAlt' },
        { title: 'Transparent Collaboration', text: 'We co-create with your teams and explain trade-offs clearly.', icon: 'FaUsers' },
        { title: 'Holistic Coverage', text: 'Strategy, engineering, analytics, and AI supported end to end.', icon: 'FaCog' },
        { title: 'Long-term Partnership', text: 'Roadmaps for growth, modernization, and skill enablement.', icon: 'FaHandshake' },
        { title: 'Trusted Delivery', text: 'Clear outcomes that stakeholders can see and measure.', icon: 'FaCheck' },
        { title: 'Continuous Innovation', text: 'We embrace emerging technologies to keep your solutions ahead of the curve.', icon: 'FaRocket' }
      ]
    },
    cta: {
      title: 'Put Your Data to Work',
      description: 'Deploy models that move metrics. We’ll identify the right use cases, build the pipeline, and keep performance improving in production.',
      additionalDescription: 'From initial prototyping to full-scale deployment, we partner with you to ensure seamless integration.',
      backgroundImage: '/images/agentic-ai/cta/Machine-cta',
      icon: 'FaChartLine',
      primaryCTA: { text: 'Schedule ML Consultation', link: 'https://calendly.com/altiorainfotech/30min', icon: 'FaRocket', external: true },
      secondaryCTA: { text: 'Get Quote', link: '/contact', icon: 'FaEye' }
    }
  }
};

async function seed() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI not set');
    process.exit(1);
  }
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const dbName = process.env.MONGODB_DB || process.env.MONGODB_DB_NAME || 'test';
    const db = client.db(dbName);
    const col = db.collection('ai-ml-services');
    const res = await col.updateOne({ pageId: doc.pageId }, { $set: doc }, { upsert: true });
    if (res.upsertedId) {
      console.log('Inserted with id', res.upsertedId._id.toString());
    } else {
      console.log('Updated existing document or no-op:', res.result || res);
    }
  } catch (err) {
    console.error('Seed error', err);
    process.exit(1);
  } finally {
    await client.close();
  }
}

seed();
