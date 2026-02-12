// Example: How to use the dynamic Web2 page component
// To activate: rename this file to page.tsx (backup the original first)

import Web2ClientPageDynamic from "./_components/Web2ClientPageDynamic";
import { Metadata } from 'next';
import { generateSEOMetadata } from '@/lib/seo';

// Generate dynamic metadata
export async function generateMetadata(): Promise<Metadata> {
  return await generateSEOMetadata('/services/web2', {
    title: "Web2 Development Services | Altiora Infotech",
    description: "Boost your digital presence with Altiora Infotech's expert Web2 solutions. We craft innovative, secure, and scalable Web2 applications for modern businesses.",
  });
}

export default function Web2Page() {
  // This component fetches all content from MongoDB
  // Update content via MongoDB or the seed script
  return <Web2ClientPageDynamic />;
}
