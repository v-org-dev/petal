import { Icons } from '@/components/icons'
import { FaTwitter } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa6'
import { RiGithubFill } from 'react-icons/ri'

export const BLUR_FADE_DELAY = 0.15

export const siteConfig = {
  name: 'Petal',
  description: 'AI customer support with self-evolving knowledge base, RAG-powered accuracy, and guided A2UI replies',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  keywords: [
    'AI customer service',
    'e-commerce support automation',
    'self-evolving knowledge base',
    'RAG-powered AI',
    'A2UI technology',
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
        '500 conv/month',
        'Self-evolving KB',
        'RAG-powered AI',
        'A2UI guided replies',
        'Email support',
        'Basic analytics',
      ],
      description: 'For small stores',
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
        '2,000 conv/month',
        'Self-evolving KB',
        'RAG-powered AI',
        'A2UI guided replies',
        'Priority support',
        'Advanced analytics',
        'Multi-channel',
        'Custom integrations',
      ],
      description: 'For scaling businesses',
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
        '5,000 conv/month',
        'Self-evolving KB',
        'RAG-powered AI',
        'A2UI guided replies',
        'Dedicated manager',
        'Enterprise analytics',
        'Multi-channel',
        'Custom integrations',
        'White-label',
        'SLA guarantees',
      ],
      description: 'For high-volume ops',
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
          Petal analyzes all daily conversations, detects unanswered questions, outdated info, and trends. It generates
          suggested FAQs or updates, and you approve in minutes—not hours.
        </span>
      ),
    },
    {
      question: 'What is RAG and why does it matter?',
      answer: (
        <span>
          RAG (Retrieval-Augmented Generation) ensures Petal only answers from your actual knowledge base. No hallucinations.
          Every answer cites its source, keeping responses accurate and trustworthy.
        </span>
      ),
    },
    {
      question: 'How does A2UI help customers?',
      answer: (
        <span>
          A2UI embeds interactive buttons and guided flows in chat—like &apos;Track Order&apos; or &apos;Start Return&apos;—so
          customers can act without leaving the conversation.
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
      question: 'Can Petal replace my team?',
      answer: (
        <span>
          Petal handles 40-60% of inquiries automatically. Complex issues or negative sentiment are escalated to humans
          with full context, letting your team focus on high-value work.
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
