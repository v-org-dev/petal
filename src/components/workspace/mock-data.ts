// Mock data for all dashboard pages

// ============ STATS DATA ============

export const overviewStats = [
  {
    title: 'Active Conversations',
    value: '47',
    change: { value: '+12%', trend: 'up' as const },
    description: 'vs last week',
  },
  {
    title: 'Pending Reviews',
    value: '23',
    change: { value: '-8%', trend: 'down' as const },
    description: 'vs last week',
  },
  {
    title: 'Resolved Today',
    value: '156',
    change: { value: '+24%', trend: 'up' as const },
    description: 'vs yesterday',
  },
  {
    title: 'Avg Response Time',
    value: '2.4m',
    change: { value: '-15%', trend: 'down' as const },
    description: 'vs last week',
  },
]

export const channelStats = [
  {
    title: 'Active Channels',
    value: '4',
    description: 'Live and running',
  },
  {
    title: 'Messages Today',
    value: '335',
    change: { value: '+18%', trend: 'up' as const },
    description: 'vs yesterday',
  },
  {
    title: 'Avg Response Time',
    value: '1.8m',
    change: { value: '-12%', trend: 'down' as const },
    description: 'vs last week',
  },
  {
    title: 'Coverage',
    value: '24/7',
    description: 'All channels',
  },
]

// ============ CONVERSATIONS DATA ============

export const conversations = [
  {
    id: 1,
    user: {
      name: 'Emma Wilson',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      initials: 'EW',
    },
    subject: 'Need help with shipping costs',
    preview: 'I noticed the shipping fee is quite high...',
    status: 'needs_review' as const,
    queue: 'needs_review' as const,
    timestamp: '2h ago',
    dateTime: '2024-01-20T10:00:00',
  },
  {
    id: 2,
    user: {
      name: 'Michael Chen',
      avatar:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      initials: 'MC',
    },
    subject: 'Product return request',
    preview: 'I would like to return my recent order...',
    status: 'awaiting_approval' as const,
    queue: 'awaiting_approval' as const,
    timestamp: '4h ago',
    dateTime: '2024-01-20T08:00:00',
  },
  {
    id: 3,
    user: {
      name: 'Sarah Johnson',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      initials: 'SJ',
    },
    subject: 'Question about warranty',
    preview: 'Does this product come with warranty?',
    status: 'follow_up' as const,
    queue: 'follow_up' as const,
    timestamp: '1d ago',
    dateTime: '2024-01-19T12:00:00',
  },
  {
    id: 4,
    user: {
      name: 'David Park',
      avatar: null,
      initials: 'DP',
    },
    subject: 'Payment issue',
    preview: 'My payment was declined but I was charged...',
    status: 'needs_review' as const,
    queue: 'needs_review' as const,
    timestamp: '3h ago',
    dateTime: '2024-01-20T09:00:00',
  },
  {
    id: 5,
    user: {
      name: 'Lisa Martinez',
      avatar:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      initials: 'LM',
    },
    subject: 'Bulk order inquiry',
    preview: 'Interested in placing a bulk order...',
    status: 'awaiting_approval' as const,
    queue: 'awaiting_approval' as const,
    timestamp: '5h ago',
    dateTime: '2024-01-20T07:00:00',
  },
  {
    id: 6,
    user: {
      name: 'James Lee',
      avatar: null,
      initials: 'JL',
    },
    subject: 'Delivery delay',
    preview: 'My order was supposed to arrive yesterday...',
    status: 'follow_up' as const,
    queue: 'follow_up' as const,
    timestamp: '2d ago',
    dateTime: '2024-01-18T14:00:00',
  },
]

export const messageThreads = {
  1: [
    {
      id: 1,
      sender: 'customer',
      content: 'I noticed the shipping fee is quite high for my recent order. Is there any way to reduce this cost?',
      timestamp: '2h ago',
    },
    {
      id: 2,
      sender: 'agent',
      content:
        'Thank you for reaching out. Let me check the shipping options available for your location. One moment please.',
      timestamp: '1h 45m ago',
    },
  ],
}

// ============ KNOWLEDGE BASE DATA ============

