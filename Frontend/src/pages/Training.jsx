import React, { useEffect, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Shield,
  Bug,
  Cloud,
  Target,
  MonitorCheck,
  GitBranch,
  ArrowRight,
  Clock,
  Users,
  Award,
  CheckCircle2,
  BookOpen,
  Laptop,
  Calendar,
  ChevronDown,
  ChevronUp,
  Play,
  Zap,
  GraduationCap,
  Star,
} from "lucide-react";
import SectionWrapper from "../components/ui/SectionWrapper";
import Button from "../components/ui/Button";

// Training courses data based on be4breach.com reference
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
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80",
    description:
      "Hacker101 is a free security class for the web. Learn to hack with free video lessons, guides, and resources. Join thousands of learners in our Discord community.",
    fullDescription:
      "Explore dozens of free capture-the-flag challenges to improve your skills and put them to the test, and watch hundreds of hours of video lessons to learn how to play. In the Hacker101 Community Discord channel, you can meet other students and get help from more experienced hackers.",
    benefits: [
      "Learn ethical hacking fundamentals from scratch",
      "Capture the Flag (CTF) challenges available 24/7",
      "Get invited to private bug bounty programmes",
      "Join global CTF competitions with cash prizes",
      "Connect with thousands of learners in Discord",
      "Real-world hacking event invitations",
    ],
    curriculum: [
      "Introduction to Ethical Hacking",
      "Reconnaissance & Footprinting",
      "Scanning & Enumeration",
      "System Hacking & Password Cracking",
      "Malware Analysis",
      "SQL Injection & Web Application Attacks",
      "Social Engineering Techniques",
      "Wireless Network Hacking",
      "Session Hijacking",
      "Cryptography Fundamentals",
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
      },
      {
        type: "Live Online",
        description:
          "Live, interactive sessions with instructors over multiple weeks",
        icon: Play,
      },
      {
        type: "In Person",
        description:
          "5-day training events with classroom presentations worldwide",
        icon: Users,
      },
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
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&q=80",
    description:
      "Learn to do successful penetration testing for modern enterprise, including on-premise systems, Azure, and Azure AD with 30+ hands-on lab exercises.",
    fullDescription:
      "This course will prepare you to do successful penetration testing for a modern enterprise, including on-premise systems, Azure, and Azure AD. You will learn the methods and techniques that real-world penetration testers in large organisations use to find vulnerabilities, exploit them on a large scale, and show your organisation the real business risk they pose.",
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
      "Penetration Testing Fundamentals",
      "Reconnaissance & Information Gathering",
      "Network Scanning & Enumeration",
      "Vulnerability Assessment",
      "Exploitation Techniques",
      "Post-Exploitation & Privilege Escalation",
      "Lateral Movement & Pivoting",
      "Password Cracking & Credential Theft",
      "Azure AD & Cloud Penetration Testing",
      "CTF Final Assessment",
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
      },
      {
        type: "Live Online",
        description:
          "Live, interactive sessions with instructors over multiple weeks",
        icon: Play,
      },
      {
        type: "In Person",
        description:
          "5-day training events with classroom presentations worldwide",
        icon: Users,
      },
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
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    description:
      "Be4Breach's CCSP certification course teaches how to protect information, cyber, software, and cloud computing infrastructure.",
    fullDescription:
      "In the world of the cloud, which is always changing and has a lot of competition, there are new security challenges almost every day, like new threats to sensitive data or an internal team that isn't as well-equipped. The main goal of the Certified Cloud Security Professional course is to explain cloud computing concepts, cloud reference architecture, cloud computing security concepts, and cloud services.",
    benefits: [
      "Demonstrate cloud security expertise to employers",
      "Gain immediate credibility and recognition",
      "Fill knowledge gaps and advance your career",
      "Protect sensitive data in global environments",
      "Understand cloud reference architecture",
      "Master cloud computing security concepts",
    ],
    curriculum: [
      "Cloud Computing Fundamentals",
      "Cloud Architecture & Design",
      "Cloud Data Security",
      "Cloud Platform & Infrastructure Security",
      "Cloud Application Security",
      "Cloud Security Operations",
      "Legal, Risk & Compliance",
      "AWS, Azure & GCP Security",
      "Container & Kubernetes Security",
      "Cloud Incident Response",
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
      },
      {
        type: "Live Online",
        description:
          "Live, interactive sessions with instructors over multiple weeks",
        icon: Play,
      },
      {
        type: "In Person",
        description:
          "5-day training events with classroom presentations worldwide",
        icon: Users,
      },
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
    image:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    description:
      "Learn to simulate attacks from potential adversaries in complex environments. Go beyond penetration testing to run successful Red Team engagements.",
    fullDescription:
      "The goal of this path is to teach you how to simulate an attack from a possible adversary in a complex environment. You will learn how to do more than just penetration testing. You will learn how to run successful Red Team engagements and test your clients' ability to defend themselves. After you finish this path, you'll have the advanced skills you need to start a new career in offensive security.",
    benefits: [
      "Hands-on learning with certified cybersecurity experts",
      "Learn IT abuse and offensive hacking techniques",
      "Create dynamic attack environments",
      "Master Golden Ticket and ACLs abuse",
      "Plan and execute attacks on IT systems",
      "Penetrate sensitive applications",
    ],
    curriculum: [
      "Red Team Operations Fundamentals",
      "Advanced Reconnaissance Techniques",
      "Initial Access & Phishing Campaigns",
      "Command & Control (C2) Infrastructure",
      "Active Directory Attacks",
      "Privilege Escalation Mastery",
      "Defense Evasion Techniques",
      "Data Exfiltration Methods",
      "Purple Team Collaboration",
      "Red Team Reporting & Debrief",
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
      },
      {
        type: "Live Online",
        description:
          "Live, interactive sessions with instructors over multiple weeks",
        icon: Play,
      },
      {
        type: "In Person",
        description:
          "5-day training events with classroom presentations worldwide",
        icon: Users,
      },
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
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=80",
    description:
      "The SOC Analyst programme is designed for current and future Tier I and Tier II SOC analysts who want to learn basic and intermediate tasks effectively.",
    fullDescription:
      "SOC Analyst is a training and certification programme that helps candidates learn technical skills that are in demand and on trend. It is a 3-day programme that goes over the basics of SOC operations in detail before moving on to log management and correlation, SIEM deployment, advanced incident detection, and incident response. The candidate will also learn how to handle different SOC processes and work with CSIRT when necessary.",
    benefits: [
      "Learn from experienced industry trainers",
      "Master SOC operations fundamentals",
      "Advanced incident detection skills",
      "Log management and correlation",
      "SIEM deployment expertise",
      "Work effectively with CSIRT",
    ],
    curriculum: [
      "SOC Operations Overview",
      "Security Information & Event Management (SIEM)",
      "Log Collection & Analysis",
      "Threat Intelligence Integration",
      "Incident Detection & Triage",
      "Alert Investigation",
      "Incident Response Procedures",
      "Malware Analysis Basics",
      "Vulnerability Management",
      "SOC Metrics & Reporting",
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
      },
      {
        type: "Live Online",
        description:
          "Live, interactive sessions with instructors over multiple weeks",
        icon: Play,
      },
      {
        type: "In Person",
        description:
          "5-day training events with classroom presentations worldwide",
        icon: Users,
      },
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
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80",
    description:
      "In every part of the DevOps software lifecycle, DevSecOps promotes security. From development all the way to operations, security is everyone's job.",
    fullDescription:
      "In this day and age of data breaches and hacks, security has never been more important. This is especially true if you are building and deploying your own online enterprise applications quickly. This Learning Path has everything you need to know about DevSecOps in one place. When it comes to managing, maintaining, and automating security, you'll need the right security tools for the right jobs, ones that make sure your enterprise applications stay safe.",
    benefits: [
      "Understand DevSecOps process and mantra",
      "Learn when and how to use security tools",
      "Integrate security into CI/CD pipelines",
      "Automate security testing",
      "Shift-left security practices",
      "Container and infrastructure security",
    ],
    curriculum: [
      "Introduction to DevSecOps",
      "Security in CI/CD Pipelines",
      "Static Application Security Testing (SAST)",
      "Dynamic Application Security Testing (DAST)",
      "Software Composition Analysis (SCA)",
      "Container Security",
      "Infrastructure as Code Security",
      "Secrets Management",
      "Security Automation & Orchestration",
      "Compliance as Code",
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
      },
      {
        type: "Live Online",
        description:
          "Live, interactive sessions with instructors over multiple weeks",
        icon: Play,
      },
      {
        type: "In Person",
        description:
          "5-day training events with classroom presentations worldwide",
        icon: Users,
      },
    ],
  },
];

