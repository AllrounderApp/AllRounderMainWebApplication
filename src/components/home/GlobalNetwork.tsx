import React from 'react';
import ScrollReveal from '../common/ScrollReveal';

// Pin component with avatar and glowing dot below it
const MapPin: React.FC<{
  top: string;
  left: string;
  imageUrl: string;
  delay?: string;
  glowColor?: string;
}> = ({ top, left, imageUrl, delay = '0s', glowColor = 'bg-blue-400' }) => {
  return (
    <div 
      className="absolute flex flex-col items-center animate-float" 
      style={{ top, left, animationDelay: delay }}
    >
      <div className="relative">
        <div className="w-[3.5rem] h-[3.5rem] rounded-full border-[0.1875rem] border-white overflow-hidden shadow-lg bg-white z-10 relative">
          <img src={imageUrl} alt="User" className="w-full h-full object-cover" />
        </div>
        {/* Pointer Triangle */}
        <div className="absolute -bottom-[0.5rem] left-[50%] -translate-x-[50%] w-0 h-0 border-l-[0.5rem] border-r-[0.5rem] border-t-[0.625rem] border-l-transparent border-r-transparent border-t-white z-0"></div>
      </div>
      
      {/* Glowing point on the map */}
      <div className="relative mt-[0.75rem] flex items-center justify-center">
        <div className={`w-[0.5rem] h-[0.5rem] rounded-full ${glowColor} opacity-80 z-10`}></div>
        <div className={`absolute w-[1.5rem] h-[1.5rem] rounded-full ${glowColor} opacity-30 animate-ping`}></div>
        <div className={`absolute w-[2.5rem] h-[2.5rem] rounded-full ${glowColor} opacity-10 animate-ping`} style={{ animationDuration: '3s' }}></div>
      </div>
    </div>
  );
};

const GlobalNetwork: React.FC = () => {
  return (
    <section className="py-[6rem] bg-white overflow-hidden">
      <div className="max-w-[95rem] mx-auto px-[1.5rem] sm:px-[3rem] lg:px-[4rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center">
          
          {/* Left Area - Map & Pins */}
          <ScrollReveal direction="left" delay={50}>
            <div className="relative w-full h-[30rem] sm:h-[35rem] lg:h-[40rem] flex items-center justify-center lg:justify-start">
              {/* The World Map Image Placeholder */}
              <img 
                src="../../assets/home/WorldMap.png" 
                alt="World Map" 
                className="w-full h-auto object-contain opacity-60 max-w-[45rem]"
                onError={(e) => {
                  e.currentTarget.src = 'https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg';
                  e.currentTarget.style.opacity = '0.2';
                }}
              />

              {/* Scattered Avatar Pins */}
              <MapPin top="20%" left="10%" imageUrl="https://i.pravatar.cc/150?img=1" delay="0s" glowColor="bg-indigo-400" />
              <MapPin top="10%" left="40%" imageUrl="https://i.pravatar.cc/150?img=2" delay="1s" glowColor="bg-purple-400" />
              <MapPin top="30%" left="35%" imageUrl="https://i.pravatar.cc/150?img=3" delay="2s" glowColor="bg-blue-400" />
              <MapPin top="45%" left="55%" imageUrl="https://i.pravatar.cc/150?img=4" delay="0.5s" glowColor="bg-indigo-500" />
              <MapPin top="38%" left="80%" imageUrl="https://i.pravatar.cc/150?img=5" delay="1.5s" glowColor="bg-blue-500" />
              <MapPin top="70%" left="85%" imageUrl="https://i.pravatar.cc/150?img=6" delay="2.5s" glowColor="bg-purple-500" />
            </div>
          </ScrollReveal>

          {/* Right Area - Content */}
          <div className="flex flex-col gap-[2.5rem] lg:pl-[2rem]">
            <div className="flex flex-col gap-[1rem]">
              <ScrollReveal direction="right" delay={100}>
                <h2 className="text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] font-bold text-slate-800 leading-[1.2] tracking-tight">
                  Building a World Where Everyone Can Work Together
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={150}>
                <p className="text-[1.125rem] text-slate-600 leading-relaxed max-w-[35rem]">
                  Join a growing network of clients and professionals changing how local jobs get done.
                </p>
              </ScrollReveal>
            </div>

            <div className="flex flex-col gap-[1.5rem]">
              
              {/* Feature Item 1 */}
              <ScrollReveal direction="right" delay={200}>
                <div className="flex items-center gap-[1.25rem] card-hover p-[0.5rem] rounded-[0.75rem]">
                  <div className="w-[2.75rem] h-[2.75rem] rounded-[0.5rem] bg-[#165DFF] text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-600/20">
                    <svg className="w-[1.5rem] h-[1.5rem]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-[1.125rem] font-bold text-slate-700">5K+ Verified Professionals</p>
                </div>
              </ScrollReveal>

              {/* Feature Item 2 */}
              <ScrollReveal direction="right" delay={250}>
                <div className="flex items-center gap-[1.25rem] card-hover p-[0.5rem] rounded-[0.75rem]">
                  <div className="w-[2.75rem] h-[2.75rem] rounded-[0.5rem] bg-[#165DFF] text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-600/20">
                    <svg className="w-[1.5rem] h-[1.5rem]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="text-[1.125rem] font-bold text-slate-700">4.8★ User Satisfaction</p>
                </div>
              </ScrollReveal>

              {/* Feature Item 3 */}
              <ScrollReveal direction="right" delay={300}>
                <div className="flex items-center gap-[1.25rem] card-hover p-[0.5rem] rounded-[0.75rem]">
                  <div className="w-[2.75rem] h-[2.75rem] rounded-[0.5rem] bg-[#165DFF] text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-600/20">
                    <svg className="w-[1.5rem] h-[1.5rem]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-[1.125rem] font-bold text-slate-700">1000+ Jobs Posted Daily</p>
                </div>
              </ScrollReveal>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;
