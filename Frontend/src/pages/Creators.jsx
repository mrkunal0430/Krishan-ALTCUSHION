import React, { useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Video,
  Shield,
  Globe,
  Palette,
  Bot,
  BarChart3,
  Lock,
  Smartphone,
  Sparkles,
  CheckCircle2,
  Zap,
  TrendingUp,
  Users,
  Camera,
  Megaphone,
  Heart,
  Eye,
} from "lucide-react";
import SectionWrapper from "../components/ui/SectionWrapper";
import Button from "../components/ui/Button";

const creatorServices = [
  {
    icon: Globe,
    title: "Brand Website & Portfolio",
    description:
      "Custom-built websites, landing pages, and link-in-bio platforms that convert visitors into followers, subscribers, and paying customers.",
    color: "from-cyan-500 to-blue-600",
    features: [
      "Custom portfolio websites",
      "Link-in-bio platforms",
      "Landing page funnels",
    ],
  },
  {
    icon: Bot,
    title: "AI Content Automation",
    description:
      "AI-powered tools for content scheduling, caption generation, trend analysis, and audience insights to help you produce more while working less.",
    color: "from-violet-500 to-purple-600",
    features: [
      "AI caption & script generation",
      "Smart scheduling tools",
      "Trend & analytics tracking",
    ],
  },
  {
    icon: Shield,
    title: "Digital Identity Protection",
    description:
      "Protect your accounts, brand identity, and digital reputation with enterprise-grade security including 2FA setup, impersonation monitoring, and more.",
    color: "from-red-500 to-orange-500",
    features: [
      "Account security hardening",
      "Impersonation detection",
      "Data breach monitoring",
    ],
  },
  {
    icon: Smartphone,
    title: "Creator App Development",
    description:
      "Custom mobile apps for fan engagement, exclusive content delivery, community building, and direct monetization beyond social platforms.",
    color: "from-pink-500 to-fuchsia-600",
    features: [
      "Fan engagement apps",
      "Membership platforms",
      "Push notification systems",
    ],
  },
  {
    icon: BarChart3,
    title: "Business & Brand Strategy",
    description:
      "Strategic consulting for brand positioning, monetization models, partnership deals, and scaling your creator business to the next level.",
    color: "from-emerald-500 to-green-600",
    features: [
      "Brand positioning strategy",
      "Monetization roadmaps",
      "Partnership consulting",
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & Growth",
    description:
      "Data-driven marketing campaigns, SEO optimization, paid ad management, and cross-platform growth strategies tailored for creators.",
    color: "from-amber-500 to-orange-600",
    features: [
      "SEO & discoverability",
      "Paid campaign management",
      "Cross-platform growth",
    ],
  },
];

const stats = [
  { value: "500+", label: "Creators Empowered" },
  { value: "10M+", label: "Audience Reach" },
  { value: "99.9%", label: "Account Security" },
  { value: "3x", label: "Avg. Revenue Growth" },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We learn about your brand, audience, goals, and current pain points to understand exactly where you need support.",
  },
  {
    number: "02",
    title: "Custom Strategy",
    description:
      "Our team crafts a tailored growth plan combining technology, security, and business strategy specific to your niche.",
  },
  {
    number: "03",
    title: "Build & Launch",
    description:
      "We build your digital assets — website, apps, AI tools, security systems — and launch them with a go-to-market plan.",
  },
  {
    number: "04",
    title: "Scale & Protect",
    description:
      "Ongoing support with performance optimization, security monitoring, and strategic consulting as your brand grows.",
  },
];

const testimonials = [
  {
    quote:
      "360 Kavach built me a stunning portfolio site and set up AI tools that save me 10+ hours a week on content planning.",
    name: "Content Creator",
    role: "YouTube | 500K+ subscribers",
    icon: Camera,
  },
  {
    quote:
      "After getting my account hacked, 360 Kavach secured everything — my socials, email, and even set up dark web monitoring.",
    name: "Fashion Influencer",
    role: "Instagram | 1M+ followers",
    icon: Heart,
  },
  {
    quote:
      "Their business consulting helped me triple my brand deal revenue and build a proper company around my content.",
    name: "Tech Creator",
    role: "Multi-platform | 2M+ reach",
    icon: TrendingUp,
  },
];

