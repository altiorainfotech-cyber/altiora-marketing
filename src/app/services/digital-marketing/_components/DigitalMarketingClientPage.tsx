'use client';

import React, { useEffect, useState, type ComponentType } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Search,
  TrendingUp,
  Target,
  Megaphone,
  Share2,
  DollarSign,
  LineChart,
  Users,
  Zap,
  CheckCircle,
  BarChart3,
  Eye,
  Activity,
  ArrowRight,
  ArrowUpRight,
  Monitor,
  Palette,
  Video,
  Briefcase,
  PenTool
} from "lucide-react";

import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import DMHeroAnimation from "./DMHeroAnimation";
import DMTrendsPortal from "./DMTrendsPortal";
import DMCosmicPortal from "./DMCosmicPortal";
import styles from "../dm.module.css";

// Icon mapping
const iconMap: Record<string, ComponentType<{ className?: string; size?: string | number }>> = {
  Search,
  TrendingUp,
  Target,
  Megaphone,
  Share2,
  DollarSign,
  LineChart,
  Users,
  Zap,
  CheckCircle,
  BarChart3,
  Eye,
  Activity,
  Monitor,
  Palette,
  Video,
  Briefcase,
  PenTool
};

// Default fallback data
const defaultDigitalMarketingServices = [
  {
    title: "Paid Advertisement Services",
    description: "Platforms like Facebook, Instagram, Google YouTube and TikTok are taking over the advertising space... and it makes sense; these companies have so much data that it allows us to create targeted ad campaigns that put your brand in front of the right people, creating brand awareness and increasing your sales.",
    features: [
      "Facebook Ads",
      "Instagram Ads",
      "Google YouTube Ads",
      "TikTok Ads",
      "Targeted ad campaigns for brand growth"
    ],
    link: "/services/paid-advertisement-services",
    metric: "",
    metricLabel: "",
    icon: "Megaphone",
    iconName: "ADS",
    color: "#3B82F6",
  },
  {
    title: "SEO (Search Engine Optimization)",
    description: "Ranking #1 on Google is a battle; but we've done it for ourselves (Google \"Langley Marketing Agency\"). We can do it for you too using straightforward strategies that get results.",
    features: [
      "Keyword research and strategy",
      "On-page SEO optimization",
      "Technical SEO improvements",
      "Local SEO ranking boost",
      "Long-term organic traffic growth"
    ],
    link: "/services/seo",
    metric: "",
    metricLabel: "",
    icon: "Search",
    iconName: "SEO",
    color: "#10B981",
  },
  {
    title: "Web Design",
    description: "Convert visitors into value with a website that gives a great first impression. Our team of web developers design websites that not only look great but also help you rank better in search results. We can even dedicate the time to writing your written content and providing photos & videos.",
    features: [
      "Modern website design",
      "Mobile responsive development",
      "SEO-friendly website structure",
      "Content writing support",
      "Photos & video integration"
    ],
    link: "/services/web-design",
    metric: "",
    metricLabel: "",
    icon: "Monitor",
    iconName: "WEB",
    color: "#EC4899",
  },
  {
    title: "Social Media Management",
    description: "Staying top of mind is an important marketing principle; social media is a consistent way to increase brand loyalty and grow your business. Longhouse offers a few social media services such as viral video content, social media management and influencer marketing.",
    features: [
      "Viral video content",
      "Social media management",
      "Influencer marketing",
      "Audience engagement strategy",
      "Brand loyalty improvement"
    ],
    link: "/services/social-media-management",
    metric: "",
    metricLabel: "",
    icon: "Share2",
    iconName: "SMM",
    color: "#EF4444",
  },
  {
    title: "Graphic Design",
    description: "Graphic design helps you share your business or organization in a way that feels polished and consistent. We design business cards, brochures, signage, presentation decks, and other materials that reflect your brand and are ready when you need them.",
    features: [
      "Business cards design",
      "Brochure design",
      "Signage design",
      "Presentation decks",
      "Marketing materials & brand assets"
    ],
    link: "/services/graphic-design",
    metric: "",
    metricLabel: "",
    icon: "PenTool",
    iconName: "GFX",
    color: "#F59E0B",
  },
  {
    title: "Branding",
    description: "Branding includes your logo, colour palette, messaging, typography, and graphic elements that set the tone for how people experience your business. We build branding that feels cohesive, professional, and ready to grow with you.",
    features: [
      "Logo and identity design",
      "Colour palette selection",
      "Typography and style guide",
      "Brand messaging development",
      "Complete brand consistency setup"
    ],
    link: "/services/branding",
    metric: "",
    metricLabel: "",
    icon: "Palette",
    iconName: "BRD",
    color: "#7c69ef",
  },
  {
    title: "Video Production",
    description: "Telling your story through video is the most effective way to get your message understood. Attention spans are short and standing out is key to marketing results; our video production agency is here to help.",
    features: [
      "Business promotional videos",
      "Social media reels & shorts",
      "Editing and post-production",
      "Storytelling video creation",
      "High-quality branded video content"
    ],
    link: "/services/video-production",
    metric: "",
    metricLabel: "",
    icon: "Video",
    iconName: "VID",
    color: "#06B6D4",
  },
  {
    title: "Business Consulting",
    description: "Growing your business alone is stressful but as a busy business leader, finding the hours to develop a comprehensive digital marketing plan can be daunting. Our team will help outline a growth path for your business that gets results.",
    features: [
      "Business growth planning",
      "Marketing roadmap development",
      "Strategy and goal setting",
      "Competitor and market analysis",
      "Ongoing consulting support"
    ],
    link: "/services/business-consulting",
    metric: "",
    metricLabel: "",
    icon: "Briefcase",
    iconName: "BIZ",
    color: "#8B5CF6",
  },
];

