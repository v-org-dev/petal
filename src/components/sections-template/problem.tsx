import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MessageSquareWarning, FileX, AlertCircle } from "lucide-react";

const problems = [
  {
    title: "Manual knowledge base maintenance",
    description:
      "Teams spend hours updating FAQs and docs, and they're still outdated the next week.",
    icon: Clock,
  },
  {
    title: "AI that guesses instead of answers",
    description:
      "Chatbots give confident but wrong replies, creating more tickets and less trust.",
    icon: MessageSquareWarning,
  },
  {
    title: "No guidance, just chat",
    description:
      "Customers get long messages instead of clear steps or actions — and keep asking back.",
    icon: FileX,
  },
  {
    title: "Nothing improves over time",
    description:
      "New questions appear every day, but no system learns or updates itself.",
    icon: AlertCircle,
  },
];

export default function Component() {
  return (
    <Section
      title="Problems"
      subtitle="Same work daily. Nothing improves."
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
