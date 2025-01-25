import { Briefcase, Building2, Mail, MapPin, Phone } from "lucide-react";
import CompanyBox from "./CompanyBox";
import { CompaniesListProps, ProfileResponse } from "./CompaniestList.types";

const CompaniesList: React.FC<CompaniesListProps> = ({ filteredProfiles }) => {
  return (
    <div className="flex flex-row flex-wrap gap-4">
      {filteredProfiles?.map((company: ProfileResponse) => (
        <CompanyBox key={company?.id} company_id={company?.id}>
          <div className="mx-auto flex flex-col gap-4 sm:flex-row">
            <div className="mx-auto h-20 w-24 overflow-hidden rounded-lg bg-blue-100 sm:mx-0">
              <img
                src={`https://gimdvoaobxziodrpnvkh.supabase.co/storage/v1/object/public/${company?.logo_url}`}
                alt="logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mx-auto space-y-2 text-sm">
              <div className="flex flex-row gap-4">
                <p className="flex flex-row gap-2 font-bold">
                  <Building2 size="1.2rem" className="text-orange-700" />
                  <span className="text-primary">{company?.company_name}</span>
                </p>
              </div>
              <div className="flex flex-row gap-4">
                <p className="flex flex-row gap-2 text-primary">
                  <MapPin size="1.2rem" className="text-orange-700" />
                  {company?.address}
                </p>
                <p className="flex flex-row items-center gap-2 text-primary">
                  <Phone size="1rem" className="text-orange-700" />
                  {company?.phone_number}
                </p>
              </div>
              <div className="flex flex-row gap-4">
                <p className="flex flex-row gap-2">
                  <Briefcase size="1.2rem" className="text-orange-700" />
                  <span className="font-semibold text-primary">
                    {company?.vacancies?.length}
                  </span>
                </p>
                <p className="flex flex-row gap-2">
                  <Mail size="1.2rem" className="text-orange-700" />
                  <span className="text-primary">
                    {company?.vacancies?.[0]?.contactEmail}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </CompanyBox>
      ))}
    </div>
  );
};

export default CompaniesList;
