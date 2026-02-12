import React, { useState, useEffect } from 'react';
import { Search, Map, Building2, Database, CheckCircle, RotateCcw, LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { getIcon } from '@/lib/utils/icon-mapper';
import { IProcessStep } from '@/lib/models/AiMlService';

// ===================================
// 1. TYPESCRIPT INTERFACE & DATA
// ===================================

/** Defines the structure for a single step in the process flow. */
interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  iconPath: string;
  gradient: string;
  angle: number; // Angle in degrees for positioning
  centerContent: {
    title: string;
    subtitle: string;
    details: string[];
    features: string[];
  };
}

/** Map icon names to lucide icons and paths */
const getProcessStepDetails = (step: IProcessStep, index: number): ProcessStep => {
  const iconMap: { [key: string]: LucideIcon } = {
    'Search': Search,
    'Map': Map,
    'Building2': Building2,
    'Database': Database,
    'CheckCircle': CheckCircle,
    'RotateCcw': RotateCcw
  };

  const iconPathMap: { [key: string]: string } = {
    'Search': '/images/icon/process-section/Scoping.svg',
    'Map': '/images/icon/process-section/Architecture.svg',
    'Building2': '/images/icon/process-section/Build.svg',
    'Database': '/images/icon/process-section/Pipelines.svg',
    'CheckCircle': '/images/icon/process-section/Hardening.svg',
    'RotateCcw': '/images/icon/process-section/Operate.svg'
  };

  const gradients = [
    "bg-gradient-to-br from-purple-500 to-pink-500",
    "bg-gradient-to-br from-blue-500 to-cyan-500",
    "bg-gradient-to-br from-yellow-500 to-orange-500",
    "bg-gradient-to-br from-teal-500 to-cyan-500",
    "bg-gradient-to-br from-purple-500 to-pink-500",
    "bg-gradient-to-br from-blue-500 to-cyan-500"
  ];

  const angleStep = 180 / 5;
  const angle = index * angleStep;

  return {
    id: step.step,
    title: step.title,
    description: step.description,
    icon: iconMap[step.icon] || Search,
    iconPath: iconPathMap[step.icon] || '/images/icon/process-section/Scoping.svg',
    gradient: gradients[index % gradients.length],
    angle,
    centerContent: {
      title: step.title.toUpperCase(),
      subtitle: step.description,
      details: step.details ? [step.details] : [],
      features: []
    }
  };
};

/** Default process steps if none provided */
const defaultProcessSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Scoping and Discovery",
    description: "Understand goals, stakeholders, sources, pain points, and metrics.",
    icon: Search,
    iconPath: "/images/icon/process-section/Scoping.svg",
    gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
    angle: 0, // Top center
    centerContent: {
      title: "SCOPING AND DISCOVERY",
      subtitle: "Understand goals, stakeholders, sources, pain points, and metrics.",
      details: [],
      features: []
    }
  },
  {
    id: 2,
    title: "Architecture and Roadmap",
    description: "Define target state, governance model, backlog, and success measures.",
    icon: Map,
    iconPath: "/images/icon/process-section/Architecture.svg",
    gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
    angle: 36, // 36 degrees from top
    centerContent: {
      title: "ARCHITECTURE AND ROADMAP",
      subtitle: "Define target state, governance model, backlog, and success measures.",
      details: [],
      features: []
    }
  },
  {
    id: 3,
    title: "Build Foundations",
    description: "Stand up environments, identity, networking, and dev standards.",
    icon: Building2,
    iconPath: "/images/icon/process-section/Build.svg",
    gradient: "bg-gradient-to-br from-yellow-500 to-orange-500",
    angle: 72, // 72 degrees from top
    centerContent: {
      title: "BUILD FOUNDATIONS",
      subtitle: "Stand up environments, identity, networking, and dev standards.",
      details: [],
      features: []
    }
  },
  {
    id: 4,
    title: "Pipelines and Modeling",
    description: "Implement ingestion, transforms, data contracts, and semantic layers.",
    icon: Database,
    iconPath: "/images/icon/process-section/Pipelines.svg",
    gradient: "bg-gradient-to-br from-teal-500 to-cyan-500",
    angle: 108, // 108 degrees from top
    centerContent: {
      title: "PIPELINES AND MODELING",
      subtitle: "Implement ingestion, transforms, data contracts, and semantic layers.",
      details: [],
      features: []
    }
  },
  {
    id: 5,
    title: "Validation and Hardening",
    description: "Quality checks, performance tuning, documentation, and training.",
    icon: CheckCircle,
    iconPath: "/images/icon/process-section/Hardening.svg",
    gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
    angle: 144, // 144 degrees from top
    centerContent: {
      title: "VALIDATION AND HARDENING",
      subtitle: "Quality checks, performance tuning, documentation, and training.",
      details: [],
      features: []
    }
  },
  {
    id: 6,
    title: "Operate and Improve",
    description: "Monitor reliability and cost, iterate on models and workloads.",
    icon: RotateCcw,
    iconPath: "/images/icon/process-section/Operate.svg",
    gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
    angle: 180, // Bottom center (180 degrees from top)
    centerContent: {
      title: "OPERATE AND IMPROVE",
      subtitle: "Monitor reliability and cost, iterate on models and workloads.",
      details: [],
      features: []
    }
  },
];

// ===================================
// 2. ROTATING CIRCLE COMPONENT
// ===================================

