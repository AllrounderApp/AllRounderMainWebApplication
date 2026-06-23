import React from 'react';
import officeImg from '../../assets/aboutUs/OfficeImage.webp';
import ceoImg from '../../assets/aboutUs/CEOImage.webp';
import ScrollReveal from '../common/ScrollReveal';

const AboutContent: React.FC = () => {
  return (
    <section className="py-[5rem] bg-white">
      <div className="max-w-[105rem] mx-auto px-[1.5rem] sm:px-[2rem] lg:px-[4rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[3rem] items-start">
          
          {/* Left: Image Collage */}
          <ScrollReveal direction="left" delay={50}>
            <div className="relative w-full min-h-[30rem] md:min-h-[35rem]">
              {/* Main Office Image */}
              <div className="relative w-[70%] rounded-[0.75rem] overflow-hidden shadow-lg z-[1] img-reveal">
                <img
                  src={officeImg}
                  alt="Office Team"
                  className="w-full h-auto object-cover block"
                />
              </div>

              {/* CEO Small Image - overlapping bottom-right of main image */}
              <div className="absolute bottom-[6rem] right-[8%] w-[35%] max-w-[12rem] bg-white rounded-[0.5rem] shadow-2xl p-[0.25rem] z-[2] animate-float">
                <img
                  src={ceoImg}
                  alt="CEO - Mark Stranger"
                  className="w-full h-auto object-cover rounded-[0.375rem] block"
                />
              </div>

              {/* 1500+ Stat Box */}
              <div className="absolute bottom-0 left-[10%] z-[3]">
                <div className="bg-[#2B60E6] text-white rounded-[0.5rem] shadow-xl py-[1rem] px-[2.5rem] flex flex-col items-center">
                  <span className="text-[1.5rem] font-bold leading-none mb-[0.25rem]">1500+</span>
                  <span className="text-[0.625rem] text-white/90 uppercase tracking-wider font-medium">Project Done</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Text Content */}
          <div className="flex flex-col text-left pt-[1rem]">
            <ScrollReveal direction="right" delay={150}>
              <span className="inline-block px-[1.25rem] py-[0.25rem] rounded-full text-blue-600 border border-blue-600/30 font-medium text-[0.875rem] w-fit mb-[1.25rem]">
                About Us
              </span>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={100}>
              <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[2.75rem] font-bold text-slate-800 leading-[1.2] mb-[1.25rem] tracking-tight">
                We Don't Just Build Apps — We Build Opportunities
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={150}>
              <p className="text-[1rem] text-slate-600 leading-relaxed mb-[2rem]">
                Discover the story behind All Rounder — a platform built to connect people, skills, and opportunities.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={200}>
              <div className="border-l-[0.1875rem] border-blue-600 pl-[1.25rem] mb-[2rem]">
                <p className="text-[1rem] text-slate-700 italic leading-relaxed">
                  "All Rounder was born from a simple idea — to connect clients with skilled local professionals in minutes."
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={250}>
              <div className="flex items-center gap-[0.75rem]">
                <div className="w-[3rem] h-[3rem] rounded-full overflow-hidden shadow-sm border border-slate-200 shrink-0">
                  <img src={ceoImg} alt="Mark Stranger" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[1rem] font-bold text-slate-800 leading-none mb-[0.25rem]">Mark Stranger</span>
                  <span className="text-[0.8125rem] text-slate-500 font-medium leading-none">CEO & Founder</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
