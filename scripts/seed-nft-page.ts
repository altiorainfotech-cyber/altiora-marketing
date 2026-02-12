import mongoose from 'mongoose';
import Web3Service from '../src/lib/models/Web3Service';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const nftPageData = {
  pageId: 'nft',
  pageName: 'NFT Marketplace Development',
  route: '/services/web3/nft',
  status: 'published',
  seo: {
    title: 'NFT Marketplace Development Services | Altiora Infotech',
    description: 'Launch creator-friendly, secure NFT marketplaces that scale from day one. Expert NFT marketplace development from Altiora Infotech.',
    ogImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/NFT_Marketplaces-1_uxsuex.jpg'
  },
  sections: {
    hero: {
      backgroundImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/NFT_Marketplaces-1_uxsuex.jpg',
      badge: 'ALTIORA INFOTECH',
      badgeIcon: 'FaCode',
      heading: 'NFT Marketplaces',
      headingHighlight: 'That Scale',
      highlightColor: '#f4cc6f',
      subheading: 'Launch creator-friendly, secure marketplaces that scale from day one.',
      cta: {
        text: 'Get Started',
        link: '/contact',
        primary: true,
        icon: 'FaRocket'
      }
    },
    whatIs: {
      title: 'Create & Trade',
      subtitle: 'End-to-end platforms for minting, discovery, and commerce',
      icon: 'FaPaintBrush',
      paragraphs: [
        "NFT marketplaces are more than just trading platforms—they're ecosystems where creators mint digital assets, collectors discover unique pieces, and communities form around shared interests. Our platforms handle everything from smart contract deployment to user onboarding, ensuring seamless experiences across devices and blockchains."
      ]
    },
    whyMatter: {
      title: 'Trust, Liquidity, and Great UX',
      subtitle: 'NFT marketplaces win when minting is simple, discovery is intuitive, and transactions are fast and safe.',
      cards: [
        {
          title: 'Trust & Security',
          icon: 'FaShieldAlt',
          iconGradient: ['#f4cc6f', '#e6b85c'],
          items: [
            { text: 'Audited smart contracts with battle-tested security' },
            { text: 'Multi-signature wallets and escrow systems' },
            { text: 'Real-time transaction monitoring and fraud detection' },
            { text: 'Compliance with regional regulations and KYC standards' }
          ]
        },
        {
          title: 'Liquidity & UX',
          icon: 'FaChartLine',
          iconGradient: ['#06b6d4', '#3b82f6'],
          items: [
            { text: 'Intuitive interfaces for minting and trading' },
            { text: 'Advanced search and filtering capabilities' },
            { text: 'Real-time price feeds and market data' },
            { text: 'Mobile-optimized experiences for on-the-go trading' },
            { text: 'Social features for community building' }
          ]
        }
      ]
    },
    whyChoose: {
      title: 'Why Choose Our NFT Marketplace Solutions?',
      subtitle: 'We design the experience, engineer audited smart contracts, and build the commerce layer so creators and collectors transact with confidence.',
      featureCards: [
        {
          title: 'Expertise across ERC-721, ERC-1155, auctions, and royalties',
          description: 'Complete NFT standard implementation',
          icon: 'FaCode'
        },
        {
          title: 'Multi-chain readiness with L2/sidechains for low fees and speed',
          description: 'Scalable cross-chain solutions',
          icon: 'FaNetworkWired'
        },
        {
          title: 'Safety by design with KYC/AML options and policy enforcement',
          description: 'Compliance and security first',
          icon: 'FaShieldAlt'
        },
        {
          title: 'Transparent reporting, dashboards, and creator analytics',
          description: 'Data-driven insights',
          icon: 'FaChartLine'
        },
        {
          title: 'Ongoing support for drops, upgrades, and ecosystem partnerships',
          description: 'Long-term partnership',
          icon: 'FaHandshake'
        }
      ],
      commitmentCard: {
        icon: 'FaPaintBrush',
        title: 'Our Commitment to NFT Excellence',
        description: "We don't just build NFT marketplaces; we create digital ecosystems that empower creators and collectors. We focus on making sure that NFT functionality fits with real market needs, doesn't compromise on security, and can scale as your community grows."
      }
    },
    serviceOfferings: {
      title: 'Our NFT Marketplace Services',
      subtitle: 'Comprehensive NFT marketplace development services.',
      services: [
        { name: 'Marketplace Architecture', icon: '/images/web3/blockchain/Smart Contract.svg' },
        { name: 'Smart Contracts', icon: '/images/web3/blockchain/Token.svg' },
        { name: 'Minting Studio', icon: '/images/web3/blockchain/DeFi.svg' },
        { name: 'Payments & Custody', icon: '/images/web3/blockchain/NFT.svg' },
        { name: 'Metadata & Storage', icon: '/images/web3/blockchain/DAO.svg' },
        { name: 'Search & Discovery', icon: '/images/web3/blockchain/End-to-End.svg' },
        { name: 'Compliance & Moderation', icon: '/images/web3/blockchain/Security.svg' },
        { name: 'Analytics & Growth', icon: '/images/web3/blockchain/Blockchain.svg' },
        { name: 'Security & Monitoring', icon: '/images/web3/blockchain/dApp.svg' }
      ]
    },
    process: {
      title: 'Our NFT Marketplace Process',
      subtitle: 'A structured, transparent, and iterative process to transform your idea into a live NFT marketplace.',
      steps: [
        {
          step: 1,
          title: 'Scoping & Kickoff',
          description: 'Define goals, audiences, chains, compliance needs, and KPIs.',
          icon: '🎯'
        },
        {
          step: 2,
          title: 'Experience & Architecture',
          description: 'Map creator/collector journeys; select protocols and infrastructure.',
          icon: '🗺️'
        },
        {
          step: 3,
          title: 'Contract & Platform Build',
          description: 'Implement contracts, APIs, web app, and creator tooling with tests.',
          icon: '⚙️'
        },
        {
          step: 4,
          title: 'Payments, Compliance & QA',
          description: 'Wire ramps and custody; validate performance, security, and policies.',
          icon: '🛡️'
        },
        {
          step: 5,
          title: 'Launch & Go-to-Market',
          description: 'Drops calendar, partnerships, dashboards, and support readiness.',
          icon: '🚀'
        },
        {
          step: 6,
          title: 'Operate & Improve',
          description: 'Monitor reliability and growth, ship features, expand to new chains.',
          icon: '📈'
        }
      ],
      gradientColors: ['#f4cc6f', '#6EA8FE', '#00D4FF']
    },
    whyWork: {
      title: 'Why Work With Altiora Infotech?',
      subtitle: 'Security First Approach, Transparent Collaboration, Holistic Coverage, Long-term Partnership, Trusted Delivery.',
      benefits: [
        {
          title: 'Security First',
          subtitle: 'Approach',
          description: 'Threat modeling, secure coding, independent audits baked in.',
          icon: 'FaShieldAlt',
          gradient: ['#3b82f6', '#06b6d4']
        },
        {
          title: 'Transparent',
          subtitle: 'Collaboration',
          description: 'We co-create with your team and document every decision.',
          icon: 'FaHandshake',
          gradient: ['#a855f7', '#ec4899']
        },
        {
          title: 'Holistic',
          subtitle: 'Coverage',
          description: 'UX, contracts, infra, analytics, and compliance delivered end-to-end.',
          icon: 'FaNetworkWired',
          gradient: ['#22c55e', '#10b981']
        },
        {
          title: 'Long-term',
          subtitle: 'Partnership',
          description: 'Roadmaps for features, seasons, and ecosystem integrations.',
          icon: 'FaRocket',
          gradient: ['#ef4444', '#f97316']
        },
        {
          title: 'Trusted',
          subtitle: 'Delivery',
          description: 'Clear outcomes, stakeholder confidence, and playbooks.',
          icon: 'FaCheck',
          gradient: ['#eab308', '#f97316']
        },
        {
          title: 'Innovation',
          subtitle: 'Excellence',
          description: 'Cutting-edge technology solutions with proven scalability.',
          icon: 'FaCogs',
          gradient: ['#6366f1', '#a855f7']
        }
      ]
    },
    cta: {
      backgroundImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/NFT_Marketplaces-2_wmfo2c.jpg',
      icon: 'FaRocket',
      heading: 'Launch a Marketplace Users Love',
      paragraphs: [
        'Ship a creator-friendly marketplace with real liquidity and strong safety. We will define the strategy, build the platform, and keep it evolving with your community.'
      ],
      buttons: [
        {
          text: 'Schedule Marketplace Consultation',
          link: 'https://calendly.com/altiorainfotech/30min',
          primary: true,
          icon: 'FaRocket',
          external: true
        },
        {
          text: 'Get Quote',
          link: '/contact',
          primary: false,
          icon: 'FaEye',
          external: false
        }
      ]
    }
  }
};

async function seedNftPage() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const existingPage = await Web3Service.findOne({ pageId: 'nft' });

    if (existingPage) {
      console.log('NFT page already exists. Updating...');
      await Web3Service.findOneAndUpdate(
        { pageId: 'nft' },
        nftPageData,
        { new: true, upsert: true }
      );
      console.log('NFT page updated successfully!');
    } else {
      console.log('Creating new NFT page...');
      await Web3Service.create(nftPageData);
      console.log('NFT page created successfully!');
    }

    console.log('Seed completed successfully!');
  } catch (error) {
    console.error('Error seeding NFT page:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  }
}

seedNftPage();