'use client'

import { useState } from 'react'
import { Heading } from '@/components/ui/catalyst/heading'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/catalyst/table'
import { Avatar } from '@/components/ui/catalyst/avatar'
import { Badge } from '@/components/ui/catalyst/badge'
import { Button } from '@/components/ui/catalyst/button'
import { Divider } from '@/components/ui/catalyst/divider'
import RightDrawer from '@/components/ui/catalyst/drawer'
import { conversations, messageThreads } from '@/components/workspace/mock-data'

type QueueKey = 'needs_review' | 'awaiting_approval' | 'follow_up'
type Conversation = (typeof conversations)[number]

const queueMeta: Record<QueueKey, { label: string; description: string; color: 'amber' | 'blue' | 'emerald' }> = {
  needs_review: {
    label: 'Needs Review',
    description: 'Polish these replies before sending them out.',
    color: 'amber',
  },
  awaiting_approval: {
    label: 'Awaiting Approval',
    description: 'Ready for a quick approval pass.',
    color: 'blue',
  },
  follow_up: {
    label: 'Follow Ups',
    description: 'Customers waiting on the next touchpoint.',
    color: 'emerald',
  },
}

export default function InboxPage() {
  const [activeQueue, setActiveQueue] = useState<QueueKey>('needs_review')
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const queueCounts = conversations.reduce<Record<QueueKey, number>>(
    (counts, conversation) => {
      counts[conversation.queue] += 1
      return counts
    },
    { needs_review: 0, awaiting_approval: 0, follow_up: 0 }
  )

  const filteredConversations = conversations.filter((conversation) => conversation.queue === activeQueue)

  const handleSelectConversation = (conversation: Conversation) => {
    setSelectedConversation(conversation)
    setDrawerOpen(true)
  }

  const handleCloseDrawer = (open: boolean) => {
    setDrawerOpen(open)
    if (!open) {
      setSelectedConversation(null)
    }
  }

  const activeThread =
    (selectedConversation &&
      messageThreads[selectedConversation.id as keyof typeof messageThreads]?.map((message) => ({
        ...message,
        senderLabel: message.sender === 'customer' ? selectedConversation.user.name : 'Agent',
      }))) ||
    []

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8 text-gray-700 sm:px-10">
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="space-y-1">
          <Heading level={1} className="text-3xl font-semibold text-gray-900">
            Inbox
          </Heading>
          <p className="text-sm text-gray-600">
            Triage review queues, open conversations, and keep responses moving quickly.
          </p>
        </div>
        <div className="flex gap-3">
          <Button outline className="cursor-pointer">
            Snooze queue
          </Button>
          <Button color="indigo" className="cursor-pointer">
            New reply
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
          <Heading level={2} className="text-lg font-semibold text-gray-900">
            Queues
          </Heading>
          <p className="mt-1 text-sm text-gray-600">Switch between queues to filter the inbox.</p>

          <div className="mt-5 space-y-3">
            {(Object.keys(queueMeta) as QueueKey[]).map((queueKey) => {
              const queue = queueMeta[queueKey]
              const isActive = activeQueue === queueKey
              return (
                <button
                  key={queueKey}
                  type="button"
                  onClick={() => setActiveQueue(queueKey)}
                  className={`w-full rounded-xl border px-4 py-3 text-left transition ${
                    isActive
                      ? 'border-indigo-200 bg-white shadow-sm ring-1 ring-indigo-100'
                      : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-gray-900">{queue.label}</span>
                        <Badge color={queue.color}>{queueCounts[queueKey]} open</Badge>
                      </div>
                      <p className="text-xs text-gray-600">{queue.description}</p>
                    </div>
                    {isActive && <span className="rounded-full bg-indigo-100 px-2 py-1 text-[10px] font-semibold text-indigo-700">Active</span>}
                  </div>
                </button>
              )
            })}
          </div>

          <Divider className="my-6 border-gray-200" />

          <div className="space-y-2 text-sm text-gray-600">
            <p className="font-semibold text-gray-900">At a glance</p>
            <p>Needs Review keeps drafts that must be polished before sending.</p>
            <p>Awaiting Approval holds messages that need a quick sign-off.</p>
            <p>Follow Ups highlights threads waiting on your next touchpoint.</p>
          </div>
        </aside>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <Heading level={2} className="text-xl font-semibold text-gray-900">
                {queueMeta[activeQueue].label}
              </Heading>
              <p className="text-sm text-gray-600">Showing conversations assigned to this queue.</p>
            </div>
            <Badge color={queueMeta[activeQueue].color}>{queueCounts[activeQueue]} conversations</Badge>
          </div>

          <Divider className="my-5 border-gray-200" />

          <div className="overflow-hidden rounded-xl border border-gray-100">
            <Table bleed>
              <TableHead>
                <TableRow>
                  <TableHeader className="border-gray-200 text-gray-500">Customer</TableHeader>
                  <TableHeader className="border-gray-200 text-gray-500">Subject</TableHeader>
                  <TableHeader className="border-gray-200 text-gray-500">Queue</TableHeader>
                  <TableHeader className="border-gray-200 text-gray-500">Updated</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredConversations.map((conversation) => (
                  <TableRow
                    key={conversation.id}
                    onClick={() => handleSelectConversation(conversation)}
                    className="cursor-pointer transition hover:bg-indigo-50/60"
                  >
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
                        <span className="text-sm font-semibold text-gray-900">{conversation.subject}</span>
                        <span className="text-xs text-gray-500">{conversation.preview}</span>
                      </div>
                    </TableCell>
                    <TableCell className="!border-gray-200">
                      <Badge color={queueMeta[conversation.queue].color}>{queueMeta[conversation.queue].label}</Badge>
                    </TableCell>
                    <TableCell className="!border-gray-200">
                      <div className="flex flex-col text-xs text-gray-600">
                        <span>{conversation.dateTime}</span>
                        <span className="text-gray-500">Updated {conversation.timestamp}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      </div>

      <RightDrawer
        open={drawerOpen}
        onClose={handleCloseDrawer}
        title={selectedConversation ? selectedConversation.subject : 'Conversation'}
        maxWidth="lg"
      >
        {selectedConversation ? (
          <div className="space-y-5 text-gray-800">
            <div className="flex items-start gap-3">
              <Avatar
                src={selectedConversation.user.avatar}
                initials={selectedConversation.user.initials}
                alt={selectedConversation.user.name}
                className="size-10"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-900">{selectedConversation.user.name}</span>
                <span className="text-xs text-gray-500">{selectedConversation.timestamp}</span>
                <div className="mt-2 flex items-center gap-2">
                  <Badge color={queueMeta[selectedConversation.queue].color}>
                    {queueMeta[selectedConversation.queue].label}
                  </Badge>
                  <Badge color="zinc">#{selectedConversation.id}</Badge>
                </div>
              </div>
            </div>

            <Divider className="border-gray-200" />

            <div className="space-y-3">
              {activeThread.length > 0 ? (
                activeThread.map((message) => (
                  <div
                    key={message.id}
                    className={`rounded-xl border p-3 text-sm ${
                      message.sender === 'customer'
                        ? 'border-gray-200 bg-zinc-100'
                        : 'border-indigo-100 bg-indigo-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900">{message.senderLabel}</span>
                      <span className="text-xs text-gray-500">{message.timestamp}</span>
                    </div>
                    <p className="mt-2 text-gray-700">{message.content}</p>
                  </div>
                ))
              ) : (
                <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-4 text-sm text-gray-600">
                  No messages yet for this conversation.
                </div>
              )}
            </div>

            <Divider className="border-gray-200" />

            <div className="flex flex-wrap gap-3">
              <Button color="indigo" className="cursor-pointer">
                Reply and send
              </Button>
              <Button outline className="cursor-pointer">
                Add note
              </Button>
              <Button plain className="cursor-pointer">
                Mark as done
              </Button>
            </div>
          </div>
        ) : (
          <p className="text-sm text-gray-600">Select a conversation from the inbox to view its thread.</p>
        )}
      </RightDrawer>
    </div>
  )
}
