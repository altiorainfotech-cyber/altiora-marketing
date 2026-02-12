import { Metadata } from 'next';
import { generateSEOMetadata } from '@/lib/seo';
import UniversalServiceClient from "../_components/UniversalServiceClient";

export async function generateMetadata(): Promise<Metadata> {
  return await generateSEOMetadata('/services/web2/cloud-migration-managed-hosting', {
    title: "Cloud Migration & Managed Hosting - Altiora Infotech",
    description: "Improve reliability with cloud migration & managed hosting at Altiora Infotech. We specialize in cloud migration services and managed cloud hosting.",
  });
}

export default function CloudMigrationPage() {
  return <UniversalServiceClient serviceType="cloud-migration-managed-hosting" />;
}