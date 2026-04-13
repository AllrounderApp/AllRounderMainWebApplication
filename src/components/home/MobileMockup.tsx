import React from 'react';
import Badge from '../common/Badge';
import mobileHero from '../../assets/home/MobileHero.png';

const MobileMockup: React.FC = () => {
  return (
    <div className="relative z-0 w-full h-[35rem] sm:h-[45rem] lg:h-[55rem] flex items-center justify-center translate-x-[3rem] md:translate-x-[5rem] lg:translate-x-[8rem] xl:translate-x-[10rem]">
      {/* 1. Filled Circle (no border) - Green/Blue mixture */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full bg-gradient-to-br from-transparent via-emerald-300/60 to-blue-500/70 blur-[2rem] pointer-events-none"></div>

      {/* 2. Border Circle (one is border) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] border-[0.125rem] border-white/70 rounded-full pointer-events-none"></div>


      {/* Main Hero Image containing both phones */}
      <div className="relative z-10 w-full h-full flex justify-center items-center animate-float">
        <img
          src={mobileHero}
          alt="App Mockups"
          className="w-[45rem] sm:w-[55rem] md:w-[55rem] lg:w-[60rem] max-w-none h-auto object-contain drop-shadow-[0_2rem_4rem_rgba(0,0,0,0.15)]"
        />

        {/* Floating Badges accurately anchored to the border circle perimeter */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[24rem] h-[24rem] md:w-[34rem] md:h-[34rem] lg:w-[40rem] lg:h-[40rem] pointer-events-none z-20">
          {/* Top Right Badge touching border */}
          <Badge
            icon={<svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
            label="Active User"
            value="1M+"
            iconBgColor="bg-[#facc15]"
            className="absolute top-[10%] right-[14%] translate-x-[30%] -translate-y-[20%] pointer-events-auto scale-90 md:scale-100"
          />
          {/* Bottom Left Badge touching border */}
          <Badge
            icon={<svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            label="Daily earn"
            value="1500+"
            iconBgColor="bg-[#22c55e]"
            className="absolute bottom-[20%] left-[8%] -translate-x-[40%] translate-y-[10%] pointer-events-auto scale-90 md:scale-100"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileMockup;
