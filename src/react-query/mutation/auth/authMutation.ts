import { login, logOut, register } from "@/supabase/auth/httpAuth";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { PostgrestError } from "@supabase/supabase-js";
// import { AUTH_PATHS } from "@/routes/auth/authPaths.enum";
import {
  httpRegisterProps,
  LoginResult,
  UserResponse,
} from "./authMutation.types";

export const useLogin = ({
  mutationOptions,
}: {
  mutationOptions?: UseMutationOptions<
    LoginResult,
    PostgrestError,
    httpRegisterProps
  >;
} = {}): UseMutationResult<LoginResult, PostgrestError, httpRegisterProps> => {
  const navigate = useNavigate();
  return useMutation<LoginResult, PostgrestError, httpRegisterProps>({
    mutationKey: ["log-in"],
    mutationFn: login,
    onSuccess: () => navigate("/"),
    ...mutationOptions,
  });
};

export const useLogOut = ({
  mutationOptions,
}: {
  mutationOptions?: UseMutationOptions<void, PostgrestError, void>;
} = {}): UseMutationResult<void, PostgrestError, void> => {
  const navigate = useNavigate();
  return useMutation<void, PostgrestError, void>({
    mutationKey: ["log-out"],
    mutationFn: logOut,
    onSuccess: () => navigate("/"),
    ...mutationOptions,
  });
};

export const useRegister = ({
  mutationOptions,
}: {
  mutationOptions?: UseMutationOptions<
    UserResponse,
    PostgrestError,
    httpRegisterProps
  >;
} = {}): UseMutationResult<UserResponse, PostgrestError, httpRegisterProps> => {
  const navigate = useNavigate();
  return useMutation<UserResponse, PostgrestError, httpRegisterProps>({
    mutationKey: ["register"],
    mutationFn: register,
    onSuccess: () => navigate("/login"),
    ...mutationOptions,
  });
};
