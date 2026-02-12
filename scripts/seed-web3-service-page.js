const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const ServicePageSchema = new mongoose.Schema({
  pageType: String,
  slug: String,
  isActive: Boolean,
  heroSection: Object,
  stats: Array,
  overviewSection: Object,
  servicesSection: Object,
  blockchainCTA: Object,
  outcomesSection: Object,
  trendsSection: Object,
  techStackSection: Object,
  securitySection: Object,
  whyChooseSection: Object,
  howWeWorkSection: Object,
  finalCTASection: Object,
  seoMetadata: Object
}, { timestamps: true });

const ServicePage = mongoose.models.ServicePage || mongoose.model('ServicePage', ServicePageSchema);

const web3PageData = {
  pageType: 'web3',
  slug: 'web3',
  isActive: true,
  heroSection: {
    title: 'Web3 & Blockchain Development',
    subtitle: 'Secure contracts, tokenized assets, & interoperable rails engineered for measurable outcomes.',
    description: 'From concept to deployment, we build secure smart contracts, tokenized assets, on-chain payments and settlement, wallets and custody, interoperable data flows, and analytics that make outcomes visible.',
    ctaButtons: [
      {
        text: 'Start Your Web3 Journey',
        link: '/contact',
        variant: 'primary'
      },
      {
        text: 'View Portfolio',
        link: '/portfolio',
        variant: 'secondary'
      }
    ]
  },
  stats: [
    {
      value: 150,
      suffix: '+',
      label: 'Projects Delivered',
      icon: 'Trophy'
    },
    {
      value: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      icon: 'Users'
    },
    {
      value: 50,
      prefix: '$',
      suffix: 'M+',
      label: 'Value Secured',
      icon: 'Shield'
    },
    {
      value: 24,
      suffix: '/7',
      label: 'Support Available',
      icon: 'Zap'
    }
  ],
  overviewSection: {
    title: 'Overview',
    description: 'From discovery to production, we design and ship dependable Web3 systems that are measurable and audit-ready. Our teams blend product thinking, security discipline, and hands-on engineering to turn complex ideas into stable software.'
  },
  servicesSection: {
    title: 'Explore Our Web3 Services',
    subtitle: 'Comprehensive blockchain solutions',
    description: 'We build secure smart contracts, tokenized assets, on-chain payments and settlement, wallets and custody, interoperable data flows, and analytics that make outcomes visible.',
    cards: [
      {
        icon: '/icons/Web3 Marketing Services/Security & Audits.png',
        title: 'Security & Audits',
        description: 'Comprehensive smart contract audits and security reviews with external verification when required.',
        cta: 'Schedule security assessment',
        link: '/services/web3/security-audit',
        comingSoon: false
      },
      {
        icon: '/icons/Web3 Marketing Services/dApp Development.png',
        title: 'DApp Engineering',
        description: 'Full-stack dApp development and blockchain solutions with seamless user experiences.',
        cta: 'View engineering solutions',
        link: '/services/web3/dapp',
        comingSoon: false
      },
      {
        icon: '/icons/Web3 Marketing Services/Smart Contract Development.png',
        title: 'Smart Contracts',
        description: 'Solidity/Rust contracts with comprehensive testing, simulations, and audit-ready documentation.',
        cta: 'Get smart contract quote',
        link: '/services/web3/smart-contract',
        comingSoon: false
      },
      {
        icon: '/icons/Web3 Marketing Services/RWA & Tokenization.png',
        title: 'Tokenization & RWA',
        description: 'Compliance-ready tokenization rails for real-world assets, utility tokens, and revenue-share models.',
        cta: 'Explore tokenization',
        link: '/services/web3/tokenization',
        comingSoon: false
      },
      {
        icon: '/icons/Web3 Marketing Services/Web3 Marketing & Gamification.png',
        title: 'Growth & Community',
        description: 'Web3 marketing strategies, community building, and gamification features that drive engagement.',
        cta: 'Boost your growth',
        link: '/services/web3/web3-marketing',
        comingSoon: false
      },
      {
        icon: '/icons/Web3 Marketing Services/Wallet Development.png',
        title: 'Wallets & DeFi',
        description: 'Account abstraction wallets, DeFi protocols, liquidity pools, and automated market makers.',
        cta: 'Build wallet solutions',
        link: '/services/web3/wallet',
        comingSoon: false
      },
      {
        icon: '/icons/Web3 Marketing Services/NFT Solutions.png',
        title: 'NFT Assets & Governance',
        description: 'Custom NFT platforms and DAO governance systems with voting mechanisms and treasury management.',
        cta: 'Launch digital assets',
        link: '/services/web3/nft',
        comingSoon: false
      },
      {
        icon: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/ZK_Infra_Privacy_bhfthy.svg',
        title: 'ZK Infra & Privacy',
        description: 'DePIN infrastructure, zero-knowledge proofs, and privacy-focused decentralized solutions.',
        cta: 'Implement privacy tech',
        link: '/services/web3/zk-privacy',
        comingSoon: false
      },
      {
        icon: '/icons/Web3 Marketing Services/DeFi Engineering.png',
        title: 'Payments & Treasury',
        description: 'On-chain payment rails, stablecoin integration, invoicing, and automated treasury operations.',
        cta: 'Setup payment systems',
        link: '/services/web3/blockchain',
        comingSoon: false
      },
      {
        icon: '/icons/Web3 Marketing Services/Community.svg',
        title: 'DAO Governance',
        description: 'Decentralized autonomous organizations with voting mechanisms, proposal systems, and treasury management.',
        cta: 'Build DAO solutions',
        link: '/services/web3/dao',
        comingSoon: false
      },
      {
        icon: '/icons/Web3 Marketing Services/DeFi Engineering.png',
        title: 'DeFi Protocols',
        description: 'Advanced DeFi protocols including yield farming, liquidity mining, and automated market making strategies.',
        cta: 'Launch DeFi protocol',
        link: '/services/web3/defi',
        comingSoon: false
      },
      {
        icon: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/DePIN_Networks_xa7ald.svg',
        title: 'DePIN Networks',
        description: 'Design and deploy decentralized physical infrastructure: device onboarding, proofs, incentives, and data rails.',
        cta: 'Build a DePIN network',
        link: '/depin',
        comingSoon: false
      },
      {
        icon: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/RWA_Tokenization_o67dph.svg',
        title: 'RWA Tokenization',
        description: 'From legal structuring to on-chain issuance, custody, and investor portals for real-world assets.',
        cta: 'Tokenize real assets',
        link: '/rwa',
        comingSoon: false
      },
      {
        icon: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Gamify_Loyalty_yp8ven.svg',
        title: 'Gamify & Loyalty',
        description: 'Quests, points, tiers, and on-chain rewards that increase retention, engagement, and referrals.',
        cta: 'Launch gamified growth',
        link: '/gamify',
        comingSoon: false
      },
      {
        icon: 'Clock',
        title: 'More Services',
        description: 'Additional Web3 services and solutions are coming soon. Stay tuned for exciting new offerings.',
        cta: 'Coming Soon',
        link: '#',
        comingSoon: true
      }
    ]
  },
  blockchainCTA: {
    title: 'Explore Blockchain Development',
    description: 'Go deeper into how we architect, audit, and ship production grade blockchains, from smart contracts and dApps to RWA rails, built for security, scalability, and measurable ROI. Explore our methodology, tech stack, and case backed outcomes that power faster launches, lower gas costs, and reliable on chain performance.',
    buttonText: 'Explore Blockchain',
    buttonLink: 'https://altiorainfotech.com/services/web3/blockchain-development-services-building-the-future-of-web3-with-altiora-infotech'
  },
  outcomesSection: {
    title: 'Outcomes You Can Prove',
    subtitle: 'Measurable results that stakeholders can verify with complete transparency',
    items: [
      {
        title: 'Lower Transaction Costs',
        icon: 'Coins',
        summary: 'Optimized gas usage and efficient contract design reduce operational expenses by up to 60%',
        details: 'Advanced testing includes invariant preservation, property-based fuzzing, formal verification, differential testing against multiple implementations, automated vulnerability scanning, and continuous security monitoring in production environments.',
        metric: '60% reduction',
        impact: 'Save thousands monthly on gas fees through optimized contract architecture and Layer 2 integration.'
      },
      {
        title: 'Faster Time to Finality',
        icon: 'Zap',
        summary: 'Layer 2 integration and optimized consensus mechanisms accelerate transaction settlement',
        details: 'Smart contract security requires formal verification, invariant testing, and property-based fuzzing. Modern toolchains like Foundry, Echidna, and Certora enable mathematical proofs of contract correctness.',
        metric: '< 2 seconds',
        impact: 'Achieve near-instant settlement with Layer 2 solutions and optimized consensus mechanisms.'
      },
      {
        title: 'Safer Key Management',
        icon: 'KeyRound',
        summary: 'Multi-signature wallets, hardware security modules, and social recovery for enhanced security',
        details: 'Multi-signature wallets, hardware security modules, and social recovery mechanisms provide enterprise-grade security while maintaining usability for end users.',
        metric: 'Zero breaches',
        impact: 'Eliminate single points of failure with distributed key management and recovery systems.'
      },
      {
        title: 'Higher Conversion',
        icon: 'TrendingUp',
        summary: 'Seamless wallet flows and account abstraction increase user onboarding success rates',
        details: 'Account abstraction enables gasless transactions, social recovery, and programmable spending policies. Intent systems allow users to express desired outcomes rather than specific transaction paths.',
        metric: '+45% conversion',
        impact: 'Boost user adoption with frictionless onboarding and intuitive wallet experiences.'
      },
      {
        title: 'Cleaner Audits',
        icon: 'CheckCircle2',
        summary: 'Comprehensive documentation and formal verification streamline security audit processes',
        details: 'Comprehensive documentation, formal verification, and automated testing suites ensure audit-ready code from day one, reducing time-to-market and security risks.',
        metric: 'Audit-ready',
        impact: 'Pass security audits faster with comprehensive documentation and formal verification.'
      },
      {
        title: 'Verifiable Reporting',
        icon: 'Activity',
        summary: 'On-chain analytics and transparent metrics that stakeholders can independently validate',
        details: 'On-chain analytics provide transparent, verifiable metrics that stakeholders can independently validate, ensuring complete transparency and accountability.',
        metric: 'Real-time data',
        impact: 'Provide stakeholders with transparent, verifiable metrics they can independently validate.'
      }
    ]
  },
  trendsSection: {
    title: 'New Trends That Matter',
    subtitle: 'Cutting-edge technologies shaping the future of Web3',
    description: 'Stay ahead with the latest innovations in blockchain technology',
    trends: [
      {
        title: 'Smart Accounts & Intents',
        description: 'ERC‑4337 adoption is surging with major wallets implementing account abstraction. Intent-based UX like CoW Protocol abstracts complex gas management and routing decisions from end users, creating seamless Web3 experiences.'
      },
      {
        title: 'Cross‑Chain Interop',
        description: 'Liquidity and state are fragmenting across L2s and app-chains. Users expect unified experiences that abstract away the underlying chain complexity while maintaining security guarantees for cross-chain operations.'
      },
      {
        title: 'Real‑World Assets (RWA)',
        description: 'Tokenized debt, funds, and invoices are moving on-chain with BlackRock\'s BUIDL reaching multi-billion AUM. These assets demand compliance-aware rails, accurate pricing oracles, and institutional-grade custody solutions.'
      },
      {
        title: 'Programmable Compliance',
        description: 'Regulatory frameworks are crystallizing around on‑chain compliance. Allowlists, KYT hooks, and jurisdiction-specific logic must be embedded at the protocol level to ensure global regulatory compliance.'
      },
      {
        title: 'Gas & Cost Optimizations',
        description: 'High transaction costs remain a barrier to adoption. Advanced techniques like batching, calldata compression, and stateless patterns can reduce user costs by 60-90% while maintaining security and decentralization.'
      },
      {
        title: 'Safe Dev Tooling',
        description: 'Smart contract security requires formal verification, invariant testing, and property-based fuzzing. Modern toolchains like Foundry, Echidna, and Certora enable mathematical proofs of contract correctness.'
      }
    ]
  },
  techStackSection: {
    title: 'Technology Stack',
    subtitle: 'Production-grade tools that power our blockchain deployments',
    items: [
      {
        icon: 'Boxes',
        title: 'Blockchain & Protocols',
        text: 'EVM, Polygon, Arbitrum, Optimism, Base, Hyperledger Fabric'
      },
      {
        icon: 'Cloud',
        title: 'Cloud & Infrastructure',
        text: 'AWS, GCP, Azure multi‑cloud with container orchestration & CI/CD'
      },
      {
        icon: 'Wrench',
        title: 'Developer Tooling',
        text: 'Hardhat, Foundry, OpenZeppelin, Ethers.js, Web3.js, modern frontend'
      }
    ]
  },
  securitySection: {
    title: 'Security First',
    subtitle: 'Controls and reviews embedded across access, code, and ops',
    items: [
      {
        icon: 'Lock',
        text: 'Least-privilege access and encrypted secrets management'
      },
      {
        icon: 'Bug',
        text: 'Invariant checks and fuzz testing in pipelines'
      },
      {
        icon: 'Shield',
        text: 'External security audits and review gates'
      },
      {
        icon: 'Wallet',
        text: 'Multi‑signature wallet integration'
      },
      {
        icon: 'Bell',
        text: 'Real‑time monitoring and incident alerts'
      },
      {
        icon: 'ScrollText',
        text: 'Upgrade runbooks and compliance from day one'
      }
    ]
  },
  whyChooseSection: {
    title: 'Why Altiora?',
    subtitle: 'Trusted delivery with repeatable playbooks and long-term partnership',
    items: [
      {
        title: 'Security First',
        description: 'Every line of code is written with security as the top priority, backed by rigorous testing and external audits. We implement multi-signature wallets, formal verification, and comprehensive security protocols.',
        icon: 'Shield',
        trustMetric: 'Zero Breaches'
      },
      {
        title: 'Transparent Collaboration',
        description: 'Written decisions, clear documentation, and regular demos keep you in control throughout the project. Weekly progress updates and collaborative development ensure complete visibility.',
        icon: 'Users',
        trustMetric: '100% Visibility'
      },
      {
        title: 'Holistic Coverage',
        description: 'From smart contracts to user experience, we handle every layer of your Web3 stack. Full-stack expertise across multiple blockchains and modern development frameworks.',
        icon: 'Layers',
        trustMetric: 'Full Stack'
      },
      {
        title: 'Long-term Partnership',
        description: 'We don\'t disappear after launch. Ongoing support, monitoring, and strategic refresh cycles.',
        icon: 'Rocket',
        trustMetric: '5+ Years Avg'
      },
      {
        title: 'Trusted Delivery',
        description: 'Proven track record with 150+ successful Web3 projects and 98% client satisfaction rate.',
        icon: 'Trophy',
        trustMetric: '150+ Projects'
      },
      {
        title: 'Repeatable Playbooks',
        description: 'Battle-tested methodologies that reduce risk and accelerate time-to-market.',
        icon: 'FileCode',
        trustMetric: '98% Success Rate'
      }
    ]
  },
  howWeWorkSection: {
    title: 'How We Work',
    subtitle: 'Our proven process for Web3 success',
    description: 'We begin with a short discovery to align goals, compliance, and risk. You receive a blueprint with scope, stack, and success metrics. Delivery runs in tight, demo-driven sprints with written decisions, cost and latency tracking, and proactive security reviews.',
    steps: [
      {
        step: '01',
        title: 'Audit Ready',
        description: 'Contracts ship with tests, invariants, fuzzing, coverage reports, and auditor grade docs',
        icon: '🛡️'
      },
      {
        step: '02',
        title: 'Built In Weeks',
        description: 'Productised sprints for wallets, DEX, payments, DePIN & AA so you ship fast and de-risk early',
        icon: '⚡'
      },
      {
        step: '03',
        title: 'Tokenomics That Sustain',
        description: 'Emissions curves, sinks, fee capture, and dashboards so tokens drive utility—not just speculation',
        icon: '📊'
      },
      {
        step: '04',
        title: 'On-Chain Payments & Treasury Ops',
        description: 'Stablecoin rails, invoicing, reconciliation, and policy-driven payouts that finance teams trust',
        icon: '💰'
      },
      {
        step: '05',
        title: 'Fixed Scope, Fixed Price, Warranty',
        description: 'Clear inclusions/exclusions milestones billing, and a post-launch stabilisation window (We deliver Bug Bounties as and when required)',
        icon: '🎯'
      }
    ],
    readyToBuild: {
      title: 'Ready to Build?',
      description: 'Let\'s discuss your Web3 project and create a roadmap for success.',
      buttonText: 'Start Your Project',
      buttonLink: '/contact',
      image: '/images/bitcoin-BH7WT0Il.jpg'
    }
  },
  finalCTASection: {
    title: 'Ready to Build the Future with Web3?',
    description: 'From concept to deployment, we\'ll help you navigate the Web3 landscape and build solutions that drive real value.',
    buttons: [
      {
        text: 'Get Started Today',
        link: '/contact',
        variant: 'primary'
      },
      {
        text: 'View Case Studies',
        link: '/case-studies',
        variant: 'secondary'
      }
    ]
  },
  seoMetadata: {
    title: 'Web3 & Blockchain Development Services | Altiora Infotech',
    description: 'Expert Web3 and blockchain development services. Build secure smart contracts, dApps, DeFi protocols, NFT platforms, and tokenization solutions with proven expertise.',
    keywords: ['web3 development', 'blockchain development', 'smart contracts', 'dapp development', 'defi', 'nft', 'tokenization', 'dao']
  }
};

async function seedWeb3ServicePage() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Check if web3 page already exists
    const existingPage = await ServicePage.findOne({ slug: 'web3' });
    
    if (existingPage) {
      console.log('Web3 service page already exists. Updating...');
      await ServicePage.findOneAndUpdate(
        { slug: 'web3' },
        web3PageData,
        { new: true, upsert: true }
      );
      console.log('Web3 service page updated successfully!');
    } else {
      console.log('Creating new Web3 service page...');
      await ServicePage.create(web3PageData);
      console.log('Web3 service page created successfully!');
    }

    console.log('\nSeeding completed!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedWeb3ServicePage();
