"use client";

import { useEffect, useRef, type MutableRefObject } from "react";

type ProductCard = {
  id: string;
  z: number;
  eyebrow: string;
  title: string;
  description: string;
  mobileDescription: string;
  buttonText: string;
  buttonUrl: string;
  stats: Array<{
    label: string;
    value: string;
    unit: string;
  }>;
  cardColor: "gray" | "blue" | "magenta" | "red" | "golden";
  video: string;
};

const PRODUCT_CARDS: ProductCard[] = [
    {
    id: "Digital Marketing",
    z: 30,
    eyebrow: "Growth Acceleration",
    title: "Digital Marketing Solutions That Drive Revenue Growth",
    description: "Modern businesses need digital marketing strategies that deliver measurable ROI. Our comprehensive digital marketing services include SEO optimization, PPC advertising, social media marketing, and conversion rate optimization—designed to meet today’s demands and future user expectations. \n\ \n\ We help businesses achieve 3x faster growth through targeted campaigns, improved search rankings, and higher conversion rates. From lead generation to customer retention, our digital marketing experts deliver measurable results that boost your bottom line. Partner with us to transform your online presence into a revenue-generating machine. ",mobileDescription: "Boost your business with proven digital marketing strategies. We deliver SEO, PPC, social media marketing, and CRO services that increase leads, improve conversions, and drive sustainable revenue growth for your business.",
    buttonText: "View Web2 Projects",
    buttonUrl: "#",
    stats: [
      { label: "Applications Built", value: "100", unit: "+" },
      { label: "Active Users", value: "1", unit: "M+" }
    ],
    cardColor: "golden",
    video: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/marketing-video.mp4",
  },
  {
    
    id: "web3",
    z: 10,
    eyebrow: "Innovation",
    title: "Web3 Solutions",
    description: "Web3 is changing the trend towards openness which is user-owned rather than centralized online economy. Our designs and development of blockchain-based establishments make the procedure more transparent, establish greater confidence, and liberate additional value within sectors.\n\nWhether developing NFTs and smart contracts or decentralized applications (dApps) our team has provided the production-ready solutions that organizations can use to succeed in the next stage of the internet.\n\nWeb3 is not merely a technology stack, it is a system of ownership and inclusion and freedom. We assist you in packet utility because we can achieve alignment of governance, security, and usability that will result in long-term effect of your products.",
    mobileDescription: "Web3 shifts power to users. We design and ship production-ready dApps, NFTs, and smart contracts that add transparency, trust, and value. With the right stack and guardrails, your product scales securely and remains usable, governable, and future-proof.",
    buttonText: "Explore Web3",
    buttonUrl: "#",
    stats: [
      { label: "Projects Delivered", value: "50", unit: "+" },
      { label: "Smart Contracts", value: "200", unit: "+" }
    ],
    cardColor: "blue",
    video: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/services-videos/blockchain-technology.mp4",
  },
  {
    id: "ai",
    z: 20,
    eyebrow: "Technology",
    title: "AI — Transforming Ideas into Intelligent Products",
    description: "Artificial intelligence is no longer a fantasy, it is a formula of competitive advantage in modern days and going forward. We assist organizations to transform bare data into actionable intelligence and incorporate AI into daily routine operations to assist in enhancing speed, accuracy, and decision making.\n\nWe offer the ability to predict, automate processes, chatbots, generative AI, and machine learning platforms on an enterprise level. We develop systems to be responsive, capable of learning and improving over time which allows faster development, leaner organizations and more exciting customer experiences, without compromising on security, control and delivered outcomes.",
    mobileDescription: "We turn data into leverage. From chatbots and copilots to prediction and automation, we build enterprise-grade AI (RAG, fine-tuning, ML pipelines) that's fast, accurate, and secure—plugged into your product and workflows to boost speed, quality, and decision-making.",
    buttonText: "Discover AI Solutions",
    buttonUrl: "#",
    stats: [
      { label: "AI Models Deployed", value: "25", unit: "+" },
      { label: "Data Points Processed", value: "10", unit: "B+" }
    ],
    cardColor: "red",
    video: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/services-videos/AI-futuristic.mp4",
  },
  {
    id: "web2",
    z: 30,
    eyebrow: "Development",
    title: "Web 2.0 – Building the Connected World",
    description: "The interconnected world demands platforms that are both easy-to-use, scalable and platforms that have the ability to perform over time. As Web2, our applications include high conversion websites, mobile apps, enterprise software, and SaaS solutions customized to meet the anticipations of the future user.\n\nWe partner with organizations, companies and visionaries to develop destinations that are ecstatically precise and strategically created to grow.\n\nWe combine innovative ideas and engineering discipline in devising products that are both scalable and responsive to ever-changing requirements, to create frictionless customer experiences that are sustainable worldwide under a datalicious dashboard.",
    mobileDescription: "We design high-performance websites, mobile apps, and SaaS that are fast, scalable, and easy to use. From UX to cloud, we pair product thinking with disciplined engineering to ship reliable, measurable results—creating frictionless experiences that grow with your users and your business.",
    buttonText: "View Web2 Projects",
    buttonUrl: "#",
    stats: [
      { label: "Applications Built", value: "100", unit: "+" },
      { label: "Active Users", value: "1", unit: "M+" }
    ],
    cardColor: "magenta",
    video: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/services-videos/cyber-code-world.mp4",
  }
];

