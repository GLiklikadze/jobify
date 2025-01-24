import {
  Briefcase,
  Building2,
  CalendarDays,
  FileSpreadsheet,
  MapPin,
  Star,
} from "lucide-react";
import { VacancyBox } from "./VacancyBox";
import { Button } from "@/components/ui/button/button";
import { getFormattedDate } from "@/utils/dateFormatter";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "@/context/hooks/useAuthContext";
import { MouseEvent } from "react";
import {
  useAddFavoriteList,
  useDeleteFavorite,
} from "@/react-query/mutation/favorites/favoritesMutation";
import { Badge } from "@/components/ui/badge/badge";

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

export type VacancyType = {
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
  salaryMax: number | null;
  salaryMin: number | null;
  title: string | null;
  user_id: string | null;
  profiles?: profileResponse | null;
  favorites?:
    | { id: number | null; user_id: string | null; vacancy_id: number | null }[]
    | boolean[];
};

type VacancyListProps = {
  vacanciesList: VacancyType[];
};

const VacancyList: React.FC<VacancyListProps> = ({ vacanciesList }) => {
  const { user } = useAuthContext();
  const { lang } = useParams();
  const navigate = useNavigate();
  const handleClick = (vac_id: number) => {
    navigate(`/${lang}/vacancies/${vac_id}`);
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
  const starClassName = "text-orange-500 fill-orange-500";
  const { mutate: addToFavListMutate } = useAddFavoriteList();
  const { mutate: deleteFromFavoritesMutate } = useDeleteFavorite();
  const handleFavoriteClick = (
    e: MouseEvent,
    vacancyId: number,
    profileId: string,
  ) => {
    e.stopPropagation();
    addToFavListMutate({ vacancyId, profileId });
  };
  const handleFavoriteDelClick = (
    e: MouseEvent,
    vacancyId: number,
    profileId: string,
  ) => {
    e.stopPropagation();
    deleteFromFavoritesMutate({ vacancyId, profileId });
  };

  if (!vacanciesList) {
    return <p>Loading...</p>;
  }
  return vacanciesList?.map((vacancy) => (
    <VacancyBox key={vacancy?.id}>
      <div
        className="flex h-[8.4rem] cursor-pointer flex-row gap-2 overflow-hidden sm:h-[5.1rem] sm:gap-8"
        onClick={() => handleClick(vacancy.id)}
      >
        <div className="flex items-center justify-center overflow-hidden rounded-full">
          {vacancy?.profiles?.logo_url ? (
            <img
              src={`https://gimdvoaobxziodrpnvkh.supabase.co/storage/v1/object/public/${vacancy?.profiles?.logo_url}`}
              className="h-20 w-28 overflow-hidden rounded-full object-cover"
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
              <span>{vacancy?.profiles?.company_name || "Unknown"}</span>
            </div>

            <div className="flex flex-row items-center space-x-2">
              <h2 className="text-sm font-bold">{vacancy?.title} </h2>
              <Badge variant="sm" className="whitespace-nowrap bg-orange-600">
                {vacancy?.jobType}
              </Badge>
              <button
                onClick={(e) =>
                  vacancy?.favorites?.[0]
                    ? handleFavoriteDelClick(e, vacancy?.id, user?.id ?? "")
                    : handleFavoriteClick(e, vacancy?.id, user?.id ?? "")
                }
                type="button"
              >
                <Star
                  size="0.9rem"
                  className={
                    vacancy?.favorites?.[0] ? starClassName : "text-orange-400"
                  }
                />
              </button>
            </div>
            <div className="flex flex-col items-start gap-1 text-xs sm:flex-row">
              <p className="flex space-x-1">
                <MapPin className="inline-flex text-primary" size="1rem" />
                <span> Georgia, {vacancy?.location}</span>
              </p>
              <p className="flex space-x-2 text-xs">
                <span className="ml-[0.1rem] text-[1rem] font-normal text-primary">
                  ₾
                </span>
                <span>
                  {vacancy?.salaryMin} - {vacancy?.salaryMax}
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <Button
              variant="default"
              className="hidden text-xs md:flex"
              onClick={(event) => handleEmailClick(event, vacancy?.id)}
            >
              <FileSpreadsheet />
              გაგზავნა
            </Button>
            <p className="flex gap-1 text-[0.7rem]">
              <span className="text-primary">
                <CalendarDays size="1rem" />
              </span>
              <span>{getFormattedDate(vacancy?.created_at)}</span>
            </p>
          </div>
        </div>
      </div>
    </VacancyBox>
  ));
};

export default VacancyList;
