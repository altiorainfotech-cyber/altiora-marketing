"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import {
    CheckCircle,
    Eye,
    Users,
    TrendingUp,
    BarChart3,
    Target,
    Zap,
    Shield,
    Layers,
    Globe,
    Smartphone,
    Settings,
    Code,
    Star,
    Award,
    Rocket,
    LineChart,
    Search,
    Handshake,
    MonitorSmartphone,
    Cpu,
    RefreshCw,
} from "lucide-react";
import {
    FaRocket,
    FaEye,
    FaApple,
    FaAndroid,
    FaReact,
    FaShieldAlt,
    FaNetworkWired,
    FaTools,
    FaHandshake,
    FaMobileAlt,
    FaCode,
    FaCloudUploadAlt,
} from "react-icons/fa";
import { SiFlutter, SiFirebase, SiKotlin, SiSwift } from "react-icons/si";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import styles from "../digital-marketing/dm.module.css";
import ServiceCard from "@/components/ServiceCard";
import ProcessTimeline from "@/components/ProcessTimeline";

// Platform Card Component
const PlatformCard = ({ platform, className }: { platform: any; className?: string }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className={cn("relative group cursor-pointer", className)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className={`relative rounded-3xl p-6 md:p-8 border-2 transition-all duration-500 ${platform.borderColor} ${platform.bgGradient} backdrop-blur-sm overflow-hidden h-[480px] flex flex-col`}>
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className={`absolute top-0 right-0 w-32 h-32 ${platform.iconBg} rounded-full blur-3xl animate-pulse`} />
                    <div className={`absolute bottom-0 left-0 w-24 h-24 ${platform.iconBg} rounded-full blur-2xl animate-pulse`} style={{ animationDelay: "1s" }} />
                </div>

                {/* Platform Icon */}
                <motion.div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl ${platform.iconBg} mb-6 relative z-10`}>
                    <platform.icon className={`w-8 h-8 md:w-10 md:h-10 ${platform.iconColor}`} />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{platform.name}</h3>
                    <p className="text-white/80 text-base md:text-lg mb-4 leading-relaxed flex-1">{platform.description}</p>

                    {/* Stats */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-center">
                            <div className={`text-2xl font-bold ${platform.textColor}`}>{platform.stat1}</div>
                            <div className="text-xs text-white/60">{platform.stat1Label}</div>
                        </div>
                        <div className="text-center">
                            <div className={`text-2xl font-bold ${platform.textColor}`}>{platform.stat2}</div>
                            <div className="text-xs text-white/60">{platform.stat2Label}</div>
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
                <motion.div className={`absolute inset-0 ${platform.hoverGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`} />
            </div>
        </motion.div>
    );
};

// App Performance Dashboard
const AppDashboard = () => {
    const [activeMetric, setActiveMetric] = useState(0);

    const metrics = [
        { label: "Apps Delivered", value: "150+", change: "On Time", color: "text-blue-400", icon: Smartphone },
        { label: "Avg Rating", value: "4.8★", change: "App Stores", color: "text-green-400", icon: Star },
        { label: "Retention Rate", value: "87%", change: "+12% Avg", color: "text-purple-400", icon: RefreshCw },
        { label: "Client ROI", value: "3.6x", change: "Avg Return", color: "text-yellow-400", icon: TrendingUp },
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
                    <h3 className="text-xl font-bold text-white">App Performance</h3>
                    <p className="text-white/60 text-sm">Real-time delivery & quality dashboard</p>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {metrics.map((metric, index) => {
                    const Icon = metric.icon;
                    return (
                        <motion.div
                            key={index}
                            className={`p-4 rounded-2xl border transition-all duration-500 ${activeMetric === index ? "border-[#f4cc6f] bg-[#f4cc6f]/10" : "border-white/10 bg-white/5"
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

export default function MobileAppDevelopmentClient() {
    const { ref: overviewRef, inView: overviewInView } = useInView({ threshold: 0.1, triggerOnce: true });

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

    const platforms = [
        {
            name: "iOS App Development",
            icon: FaApple,
            description: "Native iOS apps built with Swift and SwiftUI — delivering buttery-smooth performance, beautiful interfaces, and seamless App Store distribution.",
            stat1: "2B+",
            stat1Label: "iOS Devices",
            stat2: "4.9★",
            stat2Label: "Avg Rating",
            borderColor: "border-gray-500/30",
            bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
            iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
            iconColor: "text-white",
            textColor: "text-gray-300",
            hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
            features: ["Swift & SwiftUI", "ARKit Integration", "Apple Pay", "Push Notifications", "Core Data", "App Store Launch"],
        },
        {
            name: "Android App Development",
            icon: FaAndroid,
            description: "High-performance Android apps using Kotlin and Jetpack Compose — reaching billions of users across every device, screen size, and Android version.",
            stat1: "3B+",
            stat1Label: "Android Users",
            stat2: "4.8★",
            stat2Label: "Avg Rating",
            borderColor: "border-gray-500/30",
            bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
            iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
            iconColor: "text-white",
            textColor: "text-gray-300",
            hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
            features: ["Kotlin & Jetpack", "Google Pay Integration", "Firebase Backend", "Offline-First Design", "Material Design 3", "Play Store Launch"],
        },
        {
            name: "React Native Development",
            icon: FaReact,
            description: "Cross-platform apps with a single codebase — delivering native-like experiences on both iOS and Android at a fraction of the cost and timeline.",
            stat1: "60%",
            stat1Label: "Faster Delivery",
            stat2: "1 Codebase",
            stat2Label: "2 Platforms",
            borderColor: "border-gray-500/30",
            bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
            iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
            iconColor: "text-white",
            textColor: "text-gray-300",
            hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
            features: ["Shared Codebase", "Native Modules", "Hot Reloading", "Third-Party APIs", "Expo Framework", "OTA Updates"],
        },
        {
            name: "Flutter Development",
            icon: SiFlutter,
            description: "Pixel-perfect cross-platform apps with Flutter and Dart — one codebase for iOS, Android, Web, and Desktop with blazing-fast rendering.",
            stat1: "120fps",
            stat1Label: "Rendering Speed",
            stat2: "99%",
            stat2Label: "Code Shared",
            borderColor: "border-gray-500/30",
            bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
            iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
            iconColor: "text-white",
            textColor: "text-gray-300",
            hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
            features: ["Dart Language", "Custom UI Widgets", "State Management", "Firebase Integration", "Adaptive Layouts", "Web & Desktop Support"],
        },
        {
            name: "Backend & API Development",
            icon: FaCloudUploadAlt,
            description: "Scalable, secure cloud backends — RESTful and GraphQL APIs, real-time databases, authentication, and cloud infrastructure powering your app.",
            stat1: "99.9%",
            stat1Label: "Uptime SLA",
            stat2: "<50ms",
            stat2Label: "API Response",
            borderColor: "border-gray-500/30",
            bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
            iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
            iconColor: "text-white",
            textColor: "text-gray-300",
            hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
            features: ["REST & GraphQL APIs", "Node.js / Python", "AWS / GCP / Azure", "Real-Time Sockets", "Auth & Security", "CI/CD Pipelines"],
        },
        {
            name: "UI/UX Design for Mobile",
            icon: MonitorSmartphone,
            description: "Intuitive, conversion-focused mobile designs — from wireframes and user flows to polished high-fidelity prototypes that users love to use.",
            stat1: "40%",
            stat1Label: "Higher Retention",
            stat2: "98%",
            stat2Label: "Client Approval",
            borderColor: "border-gray-500/30",
            bgGradient: "bg-gradient-to-br from-gray-800/20 to-gray-700/20",
            iconBg: "bg-gradient-to-br from-gray-600 to-gray-700",
            iconColor: "text-white",
            textColor: "text-gray-300",
            hoverGradient: "bg-gradient-to-br from-gray-600 to-gray-700",
            features: ["User Research", "Wireframing", "Figma Prototypes", "Usability Testing", "Design Systems", "Accessibility (WCAG)"],
        },
    ];

    const services = [
        {
            title: <>iOS App <span className="text-[#f4cc6f]">Development</span></>,
            description: "Native Swift & SwiftUI apps built for performance, elegance, and flawless App Store submission with full Apple ecosystem integration.",
            icon: <FaApple className="w-8 h-8 text-white" />,
            link: "/contact",
        },
        {
            title: <>Android App <span className="text-[#f4cc6f]">Development</span></>,
            description: "Kotlin-powered Android apps optimized across all screen sizes, with Material Design 3 and seamless Google Play Store deployment.",
            icon: <FaAndroid className="w-8 h-8 text-white" />,
            link: "/contact",
        },
        {
            title: <>Cross-Platform <span className="text-[#f4cc6f]">Development</span></>,
            description: "React Native and Flutter solutions that deliver native-quality experiences on both platforms from a single, maintainable codebase.",
            icon: <FaMobileAlt className="w-8 h-8 text-white" />,
            link: "/contact",
        },
        {
            title: <>Mobile UI/UX <span className="text-[#f4cc6f]">Design</span></>,
            description: "Research-driven mobile design with wireframes, interactive prototypes, and pixel-perfect UI that maximizes usability and user retention.",
            icon: <MonitorSmartphone className="w-8 h-8 text-white" />,
            link: "/contact",
        },
        {
            title: <>Backend & API <span className="text-[#f4cc6f]">Integration</span></>,
            description: "Scalable cloud backends, RESTful and GraphQL APIs, real-time features, and secure authentication systems to power your mobile app.",
            icon: <FaCloudUploadAlt className="w-8 h-8 text-white" />,
            link: "/contact",
        },
        {
            title: <>App Maintenance & <span className="text-[#f4cc6f]">Support</span></>,
            description: "Ongoing performance monitoring, OS update compatibility, bug fixes, feature enhancements, and analytics-driven optimization post-launch.",
            icon: <BarChart3 className="w-8 h-8 text-white" />,
            link: "/contact",
        },
    ];

    const whyChoosePoints = [
        {
            title: "Full-Stack Mobile Expertise",
            description: "From native iOS/Android to cross-platform React Native and Flutter — our engineers cover every mobile technology stack with deep, production-grade expertise built across 150+ delivered apps in diverse industries.",
            icon: Cpu,
        },
        {
            title: "Performance-First Engineering",
            description: "Every app we build is optimized for speed, battery efficiency, and smooth 60–120fps interactions. We conduct rigorous performance profiling to ensure your app feels instantly responsive on every device.",
            icon: Zap,
        },
        {
            title: "Security by Design",
            description: "Enterprise-grade security baked in from day one — encrypted data storage, secure API communication, OWASP compliance, biometric authentication, and regular vulnerability assessments to protect your users.",
            icon: Shield,
        },
        {
            title: "User-Centered Design",
            description: "Our design process starts with user research, not assumptions. We build intuitive flows, accessible interfaces, and delightful micro-interactions that drive engagement, retention, and 5-star reviews.",
            icon: Users,
        },
        {
            title: "Agile Delivery & Transparency",
            description: "Two-week sprint cycles, live progress demos, shared project dashboards, and clear milestone tracking ensure you always know exactly where your app stands — no surprises at launch.",
            icon: TrendingUp,
        },
        {
            title: "Post-Launch Partnership",
            description: "We don't disappear after go-live. Our team handles OS updates, App Store optimizations, performance monitoring, feature rollouts, and analytics-driven improvements to keep your app competitive long-term.",
            icon: Handshake,
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
                    <Image src="/images/services-bg/Mobile Application Development-1.jpg.jpeg" alt="Mobile App Development" fill priority quality={100} className="object-cover" style={{ transform: "translateZ(0)", willChange: "transform", backfaceVisibility: "hidden" }} />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
                    <div className="w-full max-w-full">
                        <div className="grid lg:grid-cols-12 gap-12 items-center w-full max-w-full">
                            <div className="lg:col-span-12 space-y-6 w-full max-w-full">
                                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 text-xs tracking-wider text-white/90 backdrop-blur-sm">
                                    <Smartphone className="w-4 h-4" />
                                    ALTIORA INFOTECH
                                </span>
                                <h1 className="font-semibold tracking-tight text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl text-white">
                                    Mobile App
                                    <br />
                                    Development
                                </h1>
                                <p className="text-xl sm:text-2xl text-white/90">
                                    Build Powerful, High-Performance Mobile Apps That Users Love
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 focus:shadow-lg focus:shadow-[#f4cc6f]/25 focus:outline-none focus:ring-2 focus:ring-[#f4cc6f]/50 transition-all duration-300 transform hover:scale-105 focus:scale-105 w-[60%] sm:w-auto"
                                    >
                                        Start Your App
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
                                    In a mobile-first world, your app is often the first — and most important — touchpoint between your business and your customers. At Altiora Infotech, we design and develop native iOS, Android, and cross-platform mobile applications that combine engineering excellence with exceptional user experience. From early-stage startups launching their first MVP to established enterprises modernizing legacy platforms, our end-to-end mobile development process covers strategy, design, development, QA, launch, and ongoing optimization. We build apps that don&apos;t just look great — they perform beautifully, scale reliably, and drive measurable business results from day one.
                                </p>
                                <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#f4cc6f]/10 blur-[80px] rounded-full pointer-events-none" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[#f4cc6f]/5 blur-[120px] rounded-full pointer-events-none z-0" />
            </section>

            {/* Platforms & Technologies Showcase */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                            <span className="text-[#f4cc6f]">Platforms</span> & Technologies We Master
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                            From native platforms to cross-platform frameworks — we choose the right technology for your goals, users, and budget.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {platforms.map((platform, index) => (
                            <PlatformCard key={index} platform={platform} />
                        ))}
                    </div>
                </div>
            </section>

            {/* App Performance Dashboard */}
            <section className="py-20 px-6 bg-[#010b22]/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                                Proven Results Across Every App
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                                We measure success by the real-world impact of the apps we build — from App Store ratings and user retention to revenue growth and ROI for our clients.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "4.8+ average App Store & Play Store rating across all launched apps",
                                    "87% average user retention rate at 30 days post-launch",
                                    "Avg. 3.6x ROI for clients within the first year of app launch",
                                    "Transparent milestone tracking and live sprint progress dashboards",
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#f4cc6f]" />
                                        <span className="text-white/90">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <AppDashboard />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-6 bg-[#010b22]/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-center">
                            Our Mobile App Development Services
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                            End-to-end mobile app development solutions — from concept and design to deployment, scaling, and ongoing improvement.
                        </p>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:block">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} link={service.link} hideServiceTag={true} iconVariant="gray" />
                            ))}
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="block md:hidden">
                        <div className="grid grid-cols-1 gap-4">
                            {services.map((service, index) => (
                                <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} link={service.link} hideServiceTag={true} iconVariant="gray" />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Our Mobile App Development */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                            Why Choose Our Mobile App Development?
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                            We combine technical depth, user-centered design, and agile execution to build mobile apps that stand out in crowded app stores and deliver lasting business value.
                        </p>
                    </div>

                    {/* Desktop Grid */}
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
                                <div key={index} className={`h-2 rounded-full transition-all duration-300 ${activeSlide === index ? "w-6 bg-[#f4cc6f]" : "w-2 bg-white/30"}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* App Development Process Timeline */}
            <ProcessTimeline
                title="Our Mobile App Development Process"
                subtitle="A proven, agile-driven process that takes your idea from concept to a polished, market-ready app — on time and on budget."
                steps={[
                    {
                        step: "01",
                        title: "Discovery & Strategy",
                        description: "We deep-dive into your business goals, target users, competitive landscape, and technical requirements to define a clear product strategy and feature roadmap.",
                        icon: Search,
                        color: "from-blue-500 to-cyan-500",
                    },
                    {
                        step: "02",
                        title: "UI/UX Design",
                        description: "User research, wireframing, and high-fidelity prototyping in Figma — validated through usability testing to ensure intuitive flows and delightful experiences.",
                        icon: MonitorSmartphone,
                        color: "from-purple-500 to-pink-500",
                    },
                    {
                        step: "03",
                        title: "Development & Engineering",
                        description: "Agile 2-week sprint cycles with clean, scalable code — native or cross-platform — paired with backend APIs, third-party integrations, and rigorous code reviews.",
                        icon: Code,
                        color: "from-green-500 to-emerald-500",
                    },
                    {
                        step: "04",
                        title: "QA & Testing",
                        description: "Comprehensive automated and manual testing across real devices — functional, performance, security, and regression testing to ensure a flawless launch.",
                        icon: Shield,
                        color: "from-yellow-500 to-orange-500",
                    },
                    {
                        step: "05",
                        title: "Launch & Deployment",
                        description: "App Store and Google Play submission, store optimization (ASO), staged rollouts, and launch-day monitoring to maximize visibility and minimize risk.",
                        icon: Rocket,
                        color: "from-red-500 to-pink-500",
                    },
                    {
                        step: "06",
                        title: "Growth & Optimization",
                        description: "Post-launch analytics, crash monitoring, user feedback loops, A/B testing, and iterative feature releases to grow your app and improve key metrics over time.",
                        icon: TrendingUp,
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
                            Partner with a mobile development team that combines technical excellence with a deep commitment to your business success.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {[
                            { text: "Full-Stack Expertise – Native iOS, Android, and cross-platform Flutter & React Native development under one roof.", icon: FaMobileAlt },
                            { text: "Transparent Delivery – Live sprint demos, shared project dashboards, and predictable milestone delivery every two weeks.", icon: FaEye },
                            { text: "Security-First Approach – OWASP compliance, encrypted storage, secure APIs, and vulnerability assessments built into every project.", icon: FaShieldAlt },
                            { text: "User-Centered Design – Research-backed UX that maximizes engagement, drives retention, and earns 5-star reviews.", icon: FaNetworkWired },
                            { text: "Scalable Architecture – Future-proof code structure and cloud infrastructure that grows seamlessly with your user base.", icon: FaRocket },
                            { text: "Post-Launch Support – App Store optimization, OS updates, crash monitoring, and continuous feature improvements after go-live.", icon: FaHandshake },
                        ].map((benefit, index) => {
                            const Icon = benefit.icon;
                            const colors = ["from-blue-500 to-cyan-500", "from-purple-500 to-pink-500", "from-green-500 to-emerald-500", "from-red-500 to-orange-500", "from-yellow-500 to-orange-500", "from-teal-500 to-cyan-500"];
                            const titles = ["Full-Stack", "Transparent", "Security-First", "User-Centered", "Scalable", "Post-Launch"];
                            const subtitles = ["Expertise", "Delivery", "Approach", "Design", "Architecture", "Support"];
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
                            <Image src="/images/agentic-ai/cta/AI-Infrastructure-cta.png" alt="Mobile App Development" fill className="object-cover rounded-3xl" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#010c22]/95 via-[#0a1038]/85 to-[#010c22]/95" />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10" />
                        <div className="relative z-10">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#f4cc6f]/20 to-[#e6b85c]/20 ring-2 ring-[#f4cc6f]/30 mb-8 mx-auto">
                                <Smartphone className="w-10 h-10 text-[#f4cc6f]" />
                            </div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                                Ready to Build Your Mobile App?
                            </h3>
                            <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-6 md:mb-8">
                                Turn your app idea into a market-ready product. At Altiora Infotech, we combine cutting-edge mobile engineering with beautiful design and a proven launch process — delivering apps that users love and businesses depend on.
                            </p>
                            <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-8">
                                Ready to bring your vision to life? Share your idea and goals, and we&apos;ll build a comprehensive app development plan: platform recommendation, tech stack, timeline, budget estimate, and launch strategy.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                                <Link
                                    href="https://calendly.com/altiorainfotech/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 focus:shadow-lg focus:shadow-[#f4cc6f]/25 focus:outline-none focus:ring-2 focus:ring-[#f4cc6f]/50 transition-all duration-300 transform hover:scale-105 focus:scale-105"
                                >
                                    <FaRocket className="mr-2 w-5 h-5" />
                                    Book Free App Consultation
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
          0%,100%{ transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
          50%{ transform: translateY(-20px) rotateX(5deg) rotateY(5deg); }
        }
      `}</style>
        </div>
    );
}
