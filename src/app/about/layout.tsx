import type { Metadata } from "next";
import { generateSEOMetadata } from '@/lib/seo';

// Force dynamic rendering - disable static generation
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  return await generateSEOMetadata('/about', {
    title: 'About Us | about altiora infotech - Altiora Infotech',
    description: 'Modernize your stack with About Us  at  Altiora Infotech. We specialize in technology consulting and digital innovation, helping businesses scale securely and achieve sustainable growth.'
  });
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
//testing