'use client';

import React from 'react';
import Link from 'next/link';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; retry: () => void }>;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Blog error boundary caught an error:', error, errorInfo);
  }

  retry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error} retry={this.retry} />;
    }

    return this.props.children;
  }
}

// Default error fallback component
function DefaultErrorFallback({ error, retry }: { error?: Error; retry: () => void }) {
  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 mx-auto rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-red-400">
          <path 
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </div>
      <p className="text-red-300 text-lg">Something went wrong</p>
      <p className="text-red-400/70 text-sm mt-1">
        {error?.message || 'An unexpected error occurred while loading the blog'}
      </p>
      <button 
        onClick={retry}
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-red-500/20 border border-red-500/30 px-4 py-2 text-sm text-red-300 hover:bg-red-500/30 transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-red-400">
          <path d="M1 4v6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Try again
      </button>
    </div>
  );
}

// Blog-specific error fallback
export function BlogErrorFallback({ error, retry }: { error?: Error; retry: () => void }) {
  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 mx-auto rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-red-400">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p className="text-red-300 text-lg">Unable to load blog content</p>
      <p className="text-red-400/70 text-sm mt-1">
        {error?.message || 'There was a problem connecting to our blog service'}
      </p>
      <div className="mt-4 flex items-center justify-center gap-3">
        <button 
          onClick={retry}
          className="inline-flex items-center gap-2 rounded-full bg-red-500/20 border border-red-500/30 px-4 py-2 text-sm text-red-300 hover:bg-red-500/30 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-red-400">
            <path d="M1 4v6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Try again
        </button>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm text-white/80 hover:bg-white/20 transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}