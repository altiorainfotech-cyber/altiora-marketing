"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Reveal from "../ui/Reveal";
import { testimonials, type Testimonial } from "@/data/testimonials";

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-1" aria-label={`${n} star rating`}>
      {Array.from({ length: n }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="h-4 w-4 sm:h-5 sm:w-5 fill-[#F4C042]"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.28 5.83.85-4.22 4.11.99 5.78L10 14.97 4.8 17.52l.99-5.78L1.56 7.63l5.83-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function QuoteCard({ t }: { t: Testimonial }) {
  return (
    <article
      className={[
        "group relative rounded-2xl overflow-hidden shrink-0 snap-start",
        "w-[220px] sm:w-[260px] lg:w-[320px] xl:w-[360px]",
        "p-[1px] bg-gradient-to-br from-white/15 via-white/5 to-transparent",
        "hover:from-brand/40 hover:via-white/10 hover:to-transparent transition",
        "border border-white/10",
      ].join(" ")}
    >
      <div
        className={[
          "rounded-2xl h-full w-full",
          "bg-white/[0.04] backdrop-blur-sm",
          "shadow-lg shadow-black/20",
          "transition-transform duration-300 group-hover:-translate-y-0.5",
        ].join(" ")}
      >
        {/* make the inner content a vertical flex so the footer can stick to bottom */}
        <div className="p-5 sm:p-6 h-full flex flex-col">
          <Stars n={t.rating ?? 5} />

          {/* Fixed-height quote block: 6 lines on both breakpoints */}
          <p
            className="mt-3 sm:mt-4 text-[15px] sm:text-lg leading-7 sm:leading-8 text-white/90"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 6,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              // 6 * line-height => 6 * 1.75rem = 10.5rem; sm: 6 * 2rem = 12rem
              minHeight: "10.5rem",
            }}
          >
            “{t.quote}”
          </p>
          <style jsx>{`
            @media (min-width: 640px) {
              p[style] {
                min-height: 12rem !important;
              }
            }
          `}</style>

          {/* Author — pushed to bottom by mt-auto so all names align */}
          <div className="mt-auto pt-5 sm:pt-6 flex items-center gap-4">
            <div className="relative h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full ring-1 ring-white/20">
              <Image
                src={t.avatar}
                alt={`${t.name} avatar`}
                fill
                className="object-cover"
                sizes="48px"
                priority={false}
              />
            </div>
            <div>
              <div className="font-medium">{t.name}</div>
              <div className="text-sm text-white/60">
                {t.role}
                {t.company ? `, ${t.company}` : ""}
              </div>
            </div>
          </div>
        </div>

        {/* soft bottom gradient fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/10 to-transparent" />
      </div>
    </article>
  );
}

export default function ClientTestimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const perCardRef = useRef<number>(300);
  const cardsPerStepRef = useRef<number>(3);

  // Add a few Indian reviews (kept local so your data file stays clean)
  const extraIndia: Testimonial[] = [
    {
      id: "in-1",
      name: "Priya Sharma",
      role: "Product Lead",
      company: "FinNest",
      avatar: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/priya_fxjhiq.png",
      rating: 5,
      quote:
        "Altiora turned our messy roadmap into a clean, shippable plan. They delivered our Web3 MVP in weeks, not months—security-first and production-ready.",
    },
    {
      id: "in-2",
      name: "Rohit Mehta",
      role: "CTO",
      company: "DukaanHub",
      avatar: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/rohit_wog8m7.png",
      rating: 5,
      quote:
        "The team blends design sense with solid engineering. Smart contract reviews were crisp, and the AI integrations actually moved metrics, not just demos.",
    },
    {
      id: "in-3",
      name: "Ananya Iyer",
      role: "Founder",
      company: "CredLynk",
      avatar: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/ananya_cjctp5.png",
      rating: 5,
      quote:
        "We wanted speed without breaking things. Altiora’s playbooks, CI, and cloud baseline made our launch boring—in the best possible way.",
    },
  ];

  const allTestimonials: Testimonial[] = [...testimonials, ...extraIndia];

  const computeCardsPerStep = useCallback(() => {
    if (typeof window === "undefined") return 3;
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (vw < 640) return 3;
    if (vw < 1024) return 3;
    return 2;
  }, []);

  const measureCardPlusGap = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.children[0] as HTMLElement | undefined;
    if (!first) return;

    const rect = first.getBoundingClientRect();
    const styles = getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;

    perCardRef.current = rect.width + gap;
    cardsPerStepRef.current = computeCardsPerStep();
  }, [computeCardsPerStep]);

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

  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
      const node = scrollerRef.current;
      if (!node) return;
      const dir = e.deltaY > 0 ? 1 : -1;
      const step = perCardRef.current * cardsPerStepRef.current;
      node.scrollBy({ left: dir * step, behavior: "auto" });
    }
  };

  if (!allTestimonials.length) return null;

  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Client Testimonials</h2>
            <p className="mt-2 text-white/60">
              Wins we’re proud of—from design sprints to production launches.
            </p>
          </div>

          {/* desktop arrows */}
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scrollByCards(-1)}
              className="h-9 w-9 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              onClick={() => scrollByCards(1)}
              className="h-9 w-9 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand"
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
            aria-label="Client testimonials"
            data-hidebar
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pr-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onWheel={onWheel}
          >
            <div ref={trackRef} className="flex gap-4 sm:gap-6">
              {allTestimonials.map((t) => (
                <QuoteCard key={t.id} t={t} />
              ))}
            </div>
          </div>

          {/* mobile arrows */}
          <div className="sm:hidden mt-4 flex justify-center gap-3">
            <button
              onClick={() => scrollByCards(-1)}
              className="px-4 py-2 rounded-full border border-white/15 bg-white/5"
            >
              Prev
            </button>
            <button
              onClick={() => scrollByCards(1)}
              className="px-4 py-2 rounded-full border border-white/15 bg-white/5"
            >
              Next
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
