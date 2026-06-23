import React from 'react';
import { Helmet } from 'react-helmet';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import FAQ from '../components/home/FAQ';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Helmet>
        <title>Contact AllRounder — Reach Us in Chinsurah, West Bengal</title>
        <meta name="description" content="Get in touch with the AllRounder team. We're based in Chinsurah, West Bengal. Reach out for support, partnerships, or any queries about our local job and service marketplace app." />
        <meta name="keywords" content="AllRounder contact, support AllRounder, Chinsurah West Bengal, contact local job app, AllRounder help" />
        <link rel="canonical" href="https://allrounderapp.com/contact" />
        <meta property="og:title" content="Contact AllRounder — Reach Us in Chinsurah, West Bengal" />
        <meta property="og:description" content="Get in touch with the AllRounder team. Based in Chinsurah, West Bengal. Reach out for support, partnerships, or queries about our app." />
        <meta property="og:url" content="https://allrounderapp.com/contact" />
      </Helmet>
      <ContactHero />
      <ContactForm />
      <FAQ />
    </div>
  );
};

export default Contact;
