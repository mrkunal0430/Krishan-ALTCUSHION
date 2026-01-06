import React, { useEffect } from 'react';
import HeroCommandCenter from '../components/home/HeroCommandCenter';
import StatsRibbon from '../components/home/StatsRibbon';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ServiceConsole from '../components/home/ServiceConsole';
import ProcessEngine from '../components/home/ProcessEngine';
import PartnerEcosystem from '../components/home/PartnerEcosystem';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <HeroCommandCenter />
      <StatsRibbon />
      <WhyChooseUs />
      <ServiceConsole />
      <ProcessEngine />
      <PartnerEcosystem />
    </div>
  );
};

export default Home;
