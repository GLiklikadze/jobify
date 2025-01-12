import {
  AlarmClock,
  Briefcase,
  Building2,
  CalendarDays,
  FileSpreadsheet,
  MapPin,
} from "lucide-react";
import { VacancyBox } from "./VacancyBox";
import { Button } from "@/components/ui/button/button";
import { getFormattedDate } from "@/utils/dateFormatter";
import { useNavigate } from "react-router-dom";

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
type VacancyListProps = {
  vacanciesList: Vacancy[];
};

const VacancyList: React.FC<VacancyListProps> = ({ vacanciesList }) => {
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
        <div className="overflow-hidden rounded-full border-2 p-2">
          <Briefcase
            size="4rem"
            className="rounded-full border-2 p-2 text-orange-300"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <p className="flex flex-row gap-2 text-sm">
            <Building2 size="1rem" className="text-primary" />
            <span>{announcement?.companyName}</span>
          </p>
          <div className="flex flex-row items-center space-x-2">
            <h1 className="font-bold">{announcement?.title} </h1>
            {/* <Heart className="text-primary hover:fill-primary" size="1.2rem" /> */}
          </div>
          <p className="flex items-center space-x-1 text-xs">
            <MapPin className="inline-flex text-primary" size="1rem" />
            <span> საქართველო, {announcement?.location}</span>
            <AlarmClock size="1rem" className="text-primary" />
            <span>{announcement?.jobType}</span>
          </p>
        </div>
        <div className="flex flex-col space-y-8">
          <p className="space-x-1 text-sm">
            <span className="1rem text-primary">₾</span>
            <span>
              {announcement?.salaryMin} - {announcement?.salaryMax}
            </span>
          </p>
          <p className="flex gap-2 text-xs">
            <span className="text-primary">
              <CalendarDays size="1rem" />
            </span>
            <span>{getFormattedDate(announcement?.created_at)}</span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Button variant="default" className="p-3">
            <FileSpreadsheet />
            გაგზავნა
          </Button>
        </div>
      </div>
    </VacancyBox>
  ));
};

export default VacancyList;
