import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Cloud, FileText } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

const compliances = [
  { name: 'ISO 27001', icon: ShieldCheck, color: 'text-green-400' },
  { name: 'Data Protection', icon: Lock, color: 'text-blue-400' },
  { name: 'Cloud Security', icon: Cloud, color: 'text-cyan-400' },
  { name: 'Risk Frameworks', icon: FileText, color: 'text-purple-400' },
];

const ComplianceLayer = () => {
  return (
    <SectionWrapper background="transparent">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
           
           <div className="max-w-xl">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Security & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-300 to-white pb-1">Compliance Layer</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed border-l-2 border-green-500/30 pl-6">
                 360 Kavach systems are structurally built to meet global enterprise and regulatory standards. We don't just advise on security; we embed it into the architecture.
              </p>
           </div>

           <div className="flex-1 w-full max-w-2xl">
              <div className="grid grid-cols-2 gap-6">
                 {compliances.map((item, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-navy-900/50 border border-white/5 rounded-xl p-6 flex flex-col items-center text-center hover:border-green-500/30 transition-all group"
                   >
                      <div className={`p-4 rounded-full bg-white/5 mb-4 group-hover:bg-white/10 transition-colors ${item.color}`}>
                         <item.icon size={32} />
                      </div>
                      <span className="text-white font-bold tracking-wide">{item.name}</span>
                      <div className="w-12 h-1 bg-green-500/20 rounded-full mt-3 overflow-hidden">
                         <motion.div 
                           className="h-full bg-green-500"
                           initial={{ width: 0 }}
                           whileInView={{ width: '100%' }}
                           transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                         />
                      </div>
                   </motion.div>
                 ))}
              </div>
           </div>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default ComplianceLayer;
