import { motion } from "framer-motion";

const heroStats = [
  { value: "4–8 weeks", label: "Launch windows" },
  { value: "98%", label: "Core Web Vitals performance" },
  { value: "88%", label: "Journeys instrumented" },
];

const heroSignals = [
  "Composable frontends crafted for growth and marketing squads.",
  "Design systems and motion patterns that feel native on every surface.",
  "Instrumentation, analytics and QA automation wired in from sprint one.",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Web & Mobile
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Engineering
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
            Production-ready applications that drive growth, streamline operations, 
            and deliver measurable business outcomes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {heroStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4 mb-12">
            {heroSignals.map((signal, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="text-slate-300 text-lg"
              >
                {signal}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
              Start Your Project
            </button>
            <button className="px-8 py-4 border border-slate-600 hover:border-slate-500 text-white font-semibold rounded-lg transition-colors">
              View Our Work
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}