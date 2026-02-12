"use client";

import { useEffect, useRef, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Global storage for scroll positions
const scrollPositions = new Map<string, number>();

// Enable debug logging
const DEBUG = true;

function ScrollRestorationProviderInner({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isRestoringRef = useRef(false);
  const lastPathnameRef = useRef(pathname);

  useEffect(() => {
    const fullPath = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    
    // ScrollRestore mounted
    
    // Save scroll position when leaving a page
    const saveScrollPosition = () => {
      if (!isRestoringRef.current) {
        const currentPath = lastPathnameRef.current;
        const scrollY = window.scrollY;
        scrollPositions.set(currentPath, scrollY);
        
        // Also save to sessionStorage
        try {
          sessionStorage.setItem(`scroll_${currentPath}`, String(scrollY));
        } catch (e) {
          // Save error
        }
      }
    };

    // Restore scroll position when entering a page
    const restoreScrollPosition = () => {
      let savedPosition = scrollPositions.get(fullPath);
      
      // Fallback to sessionStorage
      if (savedPosition === undefined) {
        try {
          const stored = sessionStorage.getItem(`scroll_${fullPath}`);
          if (stored) {
            savedPosition = parseInt(stored, 10);
          }
        } catch (e) {
          // Load error
        }
      }
      
      if (savedPosition !== undefined && savedPosition > 0) {
        isRestoringRef.current = true;
        
        // Restoring scroll position
        
        // Aggressive restoration strategy
        const attemptRestore = () => {
          window.scrollTo({ top: savedPosition, behavior: 'instant' as ScrollBehavior });
        };
        
        // Try immediate restoration
        attemptRestore();
        
        // Multiple retry attempts for dynamic content
        const timeouts = [50, 100, 150, 200, 300, 400, 500, 700, 1000];
        const intervalIds: NodeJS.Timeout[] = [];
        
        timeouts.forEach(delay => {
          const id = setTimeout(() => {
            attemptRestore();
          }, delay);
          intervalIds.push(id);
        });
        
        // Also watch for DOM changes and restore
        const observer = new MutationObserver(() => {
          if (isRestoringRef.current) {
            attemptRestore();
          }
        });
        
        observer.observe(document.body, {
          childList: true,
          subtree: true,
          attributes: false
        });
        
        // Reset flag and cleanup
        setTimeout(() => {
          isRestoringRef.current = false;
          observer.disconnect();
        }, 1200);
      } else if (lastPathnameRef.current !== pathname) {
        // New page - scroll to top
        window.scrollTo(0, 0);
      }
    };

    // Save current position before pathname changes
    if (lastPathnameRef.current !== pathname) {
      saveScrollPosition();
      lastPathnameRef.current = pathname;
    }

    // Restore position for current page
    restoreScrollPosition();

    // Save on scroll (debounced)
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (!isRestoringRef.current) {
          const scrollY = window.scrollY;
          scrollPositions.set(fullPath, scrollY);
          try {
            sessionStorage.setItem(`scroll_${fullPath}`, String(scrollY));
          } catch (e) {
            // Ignore
          }
        }
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [pathname, searchParams]);

  return <>{children}</>;
}

function ScrollRestorationProvider({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={<>{children}</>}>
      <ScrollRestorationProviderInner>{children}</ScrollRestorationProviderInner>
    </Suspense>
  );
}

export default ScrollRestorationProvider;
