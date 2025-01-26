import { useAuthContext } from "@/context/hooks/useAuthContext";
import { useProfileInfo } from "@/react-query/query/profile/profileQuery";
import { ChevronDown, UserRound } from "lucide-react";
import React from "react";

const ProfileBox = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { user } = useAuthContext();
  const {
    data: profileInfo,
    isLoading,
    isError,
  } = useProfileInfo(user?.id ?? "");

  const companyName = !isLoading && !isError && profileInfo?.company_name;
  return (
    <div
      ref={ref}
      {...props}
      className="border-foregraund flex h-10 max-w-60 cursor-pointer flex-row items-center space-x-2 rounded-2xl border-2 bg-secondary px-2 py-6 shadow-md dark:border-orange-800"
    >
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
      <div className="text-xs text-primary">
        <div className="font-bold dark:text-primary-foreground">
          {companyName}
        </div>
        <div className="font-semibold">{user?.email}</div>
      </div>
      <ChevronDown />
    </div>
  );
});

export default ProfileBox;
