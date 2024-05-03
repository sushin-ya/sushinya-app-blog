import { UsesCard } from "@/components/uses-card";
import Image from "next/image";

const accessories = {
  iphone: {
    imageUrl: "/uses/accessories/iphone.png",
    alt: "iphone",
    text: "iPhone 13",
    description: "Black, 128GB",
  },
  ipad: {
    imageUrl: "/uses/accessories/ipad.png",
    alt: "ipad",
    text: "iPad 6",
    description: "Silver",
  },
};

const hardware = {
  display: {
    imageUrl: "/uses/hardware/display.png",
    alt: "display",
    text: "LG 34WP60C-B",
    description: "UltraWide Moniter Curved",
  },
  chair: {
    imageUrl: "/uses/hardware/chair.png",
    alt: "chair",
    text: "ITOKI KE-767GV-T1T1T1",
    description: "Desk chair",
  },
  mouse: {
    imageUrl: "/uses/hardware/mouse.png",
    alt: "mouse",
    text: "Logicool G G203BK",
    description: "Mouse",
  },
  "keyboard-1st": {
    imageUrl: "/uses/hardware/keyboard-1st.png",
    alt: "keyboard-1st",
    text: "Keychron Q1 knobK",
    description: "1st Keyboard",
  },
  desk: {
    imageUrl: "/uses/hardware/desk.png",
    alt: "desk",
    text: "KOKUYO STANDSIT-W",
    description: "Desk",
  },
  audio: {
    imageUrl: "/uses/hardware/audio.png",
    alt: "audio",
    text: "Shokz OpenRun",
    description: "audio",
  },
  toy: {
    imageUrl: "/uses/hardware/toy.png",
    alt: "toy",
    text: "GAN356 RS Stickerless",
    description: "toy",
  },
  "keyboard-2nd": {
    imageUrl: "/uses/hardware/keyboard-2nd.png",
    alt: "keyboard-2nd",
    text: "HHKB Pro Snow",
    description: "2nd Keyboard",
  },
};

const software = {
  vscode: {
    imageUrl: "/uses/software/vscode.png",
    alt: "vscode",
    text: "VS Code",
    description: "Editor",
  },
  raycast: {
    imageUrl: "/uses/software/raycast.png",
    alt: "raycast",
    text: "Raycast",
    description: "Productivity tool",
  },
  figma: {
    imageUrl: "/uses/software/figma.png",
    alt: "figma",
    text: "Figma",
    description: "Design tool",
  },
  arc: {
    imageUrl: "/uses/software/arc.png",
    alt: "arc",
    text: "Arc",
    description: "Browser",
  },
  notion: {
    imageUrl: "/uses/software/notion.png",
    alt: "notion",
    text: "Notion",
    description: "Todos",
  },
  youtubemusic: {
    imageUrl: "/uses/software/youtubemusic.png",
    alt: "youtubemusic",
    text: "Youtube music",
    description: "Music",
  },
  scrivener: {
    imageUrl: "/uses/software/scrivener.png",
    alt: "scrivener",
    text: "Scrivener",
    description: "Writing tool",
  },
  chatgpt: {
    imageUrl: "/uses/software/chatgpt.png",
    alt: "chatgpt",
    text: "ChatGPT",
    description: "Friend",
  },
};

export default function UsesPage() {
  return (
    <section className="min-h-screen flex flex-col gap-8">
      <div className="flex flex-col gap-4 mt-16">
        <h1 className="font-semibold text-3xl">Uses</h1>
        <p className="leading-7">The things I use in my daily life.</p>
      </div>
      <div className="flex flex-col gap-y-6">
        <h2 className="font-semibold text-2xl">Laptop</h2>
        <Image
          src="/uses/laptop/macbook.png"
          width="1015"
          height="571"
          alt="laptop"
        />
        <div className="flex justify-center">
          <p>MacBook Air M3, 13-inch, 2024</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-6">
        <h2 className="font-semibold text-2xl">Accessories</h2>
        <div className="grid grid-cols-4 gap-4">
          {Object.values(accessories).map((props, index) => (
            <UsesCard {...props} key={index} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-6">
        <h2 className="font-semibold text-2xl">Hardware</h2>
        <div className="grid grid-cols-4 gap-4">
          {Object.values(hardware).map((props, index) => (
            <UsesCard {...props} key={index} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-6">
        <h2 className="font-semibold text-2xl">Software</h2>
        <div className="grid grid-cols-4 gap-4">
          {Object.values(software).map((props, index) => (
            <UsesCard {...props} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
