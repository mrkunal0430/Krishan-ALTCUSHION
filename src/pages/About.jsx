import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/ui/SectionWrapper';
import { Target, Eye, Award, Linkedin, Twitter, Globe } from 'lucide-react';

const Milestones = [
  { year: '2016', title: 'Founding of WebsiteTOON', desc: 'Started as a boutique web design agency in Toronto.' },
  { year: '2018', title: 'Global Expansion', desc: 'Opened innovation hub in Hyderabad, India.' },
  { year: '2020', title: 'Security Division', desc: 'Launched dedicated cybersecurity and risk compliance arm.' },
  { year: '2024', title: 'RGES Incorporation', desc: 'Rebranded to reflect our enterprise-grade capabilities and global reach.' },
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-navy-950 min-h-screen">
      {/* Intro */}
      <SectionWrapper background="transparent">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-display font-bold mb-8">
            The Architects of <span className="text-gradient-primary">Resilience</span>
          </h1>
          <p className="text-xl text-slate-400">
            We bridge the gap between creative innovation and enterprise-grade security.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <div className="glass-panel p-10 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Target size={120} />
            </div>
            <h3 className="text-3xl font-bold mb-4 flex items-center">
              <Target className="mr-3 text-primary-500" /> Mission
            </h3>
            <p className="text-slate-300 leading-relaxed text-lg">
              To empower organizations with robust digital infrastructure that facilitates explosive growth while maintaining impenetrable security standards.
            </p>
          </div>
          <div className="glass-panel p-10 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Eye size={120} />
            </div>
            <h3 className="text-3xl font-bold mb-4 flex items-center">
              <Eye className="mr-3 text-primary-500" /> Vision
            </h3>
            <p className="text-slate-300 leading-relaxed text-lg">
              A digital landscape where borders don't exist, opportunities are limitless, and trust is built into every byte of data.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Corporate Journey */}
      <SectionWrapper background="dark" className="relative">
        <h2 className="text-4xl font-bold text-center mb-16">Our <span className="text-gradient-primary">Evolution</span></h2>
        <div className="max-w-4xl mx-auto">
          {Milestones.map((item, index) => (
            <div key={index} className="flex md:items-center mb-12 relative">
              <div className="hidden md:block w-24 text-right pr-6 pt-1">
                <span className="text-2xl font-bold text-primary-500">{item.year}</span>
              </div>
              
              <div className="relative flex-none">
                <div className="h-full w-px bg-slate-800 absolute left-1/2 -translate-x-1/2 top-4" style={{ height: index === Milestones.length - 1 ? '0' : '140%' }} />
                <div className="w-4 h-4 rounded-full bg-primary-500 ring-4 ring-navy-900 relative z-10" />
              </div>
              
              <div className="pl-6 md:pl-10 flex-1">
                <span className="md:hidden text-xl font-bold text-primary-500 block mb-1">{item.year}</span>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* The Team - Simplified for demo */}
      <SectionWrapper background="transparent">
        <h2 className="text-4xl font-bold text-center mb-16">Leadership <span className="text-white">Team</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group relative">
              <div className="aspect-[3/4] bg-slate-800 rounded-xl overflow-hidden mb-4 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent opacity-60" />
                {/* Placeholder Avatar */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-600">
                  <span className="text-6xl font-display font-bold opacity-20">IMG</span>
                </div>
                
                {/* Social Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center space-x-4">
                  <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary-500 hover:text-navy-900 transition-colors"><Linkedin size={18} /></a>
                  <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary-500 hover:text-navy-900 transition-colors"><Twitter size={18} /></a>
                  <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary-500 hover:text-navy-900 transition-colors"><Globe size={18} /></a>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">Associate Name</h3>
              <p className="text-primary-500 text-sm">Managing Partner</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Accreditations */}
      <SectionWrapper background="glass" className="text-center">
         <h2 className="text-3xl font-bold mb-12">Accreditations & <span className="text-gradient-primary">Certifications</span></h2>
         <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {['ISO 27001', 'Red Hat Certified', 'Google Partner', 'AWS Certified', 'CISA'].map((cert) => (
              <div key={cert} className="flex items-center space-x-2 opacity-50 hover:opacity-100 transition-opacity">
                <Award className="text-primary-500" size={32} />
                <span className="text-xl font-bold font-display">{cert}</span>
              </div>
            ))}
         </div>
      </SectionWrapper>
    </div>
  );
};

export default About;
