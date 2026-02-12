import UniversalServiceClient from "./UniversalServiceClient";
import { Metadata } from 'next';
import { generateSEOMetadata } from '@/lib/seo';

interface UniversalServicePageProps {
  serviceType: string;
  fallbackTitle: string;
  fallbackDescription: string;
}

// Generate dynamic metadata
export async function generateUniversalMetadata(
  serviceType: string,
  fallbackTitle: string,
  fallbackDescription: string
): Promise<Metadata> {
  // Use fallback metadata directly - SEO data will be fetched via generateSEOMetadata if available
  return await generateSEOMetadata(`/services/web2/${serviceType}`, {
    title: fallbackTitle,
    description: fallbackDescription,
  });
}

export default function UniversalServicePage({ serviceType }: { serviceType: string }) {
  return <UniversalServiceClient serviceType={serviceType} />;
}