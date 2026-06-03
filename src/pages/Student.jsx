import React, { useState, useEffect } from 'react'
import { MdSchool, MdEvent, MdAssignment, MdScience } from 'react-icons/md'
import AnimatedSection from '../components/AnimatedSection.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import useSeo from '../../useSeo';

function Student() {
  const galleryVideos = [
    {
      src: "/AustroVisit.mp4",
      alt: "Special Visit from Austria",
      title: "Special Visit from Austria",
      description: "Students engaging with visiting educators from Austria, sharing insights and fostering international collaboration.",
      date: "May 12, 2026"
    },
    {
      src: "/CleaningDay.mp4",
      alt: "Community Clean-Up Day",
      title: "Community Clean-Up Day",
      description: "Students participating in a community clean-up initiative.",
      date: "May 15, 2026"
    },
    {
      src: "/FinalDay.mp4",
      alt: "Final Results Announcement",
      title: "Final Results Announcement",
      description: "Celebrating the achievements of our students in various competitions.",
      date: "June 2, 2026"
    },
    {
      src: "/MathComp.mp4",
      alt: "MindOver Math Competition",
      title: "MindOver Math Competition",
      description: "Students competing in our math club competition challenge, showcasing problem-solving skills and mathematical creativity.",
      date: "June 10, 2026"
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
    setCurrentIndex((currentIndex - 1 + galleryVideos.length) % galleryVideos.length);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % galleryVideos.length);
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
    <main className="relative flex flex-col max-w-full min-h-screen bg-slate-50 text-slate-950 overflow-x-clip">
      <AnimatedSection className="py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-5xl px-6 mx-auto text-center">
          <SectionHeader
            label="Student Portal"
            title="Master Your Studies, Connect with Your Community."
            description="Access resources, stay updated with announcements, and connect with your peers in our modern student portal."
          />
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-10 md:py-14 lg:py-16">
        <div className="w-full max-w-5xl px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="p-8 transition-shadow duration-300 surface-panel rounded-4xl hover:shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <MdAssignment className="text-3xl text-red-600" />
                  <h3 className="text-xl font-semibold text-slate-950">Exam Calendar</h3>
                </div>
                <p className="mb-4 text-sm leading-7 text-slate-600">
                  Plan ahead with a full 10-month view of all upcoming Exams and deadlines.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 transition-all hover:gap-3">
                  View Calendar
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-8 transition-shadow duration-300 surface-panel rounded-4xl hover:shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <MdSchool className="text-3xl text-red-600" />
                  <h3 className="text-xl font-semibold text-slate-950">Academic Resources</h3>
                </div>
                <p className="mb-4 text-sm leading-7 text-slate-600">
                  Instant access to guides and tutoring to power your academic journey.
                </p>
                <a href="https://play.google.com/store/apps/details?id=com.fetenanet.android&pcampaignid=web_share" className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 transition-all hover:gap-3">
                  Explore resources
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-10 md:py-14 lg:py-16">
        <div className="w-full max-w-5xl px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="p-8 transition-shadow duration-300 surface-panel rounded-4xl hover:shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <MdEvent className="text-3xl text-red-600" />
                  <h3 className="text-xl font-semibold text-slate-950">Upcoming Events</h3>
                </div>
                <div className="space-y-4">
                  {events.slice(0, visibleEvents).map((event, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 transition-colors duration-200 rounded-xl hover:bg-red-50">
                      <div className={`w-3 h-3 rounded-full mt-2 shrink-0 ${
                        event.type === 'holiday' ? 'bg-blue-600' : 'bg-red-600'
                      }`}></div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-left text-slate-950">{event.title}</p>
                        <p className="text-xs text-left text-slate-600">{event.date} · {event.time} - {event.location}</p>
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
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-red-600 transition-colors duration-200 rounded-lg hover:text-red-700 hover:bg-red-50"
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
              <div className="p-8 transition-shadow duration-300 surface-panel rounded-4xl hover:shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <MdAssignment className="text-3xl text-red-600" />
                  <h3 className="text-xl font-semibold text-slate-950">Recent Announcements</h3>
                </div>
                <div className="space-y-4">
                  <div className="pl-4 text-left border-l-4 border-red-600">
                    <p className="text-sm font-semibold text-slate-950">New Library Hours</p>
                    <p className="mt-1 text-xs text-slate-600">Extended hours during exam week: 10 AM - 8 PM</p>
                  </div>
                  <div className="pl-4 text-left border-l-4 border-red-600">
                    <p className="text-sm font-semibold text-slate-950">Entrance Exam in Jun 24 EC</p>
                    <p className="mt-1 text-xs text-slate-600">Entrance examination for Grade 12 students</p>
                  </div>
                  <div className="pl-4 text-left border-l-4 border-red-600 b">
                    <p className="text-sm font-semibold text-slate-950">Final School Exam Soon...</p>
                    <p className="mt-1 text-xs text-slate-600">Final assessments for Grade 9 - 11 students</p>
                  </div>
                </div>
              </div>

              <div className="p-8 transition-shadow duration-300 surface-panel rounded-4xl hover:shadow-xl">
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

               <div className="p-8 transition-shadow duration-300 surface-panel rounded-4xl hover:shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <MdScience className="text-3xl text-red-600" />
                  <h3 className="text-xl font-semibold text-slate-950">Student Clubs</h3>
                </div>
                <p className="mb-4 text-sm leading-7 text-slate-600">
                  MindOver Math Club, Programming Club, Science & Technology Club, and English Club. Build projects and compete in national competitions.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 transition-all hover:gap-3">
                  Join a club
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-10 text-white md:py-14 lg:py-16 bg-slate-950">
        <div className="w-full max-w-5xl px-6 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold tracking-tight">Student Gallery</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Moments from our vibrant community showcasing innovation, collaboration, and discovery.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryVideos.map((video, index) => (
              <div
                key={index}
                className="relative overflow-x-hidden transition-all duration-300 cursor-pointer rounded-4xl bg-slate-800 hover:bg-slate-700 hover:shadow-2xl hover:shadow-red-600/20 group"
                onClick={() => {
                  setCurrentIndex(index);
                  setModalOpen(true);
                }}
              >
                <div className="relative w-full h-48 overflow-hidden bg-slate-900">
                  <video
                    src={video.src}
                    className="object-cover w-full h-full transition-transform duration-300 opacity-80 group-hover:scale-105"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-linear-to-t from-black/60 via-transparent to-transparent group-hover:opacity-100"></div>
                <div className="relative z-10 p-6">
                  <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-red-400">{video.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{video.description}</p>
                  <div className="mt-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden bg-black bg-opacity-70 backdrop-blur-md">
          <div className="bg-slate-900/95 backdrop-blur-xl rounded-3xl p-5 sm:p-8 md:p-10 max-w-[100vw] relative shadow-2xl border border-white/10 max-h-[92dvh] w-[95vw] sm:w-full flex flex-col">
            <button
              onClick={() => setModalOpen(false)}
              type="button"
              aria-label="Close gallery modal"
              className="absolute z-30 flex items-center justify-center w-10 h-10 text-3xl transition-colors border rounded-full top-3 right-3 sm:top-5 sm:right-5 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border-white/10"
            >
              &times;
            </button>
            <div className="flex items-center justify-between flex-1 min-h-0 gap-4">
              <button
                onClick={prevImage}
                className="hidden p-4 text-4xl transition-colors border rounded-full md:flex text-white/50 hover:text-white bg-white/5 hover:bg-white/10 shrink-0 border-white/5"
              >
                &#8249;
              </button>
              <div className="flex flex-col justify-center flex-1 mx-0 overflow-y-auto text-center md:mx-10 no-scrollbar">
                <video
                  src={galleryVideos[currentIndex].src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="max-h-[35dvh] sm:max-h-[50dvh] md:max-h-[60dvh] w-auto mx-auto rounded-2xl shadow-2xl object-contain border border-white/5 bg-black"
                />
                <h3 className="mt-6 text-xl font-bold text-white sm:text-2xl md:text-3xl sm:mt-8">{galleryVideos[currentIndex].title}</h3>
                <p className="max-w-2xl px-2 mx-auto mt-2 text-sm leading-relaxed text-slate-400 sm:mt-3 sm:text-base md:text-lg">{galleryVideos[currentIndex].description}</p>
                <div className="inline-flex items-center justify-center gap-2 mt-4 text-xs font-medium tracking-widest uppercase sm:mt-6 text-red-500/80 sm:text-sm">
                  <span className="w-8 h-px bg-red-500/30"></span>
                  {galleryVideos[currentIndex].date}
                  <span className="w-8 h-px bg-red-500/30"></span>
                </div>
              </div>
              <button
                onClick={nextImage}
                type="button"
                className="hidden p-4 text-4xl transition-colors border rounded-full md:flex text-white/50 hover:text-white bg-white/5 hover:bg-white/10 shrink-0 border-white/5"
              >
                &#8250;
              </button>
            </div>

            {/* Mobile Navigation Arrows (Visible only on small screens) */}
            <div className="flex items-center justify-center gap-8 mt-6 md:hidden">
               <button
                onClick={prevImage}
                className="p-3 text-3xl transition-all border text-white/70 hover:text-white rounded-xl bg-white/5 border-white/10 active:scale-95"
              >
                &#8249;
              </button>
               <button
                onClick={nextImage}
                className="p-3 text-3xl transition-all border text-white/70 hover:text-white rounded-xl bg-white/5 border-white/10 active:scale-95"
              >
                &#8250;
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-6 sm:mt-8">
              {galleryVideos.map((_, index) => (
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