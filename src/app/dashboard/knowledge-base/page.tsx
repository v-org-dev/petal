'use client'

import { useState } from 'react'
import { Heading } from '@/components/ui/catalyst/heading'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/catalyst/table'
import { Avatar } from '@/components/ui/catalyst/avatar'
import { Badge } from '@/components/ui/catalyst/badge'
import { Button } from '@/components/ui/catalyst/button'
import { Divider } from '@/components/ui/catalyst/divider'
import { DescriptionDetails, DescriptionList, DescriptionTerm } from '@/components/ui/catalyst/description-list'
import { Pagination, PaginationList, PaginationNext, PaginationPage, PaginationPrevious } from '@/components/ui/catalyst/pagination'
import RightDrawer from '@/components/ui/catalyst/drawer'
import { articles } from '@/components/dashboard/mock-data'

const tabs = [
  { name: 'Overview', value: 'overview' },
  { name: 'Sources', value: 'sources' },
  { name: 'Articles', value: 'articles' },
  { name: 'Review', value: 'review' },
]

export default function KnowledgeBasePage() {
  const [activeTab, setActiveTab] = useState('articles')
  const [selectedArticle, setSelectedArticle] = useState(articles[0])
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [uploadDrawerOpen, setUploadDrawerOpen] = useState(false)

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'green'
      case 'draft':
        return 'amber'
      case 'review':
        return 'blue'
      default:
        return 'zinc'
    }
  }

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <Heading>Knowledge Base</Heading>
          <p className="mt-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
            Manage your knowledge base articles and content
          </p>
        </div>
        <Button color="indigo" onClick={() => setUploadDrawerOpen(true)}>
          Upload Content
        </Button>
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
      {activeTab === 'articles' && (
        <div>
          {/* Articles Table */}
          <div>
            <Table striped>
              <TableHead>
                <TableRow>
                  <TableHeader>Title</TableHeader>
                  <TableHeader>Author</TableHeader>
                  <TableHeader>Status</TableHeader>
                  <TableHeader>Updated</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {articles.map((article) => (
                  <TableRow
                    key={article.id}
                    onClick={() => {
                      setSelectedArticle(article)
                      setDrawerOpen(true)
                    }}
                    className="cursor-pointer"
                  >
                    <TableCell className="font-medium">
                      <div>{article.title}</div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400">{article.category}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar
                          src={article.author.avatar}
                          initials={article.author.initials}
                          className="size-6"
                        />
                        <span className="text-sm">{article.author.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge color={getStatusBadgeColor(article.status) as any}>
                        {article.status.charAt(0).toUpperCase() + article.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-zinc-500">{article.updated}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Pagination className="mt-6">
              <PaginationPrevious href={null} />
              <PaginationList>
                <PaginationPage href="#" current>
                  1
                </PaginationPage>
                <PaginationPage href="#">2</PaginationPage>
              </PaginationList>
              <PaginationNext href="#" />
            </Pagination>
          </div>

          {/* Article Preview Drawer */}
          <RightDrawer
            open={drawerOpen}
            onClose={setDrawerOpen}
            title="Article Preview"
            maxWidth="lg"
          >
            {selectedArticle && (
              <div className="space-y-6">
                <div>
                  <div className="text-lg font-semibold text-zinc-950 dark:text-white">
                    {selectedArticle.title}
                  </div>
                  <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                    {selectedArticle.category}
                  </div>
                </div>

                <DescriptionList>
                  <DescriptionTerm>Status</DescriptionTerm>
                  <DescriptionDetails>
                    <Badge color={getStatusBadgeColor(selectedArticle.status) as any}>
                      {selectedArticle.status.charAt(0).toUpperCase() + selectedArticle.status.slice(1)}
                    </Badge>
                  </DescriptionDetails>

                  <DescriptionTerm>Author</DescriptionTerm>
                  <DescriptionDetails>
                    <div className="flex items-center gap-2">
                      <Avatar
                        src={selectedArticle.author.avatar}
                        initials={selectedArticle.author.initials}
                        className="size-6"
                      />
                      <span>{selectedArticle.author.name}</span>
                    </div>
                  </DescriptionDetails>

                  <DescriptionTerm>Last Updated</DescriptionTerm>
                  <DescriptionDetails>{selectedArticle.updated}</DescriptionDetails>

                  <DescriptionTerm>Views</DescriptionTerm>
                  <DescriptionDetails>
                    {selectedArticle.views.toLocaleString()} views
                  </DescriptionDetails>

                  <DescriptionTerm>Category</DescriptionTerm>
                  <DescriptionDetails>{selectedArticle.category}</DescriptionDetails>
                </DescriptionList>

                <div>
                  <Divider soft />
                  <div className="mt-4">
                    <div className="text-sm font-medium text-zinc-950 dark:text-white mb-3">
                      Content Preview
                    </div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">
                      This is a preview of the article content. The full article would be displayed here with
                      formatting and media.
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button outline className="flex-1">Edit</Button>
                  <Button color="indigo" className="flex-1">Publish</Button>
                </div>
              </div>
            )}
          </RightDrawer>
        </div>
      )}

      {/* Other tabs placeholder */}
      {activeTab !== 'articles' && (
        <div className="text-center py-12">
          <p className="text-zinc-500 dark:text-zinc-400">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} content coming soon
          </p>
        </div>
      )}

      {/* Upload Content Drawer */}
      <RightDrawer
        open={uploadDrawerOpen}
        onClose={setUploadDrawerOpen}
        title="Upload Content"
        maxWidth="md"
      >
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-zinc-950 dark:text-white mb-2">
              Title
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
              placeholder="Enter article title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-950 dark:text-white mb-2">
              Category
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
              placeholder="e.g., Getting Started, Billing"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-950 dark:text-white mb-2">
              Content
            </label>
            <textarea
              rows={8}
              className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
              placeholder="Write your article content..."
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button outline className="flex-1" onClick={() => setUploadDrawerOpen(false)}>
              Cancel
            </Button>
            <Button color="indigo" className="flex-1">
              Upload
            </Button>
          </div>
        </div>
      </RightDrawer>
    </div>
  )
}
