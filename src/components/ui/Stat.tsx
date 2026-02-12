"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "../../lib/gsap";

type Props = { value: number; prefix?: string; suffix?: string; label: string };

export default function Stat({ value, prefix = "", suffix = "", label }: Props) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let st: import("gsap/ScrollTrigger").ScrollTrigger | null = null;
    let raf = 0;
    let mounted = true;

    (async () => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const el = ref.current; if (!mounted || !el) return;

      const animate = () => {
        const start = performance.now();
        const loop = (now: number) => {
          const t = Math.min(1, (now - start) / 1000);
          const eased = 1 - Math.pow(1 - t, 3);
          setN(Math.floor(value * eased));
          if (t < 1) raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
      };

      st = ScrollTrigger.create({ trigger: el, start: "top 85%", once: true, onEnter: animate });
    })();

    return () => { mounted = false; st?.kill(); if (raf) cancelAnimationFrame(raf); };
  }, [value]);

  return (
    <div ref={ref} className="rounded-2xl border border-border bg-white/5 px-6 py-5">
      <div className="text-3xl font-semibold tabular-nums">{prefix}{n}{suffix}</div>
      <div className="text-white/60 text-sm mt-1">{label}</div>
    </div>
  );
}
