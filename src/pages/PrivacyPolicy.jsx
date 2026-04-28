import React from 'react';
import AnimatedSection from '../components/AnimatedSection.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import useSeo from '../../useSeo';

const PrivacyPolicy = () => {
  useSeo({
    title: "Privacy Policy | Adelphos Science & Technology Academy",
    description: "Learn how we protect student and parent data at Adelphos High School. Our commitment to privacy within our scientific and technological community.",
    keywords: "Adelphos privacy policy, data protection, high school legal, student information safety",
    canonicalUrl: "https://besuhosiso.github.io/adelphos-high-school/privacy-policy"
  });

  return (
    <main className="bg-slate-50 text-slate-950 w-full overflow-x-hidden relative min-h-dvh">
    <AnimatedSection className="py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <SectionHeader
          label="Legal"
          title="Privacy Policy"
          description="How we handle your data and ensure your privacy at Adelphos High School."
        />
      </div>
    </AnimatedSection>

    <AnimatedSection className="pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-4xl border border-slate-200 bg-white p-8 md:p-12 shadow-2xl shadow-slate-200/40 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-slate-950 mb-4">1. Information Collection</h2>
            <p className="text-base leading-8 text-slate-600">
              Adelphos High School collects only the information necessary to provide educational services, including student applications, academic records, and contact details for parents and guardians.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-950 mb-4">2. Use of Information</h2>
            <p className="text-base leading-8 text-slate-600">
              All collected data is stored securely and used solely for school operations, internal communications, and the ongoing improvement of our academic programs. We do not share your data with third parties except as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-950 mb-4">3. Data Security</h2>
            <p className="text-base leading-8 text-slate-600">
              We implement industry-standard technical and organizational measures to protect your personal information against unauthorized access, loss, or misuse.
            </p>
          </section>

          <section className="pt-6 border-t border-slate-100">
            <p className="text-base leading-8 text-slate-600">
              If you have questions about your data or wish to request removal, please contact our registrar's office at 
              <a href="mailto:info@adelphos.edu" className="text-red-600 hover:underline ml-1">info@adelphos.edu</a>.
            </p>
            <p className="text-sm text-slate-400 mt-8 italic">
              Last updated: April 23, 2026
            </p>
          </section>
        </div>
      </div>
    </AnimatedSection>
  </main>
  );
};

export default PrivacyPolicy;
