"use client";

import React, { useState, useEffect } from "react";
import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  FaRocket,
  FaEye,
  FaCode,
  FaShieldAlt,
  FaNetworkWired,
  FaTools,
  FaCheck,
  FaGlobe,
  FaChartLine,
  FaHandshake,
  FaWallet,
  FaCoins,
} from "react-icons/fa";

interface Web3ServiceData {
  serviceType: string;
  heroSection: {
    title: string;
    subtitle: string;
    description: string;
    backgroundImage: string;
    ctaText: string;
    ctaLink: string;
  };
  whatIsSection: {
    title: string;
    subtitle: string;
    description: string;
    additionalDescription?: string;
    icon: string;
  };
  whyMattersSection?: {
    title: string;
    subtitle: string;
    technicalAdvantages: string[];
    businessBenefits: string[];
  };
  whyChoosePoints: Array<{
    text: string;
    icon: string;
  }>;
  services: Array<{
    name: string;
    description?: string;
    image: string;
    link?: string;
  }>;
  processSteps: Array<{
    step: number;
    title: string;
    description: string;
    icon: string;
  }>;
  whyWorkWithUs: Array<{
    text: string;
    icon: string;
    title: string;
    subtitle: string;
  }>;
  ctaSection: {
    title: string;
    description: string;
    additionalDescription?: string;
    backgroundImage: string;
    primaryCTA: {
      text: string;
      link: string;
    };
    secondaryCTA: {
      text: string;
      link: string;
    };
  };
}

interface Web3ServicePageProps {
  serviceType: string;
}

const iconMap: { [key: string]: any } = {
  FaRocket,
  FaEye,
  FaCode,
  FaShieldAlt,
  FaNetworkWired,
  FaTools,
  FaCheck,
  FaGlobe,
  FaChartLine,
  FaHandshake,
  FaWallet,
  FaCoins,
};

