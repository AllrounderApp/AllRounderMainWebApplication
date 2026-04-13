import React from 'react';
import TermsHero from '../components/terms/TermsHero';
import TermsContent from '../components/terms/TermsContent';

const TermsConditions: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TermsHero />
      <TermsContent />
    </div>
  );
};

export default TermsConditions;
