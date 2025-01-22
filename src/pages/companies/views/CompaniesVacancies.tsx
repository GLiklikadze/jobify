import VacancyList from "@/pages/vacancies/components/VacancyList";
import { useGetMyVacanciesList } from "@/react-query/query/vacancies/vacanciesQuery";
import { Building2 } from "lucide-react";
import { useParams } from "react-router-dom";

const CompaniesVacancies = () => {
  const { company_id } = useParams();
  const {
    data: vacanciesList,
    isError,
    isLoading,
  } = useGetMyVacanciesList(company_id ?? "");

  return (
    <div className="-mt-8 space-y-2">
      <div className="bg-gray-40 dark:bg-blue-900 dark:bg-opacity-25">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between p-4 text-primary sm:flex-row">
          <h1 className="text-2xl font-bold">Company Vacancies</h1>
          <p className="flex flex-row gap-2 text-sm font-semibold">
            <Building2 size="1.2rem" className="text-orange-700" />
            {!isError && !isLoading && vacanciesList?.[0]?.companyName}
            <span className="text-orange-700">( {vacanciesList?.length} )</span>
          </p>
        </div>
        <hr />
      </div>
      <div className="px-4">
        <VacancyList vacanciesList={vacanciesList ?? []} />
      </div>
    </div>
  );
};

export default CompaniesVacancies;