export default function Web3ServicePage({ serviceType }: Web3ServicePageProps) {
  const [serviceData, setServiceData] = useState<Web3ServiceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await fetch(`/api/web3-services/${serviceType}`);
        const result = await response.json();
        
        if (result.success) {
          setServiceData(result.data);
        } else {
          setError(result.error || 'Failed to fetch service data');
        }
      } catch (err) {
        setError('Failed to fetch service data');
        console.error('Error fetching service data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceData();
  }, [serviceType]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#010c22] text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#f4cc6f] mx-auto mb-4"></div>
          <p className="text-xl">Loading service data...</p>
        </div>
      </div>
    );
  }

  if (error || !serviceData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#010c22] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-xl mb-8">{error || 'The requested service could not be found.'}</p>
          <Link href="/services/web3" className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg transition-all duration-300">
            Back to Web3 Services
          </Link>
        </div>
      </div>
    );
  }

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName] || FaCode;
    return IconComponent;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#010c22] text-[#F8FBFB]">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden text-white py-20 md:py-40" style={{
        background: "radial-gradient(85% 60% at 28% 8%, rgba(76,131,255,.25), rgba(0,0,0,0))"
      }}>
        <div className="absolute inset-0" style={{ animation: "float 6s ease-in-out infinite", transformStyle: "preserve-3d" }}>
          <Image src={serviceData.heroSection.backgroundImage} alt={serviceData.heroSection.title} fill priority className="object-cover" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-br from-purple-400/15 to-cyan-500/15 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-lg animate-ping" style={{ animationDuration: '4s' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-12 space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 text-xs tracking-wider text-white/90 backdrop-blur-sm">
                  <FaCode className="w-4 h-4" />
                  ALTIORA INFOTECH
                </span>
                <h1 className="font-semibold tracking-tight text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  {serviceData.heroSection.title.split(' ').slice(0, -1).join(' ')}
                  <br />
                  <span className="text-[#f4cc6f]">{serviceData.heroSection.title.split(' ').slice(-1)[0]}</span>
                </h1>
                <p className="text-xl sm:text-2xl text-white/90">
                  {serviceData.heroSection.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                  <Link href={serviceData.heroSection.ctaLink} className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 focus:shadow-lg focus:shadow-[#f4cc6f]/25 focus:outline-none focus:ring-2 focus:ring-[#f4cc6f]/50 transition-all duration-300 transform hover:scale-105 focus:scale-105">
                    {serviceData.heroSection.ctaText}
                    <FaRocket className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Section */}
      <section className="px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white text-center">
              {serviceData.whatIsSection.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80">
              {serviceData.whatIsSection.subtitle}
            </p>
          </div>
          <div className="relative rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 md:p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#f4cc6f]/20 to-[#e6b85c]/20 ring-2 ring-[#f4cc6f]/30 mb-8 mx-auto">
                {React.createElement(getIcon(serviceData.whatIsSection.icon), { className: "w-10 h-10 text-[#f4cc6f]" })}
              </div>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 md:mb-8">
                {serviceData.whatIsSection.description}
              </p>
              {serviceData.whatIsSection.additionalDescription && (
                <p className="text-base sm:text-lg md:text-xl text-white/80">
                  {serviceData.whatIsSection.additionalDescription}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Matters Section */}
      {serviceData.whyMattersSection && (
        <section className="px-4 md:px-6 py-8 md:py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-cyan-900/10" />
          <div className="max-w-7xl mx-auto relative z-10 w-full">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white text-center">
                {serviceData.whyMattersSection.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/80">
                {serviceData.whyMattersSection.subtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f4cc6f]/5 to-blue-500/5 rounded-3xl" />
                <div className="relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#f4cc6f] to-[#e6b85c] rounded-2xl flex items-center justify-center">
                      <FaShieldAlt className="w-8 h-8 text-[#010c22]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">Technical Advantages</h3>
                  </div>
                  <div className="space-y-4">
                    {serviceData.whyMattersSection.technicalAdvantages.map((item, index) => (
                      <div key={index} className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/[0.05] transition-all duration-300">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#f4cc6f]/30 to-[#e6b85c]/30 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                          <FaCheck className="w-3 h-3 text-[#f4cc6f]" />
                        </div>
                        <p className="text-white/90 leading-relaxed font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-3xl" />
                <div className="relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 h-full">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                      <FaChartLine className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">Business Benefits</h3>
                  </div>
                  <div className="space-y-4">
                    {serviceData.whyMattersSection.businessBenefits.map((item, index) => (
                      <div key={index} className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/[0.05] transition-all duration-300">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-500/30 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                          <FaCheck className="w-3 h-3 text-cyan-400" />
                        </div>
                        <p className="text-white/90 leading-relaxed font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="px-4 md:px-6 py-8 md:py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f4cc6f]/5 via-transparent to-blue-500/5" />
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent mb-4 md:mb-6">
              Why Choose Altiora Infotech?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8 md:mb-12">
              We design solutions that align with your business goals.
            </p>
            <div className="max-w-5xl mx-auto mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {serviceData.whyChoosePoints.slice(0, 3).map((point, index) => {
                  const IconComponent = getIcon(point.icon);
                  const titles = ['Strategic Design', 'Long-term Focus', 'Practical Innovation'];
                  const descriptions = ['Business-aligned solutions', 'Sustainable architecture', 'Real-world performance'];
                  return (
                    <div key={index} className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="w-10 h-10 text-[#f4cc6f]" />
                      </div>
                      <h4 className="text-lg md:text-xl font-bold text-white mb-3">{titles[index]}</h4>
                      <p className="text-base text-white/70">{descriptions[index]}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="px-4 md:px-6 py-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent mb-3">
              Our Service Offerings
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive development services for every need.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4">
            {serviceData.services.map((service, index) => (
              <div key={service.name} className={`relative rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-4 md:p-6 text-center ${index === 8 ? 'hidden lg:block' : ''}`}>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                  <Image src={service.image} alt={service.name} width={32} height={32} className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.name}</h3>
                {service.description && (
                  <p className="text-sm text-white/70">{service.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      {serviceData.processSteps.length > 0 && (
        <section className="px-4 md:px-6 py-8 md:py-12">
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent mb-4 md:mb-6">
                Our Development Process
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                A structured, transparent, and iterative process to transform your idea into a live product.
              </p>
            </div>

            {/* Wavy Process Line */}
            <div className="relative">
              <div className="relative mb-12 md:mb-16">
                <svg className="w-full h-32" viewBox="0 0 800 120" preserveAspectRatio="none">
                  <path
                    d="M0,60 Q100,20 200,60 T400,60 T600,60 T800,60"
                    stroke="#ffffff20"
                    strokeWidth="3"
                    fill="none"
                  />
                  <path
                    d="M0,60 Q100,20 200,60 T400,60 T600,60 T800,60"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    fill="none"
                    pathLength="100"
                    strokeDasharray={`${((activeStep - 1) / (serviceData.processSteps.length - 1)) * 100} 100`}
                    className="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f4cc6f" />
                      <stop offset="50%" stopColor="#6EA8FE" />
                      <stop offset="100%" stopColor="#00D4FF" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Number Circles */}
                <div className="absolute inset-0 flex justify-between items-center px-4">
                  {serviceData.processSteps.map((step) => (
                    <button
                      key={step.step}
                      onClick={() => setActiveStep(step.step)}
                      className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 transform hover:scale-110 z-10 ${
                        step.step <= activeStep
                          ? 'bg-gradient-to-br from-[#f4cc6f] to-[#e6b85c] text-[#010c22] shadow-lg'
                          : 'bg-white/10 text-white/70 hover:bg-white/20'
                      } ${
                        activeStep === step.step ? 'scale-110' : ''
                      }`}
                    >
                      {step.step}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Step Card */}
              <div className="max-w-4xl mx-auto px-4 md:px-0">
                {serviceData.processSteps.map((step) => (
                  <div
                    key={step.step}
                    className={`transition-all duration-500 ${
                      activeStep === step.step ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 absolute'
                    }`}
                  >
                    <div className="relative rounded-2xl sm:rounded-3xl border border-white/20 bg-white/[0.05] backdrop-blur-sm p-4 sm:p-6 md:p-12">
                      <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#f4cc6f]/10 via-blue-500/5 to-purple-500/10" />
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-4 md:mb-6">
                          <div className="text-3xl sm:text-4xl md:text-6xl">{step.icon}</div>
                          <div>
                            <div className="text-xs sm:text-sm text-[#f4cc6f] font-semibold mb-1 sm:mb-2">STEP {step.step.toString().padStart(2, '0')}</div>
                            <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-white mb-1 sm:mb-2">{step.title}</h3>
                          </div>
                        </div>
                        <p className="text-sm sm:text-lg md:text-xl text-white/90 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Work With Altiora */}
      <section className="px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent mb-4">
              Why Work With Altiora Infotech?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Partner with experts who deliver results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {serviceData.whyWorkWithUs.map((benefit, index) => {
              const IconComponent = getIcon(benefit.icon);
              const colors = ['from-blue-500 to-cyan-500', 'from-purple-500 to-pink-500', 'from-green-500 to-emerald-500', 'from-red-500 to-orange-500', 'from-yellow-500 to-orange-500', 'from-teal-500 to-cyan-500'];
              return (
                <div key={index} className="group relative cursor-pointer">
                  <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-4 md:p-6 transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-2xl hover:-translate-y-2">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors[index % colors.length]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 md:gap-4 mb-4">
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${colors[index % colors.length]} flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                          <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#f4cc6f] transition-colors duration-300">{benefit.title}</h3>
                          <span className="text-sm text-white/60">{benefit.subtitle}</span>
                        </div>
                      </div>
                      <p className="text-base sm:text-lg md:text-xl text-white/80 group-hover:text-white transition-colors duration-300">{benefit.text}</p>
                      <div className="mt-3 md:mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden hidden md:block">
                        <div className={`h-full w-0 bg-gradient-to-r ${colors[index % colors.length]} transition-all duration-700 group-hover:w-full rounded-full`} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-6xl mx-auto w-full">
          <div className="relative p-6 sm:p-8 md:p-12 text-center rounded-2xl md:rounded-3xl border border-white/20 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0">
              <Image src={serviceData.ctaSection.backgroundImage} alt={serviceData.ctaSection.title} fill className="object-cover rounded-3xl" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#010c22]/95 via-[#0a1038]/85 to-[#010c22]/95" />
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#f4cc6f]/20 to-[#e6b85c]/20 ring-2 ring-[#f4cc6f]/30 mb-8 mx-auto">
                <FaRocket className="w-10 h-10 text-[#f4cc6f]" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                {serviceData.ctaSection.title}
              </h3>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-6 md:mb-8">
                {serviceData.ctaSection.description}
              </p>
              {serviceData.ctaSection.additionalDescription && (
                <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-8">
                  {serviceData.ctaSection.additionalDescription}
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link
                  href={serviceData.ctaSection.primaryCTA.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 focus:shadow-lg focus:shadow-[#f4cc6f]/25 focus:outline-none focus:ring-2 focus:ring-[#f4cc6f]/50 transition-all duration-300 transform hover:scale-105 focus:scale-105"
                >
                  <FaRocket className="mr-2 w-5 h-5" />
                  {serviceData.ctaSection.primaryCTA.text}
                </Link>
                <Link
                  href={serviceData.ctaSection.secondaryCTA.link}
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold border border-white/30 bg-white/[0.08] backdrop-blur-sm text-white hover:bg-white/[0.12] focus:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                >
                  <FaEye className="mr-2 w-5 h-5" />
                  {serviceData.ctaSection.secondaryCTA.text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <style jsx global>{`
        @keyframes float { 0%,100%{ transform: translateY(0px) rotateX(0deg) rotateY(0deg);} 50%{ transform: translateY(-20px) rotateX(10deg) rotateY(5deg);} }
        @keyframes spin { to { transform: rotate(360deg); } }
        .animate-border { background: conic-gradient(from 0deg, rgba(110,168,254,0.6), rgba(129,86,255,0.6), rgba(0,212,255,0.6), rgba(110,168,254,0.6)); animation: spin 14s linear infinite; filter: blur(14px); }
        .group:hover { box-shadow: 0 10px 30px rgba(244,204,111,0.12); }
        .hover-alt-shadow:hover, .hover-alt-shadow:focus { box-shadow: 1px 0px 5px 1px rgb(244 204 111); }
      `}</style>
    </div>
  );
}