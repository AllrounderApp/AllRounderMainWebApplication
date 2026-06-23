import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
            <a
              href="https://wa.me/919330093620"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="inline-flex items-center justify-center gap-[0.5rem] font-medium transition-all active:scale-95 px-[2rem] py-[0.75rem] rounded-full text-[1rem] bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[1.125rem] h-[1.125rem]" aria-hidden="true">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.554-5.338 11.89-11.893 11.89a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.89 6.105l-1.24 4.543 4.659-1.224.129.076zm5.392-12.535c-.319-.16-.543-.134-.756.048-.213.181-.897.897-1.097 1.081-.2.184-.4.207-.743.048-.344-.16-1.449-.534-2.76-1.703-1.02-.91-1.71-2.036-1.91-2.378-.2-.341-.022-.526.149-.696.154-.154.344-.4.516-.6.172-.2.23-.344.344-.573.115-.23.058-.43-.029-.6-.086-.172-.756-1.82-1.036-2.493-.274-.66-.55-.57-.756-.58-.196-.01-.42-.012-.644-.012a1.24 1.24 0 00-.9.421c-.308.336-1.177 1.15-1.177 2.803 0 1.652 1.206 3.25 1.374 3.475.168.224 2.373 3.619 5.746 5.073.804.347 1.431.554 1.921.709.808.257 1.544.221 2.126.134.648-.096 1.996-.817 2.277-1.607.282-.79.282-1.467.197-1.607-.085-.14-.308-.224-.644-.384z" />
              </svg>
              Help Center
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
