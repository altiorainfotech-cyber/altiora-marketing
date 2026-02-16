"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
// import { getImageUrl } from "@/lib/cloudinary";

const socials = [
  {
    name: "x",
    href: "https://x.com/altiorainfotech",
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path fill="currentColor" d="M3,3l7.5,9.1L3.7,21h2.4l5.6-6.5L16.8,21H21l-7.8-9.3L20.3,3h-2.4l-5.1,6L7.2,3H3z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/altiora-infotech/posts/?feedView=all",
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 5 2.12 5 3.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.1c.5-.9 1.8-2.2 3.9-2.2 4.2 0 5 2.8 5 6.4V23h-4v-6.5c0-1.6 0-3.7-2.3-3.7s-2.7 1.8-2.7 3.6V23h-4V8.5z"
        />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/people/Altiora-Infotech/61578624501721/?mibextid=wwXIfr",
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.99 3.66 9.12 8.44 9.86v-6.99H8.07v-2.87h2.41V9.83c0-2.39 1.43-3.7 3.61-3.7 1.05 0 2.15.19 2.15.19v2.37h-1.21c-1.2 0-1.58.75-1.58 1.52v1.82h2.69l-.43 2.87h-2.26v6.99c4.78-.74 8.44-4.87 8.44-9.86 0-5.5-4.46-9.96-9.96-9.96z"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/altiora.infotech/",
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.38-.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25z"
        />
      </svg>
    ),
  },
];

const columns = [
  {
    title: "Services",
    links: ["Digital Marketing", "SEO", "PPC"],
  },
  {
    title: "Company",
    links: ["About", "Contact"],
  },
  {
    title: "We are available In",
    links: [],
    hasDropdown: true,
  },
];

const tickerItems = [
  "SEO Optimization",
  "PPC Campaigns",
  "Social Media Marketing",
  "Content Strategy",
  "Web Design",
  "Brand Identity",
  "Email Marketing",
  "Analytics & Reporting",
];

// Map normalized labels → hrefs
const LINK_MAP: Record<string, string> = {
  about: "/about",
  careers: "https://www.linkedin.com/company/altiora-infotech/jobs/",
  career: "/careers",
  contact: "/contact",
  blog: "/blog",
  testimonials: "/testimonials",
  faq: "/faq",
  "pitch deck": "https://altiorainfotech.com/pitch-deck",
  playbook: "https://altiorainfotech.com/playbook",
  "digital marketing": "/services/digital-marketing",
  "seo": "/services/seo",
  "ppc": "/services/ppc",
  "social media management": "/services/social-media-management",
  "web design": "/services/web-design",
  "branding": "/services/branding",
};

