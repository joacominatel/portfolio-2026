"use client";
import Section from "@/components/ui/Section";
import { caseStudies } from "@/data/case-studies";
import { useI18n } from "@/i18n";

const CaseStudies = () => {
  const { t, locale } = useI18n();
  return (
    <Section id="case-studies" title={t("caseStudiesTitle")}>
      <ul className="grid gap-6 md:grid-cols-2">
        {caseStudies.map((cs) => (
          <li
            key={cs.title.en}
            className="rounded-lg border border-[hsl(var(--border))] p-4 bg-[hsl(var(--card))] space-y-2"
          >
            <h3 className="font-medium">{cs.title[locale]}</h3>
            <p className="text-sm">
              <strong>{t("problem")}: </strong>
              {cs.problem[locale]}
            </p>
            <p className="text-sm">
              <strong>{t("solution")}: </strong>
              {cs.solution[locale]}
            </p>
            <p className="text-sm">
              <strong>{t("impact")}: </strong>
              {cs.impact[locale]}
            </p>
            <p className="text-sm">
              <strong>{t("stack")}: </strong>
              {cs.stack}
            </p>
            <a
              href={cs.repo}
              className="inline-block pt-1 text-sm font-medium text-[hsl(var(--primary))] hover:underline"
              target={cs.repo.startsWith("http") ? "_blank" : undefined}
              rel={
                cs.repo.startsWith("http") ? "noopener noreferrer" : undefined
              }
            >
              {t("repoDemo")}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default CaseStudies;
