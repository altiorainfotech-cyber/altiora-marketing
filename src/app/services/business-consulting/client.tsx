"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import {
  Globe,
  CheckCircle,
  Eye,
  Users,
  TrendingUp,
  BarChart3,
  Target,
  Share2,
  Zap,
  ArrowRight,
  Briefcase,
  LineChart,
  PieChart,
  Layers,
  Settings,
  Search,
  Shield,
  Lightbulb,
  Compass,
  DollarSign,
  Building2,
  Handshake,
  Rocket,
  Award,
  Clock,
  ChartNoAxesCombined,
} from "lucide-react";
import {
  FaRocket,
  FaEye,
  FaCode,
  FaShieldAlt,
  FaNetworkWired,
  FaTools,
  FaHandshake,
  FaChartLine,
  FaLightbulb,
  FaCogs,
  FaBullseye,
  FaUsers,
  FaGlobe,
} from "react-icons/fa";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import styles from "../digital-marketing/dm.module.css";
import ServiceCard from "@/components/ServiceCard";
import ProcessTimeline from "@/components/ProcessTimeline";

// Consulting Area Card Component
const ConsultingAreaCard = ({ area, className }: { area: any; className?: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn("relative group cursor-pointer", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={`relative rounded-3xl p-6 md:p-8 border-2 transition-all duration-500 ${area.borderColor} ${area.bgGradient} backdrop-blur-sm overflow-hidden h-[480px] flex flex-col`}>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className={`absolute top-0 right-0 w-32 h-32 ${area.iconBg} rounded-full blur-3xl animate-pulse`} />
          <div className={`absolute bottom-0 left-0 w-24 h-24 ${area.iconBg} rounded-full blur-2xl animate-pulse`} style={{ animationDelay: '1s' }} />
        </div>

        {/* Area Icon */}
        <motion.div
          className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl ${area.iconBg} mb-6 relative z-10`}
        >
          <area.icon className={`w-8 h-8 md:w-10 md:h-10 ${area.iconColor}`} />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{area.name}</h3>
          <p className="text-white/80 text-base md:text-lg mb-4 leading-relaxed flex-1">{area.description}</p>

          {/* Stats */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-center">
              <div className={`text-2xl font-bold ${area.textColor}`}>{area.impact}</div>
              <div className="text-xs text-white/60">Avg. Impact</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${area.textColor}`}>{area.satisfaction}</div>
              <div className="text-xs text-white/60">Client Rating</div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {area.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className={`w-4 h-4 ${area.iconColor}`} />
                <span className="text-sm text-white/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hover Effect */}
        <motion.div
          className={`absolute inset-0 ${area.hoverGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}
        />
      </div>
    </motion.div>
  );
};

// Consulting Results Dashboard Component
const ConsultingDashboard = () => {
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    { label: "Revenue Growth", value: "47%", change: "+23% YoY", color: "text-blue-400", icon: TrendingUp },
    { label: "Cost Savings", value: "$2.1M", change: "+35% Avg", color: "text-green-400", icon: DollarSign },
    { label: "Efficiency Gains", value: "62%", change: "+18% Ops", color: "text-purple-400", icon: Settings },
    { label: "Client ROI", value: "4.8x", change: "+89% Avg", color: "text-yellow-400", icon: ChartNoAxesCombined }
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
          <h3 className="text-xl font-bold text-white">Consulting Impact</h3>
          <p className="text-white/60 text-sm">Average client results dashboard</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={index}
              className={`p-4 rounded-2xl border transition-all duration-500 ${activeMetric === index
                ? 'border-[#f4cc6f] bg-[#f4cc6f]/10'
                : 'border-white/10 bg-white/5'
                }`}
              animate={activeMetric === index ? { scale: 1.05 } : { scale: 1 }}
            >
              <Icon className={`w-5 h-5 text-white/70 mb-2`} />
              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-xs text-white/60 mb-1">{metric.label}</div>
              <div className={`text-xs font-semibold text-white/80`}>{metric.change}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default function BusinessConsultingClient() {
  const { ref: overviewRef, inView: overviewInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Why Choose slider autoplay
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const total = 6; // whyChoosePoints.length
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

  // Consulting Areas Data
  const consultingAreas = [
    {
      name: "Business Strategy",
      icon: Target,
      description: "Define clear strategic direction, competitive positioning, and long-term growth plans tailored to your market.",
      impact: "40%+",
      satisfaction: "4.9/5",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Market Analysis", "Competitive Intelligence", "Vision & Mission Alignment", "Strategic Roadmapping", "Goal Setting Frameworks", "Risk Assessment"]
    },
    {
      name: "Operational Excellence",
      icon: Settings,
      description: "Streamline workflows, eliminate bottlenecks, and build scalable systems that drive peak performance.",
      impact: "35%+",
      satisfaction: "4.8/5",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Process Optimization", "Workflow Automation", "Supply Chain Strategy", "Quality Management", "Resource Allocation", "KPI Dashboards"]
    },
    {
      name: "Financial Advisory",
      icon: DollarSign,
      description: "Optimize revenue models, manage costs strategically, and build financial resilience for sustainable growth.",
      impact: "$2M+",
      satisfaction: "4.9/5",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Revenue Optimization", "Cost Reduction Plans", "Financial Modeling", "Budget Planning", "Cash Flow Management", "Investment Strategy"]
    },
    {
      name: "Marketing & Growth",
      icon: TrendingUp,
      description: "Build data-driven marketing strategies that attract, convert, and retain high-value customers at scale.",
      impact: "3x ROI",
      satisfaction: "4.8/5",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Go-to-Market Strategy", "Brand Positioning", "Customer Acquisition", "Retention Strategy", "Funnel Optimization", "Market Expansion"]
    },
    {
      name: "Digital Transformation",
      icon: Globe,
      description: "Modernize your tech stack, integrate AI-powered tools, and future-proof your business with digital-first strategies.",
      impact: "55%+",
      satisfaction: "4.7/5",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Technology Roadmap", "AI & Automation", "Cloud Migration", "Data Analytics Setup", "CRM Implementation", "Digital Workflows"]
    },
    {
      name: "Leadership & Team",
      icon: Users,
      description: "Develop high-performing teams, strengthen leadership capacity, and build organizational culture that drives results.",
      impact: "60%+",
      satisfaction: "4.9/5",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Leadership Coaching", "Team Alignment", "Talent Strategy", "Culture Building", "Change Management", "Performance Systems"]
    }
  ];

  const services = [
    {
      title: <>Strategic <span className="text-[#f4cc6f]">Planning</span></>,
      description: "Comprehensive business strategy development with actionable roadmaps, milestone tracking, and measurable outcomes.",
      icon: <Target className="w-8 h-8 text-white" />,
      link: "/contact"
    },
    {
      title: <>Operational <span className="text-[#f4cc6f]">Improvement</span></>,
      description: "End-to-end process optimization, workflow automation, and systems design for maximum efficiency and scalability.",
      icon: <Settings className="w-8 h-8 text-white" />,
      link: "/contact"
    },
    {
      title: <>Financial <span className="text-[#f4cc6f]">Consulting</span></>,
      description: "Revenue model optimization, cost management strategies, and financial forecasting for sustainable profitability.",
      icon: <DollarSign className="w-8 h-8 text-white" />,
      link: "/contact"
    },
    {
      title: <>Growth <span className="text-[#f4cc6f]">Strategy</span></>,
      description: "Data-driven go-to-market plans, customer acquisition frameworks, and scalable growth engines built for your market.",
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      link: "/contact"
    },
    {
      title: <>Digital <span className="text-[#f4cc6f]">Transformation</span></>,
      description: "Technology adoption roadmaps, AI integration, cloud strategies, and digital workflow modernization for future readiness.",
      icon: <Globe className="w-8 h-8 text-white" />,
      link: "/contact"
    },
    {
      title: <>Performance Analytics & <span className="text-[#f4cc6f]">Reporting</span></>,
      description: "Custom KPI dashboards, performance tracking systems, and real-time insights for data-driven decision making.",
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      link: "/contact"
    },
  ];

  const whyChoosePoints = [
    {
      title: "Industry Expertise",
      description: "Deep domain knowledge across diverse industries — from startups and SaaS to manufacturing, healthcare, finance, and e-commerce — allows us to craft strategies that work within your specific market dynamics and competitive landscape.",
      icon: Award,
    },
    {
      title: "Proven Frameworks",
      description: "Battle-tested consulting methodologies and strategic frameworks adapted from leading global practices ensure every recommendation is grounded in proven patterns, not guesswork — delivering predictable, measurable outcomes for your business.",
      icon: Shield,
    },
    {
      title: "Data-Driven Decisions",
      description: "Every strategy we build is backed by rigorous market research, competitive analysis, financial modeling, and performance analytics — giving you the confidence to invest resources where they deliver the highest returns.",
      icon: BarChart3,
    },
    {
      title: "End-to-End Support",
      description: "We don't stop at strategy documents. Our team partners with you through implementation, execution, and optimization — providing hands-on guidance, progress reviews, and course corrections to ensure your plan delivers results.",
      icon: Handshake,
    },
    {
      title: "Scalable Solutions",
      description: "Our consulting engagements are designed to grow with your business. From lean startup advisory to enterprise-grade transformation programs, we scale our approach and resources to match your ambition and budget.",
      icon: Rocket,
    },
    {
      title: "Transparent Communication",
      description: "Regular progress updates, clear milestone tracking, and honest feedback define how we work. You'll always know exactly where things stand, what's working, and what needs adjustment — no surprises, no hidden agendas.",
      icon: Eye,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#010c22] text-[#F8FBFB] overflow-x-hidden w-full max-w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden text-white min-h-screen md:min-h-0 py-20 md:py-40 flex items-center md:block w-full max-w-full" style={{
        background: "radial-gradient(85% 60% at 28% 8%, rgba(76,131,255,.25), rgba(0,0,0,0))"
      }}>
        <div className="absolute inset-0" style={{ animation: "float 6s ease-in-out infinite", transformStyle: "preserve-3d" }}>
          <Image src="/images/services-bg/Business consultation.jpg.jpeg" alt="Business Consulting Services" fill priority className="object-cover" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-br from-blue-400/15 to-cyan-500/15 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-lg animate-ping" style={{ animationDuration: '4s' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="w-full max-w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center w-full max-w-full">
              <div className="lg:col-span-12 space-y-6 w-full max-w-full">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 text-xs tracking-wider text-white/90 backdrop-blur-sm">
                  <Briefcase className="w-4 h-4" />
                  ALTIORA INFOTECH
                </span>
                <h1 className="font-semibold tracking-tight text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  Business Consulting
                  <br />
                  Services
                </h1>
                <p className="text-xl sm:text-2xl text-white/90">
                  Strategic Guidance to Clarify Direction, Accelerate Growth & Maximize Results
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                  <Link href="/contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 focus:shadow-lg focus:shadow-[#f4cc6f]/25 focus:outline-none focus:ring-2 focus:ring-[#f4cc6f]/50 transition-all duration-300 transform hover:scale-105 focus:scale-105 w-[60%] sm:w-auto">
                    Book Free Strategy Call
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
                className="max-w-5xl mx-auto py-8 px-8 sm:py-12 sm:px-12 md:py-14 md:px-14 rounded-[40px] border border-white/5 bg-white/[0.02] backdrop-blur-xl shadow-[0_20px_50px_rgba(244,204,111,0.05)] relative overflow-hidden"
              >
                <p className={`${styles.sectionDescription} !max-w-none relative z-10 !text-white/90`}>
                  Growing a business today demands more than ambition — it takes clarity, strategy, and the ability to execute under pressure. At Altiora Infotech, our Business Consulting Services provide the strategic partnership you need to navigate market shifts, optimize operations, and unlock sustainable growth. We work alongside founders, leadership teams, and growing organizations to diagnose challenges, identify high-impact opportunities, and build actionable roadmaps that deliver measurable outcomes. Whether you&apos;re refining your go-to-market strategy, improving operational efficiency, or planning your next growth phase, our consultants bring deep industry expertise, proven frameworks, and hands-on execution support to help you move from uncertainty to confident action.
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

      {/* Consulting Areas Showcase */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              <span className="text-[#f4cc6f]">Consulting</span> Areas We Excel In
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Comprehensive consulting expertise across every critical dimension of your business — from strategy and operations to finance and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingAreas.map((area, index) => (
              <ConsultingAreaCard key={index} area={area} />
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Impact Dashboard */}
      <section className="py-20 px-6 bg-[#010b22]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Measurable Business Impact
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Our consulting engagements are built around measurable outcomes. Track the real impact of strategic decisions with clear KPIs, performance dashboards, and transparent progress reporting.
              </p>
              <div className="space-y-4">
                {[
                  "Revenue growth tracking and forecasting models",
                  "Operational efficiency scorecards and benchmarks",
                  "ROI analysis on strategic initiatives and investments",
                  "Real-time progress dashboards with milestone tracking"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#f4cc6f]" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <ConsultingDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-[#010b22]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-center">
              Our Business Consulting Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              End-to-end consulting solutions designed to solve your most pressing business challenges and drive sustained, scalable growth.
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

      {/* Why Choose Our Consulting */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Why Choose Our Business Consulting?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We combine deep industry expertise with hands-on execution to deliver consulting that creates lasting, measurable business impact.
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
                  <div
                    key={index}
                    className="group relative flex-shrink-0 w-[82vw] snap-start"
                  >
                    <div className="relative h-full p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0B0D2A] to-[#0B0D2A] shadow-xl hover:border-[#F4CC6F]/50 flex flex-col overflow-hidden">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center mb-5 flex-shrink-0 shadow-lg">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {point.title}
                      </h3>
                      <p className="text-base text-white/70 leading-relaxed flex-1">
                        {point.description}
                      </p>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#f4cc6f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {whyChoosePoints.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${activeSlide === index
                      ? "w-6 bg-[#f4cc6f]"
                      : "w-2 bg-white/30"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Process Timeline */}
      <ProcessTimeline
        title="Our Business Consulting Process"
        subtitle="A strategic, structured approach that takes your business from diagnosis to execution and measurable growth."
        steps={[
          {
            step: "01",
            title: "Discovery & Assessment",
            description: "Deep-dive into your business model, market position, operational workflows, and growth challenges through stakeholder interviews and data analysis.",
            icon: Search,
            color: "from-blue-500 to-cyan-500"
          },
          {
            step: "02",
            title: "Research & Analysis",
            description: "Conduct comprehensive market research, competitive benchmarking, financial analysis, and SWOT assessment to identify key opportunities and risks.",
            icon: BarChart3,
            color: "from-purple-500 to-pink-500"
          },
          {
            step: "03",
            title: "Strategy Development",
            description: "Craft a tailored strategic roadmap with clear priorities, actionable milestones, resource allocation plans, and measurable KPIs aligned to your goals.",
            icon: Target,
            color: "from-green-500 to-emerald-500"
          },
          {
            step: "04",
            title: "Implementation Support",
            description: "Hands-on guidance during execution — team alignment sessions, process rollouts, technology adoption, and change management support.",
            icon: Zap,
            color: "from-yellow-500 to-orange-500"
          },
          {
            step: "05",
            title: "Performance Monitoring",
            description: "Continuous KPI tracking, milestone reviews, progress reporting, and real-time adjustments to keep your strategy on track and delivering results.",
            icon: LineChart,
            color: "from-red-500 to-pink-500"
          },
          {
            step: "06",
            title: "Optimization & Growth",
            description: "Ongoing refinement of strategies, scaling of successful initiatives, and expansion planning to compound results and drive sustained long-term growth.",
            icon: TrendingUp,
            color: "from-indigo-500 to-purple-500"
          }
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
              Partner with business consulting experts who deliver strategic clarity and measurable outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { text: "Strategic Vision – We see the bigger picture and help you build a roadmap that connects daily decisions to long-term business goals.", icon: FaLightbulb },
              { text: "Measurable Results – Every engagement is anchored in clear KPIs, performance benchmarks, and ROI tracking from day one.", icon: FaChartLine },
              { text: "Industry Expertise – Deep experience across SaaS, e-commerce, healthcare, manufacturing, and professional services.", icon: FaGlobe },
              { text: "Hands-On Execution – We don't just advise — we partner with your team through implementation, coaching, and course correction.", icon: FaCogs },
              { text: "Scalable Frameworks – Proven methodologies adapted to your stage, size, and growth ambitions — startup to enterprise.", icon: FaRocket },
              { text: "Transparent Partnership – Clear communication, regular progress updates, and honest feedback at every step of the journey.", icon: FaHandshake }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              const colors = ['from-amber-500 to-orange-500', 'from-blue-500 to-cyan-500', 'from-green-500 to-emerald-500', 'from-red-500 to-orange-500', 'from-yellow-500 to-orange-500', 'from-teal-500 to-cyan-500'];
              const titles = ['Strategic', 'Measurable', 'Industry', 'Hands-On', 'Scalable', 'Transparent'];
              const subtitles = ['Vision', 'Results', 'Expertise', 'Execution', 'Frameworks', 'Partnership'];
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
              <Image src="/images/agentic-ai/cta/AI-Infrastructure-cta.png" alt="Business Consulting" fill className="object-cover rounded-3xl" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#010c22]/95 via-[#0a1038]/85 to-[#010c22]/95" />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-blue-500/10" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#f4cc6f]/20 to-[#e6b85c]/20 ring-2 ring-[#f4cc6f]/30 mb-8 mx-auto">
                <Briefcase className="w-10 h-10 text-[#f4cc6f]" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                Ready to Transform Your Business Strategy?
              </h3>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-6 md:mb-8">
                Stop navigating uncertainty alone. At Altiora Infotech, we partner with ambitious businesses to build clear, actionable strategies that drive real, measurable growth — from vision to execution.
              </p>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-8">
                Ready to unlock your business&apos;s full potential? Share your goals and challenges, and we&apos;ll create a comprehensive consulting roadmap: strategic priorities, operational improvements, growth opportunities, and a clear path to results.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link
                  href="https://calendly.com/altiorainfotech/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 focus:shadow-lg focus:shadow-[#f4cc6f]/25 focus:outline-none focus:ring-2 focus:ring-[#f4cc6f]/50 transition-all duration-300 transform hover:scale-105 focus:scale-105"
                >
                  <FaRocket className="mr-2 w-5 h-5" />
                  Book Strategy Call
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold border border-white/30 bg-white/[0.08] backdrop-blur-sm text-white hover:bg-white/[0.12] focus:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                >
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
          0%,100%{ transform: translateY(0px) rotateX(0deg) rotateY(0deg);} 
          50%{ transform: translateY(-20px) rotateX(5deg) rotateY(5deg);} 
        }
      `}</style>
    </div>
  );
}
