"use client";


import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import DNAAnimation from "@/components/DNAAnimation";
import {
  Code2,
  Database,
  Shield,
  Zap,
  Globe,
  Lock,
  CheckCircle,
  Server,
  Layers,
  BarChart3,
  GitBranch,
  Eye,
  Users
} from "lucide-react";
import {
  FaRocket,
  FaEye,
  FaCode,
  FaShieldAlt,
  FaNetworkWired,
  FaTools,
  FaHandshake,
} from "react-icons/fa";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";





const ServicesHoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gray-300 block rounded-3xl max-w-full"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="rounded-2xl h-full w-full p-6 overflow-hidden bg-gradient-to-br from-[#0B0D2A] to-[#0B0D2A] border border-transparent group-hover:border-[#F4CC6F]/50 relative z-20">
            <div className="relative z-50">
              <div className="mb-6 text-[#F4CC6F] transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-white tracking-wide">
                {item.title}
              </h4>
              <p className="text-base sm:text-lg md:text-xl text-white/80 tracking-wide leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function APIDevIntegrationClient() {

  const services = [
    {
      title: "API Product Design",
      description: "Resource modeling, standards, naming, pagination, errors, and documentation.",
      icon: <Code2 className="w-12 h-12" />
    },
    {
      title: "REST & GraphQL Services",
      description: "Well-structured endpoints, schema stitching, resolvers, and caching.",
      icon: <Database className="w-12 h-12" />
    },
    {
      title: "Eventing & Webhooks",
      description: "Async flows with queues, topics, retries, signing, and replay safety.",
      icon: <Zap className="w-12 h-12" />
    },
    {
      title: "Integration Engineering",
      description: "Reliable connectors to SaaS, legacy systems, and data platforms.",
      icon: <Globe className="w-12 h-12" />
    },
    {
      title: "Authentication & Authorization",
      description: "OAuth2, OIDC, keys, roles, scopes, and least-privilege policies.",
      icon: <Lock className="w-12 h-12" />
    },
    {
      title: "Performance & Caching",
      description: "CDN, edge caching, ETags, conditional requests, and rate coordination.",
      icon: <Server className="w-12 h-12" />
    },
    {
      title: "Quality & Contract Testing",
      description: "Consumer-driven contracts, schema validation, and non-breaking releases.",
      icon: <CheckCircle className="w-12 h-12" />
    },
    {
      title: "Observability & SLOs",
      description: "Logs, metrics, traces, dashboards, error budgets, and alerting.",
      icon: <BarChart3 className="w-12 h-12" />
    },
    {
      title: "Lifecycle & Governance",
      description: "Versioning, deprecation, changelogs, and developer portals.",
      icon: <GitBranch className="w-12 h-12" />
    }
  ];

  const mobileServices = [
    {
      title: "API Product Design",
      icon: <Code2 className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "REST & GraphQL Services",
      icon: <Database className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Eventing & Webhooks",
      icon: <Zap className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Integration Engineering",
      icon: <Globe className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Authentication & Authorization",
      icon: <Lock className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Performance & Caching",
      icon: <Server className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Quality & Contract Testing",
      icon: <CheckCircle className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Observability & SLOs",
      icon: <BarChart3 className="w-8 h-8 text-[#f4cc6f]" />
    }
  ];

  const whyChoosePoints = [
    "Product-minded API design that is easy to adopt and hard to misuse",
    "Proven patterns for scale, caching, idempotency, and backward compatibility",
    "Security by default with auth, rate limits, schema validation, and audit trails",
    "Deep integration experience across payments, CRM, ERP, CDP, and analytics",
    "Ongoing support for performance tuning, monitoring, and lifecycle management",
    "24/7 technical support with rapid response times and dedicated account management",
  ];



  return (
    <div className="min-h-screen flex flex-col bg-[#010c22] text-[#F8FBFB] overflow-x-hidden w-full max-w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden text-white py-20 md:py-40 w-full max-w-full" style={{
        background: "radial-gradient(85% 60% at 28% 8%, rgba(76,131,255,.25), rgba(0,0,0,0))"
      }}>
        <div className="absolute inset-0" style={{ animation: "float 6s ease-in-out infinite", transformStyle: "preserve-3d" }}>
          <Image src="https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/web2/api-development-integration-hero.jpg" alt="API Development & Integration" fill priority className="object-cover" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-br from-purple-400/15 to-cyan-500/15 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-lg animate-ping" style={{ animationDuration: '4s' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="w-full max-w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center w-full max-w-full">
              <div className="lg:col-span-12 space-y-6 w-full max-w-full">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 text-xs tracking-wider text-white/90 backdrop-blur-sm">
                  <FaCode className="w-4 h-4" />
                  ALTIORA INFOTECH
                </span>
                <h1 className="font-semibold tracking-tight text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  API Development & Integration
                  <br />
                  <span className="text-[#f4cc6f]">Services</span>
                </h1>
                <p className="text-xl sm:text-2xl text-white/90">
                  Connect systems, unlock data, and enable seamless integrations that scale.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                  <Link href="/contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 focus:shadow-lg focus:shadow-[#f4cc6f]/25 focus:outline-none focus:ring-2 focus:ring-[#f4cc6f]/50 transition-all duration-300 transform hover:scale-105 focus:scale-105">
                    Get Started
                    <FaRocket className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content sections from original file */}



      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#0B0D2A] to-[#0B0D2A] rounded-3xl p-8 md:p-12 border-2 border-[#F4CC6F]/30">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-center">
              Why Choose Our API Development & Integration?
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whyChoosePoints.slice(0, 4).map((point, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-[#0B0D2A]/50 rounded-xl border border-[#F4CC6F]/20">
                    <CheckCircle className="w-6 h-6 text-[#F4CC6F] mt-1 flex-shrink-0" />
                    <p className="text-base sm:text-lg md:text-xl text-white/80">{point}</p>
                  </div>
                ))}
              </div>
              {whyChoosePoints.length > 4 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {whyChoosePoints.slice(4).map((point, index) => (
                    <div key={index + 4} className="flex items-start gap-4 p-4 bg-[#0B0D2A]/50 rounded-xl border border-[#F4CC6F]/20">
                      <CheckCircle className="w-6 h-6 text-[#F4CC6F] mt-1 flex-shrink-0" />
                      <p className="text-base sm:text-lg md:text-xl text-white/80">{point}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-center">
              Our API Development & Integration
            </h2>
          </div>

          {/* Desktop Layout - Original Hover Effect */}
          <div className="hidden md:block">
            <ServicesHoverEffect items={services} />
          </div>

          {/* Mobile Layout - Simple 2-row Grid */}
          <div className="block md:hidden">
            <div className="grid grid-cols-2 gap-3">
              {mobileServices.map((service, index) => (
                <div key={service.title} className="relative rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-4 text-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{service.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <DNAAnimation
        title="Our API & Integration Process"
        description="Six meticulously crafted phases that transform complex integrations into seamless digital ecosystems. Our proven methodology ensures reliable, secure, and scalable API solutions."
        data={[
          { title: "Scoping", text: "Align stakeholders, consumers, use cases, and success metrics." },
          { title: "Architecture", text: "Define resources, events, auth model, and non-functional requirements." },
          { title: "Build", text: "Implement services, connectors, tests, and CI/CD with gates." },
          { title: "Quality", text: "Load tests, security reviews, contract checks, and documentation." },
          { title: "Launch", text: "Publish portal, SDKs/examples, changelogs, and support processes." },
          { title: "Operate", text: "Monitor SLOs, optimize latency and cost, evolve versions safely." }
        ]}
      />      {/* Why Work With Altiora */}
      <section className="px-4 md:px-6 py-16 md:py-12">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Why Work With Altiora Infotech?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Partner with experts who deliver results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { text: "Domain Expertise – Deep knowledge in modern technologies, architecture, and best practices.", icon: FaNetworkWired },
              { text: "Custom Solutions – Tailored solutions, not templates; each project fits your specific business logic.", icon: FaTools },
              { text: "End-to-End Capability – Complete service from ideation to maintenance.", icon: FaCode },
              { text: "Security-First Approach – Rigorous audits and security embedded in every layer.", icon: FaShieldAlt },
              { text: "Scalable & Future-ready – Modular design for evolving protocols and upgrades.", icon: FaRocket },
              { text: "Client-Centric Philosophy – Your success is our success; expect partnership and guidance.", icon: FaHandshake }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              const colors = ['from-blue-500 to-cyan-500', 'from-purple-500 to-pink-500', 'from-green-500 to-emerald-500', 'from-red-500 to-orange-500', 'from-yellow-500 to-orange-500', 'from-teal-500 to-cyan-500'];
              const titles = ['Expertise', 'Custom', 'End-to-End', 'Security', 'Scalable', 'Client-First'];
              const subtitles = ['Technical Knowledge', 'Solutions', 'Service', 'First', 'Architecture', 'Philosophy'];
              return (
                <div key={index} className="group relative cursor-pointer">
                  <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-4 md:p-6 transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-2xl hover:-translate-y-2">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors[index]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 md:gap-4 mb-4">
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${colors[index]} flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                          <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#f4cc6f] transition-colors duration-300">{titles[index]}</h3>
                          <span className="text-sm text-white/60">{subtitles[index]}</span>
                        </div>
                      </div>
                      <p className="text-base sm:text-lg md:text-xl text-white/80 group-hover:text-white transition-colors duration-300">{benefit.text}</p>
                      <div className="mt-3 md:mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden hidden md:block">
                        <div className={`h-full w-0 bg-gradient-to-r ${colors[index]} transition-all duration-700 group-hover:w-full rounded-full`} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-6xl mx-auto w-full">
          <div className="relative p-6 sm:p-8 md:p-12 text-center rounded-2xl md:rounded-3xl border border-white/20 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0">
              <Image src="https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/web2/api-development-integration-cta.jpg" alt="API Development & Integration" fill className="object-cover rounded-3xl" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#010c22]/95 via-[#0a1038]/85 to-[#010c22]/95" />
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#f4cc6f]/20 to-[#e6b85c]/20 ring-2 ring-[#f4cc6f]/30 mb-8 mx-auto">
                <FaRocket className="w-10 h-10 text-[#f4cc6f]" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                Ready to Build Your Solution?
              </h3>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-6 md:mb-8">
                Connect systems, unlock data, and enable seamless integrations that scale. At Altiora Infotech, we pair deep technical engineering with clear commercial thinking to deliver solutions that are secure, scalable, and aligned to your KPIs.
              </p>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-8">
                Ready to turn a concept into a roadmap? Share your goals and constraints, and we&apos;ll come back with a crisp blueprint: architecture options, timeline and milestones, security and compliance approach, and an investment estimate you can act on.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link
                  href="https://calendly.com/altiorainfotech/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 focus:shadow-lg focus:shadow-[#f4cc6f]/25 focus:outline-none focus:ring-2 focus:ring-[#f4cc6f]/50 transition-all duration-300 transform hover:scale-105 focus:scale-105"
                >
                  <FaRocket className="mr-2 w-5 h-5" />
                  Book Discovery Call
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold border border-white/30 bg-white/[0.08] backdrop-blur-sm text-white hover:bg-white/[0.12] focus:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                >
                  <FaEye className="mr-2 w-5 h-5" />
                  Send Your Brief
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <style jsx global>{`
        @keyframes float { 
          0%,100%{ transform: translateY(0px) rotateX(0deg) rotateY(0deg);} 
          50%{ transform: translateY(-20px) rotateX(5deg) rotateY(5deg);} 
        }
      `}</style>
    </div>
  );
}