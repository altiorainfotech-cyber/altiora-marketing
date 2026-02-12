/**
 * Script to populate SEO metadata for all pages in the database
 * This script will create entries in the admin system's MongoDB database
 * for all the pages that now use dynamic metadata
 */

const pages = [
  // Main pages
  {
    path: '/about',
    slug: 'about',
    metaTitle: 'About Us | about altiora infotech - Altiora Infotech',
    metaDescription: 'Modernize your stack with About Us at Altiora Infotech. We specialize in technology consulting and digital innovation, helping businesses scale securely and achieve sustainable growth.',
    pageCategory: 'about'
  },
  {
    path: '/contact',
    slug: 'contact',
    metaTitle: 'Contact Altiora Infotech - Get Started Today',
    metaDescription: 'Get in touch with Altiora Infotech for your Web3, AI, and software development needs. Free consultation available. Let\'s build something amazing together.',
    pageCategory: 'contact'
  },
  {
    path: '/faq',
    slug: 'faq',
    metaTitle: 'FAQs | ai services faq - Altiora Infotech',
    metaDescription: 'Improve reliability with faqs at Altiora Infotech. We specialize in ai services faq and web3 services faq to scale securely and accelerate time-to-value',
    pageCategory: 'other'
  },
  {
    path: '/gamify',
    slug: 'gamify',
    metaTitle: 'Gamification Services - Altiora Infotech',
    metaDescription: 'Engineer impact with gamification services at Altiora Infotech — specializing in gamification development and loyalty solutions that scale securely.',
    pageCategory: 'services'
  },
  {
    path: '/staff',
    slug: 'staff',
    metaTitle: 'Client Testimonials | client reviews - Altiora Infotech',
    metaDescription: 'Streamline delivery through client testimonials at Altiora Infotech. We specialize in client reviews and software development testimonials to scale securely',
    pageCategory: 'other'
  },
  {
    path: '/depin',
    slug: 'depin',
    metaTitle: 'DePIN Development | depin development - Altiora Infotech',
    metaDescription: 'Modernize your stack with depin development at Altiora Infotech. We specialize in depin development and decentralized physical infrastructure to scale securely',
    pageCategory: 'services'
  },
  {
    path: '/rwa',
    slug: 'rwa',
    metaTitle: 'RWA Tokenization - real world asset tokenization',
    metaDescription: 'Operationalize innovation in RWA tokenization at Altiora Infotech. We provide real-world asset tokenization and digitization to scale securely.',
    pageCategory: 'services'
  },
  {
    path: '/web3-deck',
    slug: 'web3-deck',
    metaTitle: 'Web3 Pitch Deck | web3 pitch deck - Altiora Infotech',
    metaDescription: 'Reduce risk and cost with web3 pitch deck at Altiora Infotech. We specialize in web3 pitch deck and tokenomics pitch deck to scale securely and accelerate',
    pageCategory: 'services'
  },

  // Services pages
  {
    path: '/services',
    slug: 'services',
    metaTitle: 'Our Services - technology services portfolio',
    metaDescription: 'Discover comprehensive technology services at Altiora Infotech. From Web3 and blockchain to AI/ML and traditional web development - we deliver innovative solutions.',
    pageCategory: 'services'
  },

  // Web3 Services
  {
    path: '/services/web3/blockchain',
    slug: 'blockchain-development-services',
    metaTitle: 'Blockchain Development Services - Altiora Infotech',
    metaDescription: 'Reduce risk and cost with blockchain development services at Altiora Infotech. We specialize in blockchain development company and enterprise blockchain',
    pageCategory: 'services'
  },
  {
    path: '/services/web3/blockchain-development-services-building-the-future-of-web3-with-altiora-infotech',
    slug: 'blockchain-technology',
    metaTitle: 'Blockchain Technology - Altiora Infotech',
    metaDescription: 'Achieve faster outcomes with blockchain technology at Altiora Infotech. We provide blockchain solutions and Web3 app development to drive growth.',
    pageCategory: 'services'
  },
  {
    path: '/services/web3/dao',
    slug: 'dao-development',
    metaTitle: 'DAO Development dao development services | Altiora Infotech',
    metaDescription: 'Build decentralized autonomous organizations with DAO development services at Altiora Infotech. We specialize in governance tokens and DAO infrastructure.',
    pageCategory: 'services'
  },
  {
    path: '/services/web3/dapp',
    slug: 'dapp-development',
    metaTitle: 'dApp Development | dapp development - Altiora Infotech',
    metaDescription: 'Create powerful decentralized applications with dApp development services at Altiora Infotech. We build scalable and secure Web3 applications.',
    pageCategory: 'services'
  },
  {
    path: '/services/web3/defi',
    slug: 'defi-development',
    metaTitle: 'DeFi Development Services - Altiora Infotech',
    metaDescription: 'Build the future of finance with DeFi development services at Altiora Infotech. We create secure and innovative decentralized finance solutions.',
    pageCategory: 'services'
  },
  {
    path: '/services/web3/nft',
    slug: 'nft-development',
    metaTitle: 'NFT Development | nft development company - Altiora Infotech',
    metaDescription: 'Create unique digital assets with NFT development services at Altiora Infotech. We specialize in NFT marketplaces and smart contract development.',
    pageCategory: 'services'
  },
  {
    path: '/services/web3/security-audit',
    slug: 'web3-security-audit',
    metaTitle: 'Web3 Security Audit smart contract audit | Altiora Infotech',
    metaDescription: 'Secure your Web3 projects with comprehensive security audits at Altiora Infotech. We provide smart contract audits and vulnerability assessments.',
    pageCategory: 'services'
  },
  {
    path: '/services/web3/smart-contract',
    slug: 'smart-contract-development',
    metaTitle: 'Smart Contract Development - Altiora Infotech',
    metaDescription: 'Build secure and efficient smart contracts with Altiora Infotech. We specialize in Ethereum, Solana, and multi-chain smart contract development.',
    pageCategory: 'services'
  },
  {
    path: '/services/web3/tokenization',
    slug: 'tokenization-services',
    metaTitle: 'Tokenization Services | rwa tokenization - Altiora Infotech',
    metaDescription: 'Transform assets into digital tokens with tokenization services at Altiora Infotech. We specialize in RWA tokenization and digital asset creation.',
    pageCategory: 'services'
  },
  {
    path: '/services/web3/wallet',
    slug: 'crypto-wallet-development',
    metaTitle: 'Crypto Wallet Development - Altiora Infotech',
    metaDescription: 'Build secure cryptocurrency wallets with Altiora Infotech. We develop multi-chain wallets, hardware wallet integration, and DeFi wallet solutions.',
    pageCategory: 'services'
  },
  {
    path: '/services/web3/web3-marketing',
    slug: 'web3-marketing',
    metaTitle: 'Digital Marketing Services - Altiora Infotech',
    metaDescription: 'Grow your Web3 project with specialized digital marketing services at Altiora Infotech. We provide crypto marketing and blockchain promotion strategies.',
    pageCategory: 'services'
  },
  {
    path: '/services/web3/zk-privacy',
    slug: 'zk-privacy-solutions',
    metaTitle: 'ZK & Privacy Solutions - Altiora Infotech',
    metaDescription: 'Implement zero-knowledge proofs and privacy solutions with Altiora Infotech. We build secure and private blockchain applications.',
    pageCategory: 'services'
  },

  // Web2 Services
  {
    path: '/services/web2',
    slug: 'web2-development-services',
    metaTitle: 'Web2 Development Services | Altiora Infotech',
    metaDescription: 'Boost your digital presence with Altiora Infotech\'s expert Web2 solutions. We craft innovative, secure, and scalable Web2 applications for modern businesses.',
    pageCategory: 'services'
  },
  {
    path: '/services/web2/api-development-integration',
    slug: 'api-development-integration',
    metaTitle: 'API Development & Integration - Altiora Infotech',
    metaDescription: 'Streamline delivery through api development & integration at Altiora Infotech. We specialize in api development services and third party api integration.',
    pageCategory: 'services'
  },
  {
    path: '/services/web2/cloud-migration-managed-hosting',
    slug: 'cloud-migration-managed-hosting',
    metaTitle: 'Cloud Migration & Managed Hosting - Altiora Infotech',
    metaDescription: 'Improve reliability with cloud migration & managed hosting at Altiora Infotech. We specialize in cloud migration services and managed cloud hosting.',
    pageCategory: 'services'
  },
  {
    path: '/services/web2/custom-web-application-development',
    slug: 'custom-web-application-development',
    metaTitle: 'Custom Web Application Development - Altiora Infotech',
    metaDescription: 'Engineer impact via custom web application development at Altiora Infotech. We specialize in enterprise application development and saas application.',
    pageCategory: 'services'
  },
  {
    path: '/services/web2/devops-consulting',
    slug: 'devops-consulting',
    metaTitle: 'DevOps Consulting - devops consulting services',
    metaDescription: 'Accelerate results with devops consulting at Altiora Infotech. We specialize in devops consulting services and ci cd pipeline to scale securely and accelerate growth.',
    pageCategory: 'services'
  },
  {
    path: '/services/web2/e-commerce-development',
    slug: 'e-commerce-development',
    metaTitle: 'E-commerce Development - Altiora Infotech',
    metaDescription: 'Unlock growth via e-commerce development at Altiora Infotech. We specialize in ecommerce website development and shopify development company to scale securely',
    pageCategory: 'services'
  },
  {
    path: '/services/web2/headless-cms-content-ops',
    slug: 'headless-cms-content-ops',
    metaTitle: 'Headless CMS & Content Ops - Altiora Infotech',
    metaDescription: 'Design and scale headless cms & content ops at Altiora Infotech. We specialize in headless cms development and contentful development to scale securely.',
    pageCategory: 'services'
  },
  {
    path: '/services/web2/mobile-application-development',
    slug: 'mobile-application-development',
    metaTitle: 'Mobile Application Development - Altiora Infotech',
    metaDescription: 'Transform operations through mobile application development at Altiora Infotech. We specialize in mobile app development company and react native development',
    pageCategory: 'services'
  },
  {
    path: '/services/web2/qa-automation',
    slug: 'qa-automation-testing',
    metaTitle: 'QA Automation & Testing - Altiora Infotech',
    metaDescription: 'Build with confidence in QA automation & testing at Altiora Infotech. We provide expert test automation and QA services to help you scale securely',
    pageCategory: 'services'
  },
  {
    path: '/services/web2/saas-application-development',
    slug: 'saas-application-development',
    metaTitle: 'SaaS Application Development - Altiora Infotech',
    metaDescription: 'Deliver measurable value using saas application development at Altiora Infotech. We specialize in saas development company and multi tenant saas to scale',
    pageCategory: 'services'
  },
  {
    path: '/services/web2/ui-ux-design',
    slug: 'ui-ux-design-services',
    metaTitle: 'UI/UX Design Services ui ux design agency | Altiora Infotech',
    metaDescription: 'Modernize your stack with UI/UX design services at Altiora Infotech. We offer expert UI/UX and product design solutions to scale securely.',
    pageCategory: 'services'
  },

  // AI/ML Services
  {
    path: '/services/ai-ml',
    slug: 'ai-ml-services',
    metaTitle: 'AI & Machine Learning Development Services | Altiora Infotech',
    metaDescription: 'Unlock growth via ai & ml services at Altiora Infotech. We specialize in machine learning services and ai consulting company to scale securely and accelerate',
    pageCategory: 'services'
  },
  {
    path: '/services/ai-ml/ai-services-that-ship-scale-and-prove-roi',
    slug: 'ai-services-roi',
    metaTitle: 'AI ROI & Value Realization - Altiora Infotech',
    metaDescription: 'Deliver measurable AI ROI with Altiora Infotech. We build AI services that ship, scale, and prove value for your business.',
    pageCategory: 'services'
  },
  {
    path: '/services/ai-ml/ai-infrastructure-and-cloud-development',
    slug: 'ai-infrastructure-cloud-development',
    metaTitle: 'AI Infrastructure & Cloud Development - Altiora Infotech',
    metaDescription: 'Transform operations through ai infrastructure & cloud development at Altiora Infotech. We specialize in ml platform engineering and ai cloud services to scale',
    pageCategory: 'services'
  },
  {
    path: '/services/ai-ml/agentic-ai',
    slug: 'agentic-ai',
    metaTitle: 'Agentic AI | ai agents automation - Altiora Infotech',
    metaDescription: 'Design and scale agentic ai at Altiora Infotech. We specialize in ai agents automation and autonomous ai agents to scale securely and accelerate time-to-value',
    pageCategory: 'services'
  }
];

