import mongoose from 'mongoose';
import Web2Service from '../src/models/Web2Service.js';

// Digital Marketing Service Data
const digitalMarketingData = {
  serviceType: 'digital-marketing-services',
  hasCustomLayout: true,
  seoMetadata: {
    title: 'Digital Marketing Services for Blockchain, SaaS & Emerging Tech | Altiora Infotech',
    description: 'Altiora Infotech helps Blockchain, SaaS, and emerging-tech companies achieve measurable growth through integrated digital marketing — SEO, content, social, paid media, and automation.'
  },
  customData: {
    heroSection: {
      backgroundImage: '/images/agentic-ai/pillar/Digital Marketing Services_ Promoting Blockchain, SaaS, and Emerging Technologies 1.png',
      subtitle: 'Digital Marketing for Blockchain, SaaS, and Emerging Tech',
      title: 'Digital Marketing for Blockchain\nSaaS & Emerging Tech',
      description: 'that explain complex products, build credibility, and turn niche audiences into qualified demand.',
      ctaText: 'Schedule a Growth Strategy Call',
      ctaLink: 'https://calendly.com/altiorainfotech/30min'
    },
    introduction: {
      paragraph1: "In today's fast-paced digital world, companies need to use creative marketing strategies to stay ahead of the competition. To grow your business, you need to reach the right people, build trust, and get them to interact with you in a meaningful way, no matter what kind of new technology you're using, like blockchain, SaaS, fintech, or something else. You can't just use old-school marketing anymore. Digital marketing needs to be smart and use many different channels to teach, inform, and turn potential customers into loyal ones because technology products are complicated and have small target audiences.",
      paragraph2: "Altiora Infotech is great at helping businesses that know a lot about technology with their digital marketing needs. We use a mix of creative ideas, data-driven strategies, and advanced analytics to promote new tech solutions, SaaS apps, and blockchain platforms. This includes promoting advanced Blockchain Development Services and new Tokenization. We help our clients stand out in a crowded digital world by being thought leaders, building communities, and focusing on results that can be measured."
    },
    whyEssential: {
      intro: 'New technology companies face unique marketing challenges. Key points include:',
      challenges: [
        { title: 'Complex Products', desc: 'Blockchain platforms and SaaS apps are technically complex and need clear explanations for potential users.' },
        { title: 'Communicating Value', desc: 'Startups often struggle to make their value proposition clear to non-technical audiences.' },
        { title: 'Niche Audiences', desc: 'Target groups often include early adopters, business decision-makers, and investors.' },
        { title: 'Building Trust and Credibility', desc: 'Establishing authority is critical in a competitive and emerging market.' }
      ],
      statistics: [
        '67% of blockchain startups report difficulty in educating users about their product.',
        'SaaS companies using multi-channel marketing generate 3x more leads than those using only one channel.',
        'Content-driven marketing produces 6x higher conversion rates compared to paid advertising alone.'
      ],
      closing: 'Digital marketing has therefore become essential for growth, visibility, and engagement in the technology sector.'
    },
    approach: {
      paragraph1: "At Altiora Infotech, we use a holistic, multi-channel approach for tech companies. Our main goals are to teach people, build trust, and get results that can be measured. We start by looking closely at the client's market, competitors, and target audience. This helps us come up with a content-driven strategy that works for blockchain, SaaS, or other tech solutions.",
      paragraph2: 'We use content marketing, SEO, SEM, and social media campaigns together to reach the right people. We use platforms like LinkedIn, Twitter, and Telegram to connect with communities and work with influencers to reach more people. We also make sure that websites load quickly, work well on mobile devices, and show up in search results.',
      paragraph3: 'Blogs, whitepapers, case studies, videos, and webinars are all still very important to our strategy. For example, a blockchain startup we helped make 20 blogs, 2 whitepapers, and 3 explainer videos in six months. This increased organic traffic by 72% and investor inquiries by 45%. Video demos and tutorials help SaaS customers adopt the software 34% more quickly and turn 28% more of their trials into paid customers.',
      keyStrategies: [
        'Conducting in-depth audience research and competitive analysis',
        'Creating educational content tailored to complex technologies',
        'Optimizing websites for both search engines and user experience'
      ]
    },
    campaignExamples: {
      paragraph1: 'Digital marketing works best when it is based on data and is always being improved. For instance, we helped a decentralized finance platform get to the top 3 search results for 15 high-intent keywords. This led to a 62% increase in organic leads and a 52% decrease in cost-per-acquisition through SEO, targeted Google Ads, and LinkedIn campaigns.',
      paragraph2: 'A SaaS analytics company also saw a 40% increase in demo requests and a 20% faster sales cycle thanks to automated email sequences, optimized landing pages, and social media across multiple channels. A blockchain wallet campaign that used LinkedIn and Twitter strategies along with community engagement saw an 85% increase in followers and a 35% increase in referral traffic.',
      paragraph3: "We've also helped tech companies by running API Development & Integration campaigns that made user experiences smoother and made backend performance more visible, which led to measurable increases in conversion rates. These examples show that you can get better results by using content marketing, SEO, paid ads, social media, and email automation all at the same time. Campaigns that use more than one channel always do better than those that use only one. They get three times as many qualified leads and 250% more engagement."
    },
    multiChannel: {
      intro: 'At Altiora Infotech, we implement an integrated, multi-channel approach to ensure consistent messaging and engagement. This includes:',
      points: [
        { icon: 'FaFileAlt', title: 'Content Marketing', desc: 'Blogs, videos, and tutorials to educate and engage audiences.' },
        { icon: 'FaSearch', title: 'SEO & Paid Campaigns', desc: 'Organic search optimization and targeted Google Ads/LinkedIn campaigns.' },
        { icon: 'FaUsers', title: 'Social Media & Influencers', desc: 'Community engagement and credibility-building on LinkedIn, Twitter, and niche platforms.' },
        { icon: 'FaEnvelope', title: 'Email Automation', desc: 'Nurturing leads from all channels to guide them toward conversion.' }
      ],
      closing: 'We continuously monitor performance using analytics tools like Google Analytics, marketing dashboards, and social media insights, enabling data-driven optimizations that maximize ROI.'
    },
    whyChoose: {
      intro: "Altiora Infotech combines industry expertise, creative content, and technical know-how to help blockchain, SaaS, and emerging technology businesses thrive. We understand the challenges of marketing complex products to niche audiences and craft strategies that educate, engage, and convert.",
      benefits: [
        'Integrated marketing solutions that cover content creation, SEO, social media, paid campaigns, and email automation',
        'Data-driven decision-making to optimize performance and maximize ROI',
        'Community building and influencer collaborations to enhance credibility and reach',
        'Experience in blockchain, SaaS, fintech, and other emerging technologies to deliver targeted, effective campaigns'
      ],
      closing: 'Through a combination of strategic planning, analytics, and creative content, we ensure that our clients achieve meaningful results and a strong market presence. A recent partnership with a decentralized finance platform led to a 200% increase in qualified leads within six months, demonstrating the impact of a well-executed digital marketing strategy.'
    },
    conclusion: {
      paragraph1: "Digital marketing is a big part of how technology companies grow, get people to use their products, and build trust. Companies need to be clear, build trust, and get people interested in what they're saying, whether they're talking about blockchain, SaaS, or other new technologies.",
      paragraph2: 'Altiora Infotech provides a full range of digital marketing services, such as content marketing, SEO, social media, paid ads, email automation, and analytics, to help businesses find the right customers, teach them, and see real growth. Working with us means a marketing plan that is based on data, strategy, and results for long-term success.'
    },
    ctaSection: {
      backgroundImage: '/images/agentic-ai/pillar/Digital Marketing Services_ Promoting Blockchain, SaaS, and Emerging Technologies 2 (CTA).png',
      title: 'Digital Marketing for Blockchain, SaaS & Emerging Tech',
      description: 'Digital marketing is a means to real business outcomes—not a science project. At Altiora Infotech, we pair deep marketing engineering with clear commercial thinking to deliver solutions that are effective, scalable, and aligned to your KPIs.',
      additionalDescription: "Ready to turn a concept into a roadmap? Share your goals and constraints, and we'll come back with a crisp blueprint: architecture options, timeline and milestones, security and compliance approach, and an investment estimate you can act on.",
      primaryCTA: {
        text: 'Schedule Marketing Consultation',
        link: 'https://calendly.com/altiorainfotech/30min'
      },
      secondaryCTA: {
        text: 'Get Quote',
        link: '/contact'
      }
    },
    faqs: [
      {
        question: 'Q1. What does Altiora Infotech do in digital marketing?',
        answer: 'We plan and run full-funnel programs that educate niche buyers, build credibility, and convert demand through content, SEO, paid media, social, community, and lifecycle automation.'
      },
      {
        question: 'Q2. Why is a multi-channel approach essential for tech brands?',
        answer: 'Your buyers research across search, social, communities, and inbox. A single channel leaks intent. Integrated messaging compounds reach, recall, and qualified pipeline.'
      },
      {
        question: 'Q3. What outcomes can we expect in the first 90 days?',
        answer: 'Clear narrative and ICP, foundation SEO, pilot paid campaigns, content engine kickoff, analytics hygiene, and early wins in demos, trials, or waitlist growth.'
      },
      {
        question: 'Q4. Why choose Altiora over a generic agency?',
        answer: 'We speak product, not fluff. Our team blends technical fluency with performance rigor, so messaging is accurate, compliant, and tied to revenue metrics.'
      },
      {
        question: 'Q5. What industries and personas do you target?',
        answer: 'DeFi, wallets, infra, analytics, cybersecurity, DevTools, fintech, and health tech. Personas include PMs, engineers, founders, finance leaders, and compliance stakeholders.'
      },
      {
        question: 'Q6. What is your content strategy for complex products?',
        answer: 'We translate docs into plain-language narratives, demos, and proofs. Formats include blogs, playbooks, case studies, webinars, and product tutorials that shorten evaluation.'
      }
    ]
  }
};

