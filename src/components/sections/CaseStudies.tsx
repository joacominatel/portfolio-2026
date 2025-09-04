"use client";
import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Tag";
import { caseStudies } from "@/data/case-studies";
import { useI18n } from "@/i18n";

const CaseStudies = () => {
  const { t, locale } = useI18n();
  return (
    <Section id="case-studies" title={t("caseStudiesTitle")}>
      <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((cs) => (
          <li key={cs.title.en}>
            <article className="group flex h-full flex-col rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 shadow-sm transition hover:shadow-md">
              <h3 className="text-lg font-semibold tracking-tight">
                {cs.title[locale]}
              </h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-medium text-[hsl(var(--color-muted))]">
                    {t("problem")}
                  </dt>
                  <dd>{cs.problem[locale]}</dd>
                </div>
                <div>
                  <dt className="font-medium text-[hsl(var(--color-muted))]">
                    {t("solution")}
                  </dt>
                  <dd>{cs.solution[locale]}</dd>
                </div>
                <div>
                  <dt className="font-medium text-[hsl(var(--color-muted))]">
                    {t("impact")}
                  </dt>
                  <dd>{cs.impact[locale]}</dd>
                </div>
                <div>
                  <dt className="font-medium text-[hsl(var(--color-muted))]">
                    {t("stack")}
                  </dt>
                  <dd className="mt-1 flex flex-wrap gap-2">
                    {cs.stack.map((tech) => (
                      <Tag key={tech} label={tech} />
                    ))}
                  </dd>
                </div>
              </dl>
              <a
                href={cs.repo}
                className="mt-4 inline-flex items-center text-sm font-medium text-[hsl(var(--primary))] hover:underline"
                target={cs.repo.startsWith("http") ? "_blank" : undefined}
                rel={
                  cs.repo.startsWith("http") ? "noopener noreferrer" : undefined
                }
              >
                {t("repoDemo")} →
              </a>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default CaseStudies;
