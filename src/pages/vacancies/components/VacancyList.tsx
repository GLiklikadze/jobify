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
  location: string | null;
  qualifications: string | null;
  requirements: string | null;
  responsibilities: string | null;
  salaryMax: string | null;
  salaryMin: string | null;
  title: string | null;
  user_id: string | null;
  profiles?: profileResponse | null;
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
  if (!vacanciesList) {
    return <p>Loading...</p>;
  }
  return vacanciesList?.map((announcement) => (
    <VacancyBox key={announcement?.id}>
      <div
        className="flex h-[8.4rem] cursor-pointer flex-row gap-8 overflow-hidden sm:h-[5.1rem]"
        onClick={() => handleClick(announcement.id)}
      >
        <div className="flex h-20 w-28 items-center justify-center overflow-hidden rounded-full border-2">
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
        <div className="ml-4 flex w-full flex-col justify-between sm:flex-row">
          <div className="flex flex-col space-y-2">
            <div className="flex flex-row items-center gap-2 text-sm">
              <Building2 size="1rem" className="text-primary" />
              <span>{announcement?.companyName}</span>
            </div>

            <div className="flex flex-row items-center space-x-2">
              <h2 className="text-sm font-bold">{announcement?.title} </h2>
            </div>
            <div className="flex flex-col items-start gap-1 text-xs sm:flex-row">
              <p className="flex space-x-1">
                <MapPin className="inline-flex text-primary" size="1rem" />
                <span> საქართველო, {announcement?.location}</span>
              </p>
              <p className="flex space-x-2">
                <Clock4 size="1rem" className="inline-flex text-primary" />
                <span>{announcement?.jobType}</span>
              </p>
              <p className="flex space-x-2 text-xs">
                <span className="ml-[0.1rem] text-[1rem] font-normal text-primary">
                  ₾
                </span>
                <span>
                  {announcement?.salaryMin} - {announcement?.salaryMax}
                </span>
              </p>
            </div>
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
