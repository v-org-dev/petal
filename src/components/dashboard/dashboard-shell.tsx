"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import {
  Bell,
  BookOpen,
  HelpCircle,
  Inbox,
  LayoutDashboard,
  Menu,
  MessageSquare,
  Search,
  Settings,
  Sparkles,
  Users,
  X,
} from 'lucide-react'

import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/dashboard/inbox', label: 'Inbox', icon: Inbox },
  { href: '/dashboard/knowledge-base', label: 'Knowledge Base', icon: BookOpen },
  { href: '/dashboard/suggestions', label: 'AI Suggestions', icon: Sparkles },
  { href: '/dashboard/channels', label: 'Channels', icon: MessageSquare },
  { href: '/dashboard/team', label: 'Team', icon: Users },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
]

const secondaryNav = [
  { href: '#', label: 'Support', icon: HelpCircle },
  { href: '#', label: 'What’s new', icon: Sparkles },
]

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex min-h-screen">
        <aside
          className={cn(
            'fixed inset-y-0 left-0 z-40 w-72 border-r border-slate-200 bg-white shadow-lg transition duration-200 ease-in-out',
            sidebarOpen ? 'translate-x-0' : '-translate-x-full',
            'lg:translate-x-0',
          )}
        >
          <div className="flex h-16 items-center justify-between px-4">
            <Link href="/dashboard" className="flex items-center gap-3 text-left">
              <span className="grid size-10 place-items-center rounded-xl bg-indigo-100 text-lg font-semibold text-indigo-700">
                🌱
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-medium text-slate-500">Workspace</span>
                <span className="block truncate text-sm font-semibold text-slate-900">Petal Support</span>
              </span>
            </Link>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(false)} aria-label="Close menu">
              <X className="h-5 w-5" />
            </Button>
          </div>
          <Separator />

          <div className="flex h-[calc(100%-64px)] flex-col">
            <nav className="flex-1 overflow-y-auto px-3 py-4">
              <div className="space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive =
                    item.href === '/dashboard'
                      ? pathname === '/dashboard'
                      : pathname === item.href || pathname?.startsWith(`${item.href}/`)

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition',
                        isActive
                          ? 'bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100'
                          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                      )}
                      onClick={() => setSidebarOpen(false)}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="truncate">{item.label}</span>
                    </Link>
                  )
                })}
              </div>

              <Separator className="my-4" />

              <div className="space-y-1">
                {secondaryNav.map((item) => {
                  const Icon = item.icon

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  )
                })}
              </div>
            </nav>

            <div className="border-t border-slate-200 px-4 py-4">
              <div className="flex items-center gap-3">
                <Avatar src="/img/avatars/1-h-1000-w-800.webp" name="Erica Howard" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-900">Erica Howard</p>
                  <p className="truncate text-xs text-slate-500">erica@petal.ai</p>
                </div>
                <Badge variant="outline">Light</Badge>
              </div>
            </div>
          </div>
        </aside>

        {sidebarOpen && <div className="fixed inset-0 z-30 bg-black/30 lg:hidden" onClick={() => setSidebarOpen(false)} />}

        <div className="flex-1 lg:pl-72">
          <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
            <div className="flex h-16 items-center gap-3 px-4 lg:px-8">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>

              <div className="flex flex-1 items-center gap-3">
                <div className="relative w-full max-w-xl">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input placeholder="Search across the workspace" className="pl-9" />
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" aria-label="Notifications">
                    <Bell className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" aria-label="Sparkle">
                    <Sparkles className="h-5 w-5" />
                  </Button>
                  <div className="hidden items-center gap-3 md:flex">
                    <div className="text-right">
                      <p className="text-sm font-semibold text-slate-900">Petal Support AI</p>
                      <p className="text-xs text-slate-500">Bright dashboard</p>
                    </div>
                    <Avatar src="/img/avatars/1-h-1000-w-800.webp" name="Petal" size="sm" />
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main className="px-4 pb-12 pt-8 lg:px-10">
            <div className="space-y-10">{children}</div>
          </main>
        </div>
      </div>
    </div>
  )
}
