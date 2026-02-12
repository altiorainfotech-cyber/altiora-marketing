"use client";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../ui/Reveal";
import { caseStudies } from "../../data/site";

export default function CaseStudies() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-semibold">Proof of impact</h2>
          <Link href="/work" className="text-[#1D5AC9] underline">View all</Link>
        </div>

        <div className="mt-8 flex gap-6 overflow-x-auto pb-4">
          {caseStudies.map((c, i) => (
            <Reveal
              key={i}
              className="min-w-[320px] sm:min-w-[360px] rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <Link href={c.href}>
                <div className="relative h-44 w-full overflow-hidden rounded-t-2xl">
                  <Image src={c.img} alt={c.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <span className="text-xs text-[#4BD3A5] uppercase tracking-wide">{c.badge}</span>
                  <div className="mt-2 font-medium">{c.title}</div>
                  <p className="text-sm text-white/70 mt-1">{c.copy}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
