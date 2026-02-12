import { Metadata } from 'next';
import { generateSEOMetadata } from '@/lib/seo';
import UniversalServiceClient from "../_components/UniversalServiceClient";

export async function generateMetadata(): Promise<Metadata> {
  return await generateSEOMetadata('/services/web2/qa-automation', {
    title: "QA & Automation - Altiora Infotech",
    description: "Ensure quality with QA & automation at Altiora Infotech. We specialize in test automation and quality assurance services.",
  });
}

export default function QAAutomationPage() {
  return <UniversalServiceClient serviceType="qa-automation" />;
}