import {
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

export const useGetSingleVacancy = (id: string) => {
  return useQuery({
    queryKey: ["single-vacancy"],
    queryFn: () => getSingleVacancy(id),
  });
};
