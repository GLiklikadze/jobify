import { supabase } from "../supabaseClient";
type createVacancies = {
  title: string | null;
  companyName: string | null;
  location: string | null;
  jobType: string | null;
  salaryMin: string | null;
  salaryMax: string | null;
  description: string | null;
  requirements: string | null;
  contactEmail: string | null;
  qualifications: string | null;
  benefits: string | null;
  responsibilities: string | null;
};
export const createVacancies = async ({
  formValues,
}: {
  formValues: createVacancies;
}) => {
  console.log(formValues);
  try {
    const { data, error } = await supabase.from("vacancies").insert(formValues);

    if (error) {
      throw new Error(`Vacancies insertion failed: ${error.message}`);
    }
    console.log("Created Vacancy", data);
  } catch (err) {
    console.error("Error during create vacancy:", err);
    throw err;
  }
};

export const getVacancies = async () => {
  try {
    const { data, error } = await supabase
      .from("vacancies")
      .select("*")
      .throwOnError();
    if (error) {
      throw new Error(`vacancies fetch failed: ${error.message}`);
    }
    return data;
  } catch (err) {
    console.error("Error during fetching vacancies:", err);
    throw err;
  }
};
export const getMyVacancies = async (user_id: string) => {
  try {
    const { data, error } = await supabase
      .from("vacancies")
      .select("*")
      .eq("user_id", user_id)
      .throwOnError();
    if (error) {
      throw new Error(`vacancies fetch failed: ${error.message}`);
    }
    return data;
  } catch (err) {
    console.error("Error during fetching vacancies:", err);
    throw err;
  }
};

export const getFilteredVacancies = async (
  debouncedVacancyText: string,
  debouncedCompanyText: string,
) => {
  try {
    const { data, error } = await supabase
      .from("vacancies")
      .select(`*, profiles(*)`)
      .ilike("title", `%${debouncedVacancyText}%`)
      .ilike("companyName", `%${debouncedCompanyText}%`)
      .throwOnError();
    if (error) {
      throw new Error(`filtered vacancies fetch failed: ${error.message}`);
    }
    return data;
  } catch (err) {
    console.error("Error during fetching filtered vacancies:", err);
    throw err;
  }
};

export const getSingleVacancy = async (id: string) => {
  try {
    const { data, error } = await supabase
      .from("vacancies")
      .select(`*, profiles(*)`)
      .eq("id", id)
      .single()
      .throwOnError();
    if (error) {
      throw new Error(`single vacancy fetch failed: ${error.message}`);
    }
    return data;
  } catch (err) {
    console.error("Single vacancy fetch failed:", err);
    throw err;
  }
};
export const EditVacancy = async ({
  formValues,
  id,
}: {
  formValues: createVacancies;
  id: string;
}) => {
  try {
    const { data, error } = await supabase
      .from("vacancies")
      .update({
        title: formValues?.title,
        companyName: formValues?.companyName,
        location: formValues?.location,
        jobType: formValues?.jobType,
        salaryMin: formValues?.salaryMin,
        salaryMax: formValues?.salaryMin,
        description: formValues?.description,
        requirements: formValues?.requirements,
        contactEmail: formValues?.contactEmail,
        qualifications: formValues?.qualifications,
        benefits: formValues?.benefits,
        responsibilities: formValues?.responsibilities,
      })
      .eq("id", id)
      .throwOnError();
    if (error) {
      throw new Error(`Blog update failed: ${error.message}`);
    }
    return data;
  } catch (err) {
    console.error("Error during update vacancy:", err);
    throw err;
  }
};

export const deleteVacancy = async (id: number) => {
  try {
    const { data } = await supabase
      .from("vacancies")
      .delete()
      .eq("id", id)
      .throwOnError();
    return data;
  } catch (err) {
    console.error("Error deletng vacancy", err);
    throw err;
  }
};
