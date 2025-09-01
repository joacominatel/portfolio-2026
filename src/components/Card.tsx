import React from "react";
import { cn } from "../utils/cn";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  href?: string;
  cta?: string;
}

export const Card: React.FC<CardProps> = ({ title, description, href = "#", cta = "see more" }) => {
  return (
    <div className={cn("group relative flex flex-col gap-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-5 shadow-sm transition hover:shadow-md")}>
      <h3 className="font-medium tracking-tight">{title}</h3>
      <p className="text-sm text-[hsl(var(--color-muted))]">{description}</p>
      <Link
        href={href}
        className="mt-auto text-sm font-medium text-[hsl(var(--primary))] inline-flex items-center gap-1 hover:underline"
        aria-label={`${cta}: ${title}`}
      >
        {cta} →
      </Link>
    </div>
  );
};
