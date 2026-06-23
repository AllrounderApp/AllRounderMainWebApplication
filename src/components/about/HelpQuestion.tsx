import React from 'react';
import questionImg from '../../assets/aboutUs/QuestionImage.webp';
import ScrollReveal from '../common/ScrollReveal';

const HelpQuestion: React.FC = () => {
  return (
    <section className="py-[4rem] bg-white">
      <div className="max-w-[105rem] mx-auto px-[1.5rem] sm:px-[2rem] lg:px-[4rem]">
        <ScrollReveal direction="up" delay={100} duration={800}>
          <div
            className="relative w-full rounded-[1rem] overflow-hidden min-h-[16rem] md:min-h-[18rem] flex items-center img-reveal"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(7, 30, 82, 0.85) 0%, rgba(7, 30, 82, 0.6) 50%, rgba(7, 30, 82, 0.3) 100%), url(${questionImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="relative z-10 px-[2.5rem] md:px-[4rem] py-[3rem] max-w-[35rem]">
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold text-white leading-[1.2] mb-[0.75rem]">
                Need Help or Have a Question?
              </h2>
              <p className="text-[0.9375rem] text-white/80 leading-relaxed mb-[1.5rem]">
                Contact our support team for quick answers, guidance, or any app-related queries.
              </p>
              <button className="bg-[#2B60E6] hover:bg-blue-700 text-white font-medium text-[0.9375rem] px-[2rem] py-[0.75rem] rounded-full transition-all active:scale-95 shadow-md btn-shine">
                Get a Question
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HelpQuestion;
