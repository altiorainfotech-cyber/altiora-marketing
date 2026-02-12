"use client";

import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import {
  FaRocket,
  FaShieldAlt,
  FaCloud,
  FaCode,
  FaLock,
  FaLayerGroup,
  FaCheckCircle,
  FaArrowRight,
  FaDesktop,
  FaMobile,
  FaServer,
  FaPlug,
  FaCog,
  FaTools,
  FaEye,
} from "react-icons/fa";

const iconMap: { [key: string]: React.ComponentType<any> } = {
  FaDesktop,
  FaMobile,
  FaCloud,
  FaPlug,
  FaCog,
  FaServer,
  FaLock,
  FaShieldAlt,
  FaEye,
  FaLayerGroup,
  FaCode,
  FaTools,
};

export default function CodeToCloudClient() {
  const [activeTab, setActiveTab] = useState(0);
  const [serviceData, setServiceData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await fetch('/api/web2-services/from-code-to-cloud-end-to-end');
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
    <>
      <div className="min-h-screen flex flex-col bg-[#010c22] text-[#F8FBFB] relative overflow-hidden">
        <Header />

        {/* HERO */}
        <section className="relative overflow-hidden text-white py-32 sm:py-40 lg:py-48">
          <div className="absolute inset-0 z-0">
            <Image
              src={serviceData.heroSection.backgroundImage}
              alt="Web2 Services"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#010b22] px-4 py-2 text-xs tracking-wider text-white/90 backdrop-blur-sm mb-6">
                <FaRocket className="w-4 h-4 animate-spin" style={{ animationDuration: "3s" }} />
                {serviceData.heroSection.subtitle}
              </div>

              <h1 className="font-semibold tracking-tight text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl text-white">
                {serviceData.heroSection.title.split('\n')[0]}
                <br />
                <span className="text-[#f4cc6f]">{serviceData.heroSection.title.split('\n')[1]}</span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
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

        {/* TRANSFORMING DIGITAL EXPERIENCES */}
        <section className="relative py-12 px-3 sm:px-4 md:px-6 lg:px-8 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">Transforming Digital Experiences Across Platforms</h2>
            </div>

            <div className="relative rounded-3xl border border-white/10 bg-[#010b22] backdrop-blur-sm p-8 sm:p-12 overflow-hidden mb-8 hover:border-[#ecc064] transition-all duration-300">
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-6">{serviceData.transforming.intro}</p>
              <div className="space-y-3 mb-6">
                {serviceData.transforming.points.map((point: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="w-5 h-5 text-[#f4cc6f] flex-shrink-0 mt-0.5" />
                    <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">{serviceData.transforming.closing}</p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="relative py-12 px-3 sm:px-4 md:px-6 lg:px-8 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-8">
              {serviceData.services.map((service: any, index: number) => {
                const Icon = iconMap[service.icon] || FaCode;
                return (
                  <div
                    key={index}
                    className="group relative rounded-3xl border border-white/10 bg-[#010b22] backdrop-blur-sm p-8 sm:p-10 hover:bg-[#010b22] hover:border-[#f4cc6f]/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#f4cc6f] transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-6">{service.desc}</p>
                    <div className="space-y-3 mb-6">
                      {service.points.map((point: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-3">
                          <FaCheckCircle className="w-5 h-5 text-[#f4cc6f] flex-shrink-0 mt-0.5" />
                          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>
                    <div className="relative rounded-2xl border border-white/10 bg-[#010b22] backdrop-blur-sm p-6 mb-4">
                      <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">{service.benefits}</p>
                    </div>
                    <div className="relative rounded-2xl border border-white/10 bg-[#010b22] backdrop-blur-sm p-6">
                      <p className="text-base sm:text-lg md:text-xl text-white/80 italic leading-relaxed">{service.example}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECURITY AND RELIABILITY */}
        <section className="relative py-12 px-3 sm:px-4 md:px-6 lg:px-8 z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Security and Reliability</h2>
              <p className="text-base sm:text-lg md:text-xl text-white/80">{serviceData.security.intro}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {serviceData.security.points.map((point: any, index: number) => {
                const Icon = iconMap[point.icon] || FaLock;
                return (
                  <div
                    key={index}
                    className="group relative rounded-2xl border border-white/10 bg-[#010b22] backdrop-blur-sm p-6 hover:bg-[#010b22] transition-all duration-300"
                  >
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
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed text-center">{serviceData.security.benefits}</p>
            </div>
          </div>
        </section>

        {/* STEP-BY-STEP APPROACH */}
        <section className="relative py-12 px-3 sm:px-4 md:px-6 lg:px-8 z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Step-by-Step Approach to Web2 Services</h2>
              <p className="text-base sm:text-lg md:text-xl text-white/80">{serviceData.approach.intro}</p>
            </div>
            <div className="relative rounded-3xl border border-white/10 bg-[#010b22] backdrop-blur-sm p-8 sm:p-12 overflow-hidden hover:border-[#ecc064] transition-all duration-300">
              <div className="space-y-4">
                {serviceData.approach.steps.map((step: string, index: number) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f4cc6f] to-[#e6b85c] flex items-center justify-center flex-shrink-0 text-[#010c22] font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed pt-0.5">{step}</p>
                  </div>
                ))}
              </div>
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mt-8 text-center italic">{serviceData.approach.closing}</p>
            </div>
          </div>
        </section>

        {/* TECHNICAL INSIGHTS */}
        <section className="relative py-12 px-3 sm:px-4 md:px-6 lg:px-8 z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{serviceData.technicalInsights.title}</h2>
              <p className="text-base sm:text-lg md:text-xl text-white/80">
                {serviceData.technicalInsights.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {serviceData.technicalInsights.frameworks.map((item: any, i: number) => {
                const Icon = iconMap[item.icon] || FaCode;
                return (
                  <div
                    key={i}
                    className="group relative rounded-2xl border border-white/10 bg-[#010b22] backdrop-blur-sm p-6 hover:border-[#f4cc6f]/60 hover:shadow-xl hover:shadow-[#f4cc6f]/10 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f4cc6f] to-[#e6b85c] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-[#010c22]" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-[#f4cc6f] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative rounded-2xl border border-white/10 bg-[#010b22] backdrop-blur-sm p-6">
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed text-center">
                {serviceData.technicalInsights.closing}
              </p>
            </div>
          </div>
        </section>

        {/* BENEFITS OF CHOOSING ALTIORA */}
        <section className="relative py-12 px-3 sm:px-4 md:px-6 lg:px-8 z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Benefits of Choosing Altiora Infotech</h2>
            </div>
            <div className="relative rounded-2xl border border-white/10 bg-[#010b22] backdrop-blur-sm p-8">
              <div className="space-y-4 mb-6">
                {serviceData.benefits.items.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="w-6 h-6 text-[#f4cc6f] flex-shrink-0 mt-0.5" />
                    <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <div className="relative rounded-2xl border border-[#f4cc6f]/30 bg-[#010b22] backdrop-blur-sm p-6 mt-6">
                <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed italic">{serviceData.benefits.example}</p>
              </div>
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
              <p className="text-base sm:text-lg md:text-xl text-center text-white/80 leading-relaxed mb-4">
                {serviceData.conclusion.paragraph1}
              </p>
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
                  alt="Web2 Services"
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
                  <FaRocket className="w-10 h-10 text-[#ecc165]" />
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
              <p className="text-lg text-white/70">Expert answers to common Web2 development questions</p>
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
    </>
  );
}
