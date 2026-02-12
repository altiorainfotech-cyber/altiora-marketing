"use client";
import Link from "next/link";
import Reveal from "../ui/Reveal";
import { resources } from "../../data/site";

export default function Resources() {
  return (
    <section className="px-6 py-16 bg-[#000614] border-y border-white/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold">Resources</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {resources.map((r, i) => (
            <Reveal key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <Link href={r.href}>
                <div className="font-medium">{r.t}</div>
                <p className="text-sm text-white/70 mt-2">{r.d}</p>
                <span className="mt-4 inline-block underline text-[#1D5AC9]">Read →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
