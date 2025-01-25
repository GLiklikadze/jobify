import { Button } from "@/components/ui/button/button";
import { getFormattedDate } from "@/utils/dateFormatter";
import { CalendarDays, FileSpreadsheet } from "lucide-react";
import { VacancyBoxInfoProps } from "./VacancyBoxInfo.types";
import { useTranslation } from "react-i18next";

const VacancyBoxInfo: React.FC<VacancyBoxInfoProps> = ({
  handleEmailClick,
  vacancyId,
  created_at,
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-between">
      <Button
        variant="default"
        className="hidden text-xs md:flex"
        onClick={(event) => handleEmailClick(event, vacancyId)}
      >
        <FileSpreadsheet /> {t("vacancy-box-info.send-button")}
      </Button>
      <p className="flex gap-1 text-[0.7rem]">
        <span className="text-primary">
          <CalendarDays size="1rem" />
        </span>
        <span>{getFormattedDate(created_at)}</span>
      </p>
    </div>
  );
};

export default VacancyBoxInfo;
