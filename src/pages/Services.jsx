import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/ui/SectionWrapper';
import Button from '../components/ui/Button';
import { Shield, Code, TrendingUp, CheckCircle, Server, Lock, BarChart3, Users, Zap, ArrowRight, Activity } from 'lucide-react';

const serviceCategories = [
  {
    category: "Enterprise Technology Web & IT",
    description: "Building the digital backbone of modern enterprises with scalable, high-performance architecture.",
    services: [
      {
        title: "Web & App Development",
        icon: Code,
        deliverables: ["Custom React/Next.js Applications", "Mobile-First Responsive Design", "Progressive Web Apps (PWA)", "API Integration & Microservices"],
        tech: ["React", "Node.js", "Docker", "AWS"],
        why: "We don't just write code; we engineer experiences that convert and scale."
      },
      {
        title: "Zoho ERP Solutions",
        icon: Server,
        deliverables: ["Zoho One Implementation", "Custom CRM Workflows", "Finance & HR Automation", "Data Migration & Analytics"],
        tech: ["Zoho Creator", "Deluge", "CRM", "Books"],
        why: "Streamline your entire operation with a unified cloud operating system."
      }
    ]
  },
  {
    category: "Security & Governance",
    description: "Protecting your digital assets with military-grade security and uncompromising compliance standards.",
    services: [
      {
        title: "Cybersecurity & Risk",
        icon: Lock,
        deliverables: ["Vulnerability Assessment (VAPT)", "Zero Trust Architecture", "Endpoint Security", "24/7 Threat Monitoring"],
        tech: ["Kali Linux", "SentinelOne", "Splunk", "Burp Suite"],
        why: "Proactive defense strategies that anticipate threats before they materialize."
      },
      {
        title: "IT Governance & Audit",
        icon: Shield,
        deliverables: ["ISO 27001 Compliance", "GDPR/HIPAA Audits", "Risk Management Frameworks", "Policy Development"],
        tech: ["GRC Tools", "Compliance Manager", "AuditScripts"],
        why: "Turn compliance from a burden into a competitive trust advantage."
      }
    ]
  },
  {
    category: "Business Growth",
    description: "Empowering your workforce and optimizing processes for maximum efficiency and revenue.",
    services: [
      {
        title: "AI Automation",
        icon: Zap,
        deliverables: ["Workflow Automation", "Generative AI Integration", "Chatbots & Virtual Assistants", "Predictive Analytics"],
        tech: ["OpenAI API", "Python", "TensorFlow", "Zapier"],
        why: "Reduce manual workload by 40% while increasing accuracy and speed."
      },
      {
        title: "Corporate Training",
        icon: Users,
        deliverables: ["Technical Upskilling", "Cybersecurity Awareness", "Leadership Workshops", "Digital Transformation Training"],
        tech: ["LMS", "Interactive Workshops", "Certification Prep"],
        why: "Invest in your most valuable asset—your people—to drive innovation."
      }
    ]
  }
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen">
      <SectionWrapper background="transparent">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-7xl font-display font-bold mb-8"
          >
            Capabilities & <span className="text-gradient-primary">Solutions</span>
          </motion.h1>
          <p className="text-xl text-slate-400">
            End-to-end digital services designed for high-growth enterprises.
          </p>
        </div>

        <div className="space-y-32">
          {serviceCategories.map((cat, catIndex) => (
            <div key={catIndex}>
              <div className="mb-12 border-l-4 border-primary-500 pl-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{cat.category}</h2>
                <p className="text-slate-400 text-lg">{cat.description}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {cat.services.map((service, serviceIndex) => (
                  <ServiceDetailCard key={serviceIndex} service={service} index={serviceIndex} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <div className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-500/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-panel p-6 md:p-12 rounded-3xl text-center max-w-4xl mx-auto border border-primary-500/20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Identify Your Risks?</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Get a comprehensive comprehensive audit of your digital infrastructure. No commitment, just value.
            </p>
            <Button to="/contact" variant="primary" size="lg" icon={Activity}>
              Get a Free Audit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceDetailCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-panel p-8 rounded-2xl h-full flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-500 mr-4">
            <service.icon size={24} />
          </div>
          <h3 className="text-2xl font-bold text-white">{service.title}</h3>
        </div>

        <div className="mb-8">
          <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Deliverables</h4>
          <ul className="space-y-3">
            {service.deliverables.map((item, i) => (
              <li key={i} className="flex items-start text-slate-300">
                <CheckCircle size={16} className="text-primary-500 mt-1 mr-3 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {service.tech.map((t, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-navy-900/50 p-6 rounded-xl border border-white/5">
        <h4 className="text-primary-400 font-bold mb-2 text-sm">Why Choose This?</h4>
        <p className="text-slate-400 text-sm italic">"{service.why}"</p>
      </div>
    </motion.div>
  );
};

export default Services;
