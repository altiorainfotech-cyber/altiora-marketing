require('dotenv').config();
const { MongoClient } = require('mongodb');

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.MONGODB_DB || 'test';
const COLLECTION_NAME = 'ai-ml-services';

if (!MONGODB_URI) {
  console.error('MONGODB_URI environment variable is required');
  process.exit(1);
}

const aiServicesROIData = {
  pageId: 'ai-services-that-ship-scale-and-prove-roi',
  title: 'AI Services that Ship, Scale, and Prove ROI',
  slug: 'ai-services-that-ship-scale-and-prove-roi',
  sections: {
    hero: {
      heading: 'From Strategy to Launch, ROI You Can<br /><span class="text-[#f4cc6f]">Audit</span>',
      subheading: 'Production-grade AI that delivers fast, scales reliably, and proves ROI—strategy to deployment with measurable business outcomes.',
      description: 'AI, Delivered—Fast, Scalable, Accountable',
      backgroundImage: '/images/agentic-ai/pillar/AI Services that Ship, Scale, and Prove ROI 1.png',
      imageAlt: 'AI Services that Ship, Scale, and Prove ROI',
      buttonText: 'Talk to Our AI Experts Today',
      buttonUrl: 'https://calendly.com/altiorainfotech/30min'
    },
    intro: {
      paragraph1: 'Artificial Intelligence (AI) is not just a new idea in today\'s very competitive business world; it\'s a must-have. Companies are under pressure to deliver faster, scale their operations smartly, and show that their AI investments are paying off.',
      paragraph2: 'We at Altiora Infotech are experts in AI development services that get things done quickly, grow easily, and show a return on investment. Our solutions use cutting-edge AI, sound business strategy, and strong implementation methods to help businesses change how they work, improve customer experiences, and grow in a way that lasts.'
    },
    whyAI: {
      title: 'Why AI Services Must Ship, Scale, and Prove ROI',
      description: 'A lot of companies have trouble with AI projects that take a long time to put into action, are hard to scale, or don\'t give measurable value. To deal with these problems, we focus on three main ideas:',
      points: [
        { title: 'Ship', description: 'Quickly send AI solutions that solve business problems right away.' },
        { title: 'Scale', description: 'Create systems that can handle more data, more complicated tasks, and more business growth.' },
        { title: 'Prove ROI', description: 'Show real business value, such as lower costs, higher sales, and more efficient operations.' }
      ]
    },
    services: {
      title: 'Our AI Service Offerings',
      description: 'At Altiora Infotech, our AI services are designed to deliver measurable impact across industries. Here is a full list of each service:',
      items: [
        {
          title: 'AI Strategy and Consulting',
          description: 'AI projects work best when they are in line with the goals of the business. We offer the following consulting services:',
          points: [
            'Business Process Analysis: Finding problems and places where things can be automated or improved.',
            'AI Feasibility Studies: Checking to see if proposed AI projects are technically and operationally possible.',
            'ROI Forecasting: Making predictions about possible financial and operational gains before putting them into action.',
            'Strategic Roadmaps: Making a step-by-step plan for how to use AI that fits with growth goals.'
          ],
          example: 'For example, a company that offers financial services used Altiora Infotech\'s AI development services to make it easier to spot fraud. We used data from past transactions to make a predictive model that cut down on false positives by 30%. This made operations run more smoothly and customers trust us more.',
          icon: 'FaLightbulb',
          color: 'from-blue-500 to-cyan-500'
        },
        {
          title: 'Custom AI Application Development',
          description: 'Every business has its own problems, and custom AI apps help solve them quickly:',
          points: [
            'Predictive Analytics: Guess what will happen in the future, such as trends, customer behavior, or the need for equipment maintenance.',
            'Intelligent Automation: Automate tasks that are repetitive and prone to mistakes to make them more accurate and productive.',
            'Computer Vision Applications: Find things, spot problems, or keep an eye on quality in manufacturing.',
            'Recommendation Engines: Make shopping, watching TV, and shopping online more personal for customers.'
          ],
          example: 'For instance, a store used Altiora Infotech\'s AI development services to make a custom AI recommendation engine. The engine raised the average order value and the conversion rate by 18% by looking at how customers acted and what they bought in the past.',
          icon: 'FaCode',
          color: 'from-purple-500 to-pink-500'
        },
        {
          title: 'Machine Learning and Deep Learning Solutions',
          description: 'Machine Learning (ML) and Deep Learning (DL) form the backbone of modern AI:',
          points: [
            'Supervised Learning: Use labeled datasets to guess what will happen (for example, guess when a customer will leave).',
            'Unsupervised Learning: Find patterns in data that aren\'t labeled (like market segmentation).',
            'Deep Neural Networks: Work with complicated, high-dimensional data like audio, video, or pictures',
            'Reinforcement Learning: Allow machines to make decisions on their own in changing situations.'
          ],
          example: 'For example, in manufacturing, ML models predicted equipment failure with 92% accuracy, which cut down on downtime and saved $500,000 a year in maintenance costs.',
          icon: 'FaBrain',
          color: 'from-green-500 to-emerald-500'
        },
        {
          title: 'Natural Language Processing (NLP)',
          description: 'NLP allows machines to understand, interpret, and respond to human language:',
          points: [
            'Chatbots & Virtual Assistants: Improve customer support and engagement.',
            'Sentiment Analysis: Analyze customer feedback to measure satisfaction and brand perception.',
            'Text Analytics: Summarize, categorize, and extract insights from unstructured text data.',
            'Language Translation: Support global operations with real-time translation.'
          ],
          example: 'Example: A telecom company deployed an AI chatbot that handled 60% of customer inquiries automatically, reducing support costs by 35% while improving response times.',
          icon: 'FaComments',
          color: 'from-yellow-500 to-orange-500'
        },
        {
          title: 'AI-Powered Automation',
          description: 'AI-driven automation streamlines business processes, improves accuracy, and reduces operational costs:',
          points: [
            'Robotic Process Automation (RPA): Combine automation with AI intelligence to handle repetitive tasks.',
            'Intelligent Workflows: Route tasks dynamically based on AI predictions and priorities.',
            'Decision Support Systems: Enable real-time, AI-driven decisions for business operations.'
          ],
          example: 'Example: An insurance company automated claims processing with AI, cutting manual handling time by 70% and accelerating claim approvals for customers.',
          icon: 'FaCog',
          color: 'from-red-500 to-pink-500'
        },
        {
          title: 'AI Analytics and Insights',
          description: 'Transform raw data into actionable insights that guide decisions and drive growth:',
          points: [
            'Predictive Analytics: Forecast demand, sales trends, and customer behavior.',
            'Prescriptive Analytics: Recommend optimal actions for operational or strategic decisions.',
            'Data Visualization: Present complex data in clear, actionable dashboards for decision-makers.'
          ],
          example: 'Example: A logistics company used AI analytics to optimize delivery routes, reducing fuel costs by 22% while improving on-time delivery rates.',
          icon: 'FaChartBar',
          color: 'from-indigo-500 to-purple-500'
        }
      ]
    },
    implementation: {
      title: 'Step-by-Step AI Implementation Strategies for Businesses',
      description: 'Successful AI implementation requires a structured, iterative approach:',
      steps: [
        'Define Business Objectives: Identify the challenges AI should solve and align them with strategic goals.',
        'Assess Data Readiness: Evaluate the quality, quantity, and accessibility of data.',
        'Select AI Approaches: Choose suitable algorithms and models (supervised, unsupervised, reinforcement learning, etc.).',
        'Design Architecture: Decide on cloud, on-premise, or hybrid deployment; ensure scalability.',
        'Develop and Train Models: Split data into training, validation, and testing sets; optimize model performance.',
        'Test and Validate: Ensure models perform reliably under real-world conditions.',
        'Deploy Solutions: Implement AI applications into production environments.',
        'Monitor and Optimize: Continuously track KPIs, retrain models, and refine strategies.',
        'Change Management and Training: Equip staff to adopt AI workflows effectively.',
        'Measure ROI and Scale: Evaluate financial and operational gains and expand successful initiatives across departments.'
      ]
    },
    technical: {
      title: 'Technical Insights into AI Models and Frameworks',
      description: 'AI solutions rely on robust algorithms and frameworks for efficiency and scalability:',
      insights: [
        {
          category: 'Machine Learning Models',
          desc: 'Linear regression, logistic regression, decision trees, random forests, support vector machines.'
        },
        {
          category: 'Deep Learning Models',
          desc: 'Convolutional Neural Networks (CNNs) for image tasks, Recurrent Neural Networks (RNNs) and LSTM for sequences, Generative Adversarial Networks (GANs) for synthetic data.'
        },
        {
          category: 'Reinforcement Learning',
          desc: 'Agents learn from the environment using reward functions to make optimal decisions.'
        },
        {
          category: 'Natural Language Processing Models',
          desc: 'Transformer-based models like BERT and GPT for advanced language understanding.'
        },
        {
          category: 'Frameworks & Tools',
          desc: 'TensorFlow, PyTorch, Scikit-learn, Keras, and cloud AI platforms for scalable deployments.'
        }
      ]
    },
    roi: {
      title: 'Measuring and Proving ROI',
      description: 'The success of AI is measured by its impact on business outcomes:',
      metrics: [
        { icon: 'FaChartLine', title: 'Cost Reduction', desc: 'Automating repetitive tasks and optimizing operations.' },
        { icon: 'FaBolt', title: 'Revenue Growth', desc: 'Predictive models drive personalized marketing and improved sales.' },
        { icon: 'FaCog', title: 'Operational Efficiency', desc: 'Reduce errors, improve resource utilization, and shorten process times.' },
        { icon: 'FaUsers', title: 'Customer Experience', desc: 'Enhance personalization, engagement, and satisfaction.' }
      ],
      example: 'Example: A retail company using AI for predictive inventory management reduced stockouts by 40%, resulting in a 15% increase in sales and a clear ROI within six months.'
    },
    faq: {
      title: 'Frequently Asked Questions',
      description: 'Expert answers to common AI development questions',
      items: [
        {
          question: 'What problems do your AI services solve?',
          answer: 'We reduce operational bottlenecks, improve decision speed, and unlock new revenue by deploying models that automate workflows, augment teams, and surface actionable insights.'
        },
        {
          question: 'Who is this for?',
          answer: 'Growth-focused companies that want production-grade AI without guesswork—from startups validating an MVP to enterprises modernizing data and processes.'
        },
        {
          question: 'What do I get as deliverables?',
          answer: 'A scoped solution with model artifacts, integration code, prompts/pipelines, evaluation reports, security hardening, documentation, and handover runbooks.'
        },
        {
          question: 'How do projects typically run?',
          answer: 'Discover goals and data → Design the architecture and success metrics → Build and integrate → Evaluate and harden → Launch → Monitor and improve with clear sprint reviews.'
        },
        {
          question: 'What is the usual timeline?',
          answer: 'Discovery in 1–2 weeks, MVP in 4–8 weeks, and iterative improvements in 2–3 week sprints based on usage data and KPIs.'
        }
      ]
    },
    cta: {
      title: 'Ship AI That Scales & Proves ROI',
      description: 'AI is a means to real business outcomes—not a science project. At Altiora Infotech, we pair deep AI engineering with clear commercial thinking to deliver solutions that are accurate, scalable, and aligned to your KPIs.',
      buttonText: 'Schedule AI Consultation',
      buttonUrl: 'https://calendly.com/altiorainfotech/30min',
      backgroundImage: '/images/agentic-ai/pillar/AI Services that Ship, Scale, and Prove ROI 2 (CTA).png',
      imageAlt: 'AI Services CTA Background'
    }
  },
  seo: {
    title: 'AI Services that Ship, Scale, and Prove ROI | Altiora Infotech',
    description: 'Production-grade AI that delivers fast, scales reliably, and proves ROI—strategy to deployment with measurable business outcomes.',
    keywords: 'ai services, ai development, machine learning, ai consulting, ai roi, scalable ai, ai strategy',
    ogImage: '/images/ai-services-roi-og.jpg'
  },
  createdAt: new Date(),
  updatedAt: new Date(),
  status: 'published'
};

async function seedAIServicesROI() {
  const client = new MongoClient(MONGODB_URI);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);
    
    // Check if document already exists
    const existing = await collection.findOne({ pageId: 'ai-services-that-ship-scale-and-prove-roi' });
    
    if (existing) {
      // Update existing document
      const result = await collection.updateOne(
        { pageId: 'ai-services-that-ship-scale-and-prove-roi' },
        { $set: { ...aiServicesROIData, updatedAt: new Date() } }
      );
      console.log('Updated existing ai-services-roi document:', result.modifiedCount);
    } else {
      // Insert new document
      const result = await collection.insertOne(aiServicesROIData);
      console.log('Inserted new ai-services-roi document:', result.insertedId);
    }
    
    console.log('✅ AI Services ROI data seeded successfully!');
    console.log(`📄 Document stored in: ${DB_NAME}.${COLLECTION_NAME}`);
    console.log(`🔗 Page ID: ai-services-that-ship-scale-and-prove-roi`);
    
  } catch (error) {
    console.error('❌ Error seeding AI Services ROI data:', error.message);
  } finally {
    await client.close();
  }
}

// Run the seed function
seedAIServicesROI();