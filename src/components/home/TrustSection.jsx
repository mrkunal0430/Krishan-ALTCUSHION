import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';

const partners = [
  "Microsoft", "Google Cloud", "Amazon Web Services", "Zoho", "Cisco", 
  "IBM Security", "Oracle", "Salesforce", "Atlassian", "Slack"
];

const TrustSection = () => {
  return (
    <div className="py-20 border-y border-white/5 bg-navy-900/30 overflow-hidden">
      <div className="container mx-auto px-6 mb-10 text-center">
        <p className="text-sm font-bold tracking-widest text-slate-500 uppercase">Trusted by Industry Leaders</p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex space-x-16">
          {partners.map((partner) => (
            <span key={partner} className="text-2xl md:text-3xl font-display font-bold text-slate-600 hover:text-white transition-colors duration-300 mx-4">
              {partner}
            </span>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex space-x-16">
          {partners.map((partner) => (
            <span key={`${partner}-duplicate`} className="text-2xl md:text-3xl font-display font-bold text-slate-600 hover:text-white transition-colors duration-300 mx-4">
              {partner}
            </span>
          ))}
        </div>
      </div>
      
      {/* Add styles for marquee if not in tailwind config */}
      <style>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </div>
  );
};

export default TrustSection;
