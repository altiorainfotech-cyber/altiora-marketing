import mongoose from 'mongoose';
import Web3Service from '../src/lib/models/Web3Service';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const zkPrivacyPageData = {
  pageId: 'zk-privacy',
  pageName: 'ZK & Privacy Solutions',
  route: '/services/web3/zk-privacy',
  status: 'published',
  seo: {
    title: 'ZK & Privacy Solutions | Altiora Infotech',
    description: 'Advanced zero-knowledge proofs and privacy-preserving technologies for Web3 applications. Expert ZK & Privacy solutions from Altiora Infotech.',
    ogImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/zk_Privacy_Integrations-1_dppxan.jpg'
  },
  sections: {
    hero: {
      backgroundImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/zk_Privacy_Integrations-1_dppxan.jpg',
      badge: 'ALTIORA INFOTECH',
      badgeIcon: 'FaCode',
      heading: 'ZK & Privacy Solutions',
      headingHighlight: 'Integrations',
      highlightColor: '#f4cc6f',
      subheading: 'Advanced zero-knowledge proofs and privacy-preserving technologies for Web3 applications.',
      cta: {
        text: 'Get Started',
        link: '/contact',
        primary: true,
        icon: 'FaRocket'
      }
    },
    whatIs: {
      title: 'The Foundation of Trust',
      subtitle: 'Zero-knowledge proofs are the privacy layer of Web3.',
      icon: 'FaEyeSlash',
      paragraphs: [
        "Zero-knowledge proofs enable unprecedented privacy in blockchain applications. Users can prove statements about their data without revealing the underlying information, enabling confidential transactions, private voting, and anonymous credentials while maintaining full verifiability.",
        "Altiora Infotech builds privacy-preserving solutions that combine cutting-edge cryptography with practical implementation. We architect and deploy ZK systems that support multiple blockchains, integrate seamlessly with dApps, and provide enterprise-grade privacy guarantees—designing user experiences that make privacy accessible while ensuring mathematical security."
      ]
    },
    whyMatter: {
      title: 'Why ZK Matters',
      subtitle: 'Essential privacy features that transform blockchain applications.',
      cards: [
        {
          title: 'Cryptographic Advantages',
          icon: 'FaKey',
          iconGradient: ['#f4cc6f', '#e6b85c'],
          items: [
            { text: 'Mathematical privacy guarantees' },
            { text: 'Verifiable computation without data exposure' },
            { text: 'Scalable zero-knowledge proofs' },
            { text: 'Multi-party computation protocols' }
          ]
        },
        {
          title: 'Privacy Benefits',
          icon: 'FaShieldAlt',
          iconGradient: ['#06b6d4', '#3b82f6'],
          items: [
            { text: 'Confidential transactions and transfers' },
            { text: 'Anonymous credentials and claims' },
            { text: 'Privacy-preserving DeFi protocols' },
            { text: 'Decentralized identity with selective disclosure' }
          ]
        }
      ]
    },
    whyChoose: {
      title: 'Why Choose Altiora Infotech?',
      subtitle: 'We design privacy solutions that align with your business goals.',
      featureCards: [
        {
          title: 'ZK Expertise',
          description: 'Specialized in zero-knowledge',
          icon: 'FaKey'
        },
        {
          title: 'Mathematical Security',
          description: 'Cryptographic guarantees',
          icon: 'FaShieldAlt'
        },
        {
          title: 'Scalable Privacy',
          description: 'Performance-optimized solutions',
          icon: 'FaRocket'
        }
      ],
      commitmentCard: {
        icon: 'FaHandshake',
        title: 'Our Commitment to Excellence',
        description: "We don't just implement ZK proofs at Altiora Infotech; we design privacy solutions. We focus on making sure that zero-knowledge technology fits with your real business goals, doesn't compromise on security, and can be maintained for a long time."
      }
    },
    serviceOfferings: {
      title: 'Our ZK & Privacy Service Offerings',
      subtitle: 'Comprehensive privacy solutions for every need.',
      services: [
        { name: 'ZK Proof Systems', icon: '/images/web3/blockchain/Smart Contract.svg' },
        { name: 'Privacy Protocols', icon: '/images/web3/blockchain/Token.svg' },
        { name: 'Homomorphic Encryption', icon: '/images/web3/blockchain/DeFi.svg' },
        { name: 'MPC Implementation', icon: '/images/web3/blockchain/NFT.svg' },
        { name: 'Privacy-Preserving DeFi', icon: '/images/web3/blockchain/DAO.svg' },
        { name: 'DID & Credentials', icon: '/images/web3/blockchain/End-to-End.svg' },
        { name: 'Compliance Solutions', icon: '/images/web3/blockchain/Security.svg' },
        { name: 'Audit & Verification', icon: '/images/web3/blockchain/Blockchain.svg' },
        { name: 'Integration Services', icon: '/images/web3/blockchain/dApp.svg' }
      ]
    },
    process: {
      title: 'Our ZK Implementation Process',
      subtitle: 'A structured, transparent, and iterative process to transform your idea into a live privacy solution.',
      steps: [
        {
          step: 1,
          title: 'Privacy Assessment',
          description: 'Stakeholder workshops, requirement gathering, privacy analysis, and cryptographic evaluation.',
          icon: '🔍'
        },
        {
          step: 2,
          title: 'Protocol Design',
          description: 'Design ZK circuits, privacy protocols, and cryptographic schemes.',
          icon: '📐'
        },
        {
          step: 3,
          title: 'Implementation',
          description: 'Build ZK proofs, privacy components, and integration layers.',
          icon: '⚙️'
        },
        {
          step: 4,
          title: 'Testing & Verification',
          description: 'Privacy testing, correctness proofs, security audits, and performance validation.',
          icon: '🛡️'
        },
        {
          step: 5,
          title: 'Deployment & Integration',
          description: 'Deploy privacy solutions, integrate with applications, and ensure compatibility.',
          icon: '🚀'
        },
        {
          step: 6,
          title: 'Monitoring & Optimization',
          description: 'Track privacy guarantees, optimize performance, and maintain security updates.',
          icon: '📊'
        }
      ],
      gradientColors: ['#f4cc6f', '#6EA8FE', '#00D4FF']
    },
    whyWork: {
      title: 'Why Work With Altiora Infotech?',
      subtitle: 'Partner with privacy experts who deliver results.',
      benefits: [
        {
          title: 'Expertise',
          subtitle: 'Cryptographic',
          description: 'Cryptographic Expertise – Deep knowledge in ZK proofs, privacy protocols, cryptography, and security.',
          icon: 'FaNetworkWired',
          gradient: ['#3b82f6', '#06b6d4']
        },
        {
          title: 'Custom',
          subtitle: 'Solutions',
          description: 'Custom Privacy Solutions – Tailored privacy solutions, not templates; each project fits your specific needs.',
          icon: 'FaTools',
          gradient: ['#a855f7', '#ec4899']
        },
        {
          title: 'End-to-End',
          subtitle: 'Service',
          description: 'End-to-End Implementation – Complete service from design to deployment and ongoing support.',
          icon: 'FaCode',
          gradient: ['#22c55e', '#10b981']
        },
        {
          title: 'Security',
          subtitle: 'First',
          description: 'Mathematical Security – Rigorous audits and formal verification embedded in every privacy layer.',
          icon: 'FaShieldAlt',
          gradient: ['#ef4444', '#f97316']
        },
        {
          title: 'Scalable',
          subtitle: 'Architecture',
          description: 'Scalable Architecture – Modular design for evolving privacy protocols and ecosystem integration.',
          icon: 'FaRocket',
          gradient: ['#eab308', '#f97316']
        },
        {
          title: 'Client-First',
          subtitle: 'Philosophy',
          description: 'Client-Centric Approach – Your privacy goals are our success; expect partnership and guidance.',
          icon: 'FaHandshake',
          gradient: ['#14b8a6', '#06b6d4']
        }
      ]
    },
    cta: {
      backgroundImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/zk_Privacy_Integrations-2_jifoqz.jpg',
      icon: 'FaRocket',
      heading: 'Ready to Build Your Privacy Solution?',
      paragraphs: [
        'Zero-knowledge proofs are the future of privacy in Web3—not a side project. At Altiora Infotech, we pair deep cryptographic engineering with clear privacy thinking to deliver solutions that are mathematically secure, scalable, and aligned to your privacy KPIs.',
        "Ready to turn a concept into a roadmap? Share your privacy goals and constraints, and we'll come back with a crisp blueprint: cryptographic options, implementation timeline, security and compliance approach, and an investment estimate you can act on."
      ],
      buttons: [
        {
          text: 'Book Discovery Call',
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

async function seedZkPrivacyPage() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;
    if (!MONGODB_URI) throw new Error('MONGODB_URI is not defined in environment variables');

    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const existingPage = await Web3Service.findOne({ pageId: 'zk-privacy' });
    if (existingPage) {
      console.log('ZK Privacy page already exists. Updating...');
      await Web3Service.findOneAndUpdate({ pageId: 'zk-privacy' }, zkPrivacyPageData, { new: true, upsert: true });
      console.log('ZK Privacy page updated successfully!');
    } else {
      console.log('Creating new ZK Privacy page...');
      await Web3Service.create(zkPrivacyPageData);
      console.log('ZK Privacy page created successfully!');
    }

    console.log('Seed completed successfully!');
  } catch (error) {
    console.error('Error seeding ZK Privacy page:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  }
}

seedZkPrivacyPage();