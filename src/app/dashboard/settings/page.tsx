import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button, buttonClasses } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Bell, CreditCard, KeyRound, Settings, ShieldCheck } from 'lucide-react'

const cards = [
  {
    title: 'Workspace basics',
    description: 'Keep the settings tab light—just note that it owns branding and access.',
    icon: Settings,
    badge: 'Core',
  },
  {
    title: 'Notifications',
    description: 'Decide later which alerts you want. For now, keep the shell.',
    icon: Bell,
    badge: 'Muted',
  },
  {
    title: 'Security & API',
    description: 'API keys, roles, and review rules stay here once you add detail.',
    icon: ShieldCheck,
    badge: 'Guardrails',
  },
]

const notes = [
  'Settings tab remains for navigation consistency; detailed forms are intentionally removed.',
  'Lucide icons and shadcn cards keep the bright theme aligned with other tabs.',
  'When ready, drop billing, API keys, and toggles back into these sections.',
]

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 space-y-1">
          <p className="text-sm font-medium text-indigo-600">Settings</p>
          <h1 className="text-3xl font-semibold text-slate-900">Workspace shell</h1>
          <p className="text-sm text-slate-600">Bright, simple placeholders—only the tab structure is kept.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/dashboard/team" className={buttonClasses({ variant: 'outline' })}>
            Team & roles
          </Link>
          <Button className="gap-2">
            <Settings className="h-4 w-4" /> Save placeholder
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon
          return (
            <Card key={card.title} className="h-full">
              <CardHeader className="flex flex-row items-start justify-between">
                <div className="space-y-1">
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </div>
                <Badge>{card.badge}</Badge>
              </CardHeader>
              <CardContent className="flex items-center justify-between pt-1 text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-slate-50 text-slate-700 ring-1 ring-slate-200">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>Ready for later detail.</span>
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
        <CardHeader className="flex flex-row items-start justify-between">
          <div className="space-y-1">
            <CardTitle>Billing & API</CardTitle>
            <CardDescription>Use this space when you’re ready to wire payments and keys.</CardDescription>
          </div>
          <CreditCard className="h-5 w-5 text-indigo-600" />
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-slate-700">
          <div className="flex flex-wrap items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
            <KeyRound className="h-4 w-4 text-indigo-600" />
            <span>API tokens live here—add them once the redesign settles.</span>
            <Badge variant="outline">Placeholder</Badge>
          </div>
          <div className="flex flex-wrap items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
            <CreditCard className="h-4 w-4 text-indigo-600" />
            <span>Billing cards, invoices, and usage can return later.</span>
            <Badge variant="outline">Not configured</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notes for this tab</CardTitle>
          <CardDescription>Everything stays light—no heavy forms until content is ready.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-slate-700">
          {notes.map((note) => (
            <div key={note} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500" />
              <span>{note}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
