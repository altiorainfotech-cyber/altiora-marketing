"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface ProcessTimelineProps {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

export default function ProcessTimeline({ title, subtitle, steps }: ProcessTimelineProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, steps.length]);

  // Calculate progress percentage for each step
  const getProgressPercentage = (index: number) => {
    if (index < activeStep) return 100; // Completed steps
    if (index === activeStep) return 100; // Current active step
    return 0; // Future steps
  };

  // Get individual step colors
  const getStepColors = (index: number) => {
    const stepColors = [
      { gradient: "from-blue-500 to-cyan-500", solid: "#3b82f6" },
      { gradient: "from-purple-500 to-pink-500", solid: "#8b5cf6" },
      { gradient: "from-green-500 to-emerald-500", solid: "#10b981" },
      { gradient: "from-yellow-500 to-orange-500", solid: "#f59e0b" },
      { gradient: "from-red-500 to-pink-500", solid: "#ef4444" },
      { gradient: "from-indigo-500 to-purple-500", solid: "#6366f1" }
    ];
    return stepColors[index] || stepColors[0];
  };

  return (
    <section className="pt-0 pb-20 md:py-20 px-6 bg-[#010b22]/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white" dangerouslySetInnerHTML={{ __html: title }} />
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Circular Progress Wheel */}
          <div className="relative">
            {/* Play/Pause Button */}
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="group px-4 py-1.5 text-sm rounded-full bg-gradient-to-r from-[#f4cc6f]/10 to-[#e6b85c]/10 backdrop-blur-sm border border-[#f4cc6f]/30 text-[#f4cc6f] hover:from-[#f4cc6f]/20 hover:to-[#e6b85c]/20 hover:border-[#f4cc6f]/50 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full bg-[#f4cc6f] ${isAutoPlaying ? 'animate-pulse' : ''}`} />
                  {isAutoPlaying ? 'Auto-Playing' : 'Paused'} Process
                </span>
              </button>
            </div>

            <div className="flex justify-center">
              <div className="relative" style={{ width: '326px', height: '326px' }}>
                {/* Background Circle */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(156,163,175,0.2)"
                    strokeWidth="2"
                  />
                </svg>

                {/* Animated Background Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f4cc6f]/5 to-[#e6b85c]/5 blur-xl animate-pulse" />

                {/* Progress Steps */}
                {steps.map((step, index) => {
                  const angle = (index / steps.length) * 360 - 90;
                  const x = 50 + 35 * Math.cos((angle * Math.PI) / 180);
                  const y = 50 + 35 * Math.sin((angle * Math.PI) / 180);
                  const Icon = step.icon;
                  const isActive = index === activeStep;
                  const isCompleted = index < activeStep;
                  const stepColors = getStepColors(index);

                  return (
                    <div key={index} className="absolute inset-0">
                      {/* Progress Arc */}
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke={isActive || isCompleted ? "rgba(156,163,175,0.8)" : "rgba(156,163,175,0.3)"}
                          strokeWidth="4"
                          strokeLinecap="round"
                          className="transition-all duration-1000 ease-in-out"
                          style={{
                            strokeDasharray: `${(1 / steps.length) * 2 * Math.PI * 45} ${2 * Math.PI * 45}`,
                            strokeDashoffset: `-${(index / steps.length) * 2 * Math.PI * 45}`,
                            opacity: isActive || isCompleted ? 1 : 0.3,
                            filter: isActive ? 'drop-shadow(0 0 8px rgba(156,163,175,0.6))' : 'none'
                          }}
                        />
                      </svg>

                      {/* Step Button */}
                      <button
                        onClick={() => {
                          setActiveStep(index);
                          setIsAutoPlaying(false);
                        }}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                        }}
                      >
                        <motion.div
                          className={`relative rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${
                            isActive
                              ? `bg-gradient-to-br ${stepColors.gradient} scale-110`
                              : isCompleted
                              ? `bg-gradient-to-br ${stepColors.gradient} opacity-80`
                              : 'bg-white/10 backdrop-blur-sm border-2 border-white/30'
                          }`}
                          whileHover={{ scale: isActive ? 1.15 : 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          style={{
                            width: '54px',
                            height: '54px',
                            boxShadow: isActive ? `0 0 20px ${stepColors.solid}40` : undefined
                          }}
                        >
                          {/* Glow effect for active step */}
                          {isActive && (
                            <div 
                              className={`absolute inset-0 rounded-full bg-gradient-to-br ${stepColors.gradient} blur-md opacity-60 animate-pulse`} 
                            />
                          )}
                          
                          <Icon className={`relative z-10 w-7 h-7 transition-colors duration-300 ${
                            isActive || isCompleted ? 'text-white' : 'text-white/60'
                          }`} />
                        </motion.div>

                        {/* Step Number */}
                        <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-white/60'
                        }`}>
                          {step.step}
                        </div>
                      </button>
                    </div>
                  );
                })}

                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center bg-[#010c22]/80 backdrop-blur-sm rounded-full flex flex-col items-center justify-center border border-[#f4cc6f]/20" style={{ width: '109px', height: '109px' }}>
                    <div className="text-3xl font-bold text-[#f4cc6f] mb-1">
                      {activeStep + 1}/{steps.length}
                    </div>
                    <div className="text-white/60 text-xs">
                      Step Active
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Panel */}
          <div className="lg:pl-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Step Badge */}
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${steps[activeStep].color} text-white font-bold text-sm shadow-lg`}>
                  Step {steps[activeStep].step}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white leading-tight">
                  {steps[activeStep].title}
                </h3>

                {/* Description */}
                <p className="text-base text-white/80 leading-relaxed">
                  {steps[activeStep].description}
                </p>

                {/* Navigation */}
                <div className="flex justify-center lg:justify-start gap-3">
                  <button
                    onClick={() => {
                      setActiveStep(Math.max(0, activeStep - 1));
                      setIsAutoPlaying(false);
                    }}
                    disabled={activeStep === 0}
                    className="px-4 py-1.5 text-sm rounded-full border border-[#f4cc6f]/30 text-[#f4cc6f] hover:bg-[#f4cc6f]/10 hover:border-[#f4cc6f]/50 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => {
                      setActiveStep(Math.min(steps.length - 1, activeStep + 1));
                      setIsAutoPlaying(false);
                    }}
                    disabled={activeStep === steps.length - 1}
                    className="px-4 py-1.5 text-sm rounded-full bg-gradient-to-r from-[#f4cc6f] to-[#e6b85c] text-[#010c22] font-semibold hover:shadow-lg hover:shadow-[#f4cc6f]/25 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:shadow-none"
                  >
                    Next →
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}