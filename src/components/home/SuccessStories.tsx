import React from 'react';
import ScrollReveal from '../common/ScrollReveal';

const StarIcon = () => (
  <svg
    className="w-[1.25rem] h-[1.25rem] text-[#f59e0b] fill-[#f59e0b]"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const AppStoreIcon = () => (
  <div className="w-[3.5rem] h-[3.5rem] rounded-full bg-[#1877F2] flex items-center justify-center">
    <svg className="w-[2rem] h-[2rem] text-white fill-current" viewBox="0 0 24 24">
      <path d="M15.4 10.6c-.1-2 1.6-3.2 1.7-3.2-1.3-1.9-3.2-2.1-3.9-2.2-1.6-.2-3.3 1-4.2 1-.9 0-2.3-1-3.6-1-1.9 0-3.6 1.1-4.6 2.8-2 3.6-.5 8.9 1.4 11.7 1 1.4 2.1 3 3.6 3 1.4-.1 2-1 3.7-1 1.7 0 2.2 1 3.7 1 1.5.1 2.5-1.4 3.5-2.8 1.2-1.7 1.6-3.3 1.7-3.4-.1-.1-2.9-1.1-3-3.9zm-2.4-6.3c.8-.9 1.3-2.2 1.1-3.4-1.2.1-2.6.7-3.4 1.6-.7.8-1.3 2-1.1 3.3 1.3.1 2.5-.5 3.4-1.5z" />
    </svg>
  </div>
);

const PlayStoreIcon = () => (
  <svg className="w-[3.5rem] h-[3.5rem]" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.4 6.1C5.1 6.4 5 6.9 5 7.6V40.4C5 41.1 5.1 41.6 5.4 41.9L5.5 42L24.8 22.7L24.8 22.5V22.4L5.5 3L5.4 6.1Z" fill="#32A071" />
    <path d="M30.4 28.3L24.8 22.7L24.8 22.4L30.4 16.8L30.5 16.9L37.1 20.6C39 21.7 39 23.4 37.1 24.5L30.5 28.2L30.4 28.3Z" fill="#F8BA26" />
    <path d="M30.5 28.2L24.8 22.5L5.4 42C5.9 42.4 6.6 42.5 7.5 42L30.5 28.2Z" fill="#E8443B" />
    <path d="M30.5 16.9L7.5 3C6.6 2.5 5.9 2.6 5.4 3.1L24.8 22.5L30.5 16.9Z" fill="#1877F2" />
  </svg>
);

const SuccessStories: React.FC = () => {
  return (
    <section className="py-[5rem] max-w-[105rem] mx-auto px-5 sm:px-10 lg:px-20 bg-white relative overflow-hidden mt-[-6rem]">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

        {/* Left Content */}
        <div className="flex flex-col items-start font-sans">
          <ScrollReveal direction="up" delay={0}>
            <div className="px-5 py-1.5 rounded-full border-[0.0625rem] border-blue-400 text-blue-600 text-[0.875rem] font-medium mb-6 inline-block bg-blue-50/50">
              Reviews
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <h2 className="text-[2.25rem] lg:text-[3rem] font-bold text-slate-800 leading-tight mb-4">
              Success on All Rounder
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <p className="text-[1.125rem] text-slate-600 mb-10 max-w-md">
              Thousands of users trust All Rounder to find jobs, clients, and success.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <div className="flex items-center space-x-6 lg:space-x-10 mb-10">
              {/* App Store Stats */}
              <div className="flex items-center space-x-4">
                <AppStoreIcon />
                <div className="flex flex-col">
                  <div className="flex space-x-1 mb-1">
                    {[...Array(4)].map((_, i) => <StarIcon key={i} />)}
                  </div>
                  <span className="text-[0.75rem] text-slate-500 font-medium">Active User</span>
                  <span className="text-[1.125rem] font-bold text-slate-800 leading-none mt-0.5">5.4k+</span>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="w-[0.125rem] h-[3.5rem] bg-slate-200"></div>

              {/* Play Store Stats */}
              <div className="flex items-center space-x-4">
                <PlayStoreIcon />
                <div className="flex flex-col">
                  <div className="flex space-x-1 mb-1">
                    {[...Array(4)].map((_, i) => <StarIcon key={i} />)}
                  </div>
                  <span className="text-[0.75rem] text-slate-500 font-medium">Active User</span>
                  <span className="text-[1.125rem] font-bold text-slate-800 leading-none mt-0.5">1.1k+</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <button className="px-8 py-3 rounded-full border-[0.125rem] border-blue-200 text-blue-600 font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center btn-shine">
              See Review on app store
            </button>
          </ScrollReveal>
        </div>

        {/* Right Content - Cards */}
        <div className="relative">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-100/40 rounded-full blur-[4rem] -z-10 pointer-events-none"></div>

          <div className="flex flex-col gap-5 relative z-10 w-full">
            {/* Review Card 1 */}
            <ScrollReveal direction="right" delay={80}>
              <div className="bg-white p-6 rounded-[1.5rem] shadow-[0_0.25rem_1rem_rgba(0,0,0,0.04)] border-[0.0625rem] border-slate-100 max-w-[32rem] flex items-start gap-4 card-hover">
                <div className="w-[4rem] h-[4rem] rounded-full bg-slate-300 flex-shrink-0"></div>
                <div className="flex flex-col">
                  <div className="flex space-x-[0.125rem] mb-2">
                    {[...Array(4)].map((_, i) => <StarIcon key={i} />)}
                  </div>
                  <p className="text-slate-600 text-[1rem] leading-relaxed mb-3">
                    Love the app! Simple, clean, and super fast to connect with clients. The chat and review system make it very professional.
                  </p>
                  <p className="text-slate-800 font-semibold text-[1rem]">
                    Imran K. — <span className="text-slate-500 font-normal">AC Technician</span>
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Review Card 2 (Indented right) */}
            <ScrollReveal direction="right" delay={150}>
              <div className="bg-white p-6 rounded-[1.5rem] shadow-[0_0.25rem_1rem_rgba(0,0,0,0.04)] border-[0.0625rem] border-slate-100 max-w-[32rem] self-end lg:mr-4 flex items-start gap-4 card-hover ml-auto">
                <div className="w-[4rem] h-[4rem] rounded-full bg-slate-300 flex-shrink-0"></div>
                <div className="flex flex-col">
                  <div className="flex space-x-[0.125rem] mb-2">
                    {[...Array(4)].map((_, i) => <StarIcon key={i} />)}
                  </div>
                  <p className="text-slate-600 text-[1rem] leading-relaxed mb-3">
                    Finally, an app made for local workers! Easy to post, easy to connect — I get real work daily now.
                  </p>
                  <p className="text-slate-800 font-semibold text-[1rem]">
                    Sneha R
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Review Card 3 */}
            <ScrollReveal direction="right" delay={220}>
              <div className="bg-white p-6 rounded-[1.5rem] shadow-[0_0.25rem_1rem_rgba(0,0,0,0.04)] border-[0.0625rem] border-slate-100 max-w-[32rem] flex items-start gap-4 card-hover">
                <div className="w-[4rem] h-[4rem] rounded-full bg-slate-300 flex-shrink-0"></div>
                <div className="flex flex-col">
                  <div className="flex space-x-[0.125rem] mb-2">
                    {[...Array(4)].map((_, i) => <StarIcon key={i} />)}
                  </div>
                  <p className="text-slate-600 text-[1rem] leading-relaxed mb-3">
                    Got 5 new clients in my area within a week! All Rounder really helps small workers like me find real jobs easily.
                  </p>
                  <p className="text-slate-800 font-semibold text-[1rem]">
                    Rahul S. — <span className="text-slate-500 font-normal">Electrician</span>
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
