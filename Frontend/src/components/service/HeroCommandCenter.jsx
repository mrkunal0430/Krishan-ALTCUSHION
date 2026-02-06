import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Briefcase,
  Scale,
  Monitor,
  Server,
  Bot,
  Database,
  Eye,
  Sparkles,
  Zap,
  Globe,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: "cyber-security",
    title: "Cyber Security",
    shortTitle: "Cyber Security",
    description: "Enterprise-grade protection with 24/7 threat monitoring",
    icon: Shield,
    color: "from-red-500 to-orange-500",
    bgGlow: "bg-red-500/20",
    stats: "99.9% Threat Detection",
    textColor: "text-white",
  },
  {
    id: "managed-detection-response",
    title: "Managed Detection & Response",
    shortTitle: "MDR",
    description:
      "24/7 SOC, incident response, digital forensics & threat hunting",
    icon: Eye,
    color: "from-rose-500 to-pink-600",
    bgGlow: "bg-rose-500/20",
    stats: "24/7 SOC Coverage",
    textColor: "text-white",
  },
  {
    id: "business-consulting",
    title: "Business Consulting",
    shortTitle: "Consulting",
    description: "Strategic growth & workforce excellence programs",
    icon: Briefcase,
    color: "from-blue-500 to-indigo-500",
    bgGlow: "bg-blue-500/20",
    stats: "30% Cost Reduction",
    textColor: "text-white",
  },
  {
    id: "governance-compliance",
    title: "Governance & Compliance",
    shortTitle: "Compliance",
    description: "Risk frameworks & regulatory alignment",
    icon: Scale,
    color: "from-emerald-500 to-green-600",
    bgGlow: "bg-emerald-500/20",
    stats: "100% Audit Ready",
    textColor: "text-white",
  },
  {
    id: "web-app-development",
    title: "Web & App Development",
    shortTitle: "Development",
    description: "High-performance web, mobile & cloud platforms",
    icon: Monitor,
    color: "from-cyan-500 to-blue-600",
    bgGlow: "bg-cyan-500/20",
    stats: "<2s Load Time",
    textColor: "text-white",
  },
  {
    id: "erp-solutions",
    title: "ERP Solutions",
    shortTitle: "ERP",
    description: "Integrated business management systems",
    icon: Database,
    color: "from-amber-500 to-orange-600",
    bgGlow: "bg-amber-500/20",
    stats: "85% Automation",
    textColor: "text-navy-900",
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    shortTitle: "IT Strategy",
    description: "Cloud infrastructure & technology leadership",
    icon: Server,
    color: "from-slate-400 to-slate-600",
    bgGlow: "bg-slate-500/20",
    stats: "99.99% Uptime",
    textColor: "text-white",
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    shortTitle: "AI Agents",
    description: "Intelligent automation that works 24/7",
    icon: Bot,
    color: "from-violet-500 to-purple-600",
    bgGlow: "bg-violet-500/20",
    stats: "24/7 Operations",
    textColor: "text-white",
  },
];

const HeroCommandCenter = () => {
  const [activeService, setActiveService] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleServiceClick = (index) => {
    setActiveService(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-28 lg:pt-32 pb-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          key={activeService}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] ${services[activeService].bgGlow} rounded-full blur-[120px]`}
        />
        <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(100, 255, 218, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 255, 218, 0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Badge + Heading - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-snug mb-3">
            Transform Your Business With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-300 to-white">
              World-Class
            </span>{" "}
            Solutions
          </h1>
        </motion.div>

        {/* Service Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-5"
        >
          {services.map((service, index) => (
            <motion.button
              key={service.id}
              onClick={() => handleServiceClick(index)}
              className={`relative px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[11px] md:text-xs font-medium transition-all duration-300 ${
                activeService === index
                  ? `${service.textColor} shadow-lg`
                  : "text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeService === index && (
                <motion.div
                  layoutId="activePill"
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-full`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <service.icon size={12} />
                <span className="hidden sm:inline">{service.shortTitle}</span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative bg-navy-900/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${services[activeService].color}`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 p-4 md:p-6">
                  {/* Left: Active Service Info */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${services[activeService].color} p-0.5`}
                      >
                        <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                          {React.createElement(services[activeService].icon, {
                            size: 22,
                            className: "text-white",
                          })}
                        </div>
                      </div>
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold text-white">
                          {services[activeService].title}
                        </h2>
                        <p className="text-xs md:text-sm text-slate-400">
                          {services[activeService].description}
                        </p>
                      </div>
                    </div>

                    {/* Stats Badges */}
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 rounded-md border border-white/10">
                        <Zap size={12} className="text-primary-400" />
                        <span className="text-xs text-white">
                          {services[activeService].stats}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 rounded-md border border-white/10">
                        <Globe size={12} className="text-blue-400" />
                        <span className="text-xs text-white">Global</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 rounded-md border border-white/10">
                        <CheckCircle2 size={12} className="text-emerald-400" />
                        <span className="text-xs text-white">Enterprise</span>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-3 pt-1">
                      <Link
                        to={`/services/${services[activeService].id}`}
                        className={`group px-4 py-2 rounded-lg font-semibold text-sm text-white flex items-center gap-2 bg-gradient-to-r ${services[activeService].color} shadow-lg hover:shadow-xl transition-all`}
                      >
                        Explore
                        <ArrowRight
                          size={14}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                      <Link
                        to="/contact"
                        className="px-4 py-2 rounded-lg font-semibold text-sm text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                      >
                        Get Consultation
                      </Link>
                    </div>
                  </div>

                  {/* Right: All Services Grid */}
                  <div className="lg:col-span-3">
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-2">
                      {services.map((service, index) => (
                        <motion.button
                          key={service.id}
                          onClick={() => handleServiceClick(index)}
                          className={`group relative p-2.5 md:p-3 rounded-xl text-left transition-all duration-300 ${
                            activeService === index
                              ? "bg-white/10 border-white/20"
                              : "bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10"
                          } border`}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          {activeService === index && (
                            <motion.div
                              layoutId="activeCard"
                              className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 rounded-xl`}
                            />
                          )}
                          <div className="relative z-10">
                            <div
                              className={`w-8 h-8 rounded-lg bg-gradient-to-br ${service.color} p-0.5 mb-2`}
                            >
                              <div className="w-full h-full bg-navy-950 rounded-[6px] flex items-center justify-center">
                                <service.icon size={14} className="text-white" />
                              </div>
                            </div>
                            <h3 className="font-semibold text-white text-xs mb-0.5">
                              {service.shortTitle}
                            </h3>
                            <p className="text-[10px] text-slate-500 line-clamp-1 hidden md:block">
                              {service.description}
                            </p>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="flex gap-0.5 px-4 pb-3 md:px-6 md:pb-4">
                  {services.map((_, index) => (
                    <div
                      key={index}
                      className="flex-1 h-0.5 rounded-full bg-white/10 overflow-hidden"
                    >
                      <motion.div
                        className={`h-full bg-gradient-to-r ${services[index].color}`}
                        initial={{ width: "0%" }}
                        animate={{
                          width: activeService === index ? "100%" : "0%",
                        }}
                        transition={{
                          duration:
                            activeService === index && isAutoPlaying ? 4 : 0.3,
                          ease: "linear",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroCommandCenter;
