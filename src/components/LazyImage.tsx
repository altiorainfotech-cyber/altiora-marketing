'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import OptimizedImage, { BlogThumbnail } from './OptimizedImage';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  placeholder?: React.ReactNode;
  onIntersect?: () => void;
}

// Intersection Observer hook
function useIntersectionObserver(
  elementRef: React.RefObject<Element | null>,
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options, elementRef]);

  return isIntersecting;
}

// Generic lazy loading wrapper
export function LazyImage({
  src,
  alt,
  className = '',
  threshold = 0.1,
  rootMargin = '50px',
  placeholder,
  onIntersect,
  ...props
}: LazyImageProps & React.ComponentProps<typeof OptimizedImage>) {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(ref, { threshold, rootMargin });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (isIntersecting && !hasLoaded) {
      setHasLoaded(true);
      onIntersect?.();
    }
  }, [isIntersecting, hasLoaded, onIntersect]);

  const defaultPlaceholder = (
    <div className={`bg-white/5 animate-pulse ${className}`}>
      <div className="w-full h-full flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/20">
          <path d="M21 19V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2z" stroke="currentColor" strokeWidth="2"/>
          <path d="M8.5 8.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill="currentColor"/>
          <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>
    </div>
  );

  return (
    <div ref={ref} className={className}>
      {hasLoaded ? (
        <OptimizedImage
          src={src}
          alt={alt}
          className={className}
          {...props}
        />
      ) : (
        placeholder || defaultPlaceholder
      )}
    </div>
  );
}

// Robust blog thumbnail with proper error handling
export function LazyBlogThumbnail({
  src,
  alt,
  className = '',
}: Omit<LazyImageProps, 'placeholder'> & React.ComponentProps<typeof BlogThumbnail>) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const handleLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };
  
  const handleError = () => {
    setImageError(true);
    setImageLoaded(false);
  };
  
  return (
    <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-2xl bg-gray-800">
      {!imageError ? (
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-700">
          <div className="text-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-gray-400 mx-auto mb-2">
              <path d="M21 19V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2z" stroke="currentColor" strokeWidth="2"/>
              <path d="M8.5 8.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill="currentColor"/>
              <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <p className="text-xs text-gray-500">Image not available</p>
          </div>
        </div>
      )}
      
      {/* Loading indicator */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <div className="animate-pulse">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-gray-600">
              <path d="M21 19V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2z" stroke="currentColor" strokeWidth="2"/>
              <path d="M8.5 8.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill="currentColor"/>
              <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}