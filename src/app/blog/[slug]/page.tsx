import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { fetchBlogPostFromDB } from "@/lib/api-server";
import Header from "../../../assets/Header";
import Footer from "../../../assets/Footer";
import styles from "./blog.module.css";
import DOMPurify from 'isomorphic-dompurify';

// --- helpers ---

// Helper function to get post by slug from API
async function getPostBySlug(slug: string) {
  try {
    const response = await fetchBlogPostFromDB(slug);
    return response.data;
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error);
    return null;
  }
}

// Build a basic TOC from <h2 id="...">...</h2> headings in your HTML
function extractH2TOC(html: string): Array<{ id: string; text: string }> {
  const out: Array<{ id: string; text: string }> = [];
  const re = /<h2\s+id="([^"]+)"[^>]*>(.*?)<\/h2>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const text = m[2].replace(/<[^>]+>/g, "").trim();
    out.push({ id: m[1], text });
  }
  return out;
}

// Note: We'll generate static params dynamically or use dynamic rendering
// For now, we'll use dynamic rendering to handle all possible slugs
export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  
  const title = post.seo?.metaTitle || post.title;
  const desc = post.seo?.metaDescription || post.excerpt || `${post.category} • ${new Date(post.date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })}`;
  const ogImage = post.image;
  
  return {
    title,
    description: desc,
    keywords: post.seo?.keywords?.join(', '),
    openGraph: {
      title,
      description: desc,
      type: "article",
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  let post;
  try {
    post = await getPostBySlug(slug);
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    return notFound();
  }
  
  if (!post) return notFound();

  const html = post.content;
  if (!html) return notFound();

  const toc = extractH2TOC(html);

  return (
    <div className="min-h-screen text-white font-sans" style={{
      background: 'radial-gradient(1400px 800px at 70% -10%, color-mix(in oklch, #2c56dd 35%, transparent), transparent), linear-gradient(180deg, #180d43 0%, #0b0d2a 65%)'
    }}>
      <Header />

      <main className="relative">
        {/* Blog Post Container */}
        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Title */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {post.title}
            </h1>
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="mb-8">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  priority
                />
              </div>
            </div>
          )}

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              By {post.author || 'Altiora Team'}
            </span>
            <span>•</span>
            <span>
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </span>
            <span>•</span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600 text-white">
              {post.category}
            </span>
            <span>•</span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-600 text-white">
              Published
            </span>
          </div>

          {/* Excerpt */}
          {post.excerpt && (
            <div className="mb-8">
              <p className="text-lg md:text-xl text-gray-300 italic leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          )}

          {/* Main Content */}
          <div className="prose prose-lg prose-invert max-w-none mb-12">
            <div 
              className={styles.proseBlog}
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
            />
          </div>

          {/* Additional Images Gallery */}
          {post.images && post.images.length > 0 && (
            <section className="mb-12">
              
              <div className="grid grid-cols-1 gap-8">
                {post.images.map((image) => (
                  <div key={image.id} className="space-y-4">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                      <Image 
                        src={image.url} 
                        alt={image.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                      />
                    </div>
                    {image.caption && (
                      <p className="text-sm text-gray-400 italic text-center">{image.caption}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Dynamic Content Sections */}
          {post.contentSections && post.contentSections.length > 0 && (
            <section className="mb-12">
              <div className="space-y-8">
                {post.contentSections.map((section) => (
                  <div key={section.id} className="border-l-4 border-blue-500 pl-6">
                    {section.type === 'title' ? (
                      <h2 
                        className="text-2xl font-bold mb-4"
                        style={{
                          fontSize: `${section.fontSize || 24}px`,
                          fontWeight: section.fontWeight || 'bold',
                          textAlign: section.textAlign || 'left',
                          color: section.color || '#ffffff'
                        }}
                      >
                        {section.value || 'Untitled Section'}
                      </h2>
                    ) : (
                      <div 
                        className="prose prose-invert max-w-none"
                        style={{
                          fontSize: `${section.fontSize || 16}px`,
                          fontWeight: section.fontWeight || 'normal',
                          textAlign: section.textAlign || 'left',
                          color: section.color || '#ffffff'
                        }}
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(section.value || '<p>No content</p>') }} 
                      />
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Table of Contents - Mobile/Tablet */}
          {toc.length >= 2 && (
            <section className="mb-12 lg:hidden">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
                <ul className="space-y-2">
                  {toc.map((t) => (
                    <li key={t.id}>
                      <a
                        href={`#${t.id}`}
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        {t.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Navigation */}
          <nav className="pt-8 border-t border-gray-700">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to all posts
            </Link>
          </nav>
        </article>

        {/* Table of Contents - Desktop Sidebar */}
        {toc.length >= 2 && (
          <aside className="hidden lg:block fixed top-1/2 right-8 transform -translate-y-1/2 w-64">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 backdrop-blur-sm">
              <h3 className="text-sm font-semibold mb-4 text-gray-300 uppercase tracking-wider">
                On this page
              </h3>
              <ul className="space-y-2 text-sm">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a
                      href={`#${t.id}`}
                      className="block py-1 text-gray-400 hover:text-blue-400 transition-colors border-l-2 border-transparent hover:border-blue-400 pl-3"
                    >
                      {t.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        )}
      </main>

      <Footer />
    </div>
  );
}
