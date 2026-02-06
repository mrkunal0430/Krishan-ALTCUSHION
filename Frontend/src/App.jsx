import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import LeadForm from "./components/ui/LeadForm";
import FuturisticGridBackground from "./components/ui/FuturisticGridBackground";
import LoadingSpinner from "./components/ui/LoadingSpinner";

// Home is eagerly loaded (entry point - avoids flash/flicker)
import Home from "./pages/Home";
const EnterpriseServices = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Blog = lazy(() => import("./pages/Blog"));
const Training = lazy(() => import("./pages/Training"));
const TrainingDetail = lazy(() => import("./pages/TrainingDetail"));

// Admin pages
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));

// 404
const NotFound = lazy(() => import("./pages/NotFound"));

// Layout wrapper component
const Layout = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  if (isAdminRoute) {
    return (
      <div className="min-h-screen text-slate-200 font-sans selection:bg-primary-500/30 selection:text-white">
        <FuturisticGridBackground />
        <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-slate-200 font-sans selection:bg-primary-500/30 selection:text-white">
      <FuturisticGridBackground />
      <LeadForm />
      <Navbar />
      <main>
        <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<EnterpriseServices />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/training" element={<Training />} />
          <Route path="/training/:id" element={<TrainingDetail />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* 404 Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
