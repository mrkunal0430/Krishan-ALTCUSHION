import React, { useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import SectionWrapper from "../components/ui/SectionWrapper";
import { servicesData } from "../data/services";
import Button from "../components/ui/Button";
import ProcessEngine from "../components/home/ProcessEngine";
import WhyChooseUs from "../components/services/WhyChooseUs";
import ServiceHero from "../components/services/ServiceHero";

const EnterpriseServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <ServiceHero />

      <SectionWrapper background="transparent">
        <div className="space-y-32">
          {servicesData.map((service, idx) => (
            <ServiceBlock
              key={service.id}
              service={service}
              reversed={idx % 2 !== 0}
            />
          ))}
        </div>
      </SectionWrapper>

      <WhyChooseUs />

      <ProcessEngine />

      {/* CTA Section */}
      <div className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-500/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-panel p-6 md:p-12 rounded-3xl text-center max-w-4xl mx-auto border border-primary-500/20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Identify Your Risks?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Get a comprehensive comprehensive audit of your digital
              infrastructure. No commitment, just value.
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

const ServiceBlock = ({ service, reversed }) => {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Content Side */}
      <Motion.div
        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={reversed ? "lg:order-2" : ""}
      >
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-8 shadow-lg text-white flex items-center justify-center`}
        >
          <service.icon className="text-white" size={32} />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {service.title}
        </h2>
        <p className="text-lg text-primary-400 font-mono mb-6">
          {service.subtitle}
        </p>
        <p className="text-slate-400 text-lg leading-relaxed mb-8">
          {service.shortDescription}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {service.features.slice(0, 4).map((feature, i) => (
            <div key={i} className="flex items-center space-x-3 text-slate-300">
              <CheckCircle2 className="text-primary-500" size={18} />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <Link
          to={`/services/${service.id}`}
          className="inline-flex items-center text-white border-b border-primary-500 pb-1 hover:text-primary-400 transition-all font-bold group"
        >
          Explore Capability{" "}
          <ArrowRight
            size={18}
            className="ml-2 group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </Motion.div>

      {/* Visual Side */}
      <Motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`relative ${reversed ? "lg:order-1" : ""}`}
      >
        <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 p-2 relative overflow-hidden backdrop-blur-sm group">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10`}
          />

          {/* Abstract Visual Placeholder */}
          {/* Image Visual */}
          <div className="w-full h-full rounded-2xl bg-navy-900/50 flex items-center justify-center border border-white/5 overflow-hidden relative">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 blur-3xl`}
            />
            <img
              src={`/${service.img}`}
              alt={service.title}
              className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent z-20 opacity-60" />
          </div>
        </div>
      </Motion.div>
    </div>
  );
};

export default EnterpriseServices;
