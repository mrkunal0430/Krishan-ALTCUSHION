import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/ui/SectionWrapper";
import { Shield, Lock, Eye, Server, Code, Layers } from "lucide-react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 md:pt-28 lg:pt-32 min-h-screen">
      {/* Hero Section */}
      <SectionWrapper background="transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
            <Shield className="w-4 h-4 text-primary-500" />
            <span className="text-sm text-primary-400 font-medium">
              Trust & Transparency
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Privacy <span className="text-gradient-primary">Policy</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            At 360 Kavach, our commitment to security extends beyond our
            services to how we handle your data. This policy outlines our
            standards for privacy, design, and development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <PolicyHighlight
            icon={Lock}
            title="Data Security"
            desc="We employ military-grade encryption and zero-trust architecture to protect all user interactions."
          />
          <PolicyHighlight
            icon={Eye}
            title="Transparency"
            desc="You have complete visibility and control over personal data collection and usage."
          />
          <PolicyHighlight
            icon={Code}
            title="Secure Development"
            desc="Our platform is built on Next-Gen tech stacks with security baked into the code."
          />
        </div>
      </SectionWrapper>

      {/* Design & Development Standards Section */}
      <SectionWrapper background="glass" className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-10 flex items-center">
            <Layers className="text-primary-500 mr-4" size={32} />
            Design & Development{" "}
            <span className="text-white ml-2">Standards</span>
          </h2>

          <div className="space-y-8">
            <div className="p-8 bg-slate-900/50 rounded-xl border border-slate-700/50 hover:border-primary-500/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">
                Next-Level Development Philosophy
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Our website is more than a digital brochure; it is a testament
                to our engineering capabilities. We utilize a{" "}
                <strong>Server-Side Rendering (SSR)</strong> architecture and{" "}
                <strong>Static Site Generation (SSG)</strong> to ensure
                lightning-fast load times and SEO dominance. Our codebase
                follows strict <strong>Clean Code</strong> principles, ensuring
                scalability and maintainability.
              </p>
            </div>

            <div className="p-8 bg-slate-900/50 rounded-xl border border-slate-700/50 hover:border-primary-500/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">
                Futuristic & Responsive Design
              </h3>
              <p className="text-slate-400 leading-relaxed">
                The content and interface of this website define our design
                ethos: <strong>User-Centric, Aesthetic, and Functional</strong>.
                We employ advanced CSS paradigms, including Glassmorphism and
                specialized grid layouts, to create an immersive experience.
                Every pixel is responsive, adapting seamlessly from large
                workstation displays to mobile devices, ensuring accessibility
                for all users.
              </p>
            </div>

            <div className="p-8 bg-slate-900/50 rounded-xl border border-slate-700/50 hover:border-primary-500/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">
                Secure Infrastructure
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Hosting is managed via globally distributed Content Delivery
                Networks (CDNs) with integrated DDoS protection. All data
                transmission is secured via <strong>TLS 1.3</strong> protocols.
                We do not store sensitive payment information on our servers;
                all transactions are processed through PCI-DSS compliant
                gateways.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Detailed Policy Text */}
      <SectionWrapper background="dark">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              1. Information Collection
            </h3>
            <p className="text-slate-400">
              We collect information that you strictly provide to us directly,
              such as when you fill out a contact form, request a consultation,
              or sign up for our newsletter. This may include your name, email
              address, company name, and phone number. We also collect anonymous
              usage data to improve our website performance.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              2. Use of Information
            </h3>
            <p className="text-slate-400">
              Your data is used solely for the purpose of business communication
              and service delivery. We do not sell, rent, or trade your personal
              information to third parties. We may use your information to:
            </p>
            <ul className="list-disc pl-6 text-slate-400 mt-4 space-y-2">
              <li>Respond to your service requests and inquiries.</li>
              <li>
                Send administrative information, such as updates to our terms or
                policies.
              </li>
              <li>
                Analyze website usage to improve user experience and design.
              </li>
              <li>Protect our website against fraud and security threats.</li>
            </ul>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              3. Cookies & Tracking Technologies
            </h3>
            <p className="text-slate-400">
              We use cookies to enhance your browsing experience. These small
              text files help us understand user behavior and remember your
              preferences. You can control cookie settings through your browser.
              Our website respects "Do Not Track" signals.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              4. Third-Party Links
            </h3>
            <p className="text-slate-400">
              Our website links to external sites (e.g., social media
              platforms). We are not responsible for the privacy practices or
              content of these third-party sites. We encourage you to review
              their privacy policies.
            </p>
          </div>

          <div className="border-t border-slate-800 pt-8 mt-16">
            <p className="text-slate-500 text-sm">
              Last Updated: January 2026. If you have any questions about this
              policy, please contact us at{" "}
              <a
                href="mailto:privacy@360kavach.com"
                className="text-primary-500 hover:underline"
              >
                privacy@360kavach.com
              </a>
              .
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

const PolicyHighlight = ({ icon: Icon, title, desc }) => (
  <div className="glass-panel p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
    <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-500">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default PrivacyPolicy;
