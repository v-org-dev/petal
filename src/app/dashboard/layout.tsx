'use client'

import { usePathname } from 'next/navigation'
import {
  HomeIcon,
  InboxIcon,
  BookOpenIcon,
  SparklesIcon,
  RssIcon,
  UsersIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'
import { SidebarLayout } from '@/components/ui/catalyst/sidebar-layout'
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from '@/components/ui/catalyst/sidebar'
import { Navbar, NavbarSection } from '@/components/ui/catalyst/navbar'
import { Avatar } from '@/components/ui/catalyst/avatar'

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: HomeIcon },
  { name: 'Inbox', href: '/dashboard/inbox', icon: InboxIcon },
  { name: 'Knowledge Base', href: '/dashboard/knowledge-base', icon: BookOpenIcon },
  { name: 'AI Suggestions', href: '/dashboard/suggestions', icon: SparklesIcon },
  { name: 'Channels', href: '/dashboard/channels', icon: RssIcon },
  { name: 'Team', href: '/dashboard/team', icon: UsersIcon },
  { name: 'Settings', href: '/dashboard/settings', icon: Cog6ToothIcon },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSection className="max-lg:hidden">
            {/* Empty section for navbar, search will be added here */}
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-lg bg-indigo-500">
                <span className="text-sm font-semibold text-white">P</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-zinc-950 dark:text-white">Petal Support</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">Workspace</span>
              </div>
            </div>
          </SidebarHeader>

          <SidebarBody>
            <SidebarSection>
              {navigation.map((item) => (
                <SidebarItem key={item.name} href={item.href} current={pathname === item.href}>
                  <item.icon data-slot="icon" />
                  <SidebarLabel>{item.name}</SidebarLabel>
                </SidebarItem>
              ))}
            </SidebarSection>
          </SidebarBody>

          <SidebarFooter>
            <SidebarItem href="#">
              <Avatar
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-8"
              />
              <SidebarLabel>Tom Cook</SidebarLabel>
            </SidebarItem>
          </SidebarFooter>
        </Sidebar>
      }
    >
      {children}
    </SidebarLayout>
  )
}
