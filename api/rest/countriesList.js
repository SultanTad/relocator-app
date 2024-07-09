import makeRequest from "~/api/makeRequest.js";

export const getCountriesList = () => {
  return makeRequest({
    url: "https://hwrdfvfgtynrhkzseknp.supabase.co/rest/v1/countries?",
    method: "GET",
  });
};
