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
  Users,
  Lightbulb,
  PieChart,
  ArrowRight,
  Star,
  Clock,
  Zap,
  Settings,
  FileText,
  Search,
  MousePointer,
  Monitor
} from "lucide-react";
import {
  FaRocket,
  FaEye,
  FaChartLine,
  FaBullseye,
  FaCog,
  FaHandshake,
  FaNetworkWired,
  FaLightbulb,
  FaUsers,
  FaSearch
} from "react-icons/fa";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import styles from "../services/digital-marketing/dm.module.css";
import ServiceCard from "@/components/ServiceCard";
import ProcessTimeline from "@/components/ProcessTimeline";

// Strategy Metrics Dashboard Component
const StrategyDashboard = () => {
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    { label: "ROI Improvement", value: "+285%", change: "+67%", color: "text-green-400", icon: TrendingUp },
    { label: "Lead Generation", value: "3,450", change: "+134%", color: "text-blue-400", icon: Target },
    { label: "Brand Awareness", value: "+189%", change: "+89%", color: "text-purple-400", icon: Users },
    { label: "Conversion Rate", value: "12.4%", change: "+156%", color: "text-yellow-400", icon: BarChart3 }
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
          <h3 className="text-xl font-bold text-white">Strategy Performance</h3>
          <p className="text-white/60 text-sm">Real-time strategic impact metrics</p>
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

// Strategy Framework Card Component
const StrategyFrameworkCard = ({ framework, className }: { framework: any; className?: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn("relative group cursor-pointer", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={`relative rounded-3xl p-6 md:p-8 border-2 transition-all duration-500 ${framework.borderColor} ${framework.bgGradient} backdrop-blur-sm overflow-hidden h-full min-h-[480px] flex flex-col`}>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className={`absolute top-0 right-0 w-32 h-32 ${framework.iconBg} rounded-full blur-3xl animate-pulse`} />
          <div className={`absolute bottom-0 left-0 w-24 h-24 ${framework.iconBg} rounded-full blur-2xl animate-pulse`} style={{ animationDelay: '1s' }} />
        </div>

        {/* Framework Icon */}
        <motion.div
          className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl ${framework.iconBg} mb-6 relative z-10`}
        >
          <framework.icon className={`w-8 h-8 md:w-10 md:h-10 ${framework.iconColor}`} />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3" dangerouslySetInnerHTML={{ __html: framework.highlightedName }} />
          <p className="text-white/80 text-base md:text-lg mb-4 leading-relaxed flex-1">{framework.description}</p>

          {/* Stats - Conditional */}
          {framework.impact && (
            <div className="flex items-center justify-between mb-4">
              <div className="text-center">
                <div className={`text-2xl font-bold ${framework.textColor}`}>{framework.impact}</div>
                <div className="text-xs text-white/60">Avg Impact</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${framework.textColor}`}>{framework.timeframe}</div>
                <div className="text-xs text-white/60">Timeframe</div>
              </div>
            </div>
          )}

          {/* List Header */}
          {framework.listHeader && (
            <div className="text-sm font-semibold text-[#f4cc6f] mb-3">{framework.listHeader}</div>
          )}

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
            {framework.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className={`w-4 h-4 mt-1 ${framework.iconColor} flex-shrink-0`} />
                <span className="text-sm text-white/80 leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hover Effect */}
        <motion.div
          className={`absolute inset-0 ${framework.hoverGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}
        />
      </div>
    </motion.div>
  );
};

export default function DigitalMarketingStrategyClient() {
  const { ref: overviewRef, inView: overviewInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Strategy Frameworks Data
  const strategyFrameworks = [
    {
      name: "Business Context & Objective Mapping",
      highlightedName: "Business Context & <span class='text-[#f4cc6f]'>Objective Mapping</span>",
      icon: Lightbulb,
      description: "Every strategy begins with understanding your business from the inside out. We identify what success looks like and define goals that are both realistic and measurable.",
      listHeader: "This stage covers:",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Business model and offerings", "Growth objectives and timelines", "Competitive landscape", "Current digital strengths and gaps", "Key challenges limiting performance", "Market opportunity assessment"]
    },
    {
      name: "Audience Insight & Market Analysis",
      highlightedName: "Audience Insight & <span class='text-[#f4cc6f]'>Market Analysis</span>",
      icon: Users,
      description: "Effective strategies are built around people, not platforms. We study how your ideal customers think, search, and make decisions online.",
      listHeader: "Our research includes:",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Buyer persona creation", "Decision-making behavior analysis", "Market demand evaluation", "Competitor positioning review", "Search and engagement patterns", "Customer sentiment analysis"]
    },
    {
      name: "Channel Prioritization & Planning",
      highlightedName: "Channel Prioritization & <span class='text-[#f4cc6f]'>Planning</span>",
      icon: Globe,
      description: "Not every channel delivers equal value. We identify where your audience is most active and where your budget will work hardest.",
      listHeader: "Channels may include:",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Organic search (SEO)", "Paid search and display ads", "Social media platforms", "Paid social advertising", "Content and email marketing", "Influencer and affiliate channels"]
    },
    {
      name: "Content & Communication Direction",
      highlightedName: "Content & <span class='text-[#f4cc6f]'>Communication</span>",
      icon: FileText,
      description: "Messaging plays a critical role in conversions. We define how your brand communicates at every stage of the customer journey.",
      listHeader: "Our focus areas include:",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Clear value propositions", "Consistent brand tone", "Search-friendly content planning", "Conversion-oriented messaging", "Trust and credibility building", "Engagement-driven storytelling"]
    },
    {
      name: "Budget Structuring & Resource Planning",
      highlightedName: "Budget Structuring & <span class='text-[#f4cc6f]'>Resource Planning</span>",
      icon: PieChart,
      description: "A digital marketing strategy should protect the budget—not drain it. We allocate resources based on opportunity, performance potential, and business priorities.",
      listHeader: "This includes:",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Channel-wise budget planning", "Cost benchmarks and efficiency targets", "Tool and technology recommendations", "Timelines and execution phases", "ROI projection modeling", "Resource allocation strategy"]
    },
    {
      name: "Action Roadmap & Performance Metrics",
      highlightedName: "Action Roadmap & <span class='text-[#f4cc6f]'>Performance Metrics</span>",
      icon: TrendingUp,
      description: "Strategy must lead to action. We translate planning into a step-by-step execution roadmap supported by measurable KPIs.",
      listHeader: "Common metrics include:",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Traffic quality and growth", "Lead volume and relevance", "Conversion efficiency", "Customer acquisition cost", "Return on investment", "Lifetime value optimization"]
    }
  ];

  const services = [
    {
      title: "Strategic Planning & Consulting",
      description: "Comprehensive digital marketing strategy development with market analysis and competitive positioning.",
      icon: <FaLightbulb className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Market Research & Analysis",
      description: "In-depth market research, competitor analysis, and customer behavior insights for strategic decisions.",
      icon: <FaSearch className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Customer Journey Mapping",
      description: "Detailed customer journey analysis and touchpoint optimization for enhanced user experience.",
      icon: <FaUsers className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Multi-Channel Integration",
      description: "Integrated marketing approach across all digital channels for consistent messaging and maximum impact.",
      icon: <Globe className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Performance Analytics Setup",
      description: "Advanced analytics implementation and KPI tracking for data-driven decision making.",
      icon: <BarChart3 className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "ROI Optimization Strategy",
      description: "Strategic optimization frameworks focused on maximizing return on marketing investment.",
      icon: <TrendingUp className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Brand Positioning Strategy",
      description: "Strategic brand positioning and messaging framework development for market differentiation.",
      icon: <Target className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Digital Transformation Planning",
      description: "Comprehensive digital transformation roadmap and implementation strategy for business growth.",
      icon: <Zap className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Campaign Strategy Development",
      description: "Strategic campaign planning and execution frameworks for maximum marketing effectiveness.",
      icon: <FileText className="w-12 h-12" />,
      link: "/contact"
    }
  ];

  const mobileServices = [
    {
      title: "Strategic Planning",
      icon: <FaLightbulb className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Market Research",
      icon: <FaSearch className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Customer Journey",
      icon: <FaUsers className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Multi-Channel",
      icon: <Globe className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Analytics Setup",
      icon: <BarChart3 className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "ROI Optimization",
      icon: <TrendingUp className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Brand Positioning",
      icon: <Target className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Digital Transformation",
      icon: <Zap className="w-8 h-8 text-[#f4cc6f]" />
    }
  ];

  const whyChoosePoints = [
    "Strategic expertise with proven track record of driving business growth and ROI",
    "Data-driven approach with comprehensive market analysis and competitive intelligence",
    "Integrated multi-channel strategies for maximum reach and consistent messaging",
    "Customer-centric approach with detailed journey mapping and experience optimization",
    "Continuous optimization and performance monitoring for sustained success",
    "Transparent reporting with actionable insights and strategic recommendations",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#010c22] text-[#F8FBFB] overflow-x-hidden w-full max-w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden text-white py-20 md:py-40 w-full max-w-full" style={{
        background: "radial-gradient(85% 60% at 28% 8%, rgba(76,131,255,.25), rgba(0,0,0,0))"
      }}>
        <div className="absolute inset-0" style={{ animation: "float 6s ease-in-out infinite", transformStyle: "preserve-3d" }}>
          <Image src="https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Web3_Marketing_Services___Build_Credibility_Community_Conversion-1_grwc4v.png" alt="Digital Marketing Strategy" fill priority className="object-cover" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-br from-blue-400/15 to-cyan-500/15 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-lg animate-ping" style={{ animationDuration: '4s' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="w-full max-w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center w-full max-w-full">
              <div className="lg:col-span-12 space-y-6 w-full max-w-full">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 text-xs tracking-wider text-white/90 backdrop-blur-sm">
                  <Lightbulb className="w-4 h-4" />
                  ALTIORA INFOTECH
                </span>
                <h1 className="font-semibold tracking-tight text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  Digital Marketing Strategy Built for
                  <br />
                  <span className="text-[#f4cc6f]">Sustainable Business Growth</span>
                </h1>
                <p className="text-xl sm:text-2xl text-white/90">
                  Turn Digital Efforts into a Clear, Scalable Growth System
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
                  Turn your digital efforts into a clear, scalable growth system that delivers consistent, measurable results. Our Digital Marketing Strategy helps align your business goals, audience intent, and marketing channels for predictable growth. At Altiora Infotech, we use data-driven planning to generate qualified leads, optimize budgets, and maximize long-term ROI. Whether you’re launching or improving performance, we build strategies designed for sustainable business success.
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

      {/* Strategy Frameworks Showcase */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Our Digital Marketing <span className="text-[#f4cc6f]">Strategy Approach</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We follow a structured yet flexible framework that transforms business goals into actionable digital plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategyFrameworks.map((framework, index) => (
              <StrategyFrameworkCard key={index} framework={framework} className="h-full" />
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Performance Dashboard */}
      <section className="py-20 px-6 bg-[#010b22]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Strategic <span className="text-[#f4cc6f]">Performance</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Track your strategic success with our comprehensive performance dashboard. Monitor ROI, growth metrics, and strategic KPIs in real-time.
              </p>
              <div className="space-y-4">
                {[
                  "Real-time ROI tracking and performance optimization",
                  "Strategic KPI monitoring and goal achievement analysis",
                  "Market position tracking and competitive intelligence",
                  "Customer acquisition and retention metrics analysis"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#f4cc6f]" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <StrategyDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-[#010b22]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-center">
              Our Digital Marketing Strategy <span className="text-[#f4cc6f]">Services</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Comprehensive strategic solutions designed to drive growth and maximize your marketing ROI.
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
                  description="Comprehensive strategic solution for growth"
                  icon={service.icon}
                  link="/contact"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Strategy Services */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Why Choose Our <span className="text-[#f4cc6f]">Strategy Services?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We combine strategic expertise with data-driven insights to deliver marketing strategies that drive sustainable business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoosePoints.map((point, index) => {
              const icons = [Target, BarChart3, Globe, Users, TrendingUp, Clock];
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
                        <Icon className="w-7 h-7 text-[#f4cc6f]" />
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

      {/* Strategy Process Timeline */}
      <ProcessTimeline
        title="Our Strategy Development <span class='text-[#f4cc6f]'>Process</span>"
        subtitle="A comprehensive approach that transforms your business goals into actionable digital marketing strategies."
        steps={[
          {
            step: "01",
            title: "Discovery & Analysis",
            description: "Comprehensive business analysis, market research, and competitive intelligence gathering for strategic foundation.",
            icon: Search,
            color: "from-blue-500 to-cyan-500"
          },
          {
            step: "02",
            title: "Strategic Planning",
            description: "Development of comprehensive marketing strategy with clear objectives, target audiences, and channel selection.",
            icon: Lightbulb,
            color: "from-purple-500 to-pink-500"
          },
          {
            step: "03",
            title: "Implementation Roadmap",
            description: "Detailed implementation plan with timelines, resource allocation, and milestone tracking for execution.",
            icon: FileText,
            color: "from-green-500 to-emerald-500"
          },
          {
            step: "04",
            title: "Performance Framework",
            description: "Advanced analytics setup, KPI definition, and performance tracking systems for strategic monitoring.",
            icon: BarChart3,
            color: "from-yellow-500 to-orange-500"
          },
          {
            step: "05",
            title: "Optimization & Scaling",
            description: "Continuous strategy optimization, performance analysis, and strategic scaling for sustained growth.",
            icon: TrendingUp,
            color: "from-red-500 to-pink-500"
          },
          {
            step: "06",
            title: "Strategic Review",
            description: "Regular strategy reviews, market adaptation, and strategic pivots to maintain competitive advantage.",
            icon: Settings,
            color: "from-indigo-500 to-purple-500"
          }
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
              Partner with strategic marketing experts who deliver comprehensive digital marketing strategies that drive sustainable business growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { text: "Strategic Expertise – Proven track record of developing comprehensive digital marketing strategies that drive measurable business growth and ROI.", icon: FaBullseye },
              { text: "Data-Driven Approach – Advanced analytics and market intelligence to create strategies based on real insights and competitive analysis.", icon: FaChartLine },
              { text: "Integrated Solutions – Holistic approach combining all digital marketing channels for maximum synergy and consistent messaging.", icon: FaNetworkWired },
              { text: "Custom Frameworks – Tailored strategic frameworks designed specifically for your business goals and market opportunities.", icon: FaCog },
              { text: "Performance Focus – Continuous optimization and strategic pivots to ensure sustained growth and competitive advantage.", icon: FaRocket },
              { text: "Ongoing Partnership – Long-term strategic guidance and support to adapt to market changes and scale your success.", icon: FaHandshake }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              const colors = ['from-purple-500 to-pink-500', 'from-blue-500 to-cyan-500', 'from-green-500 to-emerald-500', 'from-yellow-500 to-orange-500', 'from-red-500 to-pink-500', 'from-indigo-500 to-purple-500'];
              const titles = ['Strategic', 'Data-Driven', 'Integrated', 'Custom', 'Performance', 'Ongoing'];
              const subtitles = ['Expertise', 'Approach', 'Solutions', 'Frameworks', 'Focus', 'Partnership'];
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
              <Image src="https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Web3_Marketing_Services-2_y7arms.png" alt="Digital Marketing Strategy" fill className="object-cover rounded-3xl" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#010c22]/95 via-[#0a1038]/85 to-[#010c22]/95" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#f4cc6f]/20 to-[#e6b85c]/20 ring-2 ring-[#f4cc6f]/30 mb-8 mx-auto">
                <Lightbulb className="w-10 h-10 text-[#f4cc6f]" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                Start Building a Smarter Digital Marketing Strategy
              </h3>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-6 md:mb-8">
                If your digital efforts feel scattered or underperforming, it’s time for a structured approach. Altiora Infotech helps businesses turn digital complexity into a clear, focused growth roadmap.
              </p>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-8">
                📩 Get in touch today to build a digital marketing strategy that delivers clarity, control, and consistent results.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link
                  href="https://calendly.com/altiorainfotech/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 focus:shadow-lg focus:shadow-[#f4cc6f]/25 focus:outline-none focus:ring-2 focus:ring-[#f4cc6f]/50 transition-all duration-300 transform hover:scale-105 focus:scale-105"
                >
                  <FaRocket className="mr-2 w-5 h-5" />
                  Book Strategy Session
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold border border-white/30 bg-white/[0.08] backdrop-blur-sm text-white hover:bg-white/[0.12] focus:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                >
                  <FaEye className="mr-2 w-5 h-5" />
                  Get Strategy Quote
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