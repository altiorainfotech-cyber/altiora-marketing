
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";


export function SolutionsCarousel() {
  type Stat = { value: string; label: string };
  type Slide = { title: string; image: string; description: string; stats: Stat[] };

  const slides: Slide[] = [
    {
      title: "Making Website Bug‑Free with AI",
      image: "/images/ai/4.webp",
      description:
        "We built a fast, modern, automated bug tracker for web and mobile. AI reduces repetitive tasks, improves reporting accuracy, and saves time for QA teams to focus on fixes.",
      stats: [
        { value: "10K+", label: "Bugs logged" },
        { value: "60K", label: "Users" },
        { value: "40M", label: "Requests served" },
      ],
    },
    {
      title: "Smarter Procurement with AI",
      image: "/images/ai/2.webp",
      description:
        "We delivered an AI‑powered procurement platform that automates vendor discovery, matches RFQs using NLP, and enriches supplier data for faster, data‑driven decisions.",
      stats: [
        { value: "2K+", label: "Requests served" },
        { value: "70%", label: "faster RFQ cycle" },
        { value: "30%", label: "lower sourcing cost" },
      ],
    },
    {
      title: "AI‑Powered Retail Discovery",
      image: "/images/ai/3.webp",
      description:
        "An AI discovery engine with chat and image search. Auto‑generated descriptions, streamlined catalog uploads, and better local search for users.",
      stats: [
        { value: "10K+", label: "listings enhanced" },
        { value: "60%", label: "faster onboarding" },
        { value: "40%", label: "search accuracy gain" },
      ],
    },
    {
      title: "Online Testing & Student Management",
      image: "/images/ai/1.webp",
      description:
        "A scalable testing platform with real‑time results, role‑based access, notifications, and event tracking to manage performance intelligently.",
      stats: [
        { value: "20K+", label: "Enrolments" },
        { value: "25K+", label: "Files stored" },
        { value: "3+", label: "Years of usage" },
      ],
    },
  ];

  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 10000);
    return () => clearInterval(id);
  }, [slides.length]);

  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setCurrent((p) => (p + 1) % slides.length);
  const go = (i: number) => setCurrent(i);

  const onTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.touches[0].clientX);
  const onTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    if (touchStart - touchEnd > 75) next();
    if (touchStart - touchEnd < -75) prev();
    setTouchStart(null);
    setTouchEnd(null);
  };

  const slide = slides[current];

  return (
    <section className="px-6 py-16 ">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl sm:text-3xl font-bold tracking-tight text-white mb-8">
          Here&apos;s How Altiora&apos;s AI Solutions Help Businesses Like Yours
        </h2>

        <div
          className="relative select-none rounded-3xl p-6 sm:p-10 bg-[linear-gradient(135deg,#2a5298_0%,#1e3c72_100%)] overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Arrows */}
          <button
            onClick={prev}
            className="grid place-items-center absolute left-3 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 transition"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="grid place-items-center absolute right-3 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 transition"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Image + Stats */}
            <div className="lg:col-span-5">
              <div className="relative h-[320px] sm:h-[360px] rounded-2xl overflow-hidden border border-white/20 bg-white/10">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>

              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {slide.stats.map((st) => (
                  <div
                    key={st.label}
                    className="min-w-[110px] rounded-xl px-4 py-3 text-center border border-white/25 bg-white/10 backdrop-blur"
                  >
                    <div className="text-xl font-bold text-white">{st.value}</div>
                    <div className="text-xs text-white/80">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7">
              <h3 className="text-white font-semibold text-2xl" style={{ color: "#64B5F6" }}>
                {slide.title}
              </h3>
              <p className="mt-4 text-white/90 text-base sm:text-lg leading-relaxed text-justify">
                {slide.description}
              </p>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {slides.map((_, i) => {
              const active = i === current;
              return (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`h-3 rounded-full transition-all ${
                    active ? "w-10 bg-gradient-to-r from-[#64B5F6] to-[#2196F3]" : "w-3 bg-[#64B5F6]/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


 
