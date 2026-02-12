import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Web2Service from '../src/models/Web2Service.js';

// Load environment variables
dotenv.config();

const websiteDevelopmentData = {
  serviceType: 'website-development-services',
  hasCustomLayout: true,
  seoMetadata: {
    title: 'Website Development Services | Custom Web Development - Altiora Infotech',
    description: 'Expert website development services for businesses of all sizes. Custom web development, responsive design, and modern web solutions to boost your online presence.'
  },
  customData: {
    heroSection: {
      backgroundImage: '/images/web2/website-development-hero.png',
      subtitle: 'Professional Website Development Services',
      title: 'Custom Websites That Drive\nBusiness Growth',
      description: 'Transform your digital presence with high-performance, scalable websites built for results.',
      ctaText: 'Start Your Project',
      ctaLink: 'https://calendly.com/altiorainfotech/30min'
    },
    introduction: {
      paragraph1: "In today's digital-first world, your website is often the first point of contact between your business and potential customers. A well-designed, professionally developed website not only establishes credibility but also serves as a powerful tool for customer acquisition, engagement, and conversion. Whether you're a startup looking to establish your online presence or an established enterprise seeking to modernize your digital infrastructure, custom website development is essential for staying competitive.",
      paragraph2: "At Altiora Infotech, we specialize in creating custom websites that combine stunning design with robust functionality. Our website development services encompass everything from responsive web design and e-commerce platforms to complex web applications and progressive web apps (PWAs). We leverage cutting-edge technologies and industry best practices to deliver websites that are fast, secure, scalable, and optimized for search engines."
    },
    whyEssential: {
      intro: 'In an increasingly digital marketplace, businesses face unique challenges when it comes to their online presence:',
      challenges: [
        { title: 'First Impressions Matter', desc: '75% of users judge a company\'s credibility based on website design. A poorly designed site can drive potential customers away.' },
        { title: 'Mobile-First Reality', desc: 'Over 60% of web traffic comes from mobile devices. Sites that aren\'t mobile-optimized lose significant business.' },
        { title: 'Speed is Critical', desc: 'A 1-second delay in page load time can reduce conversions by 7%. Performance directly impacts revenue.' },
        { title: 'SEO Competition', desc: 'Without proper technical SEO, your website won\'t rank in search results, making it invisible to potential customers.' }
      ],
      statistics: [
        '94% of first impressions relate to web design',
        '88% of online consumers are less likely to return to a site after a bad experience',
        'Businesses with optimized websites see 2.5x higher conversion rates',
        'Mobile-responsive websites have 50% higher engagement rates'
      ],
      closing: 'Professional website development has become essential for businesses to compete effectively, build trust, and drive measurable growth.'
    },
    approach: {
      paragraph1: "At Altiora Infotech, we take a strategic, user-centric approach to website development. We begin every project with in-depth discovery and research to understand your business objectives, target audience, and competitive landscape. This foundation informs our design and development strategy, ensuring every element of your website serves a specific purpose.",
      paragraph2: 'Our development process emphasizes performance, security, and scalability. We build websites using modern frameworks like React, Next.js, and Vue.js for dynamic, interactive experiences. For content-heavy sites, we implement headless CMS solutions like Sanity or Strapi, giving you full control over your content while maintaining blazing-fast performance. Every website we build is responsive by default, ensuring seamless experiences across all devices.',
      paragraph3: 'We don\'t just build websites—we engineer digital experiences. For a retail client, we developed a responsive e-commerce platform that increased mobile conversions by 145% and reduced cart abandonment by 32%. For a B2B SaaS company, our custom web application streamlined their customer onboarding process, reducing signup time by 60% and increasing trial-to-paid conversions by 40%. These results demonstrate the power of strategic website development.',
      keyStrategies: [
        'User research and competitive analysis to inform design decisions',
        'Mobile-first responsive design for optimal cross-device experiences',
        'Performance optimization for Core Web Vitals and fast load times',
        'Technical SEO implementation for search visibility',
        'Conversion-focused architecture to drive business results'
      ]
    },
    services: [
      {
        title: 'Custom Web Design & Development',
        desc: 'Your website should be as unique as your business. We create custom-designed websites tailored to your brand and business goals:',
        points: [
          'Bespoke UI/UX Design: Custom interfaces designed around your users and brand identity',
          'Responsive Development: Seamless experiences across desktop, tablet, and mobile devices',
          'Modern Technology Stack: Built with React, Next.js, Vue.js, and other cutting-edge frameworks',
          'Accessibility Standards: WCAG-compliant websites that serve all users',
          'Performance Optimization: Sub-second load times and excellent Core Web Vitals scores'
        ],
        benefits: 'Benefits: Unique brand presence, superior user experience, better search rankings, and higher conversion rates.',
        example: 'Example: A professional services firm saw a 180% increase in qualified leads after launching their custom-designed website with optimized user journeys and clear calls-to-action.',
        icon: 'FaPaintBrush',
        color: 'from-purple-500 to-pink-500'
      },
      {
        title: 'E-Commerce Development',
        desc: 'Turn your online store into a revenue-generating machine with custom e-commerce solutions:',
        points: [
          'Platform Expertise: Custom solutions with Shopify, WooCommerce, or headless commerce',
          'Payment Integration: Secure payment gateways and checkout optimization',
          'Inventory Management: Real-time inventory tracking and automated stock alerts',
          'Mobile Commerce: Mobile-optimized shopping experiences that convert',
          'Analytics & Optimization: Conversion tracking and A/B testing capabilities'
        ],
        benefits: 'Benefits: Increased sales, reduced cart abandonment, streamlined operations, and better customer experiences.',
        example: 'Example: An e-commerce client increased revenue by 220% in six months after migrating to our custom-built headless commerce solution with optimized checkout flows.',
        icon: 'FaShoppingCart',
        color: 'from-green-500 to-emerald-500'
      },
      {
        title: 'Progressive Web Apps (PWA)',
        desc: 'Combine the best of web and mobile with progressive web applications:',
        points: [
          'Offline Functionality: Work seamlessly even without internet connection',
          'App-Like Experience: Native app features without app store friction',
          'Push Notifications: Re-engage users with timely notifications',
          'Fast Loading: Instant loading with service worker caching',
          'Cross-Platform: One codebase works across all devices and platforms'
        ],
        benefits: 'Benefits: Higher engagement, improved conversion rates, reduced development costs, and better user retention.',
        example: 'Example: A news publisher\'s PWA increased page views by 156% and time on site by 89% with offline reading capabilities and push notifications.',
        icon: 'FaMobile',
        color: 'from-blue-500 to-cyan-500'
      },
      {
        title: 'Content Management Systems (CMS)',
        desc: 'Take control of your content with flexible, user-friendly CMS solutions:',
        points: [
          'Headless CMS: Decouple content from presentation for maximum flexibility',
          'Custom WordPress Development: Tailored WordPress solutions beyond templates',
          'Content API: Distribute content across multiple channels and platforms',
          'User-Friendly Interfaces: Intuitive content editing for non-technical users',
          'Multi-Language Support: Global reach with multilingual content management'
        ],
        benefits: 'Benefits: Easy content updates, faster time to market, improved content workflow, and omnichannel publishing.',
        example: 'Example: A marketing agency reduced content publishing time by 75% after implementing our custom headless CMS with streamlined approval workflows.',
        icon: 'FaEdit',
        color: 'from-orange-500 to-red-500'
      },
      {
        title: 'Web Application Development',
        desc: 'Build powerful web applications that solve complex business problems:',
        points: [
          'Single Page Applications (SPA): Fast, dynamic experiences with React or Vue.js',
          'Real-Time Features: Live updates with WebSockets and real-time databases',
          'API Integration: Connect to third-party services and internal systems',
          'User Authentication: Secure login systems with OAuth and SSO',
          'Database Design: Scalable data architecture for growing applications'
        ],
        benefits: 'Benefits: Enhanced productivity, automated workflows, better data insights, and competitive advantage.',
        example: 'Example: A logistics company\'s custom web application reduced manual data entry by 85% and improved shipment tracking accuracy to 99.8%.',
        icon: 'FaCode',
        color: 'from-indigo-500 to-purple-500'
      },
      {
        title: 'SEO & Performance Optimization',
        desc: 'Get found and convert visitors with technical SEO and performance optimization:',
        points: [
          'Technical SEO: Structured data, semantic HTML, and search-friendly architecture',
          'Core Web Vitals: Optimize LCP, FID, and CLS for better rankings',
          'Page Speed: Image optimization, code splitting, and lazy loading',
          'Schema Markup: Rich snippets for enhanced search visibility',
          'Analytics Integration: Track performance with GA4 and Search Console'
        ],
        benefits: 'Benefits: Higher search rankings, increased organic traffic, better user experience, and improved conversion rates.',
        example: 'Example: After our SEO optimization, a B2B client saw organic traffic increase by 340% and moved to page one for 23 high-intent keywords within four months.',
        icon: 'FaSearch',
        color: 'from-yellow-500 to-orange-500'
      }
    ],
    security: {
      intro: 'Security and reliability are non-negotiable in modern web development. Every website we build includes:',
      points: [
        { icon: 'FaLock', title: 'SSL/TLS Encryption', desc: 'Secure HTTPS connections for all data transmission' },
        { icon: 'FaShieldAlt', title: 'Security Headers', desc: 'CSP, HSTS, and other headers to prevent attacks' },
        { icon: 'FaUserLock', title: 'Authentication & Authorization', desc: 'Secure user management with industry-standard protocols' },
        { icon: 'FaDatabase', title: 'Data Protection', desc: 'Encrypted storage and GDPR-compliant data handling' },
        { icon: 'FaSync', title: 'Regular Updates', desc: 'Ongoing security patches and dependency updates' },
        { icon: 'FaCloud', title: 'Backup & Recovery', desc: 'Automated backups and disaster recovery planning' }
      ],
      benefits: 'Benefits: Protected customer data, maintained business continuity, compliance with regulations, and customer trust.'
    },
    developmentProcess: {
      intro: 'Our proven website development process ensures quality, efficiency, and results:',
      steps: [
        {
          number: '01',
          title: 'Discovery & Strategy',
          description: 'We analyze your business goals, target audience, and competitive landscape to create a strategic foundation.',
          deliverables: ['Project brief', 'User personas', 'Competitive analysis', 'Sitemap & IA']
        },
        {
          number: '02',
          title: 'Design & Prototyping',
          description: 'Our designers create beautiful, user-centric interfaces with wireframes and high-fidelity prototypes.',
          deliverables: ['Wireframes', 'Visual designs', 'Interactive prototypes', 'Design system']
        },
        {
          number: '03',
          title: 'Development & Integration',
          description: 'We build your website using modern frameworks, integrating all required systems and third-party services.',
          deliverables: ['Responsive frontend', 'Backend systems', 'API integrations', 'CMS setup']
        },
        {
          number: '04',
          title: 'Testing & Quality Assurance',
          description: 'Rigorous testing across devices, browsers, and user scenarios ensures flawless functionality.',
          deliverables: ['Cross-browser testing', 'Performance testing', 'Security audit', 'Accessibility check']
        },
        {
          number: '05',
          title: 'Launch & Deployment',
          description: 'We handle all aspects of deployment including DNS, hosting setup, and post-launch monitoring.',
          deliverables: ['Production deployment', 'Analytics setup', 'SEO configuration', 'Training materials']
        },
        {
          number: '06',
          title: 'Support & Optimization',
          description: 'Ongoing maintenance, updates, and data-driven optimizations keep your website performing at its best.',
          deliverables: ['Performance monitoring', 'Content updates', 'Security patches', 'Conversion optimization']
        }
      ],
      closing: 'This structured approach ensures timely delivery, quality results, and measurable ROI.'
    },
    technicalInsights: {
      title: 'Our Technology Stack',
      description: 'We leverage the latest web technologies to build fast, scalable, and maintainable websites:',
      frameworks: [
        { icon: 'FaReact', title: 'Frontend Frameworks', desc: 'React, Next.js, Vue.js, Nuxt.js, Svelte' },
        { icon: 'FaNode', title: 'Backend Technologies', desc: 'Node.js, Python, PHP, .NET Core' },
        { icon: 'FaDatabase', title: 'Databases', desc: 'PostgreSQL, MongoDB, MySQL, Firebase' },
        { icon: 'FaPalette', title: 'Styling', desc: 'Tailwind CSS, Sass, Styled Components, CSS Modules' },
        { icon: 'FaCloud', title: 'Hosting & Cloud', desc: 'Vercel, AWS, Google Cloud, Azure, Netlify' },
        { icon: 'FaTools', title: 'CMS Platforms', desc: 'Sanity, Strapi, Contentful, WordPress, Payload' }
      ],
      closing: 'This modern tech stack ensures your website is built on solid, future-proof foundations.'
    },
    benefits: {
      items: [
        'Custom Solutions: Tailored to your unique business needs and brand identity',
        'Performance-First: Fast load times and excellent Core Web Vitals for better SEO',
        'Mobile-Responsive: Beautiful experiences across all devices and screen sizes',
        'Conversion-Focused: Every element designed to drive business results',
        'Scalable Architecture: Grows with your business without technical limitations',
        'SEO-Optimized: Built for search visibility from day one',
        'Ongoing Support: Continuous maintenance and optimization after launch'
      ],
      example: 'Example: A healthcare provider partnered with us to rebuild their patient portal. The result: 95% user satisfaction, 40% reduction in support calls, and 3x increase in online appointment bookings.'
    },
    industryExpertise: {
      title: 'Industry Expertise',
      intro: 'We\'ve successfully delivered website development projects across diverse industries:',
      industries: [
        { icon: 'FaHeartbeat', name: 'Healthcare', desc: 'HIPAA-compliant patient portals and medical practice websites' },
        { icon: 'FaGraduationCap', name: 'Education', desc: 'E-learning platforms and educational institution websites' },
        { icon: 'FaShoppingBag', name: 'E-Commerce', desc: 'High-converting online stores and marketplace platforms' },
        { icon: 'FaChartLine', name: 'Finance', desc: 'Secure banking and fintech web applications' },
        { icon: 'FaBuilding', name: 'Real Estate', desc: 'Property listing platforms and agency websites' },
        { icon: 'FaUtensils', name: 'Food & Beverage', desc: 'Restaurant websites and food delivery platforms' },
        { icon: 'FaBriefcase', name: 'Professional Services', desc: 'Corporate websites and client portals' },
        { icon: 'FaRocket', name: 'Technology', desc: 'SaaS marketing sites and product documentation' }
      ]
    },
    caseStudies: {
      title: 'Success Stories',
      studies: [
        {
          client: 'E-Commerce Retailer',
          challenge: 'Outdated website with 3.8s load time and 65% mobile bounce rate',
          solution: 'Custom Next.js e-commerce site with headless CMS and optimized checkout',
          results: [
            '0.8s average load time (79% improvement)',
            '145% increase in mobile conversions',
            '32% reduction in cart abandonment',
            '220% revenue increase in 6 months'
          ]
        },
        {
          client: 'B2B SaaS Company',
          challenge: 'Generic website not converting trial users to paid customers',
          solution: 'Custom web application with personalized onboarding and demo scheduler',
          results: [
            '60% faster signup process',
            '40% increase in trial-to-paid conversions',
            '3x more qualified demo requests',
            'Reduced customer acquisition cost by 35%'
          ]
        },
        {
          client: 'Professional Services Firm',
          challenge: 'Poor search visibility and low-quality lead generation',
          solution: 'SEO-optimized website with targeted landing pages and conversion tracking',
          results: [
            'Page 1 rankings for 18 target keywords',
            '180% increase in qualified leads',
            '89% improvement in organic traffic',
            '4.2x return on investment in first year'
          ]
        }
      ]
    },
    whyChoose: {
      intro: "Altiora Infotech combines technical expertise, strategic thinking, and proven results to deliver websites that drive real business growth. Here's what sets us apart:",
      benefits: [
        'Experienced Team: Senior developers, designers, and strategists with proven track records',
        'Business-First Approach: Every technical decision aligned with your business objectives',
        'Transparent Process: Clear communication, regular updates, and collaborative workflows',
        'Quality Assurance: Rigorous testing ensures flawless functionality across all scenarios',
        'Post-Launch Support: Ongoing optimization and support to maximize your ROI',
        'Proven Results: Track record of delivering measurable business outcomes for clients'
      ],
      closing: 'Our clients don\'t just get a website—they get a strategic digital asset that drives growth, generates leads, and delivers ROI. With an average client satisfaction score of 4.8/5 and a 92% client retention rate, we\'re committed to your long-term success.'
    },
    conclusion: {
      paragraph1: "In today's digital economy, your website is your most valuable marketing asset. It works 24/7 to attract visitors, engage prospects, and convert them into customers. But only if it's built right. A poorly designed or technically flawed website does more harm than good, damaging your brand and costing you business.",
      paragraph2: 'Altiora Infotech delivers professional website development services that combine beautiful design with robust functionality, optimized performance, and strategic thinking. Whether you need a simple marketing site, a complex web application, or a high-converting e-commerce platform, we have the expertise to bring your vision to life and deliver measurable results.'
    },
    ctaSection: {
      backgroundImage: '/images/web2/website-development-cta.png',
      title: 'Ready to Transform Your Online Presence?',
      description: 'Let\'s build a website that drives real business results. Our team of expert developers, designers, and strategists is ready to turn your vision into reality.',
      additionalDescription: "Schedule a free consultation to discuss your project. We'll analyze your needs, present strategic recommendations, share relevant case studies, and provide a detailed proposal with timeline and investment estimates.",
      primaryCTA: {
        text: 'Schedule Free Consultation',
        link: 'https://calendly.com/altiorainfotech/30min'
      },
      secondaryCTA: {
        text: 'View Our Portfolio',
        link: '/portfolio'
      }
    },
    faqs: [
      {
        question: 'Q1. What makes Altiora different from other web development agencies?',
        answer: 'We combine deep technical expertise with strategic business thinking. Every website we build is engineered for performance, optimized for conversions, and designed to deliver measurable ROI. We focus on outcomes, not just outputs.'
      },
      {
        question: 'Q2. How long does it take to build a website?',
        answer: 'Timeline depends on complexity. Simple marketing websites take 4-6 weeks, while complex web applications require 8-16 weeks. We work in agile sprints with regular milestones and demos to keep you informed.'
      },
      {
        question: 'Q3. Do you provide ongoing support after launch?',
        answer: 'Yes. We offer comprehensive support packages including hosting management, security updates, performance monitoring, content updates, and conversion optimization based on analytics data.'
      },
      {
        question: 'Q4. Can you redesign my existing website?',
        answer: 'Absolutely. We specialize in website redesigns and migrations. We\'ll analyze your current site, identify improvement opportunities, and create a modernized solution that preserves what works while fixing what doesn\'t.'
      },
      {
        question: 'Q5. Will my website be mobile-friendly?',
        answer: 'Every website we build is mobile-responsive by default. We use a mobile-first approach, ensuring perfect experiences across all devices, from smartphones to tablets to desktop monitors.'
      },
      {
        question: 'Q6. How do you ensure my website ranks well in search engines?',
        answer: 'We implement technical SEO best practices from day one: semantic HTML, structured data, optimized performance, mobile responsiveness, clean architecture, and search-friendly URLs. We also offer ongoing SEO services.'
      },
      {
        question: 'Q7. What technologies do you use?',
        answer: 'We use modern, proven technologies: React and Next.js for frontend, Node.js or Python for backend, headless CMS like Sanity or Strapi, and cloud platforms like Vercel or AWS. Technology choices align with your specific needs.'
      },
      {
        question: 'Q8. How much does a website cost?',
        answer: 'Investment varies based on scope and complexity. Simple marketing sites start around $10K, while complex web applications can range from $30K-$100K+. We provide detailed proposals with transparent pricing.'
      },
      {
        question: 'Q9. Can you integrate third-party tools and services?',
        answer: 'Yes. We integrate CRM systems, payment gateways, marketing automation, analytics, email services, and any other tools your business needs. We build robust APIs and ensure seamless data flow.'
      },
      {
        question: 'Q10. Do you offer e-commerce development?',
        answer: 'Yes. We build custom e-commerce solutions using platforms like Shopify, WooCommerce, or headless commerce. Our e-commerce sites are optimized for conversions with streamlined checkout and powerful admin tools.'
      }
    ]
  }
};

async function seedWebsiteDevelopmentService() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;
    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI environment variable is not set');
    }
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Delete existing website development service if it exists
    await Web2Service.deleteOne({ serviceType: 'website-development-services' });
    console.log('Cleared existing website development service');

    // Insert website development service
    const websiteDevelopment = new Web2Service(websiteDevelopmentData);
    await websiteDevelopment.save();
    console.log('✓ Website Development Service seeded successfully');

    console.log('\nWebsite Development Service successfully added to web2services collection!');
    console.log('Access at: /services/web2/website-development-services');

    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding website development service:', error);
    process.exit(1);
  }
}

seedWebsiteDevelopmentService();
