'use client'

import { usePathname } from 'next/navigation'
import {
  HomeIcon,
  InboxIcon,
  BookOpenIcon,
  SparklesIcon,
  RssIcon,
  Cog6ToothIcon,
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
  { name: '仪表盘', href: '/workspace', icon: HomeIcon },
  { name: '实时对话', href: '/workspace/conversations', icon: InboxIcon },
  { name: 'AI 知识库', href: '/workspace/knowledge', icon: BookOpenIcon },
  { name: 'AI 训练中心', href: '/workspace/training', icon: SparklesIcon },
  { name: '渠道集成', href: '/workspace/channels', icon: RssIcon },
  { name: '设置中心', href: '/workspace/settings', icon: Cog6ToothIcon },
]

export default function WorkspaceLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="workspace-light-mode" style={{ colorScheme: 'light' }}>
      <SidebarLayout
        navbar={
          <Navbar>
            <NavbarSection className="max-lg:hidden">
              {/* 导航栏可以添加搜索或其他功能 */}
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
                  <span className="text-sm font-semibold text-zinc-950 dark:text-white">Petal 客服</span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">工作空间</span>
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
                <SidebarLabel>管理员</SidebarLabel>
              </SidebarItem>
            </SidebarFooter>
          </Sidebar>
        }
      >
        {children}
      </SidebarLayout>
    </div>
  )
}
