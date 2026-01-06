import React, { useEffect } from 'react';
import AboutHero from '../components/about_enterprise/AboutHero';
import GrowthEngine from '../components/about_enterprise/GrowthEngine';
import ImprovementPipeline from '../components/about_enterprise/ImprovementPipeline';
import ComplianceLayer from '../components/about_enterprise/ComplianceLayer';
import LeadershipProfile from '../components/about_enterprise/LeadershipProfile';
import WhyRGESSystem from '../components/about_enterprise/WhyRGESSystem';

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
      <WhyRGESSystem />
    </div>
  );
};

export default EnterpriseAbout;
