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

export const getSingleVacancy = async (id: string) => {
  try {
    const { data, error } = await supabase
      .from("vacancies")
      .select("*")
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
