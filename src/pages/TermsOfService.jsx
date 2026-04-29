import React from 'react';
import AnimatedSection from '../components/AnimatedSection.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import useSeo from '../../useSeo';

const TermsOfService = () => {
  useSeo({
    title: "Terms of Service | Adelphos Science & Technology Academy",
    description: "Guidelines for accessing the Adelphos High School digital platforms and educational resources in science and technology.",
    keywords: "Adelphos terms, high school rules, digital platform usage, educational resource terms",
    canonicalUrl: "https://adelphoshighschool.vercel.app/terms-of-service"
  });

  return (
    <main className="bg-slate-50 text-slate-950 max-w-[100vw] overflow-x-clip relative min-h-screen flex flex-col">
    <AnimatedSection className="py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <SectionHeader
          label="Legal"
          title="Terms Of Service"
          description="These terms govern your access to and use of the Adelphos High School digital platforms and educational resources."
        />
      </div>
    </AnimatedSection>

    <AnimatedSection className="pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-4xl border border-slate-200 bg-white p-8 md:p-12 shadow-2xl shadow-slate-200/40 space-y-8">
          <section>
            <h2 className='text-xl font-semibold text-slate-950 mb-4'>1. Educational Purpose</h2>
            <p className="text-base leading-8 text-slate-600">
              By using the Adelphos High School website and student portal, you agree to use the information and resources provided for legitimate educational purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-950 mb-4">2. Intellectual Property</h2>
            <p className="text-base leading-8 text-slate-600">
              All content, including curriculum descriptions, research samples, and media, is protected by copyright and intellectual property laws. Content may not be reproduced or redistributed without express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-950 mb-4">3. User Conduct</h2>
            <p className="text-base leading-8 text-slate-600">
              Misuse of the website, including unauthorized access attempts or interference with technical operations, may result in restricted access and administrative action.
            </p>
          </section>

          <section className="pt-6 border-t border-slate-100">
            <p className="text-base leading-8 text-slate-600">
              For questions about these terms or our institutional policies, please contact the administrative office at 
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

export default TermsOfService;
