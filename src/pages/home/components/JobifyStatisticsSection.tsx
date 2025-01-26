import { BriefcaseBusiness, Building2, Handshake, Target } from "lucide-react";
import InfoBox from "./InfoBox";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGetVacanciesList } from "@/react-query/query/vacancies/vacanciesQuery";
import { useProfileList } from "@/react-query/query/profile/profileQuery";
const JobifyStatisticsSection = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const { data: vacanciesList, isError: isVacancyListError } =
    useGetVacanciesList();
  const { data: profilesList, isError: isProfileListError } = useProfileList();
  const vacanciesListLength = vacanciesList?.length;
  const businessProfileListLength = profilesList?.length;
  return (
    <section className="mx-auto flex max-w-5xl flex-col flex-wrap items-center justify-center gap-12 sm:flex-row">
      <Link to={`/${lang}/vacancies`}>
        <InfoBox
          boxNumber={(!isVacancyListError && vacanciesListLength) || ""}
          boxName={t("home-page.homePage-job-box-name")}
        >
          <BriefcaseBusiness size="2rem" className="flex text-primary" />
        </InfoBox>
      </Link>
      <Link to={`/${lang}/companies`}>
        <InfoBox
          boxNumber={(!isProfileListError && businessProfileListLength) || ""}
          boxName={t("home-page.homePage-company-box-name")}
        >
          <Building2 size="2rem" className="flex text-primary" />
        </InfoBox>
      </Link>
      <InfoBox
        boxNumber="10"
        boxName={t("home-page.homePage-job-staffed-name")}
      >
        <Handshake size="2rem" className="flex text-primary" />
      </InfoBox>
      <InfoBox
        boxNumber="90%"
        boxName={t("home-page.homePage-job-success-name")}
      >
        <Target size="2rem" className="flex text-primary" />
      </InfoBox>
    </section>
  );
};

export default JobifyStatisticsSection;
