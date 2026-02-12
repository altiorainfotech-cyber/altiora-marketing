import { Metadata } from "next";
import { generateSEOMetadata } from '@/lib/seo';
import UniversalServiceClient from "../_components/UniversalServiceClient";

export async function generateMetadata(): Promise<Metadata> {
  return await generateSEOMetadata('/services/web2/e-commerce-development', {
    title: 'E-Commerce Development - Altiora Infotech',
    description: 'Build scalable online stores with e-commerce development at Altiora Infotech. We specialize in custom e-commerce solutions and online store development.'
  });
}

export default function ECommercePage() {
  return <UniversalServiceClient serviceType="e-commerce-development" />;
}