// src/app/blog/page.tsx
import type { Metadata } from "next";
import { convertToLegacyFormat, type LegacyBlogPost } from "@/lib/api";
import { fetchBlogPostsFromDB } from "@/lib/api-server";
import Image from "next/image";

// Global header + footer
import Header from "../../assets/Header";
import Footer from "../../assets/Footer";
import BlogWrapper from "./BlogWrapper";

export const metadata: Metadata = {
  title: "Technology & Growth Blog technology blog | Altiora Infotech",
  description:
    "Achieve faster outcomes through Altiora Infotech’s Technology & Growth Blog — your source for AI, Web3, and tech insights that drive innovation and scale securely.",
  openGraph: {
    title: "Technology & Growth Blog technology blog | Altiora Infotech",
    description:
      "Achieve faster outcomes through Altiora Infotech’s Technology & Growth Blog — your source for AI, Web3, and tech insights that drive innovation and scale securely.",
    type: "website",
  },
};

// Revalidate the page every 60 seconds to ensure fresh blog content
export const revalidate = 60;

export default async function BlogIndex() {
  // Fetch blog posts from API with error handling
  let blogPosts: LegacyBlogPost[] = [];
  let error: string | null = null;

  try {
    const response = await fetchBlogPostsFromDB({ limit: 50 }); // Get more posts for better UX
    blogPosts = response.data.posts.map(convertToLegacyFormat);
  } catch (err) {
    console.error('Failed to fetch blog posts:', err);
    error = err instanceof Error ? err.message : 'Failed to load blog posts';
    // Fallback to empty array - error handling will be shown in UI
  }

  const featuredPost = blogPosts[0];

  return (
    <div className="flex-grow"
    style={{
      background:
        "linear-gradient(180deg, #1a1f5a 0%, #0a133b 50%, #050510 100%)",
    }}>
      <Header />

      {/* Cover Image Section */}
      <section className="relative h-[40vh] sm:h-[44vh] md:h-[48vh]">
        <Image
          src="/images/about/blog.jpg"
          alt="Blog — Insights on Web3, AI, and Product Engineering"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000929]/70 via-[#0a133b]/70 to-[#050510]/80" />
        
        <div className="relative z-10 h-full w-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-800/50 border border-gray-700 px-4 py-2 text-sm text-gray-300 mb-4">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Latest Insights
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-3 drop-shadow">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ideas shaping the future
              </span>
            </h1>
            <p className="text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
              Thoughtful perspectives on Web3, AI, and modern product development from our team.
            </p>
          </div>
        </div>
        
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </section>

      <main className="relative px-6 pb-24 pt-16">
        <div className="mx-auto max-w-6xl">

          {/* Error message */}
          {error && (
            <div className="mb-12 mx-auto max-w-2xl">
              <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6 text-center">
                <p className="text-red-300 text-lg">
                  Unable to load blog posts: {error}
                </p>
                <p className="text-red-400/70 text-sm mt-2">
                  Please try refreshing the page or check back later.
                </p>
              </div>
            </div>
          )}

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-16">
              <div className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Featured content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600/20 text-blue-400 border border-blue-600/30">
                        Featured
                      </span>
                      <span className="text-gray-400 text-sm">Latest post</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl text-white font-bold leading-tight mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-400 mb-6">
                      {featuredPost.category} • {new Date(featuredPost.date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                    <div>
                      <a 
                        href={featuredPost.href} 
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white font-medium transition-colors"
                      >
                        Read article
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Featured image */}
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog grid with search/filter */}
          <div>
            <BlogWrapper initialPosts={blogPosts} initialError={error} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
