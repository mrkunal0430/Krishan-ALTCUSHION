import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Megaphone,
  Target,
  Palette,
  Video,
  ArrowRight,
  Zap,
  TrendingUp,
  Layout,
  Shield,
  Cpu,
  Code,
  Activity,
  Globe,
  HeartPulse,
  ShoppingCart,
  Truck,
  Database,
  Link,
  Lock,
} from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";

// Default fallback for industries not fully mapped
const defaultServices = [
  {
    id: "cyber",
    title: "Cyber Security",
    subtitle: "Zero-Trust Architecture",
    icon: Shield,
    description:
      "Protecting your digital assets with military-grade encryption, real-time threat detection, and AI-driven response systems.",
    metrics: [
      { label: "Threats Blocked", value: "1M+" },
      { label: "Response Time", value: "<1ms" },
    ],
    visual: "binary",
  },
  {
    id: "consulting",
    title: "Business Consulting",
    subtitle: "Strategic Digital Transformation",
    icon: Activity,
    description:
      "We decode complex market dynamics to build technology roadmaps that drive efficiency, scalability, and new revenue streams.",
    metrics: [
      { label: "Growth", value: "3x" },
      { label: "Efficiency", value: "+40%" },
    ],
    visual: "chart",
  },
  {
    id: "ai",
    title: "AI Agents & Automation",
    subtitle: "Autonomous Workforce",
    icon: Cpu,
    description:
      "Deploy intelligent agents that handle support, operations, and analysis 24/7. Reduce overhead while increasing accuracy.",
    metrics: [
      { label: "Automation", value: "100%" },
      { label: "Cost Red.", value: "-60%" },
    ],
    visual: "neural",
  },
  {
    id: "dev",
    title: "Custom Development",
    subtitle: "Full-Stack Engineering",
    icon: Code,
    description:
      "Building the backbone of your business with scalable, clean, and maintainable code across web, mobile, and cloud environments.",
    metrics: [
      { label: "Uptime", value: "99.9%" },
      { label: "Speed", value: "0.1s" },
    ],
    visual: "stack",
  },
  {
    id: "governance",
    title: "Governance & Compliance",
    subtitle: "Regulatory Assurance",
    icon: Globe,
    description:
      "Navigating the complex landscape of digital regulations. We ensure your systems meet ISO, GDPR, and industry-specific standards.",
    metrics: [
      { label: "Compliance", value: "100%" },
      { label: "Risk", value: "0%" },
    ],
    visual: "shield",
  },
];

// Map industries to subsets or specific overrides
const industryOverrides = {
  Healthcare: [
    {
      ...defaultServices[0],
      description:
        "HIPAA-compliant security layers ensuring patient data integrity.",
    },
    {
      ...defaultServices[1],
      description:
        "Optimizing clinical workflows and patient engagement strategies.",
    },
    {
      ...defaultServices[2],
      description: "AI diagnostics support and administrative automation.",
    },
    { ...defaultServices[3], title: "Telehealth Platforms" },
  ],
  Finance: [
    {
      ...defaultServices[0],
      description:
        "SEC-compliant infrastructure with real-time fraud monitoring.",
    },
    { ...defaultServices[2], title: "Algorithmic Trading" },
  ],
};

const ServiceConsole = ({ selectedIndustry = "All" }) => {
  const [activeId, setActiveId] = useState("cyber");

  // Determine services to show based on industry
  const servicesToShow = industryOverrides[selectedIndustry] || defaultServices;
  const activeService =
    servicesToShow.find((s) => s.id === activeId) || servicesToShow[0];

  return (
    <SectionWrapper
      background="transparent"
      className="py-24 relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 mb-4 border border-indigo-500/30 rounded-full bg-indigo-500/10 backdrop-blur-md"
          >
            <span className="text-indigo-400 text-xs font-mono tracking-widest uppercase">
              Mode: {selectedIndustry}
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Service{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Ecosystem
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Centralized command for{" "}
            {selectedIndustry === "All" ? "enterprise" : selectedIndustry}{" "}
            operations.
          </p>
        </div>

        {/* Console Layout */}
        <div className="relative">
          {/* Central Hub Visualization could go here (optional creative add) */}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 h-auto lg:h-[600px]">
            {/* LEFT: Nodes */}
            <div className="lg:col-span-4 flex flex-col space-y-3 justify-center">
              {servicesToShow.map((service) => (
                <div key={service.id} className="relative group">
                  {/* Connection Line (Visual Only) */}
                  {activeId === service.id && (
                    <motion.div
                      layoutId="connector"
                      className="hidden lg:block absolute left-full top-1/2 w-8 h-px bg-indigo-500 z-0 origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                    />
                  )}

                  <ServiceNode
                    service={service}
                    isActive={activeId === service.id}
                    onClick={() => setActiveId(service.id)}
                  />
                </div>
              ))}
            </div>

            {/* RIGHT: Main Panel */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId + selectedIndustry} // Key changes on industry switch to animate
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <div className="h-full bg-navy-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-1 overflow-hidden relative shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none" />

                    <div className="h-full bg-navy-950/80 rounded-xl p-8 md:p-12 flex flex-col relative">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-8">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-500/20">
                            <activeService.icon
                              className="text-white"
                              size={28}
                            />
                          </div>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                              {activeService.title}
                            </h3>
                            <p className="text-indigo-300 font-mono text-sm">
                              {activeService.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Body */}
                      <div className="space-y-8 flex-grow">
                        <p className="text-lg text-slate-300 leading-relaxed">
                          {activeService.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                          {activeService.metrics.map((m, i) => (
                            <div
                              key={i}
                              className="bg-white/5 border border-white/5 p-4 rounded-lg"
                            >
                              <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">
                                {m.label}
                              </div>
                              <div className="text-xl font-bold text-white font-mono">
                                {m.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Footer/Action */}
                      <div className="pt-8 mt-auto border-t border-white/5 flex justify-between items-center">
                        <div className="text-xs text-slate-500 font-mono">
                          MODULE_ID: {activeService.id.toUpperCase()}
                        </div>
                        <button className="flex items-center space-x-2 text-indigo-400 hover:text-white transition-colors group">
                          <span className="font-bold">Initialize Module</span>
                          <ArrowRight
                            size={16}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const ServiceNode = ({ service, isActive, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`relative z-10 w-full text-left p-4 rounded-xl border transition-all duration-300 ${
        isActive
          ? "bg-navy-800 border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
          : "bg-navy-900/30 border-white/5 hover:bg-navy-800/50 hover:border-white/10"
      }`}
      whileHover={{ x: 5 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <service.icon
            className={`w-[18px] h-[18px] object-contain ${
              isActive
                ? "text-indigo-400"
                : "text-slate-500 group-hover:text-indigo-400"
            }`}
          />
          <span
            className={`text-sm font-bold ${
              isActive ? "text-white" : "text-slate-400"
            }`}
          >
            {service.title}
          </span>
        </div>
        {isActive && (
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,1)]" />
        )}
      </div>
    </motion.button>
  );
};

export default ServiceConsole;
