import { getFavoriteVacancies } from "@/supabase/favorites/httpFavorites";
import { useQuery } from "@tanstack/react-query";

export const useFavoriteList = (user_id: string) => {
  return useQuery({
    queryKey: ["favorite-list"],
    queryFn: () => getFavoriteVacancies(user_id),
    retry: false,
    enabled: !!user_id,
    select: (data) =>
      data?.map((item) => ({
        ...item?.vacancies,
        profiles: item?.profiles,
        favorites: [true],
      })),
  });
};
