"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import {
  Globe,
  CheckCircle,
  Server,
  Layers,
  Eye,
  Users,
  Search,
  Shield,
  CreditCard,
  ShoppingCart,
  TrendingUp,
  Package,
  BarChart3,
  Megaphone,
  Target,
  Share2,
  Heart,
  MessageCircle,
  Play,
  Camera,
  Zap,
  FileText,
  Link as LinkIcon,
  Settings,
  Monitor,
  ArrowRight,
  Star,
  Clock,
  Calendar
} from "lucide-react";
import {
  FaRocket,
  FaEye,
  FaCode,
  FaShieldAlt,
  FaNetworkWired,
  FaTools,
  FaHandshake,
  FaGoogle,
  FaYahoo,
  FaChartLine,
  FaKeyboard,
  FaCog
} from "react-icons/fa";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import styles from "../services/digital-marketing/dm.module.css";
import ServiceCard from "@/components/ServiceCard";
import ProcessTimeline from "@/components/ProcessTimeline";

const ServicesHoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    icon: React.ReactNode;
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
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
              <div className="mb-6 text-[#F4CC6F]">
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
        </Link>
      ))}
    </div>
  );
};

// SEO Metrics Dashboard Component
const SEODashboard = () => {
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    { label: "Organic Traffic", value: "145K", change: "+67%", color: "text-green-400", icon: TrendingUp },
    { label: "Keywords Ranking", value: "2,340", change: "+89%", color: "text-blue-400", icon: Search },
    { label: "Page 1 Rankings", value: "456", change: "+123%", color: "text-purple-400", icon: Star },
    { label: "Domain Authority", value: "78", change: "+34%", color: "text-yellow-400", icon: Shield }
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
          <h3 className="text-xl font-bold text-white">SEO Performance</h3>
          <p className="text-white/60 text-sm">Real-time organic growth metrics</p>
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

// SEO Strategy Card Component
const SEOStrategyCard = ({ strategy, className }: { strategy: any; className?: string }) => {
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

// SEO Results Showcase Component
const SEOResultsShowcase = ({ result, delay = 0 }: { result: any; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
    >
      {/* Result Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-12 h-12 rounded-full ${result.industryColor} flex items-center justify-center`}>
          <result.industryIcon className="w-6 h-6 text-white" />
        </div>
        <div>
          <div className="text-white font-semibold">{result.industry}</div>
          <div className="text-white/60 text-sm">{result.duration}</div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center p-3 bg-white/5 rounded-xl">
          <div className="text-2xl font-bold text-green-400">{result.trafficGrowth}</div>
          <div className="text-xs text-white/60">Traffic Growth</div>
        </div>
        <div className="text-center p-3 bg-white/5 rounded-xl">
          <div className="text-2xl font-bold text-blue-400">{result.rankingImprovement}</div>
          <div className="text-xs text-white/60">Ranking Boost</div>
        </div>
      </div>

      {/* Challenge & Solution */}
      <div className="space-y-3">
        <div>
          <h4 className="text-white font-semibold text-sm mb-1">Challenge:</h4>
          <p className="text-white/80 text-sm">{result.challenge}</p>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm mb-1">Solution:</h4>
          <p className="text-white/80 text-sm">{result.solution}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function SEOClient() {
  const { ref: overviewRef, inView: overviewInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // SEO Strategies Data
  const seoStrategies = [
    {
      name: "Technical SEO",
      highlightedName: "Technical <span class='text-[#f4cc6f]'>SEO</span>",
      icon: Settings,
      description: "Optimize site architecture, speed, and crawlability for search engines and better user experience.",
      impact: "+89%",
      timeframe: "3-6 months",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Site Speed Optimization", "Mobile Responsiveness", "Schema Markup", "Core Web Vitals", "XML Sitemaps", "Robots.txt Optimization"]
    },
    {
      name: "Content Strategy",
      highlightedName: "Content <span class='text-[#f4cc6f]'>Strategy</span>",
      icon: FileText,
      description: "Create high-quality, SEO-optimized content that ranks well and engages your target audience.",
      impact: "+156%",
      timeframe: "4-8 months",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Keyword Research", "Topic Clusters", "Content Optimization", "Semantic SEO", "Content Audits", "Featured Snippets"]
    },
    {
      name: "Link Building",
      highlightedName: "Link <span class='text-[#f4cc6f]'>Building</span>",
      icon: LinkIcon,
      description: "Build high-quality backlinks and domain authority through strategic outreach and digital PR.",
      impact: "+234%",
      timeframe: "6-12 months",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Digital PR Campaigns", "Guest Posting", "Resource Link Building", "Broken Link Building", "HARO Outreach", "Competitor Analysis"]
    },
    {
      name: "Local SEO",
      highlightedName: "Local <span class='text-[#f4cc6f]'>SEO</span>",
      icon: Globe,
      description: "Dominate local search results with optimized Google My Business and location-based strategies.",
      impact: "+178%",
      timeframe: "2-4 months",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Google My Business", "Local Citations", "Review Management", "Location Pages", "Local Schema", "NAP Consistency"]
    }
  ];

  // Sample SEO Results
  const seoResults = [
    {
      industry: "E-commerce",
      industryIcon: ShoppingCart,
      industryColor: "bg-gradient-to-br from-blue-500 to-purple-500",
      duration: "8 months",
      trafficGrowth: "+245%",
      rankingImprovement: "+189%",
      challenge: "Low organic visibility for product categories and poor technical SEO foundation.",
      solution: "Comprehensive technical audit, category page optimization, and strategic content creation."
    },
    {
      industry: "SaaS",
      industryIcon: Monitor,
      industryColor: "bg-gradient-to-br from-green-500 to-blue-500",
      duration: "6 months",
      trafficGrowth: "+167%",
      rankingImprovement: "+134%",
      challenge: "Competitive keywords with low domain authority and limited content strategy.",
      solution: "Topic cluster strategy, technical SEO improvements, and strategic link building campaign."
    },
    {
      industry: "Healthcare",
      industryIcon: Heart,
      industryColor: "bg-gradient-to-br from-red-500 to-pink-500",
      duration: "10 months",
      trafficGrowth: "+198%",
      rankingImprovement: "+156%",
      challenge: "YMYL content requirements and local competition in multiple markets.",
      solution: "E-A-T optimization, local SEO strategy, and authoritative content development."
    }
  ];

  const services = [
    {
      title: "Keyword Research & Strategy",
      description: "Comprehensive keyword analysis, search intent mapping, and competitive keyword gap analysis.",
      icon: <FaKeyboard className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "On-Page SEO Optimization",
      description: "Title tags, meta descriptions, header optimization, internal linking, and content optimization.",
      icon: <FileText className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Technical SEO Audits",
      description: "Site speed optimization, mobile responsiveness, crawlability, and Core Web Vitals improvement.",
      icon: <Settings className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Content SEO Strategy",
      description: "SEO-optimized content creation, topic clusters, and semantic keyword integration.",
      icon: <FileText className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Link Building & Authority",
      description: "High-quality backlink acquisition, digital PR, and domain authority improvement strategies.",
      icon: <LinkIcon className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Local SEO Optimization",
      description: "Google My Business optimization, local citations, and location-based search visibility.",
      icon: <Globe className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "E-commerce SEO",
      description: "Product page optimization, category structure, schema markup, and shopping feed optimization.",
      icon: <ShoppingCart className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "SEO Analytics & Reporting",
      description: "Comprehensive tracking, ranking monitoring, traffic analysis, and ROI measurement.",
      icon: <BarChart3 className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "SEO Competitor Analysis",
      description: "Competitive landscape analysis, gap identification, and strategic positioning insights.",
      icon: <Target className="w-12 h-12" />,
      link: "/contact"
    }
  ];

  const mobileServices = [
    {
      title: "Keyword Research",
      icon: <FaKeyboard className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "On-Page SEO",
      icon: <FileText className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Technical SEO",
      icon: <Settings className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Content Strategy",
      icon: <FileText className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Link Building",
      icon: <LinkIcon className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Local SEO",
      icon: <Globe className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "E-commerce SEO",
      icon: <ShoppingCart className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "SEO Analytics",
      icon: <BarChart3 className="w-8 h-8 text-[#f4cc6f]" />
    }
  ];

  const whyChoosePoints = [
    "Proven track record of improving organic rankings and traffic growth",
    "White-hat SEO techniques that comply with Google's latest guidelines",
    "Comprehensive technical SEO audits and implementation strategies",
    "Data-driven approach with detailed analytics and performance tracking",
    "Industry-specific SEO expertise across various business verticals",
    "Ongoing optimization and adaptation to algorithm changes",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#010c22] text-[#F8FBFB] overflow-x-hidden w-full max-w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden text-white py-20 md:py-40 w-full max-w-full" style={{
        background: "radial-gradient(85% 60% at 28% 8%, rgba(76,131,255,.25), rgba(0,0,0,0))"
      }}>
        <div className="absolute inset-0" style={{ animation: "float 6s ease-in-out infinite", transformStyle: "preserve-3d" }}>
          <Image src="/images/agentic-ai/Predictive Analytics and Automation-1.png" alt="SEO Services" fill priority className="object-cover" />
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
                  <Search className="w-4 h-4" />
                  ALTIORA INFOTECH
                </span>
                <h1 className="font-semibold tracking-tight text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  SEO Services
                  <br />
                  <span className="text-[#f4cc6f]">Search Engine Optimization</span>
                </h1>
                <p className="text-xl sm:text-2xl text-white/90">
                  Boost your organic visibility and rankings with data-driven SEO strategies.
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
                className="max-w-5xl mx-auto py-8 px-8 sm:py-12 sm:px-12 md:py-14 md:px-14 rounded-[40px] border border-white/5 bg-white/[0.02] backdrop-blur-xl shadow-[0_20px_50px_rgba(244,204,111,0.05)] relative overflow-hidden"
              >
                <p className={`${styles.sectionDescription} !max-w-none relative z-10 !text-white/90`}>
                  Build long-term online visibility that attracts customers even when you’re not running ads. Our SEO and Search Engine Optimization services help your business rank higher, drive qualified organic traffic, and generate consistent leads. At Altiora Infotech, we combine technical expertise, content strategy, and data-driven optimization to maximize search performance. We focus on sustainable rankings, stronger website authority, and measurable long-term business growth.
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

      {/* SEO Strategies Showcase */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              SEO Strategies That <span className="text-[#f4cc6f]">Drive Results</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Comprehensive SEO approaches tailored to your business goals and industry requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seoStrategies.map((strategy, index) => (
              <SEOStrategyCard key={index} strategy={strategy} />
            ))}
          </div>
        </div>
      </section>

      {/* SEO Performance Dashboard */}
      <section className="py-20 px-6 bg-[#010b22]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Real-Time SEO <span className="text-[#f4cc6f]">Performance</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Track your organic growth with our comprehensive SEO analytics dashboard. Monitor rankings, traffic, and conversions across all your target keywords in real-time.
              </p>
              <div className="space-y-4">
                {[
                  "Live keyword ranking tracking across all search engines",
                  "Organic traffic growth and user behavior analytics",
                  "Competitor analysis and market share insights",
                  "Technical SEO health monitoring and alerts"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#f4cc6f]" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SEODashboard />
            </div>
          </div>
        </div>
      </section>

      {/* SEO Results Showcase */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Proven SEO <span className="text-[#f4cc6f]">Success Stories</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Real results from our SEO campaigns across different industries and business models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoResults.map((result, index) => (
              <SEOResultsShowcase key={index} result={result} delay={index * 0.2} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] font-semibold hover:shadow-lg hover:shadow-[#f4cc6f]/25 transition-all duration-300 transform hover:scale-105"
            >
              <Search className="w-5 h-5" />
              Get Your SEO Strategy
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section - Redesigned for SEO */}
      <section className="py-20 px-6 bg-[#010b22]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-center">
              Our SEO <span className="text-[#f4cc6f]">Services</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Comprehensive SEO solutions designed to improve your search visibility and drive organic growth.
            </p>
          </div>

          {/* Desktop Layout - New ServiceCard Design */}
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

          {/* Mobile Layout - Simple 1-column Grid */}
          <div className="block md:hidden">
            <div className="grid grid-cols-1 gap-4">
              {mobileServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description="Comprehensive SEO solution for organic growth"
                  icon={service.icon}
                  link="/contact"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our SEO - Redesigned */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Why Choose Our <span className="text-[#f4cc6f]">SEO Services?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We combine technical expertise with proven strategies to deliver SEO results that drive sustainable organic growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoosePoints.map((point, index) => {
              const icons = [TrendingUp, Shield, Settings, BarChart3, Globe, Clock];
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

      {/* SEO Process - New Timeline Design */}
      <ProcessTimeline
        title="Our SEO <span class='text-[#f4cc6f]'>Process</span>"
        subtitle="A strategic approach that transforms your website into a search engine magnet and organic traffic generator."
        steps={[
          {
            step: "01",
            title: "SEO Audit & Analysis",
            description: "Comprehensive website analysis, technical SEO assessment, and competitive landscape evaluation to identify opportunities.",
            icon: Search,
            color: "from-blue-500 to-cyan-500"
          },
          {
            step: "02",
            title: "Keyword Research & Strategy",
            description: "In-depth keyword analysis, search intent mapping, and content gap identification for maximum organic potential.",
            icon: Target,
            color: "from-green-500 to-emerald-500"
          },
          {
            step: "03",
            title: "Technical SEO Implementation",
            description: "Site structure optimization, speed improvements, mobile responsiveness, and technical issue resolution.",
            icon: Settings,
            color: "from-purple-500 to-pink-500"
          },
          {
            step: "04",
            title: "Content Optimization",
            description: "On-page optimization, content creation, semantic keyword integration, and user experience enhancement.",
            icon: FileText,
            color: "from-yellow-500 to-orange-500"
          },
          {
            step: "05",
            title: "Link Building & Authority",
            description: "Strategic link acquisition, digital PR campaigns, and domain authority building initiatives.",
            icon: LinkIcon,
            color: "from-red-500 to-pink-500"
          },
          {
            step: "06",
            title: "Monitoring & Optimization",
            description: "Performance tracking, ranking monitoring, and continuous optimization for sustained organic growth.",
            icon: BarChart3,
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
              Partner with SEO experts who deliver sustainable organic growth and measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { text: "Proven Results – Track record of improving organic rankings and driving qualified traffic growth.", icon: FaChartLine },
              { text: "White-Hat Techniques – Ethical SEO practices that comply with search engine guidelines and algorithm updates.", icon: FaShieldAlt },
              { text: "Technical Expertise – Advanced technical SEO knowledge and implementation capabilities across all platforms.", icon: FaCog },
              { text: "Data-Driven Approach – Analytics-based strategies with measurable results and comprehensive ROI tracking.", icon: FaCode },
              { text: "Industry Experience – Deep understanding of SEO across various business verticals and market segments.", icon: FaNetworkWired },
              { text: "Ongoing Support – Continuous optimization and adaptation to algorithm changes and market trends.", icon: FaHandshake }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              const colors = ['from-green-500 to-emerald-500', 'from-blue-500 to-cyan-500', 'from-purple-500 to-pink-500', 'from-red-500 to-orange-500', 'from-yellow-500 to-orange-500', 'from-teal-500 to-cyan-500'];
              const titles = ['Proven', 'White-Hat', 'Technical', 'Data-Driven', 'Industry', 'Ongoing'];
              const subtitles = ['Results', 'Techniques', 'Expertise', 'Approach', 'Experience', 'Support'];
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
              <Image src="/images/agentic-ai/cta/Predictive-cta.png" alt="SEO Services" fill className="object-cover rounded-3xl" />
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
                Transform your website's search visibility with our comprehensive SEO services. At Altiora Infotech, we combine technical expertise with proven strategies to deliver sustainable organic growth and improved search rankings.
              </p>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-8">
                Ready to climb the search rankings? Share your website and goals, and we&apos;ll provide a comprehensive SEO strategy: technical audit findings, keyword opportunities, content recommendations, and a roadmap to search success.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link
                  href="https://calendly.com/altiorainfotech/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 focus:shadow-lg focus:shadow-[#f4cc6f]/25 focus:outline-none focus:ring-2 focus:ring-[#f4cc6f]/50 transition-all duration-300 transform hover:scale-105 focus:scale-105"
                >
                  <FaRocket className="mr-2 w-5 h-5" />
                  Book SEO Audit
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold border border-white/30 bg-white/[0.08] backdrop-blur-sm text-white hover:bg-white/[0.12] focus:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                >
                  <FaEye className="mr-2 w-5 h-5" />
                  Get SEO Quote
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
    </div >
  );
}