import React from "react";
import { Link } from "react-router-dom";
import {
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-950 border-t border-glass-border pt-20 pb-10 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 group-hover:border-blue-500 transition-colors">
                <img
                  src="/Logo/IMG_20251230_190228.jpg"
                  alt="360 Kavach Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-display font-bold text-white tracking-tight">
                360 <span className="text-blue-500">KAVACH</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Helping organizations stay secure, compliant, and competitive in
              an evolving digital world.
            </p>
            <div className="flex space-x-4">
              <SocialIcon
                Icon={Linkedin}
                href="https://www.linkedin.com/in/krishanpal007/"
              />
              <SocialIcon
                Icon={Twitter}
                href="https://twitter.com/krishanpal007"
              />
              <SocialIcon
                Icon={Instagram}
                href="https://www.instagram.com/krishanpal007/"
              />
              <SocialIcon
                Icon={Facebook}
                href="https://www.facebook.com/krishanpal007"
              />
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              <FooterLink to="/services">Cyber Security</FooterLink>
              <FooterLink to="/services">Business Consulting</FooterLink>
              <FooterLink to="/services">Governance & Compliance</FooterLink>
              <FooterLink to="/services">Enterprise Apps</FooterLink>
              <FooterLink to="/services">Technology Training</FooterLink>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/careers">Services</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">
              Global Presence
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin
                  className="text-primary-500 mt-1 mr-3 shrink-0"
                  size={18}
                />
                <span className="text-slate-400 text-sm">
                  <strong className="text-white block">Corporate HQ</strong>
                  Richmond Hill, Ontario, Canada
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 shrink-0 w-[18px]" />
                <span className="text-slate-400 text-sm">
                  <strong className="text-white block">Innovation Hub</strong>
                  Delhi - India
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="text-primary-500 mr-3 shrink-0" size={18} />
                <span className="text-slate-400 text-sm">
                  info@360kavach.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} 360 Kavach. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-500 transition-colors">
              Terms of Service
            </a>
            <Link
              to="/privacy"
              className="hover:text-primary-500 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="text-slate-400 hover:text-primary-500 transition-colors text-sm"
    >
      {children}
    </Link>
  </li>
);

const SocialIcon = ({ Icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary-500 hover:text-navy-900 transition-all duration-300"
  >
    <Icon size={18} />
  </a>
);

export default Footer;
