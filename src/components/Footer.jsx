import React from 'react'
import { Link } from 'react-router-dom'
import { FaTelegramPlane, FaFacebook } from 'react-icons/fa'
import { MdLocationOn, MdEmail, MdCall } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className="py-16 text-white border-t bg-slate-950 border-white/5">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Adelphos Logo" className="object-contain w-10 h-10" />
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
              <li><Link to="/" className="text-sm transition-colors text-slate-400 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-sm transition-colors text-slate-400 hover:text-white">About Us</Link></li>
              <li><Link to="/enroll" className="text-sm transition-colors text-slate-400 hover:text-white">Enrollment</Link></li>
              <li><Link to="/student" className="text-sm transition-colors text-slate-400 hover:text-white">Student Portal</Link></li>
              <li><Link to="/contact" className="text-sm transition-colors text-slate-400 hover:text-white">Contact</Link></li>
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
                <a href="mailto:adelphosbrothers@gmail.com" className="transition-colors hover:text-white">adelphosbrothers@gmail.com</a>
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
              <li><Link to="/privacy-policy" className="text-sm transition-colors text-slate-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-sm transition-colors text-slate-400 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 mt-16 text-center border-t border-white/5 md:flex-row md:text-left">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Adelphos High School & Preparatory. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Developed by <a href="https://besufikadhosiso.github.io/Portfolio/" target="_blank" rel="noopener noreferrer" className="font-medium text-red-600 transition-colors hover:text-red-500">besufikadhosiso</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer