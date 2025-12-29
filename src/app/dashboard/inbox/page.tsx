'use client'

import { useState } from 'react'
import { Heading, Subheading } from '@/components/ui/catalyst/heading'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/catalyst/table'
import { Avatar } from '@/components/ui/catalyst/avatar'
import { Badge } from '@/components/ui/catalyst/badge'
import { Button } from '@/components/ui/catalyst/button'
import { Divider } from '@/components/ui/catalyst/divider'
import { conversations, messageThreads } from '@/components/dashboard/mock-data'

const queues = [
  { name: 'Needs Review', value: 'needs_review', count: 23 },
  { name: 'Awaiting Approval', value: 'awaiting_approval', count: 12 },
  { name: 'Follow Ups', value: 'follow_up', count: 8 },
]

export default function InboxPage() {
  const [activeQueue, setActiveQueue] = useState('needs_review')
  const [selectedConversation, setSelectedConversation] = useState(conversations[0])

  const filteredConversations = conversations.filter(
    (conv) => conv.queue === activeQueue
  )

  const getStatusBadgeColor = (status: string) => {
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

  const messages = messageThreads[selectedConversation.id as keyof typeof messageThreads] || []

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Heading>Inbox</Heading>
        <p className="mt-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
          Manage and triage customer conversations
        </p>
      </div>

      {/* 3-Column Layout */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left Sidebar - Queue Filters */}
        <div className="lg:col-span-3 space-y-6">
          <div>
            <Subheading>Queues</Subheading>
            <Divider className="mt-4" soft />

            <div className="mt-4 space-y-1">
              {queues.map((queue) => (
                <button
                  key={queue.value}
                  onClick={() => setActiveQueue(queue.value)}
                  className={`w-full flex items-center justify-between rounded-lg px-3 py-2 text-left text-sm/6 ${
                    activeQueue === queue.value
                      ? 'bg-zinc-950/5 text-zinc-950 dark:bg-white/10 dark:text-white'
                      : 'text-zinc-600 hover:bg-zinc-950/5 dark:text-zinc-400 dark:hover:bg-white/5'
                  }`}
                >
                  <span>{queue.name}</span>
                  <Badge color={activeQueue === queue.value ? 'indigo' : 'zinc'} className="text-xs">
                    {queue.count}
                  </Badge>
                </button>
              ))}
            </div>
          </div>

          <div>
            <Subheading>Stats</Subheading>
            <Divider className="mt-4" soft />

            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-500 dark:text-zinc-400">Total</span>
                <span className="font-medium text-zinc-950 dark:text-white">43</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500 dark:text-zinc-400">Avg Response</span>
                <span className="font-medium text-zinc-950 dark:text-white">2.4m</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500 dark:text-zinc-400">Resolved Today</span>
                <span className="font-medium text-zinc-950 dark:text-white">156</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center - Conversations Table */}
        <div className="lg:col-span-5">
          <div className="flex items-center justify-between mb-4">
            <Subheading>
              {queues.find((q) => q.value === activeQueue)?.name}
            </Subheading>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {filteredConversations.length} conversations
            </span>
          </div>

          <Divider soft />

          <Table className="mt-4">
            <TableBody>
              {filteredConversations.map((conversation) => (
                <TableRow
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation)}
                  className={`cursor-pointer ${
                    selectedConversation.id === conversation.id
                      ? 'bg-zinc-950/5 dark:bg-white/5'
                      : ''
                  }`}
                >
                  <TableCell>
                    <div className="flex items-start gap-3">
                      <Avatar
                        src={conversation.user.avatar}
                        initials={conversation.user.initials}
                        className="size-10"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-zinc-950 dark:text-white">
                            {conversation.user.name}
                          </span>
                          <Badge color={getStatusBadgeColor(conversation.status) as any} className="text-xs">
                            {conversation.status.replace('_', ' ')}
                          </Badge>
                        </div>
                        <div className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300 truncate">
                          {conversation.subject}
                        </div>
                        <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 truncate">
                          {conversation.preview}
                        </div>
                        <div className="mt-1 text-xs text-zinc-400 dark:text-zinc-500">
                          {conversation.timestamp}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Right Sidebar - Thread Preview */}
        <div className="lg:col-span-4 space-y-6">
          <div>
            <Subheading>Thread Preview</Subheading>
            <Divider className="mt-4" soft />
          </div>

          {selectedConversation && (
            <div className="space-y-6">
              {/* Conversation Header */}
              <div className="flex items-start gap-3">
                <Avatar
                  src={selectedConversation.user.avatar}
                  initials={selectedConversation.user.initials}
                  className="size-12"
                />
                <div>
                  <div className="font-semibold text-zinc-950 dark:text-white">
                    {selectedConversation.user.name}
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400">
                    {selectedConversation.subject}
                  </div>
                  <div className="mt-1">
                    <Badge color={getStatusBadgeColor(selectedConversation.status) as any}>
                      {selectedConversation.status.replace('_', ' ')}
                    </Badge>
                  </div>
                </div>
              </div>

              <Divider soft />

              {/* Messages */}
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {messages.length > 0 ? (
                  messages.map((message) => (
                    <div
                      key={message.id}
                      className={`rounded-lg p-3 ${
                        message.sender === 'customer'
                          ? 'bg-zinc-100 dark:bg-zinc-800'
                          : 'bg-indigo-50 dark:bg-indigo-900/20'
                      }`}
                    >
                      <div className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">
                        {message.sender === 'customer' ? 'Customer' : 'Agent'} · {message.timestamp}
                      </div>
                      <div className="text-sm text-zinc-900 dark:text-zinc-100">
                        {message.content}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-sm text-zinc-500 dark:text-zinc-400">
                    No messages in this conversation
                  </div>
                )}
              </div>

              <Divider soft />

              {/* Quick Actions */}
              <div className="space-y-2">
                <Button color="indigo" className="w-full">
                  Send Reply
                </Button>
                <div className="grid grid-cols-2 gap-2">
                  <Button outline className="w-full">
                    Approve Draft
                  </Button>
                  <Button outline className="w-full">
                    Snooze
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
