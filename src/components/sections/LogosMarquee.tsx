// src/components/sections/LogosMarquee.tsx
"use client";

export default function LogosMarquee() {
  return (
    <section className="px-6 py-10 border-y border-white/10 bg-[#000614]">
      <div className="max-w-6xl mx-auto">
        <p className="text-white/60 text-sm mb-4">Trusted by teams behind</p>
        <div className="overflow-hidden relative">
          <div className="flex gap-10 animate-[marquee_20s_linear_infinite] whitespace-nowrap text-white/70">
            {["OYO","Mamaearth","Vahdam Teas","Fruit of the Loom","Temu","Debenhams"].map((b,i)=>(
              <span key={i} className="text-base tracking-wide">{b}</span>
            ))}
            {["OYO","Mamaearth","Vahdam Teas","Fruit of the Loom","Temu","Debenhams"].map((b,i)=>(
              <span key={`d${i}`} className="text-base tracking-wide">{b}</span>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </section>
  );
}
