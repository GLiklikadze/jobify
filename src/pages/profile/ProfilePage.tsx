import { Button } from "@/components/ui/button/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthContext } from "@/context/hooks/useAuthContext";
import { UserRoundPen } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { TabsList, Tabs, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useTranslation } from "react-i18next";
import { Controller, useForm } from "react-hook-form";
import { ProfileFormValues } from "./ProfilePage.types";
import { useLogOut } from "@/react-query/mutation/auth/authMutation";
import { useEditProfile } from "@/react-query/mutation/profile/profileMutation";
import { useProfileInfo } from "@/react-query/query/profile/profileQuery";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CustomFileInput } from "@/components/ui/customFileInput";

const initialPayload = {
  company_name: "",
  company_name_ka: "",
  logo_file: null,
  phone_number: "",
  address: "",
};
const ProfilePage = () => {
  const {
    control,
    handleSubmit,
    reset,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    defaultValues: initialPayload,
    mode: "onBlur",
  });
  const [toggleEdit, setToggleEdit] = useState(false);

  const { user } = useAuthContext();
  const { t } = useTranslation();
  const { data: receivedProfileData } = useProfileInfo(user?.id);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const company_name_ka = watch("company_name_ka");
  const company_name = watch("company_name");
  const address = watch("address");
  const logo_url = receivedProfileData?.logo_url;
  const phone_number = watch("phone_number");

  // const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (receivedProfileData) {
      reset((prev) => ({
        ...prev,
        company_name: receivedProfileData?.company_name ?? "",
        company_name_ka: receivedProfileData?.company_name_ka ?? "",
        phone_number: receivedProfileData?.phone_number ?? "",
        address: receivedProfileData?.address ?? "",
      }));
    }
  }, [receivedProfileData, reset]);

  const { mutate: mutateLogout } = useLogOut();

  const { mutate: editProfileData } = useEditProfile(user?.id || "");

  const handleToggleEdit = () => {
    setToggleEdit((prevToggleEdit) => !prevToggleEdit);
    if (toggleEdit) {
      clearErrors();
    }
  };

  const onSubmit = (fieldValues: ProfileFormValues) => {
    reset();
    handleToggleEdit();
    editProfileData({ ...fieldValues, id: user?.id as string });
  };

  const handleLogOut = () => {
    mutateLogout();
  };

  return (
    <div className="mx-auto max-w-lg flex-grow px-4 py-8">
      <Card className="px-4 py-4">
        <CardTitle className="mx-auto mb-2 text-center text-2xl font-bold">
          {t("profile-page.card-title")}
        </CardTitle>
        <div className="mb-4 flex justify-between gap-7 p-4">
          <div className="flex items-center gap-14">
            <Label className="mb-2 w-24">{t("profile-page.photo-label")}</Label>
            <div className="flex h-20 w-20 flex-col rounded-lg bg-slate-500 p-1">
              {logo_url && (
                <img
                  src={`https://gimdvoaobxziodrpnvkh.supabase.co/storage/v1/object/public/${logo_url}`}
                  className="rounded-lg"
                  alt="logo-pic"
                />
              )}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="shadow-s rounded-full border-2 border-green-600"
            onClick={handleToggleEdit}
            title="Edit Information"
          >
            <UserRoundPen className="h-6 w-8 text-green-600" />
          </Button>
        </div>
        <div className="space-y-9 px-4 pb-8 pt-1">
          <Tabs defaultValue="geo" className="mx-auto">
            <TabsList className="light:bg-neutral-200 border-1 mx-auto mb-8 grid h-9 max-w-64 grid-cols-2 items-center justify-center rounded-lg p-1 text-muted-foreground">
              <TabsTrigger value="geo">{t("profile-page.tab-geo")}</TabsTrigger>
              <TabsTrigger value="eng">{t("profile-page.tab-eng")}</TabsTrigger>
            </TabsList>
            <TabsContent value="geo">
              <div className="flex min-h-9 flex-row items-center gap-14">
                <Label htmlFor="nameKa" className="w-24">
                  {t("profile-page.full-name-label")}
                </Label>
                {!toggleEdit ? (
                  <p className="font-semibold text-green-600">
                    {company_name_ka}
                  </p>
                ) : (
                  <Controller
                    name="company_name_ka"
                    control={control}
                    rules={{
                      required: t("profile-page.full-name-ka-required-error"),
                      minLength: {
                        value: 3,
                        message: t("profile-page.full-name-ka-minLength-error"),
                      },
                      maxLength: {
                        value: 25,
                        message: t("profile-page.full-name-ka-maxLength-error"),
                      },
                    }}
                    render={({ field: { onChange, value, onBlur } }) => {
                      return (
                        <>
                          <Input
                            type="text"
                            id="nameKa"
                            className={`max-w-56 ${errors.company_name_ka && "border-red-500"}`}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                          />
                        </>
                      );
                    }}
                  />
                )}
              </div>
              {errors.company_name_ka && (
                <div className="mr-10 mt-2 text-right text-red-700">
                  {errors?.company_name_ka.message}
                </div>
              )}
            </TabsContent>
            <TabsContent value="eng">
              <div className="flex min-h-9 flex-row items-center gap-14">
                <Label htmlFor="name" className="w-24">
                  {/* {t("profile-page.full-name-label")} */}
                  Company Name
                </Label>
                {!toggleEdit ? (
                  <p className="font-semibold text-green-600">{company_name}</p>
                ) : (
                  <Controller
                    name="company_name"
                    control={control}
                    rules={{
                      required: t("profile-page.full-name-en-required-error"),
                      minLength: {
                        value: 3,
                        message: t("profile-page.full-name-en-minLength-error"),
                      },
                      maxLength: {
                        value: 25,
                        message: t("profile-page.full-name-en-maxLength-error"),
                      },
                    }}
                    render={({ field: { onChange, value, onBlur } }) => {
                      return (
                        <Input
                          type="text"
                          id="name"
                          className={`max-w-56 ${errors.company_name && "border-red-500"}`}
                          value={value}
                          onChange={onChange}
                          onBlur={onBlur}
                        />
                      );
                    }}
                  />
                )}
              </div>
            </TabsContent>
            {errors.company_name && (
              <div className="mr-10 mt-2 text-right text-red-700">
                {errors?.company_name.message}
              </div>
            )}
          </Tabs>
          <div className="flex min-h-10 flex-row items-start gap-14 overflow-hidden">
            <Label htmlFor="logo_file" className="w-24">
              {t("profile-page.avatar-url-label")}
            </Label>
            {!toggleEdit ? (
              <p className="w-60 overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-green-600"></p>
            ) : (
              <div className="grid gap-4">
                <Controller
                  control={control}
                  name="logo_file"
                  render={({ field: { onChange } }) => {
                    return (
                      <CustomFileInput
                        id="logo_file"
                        type="file"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          onChange(file);
                        }}
                        ref={fileInputRef}
                      />
                    );
                  }}
                />
              </div>
            )}
          </div>
          <div className="flex min-h-9 flex-row items-start gap-14">
            <Label htmlFor="phoneNumber" className="mt-2 w-24">
              {t("profile-page.phone-number-label")}
            </Label>
            {!toggleEdit ? (
              <p className="max-w-60 overflow-hidden font-semibold text-green-600">
                {phone_number}
              </p>
            ) : (
              <div className="flex w-56 flex-col">
                <Controller
                  name="phone_number"
                  control={control}
                  rules={{
                    required: t("profile-page.phone-number-required-error"),
                    minLength: {
                      value: 6,
                      message: t("profile-page.phone-number-minLength-error"),
                    },
                    maxLength: {
                      value: 14,
                      message: t("profile-page.phone-number-maxLength-error"),
                    },
                  }}
                  render={({ field: { value, onChange, onBlur } }) => {
                    return (
                      <Input
                        type="tel"
                        id="phoneNumber"
                        className={`max-w-56 ${errors.phone_number && "border-red-500"}`}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                    );
                  }}
                />
                {errors.phone_number && (
                  <div className="mt-1 max-w-56 text-right text-red-700">
                    {errors?.phone_number.message}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="flex min-h-9 flex-row items-start gap-14">
            <Label htmlFor="address" className="mt-2 w-24">
              {/* {t("profile-page.phone-number-label")} */}
              მისამართი
            </Label>
            {!toggleEdit ? (
              <p className="max-w-60 overflow-hidden font-semibold text-green-600">
                {address}
              </p>
            ) : (
              <div className="flex w-56 flex-col">
                <Controller
                  name="address"
                  control={control}
                  rules={{
                    required: t("profile-page.phone-number-required-error"),
                    minLength: {
                      value: 6,
                      message: t("profile-page.phone-number-minLength-error"),
                    },
                    maxLength: {
                      value: 14,
                      message: t("profile-page.phone-number-maxLength-error"),
                    },
                  }}
                  render={({ field: { value, onChange } }) => {
                    return (
                      // <Input
                      //   type="text"
                      //   id="phoneNumber"
                      //   className={`max-w-56 ${errors.address && "border-red-500"}`}
                      //   value={value}
                      //   onChange={onChange}
                      //   onBlur={onBlur}
                      // />
                      <Select
                        value={value}
                        onValueChange={(val) => onChange(val)} // Update form state
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tbilisi">Tbilisi</SelectItem>
                          <SelectItem value="kutaisi">Kutaisi</SelectItem>
                          <SelectItem value="batumi">Batumi</SelectItem>
                        </SelectContent>
                      </Select>
                    );
                  }}
                />
                {errors.address && (
                  <div className="mt-1 max-w-56 text-right text-red-700">
                    {errors?.address.message}
                  </div>
                )}
              </div>
            )}
          </div>
          <Button
            type="submit"
            className="w-full"
            onClick={handleSubmit(onSubmit)}
            disabled={!toggleEdit}
          >
            {t("profile-page.edit-button")}
          </Button>
          <Button
            type="button"
            className="w-full bg-red-700 hover:bg-red-900"
            onClick={handleLogOut}
          >
            {t("profile-page.sign-out-button")}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;
