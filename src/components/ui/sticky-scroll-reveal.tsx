"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export const StickyScroll = ({
  content,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const cardLength = content.length;

  // Calculate which card should be active based on scroll progress
  useEffect(() => {
    const newActiveCard = Math.round(scrollProgress * (cardLength - 1));
    setActiveCard(newActiveCard);
  }, [scrollProgress, cardLength]);



  // Smooth scroll handling with natural page-like behavior
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const target = e.target as Element;
      if (!containerRef.current?.contains(target)) return;
      
      e.preventDefault();
      e.stopPropagation();
      
      if (scrollContainerRef.current) {
        // Natural scroll behavior - let the user scroll smoothly
        const currentScrollTop = scrollContainerRef.current.scrollTop;
        const newScrollTop = currentScrollTop + e.deltaY * 0.5; // Reduce scroll speed
        
        scrollContainerRef.current.scrollTop = Math.max(0, newScrollTop);
      }
    };

    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollTop = scrollContainerRef.current.scrollTop;
        const scrollHeight = scrollContainerRef.current.scrollHeight;
        const containerHeight = scrollContainerRef.current.clientHeight;
        const maxScroll = scrollHeight - containerHeight;
        
        if (maxScroll > 0) {
          const progress = scrollTop / maxScroll;
          setScrollProgress(Math.max(0, Math.min(1, progress)));
        }
      }
    };

    const scrollElement = containerRef.current;
    const scrollContainer = scrollContainerRef.current;
    
    if (scrollElement && scrollContainer) {
      scrollElement.addEventListener('wheel', handleWheel, { passive: false });
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
      
      return () => {
        scrollElement.removeEventListener('wheel', handleWheel);
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  // Navigation functions for buttons
  const goToPrevious = () => {
    const newProgress = Math.max(0, scrollProgress - 1 / (cardLength - 1));
    scrollToProgress(newProgress);
  };

  const goToNext = () => {
    const newProgress = Math.min(1, scrollProgress + 1 / (cardLength - 1));
    scrollToProgress(newProgress);
  };

  const scrollToProgress = (progress: number) => {
    if (scrollContainerRef.current) {
      const scrollHeight = scrollContainerRef.current.scrollHeight;
      const containerHeight = scrollContainerRef.current.clientHeight;
      const maxScroll = scrollHeight - containerHeight;
      const targetScroll = progress * maxScroll;
      
      scrollContainerRef.current.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      className="relative flex flex-col lg:flex-row h-auto lg:h-[30rem] justify-center lg:space-x-10 overflow-hidden rounded-md p-4 lg:p-10 bg-[#0e172a]"
      ref={containerRef}
    >
      {/* Up Button - Top */}
      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={goToPrevious}
        className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white cursor-pointer z-30 p-2 rounded-full hover:bg-white/10 transition-all"
      >
        <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </motion.button>

      {/* Content Area with Smooth Scrolling */}
      <div className="relative flex items-center justify-center px-2 lg:px-4 flex-1 overflow-hidden mt-10 lg:mt-0">
        {/* Enhanced Shadow overlays */}
        <div className="absolute inset-0 pointer-events-none z-20">
          <div className="absolute top-0 left-0 right-0 h-16 lg:h-32 bg-gradient-to-b from-[#0e172a] via-[#0e172a]/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-16 lg:h-32 bg-gradient-to-t from-[#0e172a] via-[#0e172a]/80 to-transparent" />
        </div>
        
        {/* Scrollable Content Container */}
        <div 
          ref={scrollContainerRef}
          className="relative w-full max-w-2xl h-auto lg:h-full overflow-y-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Hide scrollbar for webkit browsers */}
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          {content.map((item, index) => {
            const isActive = index === activeCard;
            const distance = Math.abs(index - activeCard);
            const opacity = isActive ? 1 : Math.max(0.2, 1 - distance * 0.3);
            const scale = isActive ? 1 : Math.max(0.9, 1 - distance * 0.05);
            
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center py-8 lg:py-20"
                style={{ 
                  minHeight: 'auto',
                  opacity,
                  transform: `scale(${scale})`,
                  transition: 'opacity 0.3s ease, transform 0.3s ease'
                }}
              >
                <div className="flex flex-col items-center">
                  {/* Mobile: Show icon above text */}
                  <div className="lg:hidden mb-4">
                    <motion.div
                      key={`icon-mobile-${activeCard}`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        duration: 0.3,
                        ease: "easeOut"
                      }}
                      className="text-5xl"
                    >
                      {content[activeCard].content}
                    </motion.div>
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 lg:mb-6">
                    {item.title}
                  </h2>
                  <p className="text-base lg:text-xl text-white/80 leading-relaxed max-w-lg mx-auto px-2 lg:px-0">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Side Content - Sticky Icon */}
      <div className="hidden lg:flex items-center justify-center w-80 h-full">
        <motion.div
          key={`icon-${activeCard}`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.3,
            ease: "easeOut"
          }}
          className="text-8xl"
        >
          {content[activeCard].content}
        </motion.div>
      </div>

      {/* Down Button - Bottom */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={goToNext}
        className="absolute bottom-20 lg:bottom-16 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white cursor-pointer z-30 p-2 rounded-full hover:bg-white/10 transition-all"
      >
        <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.button>

      {/* Progress Dots - Bottom */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {content.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              const progress = index / (cardLength - 1);
              scrollToProgress(progress);
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full transition-all duration-300 ${
              activeCard === index ? 'bg-[#F4CC6F]' : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Progress Indicator - Hidden on mobile */}
      <div className="hidden lg:block absolute right-2 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-white/10 rounded-full z-20">
        <motion.div
          className="w-full bg-[#F4CC6F] rounded-full"
          style={{
            height: `${(scrollProgress * 100)}%`,
          }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </div>
  );
};
