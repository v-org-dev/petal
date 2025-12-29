import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button, buttonClasses } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Globe2, Mail, MessageCircle, PhoneCall, SignalHigh } from 'lucide-react'

const connections = [
  {
    name: 'Web chat',
    status: 'Live',
    detail: 'Minimal config—just a bright shell for now.',
    icon: MessageCircle,
  },
  { name: 'Email handoff', status: 'Live', detail: 'Keeps the inbox tab connected.', icon: Mail },
  { name: 'Social', status: 'Queued', detail: 'Messenger, Instagram, and more when ready.', icon: Globe2 },
  { name: 'Voice', status: 'Planned', detail: 'Hold place for call routing rules.', icon: PhoneCall },
]

export default function ChannelsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 space-y-1">
          <p className="text-sm font-medium text-indigo-600">Channels</p>
          <h1 className="text-3xl font-semibold text-slate-900">Keep routes simple</h1>
          <p className="text-sm text-slate-600">Only the channel categories stay—no deep settings until you’re ready.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/dashboard/inbox" className={buttonClasses({ variant: 'outline' })}>
            View inbox
          </Link>
          <Button>Add channel placeholder</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {connections.map((connection) => {
          const Icon = connection.icon
          return (
            <Card key={connection.name} className="h-full">
              <CardHeader className="flex flex-row items-start justify-between">
                <div className="space-y-1">
                  <CardTitle>{connection.name}</CardTitle>
                  <CardDescription>{connection.detail}</CardDescription>
                </div>
                <Badge variant="outline">{connection.status}</Badge>
              </CardHeader>
              <CardContent className="flex items-center justify-between pt-1 text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-slate-50 text-slate-700 ring-1 ring-slate-200">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>Bright shell only.</span>
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
            <CardTitle>Fallback & coverage</CardTitle>
            <CardDescription>Keep escalation notes lightweight and revisit when you add detail.</CardDescription>
          </div>
          <SignalHigh className="h-5 w-5 text-indigo-600" />
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Confidence rules</p>
            <p>Route low-confidence threads to the inbox; everything else stays here as a placeholder.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Hours & languages</p>
            <p>Note coverage ideas without wiring schedules yet.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
