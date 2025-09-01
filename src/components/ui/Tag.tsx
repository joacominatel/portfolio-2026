import React from "react";
import { cn } from "@/utils/cn";

const variants = [
  "bg-[hsl(var(--accent)/0.35)] border-[hsl(var(--accent))]/40",
  "bg-[hsl(var(--accent-2)/0.35)] border-[hsl(var(--accent-2))]/40",
  "bg-[hsl(var(--accent-3)/0.35)] border-[hsl(var(--accent-3))]/40",
  "bg-[hsl(var(--primary)/0.25)] border-[hsl(var(--primary))]/40",
];

function pickVariant(label: string) {
  let hash = 0;
  for (let i = 0; i < label.length; i++) hash = (hash * 31 + label.charCodeAt(i)) >>> 0;
  return variants[hash % variants.length];
}

export const Tag: React.FC<{ label: string; className?: string }> = ({ label, className }) => {
  const base = pickVariant(label.toLowerCase());
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium tracking-wide uppercase text-[hsl(var(--color-fg))]",
        base,
        className
      )}
    >
      {label}
    </span>
  );
};

export default Tag;
