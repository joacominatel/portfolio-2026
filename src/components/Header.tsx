"use client";
import React from "react";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { useI18n } from "../utils/i18n";
import { cn } from "../utils/cn";
import Link from "next/link";

export const Header: React.FC = () => {
  const { t } = useI18n();
  const links = [
    { href: "#skills", label: t("skills") },
    { href: "#projects", label: t("projects") },
    { href: "#contact", label: t("contact") },
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[hsl(var(--color-bg)/0.85)] border-b border-[hsl(var(--border))]">
      <div className="max-w-[52rem] mx-auto px-6 sm:px-8 h-14 flex items-center gap-4">
        <div className="font-semibold tracking-tight">JM.</div>
        <nav className="flex-1">
          <ul className="flex items-center gap-5 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={cn(
                    "hover:text-[hsl(var(--primary))] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(var(--primary))] rounded-sm px-1"
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
