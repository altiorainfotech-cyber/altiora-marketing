import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = 'blog-admin-panel';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env');
}
const mongoUri: string = MONGODB_URI;

const tokenizationData = {
  pageId: 'tokenization',
  pageName: 'Tokenization Services',
  route: '/services/web3/tokenization',
  status: 'published',
  seo: {
    title: 'Tokenization Services - Altiora Infotech',
    description: 'From real estate to equities, tokenization redefines how assets are created, traded, and governed—making finance faster, fairer, and borderless.'
  },
  sections: {
    hero: {
      backgroundImage: '/images/web3/Tokenization Services-1.png',
      badge: 'ALTIORA INFOTECH',
      badgeIcon: 'FaCode',
      heading: 'Tokenization Services',
      headingHighlight: '',
      highlightColor: '#f4cc6f',
      subheading: 'From real estate to equities, tokenization redefines how assets are created, traded, and governed—making finance faster, fairer, and borderless.',
      cta: {
        text: 'Get Started',
        link: '/contact',
        primary: true,
        icon: 'FaRocket'
      }
    },
    whatIs: {
      title: 'Digitize Assets, Unlock Liquidity',
      subtitle: 'Tokenization is the process of converting real-world or digital assets into blockchain-based tokens.',
      description: 'It enables fractional ownership, transparent transfers, and enhanced liquidity while bridging traditional finance and Web3. This revolutionary approach democratizes access to previously illiquid markets, reduces transaction costs, and creates global investment opportunities that operate 24/7 across borders.',
      additionalText: '',
      icon: 'FaCoins',
      stats: [
        { value: 99, suffix: '%', label: 'Transparency' },
        { value: 24, suffix: '/7', label: 'Availability' },
        { value: 50, suffix: '+', label: 'Asset Types' }
      ]
    },
    whyMatter: {
      title: 'Why Tokenization Matters',
      subtitle: 'Transform traditional assets into digital opportunities.',
      advantages: [
        {
          title: 'Technical Advantages',
          icon: 'FaShieldAlt',
          items: [
            'Fractional ownership of high-value assets',
            'Programmable tokens with smart contracts',
            'Immutable transaction records',
            'Cross-border transfer capabilities'
          ]
        },
        {
          title: 'Business Benefits',
          icon: 'FaChartLine',
          items: [
            'Increased liquidity for traditionally illiquid assets',
            'Lower barriers to entry for investors',
            'New revenue streams through tokenization',
            'Enhanced transparency and regulatory compliance',
            'Global market access and 24/7 trading'
          ]
        }
      ]
    },
    whyChoose: {
      title: 'Why Choose Altiora Infotech?',
      subtitle: 'We design tokenization solutions that align with your business goals.',
      description: 'We don\'t just tokenize assets at Altiora Infotech; we create digital securities that comply with regulations, integrate seamlessly with existing systems, and unlock new opportunities for our clients.',
      features: [
        { icon: 'FaShieldAlt', title: 'Regulatory Compliance', description: 'Legal and regulatory expertise' },
        { icon: 'FaNetworkWired', title: 'Technical Integration', description: 'Seamless system integration' },
        { icon: 'FaRocket', title: 'Market Innovation', description: 'Cutting-edge token solutions' }
      ]
    },
    serviceOfferings: {
      title: 'Our Tokenization Service Offerings',
      subtitle: 'Comprehensive tokenization services for every asset class.',
      services: [
        { name: 'Asset Tokenization Design', image: '/images/web3/Tokenization Services/Asset.svg' },
        { name: 'Security Token Offering (STO)', image: '/images/web3/Tokenization Services/Security.svg' },
        { name: 'Utility & Payment Token Development', image: '/images/web3/Tokenization Services/Utility.svg' },
        { name: 'Fractional Ownership Platforms', image: '/images/web3/Tokenization Services/Tokenization.svg' },
        { name: 'Smart Contract Token Logic', image: '/images/web3/Tokenization Services/Smart.svg' },
        { name: 'Compliance & Regulatory Frameworks', image: '/images/web3/Tokenization Services/Compliance.svg' },
        { name: 'Custody & Wallet Integration', image: '/images/web3/Tokenization Services/Wallet.svg' },
        { name: 'Secondary Market Integration', image: '/images/web3/Tokenization Services/Secondary.svg' },
        { name: 'Expert Consultation', image: '/images/web3/Tokenization Services/Expert.svg' }
      ]
    },
    process: {
      title: 'Our Tokenization Process',
      subtitle: 'A structured, transparent, and iterative process to transform your assets into digital tokens.',
      steps: [
        {
          step: 1,
          title: 'Discovery & Feasibility',
          description: 'Identify the asset, legal status, business model, and tokenization goals.',
          icon: 'FaSearch'
        },
        {
          step: 2,
          title: 'Token Model & Architecture',
          description: 'Choose token standard, partitioning logic, governance, fractionalization.',
          icon: 'FaCube'
        },
        {
          step: 3,
          title: 'Smart Contract & Backend Development',
          description: 'Build token logic, minting, burning, transfers, vesting, on-chain modules.',
          icon: 'FaCogs'
        },
        {
          step: 4,
          title: 'Integration & Gateway Setup',
          description: 'Connect wallets, custodian APIs, exchange, oracle or pricing feeds.',
          icon: 'FaLink'
        },
        {
          step: 5,
          title: 'Compliance & KYC Implementation',
          description: 'Integrate identity, regulatory checks, permission management.',
          icon: 'FaUserShield'
        },
        {
          step: 6,
          title: 'Deployment & Issuance',
          description: 'Launch the token, mint, distribute, list on platforms.',
          icon: 'FaCloudUploadAlt'
        },
        {
          step: 7,
          title: 'Ongoing Support & Upgrades',
          description: 'Maintain, patch, upgrade, monitor token behaviors and compliance.',
          icon: 'FaHeadset'
        }
      ]
    },
    whyWork: {
      title: 'Why Work With Altiora Infotech?',
      subtitle: 'Partner with tokenization experts who deliver results.',
      benefits: [
        { text: 'Domain Expertise – Deep knowledge in tokenization, securities law, blockchain, and digital assets.', icon: 'FaBrain' },
        { text: 'Custom Solutions – Tailored tokenization strategies, not templates; each project fits your specific asset class.', icon: 'FaPuzzlePiece' },
        { text: 'End-to-End Capability – Complete service from asset valuation to token distribution and secondary markets.', icon: 'FaInfinity' },
        { text: 'Security-First Approach – Rigorous audits, compliance checks, and secure smart contracts.', icon: 'FaShieldAlt' },
        { text: 'Scalable & Future-ready – Modular design for evolving regulations and market conditions.', icon: 'FaNetworkWired' },
        { text: 'Client-Centric Philosophy – Your success is our success; expect partnership and ongoing support.', icon: 'FaHandshake' }
      ]
    },
    cta: {
      title: 'Ready to Tokenize Your Assets?',
      description: 'Let\'s discuss your tokenization needs. Share your vision, and we\'ll help you unlock liquidity and create new opportunities.',
      additionalText: '',
      primaryButton: {
        text: 'Book a Consultation',
        link: 'https://calendly.com/altiorainfotech/30min',
        icon: 'FaRocket'
      },
      secondaryButton: {
        text: 'Get Started',
        link: '/contact',
        icon: 'FaEye'
      },
      backgroundImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Tokenization_Services-2_hqxv91.png',
      icon: 'FaCoins'
    }
  },
  createdAt: new Date(),
  updatedAt: new Date()
};

async function seedTokenization() {
  const client = new MongoClient(mongoUri);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(DB_NAME);
    const collection = db.collection('web3Services');

    // Delete existing tokenization data
    await collection.deleteMany({ pageId: 'tokenization' });

    // Insert new data
    const result = await collection.insertOne(tokenizationData);
    console.log('Tokenization data seeded successfully:', result.insertedId);

  } catch (error) {
    console.error('Error seeding tokenization data:', error);
  } finally {
    await client.close();
  }
}

seedTokenization();