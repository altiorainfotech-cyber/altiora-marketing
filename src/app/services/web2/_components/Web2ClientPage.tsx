'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import Header from "@/assets/Header";
import Footer from "@/assets/Footer";
import TechStackWeb2 from "./techstackweb2";
import styles from "../web2.module.css";

// Icon mapping helper
const getIconComponent = (iconName: string) => {
  const Icons = LucideIcons as any;
  return Icons[iconName] || Icons.Code;
};

// Types for the dynamic data
interface HeroStat {
  value: string;
  label: string;
}

interface HeroSignal {
  text: string;
}

interface HeroSection {
  badge: string;
  title: string;
  highlightText: string;
  description: string;
  primaryCTA: { text: string; link: string };
  secondaryCTA: { text: string; link: string };
  stats: HeroStat[];
  signals: HeroSignal[];
}

interface OverviewSection {
  title: string;
  description: string;
}

interface ExperienceHighlight {
  title: string;
  description: string;
  link: string;
  metric: string;
  metricLabel: string;
}

interface ServiceCard {
  title: string;
  description: string;
  link: string;
  icon: string;
  color: string;
  gradient: string;
}

interface ServicesSection {
  title: string;
  highlightText: string;
  description: string;
  services: ServiceCard[];
}

interface WorkflowStep {
  icon: string;
  title: string;
  description: string;
  color: string;
  emoji: string;
}

interface HowWeWorkSection {
  title: string;
  highlightText: string;
  description: string;
  steps: WorkflowStep[];
}

interface OutcomeItem {
  icon: string;
  title: string;
  description: string;
  metric: string;
  color: string;
  emoji: string;
}

interface OutcomesSection {
  title: string;
  highlightText: string;
  description: string;
  outcomes: OutcomeItem[];
}

interface TrendPortal {
  id: number;
  x: number;
  y: number;
  color: string;
  label: string;
  emoji: string;
  funFact: string;
  logo: string;
  description: string;
}

interface TrendsSection {
  title: string;
  highlightText: string;
  description: string;
  portals: TrendPortal[];
}

interface WhyAltioraFeature {
  icon: string;
  title: string;
  description: string;
  color: string;
  emoji: string;
  metric: string;
  metricLabel: string;
}

interface WhyAltioraSection {
  title: string;
  highlightText: string;
  description: string;
  features: WhyAltioraFeature[];
}

interface CTASection {
  icon: string;
  title: string;
  description: string;
  backgroundImage: string;
  primaryCTA: { text: string; link: string; icon: string };
  secondaryCTA: { text: string; link: string; icon: string };
}

interface DigitalMarketingCTA {
  description: string;
  buttonText: string;
  buttonLink: string;
}

interface EndToEndCTA {
  description: string;
  buttonText: string;
  buttonLink: string;
}

interface PageData {
  heroSection: HeroSection;
  overviewSection: OverviewSection;
  experienceHighlights: ExperienceHighlight[];
  servicesSection: ServicesSection;
  digitalMarketingCTA?: DigitalMarketingCTA;
  howWeWorkSection: HowWeWorkSection;
  endToEndCTA?: EndToEndCTA;
  outcomesSection: OutcomesSection;
  trendsSection: TrendsSection;
  whyAltioraSection: WhyAltioraSection;
  ctaSection: CTASection;
}

