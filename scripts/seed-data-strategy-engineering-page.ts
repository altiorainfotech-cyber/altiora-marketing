import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

// Load environment variables from .env (falls back to .env.local if needed)
dotenv.config();

const dataStrategyEngineeringPageData = {
  pageId: 'data-strategy-and-engineering',
  pageName: 'Data Strategy & Engineering - Altiora Infotech',
  route: '/services/ai-ml/data-strategy-and-engineering-page',
  status: 'published',
  seo: {
    title: 'Data Strategy & Engineering - Altiora Infotech',
    description: 'Modernize your stack with data strategy & engineering at Altiora Infotech. We specialize in data engineering services and data architecture consulting to scale',
    ogImage: '/images/agentic-ai/Data Strategies and Engineering-2 (2).png'
  },
  sections: {
    hero: {
      backgroundImage: '/images/agentic-ai/Data Strategies and Engineering-2 (2).png',
      badge: 'ALTIORA INFOTECH',
      badgeIcon: 'FaRocket',
      heading: 'Data Strategy & Engineering',
      headingHighlight: '',
      highlightColor: '#f4cc6f',
      subheading: 'Turn raw data into reliable decisions.',
      cta: {
        text: 'Get Started',
        link: '/contact',
        icon: 'FaRocket',
        primary: true,
        external: false
      }
    },
    intro: {
      title: 'Organize & Enable',
      description: 'Power your roadmap with AI & ML Services by a Top AI Consulting Company. We design the right blend of compute, storage, networking, and tooling to keep performance crisp and costs in check across any environment, with end-to-end observability and smart guardrails so teams move from prototypes to production minus the surprises. We pair this with modern data foundations for analytics and AI: pragmatic strategies and resilient engineering pipelines that make data trustworthy, governed, and easy to use. From source systems to lakehouse and warehouse, from batch to streaming, we deliver clean, well-modeled, policy-aware data that teams can discover, access, and apply at the right time—powering analytics and AI with confidence.',
      linkText: 'AI & ML Services',
      linkHref: '/services/ai-ml/'
    },
    whyChoose: {
      title: 'Why Choose Our Data Strategy and Engineering?',
      subtitle: 'Expertise that meets real business needs.',
      items: [
        {
          title: 'Business-aligned roadmaps with clear KPIs and ownership',
          text: 'Business-aligned roadmaps with clear KPIs and ownership',
          icon: 'FaBullseye'
        },
        {
          title: 'Robust architecture across lakehouse, warehouse, and streaming',
          text: 'Robust architecture across lakehouse, warehouse, and streaming',
          icon: 'FaCog'
        },
        {
          title: 'Built-in governance, lineage, quality checks, and SLAs',
          text: 'Built-in governance, lineage, quality checks, and SLAs',
          icon: 'FaBook'
        },
        {
          title: 'Transparent documentation and handover your teams can run',
          text: 'Transparent documentation and handover your teams can run',
          icon: 'FaFileAlt'
        },
        {
          title: 'Ongoing support for performance, cost, and reliability',
          text: 'Ongoing support for performance, cost, and reliability',
          icon: 'FaSync'
        },
        {
          title: 'Security-first design with compliance and access controls baked in',
          text: 'Security-first design with compliance and access controls baked in',
          icon: 'FaShieldAlt'
        }
      ]
    },
    serviceOfferings: {
      title: 'Our Data Engineering Services',
      subtitle: 'Comprehensive solutions to build and operate modern data platforms.',
      services: [
        {
          title: 'Data Strategy and Governance',
          desc: 'Operating model, roles, policies, catalog, lineage, and stewardship.',
          icon: 'FaBook'
        },
        {
          title: 'Architecture and Modeling',
          desc: 'Lakehouse and warehouse patterns, dimensional and semantic models.',
          icon: 'FaCog'
        },
        {
          title: 'Pipelines (ELT and ETL)',
          desc: 'Reliable ingestion from SaaS, databases, files, and APIs with scheduling.',
          icon: 'FaSync'
        },
        {
          title: 'Streaming and CDC',
          desc: 'Near-real-time data flows with exactly-once semantics where required.',
          icon: 'FaServer'
        },
        {
          title: 'Data Quality and Observability',
          desc: 'Contracts, tests, anomaly detection, SLAs, and alerting.',
          icon: 'FaEye'
        },
        {
          title: 'Warehouses and Lakehouse Enablement',
          desc: 'Performance tuning, partitioning, indexing, and workload isolation.',
          icon: 'FaDatabase'
        },
        {
          title: 'Feature Stores and Vector Stores',
          desc: 'Reusable features for ML and embeddings for retrieval-augmented AI.',
          icon: 'FaMicrochip'
        },
        {
          title: 'Master and Reference Data',
          desc: 'Golden records, survivorship rules, and synchronization.',
          icon: 'FaCodeBranch'
        },
        {
          title: 'Security, Privacy, and Compliance',
          desc: 'RBAC, masking, encryption, PII controls, and audit trails.',
          icon: 'FaLock'
        }
      ]
    },
    process: {
      title: 'Our Data Strategy and Engineering Process',
      subtitle: 'A systematic path from assessment to dependable operations.',
      steps: [
        {
          step: 1,
          title: 'Scoping and Discovery',
          description: 'Understand goals, stakeholders, sources, pain points, and metrics.',
          details: 'We clarify objectives, map stakeholders and sources, surface pain points, and lock metrics to guide delivery.',
          icon: 'Search'
        },
        {
          step: 2,
          title: 'Architecture and Roadmap',
          description: 'Define target state, governance model, backlog, and success measures.',
          details: 'We shape target-state architecture, governance model, a prioritized backlog, and measurable success criteria.',
          icon: 'Map'
        },
        {
          step: 3,
          title: 'Build Foundations',
          description: 'Stand up environments, identity, networking, and dev standards.',
          details: 'We establish environments, IAM, networking, and development standards to enable safe velocity.',
          icon: 'Building2'
        },
        {
          step: 4,
          title: 'Pipelines and Modeling',
          description: 'Implement ingestion, transforms, data contracts, and semantic layers.',
          details: 'We deliver ELT/ETL pipelines, transforms, contracts, and semantic layers aligned to analytics and AI.',
          icon: 'Database'
        },
        {
          step: 5,
          title: 'Validation and Hardening',
          description: 'Quality checks, performance tuning, documentation, and training.',
          details: 'We validate quality and performance, produce clear documentation, and train teams for steady operations.',
          icon: 'CheckCircle'
        },
        {
          step: 6,
          title: 'Operate and Improve',
          description: 'Monitor reliability and cost, iterate on models and workloads.',
          details: 'We monitor SLAs and spend, and iterate on models and workloads to sustain value.',
          icon: 'RotateCcw'
        }
      ]
    },
    whyWorkWithUs: {
      title: 'Why Work With Altiora Infotech?',
      subtitle: 'Partner with a team focused on trust, scale, and measurable impact.',
      benefits: [
        {
          title: 'Security First Approach',
          text: 'Privacy, policy, and compliance embedded from day one.',
          icon: 'FaShieldAlt'
        },
        {
          title: 'Transparent Collaboration',
          text: 'We co-create with your teams and explain trade-offs clearly.',
          icon: 'FaUsers'
        },
        {
          title: 'Holistic Coverage',
          text: 'Strategy, engineering, analytics, and AI supported end to end.',
          icon: 'FaCog'
        },
        {
          title: 'Long-term Partnership',
          text: 'Roadmaps for growth, modernization, and skill enablement.',
          icon: 'FaHandshake'
        },
        {
          title: 'Trusted Delivery',
          text: 'Clear outcomes that stakeholders can see and measure.',
          icon: 'FaCheck'
        },
        {
          title: 'Continuous Innovation',
          text: 'We embrace emerging technologies to keep your solutions ahead of the curve.',
          icon: 'FaRocket'
        }
      ]
    },
    cta: {
      title: 'Build Your Data Foundation',
      description: 'Give every team trusted, timely data. We will align your strategy, implement the platform, and keep it running with clear SLAs and cost control.',
      additionalDescription: 'From initial assessment to ongoing optimization, we partner with you every step of the way to ensure your data foundation scales with your business needs and delivers measurable ROI.',
      backgroundImage: '/images/agentic-ai/cta/Data.png',
      icon: 'FaEye',
      primaryCTA: {
        text: 'Schedule Data Strategy Workshop',
        link: 'https://calendly.com/altiorainfotech/30min',
        icon: 'FaRocket',
        external: true
      },
      secondaryCTA: {
        text: 'Get Quote',
        link: '/contact',
        icon: 'FaEye'
      }
    }
  }
};

async function seedDataStrategyEngineeringPage() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI environment variable is not defined');
    process.exit(1);
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

  const dbName = process.env.MONGODB_DB || process.env.MONGODB_DB_NAME || 'test';
  const db = client.db(dbName);
    const collection = db.collection('ai-ml-services');

    // Delete existing data for the pageId
    const del = await collection.deleteOne({ pageId: 'data-strategy-and-engineering' });
    if (del.deletedCount && del.deletedCount > 0) {
      console.log('Deleted existing data strategy page data');
    }

    // Insert new document
    const insertResult = await collection.insertOne(dataStrategyEngineeringPageData as any);
    console.log('Data Strategy & Engineering page seeded successfully!');
    console.log('InsertedId:', insertResult.insertedId.toString());
  } catch (error) {
    console.error('Error seeding Data Strategy & Engineering page:', error);
    process.exit(1);
  } finally {
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

seedDataStrategyEngineeringPage();
