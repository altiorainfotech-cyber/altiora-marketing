'use client';

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  CheckCircle,
  Palette,
  Search,
  Globe,
  Monitor,
  Share2,
  PenTool,
  Video,
  Target,
  Briefcase,
  Eye,
  Zap,
  Megaphone,
  BarChart3,
  Clock,
  DollarSign,
  Building2,
} from "lucide-react";

import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import styles from "../vancouver-marketing-company.module.css";

function AnimatedCounter({ target, prefix = "", suffix = "", inView, color }: { target: number; prefix?: string; suffix?: string; inView: boolean; color: string }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span className="text-4xl sm:text-5xl font-bold tracking-tight" style={{ color }}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function VancouverMarketingClientPage() {
  const [mounted, setMounted] = useState(false);
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [introRef, introInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [lookGreatRef, lookGreatInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [getSeenRef, getSeenInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [resultsRef, resultsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [growRef, growInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [competitionRef, competitionInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [finalCtaRef, finalCtaInView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    setMounted(true);
  }, []);

  const lookGreatItems = [
    "Graphic Design",
    "Logo & Branding",
    "Video Editing & Motion Graphics",
    "Photography & Visual Content",
    "Social Media Creatives",
    "Web Design & UI/UX",
  ];

  const getSeenItems = [
    "Digital Advertising (Google, Meta, TikTok)",
    "SEO (Search Engine Optimization)",
    "Viral Short Video Content",
    "Social Media Marketing",
    "Local Business Marketing",
  ];

  const services = [
    {
      icon: Megaphone,
      title: "Digital Advertising",
      description: "Platforms like Google, Facebook, Instagram, YouTube, and TikTok are dominating online advertising \u2014 and for good reason. These platforms offer advanced targeting options that allow your brand to reach the right audience at the right time.",
      subtitle: "Altiora Infotech creates high-performing ad campaigns designed to generate:",
      features: ["Brand Awareness", "Leads & Inquiries", "Sales & Revenue Growth"],
      color: "#f4cc6f",
    },
    {
      icon: Search,
      title: "SEO (Search Engine Optimization)",
      description: "Ranking on Google is competitive \u2014 but with the right strategy, it\u2019s achievable. Our SEO experts help businesses improve visibility and attract consistent traffic through proven search optimization methods.",
      subtitle: "Our SEO strategy focuses on:",
      features: ["Local SEO for Vancouver & Canada", "Keyword Research & Optimization", "Technical SEO Improvements", "Content Optimization", "Google Business Profile Growth"],
      color: "#EC4899",
    },
    {
      icon: Monitor,
      title: "Web Design & Development",
      description: "Your website is your first impression \u2014 and it should convert visitors into customers. Our developers build fast, modern, mobile-friendly websites designed for performance and growth.",
      subtitle: "We develop:",
      features: ["Business Websites", "Landing Pages", "WordPress Websites", "E-commerce Stores", "Custom Web Applications"],
      color: "#3B82F6",
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Staying top-of-mind is one of the most powerful marketing strategies. Social media helps build trust, loyalty, and long-term customer relationships.",
      subtitle: "Altiora Infotech offers complete social media services including:",
      features: ["Social Media Management", "Reels & Short Video Content", "Content Planning & Posting", "Engagement Growth Strategy", "Paid Social Media Ads"],
      color: "#10B981",
    },
    {
      icon: PenTool,
      title: "Branding & Graphic Design",
      description: "Branding is more than a logo \u2014 it\u2019s the identity your business represents. From your business card to your website design, your visuals must feel consistent, professional, and premium.",
      subtitle: "Our designers help you build a strong brand with:",
      features: ["Logo Design", "Brand Identity Guidelines", "Flyers, Posters & Brochures", "Social Media Design", "Presentations & Pitch Decks", "Marketing Materials"],
      color: "#8B5CF6",
    },
    {
      icon: Video,
      title: "Video Production & Editing",
      description: "Video is one of the most effective ways to communicate your message quickly. Attention spans are short, and strong video content helps your brand stand out instantly.",
      subtitle: "We create:",
      features: ["Promotional Videos", "Social Media Reels", "Product & Service Videos", "Corporate Videos", "YouTube Video Editing"],
      color: "#f4cc6f",
    },
    {
      icon: Target,
      title: "Lead Generation & Funnel Building",
      description: "Traffic is good, but leads are better. We create complete lead generation systems that convert visitors into real customers.",
      subtitle: "Our funnel systems include:",
      features: ["Landing Pages", "Lead Forms & Funnels", "WhatsApp & CRM Integration", "Conversion Optimization", "Automated Lead Systems"],
      color: "#EC4899",
    },
    {
      icon: Briefcase,
      title: "Business Growth Consulting",
      description: "Growing a business alone is stressful. Creating a digital strategy, tracking performance, and building a long-term growth plan requires time and expertise.",
      subtitle: "Our consulting services help you build a clear path with:",
      features: ["Business Growth Roadmaps", "Marketing Strategy Planning", "Competitor Research", "Branding & Positioning", "Performance Reporting"],
      color: "#3B82F6",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#010b22] text-[#F8FBFB]">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="py-8 px-4 pt-24 sm:py-12 sm:px-6 md:py-16 md:px-8 lg:py-20 lg:px-10 xl:py-24 relative overflow-hidden bg-[#010b22]"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {mounted && [...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#f4cc6f] rounded-full opacity-20 animate-pulse"
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
                  Your Digital Marketing & Development Partner in{' '}
                  <span className={styles.gradientText}>
                    Vancouver
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-lg sm:text-xl md:text-2xl text-[#f4cc6f] font-semibold mb-3 sm:mb-4"
                >
                  Simplify your to-do list.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-base sm:text-lg md:text-xl text-white/80 mb-2"
                >
                  Focus on doing what you love.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                >
                  Growing your business. Building your brand. Increasing your sales. Making an impact.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] hover:from-[#e6b85c] hover:to-[#f4cc6f] text-[#010c22] text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg shadow-[#f4cc6f]/25 hover:shadow-xl hover:shadow-[#f4cc6f]/40"
                  >
                    Talk to a Marketing Expert
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="order-1 lg:order-2 relative h-[280px] sm:h-[320px] md:h-[380px] lg:h-[500px] xl:h-[600px] flex items-center justify-center"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  {mounted && (
                    <>
                      <motion.div
                        className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full opacity-30 blur-3xl"
                        style={{ background: "radial-gradient(circle, #f4cc6f, #EC4899, #3B82F6, transparent)" }}
                        animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                      />

                      <motion.div
                        className="absolute w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full"
                        style={{
                          background: "conic-gradient(from 0deg, #f4cc6f, #EC4899, #8B5CF6, #3B82F6, #10B981, #f4cc6f)",
                          padding: "2px",
                          WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 2px))",
                          mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 2px))",
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />

                      <motion.div
                        className="absolute w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full"
                        style={{
                          background: "conic-gradient(from 180deg, #3B82F6, #8B5CF6, #EC4899, #f4cc6f, #10B981, #3B82F6)",
                          padding: "2px",
                          WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 2px))",
                          mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 2px))",
                        }}
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      />

                      <motion.div
                        className="absolute w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full"
                        style={{ background: "radial-gradient(circle, rgba(244,204,111,0.15), rgba(139,92,246,0.1), transparent)" }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      />

                      <div className="relative z-10 flex items-center justify-center">
                        <motion.div
                          className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-2xl flex items-center justify-center shadow-2xl"
                          style={{
                            background: "linear-gradient(135deg, #f4cc6f, #EC4899, #8B5CF6)",
                            boxShadow: "0 20px 60px rgba(244,204,111,0.3), 0 0 40px rgba(236,72,153,0.2), 0 0 60px rgba(139,92,246,0.15)",
                          }}
                          animate={{ y: [0, -12, 0] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <Globe className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-white" />
                        </motion.div>
                      </div>

                      {[0, 1, 2, 3, 4, 5].map((i) => (
                        <motion.div
                          key={`dot-${i}`}
                          className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
                          style={{
                            background: ['#f4cc6f', '#EC4899', '#3B82F6', '#10B981', '#8B5CF6', '#f4cc6f'][i],
                            boxShadow: `0 0 12px ${['#f4cc6f', '#EC4899', '#3B82F6', '#10B981', '#8B5CF6', '#f4cc6f'][i]}80`,
                            top: `${15 + Math.sin(i * 1.05) * 35}%`,
                            left: `${50 + Math.cos(i * 1.05) * 40}%`,
                          }}
                          animate={{
                            y: [0, -10 - i * 2, 0],
                            opacity: [0.6, 1, 0.6],
                          }}
                          transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                        />
                      ))}

                      {[
                        { Icon: Megaphone, color: "#EC4899", bg: "rgba(236,72,153,0.15)", top: "15%", left: "8%" },
                        { Icon: Search, color: "#3B82F6", bg: "rgba(59,130,246,0.15)", top: "20%", left: "80%" },
                        { Icon: Globe, color: "#10B981", bg: "rgba(16,185,129,0.15)", top: "65%", left: "5%" },
                        { Icon: BarChart3, color: "#8B5CF6", bg: "rgba(139,92,246,0.15)", top: "72%", left: "82%" },
                        { Icon: Zap, color: "#f4cc6f", bg: "rgba(244,204,111,0.15)", top: "42%", left: "88%" },
                      ].map((item, i) => (
                        <motion.div
                          key={`icon-${i}`}
                          className="absolute w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center backdrop-blur-sm"
                          style={{
                            top: item.top,
                            left: item.left,
                            background: item.bg,
                            border: `1px solid ${item.color}30`,
                            boxShadow: `0 4px 20px ${item.color}20`,
                          }}
                          animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                        >
                          <item.Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: item.color }} />
                        </motion.div>
                      ))}
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section
          ref={introRef}
          className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#010b22]"
        >
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={introInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="h-px w-full max-w-[80px] sm:max-w-[120px] bg-gradient-to-l from-[#f4cc6f]/50 to-transparent" />
                <span className={styles.overviewTitle}>
                  Overview
                </span>
                <div className="h-px w-full max-w-[80px] sm:max-w-[120px] bg-gradient-to-r from-[#f4cc6f]/50 to-transparent" />
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={introInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`${styles.sectionHeading} mb-6`}
              >
                Branding, Marketing & Development on your to-do list?{' '}
                <span className={styles.gradientText}>Done.</span>
              </motion.h2>

              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={introInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="max-w-5xl mx-auto p-8 sm:p-12 md:p-14 rounded-[40px] border border-white/5 bg-white/[0.02] backdrop-blur-xl shadow-[0_20px_50px_rgba(244,204,111,0.05)] relative overflow-hidden"
                >
                  <p className={`${styles.sectionDescription} !max-w-none relative z-10`}>
                    Business owners and community leaders in Vancouver often feel stuck wearing too many hats. Between managing customers, staff, operations, and growth &mdash; marketing and digital expansion can become overwhelming.
                    <br />
                    Imagine having a team dedicated to simplifying your workload, winning your time back, and helping your business grow faster with modern branding, marketing, and development.
                    <br />
                    At <span className="text-[#f4cc6f] font-semibold">Altiora</span>, we make that possible.
                  </p>
                  <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#f4cc6f]/10 blur-[80px] rounded-full pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#f4cc6f]/5 blur-[120px] rounded-full pointer-events-none z-0" />
        </section>

        {/* Time & Growth Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#061630]">
          {/* Rich background effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#061630] via-[#0a1a3a] to-[#061630]" />
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#f4cc6f]/8 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#8B5CF6]/8 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#EC4899]/4 blur-[150px] rounded-full pointer-events-none" />

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(244,204,111,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(244,204,111,0.3) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />

          {/* Floating particles */}
          {mounted && [...Array(10)].map((_, i) => (
            <motion.div
              key={`growth-particle-${i}`}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: ['#f4cc6f', '#EC4899', '#3B82F6', '#10B981', '#8B5CF6'][i % 5],
              }}
              animate={{
                y: [0, -20 - Math.random() * 20, 0],
                opacity: [0.15, 0.5, 0.15],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Section heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-14"
            >
              <h2 className={`${styles.sectionHeading} leading-tight max-w-4xl mx-auto`}>
                We dedicate the time needed to grow your business with{' '}
                <span className={styles.gradientText}>Branding & Digital Marketing</span>
              </h2>
            </motion.div>

            {/* Two-column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left - Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-white/75 text-base sm:text-lg leading-relaxed">
                  Leadership comes with responsibility, and it often feels like endless tasks steal away your time. Marketing is essential for growing your business, but spending your evenings working on advertising, web design, SEO, content writing, social media, or graphic design isn&apos;t enjoyable after a long workday.
                </p>
                <p className="text-xl sm:text-2xl text-[#f4cc6f] font-semibold">
                  Altiora Infotech is here to help.
                </p>

                {/* Pain points */}
                <div className="space-y-3 pt-2">
                  {[
                    { text: "No more late nights doing your own marketing", icon: Clock, color: "#f4cc6f" },
                    { text: "No more guessing what works and what doesn\u2019t", icon: Target, color: "#EC4899" },
                    { text: "No more wearing all the hats yourself", icon: Briefcase, color: "#3B82F6" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.12 }}
                      className="flex items-center gap-3 group"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                        style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                      >
                        <item.icon className="w-5 h-5" style={{ color: item.color }} />
                      </div>
                      <span className="text-white/80 text-base font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right - Win Your Time Back Card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="relative p-8 sm:p-10 rounded-3xl overflow-hidden">
                  {/* Card background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f4cc6f]/10 via-[#EC4899]/5 to-[#8B5CF6]/10 rounded-3xl" />
                  <div className="absolute inset-[1px] rounded-3xl bg-[#0a1a3a]/95 backdrop-blur-xl" />

                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: "conic-gradient(from 0deg, #f4cc6f, #EC4899, #8B5CF6, #3B82F6, #f4cc6f)",
                      padding: "3px",
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Glow behind card */}
                  <div className="absolute -inset-4 bg-[#f4cc6f]/5 blur-[40px] rounded-full pointer-events-none" />

                  <div className="relative z-10 text-center">
                    {/* Clock icon with animation */}
                    <motion.div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 relative"
                      style={{
                        background: "linear-gradient(135deg, rgba(244,204,111,0.2), rgba(236,72,153,0.15))",
                        border: "1px solid rgba(244,204,111,0.3)",
                        boxShadow: "0 10px 40px rgba(244,204,111,0.15)",
                      }}
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Clock className="w-10 h-10 text-[#f4cc6f]" />
                      <motion.div
                        className="absolute inset-0 rounded-2xl border border-[#f4cc6f]/30"
                        animate={{ scale: [1, 1.3, 1.3], opacity: [0.5, 0, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      />
                    </motion.div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                      Win Your Time <span className={styles.gradientText}>Back</span>
                    </h3>
                    <p className="text-white/65 text-base sm:text-lg max-w-sm mx-auto leading-relaxed mb-8">
                      Let our experts handle your branding, marketing, and digital presence while you focus on what matters most.
                    </p>

                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] hover:from-[#e6b85c] hover:to-[#f4cc6f] text-[#010c22] text-sm font-semibold transition-all duration-300 shadow-lg shadow-[#f4cc6f]/25 hover:shadow-xl hover:shadow-[#f4cc6f]/40"
                    >
                      Get Started Today
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section
          ref={statsRef}
          className="py-14 sm:py-18 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#010b22]"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#f4cc6f]/4 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { target: 300, prefix: "", suffix: "+", label: "Businesses have chosen Altiora Infotech as their digital growth partner.", icon: Building2, color: "#f4cc6f" },
                { target: 5, prefix: "$", suffix: "M+", label: "In reported revenue generated through marketing campaigns and digital solutions.", icon: DollarSign, color: "#EC4899" },
                { target: 50, prefix: "", suffix: "+", label: "Industries served across Canada, USA & global markets.", icon: Globe, color: "#3B82F6" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 80 }}
                  className="group"
                >
                  <div
                    className="relative p-6 rounded-2xl text-center transition-all duration-500 hover:translate-y-[-6px] h-full flex flex-col items-center justify-center border backdrop-blur-sm"
                    style={{ borderColor: `${item.color}20`, background: `linear-gradient(145deg, ${item.color}05, transparent)` }}
                  >
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ boxShadow: `0 0 30px ${item.color}10, inset 0 0 30px ${item.color}05`, border: `1px solid ${item.color}40` }}
                    />

                    <div className="relative z-10">
                      <item.icon className="w-7 h-7 mx-auto mb-3" style={{ color: item.color }} />

                      <div className="mb-2">
                        <AnimatedCounter
                          target={item.target}
                          prefix={item.prefix}
                          suffix={item.suffix}
                          inView={statsInView}
                          color={item.color}
                        />
                      </div>

                      <div
                        className="w-10 h-[2px] mx-auto mb-3 rounded-full"
                        style={{ background: `linear-gradient(90deg, transparent, ${item.color}50, transparent)` }}
                      />

                      <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                        {item.label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section
          ref={lookGreatRef}
          className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#061630]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#061630] via-[#0a1a3a] to-[#061630]" />
          <div className="absolute top-0 left-0 w-80 h-80 bg-[#f4cc6f]/6 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#10B981]/6 blur-[130px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Section title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={lookGreatInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className={styles.sectionHeading}>
                Our 3-Step <span className={styles.gradientText}>Growth Formula</span>
              </h2>
              <p className={styles.sectionDescription}>
                A proven approach to transform your brand and drive real business results.
              </p>
            </motion.div>

            {/* Step 01 — Look Great */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={lookGreatInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative mb-6 group"
            >
              <div className="relative rounded-3xl overflow-hidden border border-[#f4cc6f]/15 hover:border-[#f4cc6f]/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(244,204,111,0.08)]">
                {/* Multi-layer gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#f4cc6f]/[0.08] via-[#FF9F43]/[0.04] to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f4cc6f]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                {/* Animated left stripe */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-3xl"
                  style={{ background: "linear-gradient(to bottom, #f4cc6f, #FF9F43, #f4cc6f)", backgroundSize: "100% 200%" }}
                  animate={{ backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Corner glow */}
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#f4cc6f]/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-[#f4cc6f]/15 transition-all duration-500" />

                <div className="relative flex flex-col md:flex-row items-stretch">
                  {/* Left — Giant number + icon */}
                  <div className="flex-shrink-0 flex flex-col items-center justify-center p-8 md:p-10 md:w-48 lg:w-56 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f4cc6f]/[0.06] to-transparent" />
                    <div className="relative z-10 flex flex-col items-center">
                      <motion.span
                        className="text-[5rem] md:text-[6rem] font-black leading-none select-none"
                        style={{ background: "linear-gradient(180deg, rgba(244,204,111,0.3), rgba(255,159,67,0.15), rgba(244,204,111,0.05))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        01
                      </motion.span>
                      <motion.div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center -mt-4 relative z-10"
                        style={{ background: "linear-gradient(135deg, #f4cc6f, #FF9F43, #e6b85c)", boxShadow: "0 8px 30px rgba(244,204,111,0.35), 0 0 20px rgba(255,159,67,0.2)" }}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <Palette className="w-7 h-7 text-[#010b22]" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Right — Content */}
                  <div className="flex-1 p-6 sm:p-8 md:p-10">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      Look <span style={{ background: "linear-gradient(135deg, #f4cc6f, #FF9F43, #f4cc6f)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Great</span>
                    </h3>
                    <p className="text-white/55 text-sm sm:text-base leading-relaxed mb-6">
                      When your brand looks great, people pay attention. Our creative team helps your business stand out with:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                      {lookGreatItems.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -15 }}
                          animate={lookGreatInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
                          className="flex items-center gap-2.5 group/item"
                        >
                          <motion.div
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ background: "linear-gradient(135deg, #f4cc6f, #FF9F43)", boxShadow: "0 0 8px rgba(255,159,67,0.4)" }}
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="text-white/70 text-sm group-hover/item:text-white/90 transition-colors duration-300">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated connector line */}
              <div className="hidden md:flex justify-center py-2">
                <motion.div
                  className="w-[2px] h-10 rounded-full"
                  style={{ background: "linear-gradient(to bottom, #f4cc6f, #3B82F6)" }}
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={lookGreatInView ? { scaleY: 1, opacity: 0.5 } : { scaleY: 0, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                />
              </div>
            </motion.div>

            {/* Step 02 — Get Seen */}
            <motion.div
              ref={getSeenRef}
              initial={{ opacity: 0, x: 60 }}
              animate={lookGreatInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative mb-6 group"
            >
              <div className="relative rounded-3xl overflow-hidden border border-[#3B82F6]/15 hover:border-[#3B82F6]/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(59,130,246,0.08)]">
                <div className="absolute inset-0 bg-gradient-to-l from-[#3B82F6]/[0.08] via-[#06B6D4]/[0.04] to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3B82F6]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <motion.div
                  className="absolute right-0 top-0 bottom-0 w-1.5 rounded-r-3xl"
                  style={{ background: "linear-gradient(to bottom, #3B82F6, #06B6D4, #3B82F6)", backgroundSize: "100% 200%" }}
                  animate={{ backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#3B82F6]/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-[#3B82F6]/15 transition-all duration-500" />

                <div className="relative flex flex-col md:flex-row-reverse items-stretch">
                  {/* Right — Giant number + icon */}
                  <div className="flex-shrink-0 flex flex-col items-center justify-center p-8 md:p-10 md:w-48 lg:w-56 relative">
                    <div className="absolute inset-0 bg-gradient-to-bl from-[#3B82F6]/[0.06] to-transparent" />
                    <div className="relative z-10 flex flex-col items-center">
                      <motion.span
                        className="text-[5rem] md:text-[6rem] font-black leading-none select-none"
                        style={{ background: "linear-gradient(180deg, rgba(59,130,246,0.3), rgba(6,182,212,0.15), rgba(59,130,246,0.05))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      >
                        02
                      </motion.span>
                      <motion.div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center -mt-4 relative z-10"
                        style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4, #2563EB)", boxShadow: "0 8px 30px rgba(59,130,246,0.35), 0 0 20px rgba(6,182,212,0.2)" }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <Eye className="w-7 h-7 text-white" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Left — Content */}
                  <div className="flex-1 p-6 sm:p-8 md:p-10">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      Get <span style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4, #3B82F6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Seen</span>
                    </h3>
                    <p className="text-white/55 text-sm sm:text-base leading-relaxed mb-6">
                      With confidence, invest in brand awareness and lead generation. Our experts help you get visibility using:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                      {getSeenItems.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -15 }}
                          animate={lookGreatInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: 0.5 + i * 0.06 }}
                          className="flex items-center gap-2.5 group/item"
                        >
                          <motion.div
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4)", boxShadow: "0 0 8px rgba(6,182,212,0.4)" }}
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="text-white/70 text-sm group-hover/item:text-white/90 transition-colors duration-300">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated connector line */}
              <div className="hidden md:flex justify-center py-2">
                <motion.div
                  className="w-[2px] h-10 rounded-full"
                  style={{ background: "linear-gradient(to bottom, #3B82F6, #8B5CF6)" }}
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={lookGreatInView ? { scaleY: 1, opacity: 0.5 } : { scaleY: 0, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                />
              </div>
            </motion.div>

            {/* Step 03 — Results — Purple/Violet theme */}
            <motion.div
              ref={resultsRef}
              initial={{ opacity: 0, y: 50 }}
              animate={lookGreatInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="relative group"
            >
              <div className="relative rounded-3xl overflow-hidden border border-[#8B5CF6]/15 hover:border-[#8B5CF6]/40 transition-all duration-500 hover:shadow-[0_0_60px_rgba(139,92,246,0.1)]">
                {/* Rich gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/[0.08] via-[#7C3AED]/[0.04] to-[#EC4899]/[0.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8B5CF6]/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                {/* Animated left stripe */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-3xl"
                  style={{ background: "linear-gradient(to bottom, #8B5CF6, #EC4899, #8B5CF6)", backgroundSize: "100% 200%" }}
                  animate={{ backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Corner glows */}
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#8B5CF6]/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-[#8B5CF6]/15 transition-all duration-500" />
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#EC4899]/8 blur-[60px] rounded-full pointer-events-none group-hover:bg-[#EC4899]/12 transition-all duration-500" />

                <div className="relative flex flex-col md:flex-row items-stretch">
                  {/* Left — Giant number + icon */}
                  <div className="flex-shrink-0 flex flex-col items-center justify-center p-8 md:p-10 md:w-48 lg:w-56 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/[0.06] to-transparent" />
                    <div className="relative z-10 flex flex-col items-center">
                      <motion.span
                        className="text-[5rem] md:text-[6rem] font-black leading-none select-none"
                        style={{ background: "linear-gradient(180deg, rgba(139,92,246,0.3), rgba(236,72,153,0.08))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                      >
                        03
                      </motion.span>
                      <motion.div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center -mt-4 relative z-10"
                        style={{ background: "linear-gradient(135deg, #8B5CF6, #7C3AED)", boxShadow: "0 8px 30px rgba(139,92,246,0.35), 0 0 15px rgba(139,92,246,0.15)" }}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <BarChart3 className="w-7 h-7 text-white" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Right — Content + CTA */}
                  <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      <span className="text-[#8B5CF6]">Results</span>
                    </h3>
                    <p className="text-white/55 text-sm sm:text-base leading-relaxed mb-6">
                      Awareness, leads, bookings, and sales. When your business looks great and people see it, results follow naturally.
                    </p>

                    <Link
                      href="/contact"
                      className="group/btn inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#8B5CF6] text-white text-sm font-semibold transition-all duration-300 shadow-lg shadow-[#8B5CF6]/25 hover:shadow-xl hover:shadow-[#8B5CF6]/40 w-fit"
                    >
                      Yes! I want results
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Grow 10x Faster */}
        <section
          ref={growRef}
          className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#010b22]"
        >
          {/* Rich background effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#f4cc6f]/6 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#8B5CF6]/6 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#EC4899]/3 blur-[180px] rounded-full pointer-events-none" />

          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(244,204,111,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(244,204,111,0.4) 1px, transparent 1px)`,
              backgroundSize: '80px 80px',
            }}
          />

          {/* Floating particles */}
          {mounted && [...Array(8)].map((_, i) => (
            <motion.div
              key={`grow-particle-${i}`}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                background: ['#f4cc6f', '#EC4899', '#3B82F6', '#8B5CF6', '#06B6D4'][i % 5],
              }}
              animate={{
                y: [0, -25 - Math.random() * 15, 0],
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Header area */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={growInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-14"
            >
              {/* Large 10x badge */}
              <motion.div
                className="inline-flex items-center justify-center mb-6"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={growInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 120 }}
              >
                <div className="relative">
                  <motion.span
                    className="text-[4rem] sm:text-[5rem] md:text-[6rem] font-black select-none"
                    style={{ background: "linear-gradient(135deg, #f4cc6f, #FF9F43, #EC4899, #8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    10x
                  </motion.span>
                  <motion.div
                    className="absolute -inset-4 rounded-full opacity-20 blur-xl pointer-events-none"
                    style={{ background: "radial-gradient(circle, #f4cc6f, transparent)" }}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>

              <h2 className={`${styles.sectionHeading} mb-4`}>
                Grow <span style={{ background: "linear-gradient(135deg, #f4cc6f, #FF9F43, #f4cc6f)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>10x Faster</span>
              </h2>
              <p className="text-lg sm:text-xl font-semibold mb-5" style={{ background: "linear-gradient(135deg, #f4cc6f, #FF9F43)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Your Vancouver marketing & development partner
              </p>
              <p className={`${styles.sectionDescription} !max-w-4xl`}>
                Skip the trial-and-error of figuring everything out on your own and grow 10x faster with a professional team. Altiora Infotech helps businesses in Vancouver, Canada, and North America scale with high-performing digital marketing, premium branding, and modern web development.
              </p>
              <motion.p
                className="text-white/90 text-lg font-semibold mt-5"
                initial={{ opacity: 0 }}
                animate={growInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                We don&apos;t just deliver services &mdash; we deliver measurable results.
              </motion.p>
            </motion.div>

            {/* Content card with two-column layout */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={growInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-5xl mx-auto relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-[#f4cc6f]/15 hover:border-[#f4cc6f]/30 transition-all duration-500 group">
                {/* Multi-layer gradient bg */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f4cc6f]/[0.06] via-[#8B5CF6]/[0.03] to-[#EC4899]/[0.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f4cc6f]/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Animated left stripe */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-3xl"
                  style={{ background: "linear-gradient(to bottom, #f4cc6f, #EC4899, #8B5CF6, #f4cc6f)", backgroundSize: "100% 300%" }}
                  animate={{ backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Corner glows */}
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#f4cc6f]/8 blur-[60px] rounded-full pointer-events-none" />
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#8B5CF6]/8 blur-[60px] rounded-full pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Left — Question side */}
                  <div className="p-8 sm:p-10 md:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={growInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                        style={{ background: "linear-gradient(135deg, rgba(244,204,111,0.15), rgba(236,72,153,0.1))", border: "1px solid rgba(244,204,111,0.2)" }}
                      >
                        <Zap className="w-6 h-6 text-[#f4cc6f]" />
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                        How we help you <span style={{ background: "linear-gradient(135deg, #f4cc6f, #FF9F43)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>grow</span>
                      </h3>
                      <p className="text-lg sm:text-xl text-white/80 font-medium mb-4">
                        Ever felt stuck with a big to-do list?
                      </p>
                      <p className="text-white/60 text-base leading-relaxed">
                        Have you ever felt stuck looking at a list of projects that you know will help grow your business &mdash; but you simply don&apos;t have the time to dedicate to them?
                      </p>
                    </motion.div>
                  </div>

                  {/* Right — Answer side */}
                  <div className="p-8 sm:p-10 md:p-12 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={growInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="space-y-5"
                    >
                      <p className="text-lg font-semibold" style={{ background: "linear-gradient(135deg, #f4cc6f, #FF9F43)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                        Altiora Infotech is here to help.
                      </p>
                      <p className="text-white/65 text-base leading-relaxed">
                        Our team dedicates the time and strategy needed to grow your branding and marketing, so you can focus on running your business and making the decisions that matter most.
                      </p>
                      <p className="text-white/55 text-base leading-relaxed">
                        With a complete in-house team of experts, we provide full digital solutions that drive growth through any or all of the services below.
                      </p>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={growInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="pt-2"
                      >
                        <Link
                          href="/contact"
                          className="group/btn inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#f4cc6f] to-[#FF9F43] hover:from-[#FF9F43] hover:to-[#f4cc6f] text-[#010c22] text-sm font-semibold transition-all duration-300 shadow-lg shadow-[#f4cc6f]/25 hover:shadow-xl hover:shadow-[#f4cc6f]/40"
                        >
                          Start Growing Today
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section ref={servicesRef} className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#061630]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#061630] via-[#0a1a3a] to-[#061630]" />
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#f4cc6f]/5 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#8B5CF6]/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className={styles.sectionHeading}>
                Our <span style={{ background: "linear-gradient(135deg, #f4cc6f, #FF9F43)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Services</span>
              </h2>
              <p className={styles.sectionDescription}>
                Complete digital solutions to help your Vancouver business grow faster.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className="group relative"
                >
                  <div className="relative h-full rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,0,0,0.2)]"
                    style={{ borderColor: `${service.color}15`, }}
                  >
                    {/* Gradient background */}
                    <div className="absolute inset-0" style={{ background: `linear-gradient(160deg, ${service.color}08, transparent 60%)` }} />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(160deg, ${service.color}12, transparent 60%)` }} />

                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
                    />

                    <div className="relative z-10 p-5">
                      {/* Icon + title row */}
                      <div className="flex items-center gap-3 mb-3">
                        <motion.div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${service.color}12`, border: `1px solid ${service.color}20` }}
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <service.icon className="w-5 h-5" style={{ color: service.color }} />
                        </motion.div>
                        <h3 className="text-sm font-bold text-white leading-tight">{service.title}</h3>
                      </div>

                      {/* Description - compact */}
                      <p className="text-xs text-white/50 leading-relaxed mb-3 line-clamp-3">{service.description}</p>

                      {/* Features as tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {service.features.slice(0, 3).map((feature, fIndex) => (
                          <span
                            key={fIndex}
                            className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium transition-all duration-300"
                            style={{ background: `${service.color}10`, color: `${service.color}CC`, border: `1px solid ${service.color}15` }}
                          >
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 3 && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium text-white/40 bg-white/5">
                            +{service.features.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* CTA */}
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-300 group-hover:gap-2.5"
                        style={{ color: service.color }}
                      >
                        Learn More
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Let's Beat Your Competition */}
        <section
          ref={competitionRef}
          className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#061630]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#061630] via-[#0a1a3a] to-[#061630]" />
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#f4cc6f]/8 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#8B5CF6]/8 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={competitionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className={styles.sectionHeading}>
                Let&apos;s beat your competition <span className={styles.gradientText}>together</span>
              </h2>
              <p className={`${styles.sectionDescription} !max-w-3xl`}>
                Your clients are smart &mdash; they see through clich&eacute; slogans, fake discounts, and buzzwords used by competitors.
              </p>
              <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
                Stand out with premium branding, modern marketing, and proven strategies that deliver real results.
              </p>

              <div className="pt-6 space-y-2">
                <p className="text-xl sm:text-2xl font-bold text-white">
                  Don&apos;t let your business get overshadowed.
                </p>
                <p className="text-lg text-[#f4cc6f] font-semibold">
                  Let&apos;s grow your business together with Altiora Infotech.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section ref={finalCtaRef} className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden p-8 sm:p-12 md:p-16 text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-blue-900/80 to-purple-900/90" />
              <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#f4cc6f]/20 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-[#EC4899]/15 blur-[80px] rounded-full" />
              </div>

              <div className="relative z-10">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
                >
                  Would it be helpful to simplify your{' '}
                  <span className={styles.gradientText}>to-do list?</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                  Let Altiora Infotech manage your marketing, branding, and development &mdash; while you focus on running and scaling your business.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={finalCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] hover:from-[#e6b85c] hover:to-[#f4cc6f] text-[#010c22] font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-[#f4cc6f]/25 hover:shadow-xl hover:shadow-[#f4cc6f]/40"
                  >
                    Let&apos;s talk about growing my business
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
