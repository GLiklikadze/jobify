type profileResponse = {
  company_name: string | null;
  full_name: string | null;
  logo_url: string | null;
  avatar_url: string | null;
  address: string | null;
  id: string;
  phone_number: string | null;
  updated_at: string | null;
  username: string | null;
};

export type VacancyType = {
  benefits: string | null;
  companyName: string | null;
  contactEmail: string | null;
  created_at: string;
  description: string | null;
  id: number;
  category: string | null;
  jobType: string | null;
  location: string | null;
  qualifications: string | null;
  requirements: string | null;
  responsibilities: string | null;
  salaryMax: number | null;
  salaryMin: number | null;
  title: string | null;
  user_id: string | null;
  profiles?: profileResponse | null;
  favorites?:
    | { id: number | null; user_id: string | null; vacancy_id: number | null }[]
    | boolean[];
};

export type VacancyListProps = {
  vacanciesList: VacancyType[];
};

export type searchObjType = {
  searchVacancy: string;
  searchCompany: string;
  sortOrder: "asc" | "desc";
  address: string;
  category: string;
};
export type SingleVacancyMainContentProps = {
  singleVacancy: VacancyType;
};
