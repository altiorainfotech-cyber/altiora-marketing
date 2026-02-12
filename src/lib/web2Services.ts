import connectDB from '@/lib/mongodb';
import Web2Service from '@/models/Web2Service';

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface WhyChoosePoint {
  text: string;
}

export interface DNAAnimationData {
  title: string;
  text: string;
}

export interface DNAAnimation {
  title: string;
  description: string;
  data: DNAAnimationData[];
}

export interface WhyWorkWithUs {
  title: string;
  description: string;
  icon: string;
}

export interface CTASection {
  title: string;
  description: string;
  additionalDescription?: string;
  backgroundImage: string;
  primaryCTA: {
    text: string;
    link: string;
  };
  secondaryCTA: {
    text: string;
    link: string;
  };
}

export interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  ctaText: string;
  ctaLink: string;
}

export interface Web2ServiceData {
  serviceType: string;
  heroSection: HeroSection;
  whyChoosePoints: WhyChoosePoint[];
  services: ServiceItem[];
  mobileServices: ServiceItem[];
  dnaAnimation: DNAAnimation;
  whyWorkWithUs: WhyWorkWithUs[];
  ctaSection: CTASection;
  seoMetadata: {
    title: string;
    description: string;
  };
}

export async function getWeb2ServiceData(serviceType: string): Promise<Web2ServiceData | null> {
  try {
    await connectDB();
    const service = await Web2Service.findOne({ serviceType });
    return service ? service.toObject() : null;
  } catch (error) {
    console.error('Error fetching web2 service data:', error);
    return null;
  }
}

export async function getAllWeb2Services(): Promise<Web2ServiceData[]> {
  try {
    await connectDB();
    const services = await Web2Service.find({});
    return services.map(service => service.toObject());
  } catch (error) {
    console.error('Error fetching all web2 services:', error);
    return [];
  }
}