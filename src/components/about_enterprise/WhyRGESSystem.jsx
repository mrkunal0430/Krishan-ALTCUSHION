import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, TrendingUp, Layers, Headphones } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

const trustBlocks = [
  { title: 'Enterprise Experience', icon: Layers, desc: 'Proven architecture for large-scale ops.' },
  { title: 'Cost-Optimized Systems', icon: TrendingUp, desc: 'Maximizing output while minimizing waste.' },
  { title: 'Measurable Performance', icon: Zap, desc: 'Real-time analytics on every process.' },
  { title: '24x7 Operational Support', icon: Headphones, desc: 'Always-on reliability for your business.' },
];

const WhyRGESSystem = () => {
  return (
    <SectionWrapper background="dark" className="py-24 border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-16">
          Why Enterprises <span className="text-blue-500">Run on 360 Kavach</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
           {trustBlocks.map((block, i) => (
             <motion.div
               key={i}
               whileHover={{ y: -10 }}
               className="w-full md:w-64 bg-navy-800/40 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex flex-col items-center text-center shadow-lg hover:shadow-blue-500/10 transition-all"
             >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/20">
                   <block.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{block.title}</h3>
                <p className="text-slate-400 text-sm">{block.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyRGESSystem;
