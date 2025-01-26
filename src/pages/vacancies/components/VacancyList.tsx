import { VacancyBox } from "./VacancyBox";

import { useNavigate, useParams } from "react-router-dom";
import { MouseEvent } from "react";
import {
  useAddFavoriteList,
  useDeleteFavorite,
} from "@/react-query/mutation/favorites/favoritesMutation";
import VacancyBoxImg from "./VacancyBoxImg";
import VacancyBoxMain from "./VacancyBoxMain";
import VacancyBoxInfo from "./VacancyBoxInfo";
import { VacancyListProps } from "../VacanciesPage.types";
import { useAuthContext } from "@/context/hooks/useAuthContext";
import { toast } from "@/hooks/use-toast";

const VacancyList: React.FC<VacancyListProps> = ({ vacanciesList }) => {
  const { lang } = useParams();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const handleClick = (vac_id: number) => {
    navigate(`/${lang}/vacancies/${vac_id}`);
  };

  const handleEmailClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number,
  ) => {
    event.stopPropagation();
    const currentVacancy = vacanciesList.find(
      (announcement) => announcement?.id === id,
    );
    const subject =
      currentVacancy?.title +
      "/" +
      currentVacancy?.jobType +
      "/" +
      currentVacancy?.location;

    window.location.href = `mailto:${currentVacancy?.contactEmail}?subject=${encodeURIComponent(subject)}`;
  };

  const { mutate: addToFavListMutate, isSuccess: isSuccessAddedInFavorites } =
    useAddFavoriteList();
  const {
    mutate: deleteFromFavoritesMutate,
    isSuccess: isSuccessRemoveFromFavorites,
  } = useDeleteFavorite();

  const handleFavoriteClick = (
    e: MouseEvent,
    vacancyId: number,
    profileId: string,
  ) => {
    e.stopPropagation();
    if (!user?.id) {
      toast({
        variant: "destructive",
        title: "Please Log in to Add In Favorites List",
      });
      return;
    }
    if (user?.id ?? isSuccessAddedInFavorites) {
      toast({
        title: `Vacancy ID:${vacancyId} Added In Favorites List`,
      });
    }
    addToFavListMutate({ vacancyId, profileId });
  };

  const handleFavoriteDelClick = (
    e: MouseEvent,
    vacancyId: number,
    profileId: string,
  ) => {
    e.stopPropagation();
    deleteFromFavoritesMutate({ vacancyId, profileId });
    if (isSuccessRemoveFromFavorites) {
      toast({
        title: `Vacancy ID:${vacancyId} Removed From Favorites List`,
      });
    }
  };

  return vacanciesList?.map((vacancy) => (
    <VacancyBox key={vacancy?.id}>
      <div
        className="flex h-[8.4rem] cursor-pointer flex-row gap-2 overflow-hidden sm:h-[5.1rem] sm:gap-8"
        onClick={() => handleClick(vacancy.id)}
      >
        <VacancyBoxImg logo_url={vacancy?.profiles?.logo_url ?? ""} />

        <div className="ml-4 flex w-full flex-col justify-between sm:flex-row">
          <VacancyBoxMain
            vacancy={vacancy}
            handleFavoriteClick={handleFavoriteClick}
            handleFavoriteDelClick={handleFavoriteDelClick}
          />
          <VacancyBoxInfo
            created_at={vacancy?.created_at}
            handleEmailClick={handleEmailClick}
            vacancyId={vacancy?.id}
          />
        </div>
      </div>
    </VacancyBox>
  ));
};

export default VacancyList;
