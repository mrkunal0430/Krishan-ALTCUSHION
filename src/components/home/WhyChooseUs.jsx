import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Shield, Zap, Globe, Cpu, Users, Lock } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

const features = [
  {
    id: 1,
    title: 'Elite Engineering',
    description: 'Our team consists of top-tier engineers who build robust, scalable, and maintainable systems from day one.',
    icon: Cpu,
    color: 'from-blue-400 to-indigo-500'
  },
  {
    id: 2,
    title: 'Rapid Deployment',
    description: 'We utilize advanced CI/CD pipelines and automation to deliver production-ready software faster than the competition.',
    icon: Zap,
    color: 'from-yellow-400 to-orange-500'
  },
  {
    id: 3,
    title: 'Bank-Grade Security',
    description: 'Security is not an afterthought. We implement military-grade encryption and zero-trust protocols by default.',
    icon: Shield,
    color: 'from-green-400 to-emerald-500'
  }
];

const WhyChooseUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <SectionWrapper id="why-choose-us" background="dark" className="relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-900/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="text-center mb-16 max-w-3xl mx-auto">
        <Motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold mb-6"
        >
          Why Leading Brands <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            Trust 360 Kavach
          </span>
        </Motion.h2>
        <Motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 text-lg leading-relaxed"
        >
          We don't just write code; we architect digital fortresses and engines for growth. Here is what sets our operational DNA apart.
        </Motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
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

    </SectionWrapper>
  );
};

const FeatureCard = ({ feature, index, isHovered, onHover, onLeave }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`relative p-8 rounded-2xl border transition-all duration-300 h-full ${
        isHovered 
          ? 'bg-white/5 border-primary-500/50 -translate-y-2 shadow-2xl shadow-primary-500/10' 
          : 'bg-white/[0.02] border-white/5'
      }`}
    >
      {/* Glow Effect */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent rounded-2xl pointer-events-none" />
      )}

      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${feature.color} shadow-lg`}>
        <feature.icon className="text-white" size={28} />
      </div>

      <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
      <p className="text-slate-400 leading-relaxed">
        {feature.description}
      </p>

    </Motion.div>
  );
};

export default WhyChooseUs;
