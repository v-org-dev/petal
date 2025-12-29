import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button, buttonClasses } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, UserPlus, Users } from 'lucide-react'

const roles = [
  { title: 'Owners & Admins', description: 'Keep control of approvals and workspace changes without extra detail.' },
  { title: 'Reviewers', description: 'Lightweight placeholders for people who sign off on AI output.' },
  { title: 'Agents', description: 'Stay connected to the inbox and channels with minimal setup.' },
]

const notes = [
  'Team tab stays in place—member specifics can be added later.',
  'Use bright shadcn components for invites and role chips.',
  'Lucide icons keep the new look consistent across the dashboard.',
]

export default function TeamPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 space-y-1">
          <p className="text-sm font-medium text-indigo-600">Team</p>
          <h1 className="text-3xl font-semibold text-slate-900">Collaboration shell</h1>
          <p className="text-sm text-slate-600">Roles remain, but details are trimmed back during the redesign.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/dashboard/settings" className={buttonClasses({ variant: 'outline' })}>
            Workspace settings
          </Link>
          <Button className="gap-2">
            <UserPlus className="h-4 w-4" /> Invite placeholder
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {roles.map((role) => (
          <Card key={role.title} className="h-full">
            <CardHeader className="flex flex-row items-start justify-between">
              <div className="space-y-1">
                <CardTitle>{role.title}</CardTitle>
                <CardDescription>{role.description}</CardDescription>
              </div>
              <Badge variant="outline">Active</Badge>
            </CardHeader>
            <CardContent className="flex items-center justify-between pt-1 text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-slate-50 text-slate-700 ring-1 ring-slate-200">
                  <Users className="h-5 w-5" />
                </span>
                <span>Keep access lean.</span>
              </div>
              <Button variant="ghost" size="sm">
                View
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader className="flex flex-row items-start justify-between">
          <div className="space-y-1">
            <CardTitle>Approval approach</CardTitle>
            <CardDescription>Hold space for rules; fill them in once the rebuild is done.</CardDescription>
          </div>
          <Shield className="h-5 w-5 text-indigo-600" />
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
