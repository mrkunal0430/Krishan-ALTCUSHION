import React, { useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { ArrowRight, Activity, Terminal, ShieldCheck } from "lucide-react";
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
    <div className="min-h-screen bg-navy-950 font-sans selection:bg-primary-500/30">
      <HeroCommandCenter />

      {/* Services "Command Table" Section */}
      <section className="py-12 md:py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
                Service Capabilities
              </h2>
            </div>
            <p className="text-slate-400 max-w-md text-sm md:text-base leading-relaxed">
              Activate enterprise-grade modules designed to secure, optimize,
              and scale your digital infrastructure.
            </p>
          </div>

          {/* Table Header - Desktop Only */}
          <div className="hidden md:grid grid-cols-12 gap-6 px-8 py-4 border-b border-white/10 text-xs font-mono text-white uppercase tracking-widest bg-navy-900/30 rounded-t-xl backdrop-blur-sm">
            <div className="col-span-4">Module_Identity</div>
            <div className="col-span-5">Technical_Specs</div>
            <div className="col-span-3 text-right">Action</div>
          </div>

          {/* Service Rows */}
          <div className="space-y-4 md:mt-2">
            {servicesData.map((service, idx) => (
              <ServiceRow key={service.id} service={service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <CaseStudyEngine />
      <WhyChooseUs />
      <TrustSystem />

      {/* CTA Section */}
      <div className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/5" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="glass-panel p-6 md:p-16 rounded-2xl md:rounded-[2rem] text-center max-w-5xl mx-auto border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl lg:text-4xl font-display font-bold mb-6 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-300 to-white pb-1">
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

            {/* Background decorations */}
            <div className="absolute -left-20 -bottom-20 w-40 md:w-64 h-40 md:h-64 bg-primary-500/10 rounded-full blur-[60px] md:blur-[80px]" />
            <div className="absolute -right-20 -top-20 w-40 md:w-64 h-40 md:h-64 bg-blue-500/10 rounded-full blur-[60px] md:blur-[80px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceRow = ({ service, index }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-xl md:rounded-2xl bg-navy-800/20 border border-white/5 hover:border-primary-500/30 transition-all duration-300 hover:bg-navy-800/40 hover:shadow-2xl hover:shadow-primary-500/5">
        {/* Hover Glow Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`}
        />

        <div className="relative p-5 md:px-8 md:py-8 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-center">
          {/* Column 1: Identity (Icon + Title) */}
          <div className="col-span-1 md:col-span-4 flex items-center gap-4 md:gap-5">
            <div
              className={`shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${service.color} p-[1px] shadow-lg group-hover:scale-105 transition-transform duration-300`}
            >
              <div className="w-full h-full bg-navy-950/90 backdrop-blur-sm rounded-[10px] flex items-center justify-center">
                <service.icon className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-primary-400 transition-colors" />
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-lg md:text-2xl font-bold text-white group-hover:text-primary-200 transition-colors mb-1 truncate">
                {service.title}
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] md:text-xs font-mono text-slate-500 uppercase tracking-wider group-hover:text-primary-400/70 transition-colors">
                  Available
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Specs (Description + Tags) */}
          <div className="col-span-1 md:col-span-5 space-y-3 md:space-y-4 md:border-l md:border-white/5 md:pl-8">
            <p className="text-slate-400 text-sm md:text-base leading-relaxed line-clamp-2">
              {service.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2">
              {service.features.slice(0, 3).map((feature, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-2 md:px-2.5 py-0.5 md:py-1 rounded bg-white/5 border border-white/5 text-[10px] md:text-xs text-slate-400 group-hover:border-white/10 group-hover:text-slate-300 transition-colors"
                >
                  <ShieldCheck
                    size={10}
                    className="mr-1.5 text-primary-500/70"
                  />
                  {feature}
                </span>
              ))}
              {service.features.length > 3 && (
                <span className="inline-flex items-center px-2 py-1 text-[10px] md:text-xs text-slate-500 font-mono">
                  +{service.features.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Column 3: Action Button */}
          <div className="col-span-1 md:col-span-3 flex md:justify-end items-center mt-1 md:mt-0 lg:pr-4">
            <Link
              to={`/services/${service.id}`}
              className="w-full md:w-auto overflow-hidden relative inline-flex items-center justify-center px-6 py-3 md:py-2.5 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all group/btn"
            >
              <span className="relative z-10 flex items-center text-sm md:text-base">
                Explore
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Motion.div>
  );
};

export default EnterpriseServices;
