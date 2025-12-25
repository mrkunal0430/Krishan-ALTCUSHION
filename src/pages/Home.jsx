import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import StatsRibbon from '../components/home/StatsRibbon';
import ServicePreview from '../components/home/ServicePreview';
import ProcessTimeline from '../components/home/ProcessTimeline';
import TrustSection from '../components/home/TrustSection';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <StatsRibbon />
      <ServicePreview />
      <ProcessTimeline />
      <TrustSection />
    </div>
  );
};

export default Home;
