import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Student', to: '/student' },
  { label: 'Contact', to: '/contact' },
]


import { useEffect } from 'react'

const Header = () => {
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Close sidebar if resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className={`sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 dark:bg-slate-900/95 dark:border-slate-700/80${sidebarOpen ? '' : ' backdrop-blur-sm backdrop-saturate-150'}`}> 
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Adelphos logo" className="h-11 w-11 object-contain" />
          <span className="text-lg font-semibold text-slate-950">Adelphos</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className={`transition-colors ${location.pathname === link.to ? 'text-slate-950' : 'hover:text-slate-950'}`}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Enroll Button */}
        <Link
          to="/enroll"
          className="hidden md:inline-flex items-center rounded-full border border-slate-200 bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-slate-900/10 transition hover:bg-slate-800"
        >
          Enroll Now
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-slate-400"
          aria-label="Open menu"
          onClick={() => setSidebarOpen(true)}
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-slate-950">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 ${sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{
          backdropFilter: sidebarOpen ? 'blur(18px) saturate(160%)' : 'none',
          WebkitBackdropFilter: sidebarOpen ? 'blur(18px) saturate(160%)' : 'none',
          background: sidebarOpen ? 'rgba(20,20,30,0.22)' : 'transparent',
        }}
        onClick={() => setSidebarOpen(false)}
        aria-hidden={!sidebarOpen}
      >
        <aside
          className={`fixed right-0 top-0 h-full w-[85vw] max-w-130 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} bg-white dark:bg-slate-900 border border-slate-200/80 shadow-2xl rounded-2xl`}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-end px-6 py-4 bg-transparent">
            <button
              className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-slate-400"
              aria-label="Close menu"
              onClick={() => setSidebarOpen(false)}
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-slate-950">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="w-full flex flex-col items-center gap-4 px-6 py-6 text-base font-medium text-slate-700 bg-white">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors ${location.pathname === link.to ? 'text-slate-950 font-semibold' : 'hover:text-slate-950'}`}
                onClick={() => setSidebarOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 pb-8 mt-auto flex">
            <Link
              to="/enroll"
              className="w-full inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-950 px-5 py-4 text-sm font-semibold text-white shadow-sm shadow-slate-900/10 transition hover:bg-slate-800"
              onClick={() => setSidebarOpen(false)}
            >
              Enroll Now
            </Link>
          </div>
        </aside>
      </div>
    </header>
  )
}

export default Header;