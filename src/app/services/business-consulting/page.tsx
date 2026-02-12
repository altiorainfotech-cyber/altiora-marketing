import { Metadata } from 'next';
import BusinessConsultingClientPage from './_components/BusinessConsultingClientPage';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Business Consulting Services — Strategy & Growth | Altiora Infotech';
  const description = 'Expert business consulting for companies in Canada & USA. Strategic guidance, growth roadmaps, operational improvement & execution support to accelerate your business.';

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

export default function BusinessConsultingPage() {
  return <BusinessConsultingClientPage />;
}
