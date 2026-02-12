import mongoose from 'mongoose';
import Web3Service from '../src/lib/models/Web3Service';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const blockchainServicesPageData = {
  pageId: 'blockchain-development-services',
  pageName: 'Blockchain Development Services — Building the Future of Web3',
  route: '/services/web3/blockchain-development-services-building-the-future-of-web3-with-altiora-infotech',
  status: 'published',
  seo: {
    title: 'Blockchain Development Services — Building the Future of Web3 | Altiora Infotech',
    description: 'Altiora Infotech delivers secure, scalable Web3 solutions: smart contracts, dApps, DeFi, audits, and tokenization to power real-world blockchain adoption.',
    ogImage: '/images/agentic-ai/pillar/Blockchain Development Services 1.png'
  },
  sections: {
    hero: {
      backgroundImage: '/images/agentic-ai/pillar/Blockchain Development Services 1.png',
      badge: 'Blockchain Development Services — Building the Future of Web3 with Altiora Infotech',
      badgeIcon: 'FaCube',
      heading: 'Shaping the Decentralized Digital',
      headingHighlight: 'Future',
      highlightColor: '#f4cc6f',
      subheading: 'Building the Future of Web3 with Altiora Infotech',
      cta: {
        text: 'Schedule a Blockchain Strategy Call →',
        link: 'https://calendly.com/altiorainfotech/30min',
        primary: true,
        icon: 'FaRocket',
        external: true
      }
    },
    whatIs: {
      title: 'What Is Blockchain Technology?',
      subtitle: 'Understanding the Concept',
      icon: 'FaCube',
      paragraphs: [
        'Blockchain technology is one of the most transformative innovation of the 21st century in a digital world that is changing quickly. It has changed how the internet handles data, transactions, and trust in a big way. Blockchain, which is often called the backbone of Web3, lets people and businesses work in an open, secure, and decentralized environment without the need for traditional middlemen.',
        'We at Altiora Infotech are excited about using blockchain to make smart solutions that are ready for the future. Our Blockchain Development Services help businesses move smoothly into the decentralized digital economy by combining new ideas, deep technical knowledge, and experience in the field.'
      ]
    },
    whyMatter: {
      title: 'Why Blockchain Development Matters',
      subtitle: 'Blockchain is more than just a new technology; it\'s a new way for businesses and communities to work together. Blockchain brings trust, automation, and efficiency to many areas, including banking, healthcare, the supply chain, and real estate.',
      cards: [
        {
          title: 'Key Advantages',
          icon: 'FaShieldAlt',
          iconGradient: ['#f4cc6f', '#e6b85c'],
          items: [
            { text: 'Transparency - All records are accessible on a public or private ledger, creating accountability.' },
            { text: 'Immutability - Once recorded, data cannot be altered or deleted.' },
            { text: 'Security - Advanced encryption and distributed storage prevent data breaches.' },
            { text: 'Automation - Smart contracts automatically execute conditions without manual intervention.' },
            { text: 'Cost Efficiency - Eliminates intermediaries, reducing administrative and transaction costs.' },
            { text: 'Traceability - Ideal for industries that require tracking, auditing, or provenance verification.' }
          ]
        }
      ]
    },
    whyChoose: {
      title: 'Blockchain Development Services at Altiora Infotech',
      subtitle: 'At Altiora Infotech, we focus on providing complete blockchain solutions that meet the needs of a wide range of businesses. Our team of skilled blockchain developers, architects, and analysts work together to create decentralized systems that are safe, scalable, and efficient.',
      featureCards: [],
      commitmentCard: {
        icon: 'FaCube',
        title: 'Our Expertise',
        description: 'We make custom blockchain networks that are safe using the best frameworks, like Ethereum, Polygon, Solana, Binance Smart Chain, and Hyperledger. Our knowledge guarantees that things can grow, are safe, and work together.'
      }
    },
    serviceOfferings: {
      title: 'Our Core Services',
      subtitle: 'Comprehensive blockchain development services',
      services: [
        { name: 'Custom Blockchain Development', icon: 'FaCube' },
        { name: 'Smart Contract Development', icon: 'FaCode' },
        { name: 'dApp Development', icon: 'FaNetworkWired' },
        { name: 'DeFi Solutions', icon: 'FaCoins' },
        { name: 'NFT Development', icon: 'FaLayerGroup' },
        { name: 'Tokenization Services', icon: 'FaChartLine' },
        { name: 'Private Blockchain', icon: 'FaLock' },
        { name: 'Blockchain Consulting', icon: 'FaHandshake' }
      ]
    },
    process: {
      title: 'Process / Methodology',
      subtitle: 'Our structured approach to blockchain development',
      steps: [
        {
          step: 1,
          title: 'Discovery',
          description: 'Define asset types, jurisdictions, and chain requirements.',
          icon: '🔍'
        },
        {
          step: 2,
          title: 'Architecture',
          description: 'Map contract interactions, consensus logic, and user roles.',
          icon: '🏗️'
        },
        {
          step: 3,
          title: 'Development',
          description: 'Implement modular smart contracts and front-end clients.',
          icon: '⚙️'
        },
        {
          step: 4,
          title: 'Audit',
          description: 'Run automated scans, fuzz tests, and third-party verifications.',
          icon: '🔒'
        },
        {
          step: 5,
          title: 'Testnet → Mainnet',
          description: 'Deploy under simulated conditions before production launch.',
          icon: '🚀'
        },
        {
          step: 6,
          title: 'Maintenance',
          description: 'Track performance, apply version upgrades, and manage governance.',
          icon: '🔧'
        }
      ],
      gradientColors: ['#f4cc6f', '#6EA8FE', '#00D4FF']
    },
    whyWork: {
      title: 'The Future of Blockchain and Web3',
      subtitle: 'Partner with blockchain experts who deliver results.',
      benefits: [
        {
          title: 'Web3 Leadership',
          subtitle: 'Future-Ready',
          description: 'Blockchain and Web3 are changing the way the digital economy works by getting rid of middlemen, making things more open, and letting people work together without having to trust each other.',
          icon: 'FaNetworkWired',
          gradient: ['#3b82f6', '#06b6d4']
        }
      ]
    },
    cta: {
      backgroundImage: '/images/agentic-ai/pillar/Blockchain Development Services 2.png',
      icon: 'FaCube',
      heading: 'Build the Future of Web3',
      paragraphs: [
        'Blockchain is a means to real business outcomes—not a science project. At Altiora Infotech, we pair deep blockchain engineering with clear commercial thinking to deliver solutions that are secure, scalable, and aligned to your KPIs.',
        "Ready to turn a concept into a roadmap? Share your goals and constraints, and we'll come back with a crisp blueprint: architecture options, timeline and milestones, security and compliance approach, and an investment estimate you can act on."
      ],
      buttons: [
        {
          text: 'Schedule Blockchain Consultation',
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
  },
  // Additional custom fields for this specific page
  customSections: {
    understanding: 'A blockchain is a digital ledger that keeps track of transactions on a network of computers. A "block" stores each transaction and links it to the one before it, creating a safe, unchangeable chain. This structure makes sure that data can\'t be changed once it\'s been recorded, which builds trust, openness, and the ability to trace things without having to have central control.',
    webEvolution: [
      {
        era: 'Web1',
        period: '1990s to Early 2000s',
        title: 'The Static Era',
        description: 'The first generation of the internet, Web1, was mostly for reading. Sites were like digital brochures, with simple HTML code and no changes. You had to use directories and early search to find your way around, pages took a long time to load, and the content didn\'t change very often.',
        icon: '📄',
        color: 'from-blue-500 to-cyan-500'
      },
      {
        era: 'Web2',
        period: '2004–Present',
        title: 'The Social and Interactive Web',
        description: 'Web2 changed that brochure-style web into a lively, interactive space. Anyone could easily make, share, and remix content on a large scale thanks to social media, blogs, wikis, app stores, and cloud services.',
        icon: '👥',
        color: 'from-purple-500 to-pink-500'
      },
      {
        era: 'Web3',
        period: 'Emerging Era',
        title: 'The Decentralized and Trustless Internet',
        description: 'Web3 is a sign that the internet is moving toward being decentralized and owned by users, with blockchains, smart contracts, wallets, and cryptography powering it. Peer-to-peer networks coordinate value, identity, and logic instead of relying on a single platform.',
        icon: '🌐',
        color: 'from-green-500 to-emerald-500'
      }
    ],
    blockchainFeatures: [
      { icon: 'FaGlobe', title: 'Decentralization', desc: 'No single authority controls the data.' },
      { icon: 'FaShieldAlt', title: 'Transparency', desc: 'All participants can verify transactions.' },
      { icon: 'FaLock', title: 'Immutability', desc: 'Data cannot be changed or deleted.' },
      { icon: 'FaCheckCircle', title: 'Security', desc: 'Cryptographic algorithms protect against tampering.' },
      { icon: 'FaLayerGroup', title: 'Consensus Mechanisms', desc: 'Nodes agree on transaction validity (e.g., Proof of Work, Proof of Stake).' },
      { icon: 'FaCode', title: 'Smart Contracts', desc: 'Programmable logic executes agreements automatically.' }
    ],
    coreServices: [
      {
        icon: 'FaCube',
        title: 'Custom Blockchain Development',
        description: 'Using the best frameworks, like Ethereum, Polygon, Solana, Binance Smart Chain, and Hyperledger, we make custom blockchain networks that are safe. Our knowledge guarantees that things can grow, are safe, and work together.',
        color: 'from-blue-500 to-cyan-500'
      },
      {
        icon: 'FaCode',
        title: 'Smart Contract Development',
        description: 'The basis of blockchain automation is smart contracts. We make, check, and deploy smart contracts that are free of errors and make sure that transactions are trustless, open, and automatic.',
        color: 'from-purple-500 to-pink-500'
      },
      {
        icon: 'FaNetworkWired',
        title: 'dApp (Decentralized Application) Development',
        description: 'We make decentralized apps that are easy for people to use and work on blockchain networks. We make dApps that are fast, easy to use, and safe in a wide range of fields, including finance, gaming, healthcare, and logistics.',
        color: 'from-green-500 to-emerald-500'
      },
      {
        icon: 'FaCoins',
        title: 'DeFi (Decentralized Finance) Solutions',
        description: 'Our DeFi development services help businesses create safe lending platforms, liquidity pools, staking solutions, and decentralized exchanges (DEXs) that make it easier for everyone to get involved in finance.',
        color: 'from-yellow-500 to-orange-500'
      },
      {
        icon: 'FaLayerGroup',
        title: 'NFT Development & Marketplace Creation',
        description: 'We make NFT platforms for games, art, and entertainment. We offer full NFT infrastructure solutions, from making smart contracts to building NFT trading ecosystems.',
        color: 'from-pink-500 to-rose-500'
      },
      {
        icon: 'FaChartLine',
        title: 'Tokenization Services',
        description: 'We help clients tokenize assets like real estate, stocks, art, and commodities. This makes them easier to buy and sell by using blockchain-based digital tokens.',
        color: 'from-indigo-500 to-purple-500'
      },
      {
        icon: 'FaLock',
        title: 'Private & Consortium Blockchain',
        description: 'For enterprises seeking confidentiality and control, we develop private and consortium blockchain solutions using platforms like Hyperledger Fabric and Quorum.',
        color: 'from-red-500 to-orange-500'
      },
      {
        icon: 'FaHandshake',
        title: 'Blockchain Consulting',
        description: 'Our experts provide strategic blockchain consulting to identify use cases, design architecture, and guide adoption aligned with business goals.',
        color: 'from-teal-500 to-cyan-500'
      }
    ],
    industries: [
      { icon: 'FaCoins', name: 'Finance', desc: 'Enables DeFi, cross-border payments, and asset tokenization.' },
      { icon: 'FaHospital', name: 'Healthcare', desc: 'Secures patient records and enables transparent data sharing.' },
      { icon: 'FaTruck', name: 'Supply Chain', desc: 'Tracks products from origin to delivery with verifiable authenticity.' },
      { icon: 'FaHome', name: 'Real Estate', desc: 'Facilitates fractional ownership and smart contract-based transactions.' },
      { icon: 'FaGamepad', name: 'Gaming', desc: 'Powers play-to-earn ecosystems and in-game asset ownership.' },
      { icon: 'FaUniversity', name: 'Government', desc: 'Promotes transparent voting and record management systems.' },
      { icon: 'FaBolt', name: 'Energy', desc: 'Enables decentralized energy trading and carbon tracking.' },
      { icon: 'FaGraduationCap', name: 'Education', desc: 'Verifies academic credentials and certifications securely.' }
    ],
    faqs: [
      { question: 'Which chain should we choose?', answer: 'Start with throughput, finality, fee behavior, custody, and compliance requirements. Favor modularity so migration is a decision, not an existential rewrite.' },
      { question: 'How do upgrades stay safe?', answer: 'Use timelocks, role separation, rehearsal, and disclosure. Refuse to violate critical invariants and practice rollbacks.' },
      { question: 'How do we manage keys?', answer: 'MPC or HSM with dual control and automated rotation; no hot keys on laptops; short-lived session keys for UX.' },
      { question: 'How do we survive audits?', answer: 'Keep code minimal and verifiable, test properties early, invite multiple reviewers, scope bounties, and constrain upgrade surfaces.' },
      { question: 'What does success look like?', answer: 'Faster settlement, fewer reconciliation errors, predictable fees, fewer incidents, and evidence that satisfies regulators and auditors.' }
    ]
  }
};

async function seedBlockchainServicesPage() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const existingPage = await Web3Service.findOne({ pageId: 'blockchain-development-services' });

    if (existingPage) {
      console.log('Blockchain Services page already exists. Updating...');
      await Web3Service.findOneAndUpdate(
        { pageId: 'blockchain-development-services' },
        blockchainServicesPageData,
        { new: true, upsert: true }
      );
      console.log('Blockchain Services page updated successfully!');
    } else {
      console.log('Creating new Blockchain Services page...');
      await Web3Service.create(blockchainServicesPageData);
      console.log('Blockchain Services page created successfully!');
    }

    console.log('Seed completed successfully!');
  } catch (error) {
    console.error('Error seeding Blockchain Services page:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  }
}

seedBlockchainServicesPage();
