"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export type Story = {
  tag: "NEWS" | "PRESS RELEASE" | "CASE STUDY";
  title: string;
  date?: string;
  cover: string;   // e.g. /images/stories/okx-partnership.jpg
  href: string;    // internal or external link
  cta?: string;    // optional pill text (defaults: "Learn more →")
};

export default function StoryCard({ story, variant }: { story: Story; variant?: "hero" }) {
  const { tag, title, date, cover, href, cta = "Learn more →" } = story;

  return (
    <Link
      href={href}
      className={clsx(
        "group block rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition overflow-hidden",
        "focus:outline-none focus:ring-2 focus:ring-[#4BD3A5]",
        variant === "hero" && "h-full"
      )}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      <div className={clsx("relative w-full", variant === "hero" ? "h-[320px] sm:h-[420px]" : "h-48")}>
        <Image src={cover} alt={title} fill className="object-cover" />
        <span className="absolute top-3 right-3 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs">
          {cta}
        </span>
      </div>

      <div className="p-5">
        <div className="text-[10px] tracking-[0.14em] uppercase text-white/70">{tag}</div>
        <div className="mt-2 font-medium">{title}</div>
        {date && <div className="mt-1 text-xs text-white/50">{date}</div>}
      </div>
    </Link>
  );
}
