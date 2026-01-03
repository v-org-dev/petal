import Features from "@/components/features-vertical";
import Section from "@/components/section";
import { Upload, MessageSquare, BrainCog, ThumbsUp } from "lucide-react";

const data = [
  {
    id: 1,
    title: "1. Import Your Existing Content (10 Minutes)",
    content:
      "Upload your current FAQs, help docs, or product info. Connect to Shopify/WooCommerce for order data access. DevBot learns your brand voice and product catalog instantly.",
    image: "/dashboard.png",
    icon: <Upload className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "2. DevBot Starts Answering Customers",
    content:
      "Customers ask questions via web chat, email, or WhatsApp. DevBot uses RAG to find accurate answers from your knowledge base, adds A2UI guided actions, and responds in seconds. No training required.",
    image: "/dashboard.png",
    icon: <MessageSquare className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "3. AI Analyzes Every Night",
    content:
      "While you sleep, DevBot reviews all conversations from the day. It identifies questions it couldn't answer confidently, spots outdated information, and detects trending customer needs.",
    image: "/dashboard.png",
    icon: <BrainCog className="w-6 h-6 text-primary" />,
  },
  {
    id: 4,
    title: "4. You Approve Improvements (5 Minutes/Week)",
    content:
      "Each morning, check your dashboard for AI-generated suggestions: new FAQ drafts, article updates, and gap analyses. Click approve on what looks good. Your knowledge base evolves automatically.",
    image: "/dashboard.png",
    icon: <ThumbsUp className="w-6 h-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section
      title="How DevBot Works"
      subtitle="Set up in 10 minutes. See results in 24 hours. Keep improving forever."
    >
      <Features data={data} />
    </Section>
  );
}
