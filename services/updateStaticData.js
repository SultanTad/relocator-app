import { useStaticDataStore } from "~/store/staticData.js";
import { getCountriesList } from "~/api/rest/countriesList.js";

export const updateStaticData = async () => {
  const staticData = useStaticDataStore();
  const res = await getCountriesList();
  staticData.countries = res.data;
};
