const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const schema = new mongoose.Schema({}, { strict: false, timestamps: true });
const Web2Service = mongoose.model('Web2Service', schema, 'web2services');

const commonWhy = [
  { title: 'Domain Expertise', description: 'Deep knowledge in modern technologies, architecture, and best practices.', icon: 'FaNetworkWired' },
  { title: 'Custom Solutions', description: 'Tailored solutions, not templates; each project fits your specific business logic.', icon: 'FaTools' },
  { title: 'End-to-End Capability', description: 'Complete service from ideation to maintenance.', icon: 'FaCode' },
  { title: 'Security-First Approach', description: 'Rigorous audits and security embedded in every layer.', icon: 'FaShieldAlt' },
  { title: 'Scalable & Future-ready', description: 'Modular design for evolving protocols and upgrades.', icon: 'FaRocket' },
  { title: 'Client-Centric Philosophy', description: 'Your success is our success; expect partnership and guidance.', icon: 'FaHandshake' }
];

const final4Services = [
  {
    serviceType: 'mobile-application-development',
    heroSection: {
      title: 'Mobile Application Development Services',
      subtitle: 'ALTIORA INFOTECH',
      description: 'Create engaging mobile experiences for iOS and Android platforms.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1761630213/web2/mobile-app-hero.jpg',
      ctaText: 'Get Started',
      ctaLink: '/contact'
    },
    whyChoosePoints: [
      { text: 'Native and cross-platform development expertise' },
      { text: 'User-centric design for intuitive mobile experiences' },
      { text: 'Performance optimization for smooth app operation' },
      { text: 'Secure authentication and data protection' },
      { text: 'App Store and Play Store submission support' },
      { text: 'Ongoing maintenance and feature updates' }
    ],
    services: [
      { title: 'iOS Development', description: 'Native iOS apps with Swift, SwiftUI, and Apple ecosystem integration.', icon: 'Smartphone', link: '/contact' },
      { title: 'Android Development', description: 'Native Android apps with Kotlin, Jetpack Compose, and Material Design.', icon: 'Tablet', link: '/contact' },
      { title: 'Cross-Platform Apps', description: 'React Native and Flutter apps for iOS and Android from single codebase.', icon: 'Monitor', link: '/contact' },
      { title: 'UI/UX Design', description: 'Mobile-first design, prototyping, and user testing for optimal experience.', icon: 'Palette', link: '/contact' },
      { title: 'Backend Integration', description: 'API integration, real-time sync, and offline functionality.', icon: 'Server', link: '/contact' },
      { title: 'Push Notifications', description: 'Engagement campaigns, transactional alerts, and user re-engagement.', icon: 'Bell', link: '/contact' },
      { title: 'App Analytics', description: 'User behavior tracking, crash reporting, and performance monitoring.', icon: 'BarChart3', link: '/contact' },
      { title: 'App Store Optimization', description: 'Listing optimization, submission process, and review management.', icon: 'Star', link: '/contact' },
      { title: 'Maintenance & Support', description: 'Bug fixes, OS updates, feature enhancements, and technical support.', icon: 'Settings', link: '/contact' }
    ],
    mobileServices: [
      { title: 'iOS Development', description: 'Native iOS apps with Swift.', icon: 'Smartphone', link: '/contact' },
      { title: 'Android Development', description: 'Native Android with Kotlin.', icon: 'Tablet', link: '/contact' },
      { title: 'Cross-Platform', description: 'React Native and Flutter.', icon: 'Monitor', link: '/contact' },
      { title: 'UI/UX Design', description: 'Mobile-first design.', icon: 'Palette', link: '/contact' },
      { title: 'Backend Integration', description: 'API and sync.', icon: 'Server', link: '/contact' },
      { title: 'Push Notifications', description: 'User engagement.', icon: 'Bell', link: '/contact' },
      { title: 'Analytics', description: 'Behavior tracking.', icon: 'BarChart3', link: '/contact' },
      { title: 'App Store', description: 'Optimization and submission.', icon: 'Star', link: '/contact' }
    ],
    dnaAnimation: {
      title: 'Our Mobile App Development Process',
      description: 'Six phases that bring your mobile app vision to life. Our methodology ensures quality, performance, and user satisfaction.',
      data: [
        { title: 'Discovery', text: 'Requirements, user research, platform selection, and feature prioritization.' },
        { title: 'Design', text: 'Wireframes, prototypes, UI design, and user testing.' },
        { title: 'Development', text: 'Sprint-based development, API integration, and feature implementation.' },
        { title: 'Testing', text: 'QA testing, device testing, performance optimization, and bug fixes.' },
        { title: 'Launch', text: 'App store submission, release management, and launch support.' },
        { title: 'Growth', text: 'Analytics monitoring, user feedback, updates, and new features.' }
      ]
    },
    whyWorkWithUs: commonWhy,
    ctaSection: {
      title: 'Ready to Build Your Mobile App?',
      description: 'Transform your idea into a successful mobile application. Our team delivers engaging, high-performance apps that users love.',
      additionalDescription: 'Let us discuss your mobile app concept and create a development plan that brings it to life on iOS and Android.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1761630281/web2/mobile-app-cta.jpg',
      primaryCTA: { text: 'Book Discovery Call', link: 'https://calendly.com/altiorainfotech/30min' },
      secondaryCTA: { text: 'Send Your Brief', link: '/contact' }
    },
    seoMetadata: {
      title: 'Mobile Application Development - Altiora Infotech',
      description: 'Create engaging mobile apps with mobile application development at Altiora Infotech. We specialize in iOS, Android, and cross-platform development.'
    }
  },
  {
    serviceType: 'qa-automation',
    heroSection: {
      title: 'QA & Test Automation Services',
      subtitle: 'ALTIORA INFOTECH',
      description: 'Ensure quality and reliability with comprehensive testing solutions.',
      backgroundImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/web2/qa-automation-hero.jpg',
      ctaText: 'Get Started',
      ctaLink: '/contact'
    },
    whyChoosePoints: [
      { text: 'Comprehensive test coverage across all application layers' },
      { text: 'Automated testing for faster release cycles' },
      { text: 'Performance and load testing for scalability assurance' },
      { text: 'Security testing to identify vulnerabilities' },
      { text: 'CI/CD integration for continuous quality' },
      { text: 'Detailed reporting and actionable insights' }
    ],
    services: [
      { title: 'Test Strategy', description: 'Test approach, coverage analysis, and quality metrics definition.', icon: 'Target', link: '/contact' },
      { title: 'Functional Testing', description: 'Manual and automated testing of features, workflows, and user scenarios.', icon: 'CheckCircle', link: '/contact' },
      { title: 'Test Automation', description: 'Selenium, Cypress, Playwright, and custom automation frameworks.', icon: 'Zap', link: '/contact' },
      { title: 'API Testing', description: 'REST and GraphQL API testing, contract testing, and integration validation.', icon: 'Code2', link: '/contact' },
      { title: 'Performance Testing', description: 'Load testing, stress testing, and scalability validation.', icon: 'BarChart3', link: '/contact' },
      { title: 'Security Testing', description: 'Vulnerability scanning, penetration testing, and security audits.', icon: 'Shield', link: '/contact' },
      { title: 'Mobile Testing', description: 'iOS and Android testing on real devices and emulators.', icon: 'Smartphone', link: '/contact' },
      { title: 'CI/CD Integration', description: 'Automated testing in pipelines, quality gates, and deployment validation.', icon: 'GitBranch', link: '/contact' },
      { title: 'Test Reporting', description: 'Dashboards, metrics, defect tracking, and quality insights.', icon: 'FileText', link: '/contact' }
    ],
    mobileServices: [
      { title: 'Test Strategy', description: 'Planning and metrics.', icon: 'Target', link: '/contact' },
      { title: 'Functional Testing', description: 'Feature validation.', icon: 'CheckCircle', link: '/contact' },
      { title: 'Test Automation', description: 'Automated frameworks.', icon: 'Zap', link: '/contact' },
      { title: 'API Testing', description: 'API validation.', icon: 'Code2', link: '/contact' },
      { title: 'Performance', description: 'Load testing.', icon: 'BarChart3', link: '/contact' },
      { title: 'Security', description: 'Vulnerability scanning.', icon: 'Shield', link: '/contact' },
      { title: 'Mobile Testing', description: 'Device testing.', icon: 'Smartphone', link: '/contact' },
      { title: 'CI/CD', description: 'Pipeline integration.', icon: 'GitBranch', link: '/contact' }
    ],
    dnaAnimation: {
      title: 'Our QA & Automation Process',
      description: 'Six phases that ensure software quality and reliability. Our methodology catches issues early and maintains high standards.',
      data: [
        { title: 'Assessment', text: 'Current state analysis, risk identification, and test strategy.' },
        { title: 'Planning', text: 'Test cases, automation scope, and resource allocation.' },
        { title: 'Setup', text: 'Test environment, automation framework, and tool configuration.' },
        { title: 'Execution', text: 'Test execution, defect logging, and regression testing.' },
        { title: 'Automation', text: 'Script development, CI/CD integration, and maintenance.' },
        { title: 'Optimization', text: 'Process improvement, metrics analysis, and efficiency gains.' }
      ]
    },
    whyWorkWithUs: commonWhy,
    ctaSection: {
      title: 'Ready to Improve Your Software Quality?',
      description: 'Ensure reliability and performance with comprehensive QA and test automation. Our team helps you deliver bug-free software faster.',
      additionalDescription: 'Let us discuss your quality challenges and create a testing strategy that accelerates delivery while maintaining high standards.',
      backgroundImage: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/web2/qa-automation-cta.jpg',
      primaryCTA: { text: 'Book Discovery Call', link: 'https://calendly.com/altiorainfotech/30min' },
      secondaryCTA: { text: 'Send Your Brief', link: '/contact' }
    },
    seoMetadata: {
      title: 'QA & Test Automation - Altiora Infotech',
      description: 'Ensure quality with QA and test automation at Altiora Infotech. We specialize in automated testing, performance testing, and quality assurance.'
    }
  },
  {
    serviceType: 'saas-application-development',
    heroSection: {
      title: 'SaaS Application Development Services',
      subtitle: 'ALTIORA INFOTECH',
      description: 'Build scalable, multi-tenant SaaS platforms that drive recurring revenue.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1761630203/web2/saas-hero.jpg',
      ctaText: 'Get Started',
      ctaLink: '/contact'
    },
    whyChoosePoints: [
      { text: 'Multi-tenant architecture for efficient resource utilization' },
      { text: 'Subscription and billing management with multiple payment models' },
      { text: 'Role-based access control and tenant isolation' },
      { text: 'Scalable infrastructure that grows with your user base' },
      { text: 'Analytics and usage tracking for business insights' },
      { text: 'API-first design for integrations and extensibility' }
    ],
    services: [
      { title: 'SaaS Architecture', description: 'Multi-tenant design, data isolation, and scalability planning.', icon: 'Layers', link: '/contact' },
      { title: 'Subscription Management', description: 'Plans, pricing tiers, trials, upgrades, and billing automation.', icon: 'CreditCard', link: '/contact' },
      { title: 'User Management', description: 'Authentication, authorization, roles, permissions, and SSO.', icon: 'Users', link: '/contact' },
      { title: 'Tenant Administration', description: 'Onboarding, configuration, customization, and white-labeling.', icon: 'Settings', link: '/contact' },
      { title: 'API Platform', description: 'RESTful APIs, webhooks, rate limiting, and developer documentation.', icon: 'Code2', link: '/contact' },
      { title: 'Analytics & Reporting', description: 'Usage metrics, business intelligence, and customer insights.', icon: 'BarChart3', link: '/contact' },
      { title: 'Integration Marketplace', description: 'Third-party integrations, app marketplace, and partner ecosystem.', icon: 'Globe', link: '/contact' },
      { title: 'Compliance & Security', description: 'Data privacy, SOC 2, GDPR, encryption, and audit logs.', icon: 'Shield', link: '/contact' },
      { title: 'DevOps & Monitoring', description: 'CI/CD, infrastructure automation, uptime monitoring, and incident response.', icon: 'Server', link: '/contact' }
    ],
    mobileServices: [
      { title: 'SaaS Architecture', description: 'Multi-tenant design.', icon: 'Layers', link: '/contact' },
      { title: 'Subscriptions', description: 'Billing automation.', icon: 'CreditCard', link: '/contact' },
      { title: 'User Management', description: 'Auth and permissions.', icon: 'Users', link: '/contact' },
      { title: 'Tenant Admin', description: 'Configuration.', icon: 'Settings', link: '/contact' },
      { title: 'API Platform', description: 'RESTful APIs.', icon: 'Code2', link: '/contact' },
      { title: 'Analytics', description: 'Usage metrics.', icon: 'BarChart3', link: '/contact' },
      { title: 'Integrations', description: 'Third-party apps.', icon: 'Globe', link: '/contact' },
      { title: 'Security', description: 'Compliance.', icon: 'Shield', link: '/contact' }
    ],
    dnaAnimation: {
      title: 'Our SaaS Development Process',
      description: 'Six phases that transform your SaaS vision into a thriving business. Our methodology ensures scalability, security, and market fit.',
      data: [
        { title: 'Discovery', text: 'Market research, business model, feature prioritization, and MVP scope.' },
        { title: 'Architecture', text: 'Multi-tenant design, tech stack, infrastructure, and security planning.' },
        { title: 'MVP Development', text: 'Core features, user onboarding, billing, and initial launch.' },
        { title: 'Beta & Feedback', text: 'User testing, feedback collection, iteration, and refinement.' },
        { title: 'Scale & Growth', text: 'Performance optimization, feature expansion, and market growth.' },
        { title: 'Enterprise', text: 'Advanced features, compliance, integrations, and enterprise sales.' }
      ]
    },
    whyWorkWithUs: commonWhy,
    ctaSection: {
      title: 'Ready to Build Your SaaS Platform?',
      description: 'Launch a successful SaaS business with our expert development team. We build scalable, secure platforms that drive recurring revenue.',
      additionalDescription: 'Let us discuss your SaaS idea and create a roadmap from MVP to market leader. Our team has the expertise to make your vision a reality.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1761630267/web2/saas-cta.jpg',
      primaryCTA: { text: 'Book Discovery Call', link: 'https://calendly.com/altiorainfotech/30min' },
      secondaryCTA: { text: 'Send Your Brief', link: '/contact' }
    },
    seoMetadata: {
      title: 'SaaS Application Development - Altiora Infotech',
      description: 'Build scalable SaaS platforms with SaaS application development at Altiora Infotech. We specialize in multi-tenant architecture and subscription management.'
    }
  },
  {
    serviceType: 'ui-ux-design',
    heroSection: {
      title: 'UI/UX Design Services',
      subtitle: 'ALTIORA INFOTECH',
      description: 'Create delightful user experiences that drive engagement and conversion.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1761630208/web2/ui-ux-hero.jpg',
      ctaText: 'Get Started',
      ctaLink: '/contact'
    },
    whyChoosePoints: [
      { text: 'User-centered design approach based on research and data' },
      { text: 'Modern, accessible interfaces that work across all devices' },
      { text: 'Conversion-optimized designs that drive business results' },
      { text: 'Design systems for consistency and scalability' },
      { text: 'Rapid prototyping and user testing for validation' },
      { text: 'Collaboration with development teams for seamless implementation' }
    ],
    services: [
      { title: 'User Research', description: 'User interviews, surveys, personas, and journey mapping.', icon: 'Users', link: '/contact' },
      { title: 'UX Strategy', description: 'Information architecture, user flows, and interaction design.', icon: 'Target', link: '/contact' },
      { title: 'Wireframing', description: 'Low and high-fidelity wireframes, rapid prototyping.', icon: 'Layout', link: '/contact' },
      { title: 'UI Design', description: 'Visual design, typography, color systems, and iconography.', icon: 'Palette', link: '/contact' },
      { title: 'Prototyping', description: 'Interactive prototypes, animations, and micro-interactions.', icon: 'Zap', link: '/contact' },
      { title: 'Design Systems', description: 'Component libraries, style guides, and design tokens.', icon: 'Layers', link: '/contact' },
      { title: 'Usability Testing', description: 'User testing, A/B testing, and feedback analysis.', icon: 'Eye', link: '/contact' },
      { title: 'Accessibility', description: 'WCAG compliance, screen reader support, and inclusive design.', icon: 'Heart', link: '/contact' },
      { title: 'Design Handoff', description: 'Developer collaboration, specs, assets, and implementation support.', icon: 'GitBranch', link: '/contact' }
    ],
    mobileServices: [
      { title: 'User Research', description: 'Interviews and personas.', icon: 'Users', link: '/contact' },
      { title: 'UX Strategy', description: 'User flows.', icon: 'Target', link: '/contact' },
      { title: 'Wireframing', description: 'Prototyping.', icon: 'Layout', link: '/contact' },
      { title: 'UI Design', description: 'Visual design.', icon: 'Palette', link: '/contact' },
      { title: 'Prototyping', description: 'Interactive demos.', icon: 'Zap', link: '/contact' },
      { title: 'Design Systems', description: 'Component libraries.', icon: 'Layers', link: '/contact' },
      { title: 'Testing', description: 'User validation.', icon: 'Eye', link: '/contact' },
      { title: 'Accessibility', description: 'Inclusive design.', icon: 'Heart', link: '/contact' }
    ],
    dnaAnimation: {
      title: 'Our UI/UX Design Process',
      description: 'Six phases that create exceptional user experiences. Our methodology combines research, creativity, and validation for optimal results.',
      data: [
        { title: 'Research', text: 'User research, competitive analysis, and requirements gathering.' },
        { title: 'Define', text: 'Personas, user journeys, and information architecture.' },
        { title: 'Ideate', text: 'Sketching, brainstorming, and concept exploration.' },
        { title: 'Design', text: 'Wireframes, visual design, and interactive prototypes.' },
        { title: 'Test', text: 'Usability testing, feedback collection, and iteration.' },
        { title: 'Deliver', text: 'Design system, handoff, and implementation support.' }
      ]
    },
    whyWorkWithUs: commonWhy,
    ctaSection: {
      title: 'Ready to Transform Your User Experience?',
      description: 'Create interfaces that users love and that drive business results. Our design team combines creativity with data-driven insights.',
      additionalDescription: 'Let us discuss your design challenges and create experiences that delight users and achieve your business goals.',
      backgroundImage: 'https://res.cloudinary.com/dkisnzuvo/image/upload/v1761630275/web2/ui-ux-cta.jpg',
      primaryCTA: { text: 'Book Discovery Call', link: 'https://calendly.com/altiorainfotech/30min' },
      secondaryCTA: { text: 'Send Your Brief', link: '/contact' }
    },
    seoMetadata: {
      title: 'UI/UX Design - Altiora Infotech',
      description: 'Create delightful experiences with UI/UX design at Altiora Infotech. We specialize in user research, interface design, and usability testing.'
    }
  }
];

(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');
  
  for (const s of final4Services) {
    await Web2Service.findOneAndUpdate({ serviceType: s.serviceType }, s, { upsert: true });
    console.log('✓ Seeded ' + s.serviceType);
  }
  
  console.log('\nSuccessfully seeded all 4 services!');
  await mongoose.connection.close();
})();
