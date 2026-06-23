import React from 'react';
import { Helmet } from 'react-helmet';
import PrivacyHero from '../components/privacy/PrivacyHero';
import PrivacyContent from '../components/privacy/PrivacyContent';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Helmet>
        <title>Privacy Policy — AllRounder</title>
        <meta name="description" content="Read AllRounder's Privacy Policy to understand how we collect, use, and protect your personal data when you use our app and services." />
        <link rel="canonical" href="https://allrounderapp.com/privacy-policy" />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Privacy Policy — AllRounder" />
        <meta property="og:url" content="https://allrounderapp.com/privacy-policy" />
      </Helmet>
      <PrivacyHero />
      <PrivacyContent />
    </div>
  );
};

export default PrivacyPolicy;
