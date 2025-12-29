import Link from 'next/link'
import { BookOpen, Inbox, MessageSquare, Settings, Sparkles, Users } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button, buttonClasses } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const focusAreas = [
  {
    title: 'Inbox',
    description: 'Low-detail conversations and approvals waiting for you.',
    href: '/dashboard/inbox',
    icon: Inbox,
    status: 'Active',
  },
  {
    title: 'Knowledge base',
    description: 'Organize answers the AI can safely reuse.',
    href: '/dashboard/knowledge-base',
    icon: BookOpen,
    status: 'Organize',
  },
  {
    title: 'AI suggestions',
    description: 'Fresh ideas pulled from recent conversations.',
    href: '/dashboard/suggestions',
    icon: Sparkles,
    status: 'New',
  },
  {
    title: 'Channels',
    description: 'Keep web, chat, and social responses aligned.',
    href: '/dashboard/channels',
    icon: MessageSquare,
    status: 'Live',
  },
  {
    title: 'Team',
    description: 'Assign reviewers and set collaboration rules.',
    href: '/dashboard/team',
    icon: Users,
    status: 'Collab',
  },
  {
    title: 'Settings',
    description: 'Workspace preferences, security, and branding.',
    href: '/dashboard/settings',
    icon: Settings,
    status: 'Config',
  },
]

const quickWins = [
  'Pick one focus area to set the tone for today.',
  'Share a short update with the team inside the workspace.',
  'Use the light theme to align with the new visual refresh.',
]

const reminders = [
  'You can move between tabs without losing context.',
  'Keep notes simple; details will live inside each tab later.',
  'Every section is ready for brighter shadcn cards and buttons.',
]

export default function DashboardOverviewPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 space-y-1">
          <p className="text-sm font-medium text-indigo-600">Overview</p>
          <h1 className="text-3xl font-semibold text-slate-900">Petal dashboard reset</h1>
          <p className="text-sm text-slate-600">
            Tabs stay the same—content is lighter, brighter, and ready for the new shadcn components.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline">Share snapshot</Button>
          <Link href="/dashboard/knowledge-base" className={buttonClasses({})}>
            Start organizing
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {focusAreas.map((area) => {
          const Icon = area.icon
          return (
            <Card key={area.title} className="h-full">
              <CardHeader className="flex flex-row items-start justify-between">
                <div className="space-y-1">
                  <CardTitle>{area.title}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </div>
                <Badge>{area.status}</Badge>
              </CardHeader>
              <CardContent className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <span className="grid size-10 place-items-center rounded-xl bg-slate-50 text-slate-700 ring-1 ring-slate-200">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>Jump into {area.title.toLowerCase()}</span>
                </div>
                <Link href={area.href} className={buttonClasses({ variant: 'ghost', size: 'sm' })}>
                  Open
                </Link>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick wins</CardTitle>
            <CardDescription>Keep the reboot light—no detailed data required right now.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-slate-700">
              {quickWins.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Reminders</CardTitle>
            <CardDescription>What stays from the old dashboard? Only the tab structure.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-slate-700">
              {reminders.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
