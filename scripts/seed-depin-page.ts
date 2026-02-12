import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

// Define schemas inline for seeding
const ButtonSchema = new mongoose.Schema({
  text: String,
  link: String,
  variant: String,
  target: String
});

const HeroSectionSchema = new mongoose.Schema({
  badge: String,
  title: String,
  highlightedTitle: String,
  description: String,
  backgroundImage: String,
  tags: [String],
  buttons: [ButtonSchema]
});

const ValueSnapshotSchema = new mongoose.Schema({
  icon: String,
  title: String,
  description: String,
  delay: Number
});

const DeliverCardItemSchema = new mongoose.Schema({
  text: String
});

const DeliverCardSchema = new mongoose.Schema({
  title: String,
  icon: String,
  items: [DeliverCardItemSchema]
});

const TechItemSchema = new mongoose.Schema({
  name: String,
  icon: String,
  color: String
});

const TechTabSchema = new mongoose.Schema({
  key: String,
  label: String,
  items: [TechItemSchema]
});

const TechStackSectionSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  description: String,
  tabs: [TechTabSchema]
});

const CTASectionSchema = new mongoose.Schema({
  title: String,
  description: String,
  buttons: [ButtonSchema]
});

const MainPageSchema = new mongoose.Schema({
  pageType: String,
  slug: String,
  isActive: Boolean,
  heroSection: HeroSectionSchema,
  valueSnapshots: [ValueSnapshotSchema],
  deliverSection: {
    title: String,
    cards: [DeliverCardSchema]
  },
  techStackSection: TechStackSectionSchema,
  ctaSection: CTASectionSchema,
  seoMetadata: {
    title: String,
    description: String,
    keywords: [String],
    ogImage: String
  }
}, { timestamps: true });

const MainPage = mongoose.models.MainPage || mongoose.model('MainPage', MainPageSchema);

