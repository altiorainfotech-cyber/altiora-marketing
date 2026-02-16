import { Metadata } from 'next';
import LangleyMarketingClientPage from './_components/LangleyMarketingClientPage';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Digital Marketing Company in Langley | Digital Marketing Agency Langley';
  const description = 'Langley marketing company helping local businesses grow with SEO, paid ads and conversion-focused digital strategies.';

  return {
    title,
    description,
    alternates: {
      canonical: 'https://altiorainfotech.com/service/Digital-Marketing-Company-in-Langley',
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

export default function LangleyMarketingCompanyPage() {
  return <LangleyMarketingClientPage />;
}
