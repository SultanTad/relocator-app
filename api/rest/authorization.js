import makeRequest from "../makeRequest.js";

export const login = (data) => {
  return makeRequest({
    url: "api/auth/local",
    method: "POST",
    data,
  });
};
