import { Heading } from '@/components/ui/catalyst/heading'
import { Stat } from '@/components/workspace/stat'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/catalyst/table'
import { Avatar } from '@/components/ui/catalyst/avatar'
import { Badge } from '@/components/ui/catalyst/badge'
import { Divider } from '@/components/ui/catalyst/divider'
import { DescriptionDetails, DescriptionList, DescriptionTerm } from '@/components/ui/catalyst/description-list'
import { conversations, overviewStats } from '@/components/workspace/mock-data'

const statusStyles = {
  needs_review: { label: 'Needs review', color: 'amber' as const },
  awaiting_approval: { label: 'Awaiting approval', color: 'blue' as const },
  follow_up: { label: 'Follow up', color: 'emerald' as const },
}

const queueDescriptions = {
  needs_review: 'Responses to polish before sending.',
  awaiting_approval: 'Ready for final approval.',
  follow_up: 'Waiting on next touchpoint.',
}

export default function WorkspaceOverviewPage() {
  const queueCounts = conversations.reduce(
    (counts, conversation) => {
      counts[conversation.queue] += 1
      return counts
    },
    { needs_review: 0, awaiting_approval: 0, follow_up: 0 }
  )

  return (
    <div className="min-h-screen bg-white px-6 py-8 text-gray-700 sm:px-10">
      <div className="flex flex-col gap-2">
        <Heading level={1} className="text-3xl font-semibold text-gray-900">
          Dashboard Overview
        </Heading>
        <p className="text-sm text-gray-600">
          Snapshot of live support activity, review queues, and quick follow-up actions.
        </p>
      </div>

      <Divider className="my-6 border-gray-200" />

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {overviewStats.map((stat) => (
          <div key={stat.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <Stat title={stat.title} value={stat.value} change={stat.change} description={stat.description} />
          </div>
        ))}
      </section>

      <section className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-1">
              <Heading level={2} className="text-xl font-semibold text-gray-900">
                Recent conversations
              </Heading>
              <p className="text-sm text-gray-600">What customers are asking for right now.</p>
            </div>
            <Badge color="blue">Live feed</Badge>
          </div>

          <div className="mt-4">
            <Table bleed>
              <TableHead>
                <TableRow>
                  <TableHeader className="border-gray-200 text-gray-500">Customer</TableHeader>
                  <TableHeader className="border-gray-200 text-gray-500">Subject</TableHeader>
                  <TableHeader className="border-gray-200 text-gray-500">Status</TableHeader>
                  <TableHeader className="border-gray-200 text-gray-500">Updated</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {conversations.map((conversation) => {
                  const status = statusStyles[conversation.status]
                  return (
                    <TableRow key={conversation.id} className="align-top">
                      <TableCell className="!border-gray-200">
                        <div className="flex items-center gap-3">
                          <Avatar
                            src={conversation.user.avatar}
                            initials={conversation.user.initials}
                            alt={conversation.user.name}
                            className="size-10"
                          />
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold text-gray-900">{conversation.user.name}</span>
                            <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="!border-gray-200">
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-medium text-gray-900">{conversation.subject}</span>
                          <span className="text-xs text-gray-500">{conversation.preview}</span>
                        </div>
                      </TableCell>
                      <TableCell className="!border-gray-200">
                        <div className="flex flex-col gap-2">
                          <Badge color={status.color}>{status.label}</Badge>
                          <span className="text-xs text-gray-500">Queue: {conversation.queue.replace('_', ' ')}</span>
                        </div>
                      </TableCell>
                      <TableCell className="!border-gray-200">
                        <div className="flex flex-col items-start gap-1 text-xs text-gray-600">
                          <span>{conversation.dateTime}</span>
                          <span className="text-gray-500">Updated {conversation.timestamp}</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <Heading level={2} className="text-xl font-semibold text-gray-900">
            Quick actions
          </Heading>
          <p className="mt-1 text-sm text-gray-600">Stay ahead of pending reviews and follow-ups.</p>

          <div className="mt-4 space-y-3">
            <button className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-left font-semibold text-gray-800 transition hover:border-gray-300 hover:bg-gray-100">
              Triage {queueCounts.needs_review} conversation{queueCounts.needs_review === 1 ? '' : 's'} needing review
            </button>
            <button className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-left font-semibold text-gray-800 transition hover:border-gray-300 hover:bg-gray-100">
              Approve {queueCounts.awaiting_approval} AI drafts
            </button>
            <button className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-left font-semibold text-gray-800 transition hover:border-gray-300 hover:bg-gray-100">
              Schedule {queueCounts.follow_up} follow-ups
            </button>
          </div>

          <Divider className="my-6 border-gray-200" />

          <DescriptionList className="gap-y-2">
            <DescriptionTerm className="border-gray-200 text-gray-500">Needs review</DescriptionTerm>
            <DescriptionDetails className="border-gray-200 text-gray-700">
              <div className="flex items-center justify-between">
                <span>{queueDescriptions.needs_review}</span>
                <Badge color="amber">{queueCounts.needs_review} open</Badge>
              </div>
            </DescriptionDetails>

            <DescriptionTerm className="border-gray-200 text-gray-500">Awaiting approval</DescriptionTerm>
            <DescriptionDetails className="border-gray-200 text-gray-700">
              <div className="flex items-center justify-between">
                <span>{queueDescriptions.awaiting_approval}</span>
                <Badge color="blue">{queueCounts.awaiting_approval} queued</Badge>
              </div>
            </DescriptionDetails>

            <DescriptionTerm className="border-gray-200 text-gray-500">Follow up</DescriptionTerm>
            <DescriptionDetails className="border-gray-200 text-gray-700">
              <div className="flex items-center justify-between">
                <span>{queueDescriptions.follow_up}</span>
                <Badge color="emerald">{queueCounts.follow_up} waiting</Badge>
              </div>
            </DescriptionDetails>
          </DescriptionList>
        </div>
      </section>
    </div>
  )
}
