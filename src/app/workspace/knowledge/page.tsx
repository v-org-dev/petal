'use client'

import { useState } from 'react'
import { Heading } from '@/components/ui/catalyst/heading'
import { Button } from '@/components/ui/catalyst/button'
import { Divider } from '@/components/ui/catalyst/divider'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/catalyst/table'
import { Avatar } from '@/components/ui/catalyst/avatar'
import { Badge } from '@/components/ui/catalyst/badge'
import { DescriptionDetails, DescriptionList, DescriptionTerm } from '@/components/ui/catalyst/description-list'
import { articles } from '@/components/workspace/mock-data'

type TabId = 'overview' | 'sources' | 'articles' | 'review'

export default function KnowledgePage() {
  const [activeTab, setActiveTab] = useState<TabId>('articles')
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(articles[0]?.id || null)

  const tabs = [
    { id: 'overview' as TabId, name: '概览' },
    { id: 'sources' as TabId, name: '来源' },
    { id: 'articles' as TabId, name: '文章' },
    { id: 'review' as TabId, name: '待审核' },
  ]

  const selectedArticle = articles.find((a) => a.id === selectedArticleId)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'live':
        return 'green'
      case 'review':
        return 'amber'
      case 'draft':
        return 'zinc'
      default:
        return 'zinc'
    }
  }

  return (
    <div className="space-y-6">
      {/* 页面标题 */}
      <div className="flex items-center justify-between">
        <div>
          <Heading>AI 知识库</Heading>
          <p className="mt-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
            管理 AI 代理使用的知识和文档
          </p>
        </div>
        <Button color="indigo">上传内容</Button>
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
      {activeTab === 'articles' && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* 文章列表 (左侧 2/3) */}
          <div className="lg:col-span-2">
            <Table striped>
              <TableHead>
                <TableRow>
                  <TableHeader>标题</TableHeader>
                  <TableHeader>作者</TableHeader>
                  <TableHeader>状态</TableHeader>
                  <TableHeader>更新时间</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {articles.map((article) => (
                  <TableRow
                    key={article.id}
                    onClick={() => setSelectedArticleId(article.id)}
                    className={`cursor-pointer ${
                      selectedArticleId === article.id ? 'bg-zinc-950/5 dark:bg-white/5' : ''
                    }`}
                  >
                    <TableCell>
                      <div className="font-medium">{article.title}</div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400">{article.category}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar initials={article.author.initials} className="size-6" />
                        <span className="text-sm">{article.author.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge color={getStatusBadge(article.status) as any}>
                        {article.statusLabel}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-zinc-500">{article.updated}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* 分页 */}
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                显示 <span className="font-medium text-zinc-950 dark:text-white">1-{articles.length}</span> 条，共{' '}
                <span className="font-medium text-zinc-950 dark:text-white">{articles.length}</span> 条
              </p>
              <div className="flex gap-2">
                <Button outline disabled>
                  上一页
                </Button>
                <Button outline disabled>
                  下一页
                </Button>
              </div>
            </div>
          </div>

          {/* 文章预览 (右侧 1/3) */}
          <div>
            {selectedArticle ? (
              <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="flex items-start justify-between">
                  <h3 className="text-base font-semibold text-zinc-950 dark:text-white">
                    {selectedArticle.title}
                  </h3>
                  <Badge color={getStatusBadge(selectedArticle.status) as any}>
                    {selectedArticle.statusLabel}
                  </Badge>
                </div>

                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                  {selectedArticle.category}
                </p>

                <Divider className="my-4" soft />

                <DescriptionList>
                  <DescriptionTerm>状态</DescriptionTerm>
                  <DescriptionDetails className="font-medium text-zinc-950 dark:text-white">
                    {selectedArticle.statusLabel}
                  </DescriptionDetails>

                  <DescriptionTerm>作者</DescriptionTerm>
                  <DescriptionDetails>
                    <div className="flex items-center gap-2">
                      <Avatar initials={selectedArticle.author.initials} className="size-6" />
                      <span className="font-medium text-zinc-950 dark:text-white">
                        {selectedArticle.author.name}
                      </span>
                    </div>
                  </DescriptionDetails>

                  <DescriptionTerm>最后更新</DescriptionTerm>
                  <DescriptionDetails className="font-medium text-zinc-950 dark:text-white">
                    {selectedArticle.updated}
                  </DescriptionDetails>

                  <DescriptionTerm>浏览次数</DescriptionTerm>
                  <DescriptionDetails className="font-medium text-zinc-950 dark:text-white">
                    {selectedArticle.views.toLocaleString()}
                  </DescriptionDetails>

                  <DescriptionTerm>分类</DescriptionTerm>
                  <DescriptionDetails className="font-medium text-zinc-950 dark:text-white">
                    {selectedArticle.category}
                  </DescriptionDetails>
                </DescriptionList>

                <Divider className="my-4" soft />

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-zinc-950 dark:text-white">内容预览</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    本文档包含有关 {selectedArticle.category} 的详细信息，帮助 AI 代理回答相关问题。
                    该文档已被浏览 {selectedArticle.views} 次，表明其在客户支持中的重要性。
                  </p>
                </div>

                <Divider className="my-4" soft />

                <div className="flex gap-2">
                  <Button color="indigo" className="flex-1">
                    编辑
                  </Button>
                  {selectedArticle.status === 'review' && (
                    <Button outline className="flex-1">
                      发布
                    </Button>
                  )}
                </div>
              </div>
            ) : (
              <div className="rounded-lg border border-zinc-200 bg-white p-8 text-center dark:border-zinc-800 dark:bg-zinc-900">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  请选择一篇文章以查看详情
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'overview' && (
        <div className="rounded-lg border border-zinc-200 bg-white p-12 text-center dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">概览页面即将推出</p>
        </div>
      )}

      {activeTab === 'sources' && (
        <div className="rounded-lg border border-zinc-200 bg-white p-12 text-center dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">来源页面即将推出</p>
        </div>
      )}

      {activeTab === 'review' && (
        <div className="rounded-lg border border-zinc-200 bg-white p-12 text-center dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">待审核页面即将推出</p>
        </div>
      )}
    </div>
  )
}
