import React from 'react'
import { Link } from 'react-router-dom'
import { FaTelegramPlane, FaFacebook } from 'react-icons/fa'
import { MdLocationOn, MdEmail, MdCall } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-16 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Adelphos Logo" className="h-10 w-10 object-contain" />
              <span className="text-xl font-bold tracking-tight">ADELPHOS</span>
            </div>
            <p className="text-sm leading-7 text-slate-400">
              Inspiring tomorrow’s innovators in science and technology through rigorous academic excellence in Wolaita, Ethiopia.
            </p>
            <div className="flex gap-4">
              <a href="https://t.me/adelphos_high_school" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 hover:bg-red-600 transition-all duration-300">
                <FaTelegramPlane className="text-lg" />
              </a>
              <a href="https://facebook.com/adelphoshighschool" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 hover:bg-red-600 transition-all duration-300">
                <FaFacebook className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white mb-6">Explore</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sm text-slate-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/enroll" className="text-sm text-slate-400 hover:text-white transition-colors">Enrollment</Link></li>
              <li><Link to="/student" className="text-sm text-slate-400 hover:text-white transition-colors">Student Portal</Link></li>
              <li><Link to="/contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MdLocationOn className="text-lg text-red-600 shrink-0 mt-0.5" />
                <span>Boditi Wolaita, Ethiopia</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <MdEmail className="text-lg text-red-600 shrink-0" />
                <a href="mailto:adelphosbrothers@gmail.com" className="hover:text-white transition-colors">adelphosbrothers@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <MdCall className="text-lg text-red-600 shrink-0" />
                <span>+251 913 841 213</span>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><Link to="/privacy-policy" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Adelphos High School & Preparatory. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Developed by <a href="https://besuhosiso.github.io/BesufikadHosiso/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-500 transition-colors font-medium">besuhosiso</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer