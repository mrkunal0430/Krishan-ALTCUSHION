import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, Users, Trophy, Zap, Clock } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

const reasons = [
  {
    icon: Target,
    title: "Precision Engineering",
    description: "We don't rely on templates. Every solution is architected to address your specific operational bottlenecks and growth targets with mathematical precision."
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Security isn't an afterthought—it's woven into the DNA of our code. We adhere to global standards (ISO 27001, GDPR) to ensure your data is fortress-secure."
  },
  {
    icon: Users,
    title: "Global Talent Pool",
    description: "Access a curated team of top 1% developers, designers, and strategists who have delivered mission-critical systems for Fortune 500 companies."
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Our agile methodologies and pre-built proprietary modules allow us to launch MVPs 40% faster than traditional agencies without compromising quality."
  },
  {
    icon: Trophy,
    title: "Proven ROI",
    description: "We build for impact. Our solutions are designed to measurably reduce costs, increase revenue, or improve efficiency within the first quarter."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Business never sleeps, and neither do we. Our global support teams ensure your critical infrastructure operates flawlessly around the clock."
  }
];

const WhyChooseUs = () => {
  return (
    <SectionWrapper background="transparent">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold mb-6"
        >
          Why Partner with <span className="text-gradient-primary">360 Kavach?</span>
        </motion.h2>
        <p className="text-slate-400 text-lg">
          In a crowded digital landscape, we stand out by delivering not just code, but measurable business outcomes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <ReasonCard key={index} reason={reason} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const ReasonCard = ({ reason, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative p-8 rounded-2xl bg-navy-900/40 border border-white/5 hover:border-primary-500/30 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-transparent rounded-2xl transition-all duration-500" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500 mb-6 group-hover:scale-110 transition-transform duration-300">
          <reason.icon size={28} />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
          {reason.title}
        </h3>
        
        <p className="text-slate-400 leading-relaxed text-sm">
          {reason.description}
        </p>
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;
