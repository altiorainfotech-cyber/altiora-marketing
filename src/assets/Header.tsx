// src/components/sections/Header.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const SERVICES: NavItem[] = [
  { label: "Digital Advertising", href: "/services/paid-advertisement-services" },
  { label: "SEO", href: "/services/seo" },
  { label: "Website Development Services", href: "/services/website-development-services" },
  { label: "Social Media Management", href: "/services/social-media-management" },
  { label: "Graphic Design", href: "/services/graphic-design" },
  { label: "Branding", href: "/services/branding" },
  { label: "Video Production", href: "/services/video-production" },
  { label: "Business Consulting", href: "/services/business-consulting" },
  { label: "Mobile App Development", href: "/services/mobile-app-development" },
];

export default function Header() {
  const pathname = usePathname() ?? "";
  const [open, setOpen] = useState(false);
  const [logoOk, setLogoOk] = useState(true);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const isServicesActive = SERVICES.some((s) => isActive(s.href));

  const handleServicesEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 200);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className="relative border-b border-white/10 bg-black backdrop-blur-md"
        style={{ WebkitBackdropFilter: "blur(12px)" }}
      >
        <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-[61px] items-center justify-between gap-3">
            {/* Brand */}
            <Link
              href="/"
              className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
              aria-label="Home"
            >
              <Image
                src="https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_l6diqm.png"
                alt="Altiora Infotech Logo"
                width={60}
                height={60}
                className="rounded shrink-0"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
              {/* About Us (first) */}
              <Link
                href="/about"
                className={[
                  "relative px-3 py-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
                  isActive("/about") ? "text-white" : "text-gray-300 hover:text-white",
                ].join(" ")}
              >
                About Us
                {isActive("/about") && (
                  <span className="pointer-events-none absolute left-3 right-3 -bottom-[2px] block h-[3px] rounded-full bg-[linear-gradient(90deg,#2c56dd,#7aa2ff,#2c56dd)]" />
                )}
              </Link>

              {/* Services dropdown */}
              <div
                ref={servicesRef}
                className="relative"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                <button
                  type="button"
                  className={[
                    "relative px-3 py-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 inline-flex items-center gap-1",
                    isServicesActive ? "text-white" : "text-gray-300 hover:text-white",
                  ].join(" ")}
                  onClick={() => setServicesOpen((v) => !v)}
                >
                  Services
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                  {isServicesActive && (
                    <span className="pointer-events-none absolute left-3 right-3 -bottom-[2px] block h-[3px] rounded-full bg-[linear-gradient(90deg,#2c56dd,#7aa2ff,#2c56dd)]" />
                  )}
                </button>

                {/* Dropdown */}
                <div
                  className={[
                    "absolute top-full left-0 mt-1 w-56 rounded-xl border border-white/10 bg-black/95 backdrop-blur-xl shadow-2xl shadow-black/50 py-2 transition-all duration-200 origin-top",
                    servicesOpen
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-95 pointer-events-none",
                  ].join(" ")}
                >
                  {SERVICES.map((service) => (
                    <Link
                      key={service.label}
                      href={service.href}
                      className={[
                        "block px-4 py-2 text-sm transition-colors",
                        isActive(service.href)
                          ? "text-white bg-white/10"
                          : "text-gray-300 hover:text-white hover:bg-white/5",
                      ].join(" ")}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Blog & Contact Us */}
              {NAV.filter((item) => item.href !== "/about").map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "relative px-3 py-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
                    isActive(item.href) ? "text-white" : "text-gray-300 hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="pointer-events-none absolute left-3 right-3 -bottom-[2px] block h-[3px] rounded-full bg-[linear-gradient(90deg,#2c56dd,#7aa2ff,#2c56dd)]" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right CTA */}
            <div className="hidden md:flex">
            </div>

            {/* Mobile: hamburger toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              {open ? (
                <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="4" y1="4" x2="20" y2="20" />
                  <line x1="20" y1="4" x2="4" y2="20" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        <div
          id="mobile-menu"
          className={[
            "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
            open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-4">
            <nav className="flex flex-col gap-1">
              {/* Mobile Services accordion */}
              <button
                type="button"
                onClick={() => setMobileServicesOpen((v) => !v)}
                className={[
                  "relative rounded-lg px-3 py-2 text-sm transition-colors text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 flex items-center justify-between",
                  isServicesActive
                    ? "bg-white/10 text-white"
                    : "text-gray-300 hover:bg-white/10 hover:text-white",
                ].join(" ")}
              >
                Services
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mobile services sub-items */}
              <div
                className={[
                  "overflow-hidden transition-all duration-200",
                  mobileServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                ].join(" ")}
              >
                <div className="pl-4 flex flex-col gap-0.5">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.label}
                      href={service.href}
                      className={[
                        "rounded-lg px-3 py-1.5 text-sm transition-colors",
                        isActive(service.href)
                          ? "text-white bg-white/5"
                          : "text-gray-400 hover:bg-white/5 hover:text-white",
                      ].join(" ")}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other nav items */}
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "relative rounded-lg px-3 py-2 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
                    isActive(item.href)
                      ? "bg-white/10 text-white"
                      : "text-gray-300 hover:bg-white/10 hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