export const articles = [
  {
    id: 1,
    title: 'Getting Started Guide',
    status: 'live' as const,
    author: {
      name: 'Alice Cooper',
      avatar: null,
      initials: 'AC',
    },
    updated: '2h ago',
    dateTime: '2024-01-20T10:00:00',
    views: 1234,
    category: 'Documentation',
  },
  {
    id: 2,
    title: 'Pricing and Plans',
    status: 'live' as const,
    author: {
      name: 'Bob Smith',
      avatar: null,
      initials: 'BS',
    },
    updated: '1d ago',
    dateTime: '2024-01-19T12:00:00',
    views: 2156,
    category: 'Billing',
  },
  {
    id: 3,
    title: 'Return Policy',
    status: 'review' as const,
    author: {
      name: 'Carol White',
      avatar: null,
      initials: 'CW',
    },
    updated: '3d ago',
    dateTime: '2024-01-17T09:00:00',
    views: 845,
    category: 'Policies',
  },
  {
    id: 4,
    title: 'Shipping Information',
    status: 'draft' as const,
    author: {
      name: 'David Brown',
      avatar: null,
      initials: 'DB',
    },
    updated: '5d ago',
    dateTime: '2024-01-15T14:00:00',
    views: 0,
    category: 'Shipping',
  },
  {
    id: 5,
    title: 'Account Security',
    status: 'live' as const,
    author: {
      name: 'Eve Taylor',
      avatar: null,
      initials: 'ET',
    },
    updated: '1w ago',
    dateTime: '2024-01-13T11:00:00',
    views: 3421,
    category: 'Security',
  },
]

export const sources = [
  {
    id: 1,
    name: 'Product Documentation',
    type: 'Web Scrape' as const,
    url: 'https://example.com/docs',
    lastSync: '1h ago',
    articles: 45,
  },
  {
    id: 2,
    name: 'FAQ Database',
    type: 'CSV Import' as const,
    url: null,
    lastSync: '1d ago',
    articles: 23,
  },
  {
    id: 3,
    name: 'Support Tickets',
    type: 'Integration' as const,
    url: null,
    lastSync: '30m ago',
    articles: 156,
  },
]

export const reviewQueue = [
  {
    id: 1,
    title: 'Updated refund policy',
    author: {
      name: 'Frank Miller',
      initials: 'FM',
    },
    type: 'Update' as const,
    submittedAt: '2h ago',
  },
  {
    id: 2,
    title: 'New product category FAQ',
    author: {
      name: 'Grace Davis',
      initials: 'GD',
    },
    type: 'New' as const,
    submittedAt: '5h ago',
  },
  {
    id: 3,
    title: 'Shipping zones expansion',
    author: {
      name: 'Henry Wilson',
      initials: 'HW',
    },
    type: 'Update' as const,
    submittedAt: '1d ago',
  },
]

// ============ AI SUGGESTIONS DATA ============

export const suggestions = [
  {
    id: 1,
    suggestion: 'Add pricing tier comparison table',
    source: 'Chat',
    status: 'new' as const,
    priority: 'high' as const,
    frequency: 12,
    lastSeen: '1h ago',
  },
  {
    id: 2,
    suggestion: 'Update return policy timeframe',
    source: 'Email',
    status: 'needs_approval' as const,
    priority: 'medium' as const,
    frequency: 8,
    lastSeen: '3h ago',
  },
  {
    id: 3,
    suggestion: 'Clarify international shipping',
    source: 'Chat',
    status: 'backlog' as const,
    priority: 'low' as const,
    frequency: 5,
    lastSeen: '1d ago',
  },
  {
    id: 4,
    suggestion: 'Add bulk order discount info',
    source: 'Email',
    status: 'new' as const,
    priority: 'high' as const,
    frequency: 15,
    lastSeen: '2h ago',
  },
  {
    id: 5,
    suggestion: 'Create warranty registration guide',
    source: 'Chat',
    status: 'new' as const,
    priority: 'medium' as const,
    frequency: 7,
    lastSeen: '4h ago',
  },
  {
    id: 6,
    suggestion: 'Update payment methods list',
    source: 'Social',
    status: 'needs_approval' as const,
    priority: 'low' as const,
    frequency: 3,
    lastSeen: '2d ago',
  },
  {
    id: 7,
    suggestion: 'Add gift wrapping options',
    source: 'Chat',
    status: 'backlog' as const,
    priority: 'low' as const,
    frequency: 4,
    lastSeen: '3d ago',
  },
]

