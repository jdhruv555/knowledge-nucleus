import { Header } from "@/components/Header";
import { TopicCard } from "@/components/TopicCard";
import { Rocket, Laptop, Heart, Palette, Lightbulb } from "lucide-react";

const topics = [
  {
    title: "Space",
    description: "Explore the cosmos and latest discoveries in space science",
    icon: <Rocket />,
    color: "bg-topic-space",
  },
  {
    title: "Tech",
    description: "Stay updated with the latest in technology and innovation",
    icon: <Laptop />,
    color: "bg-topic-tech",
  },
  {
    title: "Health",
    description: "Learn about wellness, medicine, and healthy living",
    icon: <Heart />,
    color: "bg-topic-health",
  },
  {
    title: "Art",
    description: "Discover creative expressions and artistic movements",
    icon: <Palette />,
    color: "bg-topic-art",
  },
  {
    title: "Startups",
    description: "Insights into entrepreneurship and startup culture",
    icon: <Lightbulb />,
    color: "bg-topic-startups",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold">Welcome to Mindful</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            A distraction-free space for sharing and discovering knowledge.
            Choose your topics of interest and start exploring.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <TopicCard key={topic.title} {...topic} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;