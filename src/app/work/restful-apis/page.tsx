"use client";
import { Container } from "@/components/ui/Container";
import Prose from "@/components/ui/Prose";
import { useI18n } from "@/i18n";

export default function RestfulApisPage() {
  const { t } = useI18n();
  return (
    <Container className="py-16 space-y-10 max-w-prose">
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          {t("restfulDetailTitle")}
        </h1>
        <p className="text-lg text-[hsl(var(--color-muted))]">
          {t("restfulDetailIntro")}
        </p>
      </div>
      <Prose className="whitespace-pre-wrap">{t("restfulDetailBody")}</Prose>
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
