import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Timeline } from "./time-line";

const timelines = {
  born: {
    emoji: "👶",
    heading: "Born in Fukuoka, raised in Tokyo.",
    date: "March 28th, 1994",
    comment: "That was a baby rolling around everywhere.",
  },
  bachelor: {
    emoji: "👨‍🎓",
    heading: "Graduated from the Faculty of Engineering.",
    date: "March 31th, 2016",
    comment: "I studied a bit of C, Java, and Scheme.",
  },
  master: {
    emoji: "👨‍🎓",
    heading:
      "Graduated with a Master's degree from the Faculty of Engineering.",
    date: "March 31th, 2018",
    comment:
      "I feel like I was doing behavioral economics or social experiments.",
  },
  neet: {
    emoji: "😄",
    heading: "Quit a well-known Sler and become a NEET.",
    date: "July 30th, 2020",
    comment: "Human life and mental well-being.",
  },
  frontend: {
    emoji: "😎",
    heading: "Career changed to front-end engineer.",
    date: "September 1st, 2021",
    comment: "It's the beginning of a new life.",
  },
  now: {
    emoji: "😙",
    heading: "Happy.",
    date: "Now",
    comment: "It's great when the enjoyable things you do become your work.",
  },
};

export function Timelines() {
  return (
    <div className="flex flex-col gap-4">
      {Object.values(timelines).map((props, index) => (
        <Timeline key={index} {...props} />
      ))}
    </div>
  );
}
