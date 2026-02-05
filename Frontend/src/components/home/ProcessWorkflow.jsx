import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, PenTool, Code2, Headset, ArrowRight } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";

const steps = [
  {
    id: 1,
    title: "Strategy",
    description:
      "We begin by deconstructing your vision. Through deep market research and competitor analysis, we architect a roadmap that aligns your business goals with technological feasibility.",
    icon: Lightbulb,
  },
  {
    id: 2,
    title: "Design",
    description:
      "Our design philosophy blends aesthetics with function. We create intuitive, high-fidelity prototypes and UI systems that ensure seamless user experiences before a single line of code is written.",
    icon: PenTool,
  },
  {
    id: 3,
    title: "Develop",
    description:
      "We engineer robust, scalable solutions using cutting-edge stacks. Our agile development process ensures iterative delivery, clean code, and security-first architecture.",
    icon: Code2,
  },
  {
    id: 4,
    title: "Support",
    description:
      "Launch is just the beginning. We provide 24/7 monitoring, performance optimization, and continuous updates to ensure your digital infrastructure grows with your business.",
    icon: Headset,
  },
];

const ProcessWorkflow = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <SectionWrapper background="transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-300 to-white">
              Workflow
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A precision-engineered process designed to transform abstract ideas
            into market-dominating digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 h-auto lg:h-[600px]">
          {/* LEFT COLUMN: Step List */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {steps.map((step) => (
              <StepCard
                key={step.id}
                step={step}
                isActive={activeStep === step.id}
                onClick={() => setActiveStep(step.id)}
              />
            ))}
          </div>

          {/* RIGHT COLUMN: Active Content Panel */}
          <div className="lg:col-span-7 h-[500px] lg:h-auto">
            <AnimatePresence mode="wait">
              <ContentPanel
                key={activeStep}
                step={steps.find((s) => s.id === activeStep)}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const StepCard = ({ step, isActive, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className={`relative p-6 rounded-xl cursor-pointer border transition-all duration-300 group overflow-hidden ${
        isActive
          ? "bg-gradient-to-r from-orange-500/10 to-red-500/5 border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0.15)]"
          : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Active Indicator Bar */}
      {isActive && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-red-600 shadow-[0_0_10px_2px_rgba(249,115,22,0.5)] origin-top"
        />
      )}

      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-4">
          <span
            className={`text-sm font-mono font-bold ${isActive ? "text-orange-400" : "text-slate-500"}`}
          >
            0{step.id}
          </span>
          <h3
            className={`text-lg font-bold ${isActive ? "text-white" : "text-slate-300"}`}
          >
            {step.title}
          </h3>
        </div>
        <span
          className={`text-xs uppercase tracking-wider ${isActive ? "text-red-400" : "text-slate-600"}`}
        >
          Step {step.id} of 4
        </span>
      </div>
    </motion.div>
  );
};

const ContentPanel = ({ step }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="relative w-full h-full bg-navy-900/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-orange-600/10 to-transparent rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

      {/* Top Section */}
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-8">
          {/* Icon Container */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
            <step.icon size={32} />
          </div>

          {/* Large Number */}
          <span className="text-8xl font-display font-bold text-white/5 select-none absolute right-0 top-0 leading-none -mt-4 -mr-4">
            0{step.id}
          </span>
        </div>

        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
          {step.title}
        </h3>

        <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
          {step.description}
        </p>

        <button className="group flex items-center space-x-2 text-orange-400 font-bold hover:text-orange-300 transition-colors">
          <span>Learn More</span>
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>

      {/* Bottom Section: Progress Bar */}
      <div className="relative z-10 mt-auto pt-12">
        <div className="flex justify-between text-xs font-mono text-slate-500 mb-2 uppercase tracking-widest">
          <span>Progress</span>
          <span>Step {step.id} / 4</span>
        </div>
        <div className="h-1 bg-white/10 rounded-full w-full overflow-hidden flex space-x-1">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-full flex-1 rounded-full transition-all duration-500 ${
                i <= step.id
                  ? "bg-gradient-to-r from-orange-500 to-red-500"
                  : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProcessWorkflow;
