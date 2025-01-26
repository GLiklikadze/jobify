import { ListCollapse } from "lucide-react";
import { useGetMyVacanciesList } from "@/react-query/query/vacancies/vacanciesQuery";

import { Card } from "@/components/ui/card";
import { useDeleteVacancy } from "@/react-query/mutation/vacancies/vacanciesMutation";
import { useAuthContext } from "@/context/hooks/useAuthContext";
import { t } from "i18next";
import MyVacanciesTable from "./MyVacanciesTable";
import { AlertDestructive } from "@/components/error/errorAlert";
import LoadingSkeletonList from "@/components/loading/LoadingSkeletonList";
import { toast } from "@/hooks/use-toast";
import { useEffect } from "react";

const MyVacancies = () => {
  const { user } = useAuthContext();
  const {
    data: vacanciesList,
    isLoading,
    isError,
    error,
  } = useGetMyVacanciesList(user?.id ?? "");
  const { mutate: mutateVacancyDelete, isSuccess: deletedSuccessfully } =
    useDeleteVacancy();
  useEffect(() => {
    if (deletedSuccessfully) {
      toast({
        title: "Vacancy Deleted Successfully",
      });
    }
  }, [deletedSuccessfully]);
  const handleDeleteClick = (id: number) => {
    mutateVacancyDelete(id);
  };

  return (
    <>
      <Card className="mx-4 max-w-4xl space-y-9 px-4 pb-9 pt-6 md:mx-auto">
        <div className="mx-auto flex items-center justify-center gap-2 text-center text-xl font-bold text-primary">
          <ListCollapse />
          <h1>{t("my-vacancies.my-vacancies-heading")}</h1>{" "}
          <span className="text-orange-700">({vacanciesList?.length})</span>
        </div>
        {!isLoading ? (
          <MyVacanciesTable
            vacanciesList={vacanciesList ?? []}
            handleDeleteClick={handleDeleteClick}
          />
        ) : (
          <LoadingSkeletonList />
        )}
        {isError && (
          <div className="mx-auto max-w-md">
            <AlertDestructive
              alertTitle="Sorry Could Not Fetch Vacancies"
              alertDescription={error.message}
            />
          </div>
        )}
      </Card>
    </>
  );
};

export default MyVacancies;
