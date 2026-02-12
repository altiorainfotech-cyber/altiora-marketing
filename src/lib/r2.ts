import { IMAGE_MAPPINGS, type LocalImagePath } from './image-mappings';

// Cloudflare R2 configuration
const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL || process.env.NEXT_PUBLIC_R2_PUBLIC_URL || '';

export const r2Url = (publicId: string) => {
  // Remove leading slash if present
  const cleanPublicId = publicId.startsWith('/') ? publicId.slice(1) : publicId;
  return `${R2_PUBLIC_URL}/${cleanPublicId}`;
};

// Optimized image URLs for different use cases
// Note: R2 doesn't have built-in transformations like Cloudinary
// You'll need to use Cloudflare Images or a separate image optimization service
export const getOptimizedImageUrl = (publicId: string) => {
  const baseUrl = r2Url(publicId);
  
  // If you're using Cloudflare Images for transformations:
  // return `${R2_PUBLIC_URL}/cdn-cgi/image/width=${width},quality=${quality}/${publicId}`;
  
  // For now, return the base URL
  // You can add query parameters for your own image optimization service
  return baseUrl;
};

// Convert local image path to R2 URL
export const getImageUrl = (localPath: string) => {
  const publicId = IMAGE_MAPPINGS[localPath as LocalImagePath];
  if (!publicId) {
    console.warn(`No R2 mapping found for: ${localPath}`);
    return localPath; // Fallback to local path
  }
  return getOptimizedImageUrl(publicId);
};

// Get video URL from R2
export const getVideoUrl = (localPath: string) => {
  const publicId = IMAGE_MAPPINGS[localPath as LocalImagePath];
  if (!publicId) {
    console.warn(`No R2 mapping found for: ${localPath}`);
    return localPath; // Fallback to local path
  }
  return `${r2Url(publicId)}.mp4`;
};
