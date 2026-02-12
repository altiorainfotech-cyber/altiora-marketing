import { Metadata } from 'next';
import { generateSEOMetadata } from '@/lib/seo';
import UniversalServiceClient from "../_components/UniversalServiceClient";

export async function generateMetadata(): Promise<Metadata> {
  return await generateSEOMetadata('/services/web2/api-development-integration', {
    title: "API Development & Integration - Altiora Infotech",
    description: "Streamline delivery through api development & integration at Altiora Infotech. We specialize in api development services and third party api integration.",
  });
}

export default function APIDevIntegrationPage() {
  return <UniversalServiceClient serviceType="api-development-integration" />;
}
