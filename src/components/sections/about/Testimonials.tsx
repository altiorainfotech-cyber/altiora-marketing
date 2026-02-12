"use client";

import { useRef } from "react";
import Reveal from "../../ui/Reveal";
import { testimonials } from "../../../data/about";

export default function AboutTestimonials() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = ref.current;
    if (!el) return;
    const width = el.querySelector<HTMLElement>("[data-card]")?.offsetWidth || 320;
    el.scrollBy({ left: (dir === "left" ? -1 : 1) * (width + 24), behavior: "smooth" });
  };

  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold">Happy Clients</h2>
          <div className="flex gap-2">
            <button onClick={() => scroll("left")} className="rounded-full border border-white/20 px-3 py-1.5 text-sm hover:bg-white/10">←</button>
            <button onClick={() => scroll("right")} className="rounded-full border border-white/20 px-3 py-1.5 text-sm hover:bg-white/10">→</button>
          </div>
        </div>

        <div
          ref={ref}
          className="mt-6 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <style jsx>{`div::-webkit-scrollbar{display:none}`}</style>
          {testimonials.map((t, i) => (
            <Reveal
              key={i}
              className="snap-start min-w-[300px] sm:min-w-[360px] rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-white/80">{t.quote}</div>
              <div className="mt-3 text-sm text-white/60">— {t.author}, {t.company}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
