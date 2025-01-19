import { Input } from "@/components/ui/input";
import VacancyList from "./components/VacancyList";
import { Briefcase, Building2, Search } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { useGetFilteredVacanciesList } from "@/react-query/query/vacancies/vacanciesQuery";
import { Label } from "@/components/ui/label";
import { useSearchParams } from "react-router-dom";
import qs from "qs";
import { useEffect } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import vacancy_illustration from "@/assets/search-vacancy-illustration.svg";
import data_proccesing from "@/assets/data-processing_z2q6.svg";

// const searchDefaultValues = {
//   searchText: "",
// };
const searchDefaultValues = {
  searchVacancy: "",
  searchCompany: "",
};

type searchObjType = {
  searchVacancy: string;
  searchCompany: string;
};
const VacanciesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams(searchDefaultValues);

  const parsedQueryParams = qs.parse(searchParams.toString()) as searchObjType;

  const { control, watch } = useForm({
    defaultValues: parsedQueryParams,
  });
  const searchVacancy = watch("searchVacancy");
  const searchCompany = watch("searchCompany");
  const debouncedVacancyText = useDebounce(searchVacancy, 600);
  const debouncedCompanyText = useDebounce(searchCompany, 600);

  const { data: vacanciesList, isSuccess } = useGetFilteredVacanciesList(
    debouncedVacancyText,
    debouncedCompanyText,
  );

  useEffect(() => {
    if (isSuccess) {
      setSearchParams(
        qs.stringify(
          {
            searchVacancy: debouncedVacancyText,
            searchCompany: debouncedCompanyText,
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
  }, [isSuccess, debouncedVacancyText, debouncedCompanyText, setSearchParams]);
  return (
    <div className="mx-8 mt-4 space-y-1">
      <div className="mx-auto flex max-w-4xl flex-col-reverse justify-start gap-2 md:flex-row">
        <img src={vacancy_illustration} className="mx-auto h-28 w-28" />
        <div className="mx-auto flex max-w-xl flex-col items-center gap-4 rounded-md border-2 border-primary p-4 md:mx-0 md:mb-8 md:h-20 md:flex-row">
          <div className="flex items-center gap-2">
            <Label htmlFor="searchVacancy">
              <Briefcase className="text-orange-700" />
            </Label>
            <Controller
              control={control}
              name="searchVacancy"
              render={({ field }) => (
                <Input
                  id="searchVacancy"
                  type="text"
                  placeholder="Front End Developer"
                  className="h-10"
                  {...field}
                />
              )}
            />
          </div>
          <div className="flex items-center gap-2">
            <Label htmlFor="searchCompany">
              <Building2 className="text-orange-700" />
            </Label>
            <Controller
              control={control}
              name="searchCompany"
              render={({ field }) => (
                <Input
                  type="text"
                  placeholder="Facebook"
                  {...field}
                  className="border-bottom-2 h-10"
                />
              )}
            />
          </div>

          <Search className="text-primary" />
        </div>
        <img src={data_proccesing} className="mx-auto h-28 w-28" />
      </div>
      <div className="space-y-2">
        <VacancyList vacanciesList={vacanciesList ?? []} />
      </div>
    </div>
  );
};

export default VacanciesPage;
