import {
  Shield,
  Briefcase,
  Scale,
  Monitor,
  Server,
  Bot,
  Database,
  Eye,
} from "lucide-react";

export const servicesData = [
  {
    id: "cyber-security",
    title: "Cyber Security",
    subtitle: "24/7 Digital Threat Defense",
    shortDescription:
      "Protect your digital infrastructure with enterprise-grade security systems including 24/7 monitoring, threat detection, and incident response.",
    fullDescription:
      "In an era of sophisticated cyber threats, reactive security is not enough. 360 Kavach provides an end-to-end cybersecurity shield that proactively safeguards your enterprise assets. We combine advanced SIEM (Security Information and Event Management) technology with human intelligence to monitor your infrastructure 24/7. Our Zero Trust architecture ensures that every access request is verified, minimizing the attack surface and ensuring business continuity.",
    icon: Shield,
    img: "/Services_Images/1.webp",
    color: "from-red-500 to-orange-600",
    features: [
      "24/7 SOC Monitoring & Threat Detection",
      "Vulnerability Assessment & Penetration Testing (VAPT)",
      "Bank-Grade Data Encryption (AES-256)",
      "Identity & Access Management (IAM)",
      "Rapid Incident Response & Forensics",
      "Zero Trust Security Architecture",
      "Security Compliance Auditing",
    ],
    benefits: [
      "Eliminate downtime caused by ransomware or breaches.",
      "Achieve compliance with global standards (GDPR, HIPAA, ISO).",
      "Protect customer trust and brand reputation.",
      "Secure remote workforce access globally.",
      "Reduce security incidents by 95%.",
    ],
    process: [
      {
        number: "01",
        title: "Audit",
        desc: "Comprehensive scan of existing infrastructure.",
      },
      {
        number: "02",
        title: "Harden",
        desc: "Patching vulnerabilities and implementing firewalls.",
      },
      {
        number: "03",
        title: "Monitor",
        desc: "Real-time 24/7 surveillance of network traffic.",
      },
      {
        number: "04",
        title: "Respond",
        desc: "Immediate automated and human response to threats.",
      },
    ],
  },
  {
    id: "managed-detection-response",
    title: "Managed Detection & Response",
    subtitle: "SOC, Forensics & Threat Hunting",
    shortDescription:
      "24/7 Security Operations Center with incident response, digital forensics, malware analysis, and advanced threat hunting capabilities.",
    fullDescription:
      "Our Managed Detection & Response (MDR) service provides round-the-clock security monitoring through our Cloud Native and On-Prem SOC solutions. We combine advanced threat detection, rapid incident response, digital forensics, and proactive threat hunting to protect your organization from sophisticated cyber threats. Our team of experts handles everything from APT incident handling to reverse engineering and exploit analysis.",
    icon: Eye,
    img: "/Services_Images/mdr.webp",
    color: "from-rose-500 to-pink-600",
    features: [
      "Cloud Native SOC",
      "On-Prem SOC Solutions",
      "Incidence Response",
      "Darkweb Monitoring",
      "APT Incident Handling",
      "Digital Forensics",
      "Cyber Crime Investigations",
      "Malware Analysis",
      "Reverse Engineering",
      "Exploit Writing & Tradecraft Development",
    ],
    benefits: [
      "24/7 security monitoring without building in-house team.",
      "Rapid incident response within minutes of detection.",
      "Comprehensive forensic analysis for legal proceedings.",
      "Proactive threat hunting to identify hidden threats.",
      "Advanced malware analysis and reverse engineering.",
      "Dark web monitoring to detect leaked credentials.",
    ],
    process: [
      {
        number: "01",
        title: "Deploy",
        desc: "Setting up SOC infrastructure and monitoring agents.",
      },
      {
        number: "02",
        title: "Monitor",
        desc: "24/7 threat detection and anomaly analysis.",
      },
      {
        number: "03",
        title: "Respond",
        desc: "Rapid incident containment and neutralization.",
      },
      {
        number: "04",
        title: "Investigate",
        desc: "Deep forensic analysis and threat intelligence.",
      },
    ],
  },
  {
    id: "ai-automation",
    title: "AI Agents & Automation",
    subtitle: "Intelligent Business Operations",
    shortDescription:
      "Intelligent automation that works 24/7, including AI agents for HR, sales, support, and custom AI solutions.",
    fullDescription:
      "Unlock the power of Artificial Intelligence to automate repetitive tasks and gain predictive insights. We build custom AI Agents tasked with specific roles—Customer Support, Lead Generation, Data Entry, and more. Our solutions leverage Large Language Models (LLMs) and Machine Learning to create self-running operational systems that work around the clock.",
    icon: Bot,
    img: "/Services_Images/9.webp",
    color: "from-violet-500 to-purple-600",
    features: [
      "Custom LLM & AI Agent Development",
      "Intelligent Chatbots & Virtual Assistants",
      "Robotic Process Automation (RPA)",
      "Predictive Analytics & Forecasting",
      "Automated Content Generation",
      "Computer Vision Solutions",
      "Natural Language Processing (NLP)",
      "Machine Learning Model Training",
      "AI-Powered Data Analysis",
    ],
    benefits: [
      "Automate 80% of routine customer queries.",
      "Generate leads 24/7 without human intervention.",
      "Reduce operational costs by 40%.",
      "Make instant data-backed decisions.",
      "Scale customer support infinitely.",
    ],
    process: [
      {
        number: "01",
        title: "Map",
        desc: "Identifying high-impact automation opportunities.",
      },
      {
        number: "02",
        title: "Train",
        desc: "Fine-tuning AI models on your data.",
      },
      {
        number: "03",
        title: "Integrate",
        desc: "Embedding AI agents into workflows.",
      },
      {
        number: "04",
        title: "Scale",
        desc: "Expanding automation across departments.",
      },
    ],
  },

  {
    id: "governance-compliance",
    title: "Governance & Compliance",
    subtitle: "Risk & Policy Control Systems",
    shortDescription:
      "Build trust, reduce risk, and stay audit-ready with our risk frameworks, regulatory alignment, and policy governance.",
    fullDescription:
      "Navigating the complex landscape of global regulations requires more than just checklists. We implement robust Governance, Risk, and Compliance (GRC) frameworks that embed compliance into your daily operations. From ISO certifications to local data privacy laws, we ensure your organization is audit-ready and resilient against legal and operational risks.",
    icon: Scale,
    img: "/Services_Images/3.webp",
    color: "from-emerald-500 to-green-600",
    features: [
      "Enterprise Risk Management (ERM)",
      "Regulatory Compliance (GDPR, PCI-DSS, SOC2)",
      "Internal Policy & Audit Governance",
      "Third-Party Risk Assessment",
      "Automated Compliance Reporting",
      "ISO Certification Support",
      "Data Privacy Framework Implementation",
    ],
    benefits: [
      "Avoid costly fines and legal penalties.",
      "Streamline external audits with organized evidence.",
      "Build trust with enterprise clients and partners.",
      "Proactively identify and mitigate operational risks.",
      "Achieve 100% compliance readiness.",
    ],
    process: [
      {
        number: "01",
        title: "Gap Analysis",
        desc: "Identifying missing controls and risks.",
      },
      {
        number: "02",
        title: "Framework",
        desc: "Designing the custom compliance architecture.",
      },
      {
        number: "03",
        title: "Implement",
        desc: "Rolling out policies and technical controls.",
      },
      {
        number: "04",
        title: "Audit",
        desc: "Mock audits and continuous monitoring.",
      },
    ],
  },
  {
    id: "web-app-development",
    title: "Web & App Development",
    subtitle: "Web, Mobile & Cloud Platforms",
    shortDescription:
      "End-to-end development services for web, mobile, and cloud applications with enterprise-grade architecture and user-centric design.",
    fullDescription:
      "Your digital presence is your global headquarters. We engineer high-performance, visually stunning, and secure platforms across web and mobile using cutting-edge technologies (React, Next.js, Flutter, React Native). From corporate websites to mobile apps handling millions of users, we build scalable solutions with blazing-fast performance, bank-grade security, and conversion-optimized UX that turns your digital presence into a revenue-generating engine.",
    icon: Monitor,
    img: "/Services_Images/5.webp",
    color: "from-cyan-400 to-blue-500",
    features: [
      "Enterprise Web Application Development",
      "Native iOS & Android Development",
      "Cross-Platform Solutions (Flutter/React Native)",
      "SaaS Platform Development",
      "Progressive Web Apps (PWA)",
      "Cloud-Connected Enterprise Apps",
      "E-commerce Solutions",
      "Headless CMS & API Development",
      "Technical SEO Optimization",
      "App Store Optimization (ASO)",
      "IoT Mobile Integration",
    ],
    benefits: [
      "Unified development for all platforms.",
      "Blazing fast load times under 2 seconds.",
      "SEO-ready architecture for organic traffic.",
      "Reach customers on web and mobile seamlessly.",
      "Scalable backend for millions of users.",
      "Offline-first capabilities for reliability.",
    ],
    process: [
      {
        number: "01",
        title: "UX/UI",
        desc: "Wireframing and high-fidelity prototyping.",
      },
      {
        number: "02",
        title: "Dev",
        desc: "Agile development with clean, modular code.",
      },
      {
        number: "03",
        title: "Test",
        desc: "Rigorous QA for bugs, security, and performance.",
      },
      {
        number: "04",
        title: "Deploy",
        desc: "CI/CD pipeline for seamless production launch.",
      },
    ],
  },
  {
    id: "erp-solutions",
    title: "ERP Solutions",
    subtitle: "Integrated Business Management",
    shortDescription:
      "Streamline operations with comprehensive ERP systems covering finance, inventory, HR, CRM, and supply chain management.",
    fullDescription:
      "Transform your business operations with our highly customizable, AI-enhanced Enterprise Resource Planning (ERP) platform. Designed for seamless innovation and scalability, our ERP solutions integrate all core business processes into a unified system. From manufacturing to healthcare, construction to retail, we provide industry-specific modules that eliminate silos, automate workflows, and provide real-time business intelligence for strategic decision-making.",
    icon: Database,
    img: "/Services_Images/8.webp",
    color: "from-amber-500 to-orange-600",
    features: [
      "Finance & Accounting Management",
      "Inventory & Warehouse Management",
      "Human Resource & Payroll Management",
      "Customer Relationship Management (CRM)",
      "Supply Chain & Procurement",
      "Sales & Marketing Automation",
      "Business Intelligence Dashboard",
      "Purchase & Vendor Management",
      "Project & Workflow Management",
      "Manufacturing Resource Planning",
      "Multi-Location Operations Support",
      "Multi-Currency & Tax Compliance",
      "Custom Module Development",
      "Third-Party System Integration",
    ],
    benefits: [
      "Eliminate operational silos with unified data.",
      "Reduce manual data entry by 85%.",
      "Real-time visibility across all operations.",
      "Interactive dashboards for strategic decisions.",
      "Improve inventory accuracy to 99.5%.",
      "Automate complex approval workflows.",
      "Scale seamlessly with business growth.",
      "Industry-specific compliance built-in.",
    ],
    process: [
      {
        number: "01",
        title: "Discovery",
        desc: "Understanding business processes and requirements.",
      },
      {
        number: "02",
        title: "Design",
        desc: "Configuring modules and customizing workflows.",
      },
      {
        number: "03",
        title: "Implement",
        desc: "Data migration, testing, and user training.",
      },
      {
        number: "04",
        title: "Support",
        desc: "Ongoing optimization and feature enhancements.",
      },
    ],
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    subtitle: "Technology Leadership & Strategy",
    shortDescription:
      "Expert guidance for cloud infrastructure, IT modernization, and technology strategy with fractional CTO/CIO expertise.",
    fullDescription:
      "Technology decisions made today define your company's success for the next decade. Our IT consulting services provide you with fractional CTO/CIO expertise to make smart, cost-effective infrastructure decisions. We help you migrate to the cloud, modernize legacy systems, select the right tech stack, and build a resilient IT infrastructure that supports your business goals.",
    icon: Server,
    img: "/Services_Images/7.webp",
    color: "from-slate-400 to-slate-600",
    features: [
      "Cloud Migration Strategy (AWS/Azure/GCP)",
      "Legacy System Modernization",
      "Infrastructure as Code (IaC)",
      "IT Cost Optimization & ROI Analysis",
      "Disaster Recovery Planning",
      "Technology Stack Selection",
      "DevOps & CI/CD Implementation",
      "Fractional CTO/CIO Services",
      "IT Security Assessment",
    ],
    benefits: [
      "Reduce IT infrastructure costs by 40%.",
      "Improve system uptime to 99.99%.",
      "Future-proof technology stack.",
      "Ensure business continuity and data redundancy.",
      "Fast-track digital transformation initiatives.",
    ],
    process: [
      {
        number: "01",
        title: "Assessment",
        desc: "Reviewing current IT landscape and costs.",
      },
      {
        number: "02",
        title: "Roadmap",
        desc: "Planning the modernization journey.",
      },
      {
        number: "03",
        title: "Migration",
        desc: "Phased transition with zero data loss.",
      },
      {
        number: "04",
        title: "Manage",
        desc: "Ongoing optimization and support.",
      },
    ],
  },
  {
    id: "business-consulting",
    title: "Business Consulting & Training",
    subtitle: "Strategic Growth & Workforce Excellence",
    shortDescription:
      "Transform your business with strategic consulting, process optimization, and comprehensive workforce training programs for sustainable growth.",
    fullDescription:
      "We bridge the gap between business vision and operational reality through dual expertise in strategic consulting and workforce development. Our consultants use data-driven frameworks to analyze your current standing, identify bottlenecks, and engineer a roadmap for scalable growth. Simultaneously, we ensure your team has the skills to execute that vision through targeted training programs, from leadership development to technical upskilling.",
    icon: Briefcase,
    img: "/Services_Images/2.webp",
    color: "from-blue-500 to-indigo-600",
    features: [
      "Market Entry & Growth Strategy",
      "Business Process Optimization (BPO)",
      "Digital Transformation Roadmaps",
      "Executive Leadership Development",
      "Corporate Training Programs",
      "Cybersecurity Awareness Training",
      "Professional Certifications Prep",
      "Custom Learning Management Systems",
      "Organizational Change Management",
      "KPI Framework Design",
    ],
    benefits: [
      "Reduce operational costs by up to 30%.",
      "Accelerate decision-making with data clarity.",
      "Build internal capabilities instead of outsourcing.",
      "Increase employee retention by 40%.",
      "Seamlessly adopt new technologies.",
      "Foster culture of continuous innovation.",
    ],
    process: [
      {
        number: "01",
        title: "Analyze",
        desc: "Deep dive into business model and skill gaps.",
      },
      {
        number: "02",
        title: "Strategize",
        desc: "Developing tailored roadmap and training curriculum.",
      },
      {
        number: "03",
        title: "Execute",
        desc: "Hands-on implementation and interactive workshops.",
      },
      {
        number: "04",
        title: "Optimize",
        desc: "Continuous refinement and skill validation.",
      },
    ],
  },
];

export const processSteps = [
  {
    id: 1,
    title: "Discover",
    desc: "We understand your goals, challenges, and risks.",
  },
  {
    id: 2,
    title: "Design",
    desc: "We craft a strategy and system architecture for your success.",
  },
  {
    id: 3,
    title: "Implement",
    desc: "We build, secure, and deploy your solution.",
  },
  {
    id: 4,
    title: "Evolve",
    desc: "We provide continuous support, optimization, and innovation.",
  },
];
