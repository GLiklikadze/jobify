import { useProfileList } from "@/react-query/query/profile/profileQuery";
import CompanyBox from "./components/CompanyBox";

const CompaniesPage = () => {
  const { data: profileList } = useProfileList();
  console.log(profileList);
  return (
    <CompanyBox>
      {profileList?.map((company) => (
        <div className="flex flex-row gap-4" key={company?.id}>
          <div className="h-24 w-28 overflow-hidden rounded-lg bg-blue-100">
            <img
              src={`https://gimdvoaobxziodrpnvkh.supabase.co/storage/v1/object/public/${company?.logo_url}`}
              alt="logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p>{company?.company_name}</p>
            <p>{company?.address}</p>
            <p>{company?.phone_number}</p>
          </div>
        </div>
      ))}
    </CompanyBox>
  );
};

export default CompaniesPage;
