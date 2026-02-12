// src/app/contact/page.tsx

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "../../assets/Header";
import Footer from "../../assets/Footer";
import Link from "next/link";
import EmailInputWithVerification from "../../components/EmailInputWithVerification";

interface Country {
  name: string;
  code: string;
  phone_code: string;
  flag?: string;
}

// Fallback countries list in case API fails
const fallbackCountries: Country[] = [
  { name: "Afghanistan", code: "AF", phone_code: "+93" },
  { name: "Albania", code: "AL", phone_code: "+355" },
  { name: "Algeria", code: "DZ", phone_code: "+213" },
  { name: "Argentina", code: "AR", phone_code: "+54" },
  { name: "Australia", code: "AU", phone_code: "+61" },
  { name: "Austria", code: "AT", phone_code: "+43" },
  { name: "Bangladesh", code: "BD", phone_code: "+880" },
  { name: "Belgium", code: "BE", phone_code: "+32" },
  { name: "Brazil", code: "BR", phone_code: "+55" },
  { name: "Canada", code: "CA", phone_code: "+1" },
  { name: "Chile", code: "CL", phone_code: "+56" },
  { name: "China", code: "CN", phone_code: "+86" },
  { name: "Colombia", code: "CO", phone_code: "+57" },
  { name: "Denmark", code: "DK", phone_code: "+45" },
  { name: "Egypt", code: "EG", phone_code: "+20" },
  { name: "Finland", code: "FI", phone_code: "+358" },
  { name: "France", code: "FR", phone_code: "+33" },
  { name: "Germany", code: "DE", phone_code: "+49" },
  { name: "Greece", code: "GR", phone_code: "+30" },
  { name: "Hong Kong", code: "HK", phone_code: "+852" },
  { name: "India", code: "IN", phone_code: "+91" },
  { name: "Indonesia", code: "ID", phone_code: "+62" },
  { name: "Iran", code: "IR", phone_code: "+98" },
  { name: "Iraq", code: "IQ", phone_code: "+964" },
  { name: "Ireland", code: "IE", phone_code: "+353" },
  { name: "Israel", code: "IL", phone_code: "+972" },
  { name: "Italy", code: "IT", phone_code: "+39" },
  { name: "Japan", code: "JP", phone_code: "+81" },
  { name: "Jordan", code: "JO", phone_code: "+962" },
  { name: "Kazakhstan", code: "KZ", phone_code: "+7" },
  { name: "Kenya", code: "KE", phone_code: "+254" },
  { name: "Kuwait", code: "KW", phone_code: "+965" },
  { name: "Lebanon", code: "LB", phone_code: "+961" },
  { name: "Malaysia", code: "MY", phone_code: "+60" },
  { name: "Mexico", code: "MX", phone_code: "+52" },
  { name: "Morocco", code: "MA", phone_code: "+212" },
  { name: "Netherlands", code: "NL", phone_code: "+31" },
  { name: "New Zealand", code: "NZ", phone_code: "+64" },
  { name: "Nigeria", code: "NG", phone_code: "+234" },
  { name: "Norway", code: "NO", phone_code: "+47" },
  { name: "Pakistan", code: "PK", phone_code: "+92" },
  { name: "Peru", code: "PE", phone_code: "+51" },
  { name: "Philippines", code: "PH", phone_code: "+63" },
  { name: "Poland", code: "PL", phone_code: "+48" },
  { name: "Portugal", code: "PT", phone_code: "+351" },
  { name: "Qatar", code: "QA", phone_code: "+974" },
  { name: "Romania", code: "RO", phone_code: "+40" },
  { name: "Russia", code: "RU", phone_code: "+7" },
  { name: "Saudi Arabia", code: "SA", phone_code: "+966" },
  { name: "Singapore", code: "SG", phone_code: "+65" },
  { name: "South Africa", code: "ZA", phone_code: "+27" },
  { name: "South Korea", code: "KR", phone_code: "+82" },
  { name: "Spain", code: "ES", phone_code: "+34" },
  { name: "Sri Lanka", code: "LK", phone_code: "+94" },
  { name: "Sweden", code: "SE", phone_code: "+46" },
  { name: "Switzerland", code: "CH", phone_code: "+41" },
  { name: "Taiwan", code: "TW", phone_code: "+886" },
  { name: "Thailand", code: "TH", phone_code: "+66" },
  { name: "Turkey", code: "TR", phone_code: "+90" },
  { name: "Ukraine", code: "UA", phone_code: "+380" },
  { name: "United Arab Emirates", code: "AE", phone_code: "+971" },
  { name: "United Kingdom", code: "GB", phone_code: "+44" },
  { name: "United States", code: "US", phone_code: "+1" },
  { name: "Venezuela", code: "VE", phone_code: "+58" },
  { name: "Vietnam", code: "VN", phone_code: "+84" },
];



