'use client'

import { useState } from 'react'
import { Heading } from '@/components/ui/catalyst/heading'
import { Divider } from '@/components/ui/catalyst/divider'
import { Button } from '@/components/ui/catalyst/button'
import { Input } from '@/components/ui/catalyst/input'
import { Select } from '@/components/ui/catalyst/select'
import { Switch, SwitchField } from '@/components/ui/catalyst/switch'
import { Field, Label } from '@/components/ui/catalyst/fieldset'
import { Fieldset, FieldGroup, Legend } from '@/components/ui/catalyst/fieldset'
import { Textarea } from '@/components/ui/catalyst/textarea'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/catalyst/table'
import { Badge } from '@/components/ui/catalyst/badge'
import { workspaceSettings } from '@/components/workspace/mock-data'

type TabId = 'general' | 'notifications' | 'security' | 'api'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<TabId>('general')

  const tabs = [
    { id: 'general' as TabId, name: '常规' },
    { id: 'notifications' as TabId, name: '通知' },
    { id: 'security' as TabId, name: '安全' },
    { id: 'api' as TabId, name: 'API 密钥' },
  ]

  return (
    <div className="space-y-6">
      {/* 页面标题 */}
      <div>
        <Heading>设置中心</Heading>
        <p className="mt-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
          管理工作空间设置和偏好
        </p>
      </div>

      {/* Tab 导航 */}
      <div className="border-b border-zinc-200 dark:border-zinc-800">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
                  : 'border-transparent text-zinc-500 hover:border-zinc-300 hover:text-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-zinc-300'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab 内容 */}
      <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        {activeTab === 'general' && (
          <div className="space-y-8">
            <Fieldset>
              <Legend>工作空间基础</Legend>
              <FieldGroup>
                <Field>
                  <Label>工作空间名称</Label>
                  <Input defaultValue={workspaceSettings.basics.workspaceName} />
                </Field>
                <Field>
                  <Label>显示 URL</Label>
                  <Input defaultValue={workspaceSettings.basics.displayUrl} />
                </Field>
                <Field>
                  <Label>描述</Label>
                  <Textarea defaultValue={workspaceSettings.basics.description} rows={3} />
                </Field>
              </FieldGroup>
            </Fieldset>

            <Divider soft />

            <Fieldset>
              <Legend>品牌设置</Legend>
              <FieldGroup>
                <Field>
                  <Label>主色调</Label>
                  <Input type="color" defaultValue={workspaceSettings.branding.primaryColor} />
                </Field>
                <Field>
                  <Label>徽标</Label>
                  <Input type="file" accept="image/*" />
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                    建议尺寸: 512x512 像素, PNG 或 SVG 格式
                  </p>
                </Field>
              </FieldGroup>
            </Fieldset>

            <Divider soft />

            <div className="flex justify-end gap-3">
              <Button outline>取消</Button>
              <Button color="indigo">保存更改</Button>
            </div>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="space-y-8">
            <Fieldset>
              <Legend>通知设置</Legend>
              <FieldGroup>
                <SwitchField>
                  <Label>邮件通知</Label>
                  <Switch defaultChecked={workspaceSettings.notifications.email} />
                </SwitchField>
                <SwitchField>
                  <Label>Slack 通知</Label>
                  <Switch defaultChecked={workspaceSettings.notifications.slack} />
                </SwitchField>
                <Field>
                  <Label>Webhook URL</Label>
                  <Input
                    placeholder="https://hooks.example.com/..."
                    defaultValue={workspaceSettings.notifications.webhook}
                  />
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                    接收实时事件通知的 Webhook 端点
                  </p>
                </Field>
              </FieldGroup>
            </Fieldset>

            <Divider soft />

            <div className="flex justify-end gap-3">
              <Button outline>取消</Button>
              <Button color="indigo">保存更改</Button>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="space-y-8">
            <Fieldset>
              <Legend>安全设置</Legend>
              <FieldGroup>
                <SwitchField>
                  <Label>双因素认证</Label>
                  <Switch defaultChecked={workspaceSettings.security.twoFactor} />
                </SwitchField>
                <Field>
                  <Label>会话超时</Label>
                  <Select defaultValue={workspaceSettings.security.sessionTimeout.toString()}>
                    <option value="15">15 分钟</option>
                    <option value="30">30 分钟</option>
                    <option value="60">1 小时</option>
                    <option value="120">2 小时</option>
                    <option value="0">永不超时</option>
                  </Select>
                </Field>
                <Field>
                  <Label>IP 白名单</Label>
                  <Textarea
                    placeholder="每行一个 IP 地址&#10;例如: 192.168.1.1"
                    rows={4}
                  />
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                    限制只有这些 IP 地址可以访问工作空间
                  </p>
                </Field>
              </FieldGroup>
            </Fieldset>

            <Divider soft />

            <div className="flex justify-end gap-3">
              <Button outline>取消</Button>
              <Button color="indigo">保存更改</Button>
            </div>
          </div>
        )}

        {activeTab === 'api' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-zinc-950 dark:text-white">API 密钥管理</h3>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  管理用于访问 API 的密钥
                </p>
              </div>
              <Button color="indigo">创建新密钥</Button>
            </div>

            <Divider soft />

            <Table striped>
              <TableHead>
                <TableRow>
                  <TableHeader>名称</TableHeader>
                  <TableHeader>密钥</TableHeader>
                  <TableHeader>创建时间</TableHeader>
                  <TableHeader>最后使用</TableHeader>
                  <TableHeader>操作</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {workspaceSettings.api.keys.map((key) => (
                  <TableRow key={key.id}>
                    <TableCell className="font-medium">{key.name}</TableCell>
                    <TableCell>
                      <code className="rounded bg-zinc-100 px-2 py-1 text-xs font-mono dark:bg-zinc-800">
                        {key.key}
                      </code>
                    </TableCell>
                    <TableCell className="text-zinc-500">{key.created}</TableCell>
                    <TableCell className="text-zinc-500">{key.lastUsed}</TableCell>
                    <TableCell>
                      <Button outline>
                        撤销
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-950/20">
              <p className="text-sm text-amber-800 dark:text-amber-200">
                <strong>注意：</strong>撤销 API 密钥后无法恢复，请确保您的应用程序不再使用该密钥。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
