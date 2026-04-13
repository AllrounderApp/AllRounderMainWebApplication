import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import FAQ from '../components/home/FAQ';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <ContactHero />
      <ContactForm />
      <FAQ />
    </div>
  );
};

export default Contact;
