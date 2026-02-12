const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

// Define the schema inline
const Web2ServiceSchema = new mongoose.Schema({
  serviceType: { 
    type: String, 
    required: true,
    unique: true
  },
  hasCustomLayout: { type: Boolean, default: false },
  customData: { type: mongoose.Schema.Types.Mixed },
  seoMetadata: {
    title: { type: String, required: true },
    description: { type: String, required: true }
  }
}, {
  timestamps: true
});

const Web2Service = mongoose.models.Web2Service || mongoose.model('Web2Service', Web2ServiceSchema);

// Code to Cloud service data
const codeToCloudData = {
  serviceType: 'from-code-to-cloud-end-to-end',
  hasCustomLayout: true,
  customData: {
    heroSection: {
      backgroundImage: '/images/agentic-ai/pillar/Web, Mobile, SaaS, APIs, DevOps & Cloud Services 1.png',
      subtitle: 'From Code to Cloud, End to End',
      title: 'High Performance Websites and Apps That Drive Revenue',
      description: 'so you ship faster, cut costs and grow with confidence.',
      ctaText: 'Start a Project',
      ctaLink: 'https://calendly.com/altiorainfotech/30min'
    },
    introduction: {
      paragraph1: "In a world where everything is digital, businesses need end-to-end technology to stay competitive, provide smooth experiences, and grow. Altiora Infotech provides comprehensive Web2 services spanning website development, mobile app development, SaaS platforms, API integration, DevOps, and managed cloud services engineered for security, reliability, and performance.",
      paragraph2: 'We do this by aligning architecture, code, and the cloud with measurable business results. Our team builds scalable foundations that lower costs, speed up releases, and get more users on both web and mobile.'
    }
  },
  seoMetadata: {
    title: 'From Code to Cloud, End to End | Web2 Services | Altiora Infotech',
    description: 'High-performance websites and apps that drive revenue so you ship faster, cut costs, and grow with confidence.'
  }
};

// Digital Marketing service data
const digitalMarketingData = {
  serviceType: 'digital-marketing-services',
  hasCustomLayout: true,
  customData: {
    heroSection: {
      backgroundImage: '/images/agentic-ai/pillar/Digital Marketing Services_ Promoting Blockchain, SaaS, and Emerging Technologies 1.png',
      subtitle: 'Digital Marketing for Blockchain, SaaS, and Emerging Tech',
      title: 'Digital Marketing for Blockchain SaaS & Emerging Tech',
      description: 'that explain complex products, build credibility, and turn niche audiences into qualified demand.',
      ctaText: 'Schedule a Growth Strategy Call',
      ctaLink: 'https://calendly.com/altiorainfotech/30min'
    },
    introduction: {
      paragraph1: "In today's fast-paced digital world, companies need to use creative marketing strategies to stay ahead of the competition. Digital marketing needs to be smart and use many different channels to teach, inform, and turn potential customers into loyal ones.",
      paragraph2: "Altiora Infotech is great at helping businesses that know a lot about technology with their digital marketing needs. We use a mix of creative ideas, data-driven strategies, and advanced analytics to promote new tech solutions, SaaS apps, and blockchain platforms."
    }
  },
  seoMetadata: {
    title: 'Digital Marketing Services for Blockchain, SaaS & Emerging Tech | Altiora Infotech',
    description: 'Altiora Infotech helps Blockchain, SaaS, and emerging-tech companies achieve measurable growth through integrated digital marketing.'
  }
};

async function seedCustomWeb2Services() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Delete existing data for these service types
    await Web2Service.deleteMany({ 
      serviceType: { $in: ['from-code-to-cloud-end-to-end', 'digital-marketing-services'] }
    });
    console.log('Cleared existing custom web2 services');

    // Insert new data
    await Web2Service.create([codeToCloudData, digitalMarketingData]);
    console.log('Custom Web2 services seeded successfully');

    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding custom web2 services:', error);
    process.exit(1);
  }
}

seedCustomWeb2Services();
