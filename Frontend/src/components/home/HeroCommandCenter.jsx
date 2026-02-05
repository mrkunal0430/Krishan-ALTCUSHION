import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Shield,
  Eye,
  Bot,
  Briefcase,
  Scale,
  Monitor,
  Database,
  Server,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import Button from "../ui/Button";

const services = [
  {
    icon: Shield,
    label: "Cyber Security",
    shortLabel: "Security",
    color: "#f97316",
    slug: "cyber-security",
  },
  {
    icon: Eye,
    label: "MDR & SOC",
    shortLabel: "MDR",
    color: "#ec4899",
    slug: "managed-detection-response",
  },
  {
    icon: Bot,
    label: "AI Automation",
    shortLabel: "AI",
    color: "#a855f7",
    slug: "ai-automation",
  },
  {
    icon: Briefcase,
    label: "Consulting",
    shortLabel: "Consult",
    color: "#3b82f6",
    slug: "business-consulting",
  },
  {
    icon: Scale,
    label: "Compliance",
    shortLabel: "GRC",
    color: "#22c55e",
    slug: "governance-compliance",
  },
  {
    icon: Monitor,
    label: "Development",
    shortLabel: "Dev",
    color: "#06b6d4",
    slug: "web-app-development",
  },
  {
    icon: Database,
    label: "ERP Solutions",
    shortLabel: "ERP",
    color: "#f59e0b",
    slug: "erp-solutions",
  },
  {
    icon: Server,
    label: "IT Consulting",
    shortLabel: "IT",
    color: "#64748b",
    slug: "it-consulting",
  },
];

// Calculate positions for circular layout
const calculatePositions = (count, radius) => {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i * 360) / count - 90;
    const rad = (angle * Math.PI) / 180;
    return {
      x: Math.cos(rad) * radius,
      y: Math.sin(rad) * radius,
      angle,
    };
  });
};

