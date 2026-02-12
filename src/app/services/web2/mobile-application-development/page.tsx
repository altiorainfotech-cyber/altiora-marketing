import { Metadata } from "next";
import { generateSEOMetadata } from '@/lib/seo';
import UniversalServiceClient from "../_components/UniversalServiceClient";

export async function generateMetadata(): Promise<Metadata> {
  return await generateSEOMetadata('/services/web2/mobile-application-development', {
    title: 'Mobile Application Development - Altiora Infotech',
    description: 'Create powerful mobile experiences with mobile application development at Altiora Infotech. We specialize in iOS and Android app development.'
  });
}

export default function MobileAppDevelopmentPage() {
  return <UniversalServiceClient serviceType="mobile-application-development" />;
}