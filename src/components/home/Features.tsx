import React from 'react';
import featuresMobile from '../../assets/home/FeaturesMobile.png';
import ScrollReveal from '../common/ScrollReveal';

const featuresList = [
  {
    side: 'left',
    icon: (
      <svg className="w-[1.25rem] h-[1.25rem]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Location-Based Matching',
    desc: 'Find nearby professionals or jobs instantly using GPS-based search.',
    top: '15%'
  },
  {
    side: 'left',
    icon: (
      <svg className="w-[1.25rem] h-[1.25rem]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Secure Payments',
    desc: 'Smooth and safe payment flow between clients and workers.',
    top: '45%'
  },
  {
    side: 'left',
    icon: (
      <svg className="w-[1.25rem] h-[1.25rem]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
    title: 'Light & Dark Mode',
    desc: 'Switch between light and dark themes for a comfortable viewing experience.',
    top: '75%'
  },
  {
    side: 'right',
    icon: (
      <svg className="w-[1.25rem] h-[1.25rem]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Like, Comment & Share',
    desc: 'Engage with posts, share opportunities, and build your local network.',
    top: '15%'
  },
  {
    side: 'right',
    icon: (
      <svg className="w-[1.25rem] h-[1.25rem]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Post Jobs with Photos',
    desc: 'Add images or short clips to make your job posts more descriptive.',
    top: '45%'
  },
  {
    side: 'right',
    icon: (
      <svg className="w-[1.25rem] h-[1.25rem]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Personalized Profile',
    desc: 'Add your skills, work history, and portfolio to attract more jobs.',
    top: '75%'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-[2rem] min-h-screen flex flex-col justify-center overflow-hidden bg-[#F8FAFC]">
      <div className="max-w-[95rem] w-full mx-auto px-[0.5rem] sm:px-[4rem] lg:px-[5rem]">

        {/* Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center max-w-[40rem] mx-auto mb-[-3rem]">
            <div className="inline-block px-[1.25rem] py-[0.375rem] rounded-full border-[0.0625rem] border-indigo-200 text-indigo-600 text-[0.875rem] font-bold mb-[1.5rem] bg-indigo-50/50">
              Features
            </div>
            <h2 className="text-[1.5rem] md:text-[2rem] font-bold text-slate-800 leading-[1.2] tracking-tight mb-[1rem]">
              Features That Makes app Dfferents
            </h2>
            <p className="text-[1rem] text-slate-500 leading-relaxed">
              Built with powerful features to simplify every <br className="hidden sm:block" />
              step — from posting to payment.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Layout */}
        <div className="relative w-full max-w-[80rem] mx-auto overflow-hidden lg:overflow-visible">

          {/* Background Circles */}
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[8rem] h-[8rem] sm:w-[18rem] sm:h-[18rem] md:w-[28rem] md:h-[28rem] bg-[#165DFF] rounded-full z-0 pointer-events-none"></div>
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[16rem] h-[16rem] sm:w-[26rem] sm:h-[26rem] md:w-[36rem] md:h-[36rem] border-[0.125rem] border-slate-300 border-dashed rounded-full z-0 pointer-events-none opacity-50"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[2rem] relative z-10 items-center">

            {/* Left Features */}
            <div className="lg:col-span-4 flex flex-col gap-[4rem] items-end order-2 lg:order-1 relative z-20 w-full lg:pr-[2rem]">
              {featuresList.filter(f => f.side === 'left').map((feature, i) => (
                <ScrollReveal key={i} direction="left" delay={i * 150}>
                  <div className="bg-white/95 backdrop-blur-sm border-[0.0625rem] border-indigo-100 p-[1.25rem] rounded-[1rem] shadow-xl shadow-indigo-100/50 max-w-[24rem] w-full flex items-start gap-[1.25rem] card-hover">
                    <div className="w-[3rem] h-[3rem] shrink-0 bg-blue-50 text-[#165DFF] rounded-full flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-[1rem] font-bold text-slate-800 mb-[0.25rem]">{feature.title}</h3>
                      <p className="text-[0.7rem] text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Center Phone */}
            <div className="lg:col-span-4 flex justify-center order-1 lg:order-2 relative z-10">
              <ScrollReveal direction="up" delay={80}>
                <img
                  src={featuresMobile}
                  alt="App Interface Features"
                  className="w-[55rem] sm:w-[60rem] md:w-[65rem] lg:w-[70rem] max-w-none h-auto drop-shadow-2xl object-contain hover:scale-[1.02] transition-transform duration-300"
                />
              </ScrollReveal>
            </div>

            {/* Right Features */}
            <div className="lg:col-span-4 flex flex-col gap-[4rem] items-start order-3 relative z-20 w-full lg:pl-[2rem]">
              {featuresList.filter(f => f.side === 'right').map((feature, i) => (
                <ScrollReveal key={i} direction="right" delay={i * 150}>
                  <div className="bg-white/95 backdrop-blur-sm border-[0.0625rem] border-indigo-100 p-[1.25rem] rounded-[1rem] shadow-xl shadow-indigo-100/50 max-w-[24rem] w-full flex items-start gap-[1.25rem] card-hover">
                    <div className="w-[3rem] h-[3rem] shrink-0 bg-blue-50 text-[#165DFF] rounded-full flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-[1rem] font-bold text-slate-800 mb-[0.25rem]">{feature.title}</h3>
                      <p className="text-[0.7rem] text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
