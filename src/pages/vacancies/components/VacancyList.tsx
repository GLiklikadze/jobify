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

const VacancyList: React.FC<VacancyListProps> = ({ vacanciesList }) => {
  const { lang } = useParams();
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
    console.log(currentVacancy?.contactEmail, subject);
  };

  const { mutate: addToFavListMutate } = useAddFavoriteList();
  const { mutate: deleteFromFavoritesMutate } = useDeleteFavorite();
  const handleFavoriteClick = (
    e: MouseEvent,
    vacancyId: number,
    profileId: string,
  ) => {
    e.stopPropagation();
    addToFavListMutate({ vacancyId, profileId });
  };
  const handleFavoriteDelClick = (
    e: MouseEvent,
    vacancyId: number,
    profileId: string,
  ) => {
    e.stopPropagation();
    deleteFromFavoritesMutate({ vacancyId, profileId });
  };

  if (!vacanciesList) {
    return <p>Loading...</p>;
  }
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
