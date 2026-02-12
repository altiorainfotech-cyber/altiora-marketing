// src/app/about/page.tsx
"use client";

import Image from "next/image";
import Header from "../../assets/Header";
import Footer from "../../assets/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#010c22] text-[#F8FBFB]">
      <Header />

      <main
        className="flex-grow"
        style={{
          background:
            "linear-gradient(180deg, #1a1f5a 0%, #0a133b 50%, #050510 100%)",
        }}
      >
        {/* HERO */}
        <section className="relative h-[40vh] sm:h-[44vh] md:h-[48vh]">
          <Image
            src="/images/about/hero.jpg"
            alt="Altiora Infotech — About Us"
            fill
            priority
            className="object-cover"
          />
          {/* blue gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#000929]/70 via-[#0a133b]/70 to-[#050510]/80" />

          {/* heading */}
          <div className="relative z-10 h-full w-full flex items-center justify-center text-center px-6">
            <div className="max-w-4xl">
              <p className="uppercase tracking-[0.22em] text-xs sm:text-[13px] text-white/80">
                About Us
              </p>
              <h1 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight drop-shadow">
                Altiora Infotech
              </h1>
              <p className="mt-4 text-white/85 text-base sm:text-lg leading-relaxed">
                A Growth & Acceleration Studio helping ambitious teams turn
                strategy into production-grade products across Web, Mobile, AI,
                and Web3.
              </p>
            </div>
          </div>

          {/* subtle bottom line */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </section>

        {/* INTRO STRIP (stats) */}
        <section className="px-6">
          <div className="mx-auto max-w-6xl">
            <div className="relative -mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 rounded-2xl border border-white/15 bg-white/[0.05] backdrop-blur-sm p-4 sm:p-6">
              {[
                { k: "Projects", v: "80+" },
                { k: "Domains", v: "5+" },
                { k: "Avg. ROI", v: "3–5×" },
                { k: "Uptime", v: "99.9%" },
              ].map((s) => (
                <div key={s.k} className="text-center">
                  <div className="text-xl sm:text-2xl font-semibold text-white">{s.v}</div>
                  <div className="mt-1 text-xs sm:text-sm text-white/70 uppercase tracking-wider">
                    {s.k}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BODY */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl space-y-16">
            {/* WHAT WE DO */}
            <section>
              <div className="max-w-5xl">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  What We Do
                </h2>
                <div className="mt-3 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#7aa2ff] via-[#98b7ff] to-[#2c56dd]" />
                <p className="mt-5 text-white/85 leading-relaxed">
                  We are more than a technology partner—we are a Growth and
                  Acceleration Studio. We build platforms, automation workflows,
                  and experience-driven products using full-stack engineering, AI
                  & Machine Learning, Blockchain, and Web3. From MVPs and SaaS to
                  enterprise integrations and revenue engines, every sprint aligns
                  to clear growth metrics: acquisition, activation, retention, or
                  ROI.
                </p>
              </div>
            </section>

            {/* HOW WE WORK */}
            <section>
              <div className="max-w-5xl">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  How We Work
                </h2>
                <div className="mt-3 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#7aa2ff] via-[#98b7ff] to-[#2c56dd]" />
                <p className="mt-5 text-white/85 leading-relaxed">
                  Our model blends discovery, rapid prototyping, and disciplined
                  execution. We combine technical complexity with business context
                  to deliver clarity to founders and reliability to enterprises.
                  The result is consistent: stable systems, cleaner funnels, and
                  multi-layered growth. Acceleration isn’t about speed alone—it’s
                  about correctness, roadmaps, measurement, and sustainable
                  delivery where each release moves the needle.
                </p>
              </div>
            </section>

            {/* VISION & MISSION (side-by-side) */}
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Vision */}
                <div className="rounded-2xl border border-white/15 bg-white/[0.05] p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="inline-grid place-items-center h-10 w-10 rounded-xl bg-white/10 ring-1 ring-white/15">
                      {/* eye/target icon */}
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M12 5c5 0 8.5 4 10 7-1.5 3-5 7-10 7S3.5 15 2 12c1.5-3 5-7 10-7Z" stroke="currentColor" strokeOpacity=".9" strokeWidth="1.5"/>
                        <circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeOpacity=".9" strokeWidth="1.5"/>
                      </svg>
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold">Vision</h3>
                  </div>
                  <p className="mt-4 text-white/85 leading-relaxed">
                    To be the trusted catalyst turning radical ideas into repeatable
                    products—where technology, creativity, and business outcomes meet.
                  </p>
                </div>

                {/* Mission */}
                <div className="rounded-2xl border border-white/15 bg-white/[0.05] p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="inline-grid place-items-center h-10 w-10 rounded-xl bg-white/10 ring-1 ring-white/15">
                      {/* rocket icon */}
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M14 3c3 0 7 4 7 7-3.5 1-6.5 3.5-8.5 6.5C10 18 8 20 7 21c1-2 1-4 1.5-5.5C11.5 13.5 14 10.5 14 7V3Z" stroke="currentColor" strokeOpacity=".9" strokeWidth="1.5"/>
                        <path d="M6 13l-3 3 4 1 1 4 3-3" stroke="currentColor" strokeOpacity=".9" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold">Mission</h3>
                  </div>
                  <p className="mt-4 text-white/85 leading-relaxed">
                    To accelerate modern organizations through strategic insight and
                    high-quality engineering and design. Our solutions are predictable,
                    reliable, and maintainable—reducing time-to-value, minimizing
                    implementation risk, and creating sustainable competitive advantage.
                  </p>
                </div>
              </div>
            </section>

            {/* EXPERIENCE */}
            <section>
              <div className="max-w-5xl">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Experience & Impact
                </h2>
                <div className="mt-3 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#7aa2ff] via-[#98b7ff] to-[#2c56dd]" />
                <p className="mt-5 text-white/85 leading-relaxed">
                  With 80+ projects delivered across real estate, finance,
                  healthcare, e-commerce, and consumer services, we operate as an
                  embedded partner to your team—clarifying the problem, focusing on
                  what matters, and shipping with rigor.
                </p>
              </div>
            </section>

            {/* WHY ALTIORA – expanded */}
            <section>
              <div className="max-w-5xl">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Why Altiora
                </h2>
                <div className="mt-3 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#7aa2ff] via-[#98b7ff] to-[#2c56dd]" />
                <p className="mt-5 text-white/85 leading-relaxed">
                  We win when your numbers move. Our approach is pragmatic, transparent,
                  and built for outcomes—not vanity metrics.
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Outcome-aligned roadmaps tied to growth KPIs (AARRR, LTV/CAC, cycle time).",
                    "High-signal discovery → prototypes you can test in days, not months.",
                    "Engineering discipline: code quality gates, CI/CD, observability by default.",
                    "Performance & SEO baked-in: Core Web Vitals, schema, edge caching.",
                    "Security first: secrets hygiene, least-privilege access, threat-modeling sprints.",
                    "Clear comms: weekly demos, written updates, shared dashboards.",
                    "Own your stack: no lock-in—portable infra, documented handoffs.",
                    "Iterate responsibly: analytics, A/B tests, guardrails for AI features.",
                  ].map((line) => (
                    <div
                      key={line}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#7aa2ff] ring-2 ring-white/20" />
                      <p className="text-sm sm:text-[15px] text-white/90">{line}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-white/95 font-semibold">
                  Altiora Infotech — Elevating Ideas, Accelerating Growth.
                </p>
              </div>
            </section>

            {/* CTA STRIP */}
            <section>
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-r from-[#1a2468] via-[#2a3ea9] to-[#0b1749] p-6 sm:p-8">
                <div className="absolute inset-0 opacity-25 bg-[radial-gradient(1200px_600px_at_10%_-20%,rgba(255,255,255,0.25),transparent_60%)]" />
                <div className="relative">
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    Ready to plan your next sprint?
                  </h3>
                  <p className="mt-2 text-white/85 max-w-2xl">
                    Tell us your goals—shipping a new MVP, modernizing a legacy
                    system, or rolling out AI automation—and we’ll craft a plan
                    you can execute this quarter.
                  </p>
                  <a
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  >
                    Let’s talk
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M7 12h10M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
