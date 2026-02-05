import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  Award,
  BookOpen,
  Laptop,
  Play,
  Star,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Target,
  Shield,
  Bug,
  Cloud,
  MonitorCheck,
  GitBranch,
  Calendar,
  FileText,
  Zap,
  MessageSquare,
} from "lucide-react";
import SectionWrapper from "../components/ui/SectionWrapper";
import Button from "../components/ui/Button";

// Training courses data (same as Training.jsx for consistency)
const trainingCourses = [
  {
    id: "ethical-hacking",
    title: "Ethical Hacking 101",
    shortTitle: "Ethical Hacking",
    icon: Bug,
    color: "from-red-500 to-orange-500",
    accentColor: "red",
    duration: "40+ Hours",
    level: "Beginner to Advanced",
    certification: "CEH Certified",
    rating: 4.9,
    students: "5000+",
    price: "Contact for Pricing",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80",
    description:
      "Hacker101 is a free security class for the web. Learn to hack with free video lessons, guides, and resources. Join thousands of learners in our Discord community.",
    fullDescription:
      "Explore dozens of free capture-the-flag challenges to improve your skills and put them to the test, and watch hundreds of hours of video lessons to learn how to play. In the Hacker101 Community Discord channel, you can meet other students and get help from more experienced hackers. This comprehensive course covers everything from reconnaissance to exploitation, ensuring you understand how hackers think and operate.",
    benefits: [
      "Learn ethical hacking fundamentals from scratch",
      "Capture the Flag (CTF) challenges available 24/7",
      "Get invited to private bug bounty programmes",
      "Join global CTF competitions with cash prizes",
      "Connect with thousands of learners in Discord",
      "Real-world hacking event invitations",
      "Lifetime access to course updates",
      "Certificate upon completion",
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "Introduction to Ethical Hacking",
        topics: [
          "What is Ethical Hacking?",
          "Types of Hackers",
          "Legal Aspects",
        ],
      },
      {
        module: "Module 2",
        title: "Reconnaissance & Footprinting",
        topics: ["Passive Reconnaissance", "Active Reconnaissance", "OSINT"],
      },
      {
        module: "Module 3",
        title: "Scanning & Enumeration",
        topics: ["Network Scanning", "Port Scanning", "Service Enumeration"],
      },
      {
        module: "Module 4",
        title: "System Hacking",
        topics: ["Password Cracking", "Privilege Escalation", "Backdoors"],
      },
      {
        module: "Module 5",
        title: "Malware Analysis",
        topics: ["Types of Malware", "Static Analysis", "Dynamic Analysis"],
      },
      {
        module: "Module 6",
        title: "Web Application Attacks",
        topics: ["SQL Injection", "XSS", "CSRF", "File Inclusion"],
      },
      {
        module: "Module 7",
        title: "Social Engineering",
        topics: ["Phishing", "Pretexting", "Defense Strategies"],
      },
      {
        module: "Module 8",
        title: "Wireless & Cryptography",
        topics: ["WiFi Hacking", "Encryption Basics", "Hash Cracking"],
      },
    ],
    whoShouldAttend: [
      "Security personnel assessing networks and systems",
      "Penetration testers",
      "Ethical hackers",
      "Defenders understanding offensive methodologies",
      "Auditors building technical skills",
      "Red Team and Blue Team members",
      "Forensics specialists",
      "Incident responders",
    ],
    learningMethods: [
      {
        type: "OnDemand",
        description: "3 months online access with labs, exercises, and support",
        icon: Laptop,
        features: [
          "Self-paced learning",
          "Downloadable resources",
          "Hands-on labs",
          "Email support",
        ],
      },
      {
        type: "Live Online",
        description:
          "Live, interactive sessions with instructors over multiple weeks",
        icon: Play,
        features: [
          "Real-time interaction",
          "Q&A sessions",
          "Group exercises",
          "Recording access",
        ],
      },
      {
        type: "In Person",
        description:
          "5-day training events with classroom presentations worldwide",
        icon: Users,
        features: [
          "Face-to-face learning",
          "Networking opportunities",
          "Intensive training",
          "Certificate ceremony",
        ],
      },
    ],
    prerequisites: [
      "Basic understanding of computers and networking",
      "Familiarity with operating systems (Windows/Linux)",
      "Passion for learning cybersecurity",
      "No prior hacking experience required",
    ],
  },
  {
    id: "penetration-testing",
    title: "Penetration Tester 101",
    shortTitle: "Penetration Testing",
    icon: Target,
    color: "from-purple-500 to-pink-500",
    accentColor: "purple",
    duration: "60+ Hours",
    level: "Intermediate to Expert",
    certification: "CPTS Certified",
    rating: 4.8,
    students: "3500+",
    price: "Contact for Pricing",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&q=80",
    description:
      "Learn to do successful penetration testing for modern enterprise, including on-premise systems, Azure, and Azure AD with 30+ hands-on lab exercises.",
    fullDescription:
      "This course will prepare you to do successful penetration testing for a modern enterprise, including on-premise systems, Azure, and Azure AD. You will learn the methods and techniques that real-world penetration testers in large organisations use to find vulnerabilities, exploit them on a large scale, and show your organisation the real business risk they pose. The course material is supplemented by more than 30 hands-on lab exercises.",
    benefits: [
      "Plan and prepare enterprise penetration tests",
      "Thorough reconnaissance for social engineering & phishing",
      "Advanced scanning with best-in-class tools",
      "Safe and effective password guessing techniques",
      "Post-exploitation and privilege escalation",
      "Lateral movement and Command & Control frameworks",
      "Kerberos attacks: Kerberoasting, Golden/Silver Ticket",
      "Azure reconnaissance and attacks",
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "Penetration Testing Fundamentals",
        topics: [
          "Methodology Overview",
          "Scope Definition",
          "Rules of Engagement",
        ],
      },
      {
        module: "Module 2",
        title: "Reconnaissance & Information Gathering",
        topics: ["OSINT Techniques", "DNS Analysis", "Target Mapping"],
      },
      {
        module: "Module 3",
        title: "Network Scanning & Enumeration",
        topics: [
          "Nmap Mastery",
          "Service Fingerprinting",
          "Vulnerability Scanning",
        ],
      },
      {
        module: "Module 4",
        title: "Exploitation Techniques",
        topics: [
          "Metasploit Framework",
          "Custom Exploits",
          "Client-Side Attacks",
        ],
      },
      {
        module: "Module 5",
        title: "Post-Exploitation",
        topics: [
          "Privilege Escalation",
          "Credential Harvesting",
          "Persistence",
        ],
      },
      {
        module: "Module 6",
        title: "Active Directory Attacks",
        topics: ["AD Enumeration", "Kerberoasting", "Pass-the-Hash"],
      },
      {
        module: "Module 7",
        title: "Azure & Cloud Penetration Testing",
        topics: ["Azure AD Attacks", "Cloud Enumeration", "Token Abuse"],
      },
      {
        module: "Module 8",
        title: "Reporting & CTF Challenge",
        topics: [
          "Professional Reporting",
          "Risk Assessment",
          "Final CTF Assessment",
        ],
      },
    ],
    whoShouldAttend: [
      "Aspiring penetration testers",
      "Security consultants",
      "Network administrators",
      "IT security professionals",
      "System administrators",
      "Security analysts",
      "SOC team members",
      "Red Team operators",
    ],
    learningMethods: [
      {
        type: "OnDemand",
        description: "3 months online access with labs, exercises, and support",
        icon: Laptop,
        features: [
          "Self-paced learning",
          "30+ hands-on labs",
          "Downloadable tools",
          "Community access",
        ],
      },
      {
        type: "Live Online",
        description:
          "Live, interactive sessions with instructors over multiple weeks",
        icon: Play,
        features: [
          "Expert-led sessions",
          "Live demonstrations",
          "Breakout rooms",
          "1-on-1 mentoring",
        ],
      },
      {
        type: "In Person",
        description:
          "5-day training events with classroom presentations worldwide",
        icon: Users,
        features: [
          "Immersive experience",
          "Real equipment labs",
          "Team exercises",
          "Industry networking",
        ],
      },
    ],
    prerequisites: [
      "Basic networking knowledge (TCP/IP, DNS, HTTP)",
      "Familiarity with Linux command line",
      "Understanding of basic security concepts",
      "Some programming experience helpful",
    ],
  },
  {
    id: "cloud-security",
    title: "Cloud Security 101",
    shortTitle: "Cloud Security",
    icon: Cloud,
    color: "from-cyan-500 to-blue-500",
    accentColor: "cyan",
    duration: "50+ Hours",
    level: "Intermediate",
    certification: "CCSP Certified",
    rating: 4.9,
    students: "4200+",
    price: "Contact for Pricing",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    description:
      "Be4Breach's CCSP certification course teaches how to protect information, cyber, software, and cloud computing infrastructure.",
    fullDescription:
      "In the world of the cloud, which is always changing and has a lot of competition, there are new security challenges almost every day, like new threats to sensitive data or an internal team that isn't as well-equipped. The main goal of the Certified Cloud Security Professional course is to explain cloud computing concepts, cloud reference architecture, cloud computing security concepts, and cloud services. A CCSP certification lets you show yourself and your employers that you know a lot about cloud security architecture, design, operations, and service orchestration.",
    benefits: [
      "Demonstrate cloud security expertise to employers",
      "Gain immediate credibility and recognition",
      "Fill knowledge gaps and advance your career",
      "Protect sensitive data in global environments",
      "Understand cloud reference architecture",
      "Master cloud computing security concepts",
      "Multi-cloud security strategies",
      "Compliance and governance expertise",
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "Cloud Computing Fundamentals",
        topics: ["Cloud Models", "Service Types", "Deployment Strategies"],
      },
      {
        module: "Module 2",
        title: "Cloud Architecture & Design",
        topics: [
          "Reference Architecture",
          "Security Controls",
          "Best Practices",
        ],
      },
      {
        module: "Module 3",
        title: "Cloud Data Security",
        topics: ["Data Classification", "Encryption", "Key Management"],
      },
      {
        module: "Module 4",
        title: "Platform & Infrastructure Security",
        topics: [
          "Virtualization Security",
          "Container Security",
          "Network Security",
        ],
      },
      {
        module: "Module 5",
        title: "Cloud Application Security",
        topics: ["Secure SDLC", "API Security", "Identity Management"],
      },
      {
        module: "Module 6",
        title: "Cloud Security Operations",
        topics: ["Monitoring", "Incident Response", "Disaster Recovery"],
      },
      {
        module: "Module 7",
        title: "AWS, Azure & GCP Security",
        topics: ["AWS Security", "Azure Security", "GCP Security"],
      },
      {
        module: "Module 8",
        title: "Legal, Risk & Compliance",
        topics: [
          "Regulatory Frameworks",
          "Risk Assessment",
          "Audit Preparation",
        ],
      },
    ],
    whoShouldAttend: [
      "Cloud architects",
      "Security engineers",
      "IT security managers",
      "Cloud administrators",
      "DevOps engineers",
      "Compliance officers",
      "Risk managers",
      "System integrators",
    ],
    learningMethods: [
      {
        type: "OnDemand",
        description: "3 months online access with labs, exercises, and support",
        icon: Laptop,
        features: [
          "Cloud lab environments",
          "Multi-cloud access",
          "Practice exams",
          "Study guides",
        ],
      },
      {
        type: "Live Online",
        description:
          "Live, interactive sessions with instructors over multiple weeks",
        icon: Play,
        features: [
          "Cloud architects as instructors",
          "Real scenario workshops",
          "Certification prep",
          "Office hours",
        ],
      },
      {
        type: "In Person",
        description:
          "5-day training events with classroom presentations worldwide",
        icon: Users,
        features: [
          "Hands-on cloud labs",
          "Enterprise case studies",
          "Peer collaboration",
          "Exam voucher included",
        ],
      },
    ],
    prerequisites: [
      "Basic understanding of cloud computing",
      "Some IT or security experience",
      "Familiarity with at least one cloud platform",
      "Basic networking knowledge",
    ],
  },
  {
    id: "red-teaming",
    title: "Red Teaming 101",
    shortTitle: "Red Teaming",
    icon: Shield,
    color: "from-red-600 to-red-800",
    accentColor: "red",
    duration: "70+ Hours",
    level: "Advanced",
    certification: "CRTO Certified",
    rating: 4.9,
    students: "2800+",
    price: "Contact for Pricing",
    image:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    description:
      "Learn to simulate attacks from potential adversaries in complex environments. Go beyond penetration testing to run successful Red Team engagements.",
    fullDescription:
      "The goal of this path is to teach you how to simulate an attack from a possible adversary in a complex environment. You will learn how to do more than just penetration testing. You will learn how to run successful Red Team engagements and test your clients' ability to defend themselves. After you finish this path, you'll have the advanced skills you need to start a new career in offensive security. Our Red Team Training course has a lot of hands-on sessions designed to create an environment for learning and application so that we can build a strong process for learning new skills.",
    benefits: [
      "Hands-on learning with certified cybersecurity experts",
      "Learn IT abuse and offensive hacking techniques",
      "Create dynamic attack environments",
      "Master Golden Ticket and ACLs abuse",
      "Plan and execute attacks on IT systems",
      "Penetrate sensitive applications",
      "Advanced evasion techniques",
      "Real-world adversary simulation",
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "Red Team Operations Fundamentals",
        topics: [
          "Red Team vs Pen Test",
          "Threat Modeling",
          "Engagement Planning",
        ],
      },
      {
        module: "Module 2",
        title: "Advanced Reconnaissance",
        topics: [
          "Target Intelligence",
          "Social Engineering",
          "Physical Security",
        ],
      },
      {
        module: "Module 3",
        title: "Initial Access",
        topics: [
          "Phishing Campaigns",
          "Payload Development",
          "Exploit Delivery",
        ],
      },
      {
        module: "Module 4",
        title: "Command & Control",
        topics: ["C2 Frameworks", "Covert Channels", "Infrastructure Setup"],
      },
      {
        module: "Module 5",
        title: "Active Directory Attacks",
        topics: ["Domain Dominance", "Kerberos Abuse", "Trust Exploitation"],
      },
      {
        module: "Module 6",
        title: "Defense Evasion",
        topics: ["AV/EDR Bypass", "AMSI Bypass", "Living off the Land"],
      },
      {
        module: "Module 7",
        title: "Data Exfiltration",
        topics: ["Covert Exfil", "Staging Data", "Detection Avoidance"],
      },
      {
        module: "Module 8",
        title: "Reporting & Purple Teaming",
        topics: [
          "Attack Documentation",
          "Blue Team Collaboration",
          "Remediation Guidance",
        ],
      },
    ],
    whoShouldAttend: [
      "Experienced penetration testers",
      "Security consultants",
      "Threat hunters",
      "Security researchers",
      "Offensive security specialists",
      "Blue team members seeking red team skills",
      "SOC analysts",
      "Incident response teams",
    ],
    learningMethods: [
      {
        type: "OnDemand",
        description: "3 months online access with labs, exercises, and support",
        icon: Laptop,
        features: [
          "Advanced lab environments",
          "C2 framework access",
          "Malware development",
          "Private forums",
        ],
      },
      {
        type: "Live Online",
        description:
          "Live, interactive sessions with instructors over multiple weeks",
        icon: Play,
        features: [
          "Real red teamers as instructors",
          "Live attack simulations",
          "Tool development",
          "Career guidance",
        ],
      },
      {
        type: "In Person",
        description:
          "5-day training events with classroom presentations worldwide",
        icon: Users,
        features: [
          "Physical security testing",
          "Team-based operations",
          "Advanced tradecraft",
          "Exclusive community",
        ],
      },
    ],
    prerequisites: [
      "Prior penetration testing experience",
      "Strong networking fundamentals",
      "Active Directory knowledge",
      "Programming/scripting skills",
    ],
  },
  {
    id: "soc-practitioner",
    title: "SOC Practitioner 101",
    shortTitle: "SOC Practitioner",
    icon: MonitorCheck,
    color: "from-emerald-500 to-teal-500",
    accentColor: "emerald",
    duration: "45+ Hours",
    level: "Beginner to Intermediate",
    certification: "CSA Certified",
    rating: 4.8,
    students: "4500+",
    price: "Contact for Pricing",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=80",
    description:
      "The SOC Analyst programme is designed for current and future Tier I and Tier II SOC analysts who want to learn basic and intermediate tasks effectively.",
    fullDescription:
      "SOC Analyst is a training and certification programme that helps candidates learn technical skills that are in demand and on trend. Some of the most experienced trainers in the industry teach the programme. The program's main goal is to give people new job opportunities by giving them detailed, in-depth knowledge and the skills they need to make a dynamic contribution to a SOC team. It is a 3-day programme that goes over the basics of SOC operations in detail before moving on to log management and correlation, SIEM deployment, advanced incident detection, and incident response.",
    benefits: [
      "Learn from experienced industry trainers",
      "Master SOC operations fundamentals",
      "Advanced incident detection skills",
      "Log management and correlation",
      "SIEM deployment expertise",
      "Work effectively with CSIRT",
      "Threat hunting capabilities",
      "Career advancement opportunities",
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "SOC Operations Overview",
        topics: [
          "SOC Structure",
          "Roles & Responsibilities",
          "Shift Management",
        ],
      },
      {
        module: "Module 2",
        title: "Security Information & Event Management",
        topics: ["SIEM Architecture", "Log Sources", "Correlation Rules"],
      },
      {
        module: "Module 3",
        title: "Log Collection & Analysis",
        topics: ["Log Types", "Parsing Techniques", "Pattern Recognition"],
      },
      {
        module: "Module 4",
        title: "Threat Intelligence",
        topics: ["TI Sources", "IOC Management", "Threat Feeds"],
      },
      {
        module: "Module 5",
        title: "Incident Detection & Triage",
        topics: ["Alert Analysis", "False Positive Reduction", "Escalation"],
      },
      {
        module: "Module 6",
        title: "Incident Response",
        topics: ["IR Playbooks", "Containment", "Eradication", "Recovery"],
      },
      {
        module: "Module 7",
        title: "Malware Analysis Basics",
        topics: ["Malware Types", "Basic Analysis", "Sandbox Usage"],
      },
      {
        module: "Module 8",
        title: "SOC Metrics & Reporting",
        topics: ["KPIs & Metrics", "Dashboards", "Management Reporting"],
      },
    ],
    whoShouldAttend: [
      "Aspiring SOC analysts",
      "Tier I SOC analysts",
      "Tier II SOC analysts",
      "IT security professionals",
      "Network administrators",
      "System administrators",
      "Help desk technicians",
      "Career changers into cybersecurity",
    ],
    learningMethods: [
      {
        type: "OnDemand",
        description: "3 months online access with labs, exercises, and support",
        icon: Laptop,
        features: [
          "SIEM lab environment",
          "Real log analysis",
          "Practice alerts",
          "Study materials",
        ],
      },
      {
        type: "Live Online",
        description:
          "Live, interactive sessions with instructors over multiple weeks",
        icon: Play,
        features: [
          "SOC veterans as instructors",
          "Live incident simulations",
          "Role-based training",
          "Interview prep",
        ],
      },
      {
        type: "In Person",
        description:
          "5-day training events with classroom presentations worldwide",
        icon: Users,
        features: [
          "Mock SOC environment",
          "Team rotations",
          "Real-world scenarios",
          "Job placement support",
        ],
      },
    ],
    prerequisites: [
      "Basic IT knowledge",
      "Understanding of networking fundamentals",
      "Interest in security operations",
      "No prior SOC experience required",
    ],
  },
  {
    id: "devsecops",
    title: "DevSecOps 101",
    shortTitle: "DevSecOps",
    icon: GitBranch,
    color: "from-amber-500 to-yellow-500",
    accentColor: "amber",
    duration: "55+ Hours",
    level: "Intermediate",
    certification: "CDSO Certified",
    rating: 4.9,
    students: "3800+",
    price: "Contact for Pricing",
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80",
    description:
      "In every part of the DevOps software lifecycle, DevSecOps promotes security. From development all the way to operations, security is everyone's job.",
    fullDescription:
      "In this day and age of data breaches and hacks, security has never been more important. This is especially true if you are building and deploying your own online enterprise applications quickly. Enter DevSecOps! This Learning Path has everything you need to know about DevSecOps in one place. When it comes to managing, maintaining, and automating security, you'll need the right security tools for the right jobs, ones that make sure your enterprise applications stay safe. In every part of the DevOps software lifecycle, DevSecOps promotes security.",
    benefits: [
      "Understand DevSecOps process and mantra",
      "Learn when and how to use security tools",
      "Integrate security into CI/CD pipelines",
      "Automate security testing",
      "Shift-left security practices",
      "Container and infrastructure security",
      "Compliance automation",
      "Security culture building",
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "Introduction to DevSecOps",
        topics: [
          "DevSecOps Culture",
          "Shift-Left Security",
          "Toolchain Overview",
        ],
      },
      {
        module: "Module 2",
        title: "Security in CI/CD Pipelines",
        topics: ["Pipeline Security", "Jenkins/GitLab CI", "Security Gates"],
      },
      {
        module: "Module 3",
        title: "Static Application Security Testing",
        topics: ["SAST Tools", "Code Analysis", "False Positive Management"],
      },
      {
        module: "Module 4",
        title: "Dynamic Application Security Testing",
        topics: ["DAST Tools", "API Testing", "Authenticated Scanning"],
      },
      {
        module: "Module 5",
        title: "Software Composition Analysis",
        topics: ["Dependency Scanning", "License Compliance", "SBOM"],
      },
      {
        module: "Module 6",
        title: "Container Security",
        topics: ["Image Scanning", "Runtime Security", "Kubernetes Security"],
      },
      {
        module: "Module 7",
        title: "Infrastructure as Code Security",
        topics: [
          "Terraform Security",
          "Cloud Misconfigurations",
          "Policy as Code",
        ],
      },
      {
        module: "Module 8",
        title: "Secrets Management & Compliance",
        topics: [
          "Vault/Secret Managers",
          "Compliance as Code",
          "Audit Automation",
        ],
      },
    ],
    whoShouldAttend: [
      "DevOps engineers",
      "Software developers",
      "Security engineers",
      "Platform engineers",
      "Site reliability engineers (SREs)",
      "Cloud engineers",
      "QA engineers interested in security",
      "IT managers overseeing DevOps teams",
    ],
    learningMethods: [
      {
        type: "OnDemand",
        description: "3 months online access with labs, exercises, and support",
        icon: Laptop,
        features: [
          "CI/CD lab environments",
          "Tool integrations",
          "Pipeline templates",
          "Best practices docs",
        ],
      },
      {
        type: "Live Online",
        description:
          "Live, interactive sessions with instructors over multiple weeks",
        icon: Play,
        features: [
          "DevSecOps practitioners",
          "Pipeline building workshops",
          "Tool comparisons",
          "Architecture reviews",
        ],
      },
      {
        type: "In Person",
        description:
          "5-day training events with classroom presentations worldwide",
        icon: Users,
        features: [
          "End-to-end pipeline building",
          "Team workshops",
          "Vendor sessions",
          "Certification included",
        ],
      },
    ],
    prerequisites: [
      "Experience with CI/CD tools",
      "Basic programming/scripting knowledge",
      "Understanding of DevOps principles",
      "Some security awareness helpful",
    ],
  },
];

