import React, { useState } from 'react';
import ScrollReveal from '../common/ScrollReveal';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqsLeft: FAQItem[] = [
  {
    id: 'q1',
    question: 'What is All Rounder?',
    answer: 'All Rounder is a platform that connects local professionals and workers with people who need real day-to-day services quickly and reliably.'
  },
  {
    id: 'q2',
    question: 'How do I post a job?',
    answer: 'Simply create an account, click "Post Job," add details like description, budget, photo, and location — and your job will be visible to nearby professionals.'
  },
  {
    id: 'q3',
    question: 'Is All Rounder free to use?',
    answer: 'Yes! Posting a job and browsing for professionals is completely free for users.'
  },
  {
    id: 'q4',
    question: 'How do I find local professionals?',
    answer: 'You can use our search feature or browse through specific service categories to find top-rated professionals right in your neighborhood.'
  }
];

const faqsRight: FAQItem[] = [
  {
    id: 'q5',
    question: 'Can I chat with professionals directly?',
    answer: 'Yes, once you connect with a professional, you can use our built-in chat system to discuss details, negotiate prices, and share locations directly.'
  },
  {
    id: 'q6',
    question: 'How are service providers verified?',
    answer: 'We perform basic mobile verification and encourage providers to submit KYC documents. The review and rating system also ensures transparency and trust.'
  },
  {
    id: 'q7',
    question: 'What if I\'m not happy with a service?',
    answer: 'You can leave an honest review detailing your experience to inform others, and our support team is always available to help resolve any disputes.'
  }
];

interface FAQCardProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQCard: React.FC<FAQCardProps> = ({ item, isOpen, onToggle }) => {
  return (
    <div
      className={`border-b-[0.0625rem] transition-all duration-300 ${isOpen
          ? 'bg-indigo-50/60 border-indigo-100 rounded-lg shadow-sm border-b-0'
          : 'border-slate-200 hover:bg-slate-50/50'
        }`}
    >
      <button
        onClick={onToggle}
        className={`w-full flex justify-between items-center text-left py-4 ${isOpen ? 'px-5 pt-5 pb-3' : 'px-2'} transition-all duration-200`}
      >
        <span className="text-[1rem] font-semibold text-slate-800 tracking-tight">
          {item.question}
        </span>
        <svg
          className={`w-5 h-5 text-slate-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-indigo-500' : ''
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[20rem] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className={`text-slate-600 text-[0.9375rem] leading-relaxed ${isOpen ? 'px-5 pb-5 pt-0' : 'px-2'}`}>
          {item.answer}
        </div>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  // Start with 'q2' open based on the screenshot
  const [openId, setOpenId] = useState<string | null>('q2');

  const handleToggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="py-[6rem] max-w-[105rem] mx-auto px-5 sm:px-10 lg:px-20 bg-white">
      <div className="flex flex-col items-center">
        {/* Header */}
        <ScrollReveal direction="up" delay={0}>
          <div className="flex flex-col items-center">
            <div className="px-6 py-1.5 rounded-full border-[0.0625rem] border-blue-400 text-blue-600 text-[0.875rem] font-medium mb-6 inline-block bg-white text-center">
              FAQ
            </div>

            <h2 className="text-[2.25rem] lg:text-[2.75rem] font-bold text-slate-800 text-center leading-tight mb-3">
              Frequently Asked Questions
            </h2>

            <p className="text-[1.125rem] text-slate-500 text-center mb-14">
              Quick answers to the most common questions about All Rounder.
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-0 items-start">
          {/* Left Column */}
          <ScrollReveal direction="left" delay={100}>
            <div className="flex flex-col gap-2">
              {faqsLeft.map((faq) => (
                <FAQCard
                  key={faq.id}
                  item={faq}
                  isOpen={openId === faq.id}
                  onToggle={() => handleToggle(faq.id)}
                />
              ))}
            </div>
          </ScrollReveal>

          {/* Right Column */}
          <ScrollReveal direction="right" delay={200}>
            <div className="flex flex-col gap-2">
              {faqsRight.map((faq) => (
                <FAQCard
                  key={faq.id}
                  item={faq}
                  isOpen={openId === faq.id}
                  onToggle={() => handleToggle(faq.id)}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
