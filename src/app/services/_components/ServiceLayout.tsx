"use client";

import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import Link from "next/link";
import { ReactNode } from "react";

export default function ServiceLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#010c22] text-[#F8FBFB]">
      <Header />
      <main
        className="flex-grow px-6 pt-28 pb-20 text-white"
        style={{
          background:
            "linear-gradient(180deg, #1a1f5a 0%, #0a133b 50%, #050510 100%)",
        }}
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="uppercase tracking-[0.2em] text-xs text-slate-200/80">
              Services
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white drop-shadow-lg">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-4 text-slate-100 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
                {subtitle}
              </p>
            ) : null}
          </div>
          <div className="mt-10 prose prose-invert prose-p:leading-relaxed prose-headings:scroll-mt-24 max-w-none">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function NextPrevNav({
  prev,
  next,
}: {
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
}) {
  return (
    <div className="mt-12 flex items-center justify-between gap-4">
      <div>
        {prev ? (
          <Link
            href={prev.href}
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] hover:bg-white/[0.12] px-4 py-2 transition"
          >
            <span>←</span>
            <span>{prev.label}</span>
          </Link>
        ) : <span />}
      </div>
      <div>
        {next ? (
          <Link
            href={next.href}
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] hover:bg-white/[0.12] px-4 py-2 transition"
          >
            <span>{next.label}</span>
            <span>→</span>
          </Link>
        ) : <span />}
      </div>
    </div>
  );
}
