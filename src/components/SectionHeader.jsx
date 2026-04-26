import React from 'react'

const SectionHeader = ({ label, title, description, align = 'center' }) => (
  <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}>
    {label && (
      <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-700 shadow-sm">
        {label}
      </div>
    )}
    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
      {title}
    </h2>
    {description && <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>}
  </div>
)

export default SectionHeader
