import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

import WelcomeModal from './components/ui/WelcomeModal';
import FuturisticGridBackground from './components/ui/FuturisticGridBackground';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen text-slate-200 font-sans selection:bg-primary-500/30 selection:text-white">
        <FuturisticGridBackground />
        <WelcomeModal />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;