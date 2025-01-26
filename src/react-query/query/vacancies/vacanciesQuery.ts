import {
  getFilteredVacancies,
  getMyVacancies,
  getSingleVacancy,
  getVacancies,
} from "@/supabase/vacancies/httpVacancies";
import { useQuery } from "@tanstack/react-query";

export const useGetVacanciesList = () => {
  return useQuery({
    queryKey: ["get-vacancies"],
    queryFn: getVacancies,
  });
};

export const useGetMyVacanciesList = (user_id: string) => {
  return useQuery({
    queryKey: ["get-vacancies-list", user_id],
    queryFn: () => getMyVacancies(user_id),
    enabled: !!user_id,
    staleTime: 5 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
};

export const useGetFilteredVacanciesList = (
  debouncedVacancyText: string,
  debouncedCompanyText: string,
  isAscSorted: boolean,
  searchAddress: string,
  searchCategory: string,
) => {
  return useQuery({
    queryKey: [
      "get-filtered-vacancies",
      debouncedVacancyText,
      debouncedCompanyText,
      isAscSorted,
      searchAddress,
      searchCategory,
    ],
    queryFn: () =>
      getFilteredVacancies(
        debouncedVacancyText ?? "",
        debouncedCompanyText ?? "",
        isAscSorted,
        searchAddress,
        searchCategory,
      ),
    staleTime: 5 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
};

export const useGetSingleVacancy = (id: string) => {
  return useQuery({
    queryKey: ["single-vacancy", id],
    queryFn: () => getSingleVacancy(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
};
