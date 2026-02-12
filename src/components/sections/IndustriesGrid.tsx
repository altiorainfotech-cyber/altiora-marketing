"use client";

import Image from "next/image";
import Reveal from "../ui/Reveal";
import { useRef } from "react";

type Industry = {
  key: string;
  name: string;
  icon: string;
  href: string; // unused (kept for data consistency)
};

const items: Industry[] = [
  { key: "supply",     name: "Supply Chain",  icon: "/icons/industries/supply-chain.svg", href: "/industries/supply-chain" },
  { key: "health",     name: "Healthcare",    icon: "/icons/industries/healthcare.svg",   href: "/industries/healthcare" },
  { key: "edu",        name: "Education",     icon: "/icons/industries/education.svg",    href: "/industries/education" },
  { key: "realestate", name: "Real Estate",   icon: "/icons/industries/real-estate.svg",  href: "/industries/real-estate" },
  { key: "ecom",       name: "E-commerce",    icon: "/icons/industries/ecommerce.svg",    href: "/industries/ecommerce" },
  { key: "finance",    name: "Finance",       icon: "/icons/industries/finance.svg",      href: "/industries/finance" },
  { key: "ent",        name: "Entertainment", icon: "/icons/industries/entertainment.svg",href: "/industries/entertainment" },
  { key: "legal",      name: "Legal",         icon: "/icons/industries/legal.svg",        href: "/industries/legal" },
  { key: "gov",        name: "Government",    icon: "/icons/industries/government.svg",   href: "/industries/government" },
  { key: "oilgas",     name: "Oil & Gas",     icon: "/icons/industries/oil-gas.svg",      href: "/industries/oil-gas" },
];

function Card({
  name,
  icon,
}: {
  name: string;
  icon: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const px = (x / r.width) * 2 - 1;   // -1..1
    const py = (y / r.height) * 2 - 1;  // -1..1

    // soften + clamp
    const clamp = (v: number, m = 0.9) => Math.max(-m, Math.min(m, v));
    const rx = clamp(-py) * 6; // tilt degrees
    const ry = clamp(px) * 8;

    // pass to CSS
    el.style.setProperty("--rx", `${rx}`);
    el.style.setProperty("--ry", `${ry}`);
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0");
    el.style.setProperty("--ry", "0");
    // center sparkle
    el.style.setProperty("--mx", "50%");
    el.style.setProperty("--my", "50%");
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={[
        "group relative rounded-2xl p-[1px] transition-transform duration-150",
        // animated gradient border
        "before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:[mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000,transparent)] before:[mask-composite:exclude]",
        "before:bg-[conic-gradient(from_var(--borderRot,0deg),rgba(124,167,255,.5),rgba(124,167,255,0)_40%,rgba(124,167,255,.5)_80%,rgba(124,167,255,0))]",
        "hover:[--borderRot:180deg]",
        // 3D tilt
        "[transform-style:preserve-3d]",
      ].join(" ")}
      style={{
        transform: "perspective(900px) rotateX(calc(var(--rx,0)*1deg)) rotateY(calc(var(--ry,0)*1deg))",
      }}
    >
      {/* glow backdrop */}
      <div
        aria-hidden
        className="absolute -inset-4 rounded-3xl opacity-0 blur-2xl transition-opacity duration-200 group-hover:opacity-60"
        style={{
          background:
            "radial-gradient(120px 60px at var(--mx,50%) var(--my,50%), rgba(120,167,255,.25), transparent 70%)",
          mixBlendMode: "screen",
        }}
      />

      {/* card surface */}
      <div className="relative rounded-2xl border border-border bg-white/5 px-6 py-6 transition-colors duration-200 group-hover:bg-white/10">
        {/* shine sweep */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
        >
          <span
            className="absolute -left-1/3 top-0 h-full w-1/2 -skew-x-12 opacity-0 group-hover:opacity-30"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,.18), transparent)",
              animation: "shine 900ms ease-out",
            }}
          />
        </div>

        {/* content */}
        <div className="flex flex-col items-center justify-start gap-3">
          <span className="relative h-16 w-16 [transform:translateZ(30px)] will-change-transform">
       <Image
  src={icon}
  alt={name}
  fill
  className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-150"
  style={{
    transform:
      "translate3d(calc(var(--ry,0)*0.6px), calc(var(--rx,0)*-0.6px), 0)",
  }}
/>

          </span>
          <span className="text-sm font-medium text-center [transform:translateZ(20px)]">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function IndustriesGrid() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold">
          Industries <span className="text-brand">We Serve</span>
        </h2>
        <div className="mx-auto mt-2 h-[3px] w-24 rounded-full bg-brand/80" />

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map((it) => (
            <Reveal key={it.key}>
              {/* static (no navigation) but interactive visuals */}
              <Card name={it.name} icon={it.icon} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* animations + motion preferences */}
      <style jsx>{`
        @keyframes shine {
          0%   { transform: translateX(-60%) skewX(-12deg); }
          100% { transform: translateX(220%) skewX(-12deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .group { transform: none !important; }
          .group * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </section>
  );
}
