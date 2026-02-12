import type { Metadata } from "next";
import { generateSEOMetadata } from '@/lib/seo';

// Force dynamic rendering - disable static generation
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const baseMetadata = await generateSEOMetadata('/contact', {
    title: 'Contact Altiora Infotech - Get Started Today',
    description: 'Get in touch with Altiora Infotech for your Web3, AI, and software development needs. Free consultation available. Let\'s build something amazing together.'
  });

  return {
    ...baseMetadata,
    metadataBase: new URL("https://altiorainfotech.com"),
    alternates: {
      canonical: "https://altiorainfotech.com/contact",
    },
  };
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
