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
import { AlertDestructive } from "@/components/error/errorAlert";
import { useProfileInfo } from "@/react-query/query/profile/profileQuery";
import { useAuthContext } from "@/context/hooks/useAuthContext";
import { useTranslation } from "react-i18next";
import { toast } from "@/hooks/use-toast";

const AddVacanciesPage = () => {
  const navigate = useNavigate();
  const { lang } = useParams();
  const form = useForm<CreateVacanciesType>({
    resolver: zodResolver(addVacancyFormSchema),
    defaultValues: createVacanciesFormDefaultValue,
    mode: "onBlur",
  });

  const {
    createVacanciesMutate,
    isVacanciesCreateError,
    VacanciesCreateError,
    isPending,
  } = useCreateVacancies();

  const { user } = useAuthContext();
  const { data: profileInfo } = useProfileInfo(user?.id);

  const onSubmit = (formValues: CreateVacanciesType) => {
    const extendedFormValues = {
      ...formValues,
      companyName: profileInfo?.company_name ?? "",
      contactEmail: user?.email ?? "",
    };
    createVacanciesMutate({ formValues: extendedFormValues });
    navigate(`/${lang}/my-vacancies`);
    if (!isVacanciesCreateError) {
      toast({
        title: "Vacancy Created Was Successfuly",
        color: "red",
      });
    }
    if (isVacanciesCreateError) {
      toast({
        variant: "destructive",
        title: "Vacancy Create has Error",
      });
    }
  };
  const { t } = useTranslation();
  return (
    <div className="container mx-auto max-w-3xl p-4">
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <img
            src={new_vacancy_svg}
            className="h-20 w-16"
            alt="new_vacancy_illustration"
          />
          <CardTitle className="text-xl text-primary">
            {t("add-vacancies-page.heading")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <VacanciesCreateForm
            onSubmit={onSubmit}
            form={form}
            buttonLabel={t("add-vacancies-page.button")}
            isPending={isPending}
          />
          {isVacanciesCreateError && (
            <div className="mt-4">
              <AlertDestructive
                alertTitle={VacanciesCreateError?.name}
                alertDescription={VacanciesCreateError?.message ?? ""}
              />
            </div>
          )}
        </CardContent>
        {isVacanciesCreateError && VacanciesCreateError?.message}
      </Card>
    </div>
  );
};

export default AddVacanciesPage;
