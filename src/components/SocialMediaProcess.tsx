"use client";

import React, { useState } from 'react';
import { Target, Lightbulb, Rocket, TrendingUp, BarChart3, Zap, LucideIcon } from 'lucide-react';

// ===================================
// 1. TYPESCRIPT INTERFACE & DATA
// ===================================

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  angle: number;
  centerContent: {
    title: string;
    subtitle: string;
  };
}

const socialMediaProcessSteps: ProcessStep[] = [
  {
    id: 6,
    title: "Scale & Iterate",
    description: "Expand successful campaigns, explore new platforms, and continuously improve based on insights and trends.",
    icon: Zap,
    gradient: "from-blue-500 to-cyan-500",
    angle: 180,
    centerContent: {
      title: "SCALE & ITERATE",
      subtitle: "Expand successful campaigns, explore new platforms, and continuously improve based on insights and trends."
    }
  },
  {
    id: 5,
    title: "Performance Tracking",
    description: "Detailed monthly reports covering reach, engagement, leads, conversions, and ROI across all platforms.",
    icon: BarChart3,
    gradient: "from-purple-500 to-pink-500",
    angle: 144,
    centerContent: {
      title: "PERFORMANCE TRACKING",
      subtitle: "Detailed monthly reports covering reach, engagement, leads, conversions, and ROI across all platforms."
    }
  },
  {
    id: 4,
    title: "Continuous Optimization",
    description: "Monitor performance metrics, A/B test content variations, and refine strategy based on real-time data.",
    icon: TrendingUp,
    gradient: "from-teal-500 to-cyan-500",
    angle: 108,
    centerContent: {
      title: "CONTINUOUS OPTIMIZATION",
      subtitle: "Monitor performance metrics, A/B test content variations, and refine strategy based on real-time data."
    }
  },
  {
    id: 3,
    title: "Campaign Execution",
    description: "Launch integrated paid and organic campaigns with precise targeting, scheduling, and community management.",
    icon: Rocket,
    gradient: "from-yellow-500 to-orange-500",
    angle: 72,
    centerContent: {
      title: "CAMPAIGN EXECUTION",
      subtitle: "Launch integrated paid and organic campaigns with precise targeting, scheduling, and community management."
    }
  },
  {
    id: 2,
    title: "Content Ideation & Design",
    description: "Create compelling content calendar with engaging copy, visuals, and multimedia that resonates with your audience.",
    icon: Lightbulb,
    gradient: "from-blue-500 to-cyan-500",
    angle: 36,
    centerContent: {
      title: "CONTENT IDEATION & DESIGN",
      subtitle: "Create compelling content calendar with engaging copy, visuals, and multimedia that resonates with your audience."
    }
  },
  {
    id: 1,
    title: "Strategy & Planning",
    description: "Define goals, audience personas, platform selection, and success metrics aligned with your business objectives.",
    icon: Target,
    gradient: "from-purple-500 to-pink-500",
    angle: 0,
    centerContent: {
      title: "STRATEGY & PLANNING",
      subtitle: "Define goals, audience personas, platform selection, and success metrics aligned with your business objectives."
    }
  }
];


// ===================================
// 2. CIRCLE ICON COMPONENT
// ===================================

