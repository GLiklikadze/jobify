export type ProfileResponse = {
  company_name: string | null;
  full_name: string | null;
  logo_url: string | null;
  avatar_url: string | null;
  address: string | null;
  id: string;
  phone_number: string | null;
  updated_at: string | null;
  username: string | null;
  vacancies: Vacancy[];
};
export type CompaniesListProps = {
  filteredProfiles: ProfileResponse[];
};
export type Vacancy = {
  benefits: string | null;
  companyName: string | null;
  contactEmail: string | null;
  created_at: string;
  description: string | null;
  id: number;
  jobType: string | null;
  location: string | null;
  qualifications: string | null;
  requirements: string | null;
  responsibilities: string | null;
  salaryMax: number | null;
  salaryMin: number | null;
  title: string | null;
  user_id: string | null;
};
