"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// DNA Animation Component for Service Processes
interface DNAAnimationProps {
  title?: string | React.ReactNode;
  description?: string;
  data?: Array<{ title: string; text: string }>;
}

export default function DNAAnimation({
  title = "Our API & Integration Process",
  description = "Six meticulously crafted phases that transform complex integrations into seamless digital ecosystems. Our proven methodology ensures reliable, secure, and scalable API solutions.",
  data: propData
}: DNAAnimationProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const tilt = useTransform(scrollYProgress, [0, 1], [-1, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1.02]);

  const defaultData = [
    { title: "Scoping", text: "Align stakeholders, consumers, use cases, and success metrics." },
    { title: "Architecture", text: "Define resources, events, auth model, and non-functional requirements." },
    { title: "Build", text: "Implement services, connectors, tests, and CI/CD with gates." },
    { title: "Quality", text: "Load tests, security reviews, contract checks, and documentation." },
    { title: "Launch", text: "Publish portal, SDKs/examples, changelogs, and support processes." },
    { title: "Operate", text: "Monitor SLOs, optimize latency and cost, evolve versions safely." },
  ];

  const data = propData || defaultData;

  return (
    <section
      ref={containerRef}
      className="relative bg-[#0B0D2A] py-20 w-full"
    >
      {/* Minimal ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-1/3 left-0 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(closest-side,#F4CC6F,transparent)"
          }}
        />
        <div
          className="absolute bottom-1/3 right-0 h-[22rem] w-[22rem] translate-x-1/3 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(closest-side,#3490f3,transparent)"
          }}
        />
      </div>

      {/* Header Section */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
          {title}
        </h2>
        <p className="mt-4 text-xl leading-7 text-gray-300 max-w-4xl mx-auto">
          {description}
        </p>
      </div>

      {/* Desktop DNA - Horizontal */}
      <div className="hidden sm:block relative w-full h-150">
        {isClient ? (
          <motion.div
            style={{ rotateZ: tilt, scale }}
            className="relative w-full"
          >
            <DNASvg
              steps={75}
              amplitude={120}
              data={data}
            />
          </motion.div>
        ) : (
          <div className="relative w-full">
            <DNASvg
              steps={72}
              amplitude={90}
              data={data}
            />
          </div>
        )}
      </div>

      {/* Mobile DNA - Vertical */}
      <div className="sm:hidden">
        <MobileDNA data={data} />
      </div>

      <style jsx>{`
        @keyframes beadScroll { 
          to { offset-distance: 100%; } 
        }
        @keyframes pulse { 
          0%,100%{opacity:.3} 
          50%{opacity:.9} 
        }
        @keyframes dash { 
          to { stroke-dashoffset: -180; } 
        }
      `}</style>
    </section>
  );
}

function DNASvg({
  steps = 72,
  amplitude = 90,
  data = []
}: {
  steps?: number;
  amplitude?: number;
  data?: Array<{ title: string; text: string }>;
}) {
  // Fixed dimensions for consistent rendering
  const height = 580;
  const viewBoxWidth = 1400; // Wider for edge-to-edge effect
  const centerY = height / 2;
  const freq = (Math.PI * 2) / (viewBoxWidth / 3);

  // Generate deterministic points to avoid hydration issues
  const x = Array.from({ length: steps }, (_, i) => (i * viewBoxWidth) / (steps - 1));
  const top = x.map((xx) => ({
    x: Math.round(xx * 100) / 100, // Round to avoid floating point precision issues
    y: Math.round((centerY + Math.sin(xx * freq) * amplitude) * 100) / 100
  }));
  const bottom = x.map((xx) => ({
    x: Math.round(xx * 100) / 100,
    y: Math.round((centerY + Math.sin(xx * freq + Math.PI) * amplitude) * 100) / 100
  }));

  // Evenly space callouts left->right
  const anchors = data.map((_, i) =>
    Math.round(((i + 1) * steps) / (data.length + 1))
  );

  return (
    <div className="w-full relative">
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 ${viewBoxWidth} ${height}`}
        className="hidden sm:block drop-shadow-[0_10px_30px_rgba(0,0,0,.45)] w-full"
        preserveAspectRatio="xMidYMid slice"
        style={{ minWidth: '100vw', marginLeft: '50%', transform: 'translateX(-50%)' }}
      >
        {/* Strands with subtle moving dash for life */}
        <Strand points={top} color="#F4CC6F" dashed />
        <Strand points={bottom} color="#3490f3" dashed reverse />

        {/* Vertical rungs */}
        {x.map((_, i) => (
          <line
            key={i}
            x1={top[i].x}
            y1={top[i].y}
            x2={bottom[i].x}
            y2={bottom[i].y}
            stroke={`rgba(255,255,255,${i % 2 ? 0.06 : 0.1})`}
          />
        ))}

        {/* Traveling beads */}
        <Bead pathPoints={top} color="#F4CC6F" delay={0} speed={7.2} size={5} />
        <Bead pathPoints={bottom} color="#3490f3" delay={0.9} speed={7.2} size={5} />

        {/* Data callouts above/below with connectors */}
        {data.map((item, i) => {
          // Fixed positions for consistent layout across different data sets
          const positions = [
            { x: 114, y1: 290, y2: 170, boxX: 10, boxY: 85 },
            { x: 340, y1: 290, y2: 360, boxX: 220, boxY: 355 },
            { x: 585, y1: 290, y2: 170, boxX: 470, boxY: 85 },
            { x: 813.51, y1: 290, y2: 360, boxX: 688, boxY: 355 },
            { x: 1040, y1: 290, y2: 170, boxX: 920, boxY: 85 },
            { x: 1286, y1: 290, y2: 360, boxX: 1130, boxY: 355 }
          ];

          // Use position if available, otherwise skip rendering
          if (i >= positions.length) return null;

          const pos = positions[i];

          return (
            <g key={i}>
              <line
                x1={pos.x}
                y1={pos.y1}
                x2={pos.x}
                y2={pos.y2}
                stroke="#F4CC6F"
                strokeOpacity={0.6}
                strokeWidth={1.5}
              />
              <foreignObject
                x={pos.boxX}
                y={pos.boxY}
                width={260}
                height={140}
              >
                <div className="rounded-lg border border-[#F4CC6F]/20 bg-[#0B0D2A]/90 p-4 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.35)] hover:scale-105 transition-transform duration-200">
                  <div className="text-[#F4CC6F] text-lg font-semibold leading-tight mb-1">
                    {item.title}
                  </div>
                  <div className="text-gray-300 text-base leading-relaxed">
                    {item.text}
                  </div>
                </div>
              </foreignObject>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function Strand({
  points,
  color,
  dashed = false,
  reverse = false
}: {
  points: Array<{ x: number; y: number }>;
  color: string;
  dashed?: boolean;
  reverse?: boolean;
}) {
  const d = points
    .map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(2)},${p.y.toFixed(2)}`)
    .join(" ");

  const dashStyle = dashed
    ? {
      strokeDasharray: "6 10",
      animation: "dash 7s linear infinite",
      strokeDashoffset: reverse ? 180 : 0
    }
    : {};

  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeOpacity={0.8}
      strokeWidth={2}
      style={dashStyle}
    />
  );
}

