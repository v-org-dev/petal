import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MessageSquareWarning, FileX, AlertCircle } from "lucide-react";

const problems = [
  {
    title: "Manual Knowledge Base Hell",
    description:
      "E-commerce teams spend 10+ hours every week manually updating FAQs, writing new articles, and fixing outdated information. It's exhausting and never-ending.",
    icon: Clock,
  },
  {
    title: "AI Chatbots That Hallucinate",
    description:
      "Most AI chatbots make up answers without RAG (Retrieval-Augmented Generation), damaging customer trust and creating more support tickets instead of solving them.",
    icon: MessageSquareWarning,
  },
  {
    title: "Knowledge Bases Never Improve",
    description:
      "Your knowledge base gets outdated fast. New product questions go unanswered. Support teams are too busy to identify gaps and write new content.",
    icon: FileX,
  },
  {
    title: "Support Tickets Pile Up",
    description:
      "Repetitive questions flood your inbox. Your team spends hours answering the same questions daily instead of focusing on complex customer needs.",
    icon: AlertCircle,
  },
];

export default function Component() {
  return (
    <Section
      title="The Problem"
      subtitle="Customer service teams are drowning in repetitive work while knowledge bases rot."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {problems.map((problem, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.2} inView>
            <Card className="bg-background border-none shadow-none">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
