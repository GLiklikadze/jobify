import { useAuthContext } from "@/context/hooks/useAuthContext";
import { useFavoriteList } from "@/react-query/query/favorites/favoritesQuery";
import VacancyList from "../vacancies/components/VacancyList";
import { Building2 } from "lucide-react";
import { VacancyType } from "../vacancies/VacanciesPage.types";

const FavoritesPage = () => {
  const { user } = useAuthContext();
  const {
    data: favoriteVacanciesList,
    isLoading,
    isError,
  } = useFavoriteList(user?.id ?? "");
  console.log(favoriteVacanciesList);
  return (
    <div className="mx-auto space-y-4">
      <div className="bg-gray-40 -mt-8 dark:bg-blue-900 dark:bg-opacity-25">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between p-4 text-primary sm:flex-row">
          <h1 className="text-2xl font-bold text-primary">Favorites List</h1>
          <div className="text-xl text-orange-700">
            <div className="flex flex-row gap-2 text-sm font-semibold">
              <Building2 size="1.2rem" className="text-orange-700" />
              {!isError &&
                !isLoading &&
                favoriteVacanciesList?.[0]?.companyName}
              <span className="text-orange-700">
                ( {favoriteVacanciesList?.length} )
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4">
        <VacancyList vacanciesList={favoriteVacanciesList as VacancyType[]} />
      </div>
    </div>
  );
};

export default FavoritesPage;
