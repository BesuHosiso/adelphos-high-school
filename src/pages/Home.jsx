import React from 'react'
import { Link } from 'react-router-dom'
import { MdExpandMore, MdSchool, MdPeople, MdTrendingUp, MdStar, MdEvent, MdArticle } from 'react-icons/md'
import AnimatedSection from '../components/AnimatedSection.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import useSeo from '../../useSeo';

function Home() {
  useSeo({
    title: "Adelphos High School | Ethiopia's Science & Technology Excellence",
    description: "Adelphos is a premier Science and Technology academy (Grades 9–12) in Wolaita, Ethiopia, fostering academic leadership through coding, programming, and rigorous scientific study.",
    keywords: "Adelphos High School, Science and Technology Ethiopia, science preparatory school, programming for students, coding Ethiopia, Physics, Chemistry, Biology excellence, Wolaita technology school",
    canonicalUrl: "https://besuhosiso.github.io/adelphos-high-school/"
  });

  // No other useEffects in Home.jsx to preserve.

  return (
    <main className="bg-slate-50 text-slate-950 max-w-[100vw] overflow-x-clip relative min-h-screen flex flex-col">
      <AnimatedSection className="bg-white hero-panel py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_0.85fr] items-center">
            <div className="space-y-8">
              <div className="inline-flex rounded-full border border-slate-200 bg-slate-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.28em] text-slate-700">
                Science & Technology Excellence
              </div>

              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Inspiring tomorrow’s innovators in science and technology.
              </h1>

              <p className="max-w-2xl text-base leading-8 text-slate-600">
                Adelphos is a high school and preparatory academy (Grades 9–12) dedicated to academic excellence in science and technology. We foster curiosity, critical thinking, and leadership for students who aspire to shape the future.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link to="/enroll" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-slate-900/10 transition hover:bg-slate-800">
                  Enroll now
                </Link>
                <Link to="/about" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-slate-300">
                  Learn more
                </Link>
              </div>
            </div>

            <div className="rounded-4xl border border-slate-200 bg-slate-50 p-8 shadow-2xl shadow-slate-200/40">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
                alt="Students collaborating in a modern science and technology lab"
                className="h-full w-full rounded-[1.75rem] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            label="Our Mission"
            title="Empowering students through science and technology."
            description="Adelphos prepares students for university and beyond with a strong foundation in math, chemistry, biology, physics, and English, plus hands-on technology experiences."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="surface-panel rounded-4xl p-6">
              <h3 className="text-lg font-semibold text-slate-950">Academic Excellence</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Rigorous programs in science and mathematics, with English and IT for a well-rounded education.</p>
            </div>
            <div className="surface-panel rounded-4xl p-6">
              <h3 className="text-lg font-semibold text-slate-950">Supportive Community</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Small class sizes, mentorship, and a caring environment for every student.</p>
            </div>
            <div className="surface-panel rounded-4xl p-6">
              <h3 className="text-lg font-semibold text-slate-950">Clubs & Activities</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Join our Science & Technology Club, MindOver Math Club, English Club, or Programming Club to explore your interests.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">What parents need to know</h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
                Key information for families about our academic approach, student support, and university preparation.
              </p>
            </div>
            <div className="grid gap-4">
              <details className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-white">
                  What is the curriculum focus?
                  <MdExpandMore className="text-white" />
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Our curriculum emphasizes Science and Technology, with strong programs in Biology, Chemistry, Physics, and English, complemented by coding and programming.
                </p>
              </details>
              <details className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-white">
                  What clubs are available?
                  <MdExpandMore className="text-white" />
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Students can join the Science & Technology Club, MindOver Math Club, English Club, and Programming Club.
                </p>
              </details>
              <details className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-white">
                  How do you support student growth?
                  <MdExpandMore className="text-white" />
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  We offer mentorship, regular progress reviews, and a low student-to-teacher ratio so every learner receives personal support.
                </p>
              </details>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            label="By the Numbers"
            title="Measuring our impact on student success."
            description="Our commitment to excellence is reflected in our academic achievements and student outcomes."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <MdSchool className="text-2xl text-red-600" />
              </div>
              <div className="mt-4">
                <div className="text-3xl font-bold text-slate-950">~100%</div>
                <div className="text-sm text-slate-600">College Pass Rate (2025)</div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <MdPeople className="text-2xl text-red-600" />
              </div>
              <div className="mt-4">
                <div className="text-3xl font-bold text-slate-950">1:12</div>
                <div className="text-sm text-slate-600">Student-Teacher Ratio</div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <MdTrendingUp className="text-2xl text-red-600" />
              </div>
              <div className="mt-4">
                <div className="text-3xl font-bold text-slate-950">3 years</div>
                <div className="text-sm text-slate-600">Years Since Founding</div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <MdStar className="text-2xl text-red-600" />
              </div>
              <div className="mt-4">
                <div className="text-3xl font-bold text-slate-950">4.8/5</div>
                <div className="text-sm text-slate-600">Parent Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-slate-100">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            label="Student Success Stories"
            title="Real achievements from our community."
            description="Hear from students who have transformed their futures through our innovative programs."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="surface-panel rounded-4xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-lg font-semibold text-red-600">AW</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-950">Alazar W.</div>
                  <div className="text-sm text-slate-600">Class of 2026</div>
                </div>
              </div>
              <p className="text-sm leading-7 text-slate-600 mb-4">
                "Adelphos gave me the confidence to pursue computer science at MIT. The robotics program was incredible."
              </p>
              <div className="flex text-red-600">
                {[...Array(5)].map((_, i) => (
                  <MdStar key={i} className="text-lg" />
                ))}
              </div>
            </div>

            <div className="surface-panel rounded-4xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-lg font-semibold text-red-600">FA</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-950">Feven A.</div>
                  <div className="text-sm text-slate-600">Class of 2024</div>
                </div>
              </div>
              <p className="text-sm leading-7 text-slate-600 mb-4">
                "The biotech research opportunities here are unmatched. I'm now studying biomedical engineering."
              </p>
              <div className="flex text-red-600">
                {[...Array(5)].map((_, i) => (
                  <MdStar key={i} className="text-lg" />
                ))}
              </div>
            </div>

            <div className="surface-panel rounded-4xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="text-lg font-semibold text-red-600">KA</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-950">Kebron A.</div>
                  <div className="text-sm text-slate-600">Class of 2026</div>
                </div>
              </div>
              <p className="text-sm leading-7 text-slate-600 mb-4">
                "The mentorship program helped me discover my passion for AI. The teachers here are incredible."
              </p>
              <div className="flex text-red-600">
                {[...Array(5)].map((_, i) => (
                  <MdStar key={i} className="text-lg" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Ready to join our community?</h2>
          <p className="text-base leading-8 text-slate-300 mb-8 max-w-2xl mx-auto">
            Take the first step towards a transformative education. Our admissions team is here to guide you through the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/enroll" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-950 shadow-xl shadow-black/10 transition hover:bg-slate-100">
              Start Your Application
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/20">
              Schedule a Visit
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}

export default Home
