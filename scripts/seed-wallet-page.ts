import mongoose from 'mongoose';
import Web3Service from '../src/lib/models/Web3Service';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const walletPageData = {
  pageId: 'wallet',
  pageName: 'Wallet Development',
  route: '/services/web3/wallet',
  status: 'published',
  seo: {
    title: 'Wallet Development Services | Altiora Infotech',
    description: 'Build secure, user-friendly, and scalable wallets for Web3 adoption. Expert wallet development from Altiora Infotech.',
    ogImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Wallet_Development-1_eauykh.jpg'
  },
  sections: {
    hero: {
      backgroundImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Wallet_Development-1_eauykh.jpg',
      badge: 'ALTIORA INFOTECH',
      badgeIcon: 'FaCode',
      heading: 'Wallet Development',
      headingHighlight: 'Solutions',
      highlightColor: '#f4cc6f',
      subheading: 'Build secure, user-friendly, and scalable wallets for Web3 adoption.',
      cta: {
        text: 'Get Started',
        link: '/contact',
        primary: true,
        icon: 'FaRocket'
      }
    },
    whatIs: {
      title: 'The Foundation of Trust',
      subtitle: 'Wallets are the gateway to Web3.',
      icon: 'FaRocket',
      paragraphs: [
        "A wallet is more than just a place to store crypto—it's your secure interface to decentralized applications, digital assets, and blockchain networks. Using advanced cryptography, multi-signature security, and user-friendly design, wallets enable seamless interaction with Web3 while maintaining full control over your digital identity and assets.",
        "Altiora Infotech builds wallets that prioritize security, usability, and interoperability. We architect and deploy wallet solutions that support multiple blockchains, integrate with dApps, and provide enterprise-grade security—designing user experiences that make Web3 accessible while ensuring robust protection against threats."
      ]
    },
    whyMatter: {
      title: 'Why Wallets Matter',
      subtitle: 'Essential features that transform wallet user experience.',
      cards: [
        {
          title: 'Security Advantages',
          icon: 'FaShieldAlt',
          iconGradient: ['#f4cc6f', '#e6b85c'],
          items: [
            { text: 'Multi-signature and MPC security' },
            { text: 'Encrypted private key storage' },
            { text: 'Transaction simulation and approval' },
            { text: 'Recovery mechanisms and backups' }
          ]
        },
        {
          title: 'User Experience Benefits',
          icon: 'FaUsers',
          iconGradient: ['#06b6d4', '#3b82f6'],
          items: [
            { text: 'Intuitive interface design' },
            { text: 'Seamless dApp integration' },
            { text: 'Cross-chain asset management' },
            { text: 'Real-time transaction monitoring' }
          ]
        }
      ]
    },
    whyChoose: {
      title: 'Why Choose Altiora Infotech?',
      subtitle: 'We design solutions that align with your business goals.',
      featureCards: [],
      commitmentCard: {
        icon: 'FaHandshake',
        title: 'Our Commitment to Excellence',
        description: "We don't just write code at Altiora Infotech; we also design solutions. We focus on making sure that wallet functionality fits with your real business goals, doesn't go overboard, and can be maintained for a long time."
      }
    },
    serviceOfferings: {
      title: 'Our Wallet Service Offerings',
      subtitle: 'Comprehensive wallet development services for every need.',
      services: [
        { name: 'Non-Custodial Wallets', icon: '/images/web3/blockchain/Smart Contract.svg' },
        { name: 'Custodial Wallets', icon: '/images/web3/blockchain/Token.svg' },
        { name: 'MPC Wallets', icon: '/images/web3/blockchain/DeFi.svg' },
        { name: 'Multi-Chain Support', icon: '/images/web3/blockchain/NFT.svg' },
        { name: 'dApp Integration', icon: '/images/web3/blockchain/DAO.svg' },
        { name: 'Security & Compliance', icon: '/images/web3/blockchain/End-to-End.svg' },
        { name: 'On-Ramps & Off-Ramps', icon: '/images/web3/blockchain/Security.svg' },
        { name: 'Payment Solutions', icon: '/images/web3/blockchain/Blockchain.svg' },
        { name: 'Analytics & Monitoring', icon: '/images/web3/blockchain/dApp.svg' }
      ]
    },
    process: {
      title: 'Our Wallet Development Process',
      subtitle: 'A structured, transparent, and iterative process to transform your idea into a live wallet product.',
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
          description: 'Technical specifications, wallet flow diagrams, UI/UX wireframes, security & performance estimation.',
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
          description: 'Wallet development, backend components, frontend interface, chain & dApp integration.',
          icon: '⚙️'
        },
        {
          step: 5,
          title: 'Security & Testing',
          description: 'Unit & integration tests, security audits, penetration testing, performance optimization.',
          icon: '🛡️'
        },
        {
          step: 6,
          title: 'Deployment & Launch',
          description: 'Testnet deployment, staging validation, mainnet launch, user migration.',
          icon: '🚀'
        }
      ],
      gradientColors: ['#f4cc6f', '#6EA8FE', '#00D4FF']
    },
    whyWork: {
      title: 'Why Work With Altiora Infotech?',
      subtitle: 'Partner with wallet experts who deliver results.',
      benefits: [
        {
          title: 'Expertise',
          subtitle: 'Wallet & Web3',
          description: 'Wallet & Web3 Expertise – Deep knowledge in wallets, Web3, cryptography, multi-chain support, and security.',
          icon: 'FaWallet',
          gradient: ['#3b82f6', '#06b6d4']
        },
        {
          title: 'Custom',
          subtitle: 'Solutions',
          description: 'Custom Solutions – Tailored wallet solutions, not templates; each project fits your specific user needs.',
          icon: 'FaTools',
          gradient: ['#a855f7', '#ec4899']
        },
        {
          title: 'End-to-End',
          subtitle: 'Service',
          description: 'End-to-End Service – Complete service from ideation to maintenance and user support.',
          icon: 'FaCode',
          gradient: ['#22c55e', '#10b981']
        },
        {
          title: 'Security',
          subtitle: 'First',
          description: 'Security First – Rigorous audits and security embedded in every layer of the wallet.',
          icon: 'FaShieldAlt',
          gradient: ['#ef4444', '#f97316']
        },
        {
          title: 'Scalable',
          subtitle: 'Architecture',
          description: 'Scalable Architecture – Modular design for evolving protocols and ecosystem integrations.',
          icon: 'FaNetworkWired',
          gradient: ['#eab308', '#f97316']
        },
        {
          title: 'Client-First',
          subtitle: 'Philosophy',
          description: 'Client-First Philosophy – Your users\' success is our success; expect partnership and guidance.',
          icon: 'FaHandshake',
          gradient: ['#14b8a6', '#06b6d4']
        }
      ]
    },
    cta: {
      backgroundImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Wallet_Development-2_wi3o5r.jpg',
      icon: 'FaWallet',
      heading: 'Ready to Build Your Wallet Solution?',
      paragraphs: [
        "Deliver a wallet that's secure by default and easy to use every day. We'll define the right design, build the stack, and keep it evolving with your users."
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

async function seedWalletPage() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;
    if (!MONGODB_URI) throw new Error('MONGODB_URI is not defined in environment variables');

    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const existingPage = await Web3Service.findOne({ pageId: 'wallet' });
    if (existingPage) {
      console.log('Wallet page already exists. Updating...');
      await Web3Service.findOneAndUpdate({ pageId: 'wallet' }, walletPageData, { new: true, upsert: true });
      console.log('Wallet page updated successfully!');
    } else {
      console.log('Creating new Wallet page...');
      await Web3Service.create(walletPageData);
      console.log('Wallet page created successfully!');
    }

    console.log('Seed completed successfully!');
  } catch (error) {
    console.error('Error seeding Wallet page:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  }
}

seedWalletPage();