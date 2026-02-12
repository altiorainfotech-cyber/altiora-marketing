"use client";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-gradient-to-r from-[#1C5A52] to-[#1145AF] p-8 sm:p-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Ready to build</h3>
            <p className="text-white/80 mt-1 max-w-xl">
              Get a working prototype, integrations, and a limited go-live in four weeks with reporting and clear next steps.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/contact" className="px-5 py-3 rounded-full bg-[#4BD3A5] text-[#010c22] font-medium">Start a project</Link>
            <Link href="/docs" className="px-5 py-3 rounded-full border border-white/20">View docs</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
