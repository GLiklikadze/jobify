import { Input } from "@/components/ui/input";
import VacancyList from "./components/VacancyList";
import { Briefcase, Building2, Component, MapPin } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { useGetFilteredVacanciesList } from "@/react-query/query/vacancies/vacanciesQuery";
import { Label } from "@/components/ui/label";
import { useSearchParams } from "react-router-dom";
import qs from "qs";
import { useEffect } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import vacancy_illustration from "@/assets/search-vacancy-illustration.svg";
import data_proccesing from "@/assets/data-processing_z2q6.svg";
import search_illustration from "@/assets/search_vimp.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import SortButton from "./components/SortButton";

const searchDefaultValues = {
  searchVacancy: "",
  searchCompany: "",
  sortOrder: "",
  address: "",
  category: "",
};

type searchObjType = {
  searchVacancy: string;
  searchCompany: string;
  sortOrder: "asc" | "desc";
  address: string;
  category: string;
};
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

  const getSortBoolean = (sortOrder: "asc" | "desc") => {
    if (sortOrder === "asc") {
      return true;
    } else {
      return false;
    }
  };

  const debouncedVacancyText = useDebounce(searchVacancy, 600);
  const debouncedCompanyText = useDebounce(searchCompany, 600);

  const { data: vacanciesList, isSuccess } = useGetFilteredVacanciesList(
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
    <div className="mx-8 mt-4 space-y-1">
      <div className="mx-auto flex max-w-4xl flex-col-reverse justify-start gap-2 md:flex-row">
        <img src={vacancy_illustration} className="mx-auto h-28 w-28" />
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-md border-2 border-primary p-4 sm:flex-row md:mx-0 md:mb-8 md:h-36">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 md:flex-row">
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
                      className="sm:w-54 h-10 w-56"
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
                      className="sm:w-54 h-10 w-56"
                    />
                  )}
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <div className="flex items-center gap-2">
                <Label>
                  <MapPin className="text-orange-700" />
                </Label>
                <Controller
                  name="address"
                  control={control}
                  render={({ field: { value, onChange } }) => {
                    return (
                      <Select
                        value={value}
                        onValueChange={(val) =>
                          onChange(val === "all" ? "" : val)
                        }
                      >
                        <SelectTrigger className="sm:w-54 w-56">
                          <SelectValue placeholder="Location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All</SelectItem>
                          <SelectItem value="Tbilisi">Tbilisi</SelectItem>
                          <SelectItem value="Kutaisi">Kutaisi</SelectItem>
                          <SelectItem value="Batumi">Batumi</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    );
                  }}
                />
              </div>
              <div className="flex items-center gap-2">
                <Label>
                  <Component className="text-orange-700" />
                </Label>
                <Controller
                  name="category"
                  control={control}
                  render={({ field: { value, onChange } }) => {
                    return (
                      <Select
                        value={value}
                        onValueChange={(val) =>
                          onChange(val === "all" ? "" : val)
                        }
                      >
                        <SelectTrigger className="sm:w-54 w-56">
                          <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">None</SelectItem>
                          <SelectItem value="Finance">Finance</SelectItem>
                          <SelectItem value="Marketing">Marketing</SelectItem>
                          <SelectItem value="Sales">Sales</SelectItem>
                          <SelectItem value="IT">IT</SelectItem>
                          <SelectItem value="Medicine">Medicine</SelectItem>
                          <SelectItem value="Education">Education</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    );
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <img src={search_illustration} className="mx-auto h-10 w-14" />
          </div>
        </div>
        <img src={data_proccesing} className="mx-auto h-28 w-28" />
      </div>
      <div className="space-y-2">
        <div className="mx-auto max-w-4xl">
          <SortButton
            isAscSorted={getSortBoolean(sortOrder)}
            toggleSortOrder={toggleSortOrder}
          />
        </div>
        <VacancyList vacanciesList={vacanciesList ?? []} />
      </div>
    </div>
  );
};

export default VacanciesPage;
