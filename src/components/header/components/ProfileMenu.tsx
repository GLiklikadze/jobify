import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ProfileBox from "./ProfileBox";
import {
  ListOrderedIcon,
  LogOut,
  PlusSquareIcon,
  StarsIcon,
  UserRoundPenIcon,
} from "lucide-react";
import { useAuthContext } from "@/context/hooks/useAuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button/button";
import { useTranslation } from "react-i18next";
import { useProfileInfo } from "@/react-query/query/profile/profileQuery";

type ProfileMenuProps = {
  mutateLogout: () => void;
};

const ProfileMenu: React.FC<ProfileMenuProps> = ({ mutateLogout }) => {
  const { user } = useAuthContext();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data: profileInfo } = useProfileInfo(user?.id ?? "");
  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <ProfileBox />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-secondary">
            <DropdownMenuItem
              key="profile"
              className="justify-left flex items-center text-xs font-bold text-primary focus:text-orange-600"
              onClick={() => navigate("profile")}
            >
              <UserRoundPenIcon />
              {t("header-comp.my-profile")}
            </DropdownMenuItem>
            {profileInfo?.userType === "Company" && (
              <>
                <DropdownMenuItem
                  key="add-vacancies"
                  className="justify-left flex items-center text-xs font-bold text-primary focus:text-orange-600"
                  onClick={() => navigate(user ? "add-vacancies" : "login")}
                >
                  <PlusSquareIcon /> {t("header-comp.add-vacancy")}
                </DropdownMenuItem>
                <DropdownMenuItem
                  key="announcements"
                  className="justify-left flex items-center text-xs font-bold text-primary focus:text-orange-600"
                  onClick={() => navigate("my-vacancies")}
                >
                  <ListOrderedIcon />
                  {t("header-comp.my-vacancies")}
                </DropdownMenuItem>
              </>
            )}
            <DropdownMenuItem
              key="favorites"
              className="justify-left flex items-center text-xs font-bold text-primary focus:text-orange-600"
              onClick={() => navigate("favorites")}
            >
              <StarsIcon />
              {t("header-comp.favorites-list")}
            </DropdownMenuItem>
            <DropdownMenuItem
              key="log-out"
              className="justify-left flex items-center text-xs font-bold text-primary focus:text-orange-600"
              onClick={() => mutateLogout()}
            >
              <LogOut className="text-orange-700" />
              {t("header-comp.log-out")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link to="login">
          <Button className="text-xs font-semibold">
            {t("header-comp.log-in")}
          </Button>
        </Link>
      )}
      <div className="space-x-1"></div>
    </>
  );
};

export default ProfileMenu;
