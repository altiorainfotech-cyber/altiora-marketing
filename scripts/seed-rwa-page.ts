import mongoose from 'mongoose';
import RWAPage from '../src/models/RWAPage';

const MONGODB_URI = process.env.MONGODB_URI;

const rwaPageData = {
  pageId: 'rwa-tokenization',
  hero: {
    badgeText: 'ALTIORA INFOTECH',
    mainHeadline: 'From Paper to Protocol',
    highlightText: 'RWA Tokenization',
    description: 'Bring real-world value on-chain—compliant, secure, and scalable. Tokenize treasuries, credit, real estate, and commodities into programmable, fractional assets with instant settlement and 24/7 markets. On-chain transparency enables instant audits and global access; we provide trusted, fast, interoperable rails to cut costs and boost liquidity.',
    ctaText: 'Start Project',
    ctaLink: 'https://calendly.com/altiorainfotech/30min',
    backgroundImage: '/images/rwa/hero-city-silhouette.png'
  },
  complianceSection: {
    badge1: 'TOKENIZATION',
    badge2: 'COMPLIANCE',
    title: 'Compliant by design, liquid by default',
    description: 'We build tokenization infrastructure that meets regulatory expectations while remaining DeFi native, enabling instant settlement and global access.',
    ctaText: 'See tokenization examples',
    ctaLink: 'https://calendly.com/altiorainfotech/30min'
  },
  whatWeDeliver: {
    title: 'What We Deliver',
    description: 'We deliver a true end to end RWA program that starts with the asset and ends with liquid, compliant tokens. We help source and diligence the asset, choose the right legal wrapper, and set up SPVs and custody. We define the token standard, write and audit smart contracts, and embed KYC and AML so only approved investors can subscribe, hold, and transfer. Proof of reserves and oracle feeds keep NAV and cash flows current. Investor onboarding, wallets, and dashboards are built for clarity, from allocations to coupons and redemptions. Primary issuance follows your jurisdiction\'s rules, while secondary liquidity is enabled through allowlisted venues that respect transfer restrictions. Whether you are tokenizing T bills for treasury, assembling private credit pools, or fractionalizing real estate, we build rails that meet regulatory expectations while remaining DeFi native, so you can launch in weeks, operate with confidence, and scale as demand grows.'
  },
  steps: {
    title: 'How RWA Tokenization Works',
    items: [
      {
        h: 'Asset selection and due diligence',
        d: 'Find the underlying asset (T-bills, private credit, real estate, commodities), authenticate ownership, and cash flows and risks and control target-investor profiles.',
        iconName: 'Search'
      },
      {
        h: 'Legal structuring and compliance mapping',
        d: 'Select entity model (SPV/trust) and jurisdiction, custom offering documentation, map KYC/AML, sanctions, suitability and transfer prohibitions to on-chain controls.',
        iconName: 'FileText'
      },
      {
        h: 'Banking, custody, and settlement rails',
        d: 'Establish bank accounts, custodians and qualified wallet policies; settle on fiat off/raamping as well as redemption arrangements.',
        iconName: 'Wallet'
      },
      {
        h: 'Token design and on-chain architecture',
        d: 'Pick ERC-20/1400/4626 define supply, pricing, lockups, NAV logic, and whitelisting, plan data flows, subgraph data flows.',
        iconName: 'Coins'
      },
      {
        h: 'Smart contracts, controls, and audits',
        d: 'Introduce issuance, transfer controls, pause/force-transfer and redemption features; perform independent security aid examinations and formal verification (where necessary).',
        iconName: 'ShieldCheck'
      },
      {
        h: 'Proof-of-reserves and data feeds',
        d: 'Combine custodial attestations, wealth of trustee reports, and updates in NAV, schedule of interests, schedule of coupon by oracles and automated reporting.',
        iconName: 'Database'
      },
      {
        h: 'Investor onboarding',
        d: 'Issue a gated portal using KYC/AML, accreditation missions, checking wallets and risk exposures; mint/allocate tokens on request.',
        iconName: 'UserCheck'
      },
      {
        h: 'Primary issuance',
        d: 'Make first sale/subscription, distribute tokens and store cap-table and legal registers with chain events.',
        iconName: 'FilePlus2'
      },
      {
        h: 'Secondary liquidity',
        d: 'Whitelist-only DEX/RFQ venues or controlled ATS/CEX listings; conduct market-making, periodic auction, or liquidity mining, operating within regulatory restraints.',
        iconName: 'Repeat'
      },
      {
        h: 'Lifecycle operations',
        d: 'Automate NAV preparations, coupon/dividend payments, rebates, and rebalancing, buybacks, and redemptions, control corporate activity, and investor reporting.',
        iconName: 'RefreshCcw'
      },
      {
        h: 'Compliance and reporting',
        d: 'Produce audit logs, tax reports and reports to the regulator; plan the attestations and continuing monitoring of the sanctions and transfers.',
        iconName: 'BarChart3'
      },
      {
        h: 'Scale and integrations',
        d: 'Add new pools /tenors, jurisdiction, aggregate with music -tee up, custodian and bank teams and analytics dashboards.',
        iconName: 'Layers'
      }
    ]
  },
  technologies: {
    title: 'TECHNOLOGY STACK',
    description: 'We partner with industry-leading technologies to deliver world-class RWA tokenization solutions. Our stack spans enterprise-grade security, cloud infrastructure, blockchain protocols, data feeds, and frontend frameworks.',
    items: [
      { name: 'Fireblocks', icon: 'SiDocker', color: '#F4CC6F', category: 'Security' },
      { name: 'HashiCorp Vault', icon: 'SiHashicorp', color: '#F4CC6F', category: 'Security' },
      { name: 'AWS', icon: 'SiAmazon', color: '#FF9900', category: 'Cloud' },
      { name: 'Chainlink', icon: 'SiChainlink', color: '#375BD2', category: 'Oracles' },
      { name: 'Pyth', icon: 'SiPython', color: '#F4CC6F', category: 'Oracles' },
      { name: 'Circle', icon: 'SiCircle', color: '#F4CC6F', category: 'Payments' },
      { name: 'Alchemy', icon: 'SiAlchemy', color: '#F4CC6F', category: 'Infrastructure' },
      { name: 'The Graph', icon: 'SiTelegraph', color: '#F4CC6F', category: 'Data' },
      { name: 'WalletConnect', icon: 'SiWalletconnect', color: '#F4CC6F', category: 'Web3' },
      { name: 'Solidity', icon: 'SiSolidity', color: '#FFFFFF', category: 'Blockchain' },
      { name: 'Foundry', icon: 'SiDocker', color: '#F4CC6F', category: 'Blockchain' },
      { name: 'Next.js', icon: 'SiNextdotjs', color: '#FFFFFF', category: 'Frontend' },
      { name: 'NestJS', icon: 'SiNestjs', color: '#E0234E', category: 'Backend' },
      { name: 'Postgres', icon: 'SiPostgresql', color: '#336791', category: 'Database' },
      { name: 'Terraform', icon: 'SiTerraform', color: '#623CE4', category: 'DevOps' },
      { name: 'Stripe', icon: 'SiStripe', color: '#635BFF', category: 'Payments' },
      { name: 'Etherscan', icon: 'SiEthers', color: '#F4CC6F', category: 'Explorer' },
      { name: 'Docker', icon: 'SiDocker', color: '#2496ED', category: 'DevOps' }
    ]
  },
  outcomes: {
    title: 'Outcomes That Matter',
    description: 'Launch faster with institution‑level security and liquidity you can measure. Automate the back office to cut overhead, expand your investor base with fractional access, and raise capital in public markets. We align token economics, fees, and disclosures to the asset\'s risk so performance, compliance, and user experience stay in sync.'
  },
  cta: {
    heading: 'Ready to tokenize responsibly?',
    description: 'Book a consult to map your asset and jurisdiction and go live in weeks, not quarters.',
    buttonText: 'Book a consult',
    buttonLink: '/contact'
  }
};

