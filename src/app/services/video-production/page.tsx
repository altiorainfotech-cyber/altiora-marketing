import { Metadata } from 'next';
import VideoProductionClientPage from './_components/VideoProductionClientPage';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Video Production Services That Drive Engagement | Altiora Infotech';
  const description = 'Story-driven video production for businesses in Canada & USA. Brand videos, promotional content, social media clips, explainers & testimonials that captivate and convert.';

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

export default function VideoProductionPage() {
  return <VideoProductionClientPage />;
}
