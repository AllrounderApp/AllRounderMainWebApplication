import React from 'react';
import { Helmet } from 'react-helmet';
import TermsHero from '../components/terms/TermsHero';
import TermsContent from '../components/terms/TermsContent';

const TermsConditions: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Helmet>
        <title>Terms & Conditions — AllRounder</title>
        <meta name="description" content="Review AllRounder's Terms and Conditions governing the use of our platform, app, and services." />
        <link rel="canonical" href="https://allrounderapp.com/terms-conditions" />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Terms & Conditions — AllRounder" />
        <meta property="og:url" content="https://allrounderapp.com/terms-conditions" />
      </Helmet>
      <TermsHero />
      <TermsContent />
    </div>
  );
};

export default TermsConditions;
