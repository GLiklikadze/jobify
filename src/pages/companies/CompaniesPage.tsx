import { useFilteredProfileList } from "@/react-query/query/profile/profileQuery";
import { BriefcaseIcon, Building2 } from "lucide-react";
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
import LoadingSkeletonList from "@/components/loading/LoadingSkeletonList";
import { AlertDestructive } from "@/components/error/errorAlert";

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

  const {
    data: filteredProfiles,
    isSuccess,
    isLoading,
    error,
    isError,
  } = useFilteredProfileList(debouncedText);

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
    <div className="mx-10 min-h-[30rem] xl:mx-60">
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
      <div className="mx-auto flex max-w-4xl">
        {(filteredProfiles || !isError || !isLoading) && (
          <div className="w-15 mx-auto my-5 flex h-9 flex-row items-center gap-2 rounded-md border-2 bg-secondary px-5 text-primary">
            {" "}
            <Building2 size="1.2rem" />
            <span className="text-base font-semibold">
              {filteredProfiles?.length}
            </span>
          </div>
        )}
      </div>
      {!isLoading ? (
        <CompaniesList filteredProfiles={filteredProfiles ?? []} />
      ) : (
        <LoadingSkeletonList />
      )}
      {isError && (
        <div className="mx-auto max-w-md">
          <AlertDestructive
            alertTitle="Sorry Could Not Fetch Companies"
            alertDescription={error.message}
          />
        </div>
      )}
    </div>
  );
};

export default CompaniesPage;
