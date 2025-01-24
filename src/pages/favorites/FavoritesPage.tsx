import { useAuthContext } from "@/context/hooks/useAuthContext";
import { useFavoriteList } from "@/react-query/query/favorites/favoritesQuery";
import VacancyList, { VacancyType } from "../vacancies/components/VacancyList";

const FavoritesPage = () => {
  const { user } = useAuthContext();
  const { data: favoriteVacanciesList } = useFavoriteList(user?.id ?? "");
  console.log(favoriteVacanciesList);
  return (
    <div className="mx-auto space-y-4 px-4">
      <div className="mx-auto flex">
        <h1 className="text-2xl font-bold text-primary">Favorites List</h1>
        <div className="text-xl text-orange-700">
          {favoriteVacanciesList?.length}
        </div>
      </div>
      <VacancyList vacanciesList={favoriteVacanciesList as VacancyType[]} />
    </div>
  );
};

export default FavoritesPage;
