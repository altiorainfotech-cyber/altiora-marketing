import { Metadata } from 'next';
import SurreyMarketingClientPage from './_components/SurreyMarketingClientPage';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Surrey Marketing Company | Digital Marketing Agency Surrey BC';
  const description = 'Surrey marketing company generating consistent leads through SEO and paid advertising strategies for local businesses.';

  return {
    title,
    description,
    alternates: {
      canonical: 'https://altiorainfotech.com/surrey-marketing-company',
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

export default function SurreyMarketingCompanyPage() {
  return <SurreyMarketingClientPage />;
}
