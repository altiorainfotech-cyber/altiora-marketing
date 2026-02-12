import { Metadata } from "next";
import { generateSEOMetadata } from '@/lib/seo';
import UniversalServiceClient from "../_components/UniversalServiceClient";

export async function generateMetadata(): Promise<Metadata> {
  return await generateSEOMetadata('/services/web2/saas-application-development', {
    title: 'SaaS Application Development - Altiora Infotech',
    description: 'Build scalable SaaS platforms with SaaS application development at Altiora Infotech. We specialize in cloud-based SaaS solutions.'
  });
}

export default function SaaSApplicationDevelopmentPage() {
  return <UniversalServiceClient serviceType="saas-application-development" />;
}