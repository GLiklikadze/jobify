import {
  getFilteredVacancies,
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

export const useGetFilteredVacanciesList = (searchText?: string) => {
  return useQuery({
    queryKey: ["get-filtered-vacancies", searchText],
    queryFn: () => getFilteredVacancies(searchText ?? ""),
    staleTime: 5 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
};

export const useGetSingleVacancy = (id: string) => {
  return useQuery({
    queryKey: ["single-vacancy", id],
    queryFn: () => getSingleVacancy(id),
  });
};
