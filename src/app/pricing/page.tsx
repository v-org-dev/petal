import { ButtonLink, PlainButtonLink, SoftButtonLink } from '@/components/elements/button'
import { Logo, LogoGrid } from '@/components/elements/logo-grid'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CallToActionSimpleCentered } from '@/components/sections/call-to-action-simple-centered'
import { FAQsAccordion, Faq } from '@/components/sections/faqs-accordion'
import { PlanComparisonTable } from '@/components/sections/plan-comparison-table'
import { Plan, PricingHeroMultiTier } from '@/components/sections/pricing-hero-multi-tier'
import { TestimonialTwoColumnWithLargePhoto } from '@/components/sections/testimonial-two-column-with-large-photo'
import Image from 'next/image'

function plans(option: string) {
  return (
    <>
      <Plan
        name="Starter"
        price={option === 'Monthly' ? '$99' : '$79'}
        period={option === 'Monthly' ? '/month' : '/mo (billed annually)'}
        subheadline={<p>Small stores testing AI support (15-20 daily inquiries)</p>}
        features={[
          '500 conversations/month included',
          'Web chat widget',
          'RAG-powered AI Q&A (manual KB only)',
          'Human handoff & ticketing',
          'Basic analytics',
          'Email support',
        ]}
        cta={
          <SoftButtonLink href="/signup" size="lg">
            Start free trial
          </SoftButtonLink>
        }
      />
      <Plan
        name="Growth"
        price={option === 'Monthly' ? '$299' : '$239'}
        period={option === 'Monthly' ? '/month' : '/mo (billed annually)'}
        subheadline={<p>Unlock automatic KB evolution (50-70 daily inquiries)</p>}
        badge="Most popular"
        features={[
          '2,000 conversations/month',
          'Web + Email + WhatsApp + Facebook',
          '⭐ Self-evolving knowledge base (exclusive)',
          'Daily AI analysis + improvement suggestions',
          'Advanced analytics & insights',
          'Priority support',
        ]}
        cta={
          <ButtonLink href="/signup" size="lg">
            Start free trial
          </ButtonLink>
        }
      />
      <Plan
        name="Scale"
        price={option === 'Monthly' ? '$599' : '$479'}
        period={option === 'Monthly' ? '/month' : '/mo (billed annually)'}
        subheadline={<p>Established stores with 100+ daily inquiries</p>}
        features={[
          '5,000 conversations/month',
          'Everything in Growth',
          'Advanced workflow automation',
          'Dedicated onboarding call',
          'API access (beta)',
          '$0.30 per additional conversation',
        ]}
        cta={
          <SoftButtonLink href="/signup" size="lg">
            Start free trial
          </SoftButtonLink>
        }
      />
    </>
  )
}

