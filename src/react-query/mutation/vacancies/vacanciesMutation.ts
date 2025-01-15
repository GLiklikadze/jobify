import {
  createVacancies,
  deleteVacancy,
  EditVacancy,
} from "@/supabase/vacancies/httpVacancies";
import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

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
export const useEditVacancies = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["Edit-vacancy"],
    mutationFn: EditVacancy,
    onSuccess: () => {
      queryClient.invalidateQueries([
        "get-vacancies",
        "get-filtered-vacancies",
      ] as InvalidateQueryFilters);
    },
  });
};

export const useDeleteVacancy = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delete-vacancy"],
    mutationFn: deleteVacancy,
    onSuccess: () => {
      queryClient.invalidateQueries([
        "get-vacancies",
        "get-filtered-vacancies",
      ] as InvalidateQueryFilters);
    },
  });
};
