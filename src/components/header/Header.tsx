import { Link } from "react-router-dom";
import { useState } from "react";
import { ModeToggle } from "./components/theme/mode-toggle";
import LanguageSwitcher from "./components/theme/language-switcher";
import { BriefcaseBusiness } from "lucide-react";
import { useLogOut } from "@/react-query/mutation/auth/authMutation";
import HeaderMainNav from "./components/HeaderMainNav";
import HeaderResponsiveSheet from "./components/HeaderResponsiveSheet";
import ProfileMenu from "./components/ProfileMenu";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { mutate: mutateLogout } = useLogOut();
  return (
    <header className="fixed z-50 h-20 w-full rounded-b-xl border-b-2 border-primary bg-gray-100 dark:bg-[#162a47]">
      <div className="mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/">
          <div className="flex flex-row items-center space-x-2 rounded-2xl bg-slate-200 px-6 py-2 text-orange-700 shadow-md dark:bg-[#213a62]">
            <BriefcaseBusiness />
            <h1 className="text-2xl font-bold text-primary">Jobify</h1>
          </div>
        </Link>
        <div className="flex flex-1 justify-end lg:hidden">
          <HeaderResponsiveSheet
            mutateLogout={mutateLogout}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
        <HeaderMainNav />
        <div className="hidden items-center space-x-6 lg:flex">
          <ProfileMenu mutateLogout={mutateLogout} />
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
