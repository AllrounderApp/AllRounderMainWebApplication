import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../common/Button';

const Navbar: React.FC = () => {
  const location = useLocation();
  const heroPages = ['/about-us', '/terms-conditions', '/privacy-policy', '/contact'];
  const isHeroPage = heroPages.includes(location.pathname);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Transparent on hero pages when not scrolled
  const isTransparent = isHeroPage && !scrolled;

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Terms & Conditions', href: '/terms-conditions' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isTransparent
      ? 'bg-transparent border-transparent'
      : 'bg-white/90 backdrop-blur-lg border-b-[0.0625rem] border-slate-100 shadow-sm'
      }`}>
      <div className="max-w-[105rem] mx-auto px-[1rem] sm:px-[2rem] lg:px-[4rem]">
        <div className="flex justify-between items-center h-[5rem]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-[0.5rem]">
            <div className="flex items-center gap-[0.5rem]">
              <img
                src="/LOGO.png"
                alt="AllRounder Logo"
                className="w-[2.5 rem] h-[2.5rem] object-contain flex-shrink-0"
              />
              <div className="flex flex-col justify-center">
                <span className={`text-[1.2rem] font-bold leading-[1.1] transition-colors duration-300 ${isTransparent ? 'text-white' : 'text-slate-900'}`}>ALLROUNDER</span>
                <span className={`text-[0.6rem] font-medium tracking-tight leading-[1] transition-colors duration-300 ${isTransparent ? 'text-blue-100' : 'text-slate-500'}`}>Connecting Skills with Needs</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-[2.5rem]">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || (link.href === '/' && location.pathname === '/' && link.name === 'Home');

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-[1rem] font-medium transition-colors relative group ${isTransparent
                    ? 'text-white/90 hover:text-white'
                    : 'text-slate-600 hover:text-blue-600'
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <span className={`absolute -bottom-[0.5rem] left-0 w-full h-[0.125rem] rounded-full ${isTransparent ? 'bg-white' : 'bg-blue-600'
                      }`}></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="flex items-center">
            <Button variant="primary" className="rounded-full px-[2rem] bg-blue-600 text-white border-none hover:bg-blue-700">
              Help Center
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
