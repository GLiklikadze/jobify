import { UseFormReturn } from "react-hook-form";

export type CreateVacanciesType = {
  title: string;
  companyName: string;
  location: string;
  jobType: string;
  salaryMin: number;
  salaryMax: number;
  description: string;
  contactEmail: string;
  qualifications: string;
  benefits: string;
  responsibilities: string;
  requirements: string;
};
export type VacanciesCreateFormProps = {
  form: UseFormReturn<CreateVacanciesType>;
  onSubmit: (formValues: CreateVacanciesType) => void;
};
