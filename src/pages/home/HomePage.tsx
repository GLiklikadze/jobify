import illustration from "@/assets/illustration.png";
import { useGetVacanciesList } from "@/react-query/query/vacancies/vacanciesQuery";
import { BriefcaseBusiness } from "lucide-react";
const HomePage = () => {
  const { data: vacanciesList } = useGetVacanciesList();
  return (
    <div className="space-y-1 mt-4 container">
      <div className="flex flex-row mx-auto w-7xl justify-center gap-28 p-4">
        <div className="space-y-8">
          <h1 className="text-4xl ">
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
        <img src={illustration} className="w-96" />
      </div>
      <div className="flex flex-row gap-12 mx-auto max-w-5xl">
        <div className="flex flex-row items-center p-4 gap-2 border-2 border-secondary rounded-sm w-44 h-20">
          <div className="flex items-center justify-center bg-blue-100 w-16 h-14 rounded-sm">
            <BriefcaseBusiness className="flex text-primary" />
          </div>
          <div>
            <p className="text-center">{vacanciesList?.length}</p>

            <p>Live Job</p>
          </div>
        </div>

        <div className="flex flex-row items-center p-4 gap-2 border-2 border-secondary rounded-sm w-44 h-20">
          <div className="flex items-center justify-center bg-blue-100 w-16 h-14 rounded-sm">
            <BriefcaseBusiness className="flex text-primary" />
          </div>
          <div>
            <p>Company</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
