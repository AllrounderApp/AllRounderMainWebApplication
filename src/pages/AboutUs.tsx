import React from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutContent from '../components/about/AboutContent';
import MissionVision from '../components/about/MissionVision';
import HelpQuestion from '../components/about/HelpQuestion';

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <AboutHero />
      <AboutContent />
      <MissionVision />
      <HelpQuestion />
    </div>
  );
};

export default AboutUs;

