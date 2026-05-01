import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Student', to: '/student' },
  { label: 'Contact', to: '/contact' },
]

const Header = () => {
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const openSidebar = () => setSidebarOpen(true)
  const closeSidebar = () => setSidebarOpen(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && sidebarOpen) {
        closeSidebar()
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [sidebarOpen])

  return (
    <header className={`sticky top-0 z-50 border-b border-slate-200/80 bg-white/95${sidebarOpen ? '' : ' backdrop-blur-sm backdrop-saturate-150'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Adelphos logo" className="h-11 w-11 object-contain" />
          <span className="text-lg font-semibold text-slate-950">Adelphos</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className={`transition-colors ${location.pathname === link.to ? 'text-slate-950' : 'hover:text-slate-950'}`}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/enroll"
          className="hidden md:inline-flex items-center rounded-full border border-slate-200 bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-slate-900/10 transition hover:bg-slate-800"
        >
          Enroll Now
        </Link>

        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-slate-400"
          aria-label="Open menu"
          onClick={openSidebar}
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-slate-950">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{
          backdropFilter: sidebarOpen ? 'blur(18px) saturate(160%)' : 'none',
          WebkitBackdropFilter: sidebarOpen ? 'blur(18px) saturate(160%)' : 'none',
          background: sidebarOpen ? 'rgba(20,20,30,0.22)' : 'transparent',
        }}
        onClick={closeSidebar}
        aria-hidden={!sidebarOpen}
      >
        <aside
          className={`fixed right-0 top-0 h-full w-[85vw] max-w-[85vw] bg-white border-l border-slate-200 shadow-2xl transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col overflow-y-auto`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-end px-6 py-4 border-b border-slate-100">
            <button
              className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-slate-400"
              aria-label="Close menu"
              onClick={closeSidebar}
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-slate-950">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-4 px-6 py-6 text-base font-medium text-slate-800 bg-white">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors ${location.pathname === link.to ? 'text-slate-950 font-semibold' : 'hover:text-slate-950'}`}
                onClick={closeSidebar}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="px-6 pb-8 mt-auto">
            <Link
              to="/enroll"
              className="w-full inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-950 px-5 py-4 text-sm font-semibold text-white shadow-sm shadow-slate-900/10 transition hover:bg-slate-800"
              onClick={closeSidebar}
            >
              Enroll Now
            </Link>
          </div>
        </aside>
      </div>
    </header>
  )
}

export default Header