import { Button } from "@/components/ui/button/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreateVacancies } from "@/react-query/mutation/vacancies/vacanciesMutation";
import { Controller, useForm } from "react-hook-form";

const AddVacanciesPage = () => {
  const createVacanciesFormDefaultValues = {
    benefits: "",
    description: "",
    email: "",
    jobType: "",
    location: "",
    qualifications: "",
    responsibilities: "",
    title: "",
  };
  type createVacancies = {
    title: string | null;
    description: string | null;
    benefits: string | null;
    jobType: string | null;
    email: string | null;
    location: string | null;
    qualifications: string | null;
    responsibilities: string | null;
    salary: string | null;
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<createVacancies>({
    defaultValues: createVacanciesFormDefaultValues,
  });

  const { createVacanciesMutate } = useCreateVacancies();

  const onSubmit = (formValues: createVacancies) => {
    createVacanciesMutate({ formValues });
  };

  return (
    <div className="w-1/4 mx-auto">
      <Label htmlFor="title">ვაკანსიის დასახელება</Label>
      <Controller
        control={control}
        name="title"
        render={({ field: { onChange, value, onBlur } }) => {
          return (
            <Input
              id="title"
              value={value ?? ""}
              onChange={onChange}
              onBlur={onBlur}
              type="text"
              placeholder=""
            />
          );
        }}
      />
      <Label htmlFor="description">ვაკანსიის აღწერა</Label>
      <Controller
        control={control}
        name="description"
        render={({ field: { onChange, value, onBlur } }) => {
          return (
            <Input
              id="title"
              value={value ?? ""}
              onChange={onChange}
              onBlur={onBlur}
              type="text"
              placeholder=""
            />
          );
        }}
      />
      <Label htmlFor="benefits">უპირატესობები</Label>
      <Controller
        control={control}
        name="benefits"
        render={({ field: { onChange, value, onBlur } }) => {
          return (
            <Input
              id="benefits"
              value={value ?? ""}
              onChange={onChange}
              onBlur={onBlur}
              type="text"
              placeholder=""
            />
          );
        }}
      />
      <Label htmlFor="jobType">სამუშაოს ტიპი</Label>
      <Controller
        control={control}
        name="jobType"
        render={({ field: { onChange, value, onBlur } }) => {
          return (
            <Input
              id="jobType"
              value={value ?? ""}
              onChange={onChange}
              onBlur={onBlur}
              type="text"
              placeholder=""
            />
          );
        }}
      />
      <Label htmlFor="email">ელ ფოსტა</Label>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value, onBlur } }) => {
          return (
            <Input
              id="email"
              value={value ?? ""}
              onChange={onChange}
              onBlur={onBlur}
              type="text"
              placeholder=""
            />
          );
        }}
      />
      <Label htmlFor="location">ლოკაცია</Label>
      <Controller
        control={control}
        name="location"
        render={({ field: { onChange, value, onBlur } }) => {
          return (
            <Input
              id="location"
              value={value ?? ""}
              onChange={onChange}
              onBlur={onBlur}
              type="text"
              placeholder=""
            />
          );
        }}
      />
      <Label htmlFor="qualifications">კვალიფიკაცია</Label>
      <Controller
        control={control}
        name="qualifications"
        render={({ field: { onChange, value, onBlur } }) => {
          return (
            <Input
              id="qualifications"
              value={value ?? ""}
              onChange={onChange}
              onBlur={onBlur}
              type="text"
              placeholder=""
            />
          );
        }}
      />
      <Label htmlFor="responsibilities">პასუხისმგებლობა</Label>
      <Controller
        control={control}
        name="responsibilities"
        render={({ field: { onChange, value, onBlur } }) => {
          return (
            <Input
              id="responsibilities"
              value={value ?? ""}
              onChange={onChange}
              onBlur={onBlur}
              type="text"
              placeholder=""
            />
          );
        }}
      />
      <Label htmlFor="salary">ხელფასი</Label>
      <Controller
        control={control}
        name="salary"
        render={({ field: { onChange, value, onBlur } }) => {
          return (
            <Input
              id="salary"
              value={value ?? ""}
              onChange={onChange}
              onBlur={onBlur}
              type="text"
              placeholder=""
            />
          );
        }}
      />
      <Button onClick={handleSubmit(onSubmit)}>Create</Button>
    </div>
  );
};

export default AddVacanciesPage;
