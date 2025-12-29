'use client'

import { useState } from 'react'
import { Heading } from '@/components/ui/catalyst/heading'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/catalyst/table'
import { Avatar } from '@/components/ui/catalyst/avatar'
import { Badge } from '@/components/ui/catalyst/badge'
import { Button } from '@/components/ui/catalyst/button'
import { Divider } from '@/components/ui/catalyst/divider'
import { DescriptionDetails, DescriptionList, DescriptionTerm } from '@/components/ui/catalyst/description-list'
import { teamMembers } from '@/components/dashboard/mock-data'

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState(teamMembers[0])

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'owner':
      case 'admin':
        return 'indigo'
      case 'reviewer':
        return 'violet'
      case 'agent':
        return 'cyan'
      default:
        return 'zinc'
    }
  }

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'green'
      case 'invited':
        return 'amber'
      case 'inactive':
        return 'zinc'
      default:
        return 'zinc'
    }
  }

  const getRolePermissions = (role: string) => {
    switch (role) {
      case 'owner':
        return ['Full workspace access', 'Manage team members', 'Billing & API access', 'Delete workspace']
      case 'admin':
        return ['Full workspace access', 'Manage team members', 'API access']
      case 'reviewer':
        return ['Review AI suggestions', 'Approve drafts', 'Edit knowledge base']
      case 'agent':
        return ['Handle conversations', 'View knowledge base', 'Submit suggestions']
      default:
        return []
    }
  }

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Heading>Team Members</Heading>
          <p className="mt-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
            Manage your team members and their roles
          </p>
        </div>
        <Button color="indigo">Invite Member</Button>
      </div>

      {/* 2-Column Layout: Team Table + Member Details */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Team Members Table */}
        <div className="lg:col-span-2">
          <Table striped>
            <TableHead>
              <TableRow>
                <TableHeader>Member</TableHeader>
                <TableHeader>Role</TableHeader>
                <TableHeader>Status</TableHeader>
                <TableHeader>Last Active</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {teamMembers.map((member) => (
                <TableRow
                  key={member.id}
                  onClick={() => setSelectedMember(member)}
                  className="cursor-pointer"
                >
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={member.avatar}
                        initials={member.initials}
                        className="size-8"
                      />
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">{member.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge color={getRoleBadgeColor(member.role) as any}>
                      {member.role.charAt(0).toUpperCase() + member.role.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge color={getStatusBadgeColor(member.status) as any}>
                      {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-zinc-500">{member.lastActive}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Member Details Sidebar */}
        <div className="space-y-6">
          <div>
            <Heading level={2}>Member Details</Heading>
            <Divider className="mt-4" soft />
          </div>

          {selectedMember && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar
                  src={selectedMember.avatar}
                  initials={selectedMember.initials}
                  className="size-16"
                />
                <div>
                  <div className="font-semibold text-zinc-950 dark:text-white">{selectedMember.name}</div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400">{selectedMember.email}</div>
                </div>
              </div>

              <DescriptionList>
                <DescriptionTerm>Role</DescriptionTerm>
                <DescriptionDetails>
                  <Badge color={getRoleBadgeColor(selectedMember.role) as any}>
                    {selectedMember.role.charAt(0).toUpperCase() + selectedMember.role.slice(1)}
                  </Badge>
                </DescriptionDetails>

                <DescriptionTerm>Status</DescriptionTerm>
                <DescriptionDetails>
                  <Badge color={getStatusBadgeColor(selectedMember.status) as any}>
                    {selectedMember.status.charAt(0).toUpperCase() + selectedMember.status.slice(1)}
                  </Badge>
                </DescriptionDetails>

                <DescriptionTerm>Joined</DescriptionTerm>
                <DescriptionDetails>{selectedMember.joined}</DescriptionDetails>

                <DescriptionTerm>Last Active</DescriptionTerm>
                <DescriptionDetails>{selectedMember.lastActive}</DescriptionDetails>
              </DescriptionList>

              <div>
                <Divider soft />
                <div className="mt-4">
                  <div className="text-sm font-medium text-zinc-950 dark:text-white mb-3">Permissions</div>
                  <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {getRolePermissions(selectedMember.role).map((permission) => (
                      <li key={permission} className="flex items-start gap-2">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-indigo-500" />
                        <span>{permission}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-2">
                <Button outline className="flex-1">Edit Role</Button>
                {selectedMember.role !== 'owner' && (
                  <Button color="red" className="flex-1">Remove</Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
