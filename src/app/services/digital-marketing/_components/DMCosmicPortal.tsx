"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TrendPortal {
  id: number;
  x: number;
  y: number;
  color: string;
  label: string;
  emoji: string;
  funFact: string;
  logo: string;
  description: string;
}

const DMCosmicPortal = () => {
  const [activePortal, setActivePortal] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const portals: TrendPortal[] = [
    {
      id: 0,
      x: 50,
      y: 15,
      color: '#3B82F6',
      label: 'AI Marketing',
      emoji: '🤖',
      funFact: 'Smart targeting!',
      logo: '🤖',
      description: 'Machine learning algorithms optimize ad targeting, content personalization, and customer journey mapping for maximum ROI.'
    },
    {
      id: 1,
      x: 80,
      y: 35,
      color: '#8B5CF6',
      label: 'Voice Search',
      emoji: '🎤',
      funFact: 'Voice-first future!',
      logo: '🎤',
      description: 'Optimizing for voice assistants and visual search engines as consumers shift to new search behaviors.'
    },
    {
      id: 2,
      x: 80,
      y: 65,
      color: '#10B981',
      label: 'Privacy First',
      emoji: '🛡️',
      funFact: 'Data protection first!',
      logo: '🛡️',
      description: 'Cookieless tracking solutions and first-party data strategies that respect user privacy while maintaining effectiveness.'
    },
    {
      id: 3,
      x: 50,
      y: 85,
      color: '#F59E0B',
      label: 'Interactive Content',
      emoji: '🎮',
      funFact: 'Engaging experiences!',
      logo: '🎮',
      description: 'AR/VR experiences, interactive videos, and gamified content that boost engagement and conversion rates.'
    },
    {
      id: 4,
      x: 20,
      y: 65,
      color: '#EF4444',
      label: 'Micro-Influencers',
      emoji: '👥',
      funFact: 'Authentic connections!',
      logo: '👥',
      description: 'Authentic partnerships with niche influencers delivering higher engagement rates than traditional celebrity endorsements.'
    },
    {
      id: 5,
      x: 20,
      y: 35,
      color: '#06B6D4',
      label: 'Omnichannel',
      emoji: '📊',
      funFact: 'Complete visibility!',
      logo: '📊',
      description: 'Advanced analytics tracking customer touchpoints across all channels for accurate ROI measurement and optimization.'
    }
  ];

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile && activePortal === null && portals.length > 0) {
        setActivePortal(portals[0].id);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [activePortal]);

  const handlePortalInteraction = (portalId: number) => {
    if (isMobile) {
      setActivePortal(activePortal === portalId ? null : portalId);
    } else {
      setActivePortal(portalId);
    }
  };

  return (
    <div className="relative">
      {/* Desktop Portal View */}
      <div className="hidden lg:block relative w-[400px] h-[400px] mx-auto mb-48">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-800 overflow-hidden">
          {[...Array(30)].map((_, i) => {
            const seedX = (i * 37) % 100;
            const seedY = (i * 73) % 100;
            const seedDuration = 2 + (i % 3);
            const seedDelay = (i % 5) * 0.4;

            return (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 bg-white/60 rounded-full"
                style={{
                  left: `${seedX}%`,
                  top: `${seedY}%`,
                }}
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: seedDuration,
                  repeat: Infinity,
                  delay: seedDelay,
                }}
              />
            );
          })}

          <motion.div
            className="absolute inset-2 rounded-full border border-[#F4CC6F]/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {portals.map((portal) => (
          <motion.div
            key={portal.id}
            className="absolute cursor-pointer"
            style={{
              left: `${portal.x}%`,
              top: `${portal.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            onHoverStart={() => setActivePortal(portal.id)}
            onHoverEnd={() => setActivePortal(null)}
          >
            <motion.div
              className="relative w-16 h-16 rounded-full border-2 flex items-center justify-center"
              style={{ borderColor: portal.color }}
              animate={activePortal === portal.id ? {
                scale: [1, 1.1, 1],
                boxShadow: `0 0 20px ${portal.color}40`
              } : {}}
              transition={{ duration: 2, repeat: activePortal === portal.id ? Infinity : 0 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
              >
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-300 rounded-full"
                    style={{
                      transform: `rotate(${i * 60}deg) translateY(-8px)`,
                    }}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>

              <motion.div
                className="text-lg relative z-10"
                animate={activePortal === portal.id ? {
                  scale: [1, 1.2, 1],
                } : {}}
                transition={{
                  duration: 1.5,
                  repeat: activePortal === portal.id ? Infinity : 0,
                  ease: "easeInOut",
                }}
              >
                {portal.logo}
              </motion.div>

              <motion.div
                className="absolute inset-1 rounded-full border border-white/30"
                style={{ backgroundColor: `${portal.color}20` }}
                animate={activePortal === portal.id ? {
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                } : {}}
                transition={{ duration: 1.5, repeat: activePortal === portal.id ? Infinity : 0 }}
              />
            </motion.div>

            <motion.div
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs font-semibold text-center whitespace-nowrap"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: activePortal === portal.id ? 1 : 0.7,
                y: activePortal === portal.id ? 0 : -3,
                color: activePortal === portal.id ? portal.color : '#ffffff'
              }}
              transition={{ duration: 0.3 }}
            >
              {portal.label}
            </motion.div>
          </motion.div>
        ))}

        <AnimatePresence>
          {activePortal !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 30 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              className="absolute -bottom-68 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-white/95 to-slate-50/90 backdrop-blur-xl rounded-xl p-4 w-80 text-center border-2 shadow-2xl z-50"
              style={{
                borderColor: `${portals[activePortal].color}40`,
                boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.3), 0 0 40px ${portals[activePortal].color}25`
              }}
            >
              <motion.div
                className="text-2xl mb-2"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                {portals[activePortal].logo}
              </motion.div>
              <motion.div
                className="text-sm font-bold mb-3"
                style={{ color: portals[activePortal].color }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {portals[activePortal].funFact}
              </motion.div>
              <motion.div
                className="text-slate-700 text-sm leading-relaxed font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {portals[activePortal].description}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Card Grid */}
      <div className="lg:hidden grid grid-cols-2 gap-4 max-w-md mx-auto">
        {portals.map((portal) => (
          <motion.div
            key={portal.id}
            className="relative cursor-pointer h-full"
            onClick={() => handlePortalInteraction(portal.id)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className={`relative p-4 rounded-2xl border-2 transition-all duration-300 h-32 flex flex-col justify-center ${
                activePortal === portal.id
                  ? 'bg-white/10 shadow-lg'
                  : 'bg-white/5 border-white/20'
              }`}
              style={{
                borderColor: activePortal === portal.id ? portal.color : 'rgba(255, 255, 255, 0.2)',
                boxShadow: activePortal === portal.id ? `0 0 20px ${portal.color}40` : 'none'
              }}
            >
              <div className="text-center">
                <motion.div
                  className="text-3xl mb-2"
                  animate={activePortal === portal.id ? {
                    scale: [1, 1.1, 1]
                  } : {
                    scale: 1
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {portal.logo}
                </motion.div>
                <h3 className="text-sm font-semibold text-white mb-1 line-clamp-2">{portal.label}</h3>
                <p className="text-xs text-white/60 line-clamp-2">{portal.funFact}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activePortal !== null && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mt-6 p-6 rounded-2xl border-2 bg-white/10 backdrop-blur-sm max-w-md mx-auto"
            style={{
              borderColor: `${portals[activePortal].color}40`,
              boxShadow: `0 0 30px ${portals[activePortal].color}20`
            }}
          >
            <div className="text-center">
              <div className="text-4xl mb-3">{portals[activePortal].logo}</div>
              <h3 className="text-lg font-bold text-white mb-2">{portals[activePortal].label}</h3>
              <p className="text-sm text-white/80 leading-relaxed">{portals[activePortal].description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DMCosmicPortal;