/** Component for rendering a step in the responsive layout. */
const HalfCircleIcon: React.FC<{
  step: ProcessStep;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}> = ({ step, isHovered, onHover, onLeave }) => {

  // Calculate position for desktop/tablet (half-circle with equal angular spacing)
  const radius = 35;
  const centerX = 50;
  const centerY = 40;
  const angleStep = 180 / 5; // 180 degrees divided by 5 intervals for 6 points
  const angle = (step.id - 1) * angleStep;
  const radians = (angle * Math.PI) / 180;
  const x = centerX + radius * Math.cos(radians);
  let y = centerY - radius * Math.sin(radians);
  // Move second right (step 2) and second left (step 5) circles up by 10px (approx 2%)
  if (step.id === 2 || step.id === 5) {
    y -= 2;
  }

  return (
    <>
      {/* Desktop/Tablet Layout - Half Circle */}
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
        {/* Main Circle */}
        <div className={`relative w-20 h-20 rounded-full border-2 shadow-lg transition-all duration-300 ${
          isHovered ? 'border-[#0e172d] scale-110 shadow-xl' : 'border-[#0e172d] hover:border-[#0e172d]'
        }`} style={{ backgroundColor: '#0e172d' }}>

          {/* Icon */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-[#0e172d] flex items-center justify-center">
              <Image src={step.iconPath} width={40} height={40} alt={step.title} className="w-10 h-10 object-contain" />
            </div>
          </div>
        </div>

        {/* Title Under Circle */}
        <div className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 text-center w-24">
          <h3 className={`text-xs font-bold uppercase transition-colors duration-300 leading-tight ${
            isHovered ? 'text-white' : 'text-white'
          }`}>
            {step.title}
          </h3>
        </div>
      </div>

      {/* Mobile Layout - Icons Only */}
      <div
        className="md:hidden absolute cursor-pointer transition-all duration-300 ease-in-out group"
        style={{
          left: `${(step.id - 1) * 16.66 + 8.33}%`, // Evenly distribute across width
          top: '20%',
          transform: 'translate(-50%, -50%)'
        }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        {/* Main Circle - Icons Only */}
        <div className={`relative w-16 h-16 rounded-full border-2 shadow-lg transition-all duration-300 ${
          isHovered ? 'border-[#0e172d] scale-110 shadow-xl' : 'border-[#0e172d] hover:border-[#0e172d]'
        }`} style={{ backgroundColor: '#0e172d' }}>

          {/* Icon */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-[#0e172d] flex items-center justify-center">
              <Image src={step.iconPath} width={40} height={40} alt={step.title} className="w-10 h-10 object-contain" />
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

/** Component for displaying active step content in the center. */
const CenterContent: React.FC<{ activeStep: ProcessStep }> = ({ activeStep }) => {
  // Extract gradient colors for background
  const getGradientColors = (gradient: string) => {
    if (gradient.includes('purple') && gradient.includes('pink')) {
      return { from: '#8b5cf6', to: '#ec4899' };
    } else if (gradient.includes('blue') && gradient.includes('cyan')) {
      return { from: '#3b82f6', to: '#06b6d4' };
    } else if (gradient.includes('yellow') && gradient.includes('orange')) {
      return { from: '#eab308', to: '#f97316' };
    } else if (gradient.includes('teal') && gradient.includes('cyan')) {
      return { from: '#14b8a6', to: '#06b6d4' };
    }
    return { from: '#8b5cf6', to: '#ec4899' }; // default
  };

  const colors = getGradientColors(activeStep.gradient);

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 max-w-xs sm:max-w-sm text-center z-20 px-4 mt-[45px] md:mt-0">
      <div
        className="rounded-xl md:rounded-2xl shadow-2xl border-2 transition-all duration-500"
        style={{
          borderColor: '#0e172d',
          background: '#0e172d',
          paddingTop: '50px',
          paddingBottom: '50px',
          paddingLeft: '16px',
          paddingRight: '16px'
        }}
      >
        <h3 className="text-lg sm:text-xl font-bold text-white uppercase mb-3 sm:mb-4">
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
// 4. MAIN ROTATING INFOGRAPHIC COMPONENT
// ===================================

interface DataStrategyFlowProps {
  processSteps?: IProcessStep[];
}

export const DataStrategyFlow: React.FC<DataStrategyFlowProps> = ({ processSteps: dynamicSteps }) => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  // Convert dynamic steps to ProcessStep format or use defaults
  const processSteps: ProcessStep[] = dynamicSteps 
    ? dynamicSteps.map((step, index) => getProcessStepDetails(step, index))
    : defaultProcessSteps;

  const handleIconHover = (stepIndex: number) => {
    setHoveredStep(stepIndex);
  };

  const handleIconLeave = () => {
    // Keep the last hovered step, do not reset to default
  };

  // Default to first step if no hover
  const activeStepIndex = hoveredStep !== null ? hoveredStep : 0;

  return (
    <div className="container mx-auto  ">
      {/* Title Section - Responsive */}
     

      {/* Responsive Infographic Container */}
      <div className="relative w-full max-w-5xl mx-auto h-[400px] sm:h-[500px] md:h-[600px]">

        {/* Center Content */}
        <CenterContent activeStep={processSteps[activeStepIndex]} />

        {/* Responsive Icons */}
        {processSteps.map((step: ProcessStep, index: number) => (
          <HalfCircleIcon
            key={step.id}
            step={step}
            isHovered={hoveredStep === index}
            onHover={() => handleIconHover(index)}
            onLeave={handleIconLeave}
          />
        ))}

        {/* Connection Lines - Hidden on mobile, visible on larger screens */}
        <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none">
          <path
            d="M 15% 40% A 35% 35% 0 0 1 85% 40%"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="1"
            strokeDasharray="3,3"
            opacity="0.5"
          />
        </svg>
      </div>
    </div>
  );
};
