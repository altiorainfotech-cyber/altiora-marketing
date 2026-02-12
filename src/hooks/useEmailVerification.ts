import { useState, useEffect, useCallback, useRef } from 'react';

interface EmailVerificationResult {
  email: string;
  isValid: boolean;
  isDeliverable: boolean;
  isRealImage?: boolean;
  reason?: string;
  timestamp: string;
}

interface EmailVerificationState {
  isVerifying: boolean;
  isValid: boolean | null;
  error: string | null;
  result: EmailVerificationResult | null;
  hasBeenVerified: boolean;
}

interface UseEmailVerificationOptions {
  debounceMs?: number;
  autoVerify?: boolean;
  onVerificationComplete?: (result: EmailVerificationResult) => void;
  onVerificationError?: (error: string) => void;
}

export const useEmailVerification = (options: UseEmailVerificationOptions = {}) => {
  const {
    debounceMs = 5000, // 5 seconds default
    autoVerify = true,
    onVerificationComplete,
    onVerificationError
  } = options;

  const [state, setState] = useState<EmailVerificationState>({
    isVerifying: false,
    isValid: null,
    error: null,
    result: null,
    hasBeenVerified: false
  });

  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const currentEmailRef = useRef<string>('');
  const verificationCacheRef = useRef<Map<string, EmailVerificationResult>>(new Map());

  const verifyEmail = useCallback(async (email: string): Promise<EmailVerificationResult | null> => {
    if (!email || !email.includes('@')) {
      return null;
    }

    // Check cache first
    const cached = verificationCacheRef.current.get(email);
    if (cached) {
      return cached;
    }

    setState(prev => ({ ...prev, isVerifying: true, error: null }));

    try {
      const response = await fetch('/api/email-verification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email
        })
      });

      if (!response.ok) {
        throw new Error('Email verification failed');
      }

      const result: EmailVerificationResult = await response.json();
      
      // Cache the result
      verificationCacheRef.current.set(email, result);
      
      setState(prev => ({
        ...prev,
        isVerifying: false,
        isValid: result.isValid,
        result,
        hasBeenVerified: true,
        error: null
      }));

      if (onVerificationComplete) {
        onVerificationComplete(result);
      }

      return result;

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Email verification failed';
      
      setState(prev => ({
        ...prev,
        isVerifying: false,
        error: errorMessage,
        isValid: false,
        hasBeenVerified: true
      }));

      if (onVerificationError) {
        onVerificationError(errorMessage);
      }

      return null;
    }
  }, [onVerificationComplete, onVerificationError]);

  const debouncedVerifyEmail = useCallback((email: string) => {
    currentEmailRef.current = email;

    // Clear existing timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Reset state for new email
    setState(prev => ({
      ...prev,
      isValid: null,
      error: null,
      result: null,
      hasBeenVerified: false
    }));

    // Basic email format check
    const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      setState(prev => ({
        ...prev,
        isValid: false,
        error: 'Invalid email format',
        hasBeenVerified: true
      }));
      return;
    }

    if (autoVerify) {
      // Set new timer
      debounceTimerRef.current = setTimeout(() => {
        if (currentEmailRef.current === email) {
          verifyEmail(email);
        }
      }, debounceMs);
    }
  }, [verifyEmail, debounceMs, autoVerify]);

  const manualVerifyEmail = useCallback((email: string) => {
    // Clear any pending debounced verification
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    
    return verifyEmail(email);
  }, [verifyEmail]);

  const resetVerification = useCallback(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    
    setState({
      isVerifying: false,
      isValid: null,
      error: null,
      result: null,
      hasBeenVerified: false
    });
  }, []);

  const clearCache = useCallback(() => {
    verificationCacheRef.current.clear();
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  return {
    ...state,
    verifyEmail: debouncedVerifyEmail,
    manualVerifyEmail,
    resetVerification,
    clearCache,
    canSubmit: state.hasBeenVerified && state.isValid === true
  };
};