import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/ui/Button';
import SectionWrapper from '../components/ui/SectionWrapper';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  /* 
   * WEB3FORMS INTEGRATION
   * Please replace "YOUR_ACCESS_KEY_HERE" with your actual Web3Forms Access Key.
   * You can get one at https://web3forms.com/
   */
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // <--- REPLACE THIS
          subject: "New Inquiry from ALTCUSHION Website",
          from_name: "ALTCUSHION Contact Form",
          ...formData
        }),
      });

      const result = await response.json();

      if (result.success) {
        nextStep(); // Goes to success 'step 3'
      } else {
        alert("Something went wrong. Please try again.");
        console.error("Web3Forms Error:", result);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Error submitting form. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 bg-navy-950 min-h-screen">
      <SectionWrapper background="transparent">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Details (Left Side) */}
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-display font-bold mb-8"
            >
              Let's Engineer <br />
              <span className="text-gradient-primary">Your Growth.</span>
            </motion.h1>
            <p className="text-xl text-slate-400 mb-12">
              Ready to secure your infrastructure and scale your operations? Reach out to our global team of architects today.
            </p>

            <div className="space-y-8 mb-12">
              <ContactItem 
                icon={Mail} 
                title="Email Us" 
                content="hello@altcushion.com" 
                link="mailto:hello@altcushion.com"
              />
              <ContactItem 
                icon={Phone} 
                title="Call Us" 
                content="+1 (555) 123-4567" 
                link="tel:+15551234567"
              />
            </div>

            <div className="border-t border-white/10 pt-10">
              <h3 className="text-2xl font-bold mb-6">Global Presence</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <LocationCard 
                  city="Richmond Hill" 
                  country="Canada" 
                  timezone="EST (UTC-5)"
                />
                <LocationCard 
                  city="Hyderabad" 
                  country="India" 
                  timezone="IST (UTC+5:30)"
                />
              </div>
            </div>
          </div>

          {/* Inquiry Form (Right Side) */}
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-blue-600/10 rounded-3xl blur-2xl" />
             <div className="glass-panel p-8 md:p-10 rounded-3xl relative z-10 border border-white/10">
                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <h3 className="text-2xl font-bold mb-6">01. About You</h3>
                        
                        <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} required />
                        <InputField label="Work Email" type="email" name="email" value={formData.email} onChange={handleChange} required />
                        <InputField label="Company Name" name="company" value={formData.company} onChange={handleChange} />

                        <div className="pt-4 flex justify-end">
                          <Button type="button" onClick={nextStep} variant="primary">
                            Next Step
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <h3 className="text-2xl font-bold mb-6">02. Project Details</h3>
                        
                        <SelectField 
                          label="Interested Service" 
                          name="service" 
                          value={formData.service} 
                          onChange={handleChange}
                          options={['Cybersecurity Audit', 'Web/App Development', 'Zoho Efficiency', 'AI Automation', 'Corporate Training', 'Other']}
                        />
                        
                        <SelectField 
                          label="Estimated Budget" 
                          name="budget" 
                          value={formData.budget} 
                          onChange={handleChange}
                          options={['$5k - $10k', '$10k - $25k', '$25k - $50k', '$50k+', 'Not defined']}
                        />

                        <TextAreaField label="Tell us more about your project" name="message" value={formData.message} onChange={handleChange} />

                        <div className="pt-4 flex justify-between">
                           <button type="button" onClick={prevStep} className="text-slate-400 hover:text-white font-medium px-4">
                             Back
                           </button>
                           <Button type="submit" variant="primary" icon={isSubmitting ? null : Send} disabled={isSubmitting}>
                             {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                           </Button>
                        </div>
                      </motion.div>
                    )}

                  {step === 3 && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                      >
                        <div className="w-20 h-20 bg-primary-500/20 text-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                          <CheckCircle size={40} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                        <p className="text-slate-400 mb-8">
                          Thank you for reaching out. One of our architects will analyze your request and get back to you within 24 hours.
                        </p>
                        <Button to="/" variant="secondary">
                          Back to Home
                        </Button>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </form>
             </div>
          </div>

        </div>
      </SectionWrapper>
    </div>
  );
};

const ContactItem = ({ icon: Icon, title, content, link }) => (
  <a href={link} className="flex items-start group">
    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary-500 mr-5 group-hover:bg-primary-500 group-hover:text-navy-900 transition-all">
      <Icon size={20} />
    </div>
    <div>
      <h4 className="font-bold text-white text-lg">{title}</h4>
      <p className="text-slate-400 group-hover:text-primary-400 transition-colors">{content}</p>
    </div>
  </a>
);

const LocationCard = ({ city, country, timezone }) => (
  <div className="bg-navy-900/50 p-6 rounded-xl border border-white/5">
    <div className="flex items-center mb-3">
      <MapPin size={18} className="text-primary-500 mr-2" />
      <h4 className="font-bold text-white">{city}, {country}</h4>
    </div>
    <div className="flex items-center text-slate-500 text-sm">
      <Clock size={14} className="mr-2" />
      <span>{timezone}</span>
    </div>
  </div>
);

const InputField = ({ label, type = "text", ...props }) => (
  <div className="flex flex-col space-y-2">
    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">{label}</label>
    <input 
      type={type} 
      className="bg-navy-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
      {...props}
    />
  </div>
);

const SelectField = ({ label, options, ...props }) => (
  <div className="flex flex-col space-y-2">
    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">{label}</label>
    <div className="relative">
      <select 
        className="w-full bg-navy-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all appearance-none"
        {...props}
      >
        <option value="" disabled>Select an option</option>
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">▼</div>
    </div>
  </div>
);

const TextAreaField = ({ label, ...props }) => (
  <div className="flex flex-col space-y-2">
    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">{label}</label>
    <textarea 
      rows="4"
      className="bg-navy-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none"
      {...props}
    />
  </div>
);

export default Contact;
