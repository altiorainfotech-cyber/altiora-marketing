"use client";

import Link from "next/link";
import Reveal from "../ui/Reveal";

export default function Products() {
  return (
    <section
      id="about-intro"
      className="px-6 py-16 border-y border-white/10 bg-[#000614] relative overflow-hidden"
    >
      {/* soft background glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -right-24 h-[520px] w-[520px] rounded-full blur-[140px] opacity-20"
             style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(67,98,209,.55), rgba(67,98,209,0))" }} />
        <div className="absolute -bottom-24 -left-24 h-[420px] w-[420px] rounded-full blur-[140px] opacity-15"
             style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(196,148,46,.45), rgba(196,148,46,0))" }} />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            About <span className="text-brand">Us</span>
          </h2>

          {/* optional CTAs; tweak routes as needed */}
          <div className="hidden sm:flex gap-2">
            <Link
              href="/about"
              className="rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
            >
              Explore →
            </Link>
            {/* <Link
              href="/contact"
              className="rounded-full bg-brand text-white px-4 py-2 text-sm hover:opacity-90"
            >
              Let’s Build Together
            </Link> */}
          </div>
        </div>

        {/* Copy */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 sm:p-8">
            <p className="text-white/80 leading-relaxed">
              In the modern dynamic world, technology alone is not sufficient—innovation drives growth, scale, and sustainability in organizations. We design and create products that drive business results today.
              We have experience in web development, mobile and desktop applications, enterprise software, blockchain
              ecosystems and AI-based solutions. In industries, we provide secure, scalable, customer-friendly platforms that
              enhance performance and spur quantifiable growth. With every strategy, delivery and onwards to optimization we
              work collaboratively to turn great ideas into trustworthy, high-performance experiences that respond to your ambitions.
            </p>

            {/* mobile CTAs */}
            <div className="mt-6 sm:hidden flex gap-2">
              <Link
                href="/about"
                className="flex-1 rounded-full border border-white/20 px-4 py-2 text-sm text-center hover:bg-white/10"
              >
                AboutUs
              </Link>
              {/* <Link
                href="/contact"
                className="flex-1 rounded-full bg-brand text-white px-4 py-2 text-sm text-center hover:opacity-90"
              >
                Let’s Build Together
              </Link> */}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
