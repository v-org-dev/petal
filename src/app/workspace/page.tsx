'use client'

const stats = [
  { name: 'Total Conversations', value: '2,651', change: '+12%', changeType: 'positive' },
  { name: 'Avg Response Time', value: '1.2min', change: '-8%', changeType: 'positive' },
  { name: 'Resolution Rate', value: '94.5%', change: '+2.3%', changeType: 'positive' },
  { name: 'Customer Satisfaction', value: '4.8/5', change: '+0.2', changeType: 'positive' },
]

export default function OverviewPage() {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Overview</h1>
        <p className="mt-2 text-sm text-gray-700">
          Welcome back! Here's what's happening with your support team today.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-8">
        <h3 className="text-base font-semibold text-gray-900">Today's metrics</h3>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow-sm ring-1 ring-gray-200 sm:px-6"
            >
              <dt className="truncate text-sm font-medium text-gray-500">{stat.name}</dt>
              <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-gray-900">
                  {stat.value}
                </div>
                <div
                  className={`inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0 ${
                    stat.changeType === 'positive'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {stat.change}
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Recent activity section */}
      <div>
        <h3 className="text-base font-semibold text-gray-900">Quick actions</h3>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="/workspace/inbox"
            className="relative flex items-center space-x-3 rounded-lg border border-gray-200 bg-white px-6 py-5 shadow-sm hover:border-gray-300"
          >
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900">View Inbox</p>
              <p className="truncate text-sm text-gray-500">12 unread messages</p>
            </div>
          </a>
          <a
            href="/workspace/knowledge-base"
            className="relative flex items-center space-x-3 rounded-lg border border-gray-200 bg-white px-6 py-5 shadow-sm hover:border-gray-300"
          >
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900">Knowledge Base</p>
              <p className="truncate text-sm text-gray-500">Manage articles</p>
            </div>
          </a>
          <a
            href="/workspace/suggestions"
            className="relative flex items-center space-x-3 rounded-lg border border-gray-200 bg-white px-6 py-5 shadow-sm hover:border-gray-300"
          >
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900">AI Suggestions</p>
              <p className="truncate text-sm text-gray-500">3 new suggestions</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
