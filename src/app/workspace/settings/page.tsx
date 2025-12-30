'use client'

import { useState, type FormEvent } from 'react'
import { Heading } from '@/components/ui/catalyst/heading'
import { Divider } from '@/components/ui/catalyst/divider'
import { Input } from '@/components/ui/catalyst/input'
import { Select } from '@/components/ui/catalyst/select'
import { Switch, SwitchField } from '@/components/ui/catalyst/switch'
import { Field, Fieldset, Label, Legend } from '@/components/ui/catalyst/fieldset'
import { Button } from '@/components/ui/catalyst/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/catalyst/table'
import RightDrawer from '@/components/ui/catalyst/drawer'
import { workspaceSettings } from '@/components/workspace/mock-data'

type TabKey = 'general' | 'notifications' | 'security' | 'api'
type ApiKey = (typeof workspaceSettings.api.keys)[number]

const tabs: { key: TabKey; label: string; accent: string; helper: string }[] = [
  { key: 'general', label: 'General', accent: 'from-sky-500 via-cyan-400 to-emerald-400', helper: 'Identity & basics' },
  { key: 'notifications', label: 'Notifications', accent: 'from-emerald-500 via-lime-400 to-yellow-400', helper: 'Stay in sync' },
  { key: 'security', label: 'Security', accent: 'from-indigo-500 via-blue-500 to-cyan-400', helper: 'Protection & sessions' },
  { key: 'api', label: 'API', accent: 'from-fuchsia-500 via-pink-500 to-orange-400', helper: 'Keys & access' },
]

