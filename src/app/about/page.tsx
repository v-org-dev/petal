import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { HeroLeftAlignedWithPhoto } from '@/components/sections/hero-left-aligned-with-photo'
import { Stat, StatsWithGraph } from '@/components/sections/stats-with-graph'
import { TeamFourColumnGrid, TeamMember } from '@/components/sections/team-four-column-grid'
import { TestimonialTwoColumnWithLargePhoto } from '@/components/sections/testimonial-two-column-with-large-photo'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      {/* Hero */}
      <HeroLeftAlignedWithPhoto
        id="hero"
        headline="We built the only customer service platform where knowledge bases improve themselves."
        subheadline={
          <p>
            Petal combines two breakthrough technologies: RAG (Retrieval-Augmented Generation) for accurate AI answers, and automatic knowledge base evolution that learns from every conversation. Our mission: eliminate the manual work of maintaining support documentation while delivering better customer experiences.
          </p>
        }
        photo={
          <Image
            src="/img/photos/1.webp"
            alt=""
            width={1800}
            height={945}
            className="not-dark:bg-white/75 dark:bg-black/75"
          />
        }
      />
      {/* Stats */}
      <StatsWithGraph
        id="stats"
        eyebrow="Why RAG + Self-Evolution Works"
        headline="The technology behind smarter support."
        subheadline={
          <p>
            Our dual-technology approach combines accurate RAG-powered AI responses with automatic knowledge base improvement. This isn't just automation—it's a self-improving system that gets smarter with every conversation, reducing manual maintenance while increasing AI accuracy.
          </p>
        }
      >
        <Stat stat="45% AI resolution" text="RAG-powered answers achieve higher automation rates than generic chatbots (industry average: 30-35%)." />
        <Stat stat="80% less maintenance" text="Self-evolution reduces knowledge base upkeep from 10 hours/week to 5-minute weekly reviews." />
        <Stat stat="0 hallucinations" text="RAG grounds all answers in your actual documentation—no made-up information, no wrong answers." />
      </StatsWithGraph>
      {/* Testimonial */}
      <TestimonialTwoColumnWithLargePhoto
        id="testimonial"
        quote={
          <p>
            What sold me on Petal was the technical approach. RAG means no hallucinations—every answer cites its source from our KB. Then the evolution engine analyzes patterns to suggest improvements. In 8 weeks, we added 31 AI-suggested articles with one-click approvals. Our knowledge base is now comprehensive AND maintained automatically. This is the future of support.
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
        name="Jordan Taylor"
        byline="Co-Founder at Artisan Goods Co."
      />
      {/* Team */}
      <TeamFourColumnGrid
        id="team"
        headline="Our leadership team"
        subheadline={
          <p>
            Petal's leadership team combines expertise in AI, customer service, and e-commerce. We've worked in support roles ourselves—we know the pain of repetitive questions and outdated knowledge bases. That's why we built Petal.
          </p>
        }
      >
        <TeamMember
          img={
            <Image
              src="/img/avatars/1-h-1000-w-800.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={800}
              height={1000}
            />
          }
          name="Leslie Alexander"
          byline="Co-Founder / CEO"
        />
        <TeamMember
          img={
            <Image
              src="/img/avatars/2-h-1000-w-800.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={800}
              height={1000}
            />
          }
          name="Michael Foster"
          byline="Co-Founder / CTO"
        />
        <TeamMember
          img={
            <Image
              src="/img/avatars/7-h-1000-w-800.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={800}
              height={1000}
            />
          }
          name="Dries Vincent"
          byline="Business Relations"
        />
        <TeamMember
          img={
            <Image
              src="/img/avatars/4-h-1000-w-800.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={800}
              height={1000}
            />
          }
          name="Lindsay Walton"
          byline="Front-end Developer"
        />
        <TeamMember
          img={
            <Image
              src="/img/avatars/5-h-1000-w-800.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={800}
              height={1000}
            />
          }
          name="Noor Hasan"
          byline="Designer"
        />
        <TeamMember
          img={
            <Image
              src="/img/avatars/6-h-1000-w-800.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={800}
              height={1000}
            />
          }
          name="Tom Cook"
          byline="Director of Product"
        />
        <TeamMember
          img={
            <Image
              src="/img/avatars/8-h-1000-w-800.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={800}
              height={1000}
            />
          }
          name="Whitney Francis"
          byline="Copywriter"
        />
        <TeamMember
          img={
            <Image
              src="/img/avatars/3-h-1000-w-800.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={800}
              height={1000}
            />
          }
          name="Leonard Wu"
          byline="Senior Designer"
        />
      </TeamFourColumnGrid>
      {/* Call To Action */}
      <CallToActionSimple
        id="call-to-action"
        headline="Ready to see Petal in action?"
        subheadline={
          <p>
            Start your free 14-day trial and experience AI-powered e-commerce support that gets smarter every day. No credit card required.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="/signup" size="lg">
              Start free trial
            </ButtonLink>

            <PlainButtonLink href="/pricing" size="lg">
              View pricing <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  )
}
