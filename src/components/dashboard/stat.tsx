import { Badge } from '@/components/ui/catalyst/badge'

type StatProps = {
  title: string
  value: string
  change?: {
    value: string
    trend: 'up' | 'down' | 'neutral'
  }
  description?: string
}

export function Stat({ title, value, change, description }: StatProps) {
  const getBadgeColor = (trend: 'up' | 'down' | 'neutral') => {
    switch (trend) {
      case 'up':
        return 'green'
      case 'down':
        return 'rose'
      case 'neutral':
        return 'zinc'
    }
  }

  return (
    <div>
      <p className="text-sm/6 font-medium text-zinc-500 dark:text-zinc-400">{title}</p>
      <p className="mt-2 flex items-baseline gap-x-2">
        <span className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white">{value}</span>
        {change && <Badge color={getBadgeColor(change.trend)}>{change.value}</Badge>}
      </p>
      {description && <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{description}</p>}
    </div>
  )
}
