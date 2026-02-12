"use client";

import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

/**
 * Navigate to a URL while preserving scroll position for back navigation
 * Use this for programmatic navigation instead of router.push()
 */
export function navigateWithScrollPreservation(
  router: AppRouterInstance,
  href: string,
  options?: { replace?: boolean }
) {
  // Save current scroll position
  const currentPath = window.location.pathname + window.location.search;
  sessionStorage.setItem(`scroll_${currentPath}`, String(window.scrollY));

  // Navigate
  if (options?.replace) {
    router.replace(href);
  } else {
    router.push(href);
  }
}

/**
 * Get saved scroll position for current path
 */
export function getSavedScrollPosition(): number | null {
  const currentPath = window.location.pathname + window.location.search;
  const saved = sessionStorage.getItem(`scroll_${currentPath}`);
  return saved ? parseInt(saved, 10) : null;
}

/**
 * Clear all saved scroll positions
 */
export function clearScrollPositions() {
  const keys = Object.keys(sessionStorage);
  keys.forEach(key => {
    if (key.startsWith('scroll_')) {
      sessionStorage.removeItem(key);
    }
  });
}