async function seedRWAPage() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI, {
      dbName: 'test'
    });
    console.log('Connected to MongoDB (test database)');

    // Check if data exists
    const existing = await RWAPage.findOne({ pageId: 'rwa-tokenization' });
    if (existing) {
      console.log('RWA page data already exists, updating...');
      await RWAPage.findByIdAndUpdate(existing._id, {
        ...rwaPageData,
        updatedAt: new Date()
      });
      console.log('✓ RWA page data updated in mainpages collection');
    } else {
      console.log('Creating new RWA page document...');
      const created = await RWAPage.create(rwaPageData);
      console.log('✓ RWA page data created in mainpages collection');
      console.log('Created document ID:', created._id);
    }

    const count = await RWAPage.countDocuments({ pageId: 'rwa-tokenization' });
    console.log(`Total RWA documents in mainpages collection: ${count}`);

    // Verify data was saved
    const saved = await RWAPage.findOne({ pageId: 'rwa-tokenization' });
    if (saved) {
      console.log('✓ Verification: Data found in database');
      console.log('Document has', Object.keys(saved.toObject()).length, 'fields');
    } else {
      console.log('✗ WARNING: Data not found after save!');
    }

    await mongoose.disconnect();
    console.log('✓ Database seeding complete!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedRWAPage();
