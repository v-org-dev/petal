'use client'

import { useMemo, useState } from 'react'
import { Heading } from '@/components/ui/catalyst/heading'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/catalyst/table'
import { Avatar } from '@/components/ui/catalyst/avatar'
import { Badge } from '@/components/ui/catalyst/badge'
import { Button } from '@/components/ui/catalyst/button'
import { DescriptionDetails, DescriptionList, DescriptionTerm } from '@/components/ui/catalyst/description-list'
import { Divider } from '@/components/ui/catalyst/divider'
import { teamMembers } from '@/components/workspace/mock-data'

type Member = (typeof teamMembers)[number]

const roleStyles: Record<Member['role'], { label: string; color: 'indigo' | 'violet' | 'cyan' }> = {
  owner: { label: 'Owner', color: 'indigo' },
  admin: { label: 'Admin', color: 'indigo' },
  reviewer: { label: 'Reviewer', color: 'violet' },
  agent: { label: 'Agent', color: 'cyan' },
}

const statusStyles: Record<Member['status'], { label: string; color: 'green' | 'amber' | 'zinc' }> = {
  active: { label: 'Active', color: 'green' },
  invited: { label: 'Invited', color: 'amber' },
  inactive: { label: 'Inactive', color: 'zinc' },
}

const rolePermissions: Record<Member['role'], string[]> = {
  owner: ['Full workspace access', 'Manage team members', 'Billing & API access', 'Delete workspace'],
  admin: ['Full workspace access', 'Manage team members', 'API access'],
  reviewer: ['Review AI suggestions', 'Approve drafts', 'Edit knowledge base'],
  agent: ['Handle conversations', 'View knowledge base', 'Submit suggestions'],
}

export default function TeamPage() {
  const [selectedMemberId, setSelectedMemberId] = useState(teamMembers[0]?.id ?? 0)

  const selectedMember = useMemo(
    () => teamMembers.find((member) => member.id === selectedMemberId) ?? teamMembers[0],
    [selectedMemberId]
  )

  if (!selectedMember) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 px-6 py-8 text-slate-800 sm:px-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <Heading level={1} className="text-3xl font-semibold text-slate-900">
            Team Members
          </Heading>
          <p className="text-sm text-slate-600">
            Manage roles, status, and permissions for everyone collaborating inside this workspace.
          </p>
        </div>
        <Button
          color="indigo"
          className="cursor-pointer shadow-lg shadow-indigo-200 transition hover:shadow-indigo-300"
          type="button"
        >
          Invite Member
        </Button>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-indigo-100/80 bg-white/95 p-6 shadow-xl ring-1 ring-indigo-100/80 lg:col-span-2">
          <div className="flex items-center justify-between gap-3">
            <div>
              <Heading level={2} className="text-xl font-semibold text-slate-900">
                Active roster
              </Heading>
              <p className="text-sm text-slate-600">Tap a row to spotlight a teammate&apos;s access.</p>
            </div>
            <Badge color="cyan">Live</Badge>
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-indigo-50 shadow-sm">
            <Table bleed>
              <TableHead>
                <TableRow>
                  <TableHeader className="border-indigo-50 text-slate-500">Member</TableHeader>
                  <TableHeader className="border-indigo-50 text-slate-500">Role</TableHeader>
                  <TableHeader className="border-indigo-50 text-slate-500">Status</TableHeader>
                  <TableHeader className="border-indigo-50 text-slate-500">Last active</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {teamMembers.map((member) => {
                  const role = roleStyles[member.role]
                  const status = statusStyles[member.status]
                  const isSelected = selectedMember.id === member.id

                  return (
                    <TableRow
                      key={member.id}
                      onClick={() => setSelectedMemberId(member.id)}
                      className={`cursor-pointer transition ${
                        isSelected
                          ? 'bg-indigo-50/70 ring-1 ring-indigo-100'
                          : 'hover:bg-indigo-50/60 hover:ring-1 hover:ring-indigo-100/60'
                      }`}
                    >
                      <TableCell className="!border-indigo-50">
                        <div className="flex items-center gap-3">
                          <Avatar
                            src={member.avatar}
                            initials={member.initials}
                            alt={member.name}
                            className="size-10"
                          />
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold text-slate-900">{member.name}</span>
                            <span className="text-xs text-slate-500">{member.email}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="!border-indigo-50 align-middle">
                        <Badge color={role.color}>{role.label}</Badge>
                      </TableCell>
                      <TableCell className="!border-indigo-50 align-middle">
                        <Badge color={status.color}>{status.label}</Badge>
                      </TableCell>
                      <TableCell className="!border-indigo-50">
                        <div className="flex flex-col text-xs text-slate-600">
                          <span className="font-semibold text-slate-800">{member.lastActive}</span>
                          <span className="text-slate-500">Joined {member.joined}</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="rounded-3xl border border-cyan-100/80 bg-white/95 p-6 shadow-xl ring-1 ring-cyan-100/80">
          <div className="flex items-center gap-4">
            <Avatar
              src={selectedMember.avatar}
              initials={selectedMember.initials}
              alt={selectedMember.name}
              className="size-16"
            />
            <div className="flex flex-col gap-1">
              <p className="text-lg font-semibold text-slate-900">{selectedMember.name}</p>
              <p className="text-sm text-slate-600">{selectedMember.email}</p>
              <div className="flex flex-wrap gap-2">
                <Badge color={roleStyles[selectedMember.role].color}>{roleStyles[selectedMember.role].label}</Badge>
                <Badge color={statusStyles[selectedMember.status].color}>{statusStyles[selectedMember.status].label}</Badge>
              </div>
            </div>
          </div>

          <Divider className="my-6 border-cyan-100" />

          <DescriptionList className="gap-y-3">
            <DescriptionTerm className="border-cyan-100 text-slate-500">Role</DescriptionTerm>
            <DescriptionDetails className="border-cyan-100 text-slate-800">
              {roleStyles[selectedMember.role].label}
            </DescriptionDetails>

            <DescriptionTerm className="border-cyan-100 text-slate-500">Status</DescriptionTerm>
            <DescriptionDetails className="border-cyan-100 text-slate-800">
              {statusStyles[selectedMember.status].label}
            </DescriptionDetails>

            <DescriptionTerm className="border-cyan-100 text-slate-500">Joined</DescriptionTerm>
            <DescriptionDetails className="border-cyan-100 text-slate-800">{selectedMember.joined}</DescriptionDetails>

            <DescriptionTerm className="border-cyan-100 text-slate-500">Last Active</DescriptionTerm>
            <DescriptionDetails className="border-cyan-100 text-slate-800">
              {selectedMember.lastActive}
            </DescriptionDetails>
          </DescriptionList>

          <div className="mt-5 rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-emerald-50 p-4 shadow-inner">
            <p className="text-sm font-semibold text-cyan-900">Permissions</p>
            <ul className="mt-3 space-y-2">
              {rolePermissions[selectedMember.role].map((permission) => (
                <li key={permission} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <span className="inline-flex size-2.5 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400" aria-hidden />
                  <span>{permission}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              color="cyan"
              className="cursor-pointer shadow-md shadow-cyan-200 transition hover:shadow-cyan-300"
              type="button"
            >
              Edit Role
            </Button>
            <Button
              color="red"
              className="cursor-pointer shadow-md shadow-rose-100 transition hover:shadow-rose-200"
              type="button"
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
