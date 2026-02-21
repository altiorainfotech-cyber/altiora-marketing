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
  Palette,
  PenTool,
  Layers,
  Package,
  Monitor,
  Printer,
  Clock,
  Star,
  Award,
  Repeat,
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

const DesignCategoryCard = ({ item, className }: { item: any; className?: string }) => {
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

const DesignMetricsWidget = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const metrics = [
    { label: "Design Turnaround", value: "48hrs", change: "Avg delivery", icon: Clock },
    { label: "Client Satisfaction", value: "98%", change: "5-star rating", icon: Star },
    { label: "Revision Rounds", value: "∞", change: "Until perfect", icon: Repeat },
    { label: "File Formats", value: "15+", change: "Delivered formats", icon: Layers },
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
          <Palette className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Design Standards</h3>
          <p className="text-white/60 text-sm">What every project delivers</p>
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

export default function GraphicDesignClientPage() {
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

  const designCategories = [
    {
      highlightedName: "Logo & Brand <span class='text-[#f4cc6f]'>Identity</span>",
      icon: Award,
      description: "Distinctive logos and complete brand identity systems that make your business instantly recognizable and unforgettable.",
      stat1: "500+",
      stat1Label: "Logos Designed",
      stat2: "98%",
      stat2Label: "Client Approval",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Logo Design", "Color Palette", "Typography System", "Brand Guidelines", "Icon Design", "Watermark"],
    },
    {
      highlightedName: "Social Media <span class='text-[#f4cc6f]'>Graphics</span>",
      icon: Monitor,
      description: "Platform-optimized visuals for Instagram, Facebook, LinkedIn, and TikTok that drive engagement and reinforce brand identity.",
      stat1: "10K+",
      stat1Label: "Graphics Created",
      stat2: "3x",
      stat2Label: "Engagement Boost",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Post Templates", "Story Graphics", "Carousel Designs", "Cover Photos", "Ad Creatives", "Highlight Icons"],
    },
    {
      highlightedName: "Marketing <span class='text-[#f4cc6f]'>Collateral</span>",
      icon: Layers,
      description: "Professional sales tools and marketing materials that elevate your brand perception and support every stage of your sales process.",
      stat1: "Print",
      stat1Label: "Ready Quality",
      stat2: "Multi",
      stat2Label: "Format Delivery",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Brochures", "Flyers", "Presentations", "Business Cards", "Banners", "Infographics"],
    },
    {
      highlightedName: "UI/UX <span class='text-[#f4cc6f]'>Design</span>",
      icon: PenTool,
      description: "User-centered interface designs for websites and apps that balance visual appeal with seamless, intuitive user experiences.",
      stat1: "UX",
      stat1Label: "Research-Led",
      stat2: "CRO",
      stat2Label: "Optimized",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Wireframes", "Prototypes", "Design Systems", "User Flows", "Mobile Design", "Accessibility"],
    },
    {
      highlightedName: "Print <span class='text-[#f4cc6f]'>Design</span>",
      icon: Printer,
      description: "High-resolution print-ready designs crafted for professional offset and digital printing with precise color management.",
      stat1: "300+",
      stat1Label: "DPI Resolution",
      stat2: "CMYK",
      stat2Label: "Color Mode",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Posters", "Catalogues", "Letterheads", "Envelopes", "Stickers", "Event Materials"],
    },
    {
      highlightedName: "Packaging <span class='text-[#f4cc6f]'>Design</span>",
      icon: Package,
      description: "Shelf-stopping packaging design that communicates product value, builds brand trust, and drives purchase decisions at the point of sale.",
      stat1: "Retail",
      stat1Label: "Ready Design",
      stat2: "3D",
      stat2Label: "Mockup Included",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Box Design", "Label Design", "Bag Design", "Tag Design", "3D Mockups", "Die-Cut Files"],
    },
  ];

  const services = [
    {
      title: <>Logo & Brand <span className="text-[#f4cc6f]">Identity</span></>,
      description: "Distinctive logos and complete brand identity systems designed to make your business instantly recognizable and memorable.",
      icon: <Award className="w-12 h-12" />,
      link: "/contact",
    },
    {
      title: <>Social Media <span className="text-[#f4cc6f]">Graphics</span></>,
      description: "Platform-optimized visuals that drive engagement, reinforce brand identity, and stop the scroll on every social network.",
      icon: <Monitor className="w-12 h-12" />,
      link: "/contact",
    },
    {
      title: <>Marketing <span className="text-[#f4cc6f]">Collateral</span></>,
      description: "Professional brochures, presentations, flyers, and sales tools that elevate your brand and support your entire sales process.",
      icon: <Layers className="w-12 h-12" />,
      link: "/contact",
    },
    {
      title: <>UI/UX <span className="text-[#f4cc6f]">Design</span></>,
      description: "User-centered website and app interfaces that balance stunning aesthetics with intuitive usability and conversion optimization.",
      icon: <PenTool className="w-12 h-12" />,
      link: "/contact",
    },
    {
      title: <>Print <span className="text-[#f4cc6f]">Design</span></>,
      description: "High-resolution print-ready artwork for posters, catalogs, signage, and all promotional printed materials your business needs.",
      icon: <Printer className="w-12 h-12" />,
      link: "/contact",
    },
    {
      title: <>Packaging <span className="text-[#f4cc6f]">Design</span></>,
      description: "Shelf-impact packaging that communicates product value, builds brand trust, and drives purchase decisions at the point of sale.",
      icon: <Package className="w-12 h-12" />,
      link: "/contact",
    },
  ];

  const whyChoosePoints = [
    {
      title: "Creative Excellence",
      description: "Every design is crafted with intention — balancing visual impact, brand alignment, and strategic communication to deliver designs that truly work.",
      icon: Palette,
    },
    {
      title: "Brand Consistency",
      description: "We build cohesive visual systems ensuring every touchpoint — digital or print — reflects a unified, professional brand identity your audience trusts.",
      icon: Layers,
    },
    {
      title: "Fast Turnaround",
      description: "Premium design delivered in 48–72 hours without compromising quality. We understand your deadlines and consistently deliver ahead of schedule.",
      icon: Zap,
    },
    {
      title: "Unlimited Revisions",
      description: "We refine until you're completely satisfied. No extra charges for revisions — we're committed to delivering exactly the design you envisioned.",
      icon: Repeat,
    },
    {
      title: "Multiple File Formats",
      description: "Receive your designs in every format needed — PNG, JPG, SVG, PDF, AI, EPS — ready for web, print, and social media use without extra steps.",
      icon: Package,
    },
    {
      title: "Commercial Rights",
      description: "Full commercial usage rights transferred to you upon delivery. Use your designs freely across all platforms, campaigns, and business applications.",
      icon: Award,
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
          <Image src="/images/services-bg/Graphic Design.jpg.jpeg" alt="Graphic Design Services" fill priority quality={100} className="object-cover" style={{ transform: "translateZ(0)", willChange: "transform", backfaceVisibility: "hidden" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="w-full max-w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center w-full max-w-full">
              <div className="lg:col-span-12 space-y-6 w-full max-w-full">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 text-xs tracking-wider text-white/90 backdrop-blur-sm">
                  <Palette className="w-4 h-4" />
                  ALTIORA INFOTECH
                </span>
                <h1 className="font-semibold tracking-tight text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  Graphic Design
                  <br />
                  Services
                </h1>
                <p className="text-xl sm:text-2xl text-white/90">
                  Creative Design That Connects, Converts & Communicates
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="w-[60%] sm:w-auto inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 focus:shadow-lg focus:shadow-[#f4cc6f]/25 focus:outline-none focus:ring-2 focus:ring-[#f4cc6f]/50 transition-all duration-300 transform hover:scale-105 focus:scale-105"
                  >
                    Start Your Design
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
                  Great design is more than aesthetics — it's communication. At Altiora Infotech, our Graphic Design Services transform your brand's visual identity into a powerful business asset that attracts attention, builds trust, and drives conversions. From logos and brand identity to social media graphics, marketing collateral, and packaging design, every visual we create is crafted with strategic intent. We design for impact — ensuring your brand looks premium, consistent, and unmistakably yours across every touchpoint.
                </p>
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#f4cc6f]/10 blur-[80px] rounded-full pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#f4cc6f]/5 blur-[120px] rounded-full pointer-events-none z-0" />
      </section>

      {/* Design Categories */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Design <span className="text-[#f4cc6f]">Specialties</span> We Master
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              From brand identity to packaging, we cover every visual touchpoint your business needs to look premium and professional.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designCategories.map((item, index) => (
              <DesignCategoryCard key={index} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section className="py-20 px-6 bg-[#010b22]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Design That Delivers Results
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Every design we create is built to perform — not just look good. We combine creative excellence with strategic thinking to produce visuals that attract attention, communicate your message clearly, and drive the action you need.
              </p>
              <div className="space-y-4">
                {[
                  "98% client satisfaction rate across 500+ design projects",
                  "48–72 hour turnaround without compromising quality",
                  "Unlimited revisions until you're completely satisfied",
                  "15+ file formats delivered for every project",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#f4cc6f]" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <DesignMetricsWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-[#010b22]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-center">
              Our Graphic Design Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Complete visual design solutions that build brand recognition and drive business growth across all channels.
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
              Why Choose Our Graphic Design?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We combine creative vision with strategic thinking to deliver designs that make your brand unforgettable.
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
        title="Our Graphic Design Process"
        subtitle="A structured creative process that ensures every design is strategically aligned, visually stunning, and delivered on time."
        steps={[
          { step: "01", title: "Brief & Discovery", description: "We deep-dive into your brand, goals, target audience, and design preferences to build a solid creative brief that guides the entire project.", icon: Target, color: "from-blue-500 to-cyan-500" },
          { step: "02", title: "Research & Concept", description: "We research your industry, competitors, and visual trends to develop unique creative concepts that position your brand distinctively.", icon: Eye, color: "from-purple-500 to-pink-500" },
          { step: "03", title: "Design & Creation", description: "Our designers craft your visuals with precision, applying brand strategy, color psychology, and typography expertise to every element.", icon: Palette, color: "from-green-500 to-emerald-500" },
          { step: "04", title: "Review & Feedback", description: "Present initial concepts for your review. We welcome detailed feedback and refine designs with unlimited rounds until it's exactly right.", icon: Layers, color: "from-yellow-500 to-orange-500" },
          { step: "05", title: "Revisions & Refinement", description: "Incorporate your feedback with precision, refining colors, typography, spacing, and layout until every detail meets your vision perfectly.", icon: Zap, color: "from-red-500 to-pink-500" },
          { step: "06", title: "Delivery & Handover", description: "Deliver final files in all required formats — web, print, and social — with full commercial usage rights and organized file structure.", icon: Package, color: "from-indigo-500 to-purple-500" },
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
              Partner with design experts who understand that great visuals drive real business results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { text: "Strategic Design – Every visual is created with a clear purpose aligned to your business and marketing goals.", icon: FaNetworkWired },
              { text: "Creative Expertise – Experienced designers who understand brand psychology, color theory, and visual communication.", icon: FaTools },
              { text: "Brand Consistency – We maintain strict visual consistency across all your brand touchpoints for maximum impact.", icon: FaCode },
              { text: "Quality Assurance – Multi-stage review process ensuring every design meets premium quality standards before delivery.", icon: FaShieldAlt },
              { text: "Fast Delivery – 48–72 hour turnaround with no compromise on quality, so you're never waiting long.", icon: FaRocket },
              { text: "Full Ownership – Complete commercial rights and all source files transferred to you upon project completion.", icon: FaHandshake },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              const colors = ["from-pink-500 to-purple-500", "from-blue-500 to-cyan-500", "from-green-500 to-emerald-500", "from-red-500 to-orange-500", "from-yellow-500 to-orange-500", "from-teal-500 to-cyan-500"];
              const titles = ["Strategic", "Creative", "Brand", "Quality", "Fast", "Full"];
              const subtitles = ["Design", "Expertise", "Consistency", "Assurance", "Delivery", "Ownership"];
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
              <Image src="/images/agentic-ai/cta/AI-Infrastructure-cta.png" alt="Graphic Design Services" fill className="object-cover rounded-3xl" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#010c22]/95 via-[#0a1038]/85 to-[#010c22]/95" />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#f4cc6f]/20 to-[#e6b85c]/20 ring-2 ring-[#f4cc6f]/30 mb-8 mx-auto">
                <Palette className="w-10 h-10 text-[#f4cc6f]" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                Ready to Elevate Your Visual Brand?
              </h3>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-6 md:mb-8">
                Transform how the world sees your business with premium graphic design that communicates your value instantly. At Altiora Infotech, we create designs that make your brand look as good as it performs.
              </p>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-8">
                Share your design requirements and brand details, and we'll deliver a comprehensive creative proposal with concepts, timeline, and investment details.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link href="https://calendly.com/altiorainfotech/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 transition-all duration-300 transform hover:scale-105">
                  <FaRocket className="mr-2 w-5 h-5" />
                  Book Design Consultation
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
