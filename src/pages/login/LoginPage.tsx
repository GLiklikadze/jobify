import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { Label } from "@/components/ui/label";
import { Link, useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button/button";
import { AlertDestructive } from "@/components/error/errorAlert";
import { Controller, useForm } from "react-hook-form";
import { LoginFormValues } from "./LoginPage.types";
import { useLogin } from "@/react-query/mutation/auth/authMutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "./schema";

const initialLoginObj = {
  email: "",
  password: "",
};
const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: initialLoginObj,
    resolver: zodResolver(LoginFormSchema),
    mode: "onBlur",
  });
  const { mutate, isError, error } = useLogin();

  const onSubmit = (fieldValues: LoginFormValues) => {
    mutate(fieldValues);
  };
  const { t } = useTranslation();
  const { lang } = useParams();
  const cardContent = (
    <>
      <CardHeader>
        <CardTitle className="mx-auto text-2xl font-bold">
          {t("login-page.login-header")}
        </CardTitle>
        <CardDescription className="mx-auto text-center">
          {t("login-page.login-message")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email"> {t("login-page.email-label")}</Label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => {
                return (
                  <Input
                    id="email"
                    className={errors.email && "border-red-500"}
                    type="email"
                    placeholder="m@example.com"
                    {...field}
                  />
                );
              }}
            />
            {errors.email && (
              <div className="mr-10 mt-2 text-red-700">
                {t(`login-page.${errors?.email.message}`)}
              </div>
            )}
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">{t("login-page.password-label")}</Label>
              <Link
                to=""
                className="ml-auto inline-block text-sm text-primary underline"
              >
                {t("login-page.forgot-password")}
              </Link>
            </div>
            <Controller
              name="password"
              control={control}
              render={({ field }) => {
                return (
                  <Input
                    id="password"
                    type="password"
                    className={errors.password && "border-red-500"}
                    {...field}
                  />
                );
              }}
            />
            {errors.password && (
              <div className="mr-10 mt-2 text-red-700">
                {t(`login-page.${errors?.password.message}`)}
              </div>
            )}
          </div>
          <Button
            type="submit"
            className="w-full"
            onClick={handleSubmit(onSubmit)}
          >
            {t("login-page.login-button")}
          </Button>
        </div>
        {isError && (
          <div className="mt-4">
            <AlertDestructive
              alertTitle={error.name}
              alertDescription={error?.message}
            />
          </div>
        )}
        <div className="mt-4 text-center text-sm">
          {t("login-page.sing-up-label")}{" "}
          <Link to={`/${lang}/register`} className="text-primary underline">
            {t("login-page.sing-up-link")}
          </Link>
        </div>
      </CardContent>
    </>
  );
  return (
    <div className="flex h-[70vh] w-full items-center justify-center px-4">
      <Card className="mx-auto w-[30rem]">{cardContent}</Card>
    </div>
  );
};

export default LoginPage;
