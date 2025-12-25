import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-950 border-t border-glass-border pt-20 pb-10 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <Link to="/" className="text-2xl font-display font-bold text-white tracking-tight mb-6 block">
              ALT <span className="text-primary-500">CUSHION</span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Securing growth through digital excellence and risk intelligence. We build the future of enterprise technology.
            </p>
            <div className="flex space-x-4">
              <SocialIcon Icon={Linkedin} />
              <SocialIcon Icon={Twitter} />
              <SocialIcon Icon={Instagram} />
              <SocialIcon Icon={Facebook} />
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <FooterLink to="/services">Cybersecurity</FooterLink>
              <FooterLink to="/services">Zoho ERP Solutions</FooterLink>
              <FooterLink to="/services">Web & App Development</FooterLink>
              <FooterLink to="/services">AI Automation</FooterLink>
              <FooterLink to="/services">IT Governance & Audit</FooterLink>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/about">Our Team</FooterLink>
              <FooterLink to="/about">Careers</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-primary-500 mt-1 mr-3 shrink-0" size={18} />
                <span className="text-slate-400 text-sm">
                  Richmond Hill, Canada<br />
                  Hyderabad, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary-500 mr-3 shrink-0" size={18} />
                <span className="text-slate-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-primary-500 mr-3 shrink-0" size={18} />
                <span className="text-slate-400 text-sm">hello@altcushion.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Alt Cushion. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-500 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ Icon }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary-500 hover:text-navy-900 transition-all duration-300">
    <Icon size={18} />
  </a>
);

const FooterLink = ({ to, children }) => (
  <li>
    <Link to={to} className="text-slate-400 hover:text-primary-500 transition-colors text-sm">
      {children}
    </Link>
  </li>
);

export default Footer;
