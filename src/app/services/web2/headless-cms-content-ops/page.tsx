import { Metadata } from "next";
import { generateSEOMetadata } from '@/lib/seo';
import UniversalServiceClient from "../_components/UniversalServiceClient";

export async function generateMetadata(): Promise<Metadata> {
  return await generateSEOMetadata('/services/web2/headless-cms-content-ops', {
    title: 'Headless CMS & Content Ops - Altiora Infotech',
    description: 'Manage content at scale with headless CMS at Altiora Infotech. We specialize in headless CMS solutions and content operations.'
  });
}

export default function HeadlessCMSPage() {
  return <UniversalServiceClient serviceType="headless-cms-content-ops" />;
}