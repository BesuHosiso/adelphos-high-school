import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 flex items-center justify-center py-20 px-6">
      <div className="max-w-2xl rounded-4xl border border-slate-200 bg-white p-12 shadow-2xl shadow-slate-200/40 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">Page not found</p>
        <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-950">404</h1>
        <p className="mt-4 text-base leading-8 text-slate-600">
          The page you are looking for doesn’t exist or has been moved. Let’s get you back on track.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-sm font-semibold text-white shadow-xl shadow-slate-900/10 transition hover:bg-slate-800"
        >
          Return Home
        </Link>
      </div>
    </main>
  )
}

export default NotFound
