"use client";

import { useState } from "react";
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
  ArrowRight,
  Calendar,
  MessageCircle,
  Eye,
  Share2,
  Lightbulb,
  Rocket,
  Shield,
  Clock
} from "lucide-react";
import {
  FaRocket,
  FaChartLine,
  FaBullseye,
  FaUsers,
  FaEye
} from "react-icons/fa";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import styles from "../services/digital-marketing/dm.module.css";

export default function SocialMediaManagementClient() {
  const { ref: overviewRef, inView: overviewInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const whatWeDo = [
    {
      title: "Strategy & Positioning",
      description: "Before content — we define why people should care. We analyze your industry, competitors, and audience psychology to craft a content direction that differentiates you.",
      outcome: "Your brand becomes recognizable, not replaceable.",
      icon: Target,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Content Creation",
      description: "Every post has a role: attract, educate, or convert. We create short-form videos, authority posts, visual carousels, story content, and conversion-driven creatives.",
      outcome: "Consistent engagement that leads to inbound conversations.",
      icon: Lightbulb,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Publishing & Platform Management",
      description: "Timing, format, and distribution matter. We handle scheduling, caption optimization, hashtag architecture, platform formatting, and comment handling.",
      outcome: "Your pages stay active and professional daily — without your involvement.",
      icon: Calendar,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Growth Optimization",
      description: "Social media growth is data-driven. We track reach quality, audience retention, follower intent, lead signals, and conversion patterns. Then we refine weekly.",
      outcome: "Increasing ROI instead of repeating the same posts every month.",
      icon: TrendingUp,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const workingModel = [
    {
      step: "01",
      title: "Understand",
      description: "We learn your business model, margins, and target customer. Not just 'what you sell', but why people buy it.",
      icon: Eye
    },
    {
      step: "02",
      title: "Build",
      description: "We design your content system and start publishing immediately with strategic direction.",
      icon: Rocket
    },
    {
      step: "03",
      title: "Scale",
      description: "We double down on what converts and eliminate what doesn't. Simple process. Compounding results.",
      icon: TrendingUp
    }
  ];

  const benefits = [
    "Higher trust before first contact",
    "Warmer inbound leads",
    "Faster closing cycles",
    "Stronger brand authority",
    "Consistent visibility"
  ];

  const assetBenefits = [
    { text: "A proof of credibility", icon: Shield },
    { text: "A lead qualification layer", icon: Target },
    { text: "A sales assistant that works 24/7", icon: Clock }
  ];

  const whoIsItFor = [
    "Want long-term brand positioning",
    "Sell expertise, services, or premium products",
    "Understand growth is strategic, not viral",
    "Prefer systems over hacks"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#010c22] text-[#F8FBFB] overflow-x-hidden w-full max-w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden text-white py-20 md:py-40 w-full max-w-full" style={{
        background: "radial-gradient(85% 60% at 28% 8%, rgba(76,131,255,.25), rgba(0,0,0,0))"
      }}>
        <div className="absolute inset-0" style={{ animation: "float 6s ease-in-out infinite", transformStyle: "preserve-3d" }}>
          <Image src="https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Blockchain_Development_Services-1_bsu3hu.png" alt="Social Media Management" fill priority className="object-cover" />
        </div>

        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-400/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-gradient-to-br from-blue-400/25 to-cyan-500/25 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-gradient-to-br from-[#f4cc6f]/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="w-full max-w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center w-full max-w-full">
              <div className="lg:col-span-12 space-y-6 w-full max-w-full">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 text-xs tracking-wider text-white/90 backdrop-blur-sm hover:bg-white/[0.12] transition-all duration-300"
                >
                  <Share2 className="w-4 h-4" />
                  ALTIORA INFOTECH
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="font-semibold tracking-tight text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl text-white"
                >
                  Social Media Management
                  <br />
                  <span className="bg-gradient-to-r from-[#f4cc6f] via-[#f4d97f] to-[#f4cc6f] bg-clip-text text-transparent animate-pulse">Turn Attention Into Revenue</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl sm:text-2xl text-white/90 max-w-3xl"
                >
                  Without managing it yourself. We design a system that makes your brand recognizable, trusted, and chosen.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4"
                >
                  <Link href="/contact" className="group inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-2xl hover:shadow-[#f4cc6f]/50 transition-all duration-300 transform hover:scale-105">
                    Start Your Growth System
                    <FaRocket className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
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
              <span className={styles.overviewTitle}>
                The Problem
              </span>
              <div className="h-px w-full max-w-[80px] sm:max-w-[120px] bg-gradient-to-r from-[#f4cc6f]/50 to-transparent" />
            </div>

            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={overviewInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
                className="group max-w-5xl mx-auto py-8 px-8 sm:py-12 sm:px-12 md:py-14 md:px-14 rounded-[40px] border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-[0_20px_50px_rgba(244,204,111,0.1)] hover:shadow-[0_30px_60px_rgba(244,204,111,0.2)] relative overflow-hidden transition-all duration-500"
              >
                <p className={`${styles.sectionDescription} !max-w-none relative z-10 !text-white/90`}>
                  Social media shouldn't feel like a second job. Most businesses post consistently… yet still don't grow. Because growth doesn't come from activity — it comes from strategy, positioning, and execution that compounds over time. At Altiora Infotech, we don't just "handle posts." We design a system that makes your brand recognizable, trusted, and chosen. While you focus on running your business, we focus on making people remember it.
                </p>
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#f4cc6f]/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-[#f4cc6f]/20 transition-all duration-500" />
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-purple-500/20 transition-all duration-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#f4cc6f]/5 blur-[120px] rounded-full pointer-events-none z-0" />
      </section>

      {/* Your Dedicated Growth Team */}
      <section className="py-20 px-6 bg-[#010b22]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Your Dedicated <span className="text-[#f4cc6f]">Growth Team</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              You're not hiring a freelancer. You're plugging into a marketing engine.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { text: "No chasing designers", icon: Users },
                { text: "No content confusion", icon: MessageCircle },
                { text: "No guessing what to post next", icon: Lightbulb }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm text-center hover:bg-white/[0.05] hover:border-[#f4cc6f]/30 transition-all duration-300"
                >
                  <item.icon className="w-12 h-12 text-[#f4cc6f] mx-auto mb-4" />
                  <p className="text-white/90 font-semibold">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center p-8 rounded-3xl border-2 border-[#f4cc6f]/30 bg-gradient-to-br from-[#f4cc6f]/10 to-purple-500/5 hover:from-[#f4cc6f]/15 hover:to-purple-500/10 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-[#f4cc6f]/20"
            >
              <p className="text-2xl font-bold text-white mb-2">Just clarity and momentum.</p>
              <p className="text-white/70">We become the team that plans, creates, publishes, optimizes, and improves your social presence — continuously.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Actually Do */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              What We <span className="text-[#f4cc6f]">Actually Do</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatWeDo.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 h-full shadow-lg hover:shadow-2xl">
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-white/80 mb-6 leading-relaxed">{service.description}</p>

                    <div className="pt-4 border-t border-white/10">
                      <p className="text-sm font-semibold text-[#f4cc6f] mb-2">Outcome:</p>
                      <p className="text-white/90">{service.outcome}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Working Model */}
      <section className="py-20 px-6 bg-[#010b22]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Our Working <span className="text-[#f4cc6f]">Model</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Simple process. Compounding results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workingModel.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group"
              >
                <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm text-center h-full hover:bg-white/[0.05] hover:border-[#f4cc6f]/30 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-[#f4cc6f]/20">
                  <div className="text-6xl font-black text-[#f4cc6f]/20 group-hover:text-[#f4cc6f]/40 transition-colors duration-300 mb-4">{step.step}</div>
                  <step.icon className="w-12 h-12 text-[#f4cc6f] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-white/80 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Changes After Working With Us */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              What Changes After <span className="text-[#f4cc6f]">Working With Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">You stop:</h3>
              <div className="space-y-4 mb-8">
                {[
                  "Worrying about posting",
                  "Explaining your business repeatedly",
                  "Competing on price"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 hover:bg-red-500/15 transition-all duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-white/90">{item}</span>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-white mb-6">And start experiencing:</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-[#f4cc6f] flex-shrink-0" />
                    <span className="text-white/90 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="p-8 rounded-3xl border-2 border-[#f4cc6f]/30 bg-gradient-to-br from-[#f4cc6f]/10 to-purple-500/10 backdrop-blur-sm hover:from-[#f4cc6f]/20 hover:to-purple-500/20 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#f4cc6f]/30">
                <BarChart3 className="w-16 h-16 text-[#f4cc6f] mb-6 animate-pulse" />
                <h3 className="text-3xl font-bold text-white mb-4">Not Just Social Media</h3>
                <p className="text-xl text-white/90 mb-6">A Business Asset</p>
                <p className="text-white/80 leading-relaxed">
                  Good social media looks nice. Effective social media reduces customer acquisition friction. We build the second one.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Your Profiles Become */}
      <section className="py-20 px-6 bg-[#010b22]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Your Profiles <span className="text-[#f4cc6f]">Become</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {assetBenefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative"
              >
                <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-[#f4cc6f]/30 transition-all duration-500 text-center h-full shadow-lg hover:shadow-2xl hover:shadow-[#f4cc6f]/20">
                  <item.icon className="w-16 h-16 text-[#f4cc6f] mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-xl font-bold text-white">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Who This Is <span className="text-[#f4cc6f]">For</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We work best with businesses that:
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {whoIsItFor.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm"
                >
                  <CheckCircle className="w-6 h-6 text-[#f4cc6f] flex-shrink-0 mt-1" />
                  <span className="text-white/90 text-lg">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center p-8 rounded-3xl border-2 border-[#f4cc6f]/30 bg-gradient-to-br from-[#f4cc6f]/10 to-purple-500/5 backdrop-blur-sm hover:from-[#f4cc6f]/15 hover:to-purple-500/10 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#f4cc6f]/30"
            >
              <p className="text-xl text-white/90 mb-4">
                If you only want "more posts," we're not the right fit.
              </p>
              <p className="text-2xl font-bold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] bg-clip-text text-transparent">
                If you want predictable digital trust — we are.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-6 py-8 md:py-12">
        <div className="max-w-6xl mx-auto w-full">
          <div className="relative p-6 sm:p-8 md:p-12 text-center rounded-2xl md:rounded-3xl border border-white/20 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0">
              <Image src="https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Blockchain_Development_Services-2_n1k5oc.png" alt="Social Media Management" fill className="object-cover rounded-3xl" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#010c22]/95 via-[#0a1038]/85 to-[#010c22]/95" />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#f4cc6f]/20 to-[#e6b85c]/20 ring-2 ring-[#f4cc6f]/30 mb-8 mx-auto">
                <Share2 className="w-10 h-10 text-[#f4cc6f]" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                Let's Build Your Presence Properly
              </h3>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-6 md:mb-8">
                You handle operations. We handle perception. And perception drives growth.
              </p>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-8">
                Start your social media growth system with Altiora Infotech.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link
                  href="https://calendly.com/altiorainfotech/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 transition-all duration-300 transform hover:scale-105"
                >
                  <FaRocket className="mr-2 w-5 h-5" />
                  Start Your Growth System
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold border border-white/30 bg-white/[0.08] backdrop-blur-sm text-white hover:bg-white/[0.12] transition-all duration-300"
                >
                  <FaEye className="mr-2 w-5 h-5" />
                  Learn More
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
