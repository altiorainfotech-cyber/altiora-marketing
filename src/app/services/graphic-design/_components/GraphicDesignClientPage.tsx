'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Palette,
  PenTool,
  Layers,
  BarChart3,
  Package,
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
  Clock,
  TrendingUp,
} from "lucide-react";

import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import styles from "../gd.module.css";

export default function GraphicDesignClientPage() {
  const [mounted, setMounted] = useState(false);
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [overviewRef, overviewInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [whyRef, whyInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [workflowRef, workflowInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [diffRef, diffInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      icon: Palette,
      title: "Brand Identity & Logo Design",
      description: "Build a unique visual persona that strengthens recognition and tells your story at a glance.",
      features: [
        "Custom logo creation",
        "Brand style guides",
        "Visual identity systems",
        "Typography selection",
        "Color palette development",
      ],
      color: "#f4cc6f",
    },
    {
      icon: PenTool,
      title: "Marketing Collateral",
      description: "From brochures to flyers, business cards to event materials — we design assets that make a real impression.",
      features: [
        "Brochure & flyer design",
        "Business card design",
        "Event materials",
        "Letterheads & stationery",
        "Presentation decks",
      ],
      color: "#EC4899",
    },
    {
      icon: Layers,
      title: "Digital Graphics",
      description: "Social media visuals, email design, banner ads, and web graphics tailored for performance and clarity.",
      features: [
        "Social media graphics",
        "Email template design",
        "Web banner ads",
        "Digital ad creatives",
        "Website graphics & icons",
      ],
      color: "#3B82F6",
    },
    {
      icon: BarChart3,
      title: "Infographics & Data Visualization",
      description: "Complex information made simple, engaging, and easy to understand.",
      features: [
        "Custom infographic design",
        "Data visualization",
        "Report design",
        "Process flow diagrams",
        "Interactive visual content",
      ],
      color: "#10B981",
    },
    {
      icon: Package,
      title: "Packaging & Print Design",
      description: "Designs that elevate your product presentation and boost buyer confidence.",
      features: [
        "Product packaging",
        "Label design",
        "Print-ready artwork",
        "Retail display design",
        "Signage & banners",
      ],
      color: "#8B5CF6",
    },
  ];

  const workflowSteps = [
    {
      icon: Target,
      title: "Discovery & Creative Strategy",
      description: "We begin by understanding your brand, goals, audience, and competitive landscape. This ensures every design decision supports your business outcomes.",
    },
    {
      icon: Lightbulb,
      title: "Concept Development",
      description: "Our designers create multiple concepts that reflect your brand vision and messaging. We prioritize versatility, meaning designs look great across all channels.",
    },
    {
      icon: RefreshCw,
      title: "Iteration & Refinement",
      description: "We collaborate with you through feedback cycles to refine every detail — typography, color, layout, and messaging — until it aligns with your expectations.",
    },
    {
      icon: Send,
      title: "Final Delivery & Asset Support",
      description: "Once finalized, you get all design files in the formats you need, ready for web, print, or marketing campaigns.",
    },
  ];

  const differentiators = [
    {
      icon: Zap,
      title: "Strategic, Not Decorative",
      description: "Every design choice has intent — to communicate, engage, and convert.",
    },
    {
      icon: Globe,
      title: "Market-Aligned Creativity",
      description: "Your visuals are custom-built for your audience — whether local Canadian markets, US customers, or international audiences.",
    },
    {
      icon: Layers,
      title: "Seamless Cross-Channel Use",
      description: "Designs that work consistently across digital and print without losing impact.",
    },
    {
      icon: Clock,
      title: "Fast Turnaround with Quality",
      description: "Efficient workflows ensure quick delivery without compromising quality.",
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
                  Graphic Design That Connects &{' '}
                  <span className={styles.gradientText}>
                    Converts Your Brand
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                >
                  Great design builds trust and drives action. We help businesses in Canada and the USA communicate their brand with clarity and impact.
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
                    Request a Free Consultation
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border-2 border-[#f4cc6f]/50 hover:border-[#f4cc6f] text-[#f4cc6f] hover:text-white text-sm sm:text-base font-semibold transition-all duration-300 hover:bg-[#f4cc6f]/10"
                  >
                    Get a Quote
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="order-1 lg:order-2 relative h-[280px] sm:h-[320px] md:h-[380px] lg:h-[500px] xl:h-[600px] flex items-center justify-center"
              >
                {/* Hero visual - colorful gradient design elements */}
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
                          <PenTool className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-white" />
                        </motion.div>
                      </div>

                      {/* Floating colorful dots on the rings */}
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

                      {/* Floating small icons with colorful backgrounds */}
                      {[
                        { Icon: Palette, color: "#EC4899", bg: "rgba(236,72,153,0.15)", top: "15%", left: "8%" },
                        { Icon: Layers, color: "#3B82F6", bg: "rgba(59,130,246,0.15)", top: "20%", left: "80%" },
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

        {/* Overview - Why Graphic Design Matters */}
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
                    <span className="">In a world overloaded with visual noise, strong design is your most valuable form of communication.</span> Good design does more than look attractive — it clarifies your message, builds credibility and trust, improves user experience, strengthens brand recall, and supports conversions both online and offline.
                    <br />
                    At Altiora Infotech, we treat design as a strategic tool, not just decoration.
                  </p>
                  <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#f4cc6f]/10 blur-[80px] rounded-full pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#f4cc6f]/5 blur-[120px] rounded-full pointer-events-none z-0" />
        </section>

        {/* Why Design Matters - Visual Points */}
        <section
          ref={whyRef}
          className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#061630]"
        >
          {/* Background accents */}
          <div className="absolute top-0 left-1/4 w-60 h-60 bg-[#f4cc6f]/5 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-purple-500/5 blur-[80px] rounded-full pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-5">
              {[
                { icon: MessageSquare, label: "Clarifies Your Message", color: "#f4cc6f", desc: "Clear visual hierarchy" },
                { icon: CheckCircle, label: "Builds Trust", color: "#10B981", desc: "Professional credibility" },
                { icon: Eye, label: "Better UX", color: "#3B82F6", desc: "Intuitive experiences" },
                { icon: Heart, label: "Brand Recall", color: "#EC4899", desc: "Memorable impressions" },
                { icon: TrendingUp, label: "Drives Conversions", color: "#8B5CF6", desc: "Measurable results" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={whyInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.12, type: "spring", stiffness: 120 }}
                  className="group relative text-center p-5 sm:p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-opacity-40 transition-all duration-500 hover:bg-white/[0.05]"
                  style={{ ['--card-color' as string]: item.color }}
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
                    {/* Pulse ring on hover */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-ping"
                      style={{ background: `${item.color}08`, animationDuration: '2s' }}
                    />
                  </motion.div>

                  {/* Label */}
                  <p className="text-sm sm:text-base font-bold text-white mb-1 relative z-10">{item.label}</p>
                  {/* Subtitle */}
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
                  background: `radial-gradient(circle, ${['#f4cc6f', '#EC4899', '#3B82F6'][i % 3]}, transparent)`,
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
                Our Graphic Design <span className="text-[#f4cc6f]">Expertise</span>
              </motion.h2>
              <motion.p
                className={`${styles.sectionDescription} max-w-4xl mx-auto`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                We design visual assets that reflect your brand values and resonate with your audience.
              </motion.p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6">
              {services.map((service, index) => (
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
                  className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-1rem)] group"
                >
                  <div className={`${styles.serviceCardEnhanced} h-full flex flex-col p-5 relative`}>
                    <div
                      className={styles.animatedBorder}
                      style={{
                        background: `linear-gradient(135deg, ${service.color}, ${service.color}80, transparent)`,
                      }}
                    />
                    <div
                      className={styles.hoverGlow}
                      style={{
                        background: `radial-gradient(circle at center, ${service.color}40, transparent 70%)`,
                      }}
                    />

                    <div className="flex items-center gap-3 mb-3 relative z-10">
                      <div
                        className="inline-flex items-center justify-center w-11 h-11 rounded-xl flex-shrink-0"
                        style={{ backgroundColor: `${service.color}20` }}
                      >
                        <service.icon
                          className="w-5 h-5"
                          style={{ color: service.color }}
                        />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-sm text-gray-400 mb-3 relative z-10">
                      {service.description}
                    </p>

                    {service.features.length > 0 && (
                      <ul className="space-y-1 mb-3 relative z-10">
                        {service.features.map((feature, idx) => (
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
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Approach - Workflow */}
        <section ref={workflowRef} className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#010b22] via-[#0a0f2e] to-[#010b22] opacity-50" />
          {/* Background glow accents */}
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
                How We Approach Graphic <span className="text-[#f4cc6f]">Design</span>
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
                          {/* Hover gradient overlay */}
                          <div
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{ background: `linear-gradient(${isLeft ? '135deg' : '225deg'}, ${color}08, transparent 60%)` }}
                          />

                          {/* Large step number watermark */}
                          <div
                            className={`absolute ${isLeft ? '-right-2' : '-left-2'} -top-4 text-[7rem] font-black leading-none opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 select-none pointer-events-none`}
                            style={{ color }}
                          >
                            {String(index + 1).padStart(2, '0')}
                          </div>

                          <div className="relative z-10">
                            {/* Step label */}
                            <div
                              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase mb-4"
                              style={{ background: `${color}12`, color, border: `1px solid ${color}20` }}
                            >
                              Step {String(index + 1).padStart(2, '0')}
                            </div>

                            <h3 className="text-lg lg:text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
                          </div>

                          {/* Bottom accent line */}
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
                          {/* Pulse ring */}
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{ border: `2px solid ${color}` }}
                            animate={{ scale: [1, 1.5, 1.5], opacity: [0.6, 0, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
                          />
                        </motion.div>
                      </div>

                      {/* Empty side for spacing */}
                      <div className="w-[calc(50%-2rem)]" />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Mobile - Vertical timeline */}
            <div className="md:hidden relative">
              {/* Left vertical line */}
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
                      {/* Node */}
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

                      {/* Card */}
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

        {/* What Makes Us Different */}
        <section ref={diffRef} className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden bg-[#010b22]">
          {/* Background accents */}
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
                What Makes Our Design <span className="text-[#f4cc6f]">Different</span>
              </motion.h2>
            </motion.div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {(() => {
                const colors = ["#f4cc6f", "#EC4899", "#3B82F6", "#10B981"];
                return differentiators.map((item, index) => {
                  const color = colors[index % colors.length];
                  const isLarge = index === 0 || index === 3;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      animate={diffInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                      transition={{ duration: 0.6, delay: index * 0.12, type: "spring", stiffness: 90 }}
                      className={`group relative rounded-3xl overflow-hidden transition-all duration-500 ${isLarge ? 'md:col-span-1' : 'md:col-span-1'}`}
                    >
                      <div
                        className="relative p-7 sm:p-8 lg:p-10 h-full border backdrop-blur-sm bg-white/[0.02] hover:bg-white/[0.05] rounded-3xl transition-all duration-500"
                        style={{ borderColor: `${color}12` }}
                      >
                        {/* Hover gradient */}
                        <div
                          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                          style={{ background: `radial-gradient(ellipse at ${index % 2 === 0 ? 'top left' : 'top right'}, ${color}0A, transparent 60%)` }}
                        />

                        {/* Large watermark number */}
                        <div
                          className="absolute -right-4 -top-6 text-[8rem] sm:text-[10rem] font-black leading-none opacity-[0.025] group-hover:opacity-[0.06] transition-opacity duration-700 select-none pointer-events-none"
                          style={{ color }}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                          {/* Top row: icon + badge */}
                          <div className="flex items-start justify-between mb-6">
                            <motion.div
                              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center relative"
                              style={{ background: `${color}10`, border: `1px solid ${color}18` }}
                              whileHover={{ scale: 1.1, rotate: -5 }}
                              transition={{ duration: 0.3 }}
                            >
                              <item.icon className="w-7 h-7 sm:w-8 sm:h-8" style={{ color }} />
                              {/* Glow behind icon on hover */}
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

                          {/* Title */}
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                            {item.title}
                          </h3>

                          {/* Description */}
                          <p className="text-sm sm:text-base text-white/45 leading-relaxed flex-grow">
                            {item.description}
                          </p>

                          {/* Bottom accent bar */}
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

                        {/* Corner accent on hover */}
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
              <div className="absolute inset-0 bg-[#010b22]/40" />

              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-5 md:mb-6">
                  Ready to Elevate Your Brand with Strategic Graphic Design?
                </h2>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed">
                  Professional design shouldn&apos;t be an afterthought — it&apos;s a growth engine. Connect with our team to start your design project and bring your ideas to life.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] hover:from-[#e6b85c] hover:to-[#f4cc6f] text-[#010c22] text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg shadow-[#f4cc6f]/25 hover:shadow-xl hover:shadow-[#f4cc6f]/40"
                  >
                    Contact Us for a Quote
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border-2 border-white text-white hover:bg-white/10 text-sm sm:text-base font-semibold transition-all duration-300"
                  >
                    Request a Free Consultation
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
