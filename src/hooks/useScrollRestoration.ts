"use client";

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

// Store scroll positions in memory (survives navigation within the same session)
const scrollPositions = new Map<string, number>();

export function useScrollRestoration() {
  const pathname = usePathname();
  const isRestoringRef = useRef(false);

  useEffect(() => {
    // Save scroll position before navigating away
    const saveScrollPosition = () => {
      if (!isRestoringRef.current) {
        scrollPositions.set(pathname, window.scrollY);
      }
    };

    // Restore scroll position when component mounts
    const restoreScrollPosition = () => {
      const savedPosition = scrollPositions.get(pathname);
      
      if (savedPosition !== undefined) {
        isRestoringRef.current = true;
        
        // Use requestAnimationFrame to ensure DOM is ready
        requestAnimationFrame(() => {
          window.scrollTo({
            top: savedPosition,
            behavior: 'instant' as ScrollBehavior
          });
          
          // Reset flag after a short delay
          setTimeout(() => {
            isRestoringRef.current = false;
          }, 100);
        });
      }
    };

    // Restore on mount
    restoreScrollPosition();

    // Save on scroll (debounced)
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(saveScrollPosition, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Save before unload
    return () => {
      window.removeEventListener('scroll', handleScroll);
      saveScrollPosition();
    };
  }, [pathname]);
}
