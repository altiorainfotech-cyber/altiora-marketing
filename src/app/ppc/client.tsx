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
  DollarSign,
  MousePointer,
  Smartphone,
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
  FaCog,
  FaAd,
  FaBullseye,
  FaCalculator
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

// PPC Metrics Dashboard Component
const PPCDashboard = () => {
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    { label: "Ad Spend", value: "$45K", change: "+23%", color: "text-green-400", icon: DollarSign },
    { label: "Conversions", value: "1,234", change: "+67%", color: "text-blue-400", icon: Target },
    { label: "Click-Through Rate", value: "8.9%", change: "+45%", color: "text-purple-400", icon: MousePointer },
    { label: "Cost Per Click", value: "$2.34", change: "-12%", color: "text-yellow-400", icon: TrendingUp }
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
          <h3 className="text-xl font-bold text-white">PPC Performance</h3>
          <p className="text-white/60 text-sm">Real-time campaign metrics</p>
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

// PPC Platform Card Component
const PPCPlatformCard = ({ platform, className }: { platform: any; className?: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn("relative group cursor-pointer", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={`relative rounded-3xl p-6 md:p-8 border-2 transition-all duration-500 ${platform.borderColor} ${platform.bgGradient} backdrop-blur-sm overflow-hidden h-[380px] flex flex-col`}>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className={`absolute top-0 right-0 w-32 h-32 ${platform.iconBg} rounded-full blur-3xl animate-pulse`} />
          <div className={`absolute bottom-0 left-0 w-24 h-24 ${platform.iconBg} rounded-full blur-2xl animate-pulse`} style={{ animationDelay: '1s' }} />
        </div>

        {/* Platform Icon */}
        <motion.div
          className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl ${platform.iconBg} mb-6 relative z-10`}
        >
          <platform.icon className={`w-8 h-8 md:w-10 md:h-10 ${platform.iconColor}`} />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3" dangerouslySetInnerHTML={{ __html: platform.highlightedName }} />
          <p className="text-white/80 text-base md:text-lg mb-4 leading-relaxed flex-1">{platform.description}</p>

          {/* Stats */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-center">
              <div className={`text-2xl font-bold ${platform.textColor}`}>{platform.avgCPC}</div>
              <div className="text-xs text-white/60">Avg CPC</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${platform.textColor}`}>{platform.conversionRate}</div>
              <div className="text-xs text-white/60">Conv Rate</div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {platform.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className={`w-4 h-4 ${platform.iconColor}`} />
                <span className="text-sm text-white/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hover Effect */}
        <motion.div
          className={`absolute inset-0 ${platform.hoverGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}
        />
      </div>
    </motion.div>
  );
};

// PPC Campaign Showcase Component
const PPCCampaignShowcase = ({ campaign, delay = 0 }: { campaign: any; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
    >
      {/* Campaign Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-12 h-12 rounded-full ${campaign.platformColor} flex items-center justify-center`}>
          <campaign.platformIcon className="w-6 h-6 text-white" />
        </div>
        <div>
          <div className="text-white font-semibold">{campaign.platform}</div>
          <div className="text-white/60 text-sm">{campaign.campaignType}</div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center p-3 bg-white/5 rounded-xl">
          <div className="text-2xl font-bold text-green-400">{campaign.roas}</div>
          <div className="text-xs text-white/60">ROAS</div>
        </div>
        <div className="text-center p-3 bg-white/5 rounded-xl">
          <div className="text-2xl font-bold text-blue-400">{campaign.ctr}</div>
          <div className="text-xs text-white/60">CTR</div>
        </div>
      </div>

      {/* Campaign Details */}
      <div className="space-y-3">
        <div>
          <h4 className="text-white font-semibold text-sm mb-1">Objective:</h4>
          <p className="text-white/80 text-sm">{campaign.objective}</p>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm mb-1">Strategy:</h4>
          <p className="text-white/80 text-sm">{campaign.strategy}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function PPCClient() {
  const { ref: overviewRef, inView: overviewInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // PPC Platforms Data
  const ppcPlatforms = [
    {
      name: "Google Ads",
      highlightedName: "Google <span class='text-[#f4cc6f]'>Ads</span>",
      icon: FaGoogle,
      description: "Reach customers at the moment they're searching for your products or services with Google's powerful advertising platform.",
      avgCPC: "$2.69",
      conversionRate: "3.75%",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Search Campaigns", "Display Network", "Shopping Ads", "YouTube Advertising", "Performance Max", "Local Campaigns"]
    },
    {
      name: "Microsoft Ads",
      highlightedName: "Microsoft <span class='text-[#f4cc6f]'>Ads</span>",
      icon: Search,
      description: "Capture additional market share with Bing's advertising platform, reaching users across Microsoft's network.",
      avgCPC: "$1.54",
      conversionRate: "2.94%",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Bing Search Ads", "Microsoft Audience", "LinkedIn Integration", "Lower Competition", "Import from Google", "Audience Network"]
    },
    {
      name: "Shopping Campaigns",
      highlightedName: "Shopping <span class='text-[#f4cc6f]'>Campaigns</span>",
      icon: ShoppingCart,
      description: "Showcase your products directly in search results with visual shopping ads that drive qualified traffic.",
      avgCPC: "$0.66",
      conversionRate: "1.91%",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Product Listings", "Smart Shopping", "Local Inventory", "Performance Max", "Showcase Shopping", "Product Extensions"]
    },
    {
      name: "Display Advertising",
      highlightedName: "Display <span class='text-[#f4cc6f]'>Advertising</span>",
      icon: Monitor,
      description: "Build brand awareness and reach potential customers across millions of websites with visual display ads.",
      avgCPC: "$0.63",
      conversionRate: "0.77%",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Banner Ads", "Responsive Display", "Remarketing", "Audience Targeting", "Video Ads", "Discovery Campaigns"]
    }
  ];

  // Sample PPC Campaigns
  const ppcCampaigns = [
    {
      platform: "Google Ads",
      platformIcon: FaGoogle,
      platformColor: "bg-gradient-to-br from-blue-500 to-green-500",
      campaignType: "Search Campaign",
      roas: "4.2x",
      ctr: "8.9%",
      objective: "Drive qualified leads for B2B software solution with high-intent keywords.",
      strategy: "Long-tail keyword targeting with compelling ad copy and optimized landing pages."
    },
    {
      platform: "Shopping Ads",
      platformIcon: ShoppingCart,
      platformColor: "bg-gradient-to-br from-green-500 to-emerald-500",
      campaignType: "Smart Shopping",
      roas: "6.7x",
      ctr: "1.2%",
      objective: "Maximize e-commerce sales for fashion retailer during peak season.",
      strategy: "Automated bidding with product feed optimization and seasonal promotions."
    },
    {
      platform: "Microsoft Ads",
      platformIcon: Search,
      platformColor: "bg-gradient-to-br from-cyan-500 to-blue-500",
      campaignType: "Search Campaign",
      roas: "3.8x",
      ctr: "5.4%",
      objective: "Capture additional market share in professional services sector.",
      strategy: "Lower competition keywords with LinkedIn audience integration for B2B targeting."
    }
  ];

  const services = [
    {
      title: "Google Ads Management",
      description: "Expert Google Ads campaigns including Search, Display, Shopping, and YouTube advertising.",
      icon: <FaGoogle className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Microsoft Ads (Bing)",
      description: "Comprehensive Bing Ads management to capture additional search traffic and conversions.",
      icon: <Search className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Shopping Campaigns",
      description: "Product-focused campaigns with optimized shopping feeds and competitive bidding strategies.",
      icon: <ShoppingCart className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Display Advertising",
      description: "Visual banner campaigns across Google Display Network and programmatic platforms.",
      icon: <Monitor className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Remarketing Campaigns",
      description: "Strategic retargeting campaigns to re-engage previous website visitors and customers.",
      icon: <Target className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Landing Page Optimization",
      description: "High-converting landing pages designed specifically for PPC traffic and campaigns.",
      icon: <MousePointer className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Bid Management & Optimization",
      description: "Advanced bidding strategies and automated optimization for maximum ROI and efficiency.",
      icon: <FaCalculator className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "PPC Analytics & Reporting",
      description: "Comprehensive performance tracking, conversion analysis, and detailed ROI reporting.",
      icon: <BarChart3 className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Mobile PPC Campaigns",
      description: "Mobile-optimized campaigns targeting smartphone and tablet users with location-based targeting.",
      icon: <Smartphone className="w-12 h-12" />,
      link: "/contact"
    }
  ];

  const mobileServices = [
    {
      title: "Google Ads",
      icon: <FaGoogle className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Microsoft Ads",
      icon: <Search className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Shopping Campaigns",
      icon: <ShoppingCart className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Display Advertising",
      icon: <Monitor className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Remarketing",
      icon: <Target className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Landing Pages",
      icon: <MousePointer className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Bid Management",
      icon: <FaCalculator className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "PPC Analytics",
      icon: <BarChart3 className="w-8 h-8 text-[#f4cc6f]" />
    }
  ];

  const whyChoosePoints = [
    "Certified Google Ads and Microsoft Ads specialists with proven track records",
    "Advanced bidding strategies and automated optimization for maximum efficiency",
    "Comprehensive keyword research and competitive analysis for market advantage",
    "Landing page optimization and conversion rate improvement strategies",
    "Real-time campaign monitoring and performance optimization",
    "Transparent reporting with detailed ROI analysis and actionable insights",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#010c22] text-[#F8FBFB] overflow-x-hidden w-full max-w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden text-white py-20 md:py-40 w-full max-w-full" style={{
        background: "radial-gradient(85% 60% at 28% 8%, rgba(76,131,255,.25), rgba(0,0,0,0))"
      }}>
        <div className="absolute inset-0" style={{ animation: "float 6s ease-in-out infinite", transformStyle: "preserve-3d" }}>
          <Image src="https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/web2/custom-web-application-development-hero.jpg" alt="PPC Advertising" fill priority className="object-cover" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-br from-blue-400/15 to-cyan-500/15 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-lg animate-ping" style={{ animationDuration: '4s' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="w-full max-w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center w-full max-w-full">
              <div className="lg:col-span-12 space-y-6 w-full max-w-full">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 text-xs tracking-wider text-white/90 backdrop-blur-sm">
                  <DollarSign className="w-4 h-4" />
                  ALTIORA INFOTECH
                </span>
                <h1 className="font-semibold tracking-tight text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  Paid Advertising Services
                  <br />
                  <span className="text-[#f4cc6f]">Built for Predictable ROI</span>
                </h1>
                <p className="text-xl sm:text-2xl text-white/90">
                  Get Immediate Visibility with Paid Campaigns That Actually Convert
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
                  When you need faster, predictable growth, performance marketing becomes essential—not optional. Our Paid Advertising Services help you reach high-intent customers at the exact moment they’re ready to take action. At Altiora Infotech, we focus on smart spending, qualified traffic, and conversion-driven campaigns to maximize ROI. From search ads to social and remarketing, we build scalable paid media systems designed for measurable business growth.
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

      {/* PPC Platforms Showcase */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              PPC Platforms We <span className="text-[#f4cc6f]">Master</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Maximize your advertising ROI across all major pay-per-click platforms with our expert campaign management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ppcPlatforms.map((platform, index) => (
              <PPCPlatformCard key={index} platform={platform} />
            ))}
          </div>
        </div>
      </section>

      {/* PPC Performance Dashboard */}
      <section className="py-20 px-6 bg-[#010b22]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Real-Time PPC <span className="text-[#f4cc6f]">Performance</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Monitor your advertising success with our comprehensive PPC analytics dashboard. Track spend, conversions, and ROI across all campaigns in real-time.
              </p>
              <div className="space-y-4">
                {[
                  "Live campaign performance tracking across all platforms",
                  "Advanced conversion tracking and attribution modeling",
                  "Automated bid optimization and budget management",
                  "Comprehensive ROI analysis and cost-per-acquisition metrics"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#f4cc6f]" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <PPCDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* PPC Campaign Showcase */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              High-Performing PPC <span className="text-[#f4cc6f]">Campaigns</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              See examples of successful PPC campaigns we've managed across different platforms and industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ppcCampaigns.map((campaign, index) => (
              <PPCCampaignShowcase key={index} campaign={campaign} delay={index * 0.2} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] font-semibold hover:shadow-lg hover:shadow-[#f4cc6f]/25 transition-all duration-300 transform hover:scale-105"
            >
              <DollarSign className="w-5 h-5" />
              Get Your PPC Strategy
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section - Redesigned for PPC */}
      <section className="py-20 px-6 bg-[#010b22]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-center">
              Our PPC Advertising <span className="text-[#f4cc6f]">Services</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Comprehensive PPC solutions designed to maximize your advertising ROI and drive qualified conversions.
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
                  description="Comprehensive PPC advertising solution"
                  icon={service.icon}
                  link="/contact"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our PPC - Redesigned */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Why Choose Our <span className="text-[#f4cc6f]">PPC Services?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We combine certified expertise with advanced strategies to deliver PPC campaigns that maximize ROI and drive qualified conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoosePoints.map((point, index) => {
              const icons = [FaBullseye, Settings, BarChart3, Target, MousePointer, Clock];
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

      {/* PPC Process - New Timeline Design */}
      <ProcessTimeline
        title="Our PPC <span class='text-[#f4cc6f]'>Process</span>"
        subtitle="A strategic approach that transforms your paid advertising into a high-performing lead generation engine."
        steps={[
          {
            step: "01",
            title: "Account Audit & Strategy",
            description: "Comprehensive analysis of existing campaigns, competitive landscape assessment, and strategic planning for optimal performance.",
            icon: Search,
            color: "from-blue-500 to-cyan-500"
          },
          {
            step: "02",
            title: "Keyword Research & Planning",
            description: "In-depth keyword research, negative keyword identification, and campaign structure planning for maximum relevance.",
            icon: Target,
            color: "from-purple-500 to-pink-500"
          },
          {
            step: "03",
            title: "Campaign Setup & Launch",
            description: "Professional campaign creation, compelling ad copywriting, and conversion-optimized landing page development.",
            icon: Zap,
            color: "from-green-500 to-emerald-500"
          },
          {
            step: "04",
            title: "Bid Management & Optimization",
            description: "Strategic bidding strategies, budget allocation optimization, and automated bid management implementation.",
            icon: FaCalculator,
            color: "from-yellow-500 to-orange-500"
          },
          {
            step: "05",
            title: "Performance Monitoring",
            description: "Real-time campaign tracking, conversion monitoring, quality score optimization, and performance analysis.",
            icon: BarChart3,
            color: "from-red-500 to-pink-500"
          },
          {
            step: "06",
            title: "Analysis & Scaling",
            description: "Detailed performance analysis, comprehensive ROI reporting, and strategic scaling of successful campaigns.",
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
              Why Work With Altiora <span className="text-[#f4cc6f]">Infotech?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Partner with certified PPC experts who deliver measurable results and maximum ROI for your advertising investment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { text: "Certified Experts – Google Ads and Microsoft Ads certified specialists with proven success records and industry recognition.", icon: FaBullseye },
              { text: "Advanced Strategies – Sophisticated bidding algorithms and optimization techniques for maximum efficiency and performance.", icon: FaCog },
              { text: "ROI Focus – Data-driven approach with continuous optimization for the highest return on investment and cost efficiency.", icon: FaChartLine },
              { text: "Transparent Reporting – Clear, detailed reporting with actionable insights and comprehensive performance metrics.", icon: FaAd },
              { text: "Landing Page Expertise – Conversion-optimized landing pages designed specifically for PPC traffic and user experience.", icon: FaNetworkWired },
              { text: "Ongoing Support – Continuous campaign monitoring, optimization, and strategic guidance for sustained growth.", icon: FaHandshake }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              const colors = ['from-yellow-500 to-orange-500', 'from-blue-500 to-cyan-500', 'from-green-500 to-emerald-500', 'from-red-500 to-pink-500', 'from-purple-500 to-indigo-500', 'from-teal-500 to-cyan-500'];
              const titles = ['Certified', 'Advanced', 'ROI', 'Transparent', 'Landing Page', 'Ongoing'];
              const subtitles = ['Experts', 'Strategies', 'Focus', 'Reporting', 'Expertise', 'Support'];
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
              <Image src="https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/web2/custom-web-application-development-cta.jpg" alt="PPC Advertising" fill className="object-cover rounded-3xl" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#010c22]/95 via-[#0a1038]/85 to-[#010c22]/95" />
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#f4cc6f]/20 to-[#e6b85c]/20 ring-2 ring-[#f4cc6f]/30 mb-8 mx-auto">
                <DollarSign className="w-10 h-10 text-[#f4cc6f]" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                Ready to Maximize Your PPC ROI?
              </h3>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-6 md:mb-8">
                Transform your paid advertising into a powerful lead generation engine. At Altiora Infotech, we combine certified expertise with advanced strategies to deliver PPC campaigns that drive qualified traffic and maximize your return on investment.
              </p>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-8">
                Ready to accelerate your growth? Share your business goals and current advertising challenges, and we&apos;ll create a comprehensive PPC strategy: keyword opportunities, campaign structure, budget recommendations, and a roadmap to advertising success.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link
                  href="https://calendly.com/altiorainfotech/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 focus:shadow-lg focus:shadow-[#f4cc6f]/25 focus:outline-none focus:ring-2 focus:ring-[#f4cc6f]/50 transition-all duration-300 transform hover:scale-105 focus:scale-105"
                >
                  <FaRocket className="mr-2 w-5 h-5" />
                  Book PPC Audit
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold border border-white/30 bg-white/[0.08] backdrop-blur-sm text-white hover:bg-white/[0.12] focus:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                >
                  <FaEye className="mr-2 w-5 h-5" />
                  Get PPC Quote
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