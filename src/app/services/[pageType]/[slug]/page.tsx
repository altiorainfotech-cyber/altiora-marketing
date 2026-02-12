import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServicePageData } from '@/lib/servicePages';
import ServicePageClient from './ServicePageClient';

// Force dynamic rendering - disable static generation
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface PageProps {
  params: Promise<{
    pageType: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pageData = await getServicePageData(slug);

  if (!pageData) {
    return {
      title: 'Service Not Found',
      description: 'The requested service page could not be found.',
    };
  }

  return {
    title: pageData.seoMetadata.title,
    description: pageData.seoMetadata.description,
    keywords: pageData.seoMetadata.keywords?.join(', '),
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const pageData = await getServicePageData(slug);

  if (!pageData) {
    notFound();
  }

  return <ServicePageClient pageData={pageData} />;
}
