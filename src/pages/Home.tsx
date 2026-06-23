import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import GlobalNetwork from '../components/home/GlobalNetwork';
import SuccessStories from '../components/home/SuccessStories';
import FAQ from '../components/home/FAQ';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is All Rounder?', acceptedAnswer: { '@type': 'Answer', text: 'All Rounder is a platform that connects local professionals and workers with people who need real day-to-day services quickly and reliably.' } },
    { '@type': 'Question', name: 'How do I post a job?', acceptedAnswer: { '@type': 'Answer', text: 'Create an account, click Post Job, add a description, budget, photo, and location — your job will be visible to nearby professionals instantly.' } },
    { '@type': 'Question', name: 'Is All Rounder free to use?', acceptedAnswer: { '@type': 'Answer', text: 'Yes! Posting a job and browsing for professionals is completely free for users.' } },
    { '@type': 'Question', name: 'How do I find local professionals?', acceptedAnswer: { '@type': 'Answer', text: 'Use the search feature or browse service categories to find top-rated professionals in your neighborhood using GPS-based matching.' } },
    { '@type': 'Question', name: 'Can I chat with professionals directly?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — once connected, use the built-in chat system to discuss details, negotiate prices, and share locations.' } },
    { '@type': 'Question', name: 'How are service providers verified?', acceptedAnswer: { '@type': 'Answer', text: 'We perform mobile verification and encourage providers to submit KYC documents. The review and rating system ensures transparency and trust.' } },
  ],
};

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AllRounder — Post & Find Local Jobs, Services & Talent Near You</title>
        <meta name="description" content="AllRounder is a free app to post jobs, hire trusted local professionals, and grow your service business. Find workers near you with GPS matching, built-in chat, secure payments, and verified profiles." />
        <meta name="keywords" content="post job online, hire local professionals, find workers near me, local service app, GPS job matching, local talent hiring, freelance services India, skilled workers app, home services app, job posting app India" />
        <link rel="canonical" href="https://allrounderapp.com/" />
        <meta property="og:title" content="AllRounder — Post & Find Local Jobs, Services & Talent Near You" />
        <meta property="og:description" content="AllRounder is a free app to post jobs, hire trusted local professionals, and grow your service business. GPS matching, built-in chat, secure payments, verified profiles." />
        <meta property="og:url" content="https://allrounderapp.com/" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Hero />
      <Features />
      <GlobalNetwork />
      <SuccessStories />
      <FAQ />
    </>
  );
};

export default Home;
