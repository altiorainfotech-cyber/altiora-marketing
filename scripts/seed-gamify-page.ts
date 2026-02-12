import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';
import { resolve } from 'path';

// Load environment variables
dotenv.config({ path: resolve(__dirname, '../.env.local') });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

const gamifyPageData = {
  slug: 'gamify',
  pageType: 'gamify',
  isActive: true,
  heroSection: {
    badge: 'ALTIORA INFOTECH',
    title: 'Gamification That Moves Metrics',
    highlightedTitle: 'Now Just One Click Away',
    description: 'Not the usage but obsession with Spark. Turn trips into happy developments: accomplishments that seem deserved, missions that count, milestones that indicate development, prizes that keep the momentum going. With Altiora, motivation becomes gaugeable—and retention becomes recurring.',
    backgroundImage: '/images/gamify/gamify.webp',
    buttons: [
      {
        text: 'Start Project',
        link: 'https://calendly.com/altiorainfotech/30min',
        variant: 'primary' as const,
        target: '_blank' as const
      }
    ]
  },
  subSection: {
    badge: 'BEHAVIOR LOOPS • RETENTION DESIGN',
    title: 'Invisible yet irresistible',
    description: 'We design loops that nudge the right actions and keep users coming back, with measurable gains in activation and retention.',
    buttonText: 'See loop examples',
    buttonLink: 'https://calendly.com/altiorainfotech/30min'
  },
  aboutSection: {
    title: 'About Altiora',
    description: 'Altiora Infotech is a business development and acceleration firm. We bring together product strategy, behavioral science and full-stack engineering to introduce gamified journeys, which are intuitive, fair, and fun. We care about velocity without losing quality—so you get rapid iterations and stable scale.'
  },
  deliverablesSection: {
    title: 'What We Deliver',
    items: [
      { text: 'Behavior models and success metrics', icon: '📈' },
      { text: 'Journey design with levels, badges, quests, and streaks', icon: '🎯' },
      { text: 'Reward economy and progression balancing', icon: '💠' },
      { text: 'Social loops, leaderboards, and challenges', icon: '👥' },
      { text: 'In-app events, achievements, and seasonal passes', icon: '🏅' },
      { text: 'A/B tests, funnels, and retention cohorts', icon: '🧪' },
      { text: 'Fraud prevention and anti-gaming safeguards', icon: '🛡️' },
      { text: 'Dashboards with actionable insights', icon: '📊' }
    ]
  },
  processSection: {
    title: 'How It Works',
    steps: [
      {
        title: 'Discover',
        description: 'We audit your experience, define target behaviors, and agree on success metrics.'
      },
      {
        title: 'Design',
        description: 'We craft the core loop, progression, and reward economy with low-fidelity prototypes.'
      },
      {
        title: 'Build',
        description: 'We integrate mechanics, events, and analytics with clean, scalable code.'
      },
      {
        title: 'Launch',
        description: 'We run controlled rollouts, measure real impact, and tune the economy.'
      },
      {
        title: 'Scale',
        description: 'We add seasons, live-ops, and content pipelines to keep engagement fresh.'
      }
    ]
  },
  logoSection: {
    title: 'Tools & ecosystems we design with',
    logos: [
      { name: 'Polygon', src: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Polygon_wgxznk.svg' },
      { name: 'Solana', src: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Solana_a9e4q3.svg' },
      { name: 'Ethereum', src: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Ethereum_lbqhv3.svg' },
      { name: 'Cosmos', src: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Cosmos_mkwxxf.svg' },
      { name: 'Stripe', src: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Stripe_oxnapf.svg' },
      { name: 'AWS', src: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/AWS_divmtq.svg' },
      { name: 'Firebase', src: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Firebase_slwzik.svg' },
      { name: 'Mixpanel', src: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Mixpanel_rfvzhp.svg' },
      { name: 'Amplitude', src: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Amplitude_uosv1a.svg' },
      { name: 'Postgres', src: 'https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Postgres_imlp7d.svg' }
    ]
  },
  ctaSection: {
    title: 'Ready to make engagement compounding?',
    description: "If you're exploring gamification and want a practical plan, let's talk. Share where you are, your audience, and one challenge you want to solve. We'll respond with a lightweight concept, timelines, and a clear path to first results.",
    buttons: [
      {
        text: 'Book a 30-min consultation',
        link: 'https://calendly.com/altiorainfotech/30min',
        variant: 'primary' as const,
        target: '_blank' as const
      },
      {
        text: 'Share your challenge',
        link: '/contact',
        variant: 'secondary' as const,
        target: '_self' as const
      }
    ]
  },
  seoMetadata: {
    title: 'Gamification Services - Altiora Infotech',
    description: 'Engineer impact with gamification services at Altiora Infotech — specializing in gamification development and loyalty solutions that scale securely.',
    keywords: ['gamification', 'user engagement', 'retention', 'behavioral design', 'loyalty programs'],
    ogImage: '/images/gamify/gamify.webp'
  },
  createdAt: new Date(),
  updatedAt: new Date()
};

async function seedGamifyPage() {
  const client = new MongoClient(MONGODB_URI!);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db();
    const collection = db.collection('mainpages');

    // Check if gamify page already exists
    const existingPage = await collection.findOne({ slug: 'gamify' });

    if (existingPage) {
      console.log('Gamify page already exists. Updating...');
      await collection.updateOne(
        { slug: 'gamify' },
        { $set: { ...gamifyPageData, updatedAt: new Date() } }
      );
      console.log('✅ Gamify page updated successfully');
    } else {
      console.log('Creating new gamify page...');
      await collection.insertOne(gamifyPageData);
      console.log('✅ Gamify page created successfully');
    }

    console.log('\n📄 Gamify page data:');
    console.log(`   Slug: ${gamifyPageData.slug}`);
    console.log(`   Status: ${gamifyPageData.isActive ? 'Active' : 'Inactive'}`);
    console.log(`   Hero Title: ${gamifyPageData.heroSection.title}`);
    console.log(`   Deliverables: ${gamifyPageData.deliverablesSection.items.length} items`);
    console.log(`   Process Steps: ${gamifyPageData.processSection.steps.length} steps`);
    console.log(`   Logos: ${gamifyPageData.logoSection.logos.length} brands`);

  } catch (error) {
    console.error('Error seeding gamify page:', error);
    throw error;
  } finally {
    await client.close();
    console.log('\nDisconnected from MongoDB');
  }
}

// Run the seed function
seedGamifyPage()
  .then(() => {
    console.log('\n✨ Seed completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Seed failed:', error);
    process.exit(1);
  });
