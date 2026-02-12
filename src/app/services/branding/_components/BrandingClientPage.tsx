'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Palette,
  Target,
  Lightbulb,
  RefreshCw,
  Send,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Eye,
  Heart,
  Zap,
  Globe,
  TrendingUp,
  Users,
  BookOpen,
  Compass,
  Shield,
  Sparkles,
  Megaphone,
  FileText,
} from "lucide-react";

import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import styles from "../branding.module.css";

export default function BrandingClientPage() {
  const [mounted, setMounted] = useState(false);
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [overviewRef, overviewInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [whyRef, whyInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [workflowRef, workflowInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [diffRef, diffInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [whoRef, whoInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      icon: Palette,
      title: "Brand Identity Development",
      description: "We craft logos, color palettes, typography systems, and visual guidelines that reflect your essence.",
      features: [
        "Custom logo creation",
        "Color palette design",
        "Typography systems",
        "Visual guidelines",
        "Brand mark variations",
      ],
      color: "#f4cc6f",
    },
    {
      icon: Target,
      title: "Brand Strategy & Positioning",
      description: "We define your voice, values, mission, messaging, and how you uniquely fit into your market.",
      features: [
        "Brand voice definition",
        "Core values articulation",
        "Mission & vision crafting",
        "Market positioning",
        "Competitive differentiation",
      ],
      color: "#EC4899",
    },
    {
      icon: Megaphone,
      title: "Brand Messaging & Tone of Voice",
      description: "From taglines to core messaging frameworks, we help your brand speak clearly and consistently.",
      features: [
        "Tagline development",
        "Core messaging framework",
        "Tone of voice guide",
        "Elevator pitch creation",
        "Content voice standards",
      ],
      color: "#3B82F6",
    },
    {
      icon: FileText,
      title: "Brand Guidelines & Playbooks",
      description: "A comprehensive reference document that ensures everyone communicates your brand the same way, every time.",
      features: [
        "Complete brand playbook",
        "Usage rules & standards",
        "Digital & print specs",
        "Template systems",
        "Internal brand training",
      ],
      color: "#10B981",
    },
    {
      icon: RefreshCw,
      title: "Brand Refresh & Repositioning",
      description: "For growing companies looking to realign their image with evolving goals and markets.",
      features: [
        "Brand audit & analysis",
        "Visual identity refresh",
        "Market repositioning",
        "Brand migration strategy",
        "Stakeholder alignment",
      ],
      color: "#8B5CF6",
    },
  ];

  const workflowSteps = [
    {
      icon: Compass,
      title: "Discovery & Exploration",
      description: "We begin with research, stakeholder interviews, and market analysis to understand what makes your business unique.",
    },
    {
      icon: Lightbulb,
      title: "Strategic Direction",
      description: "We define brand positioning, voice, audience insights, and messaging frameworks that guide every creative decision.",
    },
    {
      icon: Sparkles,
      title: "Creative Execution",
      description: "Our design team translates strategy into visual identity — logos, visuals, and designs that represent your distinct value.",
    },
    {
      icon: Send,
      title: "Implementation & Support",
      description: "From digital platforms to print materials, we ensure your brand is applied consistently and effectively.",
    },
  ];

  const differentiators = [
    {
      icon: TrendingUp,
      title: "Business-Driven Brand Strategy",
      description: "We don't create brands that just look nice — we build brands that perform and drive measurable business outcomes.",
    },
    {
      icon: Users,
      title: "Audience-First Thinking",
      description: "Your brand is built around the expectations and needs of your customers, not trends.",
    },
    {
      icon: Globe,
      title: "Consistency Across Every Touchpoint",
      description: "From website to social media to internal culture — your brand feels unified and professional everywhere.",
    },
    {
      icon: Zap,
      title: "Built for Growth",
      description: "Whether you're launching locally in Canada or scaling across the USA, your brand scales with you.",
    },
  ];

  const whoIsItFor = [
    { text: "Startups building identity from scratch", icon: Sparkles },
    { text: "Businesses needing repositioning or revitalization", icon: RefreshCw },
    { text: "Companies expanding into new markets", icon: Globe },
    { text: "Enterprises seeking stronger brand cohesion", icon: Shield },
    { text: "Digital-first brands wanting strategic differentiation", icon: Target },
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
                  Branding That Shapes Perception, Builds Trust &{' '}
                  <span className={styles.gradientText}>
                    Drives Growth
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                >
                  Your brand is more than a logo — it&apos;s the story people tell about you. Our Branding Services help businesses in Canada and the USA create strategic brand identities that connect emotionally, stand out clearly, and influence customer decisions.
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
                    Start Your Branding Project
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border-2 border-[#f4cc6f]/50 hover:border-[#f4cc6f] text-[#f4cc6f] hover:text-white text-sm sm:text-base font-semibold transition-all duration-300 hover:bg-[#f4cc6f]/10"
                  >
                    Get a Free Brand Strategy Call
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
                      {/* Outer colorful glow orbs */}
                      <motion.div
                        className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full opacity-30 blur-3xl"
                        style={{ background: "radial-gradient(circle, #f4cc6f, #EC4899, #3B82F6, transparent)" }}
                        animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                      />

                      {/* Rotating gradient ring - outer */}
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

                      {/* Rotating gradient ring - middle */}
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

                      {/* Inner gradient glow */}
                      <motion.div
                        className="absolute w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full"
                        style={{ background: "radial-gradient(circle, rgba(244,204,111,0.15), rgba(139,92,246,0.1), transparent)" }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      />

                      {/* Center icon */}
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
                          <BookOpen className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-white" />
                        </motion.div>
                      </div>

                      {/* Floating colorful dots */}
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

                      {/* Floating small icons */}
                      {[
                        { Icon: Palette, color: "#EC4899", bg: "rgba(236,72,153,0.15)", top: "15%", left: "8%" },
                        { Icon: Target, color: "#3B82F6", bg: "rgba(59,130,246,0.15)", top: "20%", left: "80%" },
                        { Icon: Eye, color: "#10B981", bg: "rgba(16,185,129,0.15)", top: "65%", left: "5%" },
                        { Icon: Heart, color: "#8B5CF6", bg: "rgba(139,92,246,0.15)", top: "72%", left: "82%" },
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

        {/* Overview - Why Branding Matters */}
        <section
          ref={overviewRef}
          className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#010b22]"
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
                <span className={styles.overviewTitle}>
                  Why It Matters
                </span>
                <div className="h-px w-full max-w-[80px] sm:max-w-[120px] bg-gradient-to-r from-[#f4cc6f]/50 to-transparent" />
              </div>

              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={overviewInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="max-w-5xl mx-auto p-8 sm:p-12 md:p-14 rounded-[40px] border border-white/5 bg-white/[0.02] backdrop-blur-xl shadow-[0_20px_50px_rgba(244,204,111,0.05)] relative overflow-hidden"
                >
                  <p className={`${styles.sectionDescription} !max-w-none relative z-10`}>
                    <span>In today&apos;s crowded market, the companies that win are the ones customers remember. Branding is the foundation of that memory.</span> Effective branding defines who you are and what you stand for, builds trust and credibility with your audience, differentiates you from competitors, improves customer loyalty and recall, and supports every marketing and sales effort.
                    <br />
                    At Altiora Infotech, we build brands with purpose — brands that feel familiar, trusted, and unmistakably yours.
                  </p>
                  <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#f4cc6f]/10 blur-[80px] rounded-full pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#f4cc6f]/5 blur-[120px] rounded-full pointer-events-none z-0" />
        </section>

        {/* Why Branding Matters - Visual Points */}
        <section
          ref={whyRef}
          className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#061630]"
        >
          <div className="absolute top-0 left-1/4 w-60 h-60 bg-[#f4cc6f]/5 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-purple-500/5 blur-[80px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-5">
              {[
                { icon: MessageSquare, label: "Defines Your Identity", color: "#f4cc6f", desc: "Who you are & stand for" },
                { icon: Shield, label: "Builds Trust", color: "#10B981", desc: "Credibility & confidence" },
                { icon: Eye, label: "Stands Out", color: "#3B82F6", desc: "Competitive differentiation" },
                { icon: Heart, label: "Customer Loyalty", color: "#EC4899", desc: "Lasting connections" },
                { icon: TrendingUp, label: "Supports Sales", color: "#8B5CF6", desc: "Marketing backbone" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={whyInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.12, type: "spring", stiffness: 120 }}
                  className="group relative text-center p-5 sm:p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-opacity-40 transition-all duration-500 hover:bg-white/[0.05]"
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at center, ${item.color}10, transparent 70%)` }}
                  />

                  {/* Number badge */}
                  <div
                    className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold opacity-40 group-hover:opacity-80 transition-opacity duration-300"
                    style={{ background: `${item.color}15`, color: item.color }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 relative"
                    style={{ background: `${item.color}12`, border: `1px solid ${item.color}20` }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: item.color }} />
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-ping"
                      style={{ background: `${item.color}08`, animationDuration: '2s' }}
                    />
                  </motion.div>

                  {/* Label */}
                  <p className="text-sm sm:text-base font-bold text-white mb-1 relative z-10">{item.label}</p>
                  <p className="text-xs text-white/40 relative z-10">{item.desc}</p>

                  {/* Bottom accent line */}
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-3/4 rounded-full transition-all duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section ref={servicesRef} className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {mounted && [...Array(15)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: ['#f4cc6f', '#EC4899', '#3B82F6', '#10B981', '#8B5CF6'][i % 5],
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <motion.h2
                className={styles.sectionHeading}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                What We <span className="text-[#f4cc6f]">Do</span>
              </motion.h2>
              <motion.p
                className={styles.sectionDescription}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Comprehensive branding services designed to tell your story, visually and strategically.
              </motion.p>
            </motion.div>

            {/* Top row - 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {services.slice(0, 3).map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, delay: index * 0.12, type: "spring", stiffness: 80 }}
                  className={`${styles.serviceCardEnhanced} group relative flex flex-col h-full`}
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <motion.div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                      style={{ background: `${service.color}15`, border: `1px solid ${service.color}25` }}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <service.icon className="w-7 h-7" style={{ color: service.color }} />
                    </motion.div>

                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-sm text-white/60 mb-5 leading-relaxed">{service.description}</p>

                    <div className="mt-auto space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-2.5">
                          <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: service.color }} />
                          <span className="text-sm text-white/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom row - 2 cards centered */}
            <div className="flex flex-col md:flex-row justify-center gap-5 sm:gap-6 mt-5 sm:mt-6">
              {services.slice(3, 5).map((service, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, y: 40 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, delay: (index + 3) * 0.12, type: "spring", stiffness: 80 }}
                  className={`${styles.serviceCardEnhanced} group relative flex flex-col h-full w-full md:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.5rem)]`}
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <motion.div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                      style={{ background: `${service.color}15`, border: `1px solid ${service.color}25` }}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <service.icon className="w-7 h-7" style={{ color: service.color }} />
                    </motion.div>

                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-sm text-white/60 mb-5 leading-relaxed">{service.description}</p>

                    <div className="mt-auto space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-2.5">
                          <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: service.color }} />
                          <span className="text-sm text-white/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow / Process Section */}
        <section ref={workflowRef} className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#010b22] via-[#0a0f2e] to-[#010b22] opacity-50" />
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#f4cc6f]/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-[#EC4899]/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={workflowInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <motion.h2
                className={styles.sectionHeading}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Our Branding <span className="text-[#f4cc6f]">Process</span>
              </motion.h2>
              <motion.p
                className={styles.sectionDescription}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                A collaborative, detail-driven process from strategy to final delivery.
              </motion.p>
            </motion.div>

            {/* Desktop - Alternating zigzag layout */}
            <div className="hidden md:block relative">
              {/* Central vertical line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
                <motion.div
                  className="w-full h-full origin-top"
                  style={{ background: "linear-gradient(to bottom, transparent, #f4cc6f40, #EC489940, #3B82F640, transparent)" }}
                  initial={{ scaleY: 0 }}
                  animate={workflowInView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>

              <div className="space-y-12 lg:space-y-16">
                {workflowSteps.map((step, index) => {
                  const isLeft = index % 2 === 0;
                  const colors = ["#f4cc6f", "#EC4899", "#3B82F6", "#10B981"];
                  const color = colors[index % colors.length];

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                      animate={workflowInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -60 : 60 }}
                      transition={{ duration: 0.7, delay: index * 0.2, type: "spring", stiffness: 80 }}
                      className={`relative flex items-center gap-6 lg:gap-10 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                    >
                      {/* Card side */}
                      <div className={`w-[calc(50%-2rem)] ${isLeft ? 'text-right' : 'text-left'}`}>
                        <motion.div
                          className="group relative p-6 lg:p-8 rounded-2xl bg-white/[0.03] border border-white/8 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:bg-white/[0.06]"
                          whileHover={{ y: -5, scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          style={{ borderColor: `${color}15` }}
                        >
                          <div
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{ background: `linear-gradient(${isLeft ? '135deg' : '225deg'}, ${color}08, transparent 60%)` }}
                          />

                          <div
                            className={`absolute ${isLeft ? '-right-2' : '-left-2'} -top-4 text-[7rem] font-black leading-none opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 select-none pointer-events-none`}
                            style={{ color }}
                          >
                            {String(index + 1).padStart(2, '0')}
                          </div>

                          <div className="relative z-10">
                            <div
                              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase mb-4"
                              style={{ background: `${color}12`, color, border: `1px solid ${color}20` }}
                            >
                              Step {String(index + 1).padStart(2, '0')}
                            </div>

                            <h3 className="text-lg lg:text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
                          </div>

                          <div
                            className={`absolute bottom-0 ${isLeft ? 'right-0' : 'left-0'} h-[2px] w-0 group-hover:w-full rounded-full transition-all duration-700`}
                            style={{ background: `linear-gradient(${isLeft ? 'to left' : 'to right'}, ${color}, transparent)` }}
                          />
                        </motion.div>
                      </div>

                      {/* Center node */}
                      <div className="relative z-20 flex-shrink-0">
                        <motion.div
                          className="w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center relative"
                          style={{
                            background: `linear-gradient(135deg, ${color}, ${color}CC)`,
                            boxShadow: `0 0 30px ${color}40, 0 0 60px ${color}15`,
                          }}
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.4, type: "spring" }}
                        >
                          <step.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{ border: `2px solid ${color}` }}
                            animate={{ scale: [1, 1.5, 1.5], opacity: [0.6, 0, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
                          />
                        </motion.div>
                      </div>

                      {/* Empty side */}
                      <div className="w-[calc(50%-2rem)]" />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Mobile - Vertical timeline */}
            <div className="md:hidden relative">
              <div className="absolute left-[1.875rem] top-0 bottom-0 w-px bg-gradient-to-b from-[#f4cc6f]/30 via-[#EC4899]/20 to-transparent" />

              <div className="space-y-8">
                {workflowSteps.map((step, index) => {
                  const colors = ["#f4cc6f", "#EC4899", "#3B82F6", "#10B981"];
                  const color = colors[index % colors.length];

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={workflowInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      className="relative flex items-start gap-5 group"
                    >
                      <motion.div
                        className="relative z-10 flex-shrink-0 w-[3.75rem] h-[3.75rem] rounded-full flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${color}, ${color}CC)`,
                          boxShadow: `0 0 20px ${color}30`,
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <step.icon className="w-7 h-7 text-white" />
                      </motion.div>

                      <motion.div
                        className="flex-1 p-5 rounded-2xl bg-white/[0.03] border backdrop-blur-sm"
                        style={{ borderColor: `${color}15` }}
                        whileHover={{ x: 5 }}
                      >
                        <div
                          className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-3"
                          style={{ background: `${color}12`, color, border: `1px solid ${color}20` }}
                        >
                          Step {String(index + 1).padStart(2, '0')}
                        </div>
                        <h3 className="text-base font-bold mb-2 text-white">{step.title}</h3>
                        <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* What Sets Our Branding Apart */}
        <section ref={diffRef} className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#010b22]">
          <div className="absolute top-20 right-0 w-96 h-96 bg-[#f4cc6f]/4 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-10 left-0 w-72 h-72 bg-[#3B82F6]/4 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={diffInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <motion.h2
                className={`${styles.sectionHeading} max-w-4xl mx-auto`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                What Sets Our Branding <span className="text-[#f4cc6f]">Apart</span>
              </motion.h2>
            </motion.div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {(() => {
                const colors = ["#f4cc6f", "#EC4899", "#3B82F6", "#10B981"];
                return differentiators.map((item, index) => {
                  const color = colors[index % colors.length];

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      animate={diffInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                      transition={{ duration: 0.6, delay: index * 0.12, type: "spring", stiffness: 90 }}
                      className="group relative rounded-3xl overflow-hidden"
                    >
                      <div
                        className="relative p-7 sm:p-8 lg:p-10 h-full border backdrop-blur-sm bg-white/[0.02] hover:bg-white/[0.05] rounded-3xl transition-all duration-500"
                        style={{ borderColor: `${color}12` }}
                      >
                        <div
                          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                          style={{ background: `radial-gradient(ellipse at ${index % 2 === 0 ? 'top left' : 'top right'}, ${color}0A, transparent 60%)` }}
                        />

                        <div
                          className="absolute -right-4 -top-6 text-[8rem] sm:text-[10rem] font-black leading-none opacity-[0.025] group-hover:opacity-[0.06] transition-opacity duration-700 select-none pointer-events-none"
                          style={{ color }}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                          <div className="flex items-start justify-between mb-6">
                            <motion.div
                              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center relative"
                              style={{ background: `${color}10`, border: `1px solid ${color}18` }}
                              whileHover={{ scale: 1.1, rotate: -5 }}
                              transition={{ duration: 0.3 }}
                            >
                              <item.icon className="w-7 h-7 sm:w-8 sm:h-8" style={{ color }} />
                              <div
                                className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                                style={{ background: `${color}20` }}
                              />
                            </motion.div>

                            <div
                              className="px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase"
                              style={{ background: `${color}10`, color, border: `1px solid ${color}18` }}
                            >
                              0{index + 1}
                            </div>
                          </div>

                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                            {item.title}
                          </h3>

                          <p className="text-sm sm:text-base text-white/45 leading-relaxed flex-grow">
                            {item.description}
                          </p>

                          <div className="mt-6 pt-5 border-t border-white/5">
                            <div className="flex items-center gap-2">
                              <div
                                className="w-8 h-[2px] rounded-full group-hover:w-16 transition-all duration-500"
                                style={{ background: color }}
                              />
                              <span
                                className="text-xs font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ color }}
                              >
                                Our Approach
                              </span>
                            </div>
                          </div>
                        </div>

                        <div
                          className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                          style={{
                            background: `radial-gradient(circle at top right, ${color}10, transparent 70%)`,
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                });
              })()}
            </div>
          </div>
        </section>

        {/* Who This Service Is For */}
        <section
          ref={whoRef}
          className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#061630]"
        >
          {/* Rich background layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#061630] via-[#0a1a3a] to-[#061630]" />
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#f4cc6f]/8 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#8B5CF6]/8 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EC4899]/4 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute top-10 left-10 w-40 h-40 bg-[#3B82F6]/6 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#10B981]/5 blur-[90px] rounded-full pointer-events-none" />

          {/* Subtle grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(244,204,111,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(244,204,111,0.3) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />

          {/* Floating particles */}
          {mounted && [...Array(12)].map((_, i) => (
            <motion.div
              key={`who-particle-${i}`}
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
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none opacity-20">
            <div className="absolute top-6 left-6 w-16 h-px bg-gradient-to-r from-[#f4cc6f]/60 to-transparent" />
            <div className="absolute top-6 left-6 w-px h-16 bg-gradient-to-b from-[#f4cc6f]/60 to-transparent" />
          </div>
          <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none opacity-20">
            <div className="absolute bottom-6 right-6 w-16 h-px bg-gradient-to-l from-[#8B5CF6]/60 to-transparent" />
            <div className="absolute bottom-6 right-6 w-px h-16 bg-gradient-to-t from-[#8B5CF6]/60 to-transparent" />
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={whoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14 sm:mb-16"
            >
              <motion.h2
                className={styles.sectionHeading}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Who This Service Is <span className="text-[#f4cc6f]">For</span>
              </motion.h2>
            </motion.div>

            {/* Hexagon honeycomb layout */}
            <div className="relative flex flex-col items-center">
              {/* Connecting lines SVG - desktop only */}
              <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
                <svg className="w-full h-full" viewBox="0 0 800 400" fill="none" preserveAspectRatio="xMidYMid meet">
                  {/* Subtle connecting lines between hexagons */}
                  <line x1="200" y1="120" x2="400" y2="120" stroke="url(#lineGrad)" strokeWidth="1" opacity="0.2" />
                  <line x1="400" y1="120" x2="600" y2="120" stroke="url(#lineGrad)" strokeWidth="1" opacity="0.2" />
                  <line x1="300" y1="280" x2="500" y2="280" stroke="url(#lineGrad)" strokeWidth="1" opacity="0.2" />
                  <line x1="200" y1="120" x2="300" y2="280" stroke="url(#lineGrad)" strokeWidth="1" opacity="0.15" />
                  <line x1="400" y1="120" x2="300" y2="280" stroke="url(#lineGrad)" strokeWidth="1" opacity="0.15" />
                  <line x1="400" y1="120" x2="500" y2="280" stroke="url(#lineGrad)" strokeWidth="1" opacity="0.15" />
                  <line x1="600" y1="120" x2="500" y2="280" stroke="url(#lineGrad)" strokeWidth="1" opacity="0.15" />
                  <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f4cc6f" stopOpacity="0.4" />
                      <stop offset="50%" stopColor="#EC4899" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Top row - 3 hexagons */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0 relative z-10">
                {whoIsItFor.slice(0, 3).map((item, index) => {
                  const colors = ["#f4cc6f", "#EC4899", "#3B82F6"];
                  const color = colors[index];

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0, rotate: -30 }}
                      animate={whoInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -30 }}
                      transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
                      className="group relative"
                    >
                      {/* Hexagon shape */}
                      <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-72 lg:h-72">
                        {/* Outer glow ring */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                            background: `radial-gradient(circle, ${color}20, transparent 70%)`,
                          }}
                        />

                        {/* Hexagon border */}
                        <div
                          className="absolute inset-[3px] transition-all duration-500"
                          style={{
                            clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                            background: `linear-gradient(135deg, ${color}30, ${color}10)`,
                          }}
                        />

                        {/* Hexagon inner */}
                        <div
                          className="absolute inset-[5px] flex flex-col items-center justify-center text-center p-5 transition-all duration-500 group-hover:bg-white/[0.06]"
                          style={{
                            clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                            background: "linear-gradient(145deg, rgba(6,22,48,0.95), rgba(1,11,34,0.95))",
                          }}
                        >
                          {/* Icon */}
                          <motion.div
                            className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-3"
                            style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                            whileHover={{ scale: 1.15, rotate: 10 }}
                            transition={{ duration: 0.3 }}
                          >
                            <item.icon className="w-7 h-7 sm:w-8 sm:h-8" style={{ color }} />
                          </motion.div>

                          {/* Text */}
                          <p className="text-sm sm:text-base font-semibold text-white/80 group-hover:text-white transition-colors duration-300 leading-tight px-3">
                            {item.text}
                          </p>
                        </div>

                        {/* Pulse effect on hover */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100"
                          style={{
                            clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                            border: `2px solid ${color}`,
                          }}
                          animate={whoInView ? { scale: [1, 1.08, 1], opacity: [0, 0.3, 0] } : {}}
                          transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.5 }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom row - 2 hexagons (offset for honeycomb) */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0 mt-2 md:-mt-10 relative z-10">
                {whoIsItFor.slice(3, 5).map((item, index) => {
                  const colors = ["#10B981", "#8B5CF6"];
                  const color = colors[index];

                  return (
                    <motion.div
                      key={index + 3}
                      initial={{ opacity: 0, scale: 0, rotate: 30 }}
                      animate={whoInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: 30 }}
                      transition={{ duration: 0.6, delay: (index + 3) * 0.15, type: "spring", stiffness: 100 }}
                      className="group relative"
                    >
                      <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-72 lg:h-72">
                        {/* Outer glow ring */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                            background: `radial-gradient(circle, ${color}20, transparent 70%)`,
                          }}
                        />

                        {/* Hexagon border */}
                        <div
                          className="absolute inset-[3px] transition-all duration-500"
                          style={{
                            clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                            background: `linear-gradient(135deg, ${color}30, ${color}10)`,
                          }}
                        />

                        {/* Hexagon inner */}
                        <div
                          className="absolute inset-[5px] flex flex-col items-center justify-center text-center p-5 transition-all duration-500 group-hover:bg-white/[0.06]"
                          style={{
                            clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                            background: "linear-gradient(145deg, rgba(6,22,48,0.95), rgba(1,11,34,0.95))",
                          }}
                        >
                          <motion.div
                            className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-3"
                            style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                            whileHover={{ scale: 1.15, rotate: 10 }}
                            transition={{ duration: 0.3 }}
                          >
                            <item.icon className="w-7 h-7 sm:w-8 sm:h-8" style={{ color }} />
                          </motion.div>

                          <p className="text-sm sm:text-base font-semibold text-white/80 group-hover:text-white transition-colors duration-300 leading-tight px-3">
                            {item.text}
                          </p>
                        </div>

                        {/* Pulse effect on hover */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100"
                          style={{
                            clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                            border: `2px solid ${color}`,
                          }}
                          animate={whoInView ? { scale: [1, 1.08, 1], opacity: [0, 0.3, 0] } : {}}
                          transition={{ duration: 2.5, repeat: Infinity, delay: (index + 3) * 0.5 }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={ctaRef} className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
                  animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
                >
                  Let&apos;s Build a Brand That{' '}
                  <span className={styles.gradientText}>Resonates</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                  Great brands aren&apos;t accidental — they&apos;re intentional. Ready to clarify who you are, amplify what you do, and create memorable experiences your customers connect with?
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] hover:from-[#e6b85c] hover:to-[#f4cc6f] text-[#010c22] font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-[#f4cc6f]/25 hover:shadow-xl hover:shadow-[#f4cc6f]/40"
                  >
                    Start Your Branding Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 hover:border-white/60 text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white/10"
                  >
                    Get a Free Brand Strategy Call
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
