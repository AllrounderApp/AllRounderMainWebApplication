import React from 'react';
import ScrollReveal from '../common/ScrollReveal';

const PrivacyContent: React.FC = () => {
  return (
    <section className="py-[4rem] bg-white">
      <div className="max-w-[105rem] mx-auto px-[1.5rem] sm:px-[2rem] lg:px-[4rem]">
        <div className="max-w-[52rem] mx-auto">
          <ScrollReveal direction="up" delay={0}>
            <p className="text-[0.8125rem] text-slate-400 italic mb-[2rem]">Last Updated: 04/11/2025</p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <p className="text-[0.9375rem] text-slate-600 leading-[1.8] mb-[2.5rem]">
              At All Rounder, your privacy is our priority. This Privacy Policy explains how we collect, use, and protect your information when you use our mobile app or website.
            </p>
          </ScrollReveal>

          {/* 1 */}
          <ScrollReveal direction="up" delay={150}>
            <div className="mb-[2rem]">
              <h3 className="text-[1.125rem] font-bold text-slate-800 mb-[0.5rem]">1. Information We Collect</h3>
              <p className="text-[0.9375rem] text-slate-600 leading-[1.8] mb-[0.375rem]">We may collect the following types of information:</p>
              <ul className="list-disc pl-[1.5rem] space-y-[0.375rem]">
                <li className="text-[0.9375rem] text-slate-600 leading-[1.8]"><span className="font-semibold text-slate-700">Personal Information:</span> Name, email address, phone number, location, and profile details.</li>
                <li className="text-[0.9375rem] text-slate-600 leading-[1.8]"><span className="font-semibold text-slate-700">Usage Data:</span> App activity, device information, IP address, and log data.</li>
                <li className="text-[0.9375rem] text-slate-600 leading-[1.8]"><span className="font-semibold text-slate-700">Uploaded Content:</span> Photos, job posts, reviews, or messages shared on the platform.</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* 2 */}
          <ScrollReveal direction="up" delay={100}>
            <div className="mb-[2rem]">
              <h3 className="text-[1.125rem] font-bold text-slate-800 mb-[0.5rem]">2. How We Use Your Information</h3>
              <p className="text-[0.9375rem] text-slate-600 leading-[1.8] mb-[0.375rem]">We use your data to:</p>
              <ul className="list-disc pl-[1.5rem] space-y-[0.375rem]">
                <li className="text-[0.9375rem] text-slate-600 leading-[1.8]">Provide and improve our services.</li>
                <li className="text-[0.9375rem] text-slate-600 leading-[1.8]">Connect clients with local professionals.</li>
                <li className="text-[0.9375rem] text-slate-600 leading-[1.8]">Send important updates, notifications, or promotional messages.</li>
                <li className="text-[0.9375rem] text-slate-600 leading-[1.8]">Enhance safety and prevent fraud or misuse of our app.</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* 3 */}
          <ScrollReveal direction="up" delay={100}>
            <div className="mb-[2rem]">
              <h3 className="text-[1.125rem] font-bold text-slate-800 mb-[0.5rem]">3. How We Protect Your Information</h3>
              <p className="text-[0.9375rem] text-slate-600 leading-[1.8]">
                We use secure servers, encryption, and authentication tools to protect your data from unauthorized access or disclosure. However, no online system is 100% secure, so please use the app responsibly.
              </p>
            </div>
          </ScrollReveal>

          {/* 4 */}
          <ScrollReveal direction="up" delay={100}>
            <div className="mb-[2rem]">
              <h3 className="text-[1.125rem] font-bold text-slate-800 mb-[0.5rem]">4. Sharing Your Information</h3>
              <p className="text-[0.9375rem] text-slate-600 leading-[1.8] mb-[0.375rem]">We do not sell or rent your personal information. We may share limited data only with:</p>
              <ul className="list-disc pl-[1.5rem] space-y-[0.375rem]">
                <li className="text-[0.9375rem] text-slate-600 leading-[1.8]">Service providers who help us operate the app.</li>
                <li className="text-[0.9375rem] text-slate-600 leading-[1.8]">Legal authorities, if required by law.</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* 5 */}
          <ScrollReveal direction="up" delay={100}>
            <div className="mb-[2rem]">
              <h3 className="text-[1.125rem] font-bold text-slate-800 mb-[0.5rem]">5. Your Choices</h3>
              <ul className="list-disc pl-[1.5rem] space-y-[0.375rem]">
                <li className="text-[0.9375rem] text-slate-600 leading-[1.8]">You can edit or delete your profile at any time.</li>
                <li className="text-[0.9375rem] text-slate-600 leading-[1.8]">You can opt out of marketing emails.</li>
                <li className="text-[0.9375rem] text-slate-600 leading-[1.8]">You may request deletion of your account and data by contacting our support team.</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* 6 */}
          <ScrollReveal direction="up" delay={100}>
            <div className="mb-[2rem]">
              <h3 className="text-[1.125rem] font-bold text-slate-800 mb-[0.5rem]">6. Cookies &amp; Tracking</h3>
              <p className="text-[0.9375rem] text-slate-600 leading-[1.8]">
                We use cookies and analytics tools to improve app performance and personalize your experience. You can disable cookies in your browser settings.
              </p>
            </div>
          </ScrollReveal>

          {/* 7 */}
          <ScrollReveal direction="up" delay={100}>
            <div className="mb-[2rem]">
              <h3 className="text-[1.125rem] font-bold text-slate-800 mb-[0.5rem]">7. Children's Privacy</h3>
              <p className="text-[0.9375rem] text-slate-600 leading-[1.8]">
                All Rounder is not intended for users under 18 years of age. We do not knowingly collect personal data from minors.
              </p>
            </div>
          </ScrollReveal>

          {/* 8 */}
          <ScrollReveal direction="up" delay={100}>
            <div className="mb-[2rem]">
              <h3 className="text-[1.125rem] font-bold text-slate-800 mb-[0.5rem]">8. Updates to This Policy</h3>
              <p className="text-[0.9375rem] text-slate-600 leading-[1.8]">
                We may update this Privacy Policy from time to time. The latest version will always be available on this page.
              </p>
            </div>
          </ScrollReveal>

          {/* 9 */}
          <ScrollReveal direction="up" delay={100}>
            <div className="mb-[2rem]">
              <h3 className="text-[1.125rem] font-bold text-slate-800 mb-[0.5rem]">9. Contact Us</h3>
              <p className="text-[0.9375rem] text-slate-600 leading-[1.8]">
                If you have any questions or concerns about this Privacy Policy, please contact us:
              </p>
              <p className="text-[0.9375rem] text-blue-600 font-medium mt-[0.375rem]">
                📧 support@allrounderapp.com
              </p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default PrivacyContent;
