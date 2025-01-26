import { RocketIcon, SmileIcon, UsersIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import AboutPageSectionBox from "./AboutPageSectionBox";

const ValuesSection = () => {
  const { t } = useTranslation();
  return (
    <section className="space-y-6">
      <h3 className="text-2xl font-bold">{t("about-page.values-section")}</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AboutPageSectionBox
          boxTitle={t("about-page.values-search-heading")}
          boxDescription={t("about-page.values-search-description")}
        >
          <RocketIcon className="h-8 w-8 text-primary" />
        </AboutPageSectionBox>
        <AboutPageSectionBox
          boxTitle={t("about-page.values-collaboration-heading")}
          boxDescription={t("about-page.values-collaboration-description")}
        >
          <SmileIcon className="h-8 w-8 text-primary" />
        </AboutPageSectionBox>
        <AboutPageSectionBox
          boxTitle={t("about-page.values-customer-focus-heading")}
          boxDescription={t("about-page.values-customer-focus-description")}
        >
          <UsersIcon className="h-8 w-8 text-primary" />
        </AboutPageSectionBox>
      </div>
    </section>
  );
};

export default ValuesSection;
