import Features from "@/components/features-horizontal";
import Section from "@/components/section";
import { Brain, Shield, MousePointerClick, TrendingUp } from "lucide-react";

const data = [
  {
    id: 1,
    title: "Cut KB Maintenance from 10 Hours to 5 Minutes",
    content: "Every night, DevBot scans all conversations, identifies unanswered questions and outdated info, then drafts improvement suggestions. You just review and click approve.",
    image: "/dashboard.png",
    icon: <Brain className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    title: "Build Customer Trust with RAG Accuracy",
    content: "Zero hallucinations. DevBot retrieves answers from your actual knowledge base before responding. Every reply includes source citations—customers see exactly where the info came from.",
    image: "/dashboard.png",
    icon: <Shield className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    title: "Convert More with Guided UI Flows",
    content: "Instead of just text, DevBot embeds action buttons like 'Track My Order', 'Start Return', 'View Size Guide'—reducing clicks and boosting conversions. Our A2UI tech turns chat into a guided experience.",
    image: "/dashboard.png",
    icon: <MousePointerClick className="h-6 w-6 text-primary" />,
  },
  {
    id: 4,
    title: "Discover What Customers Really Need",
    content: "See which questions DevBot couldn't answer confidently. Spot trending topics before they become problems. Your analytics dashboard shows exactly where to improve your knowledge base.",
    image: "/dashboard.png",
    icon: <TrendingUp className="h-6 w-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section
      id="features"
      title="Features That Actually Matter"
      subtitle="Built for E-Commerce Support Teams Who Want Results, Not Busywork"
    >
      <Features collapseDelay={5000} linePosition="bottom" data={data} />
    </Section>
  );
}
