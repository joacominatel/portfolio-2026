import React from "react";
import { cn } from "../utils/cn";

export const Badge: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ className, ...props }) => (
  <span
    className={cn(
      "inline-flex items-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--accent)/0.15)] px-3 py-1 text-xs font-medium text-[hsl(var(--color-fg))] backdrop-blur-sm",
      className
    )}
    {...props}
  />
);
