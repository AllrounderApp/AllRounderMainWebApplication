import React from 'react';
import termsHeroImg from '../../assets/TermsAndCond/TermsAndCondition.png';

const TermsHero: React.FC = () => {
  return (
    <section
      className="relative w-full h-[35rem] md:h-[40rem] mt-[-5rem] pt-[5rem] flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(7, 30, 82, 0.85) 0%, rgba(7, 30, 82, 0.7) 50%, rgba(7, 30, 82, 0.65) 100%), url(${termsHeroImg})`,
      }}
    >
      <div className="max-w-[105rem] mx-auto px-[1.5rem] sm:px-[2rem] lg:px-[4rem] relative z-10 w-full flex flex-col items-center text-center">
        <h1 className="text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-bold text-white leading-[1.2] mb-[1rem] tracking-tight hero-title-animate">
          Terms &amp; Conditions
        </h1>
        <p className="text-[1.125rem] md:text-[1.25rem] text-indigo-50/90 max-w-[32rem] mx-auto leading-relaxed hero-subtitle-animate">
          Please review our terms carefully before using our services.
        </p>
      </div>
    </section>
  );
};

export default TermsHero;
