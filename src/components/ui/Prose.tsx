import React from "react";
import { cn } from "@/utils/cn";

interface ProseProps extends React.HTMLAttributes<HTMLDivElement> {}

// Lightweight prose styling without external plugin
export const Prose: React.FC<ProseProps> = ({ className, ...props }) => (
  <div
    className={cn(
      "prose max-w-none text-[15px] leading-relaxed",
      // headings
      "[&>h1]:text-3xl [&>h1]:font-semibold [&>h2]:text-2xl [&>h2]:font-semibold [&>h3]:text-xl [&>h3]:font-semibold",
      // spacing
      "[&>h1]:mt-0 [&>*+h1]:mt-12 [&>*+h2]:mt-10 [&>*+h3]:mt-8 [&>p]:mt-4",
      // colors
      "text-[hsl(var(--color-fg))] [&_code]:bg-[hsl(var(--accent)/0.15)] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded-md [&_code]:text-sm",
      "dark:[&_code]:bg-[hsl(var(--accent)/0.25)]",
      // links
      "[&_a]:text-[hsl(var(--primary))] [&_a]:underline-offset-2 [&_a]:decoration-[hsl(var(--primary))] hover:[&_a]:underline",
      className,
    )}
    {...props}
  />
);

export default Prose;
