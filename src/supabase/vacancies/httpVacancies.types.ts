export type CreateVacanciesType = {
  title: string | null;
  category: string | null;
  companyName?: string | null;
  location: string | null;
  jobType: string | null;
  salaryMin: number | null;
  salaryMax: number | null;
  description: string | null;
  requirements: string | null;
  contactEmail?: string | null;
  qualifications: string | null;
  benefits: string | null;
  responsibilities: string | null;
};