const defaultWorkflowSteps = [
  {
    icon: "Target",
    title: "Strategy & Market Research",
    description: "We analyze your industry, competitors, and target audience in Canada and the USA to create a customized growth roadmap.",
  },
  {
    icon: "LineChart",
    title: "Build & Optimize",
    description: "Whether it's website development, SEO optimization, or campaign setup, we implement high-performance digital assets.",
  },
  {
    icon: "Zap",
    title: "Traffic & Lead Generation",
    description: "As a trusted PPC Management Company and Social Media Marketing Agency, we drive targeted traffic through Google Ads, Meta Ads, SEO, and content marketing.",
  },
  {
    icon: "Activity",
    title: "Measure, Improve & Scale",
    description: "We track KPIs, optimize conversion funnels, and scale profitable campaigns to maximize ROI.",
  }
];

const defaultOutcomes = [
  {
    icon: "Settings",
    title: "Customized strategies—not templates",
    subtitle: "",
    description: "",
    emoji: "⚙️"
  },
  {
    icon: "Target",
    title: "ROI-focused campaign execution",
    subtitle: "",
    description: "",
    emoji: "🎯"
  },
  {
    icon: "Eye",
    title: "Transparent reporting<br />and communication",
    subtitle: "",
    description: "",
    emoji: "👁️"
  },
  {
    icon: "Users",
    title: "Experienced digital marketing specialists",
    subtitle: "",
    description: "",
    emoji: "�"
  }
];

interface DigitalMarketingClientPageProps {
  pageData?: any;
}

