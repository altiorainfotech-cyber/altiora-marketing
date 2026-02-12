"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MouseEvent, ReactNode } from 'react';

interface ScrollLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
  [key: string]: any;
}

/**
 * Enhanced Link component that preserves scroll position on navigation
 * Use this instead of Next.js Link for better scroll restoration
 */
export default function ScrollLink({ 
  href, 
  children, 
  onClick,
  scroll = false,
  ...props 
}: ScrollLinkProps) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Call custom onClick if provided
    if (onClick) {
      onClick(e);
    }

    // Let Next.js handle the navigation normally
    // The ScrollRestorationProvider will handle scroll position
  };

  return (
    <Link 
      href={href} 
      onClick={handleClick}
      scroll={scroll}
      {...props}
    >
      {children}
    </Link>
  );
}
