import { Badge } from "@/components/ui/badge/badge";
import { useAuthContext } from "@/context/hooks/useAuthContext";
import { Building2, Component, MapPin, Star } from "lucide-react";
import { VacancyBoxMainProps } from "./VacancyBoxMain.types";

const VacancyBoxMain: React.FC<VacancyBoxMainProps> = ({
  handleFavoriteDelClick,
  handleFavoriteClick,
  vacancy,
}) => {
  const { user } = useAuthContext();
  const starClassName = "text-orange-500 fill-orange-500";
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-row items-center gap-2 text-sm font-medium">
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
          <span className="font-medium"> Georgia, {vacancy?.location}</span>
        </p>
        <p className="flex space-x-2 text-xs">
          <span className="ml-[0.1rem] text-[1rem] font-normal text-primary">
            <Component className="text-primary" size="1rem" />
          </span>
          <span>{vacancy?.category ?? ""}</span>
        </p>
      </div>
    </div>
  );
};

export default VacancyBoxMain;
