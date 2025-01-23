import { z } from "zod";

export const ProfileFormSchema = z.object({
  logo_file: z.custom<File>((file) => {
    if (!file) return false;
    const validTypes = ["image/jpeg", "image/png", "image/gif"];
    const isValidType = validTypes.includes(file.type);
    return isValidType;
  }, "Invalid File. Must be an image (JPEG, PNG, GIF)"),

  company_name: z
    .string()
    .nonempty({ message: "full-name-en-required-error" })
    .min(6, { message: "full-name-en-minLength-error" })
    .max(25, { message: "full-name-en-maxLength-error" }),

  phone_number: z
    .string()
    .nonempty({ message: "phone-number-required-error" })
    .min(6, { message: "phone-number-minLength-error" })
    .max(25, { message: "phone-number-minLength-error" }),

  address: z.string().nonempty({ message: "address-required-error" }),
});
