import mongoose from 'mongoose';
import Web3Service from '../src/lib/models/Web3Service';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const dappPageData = {
  pageId: 'dapp',
  pageName: 'dApp Development',
  route: '/services/web3/dapp',
  status: 'published',
  seo: {
    title: 'dApp Development Services | Altiora Infotech',
    description: 'Build decentralized applications that perform — on-chain and in the real world. Expert dApp development services from Altiora Infotech.',
    ogImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/dApp_Development-1_gmtptu.jpg'
  },
  sections: {
    hero: {
      backgroundImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/dApp_Development-1_gmtptu.jpg',
      badge: 'ALTIORA INFOTECH',
      badgeIcon: 'FaCode',
      heading: 'dApp Development',
      headingHighlight: 'Services',
      highlightColor: '#f4cc6f',
      subheading: 'Build decentralized applications that perform — on-chain and in the real world.',
      cta: {
        text: 'Get Started',
        link: '/contact',
        primary: true,
        icon: 'FaRocket'
      }
    },
    whatIs: {
      title: 'The Future of Applications',
      subtitle: 'Decentralized applications that put users in control.',
      icon: 'FaCube',
      paragraphs: [
        "dApps are applications that run on decentralized networks, free from centralized control. Using blockchain technology, cryptography, and smart contracts, they create trustless systems where users own their data and transactions are transparent and immutable.",
        "At Altiora Infotech, we build dApps that bridge the gap between innovative blockchain technology and real-world usability—creating seamless experiences that users love while maintaining the security and decentralization that Web3 promises."
      ]
    },
    whyMatter: {
      title: 'Why dApps Matter',
      subtitle: 'Unique benefits that transform how users interact with applications.',
      cards: [
        {
          title: 'Technical Advantages',
          icon: 'FaShieldAlt',
          iconGradient: ['#f4cc6f', '#e6b85c'],
          items: [
            { text: 'User data ownership and privacy' },
            { text: 'Censorship-resistant applications' },
            { text: 'Transparent and auditable operations' },
            { text: 'Interoperability across platforms' }
          ]
        },
        {
          title: 'User Benefits',
          icon: 'FaChartLine',
          iconGradient: ['#06b6d4', '#3b82f6'],
          items: [
            { text: 'Direct control over digital assets' },
            { text: 'Reduced dependency on intermediaries' },
            { text: 'Enhanced security through cryptography' },
            { text: 'Global accessibility without restrictions' }
          ]
        }
      ]
    },
    whyChoose: {
      title: 'Why Choose Altiora Infotech?',
      subtitle: "We don't just build dApps; we create decentralized solutions that align with your business goals and deliver sustainable value.",
      featureCards: [],
      commitmentCard: {
        icon: 'FaCube',
        title: 'Our Commitment to dApp Excellence',
        description: "We don't just write code at Altiora Infotech; we also design decentralized applications. We focus on making sure that dApp functionality fits with real user needs, doesn't compromise on security, and can scale as your user base grows."
      }
    },
    serviceOfferings: {
      title: 'Our dApp Service Offerings',
      subtitle: 'Comprehensive dApp development services for every need.',
      services: [
        { name: 'Frontend dApp Development', icon: '/images/web3/blockchain/dApp.svg' },
        { name: 'Smart Contract Integration', icon: '/images/web3/blockchain/Smart Contract.svg' },
        { name: 'Wallet Connectivity', icon: '/images/web3/blockchain/Token.svg' },
        { name: 'DeFi Protocol Integration', icon: '/images/web3/blockchain/DeFi.svg' },
        { name: 'NFT Marketplace Development', icon: '/images/web3/blockchain/NFT.svg' },
        { name: 'Cross-Chain dApps', icon: '/images/web3/blockchain/Blockchain.svg' },
        { name: 'Security Implementation', icon: '/images/web3/blockchain/Security.svg' },
        { name: 'dApp Consulting', icon: '/images/web3/blockchain/Blockchain.svg' },
        { name: 'Maintenance & Support', icon: '/images/web3/blockchain/dApp.svg' }
      ]
    },
    process: {
      title: 'Our dApp Development Process',
      subtitle: 'A structured, transparent, and iterative process to transform your idea into a live dApp.',
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
      subtitle: 'Partner with dApp experts who deliver results.',
      benefits: [
        {
          title: 'Expertise',
          subtitle: 'dApp & Web3',
          description: 'dApp & Web3 Expertise – Deep knowledge in dApps, Web3, smart contracts, tokenomics, and architecture.',
          icon: 'FaCube',
          gradient: ['#3b82f6', '#06b6d4']
        },
        {
          title: 'Custom',
          subtitle: 'Solutions',
          description: 'Custom Solutions – Tailored solutions, not templates; each dApp fits your specific business logic.',
          icon: 'FaTools',
          gradient: ['#a855f7', '#ec4899']
        },
        {
          title: 'End-to-End',
          subtitle: 'Service',
          description: 'End-to-End Service – Complete service from ideation to maintenance.',
          icon: 'FaCode',
          gradient: ['#22c55e', '#10b981']
        },
        {
          title: 'Security',
          subtitle: 'First',
          description: 'Security First – Rigorous audits and security embedded in every layer.',
          icon: 'FaShieldAlt',
          gradient: ['#ef4444', '#f97316']
        },
        {
          title: 'Scalable',
          subtitle: 'Architecture',
          description: 'Scalable Architecture – Modular design for evolving protocols and upgrades.',
          icon: 'FaNetworkWired',
          gradient: ['#eab308', '#f97316']
        },
        {
          title: 'Client-First',
          subtitle: 'Philosophy',
          description: "Client-First Philosophy – Your success is our success; expect partnership and guidance.",
          icon: 'FaHandshake',
          gradient: ['#14b8a6', '#06b6d4']
        }
      ]
    },
    cta: {
      backgroundImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/dApp_Development-2_sqjd3q.jpg',
      icon: 'FaRocket',
      heading: 'Ready to Build Your dApp Solution?',
      paragraphs: [
        'dApps are a means to real business outcomes—not a science project. At Altiora Infotech, we pair deep Web3 engineering with clear commercial thinking to deliver solutions that are secure, scalable, and aligned to your KPIs.',
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

async function seedDappPage() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const existingPage = await Web3Service.findOne({ pageId: 'dapp' });

    if (existingPage) {
      console.log('dApp page already exists. Updating...');
      await Web3Service.findOneAndUpdate(
        { pageId: 'dapp' },
        dappPageData,
        { new: true, upsert: true }
      );
      console.log('dApp page updated successfully!');
    } else {
      console.log('Creating new dApp page...');
      await Web3Service.create(dappPageData);
      console.log('dApp page created successfully!');
    }

    console.log('Seed completed successfully!');
  } catch (error) {
    console.error('Error seeding dApp page:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  }
}

seedDappPage();
