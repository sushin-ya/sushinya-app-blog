import Link from "next/link";
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
      <CardFooter className="text-neutral-400 px-4 py-2">
        <div className="flex flex-col">
          <p>2023/12/30 21:12</p>
          <div className="flex gap-1">
            {Array.from({ length: 4 }).map((_, index) => {
              return (
                <Link href="/" key={index}>
                  {`Tag${index}`}
                </Link>
              );
            })}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
