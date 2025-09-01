import React from "react";
import { cn } from "../utils/cn";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  description?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ title, description, children, className, ...rest }) => {
  return (
    <section className={cn("space-y-6", className)} {...rest}>
      {(title || description) && (
        <header className="space-y-2">
          {title && <h2 className="text-xl font-semibold tracking-tight">{title}</h2>}
          {description && <p className="text-sm text-[hsl(var(--color-muted))] max-w-prose">{description}</p>}
        </header>
      )}
      {children}
    </section>
  );
};
