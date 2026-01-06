import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, PenTool, Code2, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

const phases = [
  {
    id: 1,
    title: 'Consult & Discover',
    description: 'We decode your market ecosystem. Through deep competitor analysis and user behavior modeling, we architect a product roadmap that is mathematically aligned with your business goals.',
    outcomes: ['Market Viability Analysis', 'User Persona Modeling', 'Technical Feasibility Map'],
    icon: Lightbulb,
  },
  {
    id: 2,
    title: 'Strategize & Design',
    description: 'Structure before surface. We engineer high-fidelity prototypes and atomic design systems that ensure scalability, consistency, and an intuitive user experience across all touchpoints.',
    outcomes: ['High-Fidelity Prototyping', 'Atomic Design System', 'UX/UI Architecture'],
    icon: PenTool,
  },
  {
    id: 3,
    title: 'Implement & Secure',
    description: 'The build phase. We deploy robust, secure code using modern stacks. Our iterative sprint cycles ensure continuous delivery while embedding security at every layer.',
    outcomes: ['Full-Stack Development', 'Zero-Trust Security', 'Performance Audits'],
    icon: Code2,
  },
  {
    id: 4,
    title: 'Support & Evolve',
    description: 'Deployment is just the start. We manage the go-to-market technical execution, monitor real-time performance, and optimize infrastructure for rapid user growth.',
    outcomes: ['CI/CD Pipeline Setup', 'Analytics Integration', '24/7 Infrastructure Monitoring'],
    icon: Rocket,
  }
];

const DeliveryEngine = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <SectionWrapper background="transparent" className="py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-4 mb-4"
          >
             <div className="h-px w-12 bg-emerald-500/50" />
             <span className="text-emerald-400 text-sm font-mono tracking-widest uppercase">Delivery Protocol v4.0</span>
             <div className="h-px w-12 bg-emerald-500/50" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
            The Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Pipeline</span>
          </h2>
        </div>

        {/* Horizontal Pipeline Visualization */}
        <div className="relative mb-16 hidden lg:flex justify-between items-center px-12">
           <div className="absolute left-0 top-1/2 w-full h-px bg-white/10 -z-10" />
           {phases.map((phase) => (
              <button 
                key={phase.id}
                onClick={() => setActiveStep(phase.id)}
                className={`flex flex-col items-center group relative ${activeStep === phase.id ? 'scale-110' : 'opacity-60 hover:opacity-100'} transition-all`}
              >
                 <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center mb-4 transition-all duration-300 ${
                    activeStep === phase.id ? 'bg-navy-900 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)]' : 'bg-navy-900 border-slate-600 group-hover:border-emerald-400'
                 }`}>
                    <phase.icon size={20} className={activeStep === phase.id ? 'text-emerald-400' : 'text-slate-400'} />
                 </div>
                 <span className={`text-sm font-bold ${activeStep === phase.id ? 'text-emerald-400' : 'text-slate-400'}`}>{phase.title}</span>
              </button>
           ))}
        </div>

        {/* Mobile / Stacked Fallback & Content Panel */}
        <div className="max-w-4xl mx-auto">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeStep}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 transition={{ duration: 0.3 }}
                 className="w-full bg-navy-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl"
               >
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                     <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex flex-col items-center justify-center border border-white/10 shrink-0">
                        <span className="text-4xl font-bold text-white opacity-20">0{activeStep}</span>
                     </div>
                     
                     <div className="flex-grow">
                        <h3 className="text-3xl font-bold text-white mb-4">{phases[activeStep-1].title}</h3>
                        <p className="text-lg text-slate-300 leading-relaxed mb-8">
                           {phases[activeStep-1].description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           {phases[activeStep-1].outcomes.map((outcome, i) => (
                              <div key={i} className="flex items-center space-x-3 text-sm text-slate-300 bg-white/5 p-3 rounded-lg border border-white/5">
                                 <CheckCircle2 size={16} className="text-emerald-500" />
                                 <span>{outcome}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </motion.div>
             </AnimatePresence>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default DeliveryEngine;
