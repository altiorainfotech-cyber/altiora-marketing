"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import {
  Globe,
  CheckCircle,
  TrendingUp,
  BarChart3,
  Target,
  Users,
  Heart,
  MessageCircle,
  Share2,
  Camera,
  ArrowRight,
  Star,
  Clock,
  Zap,
  Settings,
  FileText,
  Play,
  Monitor,
  Search,
  Shield,
  ShoppingCart
} from "lucide-react";
import {
  FaRocket,
  FaEye,
  FaChartLine,
  FaBullseye,
  FaCog,
  FaHandshake,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
  FaUsers,
  FaHeart,
  FaShare
} from "react-icons/fa";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import styles from "../services/digital-marketing/dm.module.css";
import ServiceCard from "@/components/ServiceCard";
import ProcessTimeline from "@/components/ProcessTimeline";

// SMM Metrics Dashboard Component
const SMMDashboard = () => {
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    { label: "Followers Growth", value: "+45K", change: "+234%", color: "text-green-400", icon: Users },
    { label: "Engagement Rate", value: "8.9%", change: "+156%", color: "text-blue-400", icon: Heart },
    { label: "Reach", value: "2.3M", change: "+189%", color: "text-purple-400", icon: TrendingUp },
    { label: "Conversions", value: "1,234", change: "+89%", color: "text-yellow-400", icon: Target }
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
          <h3 className="text-xl font-bold text-white">SMM Performance</h3>
          <p className="text-white/60 text-sm">Real-time social media metrics</p>
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

// Social Platform Card Component
const SocialPlatformCard = ({ platform, className }: { platform: any; className?: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn("relative group cursor-pointer", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={`relative rounded-3xl p-6 md:p-8 border-2 transition-all duration-500 ${platform.borderColor} ${platform.bgGradient} backdrop-blur-sm overflow-hidden h-[380px] flex flex-col`}>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className={`absolute top-0 right-0 w-32 h-32 ${platform.iconBg} rounded-full blur-3xl animate-pulse`} />
          <div className={`absolute bottom-0 left-0 w-24 h-24 ${platform.iconBg} rounded-full blur-2xl animate-pulse`} style={{ animationDelay: '1s' }} />
        </div>

        {/* Platform Icon */}
        <motion.div
          className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl ${platform.iconBg} mb-6 relative z-10`}
        >
          <platform.icon className={`w-8 h-8 md:w-10 md:h-10 ${platform.iconColor}`} />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3" dangerouslySetInnerHTML={{ __html: platform.highlightedName }} />
          <p className="text-white/80 text-base md:text-lg mb-4 leading-relaxed flex-1">{platform.description}</p>

          {/* Stats */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-center">
              <div className={`text-2xl font-bold ${platform.textColor}`}>{platform.engagement}</div>
              <div className="text-xs text-white/60">Avg Engagement</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${platform.textColor}`}>{platform.reach}</div>
              <div className="text-xs text-white/60">Reach</div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {platform.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className={`w-4 h-4 ${platform.iconColor}`} />
                <span className="text-sm text-white/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hover Effect */}
        <motion.div
          className={`absolute inset-0 ${platform.hoverGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}
        />
      </div>
    </motion.div>
  );
};

export default function SocialMediaMarketingClient() {
  const { ref: overviewRef, inView: overviewInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Social Platforms Data
  const socialPlatforms = [
    {
      name: "Facebook Marketing",
      highlightedName: "Facebook <span class='text-[#f4cc6f]'>Marketing</span>",
      icon: FaFacebook,
      description: "Build communities and drive engagement with strategic Facebook marketing campaigns and content strategies.",
      engagement: "6.4%",
      reach: "2.3M",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Page Management", "Content Creation", "Community Building", "Facebook Ads Integration", "Event Promotion", "Messenger Marketing"]
    },
    {
      name: "Instagram Marketing",
      highlightedName: "Instagram <span class='text-[#f4cc6f]'>Marketing</span>",
      icon: FaInstagram,
      description: "Create visually stunning content and build brand awareness through strategic Instagram marketing campaigns.",
      engagement: "8.9%",
      reach: "1.8M",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Visual Content", "Stories & Reels", "Influencer Partnerships", "Hashtag Strategy", "IGTV Content", "Shopping Tags"]
    },
    {
      name: "LinkedIn Marketing",
      highlightedName: "LinkedIn <span class='text-[#f4cc6f]'>Marketing</span>",
      icon: FaLinkedin,
      description: "Build professional networks and generate B2B leads through strategic LinkedIn marketing and thought leadership.",
      engagement: "4.2%",
      reach: "890K",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Professional Content", "Thought Leadership", "B2B Lead Generation", "Company Page Optimization", "LinkedIn Articles", "Network Building"]
    },
    {
      name: "YouTube Marketing",
      highlightedName: "YouTube <span class='text-[#f4cc6f]'>Marketing</span>",
      icon: FaYoutube,
      description: "Create engaging video content and build subscriber communities through strategic YouTube marketing campaigns.",
      engagement: "12.3%",
      reach: "3.2M",
      borderColor: "border-gray-500/30",
      bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
      iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
      iconColor: "text-white",
      textColor: "text-gray-300",
      hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
      features: ["Video Content Creation", "Channel Optimization", "Subscriber Growth", "YouTube SEO", "Shorts Strategy", "Live Streaming"]
    }
  ];

  const services = [
    {
      title: "Social Media Strategy Development",
      description: "Comprehensive social media strategy planning with platform selection and content roadmap development.",
      icon: <FaBullseye className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Content Creation & Curation",
      description: "High-quality visual and written content creation tailored for each social media platform and audience.",
      icon: <Camera className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Community Management",
      description: "Active community engagement, response management, and relationship building across all social platforms.",
      icon: <FaUsers className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Social Media Advertising",
      description: "Targeted social media ad campaigns with audience segmentation and conversion optimization.",
      icon: <Target className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Influencer Marketing",
      description: "Strategic influencer partnerships and collaboration campaigns for expanded reach and credibility.",
      icon: <Users className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Social Media Analytics",
      description: "Comprehensive performance tracking, engagement analysis, and ROI measurement across all platforms.",
      icon: <BarChart3 className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Brand Reputation Management",
      description: "Proactive brand monitoring, reputation management, and crisis communication strategies.",
      icon: <Shield className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Video Content Marketing",
      description: "Engaging video content creation for social platforms including stories, reels, and long-form content.",
      icon: <Play className="w-12 h-12" />,
      link: "/contact"
    },
    {
      title: "Social Commerce Integration",
      description: "Social shopping setup and optimization for direct sales through social media platforms.",
      icon: <ShoppingCart className="w-12 h-12" />,
      link: "/contact"
    }
  ];

  const mobileServices = [
    {
      title: "Strategy Development",
      icon: <FaBullseye className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Content Creation",
      icon: <Camera className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Community Management",
      icon: <FaUsers className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Social Advertising",
      icon: <Target className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Influencer Marketing",
      icon: <Users className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Analytics & Reporting",
      icon: <BarChart3 className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Reputation Management",
      icon: <Shield className="w-8 h-8 text-[#f4cc6f]" />
    },
    {
      title: "Video Content",
      icon: <Play className="w-8 h-8 text-[#f4cc6f]" />
    }
  ];

  const whyChoosePoints = [
    "Creative content strategies that build authentic brand communities and drive engagement",
    "Multi-platform expertise across all major social media channels and emerging platforms",
    "Data-driven approach with comprehensive analytics and performance optimization",
    "Experienced community management with proactive engagement and relationship building",
    "Integrated social commerce solutions for direct sales and revenue generation",
    "Transparent reporting with detailed insights and actionable recommendations",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#010c22] text-[#F8FBFB] overflow-x-hidden w-full max-w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden text-white py-20 md:py-40 w-full max-w-full" style={{
        background: "radial-gradient(85% 60% at 28% 8%, rgba(76,131,255,.25), rgba(0,0,0,0))"
      }}>
        <div className="absolute inset-0" style={{ animation: "float 6s ease-in-out infinite", transformStyle: "preserve-3d" }}>
          <Image src="https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Blockchain_Development_Services-1_bsu3hu.png" alt="Social Media Marketing" fill priority className="object-cover" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-br from-blue-400/15 to-cyan-500/15 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-full blur-lg animate-ping" style={{ animationDuration: '4s' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="w-full max-w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center w-full max-w-full">
              <div className="lg:col-span-12 space-y-6 w-full max-w-full">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 text-xs tracking-wider text-white/90 backdrop-blur-sm">
                  <Share2 className="w-4 h-4" />
                  ALTIORA INFOTECH
                </span>
                <h1 className="font-semibold tracking-tight text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  Social Media Management
                  <br />
                  <span className="text-[#f4cc6f]">SMM Services</span>
                </h1>
                <p className="text-xl sm:text-2xl text-white/90">
                  Build brand awareness and engage your audience with strategic social media management.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                  <Link href="/contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 focus:shadow-lg focus:shadow-[#f4cc6f]/25 focus:outline-none focus:ring-2 focus:ring-[#f4cc6f]/50 transition-all duration-300 transform hover:scale-105 focus:scale-105">
                    Get Started
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
                  Build meaningful customer relationships and grow your brand where conversations happen every day. Our Social Media Management Services help you create authentic engagement, strengthen brand trust, and build loyal online communities. At Altiora Infotech, we combine creative storytelling with data-driven strategy to keep your brand visible, relevant, and consistently engaging. From brand awareness to long-term customer loyalty, we turn social presence into measurable business value.
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

      {/* Social Platforms Showcase */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Social Platforms We <span className="text-[#f4cc6f]">Master</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Build authentic communities and drive engagement across all major social media platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {socialPlatforms.map((platform, index) => (
              <SocialPlatformCard key={index} platform={platform} />
            ))}
          </div>
        </div>
      </section>

      {/* SMM Performance Dashboard */}
      <section className="py-20 px-6 bg-[#010b22]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Real-Time SMM <span className="text-[#f4cc6f]">Performance</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Track your social media success with our comprehensive analytics dashboard. Monitor engagement, reach, and conversions across all platforms in real-time.
              </p>
              <div className="space-y-4">
                {[
                  "Live engagement tracking across all social media platforms",
                  "Audience growth and demographic analysis with insights",
                  "Content performance optimization and trending analysis",
                  "Social commerce tracking and conversion measurement"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#f4cc6f]" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SMMDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-[#010b22]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-center">
              Our Social Media Management <span className="text-[#f4cc6f]">Services</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Comprehensive SMM solutions designed to build communities and drive meaningful engagement.
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
                />
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="block md:hidden">
            <div className="grid grid-cols-1 gap-4">
              {mobileServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description="Comprehensive social media solution"
                  icon={service.icon}
                  link="/contact"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our SMM Services */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Why Choose Our <span className="text-[#f4cc6f]">SMM Services?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We combine creative storytelling with data-driven strategies to build authentic communities that drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoosePoints.map((point, index) => {
              const icons = [Camera, Globe, BarChart3, FaUsers, Target, Clock];
              const Icon = icons[index];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 hover:-translate-y-2 h-[200px] flex flex-col">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-500/10 to-gray-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 flex-1 flex flex-col">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-[#f4cc6f]" />
                      </div>

                      <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300 flex-1">
                        {point}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SMM Process Timeline */}
      <ProcessTimeline
        title="Our Social Media Management <span class='text-[#f4cc6f]'>Process</span>"
        subtitle="A strategic approach that transforms your social presence into a powerful brand community and engagement engine."
        steps={[
          {
            step: "01",
            title: "Social Media Audit",
            description: "Comprehensive analysis of current social presence, competitor research, and audience insights for strategic foundation.",
            icon: Search,
            color: "from-blue-500 to-cyan-500"
          },
          {
            step: "02",
            title: "Strategy & Planning",
            description: "Development of comprehensive social media strategy with platform selection, content themes, and posting schedules.",
            icon: Target,
            color: "from-green-500 to-emerald-500"
          },
          {
            step: "03",
            title: "Content Creation",
            description: "High-quality visual and written content creation tailored for each platform and optimized for engagement.",
            icon: Camera,
            color: "from-purple-500 to-pink-500"
          },
          {
            step: "04",
            title: "Community Management",
            description: "Active community engagement, response management, and relationship building across all social platforms.",
            icon: Users,
            color: "from-yellow-500 to-orange-500"
          },
          {
            step: "05",
            title: "Performance Monitoring",
            description: "Real-time engagement tracking, audience analysis, and content performance optimization for maximum impact.",
            icon: BarChart3,
            color: "from-red-500 to-pink-500"
          },
          {
            step: "06",
            title: "Growth & Optimization",
            description: "Strategic scaling, influencer partnerships, and continuous optimization for sustained community growth.",
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
              Why Work With Altiora <span className="text-[#f4cc6f]">Infotech?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Partner with social media marketing experts who build authentic communities and drive meaningful engagement that converts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { text: "Creative Excellence – Award-winning creative team that produces engaging content and campaigns that resonate with your target audience.", icon: Camera },
              { text: "Community Building – Expert community management and engagement strategies that build loyal brand advocates and drive organic growth.", icon: FaUsers },
              { text: "Multi-Platform Mastery – Deep expertise across all major social media platforms with platform-specific strategies and best practices.", icon: Globe },
              { text: "Data-Driven Insights – Advanced social media analytics and performance tracking to optimize content and maximize engagement ROI.", icon: BarChart3 },
              { text: "Authentic Storytelling – Strategic brand storytelling that creates emotional connections and drives meaningful customer relationships.", icon: Heart },
              { text: "Scalable Growth – Proven methodologies for scaling social media presence while maintaining authentic engagement and brand voice.", icon: FaHandshake }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              const colors = ['from-pink-500 to-purple-500', 'from-blue-500 to-cyan-500', 'from-green-500 to-emerald-500', 'from-yellow-500 to-orange-500', 'from-red-500 to-pink-500', 'from-indigo-500 to-purple-500'];
              const titles = ['Creative', 'Community', 'Multi-Platform', 'Data-Driven', 'Authentic', 'Scalable'];
              const subtitles = ['Excellence', 'Building', 'Mastery', 'Insights', 'Storytelling', 'Growth'];
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
              <Image src="https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/Blockchain_Development_Services-2_n1k5oc.png" alt="Social Media Marketing" fill className="object-cover rounded-3xl" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#010c22]/95 via-[#0a1038]/85 to-[#010c22]/95" />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#f4cc6f]/20 to-[#e6b85c]/20 ring-2 ring-[#f4cc6f]/30 mb-8 mx-auto">
                <Share2 className="w-10 h-10 text-[#f4cc6f]" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                Ready to Build Your Social Media Community?
              </h3>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-6 md:mb-8">
                Transform your social media presence into a thriving community. At Altiora Infotech, we combine creative storytelling with strategic planning to build authentic relationships that drive business growth.
              </p>
              <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-8">
                Ready to amplify your brand? Share your social media goals and current challenges, and we&apos;ll create a comprehensive SMM strategy: content calendar, platform optimization, community building, and growth roadmap.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link
                  href="https://calendly.com/altiorainfotech/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 focus:shadow-lg focus:shadow-[#f4cc6f]/25 focus:outline-none focus:ring-2 focus:ring-[#f4cc6f]/50 transition-all duration-300 transform hover:scale-105 focus:scale-105"
                >
                  <FaRocket className="mr-2 w-5 h-5" />
                  Book SMM Consultation
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold border border-white/30 bg-white/[0.08] backdrop-blur-sm text-white hover:bg-white/[0.12] focus:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                >
                  <FaEye className="mr-2 w-5 h-5" />
                  Get SMM Quote
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