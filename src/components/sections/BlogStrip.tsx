"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../ui/Reveal";
import { fetchBlogPosts, type BlogPost } from "@/lib/api";

const fmtDate = (iso: string) => {
  const d = new Date(iso.endsWith("Z") ? iso : `${iso}T00:00:00Z`);
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  }).format(d);
};

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={post.href}
      className="
        group snap-start shrink-0
        w-[220px] sm:w-[260px] lg:w-[320px] xl:w-[360px]
        rounded-2xl border border-border bg-white/5
        hover:bg-white/10 overflow-hidden transition
        focus:outline-none focus:ring-2 focus:ring-brand
      "
    >
      <div className="relative aspect-[16/10] sm:aspect-[16/9]">
        <Image src={post.image} alt={post.title} fill className="object-cover" sizes="220px" />
        <span className="absolute top-3 right-3 text-xs rounded-full border border-border bg-white/10 px-3 py-1">
          Read →
        </span>
      </div>
      <div className="p-4 sm:p-5">
        <div className="text-[11px] tracking-[0.14em] uppercase text-muted">{post.category}</div>
        <div className="mt-1 font-medium line-clamp-2">{post.title}</div>
        <div className="mt-2 text-xs text-muted">{fmtDate(post.date)}</div>
      </div>
    </Link>
  );
}

export default function BlogStrip() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const perCardRef = useRef<number>(300); // fallback
  const cardsPerStepRef = useRef<number>(3); // how many cards to jump
  
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // decide how many cards to jump based on viewport
  const computeCardsPerStep = useCallback(() => {
    if (typeof window === "undefined") return 3;
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (vw < 640) return 3;   // mobile
    if (vw < 1024) return 3;  // tablet
    return 2;                 // desktop
  }, []);

  // measure one card + gap to know exact scroll distance
  const measureCardPlusGap = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.children[0] as HTMLElement | undefined;
    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const styles = getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;

    perCardRef.current = cardWidth + gap;
    cardsPerStepRef.current = computeCardsPerStep();
  }, [computeCardsPerStep]);

  // Fetch blog posts from API
  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        setLoading(true);
        const response = await fetchBlogPosts({ limit: 6 }); // Get latest 6 posts
        setBlogPosts(response.data.posts);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load blog posts');
        setBlogPosts([]);
      } finally {
        setLoading(false);
      }
    };

    loadBlogPosts();
  }, []);

  useEffect(() => {
    measureCardPlusGap();
    const onR = () => measureCardPlusGap();
    window.addEventListener("resize", onR);
    window.addEventListener("orientationchange", onR);
    return () => {
      window.removeEventListener("resize", onR);
      window.removeEventListener("orientationchange", onR);
    };
  }, [measureCardPlusGap]);

  const scrollByCards = (dir: -1 | 1) => {
    const node = scrollerRef.current;
    if (!node) return;
    const step = perCardRef.current * cardsPerStepRef.current;
    node.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  // wheel handler: vertical wheel scrolls horizontally by multiple cards
  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
      const node = scrollerRef.current;
      if (!node) return;
      const dir = e.deltaY > 0 ? 1 : -1;
      const step = perCardRef.current * cardsPerStepRef.current;
      node.scrollBy({ left: dir * step, behavior: "auto" });
    }
  };

  if (loading) {
    return (
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold">Blog</h2>
          <div className="mt-6 flex gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-[320px] h-[240px] bg-white/5 rounded-2xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold">Blog</h2>
          <div className="mt-6 p-6 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-red-400">Failed to load blog posts: {error}</p>
            <p className="text-sm text-red-300 mt-2">Please check the admin panel connection.</p>
          </div>
        </div>
      </section>
    );
  }

  if (!blogPosts.length) {
    return (
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold">Blog</h2>
          <div className="mt-6 p-6 bg-white/5 border border-white/10 rounded-lg text-center">
            <p className="text-white/60">No blog posts available.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-semibold">Blog</h2>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scrollByCards(-1)}
              className="h-9 w-9 rounded-full border border-border bg-white/5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              onClick={() => scrollByCards(1)}
              className="h-9 w-9 rounded-full border border-border bg-white/5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>

        <Reveal className="mt-6 relative">
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-bg to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-bg to-transparent" />

          <style>{`[data-hidebar]::-webkit-scrollbar { display: none; }`}</style>

          <div
            ref={scrollerRef}
            role="region"
            aria-label="Latest blog posts"
            data-hidebar
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pr-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onWheel={onWheel}
          >
            <div ref={trackRef} className="flex gap-4 sm:gap-6">
              {blogPosts.map((p) => (
                <BlogCard key={p.id} post={p} />
              ))}
            </div>
          </div>

          {/* mobile arrows */}
          <div className="sm:hidden mt-4 flex justify-center gap-3">
            <button onClick={() => scrollByCards(-1)} className="px-4 py-2 rounded-full border border-border bg-white/5">
              Prev
            </button>
            <button onClick={() => scrollByCards(1)} className="px-4 py-2 rounded-full border border-border bg-white/5">
              Next
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
