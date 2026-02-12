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

const web3ServicesData = [
  {
    serviceType: 'blockchain',
    heroSection: {
      title: 'Blockchain Development Services',
      subtitle: 'Building the Future of Web3',
      description: 'We build, test, and launch blockchain projects that perform — on-chain and in the real world.',
      backgroundImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Blockchain_Development_Services-1_bsu3hu.png',
      ctaText: 'Get Started',
      ctaLink: '/contact'
    },
    whatIsSection: {
      title: 'The Foundation of Trust',
      subtitle: 'Blockchain is the internet\'s trust layer.',
      description: 'Using cryptography, consensus, and immutable ledgers, it creates a shared, verifiable record without a single gatekeeper—enabling transparent collaboration, auditable data, smart-contract automation, and scalable systems for tokens, payments, supply chains, and digital identity.',
      additionalDescription: 'Altiora Infotech turns that promise into production. We architect and ship secure, scalable blockchain solutions aligned to business goals—designing token economies, writing and auditing smart contracts, integrating dApps with your stack, and managing the full lifecycle from discovery to post-launch support for measurable outcomes.',
      icon: 'FaGlobe'
    },
    whyMattersSection: {
      title: 'Why Blockchain Matters',
      subtitle: 'Unique benefits that transform business operations.',
      technicalAdvantages: [
        'Immutable ledgers that cannot be altered',
        'Decentralized consensus mechanisms',
        'Tamper-proof data integrity',
        'Reduced intermediary dependencies'
      ],
      businessBenefits: [
        'Enhanced partner visibility and trust',
        'Elimination of reconciliation costs and reduced fraud',
        'Self-executing smart contract automation',
        'Support for new business models (NFTs, DAOs, tokenization)'
      ]
    },
    whyChoosePoints: [
      { text: 'Strategic Design – Business-aligned solutions', icon: 'FaCode' },
      { text: 'Long-term Focus – Sustainable architecture', icon: 'FaShieldAlt' },
      { text: 'Practical Innovation – Real-world performance', icon: 'FaRocket' }
    ],
    services: [
      { name: 'Smart Contract Development', image: '/images/web3/blockchain/Smart Contract.svg' },
      { name: 'Token Development', image: '/images/web3/blockchain/Token.svg' },
      { name: 'DeFi Protocol Development', image: '/images/web3/blockchain/DeFi.svg' },
      { name: 'NFT Marketplace', image: '/images/web3/blockchain/NFT.svg' },
      { name: 'DAO Development', image: '/images/web3/blockchain/DAO.svg' },
      { name: 'Cross-Chain Solutions', image: '/images/web3/blockchain/End-to-End.svg' },
      { name: 'Security Audits', image: '/images/web3/blockchain/Security.svg' },
      { name: 'Blockchain Consulting', image: '/images/web3/blockchain/Blockchain.svg' },
      { name: 'dApp Development', image: '/images/web3/blockchain/dApp.svg' }
    ],
    processSteps: [
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
    whyWorkWithUs: [
      { text: 'Domain Expertise – Deep knowledge in blockchain, Web3, smart contracts, tokenomics, and architecture.', icon: 'FaNetworkWired', title: 'Expertise', subtitle: 'Blockchain & Web3' },
      { text: 'Custom Solutions – Tailored solutions, not templates; each project fits your specific business logic.', icon: 'FaTools', title: 'Custom', subtitle: 'Solutions' },
      { text: 'End-to-End Capability – Complete service from ideation to maintenance.', icon: 'FaCode', title: 'End-to-End', subtitle: 'Service' },
      { text: 'Security-First Approach – Rigorous audits and security embedded in every layer.', icon: 'FaShieldAlt', title: 'Security', subtitle: 'First' },
      { text: 'Scalable & Future-ready – Modular design for evolving protocols and upgrades.', icon: 'FaRocket', title: 'Scalable', subtitle: 'Architecture' },
      { text: 'Client-Centric Philosophy – Your success is our success; expect partnership and guidance.', icon: 'FaHandshake', title: 'Client-First', subtitle: 'Philosophy' }
    ],
    ctaSection: {
      title: 'Ready to Build Your Blockchain Solution?',
      description: 'Blockchain is a means to real business outcomes—not a science project. At Altiora Infotech, we pair deep Web3 engineering with clear commercial thinking to deliver solutions that are secure, scalable, and aligned to your KPIs.',
      additionalDescription: 'Ready to turn a concept into a roadmap? Share your goals and constraints, and we\'ll come back with a crisp blueprint: architecture options, timeline and milestones, security and compliance approach, and an investment estimate you can act on.',
      backgroundImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Blockchain_Development_Services-2_n1k5oc.png',
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
      title: 'Blockchain Development Services | Altiora Infotech',
      description: 'Professional blockchain development services. We build secure, scalable blockchain solutions, smart contracts, and dApps for your business needs.'
    }
  },
  {
    serviceType: 'defi',
    heroSection: {
      title: 'DeFi Development Services',
      subtitle: 'Decentralized Finance Solutions',
      description: 'Build with confidence in DeFi development. We specialize in DeFi protocols and DEX development to scale securely and accelerate growth.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1760096655/DeFi_Development_Services_bsu3hu.png',
      ctaText: 'Get Started',
      ctaLink: '/contact'
    },
    whatIsSection: {
      title: 'The Future of Finance',
      subtitle: 'DeFi is reshaping financial services.',
      description: 'Decentralized Finance (DeFi) leverages blockchain technology to recreate traditional financial systems without intermediaries. Through smart contracts, DeFi enables lending, borrowing, trading, and yield farming in a permissionless, transparent ecosystem.',
      additionalDescription: 'At Altiora Infotech, we build robust DeFi protocols that prioritize security, scalability, and user experience while ensuring regulatory compliance and sustainable tokenomics.',
      icon: 'FaChartLine'
    },
    whyChoosePoints: [
      { text: 'DeFi Expertise – Deep knowledge in protocols, AMMs, and yield strategies', icon: 'FaCode' },
      { text: 'Security Focus – Rigorous audits and battle-tested security practices', icon: 'FaShieldAlt' },
      { text: 'Scalable Solutions – Built for high-volume trading and liquidity', icon: 'FaRocket' }
    ],
    services: [
      { name: 'Protocol Architecture', image: '/images/web3/blockchain/Smart Contract.svg' },
      { name: 'Smart Contracts', image: '/images/web3/blockchain/Token.svg' },
      { name: 'Lending Markets', image: '/images/web3/blockchain/DeFi.svg' },
      { name: 'AMMs & Trading', image: '/images/web3/blockchain/NFT.svg' },
      { name: 'Yield Strategies', image: '/images/web3/blockchain/DAO.svg' },
      { name: 'Cross-Chain DeFi', image: '/images/web3/blockchain/End-to-End.svg' },
      { name: 'Oracles & Data', image: '/images/web3/blockchain/Security.svg' },
      { name: 'Security & Ops', image: '/images/web3/blockchain/Blockchain.svg' },
      { name: 'Token Economics', image: '/images/web3/blockchain/dApp.svg' }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Protocol Design',
        description: 'Architecture planning, tokenomics design, risk assessment, and regulatory compliance review.',
        icon: '🏗️'
      },
      {
        step: 2,
        title: 'Smart Contract Development',
        description: 'Core protocol contracts, governance mechanisms, security implementations, and gas optimization.',
        icon: '⚙️'
      },
      {
        step: 3,
        title: 'Security Auditing',
        description: 'Comprehensive security audits, penetration testing, and formal verification processes.',
        icon: '🛡️'
      },
      {
        step: 4,
        title: 'Frontend Integration',
        description: 'User interface development, wallet integration, and seamless user experience design.',
        icon: '💻'
      },
      {
        step: 5,
        title: 'Testing & Deployment',
        description: 'Testnet deployment, stress testing, mainnet launch, and liquidity bootstrapping.',
        icon: '🚀'
      }
    ],
    whyWorkWithUs: [
      { text: 'DeFi Expertise – Specialized knowledge in decentralized finance protocols and mechanisms.', icon: 'FaChartLine', title: 'DeFi', subtitle: 'Expertise' },
      { text: 'Security First – Rigorous security practices and comprehensive audit processes.', icon: 'FaShieldAlt', title: 'Security', subtitle: 'First' },
      { text: 'Scalable Architecture – Built for high-volume trading and institutional adoption.', icon: 'FaRocket', title: 'Scalable', subtitle: 'Architecture' },
      { text: 'Regulatory Compliance – Ensuring compliance with evolving DeFi regulations.', icon: 'FaHandshake', title: 'Compliance', subtitle: 'Ready' }
    ],
    ctaSection: {
      title: 'Ready to Launch Your DeFi Protocol?',
      description: 'DeFi is revolutionizing finance through decentralized protocols. At Altiora Infotech, we combine deep DeFi expertise with security-first development to create protocols that are both innovative and trustworthy.',
      additionalDescription: 'Let\'s discuss your DeFi vision and create a roadmap for success. From tokenomics to security audits, we\'ll guide you through every step of the development process.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1760096655/DeFi_CTA_Background.png',
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
      title: 'DeFi Development Services | Altiora Infotech',
      description: 'Professional DeFi development services. We build secure decentralized finance protocols, AMMs, and yield farming platforms for the future of finance.'
    }
  },
  {
    serviceType: 'wallet',
    heroSection: {
      title: 'Crypto Wallet Development',
      subtitle: 'Secure Digital Asset Management',
      description: 'Build secure, user-friendly, and scalable wallets for Web3 adoption.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1760096655/Wallet_Development_Services.png',
      ctaText: 'Get Started',
      ctaLink: '/contact'
    },
    whatIsSection: {
      title: 'Gateway to Web3',
      subtitle: 'Wallets are the gateway to Web3.',
      description: 'Crypto wallets are essential infrastructure for Web3 adoption. Through advanced cryptography, secure key management, and user-friendly design, wallets enable seamless interaction with Web3 while maintaining full control over your digital identity and assets.',
      additionalDescription: 'We build wallets that bridge traditional finance with DeFi, integrate with dApps, and provide enterprise-grade security—designing user experiences that make Web3 accessible while ensuring robust protection against threats.',
      icon: 'FaWallet'
    },
    whyChoosePoints: [
      { text: 'Wallet Expertise – Deep knowledge in cryptography and security', icon: 'FaShieldAlt' },
      { text: 'Multi-Chain Support – Compatible with multiple blockchain networks', icon: 'FaNetworkWired' },
      { text: 'User Experience – Intuitive design for mass adoption', icon: 'FaCode' }
    ],
    services: [
      { name: 'Non-Custodial Wallets', image: '/images/web3/blockchain/Smart Contract.svg' },
      { name: 'Custodial Wallets', image: '/images/web3/blockchain/Token.svg' },
      { name: 'MPC Wallets', image: '/images/web3/blockchain/DeFi.svg' },
      { name: 'Multi-Chain Support', image: '/images/web3/blockchain/NFT.svg' },
      { name: 'dApp Integration', image: '/images/web3/blockchain/DAO.svg' },
      { name: 'Security & Compliance', image: '/images/web3/blockchain/End-to-End.svg' },
      { name: 'On-Ramps & Off-Ramps', image: '/images/web3/blockchain/Security.svg' },
      { name: 'Payment Solutions', image: '/images/web3/blockchain/Blockchain.svg' },
      { name: 'Analytics & Monitoring', image: '/images/web3/blockchain/dApp.svg' }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Security Architecture',
        description: 'Key management design, encryption protocols, and security framework implementation.',
        icon: '🔐'
      },
      {
        step: 2,
        title: 'Multi-Chain Integration',
        description: 'Blockchain network integration, cross-chain compatibility, and protocol support.',
        icon: '🔗'
      },
      {
        step: 3,
        title: 'User Interface Design',
        description: 'Intuitive UX/UI design, accessibility features, and user onboarding flows.',
        icon: '🎨'
      },
      {
        step: 4,
        title: 'Security Testing',
        description: 'Penetration testing, security audits, and vulnerability assessments.',
        icon: '🛡️'
      },
      {
        step: 5,
        title: 'Deployment & Support',
        description: 'App store deployment, user support systems, and ongoing maintenance.',
        icon: '🚀'
      }
    ],
    whyWorkWithUs: [
      { text: 'Wallet & Web3 Expertise – Deep knowledge in wallets, Web3, cryptography, multi-chain support, and security.', icon: 'FaWallet', title: 'Expertise', subtitle: 'Wallet & Web3' },
      { text: 'Custom Solutions – Tailored wallet solutions, not templates; each project fits your specific user needs.', icon: 'FaTools', title: 'Custom', subtitle: 'Solutions' },
      { text: 'End-to-End Service – Complete service from ideation to maintenance and user support.', icon: 'FaCode', title: 'End-to-End', subtitle: 'Service' },
      { text: 'Security Focus – Enterprise-grade security with comprehensive audit processes.', icon: 'FaShieldAlt', title: 'Security', subtitle: 'Focus' }
    ],
    ctaSection: {
      title: 'Ready to Build Your Crypto Wallet?',
      description: 'Wallets are the foundation of Web3 adoption. At Altiora Infotech, we combine security expertise with user-centric design to create wallets that users trust and love to use.',
      additionalDescription: 'Let\'s discuss your wallet vision and create a secure, scalable solution that drives Web3 adoption for your users.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1760096655/Wallet_CTA_Background.png',
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
      title: 'Crypto Wallet Development | Altiora Infotech',
      description: 'Professional crypto wallet development services. We build secure, user-friendly wallets with multi-chain support and enterprise-grade security.'
    }
  }
];

async function seedWeb3Services() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Web3Service.deleteMany({});
    console.log('Cleared existing Web3 services');

    // Insert new data
    const result = await Web3Service.insertMany(web3ServicesData);
    console.log(`Inserted ${result.length} Web3 services`);

    console.log('Web3 services seeded successfully!');
  } catch (error) {
    console.error('Error seeding Web3 services:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

// Run the seeding function
seedWeb3Services();
// A
dditional Web3 Services Data
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

// Uncomment to run additional seeding
// seedAdditionalWeb3Services();