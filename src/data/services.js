import { 
  Shield, Briefcase, Scale, GraduationCap, Monitor, Smartphone, 
  Server, BookOpen, Bot, Layout, Award, Users, Zap, CheckCircle 
} from 'lucide-react';

export const servicesData = [
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    subtitle: '24/7 Digital Threat Defense',
    shortDescription: 'Protect your digital infrastructure with enterprise-grade security systems including 24/7 monitoring, threat detection, and incident response.',
    fullDescription: 'In an era of sophisticated cyber threats, reactive security is not enough. 360 Kavach provides an end-to-end cybersecurity shield that proactively safeguards your enterprise assets. We combine advanced SIEM (Security Information and Event Management) technology with human intelligence to monitor your infrastructure 24/7. Our Zero Trust architecture ensures that every access request is verified, minimizing the attack surface and ensuring business continuity.',
    icon: Shield,
    img: 'Services_Images/1.webp',
    color: 'from-red-500 to-orange-600',
    features: [
      '24/7 SOC Monitoring & Threat Detection',
      'Vulnerability Assessment & Penetration Testing (VAPT)',
      'Bank-Grade Data Encryption (AES-256)',
      'Identity & Access Management (IAM)',
      'Rapid Incident Response & Forensics'
    ],
    benefits: [
      'Eliminate downtime caused by ransomware or breaches.',
      'Achieve compliance with global standards (GDPR, HIPAA, ISO).',
      'Protect customer trust and brand reputation.',
      'Secure remote workforce access globally.'
    ],
    process: [
      { number: '01', title: 'Audit', desc: 'Comprehensive scan of existing infrastructure.' },
      { number: '02', title: 'Harden', desc: 'Patching vulnerabilities and implementing firewalls.' },
      { number: '03', title: 'Monitor', desc: 'Real-time 24/7 surveillance of network traffic.' },
      { number: '04', title: 'Respond', desc: 'Immediate automated and human response to threats.' }
    ]
  },
  {
    id: 'business-consulting',
    title: 'Business Consulting',
    subtitle: 'Strategic Growth Engineering',
    shortDescription: 'Turn complexity into clarity with strategic guidance built for growth, process optimization, and digital transformation.',
    fullDescription: 'We bridge the gap between business vision and operational reality. Our consultants use data-driven frameworks to analyze your current standing, identify bottlenecks, and engineer a roadmap for scalable growth. Whether you are navigating a digital transformation or restructuring for efficiency, we provide the clarity and strategy needed to lead your market.',
    icon: Briefcase,
    img: 'Services_Images/2.webp',
    color: 'from-blue-500 to-indigo-600',
    features: [
      'Market Entry & Growth Strategy',
      'Business Process Optimization (BPO)',
      'Digital Transformation Roadmaps',
      'KPI Framework Design & Implementation',
      'Organizational Change Management'
    ],
    benefits: [
      'Reduce operational costs by up to 30%.',
      'Accelerate decision-making with data clarity.',
      'Streamline workflows and eliminate redundancies.',
      'Seamlessly adopt new technologies.'
    ],
    process: [
      { number: '01', title: 'Analyze', desc: 'Deep dive into your business model and metrics.' },
      { number: '02', title: 'Strategize', desc: 'Developing a tailored roadmap for growth.' },
      { number: '03', title: 'Execute', desc: 'Hands-on implementation of strategies.' },
      { number: '04', title: 'Optimize', desc: 'Continuous refinement based on performance data.' }
    ]
  },
  {
    id: 'governance-compliance',
    title: 'Governance & Compliance',
    subtitle: 'Risk & Policy Control Systems',
    shortDescription: 'Build trust, reduce risk, and stay audit-ready with our risk frameworks, regulatory alignment, and policy governance.',
    fullDescription: 'Navigating the complex landscape of global regulations requires more than just checklists. We implement robust Governance, Risk, and Compliance (GRC) frameworks that embed compliance into your daily operations. From ISO certifications to local data privacy laws, we ensure your organization is audit-ready and resilient against legal and operational risks.',
    icon: Scale,
    img: 'Services_Images/3.webp',
    color: 'from-emerald-500 to-green-600',
    features: [
      'Enterprise Risk Management (ERM)',
      'Regulatory Compliance (GDPR, PCI-DSS, SOC2)',
      'Internal Policy & Audit Governance',
      'Third-Party Risk Assessment',
      'Automated Compliance Reporting'
    ],
    benefits: [
      'Avoid costly fines and legal penalties.',
      'Streamline external audits with organized evidence.',
      'Build trust with enterprise clients and partners.',
      'Proactively identify and mitigate operational risks.'
    ],
    process: [
      { number: '01', title: 'Gap Analysis', desc: 'Identifying missing controls and risks.' },
      { number: '02', title: 'Framework', desc: 'Designing the custom compliance architecture.' },
      { number: '03', title: 'Implement', desc: 'Rolling out policies and technical controls.' },
      { number: '04', title: 'Audit', desc: 'Mock audits and continuous monitoring.' }
    ]
  },
  {
    id: 'skill-development',
    title: 'Skill Development',
    subtitle: 'Workforce Future-Proofing',
    shortDescription: 'Future-proof your workforce with corporate training programs, cybersecurity workshops, and leadership development.',
    fullDescription: 'Technology is only as good as the people who use it. Our Skill Development programs are designed to upskill your workforce in cutting-edge domains. From technical deep dives in cybersecurity and coding to leadership workshops for the C-suite, we ensure your team stays ahead of the industry curve.',
    icon: GraduationCap,
    img: 'Services_Images/4.webp',
    color: 'from-yellow-400 to-orange-500',
    features: [
      'Corporate Cybersecurity Awareness Training',
      'Full-Stack Development Bootcamps',
      'Executive Leadership & Soft Skills',
      'Professional Certifications Prep',
      'Custom Learning Management Systems (LMS)'
    ],
    benefits: [
      'Reduce the "Human Error" factor in security breaches.',
      'Increase employee retention and satisfaction.',
      'Build internal capabilities instead of outsourcing.',
      'Foster a culture of continuous innovation.'
    ],
    process: [
      { number: '01', title: 'Assess', desc: 'Evaluating current skill gaps in the team.' },
      { number: '02', title: 'Curate', desc: 'Designing a custom curriculum.' },
      { number: '03', title: 'Train', desc: 'Interactive workshops and hands-on labs.' },
      { number: '04', title: 'Certify', desc: 'Testing and validating acquired skills.' }
    ]
  },
  {
    id: 'web-development',
    title: 'Web Development',
    subtitle: 'High-Impact Digital Platforms',
    shortDescription: 'We create corporate enterprise websites, SaaS platforms, and secure scalable architectures driven by performance.',
    fullDescription: 'Your website is your global headquarters. We engineer high-performance, visually stunning, and secure web platforms using the latest technologies (React, Next.js, Node.js). Beyond aesthetics, we focus on technical SEO, load speeds, and conversion optimization to turn your web presence into a revenue-generating engine.',
    icon: Monitor,
    img: 'Services_Images/5.webp',
    color: 'from-cyan-400 to-blue-500',
    features: [
      'Enterprise Web Application Development',
      'SaaS (Software as a Service) Platforms',
      'Progressive Web Apps (PWA)',
      'Headless CMS Solutions',
      'Technical SEO & Performance Optimization'
    ],
    benefits: [
      'Blazing fast load times for better retention.',
      'SEO-ready architecture for higher organic traffic.',
      'Scalable backend that grows with your user base.',
      'Bank-grade security integration from day one.'
    ],
    process: [
      { number: '01', title: 'UX/UI', desc: 'Wireframing and high-fidelity prototyping.' },
      { number: '02', title: 'Dev', desc: 'Agile development with clean, modular code.' },
      { number: '03', title: 'Test', desc: 'Rigorous QA for bugs, security, and speed.' },
      { number: '04', title: 'Deploy', desc: 'CI/CD pipeline for smooth production launch.' }
    ]
  },
  {
    id: 'app-development',
    title: 'App Development',
    subtitle: 'Mobile & Cloud Ecosystems',
    shortDescription: 'Secure, scalable applications for mobile and desktop including iOS, Android, and cloud-connected systems.',
    fullDescription: 'In a mobile-first world, your application needs to be flawless. We build native and cross-platform mobile apps (iOS/Android) that offer intuitive user experiences backed by powerful cloud infrastructure. Our apps are built for scale, capable of handling millions of users while maintaining high performance and security.',
    icon: Smartphone,
    img: 'Services_Images/6.webp',
    color: 'from-purple-500 to-pink-500',
    features: [
      'Native iOS & Android Development',
      'Cross-Platform Solutions (Flutter/React Native)',
      'Cloud-Connected Enterprise Apps',
      'IoT (Internet of Things) Mobile Integration',
      'App Store Optimization (ASO) & Maintenance'
    ],
    benefits: [
      'Reach customers directly on their personal devices.',
      'Seamless synchronization with cloud data.',
      'Offline capabilities for field operations.',
      'Push notifications for higher engagement.'
    ],
    process: [
      { number: '01', title: 'Prototype', desc: 'Interactive mockups to validate flow.' },
      { number: '02', title: 'Build', desc: 'Frontend and backend parallel development.' },
      { number: '03', title: 'Beta', desc: 'User testing with a closed group.' },
      { number: '04', title: 'Launch', desc: 'Store submission and post-launch support.' }
    ]
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    subtitle: 'Technology Leadership',
    shortDescription: 'Guide your cloud infrastructure, IT modernization, and cyber-resilient systems with expert technology leadership.',
    fullDescription: 'Technology decisions made today define your company’s success for the next decade. Our IT consulting services provide you with fractional CTO/CIO expertise to make smart, cost-effective infrastructure decisions. We help you migrate to the cloud, modernize legacy systems, and select the right tech stack for your specific business needs.',
    icon: Server,
    img: 'Services_Images/7.webp',
    color: 'from-slate-400 to-slate-600',
    features: [
      'Cloud Migration Strategy (AWS/Azure/GCP)',
      'Legacy System Modernization',
      'Infrastructure as Code (IaC)',
      'IT Cost Optimization & Licensing',
      'Disaster Recovery Planning'
    ],
    benefits: [
      'Reduce IT infrastructure costs significantly.',
      'Improve system uptime to 99.99%.',
      'Future-proof your technology stack.',
      'Ensure data redundancy and business continuity.'
    ],
    process: [
      { number: '01', title: 'Assessment', desc: 'Reviewing current IT landscape and costs.' },
      { number: '02', title: 'Roadmap', desc: 'Planning the modernization journey.' },
      { number: '03', title: 'Migration', desc: 'Phased transition with zero data loss.' },
      { number: '04', title: 'Manage', desc: 'Ongoing optimization and support.' }
    ]
  },
  {
    id: 'technology-training',
    title: 'Technology Training',
    subtitle: 'Hans-on Digital Mastery',
    shortDescription: 'Hands-on learning for modern digital teams including cybersecurity, software workshops, and certification programs.',
    fullDescription: 'Theory is not enough. Our Technology Training division focuses on hands-on labs and real-world scenario simulations. Whether it is training your dev team on the latest framework or teaching your admin staff how to detect phishing attempts, we provide immersive educational experiences.',
    icon: BookOpen,
    img: 'Services_Images/8.webp',
    color: 'from-teal-400 to-teal-600',
    features: [
      'DevOps & Cloud Engineering Workshops',
      'Secure Coding Practices for Developers',
      'Data Science & Analytics Training',
      'Enterprise Software user training',
      'Industry Certification Bootcamps'
    ],
    benefits: [
      'Increase team productivity and code quality.',
      'Reduce dependency on external contractors.',
      'Keep up with the rapid pace of tech change.',
      'Empower employees with career-growing skills.'
    ],
    process: [
      { number: '01', title: 'Identify', desc: 'Pinprinting specific knowledge gaps.' },
      { number: '02', title: 'Modules', desc: 'Selecting relevant training modules.' },
      { number: '03', title: 'Workshop', desc: 'Intensive hands-on training sessions.' },
      { number: '04', title: 'Evaluate', desc: 'Post-training assessment and feedback.' }
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI Agents & Automation',
    subtitle: 'Intelligent Business Operations',
    shortDescription: 'Intelligent automation that works 24/7, including AI agents for HR, sales, support, and custom AI solutions.',
    fullDescription: 'Unlock the power of Artificial Intelligence to automate repetitive tasks and gain predictive insights. We build custom AI Agents tasked with specific roles—Customer Support, Lead Generation, Data Entry, and more. Our solutions leverage Large Language Models (LLMs) and Machine Learning to create self-running operational systems.',
    icon: Bot,
    img: 'Services_Images/9.webp',
    color: 'from-violet-500 to-purple-600',
    features: [
      'Custom LLM & AI Agent Development',
      'Chatbots & Conversational AI',
      'Robotic Process Automation (RPA)',
      'Predictive Analytics & Forecasting',
      'Automated Content & Report Generation'
    ],
    benefits: [
      'Automate 80% of routine customer queries.',
      'Generate leads and sales 24/7 without human intervention.',
      'Reduce operational overheads drastically.',
      'Make data-backed decisions instantly.'
    ],
    process: [
      { number: '01', title: 'Map', desc: 'Identifying high-impact opportunities for AI.' },
      { number: '02', title: 'Train', desc: 'Fine-tuning models on your proprietary data.' },
      { number: '03', title: 'Integrate', desc: 'Embedding AI agents into your diverse workflows.' },
      { number: '04', title: 'Scale', desc: 'Expanding automation across departments.' }
    ]
  }
];

export const processSteps = [
  { id: 1, title: 'Discover', desc: 'We understand your goals, challenges, and risks.' },
  { id: 2, title: 'Design', desc: 'We craft a strategy and system architecture for your success.' },
  { id: 3, title: 'Implement', desc: 'We build, secure, and deploy your solution.' },
  { id: 4, title: 'Evolve', desc: 'We provide continuous support, optimization, and innovation.' }
];
