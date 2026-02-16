import { Metadata } from 'next';
import BurnabyMarketingClientPage from './_components/BurnabyMarketingClientPage';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Digital Marketing Company in Burnaby | Digital Marketing Agency Burnaby';
  const description = 'Digital Marketing Company in Burnaby helping businesses generate consistent leads using SEO, Google Ads and conversion-focused strategy.';

  return {
    title,
    description,
    alternates: {
      canonical: 'https://altiorainfotech.com/services/digital-marketing-company-in-burnaby',
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large' as const,
    },
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

export default function BurnabyMarketingCompanyPage() {
  return <BurnabyMarketingClientPage />;
}
