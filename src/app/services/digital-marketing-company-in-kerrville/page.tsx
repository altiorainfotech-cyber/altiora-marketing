import { Metadata } from 'next';
import KerrvilleMarketingClientPage from './_components/KerrvilleMarketingClientPage';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Kerrville Marketing Company | Digital Marketing Agency Kerrville';
  const description = 'Kerrville marketing company helping local businesses create consistent customer demand using digital marketing strategy.';

  return {
    title,
    description,
    alternates: {
      canonical: 'https://altiorainfotech.com/kerrville-marketing-company',
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

export default function KerrvilleMarketingCompanyPage() {
  return <KerrvilleMarketingClientPage />;
}
