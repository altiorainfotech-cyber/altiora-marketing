import mongoose from 'mongoose';
import Web3Service from '../src/lib/models/Web3Service';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const web3MarketingPageData = {
  pageId: 'web3-marketing',
  pageName: 'Web3 Marketing Services',
  route: '/services/web3/web3-marketing',
  status: 'published',
  seo: {
    title: 'Web3 Marketing Services | Altiora Infotech',
    description: 'From Awareness to Adoption—We Power Web3 Growth. Expert Web3 marketing services from Altiora Infotech.',
    ogImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Web3_Marketing_Services___Build_Credibility_Community_Conversion-1_grwc4v.png'
  },
  sections: {
    hero: {
      backgroundImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Web3_Marketing_Services___Build_Credibility_Community_Conversion-1_grwc4v.png',
      badge: 'ALTIORA INFOTECH',
      badgeIcon: 'FaCode',
      heading: 'Web3 Marketing',
      headingHighlight: 'Services',
      highlightColor: '#f4cc6f',
      subheading: 'From Awareness to Adoption—We Power Web3 Growth',
      cta: {
        text: 'Get Started',
        link: '/contact',
        primary: true,
        icon: 'FaRocket'
      }
    },
    whatIs: {
      title: 'The Power of Authentic Web3 Marketing',
      subtitle: 'Marketing in Web3 isn\'t about buzz—it\'s about credibility, community, and sustained visibility.',
      icon: 'FaBullhorn',
      paragraphs: [
        "At Altiora Infotech, we craft integrated marketing strategies that merge storytelling, growth tactics, and technical insight. Our approach builds trust through transparency, engages communities authentically, and drives adoption through measurable, performance-driven campaigns.",
        "From NFT launches and token campaigns to SEO, PR, and paid acquisition, we help your project reach the right audiences with precision and authenticity—turning early adopters into loyal users and advocates."
      ]
    },
    whyMatter: {
      title: 'Why Web3 Marketing Matters',
      subtitle: 'Unique benefits that transform how projects connect with their audiences.',
      cards: [
        {
          title: 'Technical Advantages',
          icon: 'FaShieldAlt',
          iconGradient: ['#f4cc6f', '#e6b85c'],
          items: [
            { text: 'Building trust through transparency and authenticity' },
            { text: 'Community-driven growth and engagement' },
            { text: 'Data-driven campaigns with measurable ROI' },
            { text: 'Cross-platform integration across Web3 ecosystems' }
          ]
        },
        {
          title: 'Business Benefits',
          icon: 'FaChartLine',
          iconGradient: ['#06b6d4', '#3b82f6'],
          items: [
            { text: 'Accelerated user acquisition and retention' },
            { text: 'Enhanced brand credibility in competitive markets' },
            { text: 'Sustainable growth through community building' },
            { text: 'Global reach with localized messaging strategies' }
          ]
        }
      ]
    },
    whyChoose: {
      title: 'Continuous Improvement',
      subtitle: 'Metrics collection, user feedback, iterative releases, protocol enhancements.',
      featureCards: [],
      commitmentCard: {
        icon: 'FaBullhorn',
        title: 'Our Commitment to Marketing Excellence',
        description: "We don't just run campaigns at Altiora Infotech; we build marketing ecosystems. We focus on making sure that Web3 marketing fits with your real business goals, doesn't compromise on authenticity, and can scale as your community grows."
      }
    },
    serviceOfferings: {
      title: 'Our Web3 Marketing Service Offerings',
      subtitle: 'Comprehensive marketing services for every Web3 need.',
      services: [
        { name: 'Content & Thought Leadership', icon: '/images/web3/blockchain/dApp.svg' },
        { name: 'SEO for Web3 Projects', icon: '/images/web3/blockchain/Smart Contract.svg' },
        { name: 'Paid Ads & PR Campaigns', icon: '/images/web3/blockchain/Token.svg' },
        { name: 'Explainer & Promo Videos', icon: '/images/web3/blockchain/DeFi.svg' },
        { name: 'NFT & Token Launch Campaigns', icon: '/images/web3/blockchain/NFT.svg' },
        { name: 'Community Growth & Engagement', icon: '/images/web3/blockchain/Blockchain.svg' },
        { name: 'Influencer Marketing', icon: '/images/web3/blockchain/Security.svg' },
        { name: 'Marketing Consulting', icon: '/images/web3/blockchain/Blockchain.svg' },
        { name: 'Analytics & Reporting', icon: '/images/web3/blockchain/dApp.svg' }
      ]
    },
    process: {
      title: 'Our Web3 Marketing Process',
      subtitle: 'A structured, transparent, and iterative process to transform your idea into a successful Web3 brand.',
      steps: [
        {
          step: 1,
          title: 'Discovery & Positioning',
          description: 'Stakeholder workshops, requirement gathering, use-case analysis, architecture planning, technology & risk evaluation.',
          icon: '🔍'
        },
        {
          step: 2,
          title: 'Design & Specification',
          description: 'Technical specifications, smart contract flow diagrams, UI/UX wireframes, gas & performance estimation.',
          icon: '📐'
        },
        {
          step: 3,
          title: 'Prototyping / PoC',
          description: 'Build MVP prototype, internal testing, demonstrate mechanics, validate assumptions.',
          icon: '⚡'
        },
        {
          step: 4,
          title: 'Development & Integration',
          description: 'Smart contract development, backend components, frontend dApp, wallet & oracle integration.',
          icon: '⚙️'
        },
        {
          step: 5,
          title: 'Security & Testing',
          description: 'Unit & integration tests, security audits, penetration testing, gas optimization.',
          icon: '🛡️'
        },
        {
          step: 6,
          title: 'Deployment & Launch',
          description: 'Testnet deployment, staging validation, mainnet launch, data migration.',
          icon: '🚀'
        },
        {
          step: 7,
          title: 'Post-Launch Support',
          description: 'Monitoring, bug fixes, upgrades, performance scaling, governance support.',
          icon: '📊'
        },
        {
          step: 8,
          title: 'Continuous Improvement',
          description: 'Metrics collection, user feedback, iterative releases, protocol enhancements.',
          icon: '🔄'
        }
      ],
      gradientColors: ['#f4cc6f', '#6EA8FE', '#00D4FF']
    },
    whyWork: {
      title: 'Why Work With Altiora Infotech?',
      subtitle: 'Partner with Web3 marketing experts who deliver results.',
      benefits: [
        {
          title: 'Expertise',
          subtitle: 'Web3 & Marketing',
          description: 'Web3 & Marketing Domain Expertise – Deep knowledge in Web3, blockchain, DeFi, NFT, and ecosystem dynamics.',
          icon: 'FaBullhorn',
          gradient: ['#3b82f6', '#06b6d4']
        },
        {
          title: 'Custom',
          subtitle: 'Solutions',
          description: 'Custom Solutions – Tailored marketing strategies, not templates; each campaign fits your specific business logic.',
          icon: 'FaTools',
          gradient: ['#a855f7', '#ec4899']
        },
        {
          title: 'End-to-End',
          subtitle: 'Service',
          description: 'End-to-End Service – Complete service from strategy to execution and optimization.',
          icon: 'FaCode',
          gradient: ['#22c55e', '#10b981']
        },
        {
          title: 'Data-Driven',
          subtitle: 'Approach',
          description: 'Data-Driven Approach – Rigorous analytics and performance metrics embedded in every layer.',
          icon: 'FaChartLine',
          gradient: ['#ef4444', '#f97316']
        },
        {
          title: 'Scalable',
          subtitle: 'Architecture',
          description: 'Scalable & Future-ready – Modular strategies for evolving protocols and market conditions.',
          icon: 'FaRocket',
          gradient: ['#eab308', '#f97316']
        },
        {
          title: 'Client-First',
          subtitle: 'Philosophy',
          description: 'Client-First Philosophy – Your success is our success; expect partnership and guidance.',
          icon: 'FaHandshake',
          gradient: ['#14b8a6', '#06b6d4']
        }
      ]
    },
    cta: {
      backgroundImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Web3_Marketing_Services-2_y7arms.png',
      icon: 'FaRocket',
      heading: 'Ready to Scale Your Web3 Project?',
      paragraphs: [
        'Marketing in Web3 is a means to real business outcomes—not a science project. At Altiora Infotech, we pair deep Web3 understanding with clear commercial thinking to deliver campaigns that are authentic, scalable, and aligned to your KPIs.',
        "Ready to turn a concept into a roadmap? Share your goals and constraints, and we'll come back with a crisp blueprint: strategy options, timeline and milestones, performance metrics, and an investment estimate you can act on."
      ],
      buttons: [
        {
          text: 'Book Discovery Call',
          link: 'https://calendly.com/altiorainfotech/30min',
          primary: true,
          icon: 'FaRocket',
          external: true
        },
        {
          text: 'Send Your Brief',
          link: '/contact',
          primary: false,
          icon: 'FaEye',
          external: false
        }
      ]
    }
  }
};

async function seedWeb3MarketingPage() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;
    if (!MONGODB_URI) throw new Error('MONGODB_URI is not defined in environment variables');

    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const existingPage = await Web3Service.findOne({ pageId: 'web3-marketing' });
    if (existingPage) {
      console.log('Web3 Marketing page already exists. Updating...');
      await Web3Service.findOneAndUpdate({ pageId: 'web3-marketing' }, web3MarketingPageData, { new: true, upsert: true });
      console.log('Web3 Marketing page updated successfully!');
    } else {
      console.log('Creating new Web3 Marketing page...');
      await Web3Service.create(web3MarketingPageData);
      console.log('Web3 Marketing page created successfully!');
    }

    console.log('Seed completed successfully!');
  } catch (error) {
    console.error('Error seeding Web3 Marketing page:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  }
}

seedWeb3MarketingPage();