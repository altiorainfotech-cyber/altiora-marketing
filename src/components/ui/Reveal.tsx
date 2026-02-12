"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, registerGSAP } from "../../lib/gsap";

type Props = { children: React.ReactNode; className?: string };

export default function Reveal({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGSAP(); // ensures ScrollTrigger is registered once

    const el = ref.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y: 24 });

    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      onEnter: () =>
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        }),
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
