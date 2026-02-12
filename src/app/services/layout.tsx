import type { Metadata } from "next";
import { generateSEOMetadata } from '@/lib/seo';

// Force dynamic rendering - disable static generation
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const baseMetadata = await generateSEOMetadata('/services', {
    title: 'Our Services - technology services portfolio',
    description: 'Operationalize innovation in our services at Altiora Infotech. We specialize in technology services portfolio and digital engineering services to scale'
  });

  return {
    ...baseMetadata,
    metadataBase: new URL("https://altiorainfotech.com"),
    alternates: {
      canonical: "https://altiorainfotech.com/services",
    },
  };
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
