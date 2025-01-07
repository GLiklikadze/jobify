import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button/button";
import { ModeToggle } from "./components/theme/mode-toggle";
import LanguageSwitcher from "./components/theme/language-switcher";
import { useTranslation } from "react-i18next";
import { BriefcaseBusiness } from "lucide-react";

const Header: React.FC = () => {
  const { t } = useTranslation();

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
    return isActive
      ? "font-bold text-primary"
      : "font-bold text-gray-500 hover:text-primary";
  };

  return (
    <header className="h-20 border-b-2 rounded-b-xl border-primary">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/">
          <div className="flex flex-row items-center space-x-2 text-primary px-6 py-2 rounded-2xl ">
            <BriefcaseBusiness />
            <h1 className="text-2xl font-bold text-primary">Jobify</h1>
          </div>
        </Link>
        <nav className="flex space-x-14 ">
          <NavLink className={getNavLinkClass} to="">
            {t("header-comp.nav-link-vacancies")}
          </NavLink>
          <NavLink className={getNavLinkClass} to="write">
            {t("header-comp.nav-link-companies")}
          </NavLink>
          <NavLink className={getNavLinkClass} to="about">
            {t("header-comp.nav-link-about")}
          </NavLink>
        </nav>
        <div className="flex items-center space-x-6">
          {/* {user ? (
            <Link to="/profile">
              <Avatar className="border-2 border-primary">
                <AvatarImage
                  src={receivedProfileData?.avatar_url ?? ""}
                  alt="profile_photo"
                />
                <AvatarFallback>
                  {receivedProfileData?.full_name?.[0] ?? ""}
                </AvatarFallback>
              </Avatar>
            </Link>
          ) : ( */}
          <Link to="/login">
            <Button>Log In</Button>
          </Link>
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
