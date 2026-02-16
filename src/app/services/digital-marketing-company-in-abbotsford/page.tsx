import { Metadata } from 'next';
import AbbotsfordMarketingClientPage from './_components/AbbotsfordMarketingClientPage';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Abbotsford Marketing Company | Digital Marketing Agency Abbotsford';
  const description = 'Abbotsford marketing company helping local businesses turn nearby searches into paying customers.';

  return {
    title,
    description,
    alternates: {
      canonical: 'https://altiorainfotech.com/abbotsford-marketing-company',
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

export default function AbbotsfordMarketingCompanyPage() {
  return <AbbotsfordMarketingClientPage />;
}
