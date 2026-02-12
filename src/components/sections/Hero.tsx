"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Stat from "@/components/ui/Stat";
import Reveal from "@/components/ui/Reveal";
import { stats } from "@/data/site";
import { getOptimizedImageUrl } from "@/lib/cloudinary";

// Simple Cat Ears Component
function CatEars() {
  return (
    <div className="fixed top-4 right-4 z-50 pointer-events-none">
      <div className="relative w-16 h-12">
        {/* Left Ear */}
        <div className="absolute left-0 top-0 w-6 h-8 bg-gradient-to-br from-[#7c69ef] to-[#5a4fcf] rounded-t-full transform rotate-12 shadow-lg" />
        {/* Right Ear */}
        <div className="absolute right-0 top-0 w-6 h-8 bg-gradient-to-br from-[#7c69ef] to-[#5a4fcf] rounded-t-full transform -rotate-12 shadow-lg" />
        {/* Inner Ears */}
        <div className="absolute left-1 top-1 w-3 h-5 bg-gradient-to-br from-[#9d8ff5] to-[#7c69ef] rounded-t-full transform rotate-12" />
        <div className="absolute right-1 top-1 w-3 h-5 bg-gradient-to-br from-[#9d8ff5] to-[#7c69ef] rounded-t-full transform -rotate-12" />
      </div>
    </div>
  );
}

type KPI = { k: number; v: string; prefix?: string; suffix?: string };

const HERO_VIDEO = "/videos/large-vecteezy_blue-space-abstract-molecular-dot-geometric-structure-space_15098045_large.mp4";

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  const KPIS = stats as unknown as KPI[];

  return (
    <section
      ref={rootRef}
      id="hero"
      className="relative isolate overflow-hidden px-6 text-white min-h-screen flex flex-col justify-center pt-20 sm:pt-24"
      style={{ background: "#0b0d2a" }}
    >
      {/* BG */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>

        {/* Darker mask */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(0,0,0,0.45)" }}
        />
      </div>

      {/* Cat Ears */}
      <CatEars />

      {/* Content */}
      <div className="relative z-30 w-full max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Upper label */}
        <p className="uppercase tracking-[0.28em] text-sm text-white/80">
          altiora infotech
        </p>

        <h1 className="mt-3 mx-auto font-semibold tracking-tight text-4xl sm:text-6xl leading-tight max-w-5xl">
          Growth Acceleration Through
          <br />
          Digital Marketing, Blockchain,<br/> AI & Software Engineering
        </h1>

        <p className="mt-6 text-lg text-white/85 max-w-4xl mx-auto">
          Engineering, security, and growth—aligned to ship faster.
        </p>

        <Reveal className="mt-8 flex flex-wrap gap-4 justify-center items-center">
          {/* GOLD button */}
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 font-medium text-[#0b0d2a] bg-[#F4CC6F] shadow-[0_12px_50px_rgba(244,204,111,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_60px_rgba(244,204,111,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4CC6F]/60"
          >
            Explore Solutions
          </Link>

          {/* <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 font-medium border border-white/30 bg-white/[0.12] hover:bg-white/[0.18] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >

          </Link> */}
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          {KPIS.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/15 bg-black/30 backdrop-blur-sm p-5 text-left"
            >
              <Stat
                value={s.k}
                prefix={s.prefix}
                suffix={s.suffix}
                label={s.v}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
