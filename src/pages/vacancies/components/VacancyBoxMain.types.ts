import { MouseEvent } from "react";
import { VacancyType } from "../VacanciesPage.types";

export type VacancyBoxMainProps = {
  handleFavoriteClick: (
    e: MouseEvent<HTMLButtonElement>,
    vacancyId: number,
    profileId: string,
  ) => void;
  handleFavoriteDelClick: (
    e: MouseEvent<HTMLButtonElement>,
    vacancyId: number,
    profileId: string,
  ) => void;
  vacancy: VacancyType;
};
