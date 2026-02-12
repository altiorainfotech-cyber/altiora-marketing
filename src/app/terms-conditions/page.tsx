// src/app/terms/page.tsx

import { Metadata } from "next";
import { generateSEOMetadata } from '@/lib/seo';
import Header from "../../assets/Header";
import Footer from "../../assets/Footer";
import Link from "next/link";
import EmailLink from "../../components/EmailLink";

// Generate dynamic metadata
export async function generateMetadata(): Promise<Metadata> {
  return await generateSEOMetadata('/terms-conditions', {
  title: "Terms & Conditions | terms of service - Altiora Infotech",
  description:
    "Power your roadmap with Terms & Conditions at Altiora Infotech. We provide expert Terms of Service and website T&C solutions to scale securely.",

  });
}

const LAST_UPDATED = "26 Sep 2025";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#010c22] text-[#F8FBFB]">
      <Header />

      <main
        className="flex-grow"
        style={{
          background:
            "linear-gradient(180deg, #1a1f5a 0%, #0a133b 50%, #050510 100%)",
        }}
      >
        {/* HERO */}
        <section className="relative h-[40vh] sm:h-[44vh] md:h-[48vh]">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,9,41,0.7) 0%, rgba(10,19,59,0.7) 50%, rgba(5,5,16,0.8) 100%), url(/images/Terms.jpg) center/cover' }} />

          {/* heading */}
          <div className="relative z-10 h-full w-full flex items-center justify-center text-center px-6">
            <div className="max-w-4xl">
              <p className="uppercase tracking-[0.22em] text-xs sm:text-[13px] text-white/80">
                Legal
              </p>
              <h1 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight drop-shadow">
                Terms of Service
              </h1>
              <p className="mt-4 text-white/85 text-base sm:text-lg leading-relaxed">
                Understand the rules and guidelines for using our services.
                Your agreement ensures a smooth and secure experience.
              </p>
              <p className="mt-2 text-sm text-white/70">Last updated: {LAST_UPDATED}</p>
            </div>
          </div>

          {/* subtle bottom line */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </section>

        {/* INTRO STRIP (stats) */}
        <section className="px-6">
          <div className="mx-auto max-w-6xl">
            <div className="relative -mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 rounded-2xl border border-white/15 bg-white/[0.05] backdrop-blur-sm p-4 sm:p-6">
              {[
                { k: "Sections", v: "8+" },
                { k: "Jurisdiction", v: "India" },
                { k: "Updates", v: "Annual" },
                { k: "Support", v: "24/7" },
              ].map((s) => (
                <div key={s.k} className="text-center">
                  <div className="text-xl sm:text-2xl font-semibold text-white">{s.v}</div>
                  <div className="mt-1 text-xs sm:text-sm text-white/70 uppercase tracking-wider">
                    {s.k}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BODY */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl space-y-16">
            {/* INTRODUCTION */}
            <section>
              <div className="max-w-5xl">
                <p className="text-white/85 leading-relaxed">
                  These Terms of Service (&quot;<strong>Terms</strong>&quot;) govern your use of
                  websites, applications, and services provided by <strong>Altiora Infotech</strong>.
                  By using our Services, you agree to these Terms.
                </p>
              </div>
            </section>

            {/* ELIGIBILITY & ACCOUNT */}
            <section>
              <div className="max-w-5xl">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Eligibility & Account
                </h2>
                <div className="mt-3 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#7aa2ff] via-[#98b7ff] to-[#2c56dd]" />
                <p className="mt-5 text-white/85 leading-relaxed">
                  You must be of legal age and authorized to accept these Terms. You
                  are responsible for safeguarding credentials and all activity under
                  your account.
                </p>
              </div>
            </section>

            {/* ACCEPTABLE USE */}
            <section>
              <div className="max-w-5xl">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Acceptable Use
                </h2>
                <div className="mt-3 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#7aa2ff] via-[#98b7ff] to-[#2c56dd]" />
                <p className="mt-5 text-white/85 leading-relaxed">
                  You agree not to misuse our Services, upload malicious code, or
                  infringe rights. Unauthorized reverse engineering or interference
                  is prohibited.
                </p>
              </div>
            </section>

            {/* INTELLECTUAL PROPERTY */}
            <section>
              <div className="max-w-5xl">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Intellectual Property
                </h2>
                <div className="mt-3 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#7aa2ff] via-[#98b7ff] to-[#2c56dd]" />
                <p className="mt-5 text-white/85 leading-relaxed">
                  Altiora retains ownership of its technology and content. You retain
                  ownership of your data but grant us a license to use it for service
                  delivery.
                </p>
              </div>
            </section>

            {/* PRIVACY & DATA */}
            <section>
              <div className="max-w-5xl">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Privacy & Data
                </h2>
                <div className="mt-3 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#7aa2ff] via-[#98b7ff] to-[#2c56dd]" />
                <p className="mt-5 text-white/85 leading-relaxed">
                  Our{" "}
                  <a href="/privacy-policy" className="underline hover:text-[#7aa2ff] transition-colors">
                    Privacy Policy
                  </a>{" "}
                  explains how we collect and protect personal data. You remain
                  responsible for lawful use of data you share.
                </p>
              </div>
            </section>

            {/* LIMITATION OF LIABILITY */}
            <section>
              <div className="max-w-5xl">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Limitation of Liability
                </h2>
                <div className="mt-3 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#7aa2ff] via-[#98b7ff] to-[#2c56dd]" />
                <p className="mt-5 text-white/85 leading-relaxed">
                  Altiora is not liable for indirect or consequential damages. Our
                  total liability will not exceed fees paid in the last 12 months.
                </p>
              </div>
            </section>

            {/* GOVERNING LAW */}
            <section>
              <div className="max-w-5xl">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Governing Law
                </h2>
                <div className="mt-3 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#7aa2ff] via-[#98b7ff] to-[#2c56dd]" />
                <p className="mt-5 text-white/85 leading-relaxed">
                  These Terms are governed by the laws of <strong>India</strong>, with
                  exclusive jurisdiction in <strong>Chandigarh</strong>.
                </p>
              </div>
            </section>

            {/* CONTACT */}
            <section>
              <div className="max-w-5xl">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Contact
                </h2>
                <div className="mt-3 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#7aa2ff] via-[#98b7ff] to-[#2c56dd]" />
                <p className="mt-5 text-white/85 leading-relaxed">
                  For any questions, email us at{" "}
                  <EmailLink
                    email="hr@altiorainfotech.com"
                    className="underline hover:text-[#7aa2ff] transition-colors"
                  >
                    hr@altiorainfotech.com
                  </EmailLink>
                  .
                </p>
              </div>
            </section>

            {/* CTA STRIP */}
            <section>
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-r from-[#1a2468] via-[#2a3ea9] to-[#0b1749] p-6 sm:p-8">
                <div className="absolute inset-0 opacity-25 bg-[radial-gradient(1200px_600px_at_10%_-20%,rgba(255,255,255,0.25),transparent_60%)]" />
                <div className="relative">
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    Questions about our terms?
                  </h3>
                  <p className="mt-2 text-white/85 max-w-2xl">
                    Our legal team is available to clarify any aspects of our Terms of Service
                    and ensure you understand your rights and obligations.
                  </p>
                  <EmailLink
                    email="hr@altiorainfotech.com"
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  >
                    Contact Legal Team
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M7 12h10M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </EmailLink>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
