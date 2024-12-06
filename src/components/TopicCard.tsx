import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TopicCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  onClick?: () => void;
}

export function TopicCard({ title, description, icon, color, onClick }: TopicCardProps) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden p-6 transition-all hover:shadow-lg animate-fade-in",
        color
      )}
      onClick={onClick}
    >
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <div className="absolute inset-0 cursor-pointer rounded-lg transition-opacity group-hover:bg-black/5" />
    </Card>
  );
}