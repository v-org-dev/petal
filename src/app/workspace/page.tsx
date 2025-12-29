import { Heading } from '@/components/ui/catalyst/heading'
import { Stat } from '@/components/dashboard/stat'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/catalyst/table'
import { Avatar } from '@/components/ui/catalyst/avatar'
import { Badge } from '@/components/ui/catalyst/badge'
import { DescriptionDetails, DescriptionList, DescriptionTerm } from '@/components/ui/catalyst/description-list'
import { Divider } from '@/components/ui/catalyst/divider'
import { workspaceStats, conversations } from '@/components/workspace/mock-data'

export default function WorkspaceDashboardPage() {
  // 获取前6条对话用于显示最近活动
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
      {/* 页面标题 */}
      <div>
        <Heading>仪表盘</Heading>
        <p className="mt-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
          跟踪工作空间活动和性能指标
        </p>
      </div>

      {/* 统计指标网格 */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {workspaceStats.map((stat) => (
          <Stat key={stat.title} {...stat} />
        ))}
      </div>

      {/* 2列布局: 最近对话 + 快速统计 */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* 最近对话表格 */}
        <div className="lg:col-span-2">
          <Heading level={2}>最近对话</Heading>
          <Divider className="mt-4" soft />

          <Table className="mt-4" striped>
            <TableHead>
              <TableRow>
                <TableHeader>用户</TableHeader>
                <TableHeader>主题</TableHeader>
                <TableHeader>状态</TableHeader>
                <TableHeader>时间</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {recentActivity.map((conversation) => (
                <TableRow key={conversation.id} href={`/workspace/conversations?conversation=${conversation.id}`}>
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
                      {conversation.statusLabel}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-zinc-500">{conversation.timestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* 快速统计侧边栏 */}
        <div>
          <Heading level={2}>快速统计</Heading>
          <Divider className="mt-4" soft />

          <div className="mt-6 space-y-6">
            <DescriptionList>
              <DescriptionTerm>收件箱队列</DescriptionTerm>
              <DescriptionDetails className="flex items-center gap-2">
                <Badge color="amber">23 待处理</Badge>
              </DescriptionDetails>

              <DescriptionTerm>知识库文章</DescriptionTerm>
              <DescriptionDetails className="flex items-center gap-2">
                <Badge color="blue">5 审核中</Badge>
              </DescriptionDetails>

              <DescriptionTerm>AI 建议</DescriptionTerm>
              <DescriptionDetails className="flex items-center gap-2">
                <Badge color="green">7 新想法</Badge>
              </DescriptionDetails>

              <DescriptionTerm>活跃渠道</DescriptionTerm>
              <DescriptionDetails>
                <span className="font-medium text-zinc-950 dark:text-white">4 运行中</span>
              </DescriptionDetails>

              <DescriptionTerm>团队成员</DescriptionTerm>
              <DescriptionDetails>
                <span className="font-medium text-zinc-950 dark:text-white">6 活跃</span>
              </DescriptionDetails>
            </DescriptionList>
          </div>
        </div>
      </div>
    </div>
  )
}
