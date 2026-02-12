const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

// Web3 Service Schema (replicated for seeding)
const Web3ServiceSchema = new mongoose.Schema({
  serviceType: { 
    type: String, 
    required: true,
    enum: [
      'blockchain',
      'blockchain-development-services-building-the-future-of-web3-with-altiora-infotech',
      'dao',
      'dapp',
      'defi',
      'nft',
      'security-audit',
      'smart-contract',
      'tokenization',
      'wallet',
      'web3-marketing',
      'zk-privacy'
    ],
    unique: true
  },
  heroSection: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },
    backgroundImage: { type: String, required: true },
    ctaText: { type: String, required: true },
    ctaLink: { type: String, required: true }
  },
  whatIsSection: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },
    additionalDescription: { type: String },
    icon: { type: String, required: true }
  },
  whyMattersSection: {
    title: { type: String },
    subtitle: { type: String },
    technicalAdvantages: [{ type: String }],
    businessBenefits: [{ type: String }]
  },
  whyChoosePoints: [{
    text: { type: String, required: true },
    icon: { type: String, required: true }
  }],
  services: [{
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String, required: true },
    link: { type: String, default: '/contact' }
  }],
  processSteps: [{
    step: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true }
  }],
  whyWorkWithUs: [{
    text: { type: String, required: true },
    icon: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, required: true }
  }],
  ctaSection: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    additionalDescription: { type: String },
    backgroundImage: { type: String, required: true },
    primaryCTA: {
      text: { type: String, required: true },
      link: { type: String, required: true }
    },
    secondaryCTA: {
      text: { type: String, required: true },
      link: { type: String, required: true }
    }
  },
  seoMetadata: {
    title: { type: String, required: true },
    description: { type: String, required: true }
  }
}, {
  timestamps: true
});

const Web3Service = mongoose.model('Web3Service', Web3ServiceSchema, 'web3');