// Stats data
const trainingStats = [
  { value: "10,000+", label: "Professionals Trained" },
  { value: "50+", label: "Expert Instructors" },
  { value: "98%", label: "Success Rate" },
  { value: "6", label: "Training Programmes" },
];

// FAQ data
const faqs = [
  {
    question: "What are the prerequisites for these courses?",
    answer:
      "Most courses are designed for beginners to intermediate learners. Basic computer knowledge and networking fundamentals are helpful but not required for entry-level courses. Advanced courses like Red Teaming require prior penetration testing experience.",
  },
  {
    question: "How are the courses delivered?",
    answer:
      "We offer three learning methods: OnDemand (self-paced with 3 months access), Live Online (interactive instructor-led sessions), and In-Person (5-day intensive classroom training). All methods include hands-on labs, exercises, and support.",
  },
  {
    question: "Do I receive a certification upon completion?",
    answer:
      "Yes! Each course includes an official certification upon successful completion. Our certifications are recognized by industry leaders and can significantly boost your career prospects in cybersecurity.",
  },
  {
    question: "Are there hands-on labs included?",
    answer:
      "Absolutely! All our courses include extensive hands-on labs and real-world exercises. Courses like Ethical Hacking and Penetration Testing include Capture the Flag (CTF) challenges to test your skills.",
  },
  {
    question: "Can I access the course materials after completion?",
    answer:
      "For OnDemand courses, you have 3 months of access to all course materials. We also provide downloadable resources and cheat sheets that you can keep forever for reference.",
  },
  {
    question: "What career opportunities are available after these courses?",
    answer:
      "Graduates pursue careers as Ethical Hackers, Penetration Testers, SOC Analysts, Cloud Security Engineers, Red Team Operators, and DevSecOps Engineers. Many receive job offers from leading organizations within months of certification.",
  },
];

