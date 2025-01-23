import illustration from "@/assets/illustration.png";
import { useProfileList } from "@/react-query/query/profile/profileQuery";
import { useGetVacanciesList } from "@/react-query/query/vacancies/vacanciesQuery";
import {
  BriefcaseBusiness,
  Building2,
  CheckCircle,
  Handshake,
  Search,
  Target,
  UserCircle2,
} from "lucide-react";
import InfoBox from "./components/InfoBox";
import { useTranslation } from "react-i18next";
import HowWorksBox from "./components/HowWorksBox";

const HomePage = () => {
  const { data: vacanciesList, isError: isVacancyListError } =
    useGetVacanciesList();
  const { data: profilesList, isError: isProfileListError } = useProfileList();
  const vacanciesListLength = vacanciesList?.length;
  const businessProfileListLength = profilesList?.length;
  const { t } = useTranslation();

  return (
    <div className="mx-10 mt-4 space-y-10 xl:mx-60">
      <section className="mx-auto max-w-6xl rounded-lg bg-blue-500 bg-opacity-15 py-12 md:py-24 lg:py-32">
        <div className="mx-8 flex flex-col items-center gap-8 sm:mx-20 sm:flex-row">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <BriefcaseBusiness className="text-orange-700 sm:h-12 sm:w-12" />
              <h2 className="text-xl font-bold text-primary sm:text-3xl">
                Jobify
              </h2>
            </div>
            <p className="max-w-96 text-xs text-orange-700 sm:text-lg">
              {t("home-page.homepage-heading")}
            </p>
            <p className="text-foregraund max-w-96 text-justify text-[0.5rem] sm:text-xs">
              {t("home-page.homepage-description")}
            </p>
          </div>
          <img
            src={illustration}
            width="400"
            height="300"
            alt="Acme Software"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover opacity-85"
          />
        </div>
      </section>
      <section className="mx-auto flex max-w-5xl flex-col flex-wrap items-center justify-center gap-12 sm:flex-row">
        {!isVacancyListError && (
          <InfoBox
            boxNumber={vacanciesListLength ?? ""}
            boxName={t("home-page.homePage-job-box-name")}
          >
            <BriefcaseBusiness size="2rem" className="flex text-primary" />
          </InfoBox>
        )}
        {!isProfileListError && (
          <InfoBox
            boxNumber={businessProfileListLength ?? ""}
            boxName={t("home-page.homePage-company-box-name")}
          >
            <Building2 size="2rem" className="flex text-primary" />
          </InfoBox>
        )}
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

      <section className="mx-auto w-full max-w-6xl rounded-md bg-blue-500 bg-opacity-15 px-4 pb-16 pt-12">
        <h2 className="mb-12 text-center text-2xl font-bold text-primary">
          How Jobify Works
        </h2>
        <div className="flex flex-row flex-wrap justify-around gap-16">
          <HowWorksBox
            boxTitle={t("home-page.homepage-works-section-create-title")}
            boxDescription={t(
              "home-page.homepage-works-section-create-description",
            )}
          >
            <UserCircle2 className="h-8 w-8 text-orange-600" />
          </HowWorksBox>
          <HowWorksBox
            boxTitle={t("home-page.homepage-works-section-find-title")}
            boxDescription={t(
              "home-page.homepage-works-section-find-description",
            )}
          >
            <Search className="h-8 w-8 text-orange-600" />
          </HowWorksBox>
          <HowWorksBox
            boxTitle={t("home-page.homepage-works-section-apply-title")}
            boxDescription={t(
              "home-page.homepage-works-section-apply-description",
            )}
          >
            <CheckCircle className="h-8 w-8 text-orange-600" />
          </HowWorksBox>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
