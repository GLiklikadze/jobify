import { useFilteredProfileList } from "@/react-query/query/profile/profileQuery";
import { BriefcaseIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "react-router-dom";
import qs from "qs";
import { useEffect } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import CompaniesList from "./components/CompaniesList";
import agreement_illustration from "@/assets/voting_3ygx.svg";
import project_team from "@/assets/agreement.svg";
import search_illustration from "@/assets/search_vimp.svg";

const searchDefaultValues = {
  searchText: "",
};

type searchObjType = {
  searchText: string;
};
const CompaniesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams(searchDefaultValues);

  const parsedQueryParams = qs.parse(searchParams.toString()) as searchObjType;

  const { control, watch } = useForm({
    defaultValues: parsedQueryParams,
  });
  const searchText = watch("searchText");
  const debouncedText = useDebounce(searchText, 600);

  const { data: filteredProfiles, isSuccess } =
    useFilteredProfileList(debouncedText);

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
    <div className="mx-10 xl:mx-60">
      <div className="mx-auto mb-12 flex max-w-4xl flex-col items-center justify-between gap-2 md:mb-4 md:flex-row">
        <img src={agreement_illustration} className="h-32 w-36" />
        <div className="mx-auto flex h-24 max-w-xl flex-row items-center gap-4 rounded-md border-2 border-primary p-4 lg:w-96">
          <Label>
            <BriefcaseIcon className="text-orange-700" />
          </Label>
          <Controller
            control={control}
            name="searchText"
            render={({ field }) => (
              <Input type="text" placeholder="Facebook" {...field} />
            )}
          />

          <img src={search_illustration} className="mx-auto h-10 w-14" />
        </div>
        <img src={project_team} className="h-32 w-36" />
      </div>
      <CompaniesList filteredProfiles={filteredProfiles ?? []} />
    </div>
  );
};

export default CompaniesPage;
