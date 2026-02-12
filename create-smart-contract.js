const { MongoClient } = require('mongodb');

const MONGODB_URI = 'mongodb+srv://altiora:Altiora%40123@altiora.2vbkmol.mongodb.net/?retryWrites=true&w=majority&appName=Altiora';
const DB_NAME = 'blog-admin-panel';

async function createSmartContractService() {
  const client = new MongoClient(MONGODB_URI);
  
  try {
    await client.connect();
    const db = client.db(DB_NAME);
    const collection = db.collection('web3');
    
    const smartContractData = {
      serviceType: 'smart-contract',
      heroSection: {
        title: 'Smart Contract Development',
        subtitle: 'Secure & Efficient Blockchain Solutions',
        description: 'Build robust smart contracts with automated execution and transparent logic',
        backgroundImage: '/images/smart-contract-hero.jpg',
        ctaText: 'Get Started',
        ctaLink: '/contact'
      },
      whatIsSection: {
        title: 'What Are Smart Contracts?',
        subtitle: 'Self-Executing Digital Agreements',
        description: 'Smart contracts are self-executing programs stored on blockchain that automatically enforce and execute the terms of an agreement when predefined conditions are met.',
        additionalDescription: 'At Altiora Infotech, we specialize in crafting robust smart contracts for DeFi protocols, NFT platforms, DAOs, and custom business logic.',
        icon: 'FaCode'
      },
      ctaSection: {
        title: 'Ready to Build Your Smart Contracts?',
        description: 'Smart contracts are the foundation of decentralized applications and automated business processes.',
        additionalDescription: 'Ready to automate your business logic? Share your requirements, and we\'ll design smart contracts that drive real value.',
        backgroundImage: '/images/cta-bg.jpg',
        primaryCTA: {
          text: 'Start Your Project',
          link: '/contact'
        },
        secondaryCTA: {
          text: 'View Portfolio',
          link: '/projects'
        }
      },
      seoMetadata: {
        title: 'Smart Contract Development Services | Altiora Infotech',
        description: 'Professional smart contract development services. Build secure, efficient blockchain solutions with automated execution and transparent logic.'
      },
      sections: {
        whatIs: {
          paragraphs: [
            'Smart contracts are self-executing programs stored on blockchain that automatically enforce and execute the terms of an agreement when predefined conditions are met. They eliminate intermediaries, reduce costs, and ensure trust through code.',
            'At Altiora Infotech, we specialize in crafting robust smart contracts for DeFi protocols, NFT platforms, DAOs, and custom business logic. Our expertise spans Solidity, Vyper, and cross-chain compatibility, ensuring your contracts are secure, efficient, and scalable.'
          ]
        },
        whyMatter: {
          cards: [
            {
              title: 'Technical Advantages',
              items: [
                'Automated execution without intermediaries',
                'Immutable and transparent code logic',
                'Cryptographic security and verification',
                'Reduced operational costs and errors'
              ]
            },
            {
              title: 'Business Benefits',
              items: [
                'Streamlined operations and faster transactions',
                'Enhanced trust through transparent execution',
                'Global accessibility without borders',
                'Programmable business logic automation'
              ]
            }
          ]
        },
        process: {
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
          benefits: [
            {
              title: 'Expertise',
              subtitle: 'Technical',
              description: 'Deep Technical Expertise – Proficiency in Solidity, Vyper, and advanced contract patterns.',
              icon: 'FaNetworkWired',
              gradient: ['#3b82f6', '#06b6d4']
            },
            {
              title: 'Security',
              subtitle: 'First',
              description: 'Security-First Development – Rigorous testing and audits to prevent vulnerabilities.',
              icon: 'FaShieldAlt',
              gradient: ['#a855f7', '#ec4899']
            },
            {
              title: 'Efficiency',
              subtitle: 'Gas',
              description: 'Gas-Efficient Code – Optimized contracts that minimize the transaction costs.',
              icon: 'FaTools',
              gradient: ['#22c55e', '#10b981']
            },
            {
              title: 'Upgradeable',
              subtitle: 'Solutions',
              description: 'Upgradeable Solutions – Future-proof contracts with proxy patterns and governance.',
              icon: 'FaCode',
              gradient: ['#ef4444', '#f97316']
            },
            {
              title: 'Cross-Chain',
              subtitle: 'Compatibility',
              description: 'Cross-Chain Compatibility – Multi-chain deployments and interoperability.',
              icon: 'FaRocket',
              gradient: ['#eab308', '#f97316']
            },
            {
              title: 'Support',
              subtitle: 'Ongoing',
              description: 'Ongoing Support – Monitoring, maintenance, and evolution of your contracts.',
              icon: 'FaHandshake',
              gradient: ['#14b8a6', '#06b6d4']
            }
          ]
        },
        cta: {
          heading: 'Ready to Build Your Smart Contracts?',
          paragraphs: [
            'Smart contracts are the foundation of decentralized applications and automated business processes. At Altiora Infotech, we ensure your contracts are not just functional, but secure, efficient, and aligned with your strategic goals.',
            'Ready to automate your business logic? Share your requirements, and we\'ll design smart contracts that drive real value.'
          ],
          buttons: [
            {
              text: 'Start Your Project',
              link: '/contact',
              icon: 'FaRocket',
              primary: true,
              external: true
            },
            {
              text: 'View Portfolio',
              link: '/projects',
              icon: 'FaEye',
              primary: false,
              external: false
            }
          ]
        }
      },
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const result = await collection.insertOne(smartContractData);
    console.log('Smart contract service created:', result.insertedId);
    
  } catch (error) {
    console.error('Error creating smart contract service:', error);
  } finally {
    await client.close();
  }
}

createSmartContractService();