const Creators = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-primary-500/10 to-transparent opacity-50 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-blue-500/10 to-transparent opacity-30 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-8"
            >
              <Video className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-primary-400 font-medium">
                For Creators & Influencers
              </span>
            </Motion.div>

            {/* Heading */}
            <Motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-snug"
            >
              Build, Protect &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-300 to-white">
                Scale Your Brand
              </span>
            </Motion.h1>

            {/* Subtitle */}
            <Motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              From stunning websites to AI-powered content tools,
              enterprise-grade security to business strategy we give creators
              the tech stack that corporations use, at a scale that fits your
              brand.
            </Motion.p>

            {/* CTA */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon={ArrowRight}
              >
                Book Free Strategy Call
              </Button>
              <Button to="#services" variant="secondary" size="lg">
                <Eye size={20} className="mr-2" /> Explore Solutions
              </Button>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="relative py-10 border-y border-white/10 bg-navy-900/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <SectionWrapper id="services" background="transparent">
        <div className="text-center mb-16">
          <Motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-4"
          >
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm text-primary-400 font-medium">
              What We Build For You
            </span>
          </Motion.div>
          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4"
          >
            Creator-Grade{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-300 to-white">
              Solutions
            </span>
          </Motion.h2>
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Everything you need to turn your content into a business — powered
            by the same technology enterprises rely on.
          </Motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {creatorServices.map((service, i) => (
            <Motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              {/* Hover glow */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}
              />

              <div className="relative h-full bg-gradient-to-br from-navy-800/90 to-navy-900/90 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-1 flex flex-col p-6">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} p-0.5 mb-4`}
                >
                  <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                    <service.icon size={22} className="text-white" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm mb-5 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {service.features.map((feature, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-slate-400"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Creators Choose Us */}
      <SectionWrapper background="dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6"
            >
              <Heart className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-primary-400 font-medium">
                Built For Creators
              </span>
            </Motion.div>

            <Motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-display font-bold text-white mb-6"
            >
              Why Creators{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-300 to-white">
                Trust Us
              </span>
            </Motion.h2>

            <Motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-300 mb-8 leading-relaxed"
            >
              We understand the creator economy. Your brand is your business,
              and we treat it with the same seriousness as a Fortune 500 company
              — but with the speed, flexibility, and understanding that creators
              need.
            </Motion.p>

            <div className="space-y-4">
              {[
                "Enterprise-grade security for your digital identity",
                "AI tools that save 10+ hours weekly on content",
                "Custom tech, not cookie-cutter templates",
                "Business strategy from growth experts",
                "24/7 monitoring for impersonation & threats",
                "One partner for all your tech needs",
              ].map((item, i) => (
                <Motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    className="text-primary-500 shrink-0"
                    size={20}
                  />
                  <span className="text-slate-300">{item}</span>
                </Motion.div>
              ))}
            </div>
          </div>

          {/* Right: Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: Lock,
                title: "Account Security",
                description:
                  "Multi-layer protection for all your social accounts and digital assets.",
              },
              {
                icon: Palette,
                title: "Custom Design",
                description:
                  "Websites and apps designed to match your unique brand aesthetic perfectly.",
              },
              {
                icon: Zap,
                title: "AI-Powered Tools",
                description:
                  "Content automation, analytics, and insights powered by latest AI technology.",
              },
              {
                icon: Users,
                title: "Growth Strategy",
                description:
                  "Expert guidance on monetization, partnerships, and audience expansion.",
              },
            ].map((card, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors">
                    <card.icon className="text-primary-500" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-400">{card.description}</p>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Process Section */}
      <SectionWrapper background="transparent">
        <div className="text-center mb-16">
          <Motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-4"
          >
            <Zap className="w-4 h-4 text-primary-500" />
            <span className="text-sm text-primary-400 font-medium">
              How It Works
            </span>
          </Motion.div>
          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
          >
            From Idea to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-300 to-white">
              Launch
            </span>
          </Motion.h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {processSteps.map((step, i) => (
            <Motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="h-full bg-gradient-to-br from-navy-800/80 to-navy-900/80 border border-white/10 rounded-xl p-6 hover:border-primary-500/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                <div className="relative z-10">
                  <div className="text-4xl font-black text-primary-500/20 mb-3">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper background="dark">
        <div className="text-center mb-16">
          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
          >
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-300 to-white">
              Creators
            </span>
          </Motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <Motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center mb-4">
                <t.icon size={20} className="text-primary-400" />
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4 italic">
                "{t.quote}"
              </p>
              <div>
                <div className="text-white font-semibold text-sm">{t.name}</div>
                <div className="text-slate-500 text-xs">{t.role}</div>
              </div>
            </Motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="transparent">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-primary-500/10 to-navy-900/60 border border-primary-500/30 rounded-3xl p-8 md:p-16 text-center overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-transparent" />
          <Motion.div
            className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"
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
          <Motion.div
            className="absolute -bottom-20 -left-20 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10">
            <Motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 mx-auto mb-8  rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500"
            >
              <Video className="text-white" size={36} />
            </Motion.div>

            <Motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6"
            >
              Ready to Level Up Your Creator Game?
            </Motion.h2>

            <Motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto"
            >
              Get a free strategy session with our team. We'll analyze your
              brand, identify growth opportunities, and build a custom tech
              roadmap — all at zero cost.
            </Motion.p>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                className="shadow-lg shadow-primary-500/20"
              >
                Get Free Strategy Session
              </Button>
              <Button to="/services" variant="secondary" size="lg">
                View All Services
              </Button>
            </Motion.div>
          </div>
        </Motion.div>
      </SectionWrapper>
    </div>
  );
};

export default Creators;
