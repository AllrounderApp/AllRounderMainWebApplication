import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PageLoader from './components/common/PageLoader';

// ScrollToTop on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

// Page transition wrapper
const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    setTransitionStage('fadeOut');
    const timeout = setTimeout(() => {
      setDisplayChildren(children);
      setTransitionStage('fadeIn');
    }, 250);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        transitionStage === 'fadeIn' 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-[0.5rem]'
      }`}
    >
      {displayChildren}
    </div>
  );
};

const AppContent: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
      </div>
    </>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      {loading && <PageLoader onFinish={() => setLoading(false)} />}
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
