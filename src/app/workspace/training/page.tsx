'use client'

import { useState } from 'react'
import { Heading } from '@/components/ui/catalyst/heading'
import { Button } from '@/components/ui/catalyst/button'
import { Divider } from '@/components/ui/catalyst/divider'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/catalyst/table'
import { Badge } from '@/components/ui/catalyst/badge'
import { trainingSuggestions } from '@/components/workspace/mock-data'

type FilterType = 'all' | 'new' | 'needs_approval' | 'backlog'
type PriorityFilter = 'all' | 'high' | 'medium' | 'low'
type SourceFilter = 'all' | '聊天' | '邮件' | '社交媒体'

export default function TrainingPage() {
  const [statusFilter, setStatusFilter] = useState<FilterType>('all')
  const [priorityFilter, setPriorityFilter] = useState<PriorityFilter>('all')
  const [sourceFilter, setSourceFilter] = useState<SourceFilter>('all')

  // 筛选建议
  const filteredSuggestions = trainingSuggestions.filter((suggestion) => {
    if (statusFilter !== 'all' && suggestion.status !== statusFilter) return false
    if (priorityFilter !== 'all' && suggestion.priority !== priorityFilter) return false
    if (sourceFilter !== 'all' && suggestion.source !== sourceFilter) return false
    return true
  })

  // 统计
  const statusCounts = {
    all: trainingSuggestions.length,
    new: trainingSuggestions.filter((s) => s.status === 'new').length,
    needs_approval: trainingSuggestions.filter((s) => s.status === 'needs_approval').length,
    backlog: trainingSuggestions.filter((s) => s.status === 'backlog').length,
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'red'
      case 'medium':
        return 'amber'
      case 'low':
        return 'zinc'
      default:
        return 'zinc'
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return 'green'
      case 'needs_approval':
        return 'blue'
      case 'backlog':
        return 'zinc'
      default:
        return 'zinc'
    }
  }

  const getSourceBadge = (source: string) => {
    switch (source) {
      case '聊天':
        return 'indigo'
      case '邮件':
        return 'purple'
      case '社交媒体':
        return 'cyan'
      default:
        return 'zinc'
    }
  }

  return (
    <div className="space-y-6">
      {/* 页面标题 */}
      <div>
        <Heading>AI 训练中心</Heading>
        <p className="mt-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
          AI 从对话中学习并提出改进建议
        </p>
      </div>

      {/* 2列布局: 筛选器 + 建议列表 */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* 左侧筛选器 */}
        <div className="lg:col-span-1">
          <div className="space-y-6 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
            {/* 状态筛选 */}
            <div>
              <h3 className="text-sm font-semibold text-zinc-950 dark:text-white">按状态筛选</h3>
              <Divider className="my-3" soft />
              <div className="space-y-1">
                <button
                  onClick={() => setStatusFilter('all')}
                  className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors ${
                    statusFilter === 'all'
                      ? 'bg-zinc-950/5 font-medium text-zinc-950 dark:bg-white/10 dark:text-white'
                      : 'text-zinc-700 hover:bg-zinc-950/5 dark:text-zinc-400 dark:hover:bg-white/5'
                  }`}
                >
                  <span>全部</span>
                  <Badge color={statusFilter === 'all' ? 'indigo' : 'zinc'}>{statusCounts.all}</Badge>
                </button>
                <button
                  onClick={() => setStatusFilter('new')}
                  className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors ${
                    statusFilter === 'new'
                      ? 'bg-zinc-950/5 font-medium text-zinc-950 dark:bg-white/10 dark:text-white'
                      : 'text-zinc-700 hover:bg-zinc-950/5 dark:text-zinc-400 dark:hover:bg-white/5'
                  }`}
                >
                  <span>新建议</span>
                  <Badge color={statusFilter === 'new' ? 'indigo' : 'zinc'}>{statusCounts.new}</Badge>
                </button>
                <button
                  onClick={() => setStatusFilter('needs_approval')}
                  className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors ${
                    statusFilter === 'needs_approval'
                      ? 'bg-zinc-950/5 font-medium text-zinc-950 dark:bg-white/10 dark:text-white'
                      : 'text-zinc-700 hover:bg-zinc-950/5 dark:text-zinc-400 dark:hover:bg-white/5'
                  }`}
                >
                  <span>待批准</span>
                  <Badge color={statusFilter === 'needs_approval' ? 'indigo' : 'zinc'}>
                    {statusCounts.needs_approval}
                  </Badge>
                </button>
                <button
                  onClick={() => setStatusFilter('backlog')}
                  className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors ${
                    statusFilter === 'backlog'
                      ? 'bg-zinc-950/5 font-medium text-zinc-950 dark:bg-white/10 dark:text-white'
                      : 'text-zinc-700 hover:bg-zinc-950/5 dark:text-zinc-400 dark:hover:bg-white/5'
                  }`}
                >
                  <span>待办事项</span>
                  <Badge color={statusFilter === 'backlog' ? 'indigo' : 'zinc'}>{statusCounts.backlog}</Badge>
                </button>
              </div>
            </div>

            <Divider soft />

            {/* 优先级筛选 */}
            <div>
              <h3 className="text-sm font-semibold text-zinc-950 dark:text-white">按优先级筛选</h3>
              <Divider className="my-3" soft />
              <div className="space-y-1">
                {(['all', 'high', 'medium', 'low'] as PriorityFilter[]).map((priority) => (
                  <button
                    key={priority}
                    onClick={() => setPriorityFilter(priority)}
                    className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                      priorityFilter === priority
                        ? 'bg-zinc-950/5 font-medium text-zinc-950 dark:bg-white/10 dark:text-white'
                        : 'text-zinc-700 hover:bg-zinc-950/5 dark:text-zinc-400 dark:hover:bg-white/5'
                    }`}
                  >
                    {priority === 'all' ? '全部' : priority === 'high' ? '高' : priority === 'medium' ? '中' : '低'}
                  </button>
                ))}
              </div>
            </div>

            <Divider soft />

            {/* 来源筛选 */}
            <div>
              <h3 className="text-sm font-semibold text-zinc-950 dark:text-white">按来源筛选</h3>
              <Divider className="my-3" soft />
              <div className="space-y-1">
                {(['all', '聊天', '邮件', '社交媒体'] as SourceFilter[]).map((source) => (
                  <button
                    key={source}
                    onClick={() => setSourceFilter(source)}
                    className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                      sourceFilter === source
                        ? 'bg-zinc-950/5 font-medium text-zinc-950 dark:bg-white/10 dark:text-white'
                        : 'text-zinc-700 hover:bg-zinc-950/5 dark:text-zinc-400 dark:hover:bg-white/5'
                    }`}
                  >
                    {source === 'all' ? '全部来源' : source}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 右侧建议表格 */}
        <div className="lg:col-span-3">
          <Table striped>
            <TableHead>
              <TableRow>
                <TableHeader>建议</TableHeader>
                <TableHeader>来源</TableHeader>
                <TableHeader>优先级</TableHeader>
                <TableHeader>频率</TableHeader>
                <TableHeader>状态</TableHeader>
                <TableHeader>操作</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredSuggestions.map((suggestion) => (
                <TableRow key={suggestion.id}>
                  <TableCell>
                    <div className="font-medium">{suggestion.suggestion}</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                      最后出现: {suggestion.lastSeen}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge color={getSourceBadge(suggestion.source) as any}>{suggestion.source}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge color={getPriorityBadge(suggestion.priority) as any}>
                      {suggestion.priorityLabel}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium text-zinc-950 dark:text-white">{suggestion.frequency}</span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400"> 次</span>
                  </TableCell>
                  <TableCell>
                    <Badge color={getStatusBadge(suggestion.status) as any}>{suggestion.statusLabel}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button outline>
                        采纳
                      </Button>
                      <Button outline>忽略</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filteredSuggestions.length === 0 && (
            <div className="rounded-lg border border-zinc-200 bg-white p-12 text-center dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">没有找到匹配的建议</p>
            </div>
          )}

          {/* 分页 */}
          {filteredSuggestions.length > 0 && (
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                显示{' '}
                <span className="font-medium text-zinc-950 dark:text-white">1-{filteredSuggestions.length}</span> 条，共{' '}
                <span className="font-medium text-zinc-950 dark:text-white">{filteredSuggestions.length}</span> 条
              </p>
              <div className="flex gap-2">
                <Button outline disabled>
                  上一页
                </Button>
                <Button outline disabled>
                  下一页
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
