import { Heading } from '@/components/ui/catalyst/heading'
import { Stat } from '@/components/dashboard/stat'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/catalyst/table'
import { Avatar } from '@/components/ui/catalyst/avatar'
import { Badge } from '@/components/ui/catalyst/badge'
import { DescriptionDetails, DescriptionList, DescriptionTerm } from '@/components/ui/catalyst/description-list'
import { Divider } from '@/components/ui/catalyst/divider'
import { overviewStats, conversations } from '@/components/dashboard/mock-data'

export default function DashboardOverviewPage() {
  // Get first 6 conversations for recent activity
  const recentActivity = conversations.slice(0, 6)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'needs_review':
        return 'amber'
      case 'awaiting_approval':
        return 'blue'
      case 'follow_up':
        return 'zinc'
      default:
        return 'zinc'
    }
  }

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <Heading>Dashboard Overview</Heading>
        <p className="mt-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
          Track your workspace activity and performance metrics
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {overviewStats.map((stat) => (
          <Stat key={stat.title} {...stat} />
        ))}
      </div>

      {/* 2-Column Layout: Recent Activity + Quick Actions */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Recent Conversations Table */}
        <div className="lg:col-span-2">
          <Heading level={2}>Recent Conversations</Heading>
          <Divider className="mt-4" soft />

          <Table className="mt-4" striped>
            <TableHead>
              <TableRow>
                <TableHeader>User</TableHeader>
                <TableHeader>Subject</TableHeader>
                <TableHeader>Status</TableHeader>
                <TableHeader>Time</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {recentActivity.map((conversation) => (
                <TableRow key={conversation.id} href={`/dashboard/inbox?conversation=${conversation.id}`}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={conversation.user.avatar}
                        initials={conversation.user.initials}
                        className="size-8"
                      />
                      <span className="font-medium">{conversation.user.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="max-w-md truncate">{conversation.subject}</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">{conversation.preview}</div>
                  </TableCell>
                  <TableCell>
                    <Badge color={getStatusBadge(conversation.status) as any}>
                      {conversation.status.replace('_', ' ')}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-zinc-500">{conversation.timestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Quick Actions Sidebar */}
        <div>
          <Heading level={2}>Quick Actions</Heading>
          <Divider className="mt-4" soft />

          <div className="mt-6 space-y-6">
            <DescriptionList>
              <DescriptionTerm>Inbox Queue</DescriptionTerm>
              <DescriptionDetails className="flex items-center gap-2">
                <Badge color="amber">23 pending</Badge>
              </DescriptionDetails>

              <DescriptionTerm>KB Articles</DescriptionTerm>
              <DescriptionDetails className="flex items-center gap-2">
                <Badge color="blue">5 in review</Badge>
              </DescriptionDetails>

              <DescriptionTerm>Suggestions</DescriptionTerm>
              <DescriptionDetails className="flex items-center gap-2">
                <Badge color="green">7 new ideas</Badge>
              </DescriptionDetails>

              <DescriptionTerm>Active Channels</DescriptionTerm>
              <DescriptionDetails>
                <span className="font-medium text-zinc-950 dark:text-white">4 live</span>
              </DescriptionDetails>

              <DescriptionTerm>Team Members</DescriptionTerm>
              <DescriptionDetails>
                <span className="font-medium text-zinc-950 dark:text-white">6 active</span>
              </DescriptionDetails>
            </DescriptionList>
          </div>
        </div>
      </div>
    </div>
  )
}
