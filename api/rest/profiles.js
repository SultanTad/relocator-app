import makeRequest from "~/api/makeRequest.js";

export const getUserData = (id) => {
  return makeRequest({
    url: "http://45.153.71.151/api/users/me",
    method: "GET",
  });
};

export const patchUserName = (id, data) => {
  return makeRequest({
    url: "https://hwrdfvfgtynrhkzseknp.supabase.co/rest/v1/profiles",
    method: "PATCH",
    params: { id: `eq.${id}` },
    data,
  });
};