// Code to Cloud Service Data
const codeToCloudData = {
  serviceType: 'from-code-to-cloud-end-to-end',
  hasCustomLayout: true,
  seoMetadata: {
    title: 'From Code to Cloud, End to End | Web2 Services | Altiora Infotech',
    description: 'High-performance websites and apps that drive revenue so you ship faster, cut costs, and grow with confidence.'
  },
  customData: {
    heroSection: {
      backgroundImage: '/images/agentic-ai/pillar/Web, Mobile, SaaS, APIs, DevOps & Cloud Services 1.png',
      subtitle: 'From Code to Cloud, End to End',
      title: 'High Performance Websites and Apps That\nDrive Revenue',
      description: 'so you ship faster, cut costs and grow with confidence.',
      ctaText: 'Start a Project',
      ctaLink: 'https://calendly.com/altiorainfotech/30min'
    },
    introduction: {
      paragraph1: "In a world where everything is digital, businesses need end-to-end technology to stay competitive, provide smooth experiences, and grow. Altiora Infotech provides comprehensive Web2 services spanning website development, mobile app development, SaaS platforms, API integration, DevOps, and managed cloud services engineered for security, reliability, and performance. We modernize infrastructure, make operations more efficient, and get customers more involved for both startups and big businesses.",
      paragraph2: "We do this by aligning architecture, code, and the cloud with measurable business results. Our team builds scalable foundations that lower costs, speed up releases, and get more users on both web and mobile, whether you are launching a new product or upgrading old systems."
    },
    transforming: {
      intro: 'Businesses today need solutions that work across web, mobile, and cloud platforms and connect users to services. Altiora Infotech Web2 services include:',
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
        example: 'Example: A fintech startup used Altiora Infotech mobile app development services to launch a secure banking app, achieving 50,000 downloads within three months with strong engagement metrics.',
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
        desc: 'DevOps ensures continuous integration, deployment, and operational efficiency. Altiora Infotech DevOps services include:',
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
      example: 'Example: A multi-national client used Altiora Infotech full Web2 service suite to launch a platform that worked across the web, mobile, SaaS, and APIs. It had 99.98% uptime and cut costs by 28%.'
    },
    conclusion: {
      paragraph1: 'Businesses need full Web2 services that include innovation, scalability, and security in today fast-changing digital world. Altiora Infotech offers web, mobile, SaaS, API, DevOps, and managed cloud solutions that are very reliable, secure, and have a clear return on investment.',
      paragraph2: 'Work with Altiora Infotech to update your digital infrastructure, make things easier for users, and grow your business in a way that lasts.'
    },
    ctaSection: {
      backgroundImage: '/images/agentic-ai/pillar/Web, Mobile, SaaS, APIs, DevOps & Cloud Services 2 (CTA).png',
      title: 'From Code to Cloud, End-to-End',
      description: 'Web2 is a means to real business outcomes not a science project. At Altiora Infotech, we pair deep web engineering with clear commercial thinking to deliver solutions that are performant, scalable, and aligned to your KPIs.',
      additionalDescription: "Ready to turn a concept into a roadmap? Share your goals and constraints, and we will come back with a crisp blueprint: architecture options, timeline and milestones, security and compliance approach, and an investment estimate you can act on.",
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
    ]
  }
};

async function seedCustomWeb2Services() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/altiora';
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Delete existing custom services
    await Web2Service.deleteMany({ 
      serviceType: { $in: ['digital-marketing-services', 'from-code-to-cloud-end-to-end'] } 
    });
    console.log('Cleared existing custom web2 services');

    // Insert digital marketing service
    const digitalMarketing = new Web2Service(digitalMarketingData);
    await digitalMarketing.save();
    console.log('✓ Digital Marketing Service seeded');

    // Insert code to cloud service
    const codeToCloud = new Web2Service(codeToCloudData);
    await codeToCloud.save();
    console.log('✓ Code to Cloud Service seeded');

    console.log('\nBoth custom services successfully added to web2services collection!');

    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding custom web2 services:', error);
    process.exit(1);
  }
}

seedCustomWeb2Services();
