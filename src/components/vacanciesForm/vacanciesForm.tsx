import { Button } from "@/components/ui/button/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form/Form";
import { FormControl } from "@/components/ui/form/FormComponents";
import { FormDescription } from "@/components/ui/form/FormComponents";
import { FormField } from "@/components/ui/form/FormField";
import { FormItem } from "@/components/ui/form/FormComponents";
import { FormLabel } from "@/components/ui/form/FormComponents";
import { FormMessage } from "@/components/ui/form/FormComponents";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import { VacanciesCreateFormProps } from "./vacanciesForm.types";
import { t } from "i18next";

const VacanciesCreateForm: React.FC<VacanciesCreateFormProps> = ({
  form,
  onSubmit,
  buttonLabel,
}) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-primary">
            {t("vacancies-form.basic-section")}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="title"
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel> {t("vacancies-form.title-label")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Senior UX Designer"
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                  {error?.message}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field: { value, onChange } }) => (
                <FormItem>
                  <FormLabel>{t("vacancies-form.category-label")}</FormLabel>
                  <Select
                    value={value}
                    onValueChange={(val) => onChange(val === "none" ? "" : val)}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="Finance">Finance</SelectItem>
                      <SelectItem value="Marketing">Marketing</SelectItem>
                      <SelectItem value="Sales">Sales</SelectItem>
                      <SelectItem value="IT">IT</SelectItem>
                      <SelectItem value="Medicine">Medicine</SelectItem>
                      <SelectItem value="Education">Education</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="location"
              render={({ field: { value, onChange } }) => (
                <FormItem>
                  <FormLabel>{t("vacancies-form.location-label")}</FormLabel>
                  <Select value={value} onValueChange={(val) => onChange(val)}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Location" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Tbilisi">Tbilisi</SelectItem>
                      <SelectItem value="Kutaisi">Kutaisi</SelectItem>
                      <SelectItem value="Batumi">Batumi</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="jobType"
              render={({ field: { value, onChange } }) => (
                <FormItem>
                  <FormLabel>
                    {t("vacancies-form.employmentType-label")}
                  </FormLabel>
                  <Select value={value} onValueChange={(val) => onChange(val)}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select employment type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Full-time">Full-time</SelectItem>
                      <SelectItem value="Part-time">Part-time</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                      <SelectItem value="Freelance">Freelance</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="salaryMin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("vacancies-form.minSalary-label")}</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      value={field.value ?? ""}
                      onChange={(e) =>
                        field.onChange(
                          e.target.value === "" ? undefined : +e.target.value,
                        )
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="salaryMax"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("vacancies-form.maxSalary-label")}</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      value={field.value ?? ""}
                      onChange={(e) =>
                        field.onChange(
                          e.target.value === "" ? undefined : +e.target.value,
                        )
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-primary">
            {" "}
            {t("vacancies-form.details-section")}
          </h2>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("vacancies-form.description-label")}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter the job description..."
                    className="min-h-[150px]"
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="qualifications"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {t("vacancies-form.qualifications-label")}
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter job requirements..."
                    className="min-h-[150px]"
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormDescription>
                  {t("vacancies-form.qualifications-instruction")}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="requirements"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("vacancies-form.requirements-label")}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter job requirements..."
                    className="min-h-[150px]"
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormDescription>
                  {t("vacancies-form.requirements-instruction")}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="responsibilities"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {t("vacancies-form.responsibilities-label")}
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter job responsibilities..."
                    className="min-h-[150px]"
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormDescription>
                  {t("vacancies-form.responsibilities-instruction")}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="benefits"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("vacancies-form.benefits-label")}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter job benefits..."
                    className="min-h-[150px]"
                    {...field}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormDescription>
                  {t("vacancies-form.benefits-instruction")}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full">
          {buttonLabel}
        </Button>
      </form>
    </Form>
  );
};

export default VacanciesCreateForm;
