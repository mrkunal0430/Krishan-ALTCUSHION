import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Globe, Hash } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

const LeadershipProfile = () => {
  return (
    <SectionWrapper background="transparent" className="py-24">
      <div className="container mx-auto px-6">
        <div className="bg-navy-900/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden p-8 md:p-12 relative">
          
          {/* Background ID Shine */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
             
             {/* Left: Avatar / ID Card style */}
             <div className="lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/5 mb-6 group">
                   <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent z-10 opacity-60" />
                   {/* Placeholder Avatar */}
                   <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-600">
                     <span className="text-6xl font-display font-bold opacity-30">P.A.</span>
                   </div>
                   
                   {/* Verified Badge */}
                   <div className="absolute bottom-4 right-4 z-20 bg-blue-500 text-white p-2 rounded-full border-4 border-navy-900">
                      <CheckCircle size={20} />
                   </div>
                </div>

                <div>
                   <h3 className="text-3xl font-display font-bold text-white mb-2">Prasad Anumula</h3>
                   <p className="text-blue-400 font-mono text-sm tracking-wide uppercase mb-4">Founder & Director</p>
                   <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                     Cybersecurity & Enterprise Systems Architect with 17+ years of leadership in building resilient digital infrastructures.
                   </p>
                </div>
             </div>

             {/* Right: Credentials & Badges */}
             <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   
                   {/* Leadership Roles */}
                   <div className="space-y-6">
                      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest border-b border-white/5 pb-2">Global Authority</h4>
                      <ul className="space-y-4">
                         {[
                           { text: 'Regional Director – CIMSME', icon: Globe },
                           { text: 'National Hackathon Judge', icon: Hash },
                           { text: 'Global AI Delegate', icon: Award }
                         ].map((role, i) => (
                           <li key={i} className="flex items-center space-x-3 text-slate-300">
                              <div className="p-2 bg-white/5 rounded-lg text-blue-400"><role.icon size={16}/></div>
                              <span>{role.text}</span>
                           </li>
                         ))}
                      </ul>
                   </div>

                   {/* Certifications (Digital Badges) */}
                   <div className="space-y-6">
                      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest border-b border-white/5 pb-2">Verified Credentials</h4>
                      <div className="flex flex-wrap gap-3">
                         {['AWS Certified Solutions Architect', 'PMP', 'CISM', 'Lean Six Sigma Black Belt'].map((cert, i) => (
                           <motion.div 
                             key={i}
                             whileHover={{ scale: 1.05 }}
                             className="px-4 py-2 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-lg flex items-center space-x-2 cursor-default hover:border-blue-500/30 transition-colors"
                           >
                              <ShieldIcon className="text-yellow-500" size={14} />
                              <span className="text-xs font-bold text-white">{cert}</span>
                           </motion.div>
                         ))}
                      </div>
                   </div>

                </div>
             </div>

          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const ShieldIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
)

export default LeadershipProfile;
