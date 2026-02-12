import Web2ClientPage from "./_components/Web2ClientPage";
import { Metadata } from 'next';
import { generateSEOMetadata } from '@/lib/seo';

// Force dynamic rendering - disable static generation
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Generate dynamic metadata
export async function generateMetadata(): Promise<Metadata> {
  return await generateSEOMetadata('/services/web2', {
    title: "Web2 Development Services | Altiora Infotech",
    description: "Boost your digital presence with Altiora Infotech's expert Web2 solutions. We craft innovative, secure, and scalable Web2 applications for modern businesses.",
  });
}

export default function Web2Page() {
  return <Web2ClientPage />;
}
