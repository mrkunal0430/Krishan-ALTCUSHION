import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  Shield,
  Zap,
  Briefcase,
  Scale,
  Monitor,
  Database,
  Server,
  Bot,
  Award,
  CheckCircle2,
  TrendingUp,
  Lock,
  Globe,
  Headphones,
} from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";

const features = [
  {
    id: 1,
    category: "Security",
    title: "24/7 Threat Protection",
    description:
      "Round-the-clock SOC monitoring, Zero Trust architecture, and bank-grade encryption protecting your digital assets.",
    icon: Shield,
    color: "from-red-500 to-orange-600",
    stat: "95% Risk Reduction",
    services: ["Cyber Security", "Governance & Compliance"],
  },
  {
    id: 2,
    category: "Strategy",
    title: "Data-Driven Growth",
    description:
      "Strategic consulting and workforce training that transforms operations and reduces costs by up to 30%.",
    icon: Briefcase,
    color: "from-blue-500 to-indigo-600",
    stat: "30% Cost Savings",
    services: ["Business Consulting & Training"],
  },
  {
    id: 3,
    category: "Compliance",
    title: "100% Audit Ready",
    description:
      "GDPR, HIPAA, ISO 27001 compliance frameworks ensuring you stay ahead of regulations and avoid penalties.",
    icon: Scale,
    color: "from-emerald-500 to-green-600",
    stat: "Full Compliance",
    services: ["Governance & Compliance"],
  },
  {
    id: 4,
    category: "Development",
    title: "Blazing Fast Platforms",
    description:
      "Web and mobile apps with <2s load times, 99.9% uptime, and scalable architecture for millions of users.",
    icon: Monitor,
    color: "from-cyan-400 to-blue-500",
    stat: "<2s Load Time",
    services: ["Web & App Development"],
  },
  {
    id: 5,
    category: "Enterprise",
    title: "Unified Operations",
    description:
      "Comprehensive ERP solutions eliminating silos, automating workflows, and providing real-time business intelligence.",
    icon: Database,
    color: "from-amber-500 to-orange-600",
    stat: "85% Less Data Entry",
    services: ["ERP Solutions"],
  },
  {
    id: 6,
    category: "Infrastructure",
    title: "Cloud Excellence",
    description:
      "Expert IT consulting reducing infrastructure costs by 40% while achieving 99.99% uptime and disaster recovery.",
    icon: Server,
    color: "from-slate-400 to-slate-600",
    stat: "99.99% Uptime",
    services: ["IT Consulting"],
  },
  {
    id: 7,
    category: "Automation",
    title: "AI-Powered Efficiency",
    description:
      "Intelligent automation and AI agents working 24/7, reducing operational costs by 40% and scaling infinitely.",
    icon: Bot,
    color: "from-violet-500 to-purple-600",
    stat: "80% Task Automation",
    services: ["AI Agents & Automation"],
  },
  {
    id: 8,
    category: "Excellence",
    title: "Proven Track Record",
    description:
      "Trusted by enterprises worldwide with 500+ successful projects and 98% client satisfaction rate.",
    icon: Award,
    color: "from-yellow-400 to-orange-500",
    stat: "98% Success Rate",
    services: ["All Services"],
  },
];

const WhyChooseUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <SectionWrapper
      id="why-choose-us"
      background="dark"
      className="relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-300/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 max-w-4xl mx-auto px-2">
          <Motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-8"
          >
            <Zap className="w-4 h-4 text-primary-500" />
            <span className="text-sm text-primary-400 font-medium">
              Why Choose 360 Kavach
            </span>
          </Motion.div>

          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-4 sm:mb-6 leading-snug text-white"
          >
            Excellence Across{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-300 to-white pb-1">
              Every Service
            </span>
          </Motion.h2>

          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            From cybersecurity to AI automation, we deliver world-class
            solutions that drive measurable results. Here's what makes us the
            trusted partner for enterprises worldwide.
          </Motion.p>
        </div>

        {/* Features Grid - 4 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>

        {/* Bottom Trust Indicators */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 sm:mt-16 pt-8 sm:pt-12 border-t border-white/5"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            <TrustStat
              icon={CheckCircle2}
              value="500+"
              label="Projects Delivered"
            />
            <TrustStat icon={TrendingUp} value="98%" label="Success Rate" />
            <TrustStat icon={Globe} value="24/7" label="Global Support" />
            <TrustStat icon={Lock} value="100%" label="Data Security" />
          </div>
        </Motion.div>
      </div>
    </SectionWrapper>
  );
};

const FeatureCard = ({ feature, index, isHovered, onHover, onLeave }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`group relative p-3 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-300 h-full cursor-pointer overflow-hidden ${
        isHovered
          ? "bg-navy-800/60 border-primary-500/40 -translate-y-2 shadow-2xl shadow-primary-500/10"
          : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04]"
      }`}
    >
      {/* Animated Background Gradient */}
      <Motion.div
        className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
      />

      {/* Glow Effect on Hover */}
      {isHovered && (
        <Motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent rounded-2xl pointer-events-none"
        />
      )}

      {/* Category Badge */}
      <div className="flex items-center justify-between mb-2 sm:mb-4">
        <span className="text-[8px] sm:text-[10px] font-mono text-slate-400 uppercase tracking-wider">
          {feature.category}
        </span>
        <div className="hidden sm:block px-2 py-0.5 rounded-full bg-primary-500/20 border border-primary-500/30 text-[10px] font-bold text-primary-400">
          {feature.stat}
        </div>
      </div>

      {/* Icon */}
      <div
        className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${feature.color} p-0.5 transition-transform duration-300 ${isHovered ? "scale-110" : "scale-100"} mb-2 sm:mb-4`}
      >
        <div className="w-full h-full bg-navy-900 rounded-[10px] flex items-center justify-center">
          <feature.icon className="text-white" size={20} />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-sm sm:text-lg font-bold text-white mb-1 sm:mb-3 line-clamp-2 group-hover:text-primary-400 transition-colors">
        {feature.title}
      </h3>
      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-3">
        {feature.description}
      </p>

      {/* Services Tags */}
      <div className="hidden sm:flex flex-wrap gap-1">
        {feature.services.slice(0, 2).map((service, idx) => (
          <span
            key={idx}
            className="text-[10px] px-2 py-1 rounded-md bg-white/10 text-slate-300 font-medium"
          >
            {service.length > 15 ? service.substring(0, 15) + "..." : service}
          </span>
        ))}
      </div>

      {/* Hover Indicator */}
      <Motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-500 via-primary-300 to-white opacity-0 group-hover:opacity-100 transition-opacity"
        animate={{ width: isHovered ? "100%" : "0%" }}
        transition={{ duration: 0.3 }}
      />
    </Motion.div>
  );
};

const TrustStat = ({ icon: Icon, value, label }) => {
  return (
    <Motion.div
      whileHover={{ scale: 1.05 }}
      className="text-center group cursor-default"
    >
      <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 mb-2 sm:mb-3 group-hover:bg-primary-500/10 transition-colors">
        <Icon size={18} className="text-primary-400 sm:w-5 sm:h-5" />
      </div>
      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
        {value}
      </div>
      <div className="text-xs sm:text-sm text-slate-400">{label}</div>
    </Motion.div>
  );
};

export default WhyChooseUs;