function Bead({
  pathPoints,
  color,
  delay = 0,
  speed = 8,
  size = 4
}: {
  pathPoints: Array<{ x: number; y: number }>;
  color: string;
  delay?: number;
  speed?: number;
  size?: number;
}) {
  // Build SVG path string for the bead animation with fixed precision
  const pathData = pathPoints
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`)
    .join(' ');

  return (
    <g>
      <circle
        r={size}
        fill={color}
        opacity={0.8}
        filter={`drop-shadow(0 0 8px ${color}66)`}
      >
        <animateMotion
          dur={`${speed}s`}
          begin={`${delay}s`}
          repeatCount="indefinite"
          path={pathData}
        />
        <animate
          attributeName="opacity"
          values="0.3;0.9;0.3"
          dur="2.2s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  );
}

function MobileDNA({ data }: { data: Array<{ title: string; text: string }> }) {
  return (
    <div className="w-full mx-auto relative px-4">
      <svg
        width="350"
        height="900"
        viewBox="0 0 350 900"
        className="w-full drop-shadow-[0_10px_30px_rgba(0,0,0,.45)]"
      >
        <path d="M175.00,0.00 L193.84,15.25 L210.78,30.51 L224.10,45.76 L232.45,61.02 L234.98,76.27 L231.44,91.53 L222.19,106.78 L208.17,122.03 L190.79,137.29 L171.81,152.54 L153.15,167.80 L136.71,183.05 L124.14,198.31 L116.71,213.56 L115.19,228.81 L119.72,244.07 L129.85,259.32 L144.54,274.58 L162.32,289.83 L181.38,305.08 L199.79,320.34 L215.70,335.59 L227.49,350.85 L233.96,366.10 L234.47,381.36 L228.96,396.61 L217.99,411.86 L202.67,427.12 L184.54,442.37 L165.46,457.63 L147.33,472.88 L132.01,488.14 L121.04,503.39 L115.53,518.64 L116.04,533.90 L122.51,549.15 L134.30,564.41 L150.21,579.66 L168.62,594.92 L187.68,610.17 L205.46,625.42 L220.15,640.68 L230.28,655.93 L234.81,671.19 L233.29,686.44 L225.86,701.69 L213.29,716.95 L196.85,732.20 L178.19,747.46 L159.21,762.71 L141.83,777.97 L127.81,793.22 L118.56,808.47 L115.02,823.73 L117.55,838.98 L125.90,854.24 L139.22,869.49 L156.16,884.75 L175.00,900.00" fill="none" stroke="#F4CC6F" strokeOpacity="0.8" strokeWidth="2" style={{ strokeDasharray: "6 10", animation: "dash 7s linear infinite", strokeDashoffset: 0 }} />
        <path d="M175.00,0.00 L156.16,15.25 L139.22,30.51 L125.90,45.76 L117.55,61.02 L115.02,76.27 L118.56,91.53 L127.81,106.78 L141.83,122.03 L159.21,137.29 L178.19,152.54 L196.85,167.80 L213.29,183.05 L225.86,198.31 L233.29,213.56 L234.81,228.81 L230.28,244.07 L220.15,259.32 L205.46,274.58 L187.68,289.83 L168.62,305.08 L150.21,320.34 L134.30,335.59 L122.51,350.85 L116.04,366.10 L115.53,381.36 L121.04,396.61 L132.01,411.86 L147.33,427.12 L165.46,442.37 L184.54,457.63 L202.67,472.88 L217.99,488.14 L228.96,503.39 L234.47,518.64 L233.96,533.90 L227.49,549.15 L215.70,564.41 L199.79,579.66 L181.38,594.92 L162.32,610.17 L144.54,625.42 L129.85,640.68 L119.72,655.93 L115.19,671.19 L116.71,686.44 L124.14,701.69 L136.71,716.95 L153.15,732.20 L171.81,747.46 L190.79,762.71 L208.17,777.97 L222.19,793.22 L231.44,808.47 L234.98,823.73 L232.45,838.98 L224.10,854.24 L210.78,869.49 L193.84,884.75 L175.00,900.00" fill="none" stroke="#3490f3" strokeOpacity="0.8" strokeWidth="2" style={{ strokeDasharray: "6 10", animation: "dash 7s linear infinite", strokeDashoffset: 180 }} />

        <line x1="175" y1="0" x2="175" y2="0" stroke="rgba(255,255,255,0.1)" />
        <line x1="193.84" y1="15.25" x2="156.16" y2="15.25" stroke="rgba(255,255,255,0.06)" />
        <line x1="210.78" y1="30.51" x2="139.22" y2="30.51" stroke="rgba(255,255,255,0.1)" />
        <line x1="224.1" y1="45.76" x2="125.9" y2="45.76" stroke="rgba(255,255,255,0.06)" />
        <line x1="232.45" y1="61.02" x2="117.55" y2="61.02" stroke="rgba(255,255,255,0.1)" />
        <line x1="234.98" y1="76.27" x2="115.02" y2="76.27" stroke="rgba(255,255,255,0.06)" />
        <line x1="231.44" y1="91.53" x2="118.56" y2="91.53" stroke="rgba(255,255,255,0.1)" />
        <line x1="222.19" y1="106.78" x2="127.81" y2="106.78" stroke="rgba(255,255,255,0.06)" />
        <line x1="208.17" y1="122.03" x2="141.83" y2="122.03" stroke="rgba(255,255,255,0.1)" />
        <line x1="190.79" y1="137.29" x2="159.21" y2="137.29" stroke="rgba(255,255,255,0.06)" />
        <line x1="171.81" y1="152.54" x2="178.19" y2="152.54" stroke="rgba(255,255,255,0.1)" />
        <line x1="153.15" y1="167.8" x2="196.85" y2="167.8" stroke="rgba(255,255,255,0.06)" />
        <line x1="136.71" y1="183.05" x2="213.29" y2="183.05" stroke="rgba(255,255,255,0.1)" />
        <line x1="124.14" y1="198.31" x2="225.86" y2="198.31" stroke="rgba(255,255,255,0.06)" />
        <line x1="116.71" y1="213.56" x2="233.29" y2="213.56" stroke="rgba(255,255,255,0.1)" />
        <line x1="115.19" y1="228.81" x2="234.81" y2="228.81" stroke="rgba(255,255,255,0.06)" />
        <line x1="119.72" y1="244.07" x2="230.28" y2="244.07" stroke="rgba(255,255,255,0.1)" />
        <line x1="129.85" y1="259.32" x2="220.15" y2="259.32" stroke="rgba(255,255,255,0.06)" />
        <line x1="144.54" y1="274.58" x2="205.46" y2="274.58" stroke="rgba(255,255,255,0.1)" />
        <line x1="162.32" y1="289.83" x2="187.68" y2="289.83" stroke="rgba(255,255,255,0.06)" />
        <line x1="181.38" y1="305.08" x2="168.62" y2="305.08" stroke="rgba(255,255,255,0.1)" />
        <line x1="199.79" y1="320.34" x2="150.21" y2="320.34" stroke="rgba(255,255,255,0.06)" />
        <line x1="215.7" y1="335.59" x2="134.3" y2="335.59" stroke="rgba(255,255,255,0.1)" />
        <line x1="227.49" y1="350.85" x2="122.51" y2="350.85" stroke="rgba(255,255,255,0.06)" />
        <line x1="233.96" y1="366.1" x2="116.04" y2="366.1" stroke="rgba(255,255,255,0.1)" />
        <line x1="234.47" y1="381.36" x2="115.53" y2="381.36" stroke="rgba(255,255,255,0.06)" />
        <line x1="228.96" y1="396.61" x2="121.04" y2="396.61" stroke="rgba(255,255,255,0.1)" />
        <line x1="217.99" y1="411.86" x2="132.01" y2="411.86" stroke="rgba(255,255,255,0.06)" />
        <line x1="202.67" y1="427.12" x2="147.33" y2="427.12" stroke="rgba(255,255,255,0.1)" />
        <line x1="184.54" y1="442.37" x2="165.46" y2="442.37" stroke="rgba(255,255,255,0.06)" />
        <line x1="165.46" y1="457.63" x2="184.54" y2="457.63" stroke="rgba(255,255,255,0.1)" />
        <line x1="147.33" y1="472.88" x2="202.67" y2="472.88" stroke="rgba(255,255,255,0.06)" />
        <line x1="132.01" y1="488.14" x2="217.99" y2="488.14" stroke="rgba(255,255,255,0.1)" />
        <line x1="121.04" y1="503.39" x2="228.96" y2="503.39" stroke="rgba(255,255,255,0.06)" />
        <line x1="115.53" y1="518.64" x2="234.47" y2="518.64" stroke="rgba(255,255,255,0.1)" />
        <line x1="116.04" y1="533.9" x2="233.96" y2="533.9" stroke="rgba(255,255,255,0.06)" />
        <line x1="122.51" y1="549.15" x2="227.49" y2="549.15" stroke="rgba(255,255,255,0.1)" />
        <line x1="134.3" y1="564.41" x2="215.7" y2="564.41" stroke="rgba(255,255,255,0.06)" />
        <line x1="150.21" y1="579.66" x2="199.79" y2="579.66" stroke="rgba(255,255,255,0.1)" />
        <line x1="168.62" y1="594.92" x2="181.38" y2="594.92" stroke="rgba(255,255,255,0.06)" />
        <line x1="187.68" y1="610.17" x2="162.32" y2="610.17" stroke="rgba(255,255,255,0.1)" />
        <line x1="205.46" y1="625.42" x2="144.54" y2="625.42" stroke="rgba(255,255,255,0.06)" />
        <line x1="220.15" y1="640.68" x2="129.85" y2="640.68" stroke="rgba(255,255,255,0.1)" />
        <line x1="230.28" y1="655.93" x2="119.72" y2="655.93" stroke="rgba(255,255,255,0.06)" />
        <line x1="234.81" y1="671.19" x2="115.19" y2="671.19" stroke="rgba(255,255,255,0.1)" />
        <line x1="233.29" y1="686.44" x2="116.71" y2="686.44" stroke="rgba(255,255,255,0.06)" />
        <line x1="225.86" y1="701.69" x2="124.14" y2="701.69" stroke="rgba(255,255,255,0.1)" />
        <line x1="213.29" y1="716.95" x2="136.71" y2="716.95" stroke="rgba(255,255,255,0.06)" />
        <line x1="196.85" y1="732.2" x2="153.15" y2="732.2" stroke="rgba(255,255,255,0.1)" />
        <line x1="178.19" y1="747.46" x2="171.81" y2="747.46" stroke="rgba(255,255,255,0.06)" />
        <line x1="159.21" y1="762.71" x2="190.79" y2="762.71" stroke="rgba(255,255,255,0.1)" />
        <line x1="141.83" y1="777.97" x2="208.17" y2="777.97" stroke="rgba(255,255,255,0.06)" />
        <line x1="127.81" y1="793.22" x2="222.19" y2="793.22" stroke="rgba(255,255,255,0.1)" />
        <line x1="118.56" y1="808.47" x2="231.44" y2="808.47" stroke="rgba(255,255,255,0.06)" />
        <line x1="115.02" y1="823.73" x2="234.98" y2="823.73" stroke="rgba(255,255,255,0.1)" />
        <line x1="117.55" y1="838.98" x2="232.45" y2="838.98" stroke="rgba(255,255,255,0.06)" />
        <line x1="125.9" y1="854.24" x2="224.1" y2="854.24" stroke="rgba(255,255,255,0.1)" />
        <line x1="139.22" y1="869.49" x2="210.78" y2="869.49" stroke="rgba(255,255,255,0.06)" />
        <line x1="156.16" y1="884.75" x2="193.84" y2="884.75" stroke="rgba(255,255,255,0.1)" />
        <line x1="175" y1="900" x2="175" y2="900" stroke="rgba(255,255,255,0.06)" />

        <g>
          <circle r="4" fill="#F4CC6F" opacity="0.8" filter="drop-shadow(0 0 8px #F4CC6F66)">
            <animateMotion dur="8s" begin="0s" repeatCount="indefinite" path="M 175.00 0.00 L 193.84 15.25 L 210.78 30.51 L 224.10 45.76 L 232.45 61.02 L 234.98 76.27 L 231.44 91.53 L 222.19 106.78 L 208.17 122.03 L 190.79 137.29 L 171.81 152.54 L 153.15 167.80 L 136.71 183.05 L 124.14 198.31 L 116.71 213.56 L 115.19 228.81 L 119.72 244.07 L 129.85 259.32 L 144.54 274.58 L 162.32 289.83 L 181.38 305.08 L 199.79 320.34 L 215.70 335.59 L 227.49 350.85 L 233.96 366.10 L 234.47 381.36 L 228.96 396.61 L 217.99 411.86 L 202.67 427.12 L 184.54 442.37 L 165.46 457.63 L 147.33 472.88 L 132.01 488.14 L 121.04 503.39 L 115.53 518.64 L 116.04 533.90 L 122.51 549.15 L 134.30 564.41 L 150.21 579.66 L 168.62 594.92 L 187.68 610.17 L 205.46 625.42 L 220.15 640.68 L 230.28 655.93 L 234.81 671.19 L 233.29 686.44 L 225.86 701.69 L 213.29 716.95 L 196.85 732.20 L 178.19 747.46 L 159.21 762.71 L 141.83 777.97 L 127.81 793.22 L 118.56 808.47 L 115.02 823.73 L 117.55 838.98 L 125.90 854.24 L 139.22 869.49 L 156.16 884.75 L 175.00 900.00" />
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.2s" repeatCount="indefinite" />
          </circle>
        </g>

        <g>
          <circle r="4" fill="#3490f3" opacity="0.8" filter="drop-shadow(0 0 8px #3490f366)">
            <animateMotion dur="8s" begin="1s" repeatCount="indefinite" path="M 175.00 0.00 L 156.16 15.25 L 139.22 30.51 L 125.90 45.76 L 117.55 61.02 L 115.02 76.27 L 118.56 91.53 L 127.81 106.78 L 141.83 122.03 L 159.21 137.29 L 178.19 152.54 L 196.85 167.80 L 213.29 183.05 L 225.86 198.31 L 233.29 213.56 L 234.81 228.81 L 230.28 244.07 L 220.15 259.32 L 205.46 274.58 L 187.68 289.83 L 168.62 305.08 L 150.21 320.34 L 134.30 335.59 L 122.51 350.85 L 116.04 366.10 L 115.53 381.36 L 121.04 396.61 L 132.01 411.86 L 147.33 427.12 L 165.46 442.37 L 184.54 457.63 L 202.67 472.88 L 217.99 488.14 L 228.96 503.39 L 234.47 518.64 L 233.96 533.90 L 227.49 549.15 L 215.70 564.41 L 199.79 579.66 L 181.38 594.92 L 162.32 610.17 L 144.54 625.42 L 129.85 640.68 L 119.72 655.93 L 115.19 671.19 L 116.71 686.44 L 124.14 701.69 L 136.71 716.95 L 153.15 732.20 L 171.81 747.46 L 190.79 762.71 L 208.17 777.97 L 222.19 793.22 L 231.44 808.47 L 234.98 823.73 L 232.45 838.98 L 224.10 854.24 L 210.78 869.49 L 193.84 884.75 L 175.00 900.00" />
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.2s" repeatCount="indefinite" />
          </circle>
        </g>

        {data.map((item, i) => {
          const boxHeight = 140;
          const gap = 152;

          const boxY = 20 + i * gap;
          const boxX = i % 2 === 0 ? 0 : 160;

          const pos = {
            boxX,
            boxY,
            width: 190,
            height: boxHeight
          };

          return (
            <g key={i}>
              <line
                x1={175}
                y1={boxY + boxHeight / 2}
                x2={i % 2 === 0 ? pos.boxX + pos.width : pos.boxX}
                y2={boxY + boxHeight / 2}
                stroke="#F4CC6F"
                strokeOpacity={0.6}
                strokeWidth={1.5}
              />
              <foreignObject
                x={pos.boxX}
                y={pos.boxY}
                width={pos.width}
                height={pos.height}
              >
                <div className="rounded-lg border border-[#F4CC6F]/20 bg-[#0B0D2A]/90 p-3 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.35)]">
                  <div className="text-[#F4CC6F] text-sm font-semibold leading-tight mb-1">
                    {item.title}
                  </div>
                  <div className="text-gray-300 text-xs leading-relaxed">
                    {item.text}
                  </div>
                </div>
              </foreignObject>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
