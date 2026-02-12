import mongoose from 'mongoose';
import CodeToCloudService from '../src/models/CodeToCloudService';

const codeToCloudData = {
  serviceType: 'from-code-to-cloud-end-to-end',
  
  heroSection: {
    backgroundImage: '/images/agentic-ai/pillar/Web, Mobile, SaaS, APIs, DevOps & Cloud Services 1.png',
    subtitle: 'From Code to Cloud, End to End',
    title: 'High Performance Websites and Apps That\nDrive Revenue',
    description: 'so you ship faster, cut costs and grow with confidence.',
    ctaText: 'Start a Project →',
    ctaLink: 'https://calendly.com/altiorainfotech/30min'
  },
  
  introduction: {
    paragraph1: "In a world where everything is digital, businesses need end-to-end technology to stay competitive, provide smooth experiences, and grow. Altiora Infotech provides comprehensive Web2 services spanning website development, mobile app development, SaaS platforms, API integration, DevOps, and managed cloud services—engineered for security, reliability, and performance. We modernize infrastructure, make operations more efficient, and get customers more involved for both startups and big businesses.",
    paragraph2: 'We do this by aligning architecture, code, and the cloud with measurable business results. Our team builds scalable foundations that lower costs, speed up releases, and get more users on both web and mobile, whether you're launching a new product or upgrading old systems.'
  },
  
  transforming: {
    intro: 'Businesses today need solutions that work across web, mobile, and cloud platforms and connect users to services. Altiora Infotech's Web2 services include:',
    points: [
      'Responsive web platforms for desktops and mobile browsers.',
      'Mobile app development for iOS, Android, and cross-platform solutions.',
      'SaaS applications with scalable cloud architecture.',
      'APIs for seamless integration between systems and platforms.',
      'DevOps solutions for continuous delivery, monitoring, and scaling.',
      'Managed cloud services Infrastructure that is safe, dependable, and optimized.'
    ],
    closing: 'This full-stack method makes sure that businesses can be efficient, save money, and get measurable returns on investment (ROI) while still following all the rules and keeping their data safe.'
  },
  
  services: [
    {
      title: 'Web Platforms and Frontend Development',
      desc: 'A fast, responsive, and easy-to-use platform is at the heart of every digital service. Altiora Infotech offers web development services that focus on:',
      points: [
        'Modern Frontend Frameworks: React, Angular, and Vue for interactive interfaces.',
        'User-Centric Design: Responsive layouts for seamless desktop and mobile browsing.',
        'Content Management Systems: Custom CMS solutions for easy content updates and publishing.',
        'Progressive Web Apps: Offline-enabled applications with native-like performance.'
      ],
      benefits: 'Benefits: Designs that are easy on the eyes, quick loading times, and smooth navigation that boost engagement and conversion rates.',
      example: 'Example: A retail client used our frontend skills to launch a PWA that increased customer engagement by 30% and cut bounce rates by 25%.',
      icon: 'FaDesktop',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Mobile App Development',
      desc: 'Mobile platforms are very important for getting people to use your service, making it easy for them to do so, and growing your business:',
      points: [
        'Native Mobile Apps: Optimized for iOS and Android performance.',
        'Cross-Platform Apps: Built with Flutter or React Native for broader reach.',
        'Enterprise Mobility Solutions: Mobile apps integrated with corporate systems and SaaS platforms.',
        'Mobile-First SaaS Extensions: Extend web-based SaaS products to mobile for global accessibility.'
      ],
      benefits: 'Benefits: Higher user retention, better accessibility, and seamless cross-device functionality.',
      example: 'Example: A fintech startup used Altiora Infotech's mobile app development services to launch a secure banking app, achieving 50,000 downloads within three months with strong engagement metrics.',
      icon: 'FaMobile',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'SaaS Solutions and Cloud-Native Applications',
      desc: 'Software-as-a-Service (SaaS) has become a cornerstone for modern businesses, enabling scalable, subscription-based services. Altiora Infotech develops:',
      points: [
        'Multi-Tenant SaaS Platforms: Efficiently serve multiple customers from a single codebase.',
        'Cloud-Native Architecture: Leverage AWS, Azure, or Google Cloud for scalability and resilience.',
        'Subscription & Billing Management: Integrated payment and subscription systems.',
        'Enterprise SaaS Solutions: Workflow automation, analytics, and reporting tools.'
      ],
      benefits: 'Benefits: Reduced infrastructure costs, global accessibility, and high scalability.',
      example: 'Example: A healthcare provider implemented a SaaS patient management system that improved operational efficiency by 35% and enabled remote access for patients and staff.',
      icon: 'FaCloud',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'API Development and Integration',
      desc: 'APIs enable seamless communication between applications, platforms, and third-party services. Our API services include:',
      points: [
        'RESTful & GraphQL APIs: Efficient, scalable, and easy to integrate.',
        'Third-Party Integrations: Payment gateways, CRMs, ERPs, and other SaaS applications.',
        'Internal APIs: Modular backend services to improve maintainability and flexibility.',
        'API Security: OAuth 2.0, tokenization, and encryption for secure data exchange.'
      ],
      benefits: 'Benefits: Streamlined operations, improved automation, and enhanced interoperability between systems.',
      example: 'Example: A logistics company integrated multiple APIs to track shipments in real-time, reducing customer complaints by 25% and improving delivery efficiency.',
      icon: 'FaPlug',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'DevOps Services',
      desc: 'DevOps ensures continuous integration, deployment, and operational efficiency. Altiora Infotech's DevOps services include:',
      points: [
        'CI/CD Pipelines: Automate testing, build, and deployment processes.',
        'Infrastructure as Code (IaC): Automate infrastructure setup using Terraform or Ansible.',
        'Monitoring & Incident Management: Real-time performance monitoring and alert systems.',
        'Containerization & Orchestration: Docker and Kubernetes for scalable, portable applications.'
      ],
      benefits: 'Benefits: Faster release cycles, reduced downtime, improved reliability, and scalable infrastructure.',
      example: 'Example: A SaaS provider used our DevOps services to reduce deployment times from days to hours while maintaining zero downtime during major updates.',
      icon: 'FaCog',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Managed Cloud Services',
      desc: 'Managed cloud services ensure high availability, security, and optimized performance for modern applications. Altiora Infotech offers:',
      points: [
        'Cloud Hosting & Monitoring: AWS, Azure, or GCP with 24/7 monitoring.',
        'Disaster Recovery & Backup: Automated backups and failover mechanisms.',
        'Performance Optimization: Auto-scaling, caching, and load balancing for high availability.',
        'Security & Compliance: Firewalls, encryption, and adherence to GDPR, HIPAA, and industry standards.'
      ],
      benefits: 'Benefits: Reduced operational burden, enhanced security, and predictable performance.',
      example: 'Example: A SaaS client migrated to managed cloud infrastructure, achieving 99.99% uptime and reducing infrastructure costs by 30%.',
      icon: 'FaServer',
      color: 'from-indigo-500 to-purple-500'
    }
  ],
  
  security: {
    intro: 'Security is a critical aspect of all Web2 services, and reliability ensures businesses operate without interruptions. Altiora Infotech emphasizes:',
    points: [
      { icon: 'FaLock', title: 'End-to-End Encryption', desc: 'Protecting sensitive data across platforms.' },
      { icon: 'FaShieldAlt', title: 'Authentication & Authorization', desc: 'OAuth 2.0, SAML, and role-based access control.' },
      { icon: 'FaEye', title: 'Threat Detection & Prevention', desc: 'Continuous monitoring for vulnerabilities.' },
      { icon: 'FaLayerGroup', title: 'High Availability Architectures', desc: 'Load balancing, clustering, and failover strategies.' }
    ],
    benefits: 'Benefits: Trustworthy systems that protect data, reduce risk, and maintain uninterrupted service.'
  },
  
  approach: {
    intro: 'Altiora Infotech follows a structured approach to delivering Web2 services:',
    steps: [
      'Requirement Analysis: Understand business goals and user needs.',
      'Architecture Design: Plan scalable, secure, and maintainable solutions.',
      'UI/UX Design: Create intuitive, responsive, and engaging user interfaces.',
      'Development: Build web, mobile, SaaS, and API solutions using modern frameworks.',
      'Testing & Quality Assurance: Automated and manual testing for performance, security, and reliability.',
      'Deployment & DevOps: Launch applications with CI/CD pipelines and monitoring tools.',
      'Managed Cloud & Maintenance: Continuous support, optimization, and security management.'
    ],
    closing: 'This methodology ensures fast delivery, scalability, and strong ROI.'
  },
  
  technicalInsights: {
    title: 'Technical Insights and Frameworks',
    description: 'We leverage cutting-edge technologies to deliver robust and scalable Web2 services:',
    frameworks: [
      { icon: 'FaCode', title: 'Frontend', desc: 'React.js, Angular, Vue.js' },
      { icon: 'FaServer', title: 'Backend', desc: 'Node.js, Django, Spring Boot, .NET' },
      { icon: 'FaMobile', title: 'Mobile', desc: 'Flutter, React Native, Swift, Kotlin' },
      { icon: 'FaCloud', title: 'Cloud', desc: 'AWS, Azure, Google Cloud' },
      { icon: 'FaPlug', title: 'API Development', desc: 'REST, GraphQL, gRPC' },
      { icon: 'FaTools', title: 'DevOps', desc: 'Jenkins, GitLab CI/CD, Docker, Kubernetes, Terraform' }
    ],
    closing: 'These frameworks ensure high performance, reliability, and secure digital experiences.'
  },
  
  benefits: {
    items: [
      'Comprehensive Web2 Services: Web, mobile, SaaS, APIs, DevOps, managed cloud.',
      'Scalable & Reliable Solutions: Designed to grow with your business.',
      'Security-First Approach: Strong protection at every layer.',
      'Agile & Efficient Delivery: Faster deployment with continuous testing.',
      'Expert Team: Experienced developers, engineers, and cloud architects.'
    ],
    example: 'Example: A multi-national client used Altiora Infotech's full Web2 service suite to launch a platform that worked across the web, mobile, SaaS, and APIs. It had 99.98% uptime and cut costs by 28%.'
  },
  
  conclusion: {
    paragraph1: 'Businesses need full Web2 services that include innovation, scalability, and security in today's fast-changing digital world. Altiora Infotech offers web, mobile, SaaS, API, DevOps, and managed cloud solutions that are very reliable, secure, and have a clear return on investment.',
    paragraph2: 'Work with Altiora Infotech to update your digital infrastructure, make things easier for users, and grow your business in a way that lasts.'
  },
  
  ctaSection: {
    backgroundImage: '/images/agentic-ai/pillar/Web, Mobile, SaaS, APIs, DevOps & Cloud Services 2 (CTA).png',
    title: 'From Code to Cloud, End-to-End',
    description: 'Web2 is a means to real business outcomes—not a science project. At Altiora Infotech, we pair deep web engineering with clear commercial thinking to deliver solutions that are performant, scalable, and aligned to your KPIs.',
    additionalDescription: "Ready to turn a concept into a roadmap? Share your goals and constraints, and we'll come back with a crisp blueprint: architecture options, timeline and milestones, security and compliance approach, and an investment estimate you can act on.",
    primaryCTA: {
      text: 'Schedule Web2 Consultation',
      link: 'https://calendly.com/altiorainfotech/30min'
    },
    secondaryCTA: {
      text: 'Get Quote',
      link: '/contact'
    }
  },
  
  faqs: [
    {
      question: 'Q1. What do your services cover?',
      answer: 'We design and build high-performance websites and applications, ecommerce, headless CMS, custom APIs, dashboards, and third-party integrations, then support them with analytics and continuous improvement.'
    },
    {
      question: 'Q2. Why should we modernize our platform now?',
      answer: 'Faster pages convert better, rank higher, and reduce support costs. A modern stack improves security, scalability, and time to market so marketing and product teams can ship faster.'
    },
    {
      question: 'Q3. What makes Altiora different?',
      answer: 'We combine engineering depth with a growth mindset. Every deliverable is mapped to measurable business outcomes, not vanity metrics, and we document decisions so your team can operate confidently.'
    },
    {
      question: 'Q4. What tech stack do you use?',
      answer: 'React and Next.js on the front end, Node and serverless APIs, Tailwind for UI, headless CMS like Sanity or Strapi, and cloud platforms such as Vercel or AWS for reliable delivery.'
    },
    {
      question: 'Q5. How do you ensure performance and SEO?',
      answer: 'We build for Core Web Vitals, structured data, clean information architecture, accessible design, image and script optimization, and search friendly routing with clear analytics tagging.'
    },
    {
      question: 'Q6. How do you handle security and compliance?',
      answer: 'We follow OWASP best practices, enforce least-privilege access, audit dependencies, add monitoring and backups, and align to GDPR and SOC 2 expectations where applicable.'
    },
    {
      question: 'Q7. What is your delivery process?',
      answer: 'Discovery and architecture, UX and content mapping, iterative development, QA and performance tuning, launch with observability, then a 30-60-90 improvement plan.'
    },
    {
      question: 'Q8. How do you prove ROI?',
      answer: 'We set baseline KPIs, instrument GA4 and CRM attribution, track conversion rate, qualified pipeline, support tickets, and latency, and report progress with transparent dashboards.'
    },
    {
      question: 'Q9. What timelines should we expect?',
      answer: 'Marketing sites typically take 4 to 6 weeks. More complex applications run 8 to 12 weeks. We work in weekly sprints with clear milestones and demos.'
    }
  ],
  
  seoMetadata: {
    title: 'From Code to Cloud, End to End | Web2 Services | Altiora Infotech',
    description: 'High-performance websites and apps that drive revenue—so you ship faster, cut costs, and grow with confidence.'
  }
};

async function seedCodeToCloud() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/altiora';
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Delete existing data
    await CodeToCloudService.deleteMany({});
    console.log('Cleared existing code to cloud service data');

    // Insert new data
    const service = new CodeToCloudService(codeToCloudData);
    await service.save();
    console.log('Code to Cloud Service data seeded successfully');

    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding code to cloud data:', error);
    process.exit(1);
  }
}

seedCodeToCloud();
