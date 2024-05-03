import * as React from "react";

import { cn } from "@/lib/utils";

function Search() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
        stroke="rgb(163 163 163)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 20.9999L16.65 16.6499"
        stroke="rgb(163 163 163)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    // add input時に生成されたスタイル
    const defaultClassProps =
      "flex h-10 w-full rounded-md border border-neutral-700 bg-background bg-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

    // searchアイコン用のスタイル
    const classPropsForSearch = "absolute pl-10";

    return (
      <div className="relative">
        <input
          type={type}
          className={cn(defaultClassProps, classPropsForSearch, className)}
          ref={ref}
          {...props}
        />
        <div className="absolute pl-2 py-2.5">
          <Search />
        </div>
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