// Curriculum Accordion Component
const CurriculumItem = ({ module, isOpen, onClick }) => (
  <Motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="border border-white/10 rounded-xl overflow-hidden hover:border-primary-500/30 transition-colors"
  >
    <button
      onClick={onClick}
      className="w-full px-6 py-4 flex items-center justify-between text-left bg-gradient-to-r from-white/5 to-transparent hover:from-white/10 transition-all"
    >
      <div className="flex items-center gap-4">
        <span className="text-xs font-mono text-primary-500 bg-primary-500/10 px-2 py-1 rounded">
          {module.module}
        </span>
        <span className="text-white font-medium">{module.title}</span>
      </div>
      {isOpen ? (
        <ChevronUp className="text-primary-500 shrink-0" size={20} />
      ) : (
        <ChevronDown className="text-slate-400 shrink-0" size={20} />
      )}
    </button>
    <AnimatePresence>
      {isOpen && (
        <Motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-6 pb-4">
            <ul className="space-y-2">
              {module.topics.map((topic, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-slate-400 text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary-500 shrink-0" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </Motion.div>
      )}
    </AnimatePresence>
  </Motion.div>
);

const TrainingDetail = () => {
  const { id } = useParams();
  const [openModule, setOpenModule] = useState(0);
  const course = trainingCourses.find((c) => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Course Not Found</h2>
        <Button to="/training" variant="primary">
          Return to Training
        </Button>
      </div>
    );
  }

  // Find related courses (excluding current)
  const relatedCourses = trainingCourses.filter((c) => c.id !== id).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-b from-navy-900/50 to-navy-950">
        {/* Ambient Background */}
        <div
          className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b ${course.color} opacity-10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none`}
        />
        <div
          className={`absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t ${course.color} opacity-5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none`}
        />

        {/* Grid Pattern */}
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
          {/* Breadcrumb */}
          <Link
            to="/training"
            className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft
              size={16}
              className="mr-2 group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-sm font-medium">Back to Training</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Content - 7 cols */}
            <Motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              {/* Course Identity */}
              <div className="flex items-start gap-5 mb-6">
                <div
                  className={`shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${course.color} p-[1px] shadow-2xl`}
                >
                  <div className="w-full h-full bg-navy-950/90 backdrop-blur-sm rounded-[15px] flex items-center justify-center">
                    <course.icon className="text-white" size={36} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                      Available Now
                    </span>
                    <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-full">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-xs text-white font-medium">
                        {course.rating}
                      </span>
                    </div>
                  </div>
                  <h1 className="text-3xl md:text-4xl xl:text-5xl font-display font-bold text-white mb-2 leading-tight">
                    {course.title}
                  </h1>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-6">
                <p className="text-lg text-slate-300 leading-relaxed">
                  {course.fullDescription}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gradient-to-br from-navy-800/50 to-navy-900/50 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-slate-500 mb-1">
                    <Clock size={14} />
                    <span className="text-xs font-mono uppercase">
                      Duration
                    </span>
                  </div>
                  <div className="text-xl font-bold text-white">
                    {course.duration}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-navy-800/50 to-navy-900/50 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-slate-500 mb-1">
                    <TrendingUp size={14} />
                    <span className="text-xs font-mono uppercase">Level</span>
                  </div>
                  <div className="text-xl font-bold text-white">
                    {course.level.split(" ")[0]}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-navy-800/50 to-navy-900/50 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-slate-500 mb-1">
                    <Users size={14} />
                    <span className="text-xs font-mono uppercase">
                      Students
                    </span>
                  </div>
                  <div className="text-xl font-bold text-white">
                    {course.students}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-navy-800/50 to-navy-900/50 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-slate-500 mb-1">
                    <Award size={14} />
                    <span className="text-xs font-mono uppercase">
                      Certification
                    </span>
                  </div>
                  <div className="text-xl font-bold text-white">
                    {course.certification.split(" ")[0]}
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Button
                  to="/contact"
                  variant="primary"
                  className="shadow-lg shadow-primary-500/20"
                >
                  Enquire Now <ArrowRight size={18} className="ml-2" />
                </Button>
                <Button to="/contact" variant="secondary">
                  <MessageSquare size={18} className="mr-2" /> Talk to Advisor
                </Button>
              </div>
            </Motion.div>

            {/* Right Sidebar - 5 cols */}
            <Motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="sticky top-24 space-y-6">
                {/* Hero Image Card */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <div
                    className={`absolute -inset-2 bg-gradient-to-br ${course.color} opacity-20 rounded-2xl blur-2xl`}
                  />
                  <div className="relative">
                    <img
                      src={course.heroImage}
                      alt={course.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-20 mix-blend-overlay`}
                    />

                    {/* Floating Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 bg-primary-500/10 backdrop-blur-xl border border-primary-500/20 rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-primary-400/80 mb-1">
                            Enterprise-Grade Training
                          </div>
                          <div className="text-primary-300 font-bold">
                            {course.shortTitle}
                          </div>
                        </div>
                        <div
                          className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${course.color} text-white text-xs font-semibold`}
                        >
                          {course.level.split(" ")[0]}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enrollment Card */}
                <div className="relative bg-gradient-to-br from-primary-900/40 to-navy-900/60 border border-primary-500/30 rounded-2xl p-6 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-transparent" />
                  <Motion.div
                    className="absolute -top-12 -right-12 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl"
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
                    <h3 className="text-xl font-bold text-white mb-4">
                      Training Includes
                    </h3>
                    <ul className="space-y-3 mb-6">
                      {[
                        {
                          icon: BookOpen,
                          text: `${course.duration} of content`,
                        },
                        { icon: Laptop, text: "Hands-on labs & exercises" },
                        { icon: FileText, text: "Downloadable resources" },
                        { icon: Award, text: `${course.certification}` },
                        { icon: Users, text: "Community access" },
                        { icon: Zap, text: "Lifetime updates" },
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-slate-300 text-sm"
                        >
                          <item.icon className="w-4 h-4 text-primary-500 shrink-0" />
                          {item.text}
                        </li>
                      ))}
                    </ul>

                    <Button
                      to="/contact"
                      variant="primary"
                      className="w-full justify-center shadow-lg shadow-primary-500/20"
                    >
                      Enquire Now <ArrowRight size={18} className="ml-2" />
                    </Button>

                    <p className="text-center text-xs text-slate-400 mt-4">
                      Contact us for customised training and enterprise
                      solutions
                    </p>
                  </div>
                </div>

                {/* Learning Methods */}
                <div className="bg-gradient-to-br from-navy-800/50 to-navy-900/50 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary-500" />
                    Learning Options
                  </h3>
                  <div className="space-y-4">
                    {course.learningMethods.map((method, i) => (
                      <div
                        key={i}
                        className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <method.icon className="w-5 h-5 text-primary-500" />
                          <span className="font-bold text-white">
                            {method.type}
                          </span>
                        </div>
                        <p className="text-sm text-slate-400 mb-3">
                          {method.description}
                        </p>
                        <ul className="grid grid-cols-2 gap-2">
                          {method.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-1 text-xs text-slate-400"
                            >
                              <CheckCircle2 className="w-3 h-3 text-primary-500 shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <SectionWrapper background="dark" className="border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - 8 cols */}
          <div className="lg:col-span-8 space-y-12">
            {/* What You'll Learn */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-transparent rounded-full" />
                <h3 className="text-3xl font-bold text-white">
                  What You'll Learn
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.benefits.map((benefit, i) => (
                  <Motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group relative flex items-start space-x-3 p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-primary-500/30 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                    <div className="relative z-10 flex items-start space-x-3 w-full">
                      <div className="shrink-0 p-1.5 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                        <CheckCircle2 className="text-primary-400" size={16} />
                      </div>
                      <span className="text-slate-300 text-sm flex-1">
                        {benefit}
                      </span>
                    </div>
                  </Motion.div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-transparent rounded-full" />
                <h3 className="text-3xl font-bold text-white">
                  Course Curriculum
                </h3>
              </div>
              <div className="space-y-3">
                {course.curriculum.map((module, index) => (
                  <CurriculumItem
                    key={index}
                    module={module}
                    isOpen={openModule === index}
                    onClick={() =>
                      setOpenModule(openModule === index ? -1 : index)
                    }
                  />
                ))}
              </div>
            </div>

            {/* Prerequisites */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-transparent rounded-full" />
                <h3 className="text-3xl font-bold text-white">Prerequisites</h3>
              </div>
              <div className="bg-gradient-to-br from-navy-800/30 to-navy-900/30 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <ul className="space-y-3">
                  {course.prerequisites.map((prereq, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-300"
                    >
                      <div className="shrink-0 w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center mt-0.5">
                        <span className="text-xs text-primary-500 font-bold">
                          {i + 1}
                        </span>
                      </div>
                      {prereq}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - 4 cols */}
          <div className="lg:col-span-4 space-y-8">
            {/* Who Should Attend */}
            <div className="sticky top-24">
              <div className="bg-gradient-to-br from-navy-800/50 to-navy-900/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-6 text-white flex items-center">
                  <span className="w-2 h-8 bg-primary-500 mr-3 rounded-full"></span>
                  Who Should Attend
                </h3>
                <ul className="space-y-3">
                  {course.whoShouldAttend.map((person, i) => (
                    <Motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 text-slate-300 text-sm"
                    >
                      <GraduationCap className="w-4 h-4 text-primary-500 shrink-0" />
                      {person}
                    </Motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Related Courses */}
      <SectionWrapper background="transparent">
        <div className="text-center mb-12">
          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
          >
            Related <span className="text-gradient-primary">Courses</span>
          </Motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedCourses.map((relatedCourse, index) => (
            <Motion.div
              key={relatedCourse.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${relatedCourse.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}
              />
              <div className="relative h-full bg-gradient-to-br from-navy-800/80 to-navy-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-2 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${relatedCourse.color} p-[1px]`}
                  >
                    <div className="w-full h-full bg-navy-950/90 rounded-[11px] flex items-center justify-center">
                      <relatedCourse.icon className="text-white" size={20} />
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs text-white font-medium">
                      {relatedCourse.rating}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {relatedCourse.shortTitle}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-grow">
                  {relatedCourse.description}
                </p>

                <Link
                  to={`/training/${relatedCourse.id}`}
                  className="w-full mt-auto py-2.5 rounded-xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 text-white text-sm font-medium text-center hover:border-primary-500/50 hover:bg-primary-500/10 transition-all flex items-center justify-center gap-2 group/btn"
                >
                  View Course
                  <ArrowRight
                    size={14}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </Motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Bottom CTA */}
      <SectionWrapper background="dark">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Interested in {course.shortTitle}?
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            We've trained {course.students} professionals in this programme. Get
            in touch to learn more about our training solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className="shadow-lg shadow-primary-500/20"
            >
              Enquire About {course.shortTitle}{" "}
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button to="/training" variant="secondary" size="lg">
              View All Training Programmes
            </Button>
          </div>
        </Motion.div>
      </SectionWrapper>
    </div>
  );
};

export default TrainingDetail;
