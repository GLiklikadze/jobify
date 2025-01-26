import { Button } from "@/components/ui/button/button";
import { Check, SortAsc, SortDesc } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";

type SortButton = {
  isAscSorted: boolean;
  toggleSortOrder: (sortValue: "asc" | "desc") => void;
};

const SortButton: React.FC<SortButton> = ({ isAscSorted, toggleSortOrder }) => {
  const { t } = useTranslation();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-28">
        <Button
          variant="secondary"
          className="border-2 px-2 font-bold text-primary"
        >
          {isAscSorted ? <SortAsc /> : <SortDesc />}
          <span className="text-xs">{t("sort-button.sort-button")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-26">
        <DropdownMenuItem
          key="dsc"
          onClick={() => toggleSortOrder("desc")}
          className="text-xs font-semibold text-primary focus:text-orange-700"
        >
          <SortDesc />
          {t("sort-button.desceding")}
          {!isAscSorted && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          key="asc"
          onClick={() => toggleSortOrder("asc")}
          className="text-xs font-semibold text-primary focus:text-orange-700"
        >
          <SortAsc /> {t("sort-button.asceding")}
          {isAscSorted && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortButton;
