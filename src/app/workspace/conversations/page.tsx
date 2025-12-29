'use client'

import { useState } from 'react'
import { Heading } from '@/components/ui/catalyst/heading'
import { Badge } from '@/components/ui/catalyst/badge'
import { Avatar } from '@/components/ui/catalyst/avatar'
import { Button } from '@/components/ui/catalyst/button'
import { Divider } from '@/components/ui/catalyst/divider'
import { conversations, messageThreads } from '@/components/workspace/mock-data'

type QueueType = 'all' | 'needs_review' | 'awaiting_approval' | 'follow_up'

export default function ConversationsPage() {
  const [activeQueue, setActiveQueue] = useState<QueueType>('all')
  const [selectedConversationId, setSelectedConversationId] = useState<number>(1)

  // 根据队列筛选对话
  const filteredConversations =
    activeQueue === 'all'
      ? conversations
      : conversations.filter((conv) => conv.queue === activeQueue)

  // 获取选中的对话
  const selectedConversation = conversations.find((c) => c.id === selectedConversationId)
  const messages = selectedConversationId && (messageThreads as any)[selectedConversationId] ? (messageThreads as any)[selectedConversationId] : []

  // 队列统计
  const queueCounts = {
    all: conversations.length,
    needs_review: conversations.filter((c) => c.queue === 'needs_review').length,
    awaiting_approval: conversations.filter((c) => c.queue === 'awaiting_approval').length,
    follow_up: conversations.filter((c) => c.queue === 'follow_up').length,
  }

  const queues = [
    { id: 'all' as QueueType, name: '全部', count: queueCounts.all },
    { id: 'needs_review' as QueueType, name: '待审核', count: queueCounts.needs_review },
    { id: 'awaiting_approval' as QueueType, name: '等待批准', count: queueCounts.awaiting_approval },
    { id: 'follow_up' as QueueType, name: '需要跟进', count: queueCounts.follow_up },
  ]

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
    <div className="space-y-6">
      {/* 页面标题 */}
      <div>
        <Heading>实时对话</Heading>
        <p className="mt-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
          管理和响应客户对话
        </p>
      </div>

      {/* 3列布局 */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* 左侧队列筛选栏 */}
        <div className="lg:col-span-3">
          <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="text-sm font-semibold text-zinc-950 dark:text-white">队列筛选</h3>
            <Divider className="my-3" soft />
            <div className="space-y-1">
              {queues.map((queue) => (
                <button
                  key={queue.id}
                  onClick={() => setActiveQueue(queue.id)}
                  className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors ${
                    activeQueue === queue.id
                      ? 'bg-zinc-950/5 font-medium text-zinc-950 dark:bg-white/10 dark:text-white'
                      : 'text-zinc-700 hover:bg-zinc-950/5 dark:text-zinc-400 dark:hover:bg-white/5'
                  }`}
                >
                  <span>{queue.name}</span>
                  <Badge color={activeQueue === queue.id ? 'indigo' : 'zinc'}>{queue.count}</Badge>
                </button>
              ))}
            </div>

            <Divider className="my-4" soft />

            <div className="space-y-3 text-xs text-zinc-500 dark:text-zinc-400">
              <div className="flex justify-between">
                <span>平均响应时间</span>
                <span className="font-medium text-zinc-950 dark:text-white">2.4分钟</span>
              </div>
              <div className="flex justify-between">
                <span>今日已处理</span>
                <span className="font-medium text-zinc-950 dark:text-white">156</span>
              </div>
              <div className="flex justify-between">
                <span>活跃对话</span>
                <span className="font-medium text-zinc-950 dark:text-white">47</span>
              </div>
            </div>
          </div>
        </div>

        {/* 中间对话列表 */}
        <div className="lg:col-span-5">
          <div className="rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
            <div className="border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
              <h3 className="text-sm font-semibold text-zinc-950 dark:text-white">
                对话列表
                <span className="ml-2 text-xs font-normal text-zinc-500 dark:text-zinc-400">
                  ({filteredConversations.length} 条)
                </span>
              </h3>
            </div>
            <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {filteredConversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => setSelectedConversationId(conversation.id)}
                  className={`w-full px-4 py-4 text-left transition-colors ${
                    selectedConversationId === conversation.id
                      ? 'bg-zinc-950/5 dark:bg-white/5'
                      : 'hover:bg-zinc-950/5 dark:hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Avatar
                      src={conversation.user.avatar}
                      initials={conversation.user.initials}
                      className="size-10"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                          {conversation.user.name}
                        </p>
                        <Badge color={getStatusBadge(conversation.status) as any} className="shrink-0">
                          {conversation.statusLabel}
                        </Badge>
                      </div>
                      <p className="mt-1 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        {conversation.subject}
                      </p>
                      <p className="mt-1 truncate text-sm text-zinc-500 dark:text-zinc-400">
                        {conversation.preview}
                      </p>
                      <p className="mt-2 text-xs text-zinc-400 dark:text-zinc-500">
                        {conversation.timestamp}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 右侧对话预览 */}
        <div className="lg:col-span-4">
          {selectedConversation ? (
            <div className="rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
              {/* 对话头部 */}
              <div className="border-b border-zinc-200 px-4 py-4 dark:border-zinc-800">
                <div className="flex items-start gap-3">
                  <Avatar
                    src={selectedConversation.user.avatar}
                    initials={selectedConversation.user.initials}
                    className="size-10"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                      {selectedConversation.user.name}
                    </p>
                    <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                      {selectedConversation.subject}
                    </p>
                  </div>
                  <Badge color={getStatusBadge(selectedConversation.status) as any}>
                    {selectedConversation.statusLabel}
                  </Badge>
                </div>
              </div>

              {/* 消息线程 */}
              <div className="space-y-4 px-4 py-4">
                {messages.length > 0 ? (
                  messages.map((message: any) => (
                    <div
                      key={message.id}
                      className={`rounded-lg p-3 ${
                        message.sender === 'customer'
                          ? 'bg-zinc-100 dark:bg-zinc-800'
                          : 'bg-indigo-50 dark:bg-indigo-950/30'
                      }`}
                    >
                      <p className="text-sm text-zinc-900 dark:text-zinc-100">{message.content}</p>
                      <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{message.timestamp}</p>
                    </div>
                  ))
                ) : (
                  <div className="py-8 text-center">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">暂无消息记录</p>
                  </div>
                )}
              </div>

              {/* 操作按钮 */}
              <div className="border-t border-zinc-200 px-4 py-3 dark:border-zinc-800">
                <div className="flex gap-2">
                  <Button color="indigo" className="flex-1">
                    发送回复
                  </Button>
                  <Button outline className="flex-1">
                    批准草稿
                  </Button>
                </div>
                <Button outline className="mt-2 w-full">
                  延迟
                </Button>
              </div>
            </div>
          ) : (
            <div className="rounded-lg border border-zinc-200 bg-white p-8 text-center dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">请选择一个对话以查看详情</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
