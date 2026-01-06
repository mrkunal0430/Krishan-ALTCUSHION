import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, BarChart2, Building2 } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

const caseStudies = [
  {
    id: 1,
    title: 'Secure Health Data Platform',
    client: 'MediCore Systems',
    industry: 'Healthcare',
    metrics: [
      { label: 'Data Processing', value: '+400%', trend: 'up' },
      { label: 'Security Incidents', value: '0', trend: 'flat' }
    ],
    tags: ['Cloud Security', 'AI Analytics', 'HIPAA'],
    image: 'bg-gradient-to-br from-blue-600 to-cyan-500'
  },
  {
    id: 2,
    title: 'FinTech Fraud Detection Core',
    client: 'Vault Financial',
    industry: 'Finance',
    metrics: [
      { label: 'Fraud Prevention', value: '99.8%', trend: 'up' },
      { label: 'Transaction Speed', value: '<50ms', trend: 'up' }
    ],
    tags: ['Machine Learning', 'Blockchain', 'Cybersecurity'],
    image: 'bg-gradient-to-br from-indigo-900 to-purple-800'
  },
  {
    id: 3,
    title: 'Global E-Com Optimization',
    client: 'ShopScale Global',
    industry: 'E-commerce',
    metrics: [
      { label: 'Conversion Rate', value: '+35%', trend: 'up' },
      { label: 'Downtime', value: '0%', trend: 'flat' }
    ],
    tags: ['Scalable Arch.', 'UX/UI', 'Automation'],
    image: 'bg-gradient-to-br from-orange-500 to-red-600'
  },
  {
    id: 4,
    title: 'Smart Factory IoT Mesh',
    client: 'AutoBuild Industries',
    industry: 'Manufacturing',
    metrics: [
      { label: 'Efficiency', value: '+28%', trend: 'up' },
      { label: 'Maintenance Cost', value: '-40%', trend: 'down' }
    ],
    tags: ['IoT', 'Edge Computing', 'Digital Twin'],
    image: 'bg-gradient-to-br from-emerald-600 to-green-500'
  }
];

const CaseStudyEngine = ({ selectedIndustry = 'All' }) => {
  // Filter based on prop if provided, or internal state if we wanted
  const visibleStudies = selectedIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.industry === selectedIndustry);

  return (
    <SectionWrapper background="transparent" className="py-24">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mb-4">
                <BarChart2 size={14} className="text-blue-400" />
                <span className="text-blue-400 text-xs font-mono uppercase tracking-widest">Impact Analytics</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
                Engineered <span className="text-blue-500">Outcomes</span>
              </h2>
           </div>
           
           <div className="mt-6 md:mt-0 flex items-center space-x-3 text-slate-400 text-sm font-mono">
              <span>LIVE_DATA_FEED</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
           </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
           <AnimatePresence mode="popLayout">
             {visibleStudies.map((study) => (
               <CaseStudyCard key={study.id} study={study} />
             ))}
           </AnimatePresence>
        </div>

      </div>
    </SectionWrapper>
  );
};

const CaseStudyCard = ({ study }) => {
  return (
     <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4 }}
        className="group relative bg-navy-900/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
     >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        
        <div className="p-8">
           <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-3">
                 <div className={`w-10 h-10 rounded-lg ${study.image} flex items-center justify-center text-white shadow-lg`}>
                    <Building2 size={20} />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-white">{study.title}</h3>
                    <p className="text-sm text-slate-400 font-mono">{study.client}</p>
                 </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                {study.industry}
              </div>
           </div>

           <div className="grid grid-cols-2 gap-4 mb-6">
              {study.metrics.map((metric, i) => (
                 <div key={i} className="bg-navy-950/50 rounded-lg p-3 border border-white/5">
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{metric.label}</div>
                    <div className="text-2xl font-bold text-white flex items-center">
                       {metric.value}
                       {metric.trend === 'up' && <ArrowUpRight size={16} className="text-green-500 ml-1" />}
                    </div>
                 </div>
              ))}
           </div>

           <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
              {study.tags.map((tag, i) => (
                 <span key={i} className="text-xs text-slate-400 bg-white/5 px-2 py-1 rounded hover:bg-white/10 transition-colors">
                   #{tag}
                 </span>
              ))}
           </div>
        </div>
     </motion.div>
  );
};

export default CaseStudyEngine;
