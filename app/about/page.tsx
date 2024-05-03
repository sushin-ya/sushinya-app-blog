import Link from "next/link";
import { Timelines } from "./_components/time-lines";

const techItems = {
  Framework: { text: "Next.js", planning: false },
  Content: { text: "MDX+Contentlayer", planning: true },
  Analytics: { text: "Google Analytics", planning: true },
  Styling: { text: "Tailwindcss+Shadcn/ui", planning: false },
  Database: { text: "planningetscale", planning: true },
  CMS: { text: "microCMS", planning: true },
  ArticleSource: { text: "Notion API", planning: true },
  Catalog: { text: "Storybook", planning: true },
  E2ETest: { text: "Chromatic", planning: true },
};

const myLinks = {
  "https://github.com/sushin-ya": {
    name: "GitHub",
  },
  "https://twitter.com/sushin_ya": {
    name: "Twitter",
  },
};

export default function AboutPage() {
  return (
    <section className="min-h-screen flex flex-col gap-8">
      <div className="flex flex-col gap-4 mt-16">
        <h1 className="font-semibold text-3xl">About</h1>
        <p className="leading-7">👋 Hi! I&apos;m sushin-ya 🍣 🐈</p>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold text-2xl">WHO AM I</h2>
        <p className="leading-7">
          I am a front-end engineer in Tokyo. I usually work on developing web
          <br />
          applications using technologies such as TypeScript, React and Next.js.
        </p>
        <p className="leading-7">
          I find it incredibly exciting to witness, hear about, and experience
          the evolution of the front-end ecosystem. It has become almost like a
          hobby for me.
        </p>
      </div>
      <div>
       <Timelines /> 
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold text-2xl">About this site</h2>
        <p className="leading-7">
          This website has been created for the purpose of technical practice
          and validation.
        </p>
        <ul>
          {Object.entries(techItems).map(([key, { text, planning }]) => {
            return (
              <li key={key}>
                {planning ? `${key}: ${text}(planning)` : `${key}: ${text}`}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold text-2xl">Links</h2>
        {Object.entries(myLinks).map(([path, { name }]) => {
          return (
            <div key={path}>
              <Link href={path}>{name}</Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
