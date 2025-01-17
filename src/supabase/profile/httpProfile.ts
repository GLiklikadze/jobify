import { supabase } from "@/supabase/supabaseClient";
import { profilePayload } from "./httpProfile.types";

export const fillProfileInfo = async (payload: profilePayload) => {
  try {
    let logoUrl;
    if (payload?.logo_file) {
      if (payload?.logo_file) {
        // Attempt to upload the file to Supabase storage
        const imageRes = await supabase.storage
          .from("user_logo")
          .upload(payload.logo_file.name, payload.logo_file);

        if (imageRes.error) {
          throw new Error(`Image upload failed: ${imageRes.error.message}`);
        }

        // If upload is successful, get the file path
        logoUrl = imageRes.data.fullPath;
      }
    }
    const upsertData = {
      company_name: payload?.company_name,
      phone_number: payload?.phone_number,
      address: payload?.address,
      id: payload?.id,
      ...(logoUrl && { logo_url: logoUrl }),
    };

    const { data, error } = await supabase
      .from("profiles")
      .upsert(upsertData)
      .throwOnError();
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (err) {
    console.error("Error during updating profile info:", err);
    throw err;
  }
};

export const getProfileList = async () => {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select(`*, vacancies(*)`)
      .throwOnError();
    if (error) {
      throw new Error(error.message);
    }
    console.log(data);
    return data;
  } catch (err) {
    console.error("Error during get profile list:", err);
    throw err;
  }
};
export const getFilteredProfileList = async (searchText: string) => {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select(`*, vacancies(*)`)
      .ilike("company_name", `%${searchText}%`)
      .throwOnError();
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (err) {
    console.error("Error during get profile list:", err);
    throw err;
  }
};

export const getProfileInfo = async (id: string) => {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", id)
      .single();
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (err) {
    console.error("Error during get profile info:", err);
    throw err;
  }
};
