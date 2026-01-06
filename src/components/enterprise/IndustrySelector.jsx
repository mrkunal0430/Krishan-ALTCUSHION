import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Activity, ShoppingBag, Factory, GraduationCap, Building } from 'lucide-react';

const industries = [
  { id: 'Healthcare', icon: Activity },
  { id: 'Finance', icon: Building },
  { id: 'E-commerce', icon: ShoppingBag },
  { id: 'Manufacturing', icon: Factory },
  { id: 'Education', icon: GraduationCap },
  { id: 'Enterprise SaaS', icon: Briefcase },
];

const IndustrySelector = ({ selected, onSelect }) => {
  return (
    <div className="sticky top-20 z-40 py-4 mb-8">
      <div className="container mx-auto px-6">
        <div className="bg-navy-900/80 backdrop-blur-xl border border-white/10 rounded-full p-2 shadow-2xl overflow-x-auto no-scrollbar">
           <div className="flex items-center justify-between min-w-max space-x-2">
              
              <span className="hidden md:block text-xs font-mono text-slate-500 uppercase tracking-widest px-4">
                 Select Sector:
              </span>

              {industries.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => onSelect(ind.id)}
                  className={`relative flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    selected === ind.id 
                      ? 'text-white bg-white/10 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                   <ind.icon size={16} />
                   <span className="text-sm font-bold whitespace-nowrap">{ind.id}</span>
                   {selected === ind.id && (
                     <motion.div 
                       layoutId="active-industry"
                       className="absolute inset-0 border border-white/20 rounded-full"
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       exit={{ opacity: 0 }}
                     />
                   )}
                </button>
              ))}

           </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrySelector;
