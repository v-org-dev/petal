import { Icons } from '@/components/icons'
import { FaTwitter } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa6'
import { RiGithubFill } from 'react-icons/ri'

export const BLUR_FADE_DELAY = 0.15

export const siteConfig = {
  name: 'Petal',
  description: 'AI Customer Service for E-commerce with Self-Evolving Knowledge Base',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  keywords: [
    'AI customer service',
    'e-commerce support automation',
    'self-evolving knowledge base',
    'RAG-powered AI',
    'A2UI technology',
    'DevBot',
  ],
  links: {
    email: 'support@petal.ai',
    twitter: 'https://twitter.com/petal',
    github: 'https://github.com/petal',
    youtube: 'https://youtube.com/@petal',
  },
  header: [
    {
      href: '/#features',
      label: 'Features',
    },
    {
      href: '/pricing',
      label: 'Pricing',
    },
    {
      href: '/about',
      label: 'About',
    },
  ],
  pricing: [
    {
      name: 'STARTER',
      href: '/signup',
      price: '$99',
      period: 'month',
      yearlyPrice: '$82',
      features: [
        'Up to 500 conversations/month',
        'Self-evolving knowledge base',
        'RAG-powered AI responses',
        'A2UI guided replies',
        'Email support',
        'Basic analytics',
      ],
      description: 'Perfect for growing e-commerce stores',
      buttonText: 'Start Free Trial',
      isPopular: false,
    },
    {
      name: 'GROWTH',
      href: '/signup',
      price: '$299',
      period: 'month',
      yearlyPrice: '$249',
      features: [
        'Up to 2,000 conversations/month',
        'Self-evolving knowledge base',
        'RAG-powered AI responses',
        'A2UI guided replies',
        'Priority support',
        'Advanced analytics',
        'Multi-channel support',
        'Custom integrations',
      ],
      description: 'Ideal for scaling e-commerce businesses',
      buttonText: 'Start Free Trial',
      isPopular: true,
    },
    {
      name: 'SCALE',
      href: '/signup',
      price: '$599',
      period: 'month',
      yearlyPrice: '$499',
      features: [
        'Up to 5,000 conversations/month',
        'Self-evolving knowledge base',
        'RAG-powered AI responses',
        'A2UI guided replies',
        'Dedicated support manager',
        'Enterprise analytics',
        'Multi-channel support',
        'Custom integrations',
        'White-label options',
        'SLA guarantees',
      ],
      description: 'For high-volume e-commerce operations',
      buttonText: 'Contact Sales',
      isPopular: false,
    },
  ],
  faqs: [
    {
      question: 'How does Petal handle order-specific questions?',
      answer: (
        <span>
          Petal integrates with your e-commerce platform (Shopify, WooCommerce, etc.) to access real-time order data.
          When a customer asks about an order, Petal retrieves the information and responds instantly. For complex cases,
          it smoothly escalates to a human agent with full context.
        </span>
      ),
    },
    {
      question: 'How does the self-evolving knowledge base work?',
      answer: (
        <span>
          Every night, Petal analyzes all conversations from the day. It identifies: (1) questions the AI couldn&apos;t
          answer confidently, (2) outdated information in your knowledge base, and (3) patterns in customer inquiries.
          Then it generates suggested FAQ updates or new articles. You review and approve in minutes instead of spending
          hours manually updating docs.
        </span>
      ),
    },
    {
      question: 'What is RAG and why does it matter?',
      answer: (
        <span>
          RAG (Retrieval-Augmented Generation) means Petal pulls information from your actual knowledge base before
          responding—it doesn&apos;t hallucinate or make things up like ChatGPT might. Every answer includes source
          attribution, showing which FAQ or doc it referenced. This ensures accuracy and builds customer trust.
        </span>
      ),
    },
    {
      question: 'What channels does Petal support?',
      answer: (
        <span>
          Petal works across web chat, email, WhatsApp, and Facebook Messenger. All conversations feed into the same
          knowledge base, so improvements benefit every channel. Instagram DM support is coming soon.
        </span>
      ),
    },
    {
      question: 'How is Petal different from Gorgias or Zendesk?',
      answer: (
        <span>
          Unlike Gorgias and Zendesk (which charge per agent seat and require manual knowledge base updates), Petal has
          no per-seat fees and automatically suggests knowledge base improvements daily. Plus, our A2UI technology
          provides guided UI responses, not just text—customers get interactive buttons and flows for common actions
          like tracking orders or initiating returns.
        </span>
      ),
    },
    {
      question: 'Can Petal replace my entire support team?',
      answer: (
        <span>
          Not entirely—and you probably don&apos;t want it to. Petal typically handles 40-60% of incoming support
          inquiries automatically, freeing your team to focus on complex issues, upselling, and building customer
          relationships. When Petal&apos;s confidence score drops below 70% or sentiment turns negative, it seamlessly
          hands off to a human with full conversation context.
        </span>
      ),
    },
  ],
  footer: [
    {
      title: 'Product',
      links: [
        { href: '/#features', text: 'Features', icon: null },
        { href: '/pricing', text: 'Pricing', icon: null },
        { href: '#', text: 'Integrations', icon: null },
        { href: '#', text: 'API', icon: null },
      ],
    },
    {
      title: 'Company',
      links: [
        { href: '/about', text: 'About', icon: null },
        { href: '#', text: 'Careers', icon: null },
        { href: '#', text: 'Blog', icon: null },
        { href: '#', text: 'Press Kit', icon: null },
      ],
    },
    {
      title: 'Resources',
      links: [
        { href: '#', text: 'Help Center', icon: null },
        { href: '#', text: 'API Docs', icon: null },
        { href: '#', text: 'Status', icon: null },
        { href: '#', text: 'Contact', icon: null },
      ],
    },
    {
      title: 'Legal',
      links: [
        { href: '/privacy-policy', text: 'Privacy Policy', icon: null },
        { href: '#', text: 'Terms of Service', icon: null },
        { href: '#', text: 'Security', icon: null },
      ],
    },
    {
      title: 'Social',
      links: [
        {
          href: 'https://twitter.com/petal',
          text: 'Twitter',
          icon: <FaTwitter />,
        },
        {
          href: 'https://github.com/petal',
          text: 'GitHub',
          icon: <RiGithubFill />,
        },
        {
          href: 'https://youtube.com/@petal',
          text: 'YouTube',
          icon: <FaYoutube />,
        },
      ],
    },
  ],
}
