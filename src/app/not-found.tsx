"use client";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { useI18n } from "@/i18n";

export default function NotFound() {
  const { locale } = useI18n();
  const title = locale === "en" ? "Page not found" : "Página no encontrada";
  const desc =
    locale === "en"
      ? "The page you requested doesn't exist or was moved."
      : "La página que buscas no existe o fue movida.";
  const back = locale === "en" ? "Go back home" : "Volver al inicio";
  return (
    <Container className="py-24 text-center space-y-6">
      <h1 className="text-4xl font-semibold tracking-tight">404</h1>
      <p className="text-xl font-medium">{title}</p>
      <p className="text-sm text-[hsl(var(--color-muted))] max-w-md mx-auto">
        {desc}
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-md bg-[hsl(var(--primary))] px-5 py-2.5 text-sm font-semibold text-[hsl(var(--primary-foreground))] shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(var(--primary))]"
      >
        {back}
      </Link>
    </Container>
  );
}