export default function WorkspaceSettingsPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('general')
  const [createKeyDrawerOpen, setCreateKeyDrawerOpen] = useState(false)

  const [basics, setBasics] = useState(workspaceSettings.basics)
  const [branding, setBranding] = useState(workspaceSettings.branding)
  const [notifications, setNotifications] = useState(workspaceSettings.notifications)
  const [security, setSecurity] = useState(workspaceSettings.security)
  const [apiKeys, setApiKeys] = useState<ApiKey[]>(workspaceSettings.api.keys)
  const [newKeyName, setNewKeyName] = useState('Customer automation key')
  const [newKeyScope, setNewKeyScope] = useState<'production' | 'sandbox'>('production')
  const [newKeyRestriction, setNewKeyRestriction] = useState('app.petal.com')

  const handleCreateKey = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const today = new Date().toISOString().slice(0, 10)
    const maskedSuffix = (apiKeys.length + 3).toString().padStart(4, '0')

    const newKey: ApiKey = {
      id: apiKeys.length + 1,
      name: newKeyName.trim() || 'Untitled key',
      key: newKeyScope === 'production' ? `pk_live_••••••••••••${maskedSuffix}` : `pk_test_••••••••••••${maskedSuffix}`,
      created: today,
      lastUsed: 'Just created',
    }

    setApiKeys((previous) => [...previous, newKey])
    setCreateKeyDrawerOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-amber-50 px-6 py-8 text-slate-800 sm:px-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <Heading level={1} className="text-3xl font-semibold text-slate-900">
            Settings
          </Heading>
          <p className="text-sm text-slate-600">
            Tune your workspace identity, alerts, security posture, and API surface with vibrant clarity.
          </p>
        </div>
        <Button
          type="button"
          color="sky"
          className="cursor-pointer shadow-lg shadow-sky-200 transition hover:shadow-sky-300"
          onClick={() => {
            setActiveTab('api')
            setCreateKeyDrawerOpen(true)
          }}
        >
          Create API Key
        </Button>
      </div>

      <Divider className="my-6 border-slate-200/80" />

      <div className="flex flex-wrap gap-3">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`group rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 ${
                isActive
                  ? 'border-transparent bg-gradient-to-r ' + tab.accent + ' text-white shadow-lg shadow-orange-100/60'
                  : 'border-slate-200 bg-white/80 text-slate-700 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className="flex items-center gap-2">
                {tab.label}
                <span
                  className={`text-[11px] font-medium ${
                    isActive ? 'text-white/90' : 'text-slate-400 group-hover:text-slate-600'
                  }`}
                >
                  {tab.helper}
                </span>
              </span>
            </button>
          )
        })}
      </div>

      <div className="mt-6 rounded-3xl border border-sky-100/70 bg-white/90 p-6 shadow-xl ring-1 ring-orange-100/70 backdrop-blur">
        {activeTab === 'general' && (
          <div className="space-y-6">
            <Fieldset className="rounded-2xl border border-sky-100/80 bg-gradient-to-br from-white via-sky-50 to-emerald-50 p-6 shadow-sm">
              <Legend className="text-sky-900">Workspace Basics</Legend>
              <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field>
                  <Label>Workspace Name</Label>
                  <Input
                    value={basics.workspaceName}
                    onChange={(event) => setBasics({ ...basics, workspaceName: event.target.value })}
                    placeholder="Petal workspace name"
                  />
                </Field>
                <Field>
                  <Label>Display URL</Label>
                  <Input
                    value={basics.displayUrl}
                    onChange={(event) => setBasics({ ...basics, displayUrl: event.target.value })}
                    placeholder="petal.com"
                    type="url"
                  />
                </Field>
                <Field className="md:col-span-2">
                  <Label>Description</Label>
                  <Input
                    value={basics.description}
                    onChange={(event) => setBasics({ ...basics, description: event.target.value })}
                    placeholder="Short description"
                  />
                </Field>
              </div>
            </Fieldset>

            <Fieldset className="rounded-2xl border border-amber-100/80 bg-gradient-to-br from-white via-amber-50 to-orange-50 p-6 shadow-sm">
              <Legend className="text-amber-900">Branding</Legend>
              <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field>
                  <Label>Primary Color</Label>
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex size-10 items-center justify-center rounded-xl border border-amber-100 bg-white shadow-inner"
                      style={{ backgroundColor: branding.primaryColor }}
                    />
                    <Input
                      value={branding.primaryColor}
                      onChange={(event) => setBranding({ ...branding, primaryColor: event.target.value })}
                      placeholder="#6366f1"
                    />
                  </div>
                </Field>
                <Field>
                  <Label>Logo</Label>
                  <Input
                    value={branding.logo ?? ''}
                    onChange={(event) => setBranding({ ...branding, logo: event.target.value })}
                    placeholder="Paste logo URL or file path"
                    type="url"
                  />
                </Field>
              </div>
            </Fieldset>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-emerald-100/80 bg-gradient-to-br from-white via-emerald-50 to-lime-50 p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Heading level={2} className="text-xl font-semibold text-emerald-900">
                    Alerting Preferences
                  </Heading>
                  <p className="text-sm text-emerald-700/80">Choose where status updates and incidents land.</p>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-emerald-700 shadow">
                  Real-time
                </span>
              </div>

              <Divider className="my-4 border-emerald-200/70" />

              <div className="space-y-5">
                <SwitchField>
                  <Label>Email Notifications</Label>
                  <Switch
                    color="emerald"
                    checked={notifications.email}
                    onChange={(checked) => setNotifications({ ...notifications, email: checked })}
                    className="cursor-pointer"
                  />
                  <p className="text-sm text-emerald-700/80">Weekly summaries and important alerts.</p>
                </SwitchField>

                <SwitchField>
                  <Label>Slack Notifications</Label>
                  <Switch
                    color="sky"
                    checked={notifications.slack}
                    onChange={(checked) => setNotifications({ ...notifications, slack: checked })}
                    className="cursor-pointer"
                  />
                  <p className="text-sm text-emerald-700/80">Push updates to your #support-bots channel.</p>
                </SwitchField>

                <Field>
                  <Label>Webhook URL</Label>
                  <Input
                    value={notifications.webhook}
                    onChange={(event) => setNotifications({ ...notifications, webhook: event.target.value })}
                    placeholder="https://hooks.example.com/petal"
                    type="url"
                  />
                </Field>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-indigo-100/80 bg-gradient-to-br from-white via-indigo-50 to-blue-50 p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Heading level={2} className="text-xl font-semibold text-indigo-900">
                    Secure Sessions
                  </Heading>
                  <p className="text-sm text-indigo-700/80">Keep teammates safe with layered controls.</p>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-indigo-700 shadow">
                  Recommended
                </span>
              </div>

              <Divider className="my-4 border-indigo-200/70" />

              <div className="space-y-5">
                <SwitchField>
                  <Label>Two-Factor Authentication</Label>
                  <Switch
                    color="violet"
                    checked={security.twoFactor}
                    onChange={(checked) => setSecurity({ ...security, twoFactor: checked })}
                    className="cursor-pointer"
                  />
                  <p className="text-sm text-indigo-700/80">Require TOTP for all workspace sign-ins.</p>
                </SwitchField>

                <Field>
                  <Label>Session Timeout</Label>
                  <Select
                    value={security.sessionTimeout.toString()}
                    onChange={(event) => setSecurity({ ...security, sessionTimeout: Number(event.target.value) })}
                  >
                    <option value={15}>15 minutes</option>
                    <option value={30}>30 minutes</option>
                    <option value={60}>60 minutes</option>
                    <option value={120}>120 minutes</option>
                  </Select>
                  <p className="mt-2 text-sm text-indigo-700/80">Shorter windows reduce stale sessions.</p>
                </Field>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'api' && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-sky-100/80 bg-gradient-to-br from-white via-sky-50 to-indigo-50 p-6 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <Heading level={2} className="text-xl font-semibold text-sky-900">
                    API Keys
                  </Heading>
                  <p className="text-sm text-sky-700/80">Manage keys for integrations and automations.</p>
                </div>
                <Button
                  type="button"
                  color="indigo"
                  className="cursor-pointer shadow-md shadow-indigo-200 transition hover:shadow-indigo-300"
                  onClick={() => setCreateKeyDrawerOpen(true)}
                >
                  Create New Key
                </Button>
              </div>

              <div className="mt-4 overflow-hidden rounded-2xl border border-slate-100 shadow-lg shadow-indigo-50/60">
                <Table bleed>
                  <TableHead>
                    <TableRow>
                      <TableHeader className="border-slate-100 text-slate-500">Name</TableHeader>
                      <TableHeader className="border-slate-100 text-slate-500">Key</TableHeader>
                      <TableHeader className="border-slate-100 text-slate-500">Created</TableHeader>
                      <TableHeader className="border-slate-100 text-slate-500">Last Used</TableHeader>
                      <TableHeader className="border-slate-100 text-slate-500">Actions</TableHeader>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {apiKeys.map((key) => (
                      <TableRow key={key.id} className="even:bg-sky-50/50 hover:bg-orange-50/70">
                        <TableCell className="!border-slate-100">
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold text-slate-900">{key.name}</span>
                            <span className="text-xs text-slate-500">ID #{key.id.toString().padStart(3, '0')}</span>
                          </div>
                        </TableCell>
                        <TableCell className="!border-slate-100">
                          <span className="rounded-md bg-white px-3 py-1 text-sm font-mono text-slate-800 shadow-inner">
                            {key.key}
                          </span>
                        </TableCell>
                        <TableCell className="!border-slate-100 text-sm text-slate-700">
                          <time dateTime={key.created}>{key.created}</time>
                        </TableCell>
                        <TableCell className="!border-slate-100 text-sm text-slate-700">
                          <span>{key.lastUsed}</span>
                        </TableCell>
                        <TableCell className="!border-slate-100">
                          <div className="flex flex-wrap gap-2">
                            <Button plain className="cursor-pointer px-3 py-2 text-xs font-semibold text-sky-700" type="button">
                              Copy
                            </Button>
                            <Button plain className="cursor-pointer px-3 py-2 text-xs font-semibold text-rose-700" type="button">
                              Disable
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        )}
      </div>

      <RightDrawer
        open={createKeyDrawerOpen}
        onClose={setCreateKeyDrawerOpen}
        title="Create API key"
        maxWidth="md"
      >
        <form className="space-y-6" onSubmit={handleCreateKey}>
          <div className="space-y-1">
            <Heading level={3} className="text-lg font-semibold text-slate-900">
              Key details
            </Heading>
            <p className="text-sm text-slate-600">Name the key and choose where it can operate.</p>
          </div>

          <Fieldset className="space-y-4">
            <Legend className="text-slate-900">Basics</Legend>
            <Field>
              <Label>Key Name</Label>
              <Input
                value={newKeyName}
                onChange={(event) => setNewKeyName(event.target.value)}
                placeholder="My automation key"
              />
            </Field>
            <Field>
              <Label>Environment</Label>
              <Select
                value={newKeyScope}
                onChange={(event) => setNewKeyScope(event.target.value as 'production' | 'sandbox')}
              >
                <option value="production">Production</option>
                <option value="sandbox">Sandbox / testing</option>
              </Select>
            </Field>
            <Field>
              <Label>Allowed Domains</Label>
              <Input
                value={newKeyRestriction}
                onChange={(event) => setNewKeyRestriction(event.target.value)}
                placeholder="Comma separated domains"
              />
            </Field>
          </Fieldset>

          <div className="flex items-center justify-end gap-3">
            <Button plain className="cursor-pointer" type="button" onClick={() => setCreateKeyDrawerOpen(false)}>
              Cancel
            </Button>
            <Button color="indigo" className="cursor-pointer" type="submit">
              Generate key
            </Button>
          </div>
        </form>
      </RightDrawer>
    </div>
  )
}
