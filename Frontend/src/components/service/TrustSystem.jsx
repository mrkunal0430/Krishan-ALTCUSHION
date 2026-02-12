import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  CheckCircle,
  Award,
  Lock,
  Server,
  Users,
  Globe,
} from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";

const trustMetrics = [
  { id: 1, label: "Enterprise Partners", value: 150, suffix: "+", icon: Users },
  { id: 2, label: "Security Audits", value: 1000, suffix: "+", icon: Shield },
  { id: 3, label: "Uptime Guarantee", value: 99.99, suffix: "%", icon: Server },
  {
    id: 4,
    label: "Global Compliance",
    value: 12,
    suffix: " Stds",
    icon: Globe,
  },
];

const certifications = [
  "ISO 27001",
  "SOC 2 Type II",
  "GDPR Compliant",
  "HIPAA Ready",
];

const TrustSystem = () => {
  return (
    <SectionWrapper
      background="transparent"
      className="relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Trust Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6"
            >
              <Shield className="w-4 h-4 text-primary-500" />
              <span className="text-sm text-primary-400 font-medium">
                Trust Protocol: ACTIVE
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-snug">
              Engineered for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-300 to-white pb-1">
                Uncompromising Trust
              </span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed max-w-xl">
              We operate with the rigor of a financial institution and the
              agility of a startup. Our platform is built on a foundation of
              verifiable security, global compliance, and transparent
              performance.
            </p>

            <div className="flex flex-wrap gap-3 md:gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center space-x-2 px-3 md:px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors cursor-default"
                >
                  <CheckCircle
                    size={14}
                    className="text-green-500 md:w-5 md:h-5"
                  />
                  <span className="text-xs md:text-sm font-mono text-slate-300">
                    {cert}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Live Metrics Dashboard */}
          <div className="relative mt-4 lg:mt-0">
            <div className="relative bg-navy-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 overflow-hidden">
              {/* Background Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />

              <div className="grid grid-cols-2 gap-4 relative z-10">
                {trustMetrics.map((metric, i) => (
                  <MetricCard key={i} metric={metric} delay={i * 0.1} />
                ))}
              </div>

              {/* Scanning Line Animation */}
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.5)] z-20"
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const MetricCard = ({ metric, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-navy-950/60 border border-white/5 p-4 md:p-6 rounded-xl relative group hover:border-green-500/30 transition-colors"
    >
      <div className="flex justify-between items-start mb-3 md:mb-4">
        <div className="p-1.5 md:p-2 bg-white/5 rounded-lg text-green-400 group-hover:text-green-300 transition-colors">
          <metric.icon className="w-4 h-4 md:w-5 md:h-5" />
        </div>
        <div className="flex space-x-1">
          <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
          <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse delay-75" />
        </div>
      </div>
      <div>
        <div className="text-xl md:text-3xl font-display font-bold text-white mb-1">
          <AnimatedCounter value={metric.value} />
          {metric.suffix}
        </div>
        <div className="text-[10px] md:text-xs text-slate-500 font-mono uppercase tracking-wider">
          {metric.label}
        </div>
      </div>
    </motion.div>
  );
};

const AnimatedCounter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16); // 60 FPS

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{Math.floor(count)}</span>;
};

export default TrustSystem;
