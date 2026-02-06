import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Shield, ShieldOff } from "lucide-react";
import Button from "../components/ui/Button";

const GlitchText = ({ text }) => {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block">
      <span className="relative z-10">{text}</span>
      {glitch && (
        <>
          <span
            className="absolute top-0 left-0 z-20 text-primary-500/80"
            style={{ clipPath: "inset(20% 0 40% 0)", transform: "translate(-4px, -2px)" }}
          >
            {text}
          </span>
          <span
            className="absolute top-0 left-0 z-20 text-red-500/60"
            style={{ clipPath: "inset(60% 0 0 0)", transform: "translate(4px, 2px)" }}
          >
            {text}
          </span>
        </>
      )}
    </span>
  );
};

const NotFound = () => {
  const [particles] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }))
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Background particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary-500/20"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ opacity: [0, 0.6, 0], y: [0, -30, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-red-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Broken shield icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "backOut" }}
          className="mb-8 inline-flex"
        >
          <div className="relative">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-red-500/20 to-primary-500/20 border border-white/10 flex items-center justify-center backdrop-blur-sm">
              <ShieldOff className="w-10 h-10 sm:w-12 sm:h-12 text-red-400/80" />
            </div>
            {/* Pulse ring */}
            <motion.div
              className="absolute -inset-2 rounded-2xl border border-red-500/30"
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* 404 number */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4"
        >
          <h1 className="text-[7rem] sm:text-[9rem] md:text-[11rem] font-black leading-none tracking-tighter">
            <GlitchText text="404" />
          </h1>
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full"
        >
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-mono text-red-400 uppercase tracking-wider">
            Access Denied — Route Not Found
          </span>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10 max-w-lg mx-auto"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
            This page doesn't exist
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            The page you're looking for may have been moved, deleted, or
            never existed. Let's get you back on track.
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12"
        >
          <Button to="/" variant="primary" size="md" icon={Home}>
            Back to Home
          </Button>
          <Button to="/services" variant="glass" size="md" icon={Shield}>
            Explore Services
          </Button>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border-t border-white/5 pt-8 max-w-md mx-auto"
        >
          <p className="text-xs text-slate-500 uppercase tracking-wider mb-4 font-medium">
            Quick Navigation
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "About Us", to: "/about" },
              { label: "Contact", to: "/contact" },
              { label: "Training", to: "/training" },
              { label: "Blog", to: "/blog" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2 text-sm text-slate-400 bg-white/5 border border-white/5 rounded-lg hover:border-primary-500/30 hover:text-primary-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
