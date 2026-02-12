import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Web2ServicePage from '@/models/Web2ServicePage';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const searchParams = request.nextUrl.searchParams;
    const slug = searchParams.get('slug') || 'web2-main';

    // First try to find an active page. If none is active, fall back to any
    // page with the requested slug. This prevents returning 404 when the
    // page exists but is marked inactive in the DB (useful during staging).
    // Support both `pageSlug` (schema) and legacy `slug` (existing DB docs).
    // This covers cases where the document was seeded or written with the
    // `slug` field instead of `pageSlug`.
    const slugQuery = { $or: [{ pageSlug: slug }, { slug: slug }] };

    let pageData = await Web2ServicePage.findOne({
      ...slugQuery,
      isActive: true,
    }).lean();

    if (!pageData) {
      // Try a fallback that ignores isActive. If found, return it but log
      // a warning so maintainers can decide whether to reactivate the page.
      pageData = await Web2ServicePage.findOne(slugQuery).lean();
      if (pageData) {
        console.warn(`Found page '${slug}' but it is not active (or used field 'slug' instead of 'pageSlug'). Returning page.`);
      } else {
        return NextResponse.json({ error: 'Page not found' }, { status: 404 });
      }
    }

    return NextResponse.json(pageData, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error fetching Web2 service page:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
