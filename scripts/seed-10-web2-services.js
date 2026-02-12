const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

async function seedAllWeb2Services() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✓ Connected to MongoDB');

    const db = mongoose.connection.db;
    const collection = db.collection('web2services');

    // Delete only the 10 standard services (NOT the custom ones)
    const servicesToSeed = [
      'api-development-integration',
      'cloud-migration-managed-hosting',
      'custom-web-application-development',
      'devops-consulting',
      'e-commerce-development',
      'headless-cms-content-ops',
      'mobile-application-development',
      'qa-automation',
      'saas-application-development',
      'ui-ux-design'
    ];

    await collection.deleteMany({ 
      serviceType: { $in: servicesToSeed }
    });
    console.log('✓ Cleared existing 10 standard web2 services');

    // Common Why Work With Us data
    const commonWhyWorkWithUs = [
      {
        title: 'Domain Expertise',
        description: 'Deep knowledge in modern technologies, architecture, and best practices.',
        icon: 'FaNetworkWired'
      },
      {
        title: 'Custom Solutions',
        description: 'Tailored solutions, not templates; each project fits your specific business logic.',
        icon: 'FaTools'
      },
      {
        title: 'End-to-End Capability',
        description: 'Complete service from ideation to maintenance.',
        icon: 'FaCode'
      },
      {
        title: 'Security-First Approach',
        description: 'Rigorous audits and security embedded in every layer.',
        icon: 'FaShieldAlt'
      },
      {
        title: 'Scalable & Future-ready',
        description: 'Modular design for evolving protocols and upgrades.',
        icon: 'FaRocket'
      },
      {
        title: 'Client-Centric Philosophy',
        description: 'Your success is our success; expect partnership and guidance.',
        icon: 'FaHandshake'
      }
    ];
