import { Heading, Subheading } from '@/components/ui/catalyst/heading'
import { Stat } from '@/components/dashboard/stat'
import { Badge } from '@/components/ui/catalyst/badge'
import { Divider } from '@/components/ui/catalyst/divider'
import { Button } from '@/components/ui/catalyst/button'
import { DescriptionDetails, DescriptionList, DescriptionTerm } from '@/components/ui/catalyst/description-list'
import { channelStats, channels } from '@/components/dashboard/mock-data'

export default function ChannelsPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'green'
      case 'queued':
        return 'amber'
      case 'planned':
        return 'zinc'
      default:
        return 'zinc'
    }
  }

  const getStatusDot = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-green-500'
      case 'queued':
        return 'bg-amber-500'
      case 'planned':
        return 'bg-zinc-400'
      default:
        return 'bg-zinc-400'
    }
  }

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <Heading>Channels</Heading>
        <p className="mt-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
          Manage your multi-channel communication integrations
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {channelStats.map((stat) => (
          <Stat key={stat.title} {...stat} />
        ))}
      </div>

      {/* Channels List */}
      <div>
        <Subheading>Active Channels</Subheading>
        <Divider className="mt-4" soft />

        <div className="mt-6 space-y-8">
          {channels.map((channel, index) => (
            <div key={channel.id}>
              {index > 0 && <Divider soft />}
              <div className="flex items-start justify-between gap-6">
                <div className="flex items-start gap-4">
                  {/* Status Dot */}
                  <div className={`mt-2 size-2 shrink-0 rounded-full ${getStatusDot(channel.status)}`} />

                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center gap-3">
                        <Subheading level={3}>{channel.name}</Subheading>
                        <Badge color={getStatusColor(channel.status) as any}>
                          {channel.status.charAt(0).toUpperCase() + channel.status.slice(1)}
                        </Badge>
                        {channel.status === 'live' && (
                          <span className="text-sm text-zinc-500 dark:text-zinc-400">
                            {channel.messagestoday} msgs today
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{channel.description}</p>
                    </div>

                    <DescriptionList>
                      {channel.deployUrl && (
                        <>
                          <DescriptionTerm>Deploy URL</DescriptionTerm>
                          <DescriptionDetails>{channel.deployUrl}</DescriptionDetails>
                        </>
                      )}

                      {channel.avgResponseTime && (
                        <>
                          <DescriptionTerm>Avg Response</DescriptionTerm>
                          <DescriptionDetails>{channel.avgResponseTime}</DescriptionDetails>
                        </>
                      )}

                      {channel.status !== 'planned' && (
                        <>
                          <DescriptionTerm>Type</DescriptionTerm>
                          <DescriptionDetails className="capitalize">{channel.type}</DescriptionDetails>
                        </>
                      )}
                    </DescriptionList>
                  </div>
                </div>

                <Button outline>Configure</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
