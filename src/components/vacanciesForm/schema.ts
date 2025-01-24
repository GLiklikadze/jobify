import { z } from "zod";

export const addVacancyFormSchema = z
  .object({
    title: z.string().min(3, "Job Title is required"),
    category: z.string().nonempty("Please select category"),
    location: z.string().nonempty("Please select location"),
    jobType: z.string().nonempty("Please select job type"),
    salaryMin: z.number().min(1, "Salary must be non-negative"),
    salaryMax: z.number().min(2, "Salary must be non-negative"),
    requirements: z
      .string()
      .min(10, "Job Requirements must be min 10 characters"),
    description: z.string().min(10, "Job Description is required"),
    benefits: z.string().min(10, "Job Benefits is required"),
    qualifications: z.string().min(10, "Job Qualifications is required"),
    responsibilities: z.string().min(10, "Job Responsibilities is required"),
  })
  .refine((data) => data.salaryMax > data.salaryMin, {
    message: "The salary max must be greater than salary min",
    path: ["salaryMax"],
  });
