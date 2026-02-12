import { IMAGE_MAPPINGS, type LocalImagePath } from './image-mappings';

// Cloudinary configuration and URL helpers
const CLOUDINARY_CLOUD_NAME = 'dkisnzuvo'; // Your existing cloud name
const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}`;

export const cloudinaryUrl = (publicId: string, transformations?: string) => {
  const baseUrl = `${CLOUDINARY_BASE_URL}/${transformations || 'image/upload'}/${publicId}`;
  return baseUrl;
};

// Optimized image URLs for different use cases
export const getOptimizedImageUrl = (publicId: string, options?: {
  width?: number;
  height?: number;
  quality?: 'auto' | number;
  format?: 'auto' | 'webp' | 'jpg' | 'png';
  crop?: 'fill' | 'fit' | 'scale';
}) => {
  const {
    width,
    height,
    quality = 'auto',
    format = 'auto',
    crop = 'fill'
  } = options || {};

  let transformations = 'image/upload';
  const params: string[] = [];

  if (quality) params.push(`q_${quality}`);
  if (format) params.push(`f_${format}`);
  if (width) params.push(`w_${width}`);
  if (height) params.push(`h_${height}`);
  if (crop && (width || height)) params.push(`c_${crop}`);

  if (params.length > 0) {
    transformations += `/${params.join(',')}`;
  }

  return cloudinaryUrl(publicId, transformations);
};

// Convert local image path to Cloudinary URL
export const getImageUrl = (localPath: string, options?: Parameters<typeof getOptimizedImageUrl>[1]) => {
  const publicId = IMAGE_MAPPINGS[localPath as LocalImagePath];
  if (!publicId) {
    console.warn(`No Cloudinary mapping found for: ${localPath}`);
    return localPath; // Fallback to local path
  }
  return getOptimizedImageUrl(publicId, options);
};

// Get video URL from Cloudinary
export const getVideoUrl = (localPath: string) => {
  const publicId = IMAGE_MAPPINGS[localPath as LocalImagePath];
  if (!publicId) {
    console.warn(`No Cloudinary mapping found for: ${localPath}`);
    return localPath; // Fallback to local path
  }
  return `${CLOUDINARY_BASE_URL}/video/upload/${publicId}.mp4`;
};