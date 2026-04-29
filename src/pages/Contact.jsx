import React, { useState } from 'react'
import { MdLocationOn, MdEmail, MdCall, MdSend, MdAccessTime, MdSchool, MdPsychology, MdLocalHospital, MdComputer, MdLibraryBooks, MdSportsSoccer, MdHelp, MdPhone } from 'react-icons/md'
import { FaTelegramPlane, FaFacebook } from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import useSeo from '../../useSeo';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const faqs = [
    {
      question: "What is the primary focus of Adelphos?",
      answer: "Our focus is science and technology excellence, preparing students for university and careers in scientific and technological fields through rigorous academics."
    },
    {
      question: "Which grades are offered at the school?",
      answer: "We provide high-quality education for Grades 9 through 12, including specialized preparatory programs for university entrance exams."
    },
    {
      question: "How do I start the enrollment process?",
      answer: "You can begin by filling out the student application form on our 'Enroll' page. Our admissions team will reach out to you within 24 hours."
    },
    {
      question: "What science labs are available for students?",
      answer: "Our campus features dedicated, modern laboratories for Biology, Chemistry, Physics, and Information Technology to support practical learning."
    },
    {
      question: "Are there any academic clubs?",
      answer: "Yes! Students are encouraged to join the Programming Club, MindOver Math Club, English Club, and our Science & Technology Club."
    },
    {
      question: "How can I visit the campus?",
      answer: "We welcome prospective students and parents. Please contact our office via phone or email to schedule a tour during our regular office hours."
    }
  ]

  const [errors, setErrors] = useState({})
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    let tempErrors = {}
    if (!formData.name.trim()) tempErrors.name = 'Name is required'
    if (!formData.email.trim()) tempErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid'
    if (!formData.message.trim()) tempErrors.message = 'Message is required'
    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setFormSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setErrors({})
    }
  }

  useSeo({
    title: "Contact Adelphos | Science & Technology School in Wolaita",
    description: "Reach out to Ethiopia's premier Science and Technology academy. Contact our Wolaita campus for admissions, visits, and technical program inquiries.",
    keywords: "contact Adelphos High School, Science and Technology academy Ethiopia, school location Wolaita, contact programming school, Ethiopia high school phone, school email Boditi",
    canonicalUrl: "https://adelphoshighschool.vercel.app/contact"
  });

  return (
    <main className="bg-slate-50 text-slate-950 max-w-[100vw] overflow-x-clip relative min-h-screen flex flex-col">
      <AnimatedSection className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <SectionHeader
            label="Get in Touch"
            title="We're here to help you succeed."
            description="Whether you're a prospective student, parent, or alum, reach out with any questions about our programs and community."
          />
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="surface-panel rounded-4xl p-8">
                <div className="flex items-start gap-4">
                  <MdLocationOn className="text-3xl text-red-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">Visit Our Campus</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      123 Education Lane<br />
                      Wolaita, Boditi<br />
                      Ethiopia
                    </p>
                    <a href="#" className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-red-600 hover:gap-3 transition-all">
                      Get directions
                    </a>
                  </div>
                </div>
              </div>
              <div className="surface-panel rounded-4xl p-8">
                <div className="flex items-start gap-4">
                  <MdEmail className="text-3xl text-red-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">Email Us</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Admissions: <a href="mailto:admissions@adelphos.edu" className="text-red-600 hover:underline">admissions@adelphos.edu</a><br />
                      General: <a href="mailto:info@adelphos.edu" className="text-red-600 hover:underline">info@adelphos.edu</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="surface-panel rounded-4xl p-8">
                <div className="flex items-start gap-4">
                  <MdCall className="text-3xl text-red-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">Call Us</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Office: +251 123 456 789<br />
                      Emergency: +251 987 654 321
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="surface-panel rounded-4xl p-8">
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
                    <MdSend className="text-2xl text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-950 mb-4">Message Sent Successfully!</h3>
                  <p className="text-base leading-7 text-slate-600 mb-6">
                    Thank you for reaching out. We've received your message and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-semibold text-slate-950 mb-6">Send us a message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label className="block text-sm font-semibold uppercase tracking-[0.18em] text-slate-700 mb-2">Name</label>
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full rounded-3xl border border-slate-200 bg-white px-6 py-4 text-sm text-slate-900 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
                          placeholder="Your full name"
                          type="text"
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold uppercase tracking-[0.18em] text-slate-700 mb-2">Email</label>
                        <input
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full rounded-3xl border border-slate-200 bg-white px-6 py-4 text-sm text-slate-900 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
                          placeholder="your@email.com"
                          type="email"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold uppercase tracking-[0.18em] text-slate-700 mb-2">Subject</label>
                      <input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded-3xl border border-slate-200 bg-white px-6 py-4 text-sm text-slate-900 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
                        placeholder="How can we help?"
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold uppercase tracking-[0.18em] text-slate-700 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full rounded-3xl border border-slate-200 bg-white px-6 py-4 text-sm text-slate-900 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100 resize-none"
                        placeholder="Tell us more about your inquiry..."
                      />
                      {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                    </div>
                    <button type="submit" className="w-full rounded-full bg-slate-950 px-6 py-4 text-base font-semibold text-white shadow-xl shadow-slate-900/15 transition hover:bg-slate-800 flex items-center justify-center gap-2">
                      <MdSend className="text-lg" />
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            label="OFFICE HOURS & STUDENT ORGANIZATIONS "
            title="Academic & Interest-Based Clubs"
            description="Explore our diverse range of extracurricular groups designed to foster technical skills, critical thinking, and creative expression."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="surface-panel rounded-4xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <MdAccessTime className="text-3xl text-red-600" />
                <h3 className="text-2xl font-semibold text-slate-950">Regular Office Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="text-slate-600">Monday - Friday</span>
                  <span className="font-semibold text-slate-950">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="text-slate-600">Saturday</span>
                  <span className="font-semibold text-slate-950">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-600">Sunday</span>
                  <span className="font-semibold text-slate-950">Closed</span>
                </div>
              </div>
              <p className="text-sm text-slate-500 mt-4">
                *Library hours extended until 6:00 PM weekdays
              </p>
            </div>

            <div className="surface-panel rounded-4xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <MdComputer className="text-3xl text-red-600" />
                <h3 className="text-2xl font-semibold text-slate-950">Science & Technology Clubs</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-600 mt-2"></div>
                  <div>
                    <p className="font-semibold text-slate-950">Programming Club</p>
                    <p className="text-sm text-slate-600">Explore coding, robotics, and real-world tech projects with peers and mentors.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-600 mt-2"></div>
                  <div>
                    <p className="font-semibold text-slate-950">Science & Technology Club</p>
                    <p className="text-sm text-slate-600">Participate in science fairs, experiments, and technology showcases.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-600 mt-2"></div>
                  <div>
                    <p className="font-semibold text-slate-950">MindOver Math Club</p>
                    <p className="text-sm text-slate-600">Challenge yourself with advanced math problems and competitions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-600 mt-2"></div>
                  <div>
                    <p className="font-semibold text-slate-950">English Club</p>
                    <p className="text-sm text-slate-600">Develop communication skills and enjoy creative writing and debate.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            label="Frequently Asked Questions"
            title="Quick answers to common questions."
            description="Find answers to the most frequently asked questions about Adelphos High School."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              {faqs.slice(0, 3).map((faq, index) => (
                <details key={index} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-white">
                    {faq.question}
                    <MdHelp className="text-white" />
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{faq.answer}</p>
                </details>
              ))}
            </div>

            <div className="space-y-4">
              {faqs.slice(3).map((faq, index) => (
                <details key={index + 3} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-white">
                    {faq.question}
                    <MdHelp className="text-white" />
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 bg-slate-950 text-white border-t border-white/5">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-semibold tracking-tight mb-6">Join the Community</h2>
          <p className="text-lg leading-8 text-slate-400 mb-10 max-w-2xl mx-auto">
            Get real-time updates and connect with fellow innovators through our official social channels.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://t.me/adelphos_high_school" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full bg-red-600 px-10 py-4 text-base font-semibold text-white shadow-xl shadow-red-600/20 transition hover:bg-red-700 hover:scale-105">
              <FaTelegramPlane className="text-xl" />
              Telegram
            </a>
            <a href="https://web.facebook.com/share/g/1Zx8Xomcc7/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/5 px-10 py-4 text-base font-semibold text-white transition hover:bg-white/10 hover:border-white/60">
              <FaFacebook className="text-xl" />
              Facebook
            </a>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}

export default Contact;