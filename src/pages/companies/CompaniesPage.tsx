import { useProfileList } from "@/react-query/query/profile/profileQuery";
import CompanyBox from "./components/CompanyBox";

const CompaniesPage = () => {
  const { data: profileList } = useProfileList();
  console.log(profileList);
  return (
    <CompanyBox>
      {profileList?.map((company) => (
        <div key={company?.id}>
          <img
            src={`https://gimdvoaobxziodrpnvkh.supabase.co/storage/v1/object/public/${company?.logo_url}`}
            className="w-24 rounded-lg"
            alt="logo-pic"
          />
          <p>{company?.company_name}</p>
          <p>{company?.address}</p>
          <p>{company?.phone_number}</p>
        </div>
      ))}
    </CompanyBox>
  );
};

export default CompaniesPage;
