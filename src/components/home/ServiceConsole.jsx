import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Briefcase,
  Scale,
  GraduationCap,
  Bot,
  Target,
  ArrowRight,
  Zap,
  Shield,
  Cpu,
} from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";

const services = [
  {
    id: "cyber-security",
    title: "Cyber Security",
    subtitle: "24/7 Digital Threat Defense",
    icon: Shield,
    description:
      "Enterprise-grade cybersecurity with continuous monitoring, threat detection, data encryption, and compliance-ready security architecture.",
    metrics: [
      { label: "Threat Detection", value: "24/7" },
      { label: "Risk Reduction", value: "95%" },
      { label: "Data Protection", value: "Encrypted" },
    ],
    visual: "grid",
    image: "/Services_Images/1.webp",
  },
  {
    id: "business-consulting",
    title: "Business Consulting",
    subtitle: "Strategic Growth Engineering",
    icon: Briefcase,
    description:
      "We design growth strategies, optimize operations, and help leadership teams make data-driven business decisions.",
    metrics: [
      { label: "Operational Efficiency", value: "+60%" },
      { label: "Growth Strategy", value: "Optimized" },
      { label: "Decision Accuracy", value: "High" },
    ],
    visual: "path",
    image: "/Services_Images/2.webp",
  },
  {
    id: "governance-compliance",
    title: "Governance & Compliance",
    subtitle: "Risk & Policy Control Systems",
    icon: Scale,
    description:
      "Enterprise risk management, regulatory compliance, security frameworks, and audit-ready governance models.",
    metrics: [
      { label: "Compliance", value: "100%" },
      { label: "Risk Coverage", value: "Enterprise" },
      { label: "Audit Readiness", value: "Always" },
    ],
    visual: "shield",
    image: "/Services_Images/3.webp",
  },
  {
    id: "skill-development",
    title: "Skill Development",
    subtitle: "Leadership & Workforce Growth",
    icon: GraduationCap,
    description:
      "Corporate training programs, leadership workshops, and professional development to build future-ready teams.",
    metrics: [
      { label: "Team Productivity", value: "+70%" },
      { label: "Skill Readiness", value: "Advanced" },
      { label: "Leadership Impact", value: "High" },
    ],
    visual: "pulse",
    image: "/Services_Images/4.webp",
  },
  {
    id: "web-development",
    title: "Web Development",
    subtitle: "High-Performance Digital Platforms",
    icon: Monitor,
    description:
      "Custom-built, responsive websites and enterprise portals with optimized UI/UX, SEO, and blazing-fast performance.",
    metrics: [
      { label: "Performance", value: "100%" },
      { label: "Uptime", value: "99.9%" },
      { label: "SEO Score", value: "Top Tier" },
    ],
    visual: "binary",
    image: "/Services_Images/5.webp",
  },
  {
    id: "app-development",
    title: "App Development",
    subtitle: "Mobile & Software Ecosystems",
    icon: Smartphone,
    description:
      "High-performance mobile and desktop applications with seamless UX, secure backend, and continuous maintenance.",
    metrics: [
      { label: "User Retention", value: "+45%" },
      { label: "Crash Rate", value: "<0.1%" },
      { label: "App Rating", value: "4.9★" },
    ],
    visual: "stack",
    image: "/Services_Images/6.webp",
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    subtitle: "Enterprise Technology Strategy",
    icon: Target,
    description:
      "Digital transformation, cloud architecture, infrastructure planning, and IT optimization for scalable business growth.",
    metrics: [
      { label: "Tech Stack Accuracy", value: "5×" },
      { label: "Delivery Clarity", value: "+200%" },
      { label: "Go-To-Market", value: "Faster" },
    ],
    visual: "chart",
    image: "/Services_Images/7.webp",
  },
  {
    id: "technology-training",
    title: "Technology Training",
    subtitle: "Hands-On Technical Mastery",
    icon: Cpu,
    description:
      "Advanced technology workshops, certifications, and real-world skill development in modern software and security.",
    metrics: [
      { label: "Skill Level", value: "Advanced" },
      { label: "Certification", value: "Industry" },
      { label: "Team Readiness", value: "100%" },
    ],
    visual: "nodes",
    image: "/Services_Images/8.webp",
  },
  {
    id: "ai-automation",
    title: "AI Agents & Automation",
    subtitle: "Intelligent Business Operations",
    icon: Bot,
    description:
      "AI-powered automation for HR, sales, marketing, finance, and customer support including smart chatbots and workflow automation.",
    metrics: [
      { label: "Process Automation", value: "80%" },
      { label: "Response Time", value: "Instant" },
      { label: "Cost Reduction", value: "-40%" },
    ],
    visual: "neural",
    image: "/Services_Images/9.webp",
  },
];

