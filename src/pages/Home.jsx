import React, { useEffect } from "react";
import HeroCommandCenter from "../components/home/HeroCommandCenter";
import StatsRibbon from "../components/home/StatsRibbon";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ServiceConsole from "../components/home/ServiceConsole";
import ProcessEngine from "../components/home/ProcessEngine";
import PartnerEcosystem from "../components/home/PartnerEcosystem";
import ProcessTimeline from "../components/home/ProcessTimeline";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <HeroCommandCenter />
      <StatsRibbon />
      <ServiceConsole />
      <div className="hidden md:block">
        <ProcessEngine />
      </div>
      <div className="block md:hidden">
        <ProcessTimeline />
      </div>
      <Testimonials />

      <PartnerEcosystem />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