// Interactive Web Development Animation
const InteractiveWebAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="relative w-full h-full flex items-center justify-center overflow-hidden scale-125"
    >
      {/* Central Holographic Screen */}
      <motion.div
        className="absolute w-80 h-48 bg-gradient-to-br from-blue-600/40 via-purple-600/40 to-cyan-600/40 rounded-2xl border-3 border-[#f4cc6f] shadow-2xl backdrop-blur-sm"
        animate={{
          scale: [1, 1.03, 1],
          boxShadow: [
            '0 0 40px rgba(244, 204, 111, 0.8)',
            '0 0 80px rgba(244, 204, 111, 1)',
            '0 0 40px rgba(244, 204, 111, 0.8)'
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        {/* Screen Content */}
        <div className="absolute inset-4 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex flex-col justify-center items-center border border-white/20">
          <motion.div
            className="text-[#f4cc6f] text-4xl font-bold mb-4 drop-shadow-lg"
            animate={{ 
              opacity: [0.9, 1, 0.9]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {'{ Web Dev }'}
          </motion.div>
          <div className="flex gap-4">
            <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg" />
            <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg" />
            <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg" />
          </div>
        </div>
      </motion.div>

      {/* Floating Technology Icons Around Rectangle */}
      {[
        { tech: '⚛️', name: 'React', x: -200, y: -120, color: '#61DAFB' },
        { tech: '🟨', name: 'JS', x: 200, y: -80, color: '#F7DF1E' },
        { tech: '🎨', name: 'CSS', x: -220, y: 100, color: '#1572B6' },
        { tech: '📱', name: 'Mobile', x: 220, y: 120, color: '#10B981' },
        { tech: '🚀', name: 'Deploy', x: 0, y: -180, color: '#8B5CF6' },
        { tech: '⚡', name: 'Fast', x: 0, y: 180, color: '#F59E0B' },
      ].map((item, index) => {
        return (
          <motion.div
            key={index}
            className="absolute px-4 py-3 rounded-xl border-2 font-bold shadow-xl backdrop-blur-sm"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(${item.x - 40}px, ${item.y - 20}px)`,
              backgroundColor: `${item.color}20`,
              borderColor: item.color,
              color: item.color
            }}

          >
            <div className="text-2xl mb-1">{item.tech}</div>
            <div className="text-xs font-mono">{item.name}</div>
          </motion.div>
        );
      })}





      {/* Pulsing Energy Cores Around Rectangle */}
      {[
        { x: -160, y: -60, size: 'w-6 h-6', color: 'bg-blue-400' },
        { x: 160, y: -40, size: 'w-4 h-4', color: 'bg-purple-400' },
        { x: -140, y: 80, size: 'w-8 h-8', color: 'bg-green-400' },
        { x: 140, y: 90, size: 'w-5 h-5', color: 'bg-orange-400' },
        { x: -50, y: -140, size: 'w-3 h-3', color: 'bg-cyan-400' },
        { x: 50, y: 140, size: 'w-4 h-4', color: 'bg-pink-400' }
      ].map((core, i) => (
        <motion.div
          key={`core-${i}`}
          className={`absolute ${core.size} ${core.color} rounded-full shadow-lg`}
          style={{
            left: '50%',
            top: '50%',
            transform: `translate(${core.x}px, ${core.y}px)`
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.4, 1, 0.4],
            x: [0, Math.cos(i) * 8, 0],
            y: [0, Math.sin(i) * 8, 0]
          }}
          transition={{
            duration: 2.5 + i * 0.3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.4
          }}
        />
      ))}
    </motion.div>
  );
};

// Service Card Component
const Web2ServiceCard = ({ service, index }: { service: ServiceCard; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);
  const Icon = getIconComponent(service.icon);
  const hasLink = service.link && service.link.trim() !== "";

  const handleHoverStart = () => {
    setIsHovered(true);
    setRotation(prev => prev + 360);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}

      onHoverStart={handleHoverStart}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10`} />
      </div>

      <div className="relative px-6 pt-6 pb-4">
        <div className="flex items-center gap-6">
          {hasLink ? (
            <Link href={service.link} className="cursor-pointer">
              <motion.div
                animate={{ rotate: rotation }}
                transition={{ duration: 0.6 }}
                className="flex-shrink-0 p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm cursor-pointer hover:bg-white/15 hover:scale-105 transition-all duration-300"
              >
                <Icon className="w-10 h-10" style={{ color: service.color }} />
              </motion.div>
            </Link>
          ) : (
            <motion.div
              animate={{ rotate: rotation }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0 p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm cursor-not-allowed opacity-50"
            >
              <Icon className="w-10 h-10" style={{ color: service.color }} />
            </motion.div>
          )}

          <div className="flex-1 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-3 leading-relaxed line-clamp-3">
                {service.description}
              </p>
            </div>

            {hasLink ? (
              <Link href={service.link} className="mt-auto cursor-pointer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-white font-medium group-hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Learn More
                  <motion.div
                    animate={{ x: isHovered ? 4 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <LucideIcons.ArrowUpRight className="w-4 h-4" />
                  </motion.div>
                </motion.button>
              </Link>
            ) : (
              <div className="flex items-center gap-2 text-gray-500 font-medium mt-auto cursor-not-allowed">
                Coming Soon
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Interactive Workflow Component
const InteractiveWorkflow = ({ steps }: { steps: WorkflowStep[] }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Desktop Timeline */}
      <div className="hidden lg:block relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 rounded-full opacity-30" />

        {steps.map((step, index) => {
          const Icon = getIconComponent(step.icon);
          const isActive = activeStep === index;
          const isCompleted = activeStep > index;

          return (
            <motion.div
              key={step.title}
              className="relative flex items-center mb-16 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
            >
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full border-4 flex items-center justify-center cursor-pointer z-10"
                style={{
                  borderColor: step.color,
                  backgroundColor: isActive ? step.color : isCompleted ? step.color : 'rgba(255, 255, 255, 0.05)',
                }}
                onClick={() => setActiveStep(index)}
                whileHover={{ scale: 1.1 }}
                animate={isActive ? {
                  boxShadow: [
                    `0 0 20px ${step.color}40`,
                    `0 0 40px ${step.color}60`,
                    `0 0 20px ${step.color}40`
                  ]
                } : {}}
                transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
              >
                <motion.div
                  animate={isActive ? { rotate: 360 } : {}}
                  transition={{ duration: 2, repeat: isActive ? Infinity : 0, ease: "linear" }}
                >
                  <Icon className="w-6 h-6" style={{ color: isActive || isCompleted ? 'white' : step.color }} />
                </motion.div>
              </motion.div>

              <motion.div
                className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 ml-auto text-left'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3 + 0.2, duration: 0.6 }}
              >
                <motion.div
                  className={`relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                    isActive
                      ? 'border-white bg-white/10 shadow-2xl'
                      : 'border-white/20 bg-white/5 hover:border-white/30'
                  }`}
                  onClick={() => setActiveStep(index)}
                  animate={isActive ? {
                    boxShadow: [
                      `0 0 30px ${step.color}20`,
                      `0 0 50px ${step.color}40`,
                      `0 0 30px ${step.color}20`
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
                >
                  <motion.div
                    className="text-4xl mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.emoji}
                  </motion.div>

                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-white/80'
                  }`}>
                    {step.title}
                  </h3>

                  <p className={`leading-relaxed transition-colors duration-300 ${
                    isActive ? 'text-white/90' : 'text-white/60'
                  }`}>
                    {step.description}
                  </p>

                  <motion.div
                    className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: step.color }}
                      initial={{ width: 0 }}
                      animate={{ width: isActive ? '100%' : isCompleted ? '100%' : '0%' }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile/Tablet Cards */}
      <div className="lg:hidden space-y-6">
        {steps.map((step, index) => {
          const Icon = getIconComponent(step.icon);
          const isActive = activeStep === index;

          return (
            <motion.div
              key={step.title}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <motion.div
                className={`relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  isActive
                    ? 'border-white bg-white/10 shadow-2xl'
                    : 'border-white/20 bg-white/5 hover:border-white/30'
                }`}
                onClick={() => setActiveStep(index)}
                animate={isActive ? {
                  boxShadow: [
                    `0 0 30px ${step.color}20`,
                    `0 0 50px ${step.color}40`,
                    `0 0 30px ${step.color}20`
                  ]
                } : {}}
                transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="w-12 h-12 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                    style={{
                      borderColor: step.color,
                      backgroundColor: isActive ? step.color : 'rgba(255, 255, 255, 0.05)',
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className="w-5 h-5" style={{ color: isActive ? 'white' : step.color }} />
                  </motion.div>
                  <div className="flex-1">
                    <motion.div
                      className="text-2xl mb-1"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.emoji}
                    </motion.div>
                    <h3 className={`text-lg font-bold transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-white/80'
                    }`}>
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className={`leading-relaxed text-sm transition-colors duration-300 ${
                  isActive ? 'text-white/90' : 'text-white/60'
                }`}>
                  {step.description}
                </p>

                <motion.div
                  className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: step.color }}
                    initial={{ width: 0 }}
                    animate={{ width: isActive ? '100%' : '0%' }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
};

// Interactive Outcomes Component
const InteractiveOutcomes = ({ outcomes }: { outcomes: OutcomeItem[] }) => {
  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Mobile: Horizontal Scroll */}
      <div className="md:hidden overflow-x-auto overflow-y-visible pb-8 -mx-4 px-4 scrollbar-hide">
        <div className="flex gap-4">
          {outcomes.map((outcome, index) => {
            const IconComponent = getIconComponent(outcome.icon);

            return (
              <motion.div
                key={outcome.title}
                className="flex-shrink-0 w-[85vw] max-w-[340px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <motion.div
                  className="relative h-full p-6 rounded-2xl border border-white/20 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 overflow-hidden flex flex-col"
                  whileHover={{
                    boxShadow: [
                      '0 0 20px rgba(255, 255, 255, 0.1)',
                      '0 0 40px rgba(255, 255, 255, 0.2)',
                      '0 0 60px rgba(255, 255, 255, 0.3)',
                      '0 0 20px rgba(255, 255, 255, 0.1)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at center, ${outcome.color}20, transparent 70%)`
                    }}
                  />

                  <motion.div
                    className="text-3xl mb-3 text-center"
                    transition={{ duration: 0.6 }}
                  >
                    {outcome.emoji}
                  </motion.div>

                  <motion.div
                    className="text-center mb-3"
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-2xl font-bold text-white">
                      {outcome.metric.split(' ')[1]}
                    </div>
                  </motion.div>

                  <motion.h3
                    className="text-lg font-bold text-center mb-3 text-white flex-grow"
                    transition={{ duration: 0.3 }}
                  >
                    {outcome.title}
                  </motion.h3>

                  <motion.p
                    className="text-sm text-center leading-relaxed text-white/80 flex-grow"
                    transition={{ duration: 0.3 }}
                  >
                    {outcome.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Desktop: Grid Layout */}
      <div className="hidden md:block px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((outcome, index) => {
            const IconComponent = getIconComponent(outcome.icon);

            return (
            <motion.div
              key={outcome.title}
              className="relative h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <motion.div
                className="relative h-full p-6 rounded-2xl border border-white/20 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.08] hover:border-white/30 overflow-hidden flex flex-col"
                whileHover={{
                  boxShadow: [
                    '0 0 20px rgba(255, 255, 255, 0.1)',
                    '0 0 40px rgba(255, 255, 255, 0.2)',
                    '0 0 60px rgba(255, 255, 255, 0.3)',
                    '0 0 20px rgba(255, 255, 255, 0.1)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${outcome.color}20, transparent 70%)`
                  }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="absolute top-3 right-3 w-2 h-2 bg-white/20 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
                <motion.div
                  className="absolute bottom-3 left-3 w-1 h-1 bg-white/40 rounded-full"
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />

                <motion.div
                  className="text-3xl mb-3 text-center"
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {outcome.emoji}
                </motion.div>

                <motion.div
                  className="text-center mb-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-2xl font-bold text-white">
                    {outcome.metric.split(' ')[1]}
                  </div>
                </motion.div>

                <motion.h3
                  className="text-lg font-bold text-center mb-3 text-white flex-grow"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {outcome.title}
                </motion.h3>

                <motion.p
                  className="text-sm text-center leading-relaxed text-white/80 flex-grow"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  {outcome.description}
                </motion.p>

                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-all duration-500"
                  animate={{
                    boxShadow: [
                      'inset 0 0 0 rgba(255, 255, 255, 0)',
                      'inset 0 0 20px rgba(255, 255, 255, 0.1)',
                      'inset 0 0 0 rgba(255, 255, 255, 0)'
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
            );
          })}
        </div>
      </div>

      {/* Add scrollbar hide styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

// Cosmic Portal Component
const CosmicPortal = ({ portals }: { portals: TrendPortal[] }) => {
  const [activePortal, setActivePortal] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      // Set first portal (Edge Computing, id: 0) as default active on mobile
      if (mobile && activePortal === null && portals.length > 0) {
        setActivePortal(portals[0].id);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [activePortal, portals]);

  const handlePortalInteraction = (portalId: number) => {
    if (isMobile) {
      setActivePortal(activePortal === portalId ? null : portalId);
    } else {
      setActivePortal(portalId);
    }
  };

  return (
    <div className="relative">
      {/* Desktop Portal View */}
      <div className="hidden lg:block relative w-[400px] h-[400px] mx-auto mb-48">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-800 overflow-hidden">
          {[...Array(30)].map((_, i) => {
            const seedX = (i * 37) % 100;
            const seedY = (i * 73) % 100;
            const seedDuration = 2 + (i % 3);
            const seedDelay = (i % 5) * 0.4;

            return (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 bg-white/60 rounded-full"
                style={{
                  left: `${seedX}%`,
                  top: `${seedY}%`,
                }}
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: seedDuration,
                  repeat: Infinity,
                  delay: seedDelay,
                }}
              />
            );
          })}

          <motion.div
            className="absolute inset-2 rounded-full border border-[#F4CC6F]/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {portals.map((portal) => (
          <motion.div
            key={portal.id}
            className="absolute cursor-pointer"
            style={{
              left: `${portal.x}%`,
              top: `${portal.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            onHoverStart={() => setActivePortal(portal.id)}
            onHoverEnd={() => setActivePortal(null)}
          >
            <motion.div
              className="relative w-16 h-16 rounded-full border-2 flex items-center justify-center"
              style={{ borderColor: portal.color }}
              animate={activePortal === portal.id ? {
                scale: [1, 1.1, 1],
                boxShadow: `0 0 20px ${portal.color}40`
              } : {}}
              transition={{ duration: 2, repeat: activePortal === portal.id ? Infinity : 0 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-300 rounded-full"
                    style={{
                      transform: `rotate(${i * 60}deg) translateY(-8px)`,
                    }}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>

              <motion.div
                className="text-lg relative z-10"
                animate={activePortal === portal.id ? {
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                } : {
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: activePortal === portal.id ? Infinity : 0,
                  ease: "easeInOut",
                }}
              >
                {portal.logo}
              </motion.div>

              <motion.div
                className="absolute inset-1 rounded-full border border-white/30"
                style={{ backgroundColor: `${portal.color}20` }}
                animate={activePortal === portal.id ? {
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                } : {}}
                transition={{ duration: 1.5, repeat: activePortal === portal.id ? Infinity : 0 }}
              />
            </motion.div>

            <motion.div
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs font-semibold text-center whitespace-nowrap"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: activePortal === portal.id ? 1 : 0.7,
                y: activePortal === portal.id ? 0 : -3,
                color: activePortal === portal.id ? portal.color : '#ffffff'
              }}
              transition={{ duration: 0.3 }}
            >
              {portal.label}
            </motion.div>
          </motion.div>
        ))}

        <AnimatePresence>
          {activePortal !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 30 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              className="absolute -bottom-68 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-white/95 to-slate-50/90 backdrop-blur-xl rounded-xl p-4 w-80 text-center border-2 shadow-2xl z-50"
              style={{
                borderColor: `${portals[activePortal].color}40`,
                boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.3), 0 0 40px ${portals[activePortal].color}25`
              }}
            >
              <motion.div
                className="text-2xl mb-2"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                {portals[activePortal].logo}
              </motion.div>
              <motion.div
                className="text-sm font-bold mb-3"
                style={{ color: portals[activePortal].color }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {portals[activePortal].funFact}
              </motion.div>
              <motion.div
                className="text-slate-700 text-sm leading-relaxed font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {portals[activePortal].description}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Card Grid */}
      <div className="lg:hidden grid grid-cols-2 gap-4 max-w-md mx-auto">
        {portals.map((portal) => (
          <motion.div
            key={portal.id}
            className="relative cursor-pointer h-full"
            onClick={() => handlePortalInteraction(portal.id)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className={`relative p-4 rounded-2xl border-2 transition-all duration-300 h-32 flex flex-col justify-center ${
                activePortal === portal.id
                  ? 'bg-white/10 shadow-lg'
                  : 'bg-white/5 border-white/20'
              }`}
              style={{
                borderColor: activePortal === portal.id ? portal.color : 'rgba(255, 255, 255, 0.2)',
                boxShadow: activePortal === portal.id ? `0 0 20px ${portal.color}40` : 'none'
              }}
            >
              <div className="text-center">
                <motion.div
                  className="text-3xl mb-2"
                  animate={activePortal === portal.id ? {
                    scale: [1, 1.1, 1]
                  } : {
                    scale: 1
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {portal.logo}
                </motion.div>
                <h3 className="text-sm font-semibold text-white mb-1 line-clamp-2">{portal.label}</h3>
                <p className="text-xs text-white/60 line-clamp-2">{portal.funFact}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activePortal !== null && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mt-6 p-6 rounded-2xl border-2 bg-white/10 backdrop-blur-sm max-w-md mx-auto"
            style={{
              borderColor: `${portals[activePortal].color}40`,
              boxShadow: `0 0 30px ${portals[activePortal].color}20`
            }}
          >
            <div className="text-center">
              <div className="text-4xl mb-3">{portals[activePortal].logo}</div>
              <h3 className="text-lg font-bold text-white mb-2">{portals[activePortal].label}</h3>
              <p className="text-sm text-white/80 leading-relaxed">{portals[activePortal].description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Why Altiora Showcase Component
const WhyAltioraShowcase = ({ features }: { features: WhyAltioraFeature[] }) => {
  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Mobile: Horizontal Scroll */}
      <div className="md:hidden overflow-x-auto overflow-y-visible pb-8 -mx-4 px-4 scrollbar-hide">
        <div className="flex gap-4">
          {features.map((feature, index) => {
            const Icon = getIconComponent(feature.icon);

            return (
              <motion.div
                key={feature.title}
                className="flex-shrink-0 w-[85vw] max-w-[340px] group relative cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                style={{ perspective: 1000 }}
              >
                <motion.div
                  className="relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 transition-all duration-500 overflow-hidden h-full"
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at center, ${feature.color}20, transparent 70%)`
                    }}
                  />

                  <motion.div
                    className="flex justify-center mb-4"
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      className="p-4 rounded-full bg-gradient-to-br from-white/10 to-white/5"
                    >
                      <Icon className="w-8 h-8" style={{ color: feature.color }} />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="text-center mb-3"
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-2xl font-bold text-white transition-all duration-300">
                      {feature.metric}
                    </div>
                    <div className="text-sm text-gray-400 transition-colors duration-300">
                      {feature.metricLabel}
                    </div>
                  </motion.div>

                  <motion.h3
                    className="text-lg font-bold text-center mb-3 text-white transition-all duration-300"
                    transition={{ duration: 0.3 }}
                  >
                    {feature.title}
                  </motion.h3>

                  <motion.p
                    className="text-sm text-center leading-relaxed text-white/70 transition-colors duration-300"
                    transition={{ duration: 0.3 }}
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Desktop: Grid Layout */}
      <div className="hidden md:block px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = getIconComponent(feature.icon);

            return (
            <motion.div
              key={feature.title}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              style={{ perspective: 1000 }}
            >
              <motion.div
                className="relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 transition-all duration-500 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
                whileHover={{
                  boxShadow: [
                    '0 0 20px rgba(255, 255, 255, 0.1)',
                    '0 0 40px rgba(255, 255, 255, 0.2)',
                    '0 0 60px rgba(255, 255, 255, 0.3)',
                    '0 0 20px rgba(255, 255, 255, 0.1)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${feature.color}20, transparent 70%)`
                  }}
                />

                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 bg-white/30 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
                <motion.div
                  className="absolute bottom-3 left-3 w-1 h-1 bg-white/40 rounded-full"
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />

                <motion.div
                  className="flex justify-center mb-4"
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="p-4 rounded-full bg-gradient-to-br from-white/10 to-white/5 group-hover:shadow-lg"
                    whileHover={{
                      boxShadow: `0 0 20px ${feature.color}40`
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: feature.color }} />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="text-center mb-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {feature.metric}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.metricLabel}
                  </div>
                </motion.div>

                <motion.h3
                  className="text-lg font-bold text-center mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.title}
                </motion.h3>

                <motion.p
                  className="text-sm text-center leading-relaxed text-white/80 group-hover:text-white/90 transition-colors duration-300"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.description}
                </motion.p>

                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-all duration-500"
                  animate={{
                    boxShadow: [
                      'inset 0 0 0 rgba(255, 255, 255, 0)',
                      'inset 0 0 20px rgba(255, 255, 255, 0.1)',
                      'inset 0 0 0 rgba(255, 255, 255, 0)'
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
          );
        })}
        </div>
      </div>

      {/* Add scrollbar hide styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

// Main Component
export default function Web2ClientPageDynamic() {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPageData() {
      try {
        const response = await fetch('/api/web2-service-page?slug=web2-main');
        if (!response.ok) {
          throw new Error('Failed to fetch page data');
        }
        const data = await response.json();
        setPageData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchPageData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#010c22]">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (error || !pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#010c22]">
        <div className="text-white text-xl">Error: {error || 'No data available'}</div>
      </div>
    );
  }

  const { heroSection, overviewSection, servicesSection, howWeWorkSection, outcomesSection, whyAltioraSection, ctaSection, digitalMarketingCTA, endToEndCTA } = pageData;

  // Enhanced trendsSection with proper portal data including emojis and descriptions
  const trendsSection = pageData.trendsSection || {
    title: 'New Trends That',
    highlightText: 'Matter',
    description: 'Cutting-edge technologies shaping the future of Web2',
    portals: []
  };

  // Ensure portals have proper structure with unique emojis for each trend
  const enhancedPortals = trendsSection.portals && trendsSection.portals.length > 0
    ? trendsSection.portals.map((portal: any, index: number) => ({
        ...portal,
        // Assign unique emojis for each trend
        logo: portal.logo || portal.emoji || ['⚡', '🧩', '👁️', '📈', '🛡️', '🌐'][index] || '⚡',
        emoji: portal.emoji || portal.logo || ['⚡', '🧩', '👁️', '📈', '🛡️', '🌐'][index] || '⚡',
      }))
    : [
        { id: 0, x: 50, y: 15, color: '#F4CC6F', label: 'Edge Computing', emoji: '⚡', funFact: 'Lightning-fast responses!', logo: '⚡', description: 'Edge computing brings computation closer to users with CDN networks, edge functions, and distributed caching for sub-100ms response times globally.' },
        { id: 1, x: 80, y: 35, color: '#3B82F6', label: 'Composable Arch', emoji: '🧩', funFact: 'Flexible & modular!', logo: '🧩', description: 'Composable architecture with headless CMS, API-first design, and micro-frontends enables independent scaling and rapid feature deployment.' },
        { id: 2, x: 80, y: 65, color: '#10B981', label: 'Observability', emoji: '👁️', funFact: 'Real-time insights!', logo: '👁️', description: 'Distributed tracing, structured logging, and real-time metrics provide end-to-end visibility into application performance and user behavior.' },
        { id: 3, x: 50, y: 85, color: '#8B5CF6', label: 'Performance SEO', emoji: '📈', funFact: 'Top rankings!', logo: '📈', description: 'Core Web Vitals optimization, server-side rendering, and semantic HTML ensure fast load times and high search engine rankings.' },
        { id: 4, x: 20, y: 65, color: '#F59E0B', label: 'Privacy Analytics', emoji: '🛡️', funFact: 'Privacy-first insights!', logo: '🛡️', description: 'Privacy-compliant analytics with GDPR compliance, cookieless tracking, and user consent management for ethical data collection.' },
        { id: 5, x: 20, y: 35, color: '#EF4444', label: 'Modern Web', emoji: '🌐', funFact: 'Next-gen experiences!', logo: '🌐', description: 'Modern web technologies with WebAssembly, service workers, and progressive enhancement for cutting-edge user experiences.' },
      ];

  const enhancedTrendsSection = {
    ...trendsSection,
    portals: enhancedPortals
  };

  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#010c22] text-[#F8FBFB] overflow-x-hidden">
        <Header />
        <main className="flex-grow overflow-x-hidden">
          {/* Hero Section */}
          <section className="relative text-white py-20 min-h-screen flex items-center bg-gradient-to-br from-[#0a1445] via-[#0a1038] to-[#010c22]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
                  initial={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    opacity: 0.1,
                  }}
                  animate={{
                    opacity: [0.1, 0.6, 0.1],
                    y: [0, -30, 0],
                    x: [0, Math.random() * 20 - 10, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    delay: Math.random() * 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute w-48 h-48 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl"
                style={{ left: '-5%', top: '10%' }}
                animate={{
                  y: [0, -50, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute w-56 h-56 bg-gradient-to-br from-cyan-400/15 to-transparent rounded-full blur-3xl"
                style={{ right: '-8%', bottom: '0%' }}
                animate={{
                  y: [0, 40, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
            </div>

            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(85% 60% at 28% 8%, rgba(76,131,255,.15), rgba(0,0,0,0))',
              }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <motion.span
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 text-xs tracking-wider text-white/90 backdrop-blur-sm"
                  >
                    {heroSection.badge}
                  </motion.span>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
                  >
                    {heroSection.title} <span className="text-[#f4cc6f]">{heroSection.highlightText}</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-lg text-white/70 leading-relaxed max-w-2xl font-light"
                  >
                    {heroSection.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 pt-4"
                  >
                    <div>
                      <Link
                        href={heroSection.primaryCTA.link}
                        className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-[#010c22] bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#f4cc6f]/40"
                      >
                        <span className="relative">{heroSection.primaryCTA.text}</span>
                      </Link>
                    </div>

                    <div>
                      <Link
                        href={heroSection.secondaryCTA.link}
                        className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold border border-white/30 bg-white/[0.08] backdrop-blur-sm text-white rounded-full overflow-hidden transition-all duration-300 hover:bg-white/[0.15] hover:border-white/50"
                      >
                        <span className="relative">{heroSection.secondaryCTA.text}</span>
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative h-[500px] hidden lg:flex items-center justify-center"
                >
                  <InteractiveWebAnimation />
                </motion.div>
              </div>
            </div>
          </section>
          {/* Overview Section */}
          <section className={`${styles.section} pt-8`}>
            <div className={styles.sectionShell}>
              <motion.h2
                className={styles.sectionHeading}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                {overviewSection.title}
              </motion.h2>
              <motion.p
                className={styles.sectionDescription}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {overviewSection.description}
              </motion.p>
            </div>

            <div className="mt-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <motion.div
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <div className="relative rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-sm p-8 overflow-hidden">
                    <motion.div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'radial-gradient(circle at center, rgba(147, 51, 234, 0.15), transparent 70%)'
                      }}
                    />

                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 right-4 w-16 h-16 border border-purple-400/30 rounded-full" />
                      <div className="absolute bottom-4 left-4 w-12 h-12 border border-pink-400/30 rotate-45" />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-purple-400/20 rounded-lg rotate-12" />
                    </div>

                    <motion.div
                      className="absolute top-6 right-6 w-2 h-2 bg-purple-400 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: 0.5,
                      }}
                    />
                    <motion.div
                      className="absolute bottom-6 left-6 w-3 h-3 bg-pink-400 rounded-full"
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: 1.5,
                      }}
                    />

                    <div className="relative z-10">
                      <motion.div
                        className="flex items-center gap-3 mb-6"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 ring-1 ring-purple-400/30">
                          <LucideIcons.Settings className="w-7 h-7 text-purple-300" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">Planning to Production</h3>
                          <p className="text-purple-300/80 text-sm">Strategic Development</p>
                        </div>
                      </motion.div>

                      <p className="text-white/80 leading-relaxed mb-6">
                        Strategic roadmap development with clear milestones, technical architecture design, and measurable KPIs from day one.
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {['Discovery', 'Architecture', 'Roadmap', 'KPIs'].map((tag, index) => (
                          <motion.span
                            key={tag}
                            className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-200 rounded-full text-sm font-medium border border-purple-400/20"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                            whileHover={{
                              scale: 1.1,
                              background: 'linear-gradient(to right, rgba(147, 51, 234, 0.2), rgba(219, 39, 119, 0.2))',
                              borderColor: 'rgba(147, 51, 234, 0.4)'
                            }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <div className="relative rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 backdrop-blur-sm p-8 overflow-hidden">
                    <motion.div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.15), transparent 70%)'
                      }}
                    />

                    <div className="absolute inset-0 opacity-10">
                      <svg className="w-full h-full" viewBox="0 0 200 200">
                        <path d="M20,20 L80,20 L80,80 L140,80 L140,140 L200,140" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1" fill="none"/>
                        <path d="M180,180 L120,180 L120,120 L60,120 L60,60 L0,60" stroke="rgba(20, 184, 166, 0.3)" strokeWidth="1" fill="none"/>
                        <circle cx="20" cy="20" r="3" fill="rgba(6, 182, 212, 0.4)"/>
                        <circle cx="80" cy="20" r="3" fill="rgba(6, 182, 212, 0.4)"/>
                        <circle cx="80" cy="80" r="3" fill="rgba(6, 182, 212, 0.4)"/>
                        <circle cx="140" cy="80" r="3" fill="rgba(6, 182, 212, 0.4)"/>
                        <circle cx="140" cy="140" r="3" fill="rgba(6, 182, 212, 0.4)"/>
                        <circle cx="200" cy="140" r="3" fill="rgba(6, 182, 212, 0.4)"/>
                      </svg>
                    </div>

                    <motion.div
                      className="absolute top-6 right-6 w-3 h-3 bg-cyan-400 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: 1,
                      }}
                    />
                    <motion.div
                      className="absolute bottom-6 left-6 w-2 h-2 bg-teal-400 rounded-full"
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: 2,
                      }}
                    />

                    <div className="relative z-10">
                      <motion.div
                        className="flex items-center gap-3 mb-6"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 ring-1 ring-cyan-400/30">
                          <LucideIcons.Code className="w-7 h-7 text-cyan-300" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">What We Deliver</h3>
                          <p className="text-cyan-300/80 text-sm">Technical Solutions</p>
                        </div>
                      </motion.div>

                      <p className="text-white/80 leading-relaxed mb-6">
                        Production-ready solutions with responsive front-ends, scalable APIs, and cloud-native infrastructure that perform at scale.
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {['Front-end', 'APIs', 'Cloud', 'Performance'].map((tag, index) => (
                          <motion.span
                            key={tag}
                            className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 text-cyan-200 rounded-full text-sm font-medium border border-cyan-400/20"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                            whileHover={{
                              scale: 1.1,
                              background: 'linear-gradient(to right, rgba(6, 182, 212, 0.2), rgba(20, 184, 166, 0.2))',
                              borderColor: 'rgba(6, 182, 212, 0.4)'
                            }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          {/* Services Section */}
          <section className={`${styles.section} pt-8`}>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <motion.h2
                className={`${styles.sectionHeading} text-center mb-4`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                {servicesSection.title} <span className="text-[#f4cc6f]">{servicesSection.highlightText}</span>
              </motion.h2>
              <motion.p
                className="text-slate-400 text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                {servicesSection.description}
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              {servicesSection.services.map((service, index) => (
                <motion.div
                  key={service.link || index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.6, ease: "easeOut" }}
                >
                  <Web2ServiceCard service={service} index={index} />
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Digital Marketing CTA */}
          {digitalMarketingCTA && (
            <section className={`${styles.section} pt-8`}>
              <div className="text-center">
                <motion.p
                  className="text-lg text-white/70 leading-relaxed max-w-4xl mx-auto mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {digitalMarketingCTA.description}
                </motion.p>
                <div>
                  <Link
                    href={digitalMarketingCTA.buttonLink}
                    className="inline-flex items-center justify-center px-8 py-4 font-semibold text-[#010c22] bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#f4cc6f]/40"
                  >
                    <span>{digitalMarketingCTA.buttonText}</span>
                    <LucideIcons.ArrowUpRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </section>
          )}

          {/* How We Work Section */}
          <section className={`${styles.section} pt-8`}>
            <div className={styles.sectionShell}>
              <motion.h2
                className={styles.sectionHeading}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                {howWeWorkSection.title} <span className="text-[#f4cc6f]">{howWeWorkSection.highlightText}</span>
              </motion.h2>
              <motion.p
                className={styles.sectionDescription}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {howWeWorkSection.description}
              </motion.p>
            </div>

            <InteractiveWorkflow steps={howWeWorkSection.steps} />
          </section>

          {/* End to End CTA */}
          {endToEndCTA && (
            <section className={`${styles.section} pt-8`}>
              <div className="text-center">
                <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-8">
                  {endToEndCTA.description}
                </p>
                <div>
                  <Link
                    href={endToEndCTA.buttonLink}
                    className="inline-flex items-center justify-center px-8 py-4 font-semibold text-[#010c22] bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#f4cc6f]/40"
                  >
                    <span>{endToEndCTA.buttonText}</span>
                    <LucideIcons.ArrowUpRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </section>
          )}

          {/* Outcomes Section */}
          <section className={`${styles.section} pt-8`}>
            <div className={styles.sectionShell}>
              <motion.h2
                className={styles.sectionHeading}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                {outcomesSection.title} <span className="text-[#f4cc6f]">{outcomesSection.highlightText}</span>
              </motion.h2>
              <motion.p
                className={styles.sectionDescription}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {outcomesSection.description}
              </motion.p>
            </div>

            <InteractiveOutcomes outcomes={outcomesSection.outcomes} />
          </section>

          {/* Trends Section */}
          <section className="py-12 sm:py-16 md:py-20 lg:py-16 xl:py-20 px-2 sm:px-3 md:px-4 lg:px-6 bg-[#010b22] relative overflow-hidden flex items-center">
            <div className="max-w-4xl mx-auto relative overflow-hidden h-full flex flex-col justify-center">
              <div
                className="absolute inset-0 rounded-[20px] p-[2px]"
                style={{
                  background: `
                    linear-gradient(45deg,
                      rgba(244, 204, 111, 0.6) 0%,
                      rgba(59, 130, 246, 0.4) 25%,
                      rgba(168, 85, 247, 0.4) 50%,
                      rgba(34, 197, 94, 0.4) 75%,
                      rgba(244, 204, 111, 0.6) 100%
                    )
                  `,
                  backgroundSize: '400% 400%',
                  animation: 'borderGlow 8s ease-in-out infinite'
                }}
              >
                <div className="w-full h-full bg-[#010b22] rounded-[18px]" />
              </div>

              <motion.div
                className="relative z-10 h-full flex flex-col justify-center"
                style={{
                  padding: '5.5rem 3.5rem',
                  minHeight: '90vh'
                }}
              >
                <div className="max-w-3xl mx-auto relative z-10 h-full flex flex-col justify-center">
                  <div className="text-center mb-6 sm:mb-8 md:mb-10">
                    <motion.h2
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white text-center"
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.7, delay: 0.1 }}
                    >
                      {enhancedTrendsSection.title} <span className="text-[#F4CC6F]">{enhancedTrendsSection.highlightText}</span>
                    </motion.h2>
                    <motion.p
                      className="text-lg sm:text-xl md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                    >
                      {enhancedTrendsSection.description}
                    </motion.p>
                  </div>

                  <div className="flex flex-col items-center space-y-4 sm:space-y-6 flex-grow justify-center">
                    <div className="w-full max-w-2xl">
                      <CosmicPortal portals={enhancedTrendsSection.portals} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <style jsx>{`
              @keyframes borderGlow {
                0%, 100% {
                  background-position: 0% 50%;
                }
                25% {
                  background-position: 100% 50%;
                }
                50% {
                  background-position: 100% 100%;
                }
                75% {
                  background-position: 0% 100%;
                }
              }
            `}</style>
          </section>

          {/* Why Altiora Section */}
          <section className={`${styles.section} pt-8`}>
            <div className={styles.sectionShell}>
              <motion.h2
                className={styles.sectionHeading}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                {whyAltioraSection.title} <span className="text-[#f4cc6f]">{whyAltioraSection.highlightText}</span>
              </motion.h2>
              <motion.p
                className={styles.sectionDescription}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {whyAltioraSection.description}
              </motion.p>
            </div>

            <WhyAltioraShowcase features={whyAltioraSection.features} />
          </section>

          <TechStackWeb2 />

          {/* Final CTA Section */}
          <section className="px-4 md:px-6 py-8 md:py-12">
            <div className="max-w-6xl mx-auto w-full">
              <div className="relative p-6 sm:p-8 md:p-12 text-center rounded-2xl md:rounded-3xl border border-white/20 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0">
                  <Image src={ctaSection.backgroundImage} alt="Web2 Development Services" fill className="object-cover rounded-3xl" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#010c22]/70 via-[#0a1038]/60 to-[#010c22]/70" />
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5" />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#f4cc6f]/20 to-[#e6b85c]/20 ring-2 ring-[#f4cc6f]/30 mb-8 mx-auto">
                    {(() => {
                      const Icon = getIconComponent(ctaSection.icon);
                      return <Icon className="w-10 h-10 text-[#f4cc6f]" />;
                    })()}
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                    {ctaSection.title}
                  </h3>
                  <p className="text-white/90 max-w-3xl mx-auto text-base sm:text-lg mb-8">
                    {ctaSection.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                    <Link
                      href={ctaSection.primaryCTA.link}
                      className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] hover:shadow-lg hover:shadow-[#f4cc6f]/25 focus:shadow-lg focus:shadow-[#f4cc6f]/25 focus:outline-none focus:ring-2 focus:ring-[#f4cc6f]/50 transition-all duration-300 transform hover:scale-105 focus:scale-105"
                    >
                      {(() => {
                        const Icon = getIconComponent(ctaSection.primaryCTA.icon);
                        return <Icon className="mr-2 w-5 h-5" />;
                      })()}
                      {ctaSection.primaryCTA.text}
                    </Link>
                    <Link
                      href={ctaSection.secondaryCTA.link}
                      className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold border border-white/30 bg-white/[0.08] backdrop-blur-sm text-white hover:bg-white/[0.12] focus:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                    >
                      {(() => {
                        const Icon = getIconComponent(ctaSection.secondaryCTA.icon);
                        return <Icon className="mr-2 w-5 h-5" />;
                      })()}
                      {ctaSection.secondaryCTA.text}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
