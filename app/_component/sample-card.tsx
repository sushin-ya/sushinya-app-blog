"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type SampleCardProps = {
  title: string;
  description?: string | undefined;
};

export const SampleCard = ({ title, description }: SampleCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      {description && <CardContent>{description}</CardContent>}
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};