export default function DigitalMarketingClientPage({ pageData }: DigitalMarketingClientPageProps) {
  const [mounted, setMounted] = useState(false);
  const [activeBenefit, setActiveBenefit] = useState<number | null>(null);
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [overviewRef, overviewInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [workflowRef, workflowInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [outcomesRef, outcomesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.documentElement.getBoundingClientRect();
      mouseX.set(e.clientX - rect.width / 2);
      mouseY.set(e.clientY - rect.height / 2);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Animated Counter Component
  const AnimatedCounter = ({ value, prefix = "", suffix = "", inView }: {
    value: number;
    prefix?: string;
    suffix?: string;
    inView: boolean;
  }) => {
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 4000 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      motionValue.set(0);
      setDisplayValue(0);
    }, [motionValue]);

    useEffect(() => {
      if (inView) {
        motionValue.set(value);
      }
    }, [inView, value, motionValue]);

    useEffect(() => {
      const unsubscribe = springValue.on("change", (latest) => {
        setDisplayValue(Math.round(latest));
      });
      return unsubscribe;
    }, [springValue]);

    return (
      <span>
        {prefix}{displayValue}{suffix}
      </span>
    );
  };

  const heroSection = pageData?.heroSection || {
    badge: "Digital Marketing Excellence",
    title: "Results-Driven Digital Marketing Agency in Canada & USA",
    subtitle: "We combine SEO, performance marketing, and data-driven strategy to generate qualified leads, increase visibility, and maximize ROI.",
  };

  const servicesSection = pageData?.servicesSection || {
    services: defaultDigitalMarketingServices
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#010b22] text-[#F8FBFB]">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="py-8 px-4 pt-24 sm:py-12 sm:px-6 md:py-16 md:px-8 lg:py-20 lg:px-10 xl:py-24 relative overflow-hidden bg-[#010b22]"
        >
          {/* Floating Stars */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {mounted && [...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-20 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[650px]">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="order-2 lg:order-1 text-center lg:text-left relative z-20"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className={`${styles.heroTitle} mb-4 sm:mb-5 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl`}
                >
                  {heroSection.title.split('Digital Marketing Agency').map((part: string, i: number, arr: string[]) => (
                    <React.Fragment key={i}>
                      {i > 0 && <a href="https://altiorainfotech.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Digital Marketing Agency</a>}
                      {i === arr.length - 1 ? (
                        <>
                          {part.split(' ').slice(0, -2).join(' ')}{' '}
                          <span className={styles.gradientText}>
                            {part.split(' ').slice(-2).join(' ')}
                          </span>
                        </>
                      ) : part}
                    </React.Fragment>
                  ))}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                >
                  {heroSection.subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] hover:from-[#e6b85c] hover:to-[#f4cc6f] text-[#010c22] text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg shadow-[#f4cc6f]/25 hover:shadow-xl hover:shadow-[#f4cc6f]/40"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border-2 border-[#f4cc6f]/50 hover:border-[#f4cc6f] text-[#f4cc6f] hover:text-white text-sm sm:text-base font-semibold transition-all duration-300 hover:bg-[#f4cc6f]/10"
                  >
                    View Case Studies
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="order-1 lg:order-2 relative h-[280px] sm:h-[320px] md:h-[380px] lg:h-[500px] xl:h-[600px]"
              >
                <DMHeroAnimation className="w-full h-full" />
              </motion.div>
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
                  <p className={`${styles.sectionDescription} !max-w-none relative z-10`}>
                    <span className="">As an experienced <a href="https://altiorainfotech.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Digital Marketing Agency</a>, we focus on measurable outcomes — not just impressions or clicks.</span> Every strategy is designed to attract high-intent customers and convert them into revenue.
                   
                    From local businesses to national brands, our team builds scalable digital ecosystems that drive long-term success.
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

        {/* Stats Section */}
        <section ref={statsRef} className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#061630]">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 md:gap-8 relative">
              {/* Vertical dividers between stats (desktop only) */}
              <div className="hidden sm:block absolute left-1/3 top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              <div className="hidden sm:block absolute left-2/3 top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

              {[
                {
                  value: 200,
                  suffix: "+",
                  prefix: "",
                  label: "Clients Served",
                  desc: "across Canada and the USA trust Altiora Infotech as their growth partner.",
                },
                {
                  value: 5,
                  suffix: "M+",
                  prefix: "$",
                  label: "Revenue Generated",
                  desc: "in trackable revenue driven for our clients through digital campaigns.",
                },
                {
                  value: 30,
                  suffix: "+",
                  prefix: "",
                  label: "Industries Covered",
                  desc: "from healthcare to e-commerce, delivering tailored marketing solutions.",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 100 }}
                  className="text-center py-4"
                >
                  <div className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 bg-gradient-to-b from-[#f4cc6f] to-[#e6b85c] bg-clip-text text-transparent leading-none">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      inView={statsInView}
                    />
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-white mb-2">
                    {stat.label}
                  </div>
                  <p className="text-sm sm:text-base text-white/60 max-w-[280px] mx-auto leading-relaxed">
                    {stat.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section ref={servicesRef} className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden">
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {mounted && [...Array(15)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `radial-gradient(circle, ${['#7c69ef', '#EC4899', '#3B82F6'][i % 3]}, transparent)`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20"
            >
              <motion.h2
                className={`${styles.sectionHeading} text-center mb-4`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                Our Digital Marketing <span className="text-[#f4cc6f]">Services</span>
              </motion.h2>
              <motion.p
                className={`${styles.sectionDescription} max-w-4xl mx-auto`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                We offer a complete suite of digital marketing services that work together to maximize visibility, conversions, and ROI.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {servicesSection.services.map((service: any, index: number) => {
                const IconComponent = typeof service.icon === 'string'
                  ? iconMap[service.icon] || Target
                  : service.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={servicesInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="h-full group"
                  >
                    <Link href={service.link} className="block h-full">
                      <div className={`${styles.serviceCardEnhanced} h-full flex flex-col p-4 relative`}>
                        {/* Animated Gradient Border */}
                        <div
                          className={styles.animatedBorder}
                          style={{
                            background: `linear-gradient(135deg, ${service.color}, ${service.color}80, transparent)`,
                          }}
                        />

                        {/* Hover Glow Effect */}
                        <div
                          className={styles.hoverGlow}
                          style={{
                            background: `radial-gradient(circle at center, ${service.color}40, transparent 70%)`,
                          }}
                        />

                        {/* Icon + Title row */}
                        <div className="flex items-center gap-3 mb-3 relative z-10">
                          <div
                            className="inline-flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
                            style={{ backgroundColor: `${service.color}20` }}
                          >
                            <IconComponent
                              className="w-5 h-5"
                              style={{ color: service.color }}
                            />
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-white">
                            {service.title}
                          </h3>
                        </div>

                        <p className="text-sm text-gray-400 mb-3 relative z-10 line-clamp-2">
                          {service.description}
                        </p>

                        {/* Features List */}
                        {service.features && service.features.length > 0 && (
                          <ul className="space-y-1 mb-3 relative z-10">
                            {service.features.map((feature: string, idx: number) => (
                              <li key={idx} className="flex items-center gap-1.5 text-xs text-gray-300">
                                <CheckCircle
                                  className="w-3 h-3 flex-shrink-0"
                                  style={{ color: service.color }}
                                />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Learn More */}
                        <motion.div
                          className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold relative z-10"
                          style={{ color: service.color }}
                          whileHover={{ x: 5 }}
                        >
                          Learn More
                          <ArrowUpRight className="w-3 h-3" />
                        </motion.div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Grow Your Business Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#010b22]">
          {/* Decorative blurred orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#f4cc6f]/8 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500/8 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Top heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className={`${styles.sectionHeading} max-w-4xl mx-auto`}>
                We Invest the Time &amp; Expertise to{' '}
                <span className="text-[#f4cc6f]">Scale Your Business</span>{' '}
                with Strategic Digital Marketing.
              </h2>
            </motion.div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-14">
              {[
                {
                  icon: Target,
                  title: "You Focus on Business",
                  desc: "Running a company is demanding. Let us handle your entire digital marketing — from SEO and ads to social media and content — while you focus on growth.",
                },
                {
                  icon: TrendingUp,
                  title: "We Drive the Results",
                  desc: "Our dedicated team builds and manages campaigns across Google Ads, Meta, web design, branding, and more — all optimized for real, measurable outcomes.",
                },
                {
                  icon: Users,
                  title: "Together We Grow",
                  desc: "Think of us as your in-house marketing department. We align with your goals, report transparently, and continuously improve to scale your revenue.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group relative p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#f4cc6f]/30 transition-all duration-500 hover:bg-white/[0.05]"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#f4cc6f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-[#f4cc6f]/10 flex items-center justify-center mb-5 group-hover:bg-[#f4cc6f]/20 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-[#f4cc6f]" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#f4cc6f]/10 via-[#f4cc6f]/5 to-transparent border border-[#f4cc6f]/15"
            >
              <div className="flex items-center gap-3 text-center sm:text-left">
                <span className="w-3 h-3 rounded-full bg-[#f4cc6f] animate-pulse flex-shrink-0" />
                <p className="text-base sm:text-lg text-white/80 font-medium">
                  Altiora Infotech is here to help — let&apos;s build something great together.
                </p>
              </div>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] hover:from-[#e6b85c] hover:to-[#f4cc6f] text-[#010c22] font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-[#f4cc6f]/25 hover:shadow-xl hover:shadow-[#f4cc6f]/40 flex-shrink-0"
              >
                Let&apos;s Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* How We Work Section - Timeline Style */}
        <section ref={workflowRef} className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#010b22] via-[#0a0f2e] to-[#010b22] opacity-50" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={workflowInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 sm:mb-20"
            >
              <motion.h2
                className={styles.sectionHeading}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                How Our <a href="https://altiorainfotech.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Digital Marketing Agency</a> Delivers Consistent <span className="text-[#f4cc6f]">Growth</span>
              </motion.h2>
              <motion.p
                className={styles.sectionDescription}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                A structured, data-driven approach designed to produce sustainable results.
              </motion.p>
            </motion.div>

            {/* Desktop Timeline */}
            <div className="hidden lg:block relative">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#f4cc6f]/20 via-[#f4cc6f]/40 to-[#f4cc6f]/20 transform -translate-y-1/2" />

              <div className="grid grid-cols-4 gap-6">
                {defaultWorkflowSteps.map((step: any, index: number) => {
                  const IconComponent = typeof step.icon === 'string'
                    ? iconMap[step.icon] || Target
                    : step.icon;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: index % 2 === 0 ? -50 : 50 }}
                      animate={workflowInView ? { opacity: 1, y: 0 } : { opacity: 0, y: index % 2 === 0 ? -50 : 50 }}
                      transition={{ duration: 0.7, delay: index * 0.2, type: "spring", stiffness: 100 }}
                      className="relative group"
                    >
                      {/* Timeline Node */}
                      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <motion.div
                          className="w-14 h-14 rounded-full bg-gradient-to-br from-[#f4cc6f] to-[#e6b85c] flex items-center justify-center shadow-lg shadow-[#f4cc6f]/50"
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.6 }}
                        >
                          <IconComponent className="w-7 h-7 text-white" />
                        </motion.div>
                      </div>

                      {/* Card */}
                      <motion.div
                        className={`relative p-5 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-purple-500/20 backdrop-blur-sm ${index % 2 === 0 ? 'mb-64' : 'mt-64'}`}
                        whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(124, 105, 239, 0.3)" }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Glowing effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#f4cc6f]/10 to-[#e6b85c]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative z-10">
                          <h3 className="text-lg font-bold mb-2 text-white">
                            {step.title}
                          </h3>

                          <p className="text-sm text-gray-400 leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {/* Arrow indicator */}
                        <div className={`absolute left-1/2 transform -translate-x-1/2 ${index % 2 === 0 ? 'bottom-0 translate-y-8' : 'top-0 -translate-y-8'}`}>
                          <div className="w-0.5 h-8 bg-gradient-to-b from-purple-500 to-transparent" />
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Mobile/Tablet Vertical Timeline */}
            <div className="lg:hidden space-y-8">
              {defaultWorkflowSteps.map((step: any, index: number) => {
                const IconComponent = typeof step.icon === 'string'
                  ? iconMap[step.icon] || Target
                  : step.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={workflowInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="relative flex items-start gap-4 group"
                  >
                    {/* Timeline line */}
                    {index < defaultWorkflowSteps.length - 1 && (
                      <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-purple-500/50 to-transparent" />
                    )}

                    {/* Node */}
                    <motion.div
                      className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#f4cc6f] to-[#e6b85c] flex items-center justify-center shadow-lg shadow-[#f4cc6f]/50"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Card */}
                    <motion.div
                      className="flex-1 p-5 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-purple-500/20 backdrop-blur-sm"
                      whileHover={{ x: 10, boxShadow: "0 10px 30px rgba(124, 105, 239, 0.3)" }}
                    >
                      <h3 className="text-lg font-bold mb-2 text-white">
                        {step.title}
                      </h3>

                      <p className="text-sm text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <section ref={outcomesRef} className="px-4 sm:px-6 md:px-8 lg:px-10 bg-[#010b22]/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={outcomesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20"
            >
              <motion.h2
                className={`${styles.sectionHeading} max-w-4xl mx-auto mb-6`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Why Choose <span className="text-[#f4cc6f]">Altiora Infotech?</span>
              </motion.h2>
              <motion.p
                className={`${styles.sectionDescription} max-w-5xl mx-auto leading-relaxed`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                Choosing the right digital marketing partner can define your growth trajectory. At Altiora Infotech, we focus on results, transparency, and long-term success.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {defaultOutcomes.map((outcome: any, index: number) => {
                const IconComponent = typeof outcome.icon === 'string'
                  ? iconMap[outcome.icon] || CheckCircle
                  : outcome.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={outcomesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-[#f4cc6f]/20 backdrop-blur-sm hover:border-[#f4cc6f]/40 transition-all duration-300"
                  >
                    {/* Step indicator */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-[#f4cc6f] to-[#e6b85c] flex items-center justify-center text-[#010c22] text-sm font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Title */}
                    <h3
                      className="text-xl font-bold mb-2 text-white"
                      dangerouslySetInnerHTML={{ __html: outcome.title }}
                    />

                    {/* Subtitle */}
                    <p className="text-sm font-medium text-purple-300 mb-3">
                      {outcome.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {outcome.description}
                    </p>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#f4cc6f]/10 to-[#e6b85c]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={ctaRef} className="py-32 sm:py-40 md:py-48 lg:py-56 px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden p-8 sm:p-12 md:p-16 text-center"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/about/services.jpg"
                  alt="Digital Marketing Background"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-blue-900/80 to-purple-900/90" />
              </div>

              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-5 md:mb-6">
                  Let's Build Your Digital Growth Engine
                </h2>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed">
                  If you're ready to scale your business with strategic, performance-driven digital marketing, Altiora Infotech is here to help. Let's turn your online presence into a powerful growth engine.
                  <br /><br />
                  📩 Contact us today to discuss your goals and discover how our <Link href="/services/digital-marketing-strategy" className="text-[#f4cc6f] hover:text-[#e6b85c] underline transition-colors">digital marketing services </Link> can help your business grow smarter and faster.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-purple-600 hover:bg-gray-100 text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Schedule a Consultation
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border-2 border-white text-white hover:bg-white/10 text-sm sm:text-base font-semibold transition-all duration-300"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


