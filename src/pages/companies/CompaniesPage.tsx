import { useFilteredProfileList } from "@/react-query/query/profile/profileQuery";
import { Search } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button/button";
import { useSearchParams } from "react-router-dom";
import qs from "qs";
import { useEffect } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import CompaniesList from "./components/CompaniesList";

const searchDefaultValues = {
  searchText: "",
};

type searchObjType = {
  searchText: string;
};
const CompaniesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams(searchDefaultValues);

  const parsedQueryParams = qs.parse(searchParams.toString()) as searchObjType;

  const { control, handleSubmit, watch } = useForm({
    defaultValues: parsedQueryParams,
  });
  const searchText = watch("searchText");
  const debouncedText = useDebounce(searchText, 600);

  const {
    data: filteredProfiles,
    isSuccess,
    refetch: refetchFilteredList,
  } = useFilteredProfileList(debouncedText);

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
    <div className="xl:px-60">
      <div>
        <h1>Search Companies</h1>
      </div>
      <div className="mx-auto flex max-w-4xl flex-row justify-start">
        <div className="mx-auto mb-8 flex h-20 max-w-xl flex-row items-center gap-4 rounded-md border-2 p-4">
          <Label>Company</Label>
          <Controller
            control={control}
            name="searchText"
            render={({ field }) => (
              <Input type="text" placeholder="Facebook" {...field} />
            )}
          />
          <Button variant="outline" onClick={handleSubmit(onSubmit)}>
            <Search />
            Search
          </Button>
        </div>
        {/* <img src={vacancy_illustration} className="h-28 w-28" /> */}
      </div>
      <CompaniesList filteredProfiles={filteredProfiles ?? []} />
    </div>
  );
};

export default CompaniesPage;
