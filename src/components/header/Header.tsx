import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "../ui/button/button";
import { ModeToggle } from "./components/theme/mode-toggle";
import LanguageSwitcher from "./components/theme/language-switcher";
import { useTranslation } from "react-i18next";
import { BriefcaseBusiness, PlusSquareIcon, UserRound } from "lucide-react";
import { useAuthContext } from "@/context/hooks/useAuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useLogOut } from "@/react-query/mutation/auth/authMutation";

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
  return (
    <header className="h-20 border-b-2 rounded-b-xl border-primary z-50 bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/">
          <div className="flex flex-row items-center space-x-2 text-orange-700 px-6 py-2 rounded-2xl ">
            <BriefcaseBusiness />
            <h1 className="text-2xl font-bold text-primary">Jobify</h1>
          </div>
        </Link>
        <nav className="flex space-x-14 ">
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
                <div className="flex flex-row bg-secondary items-center px-2 py-1 space-x-2 border-2 border-foregraund rounded-3xl cursor-pointer">
                  <UserRound className="text-blue-600 w-6 h-6 border-2 p-1 border-primary rounded-full" />
                  <div className="font-bold text-xs text-secondary-foreground">
                    {user?.email}
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-40">
                <DropdownMenuItem
                  key="profile"
                  className="flex items-center justify-center font-bold text-xs"
                  onClick={() => navigate("profile")}
                >
                  Profile Info
                </DropdownMenuItem>
                <DropdownMenuItem
                  key="log-out"
                  className="flex items-center justify-center text-orange-700 font-bold text-xs"
                  onClick={() => mutateLogout()}
                >
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
