import React from 'react';
import ScrollReveal from '../common/ScrollReveal';

const ContactForm: React.FC = () => {
  return (
    <section className="py-[4rem] bg-gradient-to-br from-[#f4f6ff] via-[#eef1ff] to-[#e8edff]">
      <div className="max-w-[105rem] mx-auto px-[1.5rem] sm:px-[2rem] lg:px-[4rem]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-[2.5rem] items-start">

          {/* Left: Map + Address Info */}
          <div className="flex flex-col gap-[2rem]">
            {/* Map Container */}
            <ScrollReveal direction="left" delay={50}>
              <div className="relative w-full h-[22rem] md:h-[26rem] rounded-[0.75rem] overflow-hidden shadow-md border border-slate-200 bg-white">
                <div className="absolute top-[1rem] left-[1rem] z-10">
                  <button className="bg-white text-slate-700 text-[0.8125rem] font-medium px-[1rem] py-[0.375rem] rounded-[0.375rem] shadow-sm border border-slate-200 hover:bg-slate-50 transition-colors">
                    View Map
                  </button>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29434.07455!2d88.38!3d22.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8996e19a1a81d%3A0x6f2b9f5b5e5c5f5!2sChinsurah%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                />
              </div>
            </ScrollReveal>

            {/* Address Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[2rem]">
              <ScrollReveal direction="up" delay={80}>
                <div>
                  <h4 className="text-[1rem] font-bold text-slate-800 mb-[0.75rem]">Office Address:</h4>
                  <p className="text-[0.875rem] text-slate-600 leading-relaxed">
                    <span className="font-semibold text-slate-700">Kolkata,</span> Alinagar, Kaswara,<br />
                    Near HDFC Bank, Chinsurah,<br />
                    West Bengal 792792
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={150}>
                <div>
                  <h4 className="text-[1rem] font-bold text-slate-800 mb-[0.75rem]">Phone Number :</h4>
                  <p className="text-[0.875rem] text-slate-600 leading-relaxed">
                    +91 **********<br />
                    +91 **********
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={200}>
                <div>
                  <h4 className="text-[1rem] font-bold text-slate-800 mb-[0.75rem]">Mail Address:</h4>
                  <p className="text-[0.875rem] text-slate-600 leading-relaxed">
                    support@allrounder.com<br />
                    allrounder@gmail.com
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right: Online Enquiry Form */}
          <ScrollReveal direction="right" delay={80}>
            <div className="bg-white rounded-[0.75rem] shadow-md p-[2rem] md:p-[2.5rem] border border-slate-100 card-hover">
              <h3 className="text-[1.75rem] font-bold text-slate-800 text-center mb-[0.5rem]">Online Enquiry</h3>
              <p className="text-[0.875rem] text-slate-500 text-center mb-[2rem] leading-relaxed">
                We Work With Ambitious Leaders Who Want To Define The Future, Not Hide From It.
              </p>

              <form className="flex flex-col gap-[1.25rem]">
                {/* Full Name */}
                <div>
                  <label className="block text-[0.8125rem] font-medium text-slate-700 mb-[0.375rem]">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full h-[2.75rem] bg-slate-50 border border-slate-200 rounded-[0.375rem] px-[1rem] text-[0.875rem] text-slate-800 outline-none focus:border-blue-400 focus:ring-[2px] focus:ring-blue-100 transition-all"
                    placeholder=""
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[0.8125rem] font-medium text-slate-700 mb-[0.375rem]">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full h-[2.75rem] bg-slate-50 border border-slate-200 rounded-[0.375rem] px-[1rem] text-[0.875rem] text-slate-800 outline-none focus:border-blue-400 focus:ring-[2px] focus:ring-blue-100 transition-all"
                    placeholder=""
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-[0.8125rem] font-medium text-slate-700 mb-[0.375rem]">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full h-[2.75rem] bg-slate-50 border border-slate-200 rounded-[0.375rem] px-[1rem] text-[0.875rem] text-slate-800 outline-none focus:border-blue-400 focus:ring-[2px] focus:ring-blue-100 transition-all"
                    placeholder=""
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[0.8125rem] font-medium text-slate-700 mb-[0.375rem]">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-slate-50 border border-slate-200 rounded-[0.375rem] px-[1rem] py-[0.75rem] text-[0.875rem] text-slate-800 outline-none focus:border-blue-400 focus:ring-[2px] focus:ring-blue-100 transition-all resize-none"
                    placeholder=""
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-[0.5rem]">
                  <button
                    type="submit"
                    className="bg-[#2B60E6] hover:bg-blue-700 text-white font-semibold text-[0.9375rem] px-[2.5rem] py-[0.75rem] rounded-full transition-all active:scale-95 shadow-md btn-shine"
                  >
                    Send us a massage
                  </button>
                </div>
              </form>

              {/* Child Safety & CSAE Policy */}
              <div className="mt-[2rem] pt-[1.5rem] border-t border-slate-200">
                <h4 className="text-[1rem] font-bold text-slate-800 mb-[0.75rem]">
                  Child Safety & CSAE Prohibition Policy
                </h4>

                <p className="text-[0.8125rem] text-slate-600 leading-relaxed mb-[0.75rem]">
                  At AllRounder, we maintain a zero-tolerance policy toward
                  child sexual abuse, exploitation, or endangerment.
                </p>

                <div className="space-y-[0.75rem] text-[0.8125rem] text-slate-600 leading-relaxed">
                  <div>
                    <span className="font-semibold text-slate-700">
                      1. Explicit Prohibition of CSAE and CSAM
                    </span>
                    <ul className="list-disc pl-[1.25rem] mt-[0.25rem] space-y-[0.25rem]">
                      <li>
                        Visual content depicting the sexual abuse or
                        exploitation of minors.
                      </li>
                      <li>
                        Content that promotes, facilitates, or encourages child
                        sexual exploitation.
                      </li>
                      <li>
                        Grooming behaviors, trafficking, or any form of online
                        or offline endangerment of minors.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <span className="font-semibold text-slate-700">
                      2. Enforcement and Material Removal
                    </span>
                    <ul className="list-disc pl-[1.25rem] mt-[0.25rem] space-y-[0.25rem]">
                      <li>
                        Immediate removal or disabling of access to prohibited
                        material.
                      </li>
                      <li>
                        Permanent suspension and banning of offending accounts.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <span className="font-semibold text-slate-700">
                      3. Reporting to Authorities
                    </span>
                    <p className="mt-[0.25rem]">
                      Confirmed incidents involving CSAM or CSAE may be reported
                      to appropriate national and international law-enforcement
                      authorities, including NCMEC where applicable.
                    </p>
                  </div>

                  <div>
                    <span className="font-semibold text-slate-700">
                      4. User Reporting Mechanism
                    </span>
                    <p className="mt-[0.25rem]">
                      Users can report safety concerns, suspected child
                      exploitation, or child endangerment through the
                      AllRounder platform or by contacting our safety team at{" "}
                      <a
                        href="mailto:supportallrounder@allrounderapp.com"
                        className="text-[#2B60E6] hover:underline"
                      >
                        supportallrounder@allrounderapp.com
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
