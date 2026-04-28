import React from 'react'
import { MdSchool, MdPeople, MdScience, MdComputer, MdEngineering, MdBiotech, MdTimeline, MdVerified, MdGroup, MdEmojiEvents } from 'react-icons/md'
import AnimatedSection from '../components/AnimatedSection.jsx'
import SectionHeader from '../components/SectionHeader.jsx';
import useSeo from '../../useSeo';

function About() {
  useSeo({
    title: "Vision & Science Mission | About Adelphos High School",
    description: "Discover our mission to empower students via a rigorous Science and Technology curriculum. Adelphos is dedicated to scientific discovery and technological leadership in Ethiopia.",
    keywords: "Adelphos history, Science and Technology curriculum, Biology, Chemistry, Physics, technological education Ethiopia, Ministry of Education Ethiopia accreditation, preparatory high school",
    canonicalUrl: "https://adelphos-high-school.vercel.app/about"
  }, []);

  return (
    <main className="bg-slate-50 text-slate-950 w-full overflow-x-hidden relative min-h-dvh">
      <AnimatedSection className="py-20">
        <div className="w-full max-w-5xl mx-auto px-6 text-center">
          <SectionHeader
            label="Our Vision"
            title="Empowering students through science and technology."
            description="Adelphos High School and Preparatory is committed to academic excellence, innovation, and preparing students for university and careers in science and technology."
          />
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-slate-950 text-white">
        <div className="w-full max-w-5xl mx-auto px-6 text-center">
          <div className="grid gap-10 lg:grid-cols-3">
            {[
              {
                title: 'Personalized mentorship',
                description: 'Small class sizes and expert guidance for every student.',
              },
              {
                title: 'Industry connections',
                description: 'Partnerships with local firms that bring real experience to campus.',
              },
              {
                title: 'Future-ready learning',
                description: 'A curriculum designed for the modern tech landscape.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-4xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <div className="w-full max-w-5xl mx-auto px-6 text-center">
          <SectionHeader
            label="Our Curriculum"
            title="Science and Technology"
            description="Our curiculum focuses on integrated core subjects with a focus on cutting-edge technological and scientific applications, all perfectly aligned with this program focus."
          />

          <div className="mt-12 grid gap-8 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            <div className="rounded-4xl border border-slate-200 bg-white p-8 text-center shadow-md">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-100 mb-4">
                <MdScience className="text-2xl text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-950 mb-3">Science Core</h3>
              <p className="text-sm leading-7 text-slate-600">
                Deep study in Biology, Chemistry, and Physics, with hands-on lab work and research projects.
              </p>
            </div>

            <div className="rounded-4xl border border-slate-200 bg-white p-8 text-center shadow-md">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-100 mb-4">
                <MdComputer className="text-2xl text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-950 mb-3">Technology & IT</h3>
              <p className="text-sm leading-7 text-slate-600">
                Foundational IT skills, digital literacy, and exposure to programming through our clubs and activities.
              </p>
            </div>

            <div className="rounded-4xl border border-slate-200 bg-white p-8 text-center shadow-md">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-100 mb-4">
                <MdEngineering className="text-2xl text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-950 mb-3">Mathematics</h3>
              <p className="text-sm leading-7 text-slate-600">
                Advanced mathematics curriculum, problem-solving, and participation in MindOver Math Club.
              </p>
            </div>

            <div className="rounded-4xl border border-slate-200 bg-white p-8 text-center shadow-md">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-100 mb-4">
                <MdBiotech className="text-2xl text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-950 mb-3">English & Communication</h3>
              <p className="text-sm leading-7 text-slate-600">
                Strong English language program and communication skills, supported by the English Club and academic writing.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <div className="w-full max-w-5xl mx-auto px-6 text-center">
          <SectionHeader
            label="Our History"
            title="A young school with a record of success."
            description="Founded three years ago, Adelphos has quickly become a leader in science and technology education. In 2025, nearly all our graduates were accepted to college."
          />

          <div className="mt-12 space-y-8">
            <div className="flex gap-8 items-start">
              <div className="shrink-0">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  <MdTimeline className="text-red-600" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-xl font-semibold text-slate-950">2023: Founded</h3>
                  <span className="text-sm text-slate-500">Wolaita, Ethiopia</span>
                </div>
                <p className="text-base leading-7 text-slate-600">
                  Adelphos High School and Preparatory was established to provide high-quality science and technology education for grades 9–12.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="shrink-0">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  <MdEmojiEvents className="text-red-600" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-xl font-semibold text-slate-950">2025: College Success</h3>
                  <span className="text-sm text-slate-500">Nearly 100% College Acceptance</span>
                </div>
                <p className="text-base leading-7 text-slate-600">
                  Last year, almost all Adelphos graduates were accepted to universities in Ethiopia and abroad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-slate-950 text-white">
        <div className="w-full max-w-5xl mx-auto px-6 text-center">
          <SectionHeader
            label="Accreditation & Recognition"
            title="Committed to the highest standards."
            description="Our programs meet rigorous academic standards and are recognized by leading educational authorities."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-4xl border border-white/10 bg-white/5 p-8 text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 mb-4">
                <MdVerified className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Ethiopian Ministry of Education</h3>
              <p className="text-sm leading-7 text-slate-300">
                Fully accredited high school program meeting national curriculum standards.
              </p>
            </div>

            <div className="rounded-4xl border border-white/10 bg-white/5 p-8 text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 mb-4">
                <MdEmojiEvents className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Science & Technology Distinction</h3>
              <p className="text-sm leading-7 text-slate-300">
                Recognized for outstanding achievement in science and technology education and student innovation.
              </p>
            </div>

            <div className="rounded-4xl border border-white/10 bg-white/5 p-8 text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 mb-4">
                <MdSchool className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">International Partnerships</h3>
              <p className="text-sm leading-7 text-slate-300">
                Affiliated with leading universities and recognized by international educational bodies for science and technology excellence.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}

export default About
