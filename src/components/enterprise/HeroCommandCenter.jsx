import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, BarChart3, Zap } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";

const HeroCommandCenter = () => {
  return (
    <SectionWrapper
      background="transparent"
      className="relative min-h-[90vh] flex items-center pt-32 pb-12 overflow-hidden"
    >
      {/* 1. Background Grid & Ambience - DARKER & MORE TECHNICAL */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[1200px] h-[1200px] bg-indigo-900/10 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-blue-900/10 rounded-full blur-[150px] mix-blend-screen" />

        {/* Technical Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* 2. LEFT: Command Text */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-mono text-blue-300 tracking-wider">
                ENTERPRISE_READY
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
              Powering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Secure, Intelligent,
              </span>{" "}
              <br />& Scalable Enterprises
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg border-l-2 border-blue-500/30 pl-6">
              One integrated platform for cybersecurity, business consulting,
              IT, AI, and digital growth. We run the systems that run your
              business.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <button className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] flex items-center overflow-hidden">
                <span className="relative z-10">Deploy Platform</span>
                <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 bg-transparent border border-white/10 hover:border-white/30 text-white font-bold rounded-xl transition-all hover:bg-white/5 flex items-center group">
                <Cpu className="mr-2 w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                View Architecture
              </button>
            </div>
          </motion.div>
        </div>

        {/* 3. RIGHT: 3D Floating Interface (Updated for Enterprise Feel) */}
        <div className="relative h-[600px] hidden lg:block perspective-1000">
          {/* Center Visual: The "Core" - Updated color */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-900/20 to-blue-900/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          {/* Panel 1: Security Shield (Top Left) */}
          <FloatingPanel
            className="top-[5%] left-[0%] w-72 border-blue-500/20"
            delay={0}
            xMove={-15}
            yMove={-20}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
              <span className="text-[10px] text-blue-400 font-mono font-bold flex items-center">
                <Zap size={12} className="mr-1" /> THREAT_MONITOR
              </span>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex justify-between items-center text-[10px] text-slate-400 bg-white/5 p-1.5 rounded"
                >
                  <span>IP 192.168.1.{i + 40}</span>
                  <span className="text-green-400">SECURE</span>
                </div>
              ))}
            </div>
          </FloatingPanel>

          {/* Panel 2: AI Agents (Bottom Right) */}
          <FloatingPanel
            className="bottom-[15%] right-[0%] w-80 border-purple-500/20"
            delay={1}
            xMove={20}
            yMove={20}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold text-purple-300 flex items-center">
                <Cpu size={14} className="mr-2" /> AI Agents Active
              </span>
              <span className="text-[10px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded">
                Running
              </span>
            </div>
            <div className="flex space-x-2 h-16 mb-2">
              <div className="flex-1 bg-white/5 rounded-lg flex items-center justify-center border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors" />
                <div className="w-8 h-8 rounded-full border border-purple-400/50 flex items-center justify-center">
                  <span className="text-[8px] text-purple-400">BOT_1</span>
                </div>
              </div>
              <div className="flex-1 bg-white/5 rounded-lg flex items-center justify-center border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors" />
                <div className="w-8 h-8 rounded-full border border-blue-400/50 flex items-center justify-center">
                  <span className="text-[8px] text-blue-400">BOT_2</span>
                </div>
              </div>
            </div>
          </FloatingPanel>

          {/* Panel 3: Analytics (Center Right) - Blurrier background element */}
          <FloatingPanel
            className="top-[30%] right-[-10%] w-64 blur-[0.5px] opacity-90 border-indigo-500/20"
            delay={2}
            xMove={15}
            yMove={-10}
          >
            <div className="p-2 space-y-3">
              <div className="flex justify-between items-end">
                <div className="w-8 h-16 bg-gradient-to-t from-indigo-500 to-transparent rounded-t" />
                <div className="w-8 h-24 bg-gradient-to-t from-indigo-500 to-transparent rounded-t" />
                <div className="w-8 h-12 bg-gradient-to-t from-indigo-500 to-transparent rounded-t" />
                <div className="w-8 h-20 bg-gradient-to-t from-indigo-500 to-transparent rounded-t" />
              </div>
              <div className="h-px w-full bg-white/20" />
            </div>
          </FloatingPanel>

          {/* Panel 4: System Health (Bottom Left) */}
          <FloatingPanel
            className="bottom-[10%] left-[10%] w-56 border-emerald-500/20"
            delay={0.5}
            xMove={-10}
            yMove={15}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-white flex items-center">
                <BarChart3 size={14} className="mr-2 text-emerald-500" /> System
                Health
              </span>
            </div>
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>Core</span>
                  <span>98%</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[98%] h-full bg-emerald-500" />
                </div>
              </div>
            </div>
          </FloatingPanel>
        </div>
      </div>
    </SectionWrapper>
  );
};

const FloatingPanel = ({ children, className, delay, xMove, yMove }) => {
  return (
    <motion.div
      className={`absolute bg-navy-900/60 backdrop-blur-xl border p-5 rounded-2xl shadow-2xl ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: [0, yMove, 0],
        x: [0, xMove, 0],
      }}
      transition={{
        opacity: { duration: 1, delay },
        y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay },
        x: { duration: 10, repeat: Infinity, ease: "easeInOut", delay },
      }}
      whileHover={{
        scale: 1.05,
        zIndex: 50,
        borderColor: "rgba(255,255,255,0.4)",
      }}
    >
      {/* Glass Shine */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-2xl" />
      {children}
    </motion.div>
  );
};

export default HeroCommandCenter;
