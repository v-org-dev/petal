import * as React from 'react'

import { cn } from '@/lib/utils'

const sizes = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-12 w-12 text-base',
}

type Size = keyof typeof sizes

export type AvatarProps = React.HTMLAttributes<HTMLDivElement> & {
  src?: string
  name?: string
  size?: Size
}

export function Avatar({ className, src, name, size = 'md', ...props }: AvatarProps) {
  const initials = name
    ?.split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden rounded-full bg-slate-100 text-slate-700 ring-1 ring-slate-200',
        sizes[size],
        className,
      )}
      {...props}
    >
      {src ? <img src={src} alt={name} className="h-full w-full object-cover" /> : <span>{initials || '??'}</span>}
    </div>
  )
}