export default function Page() {
  return (
    <>
      {/* Hero */}
      <PricingHeroMultiTier
        id="pricing"
        headline="Pricing that scales with your support volume"
        subheadline={
          <p>
            Pay for conversations, not seats. All plans include RAG-powered AI automation and human handoff. Upgrade to Growth or Scale to unlock the self-evolving knowledge base—our breakthrough feature that reduces manual maintenance from 10 hours/week to 5 minutes.
          </p>
        }
        options={['Monthly', 'Annual (20% off)']}
        plans={{ Monthly: plans('Monthly'), 'Annual (20% off)': plans('Annual (20% off)') }}
        footer={
          <LogoGrid>
            <Logo>
              <Image
                src="/img/logos/9-color-black-height-32.svg"
                className="dark:hidden"
                alt=""
                width={51}
                height={32}
              />
              <Image
                src="/img/logos/9-color-white-height-32.svg"
                className="not-dark:hidden"
                alt=""
                width={51}
                height={32}
              />
            </Logo>
            <Logo>
              <Image
                src="/img/logos/10-color-black-height-32.svg"
                className="dark:hidden"
                alt=""
                width={70}
                height={32}
              />
              <Image
                src="/img/logos/10-color-white-height-32.svg"
                className="not-dark:hidden"
                alt=""
                width={70}
                height={32}
              />
            </Logo>
            <Logo>
              <Image
                src="/img/logos/11-color-black-height-32.svg"
                className="dark:hidden"
                alt=""
                width={100}
                height={32}
              />
              <Image
                src="/img/logos/11-color-white-height-32.svg"
                className="not-dark:hidden"
                alt=""
                width={100}
                height={32}
              />
            </Logo>
            <Logo>
              <Image
                src="/img/logos/12-color-black-height-32.svg"
                className="dark:hidden"
                alt=""
                width={85}
                height={32}
              />
              <Image
                src="/img/logos/12-color-white-height-32.svg"
                className="not-dark:hidden"
                alt=""
                width={85}
                height={32}
              />
            </Logo>
            <Logo>
              <Image
                src="/img/logos/13-color-black-height-32.svg"
                className="dark:hidden"
                alt=""
                width={75}
                height={32}
              />
              <Image
                src="/img/logos/13-color-white-height-32.svg"
                className="not-dark:hidden"
                alt=""
                width={75}
                height={32}
              />
            </Logo>
            <Logo>
              <Image
                src="/img/logos/8-color-black-height-32.svg"
                className="dark:hidden"
                alt=""
                width={85}
                height={32}
              />
              <Image
                src="/img/logos/8-color-white-height-32.svg"
                className="not-dark:hidden"
                alt=""
                width={85}
                height={32}
              />
            </Logo>
          </LogoGrid>
        }
      />
      {/* Plan Comparison Table */}
      <PlanComparisonTable
        id="pricing"
        plans={['Starter', 'Growth', 'Scale']}
        features={[
          {
            title: 'AI & Automation',
            features: [
              {
                name: 'Monthly conversations included',
                value: { Starter: '500', Growth: '2,000', Scale: '5,000' },
              },
              {
                name: 'AI automation rate',
                value: { Starter: '~40%', Growth: '~45%', Scale: '~50%' },
              },
              {
                name: 'Knowledge base articles',
                value: { Starter: 'Up to 50', Growth: 'Unlimited', Scale: 'Unlimited' },
              },
              {
                name: 'Self-evolving knowledge base',
                value: { Starter: false, Growth: true, Scale: true },
              },
              { name: 'AI confidence scoring', value: true },
            ],
          },
          {
            title: 'Channels',
            features: [
              { name: 'Web chat widget', value: true },
              {
                name: 'Email support integration',
                value: { Starter: false, Growth: true, Scale: true },
              },
              {
                name: 'WhatsApp Business',
                value: { Starter: false, Growth: true, Scale: true },
              },
              {
                name: 'Facebook Messenger',
                value: { Starter: false, Growth: true, Scale: true },
              },
              {
                name: 'Unified inbox',
                value: { Starter: '1 channel', Growth: 'All channels', Scale: 'All channels' },
              },
            ],
          },
          {
            title: 'Human Support',
            features: [
              { name: 'Human handoff & escalation', value: true },
              { name: 'Simple ticket queue', value: true },
              {
                name: 'Agent seats',
                value: { Starter: 'Up to 2', Growth: 'Unlimited', Scale: 'Unlimited' },
              },
              { name: 'Internal notes', value: true },
              {
                name: 'Canned responses library',
                value: { Starter: false, Growth: true, Scale: true },
              },
            ],
          },
          {
            title: 'Analytics & Insights',
            features: [
              { name: 'Basic dashboard', value: true },
              {
                name: 'Advanced analytics',
                value: { Starter: false, Growth: true, Scale: true },
              },
              {
                name: 'Knowledge base health score',
                value: { Starter: false, Growth: true, Scale: true },
              },
              {
                name: 'CSV exports',
                value: { Starter: false, Growth: true, Scale: true },
              },
              {
                name: 'Weekly email summaries',
                value: { Starter: false, Growth: true, Scale: true },
              },
            ],
          },
          {
            title: 'Support & Services',
            features: [
              { name: 'Email support', value: true },
              {
                name: 'Priority support',
                value: { Starter: false, Growth: true, Scale: true },
              },
              {
                name: 'Dedicated onboarding',
                value: { Starter: false, Growth: false, Scale: true },
              },
              {
                name: 'API access (beta)',
                value: { Starter: false, Growth: false, Scale: true },
              },
            ],
          },
        ]}
      />
      {/* Testimonial */}
      <TestimonialTwoColumnWithLargePhoto
        id="testimonial"
        quote={
          <p>
            We upgraded from Starter to Growth specifically for the self-evolving knowledge base. Within 4 weeks, Petal suggested 23 articles based on customer questions—we approved 19. Our AI resolution rate jumped from 35% to 48%, which means fewer tickets for our team. The $200/month upgrade pays for itself in saved agent hours. Plus we're not manually writing FAQs anymore.
          </p>
        }
        img={
          <Image
            src="/img/avatars/16-h-1000-w-1400.webp"
            alt=""
            className="not-dark:bg-white/75 dark:bg-black/75"
            width={1400}
            height={1000}
          />
        }
        name="Rachel Thompson"
        byline="Operations Manager at Artisan Home Goods"
      />
      {/* FAQs */}
      <FAQsAccordion id="faqs" headline="Pricing Questions">
        <Faq
          id="faq-1"
          question="What counts as a conversation?"
          answer="A conversation is one customer interaction, regardless of how many messages are exchanged. For example, if a customer asks 3 questions about shipping and then follows up about sizing, that's 1 conversation. Conversations are counted when they're initiated, not per message. Spam and bot traffic are automatically excluded from your count."
        />
        <Faq
          id="faq-2"
          question="What happens if I exceed my conversation limit?"
          answer="We'll notify you when you reach 80% of your plan limit. If you exceed it, overage conversations are charged at $0.50 each (Starter), $0.40 (Growth), or $0.30 (Scale). Most customers find it more economical to upgrade to the next tier if they consistently hit overages. You can upgrade or downgrade anytime—changes take effect on your next billing cycle."
        />
        <Faq
          id="faq-3"
          question="Do you charge per agent seat?"
          answer="No. Unlike traditional helpdesks (Zendesk, Intercom, Gorgias), we charge based on conversation volume, not team size. Add as many agents as you need at no extra cost. Starter includes 2 agents, Growth and Scale include unlimited agents."
        />
        <Faq
          id="faq-4"
          question="Can I try before buying?"
          answer="Absolutely. Every plan includes a 14-day free trial with full access to all features. No credit card required to start. You can test with real customer conversations and see the AI in action before committing."
        />
        <Faq
          id="faq-5"
          question="How does annual pricing work?"
          answer="Annual plans save you 20% compared to monthly billing. You pay upfront for the year and lock in your rate. For example, Growth monthly is $299/mo ($3,588/year), but annual is $239/mo ($2,868/year)—saving $720. You can still upgrade mid-year; we'll prorate the difference."
        />
        <Faq
          id="faq-6"
          question="Which plan should I choose?"
          answer="Start by estimating your monthly support volume: Starter (up to 500 conversations = ~15-20/day), Growth (2,000 = ~65/day), Scale (5,000 = ~165/day). If you're unsure, start with Starter and upgrade when needed. Most e-commerce stores with 30-100 daily inquiries choose Growth for the multi-channel support and self-evolving knowledge base."
        />
      </FAQsAccordion>
      {/* Call To Action */}
      <CallToActionSimpleCentered
        id="call-to-action"
        headline="Ready to reduce support costs by 40%?"
        subheadline={
          <p>
            Start your 14-day free trial today. No credit card required. Set up in 10 minutes.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="/signup" size="lg">
              Start free trial
            </ButtonLink>

            <PlainButtonLink href="/about" size="lg">
              Learn more about Petal <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  )
}
