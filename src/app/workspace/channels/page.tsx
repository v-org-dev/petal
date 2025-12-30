import { Heading } from '@/components/ui/catalyst/heading'
import { Badge } from '@/components/ui/catalyst/badge'
import { Divider } from '@/components/ui/catalyst/divider'
import { Button } from '@/components/ui/catalyst/button'
import { DescriptionDetails, DescriptionList, DescriptionTerm } from '@/components/ui/catalyst/description-list'
import { Stat } from '@/components/workspace/stat'
import { channelStats, channels } from '@/components/workspace/mock-data'

const statusStyles: Record<
  (typeof channels)[number]['status'],
  { label: string; badgeColor: 'green' | 'amber' | 'zinc'; dot: string }
> = {
  live: { label: 'Live', badgeColor: 'green', dot: 'bg-green-500' },
  queued: { label: 'Queued', badgeColor: 'amber', dot: 'bg-amber-500' },
  planned: { label: 'Planned', badgeColor: 'zinc', dot: 'bg-zinc-400' },
}

const typeLabels: Record<(typeof channels)[number]['type'], string> = {
  web: 'Web',
  email: 'Email',
  social: 'Social',
  voice: 'Voice',
}

export default function ChannelsPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-8 text-gray-700 sm:px-10">
      <div className="flex flex-col gap-2">
        <Heading level={1} className="text-3xl font-semibold text-gray-900">
          Channels
        </Heading>
        <p className="text-sm text-gray-600">
          Keep every channel healthy, with clear status, response times, and quick configuration actions.
        </p>
      </div>

      <Divider className="my-6 border-gray-200" />

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {channelStats.map((stat) => (
          <div key={stat.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <Stat title={stat.title} value={stat.value} change={stat.change} description={stat.description} />
          </div>
        ))}
      </section>

      <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        {channels.map((channel, index) => {
          const status = statusStyles[channel.status]

          return (
            <div key={channel.id} className="p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`h-3 w-3 rounded-full ${status.dot}`} aria-hidden="true" />
                    <Heading level={2} className="text-xl font-semibold text-gray-900">
                      {channel.name}
                    </Heading>
                    <Badge color={status.badgeColor}>{status.label}</Badge>
                    <span className="text-sm font-semibold text-gray-800">
                      {channel.messagestoday.toLocaleString()} messages today
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{channel.description}</p>
                </div>
                <Button color="indigo" className="cursor-pointer">
                  Configure
                </Button>
              </div>

              <DescriptionList className="mt-4 gap-y-2 sm:gap-y-0">
                <DescriptionTerm className="border-gray-200 text-gray-500">Deploy URL</DescriptionTerm>
                <DescriptionDetails className="border-gray-200 text-gray-800">
                  {channel.deployUrl ?? 'Not set'}
                </DescriptionDetails>

                <DescriptionTerm className="border-gray-200 text-gray-500">Avg Response</DescriptionTerm>
                <DescriptionDetails className="border-gray-200 text-gray-800">
                  {channel.avgResponseTime ?? '—'}
                </DescriptionDetails>

                <DescriptionTerm className="border-gray-200 text-gray-500">Type</DescriptionTerm>
                <DescriptionDetails className="border-gray-200 text-gray-800">{typeLabels[channel.type]}</DescriptionDetails>
              </DescriptionList>

              {index < channels.length - 1 && <Divider className="mt-6 border-gray-200" />}
            </div>
          )
        })}
      </div>
    </div>
  )
}
