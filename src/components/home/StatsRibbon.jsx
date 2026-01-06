import React from 'react';
import { motion as Motion } from 'framer-motion';

const stats = [
  "Zero Trust Architecture",
  "AI-Driven Threat Detection",
  "Global Compliance Ready",
  "24/7 Security Operations",
  "Enterprise Scalability",
  "Cloud Native Engineering",
  "Bank-Grade Encryption",
  "Rapid Incident Response"
];

const StatsRibbon = () => {
  return (
    <div className="w-full bg-navy-950 border-y border-white/5 overflow-hidden py-6 relative z-10">
      
      {/* Gradient Fade Edges */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-navy-950 to-transparent z-10" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-navy-950 to-transparent z-10" />

      <div className="flex">
        <Motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex whitespace-nowrap"
        >
          {/* Double the list for seamless marquee loop */}
          {[...stats, ...stats].map((item, index) => (
            <div key={index} className="flex items-center mx-8">
               <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-4 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
               <span className="text-sm md:text-base font-mono text-slate-400 font-bold uppercase tracking-wider">
                 {item}
               </span>
            </div>
          ))}
        </Motion.div>
      </div>
    </div>
  );
};

export default StatsRibbon;
