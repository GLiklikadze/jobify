import { createVacancies } from "@/supabase/vacancies/httpVacancies";
import { useMutation } from "@tanstack/react-query";

export const useCreateVacancies = () => {
  const {
    isSuccess: createdSuccess,
    mutate: createVacanciesMutate,
    isError: isVacanciesCreateError,
    error: VacanciesCreateError,
    isPending,
  } = useMutation({
    mutationKey: ["create-vacancy"],
    mutationFn: createVacancies,
  });
  return {
    createdSuccess,
    createVacanciesMutate,
    isVacanciesCreateError,
    VacanciesCreateError,
    isPending,
  };
};
