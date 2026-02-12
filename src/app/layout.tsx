import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://altiorainfotech.com"),
  alternates: {
    canonical: "https://altiorainfotech.com/",
  },
  title: "AI, Web3 & Product Engineering - Altiora Infotech",
  description: "Accelerate results with AI, Web3, and product engineering at Altiora Infotech. We specialize in artificial intelligence services and Web3 development to help businesses innovate and scale.",
  openGraph: {
    title: "AI, Web3 & Product Engineering - Altiora Infotech",
    description: "Accelerate results with AI, Web3, and product engineering at Altiora Infotech. We specialize in artificial intelligence services and Web3 development to help businesses innovate and scale.",
    url: "https://www.altiorainfotech.com",
    siteName: "Altiora Infotech",
    images: [{
      url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      width: 1200,
      height: 630,
      alt: "Altiora Infotech - AI, Web3 & Product Engineering"
    }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI, Web3 & Product Engineering - Altiora Infotech",
    description: "Accelerate results with AI, Web3, and product engineering at Altiora Infotech. We specialize in artificial intelligence services and Web3 development to help businesses innovate and scale.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MGDD26D9');`
        }} />
        {/* End Google Tag Manager */}
        
        {/* Meta Pixel Code */}
        <script dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '1561301318458212');fbq('track', 'PageView');`
        }} />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1561301318458212&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
        
        <meta name="google-site-verification" content="0JHYaGNGNJz_IizDDvRiDxZ3D-aIfFKeTxuSFWOPgaU" />
        <link rel="icon" href="https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg" type="image/svg+xml" />
        <link rel="icon" href="https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_l6diqm.png" type="image/png" />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script type="text/javascript">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "tnby6djosr");`}
        </script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://altiorainfotech.com/#org",
                  "name": "Altiora Infotech",
                  "url": "https://altiorainfotech.com/",
                  "legalName": "Altiora Infotech",
                  "alternateName": ["Altiora"],
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://altiorainfotech.com/TODO/logo.png",
                    "width": 512,
                    "height": 512
                  },
                  "image": "https://altiorainfotech.com/TODO/og-image.jpg",
                  "description": "Altiora Infotech is a growth & acceleration studio delivering AI/ML, Web3, Blockchain, and high-performance web solutions with measurable ROI.",
                  "email": "mailto:hello@altiorainfotech.com",
                  "telephone": "+91-TODO-XXXXXXX",
                  "foundingDate": "TODO-YYYY-MM-DD",
                  "founders": [{"@type": "Person", "name": "TODO"}],
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "TODO",
                    "addressLocality": "TODO",
                    "addressRegion": "TODO",
                    "postalCode": "TODO",
                    "addressCountry": "IN"
                  },
                  "sameAs": [
                    "https://www.linkedin.com/company/TODO",
                    "https://x.com/TODO",
                    "https://www.youtube.com/@TODO",
                    "https://github.com/TODO",
                    "https://www.crunchbase.com/organization/TODO",
                    "https://g.co/kgs/TODO"
                  ],
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "contactType": "sales",
                      "email": "mailto:sales@altiorainfotech.com",
                      "telephone": "+91-TODO-XXXXXXX",
                      "areaServed": "Worldwide",
                      "availableLanguage": ["en", "hi"]
                    },
                    {
                      "@type": "ContactPoint",
                      "contactType": "support",
                      "email": "mailto:support@altiorainfotech.com",
                      "telephone": "+91-TODO-XXXXXXX",
                      "areaServed": "Worldwide",
                      "availableLanguage": ["en", "hi"]
                    }
                  ],
                  "knowsAbout": [
                    "Generative AI", "Agentic AI", "RAG systems", "Computer Vision",
                    "Data Engineering", "MLOps", "Blockchain Development", "Tokenization",
                    "DePIN", "RWA", "DevOps", "SaaS Engineering"
                  ]
                },
                {
                  "@type": "Brand",
                  "@id": "https://altiorainfotech.com/#brand",
                  "name": "Altiora Infotech",
                  "url": "https://altiorainfotech.com/",
                  "logo": { "@id": "https://altiorainfotech.com/#org" }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://altiorainfotech.com/#website",
                  "url": "https://altiorainfotech.com/",
                  "name": "Altiora Infotech",
                  "publisher": { "@id": "https://altiorainfotech.com/#org" },
                  "inLanguage": "en",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://altiorainfotech.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "WebPage",
                  "@id": "https://altiorainfotech.com/#homepage",
                  "url": "https://altiorainfotech.com/",
                  "name": "Altiora Infotech — Engineering, security, and growth—aligned to ship faster",
                  "isPartOf": { "@id": "https://altiorainfotech.com/#website" },
                  "about": { "@id": "https://altiorainfotech.com/#org" },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://altiorainfotech.com/TODO/hero.jpg"
                  },
                  "breadcrumb": {
                    "@type": "BreadcrumbList",
                    "itemListElement": [{
                      "@type": "ListItem","position": 1,"name": "Home","item": "https://altiorainfotech.com/"
                    }]
                  },
                  "inLanguage": "en",
                  "dateModified": "2025-10-30"
                },
                {
                  "@type": "OfferCatalog",
                  "@id": "https://altiorainfotech.com/#catalog",
                  "name": "Altiora Infotech Services",
                  "url": "https://altiorainfotech.com/services",
                  "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@id": "https://altiorainfotech.com/services/ai-ml#gai" } },
                    { "@type": "Offer", "itemOffered": { "@id": "https://altiorainfotech.com/services/web3/blockchain#blockchain" } },
                    { "@type": "Offer", "itemOffered": { "@id": "https://altiorainfotech.com/services/ai-ml/data-strategy-and-engineering-page#data" } },
                    { "@type": "Offer", "itemOffered": { "@id": "https://altiorainfotech.com/services/devops#devops" } }
                  ],
                  "provider": { "@id": "https://altiorainfotech.com/#org" }
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://altiorainfotech.com/services/ai-ml#gai",
                  "name": "AI & ML Services",
                  "serviceType": "Artificial Intelligence Consulting",
                  "url": "https://altiorainfotech.com/services/ai-ml",
                  "provider": { "@id": "https://altiorainfotech.com/#org" },
                  "areaServed": "Worldwide",
                  "termsOfService": "https://altiorainfotech.com/terms",
                  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://altiorainfotech.com/services/web3/blockchain#blockchain",
                  "name": "Blockchain Development Services",
                  "serviceType": "Web3 & Blockchain",
                  "url": "https://altiorainfotech.com/services/web3/blockchain",
                  "provider": { "@id": "https://altiorainfotech.com/#org" },
                  "areaServed": "Worldwide"
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://altiorainfotech.com/services/ai-ml/data-strategy-and-engineering-page#data",
                  "name": "Data Strategy & Engineering",
                  "serviceType": "Data Platforms & Pipelines",
                  "url": "https://altiorainfotech.com/services/ai-ml/data-strategy-and-engineering-page",
                  "provider": { "@id": "https://altiorainfotech.com/#org" },
                  "areaServed": "Worldwide"
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://altiorainfotech.com/services/devops#devops",
                  "name": "DevOps Consulting",
                  "serviceType": "DevOps & Cloud",
                  "url": "https://altiorainfotech.com/services/devops",
                  "provider": { "@id": "https://altiorainfotech.com/#org" },
                  "areaServed": "Worldwide"
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://altiorainfotech.com/#faqs",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What makes Altiora Infotech different?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Engineering depth with measurable outcomes—CI/CD, observability, Core Web Vitals, security by default, and fast shipping that proves ROI."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Which industries do you serve?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Finance, healthcare, retail, logistics, manufacturing, and more—solutions tailored to each domain's compliance and performance needs."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you work globally?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We deliver worldwide with remote-first engagement, clear SLAs, and timezone-aligned collaboration."
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />
                     
      </head>
      <body suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MGDD26D9"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}>
          </iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
