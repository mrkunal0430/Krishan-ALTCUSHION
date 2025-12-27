import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import Button from '../ui/Button';
import PlexusBackground from '../ui/PlexusBackground';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950 pt-20">
      {/* Ambient Background Layer (Simulating Video) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-slate-900" />
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-primary-500/10 rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-blue-600/10 rounded-full blur-[120px] translate-y-1/4 -translate-x-1/4" />
      </div>

      {/* Plexus Overlay */}
      <PlexusBackground />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            <span className="text-primary-400 text-sm font-medium tracking-wide">Next-Gen Digital Solutions</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-7xl font-display font-bold leading-tight mb-8">
            Securing Growth through <br />
            <span className="text-gradient-primary">Digital Excellence</span> & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Risk Intelligence.</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            We architect resilient digital ecosystems that drive enterprise growth while mastering security and compliance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="primary" size="lg" to="/services" icon={ArrowRight}>
              Explore Services
            </Button>
            <Button variant="glass" size="lg" to="/about" icon={ShieldCheck}>
              Our Philosophy
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-primary-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
