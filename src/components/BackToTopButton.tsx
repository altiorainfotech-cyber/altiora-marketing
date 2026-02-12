"use client";
import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll(); // initial
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      aria-label="Back to top"
      onClick={toTop}
      className={`fixed bottom-5 right-5 z-[9999] 
                  h-12 w-12 rounded-full shadow-xl
                  bg-blue-600 text-white border-2 border-blue-500
                  flex items-center justify-center transition-all duration-300
                  hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400
                  active:scale-95 touch-manipulation
                  ${visible ? "opacity-100 pointer-events-auto scale-100" : "opacity-0 pointer-events-none scale-75"}
                 `}
      style={{ zIndex: 9999 }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 5l-7 7m7-7l7 7M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}