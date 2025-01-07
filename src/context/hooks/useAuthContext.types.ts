import { User } from "@supabase/supabase-js";

export type AuthContextType = {
  user: User | undefined;
  handleSetUserId: (id: User | undefined) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
};
