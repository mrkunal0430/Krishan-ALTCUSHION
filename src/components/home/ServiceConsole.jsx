import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Smartphone, Megaphone, Target, Palette, Video, ArrowRight, Zap, TrendingUp, Layout, Shield, Cpu, Code } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

const services = [
  {
    id: 'web',
    title: 'Web Development',
    subtitle: 'High-Performance Digital Platforms',
    icon: Monitor,
    description: 'We build enterprise-grade web applications that blend stunning aesthetics with robust backend architecture. Our systems are secure, scalable, and built for speed.',
    metrics: [
      { label: 'Performance', value: '100%' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'SEO Score', value: 'Rank #1' }
    ],
    visual: 'binary'
  },
  {
    id: 'app',
    title: 'App Development',
    subtitle: 'Native & Cross-Platform Ecosystems',
    icon: Smartphone,
    description: 'Transforming ideas into powerful mobile experiences. We engineer seamless, intuitive apps for iOS and Android that dominate app stores and keep users engaged.',
    metrics: [
      { label: 'User Retention', value: '+45%' },
      { label: 'Crash Rate', value: '<0.1%' },
      { label: 'Rating', value: '4.9/5' }
    ],
    visual: 'stack'
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    subtitle: 'Data-Driven Growth Engines',
    icon: Megaphone,
    description: 'We don’t just run campaigns; we engineer growth. Using advanced analytics and AI-driven targeting, we scale your brand visibility and convert traffic into loyal customers.',
    metrics: [
      { label: 'ROI', value: '5x' },
      { label: 'Leads', value: '+200%' },
      { label: 'CTR', value: 'High' }
    ],
    visual: 'chart'
  },
  {
    id: 'ads',
    title: 'Google & Meta Ads',
    subtitle: 'Precision Paid Acquisition',
    icon: Target,
    description: 'Maximize your ad spend with laser-focused targeting strategies. We optimize bid strategies and creative assets in real-time to lower CPA and skyrocket conversions.',
    metrics: [
      { label: 'ROAS', value: '8.5x' },
      { label: 'Reach', value: '1M+' },
      { label: 'Conv. Rate', value: '+15%' }
    ],
    visual: 'target'
  },
  {
    id: 'branding',
    title: 'Branding & Design',
    subtitle: 'Identity Systems that Resonate',
    icon: Palette,
    description: 'Crafting unforgettable brand identities. From logo systems to full UI/UX design languages, we ensure every touchpoint communicates authority and innovation.',
    metrics: [
      { label: 'Recognition', value: 'Top Tier' },
      { label: 'Consistency', value: '100%' },
      { label: 'Impact', value: 'High' }
    ],
    visual: 'palette'
  },
  {
    id: 'video',
    title: 'Video Production',
    subtitle: 'Cinematic Storytelling',
    icon: Video,
    description: 'Engage your audience with high-fidelity motion graphics and video content. We produce commercial-grade visuals that explain, persuade, and inspire.',
    metrics: [
      { label: 'Engagement', value: '+85%' },
      { label: 'Shares', value: 'Viral' },
      { label: 'Quality', value: '4K' }
    ],
    visual: 'play'
  }
];