// normalize labels before lookup
const hrefFor = (raw: string) => LINK_MAP[raw.trim().toLowerCase()] ?? null;

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const ticker = useMemo(() => [...tickerItems, ...tickerItems], []);
  const [canadaOpen, setCanadaOpen] = useState(false);
  const [usaOpen, setUsaOpen] = useState(false);

  const canadaLocations = [
    { name: "Vancouver", href: "/services/digital-marketing-company-in-vancouver" },
    { name: "Surrey", href: "/surrey-marketing-company" },
    { name: "Abbotsford", href: "/abbotsford-marketing-company" },
    { name: "Calgary", href: "/calgary-marketing-company" },
    { name: "Burnaby", href: "/services/digital-marketing-company-in-burnaby" },
    { name: "Richmond", href: "/services/digital-marketing-company-in-richmond" },
    { name: "Langley", href: "/services/digital-marketing-company-in-langley" },
    { name: "Kerrville", href: "/kerrville-marketing-company" },
    { name: "Indigenous", href: "/indigenous-marketing-company" },
  ];

  const usaLocations: { name: string; href: string }[] = [
    // USA locations will be added in the future
  ];

  return (
    <footer className="mt-auto bg-black text-gray-300 z-10 relative">
      {/* gradient top veil */}
      <div aria-hidden className="relative h-14 overflow-hidden z-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050510] to-black" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="px-6">
        <div className="mx-auto max-w-6xl">
          {/* socials + brand */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
            <div className="md:col-span-5">
              {/* 🔄 brand name replaced with logo only */}
              <Link
                href="/"
                aria-label="Altiora Infotech — home"
                className="inline-flex items-center"
              >
                <Image
                  src="https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/altiora/about/altiora%20logo%20.svg"
                  alt="Altiora Infotech"
                  width={56}
                  height={56}
                  className="rounded"
                  priority
                />
              </Link>

              <p className="mt-2 text-sm text-white/70">
                A Subsidiary of Altiora Infotech.
                <br />
                Engineering modern experiences across Web, Mobile, AI, and Blockchain — designed for trust, scale, and impact.
              </p>

              <div className="mt-4 flex items-center gap-3">
                {socials.map((s) => (
                  <Link
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.12] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                    title={s.name}
                  >
                    <span className="text-white">{s.svg}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* columns */}
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
              {columns.map((col) => (
                <div key={col.title}>
                  <div className="text-sm font-semibold text-white">{col.title}</div>
                  {col.hasDropdown ? (
                    <div className="mt-3 space-y-2">
                      {/* Canada Dropdown */}
                      <div>
                        <button
                          onClick={() => setCanadaOpen(!canadaOpen)}
                          className="text-sm text-gray-300 hover:text-white transition flex items-center gap-1"
                        >
                          Canada
                          <svg
                            className={`w-3 h-3 transition-transform ${canadaOpen ? 'rotate-180' : ''}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                          </svg>
                        </button>
                        {canadaOpen && (
                          <ul className="mt-2 ml-3 grid grid-cols-2 gap-x-4 gap-y-1">
                            {canadaLocations.map((loc) => (
                              <li key={loc.name}>
                                <Link
                                  href={loc.href}
                                  className="text-xs text-gray-400 hover:text-white transition"
                                >
                                  {loc.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      {/* USA Dropdown */}
                      <div>
                        <button
                          onClick={() => setUsaOpen(!usaOpen)}
                          className="text-sm text-gray-300 hover:text-white transition flex items-center gap-1"
                        >
                          USA
                          <svg
                            className={`w-3 h-3 transition-transform ${usaOpen ? 'rotate-180' : ''}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                          </svg>
                        </button>
                        {usaOpen && (
                          <ul className="mt-2 ml-3 space-y-1">
                            {usaLocations.map((loc) => (
                              <li key={loc.name}>
                                <Link
                                  href={loc.href}
                                  className="text-xs text-gray-400 hover:text-white transition"
                                >
                                  {loc.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  ) : (
                    <ul className="mt-3 space-y-2">
                      {col.links.map((label) => {
                        const href = hrefFor(label);
                        return (
                          <li key={label}>
                            {href ? (
                              <Link
                                href={href}
                                className="text-sm text-gray-300 hover:text-white transition"
                              >
                                {label}
                              </Link>
                            ) : (
                              <span
                                role="link"
                                aria-disabled="true"
                                className="text-sm text-gray-400/80 select-none cursor-default"
                                title="Coming soon"
                              >
                                {label}
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ticker */}
          <div className="relative py-4 border-b border-white/10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="relative overflow-hidden">
              <div className="flex gap-8 animate-[ticker_28s_linear_infinite] will-change-transform">
                {ticker.map((t, i) => (
                  <span
                    key={`${t}-${i}`}
                    className="text-[12px] tracking-[0.14em] uppercase text-white/60 whitespace-nowrap"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* bottom row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-sm text-gray-400">
            <p>© {year} Altiora Infotech. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="hover:text-white">
                Terms & Conditions
              </Link>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition cursor-pointer flex items-center gap-1"
                aria-label="Back to top"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M7 14l5-5 5 5z" />
                </svg>
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ticker animation */}
      <style jsx>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </footer>
  );
}
