const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const doc = {
  pageId: 'computer-vision',
  pageName: 'Computer Vision - Altiora Infotech',
  route: '/services/ai-ml/computer-vision',
  status: 'published',
  seo: {
    title: 'Computer Vision - Altiora Infotech',
    description: 'Real-world computer vision solutions: object detection, image classification, video analytics. ML consulting and development by Altiora Infotech.',
    ogImage: '/images/agentic-ai/Computer-Vision.png'
  },
  sections: {
    hero: {
      backgroundImage: '/images/agentic-ai/Computer-Vision.png',
      badge: 'ALTIORA INFOTECH',
      badgeIcon: 'FaRocket',
      heading: 'Computer Vision',
      headingHighlight: '',
      highlightColor: '#ecc165',
      subheading: 'See deeper. Decide faster. Act smarter.',
      cta: { text: 'Get Started', link: '/contact', icon: 'FaRocket', primary: true, external: false }
    },
    intro: {
      title: 'Clarity from Images',
      description: 'Transform visual data into structured intelligence. From object detection and tracking to image classification and video analytics, we build production-grade computer vision systems. Our expertise spans classical CV and deep learning, helping you extract value from cameras, sensors, and visual feeds across manufacturing, retail, security, agriculture, and more.',
      linkText: 'AI & ML Services',
      linkHref: '/services/ai-ml/'
    },
    whyChoose: {
      title: 'Why Choose Our Computer Vision Services?',
      subtitle: 'Real-world models that perform under pressure.',
      items: [
        { title: 'Custom architectures optimized for your hardware and latency constraints', text: '', icon: 'FaBrain' },
        { title: 'On-device and edge deployment for real-time, low-latency inference', text: '', icon: 'FaMicrochip' },
        { title: 'Robust handling of lighting, angles, occlusion, and seasonal variation', text: '', icon: 'FaCamera' },
        { title: 'Data-efficient training with synthetic and limited labeled data', text: '', icon: 'FaDatabase' },
        { title: 'Continuous monitoring, drift detection, and automated retraining pipelines', text: '', icon: 'FaSync' },
        { title: 'End-to-end integration from camera ingestion to action triggers', text: '', icon: 'FaRocket' }
      ]
    },
    serviceOfferings: {
      title: 'Our Computer Vision Services',
      subtitle: 'Targeted solutions for image and video intelligence.',
      services: [
        { title: 'Object Detection & Localization', desc: 'Real-time identification, counting, and tracking of items in images and video streams.', icon: 'FaSearch' },
        { title: 'Image Classification', desc: 'Categorize images into predefined classes with high accuracy and explainability.', icon: 'FaImages' },
        { title: 'Semantic Segmentation', desc: 'Pixel-level classification to identify and isolate regions of interest.', icon: 'FaLayerGroup' },
        { title: 'Instance Segmentation', desc: 'Detect and delineate individual objects with boundaries and masks.', icon: 'FaFileAlt' },
        { title: 'Video Analytics & Tracking', desc: 'Monitor events, detect anomalies, and track objects across frames.', icon: 'FaEye' },
        { title: 'Pose Estimation', desc: 'Detect and track human or object keypoints for activity recognition and gesture analysis.', icon: 'FaUserCheck' },
        { title: 'Face Recognition & Verification', desc: 'Identify and verify individuals with robust, privacy-aware systems.', icon: 'FaUserShield' },
        { title: 'Document & Scene Understanding', desc: 'OCR, form extraction, and scene text recognition for business processes.', icon: 'FaShoppingCart' },
        { title: 'Anomaly Detection in Video', desc: 'Identify unusual activity, defects, or unsafe conditions in visual streams.', icon: 'FaExclamationTriangle' }
      ]
    },
    process: {
      title: 'Our Computer Vision Process',
      subtitle: 'From raw footage to reliable production systems.',
      steps: [
        { step: 1, title: 'Scoping & Kickoff', description: 'Define objectives, environments, sensors, data rights, and KPIs.', details: 'Clarify technical feasibility, establish success metrics and data strategy.', icon: 'Target' },
        { step: 2, title: 'Data & Label Strategy', description: 'Collect, balance, and label datasets; establish quality standards.', details: 'Curate high-quality datasets with robust labeling workflows.', icon: 'Database' },
        { step: 3, title: 'Model Development', description: 'Train and tune architectures; validate on holdouts and real scenes.', details: 'Develop custom models with rigorous validation and testing.', icon: 'Cpu' },
        { step: 4, title: 'Evaluation & Field Pilot', description: 'Measure precision/recall, latency, and robustness; refine thresholds.', details: 'Conduct field trials, measure performance and fine-tune production readiness.', icon: 'CheckCircle' },
        { step: 5, title: 'Hardening & Launch', description: 'Add monitoring, RBAC, CI/CD, rollback plans; scale to sites/devices.', details: 'Production-grade infrastructure with monitoring, security and scalability.', icon: 'Shield' },
        { step: 6, title: 'Operate & Improve', description: 'Track drift, refresh data, retrain, and optimize accuracy and cost.', details: 'Continuous monitoring, model updates and optimization for long-term performance.', icon: 'RotateCcw' }
      ]
    },
    whyWorkWithUs: {
      title: 'Why Work With Altiora Infotech?',
      subtitle: 'Partnership for reliable vision at scale.',
      benefits: [
        { title: 'Security First Approach', text: 'Privacy, data anonymization, and compliance embedded from day one.', icon: 'FaShieldAlt' },
        { title: 'Transparent Collaboration', text: 'We explain trade-offs clearly and document every decision thoroughly.', icon: 'FaUsers' },
        { title: 'Holistic Coverage', text: 'Data collection, labeling, training, deployment, and ops all covered end-to-end.', icon: 'FaCog' },
        { title: 'Long-term Partnership', text: 'Roadmaps for scaling, new use cases, and technology upgrades.', icon: 'FaHandshake' },
        { title: 'Trusted Delivery', text: 'Measurable KPIs and outcomes that earn stakeholder confidence.', icon: 'FaCheck' },
        { title: 'Continuous Innovation', text: 'We stay current with emerging architectures and techniques.', icon: 'FaRocket' }
      ]
    },
    cta: {
      title: 'See the Opportunity',
      description: 'Visual data is everywhere. Let us help you turn it into decisions and action.',
      additionalDescription: 'From scoping to field deployment and ongoing optimization, we bring production expertise and proven methodologies to make computer vision reliable, scalable, and effective.',
      backgroundImage: '/images/agentic-ai/cta/Computer-Vision-cta',
      icon: 'FaCamera',
      primaryCTA: { text: 'Schedule Vision Consultation', link: 'https://calendly.com/altiorainfotech/30min', icon: 'FaRocket', external: true },
      secondaryCTA: { text: 'Get Quote', link: '/contact', icon: 'FaEye' }
    }
  }
};

async function seed() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI not set');
    process.exit(1);
  }
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const dbName = process.env.MONGODB_DB || process.env.MONGODB_DB_NAME || 'test';
    const db = client.db(dbName);
    const col = db.collection('ai-ml-services');
    const res = await col.updateOne({ pageId: doc.pageId }, { $set: doc }, { upsert: true });
    if (res.upsertedId) {
      console.log('Inserted with id:', res.upsertedId._id?.toString ? res.upsertedId._id.toString() : res.upsertedId._id);
    } else if (res.matchedCount > 0 || res.modifiedCount > 0) {
      console.log('Updated existing document');
    } else {
      console.log('Upserted successfully');
    }
  } catch (err) {
    console.error('Seed error', err);
    process.exit(1);
  } finally {
    await client.close();
  }
}

seed();
