import * as React from 'react'

import { cn } from '@/lib/utils'

const variants = {
  default: 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:ring-indigo-500',
  secondary: 'bg-slate-100 text-slate-900 shadow-sm hover:bg-slate-200 focus-visible:ring-slate-300',
  outline:
    'border border-slate-200 bg-white text-slate-900 shadow-sm hover:bg-slate-50 focus-visible:ring-slate-300',
  ghost: 'text-slate-600 hover:bg-slate-100 focus-visible:ring-slate-200',
}

const sizes = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-11 px-5 text-base',
  icon: 'h-10 w-10',
}

type Variant = keyof typeof variants
type Size = keyof typeof sizes

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
}

export const buttonClasses = ({ variant = 'default', size = 'md', className }: Partial<ButtonProps>) =>
  cn(
    'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60',
    variants[variant],
    sizes[size],
    className,
  )

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = 'default', size = 'md', ...props },
  ref,
) {
  return <button ref={ref} className={buttonClasses({ variant, size, className })} {...props} />
})
