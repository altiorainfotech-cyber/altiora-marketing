"use client";

import React, { useState, useEffect } from 'react';
import { useEmailVerification } from '../hooks/useEmailVerification';

interface EmailInputWithVerificationProps {
  value: string;
  onChange: (value: string) => void;
  onValidationChange: (isValid: boolean, hasBeenVerified: boolean) => void;
  required?: boolean;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  hideSuccessMessage?: boolean;
}

const EmailInputWithVerification: React.FC<EmailInputWithVerificationProps> = ({
  value,
  onChange,
  onValidationChange,
  required = false,
  placeholder = "Enter your email address",
  className = "",
  disabled = false,
  hideSuccessMessage = false
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showValidation, setShowValidation] = useState(false);

  const {
    isVerifying,
    isValid,
    error,
    result,
    hasBeenVerified,
    verifyEmail,
    manualVerifyEmail,
    canSubmit
  } = useEmailVerification({
    debounceMs: 5000, // 5 seconds
    autoVerify: true,
    onVerificationComplete: (result) => {
      console.log('Email verification completed:', result);
    },
    onVerificationError: (error) => {
      console.error('Email verification error:', error);
    }
  });

  // Update parent component about validation state
  useEffect(() => {
    onValidationChange(isValid === true, hasBeenVerified);
  }, [isValid, hasBeenVerified, onValidationChange]);

  // Show validation after user stops typing or loses focus
  useEffect(() => {
    if (hasBeenVerified || (!isFocused && value.length > 0)) {
      setShowValidation(true);
    }
  }, [hasBeenVerified, isFocused, value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    verifyEmail(newValue);

    // Hide validation while typing
    if (isFocused) {
      setShowValidation(false);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    setShowValidation(false);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (value.length > 0) {
      setShowValidation(true);
      // Trigger immediate verification on blur
      manualVerifyEmail(value);
    }
  };

  const getInputBorderColor = () => {
    if (!showValidation || !hasBeenVerified) {
      return 'border-slate-600 focus:border-blue-400';
    }

    if (isVerifying) {
      return 'border-yellow-400 focus:border-yellow-400';
    }

    if (isValid === true) {
      return 'border-green-400 focus:border-green-400';
    }

    if (isValid === false) {
      return 'border-red-400 focus:border-red-400';
    }

    return 'border-slate-600 focus:border-blue-400';
  };

  const getValidationIcon = () => {
    if (!showValidation || !value) return null;

    if (isVerifying) {
      return (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          <svg className="w-5 h-5 text-yellow-400 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      );
    }

    if (hasBeenVerified && isValid === true) {
      return (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      );
    }

    if (hasBeenVerified && isValid === false) {
      return (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      );
    }

    return null;
  };

  const getValidationMessage = () => {
    if (!showValidation || !value) return null;

    if (isVerifying) {
      return (
        <p className="text-xs text-yellow-300 mt-1 flex items-center gap-1">
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Verifying email address...
        </p>
      );
    }

    if (hasBeenVerified && isValid === true && result) {
      if (hideSuccessMessage) return null;
      return (
        <p className="text-xs text-green-300 mt-1 flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Email verified successfully
          {result.isDeliverable && (
            <span className="text-green-400">• Deliverable</span>
          )}
          {result.isRealImage && (
            <span className="text-green-400">• Valid domain</span>
          )}
        </p>
      );
    }

    if (hasBeenVerified && isValid === false) {
      return (
        <p className="text-xs text-red-300 mt-1 flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error || 'Invalid email address'}
        </p>
      );
    }

    return null;
  };

  return (
    <div className="space-y-2">
      <label htmlFor="email" className="block text-sm font-medium text-slate-300">
        Work Email{required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
        </div>
        <input
          type="email"
          id="email"
          name="email"
          required={required}
          value={value}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
          title="Please enter a valid email address"
          className={`w-full bg-slate-800/50 border rounded-lg pl-10 pr-12 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 ${getInputBorderColor()} ${className}`}
          placeholder={placeholder}
        />
        {getValidationIcon()}
      </div>
      {getValidationMessage()}


    </div>
  );
};

export default EmailInputWithVerification;