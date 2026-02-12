"use client";

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  onLoad?: () => void;
  onError?: () => void;
}

// Utility function to check if image is from Cloudinary
function isCloudinaryUrl(url: string): boolean {
  return url.includes('cloudinary.com') || url.includes('res.cloudinary.com');
}

// Generate Cloudinary transformation URL
function getCloudinaryUrl(
  originalUrl: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'auto' | 'webp' | 'avif';
    crop?: 'fill' | 'fit' | 'scale' | 'crop';
    gravity?: 'auto' | 'face' | 'center';
  } = {}
): string {
  if (!isCloudinaryUrl(originalUrl)) {
    return originalUrl;
  }

  const {
    width,
    height,
    quality = 80,
    format = 'auto',
    crop = 'fill',
    gravity = 'auto'
  } = options;

  try {
    // Extract the public ID and other parts from the Cloudinary URL
    const urlParts = originalUrl.split('/');
    const uploadIndex = urlParts.findIndex(part => part === 'upload');

    if (uploadIndex === -1) return originalUrl;

    const baseUrl = urlParts.slice(0, uploadIndex + 1).join('/');
    const publicIdParts = urlParts.slice(uploadIndex + 1);

    // Build transformation string
    const transformations = [];

    if (width || height) {
      let sizeTransform = '';
      if (width) sizeTransform += `w_${width}`;
      if (height) sizeTransform += (sizeTransform ? ',' : '') + `h_${height}`;
      if (crop) sizeTransform += `,c_${crop}`;
      if (gravity && crop !== 'scale') sizeTransform += `,g_${gravity}`;
      transformations.push(sizeTransform);
    }

    transformations.push(`f_${format}`);
    transformations.push(`q_${quality}`);

    // Construct the final URL
    const transformString = transformations.join('/');
    return `${baseUrl}/${transformString}/${publicIdParts.join('/')}`;
  } catch (error) {
    console.warn('Failed to transform Cloudinary URL:', error);
    return originalUrl;
  }
}

// Generate responsive srcSet for Cloudinary images
// function generateSrcSet(originalUrl: string, baseWidth: number): string {
//   if (!isCloudinaryUrl(originalUrl)) {
//     return '';
//   }

//   const widths = [320, 640, 768, 1024, 1280, 1536, 1920];
//   const srcSetEntries = widths
//     .filter(w => w <= baseWidth * 2) // Don't generate sizes larger than 2x the base width
//     .map(width => {
//       const url = getCloudinaryUrl(originalUrl, {
//         width,
//         quality: width <= 640 ? 85 : 80,
//         format: 'auto',
//         crop: 'fill',
//         gravity: 'auto'
//       });
//       return `${url} ${width}w`;
//     });

//   return srcSetEntries.join(', ');
// }

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  fill = false,
  sizes,
  priority = false,
  quality = 80,
  placeholder = 'empty',
  onLoad,
  onError,
  ...props
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Handle image load
  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  // Handle image error
  const handleError = () => {
    setImageError(true);
    setIsLoading(false);
    onError?.();
  };

  // Generate optimized src for Cloudinary images
  const optimizedSrc = isCloudinaryUrl(src)
    ? getCloudinaryUrl(src, {
      width: fill ? undefined : width,
      height: fill ? undefined : height,
      quality,
      format: 'auto',
      crop: 'fill',
      gravity: 'auto'
    })
    : src;

  // Image optimization applied

  // Generate responsive sizes if not provided
  const responsiveSizes = sizes || (
    fill
      ? '100vw'
      : width
        ? `(max-width: 768px) 100vw, (max-width: 1200px) 50vw, ${width}px`
        : '100vw'
  );

  // Error fallback
  if (imageError) {
    return (
      <div
        className={`bg-white/5 border border-white/10 flex items-center justify-center ${className}`}
        style={fill ? {} : { width, height }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/40">
          <path d="M21 19V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2z" stroke="currentColor" strokeWidth="2" />
          <path d="M8.5 8.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill="currentColor" />
          <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Loading placeholder */}
      {isLoading && (
        <div
          className={`absolute inset-0 bg-white/5 animate-pulse ${fill ? '' : 'rounded'}`}
          style={fill ? {} : { width, height }}
        />
      )}

      <Image
        src={optimizedSrc}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        sizes={responsiveSizes}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
}

// Specialized component for blog post images
export function BlogImage({
  src,
  alt,
  className = '',
  priority = false,
  ...props
}: Omit<OptimizedImageProps, 'fill' | 'width' | 'height'>) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
      className={`object-cover ${className}`}
      priority={priority}
      quality={85}
      {...props}
    />
  );
}

// Specialized component for blog thumbnails
export function BlogThumbnail({
  src,
  alt,
  className = '',
  ...props
}: Omit<OptimizedImageProps, 'fill' | 'width' | 'height'>) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
      className={`object-cover ${className}`}
      quality={80}
      {...props}
    />
  );
}