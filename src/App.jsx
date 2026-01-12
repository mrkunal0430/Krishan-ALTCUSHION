import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import LeadForm from "./components/ui/LeadForm";
import FuturisticGridBackground from "./components/ui/FuturisticGridBackground";
import LoadingSpinner from "./components/ui/LoadingSpinner";

// Lazy load pages for performance optimization
const Home = lazy(() => import("./pages/Home"));
const EnterpriseServices = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

const App = () => {
  return (
    <Router>
      <div className="min-h-screen text-slate-200 font-sans selection:bg-primary-500/30 selection:text-white">
        <FuturisticGridBackground />
        <LeadForm />
        <Navbar />
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<EnterpriseServices />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
