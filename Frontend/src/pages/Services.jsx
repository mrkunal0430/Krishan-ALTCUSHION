import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Activity, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { servicesData } from "../data/services";
import Button from "../components/ui/Button";
import WhyChooseUs from "../components/service/WhyChooseUs";
import TrustSystem from "../components/service/TrustSystem";
import HeroCommandCenter from "../components/service/HeroCommandCenter";
import CaseStudyEngine from "../components/service/CaseStudyEngine";

const EnterpriseServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <HeroCommandCenter />

      {/* Services Card Grid */}
      <section className="py-14 md:py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-400 bg-primary-500/10 border border-primary-500/20 rounded-full mb-5">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Service Capabilities
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Enterprise-grade modules designed to secure, optimize,
              and scale your digital infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {servicesData.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <CaseStudyEngine />
      <WhyChooseUs />
      <TrustSystem />

      {/* CTA Section */}
      <div className="py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/5" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="glass-panel p-6 md:p-16 rounded-2xl md:rounded-[2rem] text-center max-w-5xl mx-auto border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-300 to-white pb-1">
                Ready to Upgrade Your Digital Infrastructure?
              </h2>

              <div className="flex justify-center">
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  icon={Activity}
                  className="w-full md:w-auto shadow-[0_0_30px_rgba(100,255,218,0.2)]"
                >
                  Initialize Free Audit
                </Button>
              </div>
            </div>

            <div className="absolute -left-20 -bottom-20 w-40 md:w-64 h-40 md:h-64 bg-primary-500/10 rounded-full blur-[60px] md:blur-[80px]" />
            <div className="absolute -right-20 -top-20 w-40 md:w-64 h-40 md:h-64 bg-blue-500/10 rounded-full blur-[60px] md:blur-[80px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
    >
      <Link
        to={`/services/${service.id}`}
        className="group block h-full relative overflow-hidden rounded-2xl bg-navy-900/80 border border-white/10 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/5"
      >
        {/* Top gradient accent */}
        <div className={`h-1 bg-gradient-to-r ${service.color}`} />

        <div className="p-5 sm:p-6">
          {/* Icon + Title row */}
          <div className="flex items-start gap-4 mb-4">
            <div className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} p-[1px]`}>
              <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                <service.icon className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-bold text-white group-hover:text-primary-300 transition-colors leading-tight">
                {service.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1">{service.subtitle}</p>
            </div>
            <ArrowRight size={18} className="shrink-0 mt-1 text-slate-500 group-hover:text-primary-400 group-hover:translate-x-1 transition-all" />
          </div>

          {/* Description */}
          <p className="text-slate-300 text-sm leading-relaxed mb-5 line-clamp-2">
            {service.shortDescription}
          </p>

          {/* Feature tags */}
          <div className="flex flex-wrap gap-2">
            {service.features.slice(0, 3).map((feature, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300"
              >
                {feature}
              </span>
            ))}
            {service.features.length > 3 && (
              <span className="px-2.5 py-1 text-xs text-slate-400">
                +{service.features.length - 3} more
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default EnterpriseServices;
