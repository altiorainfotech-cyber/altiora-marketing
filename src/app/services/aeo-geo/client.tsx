"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import {
  CheckCircle,
  Eye,
  TrendingUp,
  BarChart3,
  Target,
  Zap,
  Shield,
  Globe,
  Search,
  FileText,
  Mic,
  Brain,
  Cpu,
  MessageSquare,
  Star,
  Settings,
  BookOpen,
  Layers,
} from "lucide-react";
import {
  FaRocket,
  FaEye,
  FaShieldAlt,
  FaNetworkWired,
  FaTools,
  FaHandshake,
  FaCode,
  FaGoogle,
  FaRobot,
} from "react-icons/fa";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import styles from "../digital-marketing/dm.module.css";
import ServiceCard from "@/components/ServiceCard";
import ProcessTimeline from "@/components/ProcessTimeline";

// AEO/GEO Pillar Card Component
const AEOPillarCard = ({ pillar, className }: { pillar: any; className?: string }) => {
  return (
    <motion.div
      className={cn("relative group cursor-pointer", className)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={`relative rounded-3xl p-6 md:p-8 border-2 transition-all duration-500 ${pillar.borderColor} ${pillar.bgGradient} backdrop-blur-sm overflow-hidden h-[480px] flex flex-col`}>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className={`absolute top-0 right-0 w-32 h-32 ${pillar.iconBg} rounded-full blur-3xl animate-pulse`} />
          <div className={`absolute bottom-0 left-0 w-24 h-24 ${pillar.iconBg} rounded-full blur-2xl animate-pulse`} style={{ animationDelay: "1s" }} />
        </div>

        {/* Pillar Icon */}
        <motion.div
          className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl ${pillar.iconBg} mb-6 relative z-10`}
        >
          <pillar.icon className={`w-8 h-8 md:w-10 md:h-10 ${pillar.iconColor}`} />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3" dangerouslySetInnerHTML={{ __html: pillar.highlightedName }} />
          <p className="text-white/80 text-base md:text-lg mb-4 leading-relaxed flex-1">{pillar.description}</p>

          {/* Stats */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-center">
              <div className={`text-2xl font-bold ${pillar.textColor}`}>{pillar.stat1}</div>
              <div className="text-xs text-white/60">{pillar.stat1Label}</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${pillar.textColor}`}>{pillar.stat2}</div>
              <div className="text-xs text-white/60">{pillar.stat2Label}</div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {pillar.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className={`w-4 h-4 ${pillar.iconColor}`} />
                <span className="text-sm text-white/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hover Effect */}
        <motion.div
          className={`absolute inset-0 ${pillar.hoverGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}
        />
      </div>
    </motion.div>
  );
};

// AI Visibility Dashboard Component
const AIVisibilityDashboard = () => {
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    { label: "AI Visibility Score", value: "+340%", change: "After 6 months", icon: Brain },
    { label: "Featured Snippets", value: "89+", change: "Captured positions", icon: Star },
    { label: "Voice Answer Share", value: "+67%", change: "Increase", icon: Mic },
    { label: "AI Brand Mentions", value: "+215%", change: "Cross-platform", icon: MessageSquare },
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
          <h3 className="text-xl font-bold text-white">AI Visibility Performance</h3>
          <p className="text-white/60 text-sm">Average results across managed AEO & GEO programs</p>
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

export default function AEOGEOClient() {
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

  const aeoPillars = [
    {
      highlightedName: "Answer Engine <span class='text-[#f4cc6f]'>Optimization (AEO)</span>",
      icon: MessageSquare,
      description: "Structure your content to directly answer the questions your audience is asking — making your brand the preferred source for AI-powered answer engines, featured snippets, and knowledge panels across all search platforms.",
      stat1: "Position 0",
      stat1Label: "Target Ranking",
      stat2: "8.6×",
      stat2Label: "CTR vs Organic",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Featured Snippets", "People Also Ask", "Knowledge Panels", "AI Answer Boxes", "Direct Answers", "Conversational Queries"],
    },
    {
      highlightedName: "Generative Engine <span class='text-[#f4cc6f]'>Optimization (GEO)</span>",
      icon: Brain,
      description: "Optimize your brand to be cited, referenced, and recommended by ChatGPT, Google AI Overviews, Perplexity, Bing Copilot, and other large language models when users ask questions relevant to your business.",
      stat1: "5+ LLMs",
      stat1Label: "Target Engines",
      stat2: "+215%",
      stat2Label: "AI Brand Mentions",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["ChatGPT Visibility", "Google AI Overviews", "Perplexity Citations", "Bing Copilot", "Claude References", "AI Citation Strategy"],
    },
    {
      highlightedName: "Voice Search <span class='text-[#f4cc6f]'>Optimization</span>",
      icon: Mic,
      description: "Capture the growing volume of voice queries from Google Assistant, Siri, Alexa, and Cortana by optimizing your content for natural, conversational search patterns and local voice intent signals.",
      stat1: "50%+",
      stat1Label: "Searches Are Voice",
      stat2: "+67%",
      stat2Label: "Voice Traffic Gain",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Conversational Queries", "Local Voice Intent", "FAQ Optimization", "Long-Tail Keywords", "Google Assistant", "Natural Language"],
    },
    {
      highlightedName: "Featured Snippet <span class='text-[#f4cc6f]'>Capture</span>",
      icon: Star,
      description: "Systematically claim Position Zero for your most valuable search terms through precise content structure, formatting, and query-intent alignment — placing your brand above traditional organic results where AI pulls its answers.",
      stat1: "#0",
      stat1Label: "Position Target",
      stat2: "89+",
      stat2Label: "Snippets Captured",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Paragraph Snippets", "List Snippets", "Table Snippets", "Video Snippets", "Query Intent Mapping", "Content Formatting"],
    },
    {
      highlightedName: "Schema & <span class='text-[#f4cc6f]'>Structured Data</span>",
      icon: Cpu,
      description: "Implement advanced schema markup that enables AI systems to correctly understand, categorize, and cite your content — building the machine-readable authority signals that large language models prioritize when generating answers.",
      stat1: "40%+",
      stat1Label: "Rich Result Increase",
      stat2: "JSON-LD",
      stat2Label: "Implementation",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["FAQ Schema", "HowTo Schema", "Organization Markup", "Product Schema", "Article Schema", "Speakable Markup"],
    },
    {
      highlightedName: "Entity & Knowledge <span class='text-[#f4cc6f]'>Graph Building</span>",
      icon: Globe,
      description: "Establish your brand as a recognized entity in Google's Knowledge Graph and AI training datasets by building consistent entity signals, authoritative citations, and structured brand presence across the web.",
      stat1: "E-E-A-T",
      stat1Label: "Signal Building",
      stat2: "+340%",
      stat2Label: "AI Visibility Gain",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Knowledge Panel", "Brand Entity Signals", "Citation Building", "Wikipedia Presence", "Wikidata Optimization", "E-E-A-T Authority"],
    },
  ];

  const services = [
    {
      title: <>AEO Audit & <span className="text-[#f4cc6f]">Strategy</span></>,
      description: "Comprehensive analysis of your current AI search visibility, featured snippet opportunities, and generative engine presence — with a prioritized roadmap for capturing AI-generated answer placements.",
      icon: <Search className="w-8 h-8 text-white" />,
      link: "/contact",
    },
    {
      title: <>GEO Content <span className="text-[#f4cc6f]">Architecture</span></>,
      description: "Design and implement content structures that AI engines understand, trust, and cite — including topic clusters, authoritative Q&A content, and direct-answer page formats optimized for LLM consumption.",
      icon: <Brain className="w-8 h-8 text-white" />,
      link: "/contact",
    },
    {
      title: <>Schema Markup & <span className="text-[#f4cc6f]">Structured Data</span></>,
      description: "Advanced schema implementation across FAQ, HowTo, Organization, Article, and Speakable markup types that signal relevance and authority to AI-powered search and answer systems.",
      icon: <Cpu className="w-8 h-8 text-white" />,
      link: "/contact",
    },
    {
      title: <>Voice Search <span className="text-[#f4cc6f]">Optimization</span></>,
      description: "Optimize your content for conversational, long-tail, and question-based queries that power Google Assistant, Siri, Alexa, and the growing volume of voice-first search interactions.",
      icon: <Mic className="w-8 h-8 text-white" />,
      link: "/contact",
    },
    {
      title: <>AI Content <span className="text-[#f4cc6f]">Optimization</span></>,
      description: "Restructure and enhance existing content to meet the formatting, depth, and authority standards that large language models use to select and cite sources in generated answers.",
      icon: <FileText className="w-8 h-8 text-white" />,
      link: "/contact",
    },
    {
      title: <>AI Visibility <span className="text-[#f4cc6f]">Monitoring</span></>,
      description: "Ongoing tracking of your brand's presence in AI-generated answers across ChatGPT, Perplexity, Google AI Overviews, and featured snippets — with monthly reports and optimization recommendations.",
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      link: "/contact",
    },
  ];

  const whyChoosePoints = [
    {
      title: "Future-Proof Strategy",
      description: "AI is fundamentally reshaping how people find information. Businesses that optimize for generative and answer engines today will dominate the search landscape of tomorrow — those that don't will become invisible.",
      icon: Zap,
    },
    {
      title: "AI-Native Expertise",
      description: "Deep, technical understanding of how large language models index content, select citations, and generate answers — allowing us to engineer your content to be the source AI engines trust and recommend.",
      icon: Brain,
    },
    {
      title: "Structured Data Mastery",
      description: "Advanced schema implementation that makes your content machine-readable, contextually clear, and prioritized by AI systems — turning your website into a high-authority source that LLMs actively reference.",
      icon: Cpu,
    },
    {
      title: "Authority Content Building",
      description: "E-E-A-T aligned content strategies that build genuine topical authority and brand credibility — the foundational signals that both traditional search and generative AI engines rely on when selecting trusted sources.",
      icon: Shield,
    },
    {
      title: "Multi-Engine Coverage",
      description: "Optimization strategies that work across Google AI Overviews, ChatGPT, Perplexity, Bing Copilot, and voice assistants simultaneously — ensuring your brand is visible wherever AI-powered search exists.",
      icon: Globe,
    },
    {
      title: "Measurable AI Visibility",
      description: "Clear tracking and reporting of your AI search presence — from featured snippet capture rates and voice answer share to brand mention frequency in LLM-generated responses and AI Overview inclusion.",
      icon: BarChart3,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#010c22] text-[#F8FBFB] overflow-x-hidden w-full max-w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden text-white min-h-screen md:min-h-0 py-20 md:py-40 flex items-center md:block w-full max-w-full">
        <div className="absolute inset-0">
          <Image
            src="/images/services-bg/answer engine poptimization.jpg.jpeg"
            alt="AEO & GEO Services - Answer Engine and Generative Engine Optimization"
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
                  <Brain className="w-4 h-4" />
                  ALTIORA INFOTECH
                </span>
                <h1 className="font-semibold tracking-tight text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  AEO & GEO
                  <br />
                  Services
                </h1>
                <p className="text-xl sm:text-2xl text-white/90">
                  Get Found in AI Search, Voice & Generative Engines
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 focus:shadow-lg focus:shadow-[#f4cc6f]/25 focus:outline-none focus:ring-2 focus:ring-[#f4cc6f]/50 transition-all duration-300 transform hover:scale-105 focus:scale-105 w-[60%] sm:w-auto"
                  >
                    Get AI Visibility Audit
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
                  Search has fundamentally changed. When someone asks ChatGPT, Google AI Overviews, Perplexity, or a voice assistant a question — they get an answer, not a list of links. The brand that provides that answer wins the customer. Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) are the disciplines that make your business the trusted source AI engines turn to. At Altiora Infotech, we build the content architecture, structured data, entity authority, and E-E-A-T signals that position your brand as the definitive answer in your industry — across traditional search, AI-generated responses, and voice queries — future-proofing your visibility in an AI-first search landscape.
                </p>
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#f4cc6f]/10 blur-[80px] rounded-full pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#f4cc6f]/5 blur-[120px] rounded-full pointer-events-none z-0" />
      </section>

      {/* AEO/GEO Pillars Showcase */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              <span className="text-[#f4cc6f]">AEO & GEO</span> Optimization Pillars
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              A complete AI search optimization framework built to make your brand the trusted answer source across every intelligent search engine and AI platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aeoPillars.map((pillar, index) => (
              <AEOPillarCard key={index} pillar={pillar} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Visibility Dashboard */}
      <section className="py-20 px-6 bg-[#010b22]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Measurable AI Search Visibility
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                AI search optimization is no longer optional — it's where your next customers are finding answers. Our AEO and GEO programs deliver measurable improvements in AI visibility, featured snippet capture, and generative engine brand presence.
              </p>
              <div className="space-y-4">
                {[
                  "Track brand mentions in ChatGPT, Perplexity & Google AI Overviews",
                  "Monitor featured snippet capture across target keyword clusters",
                  "Measure voice search answer share for local and branded queries",
                  "Monthly AI visibility reporting with actionable optimization insights",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#f4cc6f]" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <AIVisibilityDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-[#010b22]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-center">
              Our AEO & GEO Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              A full-stack AI search optimization service designed to make your brand visible, citable, and trusted across every AI-powered search and answer platform.
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

      {/* Why Choose Our AEO & GEO */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Why Choose Our AEO & GEO Services?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We combine deep AI search expertise with proven content strategy to build your brand&apos;s authority across every generative and answer engine that matters.
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

      {/* AEO & GEO Process Timeline */}
      <ProcessTimeline
        title="Our AEO & GEO Optimization Process"
        subtitle="A systematic approach to building your brand's AI search authority — from audit to ongoing visibility monitoring across every generative engine."
        steps={[
          {
            step: "01",
            title: "AI Search Audit",
            description: "Analyze your current featured snippet presence, AI mention frequency, voice search performance, and knowledge panel status to identify the highest-value optimization opportunities.",
            icon: Search,
            color: "from-blue-500 to-cyan-500",
          },
          {
            step: "02",
            title: "AEO & GEO Strategy",
            description: "Build a prioritized roadmap covering content structure, schema implementation, entity building, and AI engine targeting — aligned to your specific business objectives and competitive landscape.",
            icon: Target,
            color: "from-purple-500 to-pink-500",
          },
          {
            step: "03",
            title: "Schema & Structured Data",
            description: "Implement comprehensive schema markup across FAQ, HowTo, Organization, Article, and Speakable types — making your content unambiguously readable and citable by AI systems.",
            icon: Cpu,
            color: "from-green-500 to-emerald-500",
          },
          {
            step: "04",
            title: "AI Content Optimization",
            description: "Restructure and enhance existing content for depth, authority, and direct-answer formatting — ensuring AI engines select your pages as trusted citation sources when generating responses.",
            icon: FileText,
            color: "from-yellow-500 to-orange-500",
          },
          {
            step: "05",
            title: "Entity & Authority Building",
            description: "Build brand entity signals, Knowledge Graph presence, E-E-A-T indicators, and cross-web citations that establish your brand as a recognized authority in AI training data.",
            icon: Globe,
            color: "from-red-500 to-pink-500",
          },
          {
            step: "06",
            title: "Monitoring & Reporting",
            description: "Continuously track AI visibility metrics — featured snippet positions, AI brand mentions, voice answer share, and generative engine citation frequency — with monthly reports and strategy updates.",
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
              Partner with AI search optimization specialists who are already building the strategies that will define visibility in the next era of search.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { text: "AI-First Expertise – Deep understanding of how LLMs, answer engines, and generative AI platforms select and cite content sources.", icon: FaNetworkWired },
              { text: "Structured Data Mastery – Advanced schema implementation that makes your content machine-readable, trusted, and AI-citation-ready.", icon: FaTools },
              { text: "Content Authority Strategy – E-E-A-T aligned content and entity building that establishes genuine topical authority recognized by AI systems.", icon: FaCode },
              { text: "Multi-Engine Optimization – Strategies spanning Google AI Overviews, ChatGPT, Perplexity, Bing Copilot, and voice assistants simultaneously.", icon: FaShieldAlt },
              { text: "Future-Proof Approach – We stay ahead of evolving AI search algorithms, ensuring your visibility strategy remains effective as generative AI advances.", icon: FaRobot },
              { text: "Measurable AI Visibility – Clear tracking and transparent reporting that quantifies your brand's presence in AI-generated search results.", icon: FaHandshake },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              const colors = ["from-blue-500 to-cyan-500", "from-purple-500 to-pink-500", "from-green-500 to-emerald-500", "from-yellow-500 to-orange-500", "from-red-500 to-pink-500", "from-teal-500 to-cyan-500"];
              const titles = ["AI-First", "Structured Data", "Content Authority", "Multi-Engine", "Future-Proof", "Measurable"];
              const subtitles = ["Expertise", "Mastery", "Strategy", "Optimization", "Approach", "AI Visibility"];
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
              <Image src="/images/agentic-ai/cta/Predictive-cta.png" alt="AEO & GEO Services" fill className="object-cover rounded-3xl" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#010c22]/95 via-[#0a1038]/85 to-[#010c22]/95" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#f4cc6f]/20 to-[#e6b85c]/20 ring-2 ring-[#f4cc6f]/30 mb-8 mx-auto">
                <Brain className="w-10 h-10 text-[#f4cc6f]" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                Ready to Be the Answer AI Engines Recommend?
              </h3>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-6 md:mb-8">
                The businesses that appear in AI-generated answers today will own their markets tomorrow. At Altiora Infotech, we build the content authority, structured data, and entity signals that make your brand the trusted source — across ChatGPT, Google AI Overviews, Perplexity, voice search, and every AI-powered platform your customers use.
              </p>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-8">
                Share your business goals and current search presence, and we&apos;ll deliver a comprehensive AI visibility audit with featured snippet opportunities, GEO content recommendations, and a prioritized roadmap to AI search dominance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link
                  href="https://calendly.com/altiorainfotech/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 focus:shadow-lg focus:shadow-[#f4cc6f]/25 focus:outline-none focus:ring-2 focus:ring-[#f4cc6f]/50 transition-all duration-300 transform hover:scale-105 focus:scale-105"
                >
                  <FaRocket className="mr-2 w-5 h-5" />
                  Book AI Visibility Audit
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold border border-white/30 bg-white/[0.08] backdrop-blur-sm text-white hover:bg-white/[0.12] focus:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                >
                  <FaEye className="mr-2 w-5 h-5" />
                  Get AEO & GEO Quote
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
