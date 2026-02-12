// src/app/privacy/page.tsx

import { Metadata } from "next";
import { generateSEOMetadata } from '@/lib/seo';
import Header from "../../assets/Header";
import Footer from "../../assets/Footer";

// Generate dynamic metadata
export async function generateMetadata(): Promise<Metadata> {
  return await generateSEOMetadata('/privacy-policy', {
  title: "Privacy Policy | privacy policy gdpr - Altiora Infotech",
  description:
    "Achieve faster outcomes with privacy policies at Altiora Infotech. We specialize in GDPR and data protection policies to scale securely and effectively",

  });
}

const LAST_UPDATED = "26 Sep 2025";

export default function PrivacyPage() {
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
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,9,41,0.7) 0%, rgba(10,19,59,0.7) 50%, rgba(5,5,16,0.8) 100%), url(/images/Privacy.jpg) center/cover' }} />

          {/* heading */}
          <div className="relative z-10 h-full w-full flex items-center justify-center text-center px-6">
            <div className="max-w-4xl">
              <p className="uppercase tracking-[0.22em] text-xs sm:text-[13px] text-white/80">
                Legal
              </p>
              <h1 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight drop-shadow">
                Privacy Policy
              </h1>
              <p className="mt-4 text-white/85 text-base sm:text-lg leading-relaxed">
                Learn how we collect, use, protect, and share your information.
                Your privacy and data security are our top priorities.
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
                { k: "Sections", v: "10+" },
                { k: "Compliance", v: "GDPR" },
                { k: "Security", v: "256-bit" },
                { k: "Updates", v: "Annual" },
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
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Introduction
                </h2>
                <div className="mt-3 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#7aa2ff] via-[#98b7ff] to-[#2c56dd]" />
                <p className="mt-5 text-white/85 leading-relaxed">
                  This Privacy Policy explains how <strong>Altiora Infotech</strong>
                  (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects, uses, and protects your information
                  when you use our websites, applications, and services. By using our
                  Services, you agree to the practices described in this Policy.
                </p>
              </div>
            </section>

            {/* INFORMATION WE COLLECT */}
            <section>
              <div className="max-w-5xl">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Information We Collect
                </h2>
                <div className="mt-3 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#7aa2ff] via-[#98b7ff] to-[#2c56dd]" />
                <p className="mt-5 text-white/85 leading-relaxed">
                  We may collect the following types of information to provide and
                  improve our services:
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Personal Information", desc: "name, email, phone, billing details" },
                    { title: "Usage Data", desc: "pages visited, IP address, device type, browser" },
                    { title: "Cookies & Tracking", desc: "session identifiers, analytics data" },
                    { title: "Business Data", desc: "content and files you upload or share" },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#7aa2ff] ring-2 ring-white/20" />
                      <div>
                        <div className="font-semibold text-white/90">{item.title}:</div>
                        <div className="text-sm text-white/80">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* HOW WE USE INFORMATION */}
            <section>
              <div className="max-w-5xl">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  How We Use Information
                </h2>
                <div className="mt-3 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#7aa2ff] via-[#98b7ff] to-[#2c56dd]" />
                <p className="mt-5 text-white/85 leading-relaxed">We use collected data for:</p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Delivering and maintaining our services",
                    "Improving user experience and product quality",
                    "Communicating updates, promotions, or support",
                    "Ensuring security, fraud prevention, and compliance",
                    "Conducting analytics and product research",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#7aa2ff] ring-2 ring-white/20" />
                      <p className="text-sm text-white/90">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SHARING OF INFORMATION */}
            <section>
              <div className="max-w-5xl">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Sharing of Information
                </h2>
                <div className="mt-3 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#7aa2ff] via-[#98b7ff] to-[#2c56dd]" />
                <p className="mt-5 text-white/85 leading-relaxed">
                  We do not sell your personal data. We may share limited data with:
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Service Providers", desc: "trusted vendors who process data on our behalf" },
                    { title: "Legal Authorities", desc: "if required by law or to protect our rights" },
                    { title: "Business Transfers", desc: "in case of mergers, acquisitions, or restructuring" },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#7aa2ff] ring-2 ring-white/20" />
                      <div>
                        <div className="font-semibold text-white/90">{item.title}:</div>
                        <div className="text-sm text-white/80">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* DATA SECURITY */}
            <section>
              <div className="max-w-5xl">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Data Security
                </h2>
                <div className="mt-3 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#7aa2ff] via-[#98b7ff] to-[#2c56dd]" />
                <p className="mt-5 text-white/85 leading-relaxed">
                  We implement industry-standard security measures including
                  encryption, access controls, and monitoring to safeguard your data.
                  However, no method of transmission over the Internet is fully secure.
                </p>
              </div>
            </section>

            {/* DATA RETENTION */}
            <section>
              <div className="max-w-5xl">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Data Retention
                </h2>
                <div className="mt-3 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#7aa2ff] via-[#98b7ff] to-[#2c56dd]" />
                <p className="mt-5 text-white/85 leading-relaxed">
                  We retain personal data only as long as necessary to provide our
                  services, comply with legal obligations, resolve disputes, and
                  enforce agreements.
                </p>
              </div>
            </section>

            {/* YOUR RIGHTS */}
            <section>
              <div className="max-w-5xl">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Your Rights
                </h2>
                <div className="mt-3 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#7aa2ff] via-[#98b7ff] to-[#2c56dd]" />
                <p className="mt-5 text-white/85 leading-relaxed">
                  Depending on your region, you may have rights to access, correct,
                  delete, or restrict the use of your personal data. To exercise these
                  rights, contact us at{" "}
                  <a
                    href="mailto:support@altiorainfotech.com"
                    className="underline hover:text-[#7aa2ff] transition-colors"
                  >
                    support@altiorainfotech.com
                  </a>.
                </p>
              </div>
            </section>

            {/* THIRD-PARTY LINKS */}
            <section>
              <div className="max-w-5xl">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Third-Party Links
                </h2>
                <div className="mt-3 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#7aa2ff] via-[#98b7ff] to-[#2c56dd]" />
                <p className="mt-5 text-white/85 leading-relaxed">
                  Our services may contain links to third-party websites. We are not
                  responsible for the privacy practices or content of external sites.
                </p>
              </div>
            </section>

            {/* CHILDREN'S PRIVACY */}
            <section>
              <div className="max-w-5xl">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Children&apos;s Privacy
                </h2>
                <div className="mt-3 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#7aa2ff] via-[#98b7ff] to-[#2c56dd]" />
                <p className="mt-5 text-white/85 leading-relaxed">
                  Our services are not directed to children under 13. We do not knowingly
                  collect personal data from children. If we learn that we have collected
                  such data, we will delete it immediately.
                </p>
              </div>
            </section>

            {/* CHANGES TO THIS POLICY */}
            <section>
              <div className="max-w-5xl">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Changes to This Policy
                </h2>
                <div className="mt-3 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#7aa2ff] via-[#98b7ff] to-[#2c56dd]" />
                <p className="mt-5 text-white/85 leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will
                  be posted here with a new &quot;Last Updated&quot; date.
                </p>
              </div>
            </section>

            {/* CONTACT US */}
            <section>
              <div className="max-w-5xl">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Contact Us
                </h2>
                <div className="mt-3 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#7aa2ff] via-[#98b7ff] to-[#2c56dd]" />
                <p className="mt-5 text-white/85 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us
                  at{" "}
                  <a
                    href="mailto:hello@altiorainfotech.com"
                    className="underline hover:text-[#7aa2ff] transition-colors"
                  >
                    sales@altiorainfotech.com
                  </a>.
                </p>
              </div>
            </section>

            {/* CTA STRIP */}
            <section>
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-r from-[#1a2468] via-[#2a3ea9] to-[#0b1749] p-6 sm:p-8">
                <div className="absolute inset-0 opacity-25 bg-[radial-gradient(1200px_600px_at_10%_-20%,rgba(255,255,255,0.25),transparent_60%)]" />
                <div className="relative">
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    Questions about your privacy?
                  </h3>
                  <p className="mt-2 text-white/85 max-w-2xl">
                    Our privacy team is here to help you understand how we protect your data
                    and answer any concerns you may have.
                  </p>
                  <a
                    href="mailto:hello@altiorainfotech.com"
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  >
                    Contact Privacy Team
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M7 12h10M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </a>
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
