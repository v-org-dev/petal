'use client'

import { useState } from 'react'
import { Heading, Subheading } from '@/components/ui/catalyst/heading'
import { Divider } from '@/components/ui/catalyst/divider'
import { Input } from '@/components/ui/catalyst/input'
import { Select } from '@/components/ui/catalyst/select'
import { Switch, SwitchField } from '@/components/ui/catalyst/switch'
import { Field, Fieldset, Label, Legend } from '@/components/ui/catalyst/fieldset'
import { Button } from '@/components/ui/catalyst/button'
import { Badge } from '@/components/ui/catalyst/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/catalyst/table'
import RightDrawer from '@/components/ui/catalyst/drawer'
import { workspaceSettings } from '@/components/dashboard/mock-data'

const tabs = [
  { name: 'General', value: 'general' },
  { name: 'Notifications', value: 'notifications' },
  { name: 'Security', value: 'security' },
  { name: 'API', value: 'api' },
]

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general')
  const [createKeyDrawerOpen, setCreateKeyDrawerOpen] = useState(false)

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <Heading>Settings</Heading>
        <p className="mt-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
          Manage your workspace settings and preferences
        </p>
      </div>

      {/* Secondary Tab Navigation */}
      <div className="border-b border-white/10">
        <nav className="-mb-px flex gap-x-6">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`border-b-2 px-1 pb-4 text-sm/6 font-semibold ${
                activeTab === tab.value
                  ? 'border-indigo-500 text-indigo-400'
                  : 'border-transparent text-zinc-500 hover:border-zinc-300 hover:text-zinc-300'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'general' && (
        <div className="space-y-8">
          <Fieldset>
            <Legend>Workspace Basics</Legend>
            <Divider className="mt-4" soft />

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
              <Field>
                <Label>Workspace Name</Label>
                <Input
                  name="workspace_name"
                  defaultValue={workspaceSettings.basics.workspaceName}
                />
              </Field>

              <Field>
                <Label>Display URL</Label>
                <Input
                  name="display_url"
                  defaultValue={workspaceSettings.basics.displayUrl}
                />
              </Field>

              <Field className="sm:col-span-2">
                <Label>Description</Label>
                <Input
                  name="description"
                  defaultValue={workspaceSettings.basics.description}
                />
              </Field>
            </div>
          </Fieldset>

          <Fieldset>
            <Legend>Branding</Legend>
            <Divider className="mt-4" soft />

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
              <Field>
                <Label>Primary Color</Label>
                <Input
                  type="text"
                  name="primary_color"
                  defaultValue={workspaceSettings.branding.primaryColor}
                />
              </Field>

              <Field>
                <Label>Logo</Label>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">
                  No logo uploaded
                </div>
              </Field>
            </div>
          </Fieldset>

          <div className="flex justify-end gap-4">
            <Button outline>Cancel</Button>
            <Button color="indigo">Save Changes</Button>
          </div>
        </div>
      )}

      {activeTab === 'notifications' && (
        <div className="space-y-8">
          <Fieldset>
            <Legend>Notification Preferences</Legend>
            <Divider className="mt-4" soft />

            <div className="mt-6 space-y-6">
              <SwitchField>
                <Label>Email Notifications</Label>
                <Switch
                  name="email_notifications"
                  defaultChecked={workspaceSettings.notifications.email}
                />
              </SwitchField>

              <SwitchField>
                <Label>Slack Notifications</Label>
                <Switch
                  name="slack_notifications"
                  defaultChecked={workspaceSettings.notifications.slack}
                />
              </SwitchField>

              <Field>
                <Label>Webhook URL</Label>
                <Input
                  type="url"
                  name="webhook_url"
                  placeholder="https://example.com/webhook"
                  defaultValue={workspaceSettings.notifications.webhook}
                />
              </Field>
            </div>
          </Fieldset>

          <div className="flex justify-end gap-4">
            <Button outline>Cancel</Button>
            <Button color="indigo">Save Changes</Button>
          </div>
        </div>
      )}

      {activeTab === 'security' && (
        <div className="space-y-8">
          <Fieldset>
            <Legend>Security Settings</Legend>
            <Divider className="mt-4" soft />

            <div className="mt-6 space-y-6">
              <SwitchField>
                <Label>Two-Factor Authentication</Label>
                <Switch
                  name="two_factor"
                  defaultChecked={workspaceSettings.security.twoFactor}
                />
              </SwitchField>

              <Field>
                <Label>Session Timeout (minutes)</Label>
                <Select name="session_timeout" defaultValue={workspaceSettings.security.sessionTimeout.toString()}>
                  <option value="15">15 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="60">1 hour</option>
                  <option value="120">2 hours</option>
                </Select>
              </Field>
            </div>
          </Fieldset>

          <div className="flex justify-end gap-4">
            <Button outline>Cancel</Button>
            <Button color="indigo">Save Changes</Button>
          </div>
        </div>
      )}

      {activeTab === 'api' && (
        <div className="space-y-8">
          <div className="flex items-start justify-between">
            <div>
              <Subheading>API Keys</Subheading>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                Manage API keys for programmatic access
              </p>
            </div>
            <Button color="indigo" onClick={() => setCreateKeyDrawerOpen(true)}>
              Create New Key
            </Button>
          </div>

          <Divider soft />

          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Name</TableHeader>
                <TableHeader>Key</TableHeader>
                <TableHeader>Created</TableHeader>
                <TableHeader>Last Used</TableHeader>
                <TableHeader>Actions</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {workspaceSettings.api.keys.map((key) => (
                <TableRow key={key.id}>
                  <TableCell className="font-medium">{key.name}</TableCell>
                  <TableCell>
                    <code className="text-xs text-zinc-500 dark:text-zinc-400">{key.key}</code>
                  </TableCell>
                  <TableCell className="text-zinc-500">{key.created}</TableCell>
                  <TableCell className="text-zinc-500">{key.lastUsed}</TableCell>
                  <TableCell>
                    <Button plain className="text-red-600 hover:text-red-700">
                      Revoke
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {/* Create New Key Drawer */}
      <RightDrawer
        open={createKeyDrawerOpen}
        onClose={setCreateKeyDrawerOpen}
        title="Create New API Key"
        maxWidth="md"
      >
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-zinc-950 dark:text-white mb-2">
              Key Name
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
              placeholder="My API Key"
            />
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
              A descriptive name to help you identify this key
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-950 dark:text-white mb-2">
              Permissions
            </label>
            <select className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-white">
              <option>Read Only</option>
              <option>Read & Write</option>
              <option>Full Access</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-950 dark:text-white mb-2">
              Description (optional)
            </label>
            <textarea
              rows={4}
              className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
              placeholder="Describe what this key will be used for..."
            />
          </div>

          <div className="rounded-md bg-amber-50 p-4 dark:bg-amber-900/20">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Note:</strong> The API key will only be shown once. Make sure to copy it and store it securely.
            </p>
          </div>

          <div className="flex gap-2 pt-4">
            <Button outline className="flex-1" onClick={() => setCreateKeyDrawerOpen(false)}>
              Cancel
            </Button>
            <Button color="indigo" className="flex-1">
              Create Key
            </Button>
          </div>
        </div>
      </RightDrawer>
    </div>
  )
}
