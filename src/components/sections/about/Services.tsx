"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "../../ui/Reveal";
import { services } from "../../../data/about";

export default function AboutServices() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>("[data-card]")?.offsetWidth || 320;
    el.scrollBy({ left: (dir === "left" ? -1 : 1) * (cardWidth + 24), behavior: "smooth" });
  };

  return (
    <section className="px-6 py-12 border-y border-white/10 bg-[#000614]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold tracking-wide uppercase text-white/80">
            Other Products & Services
          </h2>
          <div className="flex gap-2">
            <button
              aria-label="Scroll left"
              onClick={() => scrollByCards("left")}
              className="rounded-full border border-white/20 px-3 py-1.5 text-sm hover:bg-white/10"
            >
              ←
            </button>
            <button
              aria-label="Scroll right"
              onClick={() => scrollByCards("right")}
              className="rounded-full border border-white/20 px-3 py-1.5 text-sm hover:bg-white/10"
            >
              →
            </button>
          </div>
        </div>

        {/* Horizontal cards */}
        <div
          ref={scrollerRef}
          className="mt-6 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{ scrollbarWidth: "none" }}
        >
          {/* hide scrollbars (webkit) */}
          <style jsx>{`
            div::-webkit-scrollbar { display: none; }
          `}</style>

          {services.map((s, i) => (
            <Reveal
              key={i}
              className="snap-start min-w-[300px] sm:min-w-[360px] rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <Link href={s.href} className="block focus:outline-none focus:ring-2 focus:ring-[#4BD3A5] rounded-2xl">
                <div className="p-5 flex items-start gap-4">
                  <div className="shrink-0 rounded-xl bg-black/30 p-4 border border-white/10">
                    {/* prefer real svg/png in /public/icons */}
                    <Image src={s.icon} alt="" width={32} height={32} className="invert opacity-90" />
                  </div>
                  <div>
                    <div className="inline-block text-xs uppercase tracking-wide bg-white/10 px-2 py-0.5 rounded">
                      {s.badge}
                    </div>
                    <h3 className="mt-2 text-lg font-medium">{s.title}</h3>
                    <p className="text-sm text-white/70 mt-1">{s.desc}</p>
                    <span className="mt-3 inline-block underline text-[#1D5AC9]">Explore →</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
