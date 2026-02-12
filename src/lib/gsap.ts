// src/lib/gsap.ts
"use client";

import gsapDefault from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Register plugins once on the client.
 */
let registered = false;
export function registerGSAP() {
  if (!registered && typeof window !== "undefined") {
    gsapDefault.registerPlugin(ScrollTrigger);
    registered = true;
  }
}

// Export BOTH named and default for compatibility across files
export const gsap = gsapDefault;
export { ScrollTrigger };
export default gsapDefault;
