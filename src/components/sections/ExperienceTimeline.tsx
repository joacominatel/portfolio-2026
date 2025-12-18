"use client";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { useState } from "react";
import type { FC } from "react";

import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Tag";
import { careers } from "@/data/careers";
import { useI18n } from "@/i18n";
// (Optional) Opposite content removed for a tighter vertical layout

interface OpenState {
  [company: string]: boolean;
}

const ExperienceTimeline: FC = () => {
  const { t, locale } = useI18n();
  const [open, setOpen] = useState<OpenState>({});

  const toggle = (k: string) => setOpen((o) => ({ ...o, [k]: !o[k] }));

  const formatRange = (start: string, end?: string | null) => {
    const opts: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
    };
    const s = new Date(start).toLocaleDateString(locale, opts);
    const e = end
      ? new Date(end).toLocaleDateString(locale, opts)
      : t("present");
    return `${s} – ${e}`;
  };

  return (
    <Section id="experience" title={t("experienceTitle")}>
      <Timeline
        position="right"
        sx={{
          m: 0,
          p: 0,
          "& .MuiTimelineItem-root:before": { display: "none" },
          "& .MuiTimelineConnector-root": {
            backgroundColor: "hsl(var(--border))",
          },
        }}
      >
        {careers.map((c, idx) => {
          const key = `${c.company}-${c.start}`;
          const expanded = !!open[key];
          return (
            <TimelineItem key={key}>
              <TimelineSeparator>
                <TimelineDot
                  variant={idx === 0 ? "filled" : "outlined"}
                  color={idx === 0 ? "primary" : "grey"}
                  sx={{
                    backgroundColor:
                      idx === 0
                        ? "hsl(var(--primary))"
                        : "hsl(var(--accent-2)/0.5)",
                    borderColor: "hsl(var(--border))",
                    boxShadow: "0 0 0 2px hsl(var(--color-bg))",
                    "&:hover": { backgroundColor: "hsl(var(--primary)/0.85)" },
                  }}
                />
                {idx < careers.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent sx={{ py: 0, my: 0 }}>
                <div className="pb-12 last:pb-0">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <h3 className="font-medium tracking-tight text-sm sm:text-base">
                      {c.position[locale]}{" "}
                      <span className="text-[hsl(var(--color-muted))]">
                        @ {c.company}
                      </span>
                    </h3>
                    <span className="ms-auto text-[11px] font-mono text-[hsl(var(--color-muted))]">
                      {formatRange(c.start, c.end)}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[hsl(var(--color-muted))] leading-relaxed max-w-prose mt-1">
                    {c.description[locale]}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-2">
                    {c.technologies.slice(0, 10).map((tch) => (
                      <Tag key={tch} label={tch} />
                    ))}
                  </div>
                  {(c.achievements || c.projects) && (
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => toggle(key)}
                        className="text-[11px] font-medium text-[hsl(var(--primary))] hover:underline focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] rounded-sm px-1"
                        aria-expanded={expanded}
                      >
                        {expanded ? t("showLess") : t("showMore")}
                      </button>
                    </div>
                  )}
                  {expanded && (
                    <div className="space-y-4 border border-[hsl(var(--border))] bg-[hsl(var(--card))] rounded-lg p-4 text-xs mt-3">
                      {c.achievements && (
                        <div className="space-y-2">
                          <h4 className="font-semibold text-[11px] uppercase tracking-wide text-[hsl(var(--color-muted))]">
                            {t("achievementsLabel")}
                          </h4>
                          <ul className="list-disc ms-4 space-y-1">
                            {c.achievements[locale].map((a) => (
                              <li key={a}>{a}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {c.projects && (
                        <div className="space-y-2">
                          <h4 className="font-semibold text-[11px] uppercase tracking-wide text-[hsl(var(--color-muted))]">
                            {t("internalProjectsLabel")}
                          </h4>
                          <ul className="space-y-3">
                            {c.projects.map((p) => (
                              <li key={p.name.en} className="space-y-1">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="font-medium">
                                    {p.name[locale]}
                                  </span>
                                  <div className="flex flex-wrap gap-1">
                                    {p.technologies.slice(0, 6).map((tg) => (
                                      <Tag key={tg} label={tg} />
                                    ))}
                                  </div>
                                </div>
                                <p className="text-[11px] text-[hsl(var(--color-muted))] leading-relaxed max-w-prose">
                                  {p.description[locale]}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Section>
  );
};

export default ExperienceTimeline;
