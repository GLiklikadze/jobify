import { useForm } from "react-hook-form";

import { useGetFilteredVacanciesList } from "@/react-query/query/vacancies/vacanciesQuery";
import VacancyList from "./components/VacancyList";
import { useSearchParams } from "react-router-dom";
import qs from "qs";
import { useEffect } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import vacancy_illustration from "@/assets/search-vacancy-illustration.svg";
import data_proccesing from "@/assets/data-processing_z2q6.svg";
import search_illustration from "@/assets/search_vimp.svg";

import SortButton from "./components/SortButton";
import { AlertDestructive } from "@/components/error/errorAlert";
import LoadingSkeletonList from "@/components/loading/LoadingSkeletonList";
import { searchObjType } from "./VacanciesPage.types";
import VacanciesSearchForm from "./components/VacanciesSearchForm";
import { getSortBoolean } from "./utils/getSortBoolean";
import { searchDefaultValues } from "./components/searchDefaultValues";
import { List } from "lucide-react";

const VacanciesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams(searchDefaultValues);
  const parsedQueryParams = qs.parse(searchParams.toString()) as searchObjType;

  const { control, watch, setValue } = useForm({
    defaultValues: parsedQueryParams,
  });
  const searchVacancy = watch("searchVacancy");
  const searchCompany = watch("searchCompany");
  const searchAddress = watch("address");
  const searchCategory = watch("category");
  const sortOrder = watch("sortOrder");

  const debouncedVacancyText = useDebounce(searchVacancy, 600);
  const debouncedCompanyText = useDebounce(searchCompany, 600);

  const {
    data: vacanciesList,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetFilteredVacanciesList(
    debouncedVacancyText,
    debouncedCompanyText,
    getSortBoolean(sortOrder),
    searchAddress,
    searchCategory,
  );

  const toggleSortOrder = (sortValue: "asc" | "desc") => {
    if (sortValue != sortOrder) {
      setValue("sortOrder", sortValue);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setSearchParams(
        qs.stringify(
          {
            searchVacancy: debouncedVacancyText,
            searchCompany: debouncedCompanyText,
            address: searchAddress,
            category: searchCategory,
            sortOrder,
          },
          {
            skipNulls: true,
            filter: (_, value) => {
              return value || undefined;
            },
          },
        ),
      );
    }
  }, [
    isSuccess,
    debouncedVacancyText,
    debouncedCompanyText,
    setSearchParams,
    sortOrder,
    searchAddress,
    searchCategory,
  ]);

  return (
    <div className="mx-4 mt-4 space-y-1">
      <div className="mx-auto flex max-w-4xl flex-col-reverse justify-start gap-2 md:flex-row">
        <img src={vacancy_illustration} className="mx-auto h-28 w-28" />
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-md border-2 border-primary p-4 sm:flex-row md:mx-0 md:mb-8 md:h-36">
          <VacanciesSearchForm control={control} />
          <div>
            <img src={search_illustration} className="mx-auto h-10 w-14" />
          </div>
        </div>
        <img src={data_proccesing} className="mx-auto h-28 w-28" />
      </div>
      <div className="space-y-2">
        <div className="mx-auto flex max-w-4xl justify-between">
          <SortButton
            isAscSorted={getSortBoolean(sortOrder)}
            toggleSortOrder={toggleSortOrder}
          />
          {(vacanciesList || !isError || !isLoading) && (
            <div className="flex flex-row items-center gap-2 rounded-md border-2 bg-secondary px-2 text-primary">
              {" "}
              <List size="1rem" />
              <span className="font-xs text-sm font-semibold">
                {vacanciesList?.length}
              </span>
            </div>
          )}
        </div>
        {!isLoading ? (
          <VacancyList vacanciesList={vacanciesList ?? []} />
        ) : (
          <LoadingSkeletonList />
        )}
        {isError && (
          <div className="mx-auto max-w-md">
            <AlertDestructive
              alertTitle="Sorry Could Not Fetch Vacancies"
              alertDescription={error.message}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default VacanciesPage;
