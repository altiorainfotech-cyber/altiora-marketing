import { Metadata } from 'next';
import { generateSEOMetadata } from '@/lib/seo';
import UniversalServiceClient from "../_components/UniversalServiceClient";

export async function generateMetadata(): Promise<Metadata> {
  return await generateSEOMetadata('/services/web2/custom-web-application-development', {
    title: "Custom Web Application Development - Altiora Infotech",
    description: "Engineer impact via custom web application development at Altiora Infotech. We specialize in enterprise application development and saas application.",
  });
}

export default function CustomWebAppPage() {
  return <UniversalServiceClient serviceType="custom-web-application-development" />;
}