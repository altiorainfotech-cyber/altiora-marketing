"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/data/blog";

type BlogClientProps = {
  posts: BlogPost[];
  error?: string | null;
  onRetry?: () => void;
};

export default function BlogClient({ posts, error, onRetry }: BlogClientProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const set = new Set<string>(posts.map((p) => p.category));
    return ["All", ...Array.from(set).sort()];
  }, [posts]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery =
        q.length === 0 ||
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [posts, query, category]);

  return (
    <div>
      {/* Search & Filter Controls */}
      <div className="mb-12">
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mb-6">
          {/* Search */}
          <div className="flex-1">
            <label className="relative block" aria-label="Search blog posts">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                  <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
              <input
                type="search"
                placeholder="Search articles, topics..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-xl border border-gray-700 bg-gray-800/50 pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </label>
          </div>

          {/* Results count */}
          <div className="text-gray-400 whitespace-nowrap">
            {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
          </div>
        </div>

        {/* Category filter */}
        <div className="overflow-x-auto">
          <div className="flex items-center gap-3 min-w-max pb-2">
            {categories.map((c) => {
              const isActive = c === category;
              return (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={
                    "whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition-all " +
                    (isActive
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-800/50 border border-gray-700 text-gray-300 hover:bg-gray-700/50 hover:border-gray-600")
                  }
                  aria-pressed={isActive}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filtered.map((post) => (
          <Link
            key={post.id}
            href={post.href}
            className="group block bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-[1.02]"
          >
            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Metadata */}
              <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-600/20 text-blue-400 border border-blue-600/30">
                  {post.category}
                </span>
                <span>
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-xl leading-tight text-white group-hover:text-blue-400 transition-colors mb-3 line-clamp-2">
                {post.title}
              </h3>

              {/* Read more indicator */}
              <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                Read article
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Error state */}
      {error && posts.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-red-400">
              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-red-300 text-lg">Unable to load blog posts</p>
          <p className="text-red-400/70 text-sm mt-1">{error}</p>
          <button 
            onClick={onRetry || (() => window.location.reload())} 
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-red-500/20 border border-red-500/30 px-4 py-2 text-sm text-red-300 hover:bg-red-500/30 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-red-400">
              <path d="M1 4v6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Try again
          </button>
        </div>
      )}

      {/* No results state (when no error but no posts match filters) */}
      {!error && filtered.length === 0 && posts.length > 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 flex items-center justify-center mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/40">
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <p className="text-white/70 text-lg">No posts match your search</p>
          <p className="text-white/50 text-sm mt-1">Try adjusting your filters or search terms</p>
        </div>
      )}

      {/* Empty state (when no error and no posts at all) */}
      {!error && posts.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 flex items-center justify-center mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/40">
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-white/70 text-lg">No blog posts available</p>
          <p className="text-white/50 text-sm mt-1">Check back soon for new content</p>
        </div>
      )}
    </div>
  );
}


