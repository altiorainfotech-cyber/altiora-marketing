"use client";

import Image from "next/image";
import ScrollLink from "../../ui/scroll-link";
import Reveal from "../../ui/Reveal";
import { projects } from "../../../data/about";

export default function AboutProjects() {
  return (
    <section className="px-6 py-16 border-y border-white/10 bg-[#000614]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold">Projects</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={i} className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
              <ScrollLink href={p.href} className="block">
                <div className="relative h-40 w-full overflow-hidden rounded-t-2xl">
                  <Image src={p.cover} alt={p.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <div className="text-sm text-[#4BD3A5] uppercase tracking-wide">{p.tag}</div>
                  <div className="mt-1 font-medium">{p.title}</div>
                  <p className="text-sm text-white/70 mt-1">{p.desc}</p>
                  <span className="mt-3 inline-block underline text-[#1D5AC9]">View case →</span>
                </div>
              </ScrollLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
///gyuguhiuguyg