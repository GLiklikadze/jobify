export const getSortBoolean = (sortOrder: "asc" | "desc") => {
  if (sortOrder === "asc") {
    return true;
  } else {
    return false;
  }
};
