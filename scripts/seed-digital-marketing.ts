import mongoose from 'mongoose';
import DigitalMarketingService from '../src/models/DigitalMarketingService';

const digitalMarketingData = {
  serviceType: 'digital-marketing-services',
  
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
  ],
  
  seoMetadata: {
    title: 'Digital Marketing Services for Blockchain, SaaS & Emerging Tech | Altiora Infotech',
    description: 'Altiora Infotech helps Blockchain, SaaS, and emerging-tech companies achieve measurable growth through integrated digital marketing — SEO, content, social, paid media, and automation.'
  }
};

async function seedDigitalMarketing() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/altiora';
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Delete existing data
    await DigitalMarketingService.deleteMany({});
    console.log('Cleared existing digital marketing service data');

    // Insert new data
    const service = new DigitalMarketingService(digitalMarketingData);
    await service.save();
    console.log('Digital Marketing Service data seeded successfully');

    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding digital marketing data:', error);
    process.exit(1);
  }
}

seedDigitalMarketing();
