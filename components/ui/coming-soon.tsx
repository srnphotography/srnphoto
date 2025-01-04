import { CalendarClock } from "lucide-react";

interface ComingSoonProps {
  title: string;
  description?: string;
}

export function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-4 text-center">
      <div className="rounded-full bg-muted p-6">
        <CalendarClock className="h-12 w-12 text-muted-foreground" />
      </div>
      <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
      {description && (
        <p className="max-w-md text-muted-foreground">{description}</p>
      )}
    </div>
  );
}