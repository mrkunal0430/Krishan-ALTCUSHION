import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";
import Button from "./Button";

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    // Check if user has visited in this session
    const hasVisited = sessionStorage.getItem("hasVisitedSession");

    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Lock body scroll when modal is open (prevents mobile viewport resize & layout shift)
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    // Set flag so it doesn't show again IN THIS SESSION
    sessionStorage.setItem("hasVisitedSession", "true");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

  /*
   * WEB3FORMS + BACKEND API INTEGRATION
   * Submits to both Web3Forms (for email notifications) and backend API (for database storage)
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Web3Forms for email notification
      const web3Response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "cb9bc556-26f7-4eba-80a5-0efd9b3332f8",
          subject: "New Lead Form is submitted ",
          from_name: "360 Kavach Lead Form",
          ...formData,
        }),
      });

      // Submit to backend API for database storage
      try {
        await fetch(`${API_URL}/popup-forms`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
      } catch (backendError) {
        console.log("Backend API not available, form saved via Web3Forms only");
      }

      const result = await web3Response.json();

      if (result.success) {
        setIsSuccess(true);
        // Auto-close after success message
        setTimeout(() => {
          handleClose();
        }, 3000);
      } else {
        console.error("Web3Forms Error:", result);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Error connection to server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          style={{ touchAction: "none", overscrollBehavior: "contain" }}
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-navy-900 border border-white/10 rounded-2xl w-full max-w-lg shadow-2xl relative overflow-hidden will-change-transform"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Gradient Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="p-6 md:p-8 relative z-10">
              {!isSuccess ? (
                <>
                  <div className="mb-6">
                    <h2 className="text-3xl font-display font-bold mb-2">
                      Hello,{" "}
                      <span className="text-gradient-primary">
                        Welcome to 360Kavach !
                      </span>
                    </h2>
                    <p className="text-slate-400 text-sm">
                      Welcome to 360 Kavach. Let's discuss how we can engineer
                      your growth. Leave a message!
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-navy-950/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-navy-950/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Mobile Number"
                        optional
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-navy-950/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        placeholder="How can we help you?"
                        required
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-navy-950/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Get In Touch"}
                    </Button>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Received!
                  </h3>
                  <p className="text-slate-400">
                    Thank you. We'll be in touch with you shortly.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeModal;
