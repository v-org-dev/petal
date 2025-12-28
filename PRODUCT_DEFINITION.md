# Product Definition Document
# AI-Powered Customer Service Platform

**Version**: 1.0
**Date**: December 28, 2025
**Status**: MVP Planning

---
TL,DR,
我想做一个类似于docsbot的轻量客服，然后我们主要是根据公司的知识库会大一些答案，然后会根据对话内容不断的新增或者优化知识库（主要亮点，注意，需要人来筛选其中的内容），然后也有客服saas的整合，就是把文本渠道整合，包含webchat，facebook和email。

## Executive Summary

We are building an AI-native customer service platform specifically designed for SMB e-commerce companies. Unlike traditional helpdesks (Zendesk, Intercom) that add AI as an afterthought, and unlike pure chatbots (DocsBot) that lack human support capabilities, our platform combines intelligent automation with seamless human handoff and a self-evolving knowledge base.

**The Core Problem**: Small e-commerce businesses can't afford 24/7 customer support, leading to lost sales and poor customer experience. Traditional helpdesk software is too expensive and complex, while simple chatbots frustrate customers with wrong answers.

**Our Solution**: A hybrid AI-first platform that handles 40%+ of customer inquiries automatically while continuously learning from every conversation to improve its knowledge base. When AI can't help, human agents seamlessly take over.

**Key Differentiator**: Our self-evolving knowledge base automatically detects gaps, identifies outdated answers, and suggests improvements daily. The system gets smarter with every customer interaction, reducing the manual work of maintaining FAQs and documentation.

**Target Market**: SMB e-commerce companies ($100K-$5M revenue) with 10-100 daily customer inquiries, limited support teams (0-3 people), and a need for 24/7 availability without enterprise-level costs.

---

## 1. Product Overview

### 1.1 What is [Product Name]?

[Product Name] is an AI-native customer service platform built specifically for e-commerce businesses. It combines three critical capabilities:

1. **Intelligent AI Automation**: Answers customer questions 24/7 using advanced RAG (Retrieval-Augmented Generation) technology powered by GPT-4/Claude, trained on your product documentation, FAQs, and past conversations.

2. **Human-in-the-Loop Support**: When AI encounters complex questions or low-confidence scenarios, it seamlessly escalates to human agents with full conversation context and a simple ticket queue.

3. **Self-Evolving Knowledge Base**: Automatically analyzes every conversation to detect knowledge gaps, identify outdated information, and suggest improvements. Your knowledge base gets better every day without manual effort.

### 1.2 Core Value Proposition

**For E-commerce Business Owners:**
- Provide 24/7 customer support without hiring night shifts
- Reduce support costs by 30-40% while improving response times
- Never lose a sale due to unanswered questions during off-hours
- Scale support capacity during peak seasons without proportional cost increases

**For Support Managers:**
- Handle higher inquiry volumes with the same team size
- Focus human agents on complex, high-value interactions
- Continuously improve support quality through automatic knowledge optimization
- Get actionable insights on customer pain points and knowledge gaps

**For End Customers:**
- Instant answers to common questions (order status, returns, shipping)
- Consistent, accurate information across all channels
- Seamless escalation to humans when needed
- Support available across web chat, email, WhatsApp, and Facebook

### 1.3 Product Positioning

