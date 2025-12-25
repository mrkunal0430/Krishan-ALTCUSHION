import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Database, Globe, Cpu, FileCheck, GraduationCap, ArrowUpRight } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Enterprise-grade threat protection, penetration testing, and 24/7 security monitoring aimed at zero-trust architecture.'
  },
  {
    icon: Database,
    title: 'Zoho ERP Solutions',
    description: 'Custom implementation and optimization of Zoho One suite to streamline complex business operations.'
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'High-performance, scalable web applications built with modern frameworks like React and Next.js.'
  },
  {
    icon: Cpu,
    title: 'AI Automation',
    description: 'Leveraging Generative AI and ML models to automate workflows and enhance decision-making processes.'
  },
  {
    icon: FileCheck,
    title: 'Compliance & Audit',
    description: 'Thorough IT governance audits ensuring adherence to ISO, GDPR, and industry-specific regulatory standards.'
  },
  {
    icon: GraduationCap,
    title: 'Skill Development',
    description: 'Corporate training programs designed to upskill teams in the latest technologies and methodologies.'
  }
];

const ServicePreview = () => {
  return (
    <SectionWrapper id="services-preview" background="transparent">
      <div className="mb-16 md:flex justify-between items-end">
        <div className="md:w-2/3">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Foundations of Digital <span className="text-gradient-primary">Dominance</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            We provide a holistic suite of services designed to accelerate legitimate business growth while maintaining rigorous security standards.
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <Link to="/services" className="inline-flex items-center text-primary-500 font-bold hover:translate-x-1 transition-transform">
            View All Services <ArrowUpRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="glass-panel p-8 rounded-2xl group cursor-pointer relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="w-14 h-14 rounded-xl bg-navy-800/50 flex items-center justify-center text-primary-400 mb-6 group-hover:bg-primary-500 group-hover:text-navy-900 transition-colors duration-300 relative z-10">
        <service.icon size={28} />
      </div>
      
      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-400 transition-colors relative z-10">{service.title}</h3>
      <p className="text-slate-400 leading-relaxed mb-6 relative z-10">
        {service.description}
      </p>
      
      <div className="flex items-center text-sm font-bold text-slate-500 group-hover:text-primary-500 transition-colors relative z-10">
        Learn More <ArrowUpRight className="ml-2 w-4 h-4" />
      </div>
    </motion.div>
  );
};

export default ServicePreview;
