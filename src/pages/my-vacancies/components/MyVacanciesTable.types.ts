import { VacancyType } from "@/pages/vacancies/VacanciesPage.types";

export type MyVacanciesTableProps = {
  handleDeleteClick: (id: number) => void;
  vacanciesList: VacancyType[];
};