**We are NOT:**
- ❌ A full-featured helpdesk replacement (not competing with Zendesk's 100+ features)
- ❌ A pure AI chatbot without human support (not just DocsBot with more channels)
- ❌ A general-purpose customer service platform for all industries

**We ARE:**
- ✅ An AI-first support platform with human fallback capabilities
- ✅ Focused specifically on e-commerce use cases and workflows
- ✅ Built for businesses that need automation but can't eliminate human support
- ✅ The only platform where the knowledge base improves itself automatically

**Market Position:**

| Feature | DocsBot | Intercom | Zendesk | **Our Platform** |
|---------|---------|----------|---------|------------------|
| AI Q&A | ✅ Excellent | ⚠️ Add-on | ⚠️ Add-on | ✅ Core feature |
| Human Handoff | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes |
| Multi-channel | ⚠️ Widget only | ✅ Yes | ✅ Yes | ✅ Web, Email, WhatsApp, FB |
| Self-evolving KB | ❌ No | ❌ No | ❌ No | ✅ **Unique** |
| E-commerce Focus | ❌ Generic | ⚠️ Broad | ❌ Generic | ✅ **Specialized** |
| Pricing | $19-199/mo | $39-99/seat | $19-99/seat | $99-599/mo usage-based |
| Best For | Docs sites | Product teams | Enterprise | **SMB E-commerce** |

---

## 2. Target Market & Users

### 2.1 Primary Target Segment

**SMB E-commerce Companies** with the following characteristics:

**Company Profile:**
- Annual revenue: $100K - $5M
- Customer inquiry volume: 10-100 per day
- Current support team: 0-3 people (often the founder or part-time staff)
- Channels: Website, email, social media
- Pain points:
  - Losing sales due to unanswered questions after business hours
  - Can't justify hiring full-time support staff yet
  - Spending too much time on repetitive questions
  - Knowledge scattered across email, docs, and people's heads
  - Scaling support costs linearly with growth

**Example Customer Profiles:**
1. **Shopify Store Owner** ($500K annual revenue)
   - Selling consumer goods (fashion, home, beauty)
   - 30-50 inquiries/day about sizing, shipping, returns
   - Solo founder + 1 VA handling support part-time
   - Needs 24/7 availability to compete with larger brands

2. **D2C Brand** ($2M annual revenue)
   - Niche products with detailed product questions
   - 50-100 inquiries/day, peaks during launches
   - 2 support staff struggling during peak times
   - High-quality support is part of brand identity

3. **Multi-Channel Retailer** ($1.5M annual revenue)
   - Selling on website + Amazon + social commerce
   - Inquiries coming via email, Facebook, WhatsApp
   - 1 support manager drowning in messages across platforms
   - Needs unified inbox and automation

### 2.2 Geographic Focus

**Phase 1: English-Speaking Markets** (MVP)
- United States
- United Kingdom
- Australia
- Canada

**Rationale:**
- Largest e-commerce markets
- Homogeneous language (single AI model)
- Higher willingness to pay for SaaS
- Established payment infrastructure

**Phase 2: GCC Region** (Post-MVP)
- UAE, Saudi Arabia, Qatar
- Bilingual support (English/Arabic)
- Rapidly growing e-commerce sector
- Less competitive landscape
- Strong WhatsApp adoption aligns with our channels

### 2.3 User Personas

**Persona 1: The Solo Founder**
- **Role:** Owner-operator of small e-commerce store
- **Goals:**
  - Provide professional support without hiring
  - Compete with larger brands on customer service
  - Focus time on product/marketing, not repetitive questions
- **Pain Points:**
  - Waking up to 10+ emails asking the same questions
  - Missing sales because no one answered weekend inquiries
  - Can't afford $2K/month for a full-time support person
- **Success Metric:** "I can focus on growing my business instead of answering 'where's my order' all day"

**Persona 2: The Support Manager**
- **Role:** Leads small support team (1-3 people)
- **Goals:**
  - Handle growing inquiry volume without hiring
  - Improve response times and consistency
  - Reduce agent burnout from repetitive questions
- **Pain Points:**
  - Team spending 60% of time on routine questions
  - Inconsistent answers depending on which agent responds
  - No time to update documentation
  - Can't provide 24/7 coverage with current team
- **Success Metric:** "My team handles 2x the volume with the same headcount and better CSAT"

**Persona 3: The End Customer**
- **Demographics:** E-commerce shoppers across age groups
- **Needs:**
  - Quick answer to a specific question (especially pre-purchase)
  - Order status updates without waiting
  - Easy returns/exchanges process
  - Help outside business hours
- **Pain Points:**
  - Waiting 24+ hours for email response
  - Dumb chatbots that don't understand questions
  - Having to repeat information when escalated to human
- **Success Metric:** "I got my answer in under a minute and could complete my purchase"

---

## 3. Core Features

### 3.1 MVP Features (Must-Have)

#### Feature 1: AI Knowledge Base Q&A

**Description:**
Intelligent question-answering system powered by RAG (Retrieval-Augmented Generation) that pulls information from your knowledge base to answer customer questions naturally.

**Key Capabilities:**
- **Document Ingestion:** Upload help articles, FAQs, product docs (PDF, Markdown, plain text, URLs)
- **Automatic Vectorization:** Content is automatically chunked and embedded using OpenAI embeddings
- **Contextual Retrieval:** Finds relevant information even when questions are phrased differently
- **Natural Responses:** Generates human-like answers, not just keyword matches
- **Confidence Scoring:** Every answer includes a confidence score (0-100%)
- **Source Attribution:** Shows which articles/docs were used to generate the answer
- **Multi-turn Conversations:** Maintains context across multiple back-and-forth messages

**E-commerce Use Cases:**
- "What's your return policy?" → Pulls from returns page
- "Do you ship to Canada?" → Checks shipping documentation
- "Where is my order #12345?" → (Low confidence, escalates to human)
- "What size should I get if I'm 5'10"?" → References sizing guide

**Technical Implementation:**
- Supabase pgvector for embeddings storage
- OpenAI `text-embedding-3-small` for vectorization
- GPT-4 for answer generation
- Confidence threshold: <70% = auto-escalate

**Success Metric:** 40% of inquiries resolved end-to-end by AI without human intervention

---

#### Feature 2: Self-Evolving Knowledge Base ⭐

**Description:**
The core differentiator. The system automatically analyzes conversations to detect knowledge gaps, outdated information, and improvement opportunities, then suggests specific updates.

**How It Works:**

**Daily Analysis Pipeline:**
1. **Gap Detection:**
   - Identifies questions where AI had low confidence (<70%)
   - Clusters similar unanswered questions
   - Detects topics missing from knowledge base
   - Example output: "15 customers asked about 'wholesale pricing' but no KB article exists"

2. **Quality Monitoring:**
   - Tracks which answers receive negative feedback
   - Identifies articles with high escalation rates
   - Detects outdated information (e.g., old return policy still referenced)
   - Example output: "Article KB-047 has 60% negative feedback, suggest review"

3. **Improvement Suggestions:**
   - AI generates draft articles for detected gaps
   - Suggests specific edits to existing articles
   - Recommends deprecating unused content
   - Example output: "Draft FAQ: 'Do you offer wholesale pricing?' [AI-generated draft]"

**Human Review Workflow:**
- Daily/weekly email with suggested changes
- Web dashboard showing all suggestions with context
- One-click approve/reject/edit interface
- Tracks improvement impact (reduction in similar questions)

**Key Metrics Dashboard:**
- Knowledge base health score (0-100)
- Gaps closed this week
- Articles improved
- Reduction in escalations for improved topics

**Why This Matters:**
- Research shows 61% of companies have outdated knowledge bases (Gartner)
- Manual KB maintenance takes 5-10 hours/week for support teams
- Our system reduces this to 30 minutes of review time
- Knowledge base improves continuously without dedicated resources

**Success Metric:** 10+ actionable suggestions per week, 50% approval rate, 20% monthly reduction in "no answer" responses

---

#### Feature 3: Multi-Channel Integration

**Description:**
Unified customer communication across multiple channels with consistent AI support everywhere.

**Supported Channels (MVP):**

**1. Web Chat Widget**
- Embeddable JavaScript widget
- Customizable colors/position
- Appears on all pages or specific URLs
- Shows agent typing indicators
- File upload support (for returns, issues)
- Mobile-responsive

**2. Email Support**
- Forward support@ emails to platform
- AI responds via email
- Maintains conversation threading
- Escalates complex emails to inbox
- Email signature with branding

**3. WhatsApp Business API**
- Official Business API integration
- Supports rich messages (images, buttons)
- Session management (24hr window)
- Important for GCC markets

**4. Facebook Messenger**
- Facebook Page integration
- Responds to messages automatically
- Maintains conversation history
- Works with Instagram DMs (same API)

**Unified Inbox:**
- All channels feed into single queue
- Conversation history preserved across channels
- Customer identified by email/phone (merged profiles)
- Agents see which channel customer prefers

**Technical Implementation:**
- Web widget: React component + WebSocket
- Email: Inbound webhook (SendGrid/Postmark)
- WhatsApp: Meta Business Platform API
- Facebook: Graph API webhooks
- Message router: Supabase Edge Functions

**Success Metric:** Support 3 channels in MVP, <5-second message delivery across all channels

---

#### Feature 4: Human Handoff & Basic Ticketing

**Description:**
Seamless transition from AI to human agents with simple but functional ticket management.

**Escalation Triggers:**
- AI confidence score <70%
- Customer explicitly requests human ("talk to a person")
- Sentiment detection (customer frustrated/angry)
- Specific keywords ("refund," "complaint," "manager")
- AI attempts 3+ responses without resolution

**Handoff Experience:**
- **For Customer:** "I'll connect you with a team member. You won't need to repeat anything."
- **For Agent:** Full conversation history visible, AI's attempted responses shown, suggested actions if available

**Simple Ticket Queue:**
- **Statuses:** Pending → In Progress → Resolved → Closed
- **Priority Levels:** High, Medium, Low (auto-assigned based on keywords/sentiment)
- **Assignment:** Manual assignment or round-robin
- **SLA Tracking:** Time to first response, time to resolution (displayed, not enforced)

**Agent Interface:**
- Left sidebar: Ticket queue filtered by status/assignment
- Center: Conversation view with full history
- Right sidebar: Customer profile, past conversations, suggested responses

**Key Features:**
- Internal notes (not visible to customer)
- Canned responses library
- Conversation tags for categorization
- Basic search (by customer name, order #, keyword)

**What's NOT Included (MVP):**
- ❌ Complex routing rules
- ❌ Team permissions/roles
- ❌ SLA enforcement/alerts
- ❌ Ticket automation/macros
- ❌ Collaboration (multiple agents on same ticket)

**Success Metric:** 100% of escalations successfully transferred with context, average agent response time <10 minutes during business hours

---

#### Feature 5: Analytics Dashboard

**Description:**
Simple but actionable metrics showing AI performance, team efficiency, and customer satisfaction.

**Core Metrics:**

**1. Resolution Overview**
- Total conversations this week/month
- AI-resolved (no human needed): X%
- Human-resolved: Y%
- Unresolved/abandoned: Z%
- Trend graph over time

**2. Response Time**
- Average AI response time (target: <30 seconds)
- Average human first response time
- Average resolution time
- By channel breakdown

**3. Top Questions**
- Most asked questions (last 7/30 days)
- Color-coded by resolution type (AI/human/unresolved)
- Identifies opportunities for KB improvement

**4. Knowledge Base Health**
- Total articles: X
- Articles used this month: Y
- Articles with high negative feedback
- Gaps detected this week
- Improvement suggestions pending review

**5. Customer Satisfaction**
- Post-conversation rating (1-5 stars)
- CSAT score by channel
- CSAT for AI vs human interactions
- Recent negative feedback with context

**6. Channel Performance**
- Volume by channel
- Resolution rate by channel
- Customer preference trends

**Exports:**
- CSV export for any metric
- Weekly email summary to owner/manager

**What's NOT Included (MVP):**
- ❌ Custom reports builder
- ❌ Advanced segmentation
- ❌ Funnel analysis
- ❌ Integration with Google Analytics
- ❌ A/B testing

**Success Metric:** All core metrics update in real-time, dashboard loads in <2 seconds

---

### 3.2 Features Explicitly Excluded from MVP

These features are commonly requested but intentionally excluded to ship in 3 months:

| Feature | Why Excluded | Possible Future |
|---------|--------------|-----------------|
| Voice/Phone Support | Complex infrastructure, different AI models needed, high operating costs | Phase 2 (6-12 months) |
| Multi-language Support | Each language needs separate models, testing, and support resources | Start with English, add Spanish in Phase 2 |
| Advanced Workflow Automation | Requires visual workflow builder, complex logic, extensive testing | Post-MVP if customers request |
| Team Collaboration Tools | Internal chat, @mentions, ticket assignments across teams adds complexity | Keep simple assignment only |
| CRM/ERP Integrations | Shopify, Salesforce, etc. each take weeks to build and test | Start with webhooks/Zapier |
| Custom Branding (White-label) | Needs theme builder, multi-tenancy complexity | Offer in Enterprise tier later |
| Mobile Apps | Requires iOS/Android development, app store management | Web is mobile-responsive |
| Public API | Needs documentation, versioning, rate limiting, developer support | Phase 2 if requested |
| Advanced Permissions/Roles | Admin, agent, viewer roles with granular permissions | Keep simple: owner + agents |
| SLA Management | Automatic escalations, SLA breach alerts, scheduling | Display metrics only |

**Decision Criteria:** If it doesn't directly help an e-commerce store answer customer questions faster/better, it's out of MVP.

---

## 4. Technical Architecture

### 4.1 High-Level Technology Stack

**Frontend:**
- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4
- **Components:** Headless UI
- **Forms:** React Hook Form + Zod validation
- **Real-time:** Supabase Realtime (WebSockets)

**Backend:**
- **Runtime:** Next.js API Routes (Edge Functions where possible)
- **Database:** PostgreSQL (Supabase)
- **Auth:** Supabase Auth
- **Storage:** Supabase Storage (for file uploads)
- **Background Jobs:** Supabase Edge Functions + pg_cron

**AI/ML:**
- **LLM:** OpenAI GPT-4 (primary), Anthropic Claude (fallback)
- **Embeddings:** OpenAI `text-embedding-3-small`
- **Vector Database:** Supabase pgvector extension
- **RAG Framework:** Custom implementation (LangChain too heavy for MVP)

**Integrations:**
- **Email:** SendGrid (inbound parsing + outbound)
- **WhatsApp:** Meta Business Platform API
- **Facebook:** Graph API
- **Payments:** Stripe

**Infrastructure:**
- **Hosting:** Vercel (Next.js)
- **Database:** Supabase (managed PostgreSQL)
- **CDN:** Vercel Edge Network
- **Monitoring:** Vercel Analytics + Sentry

### 4.2 System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         Customer Channels                        │
├──────────────┬──────────────┬──────────────┬────────────────────┤
│ Web Widget   │    Email     │   WhatsApp   │  Facebook Messenger│
└──────┬───────┴──────┬───────┴──────┬───────┴──────┬─────────────┘
       │              │              │              │
       └──────────────┴──────────────┴──────────────┘
                       │
              ┌────────▼────────┐
              │ Message Router  │ ◄── Unified ingestion
              │ (Edge Function) │
              └────────┬────────┘
                       │
       ┌───────────────┴───────────────┐
       │                               │
┌──────▼──────┐               ┌────────▼────────┐
│   AI Agent  │               │  Human Agent    │
│  Pipeline   │               │   Interface     │
└──────┬──────┘               └────────┬────────┘
       │                               │
       │  ┌─────────────────┐          │
       └──► Knowledge Base  │◄─────────┘
          │   (pgvector)    │
          └────────┬────────┘
                   │
          ┌────────▼────────┐
          │ Evolution Engine│ ◄── Analyzes conversations
          │  (Daily Batch)  │
          └────────┬────────┘
                   │
          ┌────────▼────────┐
          │  Suggestions    │
          │  Review Queue   │
          └─────────────────┘
```

### 4.3 Key Technical Components

#### Component 1: Knowledge Base Engine

**Purpose:** Store, retrieve, and manage company knowledge for AI responses.

**Subcomponents:**
- **Document Processor:** Ingests files (PDF, MD, TXT), extracts text, chunks into ~500 token segments
- **Embedding Generator:** Converts chunks to vectors using OpenAI embeddings
- **Vector Store:** Supabase pgvector table with HNSW index for fast similarity search
- **Version Control:** Tracks article changes, allows rollback
- **Metadata:** Tags, categories, last updated, usage stats

**Database Schema (simplified):**
```sql
-- Knowledge base articles
CREATE TABLE kb_articles (
  id UUID PRIMARY KEY,
  workspace_id UUID REFERENCES workspaces(id),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  status TEXT DEFAULT 'published', -- draft, published, archived
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ,
  metadata JSONB -- tags, category, author, etc.
);

-- Vector embeddings
CREATE TABLE kb_embeddings (
  id UUID PRIMARY KEY,
  article_id UUID REFERENCES kb_articles(id),
  chunk_text TEXT,
  embedding vector(1536), -- OpenAI embedding size
  chunk_index INT,
  metadata JSONB
);

CREATE INDEX ON kb_embeddings USING hnsw (embedding vector_cosine_ops);
```

**RAG Query Flow:**
1. User question → Generate embedding
2. Similarity search in `kb_embeddings` (cosine distance)
3. Retrieve top 3-5 relevant chunks
4. Construct prompt: system context + retrieved chunks + user question
5. LLM generates answer
6. Return answer + confidence score + source article IDs

---

#### Component 2: Conversation Engine

**Purpose:** Handle multi-turn conversations, maintain context, decide when to escalate.

**State Machine:**
```
[New Message] → [Intent Detection] → [Confidence Check]
                                          │
                    ┌─────────────────────┼─────────────────────┐
                    │                     │                     │
              [High Conf >70%]      [Medium 50-70%]      [Low Conf <50%]
                    │                     │                     │
              [AI Responds]      [AI tries, flags]      [Escalate to Human]
                    │                     │                     │
              [Await Reply]          [Monitor]          [Create Ticket]
                    │                     │                     │
              [Repeat if needed]    [Escalate if 3+]    [Notify Agent]
```

**Confidence Scoring Logic:**
- Semantic similarity to retrieved chunks: 0-50 points
- Answer specificity (not generic): 0-30 points
- Source recency (prefer recent articles): 0-20 points
- Total: 0-100 scale

**Escalation Rules:**
- Score <70%: Immediate escalation
- 3+ back-and-forth without resolution: Escalation
- Negative sentiment detected: Escalation
- Keywords: "manager," "refund," "complaint": Escalation

**Conversation Context:**
- Last 10 messages stored in memory
- Customer profile (name, email, order history if integrated)
- Previous conversation summaries

---

#### Component 3: Evolution Engine ⭐

**Purpose:** Automatically improve knowledge base over time.

**Daily Batch Process:**

**Step 1: Data Collection**
- Query all conversations from last 24 hours
- Filter: AI-responded messages only

**Step 2: Gap Detection**
```sql
-- Find questions with low confidence
SELECT
  question,
  ai_confidence,
  COUNT(*) as frequency
FROM conversations
WHERE ai_confidence < 70
  AND created_at > NOW() - INTERVAL '7 days'
GROUP BY question
HAVING COUNT(*) >= 3 -- Asked at least 3 times
ORDER BY frequency DESC;
```

**Step 3: Cluster Similar Questions**
- Use embeddings to group similar questions
- Example: "Do you ship to PO boxes?" + "Can I use PO box address?" → Same cluster

**Step 4: Generate Suggestions**
For each cluster:
- **If no KB article exists:** Generate draft article using GPT-4
- **If article exists but low score:** Suggest improvements
- **If article has negative feedback:** Flag for review

**Step 5: Quality Checks**
- Article age: Flag articles not updated in 6+ months
- Usage stats: Flag articles never used in 90 days
- Feedback ratio: Flag articles with <50% positive feedback

**Output:**
```json
{
  "suggestions": [
    {
      "type": "new_article",
      "question_cluster": ["Do you ship to PO boxes?", "Can I use PO box?"],
      "frequency": 12,
      "draft_title": "PO Box Shipping Policy",
      "draft_content": "Yes, we ship to PO boxes within...",
      "confidence": 85
    },
    {
      "type": "improve_article",
      "article_id": "kb-047",
      "article_title": "Return Policy",
      "issue": "Referenced old 30-day policy, now 60 days",
      "suggested_edit": "Change '30 days' to '60 days' in section 2",
      "affected_conversations": 8
    }
  ],
  "health_score": 78,
  "gaps_detected": 5,
  "improvements_suggested": 3
}
```

**Human Review Interface:**
- Dashboard showing all suggestions
- Side-by-side: Current article vs. Suggested changes
- One-click approve/reject/edit
- Track impact: "After approving, 15 similar questions resolved by AI"

---

#### Component 4: Integration Layer

**Purpose:** Connect external channels to the platform.

**Email Integration:**
```
Customer sends → support@example.com
       ↓
SendGrid Inbound Parse
       ↓
POST /api/webhooks/email
       ↓
Message Router → AI/Human
       ↓
Response via SendGrid API → Customer
```

**WhatsApp Integration:**
```
Customer sends WhatsApp → Meta Business Platform
       ↓
Webhook → /api/webhooks/whatsapp
       ↓
Verify signature, parse message
       ↓
Message Router → AI/Human
       ↓
POST to Meta API → Customer
```

**Web Widget:**
```
Customer opens widget → WebSocket connection
       ↓
Realtime channel: workspace:conversations:{id}
       ↓
Messages sync via Supabase Realtime
       ↓
AI/Human responses pushed to widget
```

**Unified Message Format:**
```typescript
interface Message {
  id: string
  conversation_id: string
  channel: 'web' | 'email' | 'whatsapp' | 'facebook'
  direction: 'inbound' | 'outbound'
  sender: 'customer' | 'ai' | 'agent'
  content: string
  metadata: {
    confidence_score?: number
    source_articles?: string[]
    escalated?: boolean
  }
  created_at: string
}
```

---

### 4.4 Data Models

**Core Tables:**

```sql
-- Workspaces (multi-tenancy)
CREATE TABLE workspaces (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  domain TEXT UNIQUE, -- example.com
  plan TEXT DEFAULT 'starter', -- starter, growth, scale
  settings JSONB, -- channels enabled, AI config, etc.
  created_at TIMESTAMPTZ
);

-- Users (agents, admins)
CREATE TABLE users (
  id UUID PRIMARY KEY,
  workspace_id UUID REFERENCES workspaces(id),
  email TEXT UNIQUE NOT NULL,
  role TEXT DEFAULT 'agent', -- owner, admin, agent
  created_at TIMESTAMPTZ
);

-- Conversations
CREATE TABLE conversations (
  id UUID PRIMARY KEY,
  workspace_id UUID REFERENCES workspaces(id),
  channel TEXT NOT NULL, -- web, email, whatsapp, facebook
  customer_id UUID REFERENCES customers(id),
  status TEXT DEFAULT 'open', -- open, resolved, closed
  assigned_to UUID REFERENCES users(id),
  ai_handled BOOLEAN DEFAULT true,
  escalated_at TIMESTAMPTZ,
  resolution_type TEXT, -- ai_resolved, human_resolved, unresolved
  satisfaction_rating INT, -- 1-5
  created_at TIMESTAMPTZ,
  resolved_at TIMESTAMPTZ
);

-- Messages
CREATE TABLE messages (
  id UUID PRIMARY KEY,
  conversation_id UUID REFERENCES conversations(id),
  sender TEXT NOT NULL, -- customer, ai, agent_{id}
  content TEXT NOT NULL,
  metadata JSONB, -- confidence, sources, etc.
  created_at TIMESTAMPTZ
);

-- Customers
CREATE TABLE customers (
  id UUID PRIMARY KEY,
  workspace_id UUID REFERENCES workspaces(id),
  email TEXT,
  phone TEXT,
  name TEXT,
  external_id TEXT, -- Shopify customer ID, etc.
  metadata JSONB,
  created_at TIMESTAMPTZ
);

-- Evolution Suggestions
CREATE TABLE kb_suggestions (
  id UUID PRIMARY KEY,
  workspace_id UUID REFERENCES workspaces(id),
  type TEXT NOT NULL, -- new_article, improve_article, deprecate_article
  article_id UUID REFERENCES kb_articles(id), -- NULL if new
  title TEXT,
  content TEXT,
  reason TEXT,
  supporting_data JSONB, -- conversation IDs, frequency, etc.
  status TEXT DEFAULT 'pending', -- pending, approved, rejected
  reviewed_by UUID REFERENCES users(id),
  created_at TIMESTAMPTZ,
  reviewed_at TIMESTAMPTZ
);
```

---

### 4.5 Security & Privacy

**Data Protection:**
- All data encrypted at rest (Supabase default)
- TLS 1.3 for data in transit
- Row-level security (RLS) policies in Supabase
- Customer data isolated by workspace_id

**API Security:**
- Webhook signature verification (WhatsApp, Facebook, Email)
- Rate limiting on public endpoints
- API keys for widget embedding

**Compliance:**
- GDPR: Data export, right to deletion
- CCPA: California privacy rights
- SOC 2 Type II (Supabase provides)

**AI Safety:**
- Content filtering on AI responses (no harmful content)
- PII detection (don't expose credit card numbers, SSNs in responses)
- Prompt injection protection

---

## 5. MVP Scope & Constraints

### 5.1 What's IN Scope

**Technical Scope:**
- ✅ Single workspace setup (no complex multi-tenancy yet)
- ✅ 3 channels: Web chat, Email, WhatsApp
- ✅ Basic knowledge base CRUD
- ✅ RAG-based Q&A
- ✅ Simple ticket queue (Pending, In Progress, Resolved)
- ✅ Evolution suggestions with manual approval
- ✅ Core analytics dashboard
- ✅ User authentication (owner + agents)
- ✅ English language only

**Business Scope:**
- ✅ Focus on e-commerce use cases
- ✅ SMB customers ($99-$599/month budget)
- ✅ Self-serve onboarding with help docs
- ✅ Email support for customers
- ✅ Stripe payment integration

### 5.2 What's OUT of Scope (Explicitly)

**Technical:**
- ❌ Facebook Messenger (push to week 14 if time)
- ❌ Complex routing rules
- ❌ SLA enforcement/alerts
- ❌ Advanced permissions (just owner + agent roles)
- ❌ Integrations with Shopify, etc. (manual data import only)
- ❌ Custom branding/white-label
- ❌ Mobile apps
- ❌ Public API
- ❌ Multi-language
- ❌ Voice/phone

**Business:**
- ❌ Enterprise sales
- ❌ Custom contracts
- ❌ Dedicated success managers
- ❌ Professional services

### 5.3 Technical Constraints

**Solo Developer, 3-Month Timeline:**
- Must use existing stack (Next.js + Supabase)
- Minimize custom backend code
- Leverage third-party APIs (OpenAI, SendGrid, Meta)
- No complex DevOps (use Vercel deployment)
- Avoid over-engineering (simple is better)

**Budget Constraints:**
- OpenAI API costs: ~$0.01 per conversation (GPT-4 turbo)
- Target: Keep COGS <30% of revenue
- Use cost-effective models where possible (GPT-3.5 for embeddings)

**Quality Constraints:**
- AI resolution rate: Must achieve >40% (industry benchmark: 30-40%)
- Response time: <30 seconds for AI responses
- Uptime: 99.5% (Vercel SLA)
- Security: Pass basic penetration testing before launch

---

## 6. Competitive Analysis & Differentiation

### 6.1 Competitive Landscape

**Category 1: Traditional Helpdesks (Zendesk, Intercom, Freshdesk)**

**Strengths:**
- Established brands with trust
- Comprehensive feature sets
- Enterprise-ready (SSO, advanced permissions, etc.)
- Large app ecosystems

**Weaknesses:**
- AI is bolt-on, not core
- Expensive ($50-300/agent/month)
- Complex setup and learning curve
- Not optimized for e-commerce
- No self-improving knowledge base

**Our Advantage:**
- 70% lower cost
- AI-first architecture
- E-commerce-specific workflows
- Knowledge base improves automatically

---

**Category 2: AI Chatbot Tools (DocsBot, CustomGPT, SiteGPT)**

**Strengths:**
- Easy setup (upload docs, done)
- Affordable ($20-100/month)
- Good for simple use cases

**Weaknesses:**
- No human support capabilities
- Limited to web widget
- No ticket management
- Knowledge base is static (doesn't improve)
- Generic (not industry-specific)

**Our Advantage:**
- Human handoff + ticketing
- Multi-channel (email, WhatsApp, not just widget)
- Self-evolving knowledge base
- E-commerce workflows

---

**Category 3: Hybrid Solutions (Gorgias, Re:amaze)**

**Strengths:**
- Built for e-commerce
- Multi-channel support
- Shopify/Magento integrations
- Some automation features

**Weaknesses:**
- AI is basic (canned responses, not generative)
- Expensive ($60-300/month)
- Still requires significant manual work
- No knowledge evolution

**Our Advantage:**
- True generative AI (not canned responses)
- Self-evolving knowledge base
- Better price/performance ratio
- Focus on automation first

---

### 6.2 Differentiation Matrix

| Dimension | Zendesk | Intercom | DocsBot | Gorgias | **Our Platform** |
|-----------|---------|----------|---------|---------|------------------|
| **AI Quality** | ⭐⭐ (basic) | ⭐⭐⭐ (good) | ⭐⭐⭐⭐ (excellent) | ⭐⭐ (basic) | ⭐⭐⭐⭐ (excellent) |
| **Human Support** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐ (none) | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ (simple but complete) |
| **E-commerce Focus** | ⭐⭐ (generic) | ⭐⭐ (generic) | ⭐⭐ (generic) | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Knowledge Evolution** | ❌ | ❌ | ❌ | ❌ | ✅ **Unique** |
| **Price (SMB)** | ⭐⭐ ($$$) | ⭐⭐ ($$$) | ⭐⭐⭐⭐ ($) | ⭐⭐⭐ ($$) | ⭐⭐⭐⭐ ($-$$) |
| **Setup Time** | ⭐⭐ (days) | ⭐⭐⭐ (hours) | ⭐⭐⭐⭐⭐ (minutes) | ⭐⭐⭐ (hours) | ⭐⭐⭐⭐ (30 mins) |

### 6.3 Unique Value Proposition

**"The AI customer service platform that gets smarter every day"**

**Three Pillars:**

1. **AI-First, Human-Enhanced**
   - Not a helpdesk with AI bolted on
   - Not a chatbot without human support
   - Best of both: automation + empathy

2. **Self-Evolving Knowledge Base**
   - Only platform where KB improves automatically
   - Reduces manual work by 80%
   - Gets smarter with every conversation

3. **E-commerce Native**
   - Built for order questions, returns, product inquiries
   - Understands e-commerce workflows
   - Integrates where e-commerce happens (WhatsApp, Facebook, email)

**Positioning Statement:**
"For SMB e-commerce businesses that need 24/7 support without enterprise costs, [Product Name] is the AI-first customer service platform that handles 40%+ of inquiries automatically while continuously improving its knowledge base—unlike traditional helpdesks that require constant manual maintenance."

---

## 7. Monetization & Pricing Strategy

### 7.1 Pricing Model

**Usage-Based Tiers** (Not per-seat)

| Plan | Price | Conversations/Month | Channels | Key Features | Target Customer |
|------|-------|---------------------|----------|--------------|-----------------|
| **Starter** | $99/mo | Up to 500 | 1 (web chat) | Basic KB, AI Q&A, human handoff, email support | Solo founders, <20 daily inquiries |
| **Growth** | $299/mo | Up to 2,000 | 3 (web + email + WhatsApp) | **Self-evolving KB**, all channels, analytics, priority support | Growing stores, 20-70 daily inquiries |
| **Scale** | $599/mo | Up to 5,000 | All + priority | Advanced analytics, dedicated onboarding, API access (future) | Established businesses, 70-150 daily inquiries |

**Overage:** $0.50 per conversation above included limit

**What Counts as a Conversation:**
- A conversation = distinct customer interaction, regardless of message count
- Example: Customer asks 5 questions about sizing = 1 conversation
- Example: Same customer comes back next day = new conversation
- Spam/bot traffic excluded

**Annual Plans:** 20% discount (e.g., Starter = $79/mo paid annually)

### 7.2 Why This Pricing Works

**Research-Based Rationale:**

1. **Outcome-Based Alignment**
   - Research shows AI support pricing shifting to per-resolution/per-conversation (Intercom: $0.99/conversation, Gorgias: $0.90/automated ticket)
   - Customers pay for value delivered, not seats
   - Predictable costs tied to business volume

2. **Lower Barrier Than Helpdesks**
   - Traditional: Zendesk $19/agent × 3 agents = $57/mo minimum (but limited features at that tier)
   - Realistic Zendesk cost for SMB: $50-100/agent × 2-3 = $100-300/mo
   - Our $99 Starter beats their entry point
   - Our $299 Growth is cheaper than 2-3 Zendesk agents

3. **Higher Value Than Pure Chatbots**
   - DocsBot: $19-99/mo (but no human support, no multi-channel, no evolution)
   - We charge 3-5x but deliver 10x value (humans + evolution + channels)

4. **Competitive with E-commerce Tools**
   - Gorgias: $60-300/mo (but weak AI, no evolution)
   - Re:amaze: $29-79/agent (still per-seat model)
   - We match their pricing but with better AI

**Customer Willingness to Pay:**
- SMB e-commerce businesses spend $100-500/mo on support tools
- ROI calculation: If AI handles 40% of 50 daily inquiries = 20 tickets/day = 600/mo
- At even $5 cost per ticket (labor), that's $3,000/mo saved
- Our $299 price is 10% of savings → easy justify

### 7.3 Revenue Model

**Target Economics (Month 6):**
- 20 customers on Growth plan ($299): $5,980
- 10 customers on Starter plan ($99): $990
- 2 customers on Scale plan ($599): $1,198
- **Total MRR: $8,168**

**COGS Estimate:**
- OpenAI API: ~$0.01 per conversation
- Growth customer: 2,000 conversations × $0.01 = $20/mo
- Gross margin: ($299 - $20) / $299 = **93%** (software-like margins)

**Target Metrics:**
- Month 4: 5 paying customers, $500 MRR
- Month 6: 30 paying customers, $8,000 MRR
- Month 12: 100 customers, $30,000 MRR (assuming 70% Growth, 20% Starter, 10% Scale)

### 7.4 Pricing Psychology

**Why Three Tiers:**
- **Starter:** Anchor (cheap option exists)
- **Growth:** Target tier (most customers, "most popular" badge)
- **Scale:** Aspiration (makes Growth look reasonable)

**Feature Gating:**
- Self-evolving KB is Growth+ only → key differentiator behind paywall
- Multi-channel is Growth+ → drives upgrades
- Analytics/API is Scale → future-proofing

**Upgrade Path:**
- Customer starts on Starter ($99), widget only
- Business grows, needs email → upgrades to Growth ($299)
- Wants evolution feature → already has it on Growth
- Eventually hits 2,000 conversation limit → either upgrade to Scale or pay overage
- Overage pricing designed to make Scale attractive ($1,000 overage vs $300 upgrade)

### 7.5 Competitive Pricing Comparison

| Scenario | Zendesk | Intercom | Gorgias | DocsBot | **Our Platform** |
|----------|---------|----------|---------|---------|------------------|
| **Solo founder, 20 tickets/day** | $50-100 (2 agents) | $79 (1 seat + AI add-on) | $60 (1 agent) | $49 (Pro plan) | **$99 (Starter)** |
| **Small team, 50 tickets/day** | $150-300 (3 agents) | $158 (2 seats + AI) | $180 (3 agents) | N/A (no human support) | **$299 (Growth)** |
| **Growing business, 100 tickets/day** | $300-600 (5+ agents) | $316+ (4+ seats) | $300+ (5+ agents) | N/A | **$599 (Scale)** |

**Value Proposition:**
- **40% cheaper than traditional helpdesks**
- **3x more expensive than pure chatbots, but includes humans + evolution**
- **Competitive with e-commerce tools, but superior AI**

---

## 8. Implementation Roadmap

### 8.1 13-Week MVP Timeline

**Phase 1: Foundation (Weeks 1-4)**

**Week 1: Project Setup & Core Schema**
- ✅ Supabase project setup with pgvector
- ✅ Database schema (workspaces, kb_articles, kb_embeddings, conversations, messages)
- ✅ Row-level security policies
- ✅ Basic Next.js dashboard layout

**Week 2: Knowledge Base CRUD**
- ✅ Article creation/edit/delete interface
- ✅ Rich text editor for articles
- ✅ Document upload (PDF, MD, TXT)
- ✅ Text extraction pipeline

**Week 3: Vectorization & Storage**
- ✅ OpenAI embedding integration
- ✅ Chunking algorithm (500 tokens, overlap)
- ✅ Background job: vectorize on article save
- ✅ Vector search implementation

**Week 4: Basic RAG Q&A**
- ✅ Prompt engineering for e-commerce Q&A
- ✅ GPT-4 integration
- ✅ Similarity search + answer generation
- ✅ Confidence scoring logic
- ✅ Simple test interface

**Milestone:** Can answer questions from uploaded docs with confidence scores

---

**Phase 2: Core AI & Conversation (Weeks 5-8)**

**Week 5: Web Chat Widget (Frontend)**
- ✅ React widget component
- ✅ Embeddable via `<script>` tag
- ✅ Styling (customizable colors)
- ✅ Message input, display, typing indicators
- ✅ No backend yet (hardcoded responses for testing)

**Week 6: Conversation Engine**
- ✅ Conversations table + messages table
- ✅ Multi-turn dialog handling (context window)
- ✅ WebSocket real-time updates (Supabase Realtime)
- ✅ Widget ↔ backend integration
- ✅ Customer identification (email collection)

**Week 7: Escalation & Human Handoff**
- ✅ Escalation triggers (low confidence, keywords, customer request)
- ✅ Ticket queue interface (pending, in-progress, resolved)
- ✅ Agent assignment (manual for MVP)
- ✅ Agent can reply via dashboard
- ✅ Messages sync to widget

**Week 8: Agent Dashboard Polish**
- ✅ Conversation list with filters
- ✅ Customer profile sidebar
- ✅ Internal notes
- ✅ Canned responses library
- ✅ Search by customer/keyword

**Milestone:** End-to-end flow: customer asks question on widget → AI responds or escalates → agent can take over

---

**Phase 3: Evolution Engine (Weeks 9-10)**

**Week 9: Analysis Pipeline**
- ✅ Daily cron job (Supabase pg_cron)
- ✅ Gap detection queries (low confidence questions)
- ✅ Cluster similar questions (embedding similarity)
- ✅ Quality checks (negative feedback, old articles)
- ✅ Store results in kb_suggestions table

**Week 10: Suggestion Interface**
- ✅ Suggestion dashboard (pending reviews)
- ✅ Side-by-side comparison (current vs suggested)
- ✅ One-click approve/reject
- ✅ Auto-generate draft articles (GPT-4)
- ✅ Track impact (reduction in similar questions)

**Milestone:** System automatically suggests 5+ improvements per week, admin can approve and see impact

---

**Phase 4: Multi-Channel (Weeks 11-12)**

**Week 11: Email Integration**
- ✅ SendGrid inbound parse setup
- ✅ Webhook handler (`/api/webhooks/email`)
- ✅ Parse email → create conversation
- ✅ AI responds via SendGrid API
- ✅ Thread management (In-Reply-To headers)
- ✅ Forwarding setup docs for customers

**Week 12: WhatsApp Integration**
- ✅ Meta Business Platform account setup
- ✅ WhatsApp webhook handler (`/api/webhooks/whatsapp`)
- ✅ Signature verification
- ✅ Message parsing + response
- ✅ Template messages for session window
- ✅ Setup docs (how to connect WhatsApp number)

**Milestone:** Customers can reach support via web, email, AND WhatsApp. All conversations in unified inbox.

---

**Phase 5: Analytics & Launch Prep (Week 13)**

**Week 13: Analytics Dashboard**
- ✅ Resolution rate chart (AI vs human)
- ✅ Response time metrics
- ✅ Top questions widget
- ✅ Knowledge base health score
- ✅ CSAT display
- ✅ Export to CSV

**Week 13: Polish & Onboarding**
- ✅ User onboarding flow (first login wizard)
- ✅ Sample KB articles for testing
- ✅ Help documentation (how to add articles, embed widget, etc.)
- ✅ Email templates (welcome, weekly summary)
- ✅ Stripe integration (subscribe to plan)

**Week 13: Beta Launch**
- ✅ Landing page with pricing
- ✅ Self-serve signup
- ✅ Invite first 5-10 beta customers
- ✅ Monitoring & error tracking (Sentry)

**Milestone:** Product is live, accepting customers, charging money

---

### 8.2 Post-MVP Roadmap (Months 4-6)

**Month 4: Feedback & Iteration**
- Fix bugs from beta feedback
- Improve AI prompt based on real conversations
- Add most-requested small features
- Goal: 10 paying customers, $1,000 MRR

**Month 5: Facebook Messenger + Improvements**
- Add Facebook Messenger channel (if requested)
- Advanced analytics (funnels, trends)
- API v1 (if customers need integrations)
- Goal: 20 customers, $4,000 MRR

**Month 6: Scale Features**
- Team permissions (admin vs agent roles)
- Shopify integration (import products, orders)
- Multi-language prep (Spanish beta)
- Goal: 40 customers, $8,000 MRR

---

### 8.3 Risk Mitigation

**Technical Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| OpenAI API downtime | Medium | High | Fallback to Anthropic Claude, queue messages |
| Vector search too slow | Medium | Medium | Optimize HNSW index, add caching layer |
| WhatsApp API complexity | High | Medium | Start with simpler channels, push to week 12 |
| Scope creep | High | High | Strict "no new features" rule until week 13 |

**Business Risks:**

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Can't find paying customers | Medium | High | Pre-validate with 10 customer interviews, get LOIs |
| Pricing too high/low | Medium | Medium | Launch with 3 tiers, adjust based on signup conversion |
| Competitors copy feature | Low | Low | Self-evolving KB has network effects (more data = better) |
| AI quality not good enough | Medium | High | Pilot with 3 friendly customers first, iterate prompts |

---

## 9. Success Metrics & KPIs

### 9.1 Product Metrics (MVP - Month 3)

**AI Performance:**
- ✅ **AI Resolution Rate:** >40% (benchmark: 30-40% per research)
  - Measures: % of conversations resolved by AI without human intervention
  - Target: 45% by month 3

- ✅ **Average Confidence Score:** >75%
  - Measures: Mean confidence score of AI responses
  - Target: 78% by month 3

- ✅ **Response Time:** <30 seconds
  - Measures: Time from customer question to AI response
  - Target: <20 seconds (p95)

**Knowledge Base Health:**
- ✅ **KB Utilization:** >70% of articles used in last 30 days
  - Measures: % of articles retrieved at least once
  - Target: 75%

- ✅ **Evolution Engagement:** >50% suggestion approval rate
  - Measures: % of auto-generated suggestions approved by admin
  - Target: 60%

- ✅ **Gap Closure Rate:** >10 gaps detected and addressed per week
  - Measures: New articles created from suggestions
  - Target: 12 per week

**Customer Satisfaction:**
- ✅ **CSAT:** >4.0/5.0 overall
  - Measures: Post-conversation ratings
  - Target: 4.2/5.0

- ✅ **AI CSAT:** >3.8/5.0 for AI-only interactions
  - Measures: Ratings when no human involved
  - Target: 4.0/5.0 (research shows customers rate AI lower than humans)

### 9.2 Business Metrics

**MVP Launch (Month 3):**
- ✅ Product live and accepting customers
- ✅ First 5 paying customers onboarded
- ✅ $500 MRR (e.g., 5 × $99 Starter)

**Early Traction (Month 4-6):**
- Month 4: 10 customers, $1,500 MRR (mix of Starter + Growth)
- Month 5: 25 customers, $5,000 MRR
- Month 6: 40 customers, $8,000 MRR

**Unit Economics:**
- ✅ **Gross Margin:** >90% (target: 93% based on COGS analysis)
- ✅ **CAC (Customer Acquisition Cost):** <$300 (3 months payback on Growth plan)
- ✅ **Churn:** <10% monthly (early-stage acceptable: 15-20%)

### 9.3 Operational Metrics

**Support Load:**
- ✅ Customer support response time: <4 hours (business hours)
- ✅ Bug resolution time: <48 hours for critical, <1 week for minor
- ✅ Uptime: >99.5% (Vercel SLA)

**Development Velocity:**
- ✅ Ship new feature: Every 2 weeks post-MVP
- ✅ Bug fix releases: Weekly

### 9.4 Key Indicators of Success

**By Month 3 (MVP Launch):**
- [ ] Product fully functional across 3 channels (web, email, WhatsApp)
- [ ] AI resolving 40%+ of test conversations
- [ ] Evolution engine generating 10+ suggestions/week
- [ ] 5 beta customers using product daily
- [ ] First dollar of revenue

**By Month 6:**
- [ ] 40 paying customers
- [ ] $8,000 MRR
- [ ] 45% AI resolution rate (improvement from 40%)
- [ ] <5% churn rate
- [ ] Positive customer testimonials/case studies

**Signals to Pivot:**
- AI resolution rate stuck below 30% despite improvements
- Customer churn >20% monthly
- No organic growth (all customers churning before referrals)
- Pricing model rejected (no one converting from free trial)

**Signals to Double Down:**
- AI resolution rate exceeds 50%
- Customers voluntarily upgrading tiers
- Word-of-mouth/referrals appearing
- Feature requests clustering around expansion areas (e.g., Shopify integration)

---

## 10. Go-to-Market Strategy

### 10.1 MVP Launch Strategy (Month 3)

**Target: 10 Beta Customers**

**Outreach Channels:**
1. **Direct Outreach (Primary)**
   - LinkedIn: Search "e-commerce founder" + "Shopify store owner"
   - Personalized messages: "I built a tool that helps small stores automate support. Looking for 10 beta testers. Interested?"
   - Goal: 50 outreach → 10 responses → 5 trials → 2 paying

2. **E-commerce Communities**
   - Reddit: r/ecommerce, r/shopify
   - Facebook Groups: Shopify Entrepreneurs, E-commerce Growth
   - Post: "I built an AI support tool for small stores. Free beta for first 10."
   - Goal: 100 upvotes → 20 signups → 3 paying

3. **Product Hunt Launch**
   - Launch on Product Hunt in Week 13
   - Positioning: "AI customer service that improves itself"
   - Goal: Top 10 product of the day → 50 signups → 5 trials

4. **Personal Network**
   - Founder's existing customer service company contacts
   - Ask for intros to e-commerce clients
   - Goal: 5 warm intros → 3 trials → 2 paying

**Offer:**
- **Beta Pricing:** 50% off for first 3 months ($49 Starter, $149 Growth)
- **Incentive:** "Lock in this price forever if you give feedback"
- **Support:** Direct Slack/email access to founder for feedback

### 10.2 Positioning & Messaging

**Homepage Headline:**
"AI Customer Service That Gets Smarter Every Day"

**Subheadline:**
"Built for e-commerce. Handles 40% of customer questions automatically. Improves your knowledge base while you sleep."

**Key Messages:**
1. **Problem:** "Losing sales because you can't answer questions 24/7?"
2. **Solution:** "AI handles routine questions. Humans handle the complex stuff."
3. **Differentiator:** "The only platform that automatically improves your knowledge base."

**Social Proof (Once Available):**
- "[Store Name] reduced support costs by 38% in 30 days"
- "Handled 1,200 conversations in our first month with zero extra staff"

### 10.3 Content Marketing (Post-MVP)

**Blog Topics:**
1. "How to Reduce E-commerce Support Costs by 40% Without Sacrificing Quality"
2. "The Hidden Cost of Outdated FAQs (And How to Fix Them)"
3. "Why Your Chatbot Fails (And How to Build One That Works)"
4. "24/7 Customer Support on a Startup Budget"

**SEO Keywords:**
- "AI customer service for e-commerce"
- "Shopify support automation"
- "Customer service chatbot for small business"
- "Automated customer support tools"

**Guest Posts:**
- Shopify blog (if accepted)
- E-commerce newsletters (The Hustle, eCommerceFuel)

### 10.4 Partnerships (Month 6+)

**Potential Partners:**
1. **Shopify App Store**
   - Become official Shopify app
   - Access to 2M+ merchants
   - Requires: Shopify integration, app review

2. **E-commerce Agencies**
   - Offer 20% revenue share for referrals
   - White-label option for agencies

3. **Support Outsourcing Companies**
   - Partner to use our AI for their clients
   - Hybrid: their agents + our AI

---

## Appendix A: Key Research Findings

*Reference: context.md analysis*

### Market Reality

**What Works:**
- Companies willing to use AI for routine support (85% plan to pilot in 2025)
- Clear ROI when AI handles 30-40% of inquiries
- Outcome-based pricing ($0.50-$1 per conversation) gaining traction
- E-commerce is prime use case (high volume, repetitive questions)

**What Fails:**
- 76% of customers frustrated with current AI support (poor implementation)
- 95% of AI pilots yield no ROI (MIT research)
- Over-automation without human fallback backfires
- Generic chatbots that don't understand context

**Knowledge Base Challenge:**
- 61% of companies have outdated knowledge (Gartner)
- Most have no process to keep FAQs current
- Bots that repeat bad answers fail quickly

**Geographic Insights:**
- North America/Europe: Large market, fierce competition, high budgets
- GCC (Middle East): Rapidly growing, WhatsApp-heavy, less competition, data localization opportunity
- Asia/SEA: Price-sensitive, fragmented, not recommended for solo founder

**Pricing Research:**
- Intercom Fin: $0.99 per resolved conversation
- Gorgias: $0.90 per automated ticket
- Zendesk: $19-99/agent/month (traditional per-seat)
- Trend: Shift from per-seat to outcome-based as AI proves value

---

## Appendix B: Technical Glossary

**RAG (Retrieval-Augmented Generation):**
AI technique where the model first retrieves relevant documents, then generates an answer based on those documents. Reduces hallucinations.

**Vector Embedding:**
Numerical representation of text that captures semantic meaning. Allows similarity search (find documents similar to a question).

**pgvector:**
PostgreSQL extension for storing and querying vector embeddings. Open-source, no separate vector database needed.

**Confidence Score:**
0-100 number indicating how certain the AI is about its answer. Based on semantic similarity, source quality, and answer specificity.

**Conversation:**
A distinct customer interaction. May include multiple messages. Ends when resolved or after 24 hours of inactivity.

**Escalation:**
Transferring a conversation from AI to a human agent when AI can't handle it.

**Knowledge Base (KB):**
Collection of articles, FAQs, and documentation used to train the AI.

**Canned Response:**
Pre-written response templates agents can use for common questions.

**CSAT (Customer Satisfaction Score):**
Post-interaction rating (1-5 stars) measuring customer happiness.

---

## Appendix C: Competitor Deep Dives

### DocsBot AI
- **Model:** Pure AI chatbot
- **Pricing:** $19-199/month (based on messages)
- **Strengths:** Easy setup, good docs ingestion, affordable
- **Weaknesses:** No human support, widget-only, no evolution
- **Target:** Docs sites, SaaS help centers
- **Why we're different:** We have humans + multi-channel + evolution

### Intercom
- **Model:** Full helpdesk + AI add-on (Fin)
- **Pricing:** $39/seat + $0.99/resolution (Fin)
- **Strengths:** Established, feature-rich, integrations
- **Weaknesses:** Expensive, complex, AI is bolt-on
- **Target:** Mid-market B2B SaaS
- **Why we're different:** AI-first, 70% cheaper, e-commerce focus

### Gorgias
- **Model:** E-commerce helpdesk + basic automation
- **Pricing:** $60-300/month (tiered by tickets)
- **Strengths:** E-commerce focus, Shopify integration, multi-channel
- **Weaknesses:** Weak AI (canned responses), no evolution, expensive
- **Target:** D2C brands, Shopify merchants
- **Why we're different:** True generative AI, self-evolving KB, better price

---

## Document Control

**Version History:**
- v1.0 (2025-12-28): Initial MVP product definition

**Next Review:** After first 10 customer interviews (estimated Week 15)

**Owner:** [Founder Name]

**Feedback:** Direct questions/suggestions to [email]

---

**END OF DOCUMENT**