// Helper function to get country flag emoji from country code
function getCountryFlag(countryCode: string): string {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

// Service options
const serviceOptions = [
  { value: "web3-development", label: "Web3 Development (dApps, Smart Contracts)" },
  { value: "web3-marketing", label: "Web3 Marketing (Growth, Community, Token Launch)" },
  { value: "web2-development", label: "Web2 Development (Websites, Portals)" },
  { value: "digital-marketing", label: "Digital Marketing (SEO, SMM, Performance Marketing)" },
  { value: "nft-marketplace", label: "NFT Marketplace / Tokenization" },
  { value: "smart-contract-audit", label: "Smart Contract Audit / Tokenomics" },
  { value: "web3-community", label: "Web3 Community Building" },
  { value: "ui-ux-design", label: "UI/UX & Product Design" },
  { value: "ai-development", label: "AI Development (custom models, automation tools)" },
  { value: "ai-chatbot", label: "AI Chatbot / Agent Development (RAG, LLM-based solutions)" },
  { value: "ai-integration", label: "AI Integration for Web2/Web3 Platforms" },
  { value: "predictive-analytics", label: "Predictive Analytics & Data Intelligence" },
  { value: "ai-automation", label: "AI-based Process Automation (workflow, CRM, product functions)" }
];

// Budget options
const budgetOptions = [
  { value: "under-10k", label: "Under $10,000" },
  { value: "10k-50k", label: "$10,000 – $50,000" },
  { value: "50k-200k", label: "$50,000 – $200,000" },
  { value: "200k-plus", label: "$200,000+" }
];

// Timeline options
const timelineOptions = [
  { value: "1-4-weeks", label: "1–4 weeks" },
  { value: "1-3-months", label: "1–3 months" },
  { value: "3-6-months", label: "3–6 months" },
  { value: "6-plus-months", label: "6+ months" }
];

export default function ContactPage() {
  const [status, setStatus] =
    useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [countrySearch, setCountrySearch] = useState("");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loadingCountries, setLoadingCountries] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedTimeline, setSelectedTimeline] = useState("");
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showBudgetDropdown, setShowBudgetDropdown] = useState(false);
  const [showTimelineDropdown, setShowTimelineDropdown] = useState(false);

  const [humanVerified, setHumanVerified] = useState(false);

  // Email verification states
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [emailHasBeenVerified, setEmailHasBeenVerified] = useState(false);

  // File upload states
  const [uploadedFiles, setUploadedFiles] = useState<Array<{
    id: string;
    originalName: string;
    fileName: string;
    fileSize: number;
    mimeType: string;
    r2Url: string;
    uploading: boolean;
    error?: string;
  }>>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [showGuidelinesPopup, setShowGuidelinesPopup] = useState(false);
  const [messageLength, setMessageLength] = useState(0);

  useEffect(() => {
    fetchCountries();
  }, []);

  // Filter countries based on search
  useEffect(() => {
    if (!countrySearch.trim()) {
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter(country =>
        country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
        country.code.toLowerCase().includes(countrySearch.toLowerCase()) ||
        country.phone_code.includes(countrySearch)
      );
      setFilteredCountries(filtered);
    }
  }, [countrySearch, countries]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.services-dropdown')) {
        setShowServicesDropdown(false);
      }
      if (!target.closest('.budget-dropdown')) {
        setShowBudgetDropdown(false);
      }
      if (!target.closest('.timeline-dropdown')) {
        setShowTimelineDropdown(false);
      }
      if (!target.closest('.country-dropdown')) {
        setShowCountryDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Track uploadedFiles changes
  useEffect(() => {
    // Files state updated
  }, [uploadedFiles]);



  // File upload functions
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const validateFile = (file: File): string | null => {
    // Check file size (50MB max)
    const maxSize = 50 * 1024 * 1024;
    if (file.size > maxSize) {
      setShowGuidelinesPopup(true);
      return 'File size exceeds 50MB limit';
    }

    // Check file type
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain',
      'text/markdown',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/csv',
      'application/vnd.ms-powerpoint',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
      'application/zip',
      'application/x-rar-compressed',
      'application/x-7z-compressed'
    ];

    if (!allowedTypes.includes(file.type)) {
      setShowGuidelinesPopup(true);
      return 'File type not supported. Please upload PDF, Word, Excel, PowerPoint, Text, Markdown, Images, or Archive files.';
    }

    return null;
  };

  const uploadFile = async (file: File, firstName: string, lastName: string) => {
    const fileId = Math.random().toString(36).substr(2, 9);
    const senderName = `${firstName} ${lastName}`.trim() || 'Unknown';

    // Add file to state with uploading status
    const newFile = {
      id: fileId,
      originalName: file.name,
      fileName: '',
      fileSize: file.size,
      mimeType: file.type,
      r2Url: '',
      uploading: true
    };

    setUploadedFiles(prev => [...prev, newFile]);

    try {
      // Get presigned URL
      let uploadResponse;
      try {
        uploadResponse = await fetch('/api/contact/upload', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fileName: file.name,
            fileSize: file.size,
            mimeType: file.type,
            senderName: senderName
          }),
        });
      } catch (networkError) {
        throw new Error(`Network error: ${networkError instanceof Error ? networkError.message : 'Unknown error'}`);
      }

      if (!uploadResponse.ok) {
        const errorData = await uploadResponse.json();
        throw new Error(errorData.error || 'Failed to get upload URL');
      }

      const { uploadEndpoint, fileName, publicUrl, uploadToken } = await uploadResponse.json();

      // Upload file via server-side endpoint (no CORS issues)
      const formData = new FormData();
      formData.append('file', file);
      formData.append('uploadToken', uploadToken);

      const uploadFileResponse = await fetch(uploadEndpoint, {
        method: 'POST',
        body: formData,
      });

      if (!uploadFileResponse.ok) {
        const errorData = await uploadFileResponse.json();
        throw new Error(errorData.error || 'Failed to upload file');
      }

      const uploadResult = await uploadFileResponse.json();

      // Update file state with success
      setUploadedFiles(prev =>
        prev.map(f =>
          f.id === fileId
            ? { ...f, fileName, r2Url: publicUrl, uploading: false }
            : f
        )
      );

    } catch (error) {
      // Update file state with error
      setUploadedFiles(prev =>
        prev.map(f =>
          f.id === fileId
            ? { ...f, uploading: false, error: error instanceof Error ? error.message : 'Upload failed' }
            : f
        )
      );

      // Also show error to user
      setError(`Failed to upload ${file.name}: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const handleFileSelect = async (files: FileList, firstName: string, lastName: string) => {
    // Clear any previous errors
    setError(null);

    // Check total file count (max 5)
    if (uploadedFiles.length + files.length > 5) {
      setShowGuidelinesPopup(true);
      setError('Maximum 5 files allowed');
      return;
    }

    // Process files sequentially to avoid overwhelming the server
    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      const validationError = validateFile(file);

      if (validationError) {
        setError(`${file.name}: ${validationError}`);
        continue;
      }

      try {
        await uploadFile(file, firstName, lastName);
      } catch (error) {
        // Error handling is done in uploadFile
      }
    }
  };

  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const form = e.currentTarget.closest('form');
    const firstName = (form?.querySelector('[name="firstName"]') as HTMLInputElement)?.value || "";
    const lastName = (form?.querySelector('[name="lastName"]') as HTMLInputElement)?.value || "";

    if (!firstName.trim()) {
      setError('Please enter your first name before uploading files');
      return;
    }

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files, firstName, lastName);
    }
  };

  const fetchCountries = async () => {
    setLoadingCountries(true);
    try {
      const apiKey = process.env.NEXT_PUBLIC_APIHUT_API_KEY;

      if (apiKey) {
        try {
          const response = await fetch('https://apihut.in/api/country/phone-codes', {
            headers: {
              'x-api-key': apiKey,
            },
          });

          if (response.ok) {
            const data = await response.json();
            if (data.success && Array.isArray(data.data)) {
              setCountries(data.data);
              setFilteredCountries(data.data);
              return;
            }
          }
        } catch (apiError) {
          // API fetch failed, using fallback data
        }
      }

      setCountries(fallbackCountries);
      setFilteredCountries(fallbackCountries);
    } catch (error) {
      setCountries(fallbackCountries);
      setFilteredCountries(fallbackCountries);
    } finally {
      setLoadingCountries(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Email verification check - FIRST PRIORITY
    if (!email.trim()) {
      setError("Email address is required.");
      return;
    }

    if (!emailHasBeenVerified) {
      setError("Please wait for email verification to complete before submitting.");
      return;
    }

    if (!emailIsValid) {
      setError("Please enter a valid email address. The current email address is invalid or cannot be delivered to.");
      return;
    }

    if (!humanVerified) {
      setError("Please verify that you are human before submitting.");
      return;
    }

    // Validate phone number (required field)
    if (!phoneNumber.trim()) {
      setError("Phone number is required.");
      return;
    }

    if (phoneNumber.length < 10 || phoneNumber.length > 15) {
      setError("Phone number must be between 10 and 15 digits.");
      return;
    }

    // Require country selection when phone number is provided
    if (!selectedCountry) {
      setError("Please select a country for your phone number.");
      return;
    }

    const form = e.currentTarget;
    const firstName = (form.querySelector('[name="firstName"]') as HTMLInputElement)?.value || "";
    const lastName = (form.querySelector('[name="lastName"]') as HTMLInputElement)?.value || "";
    const company = (form.querySelector('[name="company"]') as HTMLInputElement)?.value || "";
    const message = (form.querySelector('[name="message"]') as HTMLTextAreaElement)?.value || "";

    // Use state variables for services, budget, and timeline
    const services = selectedServices;
    const budget = selectedBudget;
    const timeline = selectedTimeline;

    if (!firstName || !lastName || !email || !company) {
      setError("Please fill in all required fields.");
      return;
    }

    if (services.length === 0) {
      setError("Please select at least one service you're interested in.");
      return;
    }

    // Validate message if provided (optional field)
    if (message.trim() && message.trim().length > 2000) {
      setError("Message cannot exceed 2000 characters.");
      return;
    }
    setStatus("loading");
    setError(null);

    try {
      // Check if any files are still uploading
      const stillUploading = uploadedFiles.some(file => file.uploading);
      if (stillUploading) {
        setError("Please wait for all files to finish uploading before submitting.");
        return;
      }

      // Check for upload errors
      const uploadErrors = uploadedFiles.filter(file => file.error);
      if (uploadErrors.length > 0) {
        setError("Please remove files with upload errors before submitting.");
        return;
      }

      // Prepare attachments data
      const attachments = uploadedFiles
        .filter(file => !file.uploading && !file.error && file.r2Url)
        .map(file => ({
          originalName: file.originalName,
          fileName: file.fileName,
          fileSize: file.fileSize,
          mimeType: file.mimeType,
          r2Url: file.r2Url
        }));

      // First, save to database
      const contactData = {
        name: `${firstName} ${lastName}`.trim(),
        firstName,
        lastName,
        email,
        company,
        country: selectedCountry?.name || undefined,
        phoneCode: selectedCountry?.phone_code || undefined,
        phoneNumber: phoneNumber.trim(),
        services,
        budget: budget || undefined,
        timeline: timeline || undefined,
        message: message.trim() || undefined,
        attachments: attachments.length > 0 ? attachments : undefined,
      };

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

      // Contact saved successfully - show success even if email fails
      setStatus("success");
      form.reset();
      setSelectedCountry(null);
      setPhoneNumber("");
      setCountrySearch("");
      setSelectedServices([]);
      setSelectedBudget("");
      setSelectedTimeline("");
      setHumanVerified(false);
      setUploadedFiles([]);
      // Reset email verification state
      setEmail("");
      setEmailIsValid(false);
      setEmailHasBeenVerified(false);

      setTimeout(() => setStatus("idle"), 5000);

      // Try to send email notification (optional)
      try {
        const templateParams = {
          to_email: "sales@altiorainfotech.com",
          from_name: `${firstName} ${lastName}`.trim(),
          from_email: email,
          company: company,
          country: selectedCountry?.name || "Not provided",
          phone_code: selectedCountry?.phone_code || "Not provided",
          phone_number: phoneNumber || "Not provided",
          services: services.join(", "),
          budget: budget || "Not specified",
          timeline: timeline || "Not specified",
          message,
        };

        // Send email notification via server-side API
        await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(contactData),
        });
      } catch (emailError) {
        console.warn("Email notification failed (contact still saved):", emailError);
        // Try backup email API as last resort
        try {
          await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contactData),
          });
        } catch (backupError) {
          console.warn("Backup email also failed:", backupError);
        }
      }
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

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <Header />

      {/* HERO */}
      <section className="relative h-[40vh] sm:h-[44vh] md:h-[48vh]">
        <Image
          src="https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/altiora/about/contactus.jpg"
          alt="Contact Altiora Infotech"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000929]/70 via-[#0a133b]/70 to-[#050510]/80" />
        <div className="relative z-10 h-full w-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <p className="uppercase tracking-[0.22em] text-xs sm:text-[13px] text-white/80">
              Contact
            </p>
            <h1 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight drop-shadow text-white">
              Get in Touch
            </h1>
            <p className="mt-4 text-white/85 text-base sm:text-lg leading-relaxed">
              Have a question or want to discuss your project? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </section>

      <main className="flex-grow py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Form Introduction */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Start Your Project Journey
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Tell us about your vision and we'll help bring it to life. Our team of experts is ready to transform your ideas into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form Section */}
            <div className="lg:col-span-3 w-full">
              <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 sm:p-10 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Form Header */}
                  <div className="text-center pb-6 border-b border-slate-700/50">
                    <h3 className="text-2xl font-bold text-white mb-2">Project Enquiry Form</h3>
                    <p className="text-slate-400">Fill out the details below and we'll get back to you within 24 hours</p>
                  </div>

                  {/* Personal Information Section */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">1</div>
                      <h4 className="text-lg font-semibold text-white">Personal Information</h4>
                    </div>

                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="block text-sm font-medium text-slate-300">
                          First Name<span className="text-red-400 ml-1">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                            placeholder="John"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="block text-sm font-medium text-slate-300">
                          Last Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email Field with Verification */}
                    <EmailInputWithVerification
                      value={email}
                      onChange={setEmail}
                      onValidationChange={(isValid, hasBeenVerified) => {
                        setEmailIsValid(isValid);
                        setEmailHasBeenVerified(hasBeenVerified);
                      }}
                      required={true}
                      placeholder="john@company.com"
                    />

                    {/* Phone Field */}
                    <div className="space-y-2">
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-slate-300">
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <div className="flex gap-3">
                        {/* Country Code Selector */}
                        <div className="relative country-dropdown">
                          <button
                            type="button"
                            onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                            className="flex items-center gap-2 bg-slate-800/50 border border-slate-600 rounded-lg px-3 py-3 text-white hover:border-slate-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 min-w-[100px]"
                          >
                            {selectedCountry ? (
                              <>
                                <span className="text-lg">{getCountryFlag(selectedCountry.code)}</span>
                                <span className="font-medium text-sm">{selectedCountry.phone_code}</span>
                              </>
                            ) : (
                              <span className="font-medium text-sm text-slate-400">+--</span>
                            )}
                            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>

                          {/* Country Dropdown */}
                          {showCountryDropdown && (
                            <div className="absolute z-50 w-72 mt-2 max-h-60 overflow-y-auto bg-slate-800 border border-slate-600 rounded-lg shadow-2xl">
                              <div className="sticky top-0 bg-slate-800 p-3 border-b border-slate-600">
                                <input
                                  type="text"
                                  value={countrySearch}
                                  onChange={(e) => setCountrySearch(e.target.value)}
                                  className="w-full bg-slate-700 border border-slate-600 rounded-md px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-400"
                                  placeholder="Search countries..."
                                />
                              </div>
                              <div className="max-h-48 overflow-y-auto">
                                {filteredCountries.slice(0, 15).map((country) => (
                                  <button
                                    key={country.code}
                                    type="button"
                                    onClick={() => {
                                      setSelectedCountry(country);
                                      setCountrySearch("");
                                      setShowCountryDropdown(false);
                                    }}
                                    className="w-full text-left px-4 py-3 text-sm text-white hover:bg-slate-700 focus:bg-slate-700 focus:outline-none border-b border-slate-700 last:border-b-0 transition flex items-center justify-between"
                                  >
                                    <span className="flex items-center gap-3">
                                      <span className="text-lg">{getCountryFlag(country.code)}</span>
                                      <span className="truncate">{country.name}</span>
                                    </span>
                                    <span className="text-slate-400 text-xs ml-2 flex-shrink-0">{country.phone_code}</span>
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Phone Input */}
                        <div className="flex-1 relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <input
                            type="tel"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, '');
                              if (value.length <= 15) {
                                setPhoneNumber(value);
                              }
                            }}
                            className="w-full bg-slate-800/50 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                            placeholder="1234567890"
                            required
                          />
                        </div>
                      </div>
                      {phoneNumber && (phoneNumber.length < 10 || phoneNumber.length > 15) && (
                        <p className="text-xs text-rose-300 mt-1 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          Phone number must be between 10 and 15 digits
                        </p>
                      )}
                    </div>

                    {/* Company Field */}
                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-medium text-slate-300">
                        Company / Organization <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          className="w-full bg-slate-800/50 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                          placeholder="Your Company Name"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Details Section */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">2</div>
                      <h4 className="text-lg font-semibold text-white">Project Details</h4>
                    </div>

                    {/* Services Interested In */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-300">
                        Services Interested In<span className="text-red-400 ml-1">*</span>
                      </label>
                      <div className="relative services-dropdown">
                        <button
                          type="button"
                          onClick={() => setShowServicesDropdown(!showServicesDropdown)}
                          className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-left text-white hover:border-slate-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 flex items-center justify-between"
                        >
                          <span className="text-sm">
                            {selectedServices.length === 0
                              ? "Select services you're interested in..."
                              : selectedServices.length === 1
                                ? serviceOptions.find(s => s.value === selectedServices[0])?.label
                                : `${selectedServices.length} services selected`
                            }
                          </span>
                          <svg className={`w-5 h-5 text-slate-400 transform transition-transform duration-200 ${showServicesDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {showServicesDropdown && (
                          <div className="absolute z-50 w-full mt-2 max-h-72 overflow-y-auto bg-slate-800 border border-slate-600 rounded-lg shadow-2xl">
                            <div className="p-2">
                              {serviceOptions.map((service) => (
                                <label
                                  key={service.value}
                                  className="flex items-start gap-3 px-3 py-3 text-sm text-white hover:bg-slate-700 cursor-pointer rounded-md transition-colors duration-150"
                                >
                                  <input
                                    type="checkbox"
                                    checked={selectedServices.includes(service.value)}
                                    onChange={(e) => {
                                      if (e.target.checked) {
                                        setSelectedServices([...selectedServices, service.value]);
                                      } else {
                                        setSelectedServices(selectedServices.filter(s => s !== service.value));
                                      }
                                    }}
                                    className="w-4 h-4 mt-0.5 rounded border-2 border-slate-500 bg-transparent text-blue-500 focus:ring-blue-500 focus:ring-2"
                                  />
                                  <span className="leading-5">{service.label}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      {selectedServices.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {selectedServices.map((serviceValue) => {
                            const service = serviceOptions.find(s => s.value === serviceValue);
                            return (
                              <span
                                key={serviceValue}
                                className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 text-xs rounded-full border border-blue-500/30"
                              >
                                <span className="max-w-[200px] truncate">{service?.label}</span>
                                <button
                                  type="button"
                                  onClick={() => setSelectedServices(selectedServices.filter(s => s !== serviceValue))}
                                  className="text-blue-300 hover:text-white transition-colors duration-150"
                                >
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                                </button>
                              </span>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Budget and Timeline Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Estimated Project Budget */}
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-300">
                          Estimated Budget
                        </label>
                        <div className="relative budget-dropdown">
                          <button
                            type="button"
                            onClick={() => setShowBudgetDropdown(!showBudgetDropdown)}
                            className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-left text-white hover:border-slate-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 flex items-center justify-between"
                          >
                            <span className="text-sm">
                              {selectedBudget
                                ? budgetOptions.find(b => b.value === selectedBudget)?.label
                                : "Select budget range..."
                              }
                            </span>
                            <svg className={`w-5 h-5 text-slate-400 transform transition-transform duration-200 ${showBudgetDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>

                          {showBudgetDropdown && (
                            <div className="absolute z-50 w-full mt-2 bg-slate-800 border border-slate-600 rounded-lg shadow-2xl overflow-hidden">
                              <button
                                type="button"
                                onClick={() => {
                                  setSelectedBudget("");
                                  setShowBudgetDropdown(false);
                                }}
                                className="w-full text-left px-4 py-3 text-sm text-slate-400 hover:bg-slate-700 border-b border-slate-600 transition-colors duration-150"
                              >
                                <div className="flex items-center gap-2">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                  No preference
                                </div>
                              </button>
                              {budgetOptions.map((budget) => (
                                <button
                                  key={budget.value}
                                  type="button"
                                  onClick={() => {
                                    setSelectedBudget(budget.value);
                                    setShowBudgetDropdown(false);
                                  }}
                                  className="w-full text-left px-4 py-3 text-sm text-white hover:bg-slate-700 border-b border-slate-600 last:border-b-0 transition-colors duration-150"
                                >
                                  <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                    </svg>
                                    {budget.label}
                                  </div>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Target Timeline */}
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-300">
                          Target Timeline
                        </label>
                        <div className="relative timeline-dropdown">
                          <button
                            type="button"
                            onClick={() => setShowTimelineDropdown(!showTimelineDropdown)}
                            className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-left text-white hover:border-slate-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 flex items-center justify-between"
                          >
                            <span className="text-sm">
                              {selectedTimeline
                                ? timelineOptions.find(t => t.value === selectedTimeline)?.label
                                : "Select timeline..."
                              }
                            </span>
                            <svg className={`w-5 h-5 text-slate-400 transform transition-transform duration-200 ${showTimelineDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>

                          {showTimelineDropdown && (
                            <div className="absolute z-50 w-full mt-2 bg-slate-800 border border-slate-600 rounded-lg shadow-2xl overflow-hidden">
                              <button
                                type="button"
                                onClick={() => {
                                  setSelectedTimeline("");
                                  setShowTimelineDropdown(false);
                                }}
                                className="w-full text-left px-4 py-3 text-sm text-slate-400 hover:bg-slate-700 border-b border-slate-600 transition-colors duration-150"
                              >
                                <div className="flex items-center gap-2">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                  No preference
                                </div>
                              </button>
                              {timelineOptions.map((timeline) => (
                                <button
                                  key={timeline.value}
                                  type="button"
                                  onClick={() => {
                                    setSelectedTimeline(timeline.value);
                                    setShowTimelineDropdown(false);
                                  }}
                                  className="w-full text-left px-4 py-3 text-sm text-white hover:bg-slate-700 border-b border-slate-600 last:border-b-0 transition-colors duration-150"
                                >
                                  <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {timeline.label}
                                  </div>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message Section */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">3</div>
                      <h4 className="text-lg font-semibold text-white">Tell Us About Your Project</h4>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-slate-300">
                        Project Description <span className="text-slate-500 text-xs">(optional, 0-2000 characters if provided)</span>
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 pb-8 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 resize-none"
                          placeholder="Describe your project goals, requirements, challenges, and any specific features you need. The more details you provide, the better we can help you."
                          onChange={(e) => setMessageLength(e.target.value.length)}
                          maxLength={2000}
                        />
                        <div className="absolute bottom-3 right-3 text-xs text-slate-500 flex items-center gap-2">
                          <span className={`${messageLength > 2000 ? 'text-red-400' : 'text-slate-500'}`}>
                            {messageLength}/2000
                          </span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* File Upload Section */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">4</div>
                      <h4 className="text-lg font-semibold text-white">File Attachments</h4>
                      <span className="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded-full">Optional</span>
                      <button
                        type="button"
                        onClick={() => setShowGuidelinesPopup(true)}
                        className="text-slate-400 hover:text-orange-400 transition-colors duration-200 p-1"
                        title="View upload guidelines"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </button>
                    </div>

                    {/* Upload Area */}
                    <div className="space-y-4">
                      <div
                        className={`relative border-2 border-dashed rounded-lg p-4 text-center transition-all duration-300 ${isDragging
                          ? 'border-blue-400 bg-blue-500/10'
                          : 'border-slate-600 hover:border-slate-500 bg-slate-800/30'
                          }`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                      >
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-base font-semibold text-white mb-1">
                              {isDragging ? 'Drop files here' : 'Upload Project Files'}
                            </p>
                            <p className="text-xs text-slate-400 mb-3">
                              Drag & drop files here, or click to browse
                            </p>
                            <input
                              type="file"
                              multiple
                              accept=".pdf,.doc,.docx,.txt,.md,.xls,.xlsx,.csv,.ppt,.pptx,.jpg,.jpeg,.png,.gif,.webp,.zip,.rar,.7z"
                              onChange={(e) => {
                                const form = e.target.closest('form');
                                const firstName = (form?.querySelector('[name="firstName"]') as HTMLInputElement)?.value || "";
                                const lastName = (form?.querySelector('[name="lastName"]') as HTMLInputElement)?.value || "";

                                if (!firstName.trim()) {
                                  setError('Please enter your first name before uploading files');
                                  return;
                                }

                                if (e.target.files) {
                                  handleFileSelect(e.target.files, firstName, lastName);
                                }
                              }}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <button
                              type="button"
                              className="inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-md hover:from-orange-600 hover:to-red-700 transition-all duration-200 font-medium text-sm"
                              onClick={() => {
                                const form = document.querySelector('form');
                                const firstName = (form?.querySelector('[name="firstName"]') as HTMLInputElement)?.value || "";

                                if (!firstName.trim()) {
                                  setError('Please enter your first name before uploading files');
                                  return;
                                }

                                const input = document.createElement('input');
                                input.type = 'file';
                                input.multiple = true;
                                input.accept = '.pdf,.doc,.docx,.txt,.md,.xls,.xlsx,.csv,.ppt,.pptx,.jpg,.jpeg,.png,.gif,.webp,.zip,.rar,.7z';
                                input.onchange = (e) => {
                                  const target = e.target as HTMLInputElement;
                                  const lastName = (form?.querySelector('[name="lastName"]') as HTMLInputElement)?.value || "";
                                  if (target.files) {
                                    handleFileSelect(target.files, firstName, lastName);
                                  }
                                };
                                input.click();
                              }}
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                              Choose Files
                            </button>
                          </div>
                        </div>
                      </div>





                      {/* Uploaded Files List */}
                      {uploadedFiles.length > 0 && (
                        <div className="space-y-2">
                          <h5 className="text-sm font-medium text-slate-300 flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Attached Files ({uploadedFiles.length}/5)
                            <span className="text-xs text-green-400 bg-green-500/20 px-2 py-1 rounded-full">
                              Files stored as: contact_us/ID_Name/Date/file
                            </span>

                          </h5>
                          <div className="space-y-2">
                            {uploadedFiles.map((file) => (
                              <div
                                key={file.id}
                                className={`flex items-center justify-between p-2 rounded-md border ${file.error
                                  ? 'bg-red-500/10 border-red-400/30'
                                  : file.uploading
                                    ? 'bg-blue-500/10 border-blue-400/30'
                                    : 'bg-green-500/10 border-green-400/30'
                                  }`}
                              >
                                <div className="flex items-center gap-2 flex-1 min-w-0">
                                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${file.error
                                    ? 'bg-red-500'
                                    : file.uploading
                                      ? 'bg-blue-500'
                                      : 'bg-green-500'
                                    }`}>
                                    {file.uploading ? (
                                      <svg className="w-3 h-3 text-white animate-spin" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                      </svg>
                                    ) : file.error ? (
                                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                      </svg>
                                    ) : (
                                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                      </svg>
                                    )}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className={`text-sm font-medium truncate ${file.error ? 'text-red-300' : file.uploading ? 'text-blue-300' : 'text-green-300'
                                      }`}>
                                      {file.originalName}
                                    </p>
                                    <p className="text-xs text-slate-400">
                                      {formatFileSize(file.fileSize)}
                                      {file.uploading && ' • Uploading...'}
                                      {file.error && ` • ${file.error}`}
                                      {!file.uploading && !file.error && ' • Ready'}
                                    </p>
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => removeFile(file.id)}
                                  className="text-slate-400 hover:text-red-400 transition-colors duration-200 p-1"
                                  title="Remove file"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Status Messages */}
                  {status === "success" && (
                    <div className="rounded-xl border border-emerald-400/30 bg-gradient-to-r from-emerald-500/10 to-green-500/10 px-6 py-4 text-emerald-200 flex items-center gap-4">
                      <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-lg">Message sent successfully!</p>
                        <p className="text-sm text-emerald-300/80">We'll review your enquiry and get back to you within 24 hours.</p>
                      </div>
                    </div>
                  )}
                  {status === "error" && (
                    <div className="rounded-xl border border-rose-400/30 bg-gradient-to-r from-rose-500/10 to-red-500/10 px-6 py-4 text-rose-200 flex items-center gap-4">
                      <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-lg">Error sending message</p>
                        <p className="text-sm text-rose-300/80">{error || "Something went wrong. Please try again."}</p>
                      </div>
                    </div>
                  )}

                  {/* Consent and Submit Section */}
                  <div className="space-y-6 pt-6 border-t border-slate-700/50">

                    {/* Consent Checkbox */}
                    <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={humanVerified}
                          onChange={(e) => setHumanVerified(e.target.checked)}
                          className="w-5 h-5 mt-0.5 rounded border-2 border-slate-500 bg-transparent text-blue-500 focus:ring-blue-500 focus:ring-2"
                        />
                        <div className="text-sm text-slate-300 leading-relaxed">
                          <span className="font-medium">Privacy Consent:</span> I consent to Altiora Infotech storing and processing my contact details to respond to this enquiry. Your information will be kept secure and used solely for communication purposes.
                        </div>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "loading" || !humanVerified || !emailIsValid || !emailHasBeenVerified}
                      className="w-full rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 px-8 py-4 font-bold text-white text-lg hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl hover:shadow-blue-500/25 transform hover:scale-[1.02] active:scale-[0.98] disabled:transform-none"
                    >
                      {status === "loading" ? (
                        <span className="flex items-center justify-center gap-3">
                          <svg className="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Your Message...
                        </span>
                      ) : !emailHasBeenVerified ? (
                        <span className="flex items-center justify-center gap-3">
                          <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Verifying Email...
                        </span>
                      ) : !emailIsValid ? (
                        <span className="flex items-center justify-center gap-3">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                          Invalid Email Address
                        </span>
                      ) : !humanVerified ? (
                        <span className="flex items-center justify-center gap-3">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          Please Accept Privacy Terms
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-3">
                          <img src="https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/ALTIORA%20logo.svg" alt="Altiora" className="w-8 h-8" />
                          Send Project Enquiry
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="lg:col-span-2 w-full">
              <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl h-fit sticky top-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Get In Touch</h3>
                  <p className="text-slate-400">Ready to start your project? We're here to help.</p>
                </div>

                <div className="space-y-6">
                  {/* Email Contact */}
                  <div className="group">
                    <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-xl p-6 hover:border-blue-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">Email Us</h4>
                          <p className="text-sm text-slate-400">Quick response guaranteed</p>
                        </div>
                      </div>
                      <Link
                        href="mailto:sales@altiorainfotech.com"
                        className="text-blue-300 hover:text-blue-200 font-medium transition-colors duration-200 break-all"
                      >
                        sales@altiorainfotech.com
                      </Link>
                      <p className="text-xs text-slate-500 mt-2">We typically respond within 24 hours</p>
                    </div>
                  </div>

                  {/* Office Locations */}
                  <div className="group">
                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">Our Offices</h4>
                          <p className="text-sm text-slate-400">Global presence, local expertise</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="border-l-2 border-blue-400 pl-4">
                          <p className="font-semibold text-white mb-1">🇨🇦 Surrey, Canada</p>
                          <p className="text-sm text-slate-400 leading-relaxed">
                            15905 98a ave<br />
                            Surrey V4N2K8, Canada
                          </p>
                        </div>
                        <div className="border-l-2 border-purple-400 pl-4">
                          <p className="font-semibold text-white mb-1">🇮🇳 Zirakpur, India</p>
                          <p className="text-sm text-slate-400 leading-relaxed">
                            13th Floor, Motia Royal Business Park<br />
                            Zirakpur, Punjab, India
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Why Choose Us */}
                  <div className="group">
                    <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-400/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">Why Choose Us</h4>
                          <p className="text-sm text-slate-400">Your success is our priority</p>
                        </div>
                      </div>
                      <ul className="space-y-2 text-sm text-slate-300">
                        {/* <li className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Expert team with 5+ years experience
                        </li> */}
                        <li className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          24/7 support and communication
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Agile development methodology
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Competitive pricing & quality
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Guidelines Popup Modal */}
      {showGuidelinesPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Upload Guidelines</h3>
            </div>

            <div className="text-sm text-slate-300 space-y-3">
              <div>
                <p className="font-medium text-white mb-2">File Requirements:</p>
                <ul className="space-y-1 text-slate-400">
                  <li>• <span className="text-orange-300">Maximum 5 files</span> per submission</li>
                  <li>• <span className="text-orange-300">Up to 50MB</span> per file</li>
                  <li>• Files are organized by your name and date</li>
                  <li>• Upload URLs expire after 10 minutes</li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-white mb-2">Supported File Types:</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
                  <div>
                    <p className="text-blue-300 font-medium">Documents:</p>
                    <p>PDF, Word, Text, Markdown</p>
                  </div>
                  <div>
                    <p className="text-green-300 font-medium">Spreadsheets:</p>
                    <p>Excel, CSV</p>
                  </div>
                  <div>
                    <p className="text-purple-300 font-medium">Presentations:</p>
                    <p>PowerPoint</p>
                  </div>
                  <div>
                    <p className="text-pink-300 font-medium">Media:</p>
                    <p>Images, Archives</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={() => setShowGuidelinesPopup(false)}
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-200 font-medium"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}