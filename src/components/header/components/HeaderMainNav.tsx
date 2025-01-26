import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const HeaderMainNav = () => {
  const { t } = useTranslation();
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
    return isActive
      ? "font-bold text-sm text-orange-600"
      : "font-bold text-primary text-sm hover:text-primary";
  };
  return (
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
  );
};

export default HeaderMainNav;
