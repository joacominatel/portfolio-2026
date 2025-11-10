"use client";
import type { FC } from "react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { useI18n } from "@/i18n";

const WhatIBuild: FC = () => {
  const { t } = useI18n();
  return (
    <Section id="skills" title={t("whatIBuild")}>
      <div className="grid gap-5 sm:grid-cols-3">
        <Card
          title={t("aboutMe")}
          description={t("aboutMeDesc")}
          href="/work/about"
        />
        <Card
          title={t("restfulApis")}
          description={t("restfulDesc")}
          href="/work/restful-apis"
        />
        <Card
          title={t("dataAutomation")}
          description={t("dataAutomationDesc")}
          href="/work/data-automation"
        />
      </div>
    </Section>
  );
};

export default WhatIBuild;
