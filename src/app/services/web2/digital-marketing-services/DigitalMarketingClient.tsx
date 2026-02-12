"use client";

import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import {
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaEye,
  FaBullhorn,
  FaSearch,
  FaUsers,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";

const iconMap: { [key: string]: React.ComponentType<any> } = {
  FaFileAlt,
  FaSearch,
  FaUsers,
  FaEnvelope,
};

export default function DigitalMarketingClient() {
  const [activeTab, setActiveTab] = useState(0);
  const [serviceData, setServiceData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await fetch('/api/web2-services/digital-marketing-services');
        if (response.ok) {
          const result = await response.json();
          setServiceData(result.data);
        }
      } catch (error) {
        console.error('Error fetching service data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#010c22]">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!serviceData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#010c22]">
        <div className="text-white text-xl">Service data not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#010c22] text-[#F8FBFB] relative overflow-hidden">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden text-white py-32 sm:py-40 lg:py-48">
        <div className="absolute inset-0 z-0">
          <Image
            src={serviceData.heroSection.backgroundImage}
            alt="Digital Marketing"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#010b22] px-4 py-2 text-xs tracking-wider text-white/90 backdrop-blur-sm mb-6">
              <FaBullhorn className="w-4 h-4 animate-spin" style={{ animationDuration: "3s" }} />
              {serviceData.heroSection.subtitle}
            </div>
            <h1 className="font-semibold tracking-tight text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl text-white">
              {serviceData.heroSection.title.split('\n')[0]}
              <br />
              <span className="text-[#f4cc6f]">{serviceData.heroSection.title.split('\n')[1]}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 mt-3 leading-relaxed">
              {serviceData.heroSection.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={serviceData.heroSection.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 transition-all duration-300 transform hover:scale-105"
              >
                {serviceData.heroSection.ctaText}
                <FaRocket className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold border-2 border-white/30 bg-[#010b22] backdrop-blur-sm text-white hover:bg-[#010b22] transition-all duration-300"
              >
                Learn More
                <FaArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="relative py-12 px-3 sm:px-4 md:px-6 lg:px-8 z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-cyan-900/10" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="relative rounded-3xl border border-white/10 bg-[#010b22] backdrop-blur-sm p-8 sm:p-12 overflow-hidden group hover:bg-[#010b22] hover:border-[#f4cc6f]/50 transition-all duration-500 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 prose prose-lg prose-invert max-w-none text-center">
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                {serviceData.introduction.paragraph1}
              </p>
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300">
                {serviceData.introduction.paragraph2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY DIGITAL MARKETING IS ESSENTIAL */}
      <section className="relative py-12 px-3 sm:px-4 md:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              Why Digital Marketing is Essential for Technology Businesses
            </h2>
          </div>

          <div className="relative rounded-3xl border border-white/10 bg-[#010b22] backdrop-blur-sm p-8 sm:p-12 overflow-hidden mb-8 hover:border-[#ecc064] transition-all duration-300">
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-6 text-center">
              {serviceData.whyEssential.intro}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {serviceData.whyEssential.challenges.map((challenge: any, index: number) => (
                <div key={index} className="relative rounded-2xl border border-white/10 bg-[#010b22] backdrop-blur-sm p-6">
                  <h3 className="text-lg md:text-xl font-bold text-[#f4cc6f] mb-3">{challenge.title}</h3>
                  <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed text-center">
                    {challenge.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="relative rounded-2xl border border-white/10 bg-[#010b22] backdrop-blur-sm p-6 mb-6">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">Supporting Statistics:</h3>
              <div className="space-y-3">
                {serviceData.whyEssential.statistics.map((stat: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="w-5 h-5 text-[#f4cc6f] flex-shrink-0 mt-0.5" />
                    <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">{stat}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">{serviceData.whyEssential.closing}</p>
          </div>
        </div>
      </section>

      {/* ALTIORA'S APPROACH */}
      <section className="relative py-12 px-3 sm:px-4 md:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              Altiora Infotech&apos;s Approach to Digital Marketing
            </h2>
          </div>

          <div className="relative rounded-3xl border border-white/10 bg-[#010b22] backdrop-blur-sm p-8 sm:p-12 overflow-hidden hover:border-[#ecc064] transition-all duration-300">
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-6 text-center">{serviceData.approach.paragraph1}</p>
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-6 text-center">{serviceData.approach.paragraph2}</p>
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-8 text-center">{serviceData.approach.paragraph3}</p>

            <div className="relative rounded-2xl border border-white/10 bg-[#010b22] backdrop-blur-sm p-6">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">Key strategies include:</h3>
              <div className="space-y-3">
                {serviceData.approach.keyStrategies.map((strategy: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="w-5 h-5 text-[#f4cc6f] flex-shrink-0 mt-0.5" />
                    <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">{strategy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPAIGN EXAMPLES */}
      <section className="relative py-12 px-3 sm:px-4 md:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">Campaign Examples and Statistics</h2>
          </div>

          <div className="relative rounded-3xl border border-white/10 bg-[#010b22] backdrop-blur-sm p-8 sm:p-12 overflow-hidden hover:border-[#ecc064] transition-all duration-300">
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-6">{serviceData.campaignExamples.paragraph1}</p>
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-6">{serviceData.campaignExamples.paragraph2}</p>
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">{serviceData.campaignExamples.paragraph3}</p>
          </div>
        </div>
      </section>

      {/* MULTI-CHANNEL MARKETING */}
      <section className="relative py-12 px-3 sm:px-4 md:px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Multi-Channel Marketing for Technology Businesses
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80">{serviceData.multiChannel.intro}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {serviceData.multiChannel.points.map((point: any, index: number) => {
              const Icon = iconMap[point.icon] || FaFileAlt;
              return (
                <div key={index} className="group relative rounded-2xl border border-white/10 bg-[#010b22] backdrop-blur-sm p-6 hover:bg-[#010b22] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f4cc6f] to-[#e6b85c] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-[#010c22]" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#f4cc6f] transition-colors">
                        {point.title}
                      </h3>
                      <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="relative rounded-2xl border border-white/10 bg-[#010b22] backdrop-blur-sm p-6">
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed text-center">{serviceData.multiChannel.closing}</p>
          </div>
        </div>
      </section>

      {/* WHY ALTIORA INFOTECH */}
      <section className="relative py-12 px-3 sm:px-4 md:px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Why Altiora Infotech is the Right Choice</h2>
          </div>
          <div className="relative rounded-2xl border border-white/10 bg-[#010b22] backdrop-blur-sm p-8">
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-8">{serviceData.whyChoose.intro}</p>
            <div className="relative rounded-2xl border border-white/10 bg-[#010b22] backdrop-blur-sm p-6 mb-6">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">Our clients benefit from:</h3>
              <div className="space-y-4">
                {serviceData.whyChoose.benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="w-6 h-6 text-[#f4cc6f] flex-shrink-0 mt-0.5" />
                    <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed italic">{serviceData.whyChoose.closing}</p>
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="relative py-12 px-3 sm:px-4 md:px-6 lg:px-8 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1">Conclusion</h2>
          </div>
          <div className="relative rounded-3xl border border-white/10 bg-[#010b22] backdrop-blur-sm p-8 sm:p-12">
            <p className="text-base sm:text-lg md:text-xl text-center text-white/80 leading-relaxed mb-4">{serviceData.conclusion.paragraph1}</p>
            <p className="text-base sm:text-lg md:text-xl text-center text-white/80 leading-relaxed">{serviceData.conclusion.paragraph2}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-7 pb-12 lg:pb-12 xl:pb-16 px-3 sm:px-4 md:px-6 lg:px-8" id="contact">
        <div className="max-w-6xl mx-auto w-full">
          <div className="relative p-8 sm:p-12 text-center rounded-3xl border border-white/20 bg-gradient-to-tr from-[#565dfb]/20 via-[#8156ff]/20 to-[#00d4ff]/20 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src={serviceData.ctaSection.backgroundImage}
                alt="Digital Marketing Services"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#010c22]/80 via-[#0a1038]/70 to-[#010c22]/80" />
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-[#f4cc6f]/10 to-[#e6b85c]/10 rounded-full blur-3xl -translate-y-1/2" />

            <div className="relative z-10">
              <div
                className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8 mx-auto"
                style={{ background: `linear-gradient(135deg, #ecc16533, #ecc16533)`, boxShadow: `0 0 0 2px #ecc1654D inset` }}
              >
                <FaBullhorn className="w-10 h-10 text-[#ecc165]" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6">
                {serviceData.ctaSection.title}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-white/80">
                {serviceData.ctaSection.description}
              </p>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-8">
                {serviceData.ctaSection.additionalDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={serviceData.ctaSection.primaryCTA.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-bold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 focus:shadow-lg focus:shadow-[#f4cc6f]/25 focus:outline-none focus:ring-2 focus:ring-[#f4cc6f]/50 transition-all duration-300 transform hover:scale-105 focus:scale-105"
                >
                  <FaRocket className="mr-2 w-5 h-5" />
                  {serviceData.ctaSection.primaryCTA.text}
                </Link>
                <Link
                  href={serviceData.ctaSection.secondaryCTA.link}
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-bold border border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                >
                  <FaEye className="mr-2 w-5 h-5" />
                  {serviceData.ctaSection.secondaryCTA.text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-12 px-3 sm:px-4 md:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">FAQ</h2>
            <p className="text-lg text-white/70">Expert answers to common digital marketing questions</p>
          </div>

          <div className="space-y-4">
            {serviceData.faqs.map((faq: any, index: number) => (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-[#010b22] backdrop-blur-sm overflow-hidden hover:bg-[#010b22] transition-all duration-300"
              >
                <button
                  onClick={() => setActiveTab(activeTab === index ? -1 : index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#f4cc6f] transition-colors">
                    {faq.question}
                  </h3>
                  <div className={`transform transition-transform duration-300 ${activeTab === index ? "rotate-180" : ""}`}>
                    <svg className="w-6 h-6 text-[#f4cc6f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeTab === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="px-6 pb-6">
                    <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .group:hover {
          box-shadow: 0 18px 36px rgba(244, 204, 111, 0.14);
        }
      `}</style>
    </div>
  );
}
