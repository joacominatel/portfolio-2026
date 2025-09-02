"use client";
import { type HTMLAttributes, useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  description?: string;
  id?: string;
}
export const Section = ({
  title,
  description,
  children,
  className,
  ...rest
}: SectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={cn(
        "space-y-6 scroll-mt-24 opacity-0 translate-y-10 transition-all duration-700",
        visible && "opacity-100 translate-y-0",
        className,
      )}
      {...rest}
    >
      {(title || description) && (
        <header className="space-y-2">
          {title && (
            <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
          )}
          {description && (
            <p className="text-sm text-[hsl(var(--color-muted))] max-w-prose">
              {description}
            </p>
          )}
        </header>
      )}
      {children}
    </section>
  );
};

export default Section;