const HalfCircleIcon: React.FC<{
  step: ProcessStep;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}> = ({ step, isHovered, onHover, onLeave }) => {

  const radius = 35;
  const centerX = 50;
  const centerY = 40;
  const angleStep = 180 / 5;
  const angle = (step.id - 1) * angleStep;
  const radians = (angle * Math.PI) / 180;
  const x = centerX + radius * Math.cos(radians);
  let y = centerY - radius * Math.sin(radians);

  if (step.id === 2 || step.id === 5) {
    y -= 2;
  }

  const Icon = step.icon;

  return (
    <>
      {/* Desktop/Tablet Layout */}
      <div
        className="hidden md:block absolute cursor-pointer transition-all duration-300 ease-in-out group"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          transform: 'translate(-50%, -50%)'
        }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <div className={`relative w-20 h-20 rounded-full border-2 shadow-lg transition-all duration-300 ${
          isHovered ? 'border-[#f4cc6f] scale-110 shadow-xl shadow-[#f4cc6f]/30' : 'border-white/20 hover:border-[#f4cc6f]'
        }`} style={{ backgroundColor: '#0B0D2A' }}>
          <div className="relative w-full h-full flex items-center justify-center">
            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center transition-all duration-300 ${
              isHovered ? 'scale-110' : ''
            }`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 text-center w-28">
          <h3 className={`text-xs font-bold uppercase transition-colors duration-300 leading-tight ${
            isHovered ? 'text-[#f4cc6f]' : 'text-white'
          }`}>
            {step.title}
          </h3>
        </div>
      </div>

      {/* Mobile Layout */}
      <div
        className="md:hidden absolute cursor-pointer transition-all duration-300 ease-in-out group"
        style={{
          left: `${(step.id - 1) * 16.66 + 8.33}%`,
          top: '20%',
          transform: 'translate(-50%, -50%)'
        }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <div className={`relative w-14 h-14 rounded-full border-2 shadow-lg transition-all duration-300 ${
          isHovered ? 'border-[#f4cc6f] scale-110 shadow-xl' : 'border-white/20 hover:border-[#f4cc6f]'
        }`} style={{ backgroundColor: '#0B0D2A' }}>
          <div className="relative w-full h-full flex items-center justify-center">
            <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center`}>
              <Icon className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// ===================================
// 3. CENTER CONTENT COMPONENT
// ===================================

const CenterContent: React.FC<{ activeStep: ProcessStep }> = ({ activeStep }) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 max-w-xs sm:max-w-sm text-center z-20 px-4 mt-[45px] md:mt-0">
      <div
        className="rounded-xl md:rounded-2xl shadow-2xl border-2 transition-all duration-500 backdrop-blur-xl"
        style={{
          borderColor: '#f4cc6f',
          background: 'linear-gradient(135deg, rgba(11, 13, 42, 0.95) 0%, rgba(26, 29, 58, 0.95) 100%)',
          paddingTop: '40px',
          paddingBottom: '40px',
          paddingLeft: '20px',
          paddingRight: '20px'
        }}
      >
        <h3 className="text-lg sm:text-xl font-bold text-[#f4cc6f] uppercase mb-3 sm:mb-4">
          {activeStep.centerContent.title}
        </h3>
        <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
          {activeStep.centerContent.subtitle}
        </p>
      </div>
    </div>
  );
};

// ===================================
// 4. MAIN COMPONENT
// ===================================

const SocialMediaProcess: React.FC = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const handleIconHover = (stepIndex: number) => {
    setHoveredStep(stepIndex);
  };

  const handleIconLeave = () => {
    // Keep the last hovered step
  };

  const activeStepIndex = hoveredStep !== null ? hoveredStep : 0;

  return (
    <div className="container mx-auto py-20 px-6">
      <div className="relative w-full max-w-5xl mx-auto h-[400px] sm:h-[500px] md:h-[600px]">
        <CenterContent activeStep={socialMediaProcessSteps[activeStepIndex]} />

        {socialMediaProcessSteps.map((step, index) => (
          <HalfCircleIcon
            key={step.id}
            step={step}
            isHovered={hoveredStep === index}
            onHover={() => handleIconHover(index)}
            onLeave={handleIconLeave}
          />
        ))}

        <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none">
          <path
            d="M 15% 40% A 35% 35% 0 0 1 85% 40%"
            fill="none"
            stroke="#f4cc6f"
            strokeWidth="1"
            strokeDasharray="3,3"
            opacity="0.3"
          />
        </svg>
      </div>
    </div>
  );
};

export default SocialMediaProcess;
