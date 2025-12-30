import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, BarChart3, Layers, Globe, Zap, Cpu } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

const HeroCommandCenter = () => {
  return (
    <SectionWrapper background="transparent" className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
      
      {/* 1. Background Grid & Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-blue-900/10 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-orange-900/10 rounded-full blur-[150px] mix-blend-screen" />
        
        {/* Tech Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }} 
        />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* 2. LEFT: Command Text */}
        <div className="max-w-2xl">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
           >
             <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
               </span>
               <span className="text-xs font-mono text-slate-300 tracking-wider">SYSTEM_OPERATIONAL</span>
             </div>

             <h1 className="text-5xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
               Building the <br /> 
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500">
                 Digital Engine
               </span> <br />
               for Modern Brands.
             </h1>

             <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg border-l-2 border-orange-500/30 pl-6">
               Postperfect is the operating system for your growth. We engineer high-performance websites, scalable apps, and data-driven marketing ecosystems.
             </p>

             <div className="flex flex-wrap items-center gap-6">
               <button className="group relative px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] flex items-center overflow-hidden">
                 <span className="relative z-10">Launch Project</span>
                 <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                 {/* Shiny sweep effect */}
                 <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
               </button>
               
               <button className="px-8 py-4 bg-transparent border border-white/10 hover:border-white/30 text-white font-bold rounded-xl transition-all hover:bg-white/5 flex items-center">
                 <Cpu className="mr-2 w-5 h-5 text-slate-400" />
                 View Systems
               </button>
             </div>
           </motion.div>
        </div>

        {/* 3. RIGHT: 3D Floating Interface */}
        <div className="relative h-[600px] hidden lg:block perspective-1000">
           {/* Center Visual: The "Core" */}
           <motion.div 
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-900/20 to-navy-900/20 rounded-full blur-3xl" 
             animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
             transition={{ duration: 8, repeat: Infinity }}
           />

           {/* Panel 1: Code Interface (Top Left) */}
           <FloatingPanel 
             className="top-[10%] left-[5%] w-72"
             delay={0}
             xMove={-20} yMove={-30}
           >
              <div className="flex items-center space-x-2 border-b border-white/10 pb-2 mb-3">
                 <div className="flex space-x-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-500"/><div className="w-2.5 h-2.5 rounded-full bg-yellow-500"/><div className="w-2.5 h-2.5 rounded-full bg-green-500"/></div>
                 <span className="text-[10px] text-slate-500 font-mono">deployment.config.js</span>
              </div>
              <div className="space-y-1.5 font-mono text-[10px] text-slate-400">
                <div className="flex"><span className="text-purple-400 mr-2">const</span> engine = <span className="text-green-400 ml-1">new System();</span></div>
                <div className="flex"><span className="text-purple-400 mr-2">await</span> engine.<span className="text-blue-400">optimize</span>({'{'}</div>
                <div className="pl-4 text-orange-400">performance: 'turbo',</div>
                <div className="pl-4 text-orange-400">security: 'max'</div>
                <div>{'}'});</div>
                <div className="text-emerald-400 mt-2">// Deployment successful</div>
              </div>
           </FloatingPanel>

           {/* Panel 2: Marketing Analytics (Bottom Right) */}
           <FloatingPanel 
             className="bottom-[15%] right-[5%] w-80"
             delay={1}
             xMove={30} yMove={20}
           >
              <div className="flex justify-between items-center mb-4">
                 <span className="text-xs font-bold text-slate-300 flex items-center"><BarChart3 size={14} className="mr-2 text-orange-500"/> Growth Metrics</span>
                 <span className="text-[10px] bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded">+124%</span>
              </div>
              <div className="flex items-end space-x-2 h-24 mb-2">
                 {[40, 65, 50, 85, 75, 100].map((h, i) => (
                    <motion.div 
                      key={i}
                      className="flex-1 bg-gradient-to-t from-orange-500/20 to-orange-500 rounded-t-sm"
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1.5, delay: i * 0.1 }}
                    />
                 ))}
              </div>
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                 <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span>
              </div>
           </FloatingPanel>

           {/* Panel 3: UI/UX Preview (Center Right) */}
           <FloatingPanel 
             className="top-[30%] right-[-5%] w-64 blur-[1px] opacity-80"
             delay={2}
             xMove={20} yMove={-10}
           >
              <div className="bg-white/5 p-3 rounded-lg mb-2">
                 <div className="w-12 h-12 rounded-full bg-white/10 mb-2" />
                 <div className="h-2 w-24 bg-white/10 rounded mb-1" />
                 <div className="h-2 w-16 bg-white/5 rounded" />
              </div>
              <div className="flex gap-2">
                 <div className="flex-1 h-20 bg-white/5 rounded-lg" />
                 <div className="flex-1 h-20 bg-white/5 rounded-lg" />
              </div>
           </FloatingPanel>

           {/* Panel 4: Server Status (Bottom Left) */}
           <FloatingPanel 
             className="bottom-[10%] left-[10%] w-56"
             delay={0.5}
             xMove={-10} yMove={20}
           >
              <div className="flex items-center justify-between mb-3">
                 <span className="text-xs font-bold text-white flex items-center"><Zap size={14} className="mr-2 text-yellow-500"/> Live Vitals</span>
              </div>
              <div className="space-y-3">
                 <div className="space-y-1">
                    <div className="flex justify-between text-[10px] text-slate-400"><span>CPU Load</span><span>42%</span></div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden"><div className="w-[42%] h-full bg-blue-500" /></div>
                 </div>
                 <div className="space-y-1">
                    <div className="flex justify-between text-[10px] text-slate-400"><span>Memory</span><span>78%</span></div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden"><div className="w-[78%] h-full bg-purple-500" /></div>
                 </div>
              </div>
           </FloatingPanel>

        </div>
      </div>
    </SectionWrapper>
  );
};

const FloatingPanel = ({ children, className, delay, xMove, yMove }) => {
  return (
    <motion.div
      className={`absolute bg-navy-900/60 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: 1, 
        y: [0, yMove, 0],
        x: [0, xMove, 0]
      }}
      transition={{ 
        opacity: { duration: 1, delay },
        y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay },
        x: { duration: 10, repeat: Infinity, ease: "easeInOut", delay }
      }}
      whileHover={{ scale: 1.05, zIndex: 50, borderColor: 'rgba(255,255,255,0.3)' }}
    >
       {/* Glass Shine */}
       <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-2xl" />
       {children}
    </motion.div>
  );
};

export default HeroCommandCenter;