const ServiceConsole = () => {
  const [activeId, setActiveId] = useState('web');
  const activeService = services.find(s => s.id === activeId);

  return (
    <SectionWrapper background="transparent" className="py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]" />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 mb-4 border border-orange-500/30 rounded-full bg-orange-500/10 backdrop-blur-md"
          >
            <span className="text-orange-400 text-xs font-mono tracking-widest uppercase">System Capabilities</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Console</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Select a module to activate its command center. We engineer success through integrated digital systems.
          </p>
        </div>

        {/* Console Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 h-auto lg:h-[650px]">
          
          {/* LEFT: Modules Stack */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
             {services.map((service) => (
                <ServiceModule 
                  key={service.id} 
                  service={service} 
                  isActive={activeId === service.id} 
                  onClick={() => setActiveId(service.id)} 
                />
             ))}
          </div>

          {/* RIGHT: Service Engine Panel */}
          <div className="lg:col-span-8 relative">
             <div className="w-full h-full bg-navy-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-1 overflow-hidden relative shadow-2xl">
                {/* Decoration Lines */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                
                {/* Content Area */}
                <div className="w-full h-full bg-navy-950/80 rounded-xl overflow-hidden relative p-8 md:p-12 flex flex-col">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeId}
                      initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, scale: 1.02, filter: 'blur(10px)' }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="flex flex-col h-full"
                    >
                      {/* Top Bar: Icon & ID */}
                      <div className="flex justify-between items-start mb-8 border-b border-white/5 pb-6">
                         <div className="flex items-center space-x-4">
                            <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg shadow-lg shadow-orange-500/20">
                              <activeService.icon className="text-white" size={24} />
                            </div>
                            <div>
                               <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{activeService.title}</h3>
                               <p className="text-slate-400 text-sm font-mono">{activeService.subtitle}</p>
                            </div>
                         </div>
                         <div className="hidden md:block text-right">
                            <div className="text-xs text-orange-500 font-mono mb-1">SYS_STATUS</div>
                            <div className="flex items-center space-x-2 text-green-400 text-xs font-mono">
                               <span className="relative flex h-2 w-2">
                                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                 <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                               </span>
                               <span>ONLINE</span>
                            </div>
                         </div>
                      </div>

                      {/* Main Content Info */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 flex-grow">
                          <div className="space-y-8">
                             <p className="text-lg text-slate-300 leading-relaxed font-light">
                               {activeService.description}
                             </p>
                             
                             <div className="space-y-4">
                                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center">
                                  <Zap size={14} className="text-orange-500 mr-2" /> Key Outcomes
                                </h4>
                                <div className="grid grid-cols-1 gap-3">
                                   {activeService.metrics.map((metric, i) => (
                                     <div key={i} className="flex items-center justify-between bg-white/5 border border-white/5 p-3 rounded-lg">
                                        <span className="text-slate-400 text-sm">{metric.label}</span>
                                        <span className="text-orange-400 font-mono font-bold">{metric.value}</span>
                                     </div>
                                   ))}
                                </div>
                             </div>
                             
                             <motion.button 
                               whileHover={{ x: 5 }}
                               className="group flex items-center space-x-2 text-white font-bold text-lg mt-4 cursor-pointer"
                             >
                               <span>Explore Service</span>
                               <ArrowRight className="text-orange-500 group-hover:translate-x-1 transition-transform" />
                             </motion.button>
                          </div>

                          {/* Dynamic Visual Content */}
                          <div className="relative flex items-center justify-center bg-navy-900/50 rounded-2xl border border-white/5 overflow-hidden group">
                             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                             <VisualEngine type={activeService.visual} />
                          </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
             </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
};

const ServiceModule = ({ service, isActive, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`group relative w-full text-left p-4 rounded-xl border transition-all duration-300 overflow-hidden ${
        isActive 
          ? 'bg-navy-800 border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0.1)]' 
          : 'bg-navy-900/30 border-white/5 hover:bg-navy-800/50 hover:border-white/10'
      }`}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      {isActive && (
        <motion.div 
          layoutId="active-glow"
          className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
      
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center space-x-4">
           <div className={`p-2 rounded-lg transition-colors ${isActive ? 'bg-orange-500 text-white' : 'bg-white/5 text-slate-400 group-hover:text-white'}`}>
             <service.icon size={20} />
           </div>
           <div>
             <span className={`block font-bold text-sm tracking-wide ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
               {service.title}
             </span>
           </div>
        </div>
        
        {isActive && (
           <motion.div 
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]"
           />
        )}
      </div>
    </motion.button>
  );
};

// Simplified Visual Representations
const VisualEngine = ({ type }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      {type === 'binary' && (
        <div className="grid grid-cols-8 gap-2 opacity-50">
           {[...Array(64)].map((_,i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0.1 }}
               animate={{ opacity: [0.1, 0.5, 0.1] }}
               transition={{ duration: 2, delay: i * 0.05, repeat: Infinity }}
               className="w-2 h-2 bg-orange-500 rounded-full"
             />
           ))}
        </div>
      )}
      {type === 'stack' && (
         <div className="relative w-32 h-32">
            {[0,1,2].map((i) => (
              <motion.div
                key={i}
                className="absolute inset-0 border-2 border-orange-500/30 rounded-2xl bg-navy-900/80 backdrop-blur-sm"
                animate={{ y: [0, -10 * (i+1), 0], x: [0, 5 * (i+1), 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                style={{ zIndex: 3-i, transform: `scale(${1 - i*0.1})` }}
              />
            ))}
         </div>
      )}
      {(type === 'chart' || type === 'target') && (
         <div className="flex items-end space-x-2 h-32">
            {[40, 70, 50, 90, 60, 100].map((h, i) => (
               <motion.div 
                 key={i}
                 className="w-4 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t-sm"
                 initial={{ height: 0 }}
                 animate={{ height: `${h}%` }}
                 transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
               />
            ))}
         </div>
      )}
      {(type === 'palette' || type === 'play') && (
         <motion.div 
           className="w-32 h-32 border-4 border-orange-500/50 rounded-full flex items-center justify-center relative"
           animate={{ rotate: 360 }}
           transition={{ duration: 20, ease: "linear", repeat: Infinity }}
         >
            <div className="absolute inset-2 border border-white/20 rounded-full border-dashed" />
            <motion.div 
              className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl rotate-45"
              animate={{ rotate: [45, 90, 45], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
         </motion.div>
      )}
    </div>
  );
};

export default ServiceConsole;
