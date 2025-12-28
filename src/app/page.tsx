import { AnnouncementBadge } from '@/components/elements/announcement-badge'
import { ButtonLink, PlainButtonLink, SoftButtonLink } from '@/components/elements/button'
import { Link } from '@/components/elements/link'
import { Logo, LogoGrid } from '@/components/elements/logo-grid'
import { Screenshot } from '@/components/elements/screenshot'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { FAQsTwoColumnAccordion, Faq } from '@/components/sections/faqs-two-column-accordion'
import { Feature, FeaturesTwoColumnWithDemos } from '@/components/sections/features-two-column-with-demos'
import { HeroLeftAlignedWithDemo } from '@/components/sections/hero-left-aligned-with-demo'
import { Plan, PricingMultiTier } from '@/components/sections/pricing-multi-tier'
import { Stat, StatsWithGraph } from '@/components/sections/stats-with-graph'
import { Testimonial, TestimonialThreeColumnGrid } from '@/components/sections/testimonials-three-column-grid'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      {/* Hero */}
      <HeroLeftAlignedWithDemo
        id="hero"
        eyebrow={<AnnouncementBadge href="#" text="AI Knowledge Base That Evolves Itself" cta="See how it works" />}
        headline="The only customer service platform with a knowledge base that improves itself."
        subheadline={
          <p>
            Petal's AI answers customer questions using your knowledge base—then automatically detects gaps, identifies outdated content, and suggests improvements daily. Stop manually maintaining FAQs. Let your knowledge base evolve from every conversation.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="/signup" size="lg">
              Start free 14-day trial
            </ButtonLink>

            <PlainButtonLink href="#features" size="lg">
              See AI in action <ArrowNarrowRightIcon />
            </PlainButtonLink>
          </div>
        }
        demo={
          <>
            <Screenshot className="rounded-md lg:hidden" wallpaper="purple" placement="bottom-right">
              <Image
                src="/img/screenshots/1-left-1670-top-1408.webp"
                alt=""
                width={1670}
                height={1408}
                className="bg-white/75 md:hidden dark:hidden"
              />
              <Image
                src="/img/screenshots/1-color-mauve-left-1670-top-1408.webp"
                alt=""
                width={1670}
                height={1408}
                className="bg-black/75 not-dark:hidden md:hidden"
              />
              <Image
                src="/img/screenshots/1-left-2000-top-1408.webp"
                alt=""
                width={2000}
                height={1408}
                className="bg-white/75 max-md:hidden dark:hidden"
              />
              <Image
                src="/img/screenshots/1-color-mauve-left-2000-top-1408.webp"
                alt=""
                width={2000}
                height={1408}
                className="bg-black/75 not-dark:hidden max-md:hidden"
              />
            </Screenshot>
            <Screenshot className="rounded-lg max-lg:hidden" wallpaper="purple" placement="bottom">
              <Image
                src="/img/screenshots/1.webp"
                alt=""
                className="bg-white/75 dark:hidden"
                width={3440}
                height={1990}
              />
              <Image
                className="bg-black/75 not-dark:hidden"
                src="/img/screenshots/1-color-mauve.webp"
                alt=""
                width={3440}
                height={1990}
              />
            </Screenshot>
          </>
        }
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
                className="bg-black/75 not-dark:hidden"
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
                className="bg-black/75 not-dark:hidden"
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
                className="bg-black/75 not-dark:hidden"
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
                className="bg-black/75 not-dark:hidden"
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
                className="bg-black/75 not-dark:hidden"
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
                className="bg-black/75 not-dark:hidden"
                alt=""
                width={85}
                height={32}
              />
            </Logo>
          </LogoGrid>
        }
      />
      {/* Features */}
      <FeaturesTwoColumnWithDemos
        id="features"
        eyebrow="Powered by RAG + Self-Evolution"
        headline="Two breakthrough technologies that make your support smarter every day."
        subheadline={
          <p>
            Advanced Retrieval-Augmented Generation (RAG) answers questions using your exact documentation. Then our self-evolution engine analyzes every conversation to automatically improve your knowledge base. No other platform does this.
          </p>
        }
        features={
          <>
            <Feature
              demo={
                <Screenshot wallpaper="purple" placement="bottom-right">
                  <Image
                    src="/img/screenshots/1-left-1000-top-800.webp"
                    alt=""
                    className="bg-white/75 sm:hidden dark:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="/img/screenshots/1-color-mauve-left-1000-top-800.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden sm:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="/img/screenshots/1-left-1800-top-660.webp"
                    alt=""
                    className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="/img/screenshots/1-color-mauve-left-1800-top-660.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="/img/screenshots/1-left-1300-top-1300.webp"
                    alt=""
                    className="bg-white/75 max-lg:hidden xl:hidden dark:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="/img/screenshots/1-color-mauve-left-1300-top-1300.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-lg:hidden xl:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="/img/screenshots/1-left-1800-top-1250.webp"
                    alt=""
                    className="bg-white/75 max-xl:hidden dark:hidden"
                    width={1800}
                    height={1250}
                  />
                  <Image
                    src="/img/screenshots/1-color-mauve-left-1800-top-1250.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-xl:hidden"
                    width={1800}
                    height={1250}
                  />
                </Screenshot>
              }
              headline="Self-Evolving Knowledge Base (Our Secret Weapon)"
              subheadline={
                <p>
                  <strong>Daily automatic analysis:</strong> Petal scans all conversations to detect unanswered questions, outdated information, and knowledge gaps. <strong>AI-generated suggestions:</strong> Get draft articles for missing topics, specific edits for improvement, and deprecation recommendations—all with supporting data. <strong>One-click approval:</strong> Review and approve in 5 minutes vs. 10 hours/week of manual maintenance. Your knowledge base evolves from 100 conversations/month to thousands—automatically.
                </p>
              }
              cta={
                <Link href="#features">
                  Learn more <ArrowNarrowRightIcon />
                </Link>
              }
            />
            <Feature
              demo={
                <Screenshot wallpaper="blue" placement="bottom-left">
                  <Image
                    src="/img/screenshots/1-right-1000-top-800.webp"
                    alt=""
                    className="bg-white/75 sm:hidden dark:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="/img/screenshots/1-color-mauve-right-1000-top-800.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden sm:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="/img/screenshots/1-right-1800-top-660.webp"
                    alt=""
                    className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="/img/screenshots/1-color-mauve-right-1800-top-660.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="/img/screenshots/1-right-1300-top-1300.webp"
                    alt=""
                    className="bg-white/75 max-lg:hidden xl:hidden dark:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="/img/screenshots/1-color-mauve-right-1300-top-1300.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-lg:hidden xl:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="/img/screenshots/1-right-1800-top-1250.webp"
                    alt=""
                    className="bg-white/75 max-xl:hidden dark:hidden"
                    width={1800}
                    height={1250}
                  />
                  <Image
                    src="/img/screenshots/1-color-mauve-right-1800-top-1250.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-xl:hidden"
                    width={1800}
                    height={1250}
                  />
                </Screenshot>
              }
              headline="RAG-Powered AI: Answers Based on YOUR Documentation"
              subheadline={
                <p>
                  <strong>Not a generic chatbot:</strong> Our Retrieval-Augmented Generation (RAG) system pulls answers directly from your knowledge base—no hallucinations, no generic responses. <strong>Confidence scoring:</strong> Every answer includes a 0-100% confidence score. Low confidence? Automatically escalates to humans with full context. <strong>Source attribution:</strong> See exactly which articles were used to generate each answer. Works across web chat, email, WhatsApp, and Facebook Messenger.
                </p>
              }
              cta={
                <Link href="#features">
                  Learn more <ArrowNarrowRightIcon />
                </Link>
              }
            />
            <Feature
              demo={
                <Screenshot wallpaper="purple" placement="bottom-right">
                  <Image
                    src="/img/screenshots/1-left-1000-top-800.webp"
                    alt=""
                    className="bg-white/75 sm:hidden dark:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="/img/screenshots/1-color-mauve-left-1000-top-800.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden sm:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="/img/screenshots/1-left-1800-top-660.webp"
                    alt=""
                    className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="/img/screenshots/1-color-mauve-left-1800-top-660.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="/img/screenshots/1-left-1300-top-1300.webp"
                    alt=""
                    className="bg-white/75 max-lg:hidden xl:hidden dark:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="/img/screenshots/1-color-mauve-left-1300-top-1300.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-lg:hidden xl:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="/img/screenshots/1-left-1800-top-1250.webp"
                    alt=""
                    className="bg-white/75 max-xl:hidden dark:hidden"
                    width={1800}
                    height={1250}
                  />
                  <Image
                    src="/img/screenshots/1-color-mauve-left-1800-top-1250.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-xl:hidden"
                    width={1800}
                    height={1250}
                  />
                </Screenshot>
              }
              headline="Seamless Human Handoff When AI Can't Handle It"
              subheadline={
                <p>
                  <strong>Smart escalation:</strong> When confidence drops below 70%, sentiment turns negative, or customers request humans—Petal escalates instantly with full conversation context. <strong>Simple ticketing:</strong> Your team sees the entire history, AI's attempted responses, and suggested next actions. No repeated questions, no frustrated customers. Built for e-commerce: order tracking, returns, refunds, and product questions.
                </p>
              }
              cta={
                <Link href="#pricing">
                  See pricing <ArrowNarrowRightIcon />
                </Link>
              }
            />
          </>
        }
      />
      {/* Stats */}
      <StatsWithGraph
        id="stats"
        eyebrow="Proven Results from RAG + Evolution"
        headline="The numbers behind self-improving AI support."
        subheadline={
          <p>
            E-commerce stores using Petal see measurable improvements in automation rates, knowledge base health, and support efficiency—all while reducing manual maintenance time by 80%.
          </p>
        }
      >
        <Stat stat="45% AI resolution" text="Average conversations fully resolved by RAG-powered AI without human intervention—higher than industry standard (30-35%)." />
        <Stat stat="10+ improvements/week" text="Knowledge base suggestions generated automatically. Customers approve 60% on average, continuously filling gaps without manual work." />
        <Stat stat="5 minutes vs 10 hours" text="Weekly knowledge base maintenance time. Self-evolution reduces manual FAQ updates from hours to a quick review." />
      </StatsWithGraph>
      {/* Testimonial */}
      <TestimonialThreeColumnGrid
        id="testimonial"
        headline="Real results from self-evolving knowledge bases"
        subheadline={<p>See how e-commerce teams reduced manual work while improving AI accuracy with Petal's automatic knowledge base evolution.</p>}
      >
        <Testimonial
          quote={
            <p>
              The knowledge evolution is game-changing. Every Monday, Petal emails me 8-12 suggested articles based on last week's unanswered questions. I spend 10 minutes reviewing, approve 70% with one click, and our AI immediately starts using them. We went from 38% to 52% AI resolution in 6 weeks—without writing a single FAQ manually.
            </p>
          }
          img={
            <Image
              src="/img/avatars/10-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Sarah Chen"
          byline="Founder at ThreadCraft Apparel"
        />
        <Testimonial
          quote={
            <p>
              As a solo founder, I can't afford 24/7 support staff. Petal answers order tracking and return policy questions instantly—even at 3 AM. I wake up to resolved conversations instead of angry emails. My CSAT score went from 3.8 to 4.6 in two months.
            </p>
          }
          img={
            <Image
              src="/img/avatars/15-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Marcus Johnson"
          byline="Owner at Urban Home Co."
        />
        <Testimonial
          quote={
            <p>
              Our customers message us on WhatsApp, Facebook, and email—Petal unifies everything. The AI learns from conversations and suggests new FAQ articles weekly. We went from manually updating our help docs monthly to approving AI improvements in 5 minutes. Game changer.
            </p>
          }
          img={
            <Image
              src="/img/avatars/13-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Priya Sharma"
          byline="Support Manager at Glow Beauty"
        />
        <Testimonial
          quote={
            <p>
              We switched from Gorgias. Their automation was just canned responses—Petal's generative AI actually understands context. We're paying less and getting better results. Setup took 30 minutes. Best decision we made this year.
            </p>
          }
          img={
            <Image
              src="/img/avatars/12-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="David Kim"
          byline="Operations Lead at TechGear Direct"
        />
        <Testimonial
          quote={
            <p>
              I love the confidence scoring. When Petal answers below 70% confidence, it escalates with context—so my team isn't wasting time. But here's the genius: those low-confidence patterns become next week's knowledge base suggestions. The system learns what it doesn't know and asks for help. That's actual AI, not just scripted responses.
            </p>
          }
          img={
            <Image
              src="/img/avatars/11-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Emma Rodriguez"
          byline="Customer Success at PetSupply Hub"
        />
        <Testimonial
          quote={
            <p>
              We tested Zendesk AI, Intercom Fin, and DocsBot. All required constant manual work to keep knowledge bases current. Petal's the only one that automatically detects what's missing and generates fixes. After 3 months, our knowledge base has 47 articles—we manually wrote 12, Petal suggested the other 35. ROI is insane.
            </p>
          }
          img={
            <Image
              src="/img/avatars/14-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Alex Martinez"
          byline="COO at Outdoor Gear Co."
        />
      </TestimonialThreeColumnGrid>
      {/* FAQs */}
      <FAQsTwoColumnAccordion id="faqs" headline="Questions & Answers">
        <Faq
          id="faq-1"
          question="How does Petal handle order-specific questions like 'Where's my order?'"
          answer="Petal can integrate with your order management system to provide real-time order status. For stores without integration, it gracefully escalates order lookups to your team with full conversation context—no need for customers to repeat themselves. You can also add order tracking articles to your knowledge base for common scenarios."
        />
        <Faq
          id="faq-2"
          question="How does the self-evolving knowledge base actually work?"
          answer="Every night, Petal analyzes all conversations from the past 24 hours using AI. It detects: (1) Questions where confidence was <70% (knowledge gaps), (2) Similar questions asked 3+ times (missing articles), (3) Articles with negative feedback (need updates), and (4) Outdated information. Then GPT-4 generates specific suggestions: draft articles for new topics, edits for existing content, or deprecation recommendations. You review a dashboard weekly, approve/reject in one click, and approved changes go live immediately. Customers report 60% approval rates and 10+ improvements per week on average."
        />
        <Faq
          id="faq-3"
          question="What is RAG and why does it matter for customer support?"
          answer="RAG (Retrieval-Augmented Generation) is an AI technique that combines search + generation. When a customer asks a question, Petal first searches your knowledge base for relevant articles (retrieval), then uses GPT-4 to generate a natural answer based only on those articles (generation). This eliminates 'hallucinations' (AI making things up) because answers are grounded in your actual documentation. You also get source attribution—see exactly which articles were used. Traditional chatbots just generate responses without checking facts, leading to wrong answers and customer frustration."
        />
        <Faq
          id="faq-4"
          question="Which channels does Petal support for e-commerce?"
          answer="Petal supports web chat widget (for your store), email, WhatsApp Business, and Facebook Messenger. All channels feed into one unified inbox, and the AI provides consistent RAG-powered answers everywhere. We're e-commerce focused, so we prioritize channels where shoppers actually reach out—not enterprise features like phone support or Slack that most SMB stores don't need."
        />
        <Faq
          id="faq-5"
          question="How is this different from Gorgias or Zendesk for e-commerce?"
          answer="Gorgias and Zendesk charge per-agent ($50-100/seat) and treat AI as an add-on with basic automation. Petal is AI-first with usage-based pricing ($99-599/mo based on conversation volume, not seats). Our RAG-powered generative AI understands context naturally, and we're the ONLY platform where your knowledge base evolves automatically through daily AI analysis. Plus we're 50-70% cheaper for most e-commerce stores. Zendesk AI and Intercom Fin require constant manual KB maintenance—Petal does it for you."
        />
        <Faq
          id="faq-6"
          question="Can Petal replace my entire support team?"
          answer="No, and that's by design. Petal handles 45%+ of routine inquiries (order status, shipping policies, sizing, returns) automatically using RAG. Complex issues, refunds, and upset customers are escalated to your team seamlessly when confidence drops below 70%. Think of it as AI handling the repetitive work so your team can focus on relationship-building and problem-solving. Most customers reduce team workload by 30-40%, not eliminate it."
        />
      </FAQsTwoColumnAccordion>
      {/* Pricing */}
      <PricingMultiTier
        id="pricing"
        headline="Pricing that scales with your store, not your headcount"
        subheadline={
          <p>
            Pay for conversations, not seats. Predictable monthly costs based on your support volume—no surprise bills when you add team members.
          </p>
        }
        plans={
          <>
            <Plan
              name="Starter"
              price="$99"
              period="/month"
              subheadline={<p>Perfect for small stores getting started with AI support</p>}
              features={[
                'Up to 500 conversations/month',
                'Web chat widget only',
                'AI-powered Q&A (40%+ automation)',
                'Basic knowledge base (upload articles)',
                'Human handoff & simple ticketing',
                'Email support',
              ]}
              cta={
                <SoftButtonLink href="/signup" size="lg">
                  Start free 14-day trial
                </SoftButtonLink>
              }
            />
            <Plan
              name="Growth"
              price="$299"
              period="/month"
              subheadline={<p>For growing stores needing multi-channel and automation</p>}
              badge="Most popular"
              features={[
                'Up to 2,000 conversations/month',
                'All channels: Web + Email + WhatsApp',
                'Self-evolving knowledge base ⭐',
                'Advanced analytics dashboard',
                'Facebook Messenger integration',
                'Priority email support',
              ]}
              cta={
                <ButtonLink href="/signup" size="lg">
                  Start free 14-day trial
                </ButtonLink>
              }
            />
            <Plan
              name="Scale"
              price="$599"
              period="/month"
              subheadline={<p>For established stores with high support volume</p>}
              features={[
                'Up to 5,000 conversations/month',
                'Everything in Growth',
                'Advanced workflow automation',
                'Dedicated onboarding & training',
                'API access (coming soon)',
                'Custom integrations support',
              ]}
              cta={
                <SoftButtonLink href="/signup" size="lg">
                  Start free 14-day trial
                </SoftButtonLink>
              }
            />
          </>
        }
      />
      {/* Call To Action */}
      <CallToActionSimple
        id="call-to-action"
        headline="Stop losing sales to unanswered questions."
        subheadline={
          <p>
            Join e-commerce stores using Petal to provide 24/7 support without the enterprise price tag. Your AI assistant is ready to start learning your business—no credit card required for the 14-day trial.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="/signup" size="lg">
              Start free 14-day trial
            </ButtonLink>

            <PlainButtonLink href="/login" size="lg">
              Sign in <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  )
}
