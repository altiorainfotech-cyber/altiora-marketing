"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

/*******************************
 * AICarouselSection (Klypto style)
 * Save as: /src/components/AICarouselSection.tsx
 *******************************/
export function AICarouselSection() {
  type Slide = { title: string; image: string; description: string };
  const slides: Slide[] = [
    {
      title: "Cloud & DevOps for AI",
      image: "/images/ai/cloud-and-dev.webp",
      description:
        "Smarter cloud infrastructure with AI‑driven DevOps pipelines for seamless, efficient deployments.",
    },
    {
      title: "AI‑Infused Web & Mobile Applications",
      image: "/images/ai/ai-infused.webp",
      description:
        "Elevate every interaction with personalization, automation, and predictive analytics.",
    },
    {
      title: "End‑to‑End AI Software Development",
      image: "/images/ai/End-to-End-to-Software-development-D5mpsnIs.webp",
      description:
        "From ideation to deployment, we build AI‑integrated products designed for scale and speed.",
    },
    {
      title: "Data Science & AI Analytics",
      image: "/images/ai/data-scince-BVXbDh9p.webp",
      description:
        "Turn complex data into actionable intelligence with growth‑focused advanced analytics.",
    },
    {
      title: "Agentic AI Solutions",
      image: "/images/ai/agentic-ai-solutions.webp",
      description:
        "Boost productivity with AI agents that automate tasks and provide real‑time context.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Auto-rotate every 5s
  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setCurrent((p) => (p + 1) % slides.length);
  const go = (i: number) => setCurrent(i);

  // compute 3 visible items (current + next 2)
  const visible = Array.from({ length: 3 }, (_, i) => slides[(current + i) % slides.length]);

  const onTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.touches[0].clientX);
  const onTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    if (touchStart - touchEnd > 75) next();
    if (touchStart - touchEnd < -75) prev();
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="px-6 py-16 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Why a Well‑Developed Platform Matters</h2>
          <p className="mt-4 text-white/80 max-w-3xl mx-auto leading-relaxed">
            Businesses thrive on intelligence, adaptability, and scale. AI‑based solutions simplify
            management, improve decision‑making, and deliver effortless experiences that unlock
            sustainable growth.
          </p>
        </div>

        <div
          className="relative select-none"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Arrows (hidden on small) */}
          <button
            onClick={prev}
            className="hidden md:grid place-items-center absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border backdrop-blur border-amber-300/40 bg-amber-300/20 text-amber-300 hover:border-amber-300 hover:bg-amber-300/40 transition"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="hidden md:grid place-items-center absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border backdrop-blur border-amber-300/40 bg-amber-300/20 text-amber-300 hover:border-amber-300 hover:bg-amber-300/40 transition"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {visible.map((s, idx) => (
              <div
                key={s.title + idx}
                className={`rounded-2xl border bg-[#1a1a3a] border-[rgba(52,144,243,0.35)] overflow-hidden transition-all ${
                  idx === 0 ? "opacity-100" : "opacity-80"
                } hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(52,144,243,0.25)] hover:border-[rgba(52,144,243,0.8)]`}
              >
                <div className="relative h-64">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold" style={{ color: "#3490F3" }}>
                    {s.title}
                  </h3>
                  <p className="mt-2 text-white/80 leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
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
                    active ? "w-10 bg-gradient-to-r from-amber-300 to-amber-500" : "w-3 bg-amber-300/40"
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


