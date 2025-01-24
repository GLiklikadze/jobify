import { Button } from "@/components/ui/button/button";
import { Check, SortAsc, SortDesc } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type SortButton = {
  isAscSorted: boolean;
  toggleSortOrder: (sortValue: "asc" | "desc") => void;
};

const SortButton: React.FC<SortButton> = ({ isAscSorted, toggleSortOrder }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-24">
        <Button
          variant="secondary"
          className="border-2 px-2 font-bold text-primary"
        >
          {isAscSorted ? <SortAsc /> : <SortDesc />}
          <span className="text-xs">Sort</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-24">
        <DropdownMenuItem key="dsc" onClick={() => toggleSortOrder("desc")}>
          <SortDesc />
          Date
          {!isAscSorted && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem key="asc" onClick={() => toggleSortOrder("asc")}>
          <SortAsc /> Date
          {isAscSorted && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortButton;