// Service Node Component
const ServiceNode = React.memo(
  ({
    service,
    position,
    index,
    isActive,
    onHover,
    onLeave,
    size = "default",
  }) => {
    const Icon = service.icon;
    const nodeSize =
      size === "small" ? "w-11 h-11" : "w-14 h-14 sm:w-16 sm:h-16";
    const iconSize = size === "small" ? 16 : 22;

    return (
      <div
        className="absolute z-10"
        style={{
          left: `calc(50% + ${position.x}px)`,
          top: `calc(50% + ${position.y}px)`,
          transform: "translate(-50%, -50%)",
        }}
        onMouseEnter={() => onHover(index)}
        onMouseLeave={onLeave}
        onTouchStart={() => onHover(index)}
      >
        <Link to={`/services/${service.slug}`} className="block group">
          {/* Glow effect */}
          <Motion.div
            animate={{ opacity: isActive ? 0.4 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 rounded-2xl blur-xl"
            style={{ backgroundColor: service.color }}
          />

          {/* Node container */}
          <Motion.div
            animate={{
              scale: isActive ? 1.1 : 1,
              borderColor: isActive ? service.color : "rgba(255,255,255,0.08)",
            }}
            transition={{ duration: 0.3 }}
            className={`relative ${nodeSize} rounded-2xl flex items-center justify-center backdrop-blur-sm border-2`}
            style={{
              backgroundColor: isActive
                ? "rgba(255,255,255,0.1)"
                : "rgba(10,25,47,0.8)",
              boxShadow: isActive ? `0 0 30px ${service.color}30` : "none",
            }}
          >
            <Icon
              size={iconSize}
              className="transition-colors duration-300"
              style={{ color: isActive ? service.color : "#94a3b8" }}
            />

            {/* Pulse ring */}
            {isActive && (
              <Motion.span
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute inset-0 rounded-2xl"
                style={{ border: `2px solid ${service.color}` }}
              />
            )}
          </Motion.div>

          {/* Label tooltip */}
          <AnimatePresence>
            {isActive && (
              <Motion.div
                initial={{ opacity: 0, y: 8, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-30"
              >
                <div
                  className="px-2 py-1 rounded-lg text-[10px] font-semibold whitespace-nowrap flex items-center gap-1"
                  style={{
                    backgroundColor: `${service.color}20`,
                    color: service.color,
                    border: `1px solid ${service.color}30`,
                  }}
                >
                  {size === "small" ? service.shortLabel : service.label}
                  <ChevronRight size={10} />
                </div>
              </Motion.div>
            )}
          </AnimatePresence>
        </Link>
      </div>
    );
  },
);

ServiceNode.displayName = "ServiceNode";

// Center Hub Component
const CenterHub = React.memo(
  ({ currentService, services, size = "default" }) => {
    const service = services[currentService];
    const Icon = service.icon;
    const hubSize =
      size === "small" ? "w-20 h-20" : "w-32 h-32 sm:w-36 sm:h-36";
    const iconSize = size === "small" ? 22 : 28;

    return (
      <div className="relative z-20">
        {/* Outer glow */}
        <Motion.div
          animate={{
            scale: [1, 1.15, 1],
            backgroundColor: service.color,
          }}
          transition={{
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            backgroundColor: { duration: 0.5 },
          }}
          className="absolute -inset-3 sm:-inset-6 rounded-full blur-2xl opacity-20"
        />

        {/* Main hub */}
        <div
          className={`relative ${hubSize} rounded-full bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 flex items-center justify-center shadow-2xl overflow-hidden border border-white/10`}
        >
          {/* Gradient overlay */}
          <Motion.div
            key={currentService}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 0.3, rotate: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
            style={{
              background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${service.color}50 90deg, transparent 180deg, ${service.color}30 270deg, transparent 360deg)`,
            }}
          />

          {/* Inner ring */}
          <div className="absolute inset-2 sm:inset-4 rounded-full border border-dashed border-white/10" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            <Motion.div
              key={currentService}
              initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.4, ease: "backOut" }}
            >
              <Icon size={iconSize} style={{ color: service.color }} />
            </Motion.div>
            <Motion.span
              key={`label-${currentService}`}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="mt-1 sm:mt-2 text-[8px] sm:text-[10px] font-semibold uppercase tracking-widest text-slate-400"
            >
              {service.shortLabel}
            </Motion.span>
          </div>
        </div>
      </div>
    );
  },
);

CenterHub.displayName = "CenterHub";

// Animated Needle Component
const AnimatedNeedle = React.memo(
  ({ positions, activeIndex, services, svgSize }) => {
    const center = svgSize / 2;
    const service = services[activeIndex];
    const pos = positions[activeIndex];

    if (!pos) return null;

    const endX = center + pos.x;
    const endY = center + pos.y;

    return (
      <svg
        className="absolute inset-0 pointer-events-none"
        width={svgSize}
        height={svgSize}
        viewBox={`0 0 ${svgSize} ${svgSize}`}
        style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
      >
        <defs>
          <linearGradient
            id="needleGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={service.color} stopOpacity="1" />
            <stop offset="100%" stopColor={service.color} stopOpacity="0.2" />
          </linearGradient>
          <filter
            id="needleGlow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Inactive connection dots */}
        {positions.map(
          (p, i) =>
            i !== activeIndex && (
              <circle
                key={`dot-${i}`}
                cx={center + p.x * 0.3}
                cy={center + p.y * 0.3}
                r="2"
                fill="rgba(255,255,255,0.1)"
              />
            ),
        )}

        {/* Main needle line */}
        <Motion.line
          key={activeIndex}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          x1={center}
          y1={center}
          x2={endX}
          y2={endY}
          stroke={service.color}
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#needleGlow)"
          style={{ pathLength: 1 }}
        />

        {/* Needle head (arrow) */}
        <Motion.circle
          key={`head-${activeIndex}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          cx={center + pos.x * 0.5}
          cy={center + pos.y * 0.5}
          r="5"
          fill={service.color}
          filter="url(#needleGlow)"
        />

        {/* Center dot */}
        <circle
          cx={center}
          cy={center}
          r="6"
          fill="rgba(10,25,47,1)"
          stroke={service.color}
          strokeWidth="2"
        />
      </svg>
    );
  },
);

AnimatedNeedle.displayName = "AnimatedNeedle";

// Service Hub Component (shared between desktop and mobile)
const ServiceHub = ({
  positions,
  currentService,
  services,
  onHover,
  onLeave,
  size = "default",
  svgSize,
}) => {
  const ringSize1 =
    size === "small" ? "w-[260px] h-[260px]" : "w-[420px] h-[420px]";
  const ringSize2 =
    size === "small" ? "w-[200px] h-[200px]" : "w-[340px] h-[340px]";

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Decorative rings */}
      <div
        className={`absolute ${ringSize1} rounded-full border border-white/[0.03]`}
      />
      <div
        className={`absolute ${ringSize2} rounded-full border border-dashed border-white/[0.05]`}
      />

      {/* Animated needle */}
      <AnimatedNeedle
        positions={positions}
        activeIndex={currentService}
        services={services}
        svgSize={svgSize}
      />

      {/* Service nodes */}
      {services.map((service, index) => (
        <ServiceNode
          key={service.slug}
          service={service}
          position={positions[index]}
          index={index}
          isActive={currentService === index}
          onHover={onHover}
          onLeave={onLeave}
          size={size}
        />
      ))}

      {/* Center hub */}
      <CenterHub
        currentService={currentService}
        services={services}
        size={size}
      />
    </div>
  );
};

const HeroCommandCenter = () => {
  const [activeService, setActiveService] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const desktopPositions = useMemo(
    () => calculatePositions(services.length, 180),
    [],
  );
  const mobilePositions = useMemo(
    () => calculatePositions(services.length, 100),
    [],
  );
  const currentService = hoveredService ?? activeService;

  // Auto-rotate with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleHover = useCallback((index) => {
    setHoveredService(index);
    setIsPaused(true);
  }, []);

  const handleLeave = useCallback(() => {
    setHoveredService(null);
    setIsPaused(false);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28 lg:pt-12 pb-8">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(100, 255, 218, 0.03) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-5 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mx-auto lg:mx-0"
            >
              <Sparkles size={14} className="text-primary-400" />
              <span className="text-xs font-medium text-primary-400 tracking-wide uppercase">
                Enterprise Technology Partner
              </span>
            </Motion.div>

            <Motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold leading-[1.2] text-white"
            >
              <span className="block whitespace-nowrap">
                Technology is the tool
              </span>
              <span className="block whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-300 to-white">
                Business growth is the goal
              </span>
            </Motion.h1>

            <Motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed mx-auto lg:mx-0"
            >
              360 Kavach delivers end-to-end{" "}
              <span className="text-white font-medium">cybersecurity</span>,{" "}
              <span className="text-white font-medium">AI automation</span>, and{" "}
              <span className="text-white font-medium">
                digital transformation
              </span>{" "}
              solutions to accelerate your enterprise growth.
            </Motion.p>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Button
                to="/contact"
                variant="primary"
                size="md"
                icon={ArrowRight}
              >
                Book Free Consultation
              </Button>
              <Button to="/services" variant="glass" size="md">
                Explore Solutions
              </Button>
            </Motion.div>
          </div>

          {/* Right: Service Hub Visualization - Desktop */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center h-[550px] order-1 lg:order-2"
          >
            <ServiceHub
              positions={desktopPositions}
              currentService={currentService}
              services={services}
              onHover={handleHover}
              onLeave={handleLeave}
              size="default"
              svgSize={450}
            />

            {/* Floating badges */}
            <Motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-12 right-12 px-3 py-2 bg-navy-800/90 backdrop-blur-sm border border-white/10 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-slate-300 font-medium">
                  Systems Online
                </span>
              </div>
            </Motion.div>

            <Motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-16 left-8 px-3 py-2 bg-primary-500/10 backdrop-blur-sm border border-primary-500/20 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-2">
                <span className="text-primary-400 text-xs font-bold">
                  +127%
                </span>
                <span className="text-xs text-primary-300">Client Growth</span>
              </div>
            </Motion.div>
          </Motion.div>

          {/* Mobile: Interactive Service Hub */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:hidden order-1 h-[280px] relative"
          >
            <ServiceHub
              positions={mobilePositions}
              currentService={currentService}
              services={services}
              onHover={handleHover}
              onLeave={handleLeave}
              size="small"
              svgSize={260}
            />
          </Motion.div>
        </div>

        {/* Mobile: Quick service link */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:hidden mt-2 flex justify-center"
        >
          <Link
            to={`/services/${services[activeService].slug}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-navy-800/60 border rounded-full transition-all duration-300"
            style={{
              borderColor: `${services[activeService].color}40`,
              boxShadow: `0 0 20px ${services[activeService].color}10`,
            }}
          >
            {React.createElement(services[activeService].icon, {
              size: 16,
              style: { color: services[activeService].color },
            })}
            <span className="text-sm font-medium text-white">
              {services[activeService].label}
            </span>
            <ArrowRight
              size={14}
              style={{ color: services[activeService].color }}
            />
          </Link>
        </Motion.div>
      </div>
    </section>
  );
};

export default HeroCommandCenter;
