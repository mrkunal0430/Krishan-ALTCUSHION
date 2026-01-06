import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Globe, Users, Activity } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

const StatCard = ({ label, value, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="bg-navy-900/40 backdrop-blur-md border border-white/10 p-6 rounded-xl flex items-center space-x-4 hover:border-blue-500/30 transition-colors group"
  >
    <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
      <Icon className="text-blue-400 group-hover:text-blue-300" size={24} />
    </div>
    <div>
      <div className="text-2xl font-bold text-white font-mono">{value}</div>
      <div className="text-xs text-slate-400 uppercase tracking-wider">{label}</div>
    </div>
  </motion.div>
);

const AboutHero = () => {
  return (
    <SectionWrapper background="transparent" className="pt-32 pb-12 relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mb-6"
          >
            <Shield size={14} className="text-blue-400" />
            <span className="text-blue-400 text-xs font-mono uppercase tracking-widest">Enterprise Identity Verified</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-8">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">Secure, Scalable</span> Enterprises
          </h1>
          
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            360 Kavach is a technology-driven cybersecurity and business consulting company that builds intelligent systems for enterprise growth, risk control, and digital resilience.
          </p>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard label="Active Enterprises" value="25+" icon={BuildingIcon} delay={0.2} />
          <StatCard label="Success Rate" value="100%" icon={Activity} delay={0.3} />
          <StatCard label="Industry Leadership" value="12+ Years" icon={Shield} delay={0.4} />
          <StatCard label="Technology Reach" value="Global" icon={Globe} delay={0.5} />
        </div>
      </div>
    </SectionWrapper>
  );
};

// Custom Icon wrapper to avoid collision
const BuildingIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01" />
    <path d="M16 6h.01" />
    <path d="M12 6h.01" />
    <path d="M12 10h.01" />
    <path d="M12 14h.01" />
    <path d="M16 10h.01" />
    <path d="M16 14h.01" />
    <path d="M8 10h.01" />
    <path d="M8 14h.01" />
  </svg>
);

export default AboutHero;
