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
    queryKey: ["get-vacancies", user_id],
    queryFn: () => getMyVacancies(user_id),
  });
};

export const useGetFilteredVacanciesList = (
  debouncedVacancyText: string,
  debouncedCompanyText: string,
) => {
  return useQuery({
    queryKey: [
      "get-filtered-vacancies",
      debouncedVacancyText,
      debouncedCompanyText,
    ],
    queryFn: () =>
      getFilteredVacancies(
        debouncedVacancyText ?? "",
        debouncedCompanyText ?? "",
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
