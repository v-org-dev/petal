import * as React from 'react'

import { cn } from '@/lib/utils'

export type CardProps = React.HTMLAttributes<HTMLDivElement>

export const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card({ className, ...props }, ref) {
  return <div ref={ref} className={cn('rounded-2xl border border-slate-200 bg-white shadow-sm', className)} {...props} />
})

export const CardHeader = React.forwardRef<HTMLDivElement, CardProps>(function CardHeader({ className, ...props }, ref) {
  return <div ref={ref} className={cn('flex flex-col gap-1 px-5 py-4', className)} {...props} />
})

export const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(function CardTitle(
  { className, ...props },
  ref,
) {
  return <p ref={ref} className={cn('text-base font-semibold text-slate-900', className)} {...props} />
})

export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  function CardDescription({ className, ...props }, ref) {
    return <p ref={ref} className={cn('text-sm text-slate-600', className)} {...props} />
  },
)

export const CardContent = React.forwardRef<HTMLDivElement, CardProps>(function CardContent({ className, ...props }, ref) {
  return <div ref={ref} className={cn('px-5 pb-5', className)} {...props} />
})

export const CardFooter = React.forwardRef<HTMLDivElement, CardProps>(function CardFooter({ className, ...props }, ref) {
  return <div ref={ref} className={cn('px-5 pb-5 pt-2', className)} {...props} />
})
