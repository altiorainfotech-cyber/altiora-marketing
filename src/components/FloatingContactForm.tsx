"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EmailInputWithVerification from "./EmailInputWithVerification";

interface FloatingContactFormProps {
  scrollThreshold?: number; // Percentage of page scroll to trigger form (default 20%)
}

export default function FloatingContactForm({ scrollThreshold = 20 }: FloatingContactFormProps) {
  const [showForm, setShowForm] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  // Email verification state
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [emailHasBeenVerified, setEmailHasBeenVerified] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage >= scrollThreshold && !showForm) {
        setShowForm(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold, showForm]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.mobile.trim()) {
      setError("Please fill in all required fields.");
      setStatus("error");
      return;
    }

    // Email verification check
    if (!emailHasBeenVerified) {
      setError("Please wait for email verification to complete before submitting.");
      setStatus("error");
      return;
    }

    if (!emailIsValid) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    /* 
    // Old Email validation - replaced by EmailInputWithVerification
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }
    */

    // Mobile validation (10-15 digits)
    const mobileDigits = formData.mobile.replace(/\D/g, '');
    if (mobileDigits.length < 10 || mobileDigits.length > 15) {
      setError("Mobile number must be between 10 and 15 digits.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setError(null);

    try {
      // Prepare contact data matching the contact page format
      const contactData = {
        name: formData.name.trim(),
        firstName: formData.name.trim().split(' ')[0] || formData.name.trim(),
        lastName: formData.name.trim().split(' ').slice(1).join(' ') || '-', // Fallback to hyphen if no last name
        email: formData.email.trim(),
        phoneNumber: mobileDigits,
        services: ["quick-enquiry"], // Must match backend validation
        message: formData.message.trim() || "Quick enquiry from floating contact form",
      };

      // First, save to database
      const dbResponse = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (!dbResponse.ok) {
        const errorData = await dbResponse.json();
        throw new Error(errorData.error || 'Failed to save contact information');
      }

      // Contact saved successfully
      setStatus("success");
      setFormData({ name: "", email: "", mobile: "", message: "" });

      // Try to send email notification (optional)
      try {
        await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(contactData),
        });
      } catch (emailError) {
        console.warn("Email notification failed (contact still saved):", emailError);
      }

      // Auto-minimize after success
      setTimeout(() => {
        setIsMinimized(true);
        setStatus("idle");
      }, 3000);
    } catch (err) {
      console.error("Contact form error:", err);
      let errorMsg = "Failed to send message. Please try again.";

      if (err instanceof Error) {
        errorMsg = err.message;
      }

      setError(errorMsg);
      setStatus("error");
    }
  };

  const handleClose = () => {
    setShowForm(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // For mobile input, only allow digits
    if (name === "mobile") {
      const digitsOnly = value.replace(/\D/g, '');
      if (digitsOnly.length <= 15) {
        setFormData(prev => ({ ...prev, [name]: digitsOnly }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <AnimatePresence>
      {showForm && (
        <motion.div
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 400 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className={`bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-2xl shadow-2xl transition-all duration-300 ${isMinimized ? 'w-16 h-16' : 'w-[380px]'
            }`}>
            {isMinimized ? (
              // Minimized state - just a button
              <button
                onClick={() => setIsMinimized(false)}
                className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 group"
              >
                <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            ) : (
              // Expanded state - full form
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Quick Contact</h3>
                      <p className="text-xs text-slate-400">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsMinimized(true)}
                      className="text-slate-400 hover:text-white transition-colors duration-200 p-1"
                      title="Minimize"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <button
                      onClick={handleClose}
                      className="text-slate-400 hover:text-red-400 transition-colors duration-200 p-1"
                      title="Close"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div className="space-y-1">
                    <label htmlFor="name" className="block text-xs font-medium text-slate-300">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1">
                    <EmailInputWithVerification
                      value={formData.email}
                      onChange={(value) => setFormData(prev => ({ ...prev, email: value }))}
                      onValidationChange={(isValid, hasBeenVerified) => {
                        setEmailIsValid(isValid);
                        setEmailHasBeenVerified(hasBeenVerified);
                      }}
                      required
                      placeholder="john@company.com"
                      className="!bg-slate-800/50 !border-slate-600 !text-sm !py-2 !h-[38px]"
                      hideSuccessMessage={true}
                    />
                  </div>

                  {/* Mobile Field */}
                  <div className="space-y-1">
                    <label htmlFor="mobile" className="block text-xs font-medium text-slate-300">
                      Mobile Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                      placeholder="1234567890"
                    />
                    {formData.mobile && (formData.mobile.length < 10 || formData.mobile.length > 15) && (
                      <p className="text-xs text-rose-300 mt-1">Must be 10-15 digits</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1">
                    <label htmlFor="message" className="block text-xs font-medium text-slate-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Status Messages */}
                  {status === "success" && (
                    <div className="rounded-lg border border-emerald-400/30 bg-gradient-to-r from-emerald-500/10 to-green-500/10 px-3 py-2 text-emerald-200 flex items-center gap-2">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-xs font-medium">Message sent successfully!</p>
                    </div>
                  )}
                  {status === "error" && error && (
                    <div className="rounded-lg border border-rose-400/30 bg-gradient-to-r from-rose-500/10 to-red-500/10 px-3 py-2 text-rose-200 flex items-center gap-2">
                      <svg className="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <p className="text-xs">{error}</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 px-4 py-2.5 text-sm font-bold text-white hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-blue-500/25 transform hover:scale-[1.02] active:scale-[0.98] disabled:transform-none"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
