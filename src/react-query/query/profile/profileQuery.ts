import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import {
  getFilteredProfileList,
  getProfileInfo,
  getProfileList,
} from "@/supabase/profile/httpProfile";
import { PROFILE_QUERY_KEYS } from "./profileQuery.enum";
import { PostgrestError } from "@supabase/supabase-js";
import { profileResponse } from "./profileQuery.types";

export const useProfileList = () => {
  return useQuery({
    queryKey: ["profile-list"],
    queryFn: getProfileList,
    retry: false,
  });
};
export const useFilteredProfileList = (searchText: string) => {
  return useQuery({
    queryKey: ["profile-list-filtered", searchText],
    queryFn: () => getFilteredProfileList(searchText),
    retry: false,
  });
};

export const useProfileInfo = (
  userId?: string,
  {
    queryOptions,
  }: {
    queryOptions?: UseQueryOptions<
      profileResponse,
      PostgrestError,
      profileResponse
    >;
  } = {},
): UseQueryResult<profileResponse, PostgrestError> => {
  return useQuery<profileResponse, PostgrestError, profileResponse>({
    queryKey: [PROFILE_QUERY_KEYS.PROFILE, userId],
    queryFn: () => getProfileInfo(userId as string),
    enabled: !!userId,
    retry: false,
    ...queryOptions,
  });
};
