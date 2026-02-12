"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export const MobileHowWeWorkScroll = ({
  content,
}: {
  content: {
    step: string;
    title: string;
    description: string;
    icon: string;
  }[];
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const cardLength = content.length;

  // Note: activeCard is now managed directly in scroll handler and navigation functions

  // Touch handling for mobile swipe
  useEffect(() => {
    let startX = 0;
    let startY = 0;
    let isScrolling = false;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isScrolling = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!startX || !startY) return;

      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const diffX = startX - currentX;
      const diffY = startY - currentY;

      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 10) {
        isScrolling = true;
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!startX || !startY || !isScrolling) return;

      const currentX = e.changedTouches[0].clientX;
      const diffX = startX - currentX;

      if (Math.abs(diffX) > 50) { // Minimum swipe distance
        if (diffX > 0) {
          // Swipe left = go to next
          goToNext();
        } else {
          // Swipe right = go to previous
          goToPrevious();
        }
      }

      startX = 0;
      startY = 0;
      isScrolling = false;
    };

    const scrollElement = containerRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('touchstart', handleTouchStart, { passive: false });
      scrollElement.addEventListener('touchmove', handleTouchMove, { passive: false });
      scrollElement.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener('touchstart', handleTouchStart);
        scrollElement.removeEventListener('touchmove', handleTouchMove);
        scrollElement.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [activeCard, cardLength]);

  // Horizontal scroll handling with natural page-like behavior
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const target = e.target as Element;
      if (!containerRef.current?.contains(target)) return;

      e.preventDefault();
      e.stopPropagation();

      // Use wheel direction to navigate between cards
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        // Vertical wheel - convert to horizontal navigation
        if (e.deltaY > 0) {
          // Scroll down = go to next
          goToNext();
        } else {
          // Scroll up = go to previous
          goToPrevious();
        }
      } else if (scrollContainerRef.current) {
        // Horizontal wheel - allow natural scroll
        const currentScrollLeft = scrollContainerRef.current.scrollLeft;
        const newScrollLeft = currentScrollLeft + e.deltaX * 0.5;
        scrollContainerRef.current.scrollLeft = Math.max(0, newScrollLeft);
      }
    };

    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const containerWidth = scrollContainerRef.current.clientWidth;
        const maxScroll = containerWidth * (cardLength - 1);

        if (maxScroll > 0) {
          const progress = scrollLeft / maxScroll;
          setScrollProgress(Math.max(0, Math.min(1, progress)));

          // Update active card based on scroll position
          const newActiveCard = Math.round(progress * (cardLength - 1));
          setActiveCard(Math.max(0, Math.min(cardLength - 1, newActiveCard)));
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
    const newIndex = Math.max(0, activeCard - 1);
    scrollToIndex(newIndex);
    setActiveCard(newIndex);
  };

  const goToNext = () => {
    const newIndex = Math.min(cardLength - 1, activeCard + 1);
    scrollToIndex(newIndex);
    setActiveCard(newIndex);
  };

  const scrollToProgress = (progress: number) => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      const targetScroll = progress * containerWidth * (cardLength - 1);

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      const targetScroll = index * containerWidth;

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      className="relative flex h-[20rem] sm:h-[32rem] justify-center overflow-hidden rounded-2xl p-3 sm:p-4 bg-gradient-to-br from-[#0e172a] to-[#1a2332]"
      ref={containerRef}
    >
      {/* Left Button */}
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white cursor-pointer z-30 p-1.5 sm:p-2 rounded-full hover:bg-white/10 transition-all"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>

      {/* Content Area with Horizontal Scrolling */}
      <div className="relative flex items-center justify-center px-8 sm:px-12 flex-1 overflow-hidden">
        {/* Enhanced Shadow overlays for horizontal */}
        <div className="absolute inset-0 pointer-events-none z-20">
          <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-[#0e172a] via-[#0e172a]/80 to-transparent" />
          <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-[#0e172a] via-[#0e172a]/80 to-transparent" />
        </div>

        {/* Horizontal Scrollable Content Container */}
        <div
          ref={scrollContainerRef}
          className="relative w-full h-full overflow-x-auto scrollbar-hide flex snap-x snap-mandatory"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            scrollSnapType: 'x mandatory'
          }}
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
            const opacity = isActive ? 1 : Math.max(0.3, 1 - distance * 0.4);
            const scale = isActive ? 1 : Math.max(0.85, 1 - distance * 0.08);

            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center flex-shrink-0 snap-center"
                style={{
                  width: '100%',
                  minWidth: '100%',
                  opacity,
                  transform: `scale(${scale})`,
                  transition: 'opacity 0.3s ease, transform 0.3s ease',
                  scrollSnapAlign: 'center'
                }}
              >
                <div className="flex flex-col items-center space-y-1.5 sm:space-y-4 px-4 sm:px-8">
                  {/* Icon */}
                  <div className="w-8 h-8 sm:w-16 sm:h-16 bg-[#F4CC6F]/20 rounded-lg sm:rounded-2xl flex items-center justify-center text-lg sm:text-3xl mb-0.5 sm:mb-2">
                    {item.icon}
                  </div>

                  {/* Step Number */}
                  <span className="text-[#F4CC6F] font-bold text-xs sm:text-lg">{item.step}</span>

                  {/* Title */}
                  <h3 className="text-base sm:text-2xl font-bold text-white mb-1 sm:mb-4 leading-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-base text-white/80 leading-relaxed max-w-[180px] sm:max-w-xs mx-auto">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Button */}
      <motion.button
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white cursor-pointer z-30 p-1.5 sm:p-2 rounded-full hover:bg-white/10 transition-all"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      {/* Progress Dots - Bottom */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-30">
        {content.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              scrollToIndex(index);
              setActiveCard(index);
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${activeCard === index ? 'bg-[#F4CC6F]' : 'bg-white/30 hover:bg-white/50'
              }`}
          />
        ))}
      </div>

      {/* Horizontal Scroll Progress Indicator */}
      <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-0.5 sm:h-1 bg-white/10 rounded-full z-20">
        <motion.div
          className="h-full bg-[#F4CC6F] rounded-full"
          style={{
            width: `${(scrollProgress * 100)}%`,
          }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </div>
  );
};