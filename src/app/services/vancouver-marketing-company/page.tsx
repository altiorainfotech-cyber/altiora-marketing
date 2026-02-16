import { Metadata } from 'next';
import VancouverMarketingClientPage from './_components/VancouverMarketingClientPage';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Vancouver Marketing Company | Digital Marketing & Development Partner | Altiora Infotech';
  const description = 'Your Digital Marketing & Development Partner in Vancouver. Branding, SEO, Web Design, Social Media, Video Production & Business Consulting. Grow 10x faster with Altiora Infotech.';

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

export default function VancouverMarketingCompanyPage() {
  return <VancouverMarketingClientPage />;
}
