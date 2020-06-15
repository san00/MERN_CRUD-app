import axios from "axios";

export const getDatabaseItems = async (setVacancy) => {
  const response = await axios.get("/api/items");
  setVacancy(response.data);
};

// default export for mocking convenience
export default {
  getDatabaseItems,
};
