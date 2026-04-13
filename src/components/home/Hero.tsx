import MobileMockup from './MobileMockup';
import ScrollReveal from '../common/ScrollReveal';

const Hero: React.FC = () => {
  return (
    <section className="pt-[1rem] pb-[1rem] overflow-hidden bg-gradient-to-br from-[#f8f9ff] via-[#f0f4ff] to-[#e8edff]">
      <div className="max-w-[105rem] mx-auto px-[1.5rem] sm:px-[2rem] lg:px-[4rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[2rem] items-center">

          {/* Left Column: Content */}
          <div className="lg:col-span-5 flex flex-col gap-[2rem] text-left">
            <ScrollReveal direction="up" delay={100}>
              <h1 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[3.5rem] xl:text-[3.5rem] font-bold text-slate-800 leading-[1.1] tracking-tight lg:whitespace-nowrap relative z-10">
                Post & find Your Job Everything in <br />
                one App
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={250}>
              <p className="text-[1.25rem] text-slate-600 leading-relaxed max-w-[35rem] mx-auto lg:mx-0">
                A smart platform to discover local talent, post quick jobs, and grow your service network.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <div className="flex flex-col sm:flex-row items-center gap-[2.5rem] justify-center lg:justify-start">
                {/* Play Store Button Styled */}
                <button className="flex items-center gap-[1rem] bg-[#2B60E6] text-white px-[2rem] py-[1rem] rounded-full hover:bg-blue-700 transition-all active:scale-95 shadow-md btn-shine">
                  <div className="w-[1.75rem] h-[1.75rem]">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a1.5 1.5 0 0 1-.61-.986V2.8a1.5 1.5 0 0 1 .61-.986z" />
                      <path d="M14.792 11.208l3.35 1.93a1.5 1.5 0 0 1 0 2.6l-3.35 1.93-4.183-4.183 4.183-4.184z" />
                      <path d="M4.61 22.686L14.793 16.8 10.61 12.617 4.61 22.686z" />
                      <path d="M4.61 1.314L10.61 11.383 14.793 7.2 4.61 1.314z" />
                    </svg>
                  </div>
                  <div className="text-left leading-none">
                    <p className="text-[0.6875rem] tracking-wider uppercase opacity-90 mb-[0.25rem]">Download Now</p>
                    <p className="text-[1.125rem] font-semibold">Google Play</p>
                  </div>
                </button>

                {/* Stats/Social Proof */}
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-[1rem] mb-[0.25rem]">
                    <span className="text-[1.375rem] font-bold text-slate-800 leading-none tracking-tight">1.1k+</span>
                    <div className="flex gap-[0.125rem]">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-[1.25rem] h-[1.25rem] text-[#f59e0b] fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <span className="text-[0.875rem] text-slate-500 font-medium tracking-tight">Active User</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Visuals — no ScrollReveal wrapper to avoid breaking layout */}
          <div className="lg:col-span-7 relative flex justify-end">
            <MobileMockup />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