const getCardColorClasses = (color: ProductCard["cardColor"]) => {
  switch (color) {
    case "gray":
      return "bg-gray-100 text-gray-900";
    case "blue":
      return "bg-gradient-to-br from-blue-950 to-gray-950 text-white";
    case "magenta":
      return "bg-gradient-to-br from-violet-950 to-black text-white";
    case "red":
      return "bg-gradient-to-br from-red-950 to-gray-950 text-white";
    case "golden":
      return "text-white" + " " + "bg-[#251908]";
    default:
      return "bg-gray-100 text-gray-900";
  }
};

export default function SuccessStories() {
  const sectionRefs = useRef<HTMLElement[]>([]) as MutableRefObject<HTMLElement[]>;
  const videoRefs = useRef<HTMLVideoElement[]>([]) as MutableRefObject<HTMLVideoElement[]>;
  const ticking = useRef(false);

  useEffect(() => {
    const secs = sectionRefs.current.filter(Boolean);
    const videos = videoRefs.current.filter(Boolean);
    if (!secs.length) return;

    const clamp = (v: number, min = 0, max = 1) => Math.max(min, Math.min(max, v));

    const update = () => {
      ticking.current = false;
      const vh = window.innerHeight;

      for (let i = 0; i < secs.length; i++) {
        const el = secs[i];
        const video = videos[i];
        const r = el.getBoundingClientRect();

        // All sections start at full size by default
        let scale = 1;
        let opacity = 1;

        // Check if there's a next section that's coming into view
        for (let j = i + 1; j < secs.length; j++) {
          const nextEl = secs[j];
          if (nextEl) {
            const nextR = nextEl.getBoundingClientRect();
            // If any next section is coming into view, shrink this current section
            if (nextR.top < vh && nextR.top > -vh) {
              const shrinkProgress = clamp((vh - nextR.top) / vh);
              // Enhanced shrink and fade effects with easing
              const easedProgress = shrinkProgress * shrinkProgress * (3 - 2 * shrinkProgress); // Smooth step easing
              const shrinkAmount = easedProgress * 0.45; // Increased shrink up to 45%
              const fadeAmount = easedProgress * 0.75; // Increased fade up to 75%
              
              // Apply the strongest shrink/fade effect from any overlapping section
              scale = Math.min(scale, 1 - shrinkAmount);
              opacity = Math.min(opacity, 1 - fadeAmount);
            }
          }
        }

        // For the first card only, handle initial fade in
        if (i === 0 && r.top > 0) {
          const approachProgress = clamp((vh - r.top) / vh);
          opacity = Math.min(opacity, approachProgress * 2); // Only fade in, no scaling
        }

        // Apply transforms
        el.style.setProperty("--scale", String(scale));
        el.style.setProperty("--opacity", String(opacity));

        // Play video when card is in view
        if (video && r.top < vh && r.bottom > 0) {
          video.play().catch(() => {
            // Ignore autoplay errors
          });
        }
      }
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    };

    // Initial update to show first card
    setTimeout(update, 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section
      className="section relative pb-12 lg:pb-[calc(50vh-250px)]"
      data-section="product-cards-large"
      data-theme="light"
    >
      <div className="card-stack relative">
        {PRODUCT_CARDS.map((card, idx) => (
          <div
            key={card.id}
            className="card-spacer"
            style={{ height: '100vh' }}
          >
            <div
              ref={(el) => { if (el) sectionRefs.current[idx] = el; }}
              className={`large-product-card-wrapper sticky top-0 min-h-screen ${getCardColorClasses(card.cardColor)} rounded-2xl flex items-center justify-center`}
              data-card-color={card.cardColor}
              data-theme="light"
              style={{
                zIndex: card.z,
                transform: `translate3d(0px, 0px, 0px) scale(var(--scale, 1))`,
                opacity: "var(--opacity, 1)",
                transformOrigin: "center center",
                willChange: "transform, opacity",
                transition: "transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
            <div className="large-product-card container mx-auto px-4 py-4 lg:px-8 lg:py-10 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 lg:gap-10 items-center max-w-7xl mx-auto min-h-screen">
                {/* Card Info */}
                <div className="card-info space-y-2 lg:space-y-5 lg:col-span-2 mb-0 lg:mb-0">
                  <div className="info space-y-2">
                    <span className="eyebrow text-sm font-medium opacity-80 uppercase tracking-wide block">
                      {card.eyebrow}
                    </span>
                    <h3 className="title text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                      {card.title}
                    </h3>
                    <div className="description text-sm md:text-base leading-relaxed whitespace-pre-line">
                      <span className="hidden lg:block">{card.description}</span>
                      <span className="lg:hidden">{card.mobileDescription}</span>
                    </div>
                  </div>
                </div>

                {/* Card Carousel/Video */}
                <div className="card-carousel lg:col-span-3 -mt-3 lg:mt-0">
                  <div className="carousel relative">
                    <div className="carousel-video-wrapper relative h-[480px] sm:h-[580px] lg:h-[780px] w-full sm:w-full lg:w-full mx-auto rounded-2xl overflow-hidden shadow-2xl">
                      <div className="video-wrapper carousel-video relative h-full bg-gray-900">
                        <video
                          ref={(el) => { if (el) videoRefs.current[idx] = el; }}
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          className="absolute inset-0 w-full h-full object-cover"
                          onLoadedData={(e) => {
                            // Try to play when video is loaded
                            const video = e.target as HTMLVideoElement;
                            video.play().catch(() => {
                              // Ignore autoplay errors
                            });
                          }}
                          onError={(e) => {
                            // Fallback if video doesn't exist
                            const target = e.target as HTMLVideoElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              const fallback = document.createElement('div');
                              fallback.className = 'absolute inset-0 flex items-center justify-center text-gray-400 text-lg bg-gray-900';
                              fallback.textContent = `${card.title} Video`;
                              parent.appendChild(fallback);
                            }
                          }}
                        >
                          <source src={card.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <div className="carousel-video-gradient absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
                    </div>
                    {/* Small offset for iPhone 13 Pro logical viewport */}
                    <style jsx>{`
                      @media (min-width: 389px) and (max-width: 391px) and (min-height: 843px) and (max-height: 845px) {
                        .carousel-video-wrapper { transform: translateY(-3px); }
                      }
                    `}</style>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}