import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Copy, Component, Banknote } from "lucide-react";
import { Badge } from "@/components/ui/badge/badge";

import { getFormattedDate } from "@/utils/dateFormatter";
import listMaker from "../utils/listMaker";
import { useTranslation } from "react-i18next";
import { SingleVacancyMainContentProps } from "@/pages/vacancies/VacanciesPage.types";

const SingleVacancyMainContent: React.FC<SingleVacancyMainContentProps> = ({
  singleVacancy,
}) => {
  const { lang } = useParams();
  const { t } = useTranslation();
  const handleEmailClick = () => {
    const subject =
      singleVacancy?.title +
      "/" +
      singleVacancy?.jobType +
      "/" +
      singleVacancy?.location;

    window.location.href = `mailto:${singleVacancy?.contactEmail}?subject=${encodeURIComponent(subject)}`;
  };
  const handleCopyUrl = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).catch((err) => {
      console.error("Failed to copy: ", err);
    });
  };
  return (
    <div className="grid gap-6 md:grid-cols-[1fr_300px]">
      {/* Main Content */}
      <div className="space-y-6">
        <div className="flex flex-col items-start justify-between gap-4 rounded-md border-2 px-6 py-8 sm:flex-row">
          <div className="flex flex-row gap-4">
            <div className="h-24 w-28 overflow-hidden rounded-lg bg-blue-100">
              <img
                src={`https://gimdvoaobxziodrpnvkh.supabase.co/storage/v1/object/public/${singleVacancy?.profiles?.logo_url}`}
                alt="logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-2">
              <div className="mb-2 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <h1 className="font-bold md:text-xl">{singleVacancy?.title}</h1>
                <Badge variant="default" className="whitespace-nowrap">
                  {singleVacancy?.jobType}
                </Badge>
              </div>
              <p className="flex flex-row items-center gap-2">
                <Component size="1rem" className="text-primary" />{" "}
                {singleVacancy?.category}
              </p>
              <p className="text-muted-foreground">
                {t("single-vacancy.company-prefix")}{" "}
                <Link
                  to={`/${lang}/companies/${singleVacancy?.user_id}`}
                  className="text-primary"
                >
                  {singleVacancy?.companyName}
                </Link>
              </p>
            </div>
          </div>
          <Button
            className="mx-auto w-40 bg-primary text-xs sm:mx-0 sm:w-36"
            onClick={handleEmailClick}
          >
            {t("single-vacancy.apply-button")} <span className="ml-2">→</span>
          </Button>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="mb-3 text-lg font-semibold">
              {" "}
              {t("single-vacancy.description-label")}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              {singleVacancy?.description ?? ""}
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold">
              {" "}
              {t("single-vacancy.requirements-label")}
            </h2>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              {listMaker(singleVacancy?.requirements ?? "")}
            </ul>
          </section>
          <section>
            <h2 className="mb-3 text-lg font-semibold">
              {" "}
              {t("single-vacancy.qualifications-label")}
            </h2>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              {listMaker(singleVacancy?.qualifications ?? "")}
            </ul>
          </section>
          <section>
            <h2 className="mb-3 text-lg font-semibold">
              {" "}
              {t("single-vacancy.responsibilities-label")}
            </h2>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              {listMaker(singleVacancy?.responsibilities ?? "")}
            </ul>
          </section>
          <section>
            <h2 className="mb-3 text-lg font-semibold">
              {" "}
              {t("single-vacancy.benefits-label")}
            </h2>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              {listMaker(singleVacancy?.benefits ?? "")}
            </ul>
          </section>
        </div>
      </div>

      {/* Sidebar */}
      <div className="mx-auto flex flex-col gap-8 sm:flex-row md:flex-col">
        <Card className="h-48 w-56 p-4">
          <h2 className="mb-4 font-semibold">
            {" "}
            {t("single-vacancy.overview-label")}
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="text-muted-foreground">
                  {" "}
                  {t("single-vacancy.date-label")}
                </p>
                <p>{getFormattedDate(singleVacancy?.created_at ?? "")}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <p className="text-muted-foreground">Georgia</p>
                <p>{singleVacancy?.location}</p>
              </div>
            </div>
          </div>
        </Card>
        <Card className="h-48 w-56 p-4">
          <div className="space-y-4">
            <h2 className="mb-2 font-semibold">
              {" "}
              {t("single-vacancy.salary-label")}
            </h2>
            <div className="flex flex-row gap-2">
              <Banknote className="text-primary" />
              <p className="sm:text-md text-base text-green-600">
                {singleVacancy?.salaryMin} - {singleVacancy?.salaryMax}
              </p>
            </div>
            <div>
              <h2 className="mb-2 font-semibold">
                {" "}
                {t("single-vacancy.share-label")}
              </h2>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="active:bg-primary"
                  size="icon"
                  name="copy"
                  onClick={handleCopyUrl}
                >
                  <Copy className="h-4 w-4 text-primary" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SingleVacancyMainContent;
