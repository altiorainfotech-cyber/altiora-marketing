import mongoose from 'mongoose';
import Web3Service from '../src/lib/models/Web3Service';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const defiPageData = {
  pageId: 'defi',
  pageName: 'DeFi Development',
  route: '/services/web3/defi',
  status: 'published',
  seo: {
    title: 'DeFi Development Services | Altiora Infotech',
    description: 'Design, secure, and scale open finance that users can trust. Expert DeFi protocol engineering from Altiora Infotech.',
    ogImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/DeFi_Protocol_Engineering-1_ex6n9w.jpg'
  },
  sections: {
    hero: {
      backgroundImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/DeFi_Protocol_Engineering-1_ex6n9w.jpg',
      badge: 'ALTIORA INFOTECH',
      badgeIcon: 'FaCode',
      heading: 'DeFi Development',
      headingHighlight: 'Services',
      highlightColor: '#f4cc6f',
      subheading: 'Design, secure, and scale open finance that users can trust.',
      cta: {
        text: 'Get Started',
        link: '/contact',
        primary: true,
        icon: 'FaRocket'
      }
    },
    whatIs: {
      title: 'The Foundation of Trust',
      subtitle: 'DeFi is the future of open finance.',
      icon: 'FaCoins',
      paragraphs: [
        "Decentralized Finance represents the evolution of traditional financial systems into transparent, permissionless, and programmable money. Using smart contracts and blockchain technology, DeFi enables lending, borrowing, trading, and yield generation without intermediaries, creating a more inclusive and efficient financial ecosystem.",
        "Altiora Infotech builds DeFi protocols that prioritize security, composability, and user experience. We architect token economies, develop robust smart contracts, and implement comprehensive risk management—designing financial primitives that are capital-efficient, upgradeable, and aligned with real-world economic principles."
      ]
    },
    whyMatter: {
      title: 'Why DeFi Matters',
      subtitle: 'Essential features that transform decentralized finance.',
      cards: [
        {
          title: 'Financial Advantages',
          icon: 'FaCoins',
          iconGradient: ['#f4cc6f', '#e6b85c'],
          items: [
            { text: 'Permissionless access to financial services' },
            { text: 'Transparent and programmable money' },
            { text: 'Global 24/7 market availability' },
            { text: 'Reduced intermediary costs' }
          ]
        },
        {
          title: 'Security Benefits',
          icon: 'FaShieldAlt',
          iconGradient: ['#06b6d4', '#3b82f6'],
          items: [
            { text: 'Immutable smart contract execution' },
            { text: 'Cryptographic security guarantees' },
            { text: 'Transparent risk assessment' },
            { text: 'Decentralized governance models' }
          ]
        }
      ]
    },
    whyChoose: {
      title: 'Why Choose Altiora Infotech?',
      subtitle: "We don't just build DeFi protocols; we create decentralized financial solutions that align with your business goals and deliver sustainable value.",
      featureCards: [],
      commitmentCard: {
        icon: 'FaCoins',
        title: 'Our Commitment to DeFi Excellence',
        description: "We don't just write code at Altiora Infotech; we also design decentralized financial systems. We focus on making sure that DeFi functionality fits with real economic needs, doesn't compromise on security, and can scale as your protocol grows."
      }
    },
    serviceOfferings: {
      title: 'Our DeFi Service Offerings',
      subtitle: 'Comprehensive DeFi solutions for every need.',
      services: [
        { name: 'Protocol Architecture', icon: '/images/web3/blockchain/Smart Contract.svg' },
        { name: 'Smart Contracts', icon: '/images/web3/blockchain/Token.svg' },
        { name: 'Lending Markets', icon: '/images/web3/blockchain/DeFi.svg' },
        { name: 'AMMs & Trading', icon: '/images/web3/blockchain/NFT.svg' },
        { name: 'Yield Strategies', icon: '/images/web3/blockchain/DAO.svg' },
        { name: 'Cross-Chain DeFi', icon: '/images/web3/blockchain/End-to-End.svg' },
        { name: 'Oracles & Data', icon: '/images/web3/blockchain/Security.svg' },
        { name: 'Security & Ops', icon: '/images/web3/blockchain/Blockchain.svg' },
        { name: 'Token Economics', icon: '/images/web3/blockchain/dApp.svg' }
      ]
    },
    process: {
      title: 'Our DeFi Engineering Process',
      subtitle: 'A structured, transparent, and iterative process to transform your idea into a live DeFi protocol.',
      steps: [
        {
          step: 1,
          title: 'Discovery & Ideation',
          description: 'Stakeholder workshops, requirement gathering, economic analysis, and protocol design.',
          icon: '🔍'
        },
        {
          step: 2,
          title: 'Mechanism Design',
          description: 'Token economics, incentive structures, risk models, and governance frameworks.',
          icon: '📐'
        },
        {
          step: 3,
          title: 'Development & Testing',
          description: 'Smart contract development, simulations, audits, and security hardening.',
          icon: '⚙️'
        },
        {
          step: 4,
          title: 'Integration & Deployment',
          description: 'Cross-chain integration, oracle connections, and mainnet deployment.',
          icon: '🚀'
        },
        {
          step: 5,
          title: 'Liquidity & Launch',
          description: 'Liquidity bootstrapping, partner integrations, and user onboarding.',
          icon: '💰'
        },
        {
          step: 6,
          title: 'Operations & Evolution',
          description: 'Monitoring, parameter tuning, governance support, and protocol upgrades.',
          icon: '📊'
        }
      ],
      gradientColors: ['#f4cc6f', '#6EA8FE', '#00D4FF']
    },
    whyWork: {
      title: 'Why Work With Altiora Infotech?',
      subtitle: 'Partner with DeFi experts who deliver results.',
      benefits: [
        {
          title: 'Economic',
          subtitle: 'Expertise',
          description: 'Economic Expertise – Deep knowledge in DeFi mechanisms, tokenomics, yield strategies, and financial engineering.',
          icon: 'FaCoins',
          gradient: ['#3b82f6', '#06b6d4']
        },
        {
          title: 'Custom',
          subtitle: 'Solutions',
          description: 'Custom DeFi Solutions – Tailored protocol solutions, not templates; each project fits your specific economic model.',
          icon: 'FaTools',
          gradient: ['#a855f7', '#ec4899']
        },
        {
          title: 'End-to-End',
          subtitle: 'Service',
          description: 'End-to-End Implementation – Complete service from design to deployment and ongoing protocol management.',
          icon: 'FaCode',
          gradient: ['#22c55e', '#10b981']
        },
        {
          title: 'Security',
          subtitle: 'First',
          description: 'Security & Risk Management – Comprehensive audits and risk modeling embedded in every financial primitive.',
          icon: 'FaShieldAlt',
          gradient: ['#ef4444', '#f97316']
        },
        {
          title: 'Scalable',
          subtitle: 'Architecture',
          description: 'Scalable Architecture – Modular design for evolving DeFi protocols and cross-chain interoperability.',
          icon: 'FaNetworkWired',
          gradient: ['#eab308', '#f97316']
        },
        {
          title: 'Client-First',
          subtitle: 'Partnership',
          description: "Client-Centric Partnership – Your protocol's success is our success; expect economic alignment and guidance.",
          icon: 'FaHandshake',
          gradient: ['#14b8a6', '#06b6d4']
        }
      ]
    },
    cta: {
      backgroundImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/DeFi_Protocol_Engineering-2_eeoof0.jpg',
      icon: 'FaCoins',
      heading: 'Ready to Build Your DeFi Protocol?',
      paragraphs: [
        'DeFi is the future of finance—not a side project. At Altiora Infotech, we pair deep economic engineering with clear financial thinking to deliver protocols that are capital-efficient, secure, and aligned to your economic KPIs.',
        "Ready to turn a concept into a roadmap? Share your economic goals and constraints, and we'll come back with a crisp blueprint: mechanism options, tokenomics design, security and compliance approach, and an investment estimate you can act on."
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

async function seedDefiPage() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const existingPage = await Web3Service.findOne({ pageId: 'defi' });

    if (existingPage) {
      console.log('DeFi page already exists. Updating...');
      await Web3Service.findOneAndUpdate(
        { pageId: 'defi' },
        defiPageData,
        { new: true, upsert: true }
      );
      console.log('DeFi page updated successfully!');
    } else {
      console.log('Creating new DeFi page...');
      await Web3Service.create(defiPageData);
      console.log('DeFi page created successfully!');
    }

    console.log('Seed completed successfully!');
  } catch (error) {
    console.error('Error seeding DeFi page:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  }
}

seedDefiPage();
