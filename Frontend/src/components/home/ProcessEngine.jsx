import React, { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import {
  Lightbulb,
  PenTool,
  Code2,
  Rocket,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";

const phases = [
  {
    id: 1,
    title: "Strategy",
    description:
      "We study your business, users, and risks. We define objectives, technical scope, and growth pathways.",
    outcomes: ["Objectives Defined", "Technical Scope", "Growth Pathways"],
    icon: Lightbulb,
  },
  {
    id: 2,
    title: "Design",
    description:
      "We convert strategy into system architecture, user journeys, and technical blueprints.",
    outcomes: ["System Architecture", "User Journeys", "Technical Blueprints"],
    icon: PenTool,
  },
  {
    id: 3,
    title: "Development",
    description:
      "Our engineers and consultants build secure, scalable, and optimized solutions.",
    outcomes: ["Secure Code", "Scalable Solutions", "Optimized Build"],
    icon: Code2,
  },
  {
    id: 4,
    title: "Support & Optimization",
    description:
      "We monitor, improve, and protect your systems to ensure long-term success.",
    outcomes: [
      "Continuous Monitoring",
      "System Improvement",
      "Long-term Protection",
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
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <Motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4 mb-4"
          >
            <div className="h-px w-12 bg-orange-500/50" />
            <span className="text-orange-400 text-sm font-mono tracking-widest uppercase">
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 block md:inline">
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
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-orange-500 to-red-500 shadow-[0_0_15px_rgba(249,115,22,0.6)]"
                initial={{ height: "0%" }}
                animate={{
                  height:
                    activeStep === 1
                      ? "0%"
                      : activeStep === 2
                        ? "33%"
                        : activeStep === 3
                          ? "65%"
                          : "98%",
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
          <div className="lg:col-span-7 h-[600px]">
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
            ? "bg-navy-900 border-orange-500 scale-125 shadow-[0_0_20px_rgba(249,115,22,0.8)]"
            : "bg-navy-900 border-slate-600 group-hover:border-orange-400"
        }`}
      >
        {isActive && (
          <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-75" />
        )}
      </Motion.div>

      {/* The Glass Panel */}
      <Motion.div
        whileHover={{ x: 10 }}
        className={`p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 ${
          isActive
            ? "bg-navy-800/60 border-orange-500/40 shadow-[0_0_30px_rgba(249,115,22,0.1)]"
            : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10"
        }`}
      >
        <div className="flex flex-col">
          <span
            className={`text-xs font-mono font-bold mb-1 ${
              isActive ? "text-orange-400" : "text-slate-500"
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
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-orange-500/5 via-transparent to-transparent pointer-events-none" />

        <div className="w-full h-full bg-navy-950/80 rounded-xl p-8 md:p-12 flex flex-col relative overflow-hidden">
          {/* Background Large Number */}
          <span className="absolute top-4 right-8 text-[12rem] font-display font-bold text-white/[0.02] leading-none select-none pointer-events-none">
            {phase.id}
          </span>

          {/* Top: Icon Cube */}
          <div className="mb-8 relative z-10">
            <div className="w-20 h-20 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl blur-lg" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl backdrop-blur-md flex items-center justify-center shadow-inner">
                <phase.icon size={32} className="text-orange-400" />
              </div>
              {/* Floating Particles */}
              <div className="absolute -top-2 -right-2 w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
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
                    <CheckCircle2 size={16} className="text-orange-500" />
                    <span className="text-slate-300">{outcome}</span>
                  </Motion.div>
                ))}
              </div>
            </div>

            <button className="flex items-center space-x-2 text-white font-bold group mt-4">
              <span className="border-b border-orange-500/50 group-hover:border-orange-500 transition-colors pb-0.5">
                Explore Phase
              </span>
              <ArrowRight
                size={16}
                className="text-orange-500 group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          {/* Bottom: Progress Bar */}
          <div className="mt-auto relative z-10 pt-8">
            <div className="flex justify-between text-xs font-mono text-slate-500 mb-2">
              <span>SYSTEM_PROGRESS</span>
              <span>PHASE {phase.id} / 4</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden flex space-x-0.5">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`h-full flex-1 transition-all duration-500 ${
                    step <= phase.id
                      ? "bg-gradient-to-r from-orange-500 to-red-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"
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
