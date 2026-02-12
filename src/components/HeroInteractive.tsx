// components/HeroInteractive.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type KPI = { k: number; v: string; prefix?: string; suffix?: string };

export default function HeroInteractive({
  stats,
  imageSrc = "/images/Hero/web3-mesh.png",
  videoSrc, // optional: "/videos/hero-web3.mp4"
}: {
  stats: KPI[];
  imageSrc?: string;
  videoSrc?: string;
}) {
  const rootRef = useRef<HTMLElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    // defaults to avoid hydration jumps
    el.style.setProperty("--mx", "0");
    el.style.setProperty("--my", "0");

    // global intensity knob (lower = less movement)
    el.style.setProperty("--tilt", "2.2");  // was 3
    el.style.setProperty("--par", "8");     // was 12
    el.style.setProperty("--bgpar", "16");  // was 24

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (prefersReduced) {
      setLoaded(true);
      return;
    }

    let raf = 0;
    let targetX = 0, targetY = 0;
    let nextX = 0, nextY = 0;

    const animate = () => {
      // slightly snappier easing than before
      nextX += (targetX - nextX) * 0.18;
      nextY += (targetY - nextY) * 0.18;
      el.style.setProperty("--mx", String(nextX));
      el.style.setProperty("--my", String(nextY));
      raf = requestAnimationFrame(animate);
    };

    const handle = (clientX: number, clientY: number) => {
      const r = el.getBoundingClientRect();
      const x = (clientX - r.left) / r.width;
      const y = (clientY - r.top) / r.height;
      // clamp movement a bit more
      const cx = Math.max(-0.9, Math.min(0.9, (x - 0.5) * 2));
      const cy = Math.max(-0.9, Math.min(0.9, (y - 0.5) * 2));
      targetX = cx;
      targetY = cy;
    };

    const onMove = (e: MouseEvent) => handle(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) handle(t.clientX, t.clientY);
    };
    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("touchstart", onTouch, { passive: true });
    el.addEventListener("touchmove", onTouch, { passive: true });
    el.addEventListener("touchend", onLeave);

    setLoaded(true);
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("touchstart", onTouch);
      el.removeEventListener("touchmove", onTouch);
      el.removeEventListener("touchend", onLeave);
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="hero"
      className="relative overflow-hidden px-6 pt-28 pb-20 text-white"
      style={{
        // darker gradient than before
        background:
          "radial-gradient(1400px 800px at 70% -10%, rgba(67,98,209,0.22), rgba(11,13,42,0)), linear-gradient(180deg, #141a48 0%, #0b0d2a 65%, #050510 100%)",
        transform:
          "perspective(1200px) rotateX(calc(var(--my,0)*var(--tilt,2.2)deg)) rotateY(calc(var(--mx,0)*-1*var(--tilt,2.2)deg))",
        transition: loaded ? "transform 80ms linear" : "none",
      }}
    >
      {/* BG: choose image or video automatically if videoSrc provided */}
      {videoSrc ? (
        <video
          className="absolute inset-0 -z-10 h-full w-full object-cover will-change-transform"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          style={{
            transform:
              "translate3d(calc(var(--mx,0) * var(--par,8)px), calc(var(--my,0) * var(--par,8)px), 0)",
            transition: "transform 80ms linear",
            filter: "saturate(1.03) contrast(1.04)",
          }}
        />
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 z-0 will-change-transform"
          style={{
            backgroundImage: `url(${imageSrc}), radial-gradient(1000px 600px at 50% -10%, rgba(47,124,238,0.12), transparent)`,
            backgroundSize: "cover, auto",
            backgroundPosition:
              "calc(50% + calc(var(--mx,0) * var(--bgpar,16)px)) calc(50% + calc(var(--my,0) * var(--bgpar,16)px)), center",
            filter: "saturate(1.03) contrast(1.04)",
            transform:
              "translate3d(calc(var(--mx,0) * var(--par,8)px), calc(var(--my,0) * var(--par,8)px), 0)",
            transition: "transform 80ms linear, background-position 80ms linear",
          }}
        />
      )}

      {/* Grid overlay */}
      <div className="absolute inset-0 -z-10 opacity-[0.08] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "56px 56px, 56px 56px",
          }}
        />
      </div>

      {/* Reflective sheen (brighter & a bit faster) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 left-1/2 top-1/3 h-[80vmax] w-[80vmax] -translate-x-1/2 rounded-full mix-blend-screen opacity-40 blur-[120px]"
        style={{
          background:
            "conic-gradient(from 0deg at 50% 50%, rgba(44,86,221,0.05), rgba(44,86,221,0.65), rgba(44,86,221,0.05))",
          transform:
            "translate3d(calc(var(--mx,0) * -34px), calc(var(--my,0) * -34px), 0)",
          transition: "transform 70ms linear",
        }}
      />

      {/* Content */}
      <div className="max-w-6xl mx-auto text-center">
        <p className="uppercase tracking-[0.28em] text-xs text-slate-300/80">
          altiora infotech
        </p>
        <h1
          data-hero
          className="mt-3 text-5xl sm:text-6xl font-semibold leading-tight tracking-tight"
          style={{ textShadow: "0 6px 50px rgba(67,98,209,0.35)" }}
        >
          Build bold Web3, AI, and blockchain products
        </h1>
        <p className="mt-6 text-lg text-slate-200 max-w-4xl mx-auto">
          Engineering, security, and growth—aligned to ship faster. Hover to feel the depth; tap to explore.
        </p>

        {/* KPIs (now using the `stats` prop so no ESLint warning) */}
        {!!stats?.length && (
          <ul className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {stats.map((s, i) => (
              <li
                key={i}
                className="rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3"
              >
                <div className="text-xl sm:text-2xl font-semibold">
                  {s.prefix ?? ""}
                  {s.k.toLocaleString()}
                  {s.suffix ?? ""}
                </div>
                <div className="text-xs text-slate-300/85 mt-0.5">{s.v}</div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 font-medium shadow-[0_12px_50px_rgba(44,86,221,0.45)] transition hover:translate-y-[-1px]"
            style={{
              background:
                "linear-gradient(90deg, #2c56dd 0%, #4362d1 50%, #2c56dd 100%)",
              boxShadow:
                "0 10px 40px rgba(44,86,221,0.35), inset 0 0 0 1px rgba(255,255,255,0.06)",
            }}
          >
            Explore Solutions
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 font-medium border border-white/30 bg-white/[0.03] hover:bg-white/[0.08]"
          >
            Let’s Build
          </Link>
        </div>
      </div>
    </section>
  );
}
