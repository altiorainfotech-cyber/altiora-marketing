"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import {
  Globe,
  CheckCircle,
  Eye,
  Search,
  Shield,
  ShoppingCart,
  TrendingUp,
  BarChart3,
  Target,
  Zap,
  Smartphone,
  Layout,
  RefreshCw,
  Settings,
  Code,
  Gauge,
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
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import styles from "../digital-marketing/dm.module.css";
import ServiceCard from "@/components/ServiceCard";
import ProcessTimeline from "@/components/ProcessTimeline";

// Website Type Card Component
const WebsiteTypeCard = ({ websiteType, className }: { websiteType: any; className?: string }) => {
  return (
    <motion.div
      className={cn("relative group cursor-pointer", className)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={`relative rounded-3xl p-6 md:p-8 border-2 transition-all duration-500 ${websiteType.borderColor} ${websiteType.bgGradient} backdrop-blur-sm overflow-hidden h-[460px] flex flex-col`}>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className={`absolute top-0 right-0 w-32 h-32 ${websiteType.iconBg} rounded-full blur-3xl animate-pulse`} />
          <div className={`absolute bottom-0 left-0 w-24 h-24 ${websiteType.iconBg} rounded-full blur-2xl animate-pulse`} style={{ animationDelay: '1s' }} />
        </div>

        {/* Icon */}
        <motion.div
          className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl ${websiteType.iconBg} mb-6 relative z-10`}
        >
          <websiteType.icon className={`w-8 h-8 md:w-10 md:h-10 ${websiteType.iconColor}`} />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3" dangerouslySetInnerHTML={{ __html: websiteType.highlightedName }} />
          <p className="text-white/80 text-base md:text-lg mb-4 leading-relaxed flex-1">{websiteType.description}</p>

          {/* Stats */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-center">
              <div className={`text-2xl font-bold ${websiteType.textColor}`}>{websiteType.stat1}</div>
              <div className="text-xs text-white/60">{websiteType.stat1Label}</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${websiteType.textColor}`}>{websiteType.stat2}</div>
              <div className="text-xs text-white/60">{websiteType.stat2Label}</div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {websiteType.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className={`w-4 h-4 ${websiteType.iconColor}`} />
                <span className="text-sm text-white/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hover Effect */}
        <motion.div
          className={`absolute inset-0 ${websiteType.hoverGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}
        />
      </div>
    </motion.div>
  );
};

// Website Performance Widget
const WebsitePerformanceWidget = () => {
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    { label: "PageSpeed Score", value: "98/100", change: "+42pts", icon: Gauge },
    { label: "SEO Score", value: "96/100", change: "+38pts", icon: Search },
    { label: "Conversion Rate", value: "4.8%", change: "+2.1%", icon: TrendingUp },
    { label: "Mobile Score", value: "99/100", change: "+35pts", icon: Smartphone },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
          <BarChart3 className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Website Performance</h3>
          <p className="text-white/60 text-sm">After our optimization</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={index}
              className={`p-4 rounded-2xl border transition-all duration-500 ${activeMetric === index
                  ? "border-[#f4cc6f] bg-[#f4cc6f]/10"
                  : "border-white/10 bg-white/5"
                }`}
              animate={activeMetric === index ? { scale: 1.05 } : { scale: 1 }}
            >
              <Icon className="w-5 h-5 text-white/70 mb-2" />
              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-xs text-white/60 mb-1">{metric.label}</div>
              <div className="text-xs font-semibold text-white/80">{metric.change}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default function WebsiteDevelopmentClient() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const total = 6;
    const interval = setInterval(() => {
      setActiveSlide((prev) => {
        const next = (prev + 1) % total;
        if (sliderRef.current) {
          const cardWidth = sliderRef.current.scrollWidth / total;
          sliderRef.current.scrollTo({ left: cardWidth * next, behavior: "smooth" });
        }
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const { ref: overviewRef, inView: overviewInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Website Types Data
  const websiteTypes = [
    {
      name: "Business Website",
      highlightedName: "Business <span class='text-[#f4cc6f]'>Website</span>",
      icon: Globe,
      description: "Professional corporate websites that build credibility and generate leads for your business 24/7.",
      stat1: "3x",
      stat1Label: "More Leads",
      stat2: "94%",
      stat2Label: "First Impressions",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Custom Design", "Lead Capture Forms", "SEO Optimized", "Analytics Integrated", "CMS Powered", "Mobile Responsive"],
    },
    {
      name: "E-Commerce Store",
      highlightedName: "E-Commerce <span class='text-[#f4cc6f]'>Store</span>",
      icon: ShoppingCart,
      description: "High-converting online stores with seamless checkout, inventory management, and payment integration.",
      stat1: "2.8x",
      stat1Label: "Avg. Conversion",
      stat2: "$0",
      stat2Label: "Transaction Fee",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Product Catalog", "Secure Checkout", "Payment Gateways", "Inventory Management", "Order Tracking", "Discount Codes"],
    },
    {
      name: "Landing Page",
      highlightedName: "Landing <span class='text-[#f4cc6f]'>Page</span>",
      icon: Target,
      description: "Laser-focused landing pages optimized for a single goal — converting visitors into leads or customers.",
      stat1: "5.7%",
      stat1Label: "Avg. CVR",
      stat2: "< 2s",
      stat2Label: "Load Time",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["A/B Testing Ready", "CRO Optimized", "Fast Loading", "Clear CTA Design", "Form Integration", "Pixel Tracking"],
    },
    {
      name: "Portfolio Website",
      highlightedName: "Portfolio <span class='text-[#f4cc6f]'>Website</span>",
      icon: Layout,
      description: "Showcase your work with elegant portfolio sites that impress clients and win more projects.",
      stat1: "4x",
      stat1Label: "Client Inquiries",
      stat2: "100%",
      stat2Label: "Custom Design",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Gallery Layouts", "Case Studies", "Contact Forms", "Project Filters", "Testimonials", "Brand Story"],
    },
    {
      name: "SaaS / Web App",
      highlightedName: "SaaS / <span class='text-[#f4cc6f]'>Web App</span>",
      icon: Code,
      description: "Scalable web applications with user dashboards, authentication, and custom workflows for your product.",
      stat1: "99.9%",
      stat1Label: "Uptime SLA",
      stat2: "∞",
      stat2Label: "Scalability",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["User Auth System", "Dashboard UI", "API Integration", "Database Design", "Admin Panel", "Subscription Plans"],
    },
    {
      name: "WordPress Website",
      highlightedName: "WordPress <span class='text-[#f4cc6f]'>Website</span>",
      icon: Settings,
      description: "Fully custom WordPress sites that are easy to manage, scalable, and optimized for search engines.",
      stat1: "43%",
      stat1Label: "Of The Web",
      stat2: "Easy",
      stat2Label: "Self-Management",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Custom Theme", "Plugin Setup", "SEO Plugins", "Blog Ready", "Easy Editor", "Security Hardened"],
    },
  ];

  const services = [
    {
      title: <>CRM <span className="text-[#f4cc6f]">Development</span></>,
      description: "Custom CRM solutions to manage customer relationships, track sales pipelines, and automate workflows for business growth.",
      icon: <Layout className="w-12 h-12" />,
      link: "/contact",
    },
    {
      title: <>SaaS <span className="text-[#f4cc6f]">Development</span></>,
      description: "Scalable SaaS platforms with subscription management, user dashboards, and multi-tenant architecture.",
      icon: <Code className="w-12 h-12" />,
      link: "/contact",
    },
    {
      title: <>Webapp <span className="text-[#f4cc6f]">Development</span></>,
      description: "Full-featured web applications with custom functionality, user authentication, and database integration.",
      icon: <Globe className="w-12 h-12" />,
      link: "/contact",
    },
    {
      title: <>UI/UX <span className="text-[#f4cc6f]">Design</span></>,
      description: "User-centered design that creates intuitive, engaging experiences and drives higher conversion rates.",
      icon: <Eye className="w-12 h-12" />,
      link: "/contact",
    },
    {
      title: <>E-Commerce <span className="text-[#f4cc6f]">Development</span></>,
      description: "Full-featured online stores with product management, secure payments, and seamless shopping experience.",
      icon: <ShoppingCart className="w-12 h-12" />,
      link: "/contact",
    },
    {
      title: <>Custom Website <span className="text-[#f4cc6f]">Design</span></>,
      description: "Unique, brand-aligned designs built from scratch to make your business stand out and convert visitors into customers.",
      icon: <Layout className="w-12 h-12" />,
      link: "/contact",
    },
    {
      title: <>Landing Page <span className="text-[#f4cc6f]">Design</span></>,
      description: "High-converting single-page designs focused on one goal — turning visitors into qualified leads.",
      icon: <Target className="w-12 h-12" />,
      link: "/contact",
    },
    {
      title: <>Website <span className="text-[#f4cc6f]">Redesign</span></>,
      description: "Modernize your outdated website with a fresh design, improved UX, and significantly better performance.",
      icon: <RefreshCw className="w-12 h-12" />,
      link: "/contact",
    },
    {
      title: <>Performance <span className="text-[#f4cc6f]">Optimization</span></>,
      description: "Speed audits, Core Web Vitals improvements, and technical fixes for faster, higher-ranking websites.",
      icon: <Zap className="w-12 h-12" />,
      link: "/contact",
    },
  ];

  const whyChoosePoints = [
    {
      title: "Responsive Design",
      description: "Pixel-perfect responsive layouts that work flawlessly on every device, screen size, and browser.",
      icon: Smartphone,
    },
    {
      title: "SEO-Optimized Code",
      description: "Clean semantic HTML, structured data, and on-page optimization built into every website we develop.",
      icon: Search,
    },
    {
      title: "Performance-First",
      description: "99+ PageSpeed scores on mobile and desktop with Core Web Vitals optimized from day one of every build.",
      icon: Zap,
    },
    {
      title: "Conversion-Focused",
      description: "Strategic layouts and UX patterns designed to guide visitors through your funnel and convert them into customers.",
      icon: TrendingUp,
    },
    {
      title: "Custom-Built",
      description: "Every website is crafted from scratch — no templates — with modern aesthetics aligned to your brand identity.",
      icon: Eye,
    },
    {
      title: "Secure & Reliable",
      description: "SSL certificates, secure code practices, and robust architecture to keep your website protected and always online.",
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#010c22] text-[#F8FBFB] overflow-x-hidden w-full max-w-full">
      <Header />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden text-white min-h-screen md:min-h-0 py-20 md:py-40 flex items-center md:block w-full max-w-full"
        style={{ background: "radial-gradient(85% 60% at 28% 8%, rgba(76,131,255,.25), rgba(0,0,0,0))" }}
      >
        <div className="absolute inset-0" style={{ animation: "float 6s ease-in-out infinite", transformStyle: "preserve-3d" }}>
          <Image src="/images/services-bg/Website Development Services.jpg.jpeg" alt="Website Development Services" fill priority className="object-cover" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-br from-purple-400/15 to-indigo-500/15 rounded-full blur-2xl animate-bounce" style={{ animationDuration: "3s" }} />
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-br from-green-400/20 to-teal-500/20 rounded-full blur-lg animate-ping" style={{ animationDuration: "4s" }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="w-full max-w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center w-full max-w-full">
              <div className="lg:col-span-12 space-y-6 w-full max-w-full">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 text-xs tracking-wider text-white/90 backdrop-blur-sm">
                  <Globe className="w-4 h-4" />
                  ALTIORA INFOTECH
                </span>
                <h1 className="font-semibold tracking-tight text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  Website Development
                  <br />
                  Services
                </h1>
                <p className="text-xl sm:text-2xl text-white/90">
                  Build a Website That Converts Visitors Into Customers
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="w-[60%] sm:w-auto inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 focus:shadow-lg focus:shadow-[#f4cc6f]/25 focus:outline-none focus:ring-2 focus:ring-[#f4cc6f]/50 transition-all duration-300 transform hover:scale-105 focus:scale-105"
                  >
                    Start Your Project
                    <FaRocket className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section
        ref={overviewRef}
        className="pb-12 pt-8 sm:pb-16 sm:pt-12 md:pb-20 md:pt-16 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#010b22]"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={overviewInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Top - Label with centered lines */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="h-px w-full max-w-[80px] sm:max-w-[120px] bg-gradient-to-l from-[#f4cc6f]/50 to-transparent" />
              <span className={styles.overviewTitle}>Overview</span>
              <div className="h-px w-full max-w-[80px] sm:max-w-[120px] bg-gradient-to-r from-[#f4cc6f]/50 to-transparent" />
            </div>

            {/* Main Content Centered */}
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={overviewInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
                className="max-w-5xl mx-auto py-8 px-8 sm:py-12 sm:px-12 md:py-14 md:px-14 rounded-[40px] border border-white/5 bg-white/[0.02] backdrop-blur-xl shadow-[0_20px_50px_rgba(244,204,111,0.05)] relative overflow-hidden"
              >
                <p className={`${styles.sectionDescription} !max-w-none relative z-10 !text-white/90`}>
                  Our <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Website Development Services</Link> help businesses establish a powerful online presence with custom-built, high-performance websites designed to convert visitors into customers. From sleek corporate sites to full-featured e-commerce platforms, we craft every website with precision — combining modern design, clean code, and conversion-focused strategy. Best suited for small businesses, service companies, e-commerce brands, and SaaS startups ready to grow online.
                </p>
                {/* Subtle inner light effect */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#f4cc6f]/10 blur-[80px] rounded-full pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>
        </div>
        {/* Background Accent Centered */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#f4cc6f]/5 blur-[120px] rounded-full pointer-events-none z-0" />
      </section>

      {/* Website Types Showcase */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Website Solutions We <span className="text-[#f4cc6f]">Build</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              From simple landing pages to complex web applications, we build every type of website your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteTypes.map((type, index) => (
              <WebsiteTypeCard key={index} websiteType={type} />
            ))}
          </div>
        </div>
      </section>

      {/* Website Performance Section */}
      <section className="py-20 px-6 bg-[#010b22]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Performance-First Development
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Every website we build is engineered for speed, SEO, and conversion. We optimize Core Web Vitals, ensure mobile responsiveness, and build with clean, semantic code that search engines love.
              </p>
              <div className="space-y-4">
                {[
                  "99+ PageSpeed scores on mobile and desktop",
                  "Core Web Vitals optimized from day one",
                  "SEO-friendly structure and schema markup",
                  "Conversion-rate optimization built in",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#f4cc6f]" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <WebsitePerformanceWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-[#010b22]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-center">
              Our Development Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Comprehensive web development solutions designed to build, grow, and maintain your online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                iconVariant="gray"
                hideServiceTag={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Website Development */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Why Choose Our Website Development?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We combine design excellence with technical precision to deliver websites that drive real business results.
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoosePoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative h-full p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0B0D2A] to-[#0B0D2A] shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-[#F4CC6F]/50 flex flex-col overflow-hidden">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center mb-5 flex-shrink-0 shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#f4cc6f] transition-colors duration-300">
                      {point.title}
                    </h3>
                    <p className="text-base text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300 flex-1">
                      {point.description}
                    </p>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f4cc6f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden">
            <div ref={sliderRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scrollbar-hide">
              {whyChoosePoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div key={index} className="group relative flex-shrink-0 w-[82vw] snap-start">
                    <div className="relative h-full p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0B0D2A] to-[#0B0D2A] shadow-xl hover:border-[#F4CC6F]/50 flex flex-col overflow-hidden">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center mb-5 flex-shrink-0 shadow-lg">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{point.title}</h3>
                      <p className="text-base text-white/70 leading-relaxed flex-1">{point.description}</p>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#f4cc6f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {whyChoosePoints.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${activeSlide === index ? "w-6 bg-[#f4cc6f]" : "w-2 bg-white/30"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <ProcessTimeline
        title="Our Website Development Process"
        subtitle="A structured approach from discovery to launch that ensures your website is beautiful, functional, and built to convert."
        steps={[
          {
            step: "01",
            title: "Discovery & Strategy",
            description: "We learn about your business, goals, target audience, and competitors to create a winning website strategy.",
            icon: Target,
            color: "from-blue-500 to-cyan-500",
          },
          {
            step: "02",
            title: "Design & Wireframing",
            description: "Craft stunning visual designs, page layouts, and interactive prototypes for your review and approval.",
            icon: Layout,
            color: "from-purple-500 to-pink-500",
          },
          {
            step: "03",
            title: "Development & Coding",
            description: "Build your website with clean, semantic code, responsive layouts, and performance-first architecture.",
            icon: Code,
            color: "from-green-500 to-emerald-500",
          },
          {
            step: "04",
            title: "Testing & QA",
            description: "Comprehensive cross-browser, cross-device testing and performance audits before going live.",
            icon: Shield,
            color: "from-yellow-500 to-orange-500",
          },
          {
            step: "05",
            title: "Launch & Deployment",
            description: "Smooth deployment to production with domain setup, SSL, speed optimization, and analytics setup.",
            icon: Zap,
            color: "from-red-500 to-pink-500",
          },
          {
            step: "06",
            title: "Support & Growth",
            description: "Ongoing maintenance, updates, performance monitoring, and conversion optimization post-launch.",
            icon: TrendingUp,
            color: "from-indigo-500 to-purple-500",
          },
        ]}
      />

      {/* Why Work With Altiora */}
      <section className="px-4 md:px-6 py-24 md:py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Why Work With Altiora <span className="text-[#f4cc6f]">Infotech?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Partner with website development experts who deliver measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { text: "Technical Expertise – Deep knowledge of modern web technologies, frameworks, and best practices.", icon: FaNetworkWired },
              { text: "Custom-Built Designs – Every website is crafted from scratch to match your unique brand and goals.", icon: FaTools },
              { text: "Performance-Focused – We obsess over speed, SEO scores, and Core Web Vitals for every build.", icon: FaCode },
              { text: "Security-First Builds – SSL, secure code practices, and protection built into every project.", icon: FaShieldAlt },
              { text: "Scalable Architecture – Built to grow with your business — add features, pages, and users easily.", icon: FaRocket },
              { text: "Transparent Partnership – Clear communication, honest timelines, and full ownership of your site.", icon: FaHandshake },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              const colors = [
                "from-blue-500 to-cyan-500",
                "from-purple-500 to-pink-500",
                "from-green-500 to-emerald-500",
                "from-red-500 to-orange-500",
                "from-yellow-500 to-orange-500",
                "from-teal-500 to-cyan-500",
              ];
              const titles = ["Technical", "Custom", "Performance", "Security", "Scalable", "Transparent"];
              const subtitles = ["Expertise", "Designs", "Focused", "First", "Architecture", "Partnership"];
              return (
                <div key={index} className="group relative cursor-pointer">
                  <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-4 md:p-6 transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-2xl hover:-translate-y-2">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors[index]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 md:gap-4 mb-4">
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${colors[index]} flex items-center justify-center`}>
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
              <Image src="/images/agentic-ai/cta/AI-Infrastructure-cta.png" alt="Website Development Services" fill className="object-cover rounded-3xl" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#010c22]/95 via-[#0a1038]/85 to-[#010c22]/95" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#f4cc6f]/20 to-[#e6b85c]/20 ring-2 ring-[#f4cc6f]/30 mb-8 mx-auto">
                <Globe className="w-10 h-10 text-[#f4cc6f]" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                Ready to Build Your Dream Website?
              </h3>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-6 md:mb-8">
                Transform your online presence with a website that works for your business around the clock. At Altiora Infotech, we combine stunning design with powerful functionality to create websites that attract, engage, and convert.
              </p>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-8">
                Ready to launch your new website? Share your vision and requirements, and we&apos;ll deliver a comprehensive proposal including design mockups, timeline, features, and investment details.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link
                  href="https://calendly.com/altiorainfotech/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 focus:shadow-lg focus:shadow-[#f4cc6f]/25 focus:outline-none focus:ring-2 focus:ring-[#f4cc6f]/50 transition-all duration-300 transform hover:scale-105 focus:scale-105"
                >
                  <FaRocket className="mr-2 w-5 h-5" />
                  Book Strategy Call
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold border border-white/30 bg-white/[0.08] backdrop-blur-sm text-white hover:bg-white/[0.12] focus:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                >
                  <FaEye className="mr-2 w-5 h-5" />
                  Get Custom Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <style jsx global>{`
        @keyframes float {
          0%,100%{ transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
          50%{ transform: translateY(-20px) rotateX(5deg) rotateY(5deg); }
        }
      `}</style>
    </div>
  );
}
