import { useEditVacancies } from "@/react-query/mutation/vacancies/vacanciesMutation";
import { useForm } from "react-hook-form";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import new_vacancy_svg from "@/assets/new-vacancy-svg.svg";
import { useGetSingleVacancy } from "@/react-query/query/vacancies/vacanciesQuery";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { addVacancyFormSchema } from "@/components/vacanciesForm/schema";
import { vacanciesFormDefaultValues as EditVacanciesFormDefaultValues } from "@/components/vacanciesForm/vacanciesFormDefaultValues";
import { CreateVacanciesType as EditVacancies } from "@/components/vacanciesForm/vacanciesForm.types";
import VacanciesCreateForm from "@/components/vacanciesForm/vacanciesForm";
import { useTranslation } from "react-i18next";
import { toast } from "@/hooks/use-toast";

const EditVacanciesPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const {
    mutate: mutateEditVacancies,
    isError,
    isPending,
  } = useEditVacancies();

  const { data: singleVacancy, isSuccess: isGetVacancySuccess } =
    useGetSingleVacancy(id ?? "");

  const form = useForm<EditVacancies>({
    resolver: zodResolver(addVacancyFormSchema),
    defaultValues: EditVacanciesFormDefaultValues,
    mode: "onBlur",
  });
  useEffect(() => {
    if (isGetVacancySuccess && singleVacancy) {
      form.reset({
        title: singleVacancy.title ?? "",
        location: singleVacancy.location ?? "",
        jobType: singleVacancy.jobType ?? "",
        salaryMin: singleVacancy.salaryMin ?? 0,
        salaryMax: singleVacancy.salaryMax ?? 0,
        requirements: singleVacancy.requirements ?? "",
        description: singleVacancy.description ?? "",
        benefits: singleVacancy.benefits ?? "",
        qualifications: singleVacancy.qualifications ?? "",
        responsibilities: singleVacancy.responsibilities ?? "",
        category: singleVacancy.category ?? "",
      });
    }
  }, [isGetVacancySuccess, singleVacancy, form]);

  const onSubmit = (formValues: EditVacancies) => {
    mutateEditVacancies({ formValues: formValues, id: id ?? "" });
    navigate(-1);
    if (!isError) {
      toast({
        title: "Vacancy Edit Was Successfuly",
      });
    }
    if (isError) {
      toast({
        variant: "destructive",
        title: "Vacancy Edit has Error",
      });
    }
  };

  return (
    <div className="container mx-auto max-w-3xl p-4">
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <img src={new_vacancy_svg} className="h-20 w-16" />
          <CardTitle className="text-xl text-primary">
            {t("edit-vacancies-page.heading")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <VacanciesCreateForm
            onSubmit={onSubmit}
            form={form}
            buttonLabel={t("edit-vacancies-page.button")}
            isPending={isPending}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default EditVacanciesPage;
