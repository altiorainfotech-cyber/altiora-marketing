import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = 'blog-admin-panel';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env');
}

const mongoUri: string = MONGODB_URI;

const securityAuditData = {
  pageId: 'security-audit',
  pageName: 'Security Audits Services',
  route: '/services/web3/security-audit',
  status: 'published',
  seo: {
    title: 'Security Audits Services - Altiora Infotech',
    description: 'Our audits go beyond bug-hunting — we safeguard your ecosystem, data, and reputation with precision and insight.'
  },
  sections: {
    hero: {
      backgroundImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Security_Audits-2_x7scka.png',
      badge: 'ALTIORA INFOTECH',
      badgeIcon: 'FaCode',
      heading: 'Security Audits',
      headingHighlight: 'Services',
      highlightColor: '#f4cc6f',
      subheading: 'Our audits go beyond bug-hunting — we safeguard your ecosystem, data, and reputation with precision and insight.',
      cta: {
        text: 'Get Started',
        link: '/contact',
        primary: true,
        icon: 'FaRocket'
      }
    },
    whatIs: {
      title: 'Ensuring Trust, Protecting Value',
      subtitle: 'Security is non-negotiable in the blockchain and Web3 world.',
      description: 'In the blockchain and Web3 world, security is non-negotiable. Our security audits probe your smart contracts, protocols, and architecture to identify flaws, patch vulnerabilities, and strengthen your system\'s defenses before adversaries exploit them.',
      additionalText: 'Altiora Infotech turns that promise into production. We architect and ship secure, scalable blockchain solutions aligned to business goals—designing token economies, writing and auditing smart contracts, integrating dApps with your stack, and managing the full lifecycle from discovery to post-launch support for measurable outcomes.',
      icon: 'FaShieldAlt'
    },
    whyMatter: {
      title: 'Why Choose Our Security Audits?',
      subtitle: 'Comprehensive security expertise that goes beyond surface-level checks.',
      advantages: [
        {
          title: 'Security Expertise',
          icon: 'FaShieldAlt',
          items: [
            'Deep domain expertise in blockchain, cryptography, and DeFi security',
            'Multi-layer audits: from architecture review to code deep dives, fuzzing, formal verification',
            'Real-world awareness: we stay current with attack vectors (reentrancy, front-running, MEV, cross-chain exploits)'
          ]
        },
        {
          title: 'Service Excellence',
          icon: 'FaUsers',
          items: [
            'Transparent reporting: clear findings, risk ratings, remediation guidance',
            'Ongoing support: post-audit fixes, monitoring, and upgrade checks',
            'Proven track record: successful audits across DeFi protocols, NFT platforms, and enterprise blockchain solutions'
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
      title: 'Our Security Audit Services',
      subtitle: 'Comprehensive security assessment services covering every aspect of blockchain security.',
      services: [
        {
          title: 'Smart Contract Audit',
          description: 'Comprehensive review of contract logic, gas optimizations, and potential vulnerabilities',
          image: '/images/web3/security audit/Smart Contract.svg'
        },
        {
          title: 'Protocol & Architecture Audit',
          description: 'Evaluate system design, security boundaries, trust assumptions',
          image: '/images/web3/security audit/Protocol.svg'
        },
        {
          title: 'Fuzz Testing & Formal Verification',
          description: 'Automated fuzzing, symbolic analysis and proofing',
          image: '/images/web3/security audit/Fuzz.svg'
        },
        {
          title: 'Penetration Testing & Red Teaming',
          description: 'Simulate real attacks on your stack (web, API, chain nodes)',
          image: '/images/web3/security audit/Penetration Testing.svg'
        },
        {
          title: 'Security Monitoring & On-chain Alerts',
          description: 'Real-time threat detection, auto-pause, anomaly alerts',
          image: '/images/web3/security audit/Security Monitoring.svg'
        },
        {
          title: 'Bug Bounty Program Setup',
          description: 'Manage external security researchers, triage workflows',
          image: '/images/web3/security audit/Bug Bounty.svg'
        },
        {
          title: 'Compliance & Regulatory Readiness',
          description: 'Help satisfy audit or regulator requirements',
          image: '/images/web3/security audit/Compliance.svg'
        },
        {
          title: 'Incident Response & Recovery',
          description: 'Emergency response protocols, breach containment, and recovery planning',
          image: '/images/web3/security audit/Incident Response.svg'
        }
      ]
    },
    process: {
      title: 'Our Security Audit Process',
      subtitle: 'A systematic approach to comprehensive security assessment and protection.',
      steps: [
        {
          step: 1,
          title: 'Scoping & Kickoff',
          description: 'Understand your system, threat model, goals, and audit depth.',
          icon: '🔍'
        },
        {
          step: 2,
          title: 'Architecture & Design Review',
          description: 'Analyze module interactions, trust zones, data flows, and external dependencies.',
          icon: '📐'
        },
        {
          step: 3,
          title: 'Code Review & Testing',
          description: 'Line-by-line inspection, unit & integration tests, fuzzing & symbolic tools.',
          icon: '⚡'
        },
        {
          step: 4,
          title: 'Vulnerability Analysis & Risk Assessment',
          description: 'Triage issues by severity, map to business impact, suggest fixes.',
          icon: '⚙️'
        },
        {
          step: 5,
          title: 'Remediation Support & Re-audit',
          description: 'Assist your devs in patching issues, then confirm fixes.',
          icon: '🛡️'
        },
        {
          step: 6,
          title: 'Post-Audit Monitoring & Follow-up',
          description: 'Recommend ongoing security measures, incident response plan, continuous checks.',
          icon: '🚀'
        }
      ]
    },
    whyWork: {
      title: 'Why Work With Altiora Infotech?',
      subtitle: 'Partner with security experts who prioritize your system\'s integrity and long-term success.',
      benefits: [
        { text: 'Security-first mindset — built into every stage of development', icon: 'FaShieldAlt' },
        { text: 'Transparent collaboration — we work with your devs, explain issues, not just point them out', icon: 'FaEye' },
        { text: 'Holistic approach — covering on-chain, off-chain, UI, API, infrastructure', icon: 'FaGlobe' },
        { text: 'Long-term partnership — not just a one-off audit, but ongoing vigilance', icon: 'FaHandshake' },
        { text: 'Reputation matters — your stakeholders and users will trust a system audited by a name they respect', icon: 'FaChartLine' },
        { text: 'Proven results — track record of preventing exploits and securing millions in digital assets', icon: 'FaTrophy' }
      ]
    },
    cta: {
      title: 'Secure Your Blockchain Infrastructure',
      description: 'Don\'t wait for vulnerabilities to be exploited. Let our security experts audit your system and provide comprehensive protection for your blockchain applications.',
      additionalText: 'Security is a means to real business outcomes—not a science project. At Altiora Infotech, we pair deep Web3 engineering with clear commercial thinking to deliver solutions that are secure, scalable, and aligned to your KPIs.',
      primaryButton: {
        text: 'Schedule Security Audit',
        link: 'https://calendly.com/altiorainfotech/30min',
        icon: 'FaRocket'
      },
      secondaryButton: {
        text: 'Send Your Brief',
        link: '/contact',
        icon: 'FaEye'
      },
      backgroundImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Security_Audits-2_cltryt.png',
      icon: 'FaShieldAlt'
    }
  },
  createdAt: new Date(),
  updatedAt: new Date()
};

async function seedSecurityAudit() {
  const client = new MongoClient(mongoUri);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(DB_NAME);
    const collection = db.collection('web3Services');

    // Delete existing security-audit data
    await collection.deleteMany({ pageId: 'security-audit' });

    // Insert new data
    const result = await collection.insertOne(securityAuditData);
    console.log('Security Audit data seeded successfully:', result.insertedId);

  } catch (error) {
    console.error('Error seeding security audit data:', error);
  } finally {
    await client.close();
  }
}

seedSecurityAudit();