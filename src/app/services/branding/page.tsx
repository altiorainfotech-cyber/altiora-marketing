import { Metadata } from 'next';
import BrandingClientPage from './_components/BrandingClientPage';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Branding Services That Build Trust & Drive Growth | Altiora Infotech';
  const description = 'Strategic branding services for businesses in Canada & USA. Brand identity, strategy, messaging, guidelines & repositioning that shape perception and influence decisions.';

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

export default function BrandingPage() {
  return <BrandingClientPage />;
}
