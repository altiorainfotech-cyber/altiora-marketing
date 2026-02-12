'use client';

import { useState } from 'react';
import { fetchBlogPosts, convertToLegacyFormat, type LegacyBlogPost } from '@/lib/api';
import { ErrorBoundary, BlogErrorFallback } from '@/components/ErrorBoundary';
import { BlogGridSkeleton } from '@/components/LoadingSpinner';
import BlogClient from './BlogClient';

interface BlogWrapperProps {
  initialPosts?: LegacyBlogPost[];
  initialError?: string | null;
}

export default function BlogWrapper({ initialPosts = [], initialError = null }: BlogWrapperProps) {
  const [posts, setPosts] = useState(initialPosts);
  const [error, setError] = useState<string | null>(initialError);
  const [isLoading, setIsLoading] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);

  const loadPosts = async (isRetry = false) => {
    if (isRetry) {
      setIsRetrying(true);
    } else {
      setIsLoading(true);
    }
    
    setError(null);

    try {
      const response = await fetchBlogPosts({ limit: 50 });
      const convertedPosts = response.data.posts.map(convertToLegacyFormat);
      setPosts(convertedPosts);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load blog posts';
      setError(errorMessage);
      console.error('Failed to fetch blog posts:', err);
    } finally {
      setIsLoading(false);
      setIsRetrying(false);
    }
  };

  const handleRetry = () => {
    loadPosts(true);
  };

  // If we have initial data, don't show loading
  const shouldShowLoading = isLoading && posts.length === 0;
  const shouldShowRetrying = isRetrying && posts.length > 0;

  return (
    <ErrorBoundary fallback={BlogErrorFallback}>
      <div className="relative">
        {/* Retry indicator */}
        {shouldShowRetrying && (
          <div className="mb-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 border border-blue-500/30 px-3 py-1 text-xs text-blue-300">
              <div className="w-3 h-3 animate-spin">
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
              </div>
              Refreshing posts...
            </div>
          </div>
        )}

        {/* Loading skeleton */}
        {shouldShowLoading ? (
          <div>
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <div className="flex-1">
                  <div className="w-full h-12 rounded-2xl border border-white/15 bg-white/5 animate-pulse" />
                </div>
                <div className="h-4 w-20 bg-white/5 rounded animate-pulse" />
              </div>
              <div className="mt-4 flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-8 w-16 bg-white/5 rounded-full animate-pulse" />
                ))}
              </div>
            </div>
            <BlogGridSkeleton count={6} />
          </div>
        ) : (
          <BlogClient posts={posts} error={error} onRetry={handleRetry} />
        )}
      </div>
    </ErrorBoundary>
  );
}