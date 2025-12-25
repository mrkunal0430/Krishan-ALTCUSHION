import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Clients Served', value: '2000+' },
  { label: 'Years Experience', value: '15+' },
  { label: 'Tech Certifications', value: '50+' },
  { label: 'Global Offices', value: '2' },
];

const StatsRibbon = () => {
  return (
    <section className="relative z-20 -mt-10 mb-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-2xl p-8 md:p-12 shadow-2xl shadow-black/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            {stats.map((stat, index) => (
              <div key={index} className="px-4">
                <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-primary-400 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsRibbon;
