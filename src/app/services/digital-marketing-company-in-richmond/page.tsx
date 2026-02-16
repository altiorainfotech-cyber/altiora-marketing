import { Metadata } from 'next';
import RichmondMarketingClientPage from './_components/RichmondMarketingClientPage';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Digital Marketing Company in Richmond | Digital Marketing Agency Richmond BC';
  const description = 'Digital Marketing Company in Richmond helping businesses attract qualified enquiries using SEO and performance marketing strategies.';

  return {
    title,
    description,
    alternates: {
      canonical: 'https://altiorainfotech.com/services/digital-marketing-company-in-richmond',
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

export default function RichmondMarketingCompanyPage() {
  return <RichmondMarketingClientPage />;
}
