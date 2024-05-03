import { cn } from "@/lib/utils";
import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12H19"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 5L19 12L12 19"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type ArrowLinkProps = {
  text: string;
  href: string;
  hasDecoration?: boolean;
};

export function ArrowLink({
  text,
  href,
  hasDecoration = false,
}: ArrowLinkProps) {
  return (
    <Link href={href} className="inline-block">
      <div className="flex items-center gap-4">
        <p
          className={cn(
            hasDecoration && "underline decoration-pink-500 decoration-2",
          )}
        >
          {text}
        </p>
        <ArrowIcon />
      </div>
    </Link>
  );
}
