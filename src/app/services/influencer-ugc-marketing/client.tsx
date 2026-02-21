"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import {
  CheckCircle,
  Eye,
  Users,
  TrendingUp,
  BarChart3,
  Target,
  Zap,
  Star,
  Heart,
  Camera,
  Play,
  Globe,
  Shield,
  Award,
  MessageCircle,
  Search,
  ThumbsUp,
} from "lucide-react";
import {
  FaRocket,
  FaEye,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaShieldAlt,
  FaNetworkWired,
  FaTools,
  FaHandshake,
  FaCode,
  FaUserFriends,
  FaVideo,
} from "react-icons/fa";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import styles from "../digital-marketing/dm.module.css";
import ServiceCard from "@/components/ServiceCard";
import ProcessTimeline from "@/components/ProcessTimeline";

// Creator Tier Card Component
const CreatorTierCard = ({ tier, className }: { tier: any; className?: string }) => {
  return (
    <motion.div
      className={cn("relative group cursor-pointer", className)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={`relative rounded-3xl p-6 md:p-8 border-2 transition-all duration-500 ${tier.borderColor} ${tier.bgGradient} backdrop-blur-sm overflow-hidden h-[480px] flex flex-col`}>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className={`absolute top-0 right-0 w-32 h-32 ${tier.iconBg} rounded-full blur-3xl animate-pulse`} />
          <div className={`absolute bottom-0 left-0 w-24 h-24 ${tier.iconBg} rounded-full blur-2xl animate-pulse`} style={{ animationDelay: "1s" }} />
        </div>

        {/* Tier Icon */}
        <motion.div
          className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl ${tier.iconBg} mb-6 relative z-10`}
        >
          <tier.icon className={`w-8 h-8 md:w-10 md:h-10 ${tier.iconColor}`} />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3" dangerouslySetInnerHTML={{ __html: tier.highlightedName }} />
          <p className="text-white/80 text-base md:text-lg mb-4 leading-relaxed flex-1">{tier.description}</p>

          {/* Stats */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-center">
              <div className={`text-2xl font-bold ${tier.textColor}`}>{tier.stat1}</div>
              <div className="text-xs text-white/60">{tier.stat1Label}</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${tier.textColor}`}>{tier.stat2}</div>
              <div className="text-xs text-white/60">{tier.stat2Label}</div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {tier.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className={`w-4 h-4 ${tier.iconColor}`} />
                <span className="text-sm text-white/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hover Effect */}
        <motion.div
          className={`absolute inset-0 ${tier.hoverGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}
        />
      </div>
    </motion.div>
  );
};

// Influencer Campaign Dashboard Component
const InfluencerDashboard = () => {
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    { label: "Avg. Campaign ROI", value: "6.5×", change: "+89% vs traditional", icon: TrendingUp },
    { label: "Creator Network", value: "5K+", change: "Vetted creators", icon: Users },
    { label: "UGC Assets Delivered", value: "2,400+", change: "Across campaigns", icon: Camera },
    { label: "Avg. Campaign Reach", value: "4.2M", change: "Per campaign", icon: Eye },
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
          <h3 className="text-xl font-bold text-white">Campaign Performance</h3>
          <p className="text-white/60 text-sm">Average results across managed campaigns</p>
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

export default function InfluencerUGCClient() {
  const { ref: overviewRef, inView: overviewInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

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

  const creatorTiers = [
    {
      highlightedName: "Nano & Micro <span class='text-[#f4cc6f]'>Influencers</span>",
      icon: Users,
      description: "Highly engaged niche audiences with authentic trust. Micro-influencers (1K–100K followers) deliver the highest engagement rates and the lowest cost-per-conversion — ideal for targeted, results-driven campaigns.",
      stat1: "3–8%",
      stat1Label: "Avg Engagement",
      stat2: "5–20×",
      stat2Label: "Avg ROAS",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Niche Audience Fit", "Authentic Trust", "Cost-Effective", "High Engagement", "Product Reviews", "Community Access"],
    },
    {
      highlightedName: "Macro <span class='text-[#f4cc6f]'>Influencers</span>",
      icon: Star,
      description: "Established creators with 100K–1M followers who bring broad reach combined with strong audience loyalty. Ideal for brand awareness campaigns, product launches, and scaling your message to larger markets.",
      stat1: "1.5–3%",
      stat1Label: "Avg Engagement",
      stat2: "100K–1M",
      stat2Label: "Audience Size",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Broad Brand Reach", "Established Authority", "Category Leadership", "Multi-Format Content", "Brand Partnerships", "Media Coverage"],
    },
    {
      highlightedName: "UGC <span class='text-[#f4cc6f]'>Creators</span>",
      icon: Camera,
      description: "User-generated content specialists who create authentic, ad-ready product content without posting to their own audience. UGC outperforms brand-produced creative in paid ads by 4× on average.",
      stat1: "4×",
      stat1Label: "vs Brand Creative",
      stat2: "48–72hrs",
      stat2Label: "Delivery Time",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Ad-Ready Content", "Full Usage Rights", "Product Reviews", "Unboxing Videos", "Testimonials", "Lifestyle Shoots"],
    },
    {
      highlightedName: "TikTok & Reels <span class='text-[#f4cc6f]'>Creators</span>",
      icon: FaTiktok,
      description: "Short-form video specialists optimized for the TikTok and Instagram Reels algorithms. These creators understand trend cycles, audio selection, and the creative hooks that drive organic discovery and viral reach.",
      stat1: "5.96%",
      stat1Label: "Avg Engagement",
      stat2: "1B+",
      stat2Label: "Monthly Users",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Viral Hook Expertise", "Trend Riding", "Sound Strategy", "FYP Optimization", "Duet & Stitch", "Gen Z Targeting"],
    },
    {
      highlightedName: "Instagram <span class='text-[#f4cc6f]'>Creators</span>",
      icon: FaInstagram,
      description: "Visual storytellers specializing in feed posts, Stories, and Reels on Instagram. They build aspirational brand narratives that drive product discovery, engagement, and purchase intent among highly visual audiences.",
      stat1: "4.7%",
      stat1Label: "Avg Engagement",
      stat2: "2B+",
      stat2Label: "Monthly Users",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Feed Aesthetics", "Story Sequences", "Reels Strategy", "Product Tags", "Swipe-Up Links", "Brand Collabs"],
    },
    {
      highlightedName: "YouTube & Podcast <span class='text-[#f4cc6f]'>Creators</span>",
      icon: FaYoutube,
      description: "Long-form content creators who build deep audience trust through in-depth reviews, tutorials, and dedicated brand segments. YouTube and podcast integrations drive some of the highest conversion rates in influencer marketing.",
      stat1: "8min+",
      stat1Label: "Avg Watch Time",
      stat2: "2.7B+",
      stat2Label: "Monthly Users",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Dedicated Reviews", "Tutorial Integrations", "Brand Segments", "SEO-Rich Content", "Loyal Subscribers", "High Intent Audiences"],
    },
  ];

  const services = [
    {
      title: <>Influencer Strategy & <span className="text-[#f4cc6f]">Discovery</span></>,
      description: "Data-driven creator identification using audience quality scores, engagement authenticity analysis, and brand-fit alignment across all platforms and niches.",
      icon: <Search className="w-8 h-8 text-white" />,
      link: "/contact",
    },
    {
      title: <>Campaign Management & <span className="text-[#f4cc6f]">Outreach</span></>,
      description: "End-to-end campaign coordination from creator outreach and negotiation to contract management, briefing, and timeline execution.",
      icon: <Target className="w-8 h-8 text-white" />,
      link: "/contact",
    },
    {
      title: <>UGC Content Creation & <span className="text-[#f4cc6f]">Licensing</span></>,
      description: "Brief, source, and manage UGC creators to produce ad-ready content with full commercial usage rights for paid ads and organic distribution.",
      icon: <Camera className="w-8 h-8 text-white" />,
      link: "/contact",
    },
    {
      title: <>Performance Tracking & <span className="text-[#f4cc6f]">Analytics</span></>,
      description: "Comprehensive reporting on reach, engagement, traffic, conversions, and ROI with clear attribution from creator content to business outcomes.",
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      link: "/contact",
    },
    {
      title: <>Brand Safety & <span className="text-[#f4cc6f]">Compliance</span></>,
      description: "Thorough creator vetting, audience authenticity verification, FTC disclosure compliance, and contract protection across every partnership.",
      icon: <Shield className="w-8 h-8 text-white" />,
      link: "/contact",
    },
    {
      title: <>Content Amplification & <span className="text-[#f4cc6f]">Distribution</span></>,
      description: "Repurpose and amplify creator content across paid ads, email, organic social, and your website to maximize the value of every content asset.",
      icon: <Zap className="w-8 h-8 text-white" />,
      link: "/contact",
    },
  ];

  const whyChoosePoints = [
    {
      title: "Vetted Creator Network",
      description: "Access to thousands of pre-screened creators across every niche, tier, and platform — each evaluated for audience quality, engagement authenticity, and brand safety before we recommend them.",
      icon: Users,
    },
    {
      title: "Authentic Content That Converts",
      description: "Real creators producing real content that resonates with real people. Authentic influencer content consistently outperforms brand-produced advertising in both trust and conversion metrics.",
      icon: Heart,
    },
    {
      title: "Full ROI Accountability",
      description: "Every partnership is tracked from creator post to business outcome. We connect influencer activity directly to website traffic, lead generation, and revenue — not just likes and views.",
      icon: TrendingUp,
    },
    {
      title: "Brand Safety First",
      description: "Rigorous creator vetting, audience analysis, FTC-compliant disclosure management, and contract protections ensure your brand is always represented with integrity and professionalism.",
      icon: Shield,
    },
    {
      title: "Multi-Platform Reach",
      description: "Coordinated campaigns spanning Instagram, TikTok, YouTube, podcasts, and beyond — meeting your audience wherever they consume content and reinforcing your brand message across every touchpoint.",
      icon: Globe,
    },
    {
      title: "Scalable Execution",
      description: "From single creator pilots to full-scale national creator programs managing hundreds of partnerships, our infrastructure scales with your ambitions without sacrificing quality or oversight.",
      icon: Zap,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#010c22] text-[#F8FBFB] overflow-x-hidden w-full max-w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden text-white min-h-screen md:min-h-0 py-20 md:py-40 flex items-center md:block w-full max-w-full">
        <div className="absolute inset-0">
          <Image
            src="/images/services-bg/influencer marketing.jpg.jpeg"
            alt="Influencer & UGC Marketing"
            fill
            priority
            quality={100}
            className="object-cover"
            style={{ transform: "translateZ(0)", willChange: "transform", backfaceVisibility: "hidden" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="w-full max-w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center w-full max-w-full">
              <div className="lg:col-span-12 space-y-6 w-full max-w-full">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 text-xs tracking-wider text-white/90 backdrop-blur-sm">
                  <Star className="w-4 h-4" />
                  ALTIORA INFOTECH
                </span>
                <h1 className="font-semibold tracking-tight text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  Influencer & UGC
                  <br />
                  Marketing
                </h1>
                <p className="text-xl sm:text-2xl text-white/90">
                  Authentic Content That Drives Trust, Reach & Revenue
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 focus:shadow-lg focus:shadow-[#f4cc6f]/25 focus:outline-none focus:ring-2 focus:ring-[#f4cc6f]/50 transition-all duration-300 transform hover:scale-105 focus:scale-105 w-[60%] sm:w-auto"
                  >
                    Launch a Creator Campaign
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
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="h-px w-full max-w-[80px] sm:max-w-[120px] bg-gradient-to-l from-[#f4cc6f]/50 to-transparent" />
              <span className={styles.overviewTitle}>Overview</span>
              <div className="h-px w-full max-w-[80px] sm:max-w-[120px] bg-gradient-to-r from-[#f4cc6f]/50 to-transparent" />
            </div>

            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={overviewInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
                className="max-w-5xl mx-auto py-8 px-8 sm:py-12 sm:px-12 md:py-14 md:px-14 rounded-[40px] border border-white/5 bg-white/[0.02] backdrop-blur-xl shadow-[0_20px_50px_rgba(244,204,111,0.05)] relative overflow-hidden"
              >
                <p className={`${styles.sectionDescription} !max-w-none relative z-10 !text-white/90`}>
                  Consumers trust creators more than brands. Influencer and UGC marketing tap into that trust — placing your product in the hands of real people who speak authentically to the audiences you need to reach. At Altiora Infotech, we build end-to-end creator programs that go beyond follower counts. We identify the right creators, brief them for maximum brand alignment, and measure every campaign against real business outcomes. Whether you need nano-influencer product seeding, large-scale macro campaigns, or a library of high-converting UGC for your paid ads, we build and manage creator programs that generate measurable growth for Canadian businesses.
                </p>
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#f4cc6f]/10 blur-[80px] rounded-full pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#f4cc6f]/5 blur-[120px] rounded-full pointer-events-none z-0" />
      </section>

      {/* Creator Tiers Showcase */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              <span className="text-[#f4cc6f]">Creator Tiers</span> We Work With
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              From highly targeted micro-influencers to viral short-form creators — we match your brand with the right voices across every tier and platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creatorTiers.map((tier, index) => (
              <CreatorTierCard key={index} tier={tier} />
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Performance Dashboard */}
      <section className="py-20 px-6 bg-[#010b22]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Real Results From Real Creators
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Every campaign we run is measured against real business metrics — not vanity numbers. Our managed influencer programs consistently deliver returns that outperform traditional digital advertising channels.
              </p>
              <div className="space-y-4">
                {[
                  "Audience quality scoring before every creator recommendation",
                  "Full attribution from creator content to conversions",
                  "UGC content repurposed across paid and organic channels",
                  "Monthly performance reports with ROI transparency",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#f4cc6f]" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <InfluencerDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-[#010b22]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-center">
              Our Influencer & UGC Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              A complete creator marketing infrastructure designed to connect your brand with the right audiences and convert attention into revenue.
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
                  hideServiceTag={true}
                  iconVariant="gray"
                />
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="block md:hidden">
            <div className="grid grid-cols-1 gap-4">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                  hideServiceTag={true}
                  iconVariant="gray"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Influencer Marketing */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Why Choose Our Influencer & UGC Marketing?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We combine creator expertise with performance discipline to deliver campaigns that build genuine brand trust and measurable business growth.
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
            <div className="flex justify-center gap-2 mt-4">
              {whyChoosePoints.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${activeSlide === index ? "w-6 bg-[#f4cc6f]" : "w-2 bg-white/30"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <ProcessTimeline
        title="Our Influencer & UGC Campaign Process"
        subtitle="A strategic, end-to-end system that connects your brand with the right creators and turns their content into measurable business results."
        steps={[
          {
            step: "01",
            title: "Strategy & Goal Setting",
            description: "Define campaign objectives, target audience, creator criteria, content formats, and KPIs that align with your business growth goals.",
            icon: Target,
            color: "from-blue-500 to-cyan-500",
          },
          {
            step: "02",
            title: "Creator Discovery & Vetting",
            description: "Identify and screen creators using audience quality scores, engagement authenticity analysis, niche alignment, and brand safety checks.",
            icon: Search,
            color: "from-purple-500 to-pink-500",
          },
          {
            step: "03",
            title: "Outreach & Campaign Briefing",
            description: "Handle all creator negotiations, contracts, FTC disclosures, and deliver detailed creative briefs that ensure on-brand, high-converting content.",
            icon: MessageCircle,
            color: "from-green-500 to-emerald-500",
          },
          {
            step: "04",
            title: "Content Creation & Review",
            description: "Manage the creation, review, and approval process to ensure every piece of content meets brand standards and campaign objectives before publication.",
            icon: Camera,
            color: "from-yellow-500 to-orange-500",
          },
          {
            step: "05",
            title: "Launch & Amplification",
            description: "Coordinate publishing schedules, boost top-performing content through paid amplification, and repurpose UGC across your brand channels for maximum reach.",
            icon: Zap,
            color: "from-red-500 to-pink-500",
          },
          {
            step: "06",
            title: "Reporting & Optimization",
            description: "Deliver comprehensive post-campaign analytics with reach, engagement, conversions, and ROI — and use insights to continuously improve future campaigns.",
            icon: BarChart3,
            color: "from-indigo-500 to-purple-500",
          },
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
              Partner with a creator marketing team that treats every campaign as a performance investment — not just a brand exercise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { text: "Vetted Creator Roster – Pre-screened influencers evaluated for audience quality, engagement authenticity, and brand alignment.", icon: FaNetworkWired },
              { text: "Full-Service Management – From strategy and discovery to content review and reporting, we handle every step of the campaign.", icon: FaTools },
              { text: "Data-Driven Creator Selection – Audience analytics, engagement rate verification, and conversion history inform every recommendation.", icon: FaCode },
              { text: "Authentic Storytelling – Creators who communicate your brand message in their own voice, building genuine trust with their audiences.", icon: FaUserFriends },
              { text: "UGC Content Licensing – Secure usage rights for creator content to repurpose across your paid ads, website, and marketing channels.", icon: FaVideo },
              { text: "Transparent ROI Reporting – Clear, metric-driven reports showing exactly how creator content contributes to your business growth.", icon: FaHandshake },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              const colors = ["from-pink-500 to-purple-500", "from-blue-500 to-cyan-500", "from-green-500 to-emerald-500", "from-red-500 to-orange-500", "from-yellow-500 to-orange-500", "from-teal-500 to-cyan-500"];
              const titles = ["Vetted", "Full-Service", "Data-Driven", "Authentic", "UGC", "Transparent"];
              const subtitles = ["Creator Roster", "Management", "Selection", "Storytelling", "Licensing", "ROI Reporting"];
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
              <Image src="/images/agentic-ai/cta/AI-Infrastructure-cta.png" alt="Influencer & UGC Marketing" fill className="object-cover rounded-3xl" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#010c22]/95 via-[#0a1038]/85 to-[#010c22]/95" />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#f4cc6f]/20 to-[#e6b85c]/20 ring-2 ring-[#f4cc6f]/30 mb-8 mx-auto">
                <Star className="w-10 h-10 text-[#f4cc6f]" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                Ready to Build a Creator Campaign That Converts?
              </h3>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-6 md:mb-8">
                Authentic content from real creators drives trust faster than any ad ever could. At Altiora Infotech, we build and manage influencer and UGC campaigns that connect your brand with the right audiences and turn their content into measurable revenue.
              </p>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-8">
                Share your campaign goals and target audience, and we&apos;ll build a creator strategy with platform recommendations, tier selection, content formats, and a clear ROI framework aligned to your business objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link
                  href="https://calendly.com/altiorainfotech/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 focus:shadow-lg focus:shadow-[#f4cc6f]/25 focus:outline-none focus:ring-2 focus:ring-[#f4cc6f]/50 transition-all duration-300 transform hover:scale-105 focus:scale-105"
                >
                  <FaRocket className="mr-2 w-5 h-5" />
                  Book a Strategy Call
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold border border-white/30 bg-white/[0.08] backdrop-blur-sm text-white hover:bg-white/[0.12] focus:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                >
                  <FaEye className="mr-2 w-5 h-5" />
                  Get a Campaign Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
