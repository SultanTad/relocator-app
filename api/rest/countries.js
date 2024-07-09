import makeRequest from "~/api/makeRequest.js";

export const getCountries = (name) => {
  return makeRequest({
    url: "http://45.153.71.151/api/countries",
    params: {
      "filters[name]": name,

    },
    method: "GET",
  });
};
