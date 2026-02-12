"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "../ui/Reveal";
import { getImageUrl } from "@/lib/cloudinary";

type QuickItem = {
  label: string;
  href: string;
  desc: string;
  image: string; // background photo
  icon?: string; // optional small icon badge (svg/png)
};

const items: QuickItem[] = [
  {
    label: "Team",
    href: "/staff",
    desc: "Meet the clan",
    image: getImageUrl("https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/altiora/about/Staff.png", { quality: 'auto', format: 'webp' }),
  },
  {
    label: "Projects",
    href: "/projects",
    desc: "Case studies & work",
    image: getImageUrl("https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/altiora/about/Project.png", { quality: 'auto', format: 'webp' }),
  },
];

export default function QuickLinks() {
  return (
    <section className="px-6 py-14">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <Reveal key={i}>
              <Card {...it} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* motion prefs */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .ql-card { transform: none !important; }
          .ql-card * { transition: none !important; animation: none !important; }
        }
      `}</style>
    </section>
  );
}

function Card({ label, href, desc, image, icon }: QuickItem) {
  return (
    <Link
      href={href}
      aria-label={`${label}: ${desc}`}
      className="group relative block ql-card rounded-3xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4BD3A5] [transform-style:preserve-3d]"
      style={{
        transform:
          "perspective(900px) translateZ(0) scale(1) rotateX(0deg) rotateY(0deg)",
      }}
      onMouseMove={(e) => {
        const el = e.currentTarget as HTMLElement;
        const r = el.getBoundingClientRect();
        const px = ((e.clientX - r.left) / r.width) * 2 - 1;
        const py = ((e.clientY - r.top) / r.height) * 2 - 1;
        const rx = Math.max(-1, Math.min(1, -py)) * 4;
        const ry = Math.max(-1, Math.min(1, px)) * 6;
        el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.01)`;
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform =
          "perspective(900px) translateZ(0) scale(1) rotateX(0deg) rotateY(0deg)";
        el.style.setProperty("--mx", "50%");
        el.style.setProperty("--my", "50%");
      }}
    >
      {/* animated gradient border */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[1.55rem] p-[1px]"
        style={{
          background:
            "conic-gradient(from var(--rot,0deg), rgba(132,156,255,.5), rgba(132,156,255,0) 35%, rgba(132,156,255,.5) 70%, rgba(132,156,255,0))",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          transition: "transform 200ms ease",
        }}
      />

      {/* image layer */}
      <div className="absolute inset-0">
        <Image src={image} alt={label} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/35 to-black/20" />
      </div>

      {/* content */}
      <div className="relative z-10 h-36 sm:h-44 flex items-end">
        <div className="w-full p-5 sm:p-6">
          <div className="flex items-center gap-2">
            {icon && (
              <span className="relative h-6 w-6 shrink-0 rounded-full bg-white/15 ring-1 ring-white/20 overflow-hidden [transform:translateZ(24px)]">
                <Image src={icon} alt="" fill className="object-contain p-1.5" />
              </span>
            )}
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-wider ring-1 ring-white/15">
              <span className="inline-block h-[6px] w-[6px] rounded-full bg-[#4BD3A5]" />
            </span>
          </div>

          <h3 className="mt-3 text-lg sm:text-xl font-semibold leading-tight [text-shadow:0_2px_18px_rgba(0,0,0,.35)]">
            {label}
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-white/80">{desc}</p>
        </div>
      </div>

      {/* neutral ring */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/15 transition" />
    </Link>
  );
}
