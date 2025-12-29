import type * as React from 'react'

import { cn } from '@/lib/utils'

const variants = {
  default: 'bg-indigo-50 text-indigo-700 border border-indigo-100',
  muted: 'bg-slate-100 text-slate-700 border border-slate-200',
  success: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
  warning: 'bg-amber-50 text-amber-700 border border-amber-100',
  danger: 'bg-rose-50 text-rose-700 border border-rose-100',
  outline: 'border border-slate-200 text-slate-800 bg-white',
}

type Variant = keyof typeof variants

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: Variant
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium uppercase tracking-tight',
        variants[variant],
        className,
      )}
      {...props}
    />
  )
}
