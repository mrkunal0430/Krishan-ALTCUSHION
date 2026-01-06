import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import SectionWrapper from "../components/ui/SectionWrapper";
import Button from "../components/ui/Button";
import { servicesData } from "../data/services";

const ServiceDetail = () => {
  const { id } = useParams();
  /* navigate removed as it was unused */
  const service = servicesData.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
        <Button to="/services" variant="primary">
          Return to Services
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Header */}
      <section className="relative py-20 overflow-hidden">
        {/* Ambient Background */}
        <div
          className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b ${service.color} opacity-10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none`}
        />

        <div className="container mx-auto px-6 relative z-10">
          <Link
            to="/services"
            className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Services
          </Link>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-6 shadow-lg text-white flex items-center justify-center`}
            >
              <service.icon className="text-white" size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-primary-400 font-mono mb-6">
              {service.subtitle}
            </p>
            <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
              {service.fullDescription}
            </p>
          </Motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <SectionWrapper background="dark" className="border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Features & Benefits */}
          <div className="lg:col-span-7 space-y-16">
            {/* Key Features */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-8 h-1 bg-primary-500 mr-4 rounded-full" />
                Core Capabilities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, i) => (
                  <Motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <CheckCircle2
                      className="text-primary-500 shrink-0 mt-1"
                      size={18}
                    />
                    <span className="text-slate-300">{feature}</span>
                  </Motion.div>
                ))}
              </div>
            </div>

            {/* Strategic Benefits */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-8 h-1 bg-primary-500 mr-4 rounded-full" />
                Strategic Benefits
              </h3>
              <div className="space-y-4">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                    <p className="text-lg text-slate-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Process & CTA */}
          <div className="lg:col-span-5 space-y-12">
            {/* Process Timeline */}
            <div className="bg-navy-900/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-8 text-white">
                Execution Framework
              </h3>
              <div className="space-y-8 relative">
                {/* Vertical Line */}
                <div className="absolute left-3.5 top-2 bottom-2 w-px bg-white/10" />

                {service.process.map((step, i) => (
                  <div key={i} className="relative pl-12">
                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-navy-800 border border-white/10 flex items-center justify-center text-xs font-mono font-bold text-primary-400 z-10">
                      {step.number}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">
                      {step.title}
                    </h4>
                    <p className="text-sm text-slate-400">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-primary-900/50 to-navy-900 border border-primary-500/20 rounded-2xl p-8 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-2xl font-bold mb-4 relative z-10">
                Ready to Deploy?
              </h3>
              <p className="text-slate-300 mb-8 relative z-10">
                Speak with a lead architect today to discuss your requirements.
              </p>
              <div className="relative z-10">
                <Button
                  to="/contact"
                  variant="primary"
                  className="w-full justify-center"
                >
                  Initiate Project <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ServiceDetail;
