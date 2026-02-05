import React, { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import {
  MessageSquare,
  Lightbulb,
  Code2,
  ClipboardCheck,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Target,
} from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";

const phases = [
  {
    id: 1,
    title: "Consultation",
    description:
      "We dive deep into your business ecosystem to understand your challenges, goals, and opportunities for growth.",
    outcomes: [
      "Business Analysis",
      "Challenge Identification",
      "Goal Alignment",
    ],
    icon: MessageSquare,
  },
  {
    id: 2,
    title: "Strategy",
    description:
      "We design a bespoke roadmap combining technical innovation with risk intelligence tailored to your needs.",
    outcomes: ["Custom Roadmap", "Technical Blueprint", "Risk Assessment"],
    icon: Lightbulb,
  },
  {
    id: 3,
    title: "Implementation",
    description:
      "Agile execution using cutting-edge tech stacks, ensuring seamless integration and minimal disruption.",
    outcomes: ["Seamless Integration", "Agile Development", "Quality Delivery"],
    icon: Code2,
  },
  {
    id: 4,
    title: "Review",
    description:
      "Comprehensive evaluation and testing to ensure all solutions meet quality standards and business objectives.",
    outcomes: ["Quality Assurance", "Performance Testing", "Compliance Check"],
    icon: ClipboardCheck,
  },
  {
    id: 5,
    title: "Support & Optimization",
    description:
      "Continuous monitoring, improvement, and scaling to keep your business ahead of market curves.",
    outcomes: [
      "24/7 Monitoring",
      "Continuous Improvement",
      "Performance Optimization",
    ],
    icon: Rocket,
  },
];

const ProcessEngine = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <SectionWrapper
      background="transparent"
      className="py-24 relative overflow-hidden"
    >
      {/* Background Ambience - Optimized */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <Motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-8"
          >
            <Target className="w-4 h-4 text-primary-500" />
            <span className="text-sm text-primary-400 font-medium">
              Our Methodology
            </span>
          </Motion.div>
          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold leading-tight"
          >
            <span className="block md:inline">How We</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-300 to-white block md:inline">
              Work
            </span>
          </Motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* LEFT: Process Rail */}
          <div className="lg:col-span-5 relative">
            {/* Vertical Track */}
            <div className="absolute left-5 top-8 bottom-32 w-px bg-white/10">
              {/* Active Line Animation */}
              <Motion.div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary-500 to-primary-300 shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                initial={{ height: "0%" }}
                animate={{
                  height:
                    activeStep === 1
                      ? "0%"
                      : activeStep === 2
                        ? "28%"
                        : activeStep === 3
                          ? "56%"
                          : activeStep === 4
                            ? "82%"
                            : "110%",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>

            <div className="space-y-12 relative">
              {phases.map((phase) => (
                <RailNode
                  key={phase.id}
                  phase={phase}
                  isActive={activeStep === phase.id}
                  onClick={() => setActiveStep(phase.id)}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: Process Module (Console) */}
          <div className="lg:col-span-7 h-[650px]">
            <AnimatePresence mode="wait">
              <ProcessModule
                key={activeStep}
                phase={phases.find((p) => p.id === activeStep)}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const RailNode = ({ phase, isActive, onClick }) => {
  return (
    <div className={`relative pl-24 group cursor-pointer`} onClick={onClick}>
      {/* The Node Dot */}
      <Motion.div
        className={`absolute left-[20px] top-6 w-3 h-3 -translate-x-1/2 rounded-full border-2 transition-all duration-300 z-10 ${
          isActive
            ? "bg-navy-900 border-primary-500 scale-125 shadow-[0_0_20px_rgba(249,115,22,0.8)]"
            : "bg-navy-900 border-slate-600 group-hover:border-primary-400"
        }`}
      >
        {isActive && (
          <div className="absolute inset-0 bg-primary-500 rounded-full animate-ping opacity-75" />
        )}
      </Motion.div>

      {/* The Glass Panel */}
      <Motion.div
        whileHover={{ x: 10 }}
        className={`p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 ${
          isActive
            ? "bg-navy-800/60 border-primary-500/40 shadow-[0_0_30px_rgba(249,115,22,0.1)]"
            : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10"
        }`}
      >
        <div className="flex flex-col">
          <span
            className={`text-xs font-mono font-bold mb-1 ${
              isActive ? "text-primary-400" : "text-slate-500"
            }`}
          >
            PHASE 0{phase.id}
          </span>
          <span
            className={`text-lg font-bold ${
              isActive ? "text-white" : "text-slate-400"
            }`}
          >
            {phase.title}
          </span>
        </div>
      </Motion.div>
    </div>
  );
};

const ProcessModule = ({ phase }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full h-full relative"
    >
      {/* The Container */}
      <div className="w-full h-full bg-navy-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-1 overflow-hidden shadow-2xl relative">
        {/* Subtle Inner Glow */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary-500/5 via-transparent to-transparent pointer-events-none" />

        <div className="w-full h-full bg-navy-950/80 rounded-xl p-8 md:p-12 flex flex-col relative overflow-hidden">
          {/* Background Large Number */}
          <span className="absolute top-4 right-8 text-[12rem] font-display font-bold text-white/[0.02] leading-none select-none pointer-events-none">
            {phase.id}
          </span>

          {/* Top: Icon Cube */}
          <div className="mb-8 relative z-10">
            <div className="w-20 h-20 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-300/20 rounded-xl blur-lg" />
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary-500 to-primary-300 p-0.5 transform transition-transform duration-300 group-hover:scale-110">
                <div className="w-full h-full bg-navy-900 rounded-[10px] flex items-center justify-center">
                  <phase.icon size={32} className="text-white" />
                </div>
              </div>
              {/* Floating Particles */}
              <div className="absolute -top-2 -right-2 w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 space-y-8 flex-grow">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                {phase.title}
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed font-light max-w-xl">
                {phase.description}
              </p>
            </div>

            {/* Outcomes List */}
            <div className="space-y-4">
              <div className="space-y-3">
                {phase.outcomes.map((outcome, idx) => (
                  <Motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    key={idx}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle2 size={16} className="text-primary-500" />
                    <span className="text-slate-300">{outcome}</span>
                  </Motion.div>
                ))}
              </div>
            </div>

            <button className="flex items-center space-x-2 text-white font-bold group mt-4">
              <span className="border-b border-primary-500/50 group-hover:border-primary-500 transition-colors pb-0.5">
                Explore Phase
              </span>
              <ArrowRight
                size={16}
                className="text-primary-500 group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          {/* Bottom: Progress Bar */}
          <div className="mt-auto relative z-10 pt-8">
            <div className="flex justify-between text-xs font-mono text-slate-500 mb-2">
              <span>SYSTEM_PROGRESS</span>
              <span>PHASE {phase.id} / 5</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden flex space-x-0.5">
              {[1, 2, 3, 4, 5].map((step) => (
                <div
                  key={step}
                  className={`h-full flex-1 transition-all duration-500 ${
                    step <= phase.id
                      ? "bg-gradient-to-r from-primary-500 to-red-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"
                      : "bg-transparent"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Motion.div>
  );
};

export default ProcessEngine;
