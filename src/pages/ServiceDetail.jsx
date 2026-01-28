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
    <div className=" min-h-screen">
      {/* Hero Header */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-navy-900/50 to-navy-950">
        {/* Ambient Background */}
        <div
          className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b ${service.color} opacity-10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none`}
        />
        <div
          className={`absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t ${service.color} opacity-5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none`}
        />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Link
            to="/services"
            className="inline-flex items-center text-slate-400 hover:text-white mb-10 transition-colors group"
          >
            <ArrowLeft
              size={16}
              className="mr-2 group-hover:-translate-x-1 transition-transform"
            />{" "}
            <span className="text-sm font-medium">Back to Services</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Content - 8 cols */}
            <Motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-8"
            >
              {/* Service Identity */}
              <div className="flex items-start gap-5 mb-8">
                <div
                  className={`shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${service.color} p-[1px] shadow-2xl`}
                >
                  <div className="w-full h-full bg-navy-950/90 backdrop-blur-sm rounded-[15px] flex items-center justify-center">
                    <service.icon className="text-white" size={36} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                      Available
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      ID: {service.id.toUpperCase()}
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl xl:text-6xl font-display font-bold text-white mb-3 leading-tight">
                    {service.title}
                  </h1>
                  <p className="text-lg md:text-xl text-primary-400 font-medium mb-4">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 mb-8">
                <p className="text-lg text-slate-300 leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-gradient-to-br from-navy-800/50 to-navy-900/50 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-xs text-slate-500 mb-2 font-mono uppercase">
                    Delivery
                  </div>
                  <div className="text-2xl font-bold text-white">Fast</div>
                </div>
                <div className="bg-gradient-to-br from-navy-800/50 to-navy-900/50 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-xs text-slate-500 mb-2 font-mono uppercase">
                    Support
                  </div>
                  <div className="text-2xl font-bold text-white">24/7</div>
                </div>
                <div className="bg-gradient-to-br from-navy-800/50 to-navy-900/50 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-xs text-slate-500 mb-2 font-mono uppercase">
                    Rating
                  </div>
                  <div className="text-2xl font-bold text-white">4.9★</div>
                </div>
              </div>

              {/* Primary CTA */}
              <div className="flex flex-wrap gap-4">
                <Button
                  to="/contact"
                  variant="primary"
                  className="shadow-lg shadow-primary-500/20"
                >
                  Get Started Now <ArrowRight size={18} className="ml-2" />
                </Button>
                <Button to="/services" variant="secondary">
                  View All Services
                </Button>
              </div>
            </Motion.div>

            {/* Right Image - 4 cols */}
            <Motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-4"
            >
              <div className="sticky top-24">
                <div
                  className={`absolute -inset-2 bg-gradient-to-br ${service.color} opacity-20 rounded-2xl blur-2xl`}
                />
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-navy-900/50 backdrop-blur-sm aspect-square">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-40" />

                  {/* Floating Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4">
                    <div className="text-xs text-slate-400 mb-1">
                      Enterprise-Grade
                    </div>
                    <div className="text-white font-bold">{service.title}</div>
                  </div>
                </div>
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <SectionWrapper background="dark" className="border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Features & Benefits */}
          <div className="lg:col-span-8 space-y-12">
            {/* Key Features */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-transparent rounded-full" />
                <h3 className="text-3xl font-bold text-white">
                  Core Capabilities
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, i) => (
                  <Motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group relative flex items-start space-x-3 p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/5"
                  >
                    {/* Gradient Background on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

                    <div className="relative z-10 flex items-start space-x-3 w-full">
                      <div className="shrink-0 p-2 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                        <CheckCircle2 className="text-primary-400" size={18} />
                      </div>
                      <span className="text-slate-300 font-medium flex-1 pt-0.5">
                        {feature}
                      </span>
                    </div>
                  </Motion.div>
                ))}
              </div>
            </div>

            {/* Strategic Benefits */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-transparent rounded-full" />
                <h3 className="text-3xl font-bold text-white">
                  Strategic Benefits
                </h3>
              </div>
              <div className="bg-gradient-to-br from-navy-800/30 to-navy-900/30 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, i) => (
                    <Motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="shrink-0 w-2 h-2 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 mt-2" />
                      <p className="text-base text-slate-300 leading-relaxed">
                        {benefit}
                      </p>
                    </Motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Highlights */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-transparent rounded-full" />
                <h3 className="text-3xl font-bold text-white">
                  Performance Highlights
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Uptime", value: "99.9%" },
                  { label: "Response", value: "<100ms" },
                  { label: "Security", value: "ISO" },
                  { label: "Support", value: "24/7" },
                ].map((stat, i) => (
                  <Motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gradient-to-br from-primary-500/10 to-transparent border border-primary-500/20 rounded-xl p-5 text-center hover:border-primary-500/40 transition-all"
                  >
                    <div className="text-3xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-400 uppercase font-mono">
                      {stat.label}
                    </div>
                  </Motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Process & CTA */}
          <div className="lg:col-span-4 space-y-8">
            {/* Process Timeline */}
            <div className="sticky top-24 space-y-8">
              <div className="bg-gradient-to-br from-navy-800/50 to-navy-900/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm shadow-xl">
                <h3 className="text-2xl font-bold mb-8 text-white flex items-center">
                  <span className="w-2 h-8 bg-primary-500 mr-3 rounded-full"></span>
                  Execution Framework
                </h3>
                <div className="space-y-6 relative">
                  {/* Vertical Line */}
                  <div className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-primary-500/50 via-primary-500/20 to-transparent" />

                  {service.process.map((step, i) => (
                    <Motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative pl-14 group"
                    >
                      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 border-2 border-navy-900 flex items-center justify-center text-xs font-mono font-bold text-white z-10 group-hover:scale-110 transition-transform shadow-lg shadow-primary-500/20">
                        {step.number}
                      </div>
                      <div className="bg-white/5 border border-white/5 rounded-lg p-4 group-hover:border-white/10 transition-colors">
                        <h4 className="text-base font-bold text-white mb-2">
                          {step.title}
                        </h4>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </Motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="relative bg-gradient-to-br from-primary-900/40 to-navy-900/60 border border-primary-500/30 rounded-2xl p-8 text-center overflow-hidden group shadow-xl shadow-primary-500/10">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Motion.div
                  className="absolute -top-24 -right-24 w-48 h-48 bg-primary-500/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/30">
                    <ArrowRight className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Ready to Deploy?</h3>
                  <p className="text-slate-300 mb-8 leading-relaxed">
                    Speak with a lead architect today to discuss your
                    requirements and get a customized solution.
                  </p>
                  <Button
                    to="/contact"
                    variant="primary"
                    className="w-full justify-center shadow-lg shadow-primary-500/20"
                  >
                    Initiate Project <ArrowRight size={18} className="ml-2" />
                  </Button>

                  {/* Trust Indicators */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-white">500+</div>
                        <div className="text-xs text-slate-400">Projects</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-white">98%</div>
                        <div className="text-xs text-slate-400">Success</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-white">4.9★</div>
                        <div className="text-xs text-slate-400">Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ServiceDetail;
