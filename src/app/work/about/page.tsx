"use client";
import { Container } from "@/components/ui/Container";
import Prose from "@/components/ui/Prose";
import { useI18n } from "@/i18n";

export default function AboutPage() {
  const { t } = useI18n();
  return (
    <Container className="py-16 space-y-10 max-w-prose">
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          {t("aboutMe")}
        </h1>
        <p className="text-lg text-[hsl(var(--color-muted))]">
          Backend · APIs · Data · Automation · AI
        </p>
      </div>
      <Prose className="whitespace-pre-wrap">{t("aboutMeBody")}</Prose>
      <div>
        <a
          href="/"
          className="text-[hsl(var(--primary))] text-sm font-medium hover:underline"
        >
          ← {t("whatIBuild")}
        </a>
      </div>
    </Container>
  );
}
