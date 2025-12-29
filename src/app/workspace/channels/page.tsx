import { Heading } from '@/components/ui/catalyst/heading'
import { Stat } from '@/components/dashboard/stat'
import { Badge } from '@/components/ui/catalyst/badge'
import { Button } from '@/components/ui/catalyst/button'
import { Divider } from '@/components/ui/catalyst/divider'
import { DescriptionDetails, DescriptionList, DescriptionTerm } from '@/components/ui/catalyst/description-list'
import { channelStats, channels } from '@/components/workspace/mock-data'

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
      {/* 页面标题 */}
      <div>
        <Heading>渠道集成</Heading>
        <p className="mt-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
          连接和管理您的客户服务渠道
        </p>
      </div>

      {/* 统计指标网格 */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {channelStats.map((stat) => (
          <Stat key={stat.title} {...stat} />
        ))}
      </div>

      {/* 渠道列表 */}
      <div>
        <Heading level={2}>集成渠道</Heading>
        <Divider className="mt-4" soft />

        <div className="mt-6 space-y-4">
          {channels.map((channel) => (
            <div
              key={channel.id}
              className="rounded-lg border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  {/* 状态指示器 */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                    <div className={`h-3 w-3 rounded-full ${getStatusDot(channel.status)}`} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-base font-semibold text-zinc-950 dark:text-white">
                        {channel.name}
                      </h3>
                      <Badge color={getStatusColor(channel.status) as any}>
                        {channel.statusLabel}
                      </Badge>
                    </div>

                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                      {channel.description}
                    </p>

                    <div className="mt-4">
                      <DescriptionList>
                        {channel.deployUrl && (
                          <>
                            <DescriptionTerm>部署 URL</DescriptionTerm>
                            <DescriptionDetails>
                              <code className="rounded bg-zinc-100 px-2 py-1 text-xs font-mono dark:bg-zinc-800">
                                {channel.deployUrl}
                              </code>
                            </DescriptionDetails>
                          </>
                        )}

                        {channel.avgResponseTime && (
                          <>
                            <DescriptionTerm>平均响应时间</DescriptionTerm>
                            <DescriptionDetails className="font-medium text-zinc-950 dark:text-white">
                              {channel.avgResponseTime}
                            </DescriptionDetails>
                          </>
                        )}

                        <DescriptionTerm>类型</DescriptionTerm>
                        <DescriptionDetails className="font-medium text-zinc-950 dark:text-white">
                          {channel.typeLabel}
                        </DescriptionDetails>

                        <DescriptionTerm>今日消息数</DescriptionTerm>
                        <DescriptionDetails className="font-medium text-zinc-950 dark:text-white">
                          {channel.messagesToday}
                        </DescriptionDetails>
                      </DescriptionList>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Button outline>配置</Button>
                  {channel.status === 'planned' && (
                    <Button color="indigo">启用</Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 添加新渠道卡片 */}
        <div className="mt-4 rounded-lg border-2 border-dashed border-zinc-200 bg-zinc-50 p-8 text-center dark:border-zinc-800 dark:bg-zinc-900/50">
          <h3 className="text-sm font-semibold text-zinc-950 dark:text-white">
            添加新渠道
          </h3>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            连接更多渠道以扩大客户服务覆盖范围
          </p>
          <Button color="indigo" className="mt-4">
            浏览集成
          </Button>
        </div>
      </div>
    </div>
  )
}
