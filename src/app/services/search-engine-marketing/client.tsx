"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import {
  Globe,
  CheckCircle,
  TrendingUp,
  BarChart3,
  Target,
  Search,
  MousePointer,
  Eye,
  DollarSign,
  ArrowRight,
  Star,
  Clock,
  Zap,
  Settings,
  FileText,
  Monitor,
  Shield
} from "lucide-react";
import {
  FaRocket,
  FaEye,
  FaChartLine,
  FaBullseye,
  FaCog,
  FaHandshake,
  FaGoogle,
  FaSearch,
  FaAd,
  FaKeyboard,
  FaCalculator,
  FaUsers
} from "react-icons/fa";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import styles from "../digital-marketing/dm.module.css";
import ServiceCard from "@/components/ServiceCard";
import ProcessTimeline from "@/components/ProcessTimeline";

// SEM Metrics Dashboard Component
const SEMDashboard = () => {
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    { label: "Search Visibility", value: "89%", change: "+156%", color: "text-green-400", icon: Eye },
    { label: "Click-Through Rate", value: "12.4%", change: "+89%", color: "text-blue-400", icon: MousePointer },
    { label: "Conversion Rate", value: "8.9%", change: "+234%", color: "text-purple-400", icon: Target },
    { label: "Cost Per Lead", value: "$23", change: "-45%", color: "text-yellow-400", icon: DollarSign }
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
          <h3 className="text-xl font-bold text-white">SEM Performance</h3>
          <p className="text-white/60 text-sm">Real-time search marketing metrics</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={index}
              className={`p-4 rounded-2xl border transition-all duration-500 ${activeMetric === index
                ? 'border-[#f4cc6f] bg-[#f4cc6f]/10'
                : 'border-white/10 bg-white/5'
                }`}
              animate={activeMetric === index ? { scale: 1.05 } : { scale: 1 }}
            >
              <Icon className={`w-5 h-5 text-white/70 mb-2`} />
              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-xs text-white/60 mb-1">{metric.label}</div>
              <div className={`text-xs font-semibold text-white/80`}>{metric.change}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// SEM Strategy Card Component
const SEMStrategyCard = ({ strategy, className }: { strategy: any; className?: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn("relative group cursor-pointer", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={`relative rounded-3xl p-6 md:p-8 border-2 transition-all duration-500 ${strategy.borderColor} ${strategy.bgGradient} backdrop-blur-sm overflow-hidden h-[380px] flex flex-col`}>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className={`absolute top-0 right-0 w-32 h-32 ${strategy.iconBg} rounded-full blur-3xl animate-pulse`} />
          <div className={`absolute bottom-0 left-0 w-24 h-24 ${strategy.iconBg} rounded-full blur-2xl animate-pulse`} style={{ animationDelay: '1s' }} />
        </div>

        {/* Strategy Icon */}
        <motion.div
          className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl ${strategy.iconBg} mb-6 relative z-10`}
        >
          <strategy.icon className={`w-8 h-8 md:w-10 md:h-10 ${strategy.iconColor}`} />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3" dangerouslySetInnerHTML={{ __html: strategy.highlightedName }} />
          <p className="text-white/80 text-base md:text-lg mb-4 leading-relaxed flex-1">{strategy.description}</p>

          {/* Stats */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-center">
              <div className={`text-2xl font-bold ${strategy.textColor}`}>{strategy.impact}</div>
              <div className="text-xs text-white/60">Avg Impact</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${strategy.textColor}`}>{strategy.timeframe}</div>
              <div className="text-xs text-white/60">Timeframe</div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {strategy.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className={`w-4 h-4 ${strategy.iconColor}`} />
                <span className="text-sm text-white/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hover Effect */}
        <motion.div
          className={`absolute inset-0 ${strategy.hoverGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}
        />
      </div>
    </motion.div>
  );
};

export default function SearchEngineMarketingClient() {
  const { ref: overviewRef, inView: overviewInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // SEM Strategies Data
  const semStrategies = [
    {
      name: "Organic Search (SEO)",
      highlightedName: "Organic Search <span class='text-[#f4cc6f]'>(SEO)</span>",
      icon: Search,
      description: "Comprehensive SEO strategies to improve organic rankings and drive sustainable long-term traffic growth.",
      impact: "+234%",
      timeframe: "3-6 months",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Keyword Optimization", "Technical SEO", "Content Strategy", "Link Building", "Schema Markup", "Core Web Vitals"]
    },
    {
      name: "Paid Search (PPC)",
      highlightedName: "Paid Search <span class='text-[#f4cc6f]'>(PPC)</span>",
      icon: DollarSign,
      description: "Strategic paid search campaigns for immediate visibility and targeted traffic with optimized ROI.",
      impact: "+189%",
      timeframe: "1-2 weeks",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Google Ads", "Bing Ads", "Shopping Campaigns", "Display Advertising", "Performance Max", "Local Campaigns"]
    },
    {
      name: "Local Search Marketing",
      highlightedName: "Local Search <span class='text-[#f4cc6f]'>Marketing</span>",
      icon: Globe,
      description: "Dominate local search results with optimized Google My Business and location-based strategies.",
      impact: "+156%",
      timeframe: "2-4 weeks",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Google My Business", "Local Citations", "Review Management", "Map Pack Optimization", "Local Schema", "NAP Consistency"]
    },
    {
      name: "Search Analytics & Optimization",
      highlightedName: "Search Analytics & <span class='text-[#f4cc6f]'>Optimization</span>",
      icon: BarChart3,
      description: "Advanced analytics and continuous optimization for maximum search performance and ROI.",
      impact: "+278%",
      timeframe: "Ongoing",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Performance Tracking", "Conversion Optimization", "A/B Testing", "ROI Analysis", "Competitor Analysis", "Attribution Modeling"]
    }
  ];

  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Comprehensive SEO strategies to improve organic rankings and drive sustainable traffic growth.",
      icon: <FaSearch className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Pay-Per-Click Advertising (PPC)",
      description: "Strategic paid search campaigns across Google Ads, Bing Ads, and other search platforms.",
      icon: <FaAd className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Keyword Research & Strategy",
      description: "Comprehensive keyword analysis and search intent mapping for maximum search visibility.",
      icon: <FaKeyboard className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Local Search Marketing",
      description: "Dominate local search results with optimized Google My Business and location-based strategies.",
      icon: <Globe className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Search Analytics & Reporting",
      description: "Advanced search performance tracking, conversion analysis, and comprehensive ROI reporting.",
      icon: <BarChart3 className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Conversion Rate Optimization",
      description: "Landing page optimization and conversion funnel improvement for maximum search ROI.",
      icon: <Target className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Technical Search Optimization",
      description: "Technical SEO audits, site speed optimization, and search engine crawlability improvements.",
      icon: <Settings className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Search Competitor Analysis",
      description: "Comprehensive competitive analysis and search market intelligence for strategic advantage.",
      icon: <Eye className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Search Strategy Consulting",
      description: "Strategic search marketing consulting and comprehensive search visibility planning.",
      icon: <FaBullseye className="w-12 h-12" />,
      link: "/contact"
    }
  ];

  const mobileServices = [
    {
      title: "SEO Services",
      icon: <FaSearch className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "PPC Advertising",
      icon: <FaAd className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Keyword Research",
      icon: <FaKeyboard className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Local Search",
      icon: <Globe className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Search Analytics",
      icon: <BarChart3 className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Conversion Optimization",
      icon: <Target className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Technical SEO",
      icon: <Settings className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Competitor Analysis",
      icon: <Eye className="w-8 h-8 text-[#f4cc6f]" />
    }
  ];

  const whyChoosePoints = [
    "Integrated SEO and PPC strategies for maximum search visibility and performance",
    "Advanced keyword research and competitive analysis for strategic market advantage",
    "Data-driven optimization with comprehensive analytics and performance tracking",
    "Local search expertise for businesses targeting geographic markets",
    "Technical SEO mastery with focus on site performance and user experience",
    "Transparent reporting with detailed insights and actionable recommendations",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#010c22] text-[#F8FBFB] overflow-x-hidden w-full max-w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden text-white py-20 md:py-40 w-full max-w-full" style={{
        background: "radial-gradient(85% 60% at 28% 8%, rgba(76,131,255,.25), rgba(0,0,0,0))"
      }}>
        <div className="absolute inset-0" style={{ animation: "float 6s ease-in-out infinite", transformStyle: "preserve-3d" }}>
          <Image src="https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/web2/custom-web-application-development-hero.jpg" alt="Search Engine Marketing" fill priority className="object-cover" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-br from-purple-400/15 to-pink-500/15 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-lg animate-ping" style={{ animationDuration: '4s' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="w-full max-w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center w-full max-w-full">
              <div className="lg:col-span-12 space-y-6 w-full max-w-full">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 text-xs tracking-wider text-white/90 backdrop-blur-sm">
                  <Search className="w-4 h-4" />
                  ALTIORA INFOTECH
                </span>
                <h1 className="font-semibold tracking-tight text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  Search Engine Marketing
                  <br />
                  <span className="text-[#f4cc6f]">SEM Services</span>
                </h1>
                <p className="text-xl sm:text-2xl text-white/90">
                  Dominate search results with integrated SEO and PPC strategies for maximum visibility.
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
              <span className={styles.overviewTitle}>
                Overview
              </span>
              <div className="h-px w-full max-w-[80px] sm:max-w-[120px] bg-gradient-to-r from-[#f4cc6f]/50 to-transparent" />
            </div>

            {/* Main Content Centered */}
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={overviewInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
                className="max-w-5xl mx-auto pt-[5px] px-8 pb-8 sm:px-12 sm:pb-12 md:px-14 md:pb-14 rounded-[40px] border border-white/5 bg-white/[0.02] backdrop-blur-xl shadow-[0_20px_50px_rgba(244,204,111,0.05)] relative overflow-hidden"
              >
                <p className={`${styles.sectionDescription} !max-w-none relative z-10 !text-white/90`}>
                  Win customer attention at the exact moment they’re searching for solutions that match your business. Our Search Engine Marketing helps you appear instantly on top of search results and capture high-intent traffic ready to convert. At Altiora Infotech, we combine smart bidding, precise keyword targeting, and continuous optimization to maximize ROI. From lead generation to revenue growth, we build SEM campaigns designed for predictable, scalable performance.
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

      {/* SEM Strategies Showcase */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Search Marketing Strategies That <span className="text-[#f4cc6f]">Dominate</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Comprehensive search engine marketing approaches for maximum visibility and conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {semStrategies.map((strategy, index) => (
              <SEMStrategyCard key={index} strategy={strategy} />
            ))}
          </div>
        </div>
      </section>

      {/* SEM Performance Dashboard */}
      <section className="py-20 px-6 bg-[#010b22]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Real-Time SEM <span className="text-[#f4cc6f]">Performance</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Track your search marketing success with our comprehensive analytics dashboard. Monitor rankings, traffic, and conversions across all search channels.
              </p>
              <div className="space-y-4">
                {[
                  "Integrated SEO and PPC performance tracking across all search engines",
                  "Real-time keyword ranking monitoring and search visibility analysis",
                  "Advanced conversion tracking and attribution modeling for search traffic",
                  "Comprehensive competitor analysis and market share insights"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#f4cc6f]" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SEMDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-[#010b22]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-center">
              Our Search Engine Marketing Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Comprehensive SEM solutions designed to dominate search results and maximize your online visibility.
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                />
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="block md:hidden">
            <div className="grid grid-cols-1 gap-4">
              {mobileServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description="Comprehensive search marketing solution"
                  icon={service.icon}
                  link="/contact"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our SEM Services */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Why Choose Our <span className="text-[#f4cc6f]">SEM Services?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We combine SEO expertise with PPC mastery to deliver integrated search strategies that maximize visibility and ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoosePoints.map((point, index) => {
              const icons = [Search, FaKeyboard, BarChart3, Globe, Settings, Clock];
              const Icon = icons[index];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 hover:-translate-y-2 h-[200px] flex flex-col">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-500/10 to-gray-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 flex-1 flex flex-col">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300 flex-1">
                        {point}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEM Process Timeline */}
      <ProcessTimeline
        title="Our Search Engine Marketing Process"
        subtitle="A comprehensive approach that combines SEO and PPC strategies for maximum search visibility and performance."
        steps={[
          {
            step: "01",
            title: "Search Audit & Analysis",
            description: "Comprehensive search presence analysis, keyword research, and competitive intelligence for strategic foundation.",
            icon: Search,
            color: "from-blue-500 to-cyan-500"
          },
          {
            step: "02",
            title: "Integrated Strategy Development",
            description: "Development of comprehensive SEM strategy combining SEO and PPC for maximum search visibility and ROI.",
            icon: Target,
            color: "from-green-500 to-emerald-500"
          },
          {
            step: "03",
            title: "SEO Implementation",
            description: "Technical SEO optimization, content strategy execution, and organic ranking improvement initiatives.",
            icon: Settings,
            color: "from-purple-500 to-pink-500"
          },
          {
            step: "04",
            title: "PPC Campaign Launch",
            description: "Strategic paid search campaign setup, ad creation, and bid management for immediate visibility.",
            icon: DollarSign,
            color: "from-yellow-500 to-orange-500"
          },
          {
            step: "05",
            title: "Performance Monitoring",
            description: "Real-time search performance tracking, ranking monitoring, and conversion analysis across all channels.",
            icon: BarChart3,
            color: "from-red-500 to-pink-500"
          },
          {
            step: "06",
            title: "Optimization & Scaling",
            description: "Continuous optimization, strategic scaling, and performance enhancement for sustained search dominance.",
            icon: TrendingUp,
            color: "from-indigo-500 to-purple-500"
          }
        ]}
      />

      {/* Why Work With Altiora */}
      <section className="px-4 md:px-6 py-24 md:py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Why Work With Altiora Infotech?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Partner with search marketing experts who deliver integrated SEO and PPC strategies for maximum search visibility and ROI.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { text: "Integrated Expertise – Comprehensive knowledge of both SEO and PPC strategies for maximum search engine visibility and performance.", icon: FaSearch },
              { text: "Advanced Analytics – Sophisticated tracking and attribution modeling to measure and optimize search marketing ROI across all channels.", icon: FaChartLine },
              { text: "Technical Mastery – Deep technical SEO knowledge combined with advanced PPC campaign management for superior results.", icon: FaCog },
              { text: "Competitive Intelligence – Thorough competitor analysis and market research to identify opportunities and strategic advantages.", icon: FaEye },
              { text: "Scalable Strategies – Proven methodologies for scaling successful search campaigns while maintaining efficiency and performance.", icon: FaRocket },
              { text: "Continuous Optimization – Ongoing monitoring, testing, and refinement to adapt to algorithm changes and market dynamics.", icon: FaHandshake }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              const colors = ['from-green-500 to-emerald-500', 'from-blue-500 to-cyan-500', 'from-purple-500 to-pink-500', 'from-orange-500 to-red-500', 'from-yellow-500 to-orange-500', 'from-indigo-500 to-purple-500'];
              const titles = ['Integrated', 'Advanced', 'Technical', 'Competitive', 'Scalable', 'Continuous'];
              const subtitles = ['Expertise', 'Analytics', 'Mastery', 'Intelligence', 'Strategies', 'Optimization'];
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
              <Image src="https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/web2/custom-web-application-development-cta.jpg" alt="Search Engine Marketing" fill className="object-cover rounded-3xl" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#010c22]/95 via-[#0a1038]/85 to-[#010c22]/95" />
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#f4cc6f]/20 to-[#e6b85c]/20 ring-2 ring-[#f4cc6f]/30 mb-8 mx-auto">
                <Search className="w-10 h-10 text-[#f4cc6f]" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                Ready to Dominate Search Results?
              </h3>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-6 md:mb-8">
                Transform your search presence into a powerful lead generation engine. At Altiora Infotech, we combine SEO expertise with PPC mastery to deliver integrated search strategies that maximize visibility and drive qualified traffic.
              </p>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-8">
                Ready to accelerate your search success? Share your business goals and current search challenges, and we&apos;ll create a comprehensive SEM strategy: keyword opportunities, competitive analysis, integrated SEO/PPC plan, and a roadmap to search dominance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link
                  href="https://calendly.com/altiorainfotech/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 focus:shadow-lg focus:shadow-[#f4cc6f]/25 focus:outline-none focus:ring-2 focus:ring-[#f4cc6f]/50 transition-all duration-300 transform hover:scale-105 focus:scale-105"
                >
                  <FaRocket className="mr-2 w-5 h-5" />
                  Book SEM Consultation
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold border border-white/30 bg-white/[0.08] backdrop-blur-sm text-white hover:bg-white/[0.12] focus:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                >
                  <FaEye className="mr-2 w-5 h-5" />
                  Get SEM Quote
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