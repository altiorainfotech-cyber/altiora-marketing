import mongoose from 'mongoose';
import Web3Service from '../src/lib/models/Web3Service';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const blockchainPageData = {
  pageId: 'blockchain',
  pageName: 'Blockchain Development',
  route: '/services/web3/blockchain',
  status: 'published',
  seo: {
    title: 'Blockchain Development Services | Altiora Infotech',
    description: 'We build, test, and launch blockchain projects that perform — on-chain and in the real world. Expert blockchain development services from Altiora Infotech.',
    ogImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Blockchain_Development_Services-1_bsu3hu.png'
  },
  sections: {
    hero: {
      backgroundImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Blockchain_Development_Services-1_bsu3hu.png',
      badge: 'ALTIORA INFOTECH',
      badgeIcon: 'FaCode',
      heading: 'Blockchain Development',
      headingHighlight: 'Services',
      highlightColor: '#f4cc6f',
      subheading: 'We build, test, and launch blockchain projects that perform — on-chain and in the real world.',
      cta: {
        text: 'Get Started',
        link: '/contact',
        primary: true,
        icon: 'FaRocket'
      }
    },
    whatIs: {
      title: 'The Foundation of Trust',
      subtitle: "Blockchain is the internet's trust layer.",
      icon: 'FaGlobe',
      paragraphs: [
        "Using cryptography, consensus, and immutable ledgers, it creates a shared, verifiable record without a single gatekeeper—enabling transparent collaboration, auditable data, smart-contract automation, and scalable systems for tokens, payments, supply chains, and digital identity.",
        "Altiora Infotech turns that promise into production. We architect and ship secure, scalable blockchain solutions aligned to business goals—designing token economies, writing and auditing smart contracts, integrating dApps with your stack, and managing the full lifecycle from discovery to post-launch support for measurable outcomes."
      ]
    },
    whyMatter: {
      title: 'Why Blockchain Matters',
      subtitle: 'Unique benefits that transform business operations.',
      cards: [
        {
          title: 'Technical Advantages',
          icon: 'FaShieldAlt',
          iconGradient: ['#f4cc6f', '#e6b85c'],
          items: [
            { text: 'Immutable ledgers that cannot be altered' },
            { text: 'Decentralized consensus mechanisms' },
            { text: 'Tamper-proof data integrity' },
            { text: 'Reduced intermediary dependencies' }
          ]
        },
        {
          title: 'Business Benefits',
          icon: 'FaChartLine',
          iconGradient: ['#06b6d4', '#3b82f6'],
          items: [
            { text: 'Enhanced partner visibility and trust' },
            { text: 'Elimination of reconciliation costs and reduced fraud' },
            { text: 'Self-executing smart contract automation' },
            { text: 'Support for new business models (NFTs, DAOs, tokenization' }
          ]
        }
      ]
    },
    whyChoose: {
      title: 'Why Choose Altiora Infotech?',
      subtitle: 'We design solutions that align with your business goals.',
      featureCards: [
        {
          title: 'Strategic Design',
          description: 'Business-aligned solutions',
          icon: 'FaCode'
        },
        {
          title: 'Long-term Focus',
          description: 'Sustainable architecture',
          icon: 'FaShieldAlt'
        },
        {
          title: 'Practical Innovation',
          description: 'Real-world performance',
          icon: 'FaRocket'
        }
      ],
      commitmentCard: {
        icon: 'FaHandshake',
        title: 'Our Commitment to Excellence',
        description: "We don't just write code at Altiora Infotech; we also design solutions. We focus on making sure that blockchain use fits with your real business goals, doesn't go overboard, and can be maintained for a long time."
      }
    },
    serviceOfferings: {
      title: 'Our Blockchain Service Offerings',
      subtitle: 'Comprehensive blockchain development services for every need.',
      services: [
        { name: 'Smart Contract Development', icon: '/images/web3/blockchain/Smart Contract.svg' },
        { name: 'Token Development', icon: '/images/web3/blockchain/Token.svg' },
        { name: 'DeFi Protocol Development', icon: '/images/web3/blockchain/DeFi.svg' },
        { name: 'NFT Marketplace', icon: '/images/web3/blockchain/NFT.svg' },
        { name: 'DAO Development', icon: '/images/web3/blockchain/DAO.svg' },
        { name: 'Cross-Chain Solutions', icon: '/images/web3/blockchain/End-to-End.svg' },
        { name: 'Security Audits', icon: '/images/web3/blockchain/Security.svg' },
        { name: 'Blockchain Consulting', icon: '/images/web3/blockchain/Blockchain.svg' },
        { name: 'dApp Development', icon: '/images/web3/blockchain/dApp.svg' }
      ]
    },
    process: {
      title: 'Our Blockchain Development Process',
      subtitle: 'A structured, transparent, and iterative process to transform your idea into a live blockchain product.',
      steps: [
        {
          step: 1,
          title: 'Discovery & Ideation',
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
      subtitle: 'Partner with blockchain experts who deliver results.',
      benefits: [
        {
          title: 'Expertise',
          subtitle: 'Blockchain & Web3',
          description: 'Domain Expertise – Deep knowledge in blockchain, Web3, smart contracts, tokenomics, and architecture.',
          icon: 'FaNetworkWired',
          gradient: ['#3b82f6', '#06b6d4']
        },
        {
          title: 'Custom',
          subtitle: 'Solutions',
          description: 'Custom Solutions – Tailored solutions, not templates; each project fits your specific business logic.',
          icon: 'FaTools',
          gradient: ['#a855f7', '#ec4899']
        },
        {
          title: 'End-to-End',
          subtitle: 'Service',
          description: 'End-to-End Capability – Complete service from ideation to maintenance.',
          icon: 'FaCode',
          gradient: ['#22c55e', '#10b981']
        },
        {
          title: 'Security',
          subtitle: 'First',
          description: 'Security-First Approach – Rigorous audits and security embedded in every layer.',
          icon: 'FaShieldAlt',
          gradient: ['#ef4444', '#f97316']
        },
        {
          title: 'Scalable',
          subtitle: 'Architecture',
          description: 'Scalable & Future-ready – Modular design for evolving protocols and upgrades.',
          icon: 'FaRocket',
          gradient: ['#eab308', '#f97316']
        },
        {
          title: 'Client-First',
          subtitle: 'Philosophy',
          description: "Client-Centric Philosophy – Your success is our success; expect partnership and guidance.",
          icon: 'FaHandshake',
          gradient: ['#14b8a6', '#06b6d4']
        }
      ]
    },
    cta: {
      backgroundImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Blockchain_Development_Services-2_n1k5oc.png',
      icon: 'FaRocket',
      heading: 'Ready to Build Your Blockchain Solution?',
      paragraphs: [
        'Blockchain is a means to real business outcomes—not a science project. At Altiora Infotech, we pair deep Web3 engineering with clear commercial thinking to deliver solutions that are secure, scalable, and aligned to your KPIs.',
        "Ready to turn a concept into a roadmap? Share your goals and constraints, and we'll come back with a crisp blueprint: architecture options, timeline and milestones, security and compliance approach, and an investment estimate you can act on."
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

async function seedBlockchainPage() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Check if Blockchain page already exists
    const existingPage = await Web3Service.findOne({ pageId: 'blockchain' });

    if (existingPage) {
      console.log('Blockchain page already exists. Updating...');
      await Web3Service.findOneAndUpdate(
        { pageId: 'blockchain' },
        blockchainPageData,
        { new: true, upsert: true }
      );
      console.log('Blockchain page updated successfully!');
    } else {
      console.log('Creating new Blockchain page...');
      await Web3Service.create(blockchainPageData);
      console.log('Blockchain page created successfully!');
    }

    console.log('Seed completed successfully!');
  } catch (error) {
    console.error('Error seeding Blockchain page:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  }
}

// Run the seed function
seedBlockchainPage();
