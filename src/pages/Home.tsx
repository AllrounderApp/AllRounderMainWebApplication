import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import GlobalNetwork from '../components/home/GlobalNetwork';
import SuccessStories from '../components/home/SuccessStories';
import FAQ from '../components/home/FAQ';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <GlobalNetwork />
      <SuccessStories />
      <FAQ />
    </>
  );
};

export default Home;
