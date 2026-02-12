import { Metadata } from 'next';
import DigitalMarketingClientPage from './_components/DigitalMarketingClientPage';
import dbConnect from '@/lib/mongodb';
import DigitalMarketingServicePage from '@/models/DigitalMarketingServicePage';

// Force dynamic rendering - disable static generation
export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getDigitalMarketingPageData() {
  try {
    await dbConnect();

    const pageData = await DigitalMarketingServicePage.findOne({
      pageSlug: 'digital-marketing-main',
      isActive: true
    }).lean();

    if (!pageData) {
      return null;
    }

    // Convert MongoDB _id to string for serialization
    return JSON.parse(JSON.stringify(pageData));
  } catch (error) {
    console.error('[Digital Marketing Page] Error fetching page data:', error);
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getDigitalMarketingPageData();

  const title = 'Digital Marketing Services That Drive Real Growth | Altiora';
  const description = 'Grow your business with data-driven digital marketing services. SEO, PPC, social media & strategies focused on leads, ROI, and scale.';

  if (!pageData || !pageData.seoMetadata) {
    return {
      title,
      description,
      openGraph: {
        title,
        description,
      },
      twitter: {
        title,
        description,
      }
    };
  }

  return {
    title: pageData.seoMetadata.title || title,
    description: pageData.seoMetadata.description || description,
    keywords: pageData.seoMetadata.keywords?.join(', '),
    openGraph: {
      title: pageData.seoMetadata.title || title,
      description: pageData.seoMetadata.description || description,
    },
    twitter: {
      title: pageData.seoMetadata.title || title,
      description: pageData.seoMetadata.description || description,
    }
  };
}

export default async function DigitalMarketingPage() {
  const pageData = await getDigitalMarketingPageData();

  return <DigitalMarketingClientPage pageData={pageData} />;
}
