import {
  Briefcase,
  Building2,
  CalendarDays,
  Clock4,
  FileSpreadsheet,
  MapPin,
} from "lucide-react";
import { VacancyBox } from "./VacancyBox";
import { Button } from "@/components/ui/button/button";
import { getFormattedDate } from "@/utils/dateFormatter";
import { useNavigate } from "react-router-dom";

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
  profiles: profileResponse | null;
};
type VacancyListProps = {
  vacanciesList: Vacancy[];
};

const VacancyList: React.FC<VacancyListProps> = ({ vacanciesList }) => {
  const navigate = useNavigate();
  const handleClick = (vac_id: number) => {
    navigate(`${vac_id}`);
  };
  const handleEmailClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number,
  ) => {
    event.stopPropagation();
    const currentVacancy = vacanciesList.find(
      (announcement) => announcement?.id === id,
    );
    const subject =
      currentVacancy?.title +
      "/" +
      currentVacancy?.jobType +
      "/" +
      currentVacancy?.location;

    window.location.href = `mailto:${currentVacancy?.contactEmail}?subject=${encodeURIComponent(subject)}`;
    console.log(currentVacancy?.contactEmail, subject);
  };
  return vacanciesList?.map((announcement) => (
    <VacancyBox key={announcement?.id}>
      <div
        className="flex h-[10rem] cursor-pointer flex-row space-x-8 sm:h-[5.1rem]"
        onClick={() => handleClick(announcement.id)}
      >
        <div className="flex w-28 items-center justify-center rounded-full border-2 p-1">
          {announcement?.profiles?.logo_url ? (
            <img
              src={`https://gimdvoaobxziodrpnvkh.supabase.co/storage/v1/object/public/${announcement?.profiles?.logo_url}`}
              className="h-full w-full overflow-hidden rounded-full object-cover"
            />
          ) : (
            <Briefcase
              size="5rem"
              className="rounded-full border-2 text-orange-300"
            />
          )}
        </div>
        <div className="ml-4 flex w-full justify-between">
          <div className="flex flex-col space-y-2">
            <div className="flex flex-row items-center gap-2 text-sm">
              <Building2 size="1rem" className="text-primary" />
              <span>{announcement?.companyName}</span>
            </div>

            <div className="flex flex-row items-center space-x-2">
              <h1 className="font-bold">{announcement?.title} </h1>
            </div>
            <p className="flex flex-col items-center space-x-1 text-xs sm:flex-row">
              <MapPin className="inline-flex text-primary" size="1rem" />
              <span> საქართველო, {announcement?.location}</span>
              <Clock4 size="1rem" className="text-primary" />
              <span>{announcement?.jobType}</span>
              <span className="space-x-1 text-xs">
                <span className="text-[1rem] font-normal text-primary">₾</span>
                <span>
                  {announcement?.salaryMin} - {announcement?.salaryMax}
                </span>
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <Button
              variant="default"
              className="hidden text-xs md:flex"
              onClick={(event) => handleEmailClick(event, announcement?.id)}
            >
              <FileSpreadsheet />
              გაგზავნა
            </Button>
            <p className="flex gap-1 text-xs">
              <span className="text-primary">
                <CalendarDays size="1rem" />
              </span>
              <span>{getFormattedDate(announcement?.created_at)}</span>
            </p>
          </div>
        </div>
      </div>
    </VacancyBox>
  ));
};

export default VacancyList;
