import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ShieldAlert,
  Code2,
  Eye,
  Lock,
  Network,
  Siren,
  Cloud,
  Server,
  Zap,
  Search,
  Bug,
  Globe,
  TrendingUp,
  Settings,
  Users,
  Cpu,
  BookOpen,
  BarChart3,
  Stethoscope,
  Map,
  ShieldCheck,
  AlertTriangle,
  FileText,
  Award,
  Layers,
  Terminal,
  Smartphone,
  Monitor,
  Tablet,
  ShoppingBag,
  Calculator,
  Package,
  UserCheck,
  Heart,
  Truck,
  PieChart,
  MoveUp,
  Wrench,
  RefreshCw,
  User,
  RotateCcw,
  DollarSign,
  MessageSquare,
  Activity,
  LineChart,
  Bot,
  ClipboardList,
  Camera,
} from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import { servicesData } from "../../data/services";

// Transform servicesData to add detailed information cards for the console display
const services = servicesData.map((service) => ({
  ...service,
  // Create 6 detailed information cards for each service
  infoCards:
    service.id === "cyber-security"
      ? [
          {
            title: "VAPT Services",
            icon: ShieldAlert,
            description:
              "Vulnerability Assessment & Penetration Testing to identify security gaps proactively",
          },
          {
            title: "API Security",
            icon: Code2,
            description:
              "API security safeguards endpoints using secure authentication, rate limiting, and encryption.",
          },
          {
            title: "24/7 SOC Monitoring",
            icon: Eye,
            description:
              "Security Operations Center with round-the-clock threat surveillance and incident response",
          },
          {
            title: "Zero Trust Architecture",
            icon: Lock,
            description:
              "Never trust, always verify - comprehensive access control for every network request",
          },
          {
            title: "Virtual Cisco",
            icon: Network,
            description:
              "Virtual Cisco provides a virtualized Cisco networking environment for testing and training without physical hardware.",
          },
          {
            title: "Incident Response Plan",
            icon: Siren,
            description:
              "Rapid containment and forensic analysis with automated threat mitigation",
          },
        ]
      : service.id === "managed-detection-response"
        ? [
            {
              title: "Cloud Native SOC",
              icon: Cloud,
              description:
                "Scalable cloud-based Security Operations Center with real-time monitoring and alerting",
            },
            {
              title: "On-Prem SOC",
              icon: Server,
              description:
                "Dedicated on-premises SOC solutions for organizations with strict data residency requirements",
            },
            {
              title: "Incident Response",
              icon: Zap,
              description:
                "Rapid incident containment, threat neutralization, and recovery procedures",
            },
            {
              title: "Digital Forensics",
              icon: Search,
              description:
                "Comprehensive forensic analysis for incident investigation and legal proceedings",
            },
            {
              title: "Malware Analysis",
              icon: Bug,
              description:
                "Reverse engineering and behavior analysis of malicious code and exploits",
            },
            {
              title: "Dark Web Monitoring",
              icon: Globe,
              description:
                "Proactive monitoring for leaked credentials, data breaches, and threat intelligence",
            },
          ]
        : service.id === "business-consulting"
          ? [
              {
                title: "Strategic Planning",
                icon: TrendingUp,
                description:
                  "Market analysis and growth roadmaps tailored to your business objectives",
              },
              {
                title: "Process Optimization",
                icon: Settings,
                description:
                  "Streamline operations and eliminate redundancies for improved efficiency",
              },
              {
                title: "Leadership Training",
                icon: Users,
                description:
                  "Executive coaching and C-suite development programs for strategic decision-making",
              },
              {
                title: "Digital Transformation",
                icon: Cpu,
                description:
                  "Technology adoption strategies with change management and team readiness",
              },
              {
                title: "Workforce Upskilling",
                icon: BookOpen,
                description:
                  "Corporate training programs in cybersecurity, software, and professional skills",
              },
              {
                title: "KPI Frameworks",
                icon: BarChart3,
                description:
                  "Design and implement measurable performance indicators aligned with business goals",
              },
            ]
          : service.id === "governance-compliance"
            ? [
                {
                  title: "HIPAA Compliance",
                  icon: Stethoscope,
                  description:
                    "Healthcare data protection and privacy compliance for medical organizations",
                },
                {
                  title: "GDPR Framework",
                  icon: Map,
                  description:
                    "European data privacy regulation compliance for global data handling",
                },
                {
                  title: "DPDP Compliance",
                  icon: ShieldCheck,
                  description:
                    "Personal data protection, consent management, data processing controls, and regulatory compliance",
                },

                {
                  title: "Risk Management",
                  icon: AlertTriangle,
                  description:
                    "Enterprise risk assessment, mitigation strategies, and continuous monitoring",
                },
                {
                  title: "Audit Preparation",
                  icon: FileText,
                  description:
                    "Mock audits, documentation organization, and evidence management systems",
                },
                {
                  title: "ISO Certification",
                  icon: Award,
                  description:
                    "ISO 27001, 9001, and other international standards implementation support",
                },
              ]
            : service.id === "web-app-development"
              ? [
                  {
                    title: "SaaS Platforms",
                    icon: Layers,
                    description:
                      "Scalable software-as-a-service solutions with subscription and billing integration",
                  },
                  {
                    title: "API Development",
                    icon: Terminal,
                    description:
                      "RESTful and GraphQL APIs with headless CMS integration for flexible content",
                  },

                  {
                    title: "Native Mobile Apps",
                    icon: Smartphone,
                    description:
                      "iOS and Android applications with native performance and user experience",
                  },
                  {
                    title: "Responsive Web Design",
                    icon: Monitor,
                    description:
                      "Mobile-first, pixel-perfect websites optimized for all devices and screen sizes",
                  },
                  {
                    title: "Cross-Platform Solutions",
                    icon: Tablet,
                    description:
                      "Flutter and React Native apps that run seamlessly on multiple platforms",
                  },

                  {
                    title: "E-commerce Systems",
                    icon: ShoppingBag,
                    description:
                      "Full-featured online stores with payment gateways and inventory management",
                  },
                ]
              : service.id === "erp-solutions"
                ? [
                    {
                      title: "Finance & Accounting",
                      icon: Calculator,
                      description:
                        "Automated financial reporting, multi-currency support, and tax compliance management",
                    },
                    {
                      title: "Inventory Control",
                      icon: Package,
                      description:
                        "Real-time stock tracking, warehouse management, and demand forecasting",
                    },
                    {
                      title: "HR & Payroll",
                      icon: UserCheck,
                      description:
                        "Employee management, attendance tracking, payroll processing, and benefit administration",
                    },
                    {
                      title: "CRM Integration",
                      icon: Heart,
                      description:
                        "Customer relationship management with sales pipeline and marketing automation",
                    },
                    {
                      title: "Supply Chain",
                      icon: Truck,
                      description:
                        "End-to-end procurement, vendor management, and logistics tracking",
                    },
                    {
                      title: "Business Intelligence",
                      icon: PieChart,
                      description:
                        "Interactive dashboards with real-time analytics for data-driven decision making",
                    },
                  ]
                : service.id === "it-consulting"
                  ? [
                      {
                        title: "Cloud Migration",
                        icon: MoveUp,
                        description:
                          "Seamless transition to AWS, Azure, or GCP with zero downtime and data integrity",
                      },
                      {
                        title: "Infrastructure as Code",
                        icon: Wrench,
                        description:
                          "Automated infrastructure provisioning using Terraform and modern DevOps practices",
                      },
                      {
                        title: "Legacy Modernization",
                        icon: RefreshCw,
                        description:
                          "Transform outdated systems into cloud-native, scalable microservices architecture",
                      },
                      {
                        title: "Fractional CTO/CIO",
                        icon: User,
                        description:
                          "Expert technology leadership on-demand without full-time executive overhead",
                      },
                      {
                        title: "Disaster Recovery",
                        icon: RotateCcw,
                        description:
                          "Business continuity planning with automated backup and failover systems",
                      },

                      {
                        title: "Cost Optimization",
                        icon: DollarSign,
                        description:
                          "IT spend analysis, license management, and resource allocation for maximum ROI",
                      },
                    ]
                  : service.id === "ai-automation"
                    ? [
                        {
                          title: "Intelligent Chatbots",
                          icon: MessageSquare,
                          description:
                            "AI-powered customer support with natural language understanding and 24/7 availability",
                        },
                        {
                          title: "Process Automation",
                          icon: Activity,
                          description:
                            "RPA for repetitive tasks in finance, HR, and operations to reduce manual work",
                        },
                        {
                          title: "Predictive Analytics",
                          icon: LineChart,
                          description:
                            "Machine learning models for sales forecasting, demand planning, and trend analysis",
                        },
                        {
                          title: "Custom AI Agents",
                          icon: Bot,
                          description:
                            "Specialized LLM-based agents for lead generation, data entry, and customer engagement",
                        },
                        {
                          title: "Document Processing",
                          icon: ClipboardList,
                          description:
                            "Automated extraction and classification of information from invoices and contracts",
                        },
                        {
                          title: "Computer Vision",
                          icon: Camera,
                          description:
                            "Image recognition and video analysis for quality control and security monitoring",
                        },
                      ]
                    : [
                        {
                          title: "Premium Service",
                          icon: Award,
                          description:
                            "High-quality solutions tailored to your specific business requirements",
                        },
                        {
                          title: "Expert Team",
                          icon: Users,
                          description:
                            "Experienced professionals with deep industry knowledge and technical expertise",
                        },
                        {
                          title: "24/7 Support",
                          icon: Eye,
                          description:
                            "Round-the-clock assistance and monitoring for uninterrupted operations",
                        },
                        {
                          title: "Scalable Solutions",
                          icon: Layers,
                          description:
                            "Architecture designed to grow seamlessly with your business expansion",
                        },
                        {
                          title: "Cloud Ready",
                          icon: Cloud,
                          description:
                            "Modern cloud-native approaches for maximum flexibility and performance",
                        },
                        {
                          title: "Secure by Design",
                          icon: Lock,
                          description:
                            "Security-first methodology integrated throughout the entire lifecycle",
                        },
                      ],
  description:
    service.shortDescription ||
    service.fullDescription.substring(0, 150) + "...",
}));

