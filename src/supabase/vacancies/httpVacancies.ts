import { supabase } from "../supabaseClient";

export const createVacancies = async ({ formValues }) => {
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
