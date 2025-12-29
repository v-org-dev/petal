import React from 'react'

export function SectionCard({
  title,
  description,
  action,
  children,
}: {
  title?: string
  description?: React.ReactNode
  action?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs ring-1 ring-zinc-100">
      {(title || description || action) && (
        <div className="flex flex-wrap items-start gap-4">
          <div className="min-w-0 flex-1">
            {title && <h2 className="text-base font-semibold text-zinc-950">{title}</h2>}
            {description && <p className="mt-1 text-sm text-zinc-600">{description}</p>}
          </div>
          {action ? <div className="flex items-center gap-2">{action}</div> : null}
        </div>
      )}
      <div className={title || description || action ? 'mt-4' : ''}>{children}</div>
    </div>
  )
}
