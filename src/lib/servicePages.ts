import connectDB from '@/lib/mongodb';
import ServicePage from '@/models/ServicePage';

export interface ServicePageData {
  pageType: string;
  slug: string;
  isActive: boolean;
  heroSection: {
    title: string;
    subtitle: string;
    description: string;
    backgroundImage?: string;
    ctaButtons: Array<{
      text: string;
      link: string;
      variant: 'primary' | 'secondary';
    }>;
  };
  stats?: Array<{
    value: number;
    prefix?: string;
    suffix?: string;
    label: string;
    icon: string;
  }>;
  overviewSection?: {
    title: string;
    description: string;
  };
  servicesSection: {
    title: string;
    subtitle: string;
    description: string;
    cards: Array<{
      icon: string;
      title: string;
      description: string;
      cta: string;
      link: string;
      comingSoon?: boolean;
    }>;
  };
  blockchainCTA?: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
  outcomesSection?: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      icon: string;
      summary: string;
      details: string;
      metric: string;
      impact: string;
    }>;
  };
  trendsSection?: {
    title: string;
    subtitle: string;
    description: string;
    trends: Array<{
      title: string;
      description: string;
    }>;
  };
  techStackSection?: {
    title: string;
    subtitle: string;
    items: Array<{
      icon: string;
      title: string;
      text: string;
    }>;
  };
  securitySection?: {
    title: string;
    subtitle: string;
    items: Array<{
      icon: string;
      text: string;
    }>;
  };
  whyChooseSection?: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
      trustMetric: string;
    }>;
  };
  howWeWorkSection?: {
    title: string;
    subtitle: string;
    description: string;
    steps: Array<{
      step: string;
      title: string;
      description: string;
      icon: string;
    }>;
    readyToBuild: {
      title: string;
      description: string;
      buttonText: string;
      buttonLink: string;
      image: string;
    };
  };
  finalCTASection?: {
    title: string;
    description: string;
    buttons: Array<{
      text: string;
      link: string;
      variant: 'primary' | 'secondary';
    }>;
  };
  seoMetadata: {
    title: string;
    description: string;
    keywords?: string[];
  };
}

export async function getServicePageData(slug: string): Promise<ServicePageData | null> {
  try {
    await connectDB();
    const page = await ServicePage.findOne({ slug, isActive: true });
    return page ? page.toObject() : null;
  } catch (error) {
    console.error('Error fetching service page data:', error);
    return null;
  }
}

export async function getAllServicePages(): Promise<ServicePageData[]> {
  try {
    await connectDB();
    const pages = await ServicePage.find({ isActive: true });
    return pages.map(page => page.toObject());
  } catch (error) {
    console.error('Error fetching all service pages:', error);
    return [];
  }
}

export async function getServicePagesByType(pageType: string): Promise<ServicePageData[]> {
  try {
    await connectDB();
    const pages = await ServicePage.find({ pageType, isActive: true });
    return pages.map(page => page.toObject());
  } catch (error) {
    console.error('Error fetching service pages by type:', error);
    return [];
  }
}
