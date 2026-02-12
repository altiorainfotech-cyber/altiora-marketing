// Loading spinner component for blog data fetching
export default function LoadingSpinner({ 
  size = 'md', 
  className = '' 
}: { 
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className={`animate-spin ${sizeClasses[size]} ${className}`}>
      <svg 
        className="w-full h-full text-white/60" 
        fill="none" 
        viewBox="0 0 24 24"
      >
        <circle 
          className="opacity-25" 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          strokeWidth="4"
        />
        <path 
          className="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
}

// Blog post skeleton loader
export function BlogPostSkeleton() {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      {/* Image skeleton */}
      <div className="relative h-48 sm:h-56 bg-white/5 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5" />
      </div>

      <div className="relative p-5">
        {/* Category and date skeleton */}
        <div className="flex items-center gap-2 mb-3">
          <div className="h-5 w-16 bg-white/10 rounded-full animate-pulse" />
          <div className="h-4 w-20 bg-white/5 rounded animate-pulse" />
        </div>
        
        {/* Title skeleton */}
        <div className="space-y-2">
          <div className="h-5 bg-white/10 rounded animate-pulse" />
          <div className="h-5 bg-white/10 rounded animate-pulse w-3/4" />
        </div>
      </div>
    </div>
  );
}

// Blog grid skeleton loader
export function BlogGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <BlogPostSkeleton key={index} />
      ))}
    </div>
  );
}