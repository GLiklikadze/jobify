import { AlertDestructive } from "@/components/error/errorAlert";
import LoadingSkeletonList from "@/components/loading/LoadingSkeletonList";
import VacancyList from "@/pages/vacancies/components/VacancyList";
import { useGetMyVacanciesList } from "@/react-query/query/vacancies/vacanciesQuery";
import { Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const CompaniesVacancies = () => {
  const { company_id } = useParams();
  const {
    data: vacanciesList,
    isError,
    isLoading,
    error,
  } = useGetMyVacanciesList(company_id ?? "");
  const { t } = useTranslation();
  return (
    <div className="-mt-8 space-y-4">
      <div className="bg-gray-40 dark:bg-[#162a47]">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between p-4 text-primary sm:flex-row">
          <h1 className="text-lg font-bold">
            {t("companies-vacancies.heading")}
          </h1>
          <div className="flex flex-row gap-2 text-sm font-semibold">
            <Building2 size="1.2rem" className="text-orange-700" />
            {!isError && !isLoading && vacanciesList?.[0]?.companyName}
            <span className="text-orange-700">( {vacanciesList?.length} )</span>
          </div>
        </div>
        <hr />
      </div>
      <div className="space-y-2 px-4">
        {!isLoading ? (
          <VacancyList vacanciesList={vacanciesList ?? []} />
        ) : (
          <LoadingSkeletonList />
        )}
      </div>
      {isError && (
        <div className="mx-auto max-w-md">
          <AlertDestructive
            alertTitle="Sorry Could Not Fetch Vacancies"
            alertDescription={error.message}
          />
        </div>
      )}
    </div>
  );
};

export default CompaniesVacancies;
