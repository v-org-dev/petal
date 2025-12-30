'use client'

import { useMemo, useState } from 'react'
import { Heading } from '@/components/ui/catalyst/heading'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/catalyst/table'
import { Avatar } from '@/components/ui/catalyst/avatar'
import { Badge } from '@/components/ui/catalyst/badge'
import {
  Pagination,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from '@/components/ui/catalyst/pagination'
import { DescriptionDetails, DescriptionList, DescriptionTerm } from '@/components/ui/catalyst/description-list'
import { Button } from '@/components/ui/catalyst/button'
import { Divider } from '@/components/ui/catalyst/divider'
import RightDrawer from '@/components/ui/catalyst/drawer'
import { Input } from '@/components/ui/catalyst/input'
import { Select } from '@/components/ui/catalyst/select'
import { Textarea } from '@/components/ui/catalyst/textarea'
import { articles } from '@/components/workspace/mock-data'

type TabKey = 'overview' | 'sources' | 'articles' | 'review'
type Article = (typeof articles)[number]

const tabPills: { key: TabKey; label: string; accent: string; helper: string }[] = [
  { key: 'overview', label: 'Overview', accent: 'from-sky-500 to-cyan-400', helper: 'Pulse across the library' },
  { key: 'sources', label: 'Sources', accent: 'from-emerald-500 to-lime-400', helper: 'Connected inputs' },
  { key: 'articles', label: 'Articles', accent: 'from-pink-500 to-orange-400', helper: 'Live inventory' },
  { key: 'review', label: 'Review', accent: 'from-indigo-500 to-blue-500', helper: 'Moderation queue' },
]

const statusStyles = {
  live: { label: 'Live', color: 'green' as const },
  draft: { label: 'Draft', color: 'amber' as const },
  review: { label: 'In review', color: 'blue' as const },
}

export default function KnowledgeBasePage() {
  const [activeTab, setActiveTab] = useState<TabKey>('articles')
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [uploadDrawerOpen, setUploadDrawerOpen] = useState(false)

  const { liveCount, draftCount, reviewCount, totalViews } = useMemo(() => {
    const live = articles.filter((article) => article.status === 'live').length
    const draft = articles.filter((article) => article.status === 'draft').length
    const review = articles.filter((article) => article.status === 'review').length
    const views = articles.reduce((sum, article) => sum + article.views, 0)
    return { liveCount: live, draftCount: draft, reviewCount: review, totalViews: views }
  }, [])

  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article)
    setDrawerOpen(true)
  }

  const handlePreviewDrawer = (open: boolean) => {
    setDrawerOpen(open)
    if (!open) {
      setSelectedArticle(null)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-sky-50 px-6 py-8 text-slate-800 sm:px-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <Heading level={1} className="text-3xl font-semibold text-slate-900">
            Knowledge Base
          </Heading>
          <p className="max-w-2xl text-sm text-slate-600">
            Curate bright, reliable answers for every channel. Track articles, sources, and review flow from one place.
          </p>
        </div>
        <Button
          color="pink"
          className="cursor-pointer shadow-lg shadow-pink-200 transition hover:shadow-pink-300"
          onClick={() => setUploadDrawerOpen(true)}
        >
          Upload Content
        </Button>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {tabPills.map((tab) => {
          const isActive = activeTab === tab.key
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`group rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 ${
                isActive
                  ? 'border-transparent bg-gradient-to-r ' +
                    tab.accent +
                    ' text-white shadow-md shadow-orange-200/60'
                  : 'border-slate-200 bg-white/80 text-slate-700 hover:border-slate-300 hover:text-slate-900'
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

      <div className="mt-6 rounded-3xl border border-orange-100/70 bg-white/90 p-6 shadow-xl ring-1 ring-orange-100/60 backdrop-blur">
        {activeTab === 'articles' ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/60 bg-gradient-to-br from-emerald-100 via-white to-lime-100 p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Live</p>
                <p className="mt-1 text-3xl font-semibold text-emerald-900">{liveCount}</p>
                <p className="text-sm text-emerald-700/80">Published and ready to serve</p>
              </div>
              <div className="rounded-2xl border border-white/60 bg-gradient-to-br from-amber-100 via-white to-orange-100 p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">Drafts</p>
                <p className="mt-1 text-3xl font-semibold text-amber-900">{draftCount}</p>
                <p className="text-sm text-amber-700/80">Polish before launch</p>
              </div>
              <div className="rounded-2xl border border-white/60 bg-gradient-to-br from-sky-100 via-white to-indigo-100 p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-sky-800">In Review</p>
                <div className="mt-1 flex items-baseline gap-2">
                  <p className="text-3xl font-semibold text-sky-900">{reviewCount}</p>
                  <Badge color="blue">QA lane</Badge>
                </div>
                <p className="text-sm text-sky-800/80">Need approvals or edits</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-lg shadow-orange-50/60">
              <div className="flex items-center justify-between bg-gradient-to-r from-pink-50 via-orange-50 to-amber-50 px-5 py-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Article inventory</p>
                  <p className="text-xs text-slate-600">Tap a row to open the article preview drawer.</p>
                </div>
                <Badge color="rose">Total views {totalViews.toLocaleString()}</Badge>
              </div>
              <Table bleed>
                <TableHead>
                  <TableRow>
                    <TableHeader className="border-slate-100 text-slate-500">Title</TableHeader>
                    <TableHeader className="border-slate-100 text-slate-500">Author</TableHeader>
                    <TableHeader className="border-slate-100 text-slate-500">Status</TableHeader>
                    <TableHeader className="border-slate-100 text-slate-500">Updated</TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {articles.map((article) => {
                    const status = statusStyles[article.status]
                    return (
                      <TableRow
                        key={article.id}
                        onClick={() => handleSelectArticle(article)}
                        className="cursor-pointer transition hover:bg-orange-50/70"
                      >
                        <TableCell className="!border-slate-100">
                          <div className="flex flex-col gap-1">
                            <span className="text-sm font-semibold text-slate-900">{article.title}</span>
                            <span className="text-xs text-slate-600">{article.category}</span>
                          </div>
                        </TableCell>
                        <TableCell className="!border-slate-100">
                          <div className="flex items-center gap-3">
                            <Avatar
                              src={article.author.avatar}
                              initials={article.author.initials}
                              alt={article.author.name}
                              className="size-10"
                            />
                            <div className="flex flex-col">
                              <span className="text-sm font-semibold text-slate-900">{article.author.name}</span>
                              <span className="text-xs text-slate-500">#{article.id.toString().padStart(3, '0')}</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="!border-slate-100">
                          <Badge color={status.color}>{status.label}</Badge>
                        </TableCell>
                        <TableCell className="!border-slate-100">
                          <div className="flex flex-col text-xs text-slate-600">
                            <time dateTime={article.dateTime} className="font-semibold text-slate-800">
                              {article.updated}
                            </time>
                            <span className="text-slate-500">Last touched</span>
                          </div>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </div>

            <Pagination className="items-center justify-between rounded-2xl border border-slate-100 bg-white/80 px-3 py-2 shadow-sm shadow-orange-50/70">
              <PaginationPrevious href={null} />
              <PaginationList>
                <PaginationPage href="#" current>
                  1
                </PaginationPage>
                <PaginationPage href="#">2</PaginationPage>
                <PaginationPage href="#">3</PaginationPage>
              </PaginationList>
              <PaginationNext href="#" />
            </Pagination>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-5 shadow-sm">
              <Heading level={3} className="text-lg font-semibold text-sky-900">
                {tabPills.find((tab) => tab.key === activeTab)?.label} snapshot
              </Heading>
              <p className="mt-2 text-sm text-slate-700">
                Keep this tab for quick notes and planning. The primary Articles view stays active by default to keep
                publishing moving.
              </p>
              <Divider className="my-4 border-slate-200" />
              <div className="space-y-2 text-sm text-slate-700">
                <p>• Track sync cadence, owners, and QA steps.</p>
                <p>• Bright colors keep the most urgent queues visible.</p>
                <p>• Switch back to Articles anytime to open previews.</p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-gradient-to-br from-fuchsia-50 via-white to-amber-50 p-5 shadow-sm">
              <Heading level={3} className="text-lg font-semibold text-fuchsia-900">
                Quick actions
              </Heading>
              <p className="mt-2 text-sm text-slate-700">
                Add source uploads, attach review notes, or stash upcoming articles. This placeholder keeps the layout
                lively until the tab gets wired up.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button color="cyan" className="cursor-pointer">
                  Add a note
                </Button>
                <Button color="orange" className="cursor-pointer">
                  Schedule sync
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <RightDrawer
        open={drawerOpen}
        onClose={handlePreviewDrawer}
        title={selectedArticle ? selectedArticle.title : 'Article preview'}
        maxWidth="lg"
      >
        {selectedArticle ? (
          <div className="space-y-5 text-slate-800">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <Avatar
                  src={selectedArticle.author.avatar}
                  initials={selectedArticle.author.initials}
                  alt={selectedArticle.author.name}
                  className="size-12"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-900">{selectedArticle.author.name}</span>
                  <span className="text-xs text-slate-500">Updated {selectedArticle.updated}</span>
                </div>
              </div>
              <Badge color={statusStyles[selectedArticle.status].color}>{statusStyles[selectedArticle.status].label}</Badge>
            </div>

            <DescriptionList className="grid grid-cols-1 gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 sm:grid-cols-2">
              <div>
                <DescriptionTerm className="border-slate-200 text-slate-500">Category</DescriptionTerm>
                <DescriptionDetails className="border-slate-200 text-slate-900">{selectedArticle.category}</DescriptionDetails>
              </div>
              <div>
                <DescriptionTerm className="border-slate-200 text-slate-500">Views</DescriptionTerm>
                <DescriptionDetails className="border-slate-200 text-slate-900">
                  {selectedArticle.views.toLocaleString()}
                </DescriptionDetails>
              </div>
              <div>
                <DescriptionTerm className="border-slate-200 text-slate-500">Article ID</DescriptionTerm>
                <DescriptionDetails className="border-slate-200 text-slate-900">
                  KB-{selectedArticle.id.toString().padStart(4, '0')}
                </DescriptionDetails>
              </div>
              <div>
                <DescriptionTerm className="border-slate-200 text-slate-500">Last touched</DescriptionTerm>
                <DescriptionDetails className="border-slate-200 text-slate-900">
                  <time dateTime={selectedArticle.dateTime}>{selectedArticle.updated}</time>
                </DescriptionDetails>
              </div>
            </DescriptionList>

            <Divider className="border-slate-200" />

            <p className="text-sm leading-relaxed text-slate-700">
              This preview drawer keeps the essentials in reach: author, status, category, and freshness. Replace this
              sample copy with your source material or connect your CMS to pull in summaries automatically.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button color="emerald" className="cursor-pointer">
                Share with team
              </Button>
              <Button outline className="cursor-pointer">
                Request review
              </Button>
            </div>
          </div>
        ) : (
          <p className="text-sm text-slate-600">Select an article to view its quick summary.</p>
        )}
      </RightDrawer>

      <RightDrawer
        open={uploadDrawerOpen}
        onClose={setUploadDrawerOpen}
        title="Upload content"
        maxWidth="lg"
      >
        <div className="space-y-5 text-slate-800">
          <p className="text-sm text-slate-600">
            Drop in fresh material, map it to a category, and set the status you want to launch with. Bright accents keep
            the workflow upbeat.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="space-y-1 text-sm font-semibold text-slate-900">
                Title
                <Input type="text" placeholder="New article title" />
              </label>
              <label className="space-y-1 text-sm font-semibold text-slate-900">
                Category
                <Select defaultValue="Documentation">
                  <option>Documentation</option>
                  <option>Billing</option>
                  <option>Policies</option>
                  <option>Shipping</option>
                  <option>Security</option>
                </Select>
              </label>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="space-y-1 text-sm font-semibold text-slate-900">
                Status
                <Select defaultValue="draft">
                  <option value="draft">Draft</option>
                  <option value="review">Review</option>
                  <option value="live">Live</option>
                </Select>
              </label>
              <label className="space-y-1 text-sm font-semibold text-slate-900">
                Attachment
                <Input type="file" />
              </label>
            </div>

            <label className="space-y-1 text-sm font-semibold text-slate-900">
              Summary or description
              <Textarea rows={4} placeholder="What does this content cover?" />
            </label>

            <div className="flex flex-wrap gap-3">
              <Button color="orange" className="cursor-pointer">
                Save draft
              </Button>
              <Button color="green" className="cursor-pointer">
                Send to review
              </Button>
            </div>
          </form>
        </div>
      </RightDrawer>
    </div>
  )
}
