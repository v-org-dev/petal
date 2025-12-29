import Link from 'next/link'
import { CheckCircle2, Clock3, Inbox, Send, ShieldCheck } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button, buttonClasses } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const queues = [
  {
    title: 'Needs human review',
    description: 'Conversations that should stay lightweight until rules are set.',
    badge: 'Today',
  },
  {
    title: 'Awaiting approvals',
    description: 'Drafts the AI prepared but require a quick glance.',
    badge: 'Safe to trim',
  },
  {
    title: 'Follow-ups',
    description: 'Threads paused for more context—keep them simple for now.',
    badge: 'In progress',
  },
]

const checklist = [
  'Keep only the inbox tab—detailed tickets are intentionally removed.',
  'Use bright shadcn buttons for quick triage actions.',
  'Route anything that feels heavy into the knowledge base later.',
]

export default function InboxPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 space-y-1">
          <p className="text-sm font-medium text-indigo-600">Inbox</p>
          <h1 className="text-3xl font-semibold text-slate-900">Lightweight triage</h1>
          <p className="text-sm text-slate-600">Only the inbox tab remains—everything inside is pared back.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/dashboard/suggestions" className={buttonClasses({ variant: 'outline' })}>
            Send to AI suggestions
          </Link>
          <Button>Assign owner</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {queues.map((item) => (
          <Card key={item.title} className="h-full">
            <CardHeader className="flex flex-row items-start justify-between">
              <div className="space-y-1">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </div>
              <Badge variant="outline">{item.badge}</Badge>
            </CardHeader>
            <CardContent className="flex items-center justify-between pt-1 text-sm text-slate-700">
              <span className="flex items-center gap-2">
                {item.title === 'Awaiting approvals' ? (
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                ) : item.title === 'Follow-ups' ? (
                  <Clock3 className="h-4 w-4 text-amber-500" />
                ) : (
                  <Inbox className="h-4 w-4 text-indigo-600" />
                )}
                <span>Keep it short and clear.</span>
              </span>
              <Button variant="ghost" size="sm">
                View
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>How to use this inbox</CardTitle>
            <CardDescription>Everything inside should stay concise while the dashboard resets.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-slate-700">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-indigo-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick actions</CardTitle>
            <CardDescription>These are simple placeholders—use them as you reintroduce detail.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-700">
            <Button className="w-full justify-start gap-2" variant="secondary">
              <Send className="h-4 w-4" /> Send concise reply
            </Button>
            <Button className="w-full justify-start gap-2" variant="outline">
              <ShieldCheck className="h-4 w-4" /> Approve draft
            </Button>
            <Button className="w-full justify-start gap-2" variant="ghost">
              <Clock3 className="h-4 w-4" /> Snooze for later
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
