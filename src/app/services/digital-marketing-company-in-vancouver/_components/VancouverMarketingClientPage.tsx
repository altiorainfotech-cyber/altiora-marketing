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
import styles from "../digital-marketing-company-in-vancouver.module.css";

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
  const [whyChooseRef, whyChooseInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [competitionRef, competitionInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [faqRef, faqInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [finalCtaRef, finalCtaInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      icon: Megaphone,
      title: "Digital Advertising",
      description: "Campaigns across Google and social platforms designed for leads and revenue \u2014 not impressions.",
      color: "#f4cc6f",
    },
    {
      icon: Search,
      title: "SEO (Search Engine Optimization)",
      description: "Search visibility strategies targeting local Vancouver keywords and service searches.",
      color: "#EC4899",
    },
    {
      icon: Monitor,
      title: "Web Design & Development",
      description: "Fast, mobile\u2011friendly websites built to convert visitors into enquiries.",
      color: "#3B82F6",
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Consistent brand presence supporting trust and remarketing.",
      color: "#10B981",
    },
    {
      icon: PenTool,
      title: "Branding & Graphic Design",
      description: "Clear visual identity improving credibility and recognition.",
      color: "#8B5CF6",
    },
    {
      icon: Video,
      title: "Video & Content Production",
      description: "Short\u2011form and promotional content supporting awareness and conversions.",
      color: "#f4cc6f",
    },
    {
      icon: Target,
      title: "Lead Generation Funnels",
      description: "Landing pages and automation systems capturing prospects efficiently.",
      color: "#EC4899",
    },
    {
      icon: Briefcase,
      title: "Business Growth Consulting",
      description: "Planning and optimisation based on real performance data.",
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
                  Digital Marketing Company in{' '}
                  <span className={styles.gradientText}>
                    Vancouver
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-base sm:text-lg md:text-xl text-white/80 mb-3 sm:mb-4"
                >
                  Your Digital Marketing & Growth Partner in Vancouver
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

              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={introInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="max-w-5xl mx-auto p-8 sm:p-12 md:p-14 rounded-[40px] border border-white/5 bg-white/[0.02] backdrop-blur-xl shadow-[0_20px_50px_rgba(244,204,111,0.05)] relative overflow-hidden"
                >
                  <p className={`${styles.sectionDescription} !max-w-none relative z-10`}>
                    Running a business in British Columbia often means managing operations, staff, and customer relationships at the same time. Marketing becomes inconsistent &mdash; and inconsistent marketing limits growth.
                    <br />
                    We simplify the process by acting as your dedicated marketing team. Instead of guessing platforms, content, or budgets, you get a clear strategy designed for businesses in Vancouver and surrounding areas.
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
                Branding & Marketing{' '}
                <span className={styles.gradientText}>Support</span>
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
                  Business owners rarely struggle because they lack ideas &mdash; they struggle because they lack time and structured execution.
                </p>
                <p className="text-white/75 text-base sm:text-lg leading-relaxed">
                  We help by:
                </p>

                {/* Points */}
                <div className="space-y-3 pt-2">
                  {[
                    { text: "Removing trial\u2011and\u2011error marketing decisions", icon: Target, color: "#f4cc6f" },
                    { text: "Building predictable lead systems", icon: Clock, color: "#EC4899" },
                    { text: "Creating long\u2011term brand visibility", icon: Briefcase, color: "#3B82F6" },
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

                <p className="text-white/75 text-base sm:text-lg leading-relaxed pt-2">
                  Our goal is simple: allow you to focus on operations while we handle acquisition and growth.
                </p>
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

        {/* Market Reality in Vancouver */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#010b22]">
          {/* Rich background effects */}
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#f4cc6f]/6 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#3B82F6]/6 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#EC4899]/3 blur-[150px] rounded-full pointer-events-none" />

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(244,204,111,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(244,204,111,0.3) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />

          {/* Floating particles */}
          {mounted && [...Array(8)].map((_, i) => (
            <motion.div
              key={`market-particle-${i}`}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                background: ['#f4cc6f', '#EC4899', '#3B82F6', '#10B981', '#8B5CF6'][i % 5],
              }}
              animate={{
                y: [0, -20 - Math.random() * 15, 0],
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-14"
            >
              <h2 className={`${styles.sectionHeading} leading-tight max-w-4xl mx-auto`}>
                Market Reality in{' '}
                <span className={styles.gradientText}>Vancouver</span>
              </h2>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed mt-4 max-w-2xl mx-auto">
                The local Vancouver market behaves differently from many cities:
              </p>
            </motion.div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                { text: "High competition in legal, real estate and immigration niches", icon: Target, color: "#f4cc6f" },
                { text: "Multicultural audience responding better to tailored messaging", icon: Globe, color: "#EC4899" },
                { text: "Strong reliance on Google reviews before contacting businesses", icon: Search, color: "#3B82F6" },
                { text: "Mobile\u2011first searches for nearby services", icon: Monitor, color: "#10B981" },
                { text: "Google Search converts better than most social platforms for service providers", icon: BarChart3, color: "#8B5CF6" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                  className={`group relative ${index === 3 ? 'sm:col-span-1 lg:col-start-1 lg:col-end-2' : ''} ${index === 4 ? 'sm:col-span-2 lg:col-start-2 lg:col-end-4' : ''}`}
                >
                  <div
                    className="relative h-full rounded-2xl overflow-hidden border transition-all duration-500 hover:translate-y-[-6px] p-6"
                    style={{ borderColor: `${item.color}15`, background: `linear-gradient(145deg, ${item.color}06, transparent)` }}
                  >
                    {/* Top accent line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
                    />

                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ boxShadow: `0 0 40px ${item.color}10, inset 0 0 40px ${item.color}05`, border: `1px solid ${item.color}30` }}
                    />

                    {/* Corner glow on hover */}
                    <div
                      className="absolute -top-10 -right-10 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[40px] pointer-events-none"
                      style={{ background: item.color }}
                    />

                    <div className="relative z-10">
                      <motion.div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                        style={{
                          background: `${item.color}15`,
                          border: `1px solid ${item.color}25`,
                          boxShadow: `0 4px 20px ${item.color}10`,
                        }}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <item.icon className="w-6 h-6" style={{ color: item.color }} />
                      </motion.div>
                      <p className="text-white/80 text-sm sm:text-base font-medium leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Closing text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-white/70 text-base sm:text-lg leading-relaxed text-center mt-12 max-w-2xl mx-auto"
            >
              Understanding these patterns is essential to effective Vancouver marketing services.
            </motion.p>
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
                Growth <span className={styles.gradientText}>Formula</span>
              </h2>
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
                  <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      Position Your <span style={{ background: "linear-gradient(135deg, #f4cc6f, #FF9F43, #f4cc6f)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Brand</span>
                    </h3>
                    <p className="text-white/55 text-sm sm:text-base leading-relaxed">
                      We improve visual identity and website experience so customers trust your business instantly.
                    </p>
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
                  <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      Get <span style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4, #3B82F6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Seen</span>
                    </h3>
                    <p className="text-white/55 text-sm sm:text-base leading-relaxed">
                      We drive high&#8209;intent traffic using SEO and paid advertising targeting local searches.
                    </p>
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

                  {/* Right — Content */}
                  <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      Generate <span className="text-[#8B5CF6]">Results</span>
                    </h3>
                    <p className="text-white/55 text-sm sm:text-base leading-relaxed">
                      Traffic converts into enquiries through structured landing pages and funnels.
                    </p>
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
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={growInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className={`${styles.sectionHeading} mb-4`}>
                Grow Faster With a{' '}
                <span className={styles.gradientText}>Structured Strategy</span>
              </h2>
              <p className={`${styles.sectionDescription} !max-w-3xl`}>
                Most businesses attempt random marketing activities. Sustainable growth comes from coordinated acquisition systems.
              </p>
            </motion.div>

            {/* Central visual with orbiting items */}
            <div className="relative max-w-5xl mx-auto">
              {/* Large glowing center piece */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={growInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative mx-auto w-full"
              >
                {/* Main card - full width with inner content */}
                <div className="relative rounded-[2rem] overflow-hidden border border-white/[0.08]"
                  style={{ background: "linear-gradient(135deg, rgba(244,204,111,0.04), rgba(236,72,153,0.02), rgba(59,130,246,0.04))" }}
                >
                  {/* Animated top border sweep */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
                    <motion.div
                      className="h-full w-1/3"
                      style={{ background: "linear-gradient(90deg, transparent, #f4cc6f, #EC4899, transparent)" }}
                      animate={{ x: ["-100%", "400%"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>

                  <div className="relative z-10 p-8 sm:p-12 md:p-16">
                    {/* "Our approach" label */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={growInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-center mb-10"
                    >
                      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-[#f4cc6f]/20 text-[#f4cc6f]/80"
                        style={{ background: "rgba(244,204,111,0.06)" }}
                      >
                        Our Approach
                      </span>
                    </motion.div>

                    {/* Three pillars with connecting line */}
                    <div className="relative">
                      {/* Horizontal connecting line (desktop) */}
                      <div className="hidden md:block absolute top-[3.5rem] left-[16%] right-[16%] h-[1px]">
                        <motion.div
                          className="h-full w-full"
                          style={{ background: "linear-gradient(90deg, #f4cc6f40, #EC489940, #3B82F640)" }}
                          initial={{ scaleX: 0 }}
                          animate={growInView ? { scaleX: 1 } : {}}
                          transition={{ duration: 1.2, delay: 0.8 }}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
                        {[
                          {
                            text: "Intent\u2011driven search traffic",
                            icon: Search,
                            color: "#f4cc6f",
                            number: "01",
                            description: "Target users actively searching for your services",
                          },
                          {
                            text: "Conversion\u2011optimised pages",
                            icon: Monitor,
                            color: "#EC4899",
                            number: "02",
                            description: "Turn visitors into leads with structured pages",
                          },
                          {
                            text: "Continuous optimisation",
                            icon: BarChart3,
                            color: "#3B82F6",
                            number: "03",
                            description: "Data\u2011driven improvements every month",
                          },
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={growInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                            className="text-center group"
                          >
                            {/* Circle icon */}
                            <div className="relative inline-flex mb-5">
                              <motion.div
                                className="w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center relative z-10"
                                style={{
                                  background: `linear-gradient(135deg, ${item.color}25, ${item.color}08)`,
                                  border: `2px solid ${item.color}35`,
                                  boxShadow: `0 0 30px ${item.color}15, 0 0 60px ${item.color}08`,
                                }}
                                whileHover={{ scale: 1.15 }}
                                transition={{ type: "spring", stiffness: 200 }}
                              >
                                <item.icon className="w-7 h-7" style={{ color: item.color }} />
                              </motion.div>
                              {/* Pulse ring */}
                              <motion.div
                                className="absolute inset-0 rounded-full"
                                style={{ border: `1px solid ${item.color}` }}
                                animate={{ scale: [1, 1.5, 1.5], opacity: [0.4, 0, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                              />
                              {/* Number badge */}
                              <div
                                className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold z-20"
                                style={{ background: item.color, color: "#010b22" }}
                              >
                                {item.number}
                              </div>
                            </div>

                            {/* Title */}
                            <h4 className="text-white font-bold text-lg mb-2">{item.text}</h4>
                            <p className="text-white/50 text-sm leading-relaxed max-w-[200px] mx-auto">{item.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom section - ecosystem message + CTA */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={growInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.7, delay: 1.2 }}
                      className="mt-14 pt-10 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-6"
                    >
                      <div className="flex items-center gap-4">
                        <motion.div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{
                            background: "linear-gradient(135deg, rgba(244,204,111,0.15), rgba(236,72,153,0.1), rgba(59,130,246,0.15))",
                            border: "1px solid rgba(244,204,111,0.2)",
                          }}
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                          <Zap className="w-6 h-6 text-[#f4cc6f]" />
                        </motion.div>
                        <div>
                          <p className="text-white font-semibold text-base sm:text-lg">Connected marketing ecosystem</p>
                          <p className="text-white/50 text-sm">Instead of isolated services, everything works together.</p>
                        </div>
                      </div>

                      <Link
                        href="/contact"
                        className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] hover:from-[#e6b85c] hover:to-[#f4cc6f] text-[#010c22] text-sm font-semibold transition-all duration-300 shadow-lg shadow-[#f4cc6f]/25 hover:shadow-xl hover:shadow-[#f4cc6f]/40 whitespace-nowrap flex-shrink-0"
                      >
                        Start Growing
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section ref={servicesRef} className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#061630]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#061630] via-[#0a1a3a] to-[#061630]" />
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#f4cc6f]/5 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#8B5CF6]/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className={styles.sectionHeading}>
                Services We{' '}
                <span className={styles.gradientText}>Provide</span>
              </h2>
            </motion.div>

            {/* Two-column list layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={servicesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                  className="group"
                >
                  <div
                    className="relative flex items-start gap-4 rounded-xl p-5 transition-all duration-500 hover:translate-x-2 border border-transparent hover:border-white/[0.06]"
                    style={{ background: "transparent" }}
                  >
                    {/* Left color bar */}
                    <div
                      className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:shadow-[0_0_8px_var(--bar-color)]"
                      style={{ background: service.color, '--bar-color': service.color } as React.CSSProperties}
                    />

                    {/* Icon */}
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ml-3 transition-all duration-300 group-hover:scale-110"
                      style={{ background: `${service.color}12`, border: `1px solid ${service.color}20` }}
                    >
                      <service.icon className="w-5 h-5" style={{ color: service.color }} />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-white mb-1 group-hover:text-white/95 transition-colors">{service.title}</h3>
                      <p className="text-xs sm:text-sm text-white/50 leading-relaxed group-hover:text-white/65 transition-colors">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Altiora Infotech */}
        <section
          ref={whyChooseRef}
          className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#010b22]"
        >
          <div className="max-w-6xl mx-auto relative z-10">
            {/* Section heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h2 className={`${styles.sectionHeading} leading-tight max-w-4xl mx-auto`}>
                Why Choose{' '}
                <span className={styles.gradientText}>Altiora Infotech?</span>
              </h2>
              <p className={`${styles.sectionDescription} !max-w-3xl mt-4`}>
                As a trusted <strong className="text-white">Digital Marketing Company in Vancouver</strong>, we deliver measurable results through data&#8209;driven strategies tailored for local businesses.
              </p>
            </motion.div>

            {/* Card grid — same layout as SEO page */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                { title: "Deep Market", subtitle: "Knowledge", text: "We combine local Vancouver insights with hands\u2011on execution \u2014 so you never have to manage multiple freelancers or agencies.", icon: Target, gradient: "from-[#f4cc6f] to-[#FF9F43]" },
                { title: "All Services", subtitle: "Under One Roof", text: "Our dedicated team handles SEO, paid advertising, branding, and web development \u2014 one team, one strategy, one point of contact.", icon: Briefcase, gradient: "from-[#3B82F6] to-[#06B6D4]" },
                { title: "Goal\u2011Driven", subtitle: "Campaigns", text: "Every campaign is built around your specific business goals, target audience, and competitive landscape in the Vancouver market.", icon: BarChart3, gradient: "from-[#8B5CF6] to-[#EC4899]" },
                { title: "Transparent", subtitle: "Reporting", text: "With consistent communication, you always know where your marketing budget is going and what returns it generates.", icon: Eye, gradient: "from-[#10B981] to-[#06B6D4]" },
                { title: "Long\u2011Term", subtitle: "Growth Focus", text: "We focus on sustainable growth, not short\u2011term gimmicks \u2014 making us the reliable partner Vancouver businesses choose to grow with.", icon: Zap, gradient: "from-[#EC4899] to-[#f4cc6f]" },
                { title: "Local", subtitle: "Expertise", text: "We understand the multicultural audience, competitive niches, and search behaviour unique to the Vancouver and BC market.", icon: Globe, gradient: "from-[#f4cc6f] to-[#10B981]" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group relative cursor-pointer"
                >
                  <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-4 md:p-6 transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-2xl hover:-translate-y-2">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 md:gap-4 mb-4">
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                          <item.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#f4cc6f] transition-colors duration-300">{item.title}</h3>
                          <span className="text-sm text-white/60">{item.subtitle}</span>
                        </div>
                      </div>
                      <p className="text-white/80 text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors duration-300">{item.text}</p>
                      <div className="mt-3 md:mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden hidden md:block">
                        <div className={`h-full w-0 bg-gradient-to-r ${item.gradient} transition-all duration-700 group-hover:w-full rounded-full`} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Commonly Support */}
        <section
          ref={competitionRef}
          className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#061630]"
        >
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
              key={`industry-particle-${i}`}
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={competitionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-14"
            >
              <h2 className={styles.sectionHeading}>
                Industries We Commonly{' '}
                <span className={styles.gradientText}>Support</span>
              </h2>
            </motion.div>

            {/* Industries grid */}
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              {[
                { text: "Immigration consultants", icon: Globe, color: "#f4cc6f" },
                { text: "Real estate agents & mortgage brokers", icon: Building2, color: "#EC4899" },
                { text: "Medical & dental clinics", icon: Briefcase, color: "#3B82F6" },
                { text: "Construction & renovation companies", icon: PenTool, color: "#10B981" },
                { text: "Education consultants", icon: Target, color: "#8B5CF6" },
                { text: "Restaurants & retail businesses", icon: Megaphone, color: "#f4cc6f" },
                { text: "Professional services", icon: BarChart3, color: "#EC4899" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  animate={competitionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                  className="group w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)]"
                >
                  <div
                    className="relative h-full rounded-2xl overflow-hidden border transition-all duration-500 hover:translate-y-[-6px] p-5 text-center"
                    style={{ borderColor: `${item.color}15`, background: `linear-gradient(160deg, ${item.color}06, transparent 60%)` }}
                  >
                    {/* Top accent */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
                    />
                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ boxShadow: `0 0 35px ${item.color}10, inset 0 0 35px ${item.color}05`, border: `1px solid ${item.color}30` }}
                    />

                    <div className="relative z-10">
                      <motion.div
                        className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3"
                        style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <item.icon className="w-5 h-5" style={{ color: item.color }} />
                      </motion.div>
                      <p className="text-white/80 text-xs sm:text-sm font-medium leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Closing text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={competitionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-white/60 text-base sm:text-lg leading-relaxed text-center mt-12 max-w-2xl mx-auto"
            >
              Each industry requires different conversion journeys and search intent targeting.
            </motion.p>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          ref={faqRef}
          className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#010b22]"
        >
          <div className="max-w-3xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className={styles.sectionHeading}>
                <span className={styles.gradientText}>FAQ</span>
              </h2>
            </motion.div>

            <div className="space-y-4">
              {[
                { question: "How long does SEO take in Vancouver?", answer: "Usually 3\u20136 months depending on competition." },
                { question: "Do you need a local office to rank?", answer: "No. Authority and relevance matter more than physical presence." },
                { question: "What businesses benefit most?", answer: "Service businesses with measurable enquiries and appointment\u2011based sales." },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={faqInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-5 sm:p-6 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-base sm:text-lg font-bold text-white">{faq.question}</h3>
                      <svg
                        className={`w-5 h-5 text-[#f4cc6f] flex-shrink-0 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      <p className="text-white/70 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
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
