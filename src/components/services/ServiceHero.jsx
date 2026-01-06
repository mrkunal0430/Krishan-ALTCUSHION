import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { Shield, Code2, Globe } from "lucide-react";

const ServiceHero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Mouse move effect for 3D parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = clientX / innerWidth;
    const y = clientY / innerHeight;
    mouseX.set(x - 0.5);
    mouseY.set(y - 0.5);
  };

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  // Smooth out the rotation
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 perspective-1000"
    >
      {/* Dynamic Grid Floor */}
      <div className="absolute inset-0 z-0 bg-navy-950">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-navy-950/50 to-navy-950 pointer-events-none" />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left: Content */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="px-3 py-1 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-xs font-mono uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                System Online
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Architecting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary-400 to-white">
                The Future
              </span>
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed max-w-xl mb-10 border-l-2 border-primary-500/30 pl-6">
              We deploy military-grade security, scalable cloud architecture,
              and AI-driven automation to build digital fortresses for modern
              enterprises.
            </p>

            <div className="flex flex-wrap gap-4">
              {["Cyber Intelligence", "Cloud Native", "AI Systems"].map(
                (tag, i) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="px-4 py-2 rounded-lg bg-navy-800/50 border border-white/10 text-slate-300 text-sm font-medium hover:border-primary-500/50 hover:text-primary-400 transition-colors cursor-crosshair"
                  >
                    {tag}
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* Right: 3D Isometric Interface */}
        <div className="order-1 lg:order-2 flex justify-center perspective-1000">
          <motion.div
            style={{
              rotateX: smoothRotateX,
              rotateY: smoothRotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-64 h-80 sm:w-80 sm:h-96 md:w-[400px] md:h-[500px]"
          >
            {/* Layer 1: Base (Infrastructure) */}
            <IsoCard
              z={0}
              color="from-blue-600/20 to-blue-900/20"
              borderColor="border-blue-500/30"
              delay={0.2}
            >
              <div className="h-full flex flex-col justify-end p-6">
                <Globe className="text-blue-400 mb-2" size={32} />
                <div className="h-1 w-12 bg-blue-500 rounded-full mb-1" />
                <h3 className="text-blue-200 font-bold font-mono text-lg">
                  INFRASTRUCTURE
                </h3>
                <p className="text-blue-400/60 text-xs mt-1">
                  Global Scalability Node
                </p>
              </div>
            </IsoCard>

            {/* Layer 2: Core (Security) */}
            <IsoCard
              z={60}
              color="from-primary-600/20 to-primary-900/20"
              borderColor="border-primary-500/30"
              delay={0.4}
            >
              <div className="h-full flex flex-col justify-center items-center p-6 text-center">
                <Shield className="text-primary-400 mb-4" size={48} />
                <h3 className="text-primary-200 font-bold font-mono text-2xl tracking-widest">
                  SECURITY
                </h3>
                <div className="flex gap-1 mt-3">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <div
                      key={n}
                      className="w-1 h-3 bg-primary-500/50 rounded-full"
                    />
                  ))}
                </div>
              </div>
            </IsoCard>

            {/* Layer 3: Top (Application) */}
            <IsoCard
              z={120}
              color="from-purple-600/20 to-purple-900/20"
              borderColor="border-purple-500/30"
              delay={0.6}
            >
              <div className="h-full p-6">
                <div className="flex justify-between items-start mb-8">
                  <Code2 className="text-purple-400" size={32} />
                  <div className="px-2 py-0.5 roundedElement bg-purple-500/20 text-purple-300 text-[10px] font-mono border border-purple-500/30">
                    V.4.0.1
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-full bg-purple-500/20 rounded-full overflow-hidden">
                    <motion.div
                      animate={{ width: ["0%", "100%"] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="h-full bg-purple-500"
                    />
                  </div>
                  <div className="h-2 w-2/3 bg-purple-500/20 rounded-full" />
                  <div className="h-2 w-1/2 bg-purple-500/20 rounded-full" />
                </div>
                <h3 className="text-purple-200 font-bold font-mono text-lg mt-6 text-right">
                  APPLICATION
                </h3>
              </div>
            </IsoCard>

            {/* Floating Elements (Orbs/Particles) */}
            <FloatingOrb
              z={160}
              x="-20%"
              y="-10%"
              color="bg-primary-500"
              delay={1}
            />
            <FloatingOrb
              z={100}
              x="110%"
              y="40%"
              color="bg-blue-500"
              delay={1.2}
            />
            <FloatingOrb
              z={40}
              x="-10%"
              y="80%"
              color="bg-purple-500"
              delay={1.5}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const IsoCard = ({ children, z, color, borderColor, delay }) => (
  <motion.div
    initial={{ opacity: 0, z: 0, rotateX: 60, rotateZ: -45 }}
    animate={{ opacity: 1, z: z, rotateX: 60, rotateZ: -45 }}
    transition={{ duration: 1, delay: delay, type: "spring" }}
    style={{
      transformStyle: "preserve-3d",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    }}
    className={`rounded-3xl backdrop-blur-md border ${borderColor} bg-gradient-to-br ${color} shadow-2xl relative overflow-hidden group`}
  >
    {/* Shine Effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
    {children}
  </motion.div>
);

const FloatingOrb = ({ z, x, y, color, delay }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, y: [0, -20, 0] }}
    transition={{
      opacity: { delay: delay, duration: 0.5 },
      y: { delay: delay, duration: 4, repeat: Infinity, ease: "easeInOut" },
    }}
    style={{
      transform: `translateZ(${z}px)`,
      left: x,
      top: y,
    }}
    className={`absolute w-4 h-4 rounded-full ${color} shadow-[0_0_20px_rgba(255,255,255,0.5)]`}
  />
);

export default ServiceHero;
