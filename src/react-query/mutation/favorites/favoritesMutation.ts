import {
  addToFavorites,
  removeFromFavorites,
} from "@/supabase/favorites/httpFavorites";
import {
  InvalidateQueryFilters,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

export const useAddFavoriteList = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["add-favorites"],
    mutationFn: addToFavorites,
    onSuccess: () => {
      queryClient.invalidateQueries([
        "get-vacancies",
        "get-filtered-vacancies",
        "favorite-list",
      ] as InvalidateQueryFilters);
    },
  });
};
export const useDeleteFavorite = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delete-favorites"],
    mutationFn: removeFromFavorites,
    onSuccess: () => {
      queryClient.invalidateQueries([
        "get-vacancies",
        "get-filtered-vacancies",
        "favorite-list",
      ] as InvalidateQueryFilters);
    },
  });
};
