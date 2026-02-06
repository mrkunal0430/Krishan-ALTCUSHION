import React from "react";
import { motion as Motion } from "framer-motion";

const items = [
  "Cyber Security",
  "24/7 SOC",
  "AI Automation",
  "Web Development",
  "ERP Solutions",
  "IT Consulting",
  "Compliance",
  "Business Consulting",
];

const StatsRibbon = () => {
  return (
    <div className="w-full bg-navy-900 border-y border-white/5 py-3 sm:py-4 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-navy-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-navy-900 to-transparent z-10 pointer-events-none" />

      <div className="flex">
        <Motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="flex shrink-0"
        >
          {[...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center shrink-0 mx-4 sm:mx-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2 sm:mr-3" />
              <span className="text-xs sm:text-sm text-slate-300 font-medium whitespace-nowrap">
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
