import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = 'blog-admin-panel';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env');
}
const mongoUri: string = MONGODB_URI;

const smartContractData = {
  pageId: 'smart-contract',
  pageName: 'Smart Contract Development Services',
  route: '/services/web3/smart-contract',
  status: 'published',
  seo: {
    title: 'Smart Contract Development Services - Altiora Infotech',
    description: 'We design, develop, and deploy secure smart contracts that automate business logic and drive decentralized innovation.'
  },
  sections: {
    hero: {
      backgroundImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Smart_Contract_Development-1_bfwjuo.jpg',
      badge: 'ALTIORA INFOTECH',
      badgeIcon: 'FaCode',
      heading: 'Smart Contract Development',
      headingHighlight: 'Services',
      highlightColor: '#f4cc6f',
      subheading: 'We design, develop, and deploy secure smart contracts that automate business logic and drive decentralized innovation.',
      cta: {
        text: 'Get Started',
        link: '/contact',
        primary: true,
        icon: 'FaRocket'
      }
    },
    whatIs: {
      title: 'The Power of Self-Executing Code',
      subtitle: 'Smart contracts are the programmable backbone of blockchain ecosystems.',
      description: 'Smart contracts are self-executing programs stored on blockchain that automatically enforce and execute the terms of an agreement when predefined conditions are met. They eliminate intermediaries, reduce costs, and ensure trust through code.',
      additionalText: 'At Altiora Infotech, we specialize in crafting robust smart contracts for DeFi protocols, NFT platforms, DAOs, and custom business logic. Our expertise spans Solidity, Vyper, and cross-chain compatibility, ensuring your contracts are secure, efficient, and scalable.',
      icon: 'FaCode'
    },
    whyMatter: {
      title: 'Why Smart Contracts Matter',
      subtitle: 'Transform business processes with automated, trustless execution.',
      advantages: [
        {
          title: 'Technical Advantages',
          icon: 'FaShieldAlt',
          items: [
            'Automated execution without intermediaries',
            'Immutable and transparent code logic',
            'Cryptographic security and verification',
            'Reduced operational costs and errors'
          ]
        },
        {
          title: 'Business Benefits',
          icon: 'FaChartLine',
          items: [
            'Streamlined operations and faster transactions',
            'Enhanced trust through transparent execution',
            'Global accessibility without borders',
            'Programmable business logic automation'
          ]
        }
      ]
    },
    whyChoose: {
      title: 'Why Choose Altiora Infotech?',
      subtitle: 'We design smart contract solutions that align with your business goals.',
      description: 'We don\'t just write smart contracts at Altiora Infotech; we create automated business logic that complies with regulations, integrates seamlessly with existing systems, and unlocks new opportunities for our clients.',
      features: [
        { icon: 'FaShieldAlt', title: 'Security First', description: 'Rigorous testing and audits' },
        { icon: 'FaNetworkWired', title: 'Technical Excellence', description: 'Advanced contract patterns' },
        { icon: 'FaRocket', title: 'Innovation', description: 'Cutting-edge solutions' }
      ]
    },
    serviceOfferings: {
      title: 'Our Smart Contract Service Offerings',
      subtitle: 'Comprehensive smart contract development services for every need.',
      services: [
        { name: 'Smart Contract Development', image: '/images/web3/blockchain/Smart Contract.svg' },
        { name: 'Security Audits', image: '/images/web3/blockchain/Security.svg' },
        { name: 'Gas Optimization', image: '/images/web3/blockchain/End-to-End.svg' },
        { name: 'Upgradeable Contracts', image: '/images/web3/blockchain/Token.svg' },
        { name: 'Cross-Chain Contracts', image: '/images/web3/blockchain/DeFi.svg' },
        { name: 'Testing & Verification', image: '/images/web3/blockchain/NFT.svg' },
        { name: 'Smart Contract Consulting', image: '/images/web3/blockchain/Blockchain.svg' },
        { name: 'Bug Bounty Programs', image: '/images/web3/blockchain/DAO.svg' },
        { name: 'Contract Migration', image: '/images/web3/blockchain/dApp.svg' }
      ]
    },
    process: {
      title: 'Our Smart Contract Development Process',
      subtitle: 'A structured, transparent, and iterative process to transform your idea into secure smart contracts.',
      steps: [
        {
          step: 1,
          title: 'Requirements Analysis',
          description: 'Business logic assessment, contract specifications, security requirements, and integration planning.',
          icon: '🔍'
        },
        {
          step: 2,
          title: 'Design & Architecture',
          description: 'Contract structure design, function specifications, state management, and gas optimization planning.',
          icon: '📐'
        },
        {
          step: 3,
          title: 'Development & Coding',
          description: 'Write smart contract code in Solidity/Vyper, implement business logic, and add event logging.',
          icon: '⚙️'
        },
        {
          step: 4,
          title: 'Unit Testing',
          description: 'Comprehensive test suites, edge case coverage, and automated testing frameworks.',
          icon: '🧪'
        },
        {
          step: 5,
          title: 'Security Audit',
          description: 'Third-party security review, vulnerability assessment, and penetration testing.',
          icon: '🛡️'
        },
        {
          step: 6,
          title: 'Deployment & Verification',
          description: 'Testnet deployment, contract verification on block explorers, and final validation.',
          icon: '🚀'
        },
        {
          step: 7,
          title: 'Monitoring & Maintenance',
          description: 'On-chain monitoring, performance tracking, and upgrade management.',
          icon: '📊'
        },
        {
          step: 8,
          title: 'Continuous Optimization',
          description: 'Gas optimization, feature enhancements, and protocol upgrades.',
          icon: '🔄'
        }
      ]
    },
    whyWork: {
      title: 'Why Work With Altiora Infotech?',
      subtitle: 'Partner with smart contract experts who deliver results.',
      benefits: [
        { text: 'Deep Technical Expertise – Proficiency in Solidity, Vyper, and advanced contract patterns.', icon: 'FaNetworkWired' },
        { text: 'Security-First Development – Rigorous testing and audits to prevent vulnerabilities.', icon: 'FaShieldAlt' },
        { text: 'Gas-Efficient Code – Optimized contracts that minimize the transaction costs.', icon: 'FaTools' },
        { text: 'Upgradeable Solutions – Future-proof contracts with proxy patterns and governance.', icon: 'FaCode' },
        { text: 'Cross-Chain Compatibility – Multi-chain deployments and the interoperability.', icon: 'FaRocket' },
        { text: 'Ongoing Support – Monitoring, maintenance, and evolution of your contracts.', icon: 'FaHandshake' }
      ]
    },
    cta: {
      title: 'Ready to Build Your Smart Contracts?',
      description: 'Smart contracts are the foundation of decentralized applications and automated business processes. At Altiora Infotech, we ensure your contracts are not just functional, but secure, efficient, and aligned with your strategic goals.',
      additionalText: 'Ready to automate your business logic? Share your requirements, and we\'ll design smart contracts that drive real value.',
      primaryButton: {
        text: 'Book Discovery Call',
        link: 'https://calendly.com/altiorainfotech/30min',
        icon: 'FaRocket'
      },
      secondaryButton: {
        text: 'Send Your Brief',
        link: '/contact',
        icon: 'FaEye'
      },
      backgroundImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Smart_Contract_Development-2_bg1p89.jpg',
      icon: 'FaRocket'
    }
  },
  createdAt: new Date(),
  updatedAt: new Date()
};

async function seedSmartContract() {
  const client = new MongoClient(mongoUri);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(DB_NAME);
    const collection = db.collection('web3Services');

    // Delete existing smart-contract data
    await collection.deleteMany({ pageId: 'smart-contract' });

    // Insert new data
    const result = await collection.insertOne(smartContractData);
    console.log('Smart Contract data seeded successfully:', result.insertedId);

  } catch (error) {
    console.error('Error seeding smart contract data:', error);
  } finally {
    await client.close();
  }
}

seedSmartContract();