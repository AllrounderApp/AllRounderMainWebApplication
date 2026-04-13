import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../common/ScrollReveal';

const PlayStoreIconWhite = () => (
  <svg className="w-[1.75rem] h-[1.75rem] text-white fill-current" viewBox="0 0 24 24">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.5 1.5 0 0 1-.61-.986V2.8a1.5 1.5 0 0 1 .61-.986z" />
    <path d="M14.792 11.208l3.35 1.93a1.5 1.5 0 0 1 0 2.6l-3.35 1.93-4.183-4.183 4.183-4.184z" />
    <path d="M4.61 22.686L14.793 16.8 10.61 12.617 4.61 22.686z" />
    <path d="M4.61 1.314L10.61 11.383 14.793 7.2 4.61 1.314z" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-[1rem] h-[1rem] text-[#f59e0b] fill-[#f59e0b]" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const LogoIcon = () => (
  <img 
    src="/LOGO.png" 
    alt="AllRounder Logo" 
    className="w-[2.25rem] h-[2.25rem] object-contain flex-shrink-0"
  />
);

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex flex-col pt-0 mt-0">
      {/* Top Banner section */}
      <div className="w-full bg-[#f0efff] py-[5rem] lg:py-[6rem]">
        <div className="max-w-[105rem] mx-auto px-5 sm:px-10 lg:px-20 flex flex-col items-center text-center">
          <ScrollReveal direction="up" delay={0}>
            <h2 className="text-[2.25rem] lg:text-[2.75rem] font-bold text-slate-800 mb-3 tracking-tight">
              Ready To Download
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <p className="text-[1.125rem] text-slate-600 mb-8 max-w-xl">
              Your next job or service is just one tap away — download now and get started.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Play store button */}
              <button className="bg-[#3b82f6] hover:bg-blue-600 text-white rounded-full px-8 py-[0.875rem] flex items-center gap-3 transition-colors shadow-sm btn-shine">
                <PlayStoreIconWhite />
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[0.625rem] font-normal uppercase tracking-wide opacity-90">Download Now</span>
                  <span className="text-[1.125rem] font-semibold tracking-wide mt-[0.125rem]">Google Play</span>
                </div>
              </button>

              {/* Stats directly next to it */}
              <div className="flex items-center gap-3 bg-[#e8e7fc] px-5 py-2.5 rounded-full sm:bg-transparent sm:px-0 sm:py-0">
                <div className="flex flex-col text-left">
                  <span className="text-[1.25rem] font-bold text-slate-800 leading-none">1.1k+</span>
                  <span className="text-[0.75rem] text-slate-500 font-medium tracking-tight mt-[0.125rem]">Active User</span>
                </div>
                <div className="flex gap-[0.125rem]">
                  {[...Array(4)].map((_, i) => <StarIcon key={i} />)}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom Footer section */}
      <div className="w-full bg-white pt-[3rem] pb-[2rem]">
        <div className="max-w-[105rem] mx-auto px-5 sm:px-10 lg:px-20 flex flex-col">
          {/* Main Footer Content */}
          <ScrollReveal direction="up" delay={100}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 mb-8">
              
              {/* Left: Logo */}
              <div className="flex items-center gap-[0.5rem]">
                <LogoIcon />
                <div className="flex flex-col justify-center">
                  <span className="text-[1.25rem] font-bold text-slate-700 leading-[1.1] tracking-tight">ALLROUNDER</span>
                  <span className="text-[0.6rem] text-slate-500 font-medium tracking-tight leading-[1]">Connecting Skills with Needs</span>
                </div>
              </div>
              
              {/* Center: Nav links */}
              <div className="flex items-center gap-6 lg:gap-10">
                <Link to="/" className="text-slate-800 font-bold text-[0.9375rem] hover:text-blue-600 transition-colors link-underline">Home</Link>
                <Link to="/about-us" className="text-slate-600 font-medium text-[0.9375rem] hover:text-blue-600 transition-colors link-underline">About Us</Link>
                <Link to="/contact" className="text-slate-600 font-medium text-[0.9375rem] hover:text-blue-600 transition-colors link-underline">Contact</Link>
              </div>

              {/* Right: Policy Links */}
              <div className="flex items-center gap-6">
                <Link to="/privacy-policy" className="text-slate-800 font-bold text-[0.875rem] underline decoration-slate-300 underline-offset-4 hover:decoration-blue-600 transition-colors">Privacy Policy</Link>
                <Link to="/terms-conditions" className="text-slate-800 font-bold text-[0.875rem] underline decoration-slate-300 underline-offset-4 hover:decoration-blue-600 transition-colors">Terms & Conditions</Link>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Copyright Divider */}
          <div className="w-full h-px bg-slate-200 mt-2 mb-6"></div>
          
          {/* Copyright */}
          <div className="text-center w-full">
            <p className="text-slate-500 font-semibold text-[0.875rem]">@allrounder. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
