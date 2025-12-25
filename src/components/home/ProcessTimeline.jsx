import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import { MessageSquare, Lightbulb, Zap, RefreshCw } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Consult',
    description: 'We dive deep into your business ecosystem to understand challenges, goals, and opportunities for growth.'
  },
  {
    icon: Lightbulb,
    title: 'Strategize',
    description: 'Our architects design a bespoke roadmap combining technical innovation with risk intelligence.'
  },
  {
    icon: Zap,
    title: 'Implement',
    description: 'Agile execution using cutting-edge tech stacks, ensuring seamless integration and minimal disruption.'
  },
  {
    icon: RefreshCw,
    title: 'Evolve',
    description: 'Continuous monitoring, optimization, and scaling to keep your business ahead of market curves.'
  }
];

const ProcessTimeline = () => {
  return (
    <SectionWrapper id="process" background="dark">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">The Evolution <span className="text-gradient-primary">Protocol</span></h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          A systematic approach ensuring predictable success and sustainable growth.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2 hidden md:block" />

        <div className="space-y-12 md:space-y-24">
          {steps.map((step, index) => (
            <TimelineItem key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const TimelineItem = ({ step, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`relative flex flex-col md:flex-row items-center ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Content */}
      <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} text-center mb-8 md:mb-0`}>
        <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
        <p className="text-slate-400">{step.description}</p>
      </div>

      {/* Center Icon */}
      <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-navy-900 border border-primary-500/30 text-primary-500 shadow-[0_0_30px_rgba(100,255,218,0.15)] shrink-0">
        <step.icon size={24} />
      </div>

      {/* Spacer for opposite side */}
      <div className="w-full md:w-1/2" />
    </motion.div>
  );
};

export default ProcessTimeline;
