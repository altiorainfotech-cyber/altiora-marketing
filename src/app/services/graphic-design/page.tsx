import { Metadata } from 'next';
import GraphicDesignClientPage from './_components/GraphicDesignClientPage';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Professional Graphic Design Services | Altiora Infotech';
  const description = 'Creative graphic design services that connect, convert & communicate your brand. Logo design, marketing collateral, digital graphics & more for businesses in Canada & USA.';

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

export default function GraphicDesignPage() {
  return <GraphicDesignClientPage />;
}
