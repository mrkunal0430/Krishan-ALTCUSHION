import React from "react";
import { motion } from "framer-motion";
import { Search, MessageSquare, Wrench, Rocket, RefreshCw } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";

const steps = [
  { id: 1, title: "Research", icon: Search },
  { id: 2, title: "Consulting", icon: MessageSquare },
  { id: 3, title: "Training", icon: Wrench },
  { id: 4, title: "Implementation", icon: Rocket },
  { id: 5, title: "Optimization", icon: RefreshCw },
];

const ImprovementPipeline = () => {
  return (
    <SectionWrapper
      background="dark"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Background Pipeline Graph */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-white/5 -translate-y-1/2 hidden md:block" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Built to Solve What <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-300 to-white">
              Traditional Consulting Can't
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg px-4">
            We remove business risk, inefficiency, and technology gaps through a
            continuous, engineered improvement pipeline.
          </p>
        </div>

        {/* The Pipeline Visualization */}
        <div className="relative flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto gap-0">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Step Node */}
              <div className="relative group z-10 flex flex-col items-center p-4 md:p-0">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.15 }}
                  className="w-20 h-20 rounded-full bg-navy-800 border-2 border-white/10 flex items-center justify-center group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 relative z-20"
                >
                  <step.icon
                    size={28}
                    className="text-slate-400 group-hover:text-blue-400 transition-colors"
                  />
                </motion.div>
                <div className="mt-4 text-center">
                  <div className="text-lg md:text-sm font-bold text-slate-300 group-hover:text-white transition-colors">
                    {step.title}
                  </div>
                  <div className="text-xs text-slate-500 font-mono mt-1">
                    STEP 0{step.id}
                  </div>
                </div>
              </div>

              {/* Connector Line (Mobile hidden, Desktop visible) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block flex-1 -top-7 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mx-2 relative">
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 left-0 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]"
                    animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "linear",
                    }}
                  />
                </div>
              )}

              {/* Vertical Connector for Mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden relative mx-auto w-px h-20 bg-gradient-to-b from-white/5 via-blue-500/30 to-white/5">
                  {/* Animated energy dot */}
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.9)]"
                    animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: "linear",
                    }}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ImprovementPipeline;
