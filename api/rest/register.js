import makeRequest from "../makeRequest.js";

export const register = (data) => {
  return makeRequest({
    url: "/api/auth/local/register",
    method: "POST",
    data,
  });
};
