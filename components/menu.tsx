import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { navigationItems } from "@/constants/navigations";

function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12H20"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 6H20"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 18H20"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Menu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <MenuIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-52 bg-neutral-900 border border-neutral-700 text-neutral-50"
      >
        {Object.entries(navigationItems).map(([path, { name }]) => {
          return (
            <DropdownMenuItem key={path}>
              <Link href={path}>{name}</Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
