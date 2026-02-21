"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import {
  CheckCircle,
  TrendingUp,
  BarChart3,
  Target,
  Users,
  Zap,
  Eye,
  Share2,
  MessageCircle,
  Heart,
  Calendar,
  Search,
  Shield,
  Globe,
} from "lucide-react";
import {
  FaRocket,
  FaEye,
  FaCode,
  FaShieldAlt,
  FaNetworkWired,
  FaTools,
  FaHandshake,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import styles from "../digital-marketing/dm.module.css";
import ServiceCard from "@/components/ServiceCard";
import ProcessTimeline from "@/components/ProcessTimeline";

const PlatformCard = ({ platform, className }: { platform: any; className?: string }) => {
  return (
    <motion.div
      className={`relative group cursor-pointer ${className || ""}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={`relative rounded-3xl p-6 md:p-8 border-2 transition-all duration-500 ${platform.borderColor} ${platform.bgGradient} backdrop-blur-sm overflow-hidden h-[480px] flex flex-col`}>
        <div className="absolute inset-0 opacity-10">
          <div className={`absolute top-0 right-0 w-32 h-32 ${platform.iconBg} rounded-full blur-3xl animate-pulse`} />
          <div className={`absolute bottom-0 left-0 w-24 h-24 ${platform.iconBg} rounded-full blur-2xl animate-pulse`} style={{ animationDelay: "1s" }} />
        </div>
        <motion.div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl ${platform.iconBg} mb-6 relative z-10`}>
          <platform.icon className={`w-8 h-8 md:w-10 md:h-10 ${platform.iconColor}`} />
        </motion.div>
        <div className="relative z-10 flex-1 flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3" dangerouslySetInnerHTML={{ __html: platform.highlightedName }} />
          <p className="text-white/80 text-base md:text-lg mb-4 leading-relaxed flex-1">{platform.description}</p>
          <div className="flex items-center justify-between mb-4">
            <div className="text-center">
              <div className={`text-2xl font-bold ${platform.textColor}`}>{platform.stat1}</div>
              <div className="text-xs text-white/60">{platform.stat1Label}</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${platform.textColor}`}>{platform.stat2}</div>
              <div className="text-xs text-white/60">{platform.stat2Label}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {platform.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className={`w-4 h-4 ${platform.iconColor}`} />
                <span className="text-sm text-white/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <motion.div className={`absolute inset-0 ${platform.hoverGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`} />
      </div>
    </motion.div>
  );
};

const PerformanceWidget = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const metrics = [
    { label: "Follower Growth", value: "+34%", change: "Monthly avg", icon: Users },
    { label: "Engagement Rate", value: "6.2%", change: "+2.8% vs before", icon: Heart },
    { label: "Post Reach", value: "125K", change: "+89% increase", icon: Eye },
    { label: "Lead Conversions", value: "+67%", change: "From social", icon: TrendingUp },
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
          <h3 className="text-xl font-bold text-white">Social Performance</h3>
          <p className="text-white/60 text-sm">Average results after 90 days</p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={index}
              className={`p-4 rounded-2xl border transition-all duration-500 ${activeMetric === index ? "border-[#f4cc6f] bg-[#f4cc6f]/10" : "border-white/10 bg-white/5"}`}
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

export default function SocialMediaManagementClient() {
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

  const { ref: overviewRef, inView: overviewInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const platforms = [
    {
      highlightedName: "Instagram <span class='text-[#f4cc6f]'>Management</span>",
      icon: FaInstagram,
      description: "Grow a loyal audience with visually stunning Reels, Stories, and feed posts optimized for discovery and engagement.",
      stat1: "2B+",
      stat1Label: "Monthly Users",
      stat2: "4.7%",
      stat2Label: "Avg Engagement",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Reels Strategy", "Story Content", "Hashtag Research", "Feed Aesthetics", "Bio Optimization", "Highlight Covers"],
    },
    {
      highlightedName: "Facebook <span class='text-[#f4cc6f]'>Management</span>",
      icon: FaFacebookF,
      description: "Build community, drive traffic, and generate leads through strategic page management and targeted content publishing.",
      stat1: "3.8B+",
      stat1Label: "Monthly Users",
      stat2: "1.93%",
      stat2Label: "Avg Engagement",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Page Management", "Group Moderation", "Event Promotion", "Video Content", "Lead Generation", "Community Building"],
    },
    {
      highlightedName: "LinkedIn <span class='text-[#f4cc6f]'>Management</span>",
      icon: FaLinkedinIn,
      description: "Position your brand as an industry authority with thought leadership content that attracts high-value B2B prospects.",
      stat1: "900M+",
      stat1Label: "Professionals",
      stat2: "2.74%",
      stat2Label: "Avg Engagement",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Thought Leadership", "Company Page", "Employee Advocacy", "Lead Nurturing", "Content Articles", "B2B Targeting"],
    },
    {
      highlightedName: "TikTok <span class='text-[#f4cc6f]'>Management</span>",
      icon: FaTiktok,
      description: "Capture Gen Z and millennial audiences with trend-driven short-form video content that drives organic viral reach.",
      stat1: "1B+",
      stat1Label: "Monthly Users",
      stat2: "5.96%",
      stat2Label: "Avg Engagement",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Viral Video Strategy", "Trend Utilization", "Sound Selection", "Duet & Stitch", "Hashtag Challenges", "FYP Optimization"],
    },
    {
      highlightedName: "Twitter/X <span class='text-[#f4cc6f]'>Management</span>",
      icon: FaTwitter,
      description: "Stay part of real-time conversations and build brand awareness through strategic Twitter presence and engagement.",
      stat1: "450M+",
      stat1Label: "Monthly Users",
      stat2: "Daily",
      stat2Label: "Engagement",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Brand Voice", "Trend Monitoring", "Reply Management", "Thread Strategy", "Polls & Engagement", "News Commentary"],
    },
    {
      highlightedName: "YouTube <span class='text-[#f4cc6f]'>Management</span>",
      icon: FaYoutube,
      description: "Build a long-form content library that drives search traffic, authority, and subscriber growth for your brand.",
      stat1: "2.7B+",
      stat1Label: "Monthly Users",
      stat2: "8min",
      stat2Label: "Avg Watch Time",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Channel Optimization", "SEO Titles & Tags", "Thumbnail Design", "End Screens & Cards", "Playlist Strategy", "Analytics Review"],
    },
  ];

  const services = [
    {
      title: <>Content <span className="text-[#f4cc6f]">Strategy</span></>,
      description: "Data-driven content strategies that define your brand voice, content pillars, and platform-specific direction for measurable growth.",
      icon: <Target className="w-12 h-12" />,
      link: "/contact",
    },
    {
      title: <>Social Media <span className="text-[#f4cc6f]">Content Creation</span></>,
      description: "Scroll-stopping visuals, captions, and short-form videos crafted to capture attention and spark action across every platform.",
      icon: <Share2 className="w-12 h-12" />,
      link: "/contact",
    },
    {
      title: <>Community <span className="text-[#f4cc6f]">Management</span></>,
      description: "Active comment moderation, DM responses, and community engagement that builds loyalty and converts followers into customers.",
      icon: <MessageCircle className="w-12 h-12" />,
      link: "/contact",
    },
    {
      title: <>Audience <span className="text-[#f4cc6f]">Growth</span></>,
      description: "Organic growth tactics including hashtag strategy, collaboration outreach, and platform algorithm optimization for sustained follower growth.",
      icon: <Users className="w-12 h-12" />,
      link: "/contact",
    },
    {
      title: <>Analytics & <span className="text-[#f4cc6f]">Reporting</span></>,
      description: "Comprehensive monthly performance reports with actionable insights, trend analysis, and strategic recommendations for continuous improvement.",
      icon: <BarChart3 className="w-12 h-12" />,
      link: "/contact",
    },
    {
      title: <>Influencer <span className="text-[#f4cc6f]">Partnerships</span></>,
      description: "Identify, outreach, and manage relevant influencer collaborations that amplify your brand message to highly targeted audiences.",
      icon: <Zap className="w-12 h-12" />,
      link: "/contact",
    },
  ];

  const whyChoosePoints = [
    {
      title: "Platform Expertise",
      description: "Deep, platform-specific knowledge across Instagram, Facebook, LinkedIn, TikTok, Twitter, and YouTube ensures every strategy is optimized for where your audience actually spends time.",
      icon: Globe,
    },
    {
      title: "Content Excellence",
      description: "Every post is crafted with purpose — designed to stop the scroll, communicate your value, and drive the action that matters most to your business goals.",
      icon: Zap,
    },
    {
      title: "Data-Driven Strategy",
      description: "Decisions backed by analytics, not guesswork. We track engagement signals, audience behavior, and conversion patterns to continuously refine your social presence.",
      icon: BarChart3,
    },
    {
      title: "Community Building",
      description: "We don't just post and disappear. Active comment management, DM responses, and genuine engagement turn your audience into a loyal brand community.",
      icon: Users,
    },
    {
      title: "Consistent Presence",
      description: "Never miss a day of posting again. Our managed publishing system keeps your brand active, relevant, and top-of-mind without any effort on your part.",
      icon: Calendar,
    },
    {
      title: "Transparent Reporting",
      description: "Clear, jargon-free monthly reports showing exactly what's working, what's growing, and where we're headed — so you always know the value we're delivering.",
      icon: Eye,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#010c22] text-[#F8FBFB] overflow-x-hidden w-full max-w-full">
      <Header />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden text-white min-h-screen md:min-h-0 py-20 md:py-40 flex items-center md:block w-full max-w-full"
      >
        <div className="absolute inset-0">
          <Image src="/images/services-bg/Social Media Management Services.jpg.jpeg" alt="Social Media Management" fill priority quality={100} className="object-cover" style={{ transform: "translateZ(0)", willChange: "transform", backfaceVisibility: "hidden" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="w-full max-w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center w-full max-w-full">
              <div className="lg:col-span-12 space-y-6 w-full max-w-full">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 text-xs tracking-wider text-white/90 backdrop-blur-sm">
                  <Share2 className="w-4 h-4" />
                  ALTIORA INFOTECH
                </span>
                <h1 className="font-semibold tracking-tight text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  Social Media Management
                  <br />
                  Services
                </h1>
                <p className="text-xl sm:text-2xl text-white/90">
                  Turn Attention Into Revenue with Strategic Social Presence
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="w-[60%] sm:w-auto inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 focus:shadow-lg focus:shadow-[#f4cc6f]/25 focus:outline-none focus:ring-2 focus:ring-[#f4cc6f]/50 transition-all duration-300 transform hover:scale-105 focus:scale-105"
                  >
                    Start Growing
                    <FaRocket className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section ref={overviewRef} className="pb-12 pt-8 sm:pb-16 sm:pt-12 md:pb-20 md:pt-16 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#010b22]">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={overviewInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center">
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
                  Social media shouldn't feel like a second job. Most businesses post consistently — yet still don't grow. Because growth doesn't come from activity — it comes from strategy, positioning, and execution that compounds over time. At Altiora Infotech, we design a complete social media management system that makes your brand recognizable, trusted, and chosen across every platform your audience lives on.
                </p>
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#f4cc6f]/10 blur-[80px] rounded-full pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#f4cc6f]/5 blur-[120px] rounded-full pointer-events-none z-0" />
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              <span className="text-[#f4cc6f]">Platforms</span> We Manage
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Reach your audience where they spend their time with platform-specific strategies and creative excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <PlatformCard key={index} platform={platform} />
            ))}
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-20 px-6 bg-[#010b22]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Results That Speak for Themselves
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Our managed social media accounts consistently outperform industry benchmarks. We track what matters — engagement quality, follower intent, and lead signals — then optimize every week.
              </p>
              <div className="space-y-4">
                {[
                  "Average 34% follower growth in first 90 days",
                  "6.2% engagement rate vs 1-2% industry average",
                  "Daily publishing across all managed platforms",
                  "Monthly strategy reviews and content calendar updates",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#f4cc6f]" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <PerformanceWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-[#010b22]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-center">
              Our Social Media Management Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Comprehensive social media solutions designed to build your brand, grow your audience, and drive real business results.
            </p>
          </div>
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} link={service.link} hideServiceTag={true} iconVariant="gray" />
            ))}
          </div>
          <div className="block md:hidden">
            <div className="grid grid-cols-1 gap-4">
              {services.map((service, index) => (
                <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} link={service.link} hideServiceTag={true} iconVariant="gray" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Why Choose Our Social Media Management?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We combine platform expertise with creative excellence to deliver social media management that drives real business results.
            </p>
          </div>
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoosePoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group relative">
                  <div className="relative h-full p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0B0D2A] to-[#0B0D2A] shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-[#F4CC6F]/50 flex flex-col overflow-hidden">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center mb-5 flex-shrink-0 shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#f4cc6f] transition-colors duration-300">{point.title}</h3>
                    <p className="text-base text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300 flex-1">{point.description}</p>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f4cc6f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                  </div>
                </motion.div>
              );
            })}
          </div>
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
                <div key={index} className={`h-2 rounded-full transition-all duration-300 ${activeSlide === index ? "w-6 bg-[#f4cc6f]" : "w-2 bg-white/30"}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <ProcessTimeline
        title="Our Social Media Management Process"
        subtitle="A proven system that transforms your social presence into a consistent lead generation and brand authority engine."
        steps={[
          { step: "01", title: "Discovery & Audit", description: "We analyze your current social presence, competitors, target audience, and brand positioning to identify growth opportunities.", icon: Search, color: "from-blue-500 to-cyan-500" },
          { step: "02", title: "Strategy & Planning", description: "Build your custom content strategy, editorial calendar, platform-specific guidelines, and monthly content pillars aligned with your goals.", icon: Target, color: "from-purple-500 to-pink-500" },
          { step: "03", title: "Content Creation", description: "Design and produce scroll-stopping visuals, captions, Reels, Stories, and platform-specific content formats ready for publishing.", icon: Zap, color: "from-green-500 to-emerald-500" },
          { step: "04", title: "Publishing & Scheduling", description: "Publish content at optimal times with platform-specific formatting, hashtag strategy, and cross-platform coordination.", icon: Calendar, color: "from-yellow-500 to-orange-500" },
          { step: "05", title: "Community Engagement", description: "Monitor and respond to comments, DMs, and mentions across all platforms to build authentic relationships with your audience.", icon: MessageCircle, color: "from-red-500 to-pink-500" },
          { step: "06", title: "Reporting & Optimization", description: "Deliver monthly performance reports and continuously refine strategy based on data insights, audience signals, and campaign results.", icon: BarChart3, color: "from-indigo-500 to-purple-500" },
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
              Partner with social media experts who treat your brand like their own.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { text: "Platform Mastery – Deep knowledge of algorithms, trends, and best practices across all major social media platforms.", icon: FaNetworkWired },
              { text: "Creative Excellence – Award-quality content that reflects your brand identity and stops the scroll every time.", icon: FaTools },
              { text: "Strategic Approach – Every post serves a purpose in your broader growth strategy — nothing is posted randomly.", icon: FaCode },
              { text: "Engagement Focused – We actively build community through real conversations, not automated responses.", icon: FaShieldAlt },
              { text: "Consistent Delivery – Reliable publishing schedules so your brand is always present and top-of-mind.", icon: FaRocket },
              { text: "Transparent Partnership – Monthly reporting, open communication, and full visibility into your results.", icon: FaHandshake },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              const colors = ["from-pink-500 to-purple-500", "from-blue-500 to-cyan-500", "from-green-500 to-emerald-500", "from-red-500 to-orange-500", "from-yellow-500 to-orange-500", "from-teal-500 to-cyan-500"];
              const titles = ["Platform", "Creative", "Strategic", "Engagement", "Consistent", "Transparent"];
              const subtitles = ["Mastery", "Excellence", "Approach", "Focused", "Delivery", "Partnership"];
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
              <Image src="/images/agentic-ai/cta/AI-Infrastructure-cta.png" alt="Social Media Management" fill className="object-cover rounded-3xl" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#010c22]/95 via-[#0a1038]/85 to-[#010c22]/95" />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#f4cc6f]/20 to-[#e6b85c]/20 ring-2 ring-[#f4cc6f]/30 mb-8 mx-auto">
                <Share2 className="w-10 h-10 text-[#f4cc6f]" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                Ready to Build Your Social Media Presence?
              </h3>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-6 md:mb-8">
                Transform your social channels into a consistent lead generation and brand authority engine. At Altiora Infotech, we handle everything — strategy, content, publishing, and growth — so you can focus on running your business.
              </p>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-8">
                Ready to start growing? Share your business goals and target audience, and we'll create a comprehensive social media strategy tailored to your brand.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link href="https://calendly.com/altiorainfotech/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 focus:shadow-lg focus:shadow-[#f4cc6f]/25 focus:outline-none focus:ring-2 focus:ring-[#f4cc6f]/50 transition-all duration-300 transform hover:scale-105 focus:scale-105">
                  <FaRocket className="mr-2 w-5 h-5" />
                  Book Strategy Call
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold border border-white/30 bg-white/[0.08] backdrop-blur-sm text-white hover:bg-white/[0.12] focus:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300">
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
