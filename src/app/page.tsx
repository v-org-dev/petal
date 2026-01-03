import BlogSection from '@/components/sections-template/blog'
import CTA from '@/components/sections-template/cta'
import FAQ from '@/components/sections-template/faq'
import Features from '@/components/sections-template/features'
import Hero from '@/components/sections-template/hero'
import HowItWorks from '@/components/sections-template/how-it-works'
import Logos from '@/components/sections-template/logos'
import Pricing from '@/components/sections-template/pricing'
import Problem from '@/components/sections-template/problem'
import Solution from '@/components/sections-template/solution'
// import Testimonials from '@/components/sections-template/testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <Logos />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      {/* <Testimonials /> */}
      <Pricing />
      <FAQ />
      <BlogSection />
      <CTA />
    </main>
  )
}
