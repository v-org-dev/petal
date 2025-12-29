import { Heading } from '@/components/ui/catalyst/heading'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/catalyst/table'
import { Badge } from '@/components/ui/catalyst/badge'
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from '@/components/ui/catalyst/dropdown'
import { EllipsisVerticalIcon } from '@heroicons/react/16/solid'
import { Pagination, PaginationGap, PaginationList, PaginationNext, PaginationPage, PaginationPrevious } from '@/components/ui/catalyst/pagination'
import { suggestions } from '@/components/dashboard/mock-data'

export default function SuggestionsPage() {
  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'blue'
      case 'needs_approval':
        return 'amber'
      case 'backlog':
        return 'zinc'
      default:
        return 'zinc'
    }
  }

  const getPriorityBadgeColor = (priority: string) => {
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

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Heading>AI Suggestions</Heading>
          <p className="mt-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
            Review AI-generated suggestions from customer conversations
          </p>
        </div>

        {/* Sort Dropdown */}
        <Dropdown>
          <DropdownButton outline>
            Sort by
            <svg className="size-4 fill-zinc-500" viewBox="0 0 16 16">
              <path d="M5.75 10.75L8 13L10.25 10.75" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.25 5.25L8 3L5.75 5.25" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </DropdownButton>
          <DropdownMenu>
            <DropdownItem>Priority</DropdownItem>
            <DropdownItem>Frequency</DropdownItem>
            <DropdownItem>Status</DropdownItem>
            <DropdownItem>Last Seen</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      {/* Full-width Suggestions Table */}
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Suggestion</TableHeader>
            <TableHeader>Source</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Priority</TableHeader>
            <TableHeader>Frequency</TableHeader>
            <TableHeader>Last Seen</TableHeader>
            <TableHeader></TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {suggestions.map((suggestion) => (
            <TableRow key={suggestion.id}>
              <TableCell className="font-medium max-w-md">
                <div className="truncate">{suggestion.suggestion}</div>
              </TableCell>
              <TableCell>
                <Badge color="zinc">{suggestion.source}</Badge>
              </TableCell>
              <TableCell>
                <Badge color={getStatusBadgeColor(suggestion.status) as any}>
                  {suggestion.status.replace('_', ' ')}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge color={getPriorityBadgeColor(suggestion.priority) as any}>
                  {suggestion.priority.charAt(0).toUpperCase() + suggestion.priority.slice(1)}
                </Badge>
              </TableCell>
              <TableCell className="text-zinc-500">{suggestion.frequency} times</TableCell>
              <TableCell className="text-zinc-500">{suggestion.lastSeen}</TableCell>
              <TableCell>
                <div className="-mx-3 -my-1.5 sm:-mx-2.5">
                  <Dropdown>
                    <DropdownButton plain aria-label="More options">
                      <EllipsisVerticalIcon />
                    </DropdownButton>
                    <DropdownMenu anchor="bottom end">
                      <DropdownItem>View Details</DropdownItem>
                      <DropdownItem>Approve</DropdownItem>
                      <DropdownItem>Move to Backlog</DropdownItem>
                      <DropdownItem>Archive</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <Pagination>
        <PaginationPrevious href={null} />
        <PaginationList>
          <PaginationPage href="#" current>
            1
          </PaginationPage>
          <PaginationPage href="#">2</PaginationPage>
          <PaginationPage href="#">3</PaginationPage>
          <PaginationGap />
          <PaginationPage href="#">8</PaginationPage>
          <PaginationPage href="#">9</PaginationPage>
        </PaginationList>
        <PaginationNext href="#" />
      </Pagination>
    </div>
  )
}
