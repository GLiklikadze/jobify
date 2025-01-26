import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ProfileBox from "./ProfileBox";
import {
  Briefcase,
  Building2,
  Info,
  Menu,
  ListOrderedIcon,
  LogOut,
  PlusSquareIcon,
  StarsIcon,
  UserRoundPenIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button/button";
import LanguageSwitcher from "./theme/language-switcher";
import { ModeToggle } from "./theme/mode-toggle";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuthContext } from "@/context/hooks/useAuthContext";

type HeaderResponsiveSheetProps = {
  mutateLogout: () => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderResponsiveSheet: React.FC<HeaderResponsiveSheetProps> = ({
  mutateLogout,
  isOpen,
  setIsOpen,
}) => {
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
    return isActive
      ? "font-bold text-sm text-orange-600"
      : "font-bold text-primary text-sm hover:text-primary";
  };
  const { t } = useTranslation();
  const { user } = useAuthContext();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="bg-foregraund-gray- mr-2 border-2"
          aria-label="Menu"
        >
          <Menu className="h-12 w-12" />
        </Button>
      </SheetTrigger>
      <SheetContent
        aria-describedby="MenuContent"
        side="right"
        className="w-[18rem] space-y-4"
      >
        <SheetHeader className="space-y-4">
          <div className="space-x-2">
            <LanguageSwitcher />
            <ModeToggle />
          </div>
          <hr />
        </SheetHeader>
        <SheetTitle>Menu</SheetTitle>
        <nav className="flex flex-col space-y-4 pt-1">
          <NavLink className={getNavLinkClass} to="vacancies">
            <div className="flex flex-row gap-4 hover:text-orange-700">
              <Briefcase />
              {t("header-comp.nav-link-vacancies")}
            </div>
          </NavLink>
          <NavLink className={getNavLinkClass} to="companies">
            <div className="flex flex-row gap-4 hover:text-orange-700">
              <Building2 />
              {t("header-comp.nav-link-companies")}
            </div>
          </NavLink>
          <NavLink className={getNavLinkClass} to="about">
            <div className="flex flex-row gap-4 hover:text-orange-700">
              <Info />
              {t("header-comp.nav-link-about")}
            </div>
          </NavLink>
          <SheetDescription></SheetDescription>
        </nav>
        <hr />
        {user?.id ? (
          <div className="space-y-4">
            <ProfileBox />
            <Link
              className="justify-left flex items-center gap-4 text-xs font-bold text-primary hover:text-orange-700"
              to="profile"
            >
              <UserRoundPenIcon />
              {t("header-comp.my-profile")}
            </Link>
            <Link
              className="justify-left flex items-center gap-4 text-xs font-bold text-primary hover:text-orange-700"
              to={user ? "add-vacancies" : "login"}
            >
              <PlusSquareIcon /> {t("header-comp.add-vacancy")}
            </Link>
            <Link
              className="justify-left flex items-center gap-4 text-xs font-bold text-primary hover:text-orange-700"
              to="my-vacancies"
            >
              <ListOrderedIcon />
              {t("header-comp.my-vacancies")}
            </Link>
            <Link
              to="favorites"
              className="justify-left flex items-center gap-4 text-xs font-bold text-primary hover:text-orange-700"
            >
              <StarsIcon />
              {t("header-comp.favorites-list")}
            </Link>
            <div
              className="justify-left flex cursor-pointer items-center gap-4 text-xs font-bold text-primary hover:text-orange-700"
              onClick={() => mutateLogout()}
            >
              <LogOut className="text-orange-700" />
              {t("header-comp.log-out")}
            </div>
          </div>
        ) : (
          <div>
            <Link to="login" className="flex w-full justify-center">
              <Button className="w-2/3"> {t("header-comp.log-in")}</Button>
            </Link>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default HeaderResponsiveSheet;
