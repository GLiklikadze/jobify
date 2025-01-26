import { fillProfileInfo } from "@/supabase/profile/httpProfile";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { PROFILE_MUTATION_KEYS } from "./profileMutation.enum";
import { PROFILE_QUERY_KEYS } from "@/react-query/query/profile/profileQuery.enum";
import { PostgrestError } from "@supabase/supabase-js";
import { profilePayload } from "@/supabase/profile/httpProfile.types";

export const useEditProfile = (
  user_id: string,
  {
    mutationOptions,
  }: {
    mutationOptions?: UseMutationOptions<null, PostgrestError, profilePayload>;
  } = {},
): UseMutationResult<null, PostgrestError, profilePayload> => {
  const queryClient = useQueryClient();
  return useMutation<null, PostgrestError, profilePayload>({
    mutationKey: [PROFILE_MUTATION_KEYS.UPDATE],
    mutationFn: fillProfileInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [PROFILE_QUERY_KEYS.PROFILE, user_id],
      });
    },
    ...mutationOptions,
  });
};
