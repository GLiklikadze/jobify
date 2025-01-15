import { Input } from "@/components/ui/input";
import VacancyList from "./components/VacancyList";
import { Button } from "@/components/ui/button/button";
import { Search } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { useGetFilteredVacanciesList } from "@/react-query/query/vacancies/vacanciesQuery";
import { Label } from "@/components/ui/label";
import { useSearchParams } from "react-router-dom";
import qs from "qs";
import { useEffect } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import vacancy_illustration from "@/assets/search-vacancy-illustration.svg";

const searchDefaultValues = {
  searchText: "",
};

type searchObjType = {
  searchText: string;
};
const VacanciesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams(searchDefaultValues);

  const parsedQueryParams = qs.parse(searchParams.toString()) as searchObjType;

  const { control, handleSubmit, watch } = useForm({
    defaultValues: parsedQueryParams,
  });
  const searchText = watch("searchText");
  const debouncedText = useDebounce(searchText, 600);

  const {
    data: vacanciesList,
    refetch: refetchFilteredList,
    isSuccess,
  } = useGetFilteredVacanciesList(debouncedText);

  const onSubmit = () => {
    refetchFilteredList();
  };
  useEffect(() => {
    if (isSuccess) {
      setSearchParams(
        qs.stringify(
          { searchText: debouncedText },
          {
            skipNulls: true,
            filter: (_, value) => {
              return value || undefined;
            },
          },
        ),
      );
    }
  }, [isSuccess, debouncedText, setSearchParams]);
  return (
    <div className="container mt-4 space-y-1">
      <div className="mx-auto flex max-w-4xl flex-row justify-start">
        <div className="mx-auto mb-8 flex h-20 max-w-xl flex-row items-center gap-4 rounded-md border-2 p-4">
          <Label>Search Title</Label>
          <Controller
            control={control}
            name="searchText"
            render={({ field }) => (
              <Input type="text" placeholder="Front End Developer" {...field} />
            )}
          />
          <Button variant="outline" onClick={handleSubmit(onSubmit)}>
            <Search />
            Search
          </Button>
        </div>
        <img src={vacancy_illustration} className="h-28 w-28" />
      </div>
      <VacancyList vacanciesList={vacanciesList ?? []} />
    </div>
  );
};

export default VacanciesPage;
