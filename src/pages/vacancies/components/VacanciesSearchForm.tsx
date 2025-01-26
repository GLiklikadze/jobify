import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Briefcase, Building2, Component, MapPin } from "lucide-react";
import { Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";

const VacanciesSearchForm = ({ control }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <Label htmlFor="searchVacancy">
            <Briefcase className="text-orange-700" />
          </Label>
          <Controller
            control={control}
            name="searchVacancy"
            render={({ field }) => (
              <Input
                id="searchVacancy"
                type="text"
                placeholder="Front End Developer"
                className="sm:w-54 h-10 w-56"
                {...field}
              />
            )}
          />
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="searchCompany">
            <Building2 className="text-orange-700" />
          </Label>
          <Controller
            control={control}
            name="searchCompany"
            render={({ field }) => (
              <Input
                type="text"
                placeholder="Facebook"
                {...field}
                className="sm:w-54 h-10 w-56"
              />
            )}
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <Label>
            <MapPin className="text-orange-700" />
          </Label>
          <Controller
            name="address"
            control={control}
            render={({ field: { value, onChange } }) => {
              return (
                <Select
                  value={value}
                  onValueChange={(val) => onChange(val === "all" ? "" : val)}
                >
                  <SelectTrigger className="sm:w-54 w-56">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="Tbilisi">Tbilisi</SelectItem>
                    <SelectItem value="Kutaisi">Kutaisi</SelectItem>
                    <SelectItem value="Batumi">Batumi</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              );
            }}
          />
        </div>
        <div className="flex items-center gap-2">
          <Label>
            <Component className="text-orange-700" />
          </Label>
          <Controller
            name="category"
            control={control}
            render={({ field: { value, onChange } }) => {
              return (
                <Select
                  value={value}
                  onValueChange={(val) => onChange(val === "all" ? "" : val)}
                >
                  <SelectTrigger className="sm:w-54 w-56">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">None</SelectItem>
                    <SelectItem value="Finance">Finance</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Sales">Sales</SelectItem>
                    <SelectItem value="IT">IT</SelectItem>
                    <SelectItem value="Medicine">Medicine</SelectItem>
                    <SelectItem value="Education">Education</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default VacanciesSearchForm;
