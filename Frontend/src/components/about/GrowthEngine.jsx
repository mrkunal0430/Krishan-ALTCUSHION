import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Network, Zap, ShieldCheck, TrendingUp } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

const modules = [
  {
    id: 1,
    title: 'Sustainable Strategy',
    icon: Network,
    desc: 'Long-term architectural planning that ensures survival and dominance.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Operational Efficiency',
    icon: Zap,
    desc: 'Streamlining flows to eliminate friction and maximize output.',
    color: 'from-orange-500 to-amber-500'
  },
  {
    id: 3,
    title: 'Risk & Compliance',
    icon: ShieldCheck,
    desc: 'Automated governance that protects assets without slowing innovation.',
    color: 'from-emerald-500 to-green-500'
  },
  {
    id: 4,
    title: 'Growth & Scalability',
    icon: TrendingUp,
    desc: 'Systems engineered to handle exponential user and data loads.',
    color: 'from-purple-500 to-indigo-500'
  }
];

const GrowthEngine = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <SectionWrapper background="transparent" className="py-24">
      <div className="container mx-auto px-6 text-center">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            The 360 Kavach <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-300 to-white">Growth Engine</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A cohesive ecosystem of four critical modules powering business performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((mod, index) => (
            <motion.div
              key={mod.id}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`h-full bg-navy-900/40 backdrop-blur-xl border ${
                hoveredIndex === index ? 'border-white/20' : 'border-white/5'
              } p-8 rounded-2xl transition-all duration-300 relative overflow-hidden`}>
                
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${mod.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${mod.color} p-0.5 mb-6 mx-auto transform group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                    <mod.icon className="text-white" size={32} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{mod.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {mod.desc}
                </p>

                {/* Live Indicator */}
                <div className={`mt-6 flex items-center justify-center space-x-2 text-xs font-mono transition-opacity ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-400">MODULE ACTIVE</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
};

export default GrowthEngine;
