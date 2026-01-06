import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Shield, Globe, Activity, Lock, ArrowRight, Zap } from 'lucide-react';
import Button from '../ui/Button';

const HeroCommandCenter = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950 pt-20">
      
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[120px] mix-blend-screen opacity-30 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen opacity-20" />
        
        {/* Abstract Grid */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Column: Content */}
        <div className="space-y-8">
          
          <Motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <span className="px-3 py-1 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-xs font-mono tracking-widest uppercase flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              System Online
            </span>
          </Motion.div>

          <Motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight text-white"
          >
            Total Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-200 to-white">
              Defense & Growth
            </span>
          </Motion.h1>

          <Motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-400 max-w-xl leading-relaxed font-light"
          >
            360 Kavach is your elite partner for securing digital infrastructure and accelerating enterprise growth. We blend advanced cybersecurity with cutting-edge software engineering.
          </Motion.p>

          <Motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
              Initiate Protection
            </Button>
            <Button to="/services" variant="glass" size="lg">
              View Solutions
            </Button>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-8 border-t border-white/5 grid grid-cols-3 gap-8"
          >
            <div>
              <h4 className="text-3xl font-bold text-white mb-1">99.9%</h4>
              <p className="text-xs text-slate-500 uppercase tracking-wider">Uptime Guaranteed</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-white mb-1">24/7</h4>
              <p className="text-xs text-slate-500 uppercase tracking-wider">Threat Monitoring</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-white mb-1">50+</h4>
              <p className="text-xs text-slate-500 uppercase tracking-wider">Enterprise Clients</p>
            </div>
          </Motion.div>
        
        </div>

        {/* Right Column: Command Center Visualization */}
        <div className="relative hidden lg:block h-[600px]">
           <Motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.7, delay: 0.2 }}
             className="relative z-10 w-full h-full"
           >
              {/* Main Glass Panel */}
              <div className="absolute inset-x-0 top-12 bottom-12 bg-navy-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/5">
                
                {/* Header Bar */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                  <div className="flex items-center space-x-4">
                     <div className="flex space-x-1.5">
                       <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                       <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                       <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                     </div>
                     <div className="h-4 w-px bg-white/10" />
                     <span className="text-xs font-mono text-slate-400">CMD://ROOT/SYSTEM_MONITOR</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs font-mono text-primary-400">
                    <Activity size={14} />
                    <span>LIVE</span>
                  </div>
                </div>

                {/* Grid Content */}
                <div className="grid grid-cols-2 gap-4 flex-1">
                  
                  {/* Status Card */}
                  <div className="bg-black/20 rounded-lg p-4 border border-white/5 relative overflow-hidden group">
                     <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                     <div className="flex justify-between items-start mb-4">
                        <Shield className="text-primary-400" size={20} />
                        <span className="text-[10px] text-green-400 border border-green-500/30 px-1.5 py-0.5 rounded bg-green-500/10">SECURE</span>
                     </div>
                     <div className="text-2xl font-bold text-white mb-1">0 Threats</div>
                     <div className="text-xs text-slate-500">Active Detected</div>
                  </div>

                  {/* Network Card */}
                  <div className="bg-black/20 rounded-lg p-4 border border-white/5 relative overflow-hidden group">
                     <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                     <div className="flex justify-between items-start mb-4">
                        <Globe className="text-blue-400" size={20} />
                        <span className="text-[10px] text-blue-400 border border-blue-500/30 px-1.5 py-0.5 rounded bg-blue-500/10">GLOBAL</span>
                     </div>
                     <div className="text-2xl font-bold text-white mb-1">14 Regions</div>
                     <div className="text-xs text-slate-500">Connected Nodes</div>
                  </div>
                  
                  {/* Code/Logs View */}
                  <div className="col-span-2 bg-black/40 rounded-lg p-4 border border-white/5 font-mono text-[10px] text-slate-400 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-2">
                       <Lock size={12} className="text-slate-600" />
                    </div>
                    <div className="space-y-1.5">
                       <div className="flex space-x-2"><span className="text-slate-600">12:45:01</span> <span className="text-green-400">SUCCESS</span> <span>Connection established to Server A1</span></div>
                       <div className="flex space-x-2"><span className="text-slate-600">12:45:03</span> <span className="text-blue-400">INFO</span> <span>Scanning protocols initiated...</span></div>
                       <div className="flex space-x-2"><span className="text-slate-600">12:45:10</span> <span className="text-primary-400">UPDATE</span> <span>Firewall rules updated</span></div>
                       <div className="flex space-x-2"><span className="text-slate-600">12:45:12</span> <span className="text-green-400">SUCCESS</span> <span>Encryption handshake complete</span></div>
                       <div className="flex space-x-2"><span className="text-slate-600">12:45:15</span> <span className="text-blue-400">INFO</span> <span>Optimizing user traffic route</span></div>
                       <div className="flex space-x-2"><span className="text-slate-600">12:45:18</span> <span className="text-green-400">SUCCESS</span> <span>System nominal</span></div>
                    </div>
                  </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
                   <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-navy-900" />
                      <div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-navy-900" />
                      <div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-navy-900 flex items-center justify-center text-[10px] font-bold text-white">+4</div>
                   </div>
                   <div className="text-right">
                      <div className="text-xs text-slate-400">System Load</div>
                      <div className="w-24 h-1 bg-white/10 rounded-full mt-1 overflow-hidden">
                         <div className="w-1/3 h-full bg-primary-500" />
                      </div>
                   </div>
                </div>

              </div>

              {/* Floating Elements */}
              <Motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-24 bg-navy-800/80 backdrop-blur-md border border-white/10 p-3 rounded-lg shadow-xl"
              >
                 <Zap className="text-yellow-400" size={24} />
              </Motion.div>
              
              <Motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-8 bottom-32 bg-navy-800/80 backdrop-blur-md border border-white/10 p-3 rounded-lg shadow-xl"
              >
                 <Shield className="text-primary-400" size={24} />
              </Motion.div>

           </Motion.div>
        </div>

      </div>
    </div>
  );
};

export default HeroCommandCenter;
