import { Metadata } from 'next';
import CalgaryMarketingClientPage from './_components/CalgaryMarketingClientPage';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Calgary Marketing Company | Digital Marketing Agency Calgary';
  const description = 'Calgary marketing company improving ROI using SEO, paid ads and conversion-focused digital marketing strategies.';

  return {
    title,
    description,
    alternates: {
      canonical: 'https://altiorainfotech.com/calgary-marketing-company',
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

export default function CalgaryMarketingCompanyPage() {
  return <CalgaryMarketingClientPage />;
}
