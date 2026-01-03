import Features from "@/components/features-vertical";
import Section from "@/components/section";
import { Upload, MessageSquare, BrainCog, ThumbsUp } from "lucide-react";

const data = [
  {
    id: 1,
    title: "1. Import your content (10 minutes)",
    content:
      "Upload FAQs, help docs, or product info. Connect Shopify/WooCommerce. Petal learns your brand voice instantly.",
    image: "/dashboard.png",
    icon: <Upload className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "2. AI starts answering",
    content:
      "Customers ask via web chat, email, or WhatsApp. Petal finds accurate answers from your knowledge base and guides users with interactive actions — no training needed.",
    image: "/dashboard.png",
    icon: <MessageSquare className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "3. AI reviews every conversation",
    content:
      "Petal analyzes unanswered or weak questions, outdated info, and trending customer needs — while you sleep.",
    image: "/dashboard.png",
    icon: <BrainCog className="w-6 h-6 text-primary" />,
  },
  {
    id: 4,
    title: "4. Approve improvements (5 min/week)",
    content:
      "Review suggested FAQ updates, new articles, and gap fixes. Approve what's right — your knowledge base evolves automatically.",
    image: "/dashboard.png",
    icon: <ThumbsUp className="w-6 h-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section
      title="How Petal works"
      subtitle="10-min setup. 24-hour results. Auto-improving."
    >
      <Features data={data} />
    </Section>
  );
}
