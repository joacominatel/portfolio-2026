"use client";
import React, { useEffect, useState } from "react";
import { applyTheme, getInitialTheme, type Theme } from "../utils/theme";

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>("light");
  useEffect(() => {
    setTheme(getInitialTheme());
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggle = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="text-sm font-medium rounded-md border border-[hsl(var(--border))] px-3 py-1.5 hover:bg-[hsl(var(--accent-2)/0.35)] transition-colors focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};