// Course Card Component - Enhanced with Images
const CourseCard = ({ course, index }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      {/* Glow Effect */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${course.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`}
      />

      <div className="relative h-full bg-gradient-to-br from-navy-800/90 to-navy-900/90 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-2 flex flex-col">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent`}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-20 mix-blend-overlay`}
          />

          {/* Floating Badge */}
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/20">
            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            <span className="text-xs text-white font-semibold">
              {course.rating}
            </span>
          </div>

          {/* Icon Badge */}
          <div className="absolute bottom-4 left-4">
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} p-[1px] shadow-lg`}
            >
              <div className="w-full h-full bg-navy-950/80 backdrop-blur-sm rounded-[11px] flex items-center justify-center">
                <course.icon className="text-white" size={22} />
              </div>
            </div>
          </div>

          {/* Level Badge */}
          <div className="absolute bottom-4 right-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${course.color} text-white shadow-lg`}
            >
              {course.level.split(" ")[0]}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
            {course.title}
          </h3>

          {/* Description */}
          <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-grow">
            {course.description}
          </p>

          {/* Meta Info Row */}
          <div className="flex items-center gap-4 mb-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-1.5 text-xs text-slate-300">
              <Clock size={14} className="text-primary-500" />
              <span className="font-medium">{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-300">
              <Users size={14} className="text-primary-500" />
              <span className="font-medium">{course.students}</span>
            </div>
          </div>

          {/* Certification Badge */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Award size={16} className="text-primary-500" />
              <span className="text-sm text-white font-medium">
                {course.certification}
              </span>
            </div>
            <div className="flex items-center gap-1 text-xs text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Available
            </div>
          </div>

          {/* CTA Button */}
          <Link
            to={`/training/${course.id}`}
            className={`w-full py-3 rounded-xl bg-gradient-to-r ${course.color} text-white text-sm font-bold text-center transition-all flex items-center justify-center gap-2 group/btn hover:shadow-lg hover:shadow-${course.accentColor}-500/30 active:scale-[0.98]`}
          >
            View Course Details
            <ArrowRight
              size={16}
              className="group-hover/btn:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </Motion.div>
  );
};

// Feature Section Component
const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <Motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="relative group p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl hover:border-primary-500/30 transition-all duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
    <div className="relative z-10">
      <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors">
        <Icon className="text-primary-500" size={24} />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-400">{description}</p>
    </div>
  </Motion.div>
);

