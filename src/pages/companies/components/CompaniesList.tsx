import { Building2, MapPin, Phone } from "lucide-react";
import CompanyBox from "./CompanyBox";

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
type CompaniesListProps = {
  filteredProfiles: ProfileResponse[];
};
type Vacancy = {
  benefits: string | null;
  companyName: string | null;
  contactEmail: string | null;
  created_at: string;
  description: string | null;
  id: number;
  jobType: string | null;
  liked: boolean | null;
  location: string | null;
  qualifications: string | null;
  requirements: string | null;
  responsibilities: string | null;
  salaryMax: string | null;
  salaryMin: string | null;
  title: string | null;
  user_id: string | null;
};

const CompaniesList: React.FC<CompaniesListProps> = ({ filteredProfiles }) => {
  if (!filteredProfiles) {
    <p>111</p>;
  }
  return (
    <div className="flex flex-row flex-wrap gap-4">
      {filteredProfiles?.map((company: ProfileResponse) => (
        <CompanyBox key={company?.id} company_id={company?.id}>
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="mx-auto h-24 w-28 overflow-hidden rounded-lg bg-blue-100 sm:mx-0">
              <img
                src={`https://gimdvoaobxziodrpnvkh.supabase.co/storage/v1/object/public/${company?.logo_url}`}
                alt="logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <p className="flex flex-row gap-2 font-bold">
                <Building2 size="1.2rem" />
                <span className="text-primary">{company?.company_name}</span>
              </p>
              <div className="flex flex-row gap-4">
                <p className="flex flex-row gap-2">
                  <MapPin size="1.2rem" />
                  {company?.address}
                </p>
                <p className="flex flex-row items-center gap-2">
                  <Phone size="1rem" />
                  {company?.phone_number}
                </p>
              </div>
              <p className="ml-1 flex flex-row gap-2">
                Vacancy:
                <span className="font-bold text-primary">
                  {company?.vacancies?.length}
                </span>
              </p>
            </div>
          </div>
        </CompanyBox>
      ))}
    </div>
  );
};

export default CompaniesList;
