export default function AboutPage() {
  return (
    <section className="min-h-screen flex flex-col gap-8">
      <div className="flex flex-col gap-4 mt-16">
        <h1 className="font-semibold text-3xl">About</h1>
        <p className="leading-7">👋 Hi! I&apos;m sushin-ya 🍣 🐈</p>
      </div>
      <div className="flex flex-col gap-2">
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
    </section>
  );
}
