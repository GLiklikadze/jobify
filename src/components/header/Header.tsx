import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "../ui/button/button";
import { ModeToggle } from "./components/theme/mode-toggle";
import LanguageSwitcher from "./components/theme/language-switcher";
import { useTranslation } from "react-i18next";
import {
  Briefcase,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  Info,
  ListOrderedIcon,
  LogOut,
  Menu,
  PlusSquareIcon,
  UserRound,
  UserRoundPenIcon,
} from "lucide-react";
import { useAuthContext } from "@/context/hooks/useAuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useLogOut } from "@/react-query/mutation/auth/authMutation";
import { useProfileInfo } from "@/react-query/query/profile/profileQuery";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import ProfileBox from "./components/ProfileBox";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const { user } = useAuthContext();

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
    return isActive
      ? "font-semibold text-sm text-orange-600"
      : "font-semibold text-primary text-sm hover:text-primary";
  };
  const navigate = useNavigate();
  const { mutate: mutateLogout } = useLogOut();
  const { data: profileInfo } = useProfileInfo(user?.id ?? "");
  return (
    <header className="z-50 h-20 rounded-b-xl border-b-2 border-primary bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/">
          <div className="flex flex-row items-center space-x-2 rounded-2xl px-6 py-2 text-orange-700">
            <BriefcaseBusiness />
            <h1 className="text-2xl font-bold text-primary">Jobify</h1>
          </div>
        </Link>
        <div className="flex flex-1 justify-end lg:hidden">
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
                    Profile Info
                  </Link>
                  <Link
                    className="justify-left flex items-center gap-4 text-xs font-bold text-primary hover:text-orange-700"
                    to={user ? "add-vacancies" : "login"}
                  >
                    <PlusSquareIcon /> Add Vacancy
                  </Link>
                  <Link
                    className="justify-left flex items-center gap-4 text-xs font-bold text-primary hover:text-orange-700"
                    to="my-vacancies"
                  >
                    <ListOrderedIcon />
                    My Vacancies
                  </Link>
                  <div
                    className="justify-left flex cursor-pointer items-center gap-4 text-xs font-bold text-primary hover:text-orange-700"
                    onClick={() => mutateLogout()}
                  >
                    <LogOut className="text-orange-700" />
                    Log Out
                  </div>
                </div>
              ) : (
                <div>
                  <Link to="login" className="flex w-full justify-center">
                    <Button className="w-2/3">Log In</Button>
                  </Link>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>

        <nav className="hidden space-x-14 lg:flex">
          <NavLink className={getNavLinkClass} to="vacancies">
            {t("header-comp.nav-link-vacancies")}
          </NavLink>
          <NavLink className={getNavLinkClass} to="companies">
            {t("header-comp.nav-link-companies")}
          </NavLink>
          <NavLink className={getNavLinkClass} to="about">
            {t("header-comp.nav-link-about")}
          </NavLink>
        </nav>
        <div className="hidden items-center space-x-6 lg:flex">
          <Link to={user ? "add-vacancies" : "login"}>
            <Button className="p-4 text-[0.7rem]">
              <PlusSquareIcon /> Add Vacancy
            </Button>
          </Link>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="border-foregraund flex cursor-pointer flex-row items-center space-x-2 rounded-3xl border-2 bg-secondary px-2 py-1">
                  {profileInfo?.logo_url ? (
                    <div className="h-8 w-8 rounded-full">
                      <img
                        src={`https://gimdvoaobxziodrpnvkh.supabase.co/storage/v1/object/public/${profileInfo?.logo_url}`}
                        className="h-full w-full overflow-hidden rounded-full border-2 object-cover"
                      />
                    </div>
                  ) : (
                    <UserRound className="h-6 w-6 rounded-full border-2 border-primary p-1 text-blue-600" />
                  )}

                  <div className="text-xs font-bold text-primary">
                    {profileInfo?.company_name || user?.email}
                  </div>
                  <ChevronDown className="h-4" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44 bg-secondary">
                <DropdownMenuItem
                  key="profile"
                  className="justify-left flex items-center text-xs font-bold text-primary"
                  onClick={() => navigate("profile")}
                >
                  <UserRoundPenIcon />
                  Profile Info
                </DropdownMenuItem>
                <DropdownMenuItem
                  key="announcements"
                  className="justify-left flex items-center text-xs font-bold text-primary"
                  onClick={() => navigate("my-vacancies")}
                >
                  <ListOrderedIcon />
                  My Vacancies
                </DropdownMenuItem>
                <DropdownMenuItem
                  key="log-out"
                  className="justify-left flex items-center text-xs font-bold text-primary"
                  onClick={() => mutateLogout()}
                >
                  <LogOut className="text-orange-700" />
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="login">
              <Button className="text-xs">Log In</Button>
            </Link>
          )}
          <div className="space-x-1">
            <LanguageSwitcher />
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
