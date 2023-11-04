import { allPosts } from "@/.contentlayer/generated";

import Link from "next/link";
import { SampleCard } from "./_component/sample-card";

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <SampleCard {...post} />
          </Link>
        </article>
      ))}
    </div>
  );
}