// ============ TEAM DATA ============

export const teamMembers = [
  {
    id: 1,
    name: 'Alice Cooper',
    email: 'alice@petal.com',
    role: 'owner' as const,
    status: 'active' as const,
    avatar: null,
    initials: 'AC',
    joined: 'Jan 2024',
    lastActive: '5m ago',
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@petal.com',
    role: 'admin' as const,
    status: 'active' as const,
    avatar: null,
    initials: 'BS',
    joined: 'Jan 2024',
    lastActive: '1h ago',
  },
  {
    id: 3,
    name: 'Carol White',
    email: 'carol@petal.com',
    role: 'reviewer' as const,
    status: 'active' as const,
    avatar: null,
    initials: 'CW',
    joined: 'Feb 2024',
    lastActive: '2h ago',
  },
  {
    id: 4,
    name: 'David Brown',
    email: 'david@petal.com',
    role: 'reviewer' as const,
    status: 'active' as const,
    avatar: null,
    initials: 'DB',
    joined: 'Feb 2024',
    lastActive: '3h ago',
  },
  {
    id: 5,
    name: 'Eve Taylor',
    email: 'eve@petal.com',
    role: 'agent' as const,
    status: 'invited' as const,
    avatar: null,
    initials: 'ET',
    joined: 'Invited',
    lastActive: 'Never',
  },
  {
    id: 6,
    name: 'Frank Miller',
    email: 'frank@petal.com',
    role: 'agent' as const,
    status: 'active' as const,
    avatar: null,
    initials: 'FM',
    joined: 'Mar 2024',
    lastActive: '10m ago',
  },
  {
    id: 7,
    name: 'Grace Davis',
    email: 'grace@petal.com',
    role: 'agent' as const,
    status: 'active' as const,
    avatar: null,
    initials: 'GD',
    joined: 'Mar 2024',
    lastActive: '30m ago',
  },
  {
    id: 8,
    name: 'Henry Wilson',
    email: 'henry@petal.com',
    role: 'agent' as const,
    status: 'inactive' as const,
    avatar: null,
    initials: 'HW',
    joined: 'Jan 2024',
    lastActive: '2w ago',
  },
]

// ============ CHANNELS DATA ============

export const channels = [
  {
    id: 1,
    name: 'Web Chat',
    type: 'web' as const,
    status: 'live' as const,
    messagestoday: 234,
    avgResponseTime: '1.2m',
    deployUrl: 'chat.petal.com',
    description: 'Live chat widget on website',
  },
  {
    id: 2,
    name: 'Email',
    type: 'email' as const,
    status: 'live' as const,
    messagestoday: 89,
    avgResponseTime: '2.5m',
    deployUrl: null,
    description: 'support@petal.com',
  },
  {
    id: 3,
    name: 'Social Media',
    type: 'social' as const,
    status: 'queued' as const,
    messagestoday: 12,
    avgResponseTime: '5.2m',
    deployUrl: null,
    description: 'Facebook, Twitter integration',
  },
  {
    id: 4,
    name: 'Voice',
    type: 'voice' as const,
    status: 'planned' as const,
    messagestoday: 0,
    avgResponseTime: null,
    deployUrl: null,
    description: 'Phone support (coming soon)',
  },
]

// ============ SETTINGS DATA ============

export const workspaceSettings = {
  basics: {
    workspaceName: 'Petal Support',
    displayUrl: 'petal.com',
    description: 'Customer support workspace for Petal',
  },
  branding: {
    primaryColor: '#6366f1',
    logo: null,
  },
  notifications: {
    email: true,
    slack: false,
    webhook: '',
  },
  security: {
    twoFactor: true,
    sessionTimeout: 30,
    ipWhitelist: [],
  },
  api: {
    keys: [
      {
        id: 1,
        name: 'Production API Key',
        key: 'pk_live_••••••••••••1234',
        created: '2024-01-15',
        lastUsed: '2024-01-20',
      },
      {
        id: 2,
        name: 'Development API Key',
        key: 'pk_test_••••••••••••5678',
        created: '2024-01-10',
        lastUsed: '2024-01-19',
      },
    ],
  },
}
