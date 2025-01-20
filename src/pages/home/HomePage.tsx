import illustration from "@/assets/illustration.png";
import { useProfileList } from "@/react-query/query/profile/profileQuery";
import { useGetVacanciesList } from "@/react-query/query/vacancies/vacanciesQuery";
import { BriefcaseBusiness, Building2, HandshakeIcon } from "lucide-react";
const HomePage = () => {
  const { data: vacanciesList } = useGetVacanciesList();
  const { data: profilesList } = useProfileList();
  return (
    <div className="mx-10 mt-4 space-y-1 xl:mx-60">
      <div className="w-7xl mx-auto flex flex-col justify-center gap-28 p-4 md:flex-row">
        <div className="mx-auto space-y-8">
          <h1 className="text-4xl">
            Find a job that suits <br /> your interest & skills.
          </h1>
          <p>
            Unlock exciting career opportunities in Georgia's expanding economy.
            <br />
            Embrace flexible work, learn valuable skills, and achieve financial
            <br />
            freedom on your schedule. Join Jobify and create the future you
            <br />
            deserve today!
          </p>
        </div>
        <img
          src={illustration}
          className="mx-auto h-48 w-60 lg:h-[25rem] lg:w-[26rem]"
        />
      </div>
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 md:flex-row">
        <div className="flex h-28 w-60 flex-row items-center justify-around rounded-sm border-2 border-secondary p-1">
          <div className="flex h-16 w-20 items-center justify-center rounded-sm bg-blue-100">
            <BriefcaseBusiness className="flex text-primary" />
          </div>
          <div>
            <p className="text-center font-bold text-primary">
              {vacanciesList?.length}
            </p>
            <p className="font-semibold text-gray-500">Live Job</p>
          </div>
        </div>

        <div className="flex h-28 w-60 flex-row items-center justify-evenly gap-2 rounded-sm border-2 border-secondary p-1">
          <div className="flex h-16 w-20 items-center justify-center rounded-sm bg-blue-100">
            <Building2 className="flex text-primary" />
          </div>
          <div>
            <p className="text-center font-bold text-primary">
              {profilesList?.length}
            </p>
            <p className="font-semibold text-gray-500">Company</p>
          </div>
        </div>
        <div className="flex h-28 w-60 flex-row items-center justify-evenly gap-2 rounded-sm border-2 border-secondary p-1">
          <div className="flex h-16 w-20 items-center justify-center rounded-sm bg-blue-100">
            <HandshakeIcon className="flex text-primary" />
          </div>
          <div>
            <p className="text-center font-bold text-primary">0</p>
            <p className="font-semibold text-gray-500">Staffed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
