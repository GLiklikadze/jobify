import { supabase } from "../supabaseClient";
import { FavoriteHttpProps } from "./httpFavorites.types";

export const getFavoriteVacancies = async (user_id: string) => {
  try {
    const { data, error } = await supabase
      .from("favorites")
      .select("*, vacancies(*), profiles(*)")
      .eq("user_id", user_id)
      .throwOnError();
    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching favorite vacancies:", error);
    throw error;
  }
};

export const addToFavorites = async ({
  vacancyId,
  profileId,
}: FavoriteHttpProps) => {
  try {
    const { data, error } = await supabase
      .from("favorites")
      .insert([{ user_id: profileId, vacancy_id: vacancyId }]);
    if (error) {
      console.error("Error adding to favorites:", error);
      return null;
    }

    return data;
  } catch (err) {
    console.error("Error adding favorite vacancies:", err);
    throw err;
  }
};

export async function removeFromFavorites({
  vacancyId,
  profileId,
}: FavoriteHttpProps) {
  try {
    const { data, error } = await supabase
      .from("favorites")
      .delete()
      .match({ user_id: profileId, vacancy_id: vacancyId });

    if (error) {
      console.error("Error removing from favorites:", error);
      return null;
    }
    return data;
  } catch (err) {
    console.error("Error adding favorite vacancies:", err);
    throw err;
  }
}
