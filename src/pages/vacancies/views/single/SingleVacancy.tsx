import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button/button";
import { CircleChevronLeft } from "lucide-react";

import { useGetSingleVacancy } from "@/react-query/query/vacancies/vacanciesQuery";

import { useTranslation } from "react-i18next";
import SingleVacancyMainContent from "./components/SingleVacancyMainContent";
import { AlertDestructive } from "@/components/error/errorAlert";
import { SkeletonCard } from "@/components/loading/LoadingSkeleton";
import { VacancyType } from "../../VacanciesPage.types";

const SingleVacancy = () => {
  const { vac_id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleClick = () => {
    navigate(-1);
  };
  const {
    data: singleVacancy,
    isLoading,
    isError,
    error,
  } = useGetSingleVacancy(vac_id ?? "");

  return (
    <div className="container mx-auto max-w-6xl space-y-6 p-8 text-xs">
      <Button
        variant="outline"
        className="mb-4 text-primary"
        onClick={handleClick}
      >
        {" "}
        <CircleChevronLeft />
        {t("single-vacancy.back-button")}
      </Button>
      {!isLoading && !isError ? (
        <SingleVacancyMainContent
          singleVacancy={singleVacancy as VacancyType}
        />
      ) : (
        <>
          <SkeletonCard />
          <SkeletonCard />
        </>
      )}
      {isError && (
        <div className="mx-auto max-w-md">
          <AlertDestructive
            alertTitle={`Sorry Could Not Fetch Vacancy #${vac_id}`}
            alertDescription={error.message}
          />
        </div>
      )}
    </div>
  );
};

export default SingleVacancy;
