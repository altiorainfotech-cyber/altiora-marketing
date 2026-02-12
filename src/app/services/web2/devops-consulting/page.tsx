import { Metadata } from "next";
import { generateSEOMetadata } from '@/lib/seo';
import UniversalServiceClient from "../_components/UniversalServiceClient";

export async function generateMetadata(): Promise<Metadata> {
  return await generateSEOMetadata('/services/web2/devops-consulting', {
    title: 'DevOps Consulting - devops consulting services',
    description: 'Accelerate results with devops consulting at Altiora Infotech. We specialize in devops consulting services and ci cd pipeline to scale securely and accelerate growth.'
  });
}

export default function DevOpsConsultingPage() {
  return <UniversalServiceClient serviceType="devops-consulting" />;
}