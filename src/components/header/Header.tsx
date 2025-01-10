import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "../ui/button/button";
import { ModeToggle } from "./components/theme/mode-toggle";
import LanguageSwitcher from "./components/theme/language-switcher";
import { useTranslation } from "react-i18next";
import {
  BriefcaseBusiness,
  ChevronDown,
  ListOrderedIcon,
  LogOut,
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

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useAuthContext();

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
    return isActive
      ? "font-bold text-sm text-orange-600"
      : "font-bold text-primary text-sm hover:text-primary";
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
        <nav className="flex space-x-14">
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
        <div className="flex items-center space-x-6">
          <Link to={user ? "add-vacancies" : "login"}>
            <Button className="text-xs">
              <PlusSquareIcon /> Add Vacancy
            </Button>
          </Link>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="border-foregraund flex cursor-pointer flex-row items-center space-x-2 rounded-3xl border-2 bg-secondary px-2 py-1">
                  <UserRound className="h-6 w-6 rounded-full border-2 border-primary p-1 text-blue-600" />
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
              <Button>Log In</Button>
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
