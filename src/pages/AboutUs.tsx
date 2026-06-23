import React from 'react';
import { Helmet } from 'react-helmet';
import AboutHero from '../components/about/AboutHero';
import AboutContent from '../components/about/AboutContent';
import MissionVision from '../components/about/MissionVision';
import HelpQuestion from '../components/about/HelpQuestion';

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Helmet>
        <title>About AllRounder — Building Opportunities for Local Work & Skills</title>
        <meta name="description" content="AllRounder was built to connect local skills with real opportunities. Our mission: make local hiring simple, fast, and transparent — empowering communities in West Bengal and beyond." />
        <meta name="keywords" content="AllRounder about, local hiring platform, empower local workers, community job app, West Bengal service platform, skilled professionals India, local work opportunities" />
        <link rel="canonical" href="https://allrounderapp.com/about-us" />
        <meta property="og:title" content="About AllRounder — Building Opportunities for Local Work & Skills" />
        <meta property="og:description" content="AllRounder was built to connect local skills with real opportunities. Our mission: make local hiring simple, fast, and transparent — empowering communities in West Bengal and beyond." />
        <meta property="og:url" content="https://allrounderapp.com/about-us" />
      </Helmet>
      <AboutHero />
      <AboutContent />
      <MissionVision />
      <HelpQuestion />
    </div>
  );
};

export default AboutUs;

