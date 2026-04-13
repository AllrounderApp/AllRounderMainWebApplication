import React from 'react';
import PrivacyHero from '../components/privacy/PrivacyHero';
import PrivacyContent from '../components/privacy/PrivacyContent';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PrivacyHero />
      <PrivacyContent />
    </div>
  );
};

export default PrivacyPolicy;
