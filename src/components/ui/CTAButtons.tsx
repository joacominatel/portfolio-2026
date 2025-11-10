import type { FC } from "react";

import { cn } from "@/utils/cn";

interface CTAButtonsProps {
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}

export const CTAButtons: FC<CTAButtonsProps> = ({ primary, secondary }) => (
  <div className="flex flex-wrap gap-3 mt-6">
    <a
      href={primary.href}
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-[hsl(var(--primary))] px-5 py-2.5 text-sm font-semibold text-[hsl(var(--primary-foreground))] shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(var(--primary))] hover:translate-y-px",
      )}
    >
      {primary.label}
    </a>
    {secondary && (
      <a
        href={secondary.href}
        className="inline-flex items-center justify-center rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-5 py-2.5 text-sm font-medium shadow-sm transition hover:bg-[hsl(var(--accent-3)/0.25)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(var(--primary))] hover:translate-y-px"
      >
        {secondary.label}
      </a>
    )}
  </div>
);

export default CTAButtons;
