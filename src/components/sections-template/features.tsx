import Features from "@/components/features-horizontal";
import Section from "@/components/section";
import { Brain, Shield, MousePointerClick } from "lucide-react";

const data = [
  {
    id: 1,
    title: "Answers from your knowledge",
    content: "Uses your docs and data, not generic AI guesses.",
    image: "/dashboard.png",
    icon: <Shield className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    title: "Guided replies, not chatbots",
    content: "Buttons, steps, and next actions instead of long messages.",
    image: "/dashboard.png",
    icon: <MousePointerClick className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    title: "A knowledge base that improves itself",
    content: "Finds missing questions and weak answers automatically.",
    image: "/dashboard.png",
    icon: <Brain className="h-6 w-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section
      id="features"
      title="Features"
      subtitle="Results, not busywork"
    >
      <Features collapseDelay={5000} linePosition="bottom" data={data} />
    </Section>
  );
}