const ServiceConsole = () => {
  const [activeId, setActiveId] = useState("web-app-development");
  const activeService = services.find((s) => s.id === activeId) || services[0];

  return (
    <SectionWrapper
      background="transparent"
      className="py-24 relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-8"
          >
            <Zap className="w-4 h-4 text-primary-500" />
            <span className="text-sm text-primary-400 font-medium">
              System Capabilities
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Service{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-300 to-white">
              Console
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Select a module to activate its command center. We engineer success
            through integrated digital systems.
          </p>
        </div>

        {/* --- DESKTOP LAYOUT (Hidden on mobile) --- */}
        <div className="hidden lg:grid grid-cols-12 gap-12 h-[650px]">
          {/* LEFT: Modules Stack (Scrollable) */}
          <div className="col-span-4 flex flex-col space-y-3 pr-2 overflow-y-auto custom-scrollbar h-full">
            {services.map((service) => (
              <ServiceModule
                key={service.id}
                service={service}
                isActive={activeId === service.id}
                onClick={() => setActiveId(service.id)}
              />
            ))}
          </div>

          {/* RIGHT: Service Engine Panel */}
          <div className="col-span-8 relative h-full">
            <div className="w-full h-full bg-navy-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-1 overflow-hidden relative shadow-2xl">
              {/* Decoration Lines */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* Content Area */}
              <div className="w-full h-full bg-navy-950/80 rounded-xl overflow-hidden relative p-12 flex flex-col">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeId}
                    initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex flex-col h-full"
                  >
                    {/* Top Bar: Icon & ID */}
                    <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-5">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg shadow-lg shadow-orange-500/20">
                          <activeService.icon
                            className="text-white"
                            size={24}
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white tracking-tight">
                            {activeService.title}
                          </h3>
                          <p className="text-slate-400 text-xs font-mono">
                            {activeService.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-orange-500 font-mono mb-1">
                          SYS_STATUS
                        </div>
                        <div className="flex items-center space-x-2 text-green-400 text-xs font-mono">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                          </span>
                          <span>ONLINE</span>
                        </div>
                      </div>
                    </div>

                    {/* Service Overview */}
                    <div className="mb-6">
                      <p className="text-base text-slate-300 leading-relaxed">
                        {activeService.description}
                      </p>
                    </div>

                    {/* Service Information Cards - 2 Rows x 3 Columns Grid */}
                    <div className="flex-grow overflow-hidden">
                      <div className="grid grid-cols-3 grid-rows-2 gap-4">
                        {activeService.infoCards?.map((card, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className="group relative bg-gradient-to-br from-navy-800/80 to-navy-900/80 border border-white/10 rounded-xl p-5 hover:border-primary-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
                          >
                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

                            {/* Content */}
                            <div className="relative z-10">
                              <div className="flex items-start justify-between mb-3">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/50 to-primary-300/50 p-0.5 transition-all duration-300 group-hover:from-primary-500 group-hover:to-primary-300">
                                  <div className="w-full h-full bg-navy-900 rounded-[7px] flex items-center justify-center">
                                    {card.icon && (
                                      <card.icon
                                        size={18}
                                        className="text-primary-400 group-hover:text-white transition-colors"
                                      />
                                    )}
                                  </div>
                                </div>
                                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wide">
                                  Feature
                                </span>
                              </div>
                              <div className="text-sm font-bold text-white mb-2 leading-tight">
                                {card.title}
                              </div>
                              <div className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                                {card.description}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button - Outside scrollable area */}
                    <div className="pt-4 border-t border-white/5 mt-4">
                      <Link
                        to={`/services/${activeService.id}`}
                        className="group inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-400 rounded-lg text-white font-bold hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 hover:scale-[1.02]"
                      >
                        <span>Explore Full Details</span>
                        <ArrowRight
                          className="group-hover:translate-x-1 transition-transform"
                          size={18}
                        />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* --- MOBILE LAYOUT (Visible on mobile/tablet) --- */}
        <div className="lg:hidden flex flex-col space-y-4">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                activeId === service.id
                  ? "bg-navy-900 border-orange-500/50 ring-1 ring-orange-500/20"
                  : "bg-navy-900/30 border-white/5"
              }`}
            >
              {/* Accordion Header */}
              <button
                onClick={() =>
                  setActiveId(activeId === service.id ? null : service.id)
                }
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-2 rounded-lg ${
                      activeId === service.id
                        ? "bg-orange-500 text-white"
                        : "bg-white/5 text-slate-400"
                    }`}
                  >
                    <service.icon size={20} />
                  </div>
                  <div>
                    <h3
                      className={`font-bold ${
                        activeId === service.id
                          ? "text-white"
                          : "text-slate-300"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500">{service.subtitle}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: activeId === service.id ? 180 : 0 }}
                  className="text-slate-500"
                >
                  {/* Chevron Icon */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </motion.div>
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {activeId === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="border-t border-white/5 p-5 bg-navy-950/30">
                      {/* Description */}
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Information Cards Grid */}
                      <div className="grid grid-cols-1 gap-3 mb-6">
                        {service.infoCards?.map((card, i) => (
                          <div
                            key={i}
                            className="bg-gradient-to-br from-navy-800/60 to-navy-900/60 p-4 rounded-lg border border-white/5"
                          >
                            <div className="flex items-start space-x-3">
                              <div className="p-2 bg-primary-500/10 rounded-lg flex-shrink-0">
                                {card.icon && (
                                  <card.icon
                                    size={14}
                                    className="text-primary-400"
                                  />
                                )}
                              </div>
                              <div className="flex-1">
                                <h4 className="text-sm font-bold text-white mb-1">
                                  {card.title}
                                </h4>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                  {card.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Mini Visual */}
                      <div className="h-32 mb-6 bg-navy-900/50 rounded-lg border border-white/5 relative overflow-hidden flex items-center justify-center">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover opacity-80"
                        />
                      </div>

                      {/* Action */}
                      <Link
                        to={`/services/${service.id}`}
                        className="block w-full py-3 bg-white/5 hover:bg-orange-500 hover:text-white text-slate-300 rounded-lg font-bold text-sm transition-colors border border-white/10 hover:border-orange-500 text-center"
                      >
                        Explore Details
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const ServiceModule = ({ service, isActive, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`group relative w-full text-left p-4 rounded-xl border transition-all duration-300 overflow-hidden ${
        isActive
          ? "bg-navy-800 border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0.1)]"
          : "bg-navy-900/30 border-white/5 hover:bg-navy-800/50 hover:border-white/10"
      }`}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      {isActive && (
        <motion.div
          layoutId="active-glow"
          className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div
            className={`p-2 rounded-lg transition-colors ${
              isActive
                ? "bg-orange-500 text-white"
                : "bg-white/5 text-slate-400 group-hover:text-white"
            }`}
          >
            <service.icon size={20} />
          </div>
          <div>
            <span
              className={`block font-bold text-sm tracking-wide ${
                isActive
                  ? "text-white"
                  : "text-slate-400 group-hover:text-slate-200"
              }`}
            >
              {service.title}
            </span>
          </div>
        </div>

        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]"
          />
        )}
      </div>
    </motion.button>
  );
};

// Simplified Visual Representations
const VisualEngine = ({ type }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      {type === "binary" && (
        <div className="grid grid-cols-8 gap-2 opacity-50">
          {[...Array(64)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.1 }}
              animate={{ opacity: [0.1, 0.5, 0.1] }}
              transition={{ duration: 2, delay: i * 0.05, repeat: Infinity }}
              className="w-2 h-2 bg-orange-500 rounded-full"
            />
          ))}
        </div>
      )}
      {type === "stack" && (
        <div className="relative w-32 h-32">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border-2 border-orange-500/30 rounded-2xl bg-navy-900/80 backdrop-blur-sm"
              animate={{ y: [0, -10 * (i + 1), 0], x: [0, 5 * (i + 1), 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
              style={{ zIndex: 3 - i, transform: `scale(${1 - i * 0.1})` }}
            />
          ))}
        </div>
      )}
      {(type === "chart" || type === "target") && (
        <div className="flex items-end space-x-2 h-32">
          {[40, 70, 50, 90, 60, 100].map((h, i) => (
            <motion.div
              key={i}
              className="w-4 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t-sm"
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
            />
          ))}
        </div>
      )}
      {(type === "palette" || type === "play") && (
        <motion.div
          className="w-32 h-32 border-4 border-orange-500/50 rounded-full flex items-center justify-center relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          <div className="absolute inset-2 border border-white/20 rounded-full border-dashed" />
          <motion.div
            className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl rotate-45"
            animate={{ rotate: [45, 90, 45], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default ServiceConsole;
