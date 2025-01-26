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

type ProfileMenuProps = {
  mutateLogout: () => void;
};

const ProfileMenu: React.FC<ProfileMenuProps> = ({ mutateLogout }) => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <ProfileBox />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44 bg-secondary">
            <DropdownMenuItem
              key="profile"
              className="justify-left flex items-center text-xs font-bold text-primary focus:text-orange-600"
              onClick={() => navigate("profile")}
            >
              <UserRoundPenIcon />
              Profile Info
            </DropdownMenuItem>
            <DropdownMenuItem
              key="add-vacancies"
              className="justify-left flex items-center text-xs font-bold text-primary focus:text-orange-600"
              onClick={() => navigate(user ? "add-vacancies" : "login")}
            >
              <PlusSquareIcon /> Add Vacancy
            </DropdownMenuItem>
            <DropdownMenuItem
              key="announcements"
              className="justify-left flex items-center text-xs font-bold text-primary focus:text-orange-600"
              onClick={() => navigate("my-vacancies")}
            >
              <ListOrderedIcon />
              My Vacancies
            </DropdownMenuItem>
            <DropdownMenuItem
              key="favorites"
              className="justify-left flex items-center text-xs font-bold text-primary focus:text-orange-600"
              onClick={() => navigate("favorites")}
            >
              <StarsIcon />
              Favorites List
            </DropdownMenuItem>
            <DropdownMenuItem
              key="log-out"
              className="justify-left flex items-center text-xs font-bold text-primary focus:text-orange-600"
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
      <div className="space-x-1"></div>
    </>
  );
};

export default ProfileMenu;
