import { useAuthContext } from "@/context/hooks/useAuthContext";
import { useFavoriteList } from "@/react-query/query/favorites/favoritesQuery";
import VacancyList, { VacancyType } from "../vacancies/components/VacancyList";

const FavoritesPage = () => {
  const { user } = useAuthContext();
  const { data: favoriteVacanciesList } = useFavoriteList(user?.id ?? "");
  console.log(favoriteVacanciesList);
  return (
    <div className="space-y-2 px-4">
      <VacancyList vacanciesList={favoriteVacanciesList as VacancyType[]} />
    </div>
  );
};

export default FavoritesPage;
