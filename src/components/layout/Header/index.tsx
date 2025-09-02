"use client";
import Link from "next/link";
import type React from "react";
import { useEffect, useState } from "react";
import { useI18n } from "@/i18n";
import { LanguageToggle } from "../../ui/LanguageToggle";
import { ThemeToggle } from "../../ui/ThemeToggle";

export const Header: React.FC = () => {
  const { t } = useI18n();
  const links = [
    { href: "/#skills", label: t("skills"), key: "skills" },
    { href: "/projects", label: t("projects"), key: "projects" },
    { href: "/#contact", label: t("contact"), key: "contact" },
  ];

  const [path, setPath] = useState<string>("/");
  const [hash, setHash] = useState<string>("");
  useEffect(() => {
    if (typeof window === "undefined") return;
    const update = () => {
      setPath(window.location.pathname);
      setHash(window.location.hash);
    };
    update();
    window.addEventListener("hashchange", update);
    window.addEventListener("popstate", update);
    return () => {
      window.removeEventListener("hashchange", update);
      window.removeEventListener("popstate", update);
    };
  }, []);

  const isActive = (l: (typeof links)[number]) => {
    if (l.key === "projects") return path.startsWith("/projects");
    if (l.key === "skills") return path === "/" && hash === "#skills";
    if (l.key === "contact") return path === "/" && hash === "#contact";
    return false;
  };
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[hsl(var(--color-bg)/0.85)] border-b border-[hsl(var(--border))]">
      <div className="max-w-[52rem] mx-auto px-6 sm:px-8 h-14 flex items-center gap-4">
        <Link
          href="/"
          className="font-semibold tracking-tight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(var(--primary))] rounded-sm"
        >
          JM.
        </Link>
        <nav className="flex-1">
          <ul className="flex items-center gap-5 text-sm">
            {links.map((l) => {
              const active = isActive(l);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(var(--primary))] rounded-sm px-1 ${
                      active
                        ? "text-[hsl(var(--primary))] font-medium"
                        : "hover:text-[hsl(var(--primary))]"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
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

export default Header;
