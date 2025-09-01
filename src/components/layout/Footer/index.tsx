"use client";
import React from "react";
import { useI18n } from "@/i18n";
import Link from "next/link";

export const Footer: React.FC = () => {
  const { t } = useI18n();
  return (
    <footer className="mt-16 border-t border-[hsl(var(--border))] py-8 text-sm">
      <div className="max-w-[52rem] mx-auto px-6 sm:px-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-4">
          <Link href="#skills" className="hover:text-[hsl(var(--primary))] transition-colors">
            {t("skills")}
          </Link>
          <Link href="#projects" className="hover:text-[hsl(var(--primary))] transition-colors">
            {t("projects")}
          </Link>
          <Link href="#contact" className="hover:text-[hsl(var(--primary))] transition-colors">
            {t("contact")}
          </Link>
        </div>
        <div className="opacity-80">{t("socialFooter")}</div>
      </div>
    </footer>
  );
};

export default Footer;
