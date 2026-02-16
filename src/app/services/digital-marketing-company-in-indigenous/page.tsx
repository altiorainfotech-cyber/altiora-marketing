import { Metadata } from 'next';
import IndigenousMarketingClientPage from './_components/IndigenousMarketingClientPage';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Indigenous Marketing Company | Digital Strategy for Indigenous Organizations';
  const description = 'Marketing solutions designed for Indigenous organizations focusing on respectful communication and community engagement.';

  return {
    title,
    description,
    alternates: {
      canonical: 'https://altiorainfotech.com/indigenous-marketing-company',
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

export default function IndigenousMarketingCompanyPage() {
  return <IndigenousMarketingClientPage />;
}
