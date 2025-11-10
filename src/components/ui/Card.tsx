import Link from "next/link";
import type { FC } from "react";

import { cn } from "@/utils/cn";
import { useI18n } from "@/i18n";

interface CardProps {
  title: string;
  description: string;
  href?: string;
  ctaKey?: "seeMore"; // extensible
}

export const Card: FC<CardProps> = ({
  title,
  description,
  href = "#",
  ctaKey = "seeMore",
}) => {
  const { t } = useI18n();
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-5 shadow-sm transition hover:shadow-md",
      )}
    >
      <h3 className="font-medium tracking-tight">{title}</h3>
      <p className="text-sm text-[hsl(var(--color-muted))]">{description}</p>
      <Link
        href={href}
        className="mt-auto text-sm font-medium text-[hsl(var(--primary))] inline-flex items-center gap-1 hover:underline"
        aria-label={`${t(ctaKey)}: ${title}`}
      >
        {t(ctaKey)} →
      </Link>
    </div>
  );
};

export default Card;
