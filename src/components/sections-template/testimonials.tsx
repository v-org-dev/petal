"use client";

import Marquee from "@/components/magicui/marquee";
import Section from "@/components/section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "bg-primary/20 p-1 py-0.5 font-bold text-primary dark:bg-primary/20 dark:text-primary",
        className
      )}
    >
      {children}
    </span>
  );
};

export interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export const TestimonialCard = ({
  description,
  name,
  img,
  role,
  className,
  ...props // Capture the rest of the props
}: TestimonialCardProps) => (
  <div
    className={cn(
      "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
      // light styles
      " border border-neutral-200 bg-white",
      // dark styles
      "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
    {...props} // Spread the rest of the props here
  >
    <div className="select-none text-sm font-normal text-neutral-700 dark:text-neutral-400">
      {description}
      <div className="flex flex-row py-1">
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
      </div>
    </div>

    <div className="flex w-full select-none items-center justify-start gap-5">
      <Image
        width={40}
        height={40}
        src={img || ""}
        alt={name}
        className="h-10 w-10 rounded-full ring-1 ring-border ring-offset-4"
      />

      <div>
        <p className="font-medium text-neutral-500">{name}</p>
        <p className="text-xs font-normal text-neutral-400">{role}</p>
      </div>
    </div>
  </div>
);

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Customer Success Lead at ThreadCraft Apparel",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    description: (
      <p>
        We were spending 12 hours weekly updating FAQs. With Petal's self-evolving knowledge base,{" "}
        <Highlight>it's now just 10 minutes to review AI suggestions.</Highlight>{" "}
        Our team finally focuses on complex customer issues instead of repetitive docs.
      </p>
    ),
  },
  {
    name: "Marcus Johnson",
    role: "Operations Manager at Urban Home Co.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    description: (
      <p>
        The RAG-powered accuracy sold us. Petal only answers from our actual docs—never guesses.{" "}
        <Highlight>Customer trust went up because sources are always cited.</Highlight>
      </p>
    ),
  },
  {
    name: "Rachel Thompson",
    role: "Support Team Lead at Artisan Home Goods",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
    description: (
      <p>
        We upgraded for the self-evolving knowledge base. Within 4 weeks, Petal suggested 23 articles—we approved 19.{" "}
        <Highlight>AI resolution rate jumped from 35% to 48%.</Highlight>
      </p>
    ),
  },
  {
    name: "David Kim",
    role: "E-commerce Director at Glow Beauty",
    img: "https://randomuser.me/api/portraits/men/67.jpg",
    description: (
      <p>
        The guided flows are brilliant. Instead of text, customers get 'Track Order' and 'Start Return' buttons right in chat.{" "}
        <Highlight>Resolution time dropped 40%.</Highlight>
      </p>
    ),
  },
  {
    name: "Priya Sharma",
    role: "Customer Experience Manager at FitGear Pro",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    description: (
      <p>
        Before Petal, 200+ tickets daily. Now simple questions are automated.{" "}
        <Highlight>Team went from 5 agents to 2, saving $8,000/month.</Highlight>
      </p>
    ),
  },
  {
    name: "James Martinez",
    role: "Founder at Outdoor Venture",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    description: (
      <p>
        Setup took 15 minutes. Uploaded FAQs and product catalog, and Petal answered customers same day.{" "}
        <Highlight>No technical skills needed—our non-tech team runs it.</Highlight>
      </p>
    ),
  },
  {
    name: "Amanda Rodriguez",
    role: "Head of Support at Textile Studio",
    img: "https://randomuser.me/api/portraits/women/33.jpg",
    description: (
      <p>
        Knowledge gap analytics are eye-opening. Customers asked about fabric care 50+ times with no answer.{" "}
        <Highlight>Petal drafted the article overnight. Approved in 2 minutes.</Highlight>
      </p>
    ),
  },
  {
    name: "Chris Anderson",
    role: "Co-Founder at Plant Paradise",
    img: "https://randomuser.me/api/portraits/men/78.jpg",
    description: (
      <p>
        Small team (3 people). Before Petal, CS ate 60% of our time. Now maybe 10%.{" "}
        <Highlight>Petal handles 65% of inquiries automatically.</Highlight>
      </p>
    ),
  },
  {
    name: "Lisa Zhang",
    role: "Support Manager at Kitchen Essentials",
    img: "https://randomuser.me/api/portraits/women/89.jpg",
    description: (
      <p>
        Smart escalation works perfectly. When confidence drops or frustration is detected, it hands off to humans with full context.{" "}
        <Highlight>CSAT rose from 4.1 to 4.7 stars.</Highlight>
      </p>
    ),
  },
];

export default function Testimonials() {
  return (
    <Section
      title="Real Results from Real E-Commerce Teams"
      subtitle="Less work. Better support. Proven results."
      className="max-w-8xl"
    >
      <div className="relative mt-6 max-h-screen overflow-hidden">
        <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
          {Array(Math.ceil(testimonials.length / 3))
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  "[--duration:60s]": i === 1,
                  "[--duration:30s]": i === 2,
                  "[--duration:70s]": i === 3,
                })}
              >
                {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: Math.random() * 0.8,
                      duration: 1.2,
                    }}
                  >
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
              </Marquee>
            ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-background from-20%"></div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-background from-20%"></div>
      </div>
    </Section>
  );
}
