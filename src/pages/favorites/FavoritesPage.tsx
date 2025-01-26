import { useAuthContext } from "@/context/hooks/useAuthContext";
import { useFavoriteList } from "@/react-query/query/favorites/favoritesQuery";
import VacancyList from "../vacancies/components/VacancyList";
import { Building2 } from "lucide-react";
import { VacancyType } from "../vacancies/VacanciesPage.types";
import { useTranslation } from "react-i18next";

const FavoritesPage = () => {
  const { user } = useAuthContext();
  const {
    data: favoriteVacanciesList,
    isLoading,
    isError,
  } = useFavoriteList(user?.id ?? "");
  const { t } = useTranslation();
  return (
    <div className="mx-auto min-h-[34rem] space-y-4">
      <div className="bg-gray-40 -mt-8 dark:bg-[#162a47]">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between p-4 text-primary sm:flex-row">
          <h1 className="text-xl font-bold text-primary">
            {t("favorites-page.heading")}
          </h1>
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
        <div>
          {(favoriteVacanciesList?.length ?? 0) < 1 && (
            <h2 className="mt-14 text-center text-lg font-semibold text-primary">
              {t("favorites-page.no-vacancies")}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
