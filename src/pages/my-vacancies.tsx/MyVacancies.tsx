import { VacancyBox } from "../vacancies/components/VacancyBox";
import { Briefcase, Heart, MapPin, Pencil, Trash2 } from "lucide-react";
import { useGetVacanciesList } from "@/react-query/query/vacancies/vacanciesQuery";
import { getFormattedDate } from "@/utils/dateFormatter";
import { useNavigate } from "react-router-dom";

const MyVacancies = () => {
  const { data: vacanciesList } = useGetVacanciesList();
  const navigate = useNavigate();
  const handleClick = (vac_id: number) => {
    navigate(`${vac_id}`);
  };
  return vacanciesList?.map((announcement) => (
    <VacancyBox key={announcement?.id}>
      <div
        className="flex cursor-pointer flex-row justify-between"
        onClick={() => handleClick(announcement.id)}
      >
        <div className="overflow-hidden rounded-2xl border-2">
          <Briefcase className="h-20 w-28" />
        </div>
        <div className="flex flex-col space-y-1">
          <div className="flex flex-row items-center space-x-2">
            <h1 className="font-bold text-primary">{announcement?.title} </h1>
            <Heart className="text-primary hover:fill-primary" size="1.2rem" />
          </div>
          <p>{announcement?.companyName}</p>
          <p className="flex items-center space-x-1 text-sm text-primary">
            <MapPin className="inline-flex" size="1rem" />
            <span> საქართველო, {announcement?.location}</span>
          </p>
        </div>
        <div className="flex flex-col space-y-8">
          <div>
            {announcement?.salaryMin} - {announcement?.salaryMax} ₾
          </div>
          <div>{getFormattedDate(announcement?.created_at)}</div>
        </div>
        <div className="flex flex-row items-center gap-6">
          <div className="rounded-md border-2 p-2 hover:bg-blue-200">
            <Pencil className="h-5 w-6 text-primary" />
          </div>
          <div className="rounded-md border-2 p-2 hover:bg-blue-200">
            <Trash2 className="h-5 w-6 text-red-600" />
          </div>
        </div>
      </div>
    </VacancyBox>
  ));
};

export default MyVacancies;