// FAQ Accordion Component
const FAQItem = ({ faq, isOpen, onClick }) => (
  <Motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors"
  >
    <button
      onClick={onClick}
      className="w-full px-6 py-4 flex items-center justify-between text-left bg-gradient-to-r from-white/5 to-transparent hover:from-white/10 transition-all"
    >
      <span className="text-white font-medium pr-4">{faq.question}</span>
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
          <div className="px-6 pb-4 text-slate-400 text-sm leading-relaxed">
            {faq.answer}
          </div>
        </Motion.div>
      )}
    </AnimatePresence>
  </Motion.div>
);

const Training = () => {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
        {/* Ambient Background Effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-primary-500/10 to-transparent opacity-50 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-purple-500/10 to-transparent opacity-30 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
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
              <GraduationCap className="w-4 h-4 text-primary-500" />
              <span className="text-sm text-primary-400 font-medium">
                Professional Cybersecurity Training
              </span>
            </Motion.div>

            {/* Main Heading */}
            <Motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-snug"
            >
              Master{" "}
              <span className="text-gradient-primary">Cybersecurity</span> with
              Industry-Leading Training
            </Motion.h1>

            {/* Subtitle */}
            <Motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              From ethical hacking to cloud security, we provide comprehensive
              training programmes designed by industry experts to help you build
              a successful career in cybersecurity.
            </Motion.p>

            {/* CTA Buttons */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button to="/contact" variant="primary" size="lg">
                Enquire Now <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button to="#courses" variant="secondary" size="lg">
                <BookOpen size={20} className="mr-2" /> View Training Programmes
              </Button>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-10 border-y border-white/10 bg-navy-900/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trainingStats.map((stat, i) => (
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

      {/* Courses Grid Section */}
      <SectionWrapper id="courses" background="transparent">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-4"
          >
            <Zap className="w-4 h-4 text-primary-500" />
            <span className="text-sm text-primary-400 font-medium">
              Specialized Training Programs
            </span>
          </Motion.div>
          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4"
          >
            Our Training Courses
          </Motion.h2>
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Choose from our comprehensive range of cybersecurity courses, each
            designed to give you practical skills and industry-recognized
            certifications.
          </Motion.p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingCourses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </SectionWrapper>

      {/* Why Choose Us Section */}
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
              <Award className="w-4 h-4 text-primary-500" />
              <span className="text-sm text-primary-400 font-medium">
                Why Choose 360 Kavach
              </span>
            </Motion.div>

            <Motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-display font-bold text-white mb-6"
            >
              Learn from the Best in{" "}
              <span className="text-gradient-primary">Cybersecurity</span>
            </Motion.h2>

            <Motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-300 mb-8 leading-relaxed"
            >
              Our training programs are crafted by industry veterans with
              decades of experience. We combine theoretical knowledge with
              practical, hands-on labs to ensure you're job-ready from day one.
            </Motion.p>

            <div className="space-y-4">
              {[
                "Industry-recognized certifications",
                "Hands-on labs and real-world exercises",
                "Expert instructors with real-world experience",
                "Flexible learning: OnDemand, Live, or In-Person",
                "Career support and job placement assistance",
                "Access to exclusive CTF challenges",
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

          {/* Right Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureCard
              icon={Laptop}
              title="Online Learning"
              description="Self-paced courses with 3 months of access to all materials and labs."
              delay={0}
            />
            <FeatureCard
              icon={Play}
              title="Live Sessions"
              description="Interactive instructor-led training with real-time Q&A."
              delay={0.1}
            />
            <FeatureCard
              icon={Calendar}
              title="In-Person Training"
              description="Intensive 5-day classroom workshops in locations worldwide."
              delay={0.2}
            />
            <FeatureCard
              icon={Award}
              title="Certifications"
              description="Industry-recognized certificates upon successful completion."
              delay={0.3}
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Learning Path Section */}
      <SectionWrapper background="transparent">
        <div className="text-center mb-16">
          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
          >
            Your Learning <span className="text-gradient-primary">Path</span>
          </Motion.h2>
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            A structured approach to mastering cybersecurity skills
          </Motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-primary-500/20 to-transparent hidden md:block" />

            {[
              {
                step: 1,
                title: "Choose Your Course",
                desc: "Select a course that aligns with your career goals and current skill level.",
              },
              {
                step: 2,
                title: "Learn & Practice",
                desc: "Engage with video lessons, hands-on labs, and real-world exercises.",
              },
              {
                step: 3,
                title: "Test Your Skills",
                desc: "Complete CTF challenges and assessments to validate your knowledge.",
              },
              {
                step: 4,
                title: "Get Certified",
                desc: "Pass the final exam and receive your industry-recognized certification.",
              },
              {
                step: 5,
                title: "Launch Your Career",
                desc: "Apply your skills to land your dream job in cybersecurity.",
              },
            ].map((item, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-center gap-8 mb-8 last:mb-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold z-10 shadow-lg shadow-primary-500/30 hidden md:flex">
                  {item.step}
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 ${i % 2 === 0 ? "md:pr-20" : "md:pl-20"}`}
                >
                  <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 hover:border-primary-500/30 transition-colors">
                    <div className="flex items-center gap-3 mb-2 md:hidden">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-sm font-bold">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 hidden md:block">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </Motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper background="dark">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-bold text-white mb-4"
            >
              Frequently Asked{" "}
              <span className="text-gradient-primary">Questions</span>
            </Motion.h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openFaq === index}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="transparent">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-primary-900/40 to-navy-900/60 border border-primary-500/30 rounded-3xl p-8 md:p-16 text-center overflow-hidden"
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
            className="absolute -bottom-20 -left-20 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"
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
              className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/30"
            >
              <GraduationCap className="text-white" size={36} />
            </Motion.div>

            <Motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6"
            >
              Ready to Start Your Cybersecurity Journey?
            </Motion.h2>

            <Motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto"
            >
              Partner with us to transform your team's cybersecurity
              capabilities with our industry-leading training programmes.
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
                className="shadow-lg shadow-primary-500/20"
              >
                Get In Touch <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button to="/contact" variant="secondary" size="lg">
                Talk to an Advisor
              </Button>
            </Motion.div>
          </div>
        </Motion.div>
      </SectionWrapper>
    </div>
  );
};

export default Training;