/**
 * Function to create SEO entries via API
 */
async function populateSEOData() {
  const adminApiUrl = process.env.ADMIN_API_URL || 'https://testing-a-p.vercel.app';
  
  console.log('Starting SEO data population...');
  console.log(`Total pages to process: ${pages.length}`);
  
  for (const page of pages) {
    try {
      console.log(`Processing: ${page.path}`);
      
      const response = await fetch(`${adminApiUrl}/api/seo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add authentication headers if needed
          // 'Authorization': 'Bearer YOUR_TOKEN'
        },
        body: JSON.stringify({
          siteId: 'altiorainfotech',
          path: page.path,
          slug: page.slug,
          metaTitle: page.metaTitle,
          metaDescription: page.metaDescription,
          robots: 'index,follow',
          pageCategory: page.pageCategory,
          isCustom: false,
          // You'll need to provide these IDs from your admin system
          createdBy: 'ADMIN_USER_ID', // Replace with actual admin user ID
          updatedBy: 'ADMIN_USER_ID'  // Replace with actual admin user ID
        })
      });
      
      if (response.ok) {
        console.log(`✅ Successfully created SEO data for ${page.path}`);
      } else {
        const error = await response.text();
        console.log(`❌ Failed to create SEO data for ${page.path}: ${error}`);
      }
    } catch (error) {
      console.error(`❌ Error processing ${page.path}:`, error);
    }
    
    // Add a small delay to avoid overwhelming the API
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  console.log('SEO data population completed!');
}

// Export for use in other scripts
module.exports = { pages, populateSEOData };

// Run if called directly
if (require.main === module) {
  populateSEOData().catch(console.error);
}