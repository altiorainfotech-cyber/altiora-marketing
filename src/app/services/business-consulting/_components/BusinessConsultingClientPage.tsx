'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Target,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Eye,
  Heart,
  Zap,
  Globe,
  TrendingUp,
  Users,
  Compass,
  BarChart3,
  Handshake,
  Rocket,
  Search,
  Map,
  Shield,
  RefreshCw,
  BriefcaseBusiness,
  LineChart,
} from "lucide-react";

import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import styles from "../bc.module.css";

export default function BusinessConsultingClientPage() {
  const [mounted, setMounted] = useState(false);
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [overviewRef, overviewInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [workflowRef, workflowInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [gainsRef, gainsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [whoRef, whoInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [diffRef, diffInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    setMounted(true);
  }, []);

  const workflowSteps = [
    {
      icon: Compass,
      title: "Understand Your Goals and Challenges",
      description: "We start by listening — learning where you are, where you want to go, and what's standing in the way.",
    },
    {
      icon: Search,
      title: "Diagnose Opportunities",
      description: "Through data, insights, and industry expertise, we identify strengths to leverage and gaps to address.",
    },
    {
      icon: Map,
      title: "Create a Customized Roadmap",
      description: "We break down your goals into an actionable plan with clear priorities, timelines, and measurable milestones.",
    },
    {
      icon: Rocket,
      title: "Support Execution & Scale",
      description: "We stay aligned with you through implementation, course corrections, and performance evaluation — helping you move from planning to growth.",
    },
  ];

  const gains = [
    { text: "Clarity on strategic direction", icon: Compass, color: "#f4cc6f" },
    { text: "Prioritized action plans with measurable goals", icon: Target, color: "#EC4899" },
    { text: "Improved operational focus", icon: Eye, color: "#3B82F6" },
    { text: "Better alignment between marketing and business objectives", icon: TrendingUp, color: "#10B981" },
    { text: "Increased confidence in decisions and investments", icon: Shield, color: "#8B5CF6" },
  ];

  const whoIsItFor = [
    { text: "A founder shaping your next growth phase", icon: Rocket },
    { text: "A leadership team refining market positioning", icon: Target },
    { text: "A scaling business needing systems and strategy", icon: LineChart },
    { text: "A company seeking stronger alignment between vision and execution", icon: Globe },
  ];

  const differentiators = [
    {
      icon: Target,
      title: "Plans Ready to Implement",
      description: "You don't just get recommendations — you get plans that are ready to implement and built for action.",
    },
    {
      icon: BarChart3,
      title: "Insights Built on Real Data",
      description: "We build insights around real data, not guesswork — so every decision has a solid foundation.",
    },
    {
      icon: Handshake,
      title: "We Partner With You",
      description: "We don't just consult you — we partner with you through strategy, execution, and growth.",
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
                  Expert Guidance to Clarify Strategy, Accelerate Growth &{' '}
                  <span className={styles.gradientText}>
                    Unlock Potential
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                >
                  Business consultation isn&apos;t just advice — it&apos;s a strategic partnership that helps you cut through uncertainty, sharpen your decisions, and execute with confidence.
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
                    Book a Free Strategy Session
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border-2 border-[#f4cc6f]/50 hover:border-[#f4cc6f] text-[#f4cc6f] hover:text-white text-sm sm:text-base font-semibold transition-all duration-300 hover:bg-[#f4cc6f]/10"
                  >
                    Request a Consultation Plan
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
                          <BriefcaseBusiness className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-white" />
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
                        { Icon: Lightbulb, color: "#EC4899", bg: "rgba(236,72,153,0.15)", top: "15%", left: "8%" },
                        { Icon: BarChart3, color: "#3B82F6", bg: "rgba(59,130,246,0.15)", top: "20%", left: "80%" },
                        { Icon: Users, color: "#10B981", bg: "rgba(16,185,129,0.15)", top: "65%", left: "5%" },
                        { Icon: Target, color: "#8B5CF6", bg: "rgba(139,92,246,0.15)", top: "72%", left: "82%" },
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

        {/* Overview */}
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
                    <span>Growing a business today isn&apos;t simple.</span> You&apos;re juggling market shifts, digital transformation, customer expectations, and competition — all while trying to scale profitably. Business consultation isn&apos;t just advice. It&apos;s a strategic partnership that helps you cut through uncertainty, sharpen your decisions, and execute with confidence.
                    <br />
                    At Altiora Infotech, we help leaders and teams navigate complex challenges, define clear growth paths, and build strategies that deliver real results.
                  </p>
                  <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#f4cc6f]/10 blur-[80px] rounded-full pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#f4cc6f]/5 blur-[120px] rounded-full pointer-events-none z-0" />
        </section>

        {/* What You Gain - Visual Points */}
        <section
          ref={gainsRef}
          className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#061630]"
        >
          <div className="absolute top-0 left-1/4 w-60 h-60 bg-[#f4cc6f]/5 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-purple-500/5 blur-[80px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={gainsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
                What You <span className="text-[#f4cc6f]">Gain</span>
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-5">
              {gains.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={gainsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.12, type: "spring", stiffness: 120 }}
                  className="group relative text-center p-5 sm:p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-opacity-40 transition-all duration-500 hover:bg-white/[0.05]"
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at center, ${item.color}10, transparent 70%)` }}
                  />

                  <div
                    className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold opacity-40 group-hover:opacity-80 transition-opacity duration-300"
                    style={{ background: `${item.color}15`, color: item.color }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>

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

                  <p className="text-xs sm:text-sm font-bold text-white mb-1 relative z-10 leading-tight">{item.text}</p>

                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-3/4 rounded-full transition-all duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How Our Business Consulting Works - Process */}
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
                How Our Consulting <span className="text-[#f4cc6f]">Works</span>
              </motion.h2>
              <motion.p
                className={styles.sectionDescription}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                We don&apos;t believe in one-size-fits-all solutions. Your business is unique — your strategy should be too.
              </motion.p>
            </motion.div>

            {/* Desktop zigzag */}
            <div className="hidden md:block relative">
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

                      <div className="w-[calc(50%-2rem)]" />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Mobile vertical */}
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

        {/* Who This Is For - Modern Cards */}
        <section
          ref={whoRef}
          className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-gradient-to-b from-[#010b22] via-[#0a1535] to-[#010b22]"
        >
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#f4cc6f]/10 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#EC4899]/8 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#3B82F6]/5 blur-[180px] rounded-full pointer-events-none" />

          {mounted && [...Array(15)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: `${3 + Math.random() * 4}px`,
                height: `${3 + Math.random() * 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: ['#f4cc6f', '#EC4899', '#3B82F6', '#10B981'][i % 4],
                boxShadow: `0 0 20px ${['#f4cc6f', '#EC4899', '#3B82F6', '#10B981'][i % 4]}`,
              }}
              animate={{
                y: [0, -30 - Math.random() * 20, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={whoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
                Who This Is <span className="text-[#f4cc6f]">For</span>
              </motion.h2>
              <motion.p
                className={`${styles.sectionDescription} mt-4`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Whether you&apos;re scaling, refining, or transforming — our consultation works for you.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {whoIsItFor.map((item, index) => {
                const colors = ["#f4cc6f", "#EC4899", "#3B82F6", "#10B981"];
                const color = colors[index];

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={whoInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                    className="group relative"
                  >
                    <motion.div
                      className="relative h-full p-8 rounded-3xl border backdrop-blur-xl overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${color}08, rgba(1,11,34,0.6))`,
                        borderColor: `${color}20`,
                      }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at top right, ${color}15, transparent 70%)`,
                        }}
                      />

                      <div
                        className="absolute -right-8 -top-8 text-[8rem] font-black leading-none opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 select-none"
                        style={{ color }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      <div className="relative z-10 flex flex-col items-center text-center h-full">
                        <motion.div
                          className="relative mb-6"
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <motion.div
                            className="absolute inset-0 rounded-2xl blur-xl opacity-50"
                            style={{ background: color }}
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                          />
                          <div
                            className="relative w-20 h-20 rounded-2xl flex items-center justify-center"
                            style={{
                              background: `linear-gradient(135deg, ${color}25, ${color}10)`,
                              border: `2px solid ${color}40`,
                              boxShadow: `0 10px 40px ${color}30`,
                            }}
                          >
                            <item.icon className="w-10 h-10" style={{ color }} />
                          </div>
                        </motion.div>

                        <div
                          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4"
                          style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}
                        >
                          Perfect For
                        </div>

                        <p className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-white/90 transition-colors duration-300">
                          {item.text}
                        </p>

                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl"
                          style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                        />

                        <motion.div
                          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
                          style={{ border: `2px solid ${color}40` }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section ref={diffRef} className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#061630]">
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
                Why Work <span className="text-[#f4cc6f]">With Us</span>
              </motion.h2>
              <motion.p
                className={styles.sectionDescription}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                We combine strategic thinking with practical execution.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {(() => {
                const colors = ["#f4cc6f", "#3B82F6", "#10B981"];
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
                          style={{ background: `radial-gradient(ellipse at top center, ${color}0A, transparent 60%)` }}
                        />

                        <div
                          className="absolute -right-4 -top-6 text-[8rem] sm:text-[10rem] font-black leading-none opacity-[0.025] group-hover:opacity-[0.06] transition-opacity duration-700 select-none pointer-events-none"
                          style={{ color }}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </div>

                        <div className="relative z-10 flex flex-col h-full text-center">
                          <motion.div
                            className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl flex items-center justify-center relative mx-auto mb-6"
                            style={{ background: `${color}10`, border: `1px solid ${color}18` }}
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <item.icon className="w-8 h-8 sm:w-9 sm:h-9" style={{ color }} />
                            <div
                              className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                              style={{ background: `${color}20` }}
                            />
                          </motion.div>

                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                            {item.title}
                          </h3>

                          <p className="text-sm sm:text-base text-white/45 leading-relaxed flex-grow">
                            {item.description}
                          </p>

                          <div className="mt-6 pt-5 border-t border-white/5 flex justify-center">
                            <div className="flex items-center gap-2">
                              <div
                                className="w-8 h-[2px] rounded-full group-hover:w-16 transition-all duration-500"
                                style={{ background: color }}
                              />
                              <span
                                className="text-xs font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ color }}
                              >
                                Our Edge
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                });
              })()}
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
                  Ready to Shape the Future of{' '}
                  <span className={styles.gradientText}>Your Business?</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                  Strategy isn&apos;t optional — it&apos;s the difference between guessing and growing. Let&apos;s talk about where you&apos;re headed — and how to get there with certainty.
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
                    Book a Free Strategy Session
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 hover:border-white/60 text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white/10"
                  >
                    Request a Custom Consultation Plan
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