const additionalWeb3ServicesData = [
  {
    serviceType: 'dao',
    heroSection: {
      title: 'DAO Development Services',
      subtitle: 'Decentralized Autonomous Organizations',
      description: 'Build transparent, community-driven organizations with smart contract governance and tokenized decision-making.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1760096655/DAO_Development_Services.png',
      ctaText: 'Get Started',
      ctaLink: '/contact'
    },
    whatIsSection: {
      title: 'The Future of Organizations',
      subtitle: 'DAOs represent the next evolution of organizational structures.',
      description: 'Decentralized Autonomous Organizations (DAOs) use blockchain technology and smart contracts to enable transparent, democratic governance without traditional hierarchical structures.',
      additionalDescription: 'At Altiora Infotech, we build robust DAO infrastructure that empowers communities to make collective decisions, manage treasuries, and coordinate activities through transparent, automated processes.',
      icon: 'FaNetworkWired'
    },
    whyChoosePoints: [
      { text: 'DAO Expertise – Deep knowledge in governance mechanisms and tokenomics', icon: 'FaCode' },
      { text: 'Community Focus – Building tools that empower decentralized communities', icon: 'FaHandshake' },
      { text: 'Transparent Systems – Fully auditable and transparent governance processes', icon: 'FaShieldAlt' }
    ],
    services: [
      { name: 'Governance Tokens', image: '/images/web3/blockchain/Token.svg' },
      { name: 'Voting Mechanisms', image: '/images/web3/blockchain/DAO.svg' },
      { name: 'Treasury Management', image: '/images/web3/blockchain/DeFi.svg' },
      { name: 'Proposal Systems', image: '/images/web3/blockchain/Smart Contract.svg' },
      { name: 'Multi-Sig Wallets', image: '/images/web3/blockchain/Security.svg' },
      { name: 'Community Tools', image: '/images/web3/blockchain/dApp.svg' }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Governance Design',
        description: 'Design governance structure, voting mechanisms, and decision-making processes.',
        icon: '🏛️'
      },
      {
        step: 2,
        title: 'Token Economics',
        description: 'Create tokenomics model, distribution strategy, and incentive mechanisms.',
        icon: '💰'
      },
      {
        step: 3,
        title: 'Smart Contract Development',
        description: 'Develop governance contracts, treasury management, and voting systems.',
        icon: '⚙️'
      },
      {
        step: 4,
        title: 'Community Platform',
        description: 'Build user interfaces for proposal creation, voting, and community interaction.',
        icon: '👥'
      },
      {
        step: 5,
        title: 'Launch & Governance',
        description: 'Deploy DAO infrastructure and transition to community governance.',
        icon: '🚀'
      }
    ],
    whyWorkWithUs: [
      { text: 'DAO Expertise – Specialized knowledge in decentralized governance and community building.', icon: 'FaNetworkWired', title: 'DAO', subtitle: 'Expertise' },
      { text: 'Community First – Building tools that truly empower decentralized communities.', icon: 'FaHandshake', title: 'Community', subtitle: 'First' },
      { text: 'Transparent Systems – Fully auditable governance with transparent decision-making.', icon: 'FaShieldAlt', title: 'Transparent', subtitle: 'Systems' },
      { text: 'Scalable Architecture – Built to handle growing communities and complex governance.', icon: 'FaRocket', title: 'Scalable', subtitle: 'Architecture' }
    ],
    ctaSection: {
      title: 'Ready to Build Your DAO?',
      description: 'DAOs are transforming how organizations operate through transparent, community-driven governance. Let us help you build the infrastructure for your decentralized community.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1760096655/DAO_CTA_Background.png',
      primaryCTA: {
        text: 'Book Discovery Call',
        link: 'https://calendly.com/altiorainfotech/30min'
      },
      secondaryCTA: {
        text: 'Send Your Brief',
        link: '/contact'
      }
    },
    seoMetadata: {
      title: 'DAO Development Services | Altiora Infotech',
      description: 'Professional DAO development services. We build decentralized autonomous organizations with transparent governance and community-driven decision making.'
    }
  },
  {
    serviceType: 'dapp',
    heroSection: {
      title: 'dApp Development Services',
      subtitle: 'Decentralized Applications',
      description: 'Build powerful decentralized applications that leverage blockchain technology for enhanced security, transparency, and user control.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1760096655/dApp_Development_Services.png',
      ctaText: 'Get Started',
      ctaLink: '/contact'
    },
    whatIsSection: {
      title: 'The Power of Decentralization',
      subtitle: 'dApps represent the future of application development.',
      description: 'Decentralized Applications (dApps) run on blockchain networks, offering users greater control, transparency, and security compared to traditional centralized applications.',
      additionalDescription: 'At Altiora Infotech, we build dApps that seamlessly integrate with blockchain infrastructure while providing intuitive user experiences that drive adoption and engagement.',
      icon: 'FaCode'
    },
    whyChoosePoints: [
      { text: 'dApp Expertise – Deep knowledge in decentralized application architecture', icon: 'FaCode' },
      { text: 'User Experience – Intuitive interfaces that make Web3 accessible', icon: 'FaEye' },
      { text: 'Multi-Chain Support – Compatible with multiple blockchain networks', icon: 'FaNetworkWired' }
    ],
    services: [
      { name: 'Frontend Development', image: '/images/web3/blockchain/dApp.svg' },
      { name: 'Smart Contract Integration', image: '/images/web3/blockchain/Smart Contract.svg' },
      { name: 'Wallet Integration', image: '/images/web3/blockchain/Security.svg' },
      { name: 'IPFS Integration', image: '/images/web3/blockchain/Blockchain.svg' },
      { name: 'Multi-Chain Support', image: '/images/web3/blockchain/End-to-End.svg' },
      { name: 'User Analytics', image: '/images/web3/blockchain/Token.svg' }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Architecture Planning',
        description: 'Design dApp architecture, blockchain integration, and user flow planning.',
        icon: '🏗️'
      },
      {
        step: 2,
        title: 'Smart Contract Development',
        description: 'Develop and deploy smart contracts that power your dApp functionality.',
        icon: '⚙️'
      },
      {
        step: 3,
        title: 'Frontend Development',
        description: 'Build responsive, intuitive user interfaces with Web3 integration.',
        icon: '💻'
      },
      {
        step: 4,
        title: 'Testing & Security',
        description: 'Comprehensive testing, security audits, and performance optimization.',
        icon: '🛡️'
      },
      {
        step: 5,
        title: 'Deployment & Support',
        description: 'Deploy to mainnet and provide ongoing maintenance and support.',
        icon: '🚀'
      }
    ],
    whyWorkWithUs: [
      { text: 'dApp Expertise – Specialized knowledge in decentralized application development and Web3 integration.', icon: 'FaCode', title: 'dApp', subtitle: 'Expertise' },
      { text: 'User-Centric Design – Creating intuitive experiences that drive Web3 adoption.', icon: 'FaEye', title: 'User-Centric', subtitle: 'Design' },
      { text: 'Multi-Chain Ready – Supporting multiple blockchain networks for maximum reach.', icon: 'FaNetworkWired', title: 'Multi-Chain', subtitle: 'Ready' },
      { text: 'Full-Stack Capability – End-to-end development from smart contracts to frontend.', icon: 'FaTools', title: 'Full-Stack', subtitle: 'Capability' }
    ],
    ctaSection: {
      title: 'Ready to Build Your dApp?',
      description: 'dApps are the gateway to Web3 adoption. Let us help you build decentralized applications that users love and trust.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1760096655/dApp_CTA_Background.png',
      primaryCTA: {
        text: 'Book Discovery Call',
        link: 'https://calendly.com/altiorainfotech/30min'
      },
      secondaryCTA: {
        text: 'Send Your Brief',
        link: '/contact'
      }
    },
    seoMetadata: {
      title: 'dApp Development Services | Altiora Infotech',
      description: 'Professional dApp development services. We build decentralized applications with intuitive user experiences and robust blockchain integration.'
    }
  },
  {
    serviceType: 'nft',
    heroSection: {
      title: 'NFT Development Services',
      subtitle: 'Non-Fungible Token Solutions',
      description: 'Create, launch, and manage NFT projects with custom smart contracts, marketplaces, and innovative utility features.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1760096655/NFT_Development_Services.png',
      ctaText: 'Get Started',
      ctaLink: '/contact'
    },
    whatIsSection: {
      title: 'Digital Ownership Revolution',
      subtitle: 'NFTs are transforming digital ownership and creativity.',
      description: 'Non-Fungible Tokens (NFTs) represent unique digital assets on the blockchain, enabling true digital ownership, provenance tracking, and new monetization models for creators.',
      additionalDescription: 'At Altiora Infotech, we build comprehensive NFT ecosystems that go beyond simple collectibles, creating utility-driven projects that provide real value to holders and communities.',
      icon: 'FaCoins'
    },
    whyChoosePoints: [
      { text: 'NFT Expertise – Deep knowledge in token standards and marketplace integration', icon: 'FaCoins' },
      { text: 'Creative Solutions – Innovative utility features beyond simple collectibles', icon: 'FaCode' },
      { text: 'Market Ready – Built for major marketplaces and cross-platform compatibility', icon: 'FaNetworkWired' }
    ],
    services: [
      { name: 'NFT Smart Contracts', image: '/images/web3/blockchain/Smart Contract.svg' },
      { name: 'NFT Marketplaces', image: '/images/web3/blockchain/NFT.svg' },
      { name: 'Minting Platforms', image: '/images/web3/blockchain/Token.svg' },
      { name: 'Utility Features', image: '/images/web3/blockchain/dApp.svg' },
      { name: 'Royalty Systems', image: '/images/web3/blockchain/DeFi.svg' },
      { name: 'Cross-Chain NFTs', image: '/images/web3/blockchain/End-to-End.svg' }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Concept & Strategy',
        description: 'Define NFT utility, tokenomics, and go-to-market strategy.',
        icon: '💡'
      },
      {
        step: 2,
        title: 'Smart Contract Development',
        description: 'Develop custom NFT contracts with advanced features and utilities.',
        icon: '⚙️'
      },
      {
        step: 3,
        title: 'Marketplace Integration',
        description: 'Integrate with major marketplaces and build custom trading platforms.',
        icon: '🏪'
      },
      {
        step: 4,
        title: 'Minting Platform',
        description: 'Create user-friendly minting interfaces and reveal mechanisms.',
        icon: '🎨'
      },
      {
        step: 5,
        title: 'Launch & Community',
        description: 'Execute launch strategy and build engaged NFT communities.',
        icon: '🚀'
      }
    ],
    whyWorkWithUs: [
      { text: 'NFT Expertise – Specialized knowledge in NFT standards, marketplaces, and utility development.', icon: 'FaCoins', title: 'NFT', subtitle: 'Expertise' },
      { text: 'Creative Innovation – Building utility-driven NFT projects that provide real value.', icon: 'FaCode', title: 'Creative', subtitle: 'Innovation' },
      { text: 'Market Integration – Seamless integration with major NFT marketplaces and platforms.', icon: 'FaNetworkWired', title: 'Market', subtitle: 'Integration' },
      { text: 'Community Building – Strategies and tools for building engaged NFT communities.', icon: 'FaHandshake', title: 'Community', subtitle: 'Building' }
    ],
    ctaSection: {
      title: 'Ready to Launch Your NFT Project?',
      description: 'NFTs are more than digital collectibles—they\'re the foundation of new digital economies. Let us help you create NFT projects that provide real utility and value.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1760096655/NFT_CTA_Background.png',
      primaryCTA: {
        text: 'Book Discovery Call',
        link: 'https://calendly.com/altiorainfotech/30min'
      },
      secondaryCTA: {
        text: 'Send Your Brief',
        link: '/contact'
      }
    },
    seoMetadata: {
      title: 'NFT Development Services | Altiora Infotech',
      description: 'Professional NFT development services. We create custom NFT projects, marketplaces, and utility-driven token ecosystems.'
    }
  }
];

async function seedAdditionalWeb3Services() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB for additional seeding');

    // Insert additional data
    const result = await Web3Service.insertMany(additionalWeb3ServicesData);
    console.log(`Inserted ${result.length} additional Web3 services`);

    console.log('Additional Web3 services seeded successfully!');
  } catch (error) {
    console.error('Error seeding additional Web3 services:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

// Run the seeding function
seedAdditionalWeb3Services();