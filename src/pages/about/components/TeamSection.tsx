import { UserRound } from "lucide-react";
import { useTranslation } from "react-i18next";
import AboutPageSectionBox from "./AboutPageSectionBox";

const TeamSection = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold"> {t("about-page.team-section")}</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AboutPageSectionBox
          boxTitle={t("about-page.team-member-1-name")}
          boxDescription={t("about-page.team-member-1-position")}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary">
            <UserRound className="text-primary" />
          </div>
        </AboutPageSectionBox>
        <AboutPageSectionBox
          boxTitle={t("about-page.team-member-2-name")}
          boxDescription={t("about-page.team-member-2-position")}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary">
            <UserRound className="text-primary" />
          </div>
        </AboutPageSectionBox>
        <AboutPageSectionBox
          boxTitle={t("about-page.team-member-3-name")}
          boxDescription={t("about-page.team-member-3-position")}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary">
            <UserRound className="text-primary" />
          </div>
        </AboutPageSectionBox>
      </div>
    </div>
  );
};

export default TeamSection;
