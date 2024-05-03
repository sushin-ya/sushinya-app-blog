import { Input } from "@/components/ui/input";

export default function BlogPage() {
  return (
    <section className="min-h-screen">
      <div className="flex flex-col gap-4 mt-16">
        <h1 className="font-semibold text-3xl">Blog</h1>
        <p>
          I will be writing about various topics, including programming, team
          management, book reviews, and diary entries. Additionally, there is a
          full-text search feature available.
        </p>
        <Input type="text" placeholder="Search articles" />
      </div>
    </section>
  );
}
