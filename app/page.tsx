import { allPosts } from "@/.contentlayer/generated";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <Card>
              <CardHeader>
                <CardTitle>
                  <h2>{post.title}</h2>
                </CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              {post.description && (
                <CardContent>
                  <p>{post.description}</p>
                </CardContent>
              )}
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </Link>
        </article>
      ))}
    </div>
  );
}
