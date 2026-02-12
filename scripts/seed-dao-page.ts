import mongoose from 'mongoose';
import Web3Service from '../src/lib/models/Web3Service';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const daoPageData = {
  pageId: 'dao',
  pageName: 'DAO Development',
  route: '/services/web3/dao',
  status: 'published',
  seo: {
    title: 'DAO Development dao development services | Altiora Infotech',
    description: 'Streamline delivery through dao development at Altiora Infotech. We specialize in dao development services and governance token development to scale securely',
    ogImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/DAO_Frameworks-1_od5ufe.jpg'
  },
  sections: {
    hero: {
      backgroundImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/DAO_Frameworks-1_od5ufe.jpg',
      badge: 'ALTIORA INFOTECH',
      badgeIcon: 'FaCode',
      heading: 'DAO Framework',
      headingHighlight: 'Development',
      highlightColor: '#f4cc6f',
      subheading: 'Design community-owned systems with clear rules, secure execution, and real accountability.',
      cta: {
        text: 'Get Started',
        link: '/contact',
        primary: true,
        icon: 'FaRocket'
      }
    },
    whatIs: {
      title: 'The Future of Governance',
      subtitle: "DAOs are the internet's governance layer.",
      icon: 'FaGavel',
      paragraphs: [
        "Using smart contracts, token-based voting, and transparent treasury management, DAOs create decentralized organizations where communities can make collective decisions, allocate resources, and execute proposals without traditional hierarchies—enabling transparent collaboration, democratic governance, automated execution, and scalable systems for community ownership, funding, and operations.",
        "Altiora Infotech turns that vision into reality. We architect and deploy secure, scalable DAO frameworks aligned to community goals—designing governance models, implementing voting systems, building treasury management, and managing the full lifecycle from conception to post-launch evolution for sustainable community governance."
      ]
    },
    whyMatter: {
      title: 'Why DAOs Matter',
      subtitle: 'Unique benefits that transform organizational operations.',
      cards: [
        {
          title: 'Governance Advantages',
          icon: 'FaShieldAlt',
          iconGradient: ['#f4cc6f', '#e6b85c'],
          items: [
            { text: 'Transparent voting mechanisms with verifiable results' },
            { text: 'Secure treasury management with multi-signature controls' },
            { text: 'Clear proposal processes with defined timelines' },
            { text: 'Immutable execution of approved decisions' }
          ]
        },
        {
          title: 'Operational Benefits',
          icon: 'FaChartLine',
          iconGradient: ['#06b6d4', '#3b82f6'],
          items: [
            { text: 'Enhanced community engagement and participation' },
            { text: 'Elimination of traditional hierarchical bottlenecks' },
            { text: 'Automated execution through smart contracts' },
            { text: 'Support for new organizational models (token governance, contributor DAOs)' }
          ]
        }
      ]
    },
    whyChoose: {
      title: 'Why Choose Altiora Infotech?',
      subtitle: 'We design governance solutions that align with your community goals.',
      featureCards: [
        {
          title: 'Governance Design',
          description: 'Community-aligned frameworks',
          icon: 'FaGavel'
        },
        {
          title: 'Security Focus',
          description: 'Audited architecture',
          icon: 'FaShieldAlt'
        },
        {
          title: 'Scalable Solutions',
          description: 'Future-ready governance',
          icon: 'FaRocket'
        }
      ],
      commitmentCard: {
        icon: 'FaHandshake',
        title: 'Our Commitment to Excellence',
        description: "We don't just build DAOs at Altiora Infotech; we architect governance ecosystems. We focus on ensuring that decentralized governance aligns with your community's values, scales sustainably, and can evolve with your organization's growth."
      }
    },
    serviceOfferings: {
      title: 'Our DAO Service Offerings',
      subtitle: 'Comprehensive DAO development services for every governance need.',
      services: [
        { name: 'Governance Architecture', icon: 'FaNetworkWired' },
        { name: 'Token & Membership', icon: 'FaCoins' },
        { name: 'Voting Systems', icon: 'FaVoteYea' },
        { name: 'Treasury Management', icon: 'FaWallet' },
        { name: 'Execution Modules', icon: 'FaFileContract' },
        { name: 'Delegation Systems', icon: 'FaUsers' },
        { name: 'Security Audits', icon: 'FaShieldAlt' },
        { name: 'Community Operations', icon: 'FaTools' },
        { name: 'Compliance Framework', icon: 'FaLock' }
      ]
    },
    process: {
      title: 'Our DAO Development Process',
      subtitle: 'A structured, transparent, and iterative process to transform your governance vision into a live DAO framework.',
      steps: [
        {
          step: 1,
          title: 'Discovery & Alignment',
          description: 'Community workshops, governance requirements, use-case analysis, framework planning, technology & risk evaluation.',
          icon: '🔍'
        },
        {
          step: 2,
          title: 'Governance Design',
          description: 'Voting mechanisms, proposal workflows, treasury structure, role definitions, participation incentives.',
          icon: '⚖️'
        },
        {
          step: 3,
          title: 'Prototyping / PoC',
          description: 'Build governance MVP, internal testing, demonstrate mechanics, validate community assumptions.',
          icon: '⚡'
        },
        {
          step: 4,
          title: 'Development & Integration',
          description: 'Smart contract development, voting systems, treasury modules, governance portal, analytics integration.',
          icon: '⚙️'
        },
        {
          step: 5,
          title: 'Security & Testing',
          description: 'Governance audits, attack simulations, stress testing, economic modeling, security optimization.',
          icon: '🛡️'
        },
        {
          step: 6,
          title: 'Deployment & Launch',
          description: 'Testnet deployment, community onboarding, mainnet launch, initial governance setup.',
          icon: '🚀'
        },
        {
          step: 7,
          title: 'Community Enablement',
          description: 'Delegate training, participation tracking, governance analytics, community support tools.',
          icon: '👥'
        },
        {
          step: 8,
          title: 'Evolution & Growth',
          description: 'Governance metrics, community feedback, parameter adjustments, framework enhancements.',
          icon: '📈'
        }
      ],
      gradientColors: ['#f4cc6f', '#6EA8FE', '#00D4FF']
    },
    whyWork: {
      title: 'Why Work With Altiora Infotech?',
      subtitle: 'Partner with DAO experts who deliver results.',
      benefits: [
        {
          title: 'Expertise',
          subtitle: 'DAO & Governance',
          description: 'Governance Expertise – Deep knowledge in DAO frameworks, tokenomics, voting mechanisms, and community architecture.',
          icon: 'FaGavel',
          gradient: ['#3b82f6', '#06b6d4']
        },
        {
          title: 'Custom',
          subtitle: 'Solutions',
          description: 'Custom Solutions – Tailored governance models, not templates; each DAO fits your specific community needs.',
          icon: 'FaTools',
          gradient: ['#a855f7', '#ec4899']
        },
        {
          title: 'End-to-End',
          subtitle: 'Service',
          description: 'End-to-End Capability – Complete service from governance design to community enablement.',
          icon: 'FaCode',
          gradient: ['#22c55e', '#10b981']
        },
        {
          title: 'Security',
          subtitle: 'First',
          description: 'Security-First Approach – Rigorous audits and security embedded in every governance layer.',
          icon: 'FaShieldAlt',
          gradient: ['#ef4444', '#f97316']
        },
        {
          title: 'Scalable',
          subtitle: 'Architecture',
          description: 'Scalable & Future-ready – Modular design for evolving communities and governance upgrades.',
          icon: 'FaRocket',
          gradient: ['#eab308', '#f97316']
        },
        {
          title: 'Community-First',
          subtitle: 'Philosophy',
          description: "Community-Centric Philosophy – Your community's success is our success; expect partnership and guidance.",
          icon: 'FaHandshake',
          gradient: ['#14b8a6', '#06b6d4']
        }
      ]
    },
    cta: {
      backgroundImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/DAO_Frameworks-2_otv3ly.jpg',
      icon: 'FaRocket',
      heading: 'Ready to Build Your DAO Framework?',
      paragraphs: [
        'Governance is a means to real community outcomes—not a technical experiment. At Altiora Infotech, we pair deep DAO engineering with clear community thinking to deliver frameworks that are secure, scalable, and aligned to your community KPIs.',
        "Ready to turn a vision into a governance roadmap? Share your community goals and constraints, and we'll come back with a crisp blueprint: governance options, timeline and milestones, security and compliance approach, and an investment estimate you can act on."
      ],
      buttons: [
        {
          text: 'Book DAO Consultation',
          link: 'https://calendly.com/altiorainfotech/30min',
          primary: true,
          icon: 'FaRocket',
          external: true
        },
        {
          text: 'Send Your Brief',
          link: '/contact',
          primary: false,
          icon: 'FaEye',
          external: false
        }
      ]
    }
  }
};

async function seedDAOPage() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Check if DAO page already exists
    const existingPage = await Web3Service.findOne({ pageId: 'dao' });

    if (existingPage) {
      console.log('DAO page already exists. Updating...');
      await Web3Service.findOneAndUpdate(
        { pageId: 'dao' },
        daoPageData,
        { new: true, upsert: true }
      );
      console.log('DAO page updated successfully!');
    } else {
      console.log('Creating new DAO page...');
      await Web3Service.create(daoPageData);
      console.log('DAO page created successfully!');
    }

    console.log('Seed completed successfully!');
  } catch (error) {
    console.error('Error seeding DAO page:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  }
}

// Run the seed function
seedDAOPage();
