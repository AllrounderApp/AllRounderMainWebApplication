import React from 'react';
import visionImg from '../../assets/aboutUs/VisonImage.png';
import ScrollReveal from '../common/ScrollReveal';

const MissionVision: React.FC = () => {
  return (
    <section className="relative bg-[#2B60E6] overflow-hidden">
      <div className="max-w-[105rem] mx-auto px-[1.5rem] sm:px-[2rem] lg:px-[4rem]">

        {/* Top Content Area */}
        <div className="relative z-10 pt-[4rem] pb-[10rem]">
          {/* Badge */}
          <ScrollReveal direction="up" delay={0}>
            <span className="inline-block px-[1.25rem] py-[0.25rem] rounded-full text-white border border-white/40 font-medium text-[0.875rem] mb-[1.25rem]">
              Our Mission &amp; Vision
            </span>
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal direction="up" delay={60}>
            <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-white leading-[1.2] mb-[2.5rem] max-w-[30rem]">
              Building a Better Future for Local Work
            </h2>
          </ScrollReveal>

          {/* Content Row: Video + Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem] items-start">
            {/* Video Thumbnail */}
            <ScrollReveal direction="up" delay={80}>
              <div className="relative rounded-[0.75rem] overflow-hidden shadow-lg group cursor-pointer img-reveal">
                <img
                  src={visionImg}
                  alt="Vision Video"
                  className="w-full h-[14rem] object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
                {/* Play Button */}
                <div className="absolute bottom-[1rem] left-[1rem] w-[3rem] h-[3rem] bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-[1.25rem] h-[1.25rem] text-blue-600 ml-[0.125rem]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </ScrollReveal>

            {/* Our Mission Card */}
            <ScrollReveal direction="up" delay={150}>
              <div className="bg-white rounded-[0.75rem] p-[1.75rem] shadow-md relative card-hover">
                <div className="absolute -top-[1.25rem] left-[1.75rem] w-[2.75rem] h-[2.75rem] bg-blue-50 rounded-[0.625rem] flex items-center justify-center shadow-sm border border-blue-100">
                  <svg className="w-[1.375rem] h-[1.375rem] text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
                <h3 className="text-[1.25rem] font-bold text-slate-800 mb-[0.75rem] mt-[0.5rem]">Our Mission</h3>
                <p className="text-[0.875rem] text-slate-600 leading-relaxed">
                  To make local hiring simple, fast, and transparent — empowering people to find trusted services and real job opportunities within their community.
                </p>
                <p className="text-[0.875rem] text-slate-600 leading-relaxed mt-[0.5rem]">
                  We believe every skill, no matter how small, deserves visibility and value.
                </p>
              </div>
            </ScrollReveal>

            {/* Our Vision Card */}
            <ScrollReveal direction="up" delay={220}>
              <div className="bg-white rounded-[0.75rem] p-[1.75rem] shadow-md relative card-hover">
                <div className="absolute -top-[1.25rem] left-[1.75rem] w-[2.75rem] h-[2.75rem] bg-blue-50 rounded-[0.625rem] flex items-center justify-center shadow-sm border border-blue-100">
                  <svg className="w-[1.375rem] h-[1.375rem] text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-[1.25rem] font-bold text-slate-800 mb-[0.75rem] mt-[0.5rem]">Our Vision</h3>
                <p className="text-[0.875rem] text-slate-600 leading-relaxed">
                  To build a connected world where anyone can post, work, and grow — all through one platform.
                </p>
                <p className="text-[0.875rem] text-slate-600 leading-relaxed mt-[0.5rem]">
                  All Rounder aims to become the most trusted bridge between clients and service providers, creating opportunities for millions.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Large Woman Image - Positioned to the right */}
        <div className="absolute top-0 right-0 h-full w-[45%] hidden lg:block z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2B60E6] via-[#2B60E6]/50 to-transparent z-[1]" />
          <img
            src={visionImg}
            alt="Vision Background"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white py-[2.5rem]">
        <div className="max-w-[105rem] mx-auto px-[1.5rem] sm:px-[2rem] lg:px-[4rem]">
          <div className="grid grid-cols-3 gap-[2rem] max-w-[50rem]">
            <ScrollReveal direction="up" delay={50}>
              <div className="text-center">
                <span className="text-[2.5rem] md:text-[3rem] font-bold text-slate-800 leading-none block">1500+</span>
                <span className="text-[0.9375rem] text-slate-500 font-medium mt-[0.375rem] block">Project Done</span>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={120}>
              <div className="text-center">
                <span className="text-[2.5rem] md:text-[3rem] font-bold text-slate-800 leading-none block">97%</span>
                <span className="text-[0.9375rem] text-slate-500 font-medium mt-[0.375rem] block">Success Rate</span>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={190}>
              <div className="text-center">
                <span className="text-[2.5rem] md:text-[3rem] font-bold text-slate-800 leading-none block">1M+</span>
                <span className="text-[0.9375rem] text-slate-500 font-medium mt-[0.375rem] block">Business Trust us</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
