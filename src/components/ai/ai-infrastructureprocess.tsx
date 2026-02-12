import React, { useState, useEffect } from 'react';
import { Target, Database, Cpu, CheckCircle, Shield, RotateCcw, LucideIcon } from 'lucide-react';
import Image from 'next/image';

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

/** Your AI infrastructure process content with top half-circle positioning. */
const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Scoping and Assessment",
    description: "Goals, requirements, constraints, and success measures.",
    icon: Target,
    iconPath: "/images/icon/process-section/Scoping.svg",
    gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
    angle: 0, // Top center
    centerContent: {
      title: "SCOPING AND ASSESSMENT",
      subtitle: "Goals, requirements, constraints, and success measures.",
      details: [],
      features: []
    }
  },
  {
    id: 2,
    title: "Architecture and Capacity Plan",
    description: "Compute, storage, network, and security design with growth forecast.",
    icon: Database,
    iconPath: "/images/icon/process-section/Architecture.svg",
    gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
    angle: 36, // 36 degrees from top
    centerContent: {
      title: "ARCHITECTURE AND CAPACITY PLAN",
      subtitle: "Compute, storage, network, and security design with growth forecast.",
      details: [],
      features: []
    }
  },
  {
    id: 3,
    title: "Environment Build",
    description: "Provision cloud or hybrid, implement IaC, identity, and baseline controls.",
    icon: Cpu,
    iconPath: "/images/icon/process-section/Environment.svg",
    gradient: "bg-gradient-to-br from-yellow-500 to-orange-500",
    angle: 72, // 72 degrees from top
    centerContent: {
      title: "ENVIRONMENT BUILD",
      subtitle: "Provision cloud or hybrid, implement IaC, identity, and baseline controls.",
      details: [],
      features: []
    }
  },
  {
    id: 4,
    title: "Platform Enablement",
    description: "Model serving, pipelines, registries, and observability wiring.",
    icon: CheckCircle,
    iconPath: "/images/icon/process-section/Platform.svg",
    gradient: "bg-gradient-to-br from-teal-500 to-cyan-500",
    angle: 108, // 108 degrees from top
    centerContent: {
      title: "PLATFORM ENABLEMENT",
      subtitle: "Model serving, pipelines, registries, and observability wiring.",
      details: [],
      features: []
    }
  },
  {
    id: 5,
    title: "Hardening and Launch",
    description: "Load tests, chaos checks, runbooks, SLOs, and access policies.",
    icon: Shield,
    iconPath: "/images/icon/process-section/Hardening.svg",
    gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
    angle: 144, // 144 degrees from top
    centerContent: {
      title: "HARDENING AND LAUNCH",
      subtitle: "Load tests, chaos checks, runbooks, SLOs, and access policies.",
      details: [],
      features: []
    }
  },
  {
    id: 6,
    title: "Operate and Improve",
    description: "Monitor reliability and cost, optimize performance, and scale safely.",
    icon: RotateCcw,
    iconPath: "/images/icon/process-section/Operate.svg",
    gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
    angle: 180, // Bottom center (180 degrees from top)
    centerContent: {
      title: "OPERATE AND IMPROVE",
      subtitle: "Monitor reliability and cost, optimize performance, and scale safely.",
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
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 max-w-xs sm:max-w-sm text-center z-20 px-4">
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

interface IProcessStepFromDB {
  step?: number;
  title: string;
  description: string;
  icon?: string;
  iconPath?: string;
}

interface AIInfrastructureFlowProps {
  processSteps?: IProcessStepFromDB[];
}

/** Map DB step to ProcessStep format */
function mapDbStepToProcess(dbStep: IProcessStepFromDB, index: number): ProcessStep {
  const angles = [0, 36, 72, 108, 144, 180];
  const icons = [Target, Database, Cpu, CheckCircle, Shield, RotateCcw];
  const gradients = [
    "bg-gradient-to-br from-purple-500 to-pink-500",
    "bg-gradient-to-br from-blue-500 to-cyan-500",
    "bg-gradient-to-br from-yellow-500 to-orange-500",
    "bg-gradient-to-br from-teal-500 to-cyan-500",
    "bg-gradient-to-br from-purple-500 to-pink-500",
    "bg-gradient-to-br from-red-500 to-orange-500"
  ];

  const iconPaths = [
    "/images/icon/process-section/Scoping.svg",
    "/images/icon/process-section/Architecture.svg",
    "/images/icon/process-section/Environment.svg",
    "/images/icon/process-section/Platform.svg",
    "/images/icon/process-section/Hardening.svg",
    "/images/icon/process-section/Operate.svg"
  ];

  return {
    id: dbStep.step || index + 1,
    title: dbStep.title,
    description: dbStep.description,
    icon: icons[index % icons.length],
    iconPath: dbStep.iconPath || iconPaths[index % iconPaths.length],
    gradient: gradients[index % gradients.length],
    angle: angles[index % angles.length],
    centerContent: {
      title: dbStep.title.toUpperCase(),
      subtitle: dbStep.description,
      details: [],
      features: []
    }
  };
}

// ===================================
// 4. MAIN ROTATING INFOGRAPHIC COMPONENT
// ===================================

export const AIInfrastructureFlow: React.FC<AIInfrastructureFlowProps> = ({ processSteps: dynamicSteps }) => {
  // Use dynamic steps if provided, otherwise fall back to defaults
  const stepsToUse = dynamicSteps && dynamicSteps.length > 0 
    ? dynamicSteps.map((step, index) => mapDbStepToProcess(step, index))
    : processSteps;
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

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
        <CenterContent activeStep={stepsToUse[activeStepIndex]} />

        {/* Responsive Icons */}
        {stepsToUse.map((step, index) => (
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
