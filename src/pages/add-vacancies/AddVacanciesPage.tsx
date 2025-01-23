import { useCreateVacancies } from "@/react-query/mutation/vacancies/vacanciesMutation";
import { useForm } from "react-hook-form";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import new_vacancy_svg from "@/assets/new-vacancy-svg.svg";
import { useNavigate, useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { addVacancyFormSchema } from "@/components/vacanciesForm/schema";
import VacanciesCreateForm from "@/components/vacanciesForm/vacanciesForm";
import { CreateVacanciesType } from "@/components/vacanciesForm/vacanciesForm.types";
import { vacanciesFormDefaultValues as createVacanciesFormDefaultValue } from "@/components/vacanciesForm/vacanciesFormDefaultValues";

const AddVacanciesPage = () => {
  const navigate = useNavigate();
  const { lang } = useParams();

  const form = useForm({
    resolver: zodResolver(addVacancyFormSchema),
    defaultValues: createVacanciesFormDefaultValue,
    mode: "onBlur",
  });
  const { createVacanciesMutate } = useCreateVacancies();

  const onSubmit = (formValues: CreateVacanciesType) => {
    createVacanciesMutate({ formValues });
    navigate(`/${lang}/my-vacancies`);
  };

  return (
    <div className="container mx-auto max-w-3xl p-4">
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <img src={new_vacancy_svg} className="h-20 w-16" />
          <CardTitle className="text-2xl text-primary">
            Create New Job Posting
          </CardTitle>
        </CardHeader>
        <CardContent>
          <VacanciesCreateForm onSubmit={onSubmit} form={form} />
        </CardContent>
      </Card>
    </div>
  );
};

export default AddVacanciesPage;
