import Link from 'next/link'
import { CheckCircle2, FolderKanban, Lightbulb, Sparkles, Wand2 } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button, buttonClasses } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const lanes = [
  {
    title: 'New ideas',
    description: 'AI surfaced topics from recent chats. Keep it light and review later.',
    icon: Lightbulb,
    badge: 'Fresh',
  },
  {
    title: 'Needs approval',
    description: 'Placeholders for edits that will power the knowledge base.',
    icon: CheckCircle2,
    badge: 'Waiting',
  },
  {
    title: 'Backlog',
    description: 'Anything you want to park while rebuilding the dashboard.',
    icon: FolderKanban,
    badge: 'Parked',
  },
]

const tips = [
  'Only the tab structure matters right now; details stay out of the way.',
  'Use lucide icons and shadcn cards to keep everything consistent.',
  'When ready, push approved ideas straight into the knowledge base tab.',
]

export default function SuggestionsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 space-y-1">
          <p className="text-sm font-medium text-indigo-600">AI suggestions</p>
          <h1 className="text-3xl font-semibold text-slate-900">Capture ideas, skip the clutter</h1>
          <p className="text-sm text-slate-600">Suggestions stay simple while the dashboard refresh rolls out.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/dashboard/knowledge-base" className={buttonClasses({ variant: 'outline' })}>
            Open knowledge base
          </Link>
          <Button className="gap-2">
            <Wand2 className="h-4 w-4" /> Approve later
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {lanes.map((lane) => {
          const Icon = lane.icon
          return (
            <Card key={lane.title} className="h-full">
              <CardHeader className="flex flex-row items-start justify-between">
                <div className="space-y-1">
                  <CardTitle>{lane.title}</CardTitle>
                  <CardDescription>{lane.description}</CardDescription>
                </div>
                <Badge>{lane.badge}</Badge>
              </CardHeader>
              <CardContent className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <span className="grid size-10 place-items-center rounded-xl bg-slate-50 text-slate-700 ring-1 ring-slate-200">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>Keep notes minimal.</span>
                </div>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Working style for this tab</CardTitle>
          <CardDescription>Lucide icons, shadcn components, and a bright theme guide the refresh.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-slate-700">
          {tips.map((tip) => (
            <div key={tip} className="flex items-start gap-2">
              <Sparkles className="mt-0.5 h-4 w-4 text-indigo-600" />
              <span>{tip}</span>
            </div>
          ))}
          <div className="flex flex-wrap gap-2 pt-2 text-xs font-medium text-slate-600">
            <Badge variant="outline">Tabs intact</Badge>
            <Badge variant="outline">Content lightweight</Badge>
            <Badge variant="outline">Shadcn ready</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
