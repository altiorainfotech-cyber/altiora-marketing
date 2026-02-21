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
  Zap,
  Eye,
  Play,
  Film,
  Video,
  Mic,
  Monitor,
  Camera,
  Clock,
  Star,
  Users,
  Share2,
} from "lucide-react";
import {
  FaRocket,
  FaEye,
  FaCode,
  FaShieldAlt,
  FaNetworkWired,
  FaTools,
  FaHandshake,
} from "react-icons/fa";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import styles from "../../digital-marketing/dm.module.css";
import ServiceCard from "@/components/ServiceCard";
import ProcessTimeline from "@/components/ProcessTimeline";

const VideoTypeCard = ({ item, className }: { item: any; className?: string }) => {
  return (
    <motion.div
      className={`relative group cursor-pointer ${className || ""}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={`relative rounded-3xl p-6 md:p-8 border-2 transition-all duration-500 ${item.borderColor} ${item.bgGradient} backdrop-blur-sm overflow-hidden h-[480px] flex flex-col`}>
        <div className="absolute inset-0 opacity-10">
          <div className={`absolute top-0 right-0 w-32 h-32 ${item.iconBg} rounded-full blur-3xl animate-pulse`} />
          <div className={`absolute bottom-0 left-0 w-24 h-24 ${item.iconBg} rounded-full blur-2xl animate-pulse`} style={{ animationDelay: "1s" }} />
        </div>
        <motion.div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl ${item.iconBg} mb-6 relative z-10`}>
          <item.icon className={`w-8 h-8 md:w-10 md:h-10 ${item.iconColor}`} />
        </motion.div>
        <div className="relative z-10 flex-1 flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3" dangerouslySetInnerHTML={{ __html: item.highlightedName }} />
          <p className="text-white/80 text-base md:text-lg mb-4 leading-relaxed flex-1">{item.description}</p>
          <div className="flex items-center justify-between mb-4">
            <div className="text-center">
              <div className={`text-2xl font-bold ${item.textColor}`}>{item.stat1}</div>
              <div className="text-xs text-white/60">{item.stat1Label}</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${item.textColor}`}>{item.stat2}</div>
              <div className="text-xs text-white/60">{item.stat2Label}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {item.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className={`w-4 h-4 ${item.iconColor}`} />
                <span className="text-sm text-white/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <motion.div className={`absolute inset-0 ${item.hoverGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`} />
      </div>
    </motion.div>
  );
};

const VideoPerformanceWidget = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const metrics = [
    { label: "Video Watch Rate", value: "87%", change: "Avg completion", icon: Play },
    { label: "Engagement Boost", value: "+312%", change: "vs static content", icon: TrendingUp },
    { label: "Conversion Lift", value: "+67%", change: "With video content", icon: BarChart3 },
    { label: "Avg Production", value: "7 days", change: "Turnaround time", icon: Clock },
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
          <Film className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Video Performance</h3>
          <p className="text-white/60 text-sm">Industry-proven results</p>
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

export default function VideoProductionClientPage() {
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

  const videoTypes = [
    {
      highlightedName: "Brand <span class='text-[#f4cc6f]'>Films</span>",
      icon: Film,
      description: "Cinematic brand stories that capture your company's essence, values, and vision — creating deep emotional connections with your audience.",
      stat1: "Cinematic",
      stat1Label: "4K Quality",
      stat2: "2–5 min",
      stat2Label: "Ideal Length",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Story Development", "Professional Crew", "4K Filming", "Color Grading", "Music Licensing", "Multi-Format Export"],
    },
    {
      highlightedName: "Social Media <span class='text-[#f4cc6f]'>Reels</span>",
      icon: Video,
      description: "Platform-optimized short-form video content for Instagram, TikTok, and YouTube Shorts designed to maximize reach and drive engagement.",
      stat1: "+312%",
      stat1Label: "Engagement Boost",
      stat2: "< 60s",
      stat2Label: "Optimized Length",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Vertical Format", "Trending Audio", "Captions & Text", "Hook Optimization", "CTA Integration", "Platform Sizing"],
    },
    {
      highlightedName: "Explainer <span class='text-[#f4cc6f]'>Animation</span>",
      icon: Monitor,
      description: "Animated explainer videos that simplify complex ideas, showcase products, and communicate your value proposition with visual clarity.",
      stat1: "2D/3D",
      stat1Label: "Animation",
      stat2: "87%",
      stat2Label: "Watch Rate",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Script Writing", "Storyboard", "2D Animation", "Motion Graphics", "Voice Over", "Sound Design"],
    },
    {
      highlightedName: "Testimonial <span class='text-[#f4cc6f]'>Videos</span>",
      icon: Mic,
      description: "Authentic customer success stories that build social proof, reduce purchase hesitation, and accelerate conversions at every stage of the funnel.",
      stat1: "+67%",
      stat1Label: "Conversion Lift",
      stat2: "Trust",
      stat2Label: "Builder",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Interview Setup", "Question Scripting", "Professional Lighting", "Multi-Angle Filming", "B-Roll Content", "Subtitles"],
    },
    {
      highlightedName: "Product <span class='text-[#f4cc6f]'>Demo</span>",
      icon: Camera,
      description: "Compelling product demonstration videos that showcase features, benefits, and use cases to convert interested prospects into confident buyers.",
      stat1: "3x",
      stat1Label: "More Sales",
      stat2: "Feature",
      stat2Label: "Focused",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Product Showcase", "Feature Walkthrough", "Use Case Scenarios", "Comparison Shots", "Detail Close-Ups", "Unboxing Content"],
    },
    {
      highlightedName: "Corporate <span class='text-[#f4cc6f]'>Films</span>",
      icon: Star,
      description: "Professional corporate communications — internal training, investor presentations, recruitment videos, and company culture showcases.",
      stat1: "Pro",
      stat1Label: "Grade Quality",
      stat2: "Any",
      stat2Label: "Length & Format",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Training Videos", "Recruitment Films", "Investor Decks", "Culture Videos", "Event Coverage", "Annual Reports"],
    },
  ];

  const services = [
    {
      title: <>Brand <span className="text-[#f4cc6f]">Film</span></>,
      description: "Cinematic brand stories that capture your company's essence and create deep emotional connections with your audience and customers.",
      icon: <Film className="w-12 h-12" />,
      link: "/contact",
    },
    {
      title: <>Social Media <span className="text-[#f4cc6f]">Reels</span></>,
      description: "Platform-optimized short-form video content for Instagram, TikTok, and YouTube Shorts that drives reach and engagement.",
      icon: <Video className="w-12 h-12" />,
      link: "/contact",
    },
    {
      title: <>Explainer <span className="text-[#f4cc6f]">Animation</span></>,
      description: "Animated videos that simplify complex concepts, showcase products, and communicate your value with visual storytelling.",
      icon: <Monitor className="w-12 h-12" />,
      link: "/contact",
    },
    {
      title: <>Testimonial <span className="text-[#f4cc6f]">Videos</span></>,
      description: "Authentic customer success stories that build social proof, reduce hesitation, and convert prospects into confident buyers.",
      icon: <Mic className="w-12 h-12" />,
      link: "/contact",
    },
    {
      title: <>Product <span className="text-[#f4cc6f]">Demo</span></>,
      description: "Compelling product demonstration videos that showcase features and benefits to convert interested prospects into paying customers.",
      icon: <Camera className="w-12 h-12" />,
      link: "/contact",
    },
    {
      title: <>Corporate <span className="text-[#f4cc6f]">Films</span></>,
      description: "Professional corporate communications — training videos, investor presentations, recruitment films, and company culture showcases.",
      icon: <Star className="w-12 h-12" />,
      link: "/contact",
    },
  ];

  const whyChoosePoints = [
    {
      title: "Cinematic Quality",
      description: "Professional-grade production with 4K cameras, cinema lenses, professional lighting, and broadcast-quality audio that makes your brand look premium.",
      icon: Film,
    },
    {
      title: "Story-Driven",
      description: "Every video we create is built on a compelling narrative that connects emotionally with your audience and motivates them to take the action you need.",
      icon: Play,
    },
    {
      title: "Platform-Optimized",
      description: "Each video is formatted, sized, and optimized specifically for the platform it's published on — ensuring maximum performance wherever it appears.",
      icon: Monitor,
    },
    {
      title: "Fast Production",
      description: "From concept to final delivery in as little as 7 days without compromising on quality — so you can move fast and stay ahead of competitors.",
      icon: Zap,
    },
    {
      title: "Full-Service Studio",
      description: "We handle everything — scripting, storyboarding, filming, animation, editing, color grading, sound design, and delivery — under one roof.",
      icon: Camera,
    },
    {
      title: "Conversion-Focused",
      description: "Every video is strategically designed with a clear objective and call-to-action that drives measurable business results, not just views.",
      icon: TrendingUp,
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
          <Image src="/images/services-bg/Videos.jpg.jpeg" alt="Video Production Services" fill priority quality={100} className="object-cover" style={{ transform: "translateZ(0)", willChange: "transform", backfaceVisibility: "hidden" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="w-full max-w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center w-full max-w-full">
              <div className="lg:col-span-12 space-y-6 w-full max-w-full">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 text-xs tracking-wider text-white/90 backdrop-blur-sm">
                  <Film className="w-4 h-4" />
                  ALTIORA INFOTECH
                </span>
                <h1 className="font-semibold tracking-tight text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  Video Production
                  <br />
                  Services
                </h1>
                <p className="text-xl sm:text-2xl text-white/90">
                  Story-Driven Video That Captivates Audiences and Converts Customers
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="w-[60%] sm:w-auto inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 focus:shadow-lg focus:shadow-[#f4cc6f]/25 focus:outline-none focus:ring-2 focus:ring-[#f4cc6f]/50 transition-all duration-300 transform hover:scale-105 focus:scale-105"
                  >
                    Start Your Video
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
                  Video is the most powerful content format in the world — and the businesses that use it strategically are winning. At Altiora Infotech, our Video Production Services combine cinematic storytelling with strategic marketing to create videos that captivate your audience, build brand authority, and drive real conversions. From brand films and social media reels to animated explainers and testimonial videos, we handle every aspect of production — so you get premium video content that delivers measurable business results.
                </p>
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#f4cc6f]/10 blur-[80px] rounded-full pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#f4cc6f]/5 blur-[120px] rounded-full pointer-events-none z-0" />
      </section>

      {/* Video Types */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Video <span className="text-[#f4cc6f]">Formats</span> We Produce
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              From cinematic brand films to viral social reels, we produce every video format your business needs to grow and convert.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTypes.map((item, index) => (
              <VideoTypeCard key={index} item={item} />
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
                Video Content That Drives Results
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Video isn't just content — it's the most powerful conversion tool available to any business. We produce videos that people actually watch, share, and act on — turning viewers into leads and leads into loyal customers.
              </p>
              <div className="space-y-4">
                {[
                  "87% average video completion rate across all formats",
                  "312% more engagement than static image content",
                  "67% higher conversion rates with video on landing pages",
                  "7-day average production turnaround from brief to delivery",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#f4cc6f]" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <VideoPerformanceWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-[#010b22]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-center">
              Our Video Production Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              End-to-end video production that takes your content from concept to delivery with cinematic quality and strategic impact.
            </p>
          </div>
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} link={service.link} hideServiceTag={true} iconVariant="gray" />
            ))}
          </div>
          <div className="block md:hidden grid grid-cols-1 gap-4">
            {services.map((service, index) => (
              <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} link={service.link} hideServiceTag={true} iconVariant="gray" />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Why Choose Our Video Production?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We combine cinematic craft with strategic marketing thinking to produce videos that don't just look great — they drive results.
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
        title="Our Video Production Process"
        subtitle="A structured end-to-end production workflow that delivers cinematic quality video on time, every time."
        steps={[
          { step: "01", title: "Brief & Discovery", description: "We deep-dive into your goals, target audience, brand voice, and key message to build a comprehensive creative brief for your video.", icon: Target, color: "from-blue-500 to-cyan-500" },
          { step: "02", title: "Script & Storyboard", description: "Develop a compelling script and visual storyboard that maps every scene, shot, and transition — ensuring creative alignment before production begins.", icon: Eye, color: "from-purple-500 to-pink-500" },
          { step: "03", title: "Pre-Production", description: "Organize all logistics — casting, location scouting, equipment setup, crew briefing, and shot planning — for a seamless production day.", icon: Camera, color: "from-green-500 to-emerald-500" },
          { step: "04", title: "Production & Filming", description: "Execute the shoot with professional crew, cinema-grade equipment, and expert direction to capture all footage exactly as planned.", icon: Film, color: "from-yellow-500 to-orange-500" },
          { step: "05", title: "Editing & Post-Production", description: "Edit, color grade, add motion graphics, sound design, music, and subtitles to transform raw footage into a polished final video.", icon: Zap, color: "from-red-500 to-pink-500" },
          { step: "06", title: "Delivery & Optimization", description: "Deliver platform-optimized files in all required formats with performance data and recommendations for maximizing video reach.", icon: Share2, color: "from-indigo-500 to-purple-500" },
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
              Partner with video production experts who understand both storytelling and business strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { text: "Creative Storytelling – We craft narratives that connect emotionally and motivate your audience to take meaningful action.", icon: FaNetworkWired },
              { text: "Production Excellence – Cinema-grade equipment, professional crew, and broadcast-quality audio for every project.", icon: FaTools },
              { text: "Strategic Thinking – Every video is designed with clear objectives, target audience insights, and measurable success metrics.", icon: FaCode },
              { text: "Platform Expertise – Deep knowledge of video performance across social media, websites, ads, and broadcast channels.", icon: FaShieldAlt },
              { text: "Fast Turnaround – Premium quality video delivered in 7 days without the agency delays and inflated pricing.", icon: FaRocket },
              { text: "Full-Service Team – Scriptwriters, directors, cinematographers, animators, and editors all under one roof.", icon: FaHandshake },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              const colors = ["from-pink-500 to-purple-500", "from-blue-500 to-cyan-500", "from-green-500 to-emerald-500", "from-red-500 to-orange-500", "from-yellow-500 to-orange-500", "from-teal-500 to-cyan-500"];
              const titles = ["Creative", "Production", "Strategic", "Platform", "Fast", "Full-Service"];
              const subtitles = ["Storytelling", "Excellence", "Thinking", "Expertise", "Turnaround", "Team"];
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
              <Image src="/images/agentic-ai/cta/AI-Infrastructure-cta.png" alt="Video Production Services" fill className="object-cover rounded-3xl" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#010c22]/95 via-[#0a1038]/85 to-[#010c22]/95" />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#f4cc6f]/20 to-[#e6b85c]/20 ring-2 ring-[#f4cc6f]/30 mb-8 mx-auto">
                <Film className="w-10 h-10 text-[#f4cc6f]" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                Ready to Tell Your Brand Story Through Video?
              </h3>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-6 md:mb-8">
                Video is the most powerful tool in your marketing arsenal. At Altiora Infotech, we combine cinematic production quality with strategic marketing expertise to create videos that captivate your audience and drive real business results.
              </p>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-8">
                Share your vision and we'll develop a comprehensive video production proposal — including creative concept, production timeline, and investment details.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link href="https://calendly.com/altiorainfotech/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 transition-all duration-300 transform hover:scale-105">
                  <FaRocket className="mr-2 w-5 h-5" />
                  Book Video Consultation
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold border border-white/30 bg-white/[0.08] backdrop-blur-sm text-white hover:bg-white/[0.12] transition-all duration-300">
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
