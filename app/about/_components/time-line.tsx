import { Card, CardContent, CardHeader } from "@/components/ui/card";

type TimelineProps = {
  emoji: string;
  heading: string;
  date: string;
  comment: string;
};

export function Timeline({ emoji, heading, date, comment }: TimelineProps) {
  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-wrap flex-col content-center">
        <span>{emoji}</span>
        <span className="bg-neutral-50 w-px flex-grow self-center mt-1" />
      </div>
      <Card className="flex-1">
        <CardHeader className="px-4 pt-2 pb-0">{heading}</CardHeader>
        <CardContent className="text-sm text-neutral-400 px-4 pt-1 pb-2">
          <p>{date}</p>
          <p>{comment}</p>
        </CardContent>
      </Card>
    </div>
  );
}
