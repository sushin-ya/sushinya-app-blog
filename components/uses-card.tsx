import Image from "next/image";
import { Card, CardFooter, CardHeader } from "./ui/card";

type UsesCardProps = {
  imageUrl: string;
  alt: string;
  text: string;
  description: string;
};

export function UsesCard({ imageUrl, alt, text, description }: UsesCardProps) {
  return (
    <Card className="bg-neutral-900 h-[295px] w-[215px]">
      <CardHeader>
        <Image src={imageUrl} width="175" height="175" alt={alt} />
      </CardHeader>
      <CardFooter className="flex flex-col items-start gap-2">
        <p className="text-lg">{text}</p>
        <p className="text-sm text-neutral-400">{description}</p>
      </CardFooter>
    </Card>
  );
}
