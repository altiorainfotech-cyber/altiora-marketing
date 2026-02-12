"use client";

import clsx from "clsx";

interface DMHeroAnimationProps {
  className?: string;
}

const animationMarkup = String.raw`<div class="animation-container">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     height="99vh" viewBox="0 0 2000 1200" enable-background="new 0 0 2000 1200" xml:space="preserve">
  <defs>
    <linearGradient id="dm-gradient-1" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#7c69ef;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#EC4899;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#3B82F6;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="dm-gradient-2" gradientUnits="userSpaceOnUse" x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:#7c69ef;stop-opacity:0.8" />
    </linearGradient>
  </defs>

  <!-- Background circles -->
  <circle cx="1000" cy="600" r="450" fill="none" stroke="url(#dm-gradient-1)" stroke-width="2" opacity="0.2">
    <animateTransform attributeName="transform" type="rotate" from="0 1000 600" to="360 1000 600" dur="40s" repeatCount="indefinite"/>
  </circle>
  <circle cx="1000" cy="600" r="350" fill="none" stroke="url(#dm-gradient-2)" stroke-width="2" opacity="0.3">
    <animateTransform attributeName="transform" type="rotate" from="360 1000 600" to="0 1000 600" dur="30s" repeatCount="indefinite"/>
  </circle>
  <circle cx="1000" cy="600" r="250" fill="none" stroke="#EC4899" stroke-width="1.5" opacity="0.2">
    <animateTransform attributeName="transform" type="rotate" from="0 1000 600" to="360 1000 600" dur="25s" repeatCount="indefinite"/>
  </circle>

  <!-- Data flow lines -->
  <g>
    <line x1="400" y1="200" x2="1600" y2="1000" stroke="url(#dm-gradient-1)" stroke-width="2" opacity="0.4">
      <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite"/>
    </line>
    <line x1="300" y1="600" x2="1700" y2="600" stroke="url(#dm-gradient-2)" stroke-width="2" opacity="0.3">
      <animate attributeName="opacity" values="0.2;0.5;0.2" dur="4s" repeatCount="indefinite"/>
    </line>
    <line x1="1600" y1="200" x2="400" y2="1000" stroke="#EC4899" stroke-width="2" opacity="0.3">
      <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3.5s" repeatCount="indefinite"/>
    </line>
  </g>

  <!-- Floating data nodes -->
  <g>
    <circle cx="600" cy="400" r="8" fill="#7c69ef" opacity="0.6">
      <animate attributeName="cy" values="400;380;400" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="1400" cy="800" r="6" fill="#3B82F6" opacity="0.6">
      <animate attributeName="cy" values="800;820;800" dur="4s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="1000" cy="300" r="10" fill="#EC4899" opacity="0.6">
      <animate attributeName="cy" values="300;280;300" dur="2.5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="800" cy="900" r="7" fill="#10B981" opacity="0.6">
      <animate attributeName="cy" values="900;920;900" dur="3.5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3.5s" repeatCount="indefinite"/>
    </circle>
  </g>

  <!-- Marketing icons representations -->
  <g opacity="0.5">
    <!-- Search icon -->
    <circle cx="700" cy="500" r="30" fill="none" stroke="#7c69ef" stroke-width="3">
      <animateTransform attributeName="transform" type="scale" values="1;1.1;1" dur="2s" repeatCount="indefinite" additive="sum"/>
    </circle>

    <!-- Chart bars -->
    <rect x="1100" y="700" width="15" height="80" fill="#3B82F6" opacity="0.6">
      <animate attributeName="height" values="80;100;80" dur="2s" repeatCount="indefinite"/>
    </rect>
    <rect x="1120" y="720" width="15" height="60" fill="#EC4899" opacity="0.6">
      <animate attributeName="height" values="60;80;60" dur="2.5s" repeatCount="indefinite"/>
    </rect>
    <rect x="1140" y="700" width="15" height="80" fill="#10B981" opacity="0.6">
      <animate attributeName="height" values="80;95;80" dur="2.2s" repeatCount="indefinite"/>
    </rect>

    <!-- Target circles -->
    <circle cx="500" cy="700" r="40" fill="none" stroke="#EC4899" stroke-width="2" opacity="0.5"/>
    <circle cx="500" cy="700" r="25" fill="none" stroke="#EC4899" stroke-width="2" opacity="0.6"/>
    <circle cx="500" cy="700" r="10" fill="#EC4899" opacity="0.7"/>
  </g>

  <!-- Connecting paths -->
  <path d="M 600 400 Q 800 300 1000 300" fill="none" stroke="url(#dm-gradient-1)" stroke-width="1.5" opacity="0.3" stroke-dasharray="5,5">
    <animate attributeName="stroke-dashoffset" from="0" to="100" dur="10s" repeatCount="indefinite"/>
  </path>
  <path d="M 1400 800 Q 1200 600 1000 600" fill="none" stroke="url(#dm-gradient-2)" stroke-width="1.5" opacity="0.3" stroke-dasharray="5,5">
    <animate attributeName="stroke-dashoffset" from="100" to="0" dur="12s" repeatCount="indefinite"/>
  </path>
</svg>
</div>`;

export default function DMHeroAnimation({ className }: DMHeroAnimationProps) {
  return (
    <div
      className={clsx(
        "relative w-full h-full flex items-center justify-center pointer-events-none",
        className
      )}
      dangerouslySetInnerHTML={{ __html: animationMarkup }}
    />
  );
}
