import Link from 'next/link'
import { Archive, BookOpen, Database, FileText, Sparkles, Upload } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button, buttonClasses } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const sections = [
  {
    title: 'Sources',
    description: 'Connect docs, feeds, and uploads without adding details yet.',
    icon: Database,
    badge: 'Ready',
  },
  {
    title: 'Articles',
    description: 'Use shadcn cards to keep content tidy and bright.',
    icon: FileText,
    badge: 'Light',
  },
  {
    title: 'Review queue',
    description: 'Hold suggested edits here until you want to expand.',
    icon: Archive,
    badge: 'Parked',
  },
]

const guidance = [
  'Keep categories in place; specific entries can be filled later.',
  'Lucide icons and shadcn components power the refreshed layout.',
  'Use the light theme to highlight what matters at a glance.',
]

export default function KnowledgeBasePage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 space-y-1">
          <p className="text-sm font-medium text-indigo-600">Knowledge base</p>
          <h1 className="text-3xl font-semibold text-slate-900">Organize the guardrails</h1>
          <p className="text-sm text-slate-600">Tabs remain; the content is intentionally minimal while you rebuild.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <Upload className="h-4 w-4" /> Placeholder upload
          </Button>
          <Link href="/dashboard/suggestions" className={buttonClasses({})}>
            Review AI notes
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <Card key={section.title} className="h-full">
              <CardHeader className="flex flex-row items-start justify-between">
                <div className="space-y-1">
                  <CardTitle>{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </div>
                <Badge>{section.badge}</Badge>
              </CardHeader>
              <CardContent className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <span className="grid size-10 place-items-center rounded-xl bg-slate-50 text-slate-700 ring-1 ring-slate-200">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>Keep this lane simple.</span>
                </div>
                <Button variant="ghost" size="sm">
                  Open
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>How to handle content now</CardTitle>
          <CardDescription>Leave specifics out. Focus on where information will live once you’re ready.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-slate-700">
          {guidance.map((item) => (
            <div key={item} className="flex items-start gap-2">
              <Sparkles className="mt-0.5 h-4 w-4 text-indigo-600" />
              <span>{item}</span>
            </div>
          ))}
          <div className="flex flex-wrap gap-2 pt-2 text-xs font-medium text-slate-600">
            <Badge variant="outline">Tabs stay</Badge>
            <Badge variant="outline">Details paused</Badge>
            <Badge variant="outline">Bright theme</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Shortcuts</CardTitle>
          <CardDescription>Move between knowledge tasks without adding heavy data.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/dashboard/knowledge-base" className={buttonClasses({ variant: 'secondary', className: 'justify-center' })}>
            <BookOpen className="mr-2 h-4 w-4" /> Overview
          </Link>
          <Link href="/dashboard/knowledge-base" className={buttonClasses({ variant: 'outline', className: 'justify-center' })}>
            <Database className="mr-2 h-4 w-4" /> Sources
          </Link>
          <Link href="/dashboard/knowledge-base" className={buttonClasses({ variant: 'ghost', className: 'justify-center' })}>
            <FileText className="mr-2 h-4 w-4" /> Articles
          </Link>
          <Link href="/dashboard/knowledge-base" className={buttonClasses({ variant: 'ghost', className: 'justify-center' })}>
            <Archive className="mr-2 h-4 w-4" /> Review
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
