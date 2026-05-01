import React, { useState, useEffect } from 'react'
import { MdSchool, MdEvent, MdAssignment, MdScience } from 'react-icons/md'
import AnimatedSection from '../components/AnimatedSection.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import useSeo from '../../useSeo';

function Student() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80",
      alt: "Professional Insights",
      title: "Professional Insights",
      description: "Inviting industry leaders to share their journeys and inspire future career paths.",
      date: "March 15, 2026"
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
      alt: "Working for Community",
      title: "Working for Community",
      description: "Cleaning Our Environment Together.",
      date: "February 28, 2025"
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      alt: "MindOver Math Competition",
      title: "MindOver Math Competition",
      description: "Intense problem-solving battle between different sections of the same grade from MindOver Math Club.",
      date: "April 10, 2026"
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      alt: "Collaborative Learning",
      title: "Collaborative Learning",
      description: "Students collaborating on team projects within their classroom.",
      date: "April 10, 2026"
    },
    {
      src: "/eatingwithforeigners.jpg",
      alt: "eatingwithforeigner",
      title: "Australian Visitors",
      description: "Visitors from australia in adelphos spending time with students and teachers.",
      date: "April 10, 2026"
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      alt: "English Debate",
      title: "Teachers-with-Students Wholeday",
      description: "Teachers and students Spending time together & sharing a meal at Kidist Hana School.",
      date: "April 10, 2026"
    }
  ];

  const events = [
  {
    title: "Ethiopian New Year (Enkutatash)",
    date: "September 1, 2018",
    time: "All Day",
    location: "Campus Wide",
    type: "holiday"
  },
  {
    title: "Meskel (Finding of the True Cross)",
    date: "September 17, 2019",
    time: "All Day",
    location: "Campus Wide",
    type: "holiday"
  },
  {
    title: "Exam 1: First Semester First Mid-Term",
    date: "October 10, 2019",
    time: "8:30 AM",
    location: "Classrooms",
    type: "academic"
  },
  {
    title: "MindOver Math Competition",
    date: "October 20, 2019",
    time: "10:00 AM",
    location: "Outside Class",
    type: "academic"
  },
  {
    title: "Exam 2: First Semester Second Mid-Term",
    date: "December 1, 2019",
    time: "9:00 AM",
    location: "Classrooms",
    type: "academic"
  },
  {
    title: "Exam IT & HPE Test",
    date: "December 19, 2019",
    time: "1:30 PM",
    location: "Classrooms",
    type: "academic"
  },
  {
    title: "Exam 3: First Semester Third Mid-Term",
    date: "January 2, 2019",
    time: "1:30 PM",
    location: "Classrooms",
    type: "academic"
  },
  {
    title: "Ethiopian Christmas (Genna)",
    date: "January 29, 2019",
    time: "All Day",
    location: "Campus Wide",
    type: "holiday"
  },
  {
    title: "Exam 4: First Semester Final Exam (Comprehensive S&T)",
    date: "January 20, 2019",
    time: "8:30 AM",
    location: "Exam Hall",
    type: "academic"
  },
  {
    title: "Victory at Adwa Day",
    date: "March 23, 2019",
    time: "All Day",
    location: "Campus Wide",
    type: "holiday"
  },
  {
    title: "Teachers-with-Students Social Day",
    date: "March 11, 2019",
    time: "11:00 AM",
    location: "School Grounds",
    type: "academic"
  },
  {
    title: "Exam 5: Second Semester first Mid-Term",
    date: "March 16, 2019",
    time: "9:00 AM",
    location: "Science Lab",
    type: "academic"
  },
  {
    title: "Exam 6: Second Semester Second Mid-Term",
    date: "April 12, 2019",
    time: "9:00 AM",
    location: "Exam Hall",
    type: "academic"
  },
  {
    title: "Ethiopian Easter (Fasika)",
    date: "April 24, 2019",
    time: "All Day",
    location: "Campus Wide",
    type: "holiday"
  },
  {
    title: "Exam 7: Second Semester Third Mid-Term",
    date: "May 17, 2019",
    time: "1:30 PM",
    location: "Classrooms",
    type: "academic"
  },
  {
    title: "Exam 8: Second Semester Final Exam",
    date: "June 8, 2019",
    time: "8:30 AM",
    location: "Exam Hall",
    type: "academic"
  },
  {
    title: "Final Event",
    date: "July 3, 2019",
    time: "10:00 AM",
    location: "Local Community Center",
    type: "academic"
  }
];

  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleEvents, setVisibleEvents] = useState(5);

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % galleryImages.length);
  };

  const loadMoreEvents = () => {
    setVisibleEvents(prev => Math.min(prev + 5, events.length));
  };

 // Locks background scrolling only while the gallery modal is open
