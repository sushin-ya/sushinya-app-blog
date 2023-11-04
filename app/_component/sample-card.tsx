"use client";

import { Post } from "@/.contentlayer/generated";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type SampleCardProps = {
  post: Post;
};

export const SampleCard = ({ post }: SampleCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      {post.description && <CardContent>{post.description}</CardContent>}
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};
