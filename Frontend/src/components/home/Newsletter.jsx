import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle, Sparkles } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const response = await fetch(`${API_URL}/newsletter/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message || "Successfully subscribed!");
        setEmail("");
        setTimeout(() => { setStatus("idle"); setMessage(""); }, 5000);
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong");
        setTimeout(() => { setStatus("idle"); setMessage(""); }, 4000);
      }
    } catch (error) {
      setStatus("error");
      setMessage("Connection error. Please try again.");
      setTimeout(() => { setStatus("idle"); setMessage(""); }, 4000);
    }
  };

  return (
    <section className="relative py-14 md:py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary-500/30 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary-500/30 rounded-br-3xl" />

            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary-500/10 border border-primary-500/20"
              >
                <Sparkles size={16} className="text-primary-500" />
                <span className="text-primary-400 text-sm font-medium">Stay Ahead of Threats</span>
              </motion.div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 leading-snug">
                Subscribe to Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-300 to-white pb-1">Newsletter</span>
              </h2>

              <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                Get exclusive insights on cybersecurity trends, compliance updates, and enterprise solutions delivered straight to your inbox.
              </p>

              <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                <div className="relative flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                      <Mail size={20} />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      disabled={status === "loading" || status === "success"}
                      className="w-full pl-12 pr-4 py-4 bg-navy-950/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all disabled:opacity-50"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "loading" || status === "success" || !email}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative px-8 py-4 bg-gradient-to-r from-primary-500 to-cyan-400 text-navy-950 font-bold rounded-xl flex items-center justify-center gap-2 overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <span className="relative z-10">
                      {status === "loading" ? "Subscribing..." : status === "success" ? (
                        <span className="flex items-center gap-2"><CheckCircle size={18} />Subscribed!</span>
                      ) : (
                        <span className="flex items-center gap-2">Subscribe<ArrowRight size={18} /></span>
                      )}
                    </span>
                  </motion.button>
                </div>

                {message && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 text-sm ${status === "success" ? "text-primary-400" : "text-red-400"}`}
                  >
                    {message}
                  </motion.p>
                )}
              </form>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>No spam, ever</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary-500" />
                  <span>Weekly insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span>Unsubscribe anytime</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