useEffect(() => {
  if (!modalOpen) return undefined;

  const previousOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';

  return () => {
    document.body.style.overflow = previousOverflow;
  };
}, [modalOpen]);

  useSeo({
    title: "Student Portal & Innovation Gallery | Adelphos High School",
    description: "Access resources for our Science and Technology students. Explore our innovation gallery and join our specialized Programming, Science, and Tech clubs.",
    keywords: "Adelphos student portal, Science and Technology club, Programming club Ethiopia, student innovation gallery, high school resources, coding projects for students",
    canonicalUrl: "https://adelphoshighschool.vercel.app/student"
  });

  return (
    <main className="bg-slate-50 text-slate-950 max-w-full overflow-x-clip relative min-h-screen flex flex-col">
      <AnimatedSection className="py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-5xl mx-auto px-6 text-center">
          <SectionHeader
            label="Student Portal"
            title="Master Your Studies, Connect with Your Community."
            description="Access resources, stay updated with announcements, and connect with your peers in our modern student portal."
          />
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-10 md:py-14 lg:py-16">
        <div className="w-full max-w-5xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="surface-panel rounded-4xl p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <MdAssignment className="text-3xl text-red-600" />
                  <h3 className="text-xl font-semibold text-slate-950">Exam Calendar</h3>
                </div>
                <p className="text-sm leading-7 text-slate-600 mb-4">
                  Plan ahead with a full 10-month view of all upcoming Exams and deadlines.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:gap-3 transition-all">
                  View Calendar
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="surface-panel rounded-4xl p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <MdSchool className="text-3xl text-red-600" />
                  <h3 className="text-xl font-semibold text-slate-950">Academic Resources</h3>
                </div>
                <p className="text-sm leading-7 text-slate-600 mb-4">
                  Instant access to guides and tutoring to power your academic journey.
                </p>
                <a href="https://play.google.com/store/apps/details?id=com.fetenanet.android&pcampaignid=web_share" className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:gap-3 transition-all">
                  Explore resources
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-10 md:py-14 lg:py-16">
        <div className="w-full max-w-5xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="surface-panel rounded-4xl p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <MdEvent className="text-3xl text-red-600" />
                  <h3 className="text-xl font-semibold text-slate-950">Upcoming Events</h3>
                </div>
                <div className="space-y-4">
                  {events.slice(0, visibleEvents).map((event, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-red-50 transition-colors duration-200">
                      <div className={`w-3 h-3 rounded-full mt-2 shrink-0 ${
                        event.type === 'holiday' ? 'bg-blue-600' : 'bg-red-600'
                      }`}></div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-slate-950 text-left">{event.title}</p>
                        <p className="text-xs text-slate-600 text-left">{event.date} · {event.time} - {event.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {visibleEvents < events.length && (
                  <div className="mt-6 text-center">
                    <button
                      onClick={loadMoreEvents}
                      type="button"
                      aria-label="Load more upcoming events"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-200"
                    >
                      Load More Events
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>

              <div className="space-y-6">
              <div className="surface-panel rounded-4xl p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <MdAssignment className="text-3xl text-red-600" />
                  <h3 className="text-xl font-semibold text-slate-950">Recent Announcements</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-600 pl-4 text-left">
                    <p className="text-sm font-semibold text-slate-950">New Library Hours</p>
                    <p className="text-xs text-slate-600 mt-1">Extended hours during exam week: 10 AM - 8 PM</p>
                  </div>
                  <div className="border-l-4 border-red-600 pl-4 text-left">
                    <p className="text-sm font-semibold text-slate-950">Entrance Exam in Jun 24 EC</p>
                    <p className="text-xs text-slate-600 mt-1">Entrance examination for Grade 12 students</p>
                  </div>
                  <div className="border-l-4 border-red-600 pl-4 b text-left">
                    <p className="text-sm font-semibold text-slate-950">Final School Exam Soon...</p>
                    <p className="text-xs text-slate-600 mt-1">Final assessments for Grade 9 - 11 students</p>
                  </div>
                </div>
              </div>

              <div className="surface-panel rounded-4xl p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <MdAssignment className="text-3xl text-red-600" />
                  <h3 className="text-xl font-semibold text-slate-950">Quick Stats</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">3.8</div>
                    <div className="text-xs text-slate-600">Current GPA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">12</div>
                    <div className="text-xs text-slate-600">Credits This Term</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">85%</div>
                    <div className="text-xs text-slate-600">Attendance Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">5</div>
                    <div className="text-xs text-slate-600">Active Clubs</div>
                  </div>
                </div>
              </div>

               <div className="surface-panel rounded-4xl p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <MdScience className="text-3xl text-red-600" />
                  <h3 className="text-xl font-semibold text-slate-950">Student Clubs</h3>
                </div>
                <p className="text-sm leading-7 text-slate-600 mb-4">
                  MindOver Math Club, Programming Club, Science & Technology Club, and English Club. Build projects and compete in national competitions.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:gap-3 transition-all">
                  Join a club
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-10 md:py-14 lg:py-16 bg-slate-950 text-white">
        <div className="w-full max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight">Student Gallery</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Moments from our vibrant community showcasing innovation, collaboration, and discovery.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="rounded-4xl overflow-x-hidden bg-slate-800 cursor-pointer hover:bg-slate-700 hover:shadow-2xl hover:shadow-red-600/20 transition-all duration-300 group relative"
                onClick={() => {
                  setCurrentIndex(index);
                  setModalOpen(true);
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-6 relative z-10">
                  <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors duration-300">{image.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{image.description}</p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-red-400">
                      View Details
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex items-center justify-center z-50 p-4 overflow-hidden">
          <div className="bg-slate-900/95 backdrop-blur-xl rounded-3xl p-5 sm:p-8 md:p-10 max-w-[100vw] relative shadow-2xl border border-white/10 max-h-[92dvh] w-[95vw] sm:w-full flex flex-col">
            <button
              onClick={() => setModalOpen(false)}
              type="button"
              aria-label="Close gallery modal"
              className="absolute top-3 right-3 sm:top-5 sm:right-5 text-white/70 hover:text-white text-3xl transition-colors bg-white/5 hover:bg-white/10 rounded-full w-10 h-10 flex items-center justify-center z-30 border border-white/10"
            >
              &times;
            </button>
            <div className="flex items-center justify-between flex-1 min-h-0 gap-4">
              <button
                onClick={prevImage}
                className="hidden md:flex text-white/50 hover:text-white text-4xl transition-colors p-4 rounded-full bg-white/5 hover:bg-white/10 shrink-0 border border-white/5"
              >
                &#8249;
              </button>
              <div className="flex-1 mx-0 md:mx-10 text-center flex flex-col justify-center overflow-y-auto no-scrollbar">
                <img
                  src={galleryImages[currentIndex].src}
                  alt={galleryImages[currentIndex].alt}
                  className="max-h-[35dvh] sm:max-h-[50dvh] md:max-h-[60dvh] w-auto mx-auto rounded-2xl shadow-2xl object-contain border border-white/5"
                />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-6 sm:mt-8">{galleryImages[currentIndex].title}</h3>
                <p className="text-slate-400 mt-2 sm:mt-3 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto px-2">{galleryImages[currentIndex].description}</p>
                <div className="mt-4 sm:mt-6 inline-flex items-center justify-center gap-2 text-red-500/80 text-xs sm:text-sm font-medium uppercase tracking-widest">
                  <span className="w-8 h-px bg-red-500/30"></span>
                  {galleryImages[currentIndex].date}
                  <span className="w-8 h-px bg-red-500/30"></span>
                </div>
              </div>
              <button
                onClick={nextImage}
                type="button"
                className="hidden md:flex text-white/50 hover:text-white text-4xl transition-colors p-4 rounded-full bg-white/5 hover:bg-white/10 shrink-0 border border-white/5"
              >
                &#8250;
              </button>
            </div>

            {/* Mobile Navigation Arrows (Visible only on small screens) */}
            <div className="flex md:hidden items-center justify-center gap-8 mt-6">
               <button
                onClick={prevImage}
                className="text-white/70 hover:text-white text-3xl p-3 rounded-xl bg-white/5 border border-white/10 active:scale-95 transition-all"
              >
                &#8249;
              </button>
               <button
                onClick={nextImage}
                className="text-white/70 hover:text-white text-3xl p-3 rounded-xl bg-white/5 border border-white/10 active:scale-95 transition-all"
              >
                &#8250;
              </button>
            </div>

            <div className="flex flex-wrap justify-center mt-6 sm:mt-8 gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-red-600' : 'bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Student