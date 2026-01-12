import React, { useEffect } from "react";
import AboutHero from "../components/about/AboutHero";
import GrowthEngine from "../components/about/GrowthEngine";
import ImprovementPipeline from "../components/about/ImprovementPipeline";
import ComplianceLayer from "../components/about/ComplianceLayer";
import LeadershipProfile from "../components/about/LeadershipProfile";
import Why360Kavach from "../components/about/Why360Kavach";

const EnterpriseAbout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <AboutHero />
      <GrowthEngine />
      <ImprovementPipeline />
      <ComplianceLayer />
      <LeadershipProfile />
      <Why360Kavach />
    </div>
  );
};

export default EnterpriseAbout;