const depinPageData = {
  pageType: 'depin',
  slug: 'depin',
  isActive: true,
  heroSection: {
    badge: 'ALTIORA INFOTECH',
    title: 'DePIN Development & Launch',
    highlightedTitle: 'for Real-World Networks',
    description: 'Align on-chain incentives with real-world demand. From blueprint → pilot → paid adoption, we ship token design, contracts, nodes, and ops that scale with confidence.',
    backgroundImage: '/images/depin/depin.jpeg',
    tags: ['Token Design', 'Nodes & OTA', 'Usage Metering', 'Fraud Controls'],
    buttons: [
      {
        text: 'Book a 30-min consultation',
        link: 'https://calendly.com/altiorainfotech/30min',
        variant: 'primary',
        target: '_blank'
      },
      {
        text: 'Share requirements',
        link: '/contact',
        variant: 'secondary',
        target: '_self'
      }
    ]
  },
  valueSnapshots: [
    {
      icon: '🧭',
      title: 'Blueprint → Pilot',
      description: 'Roles, rewards, SLAs, and fraud controls converted into a working testbed.',
      delay: 0
    },
    {
      icon: '⚡',
      title: 'Usage-Tied Rewards',
      description: 'Uptime, coverage, and throughput verified on-chain for honest payouts.',
      delay: 90
    },
    {
      icon: '🚀',
      title: 'Operate & Scale',
      description: 'Node apps, operator console, metering, billing, and governance that grows with demand.',
      delay: 180
    }
  ],
  deliverSection: {
    title: 'What We Deliver',
    cards: [
      {
        title: 'Network Blueprint',
        icon: 'blueprint',
        items: [
          { text: 'Roles & rewards' },
          { text: 'Service metrics (SLA)' },
          { text: 'Anti-gaming heuristics' }
        ]
      },
      {
        title: 'Token & Contracts',
        icon: 'token',
        items: [
          { text: 'Emissions & staking' },
          { text: 'Slashing & fees' },
          { text: 'Audited registries' }
        ]
      },
      {
        title: 'Nodes & Attestation',
        icon: 'nodes',
        items: [
          { text: 'Node software & OTA' },
          { text: 'Workload proofs' },
          { text: 'HW trust (TPM/SGX)' }
        ]
      },
      {
        title: 'Operator & Customer Apps',
        icon: 'apps',
        items: [
          { text: 'Console' },
          { text: 'Portal' },
          { text: 'Payments & billing' }
        ]
      },
      {
        title: 'Observability & Data',
        icon: 'observability',
        items: [
          { text: 'Metering pipelines' },
          { text: 'Prometheus/Grafana' },
          { text: 'OpenTelemetry' }
        ]
      },
      {
        title: 'Governance & GTM',
        icon: 'governance',
        items: [
          { text: 'Docs & policy' },
          { text: 'Treasury flows' },
          { text: 'Rollout plan' }
        ]
      }
    ]
  },
  techStackSection: {
    title: 'TECHNOLOGY STACK',
    subtitle: 'Cutting-edge technologies',
    description: 'We use cutting-edge technologies, honing our expertise every day.',
    tabs: [
      {
        key: 'chains',
        label: 'Chains & Frameworks',
        items: [
          { name: 'Ethereum', icon: 'ethereum', color: '#627EEA' },
          { name: 'Polygon', icon: 'polygon', color: '#8247E5' },
          { name: 'Solana', icon: 'solana', color: '#00FFA3' },
          { name: 'Cosmos SDK', icon: 'cosmos sdk', color: '#15f700ff' },
          { name: 'Substrate', icon: 'substrate', color: '#E6007A' },
          { name: 'OpenZeppelin', icon: 'openzeppelin', color: '#4E5EE4' },
          { name: 'Anchor', icon: 'anchor', color: '#ff0000ff' },
          { name: 'CosmWasm', icon: 'cosmwasm', color: '#001effff' },
          { name: 'Hardhat', icon: 'hardhat', color: '#F7C52A' },
          { name: 'Foundry', icon: 'foundry', color: '#ffffffff' }
        ]
      },
      {
        key: 'data',
        label: 'Data & Oracles',
        items: [
          { name: 'Chainlink', icon: 'chainlink', color: '#375BD2' },
          { name: 'Pyth', icon: 'pyth', color: '#FFD700' },
          { name: 'Chronicle', icon: 'chronicle', color: '#001effff' },
          { name: 'Kafka', icon: 'kafka', color: '#dc073cff' },
          { name: 'Redpanda', icon: 'redpanda', color: '#FF3A1E' },
          { name: 'The Graph', icon: 'the graph', color: '#6746E3' },
          { name: 'Goldsky', icon: 'goldsky', color: '#FFD700' },
          { name: 'Subgraphs', icon: 'subgraphs', color: '#6746E3' },
          { name: 'TimescaleDB', icon: 'timescaledb', color: '#FF6B6B' },
          { name: 'InfluxDB', icon: 'influxdb', color: '#22ADF6' },
          { name: 'Postgres', icon: 'postgres', color: '#336791' },
          { name: 'BigQuery', icon: 'bigquery', color: '#4285F4' }
        ]
      },
      {
        key: 'edge',
        label: 'Edge, Nodes & Transport',
        items: [
          { name: 'libp2p', icon: 'libp2p', color: '#F5A623' },
          { name: 'MQTT', icon: 'mqtt', color: '#660198' },
          { name: 'gRPC', icon: 'grpc', color: '#00C2D7' },
          { name: 'WebRTC', icon: 'webrtc', color: '#00f178ff' },
          { name: 'Intel SGX', icon: 'intel sgx', color: '#0071C5' },
          { name: 'TPM', icon: 'tpm', color: '#009688' },
          { name: 'WebAuthn', icon: 'webauthn', color: '#0071C5' },
          { name: 'Balena', icon: 'balena', color: '#0080ffff' },
          { name: 'Mender', icon: 'mender', color: '#F05A28' },
          { name: 'Yocto', icon: 'yocto', color: '#F16522' },
          { name: 'NVIDIA Jetson', icon: 'nvidia jetson', color: '#76B900' },
          { name: 'Raspberry Pi', icon: 'raspberry pi', color: '#C51A4A' }
        ]
      },
      {
        key: 'infra',
        label: 'Infra & Observability',
        items: [
          { name: 'Docker', icon: 'docker', color: '#2496ED' },
          { name: 'Kubernetes', icon: 'kubernetes', color: '#326CE5' },
          { name: 'Terraform', icon: 'terraform', color: '#623CE4' },
          { name: 'GitHub Actions', icon: 'github actions', color: '#2088FF' },
          { name: 'Prometheus', icon: 'prometheus', color: '#E6522C' },
          { name: 'Grafana', icon: 'grafana', color: '#F46800' },
          { name: 'Loki', icon: 'loki', color: '#ff8c00ff' },
          { name: 'OpenTelemetry', icon: 'opentelemetry', color: '#ffffffff' }
        ]
      },
      {
        key: 'storage',
        label: 'Storage & Compute',
        items: [
          { name: 'IPFS', icon: 'ipfs', color: '#65C2CB' },
          { name: 'Filecoin', icon: 'filecoin', color: '#0090FF' },
          { name: 'Arweave', icon: 'arweave', color: '#0040ffff' },
          { name: 'Akash', icon: 'akash', color: '#E40000' }
        ]
      },
      {
        key: 'apps',
        label: 'Apps, Wallets & Compliance',
        items: [
          { name: 'Next', icon: 'next', color: '#000000' },
          { name: 'React', icon: 'react', color: '#61DAFB' },
          { name: 'TypeScript', icon: 'typescript', color: '#3178C6' },
          { name: 'Rust', icon: 'rust', color: '#DEA584' },
          { name: 'Go', icon: 'go', color: '#00ADD8' },
          { name: 'Solidity', icon: 'solidity', color: '#ffbb00ff' },
          { name: 'Fireblocks', icon: 'fireblocks', color: '#FF6B00' },
          { name: 'Ledger Enterprise', icon: 'ledger enterprise', color: '#ff00b7ff' },
          { name: 'WalletConnect', icon: 'walletconnect', color: '#3B99FC' },
          { name: 'Sumsub', icon: 'sumsub', color: '#ffffffff' },
          { name: 'TRM Labs', icon: 'trm labs', color: '#a2adffff' },
          { name: 'Chainalysis', icon: 'chainalysis', color: '#FF6B00' },
          { name: 'Stripe', icon: 'stripe', color: '#635BFF' },
          { name: 'Fiat on/off-ramps', icon: 'fiat on/off-ramps', color: '#F4CC6F' }
        ]
      }
    ]
  },
  ctaSection: {
    title: 'Ready to turn demand into a network?',
    description: "Tell us your target service, markets, and go-live window. We'll reply with a brief plan—architecture, milestones, and investment requirements—so you can run a production-ready pilot and land your first paying customers.",
    buttons: [
      {
        text: 'Book a 30-min consultation',
        link: 'https://calendly.com/altiorainfotech/30min',
        variant: 'primary',
        target: '_blank'
      },
      {
        text: 'Share requirements',
        link: '/contact',
        variant: 'secondary',
        target: '_self'
      }
    ]
  },
  seoMetadata: {
    title: 'DePIN Development & Launch | Altiora Infotech',
    description: 'Build decentralized physical infrastructure networks with token design, smart contracts, node software, and operational tools that scale with real-world demand.',
    keywords: [
      'DePIN development',
      'decentralized infrastructure',
      'token design',
      'node software',
      'blockchain infrastructure',
      'Web3 infrastructure',
      'IoT blockchain',
      'decentralized networks'
    ],
    ogImage: '/images/depin/depin.jpeg'
  }
};

async function seedDePINPage() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing DePIN page
    await MainPage.deleteMany({ pageType: 'depin' });
    console.log('Cleared existing DePIN page data');

    // Insert new data
    const page = await MainPage.create(depinPageData);
    console.log('✅ DePIN page seeded successfully!');
    console.log('Page ID:', page._id);
    console.log('Slug:', page.slug);

  } catch (error) {
    console.error('Error seeding DePIN page:', error);
    throw error;
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed');
  }
}

seedDePINPage();
