import connectDB from '@/lib/mongodb';
import RWAPage from '@/models/RWAPage';

export interface RWAStep {
  h: string;
  d: string;
  iconName: string;
}

export interface RWAStepsSection {
  title: string;
  items: RWAStep[];
}

export interface RWATechnology {
  name: string;
  icon: string;
  color: string;
  category: string;
}

export interface RWATechnologiesSection {
  title: string;
  description: string;
  items: RWATechnology[];
}

export interface RWAHero {
  badgeText: string;
  mainHeadline: string;
  highlightText: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

export interface RWAComplianceSection {
  badge1: string;
  badge2: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export interface RWASection {
  title: string;
  description: string;
}

export interface RWACTA {
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface RWAPageData {
  _id?: string;
  pageId: string;
  hero: RWAHero;
  complianceSection: RWAComplianceSection;
  whatWeDeliver: RWASection;
  steps: RWAStepsSection;
  technologies: RWATechnologiesSection;
  outcomes: RWASection;
  cta: RWACTA;
  updatedAt: Date;
}

/**
 * Fetch RWA page data from MongoDB
 */
export async function getRWAPageData(): Promise<RWAPageData | null> {
  try {
    await connectDB();
    
    const data = await RWAPage.findOne({ pageId: 'rwa-tokenization' }).lean();
    
    if (!data) {
      console.warn('RWA page data not found in database');
      return null;
    }

    return data as unknown as RWAPageData;
  } catch (error) {
    console.error('Error fetching RWA page data:', error);
    throw error;
  }
}

/**
 * Get icon component name to icon mapping
 */
export function getIconComponent(iconName: string) {
  const iconMap: { [key: string]: string } = {
    'Search': 'Search',
    'FileText': 'FileText',
    'Wallet': 'Wallet',
    'Coins': 'Coins',
    'ShieldCheck': 'ShieldCheck',
    'Database': 'Database',
    'UserCheck': 'UserCheck',
    'FilePlus2': 'FilePlus2',
    'Repeat': 'Repeat',
    'RefreshCcw': 'RefreshCcw',
    'BarChart3': 'BarChart3',
    'Layers': 'Layers'
  };
  return iconMap[iconName] || iconName;
}

/**
 * Get react-icons icon component name to icon mapping
 */
export function getTechIconComponent(iconName: string) {
  const iconMap: { [key: string]: string } = {
    'SiDocker': 'SiDocker',
    'SiAmazon': 'SiAmazon',
    'SiPostgresql': 'SiPostgresql',
    'SiSolidity': 'SiSolidity',
    'SiTelegraph': 'SiTelegraph',
    'SiChainlink': 'SiChainlink',
    'SiCircle': 'SiCircle',
    'SiStripe': 'SiStripe',
    'SiAlchemy': 'SiAlchemy',
    'SiNestjs': 'SiNestjs',
    'SiNextdotjs': 'SiNextdotjs',
    'SiWalletconnect': 'SiWalletconnect',
    'SiEthers': 'SiEthers',
    'SiTerraform': 'SiTerraform',
    'SiPython': 'SiPython',
    'SiHashicorp': 'SiHashicorp'
  };
  return iconMap[iconName] || iconName;
}
