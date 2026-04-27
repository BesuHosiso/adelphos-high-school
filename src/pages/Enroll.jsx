import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { MdExpandMore, MdArrowForward, MdRocket, MdSchool, MdCalendarToday, MdAttachMoney, MdCheckCircle, MdInfo, MdHelp } from 'react-icons/md'
import AnimatedSection from '../components/AnimatedSection.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

const Enroll = () => {

    const location = useLocation();

    useEffect(() => {
        document.title = "Apply Now | Adelphos Admission Process";
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute("content", "Join Adelphos High School. Start your application today for our specialized STEM and technology preparatory programs.");
    }, []);

    useEffect(() => {
        let timeoutId;
        if (location.hash) {
            const id = location.hash.replace("#", "");

            const scrollToElement = () => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                } else {
                    timeoutId = setTimeout(scrollToElement, 100);
                }
            };
            scrollToElement();
        }
        return () => clearTimeout(timeoutId);
    }, [location]);

    const [formData, setFormData] = useState({
        fullName: '',
        grade: '',
        parentName: '',
        phone: '',
        email: ''
    });
    const [errors, setErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.fullName.trim()) tempErrors.fullName = 'Full name is required';
        if (!formData.grade) tempErrors.grade = 'Grade level is required';
        if (!formData.parentName.trim()) tempErrors.parentName = 'Parent/Guardian name is required';
        if (!formData.phone.trim()) tempErrors.phone = 'Phone number is required';
        if (!formData.email.trim()) tempErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid';
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setFormSubmitted(true);
            setFormData({ fullName: '', grade: '', parentName: '', phone: '', email: '' });
            setErrors({});
        }
    };

    return (
        <main className="bg-slate-50 text-slate-950 min-h-dvh">
            <AnimatedSection className="bg-slate-950 text-white py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
                        <div>
                            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
                                Apply now
                            </div>
                            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                                Join Adelphos and shape the next generation of technology leaders.
                            </h1>
                            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200">
                                Submit your application with confidence. Our team reviews every profile carefully and reaches out with admission details in under 48 hours.
                            </p>
                            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                <Link
                                    to="#apply"
                                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-black/10 transition hover:bg-slate-100"
                                >
                                    Begin application
                                    <MdArrowForward className="ml-2 text-lg" />
                                </Link>
                            </div>
                        </div>
                        <div className="rounded-4xl border border-white/10 bg-white/10 p-8 shadow-2xl shadow-black/10">
                            <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/20 bg-white/10">
                                <img src="/logo.png" alt="Adelphos Logo" className="h-16 w-16 object-contain" loading="lazy" />
                            </div>
                            <p className="mt-6 text-sm leading-7 text-slate-200">
                                Adelphos brings together ambitious learners, modern STEM labs, and a values-driven academic environment.
                            </p>
                            <div className="mt-8 grid gap-4">
                                <div className="flex items-start gap-3 rounded-3xl border border-white/10 bg-white/10 p-5">
                                    <MdRocket className="mt-1 text-2xl text-red-600" />
                                    <div>
                                        <p className="text-sm font-semibold text-white">Fast-track STEM</p>
                                        <p className="mt-1 text-sm text-slate-200">Project-based learning with expert mentorship.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 rounded-3xl border border-white/10 bg-white/10 p-5">
                                    <MdSchool className="mt-1 text-2xl text-red-600" />
                                    <div>
                                        <p className="text-sm font-semibold text-white">Academic excellence</p>
                                        <p className="mt-1 text-sm text-slate-200">A focused, supportive path from day one.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection className="py-16">
                <div className="mx-auto max-w-6xl px-6">
                    <SectionHeader
                        label="Admission Requirements"
                        title="What you need to join our community."
                        description="We look for motivated students ready to engage in rigorous STEM education. Here's what you'll need for your application."
                    />

                    <div className="mt-12 grid gap-8 md:grid-cols-2">
                            <div className="surface-panel rounded-4xl p-8">
                                <div className="flex items-start gap-4">
                                    <MdCheckCircle className="text-2xl text-green-600 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-950">Academic Records</h3>
                                        <p className="mt-2 text-sm leading-7 text-slate-600">
                                            Current report cards, transcripts, and academic assessments from previous schools.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="surface-panel rounded-4xl p-8">
                                <div className="flex items-start gap-4">
                                    <MdCheckCircle className="text-2xl text-green-600 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-950">Ministry Result</h3>
                                        <p className="mt-2 text-sm leading-7 text-slate-600">
                                           Official certificate of the Grade 8 National Examination required for all incoming secondary students.
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection className="py-16 bg-slate-100">
                <div className="mx-auto max-w-6xl px-6">
                    <SectionHeader
                        label="Tuition & Payment"
                        title="Affordable, transparent tuition."
                        description="Adelphos offers a simple tuition structure and convenient payment options for all families."
                    />

                    <div className="mt-12 grid gap-8 md:grid-cols-2">
                        <div className="surface-panel rounded-4xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <MdAttachMoney className="text-2xl text-green-600" />
                                <h3 className="text-2xl font-semibold text-slate-950">Tuition Fees</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                                    <span className="text-slate-600">Full Year</span>
                                    <span className="font-semibold text-slate-950">ETB 9,000</span>
                                </div>
                                <div className="flex justify-between items-center py-3">
                                    <span className="text-slate-600">Per Month</span>
                                    <span className="font-semibold text-slate-950">ETB 900</span>
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="text-sm text-slate-600">Tuition is payable in full or in monthly installments. Payments are made through our partner, Dashen Bank. Online payment is available for your convenience.</p>
                            </div>
                        </div>
                        <div className="surface-panel rounded-4xl p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <MdCheckCircle className="text-2xl text-blue-600" />
                                <h3 className="text-2xl font-semibold text-slate-950">How to Pay</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <MdCheckCircle className="text-green-600 mt-1" />
                                    <div>
                                        <p className="font-semibold text-slate-950">Bank Payment</p>
                                        <p className="text-sm text-slate-600">Pay at any Dashen Bank branch. Please use your student ID as the payment reference.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MdCheckCircle className="text-green-600 mt-1" />
                                    <div>
                                        <p className="font-semibold text-slate-950">Online Payment</p>
                                        <p className="text-sm text-slate-600">Log in to your Dashen Bank account or use our online portal to pay securely from anywhere.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection className="py-16">
                <div className="mx-auto max-w-6xl px-6">
                    <SectionHeader
                        label="Important Dates"
                        title="Mark your calendar for key deadlines."
                        description="Stay on track with our admission timeline to ensure your application is considered for the upcoming academic year."
                    />

                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <div className="surface-panel rounded-4xl p-6 text-center">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 mb-4">
                                <MdCalendarToday className="text-red-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-950 mb-2">Early Application</h3>
                            <p className="text-2xl font-bold text-red-600 mb-1">...</p>
                            <p className="text-sm text-slate-600">Priority consideration deadline</p>
                        </div>

                        <div className="surface-panel rounded-4xl p-6 text-center">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 mb-4">
                                <MdCalendarToday className="text-red-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-950 mb-2">Regular Deadline</h3>
                            <p className="text-2xl font-bold text-red-600 mb-1">...</p>
                            <p className="text-sm text-slate-600">Final application deadline</p>
                        </div>

                        <div className="surface-panel rounded-4xl p-6 text-center">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 mb-4">
                                <MdCalendarToday className="text-red-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-950 mb-2">Decisions</h3>
                            <p className="text-2xl font-bold text-red-600 mb-1">...</p>
                            <p className="text-sm text-slate-600">Admission decisions released</p>
                        </div>

                        <div className="surface-panel rounded-4xl p-6 text-center">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 mb-4">
                                <MdCalendarToday className="text-red-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-950 mb-2">Enrollment</h3>
                            <p className="text-2xl font-bold text-red-600 mb-1">...</p>
                            <p className="text-sm text-slate-600">Deposit and enrollment deadline</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection className="py-16 scroll-mt-24" id="apply">
                <div className="mx-auto max-w-4xl px-6">
                    <SectionHeader
                        label="Student Application"
                        title="Complete the form below to begin the admission process"
                        description="We keep the application simple so you can focus on what matters most: your goals, your background, and your readiness for a STEM-focused education."
                    />

                    <div className="surface-panel mt-10 overflow-hidden rounded-4xl p-8 sm:p-10">
                        {formSubmitted ? (
                            <div className="text-center py-12">
                                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
                                    <MdCheckCircle className="text-2xl text-green-600" />
                                </div>
                                <h3 className="text-2xl font-semibold text-slate-950 mb-4">Application Submitted Successfully!</h3>
                                <p className="text-base leading-7 text-slate-600 mb-6">
                                    Thank you for your interest in Adelphos High School. We've received your application and will review it carefully. You'll receive an email confirmation within the next 24 hours with next steps.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid gap-8 md:grid-cols-2">
                                    <div className="space-y-3 md:col-span-2">
                                        <label className="block text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">Student Full Name</label>
                                        <input
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full rounded-3xl border border-slate-200 bg-white px-6 py-4 text-sm text-slate-900 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
                                            placeholder="John Doe"
                                            type="text"
                                        />
                                        {errors.fullName && <p className="text-sm text-red-600">{errors.fullName}</p>}
                                    </div>
                                    <div className="space-y-3">
                                        <label className="block text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">Grade Level</label>
                                        <div className="relative">
                                            <select
                                                name="grade"
                                                value={formData.grade}
                                                onChange={handleChange}
                                                className="w-full appearance-none rounded-3xl border border-slate-200 bg-white px-6 py-4 text-sm text-slate-900 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
                                            >
                                                <option value="">Select Grade</option>
                                                <option value="9">Grade 9</option>
                                                <option value="10">Grade 10</option>
                                                <option value="11">Grade 11</option>
                                                <option value="12">Grade 12</option>
                                            </select>
                                            <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-slate-400">
                                                <MdExpandMore />
                                            </div>
                                        </div>
                                        {errors.grade && <p className="text-sm text-red-600">{errors.grade}</p>}
                                    </div>
                                    <div className="space-y-3">
                                        <label className="block text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">Parent / Guardian Name</label>
                                        <input
                                            name="parentName"
                                            value={formData.parentName}
                                            onChange={handleChange}
                                            className="w-full rounded-3xl border border-slate-200 bg-white px-6 py-4 text-sm text-slate-900 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
                                            placeholder="Jane Doe"
                                            type="text"
                                        />
                                        {errors.parentName && <p className="text-sm text-red-600">{errors.parentName}</p>}
                                    </div>
                                    <div className="space-y-3">
                                        <label className="block text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">Phone Number</label>
                                        <input
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full rounded-3xl border border-slate-200 bg-white px-6 py-4 text-sm text-slate-900 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
                                            placeholder="+251 ..."
                                            type="tel"
                                        />
                                        {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
                                    </div>
                                    <div className="space-y-3 md:col-span-2">
                                        <label className="block text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">Email Address</label>
                                        <input
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full rounded-3xl border border-slate-200 bg-white px-6 py-4 text-sm text-slate-900 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
                                            placeholder="example@adelphos.edu"
                                            type="email"
                                        />
                                        {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
                                    </div>
                                </div>
                                <div className="space-y-4 pt-3">
                                    <button type="submit" className="w-full rounded-full bg-slate-950 px-6 py-4 text-base font-semibold text-white shadow-xl shadow-slate-900/15 transition hover:bg-slate-800">
                                        Submit Application
                                    </button>
                                    <p className="text-center text-sm text-slate-500">
                                        By submitting, you agree to our <a className="font-semibold text-slate-900 hover:underline" href="#">Admission Policies</a>.
                                    </p>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection className="py-20 bg-slate-950 text-white">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div className="rounded-4xl border border-white/10 bg-white/5 backdrop-blur-md p-8 sm:p-10">
                            <h2 className="text-3xl font-semibold text-white">Scientific Precision</h2>
                            <p className="mt-4 text-base leading-8 text-slate-300">
                                Adelphos integrates advanced science curricula, deep technology training, and personal mentorship to create a clear path for future researchers and engineers.
                            </p>
                        </div>
                        <div className="grid gap-6">
                            <div className="rounded-4xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
                                <div className="flex items-center gap-4">
                                    <MdRocket className="text-3xl text-red-600" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Science & Tech Mastery</h3>
                                        <p className="mt-2 text-sm leading-7 text-slate-300">Intensive curriculum focusing on software development, physics, and modern technology.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-4xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
                                <div className="flex items-center gap-4">
                                    <MdSchool className="text-3xl text-red-600" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">Academic Innovators</h3>
                                        <p className="mt-2 text-sm leading-7 text-slate-300">Learn from industry tech veterans and scientific researchers in a personalized 1:12 ratio.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </main>
    )
}

export default Enroll;