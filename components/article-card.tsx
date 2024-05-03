import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";

export function ArticleCard() {
  return (
    <Card>
      <CardContent className="p-0">
        <Image
          src="/dummy.png" // TODO:　あとで修正
          width="496"
          height="270"
          alt="Image"
          className="rounded-t-md object-cover"
        />
      </CardContent>
      <CardFooter className="text-neutral-400">タグとか</CardFooter>
    </Card>
  );
}
