const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME || 'test';

if (!uri) {
  console.error('MONGODB_URI environment variable is not set');
  process.exit(1);
}

const rwaPageData = {
  pageType: "rwa",
  slug: "rwa",
  isActive: true,
  heroSection: {
    badge: "ALTIORA INFOTECH",
    title: "From Paper to Protocol",
    highlightedTitle: "RWA Tokenization",
    description: "Bring real-world value on-chain—compliant, secure, and scalable. Tokenize treasuries, credit, real estate, and commodities into programmable, fractional assets with instant settlement and 24/7 markets.",
    backgroundImage: "/images/rwa/hero-city-silhouette.png",
    tags: ["Compliance", "Tokenization", "Liquidity", "Security"],
    buttons: [
      {
        text: "Start Project",
        link: "https://calendly.com/altiorainfotech/30min",
        variant: "primary",
        target: "_blank"
      }
    ]
  },
  valueSnapshots: [
    {
      icon: "🏛️",
      title: "Asset Selection",
      description: "Due diligence on T-bills, private credit, real estate, and commodities with verified ownership.",
      delay: 0
    },
    {
      icon: "⚖️",
      title: "Legal Compliance",
      description: "SPV/trust structures with KYC/AML controls and transfer restrictions built on-chain.",
      delay: 90
    },
    {
      icon: "🔒",
      title: "Secure Operations",
      description: "Banking, custody, smart contracts, and proof-of-reserves with automated reporting.",
      delay: 180
    }
  ],
  deliverSection: {
    title: "What We Deliver",
    cards: [
      {
        title: "Asset Selection & Due Diligence",
        icon: "search",
        items: [
          { text: "T-bills, private credit, real estate verification" },
          { text: "Cash flow and risk analysis" },
          { text: "Target investor profiling" }
        ]
      },
      {
        title: "Legal Structuring",
        icon: "legal",
        items: [
          { text: "SPV/trust entity selection" },
          { text: "Offering documentation" },
          { text: "KYC/AML compliance mapping" }
        ]
      },
      {
        title: "Banking & Custody",
        icon: "bank",
        items: [
          { text: "Bank account establishment" },
          { text: "Qualified wallet policies" },
          { text: "Fiat on/off-ramp integration" }
        ]
      },
      {
        title: "Token Design",
        icon: "token",
        items: [
          { text: "ERC-20/1400/4626 standards" },
          { text: "Supply and pricing logic" },
          { text: "Whitelisting controls" }
        ]
      },
      {
        title: "Smart Contracts",
        icon: "contract",
        items: [
          { text: "Issuance and transfer controls" },
          { text: "Pause/force-transfer features" },
          { text: "Security audits" }
        ]
      },
      {
        title: "Operations & Reporting",
        icon: "operations",
        items: [
          { text: "NAV updates and reporting" },
          { text: "Coupon/dividend automation" },
          { text: "Compliance monitoring" }
        ]
      }
    ]
  },
  techStackSection: {
    title: "TECHNOLOGY STACK",
    subtitle: "Cutting-edge technologies",
    description: "We use cutting-edge technologies, honing our expertise every day.",
    tabs: [
      {
        key: "security",
        label: "Security & Custody",
        items: [
          { name: "Fireblocks", icon: "fireblocks", color: "#F4CC6F" },
          { name: "HashiCorp Vault", icon: "vault", color: "#F4CC6F" },
          { name: "AWS KMS", icon: "aws", color: "#FF9900" }
        ]
      },
      {
        key: "blockchain",
        label: "Blockchain & Oracles",
        items: [
          { name: "Ethereum", icon: "ethereum", color: "#627EEA" },
          { name: "Chainlink", icon: "chainlink", color: "#375BD2" },
          { name: "Solidity", icon: "solidity", color: "#FFFFFF" }
        ]
      },
      {
        key: "infrastructure",
        label: "Infrastructure",
        items: [
          { name: "Next.js", icon: "nextjs", color: "#FFFFFF" },
          { name: "NestJS", icon: "nestjs", color: "#E0234E" },
          { name: "PostgreSQL", icon: "postgresql", color: "#336791" }
        ]
      }
    ]
  },
  ctaSection: {
    title: "Ready to tokenize responsibly?",
    description: "Book a consult to map your asset and jurisdiction and go live in weeks, not quarters.",
    buttons: [
      {
        text: "Book a consult",
        link: "/contact",
        variant: "primary",
        target: "_self"
      }
    ]
  },
  seoMetadata: {
    title: "RWA Tokenization | Real World Asset Tokenization | Altiora Infotech",
    description: "Tokenize real-world assets with compliant, secure infrastructure. From T-bills to real estate, we build tokenization rails that meet regulatory expectations.",
    keywords: ["RWA tokenization", "real world assets", "tokenization", "compliance", "blockchain", "smart contracts"],
    ogImage: "/images/rwa/hero-city-silhouette.png"
  }
};

async function cleanAndSeedRWAPage() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('mainpages');
    
    // Drop the collection to remove any existing indexes
    try {
      await collection.drop();
      console.log('Dropped existing mainpages collection');
    } catch (error) {
      console.log('Collection does not exist, creating new one');
    }
    
    // Insert the new data
    await collection.insertOne(rwaPageData);
    
    console.log('RWA page seeded successfully with new structure');
  } catch (error) {
    console.error('Error seeding RWA page:', error);
  } finally {
    await client.close();
  }
}

cleanAndSeedRWAPage();