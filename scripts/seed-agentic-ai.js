require('dotenv').config();
const { MongoClient } = require('mongodb');

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.MONGODB_DB || 'test';
const COLLECTION_NAME = 'ai-ml-services';

if (!MONGODB_URI) {
  console.error('MONGODB_URI environment variable is required');
  process.exit(1);
}

const agenticAIData = {
  pageId: 'agentic-ai',
  title: 'Agentic AI — Building Autonomous AI Agents',
  slug: 'agentic-ai',
  sections: {
    hero: {
      heading: '<span class="text-[#f4cc6f]">Agentic AI</span> — Building Autonomous AI Agents',
      subheading: 'What is Agentic AI—and why it matters now',
      description: 'Agentic AI transforms static chat models into proactive digital teammates.',
      backgroundImage: '/images/agentic-ai/Agentic AI-2.png',
      imageAlt: 'Agentic AI — Automate what matters',
      buttonText: 'Get Started',
      buttonUrl: '/contact'
    },
    intro: {
      paragraph1: 'Agentic AI transforms static chat models into proactive digital teammates. These systems understand what is going on, plan what they will perform next, use the right tools, and work towards clear business goals.',
      paragraph2: 'Instead of waiting for prompts, they break goals down into smaller tasks, call APIs, look for and get information, work with other agents, and learn from the results. This means shorter cycle times, fewer manual handoffs, and measurable improvements across customer service, revenue operations, and back-office tasks.'
    },
    services: {
      title: 'What we Deliver',
      description: 'We turn Agentic AI from a concept into a reliable business system. Our team translates your goals into a clear agent architecture with the right models, tools, data flows, and safeguards.',
      items: [
        {
          title: 'Strategy & Solution Design',
          description: 'We identify the most impactful use cases, set success metrics, choose models and tools, and establish guidelines that match your compliance needs.',
          icon: 'Goal'
        },
        {
          title: 'Custom Agent Development',
          description: 'We create single or multi-agent systems for tasks such as customer support triage, lead qualification, research and summarization, back-office execution, and decision support.',
          icon: 'Bot'
        },
        {
          title: 'Systems Integration & Orchestration',
          description: 'Agents connect to your CRM, ERP, helpdesk, data warehouse, and SaaS tools. We ensure safe tool use, including function calls and API gateways.',
          icon: 'PlugZap'
        },
        {
          title: 'Optimization, Safety & Cost Control',
          description: 'We adjust prompts, plans, and tools for accuracy and speed. We include policy checks, red-team tests, and audit logs.',
          icon: 'Shield'
        },
        {
          title: 'Behavior & Skill Training',
          description: 'Beyond basic conversation, we define roles, communication style, escalation rules, and specialized skills.',
          icon: 'ClipboardList'
        },
        {
          title: 'Support, MLOps, and Governance',
          description: 'We deliver dashboards to monitor throughput, reasons for success or failure, hallucination flags, and spending.',
          icon: 'ServerCog'
        }
      ]
    },
    valueAreas: {
      title: 'Where Agentic AI delivers value',
      description: 'Targeted offerings to operationalize Agentic AI at scale.',
      items: [
        {
          title: 'Customer Experience',
          description: 'Instant triage, step-by-step troubleshooting, proactive follow-ups, and multilingual support that works seamlessly with human agents for sensitive cases.',
          icon: 'Users'
        },
        {
          title: 'Revenue Operations',
          description: 'SDR-style lead research, qualification, and appointment setting. This includes CRM updates and personalized outreach at scale.',
          icon: 'LineChart'
        },
        {
          title: 'Operations & Finance',
          description: 'Policy-aware data entry, reconciliations, invoice checks, and report preparation with tamper-evident logs for audits.',
          icon: 'FileText'
        },
        {
          title: 'Knowledge Work',
          description: 'Literature reviews, competitor tracking, request-for-proposal assembly, and narrative plus slide drafts based on your sources.',
          icon: 'BookOpenCheck'
        }
      ]
    },
    assistants: {
      title: 'Today\'s leading AI assistants you can plug in',
      items: [
        {
          title: 'OpenAI ChatGPT',
          description: 'GPT-5 & o3-pro modes. Flagship reasoning and think-longer options for complex tasks and tool use; excellent coding and analysis.',
          icon: 'SiOpenai'
        },
        {
          title: 'Google Gemini 2.x',
          description: 'Multimodal, agent-oriented updates and long-context variants; accessible via Gemini and Vertex AI.',
          icon: 'SiGoogle'
        },
        {
          title: 'Microsoft Copilot',
          description: 'Integrated across Microsoft 365 with enterprise controls—ideal for knowledge work inside the Office ecosystem.',
          icon: 'FaMicrosoft'
        },
        {
          title: 'Meta AI',
          description: 'Consumer-scale assistant across apps with rapidly expanding creative and multimodal features.',
          icon: 'SiMeta'
        },
        {
          title: 'Perplexity',
          description: 'Research-first assistant with iterative Deep Research, citations, and an AI browser built for web workflows.',
          icon: 'ArrowRight'
        },
        {
          title: 'xAI Grok',
          description: 'Real-time search, strong tool use, and fast iteration aimed at frontier-level performance.',
          icon: 'FaRocket'
        }
      ]
    },
    faq: {
      title: 'FAQ',
      description: 'Expert answers to common Agentic AI questions',
      items: [
        {
          question: 'What sets chatbots apart from agentic AI?',
          answer: 'Agentic systems plan and act using tools, chaining steps and improving with feedback—accelerating work while reducing manual effort.'
        },
        {
          question: 'Is it okay to let agents do their jobs?',
          answer: 'Yes, within guardrails. We whitelist tools, set budgets, require approvals for sensitive actions, and keep tamper-evident logs for audits.'
        },
        {
          question: 'How quickly can we go live?',
          answer: 'A focused pilot usually ships in weeks. Scaling then adds tools, data sources, and controls without changing the core.'
        },
        {
          question: 'What about security and compliance?',
          answer: 'We implement role-based access, encryption, audit trails, and compliance frameworks to ensure your agents operate safely and transparently.'
        },
        {
          question: 'How do you measure success?',
          answer: 'We track both technical metrics (response time, accuracy) and business KPIs (conversion rates, cost savings, customer satisfaction) to prove ROI.'
        }
      ]
    },
    whyChoose: {
      title: 'Why choose us',
      description: 'We build for quantified outcomes—increased CSAT, faster turnaround, better conversion, fewer manual steps, and clear ROI. Our architecture is secure by design, explainable step by step, and maintainable so your teams can continue evolving agents long after launch.'
    },
    cta: {
      title: 'Ready to turn AI experiments into real, lasting leverage?',
      description: 'Book a consultation. We\'ll scope a pilot that ships in weeks and pays back within quarters, complete with a tailored agent architecture, an impact model, and a rollout plan for your stack.',
      buttonText: 'Book Agentic AI Consultation',
      buttonUrl: 'https://calendly.com/altiorainfotech/30min',
      backgroundImage: '/images/agentic-ai/cta/Agentic-cta.png'
    }
  },
  seo: {
    title: 'Agentic AI Solutions — Autonomous AI Agents | Altiora Infotech',
    description: 'Build autonomous AI agents that plan, act, and learn. From strategy to deployment, we deliver agentic AI systems that drive measurable business outcomes.',
    keywords: 'agentic ai, autonomous ai agents, ai automation, multi-agent systems, ai orchestration, enterprise ai, ai integration',
    ogImage: '/images/agentic-ai/agentic-ai-og.jpg'
  },
  createdAt: new Date(),
  updatedAt: new Date(),
  status: 'published'
};

async function seedAgenticAI() {
  const client = new MongoClient(MONGODB_URI);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);
    
    // Check if document already exists
    const existing = await collection.findOne({ pageId: 'agentic-ai' });
    
    if (existing) {
      // Update existing document
      const result = await collection.updateOne(
        { pageId: 'agentic-ai' },
        { $set: { ...agenticAIData, updatedAt: new Date() } }
      );
      console.log('Updated existing agentic-ai document:', result.modifiedCount);
    } else {
      // Insert new document
      const result = await collection.insertOne(agenticAIData);
      console.log('Inserted new agentic-ai document:', result.insertedId);
    }
    
    console.log('✅ Agentic AI data seeded successfully!');
    console.log(`📄 Document stored in: ${DB_NAME}.${COLLECTION_NAME}`);
    console.log(`🔗 Page ID: agentic-ai`);
    
  } catch (error) {
    console.error('❌ Error seeding agentic AI data:', error.message);
  } finally {
    await client.close();
  }
}

// Run the seed function
seedAgenticAI();