const ServiceConsole = () => {
  const [activeId, setActiveId] = useState("web-development");
  const activeService = services.find((s) => s.id === activeId) || services[0];

  return (
    <SectionWrapper
      background="transparent"
      className="py-24 relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 mb-4 border border-orange-500/30 rounded-full bg-orange-500/10 backdrop-blur-md"
          >
            <span className="text-orange-400 text-xs font-mono tracking-widest uppercase">
              System Capabilities
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Service{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Console
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Select a module to activate its command center. We engineer success
            through integrated digital systems.
          </p>
        </div>

        {/* --- DESKTOP LAYOUT (Hidden on mobile) --- */}
        <div className="hidden lg:grid grid-cols-12 gap-12 h-[650px]">
          {/* LEFT: Modules Stack (Scrollable) */}
          <div className="col-span-4 flex flex-col space-y-3 pr-2 overflow-y-auto custom-scrollbar h-full">
            {services.map((service) => (
              <ServiceModule
                key={service.id}
                service={service}
                isActive={activeId === service.id}
                onClick={() => setActiveId(service.id)}
              />
            ))}
          </div>

          {/* RIGHT: Service Engine Panel */}
          <div className="col-span-8 relative h-full">
            <div className="w-full h-full bg-navy-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-1 overflow-hidden relative shadow-2xl">
              {/* Decoration Lines */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* Content Area */}
              <div className="w-full h-full bg-navy-950/80 rounded-xl overflow-hidden relative p-12 flex flex-col">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeId}
                    initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex flex-col h-full"
                  >
                    {/* Top Bar: Icon & ID */}
                    <div className="flex justify-between items-start mb-8 border-b border-white/5 pb-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg shadow-lg shadow-orange-500/20">
                          <activeService.icon
                            className="text-white"
                            size={24}
                          />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-white tracking-tight">
                            {activeService.title}
                          </h3>
                          <p className="text-slate-400 text-sm font-mono">
                            {activeService.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-orange-500 font-mono mb-1">
                          SYS_STATUS
                        </div>
                        <div className="flex items-center space-x-2 text-green-400 text-xs font-mono">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                          </span>
                          <span>ONLINE</span>
                        </div>
                      </div>
                    </div>

                    {/* Main Content Info */}
                    <div className="grid grid-cols-2 gap-12 flex-grow overflow-y-auto pr-2 custom-scrollbar">
                      <div className="space-y-8">
                        <p className="text-lg text-slate-300 leading-relaxed font-light">
                          {activeService.description}
                        </p>

                        <div className="space-y-4">
                          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center">
                            <Zap size={14} className="text-orange-500 mr-2" />{" "}
                            Key Outcomes
                          </h4>
                          <div className="grid grid-cols-1 gap-3">
                            {activeService.metrics.map((metric, i) => (
                              <div
                                key={i}
                                className="flex items-center justify-between bg-white/5 border border-white/5 p-3 rounded-lg"
                              >
                                <span className="text-slate-400 text-sm">
                                  {metric.label}
                                </span>
                                <span className="text-orange-400 font-mono font-bold">
                                  {metric.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Link
                          to={`/services/${activeService.id}`}
                          className="group inline-flex items-center space-x-2 text-white font-bold text-lg mt-4 cursor-pointer"
                        >
                          <span>Explore Service</span>
                          <ArrowRight className="text-orange-500 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>

                      {/* Dynamic Visual Content */}
                      <div className="relative flex items-center justify-center bg-navy-900/50 rounded-2xl border border-white/5 overflow-hidden group min-h-[300px]">
                        <img
                          src={activeService.image}
                          alt={activeService.title}
                          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-60" />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* --- MOBILE LAYOUT (Visible on mobile/tablet) --- */}
        <div className="lg:hidden flex flex-col space-y-4">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                activeId === service.id
                  ? "bg-navy-900 border-orange-500/50 ring-1 ring-orange-500/20"
                  : "bg-navy-900/30 border-white/5"
              }`}
            >
              {/* Accordion Header */}
              <button
                onClick={() =>
                  setActiveId(activeId === service.id ? null : service.id)
                }
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-2 rounded-lg ${
                      activeId === service.id
                        ? "bg-orange-500 text-white"
                        : "bg-white/5 text-slate-400"
                    }`}
                  >
                    <service.icon size={20} />
                  </div>
                  <div>
                    <h3
                      className={`font-bold ${
                        activeId === service.id
                          ? "text-white"
                          : "text-slate-300"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500">{service.subtitle}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: activeId === service.id ? 180 : 0 }}
                  className="text-slate-500"
                >
                  {/* Chevron Icon */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </motion.div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {activeId === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="border-t border-white/5 p-5 bg-navy-950/30">
                      {/* Description */}
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Metrics Grid */}
                      <div className="grid grid-cols-1 gap-2 mb-6">
                        {service.metrics.map((metric, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between bg-white/5 p-3 rounded-lg border border-white/5"
                          >
                            <span className="text-xs text-slate-400">
                              {metric.label}
                            </span>
                            <span className="text-sm font-mono font-bold text-orange-400">
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Mini Visual */}
                      <div className="h-32 mb-6 bg-navy-900/50 rounded-lg border border-white/5 relative overflow-hidden flex items-center justify-center">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover opacity-80"
                        />
                      </div>

                      {/* Action */}
                      <Link
                        to={`/services/${service.id}`}
                        className="block w-full py-3 bg-white/5 hover:bg-orange-500 hover:text-white text-slate-300 rounded-lg font-bold text-sm transition-colors border border-white/10 hover:border-orange-500 text-center"
                      >
                        Explore Details
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const ServiceModule = ({ service, isActive, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`group relative w-full text-left p-4 rounded-xl border transition-all duration-300 overflow-hidden ${
        isActive
          ? "bg-navy-800 border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0.1)]"
          : "bg-navy-900/30 border-white/5 hover:bg-navy-800/50 hover:border-white/10"
      }`}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      {isActive && (
        <motion.div
          layoutId="active-glow"
          className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div
            className={`p-2 rounded-lg transition-colors ${
              isActive
                ? "bg-orange-500 text-white"
                : "bg-white/5 text-slate-400 group-hover:text-white"
            }`}
          >
            <service.icon size={20} />
          </div>
          <div>
            <span
              className={`block font-bold text-sm tracking-wide ${
                isActive
                  ? "text-white"
                  : "text-slate-400 group-hover:text-slate-200"
              }`}
            >
              {service.title}
            </span>
          </div>
        </div>

        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]"
          />
        )}
      </div>
    </motion.button>
  );
};

// Simplified Visual Representations
const VisualEngine = ({ type }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      {type === "binary" && (
        <div className="grid grid-cols-8 gap-2 opacity-50">
          {[...Array(64)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.1 }}
              animate={{ opacity: [0.1, 0.5, 0.1] }}
              transition={{ duration: 2, delay: i * 0.05, repeat: Infinity }}
              className="w-2 h-2 bg-orange-500 rounded-full"
            />
          ))}
        </div>
      )}
      {type === "stack" && (
        <div className="relative w-32 h-32">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border-2 border-orange-500/30 rounded-2xl bg-navy-900/80 backdrop-blur-sm"
              animate={{ y: [0, -10 * (i + 1), 0], x: [0, 5 * (i + 1), 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
              style={{ zIndex: 3 - i, transform: `scale(${1 - i * 0.1})` }}
            />
          ))}
        </div>
      )}
      {(type === "chart" || type === "target") && (
        <div className="flex items-end space-x-2 h-32">
          {[40, 70, 50, 90, 60, 100].map((h, i) => (
            <motion.div
              key={i}
              className="w-4 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t-sm"
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
            />
          ))}
        </div>
      )}
      {(type === "palette" || type === "play") && (
        <motion.div
          className="w-32 h-32 border-4 border-orange-500/50 rounded-full flex items-center justify-center relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          <div className="absolute inset-2 border border-white/20 rounded-full border-dashed" />
          <motion.div
            className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl rotate-45"
            animate={{ rotate: [45, 90, 45], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default ServiceConsole;
