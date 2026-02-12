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

const remainingWeb3ServicesData = [
  {
    serviceType: 'security-audit',
    heroSection: {
      title: 'Security Audit Services',
      subtitle: 'Comprehensive Web3 Security',
      description: 'Protect your Web3 projects with thorough security audits, penetration testing, and vulnerability assessments.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1760096655/Security_Audit_Services.png',
      ctaText: 'Get Started',
      ctaLink: '/contact'
    },
    whatIsSection: {
      title: 'Security First Approach',
      subtitle: 'Security is non-negotiable in Web3.',
      description: 'Web3 security audits are comprehensive evaluations of smart contracts, protocols, and blockchain applications to identify vulnerabilities, ensure code quality, and protect against potential exploits.',
      additionalDescription: 'At Altiora Infotech, we provide end-to-end security services including smart contract audits, penetration testing, formal verification, and ongoing security monitoring to ensure your Web3 projects are secure and trustworthy.',
      icon: 'FaShieldAlt'
    },
    whyChoosePoints: [
      { text: 'Security Expertise – Deep knowledge in Web3 security and audit methodologies', icon: 'FaShieldAlt' },
      { text: 'Comprehensive Testing – Multi-layered security assessment approach', icon: 'FaCode' },
      { text: 'Proven Track Record – Successfully audited numerous Web3 projects', icon: 'FaCheck' }
    ],
    services: [
      { name: 'Smart Contract Audit', image: '/images/web3/security audit/Smart Contract.svg' },
      { name: 'Protocol & Architecture Audit', image: '/images/web3/security audit/Protocol.svg' },
      { name: 'Fuzz Testing & Formal Verification', image: '/images/web3/security audit/Fuzz.svg' },
      { name: 'Penetration Testing & Red Teaming', image: '/images/web3/security audit/Penetration Testing.svg' },
      { name: 'Security Monitoring & On-chain Alerts', image: '/images/web3/security audit/Security Monitoring.svg' },
      { name: 'Bug Bounty Program Setup', image: '/images/web3/security audit/Bug Bounty.svg' },
      { name: 'Compliance & Regulatory Readiness', image: '/images/web3/security audit/Compliance.svg' },
      { name: 'Incident Response & Recovery', image: '/images/web3/security audit/Incident Response.svg' }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Security Assessment',
        description: 'Comprehensive analysis of smart contracts, architecture, and potential attack vectors.',
        icon: '🔍'
      },
      {
        step: 2,
        title: 'Automated Testing',
        description: 'Automated vulnerability scanning, fuzz testing, and static analysis.',
        icon: '🤖'
      },
      {
        step: 3,
        title: 'Manual Review',
        description: 'Expert manual code review and business logic verification.',
        icon: '👨‍💻'
      },
      {
        step: 4,
        title: 'Penetration Testing',
        description: 'Simulated attacks and real-world exploit scenarios.',
        icon: '⚔️'
      },
      {
        step: 5,
        title: 'Report & Remediation',
        description: 'Detailed security report with remediation recommendations.',
        icon: '📋'
      }
    ],
    whyWorkWithUs: [
      { text: 'Security Expertise – Specialized knowledge in Web3 security, smart contract auditing, and blockchain security.', icon: 'FaShieldAlt', title: 'Security', subtitle: 'Expertise' },
      { text: 'Comprehensive Approach – Multi-layered security assessment covering all aspects of your Web3 project.', icon: 'FaCode', title: 'Comprehensive', subtitle: 'Approach' },
      { text: 'Proven Methodology – Battle-tested audit processes and industry-standard security practices.', icon: 'FaCheck', title: 'Proven', subtitle: 'Methodology' },
      { text: 'Ongoing Support – Continuous security monitoring and incident response capabilities.', icon: 'FaHandshake', title: 'Ongoing', subtitle: 'Support' }
    ],
    ctaSection: {
      title: 'Ready to Secure Your Web3 Project?',
      description: 'Security is critical in Web3. Let us help you identify and fix vulnerabilities before they become exploits.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1760096655/Security_CTA_Background.png',
      primaryCTA: {
        text: 'Book Security Audit',
        link: 'https://calendly.com/altiorainfotech/30min'
      },
      secondaryCTA: {
        text: 'Send Your Brief',
        link: '/contact'
      }
    },
    seoMetadata: {
      title: 'Web3 Security Audit Services | Altiora Infotech',
      description: 'Professional Web3 security audit services. We provide comprehensive smart contract audits, penetration testing, and security assessments.'
    }
  },
  {
    serviceType: 'smart-contract',
    heroSection: {
      title: 'Smart Contract Development',
      subtitle: 'Self-Executing Digital Contracts',
      description: 'Build secure, efficient, and audited smart contracts that automate business logic on the blockchain.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1760096655/Smart_Contract_Services.png',
      ctaText: 'Get Started',
      ctaLink: '/contact'
    },
    whatIsSection: {
      title: 'Automated Trust',
      subtitle: 'Smart contracts are the backbone of Web3.',
      description: 'Smart contracts are self-executing contracts with terms directly written into code. They automatically execute when predetermined conditions are met, eliminating the need for intermediaries.',
      additionalDescription: 'At Altiora Infotech, we develop secure, gas-optimized smart contracts that power DeFi protocols, NFT marketplaces, DAOs, and other Web3 applications with bulletproof security and efficiency.',
      icon: 'FaCode'
    },
    whyChoosePoints: [
      { text: 'Smart Contract Expertise – Deep knowledge in Solidity, Vyper, and contract architecture', icon: 'FaCode' },
      { text: 'Security Focus – Security-first development with comprehensive testing', icon: 'FaShieldAlt' },
      { text: 'Gas Optimization – Efficient contracts that minimize transaction costs', icon: 'FaRocket' }
    ],
    services: [
      { name: 'ERC-20 Tokens', image: '/images/web3/blockchain/Token.svg' },
      { name: 'ERC-721 NFTs', image: '/images/web3/blockchain/NFT.svg' },
      { name: 'DeFi Protocols', image: '/images/web3/blockchain/DeFi.svg' },
      { name: 'DAO Governance', image: '/images/web3/blockchain/DAO.svg' },
      { name: 'Multi-Sig Wallets', image: '/images/web3/blockchain/Security.svg' },
      { name: 'Staking Contracts', image: '/images/web3/blockchain/Smart Contract.svg' },
      { name: 'Marketplace Contracts', image: '/images/web3/blockchain/dApp.svg' },
      { name: 'Cross-Chain Bridges', image: '/images/web3/blockchain/End-to-End.svg' },
      { name: 'Upgradeable Contracts', image: '/images/web3/blockchain/Blockchain.svg' }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Requirements Analysis',
        description: 'Define contract specifications, business logic, and security requirements.',
        icon: '📋'
      },
      {
        step: 2,
        title: 'Architecture Design',
        description: 'Design contract architecture, gas optimization strategies, and upgrade patterns.',
        icon: '🏗️'
      },
      {
        step: 3,
        title: 'Development & Testing',
        description: 'Write secure Solidity code with comprehensive unit and integration tests.',
        icon: '⚙️'
      },
      {
        step: 4,
        title: 'Security Audit',
        description: 'Internal security review and external audit preparation.',
        icon: '🛡️'
      },
      {
        step: 5,
        title: 'Deployment & Verification',
        description: 'Deploy to mainnet with contract verification and documentation.',
        icon: '🚀'
      }
    ],
    whyWorkWithUs: [
      { text: 'Smart Contract Expertise – Specialized knowledge in Solidity, contract patterns, and blockchain development.', icon: 'FaCode', title: 'Smart Contract', subtitle: 'Expertise' },
      { text: 'Security First – Security-focused development with comprehensive testing and audit preparation.', icon: 'FaShieldAlt', title: 'Security', subtitle: 'First' },
      { text: 'Gas Optimization – Efficient contracts that minimize costs and maximize performance.', icon: 'FaRocket', title: 'Gas', subtitle: 'Optimization' },
      { text: 'Full-Stack Integration – Seamless integration with frontend applications and Web3 infrastructure.', icon: 'FaNetworkWired', title: 'Full-Stack', subtitle: 'Integration' }
    ],
    ctaSection: {
      title: 'Ready to Build Your Smart Contracts?',
      description: 'Smart contracts are the foundation of Web3 applications. Let us help you build secure, efficient contracts that power your blockchain project.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1760096655/Smart_Contract_CTA_Background.png',
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
      title: 'Smart Contract Development Services | Altiora Infotech',
      description: 'Professional smart contract development services. We build secure, gas-optimized smart contracts for DeFi, NFTs, DAOs, and Web3 applications.'
    }
  },
  {
    serviceType: 'tokenization',
    heroSection: {
      title: 'Tokenization Services',
      subtitle: 'Digital Asset Creation',
      description: 'Transform real-world assets into digital tokens, enabling fractional ownership, liquidity, and new investment opportunities.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1760096655/Tokenization_Services.png',
      ctaText: 'Get Started',
      ctaLink: '/contact'
    },
    whatIsSection: {
      title: 'Asset Digitization',
      subtitle: 'Tokenization unlocks asset liquidity.',
      description: 'Tokenization is the process of converting real-world assets into digital tokens on a blockchain, enabling fractional ownership, increased liquidity, and global accessibility.',
      additionalDescription: 'At Altiora Infotech, we help businesses tokenize various assets including real estate, commodities, art, intellectual property, and financial instruments, creating new opportunities for investment and trading.',
      icon: 'FaCoins'
    },
    whyChoosePoints: [
      { text: 'Tokenization Expertise – Deep knowledge in asset tokenization and regulatory compliance', icon: 'FaCoins' },
      { text: 'Legal Compliance – Ensuring regulatory compliance across jurisdictions', icon: 'FaShieldAlt' },
      { text: 'Technical Excellence – Robust token standards and smart contract development', icon: 'FaCode' }
    ],
    services: [
      { name: 'Real Estate Tokenization', image: '/images/web3/blockchain/Token.svg' },
      { name: 'Commodity Tokenization', image: '/images/web3/blockchain/DeFi.svg' },
      { name: 'Art & Collectibles', image: '/images/web3/blockchain/NFT.svg' },
      { name: 'Security Tokens', image: '/images/web3/blockchain/Security.svg' },
      { name: 'Utility Tokens', image: '/images/web3/blockchain/Smart Contract.svg' },
      { name: 'Governance Tokens', image: '/images/web3/blockchain/DAO.svg' },
      { name: 'Fractional Ownership', image: '/images/web3/blockchain/dApp.svg' },
      { name: 'Trading Platforms', image: '/images/web3/blockchain/End-to-End.svg' },
      { name: 'Compliance Solutions', image: '/images/web3/blockchain/Blockchain.svg' }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Asset Evaluation',
        description: 'Assess asset suitability, legal structure, and tokenization strategy.',
        icon: '📊'
      },
      {
        step: 2,
        title: 'Legal Framework',
        description: 'Establish legal structure and ensure regulatory compliance.',
        icon: '⚖️'
      },
      {
        step: 3,
        title: 'Token Design',
        description: 'Design token economics, rights, and technical specifications.',
        icon: '🎨'
      },
      {
        step: 4,
        title: 'Smart Contract Development',
        description: 'Develop and audit smart contracts for token management.',
        icon: '⚙️'
      },
      {
        step: 5,
        title: 'Platform Launch',
        description: 'Launch tokenization platform with trading and management features.',
        icon: '🚀'
      }
    ],
    whyWorkWithUs: [
      { text: 'Tokenization Expertise – Specialized knowledge in asset tokenization, token economics, and blockchain technology.', icon: 'FaCoins', title: 'Tokenization', subtitle: 'Expertise' },
      { text: 'Regulatory Compliance – Deep understanding of securities law and regulatory requirements.', icon: 'FaShieldAlt', title: 'Regulatory', subtitle: 'Compliance' },
      { text: 'End-to-End Solutions – Complete tokenization platform from legal structure to trading.', icon: 'FaCode', title: 'End-to-End', subtitle: 'Solutions' },
      { text: 'Global Reach – Supporting tokenization projects across multiple jurisdictions.', icon: 'FaGlobe', title: 'Global', subtitle: 'Reach' }
    ],
    ctaSection: {
      title: 'Ready to Tokenize Your Assets?',
      description: 'Tokenization opens new possibilities for asset liquidity and investment. Let us help you transform your assets into digital tokens.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1760096655/Tokenization_CTA_Background.png',
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
      title: 'Asset Tokenization Services | Altiora Infotech',
      description: 'Professional asset tokenization services. We help businesses tokenize real estate, commodities, art, and other assets on blockchain.'
    }
  },
  {
    serviceType: 'web3-marketing',
    heroSection: {
      title: 'Web3 Marketing Services',
      subtitle: 'Decentralized Marketing Solutions',
      description: 'Drive adoption and engagement for your Web3 project with specialized marketing strategies for the decentralized ecosystem.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1760096655/Web3_Marketing_Services.png',
      ctaText: 'Get Started',
      ctaLink: '/contact'
    },
    whatIsSection: {
      title: 'Web3 Growth Strategy',
      subtitle: 'Marketing in the decentralized world requires new approaches.',
      description: 'Web3 marketing combines traditional digital marketing with blockchain-native strategies, focusing on community building, token incentives, and decentralized platforms.',
      additionalDescription: 'At Altiora Infotech, we help Web3 projects build engaged communities, drive token adoption, and create sustainable growth through innovative marketing strategies tailored for the decentralized ecosystem.',
      icon: 'FaRocket'
    },
    whyChoosePoints: [
      { text: 'Web3 Marketing Expertise – Deep understanding of crypto and DeFi marketing', icon: 'FaRocket' },
      { text: 'Community Building – Proven strategies for building engaged Web3 communities', icon: 'FaHandshake' },
      { text: 'Token Economics – Marketing strategies that align with tokenomics', icon: 'FaCoins' }
    ],
    services: [
      { name: 'Community Building', image: '/images/web3/blockchain/DAO.svg' },
      { name: 'Token Launch Marketing', image: '/images/web3/blockchain/Token.svg' },
      { name: 'DeFi Protocol Marketing', image: '/images/web3/blockchain/DeFi.svg' },
      { name: 'NFT Collection Marketing', image: '/images/web3/blockchain/NFT.svg' },
      { name: 'Influencer Partnerships', image: '/images/web3/blockchain/dApp.svg' },
      { name: 'Content Marketing', image: '/images/web3/blockchain/Smart Contract.svg' },
      { name: 'Social Media Management', image: '/images/web3/blockchain/End-to-End.svg' },
      { name: 'PR & Media Relations', image: '/images/web3/blockchain/Blockchain.svg' },
      { name: 'Growth Hacking', image: '/images/web3/blockchain/Security.svg' }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Strategy Development',
        description: 'Develop comprehensive Web3 marketing strategy and positioning.',
        icon: '🎯'
      },
      {
        step: 2,
        title: 'Community Building',
        description: 'Build and nurture engaged communities across platforms.',
        icon: '👥'
      },
      {
        step: 3,
        title: 'Content Creation',
        description: 'Create compelling content that educates and engages Web3 audiences.',
        icon: '📝'
      },
      {
        step: 4,
        title: 'Campaign Execution',
        description: 'Execute multi-channel marketing campaigns with token incentives.',
        icon: '🚀'
      },
      {
        step: 5,
        title: 'Growth & Optimization',
        description: 'Analyze performance and optimize for sustainable growth.',
        icon: '📈'
      }
    ],
    whyWorkWithUs: [
      { text: 'Web3 Marketing Expertise – Specialized knowledge in crypto marketing, community building, and token economics.', icon: 'FaRocket', title: 'Web3 Marketing', subtitle: 'Expertise' },
      { text: 'Community First – Focus on building genuine, engaged communities rather than just followers.', icon: 'FaHandshake', title: 'Community', subtitle: 'First' },
      { text: 'Data-Driven Approach – Using on-chain analytics and Web3 metrics for optimization.', icon: 'FaChartLine', title: 'Data-Driven', subtitle: 'Approach' },
      { text: 'Regulatory Awareness – Marketing strategies that comply with evolving regulations.', icon: 'FaShieldAlt', title: 'Regulatory', subtitle: 'Awareness' }
    ],
    ctaSection: {
      title: 'Ready to Grow Your Web3 Project?',
      description: 'Web3 marketing requires specialized knowledge and strategies. Let us help you build a thriving community and drive sustainable growth.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1760096655/Web3_Marketing_CTA_Background.png',
      primaryCTA: {
        text: 'Book Strategy Call',
        link: 'https://calendly.com/altiorainfotech/30min'
      },
      secondaryCTA: {
        text: 'Send Your Brief',
        link: '/contact'
      }
    },
    seoMetadata: {
      title: 'Web3 Marketing Services | Altiora Infotech',
      description: 'Professional Web3 marketing services. We help crypto and DeFi projects build communities, drive adoption, and achieve sustainable growth.'
    }
  },
  {
    serviceType: 'zk-privacy',
    heroSection: {
      title: 'Zero-Knowledge Privacy Solutions',
      subtitle: 'Privacy-Preserving Technology',
      description: 'Implement cutting-edge zero-knowledge proofs to enable privacy, scalability, and verification without revealing sensitive data.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1760096655/ZK_Privacy_Services.png',
      ctaText: 'Get Started',
      ctaLink: '/contact'
    },
    whatIsSection: {
      title: 'Privacy by Design',
      subtitle: 'Zero-knowledge proofs enable privacy without sacrificing verification.',
      description: 'Zero-knowledge (ZK) technology allows one party to prove knowledge of information without revealing the information itself, enabling privacy-preserving verification and computation.',
      additionalDescription: 'At Altiora Infotech, we implement ZK solutions including zk-SNARKs, zk-STARKs, and other privacy-preserving technologies to build applications that protect user privacy while maintaining transparency and verifiability.',
      icon: 'FaShieldAlt'
    },
    whyChoosePoints: [
      { text: 'ZK Expertise – Deep knowledge in zero-knowledge cryptography and privacy tech', icon: 'FaShieldAlt' },
      { text: 'Privacy Focus – Building privacy-first solutions for sensitive applications', icon: 'FaEye' },
      { text: 'Scalability Solutions – ZK rollups and scaling solutions for blockchain networks', icon: 'FaRocket' }
    ],
    services: [
      { name: 'zk-SNARKs Implementation', image: '/images/web3/blockchain/Security.svg' },
      { name: 'zk-STARKs Development', image: '/images/web3/blockchain/Smart Contract.svg' },
      { name: 'ZK Rollups', image: '/images/web3/blockchain/Blockchain.svg' },
      { name: 'Private Voting Systems', image: '/images/web3/blockchain/DAO.svg' },
      { name: 'Anonymous Transactions', image: '/images/web3/blockchain/Token.svg' },
      { name: 'Identity Verification', image: '/images/web3/blockchain/dApp.svg' },
      { name: 'Private DeFi', image: '/images/web3/blockchain/DeFi.svg' },
      { name: 'Confidential Computing', image: '/images/web3/blockchain/End-to-End.svg' },
      { name: 'Privacy Audits', image: '/images/web3/blockchain/NFT.svg' }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Privacy Requirements',
        description: 'Analyze privacy needs and define zero-knowledge requirements.',
        icon: '🔒'
      },
      {
        step: 2,
        title: 'ZK Protocol Design',
        description: 'Design zero-knowledge protocols and cryptographic schemes.',
        icon: '🧮'
      },
      {
        step: 3,
        title: 'Implementation',
        description: 'Implement ZK circuits, provers, and verifiers.',
        icon: '⚙️'
      },
      {
        step: 4,
        title: 'Security Verification',
        description: 'Formal verification and security analysis of ZK implementations.',
        icon: '🛡️'
      },
      {
        step: 5,
        title: 'Integration & Deployment',
        description: 'Integrate ZK solutions with existing systems and deploy.',
        icon: '🚀'
      }
    ],
    whyWorkWithUs: [
      { text: 'ZK Expertise – Specialized knowledge in zero-knowledge cryptography, privacy protocols, and advanced cryptographic techniques.', icon: 'FaShieldAlt', title: 'ZK', subtitle: 'Expertise' },
      { text: 'Privacy Engineering – Building privacy-preserving systems that protect sensitive data and user privacy.', icon: 'FaEye', title: 'Privacy', subtitle: 'Engineering' },
      { text: 'Scalability Focus – Implementing ZK solutions that enhance both privacy and blockchain scalability.', icon: 'FaRocket', title: 'Scalability', subtitle: 'Focus' },
      { text: 'Research-Driven – Staying at the forefront of ZK research and implementing cutting-edge solutions.', icon: 'FaCode', title: 'Research', subtitle: 'Driven' }
    ],
    ctaSection: {
      title: 'Ready to Implement Zero-Knowledge Privacy?',
      description: 'Zero-knowledge technology is the future of privacy-preserving applications. Let us help you implement ZK solutions that protect user privacy while maintaining functionality.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1760096655/ZK_Privacy_CTA_Background.png',
      primaryCTA: {
        text: 'Book Technical Call',
        link: 'https://calendly.com/altiorainfotech/30min'
      },
      secondaryCTA: {
        text: 'Send Your Brief',
        link: '/contact'
      }
    },
    seoMetadata: {
      title: 'Zero-Knowledge Privacy Solutions | Altiora Infotech',
      description: 'Professional zero-knowledge privacy services. We implement zk-SNARKs, zk-STARKs, and privacy-preserving solutions for Web3 applications.'
    }
  },
  {
    serviceType: 'blockchain-development-services-building-the-future-of-web3-with-altiora-infotech',
    heroSection: {
      title: 'Blockchain Development Services - Building the Future of Web3',
      subtitle: 'Comprehensive Web3 Solutions',
      description: 'Partner with Altiora Infotech to build the future of Web3 with comprehensive blockchain development services and cutting-edge solutions.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1760096655/Comprehensive_Blockchain_Services.png',
      ctaText: 'Get Started',
      ctaLink: '/contact'
    },
    whatIsSection: {
      title: 'Building the Future of Web3',
      subtitle: 'Comprehensive blockchain solutions for the decentralized future.',
      description: 'We provide end-to-end blockchain development services, from initial concept to production deployment, helping businesses leverage the full potential of Web3 technology.',
      additionalDescription: 'At Altiora Infotech, we combine deep technical expertise with business acumen to deliver blockchain solutions that drive real value, whether you\'re building DeFi protocols, NFT marketplaces, DAOs, or enterprise blockchain applications.',
      icon: 'FaGlobe'
    },
    whyMattersSection: {
      title: 'Why Blockchain Development Matters',
      subtitle: 'Transforming industries through decentralized technology.',
      technicalAdvantages: [
        'Decentralized architecture eliminating single points of failure',
        'Immutable data storage ensuring transparency and trust',
        'Smart contract automation reducing operational costs',
        'Interoperability enabling cross-chain functionality'
      ],
      businessBenefits: [
        'Reduced intermediary costs and faster transactions',
        'Enhanced security and fraud prevention',
        'New revenue models through tokenization',
        'Global accessibility and 24/7 operations'
      ]
    },
    whyChoosePoints: [
      { text: 'Full-Stack Expertise – Complete blockchain development from smart contracts to dApps', icon: 'FaCode' },
      { text: 'Business Focus – Solutions aligned with your business objectives and KPIs', icon: 'FaChartLine' },
      { text: 'Security First – Rigorous security practices and comprehensive auditing', icon: 'FaShieldAlt' }
    ],
    services: [
      { name: 'Custom Blockchain Development', image: '/images/web3/blockchain/Blockchain.svg' },
      { name: 'Smart Contract Development', image: '/images/web3/blockchain/Smart Contract.svg' },
      { name: 'DeFi Protocol Development', image: '/images/web3/blockchain/DeFi.svg' },
      { name: 'NFT Marketplace Development', image: '/images/web3/blockchain/NFT.svg' },
      { name: 'DAO Development', image: '/images/web3/blockchain/DAO.svg' },
      { name: 'dApp Development', image: '/images/web3/blockchain/dApp.svg' },
      { name: 'Wallet Development', image: '/images/web3/blockchain/Security.svg' },
      { name: 'Cross-Chain Solutions', image: '/images/web3/blockchain/End-to-End.svg' },
      { name: 'Blockchain Consulting', image: '/images/web3/blockchain/Token.svg' }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Discovery & Strategy',
        description: 'Understand your business needs and develop a comprehensive blockchain strategy.',
        icon: '🔍'
      },
      {
        step: 2,
        title: 'Architecture Design',
        description: 'Design scalable blockchain architecture and technical specifications.',
        icon: '🏗️'
      },
      {
        step: 3,
        title: 'Development & Testing',
        description: 'Build and rigorously test all components of your blockchain solution.',
        icon: '⚙️'
      },
      {
        step: 4,
        title: 'Security & Audit',
        description: 'Comprehensive security testing and third-party audits.',
        icon: '🛡️'
      },
      {
        step: 5,
        title: 'Deployment & Support',
        description: 'Deploy to production and provide ongoing support and maintenance.',
        icon: '🚀'
      }
    ],
    whyWorkWithUs: [
      { text: 'Comprehensive Expertise – Full-stack blockchain development with deep technical knowledge across all Web3 technologies.', icon: 'FaCode', title: 'Comprehensive', subtitle: 'Expertise' },
      { text: 'Business-Driven Solutions – Technology solutions aligned with your business goals and market requirements.', icon: 'FaChartLine', title: 'Business-Driven', subtitle: 'Solutions' },
      { text: 'Security Excellence – Industry-leading security practices with comprehensive testing and auditing.', icon: 'FaShieldAlt', title: 'Security', subtitle: 'Excellence' },
      { text: 'Long-term Partnership – Ongoing support and evolution of your blockchain solutions as your business grows.', icon: 'FaHandshake', title: 'Long-term', subtitle: 'Partnership' }
    ],
    ctaSection: {
      title: 'Ready to Build the Future with Web3?',
      description: 'The future is decentralized. Partner with Altiora Infotech to build blockchain solutions that transform your business and create new opportunities in the Web3 ecosystem.',
      additionalDescription: 'From initial concept to production deployment, we provide comprehensive blockchain development services that deliver real business value and drive innovation.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1760096655/Future_Web3_CTA_Background.png',
      primaryCTA: {
        text: 'Start Your Web3 Journey',
        link: 'https://calendly.com/altiorainfotech/30min'
      },
      secondaryCTA: {
        text: 'Send Your Brief',
        link: '/contact'
      }
    },
    seoMetadata: {
      title: 'Blockchain Development Services - Building the Future of Web3 | Altiora Infotech',
      description: 'Comprehensive blockchain development services for Web3. We build DeFi protocols, NFT marketplaces, DAOs, smart contracts, and enterprise blockchain solutions.'
    }
  }
];

async function seedRemainingWeb3Services() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB for remaining services seeding');

    // Insert remaining data
    const result = await Web3Service.insertMany(remainingWeb3ServicesData);
    console.log(`Inserted ${result.length} remaining Web3 services`);

    console.log('Remaining Web3 services seeded successfully!');
    
    // List all services
    const allServices = await Web3Service.find({}, 'serviceType heroSection.title');
    console.log('\nAll services in database:');
    allServices.forEach(service => {
      console.log('- ' + service.serviceType + ': ' + service.heroSection.title);
    });
    console.log('Total services:', allServices.length);
    
  } catch (error) {
    console.error('Error seeding remaining Web3 services:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

// Run the seeding function
seedRemainingWeb3Services();