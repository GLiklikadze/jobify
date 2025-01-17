import VacancyList from "@/pages/vacancies/components/VacancyList";
import { useGetMyVacanciesList } from "@/react-query/query/vacancies/vacanciesQuery";
import { useParams } from "react-router-dom";

const CompaniesVacancies = () => {
  const { company_id } = useParams();
  const { data: vacanciesList } = useGetMyVacanciesList(company_id ?? "");

  return <VacancyList vacanciesList={vacanciesList ?? []} />;
};

export default CompaniesVacancies;
