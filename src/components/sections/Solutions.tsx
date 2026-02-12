// src/components/sections/Solutions.tsx (Success Stories)
"use client";

import Reveal from "../ui/Reveal";

type Brief = {
  id: string;
  sector: string;
  title: string;
  challenge: string;
  solution: string;
  impact: string;
  href?: string; // kept for data completeness, but not used for linking
};

const BRIEFS: Brief[] = [
  {
    id: "edtech",
    sector: "Education (EdTech)",
    title: "Blockchain-Secured LMS for Credential Integrity",
    challenge:
      "Susceptible certificates and sluggish verification across institutions.",
    solution:
      "Implemented issuance via smart contracts, tamper-proof credentials, and instant on-chain verification with admin/learner issuer workflows.",
    impact:
      "Faster audits and better recognition of qualifications; streamlined cross-institution verification for students and employers.",
    href: "/case-studies/edtech-credentialing",
  },
  {
    id: "cloud-saas",
    sector: "Cloud/SaaS (B2B Software)",
    title: "MSP Subscription Management",
    challenge:
      "VDI lag, blocked API calls by firewalled networks, manual billing, and tricky reseller reassignments.",
    solution:
      "Designed firewall-tolerant UI, encapsulated third-party APIs in fault-tolerant middleware, added automated billing, and a graphical partner reassignment engine.",
    impact:
      "~40% fewer integration issues, ~30% faster VDI times, and ~50% time savings in customer migrations.",
    href: "/case-studies/msp-subscription-management",
  },
  {
    id: "health-physio",
    sector: "Healthcare (Digital Care)",
    title: "AI-Powered Tele-Physio",
    challenge:
      "Limited capacity and reliability of manual movement checks constrained remote caregiving.",
    solution:
      "Implemented computer-vision motion analysis (2D/3D), angle/posture detection, and a mobile-first patient app with guided exercises.",
    impact:
      "~38% increase in remote assessments and ~25% improvement in patient retention.",
    href: "/case-studies/tele-physio-ai",
  },
];

export default function Solutions() {
  return (
    <section className="px-6 py-16 bg-[#000614] border-y border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Success Stories</h2>
            <p className="mt-2 text-white/70">
              Idea to impact—these briefs shed light on the path taken and outcomes achieved:
              the problem, process, and business results that matter.
            </p>
          </div>

          {/* Disabled "Case studies" pill (desktop) */}
          {/* <span
            role="link"
            aria-disabled="true"
            className="hidden sm:inline-flex rounded-full border border-white/20 px-4 py-2 text-sm text-white/70 cursor-not-allowed pointer-events-none"
            title="Coming soon"
          >
            Case studies →
          </span> */}
        </div>

        {/* Briefs */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRIEFS.map((b) => (
            <Reveal
              key={b.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              {/* Sector label in gold */}
              <div className="text-[11px] tracking-[0.14em] uppercase text-[#F4CC6F]">
                {b.sector}
              </div>

              <h3 className="mt-1 text-lg font-medium">{b.title}</h3>

              <div className="mt-4 space-y-3 text-sm text-white/80">
                <div>
                  <span className="font-semibold text-white">Challenge: </span>
                  <span>{b.challenge}</span>
                </div>
                <div>
                  <span className="font-semibold text-white">Solution: </span>
                  <span>{b.solution}</span>
                </div>
                <div>
                  <span className="font-semibold text-white">Impact: </span>
                  <span>{b.impact}</span>
                </div>
              </div>

              {/* Disabled Explore link */}
              <span
                role="link"
                aria-disabled="true"
                className="mt-4 inline-block underline text-white/60 cursor-not-allowed pointer-events-none"
                title="Coming soon"
              >
                
              </span>
            </Reveal>
          ))}
        </div>



        {/* Disabled Mobile CTA */}
        {/* <div className="sm:hidden mt-6"> */}
          {/* <span
            role="link"
            aria-disabled="true"
            className="inline-flex w-full justify-center rounded-full border border-white/20 px-4 py-2 text-sm text-white/70 cursor-not-allowed pointer-events-none"
            title="Coming soon"
          >
            Case studies →
          </span> */}
        {/* </div> */}
      </div>
    </section>
  );
}
