'use client'

import { useMemo, useState } from 'react'
import { EllipsisVerticalIcon } from '@heroicons/react/16/solid'
import { Heading } from '@/components/ui/catalyst/heading'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/catalyst/table'
import { Badge } from '@/components/ui/catalyst/badge'
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/ui/catalyst/dropdown'
import {
  Pagination,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from '@/components/ui/catalyst/pagination'
import { suggestions } from '@/components/workspace/mock-data'

type SortKey = 'frequency' | 'priority' | 'status' | 'recent'
type Suggestion = (typeof suggestions)[number]

const sortOptions: { key: SortKey; label: string; helper: string }[] = [
  { key: 'frequency', label: 'Most frequent', helper: 'Highest signal' },
  { key: 'priority', label: 'Priority first', helper: 'High before low' },
  { key: 'status', label: 'Status', helper: 'New → backlog' },
  { key: 'recent', label: 'Recently seen', helper: 'Freshest mentions' },
]

const statusStyles: Record<
  Suggestion['status'],
  {
    label: string
    color: 'blue' | 'amber' | 'zinc'
  }
> = {
  new: { label: 'New', color: 'blue' },
  needs_approval: { label: 'Needs approval', color: 'amber' },
  backlog: { label: 'Backlog', color: 'zinc' },
}

const priorityStyles: Record<
  Suggestion['priority'],
  {
    label: string
    color: 'red' | 'amber' | 'zinc'
  }
> = {
  high: { label: 'High', color: 'red' },
  medium: { label: 'Medium', color: 'amber' },
  low: { label: 'Low', color: 'zinc' },
}

const priorityRank = { high: 3, medium: 2, low: 1 }
const statusRank = { new: 3, needs_approval: 2, backlog: 1 }

const parseLastSeen = (value: string) => {
  const match = value.match(/(\d+)([hd])/)
  if (!match) return Number.MAX_SAFE_INTEGER
  const amount = Number.parseInt(match[1], 10)
  if (Number.isNaN(amount)) return Number.MAX_SAFE_INTEGER
  return match[2] === 'h' ? amount : amount * 24
}

export default function SuggestionsPage() {
  const [activeSort, setActiveSort] = useState<SortKey>('frequency')

  const statusCounts = useMemo(
    () =>
      suggestions.reduce(
        (counts, suggestion) => {
          counts[suggestion.status] += 1
          return counts
        },
        { new: 0, needs_approval: 0, backlog: 0 }
      ),
    []
  )

  const sortedSuggestions = useMemo(() => {
    const sorted = [...suggestions]
    sorted.sort((a, b) => {
      if (activeSort === 'frequency') {
        return b.frequency - a.frequency
      }
      if (activeSort === 'priority') {
        const diff = priorityRank[b.priority] - priorityRank[a.priority]
        return diff !== 0 ? diff : b.frequency - a.frequency
      }
      if (activeSort === 'status') {
        const diff = statusRank[b.status] - statusRank[a.status]
        return diff !== 0 ? diff : priorityRank[b.priority] - priorityRank[a.priority]
      }
      return parseLastSeen(a.lastSeen) - parseLastSeen(b.lastSeen)
    })
    return sorted
  }, [activeSort])

  const activeSortLabel = sortOptions.find((option) => option.key === activeSort)?.label ?? 'Most frequent'

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-amber-50 px-6 py-8 text-slate-800 sm:px-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <Heading level={1} className="text-3xl font-semibold text-slate-900">
            AI Suggestions
          </Heading>
          <p className="max-w-3xl text-sm text-slate-600">
            Track incoming AI recommendations, keep approvals flowing, and push high-signal ideas to the front of the
            queue.
          </p>
        </div>

        <Dropdown>
          <DropdownButton
            color="cyan"
            className="cursor-pointer shadow-md shadow-cyan-100 transition hover:shadow-cyan-200"
          >
            Sort: {activeSortLabel}
          </DropdownButton>
          <DropdownMenu anchor="bottom end" className="min-w-[14rem]">
            {sortOptions.map((option) => (
              <DropdownItem
                key={option.key}
                onClick={() => setActiveSort(option.key)}
                className={option.key === activeSort ? 'bg-cyan-50 text-cyan-900' : undefined}
              >
                <div className="flex flex-col">
                  <span className="font-semibold">{option.label}</span>
                  <span className="text-xs text-slate-500 group-data-focus:text-white">{option.helper}</span>
                </div>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-blue-100/70 bg-gradient-to-br from-blue-50 via-white to-sky-100 p-4 shadow-sm shadow-blue-50">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">New</p>
          <div className="mt-1 flex items-baseline gap-2">
            <p className="text-3xl font-semibold text-blue-900">{statusCounts.new}</p>
            <Badge color="blue">Fresh</Badge>
          </div>
          <p className="text-sm text-blue-700/80">Suggestions waiting for a first pass.</p>
        </div>
        <div className="rounded-2xl border border-amber-100/70 bg-gradient-to-br from-amber-50 via-white to-orange-100 p-4 shadow-sm shadow-amber-50">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">Needs approval</p>
          <div className="mt-1 flex items-baseline gap-2">
            <p className="text-3xl font-semibold text-amber-900">{statusCounts.needs_approval}</p>
            <Badge color="amber">Review</Badge>
          </div>
          <p className="text-sm text-amber-700/80">Waiting on a quick sign-off.</p>
        </div>
        <div className="rounded-2xl border border-zinc-200/80 bg-gradient-to-br from-zinc-50 via-white to-slate-100 p-4 shadow-sm shadow-zinc-100">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-700">Backlog</p>
          <div className="mt-1 flex items-baseline gap-2">
            <p className="text-3xl font-semibold text-slate-900">{statusCounts.backlog}</p>
            <Badge color="zinc">Queued</Badge>
          </div>
          <p className="text-sm text-slate-700/80">Parked ideas to revisit later.</p>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-3xl border border-cyan-100 bg-white/90 shadow-xl shadow-sky-100 ring-1 ring-amber-100/80">
        <div className="flex items-center justify-between border-b border-cyan-100/80 bg-gradient-to-r from-sky-100 via-white to-amber-100 px-5 py-4">
          <div>
            <p className="text-sm font-semibold text-slate-900">Suggestion backlog</p>
            <p className="text-xs text-slate-600">Sorted by {activeSortLabel.toLowerCase()}.</p>
          </div>
          <Badge color="cyan">Total {suggestions.length}</Badge>
        </div>

        <div className="overflow-x-auto">
          <Table bleed>
            <TableHead>
              <TableRow>
                <TableHeader className="border-cyan-100 text-slate-500">Suggestion</TableHeader>
                <TableHeader className="border-cyan-100 text-slate-500">Source</TableHeader>
                <TableHeader className="border-cyan-100 text-slate-500">Status</TableHeader>
                <TableHeader className="border-cyan-100 text-slate-500">Priority</TableHeader>
                <TableHeader className="border-cyan-100 text-slate-500">Frequency</TableHeader>
                <TableHeader className="border-cyan-100 text-slate-500">Last Seen</TableHeader>
                <TableHeader className="border-cyan-100 text-slate-500">Actions</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedSuggestions.map((item) => (
                <TableRow key={item.id} className="align-top transition hover:bg-sky-50/80">
                  <TableCell className="!border-cyan-100">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold text-slate-900">{item.suggestion}</span>
                      <span className="text-xs text-slate-500">#{item.id.toString().padStart(3, '0')}</span>
                    </div>
                  </TableCell>
                  <TableCell className="!border-cyan-100">
                    <Badge color="zinc">{item.source}</Badge>
                  </TableCell>
                  <TableCell className="!border-cyan-100">
                    <Badge color={statusStyles[item.status].color}>{statusStyles[item.status].label}</Badge>
                  </TableCell>
                  <TableCell className="!border-cyan-100">
                    <Badge color={priorityStyles[item.priority].color}>{priorityStyles[item.priority].label}</Badge>
                  </TableCell>
                  <TableCell className="!border-cyan-100">
                    <div className="flex flex-col text-sm text-slate-800">
                      <span className="font-semibold">{item.frequency} mentions</span>
                      <span className="text-xs text-slate-500">Signal strength</span>
                    </div>
                  </TableCell>
                  <TableCell className="!border-cyan-100">
                    <div className="flex flex-col text-sm text-slate-800">
                      <span className="font-semibold">{item.lastSeen}</span>
                      <span className="text-xs text-slate-500">Last surfaced</span>
                    </div>
                  </TableCell>
                  <TableCell className="!border-cyan-100">
                    <Dropdown>
                      <DropdownButton plain className="cursor-pointer !px-2 !py-2 text-slate-500 hover:text-slate-900">
                        <span className="sr-only">Open actions</span>
                        <EllipsisVerticalIcon className="size-5" />
                      </DropdownButton>
                      <DropdownMenu anchor="bottom end" className="min-w-[10rem]">
                        <DropdownItem>Open details</DropdownItem>
                        <DropdownItem>Approve</DropdownItem>
                        <DropdownItem>Archive</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <Pagination className="m-4 items-center justify-between rounded-2xl border border-cyan-100 bg-white/80 px-3 py-2 shadow-sm shadow-sky-100">
          <PaginationPrevious href={null} />
          <PaginationList>
            <PaginationPage href="#" current>
              1
            </PaginationPage>
            <PaginationPage href="#">2</PaginationPage>
            <PaginationPage href="#">3</PaginationPage>
          </PaginationList>
          <PaginationNext href="#" />
        </Pagination>
      </div>
    </div>
  )
}
